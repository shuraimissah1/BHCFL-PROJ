"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import type { Recording, LiveSession } from "../../types/classes";

export default function ClassesBrowser() {
  const [recordings, setRecordings] = useState<Recording[]>([]);
  const [liveSessions, setLiveSessions] = useState<LiveSession[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // RSVP tokens stored per sessionId (persisted to localStorage as `rsvp:${id}`)
  const [rsvpTokens, setRsvpTokens] = useState<Record<string, string>>({});
  const [rsvpOpen, setRsvpOpen] = useState<string | null>(null);
  const [rsvpName, setRsvpName] = useState("");
  const [rsvpEmail, setRsvpEmail] = useState("");
  const [rsvpLoading, setRsvpLoading] = useState(false);
  const [rsvpMessage, setRsvpMessage] = useState<string | null>(null);

  const [isOpen, setIsOpen] = useState(false);
  const [activeRecording, setActiveRecording] = useState<Recording | null>(null);
  const [now, setNow] = useState<Date>(new Date());

  console.log(recordings);

  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 15_000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    let mounted = true;
    setLoading(true);

    async function load() {
      try {
        const [recResSettled, liveResSettled] = await Promise.allSettled([
          fetch("/api/classes/recordings"),
          fetch("/api/classes/live"),
        ]);

        if (!mounted) return;

        // recordings
        if (recResSettled.status === "fulfilled") {
          const recRes = recResSettled.value;
          if (recRes.ok) {
            const recData = await recRes.json();
            setRecordings(recData || []);
          } else {
            console.warn("recordings fetch failed with status", recRes.status);
            setRecordings([]);
          }
        } else {
          console.warn("recordings fetch error", recResSettled.reason);
          setRecordings([]);
        }

        // live sessions
        if (liveResSettled.status === "fulfilled") {
          const liveRes = liveResSettled.value;
          if (liveRes.ok) {
            const liveData = await liveRes.json();
            setLiveSessions(liveData || []);
            // load any saved RSVP tokens from localStorage
            try {
              const tokens: Record<string, string> = {};
              (liveData || []).forEach((s: LiveSession) => {
                const t = localStorage.getItem(`rsvp:${s.id}`);
                if (t) tokens[s.id] = t;
              });
              setRsvpTokens(tokens);
            } catch (e) {
              // ignore (localStorage not available in some environments)
            }
          } else {
            console.warn("live fetch failed with status", liveRes.status);
            setLiveSessions([]);
          }
        } else {
          console.warn("live fetch error", liveResSettled.reason);
          setLiveSessions([]);
        }

        setError(null);
      } catch (err) {
        console.error(err);
        if (mounted) setError("Failed to load classes data");
      } finally {
        if (mounted) setLoading(false);
      }
    }

    load();

    return () => {
      mounted = false;
    };
  }, []);

  function openRecording(r: Recording) {
    // Ensure we embed YouTube URLs correctly in an iframe. Convert common YouTube
    // watch/short URLs to the /embed/ form so they render inside the player.
    function toEmbedUrl(url?: string) {
      if (!url) return url;
      try {
        const u = new URL(url);
        // youtu.be short URL
        if (u.hostname.includes('youtu.be')) {
          const id = u.pathname.replace(/^\//, '');
          return `https://www.youtube.com/embed/${id}`;
        }
        // youtube watch url
        if (u.hostname.includes('youtube.com')) {
          // if it's already an embed URL, return as-is
          if (u.pathname.startsWith('/embed/')) return url;
          const v = u.searchParams.get('v');
          if (v) return `https://www.youtube.com/embed/${v}`;
        }
        // fallback: return original
        return url;
      } catch (e) {
        return url;
      }
    }

    const embedUrl = toEmbedUrl(r.youtubeUrl);
    setActiveRecording({ ...r, youtubeUrl: embedUrl });
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    setActiveRecording(null);
  }

  function formatTime(iso?: string) {
    if (!iso) return "";
    try {
      const d = new Date(iso);
      return d.toLocaleString();
    } catch (e) {
      return iso;
    }
  }

  return (
    <section className="max-w-7xl mx-auto px-6 pb-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Recorded Videos */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h3 className="text-2xl font-bold mb-4">Recorded Classes</h3>
          <p className="text-gray-600 mb-6">Browse previously saved lessons you can watch anytime.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {recordings.map((r) => (
              <div key={r.id} className="border rounded-lg overflow-hidden">
                <div className="relative w-full h-40 bg-gray-100">
                  {r.thumbnail ? (
                    // eslint-disable-next-line jsx-a11y/alt-text
                    <Image src={r.thumbnail} alt={r.title} fill className="object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-sm text-gray-500">No thumbnail</div>
                  )}
                </div>
                <div className="p-3">
                  <h4 className="font-semibold">{r.title}</h4>
                  {r.duration && <p className="text-sm text-gray-500 mt-1">{r.duration}</p>}
                  <div className="mt-3 flex items-center gap-2">
                    <button
                      onClick={() => openRecording(r)}
                      className="bg-black text-white px-3 py-1 rounded text-sm"
                    >
                      Watch
                    </button>
                    <a
                      href={r.youtubeUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-blue-600 underline"
                    >
                      Open in new tab
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {loading && <div className="mt-4 text-sm text-gray-500">Loading...</div>}
          {error && <div className="mt-4 text-sm text-red-600">{error}</div>}
          {!loading && recordings.length === 0 && (
            <div className="mt-4 text-sm text-gray-600">No recordings available yet.</div>
          )}
        </div>

        {/* Live Sessions */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h3 className="text-2xl font-bold mb-4">Live Sessions</h3>
          <p className="text-gray-600 mb-6">See live classes and join when the session is active.</p>

          <ul className="space-y-4">
            {liveSessions.map((s) => {
              const start = new Date(s.start);
              const end = new Date(s.end);
              const isLive = now >= start && now <= end;
              const isUpcoming = now < start;

              return (
                <li key={s.id} className="border rounded-lg p-3">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="font-semibold">{s.title}</div>
                      <div className="text-sm text-gray-500 mt-1">{formatTime(s.start)} — {formatTime(s.end)}</div>
                      {s.description && <p className="text-sm text-gray-600 mt-2">{s.description}</p>}
                    </div>
                    <div className="flex flex-col items-end gap-2">
                        {isLive ? (
                          rsvpTokens[s.id] ? (
                            <a
                              href={`/api/classes/live/${s.id}/attend?token=${encodeURIComponent(rsvpTokens[s.id])}`}
                              target="_blank"
                              rel="noreferrer"
                              className="bg-[#B62A0A] text-white px-3 py-1 rounded"
                            >
                              Join Now
                            </a>
                          ) : (
                            <button
                              onClick={() => {
                                setRsvpOpen(s.id);
                                setRsvpMessage(null);
                              }}
                              className="bg-[#B62A0A] text-white px-3 py-1 rounded"
                            >
                              RSVP to Join
                            </button>
                          )
                        ) : isUpcoming ? (
                          <div className="flex flex-col items-end gap-2">
                            <div className="text-sm text-gray-700">Starts {formatTime(s.start)}</div>
                            <button
                              onClick={() => {
                                setRsvpOpen(s.id);
                                setRsvpMessage(null);
                              }}
                              className="text-sm text-[#B62A0A] underline"
                            >
                              RSVP
                            </button>
                          </div>
                        ) : (
                          <div className="text-sm text-gray-500">Ended</div>
                        )}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>

          {!loading && liveSessions.length === 0 && (
            <div className="mt-4 text-sm text-gray-600">No live sessions scheduled.</div>
          )}
        </div>
      </div>

      {/* Modal for playing a recording */}
      {isOpen && activeRecording && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="w-full max-w-3xl bg-white rounded-xl overflow-hidden">
            <div className="relative pt-[56.25%]">
              <iframe
                src={activeRecording.youtubeUrl}
                title={activeRecording.title}
                className="absolute inset-0 w-full h-full"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="p-4 flex items-center justify-between">
              <div>
                <div className="font-semibold">{activeRecording.title}</div>
                {activeRecording.duration && <div className="text-sm text-gray-500">{activeRecording.duration}</div>}
              </div>
              <div className="flex items-center gap-2">
                <a href={activeRecording.youtubeUrl} target="_blank" rel="noreferrer" className="text-sm underline">Open in YouTube</a>
                <button onClick={closeModal} className="bg-gray-200 px-3 py-1 rounded">Close</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* RSVP Modal */}
      {rsvpOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="w-full max-w-md bg-white rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-3">RSVP for this session</h3>
            <p className="text-sm text-gray-600 mb-4">Enter your name and email to receive an access link to join this session.</p>

            <div className="space-y-3">
              <div>
                <label className="block text-xs text-gray-700">Name (optional)</label>
                <input value={rsvpName} onChange={(e) => setRsvpName(e.target.value)} className="mt-1 w-full border rounded px-3 py-2" />
              </div>
              <div>
                <label className="block text-xs text-gray-700">Email</label>
                <input value={rsvpEmail} onChange={(e) => setRsvpEmail(e.target.value)} className="mt-1 w-full border rounded px-3 py-2" />
              </div>

              {rsvpMessage && <div className="text-sm text-green-600">{rsvpMessage}</div>}

              <div className="flex items-center justify-end gap-3">
                <button onClick={() => { setRsvpOpen(null); setRsvpMessage(null); }} className="px-3 py-2 rounded border">Cancel</button>
                <button
                  onClick={async () => {
                    if (!rsvpEmail) { setRsvpMessage("Please enter your email."); return; }
                    try {
                      setRsvpLoading(true);
                      const res = await fetch(`/api/classes/live/${rsvpOpen}/rsvp`, {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ name: rsvpName, email: rsvpEmail }),
                      });
                      const data = await res.json();
                      if (!res.ok) {
                        setRsvpMessage(data?.error || "Failed to RSVP");
                      } else {
                        // If server returned an attendLink (development fallback), extract token and persist it.
                        if (data?.attendLink) {
                          try {
                            const u = new URL(data.attendLink);
                            const t = u.searchParams.get("token");
                            if (t) {
                              try { localStorage.setItem(`rsvp:${rsvpOpen}`, t); } catch (e) {}
                              setRsvpTokens((prev) => ({ ...prev, [rsvpOpen]: t }));
                            }
                          } catch (e) {
                            // ignore
                          }
                          setRsvpMessage("RSVP successful. (Development) attend link returned.");
                        } else {
                          setRsvpMessage("RSVP successful. Check your email for the join link.");
                        }
                      }
                    } catch (err) {
                      console.error(err);
                      setRsvpMessage("Failed to RSVP");
                    } finally {
                      setRsvpLoading(false);
                    }
                  }}
                  className="bg-[#B62A0A] text-white px-4 py-2 rounded"
                >
                  {rsvpLoading ? "Submitting..." : "RSVP"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
