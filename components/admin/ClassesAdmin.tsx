"use client";
import { useEffect, useState } from "react";

type Recording = {
  id: string;
  title: string;
  youtubeUrl: string;
  thumbnail?: string;
  duration?: string;
  description?: string | null;
};

type LiveSession = {
  id: string;
  title: string;
  start: string;
  end: string;
  joinUrl?: string | null;
  description?: string | null;
};

export default function ClassesAdmin() {
  const [recordings, setRecordings] = useState<Recording[]>([]);
  const [sessions, setSessions] = useState<LiveSession[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [recForm, setRecForm] = useState({ title: "", youtubeUrl: "", thumbnail: "", duration: "", description: "" });
  const [sessForm, setSessForm] = useState({ title: "", start: "", end: "", joinUrl: "", description: "" });
  const [editingRecId, setEditingRecId] = useState<string | null>(null);
  const [editingSessId, setEditingSessId] = useState<string | null>(null);

  useEffect(() => {
    load();
  }, []);

  async function load() {
    setLoading(true);
    try {
      const [rRes, sRes] = await Promise.all([fetch("/api/classes/recordings"), fetch("/api/classes/live")]);
      const rData = await rRes.json();
      const sData = await sRes.json();
      setRecordings(rData || []);
      setSessions(sData || []);
    } catch (err) {
      console.error(err);
      setError("Failed to load");
    } finally {
      setLoading(false);
    }
  }

  function getToken() {
    return localStorage.getItem("admin:token") || "";
  }

  async function createRecording(e: React.FormEvent) {
    e.preventDefault();
    try {
      const token = getToken();
      const headers: Record<string, string> = { "Content-Type": "application/json" };
      if (token) headers["x-admin-token"] = token;

      let res;
      if (editingRecId) {
        res = await fetch(`/api/classes/recordings/${editingRecId}`, {
          method: "PUT",
          headers,
          body: JSON.stringify(recForm),
        });
      } else {
        res = await fetch("/api/classes/recordings", {
          method: "POST",
          headers,
          body: JSON.stringify(recForm),
        });
      }
      if (!res.ok) throw new Error("create failed");
      setRecForm({ title: "", youtubeUrl: "", thumbnail: "", duration: "", description: "" });
      setEditingRecId(null);
      await load();
    } catch (err) {
      console.error(err);
      setError("Failed to create recording");
    }
  }

  async function createSession(e: React.FormEvent) {
    e.preventDefault();
    try {
      const token = getToken();
      const headers: Record<string, string> = { "Content-Type": "application/json" };
      if (token) headers["x-admin-token"] = token;

      let res;
      if (editingSessId) {
        res = await fetch(`/api/classes/live/${editingSessId}`, {
          method: "PUT",
          headers,
          body: JSON.stringify(sessForm),
        });
      } else {
        res = await fetch("/api/classes/live", {
          method: "POST",
          headers,
          body: JSON.stringify(sessForm),
        });
      }
      if (!res.ok) throw new Error("create failed");
      setSessForm({ title: "", start: "", end: "", joinUrl: "", description: "" });
      setEditingSessId(null);
      await load();
    } catch (err) {
      console.error(err);
      setError("Failed to create session");
    }
  }

  async function removeRecording(id: string) {
    if (!confirm("Delete recording?")) return;
    try {
      const token = getToken();
      const headers: Record<string, string> = {};
      if (token) headers["x-admin-token"] = token;
      const res = await fetch(`/api/classes/recordings/${id}`, { method: "DELETE", headers });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        const msg = data?.error || `Delete failed (${res.status})`;
        setError(msg);
        return;
      }
      await load();
    } catch (err) {
      console.error(err);
      setError("Failed to delete recording");
    }
  }

  async function removeSession(id: string) {
    if (!confirm("Delete session?")) return;
    try {
      const token = getToken();
      const headers: Record<string, string> = {};
      if (token) headers["x-admin-token"] = token;
      const res = await fetch(`/api/classes/live/${id}`, { method: "DELETE", headers });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        const msg = data?.error || `Delete failed (${res.status})`;
        setError(msg);
        return;
      }
      await load();
    } catch (err) {
      console.error(err);
      setError("Failed to delete session");
    }
  }

  return (
    <section className="max-w-5xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Classes Admin</h2>
      <p className="text-sm text-gray-600 mb-4">Store admin token in localStorage under <code>admin:token</code>. This UI will send it as <code>x-admin-token</code>.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <section className="p-4 border rounded">
          <h3 className="font-semibold mb-2">Add / Edit Recording</h3>
          <form onSubmit={createRecording} className="space-y-2">
            <input className="w-full p-2 border rounded" placeholder="Title" value={recForm.title} onChange={(e) => setRecForm((r) => ({ ...r, title: e.target.value }))} />
            <input className="w-full p-2 border rounded" placeholder="YouTube embed URL" value={recForm.youtubeUrl} onChange={(e) => setRecForm((r) => ({ ...r, youtubeUrl: e.target.value }))} />
            <input className="w-full p-2 border rounded" placeholder="Thumbnail URL" value={recForm.thumbnail} onChange={(e) => setRecForm((r) => ({ ...r, thumbnail: e.target.value }))} />
            <input className="w-full p-2 border rounded" placeholder="Duration" value={recForm.duration} onChange={(e) => setRecForm((r) => ({ ...r, duration: e.target.value }))} />
            <textarea className="w-full p-2 border rounded" placeholder="Description" value={recForm.description} onChange={(e) => setRecForm((r) => ({ ...r, description: e.target.value }))} />
            <div>
              <button className="bg-black text-white px-3 py-1 rounded">{editingRecId ? "Save Recording" : "Create Recording"}</button>
            </div>
          </form>
        </section>

        <section className="p-4 border rounded">
          <h3 className="font-semibold mb-2">Add / Edit Live Session</h3>
          <form onSubmit={createSession} className="space-y-2">
            <input className="w-full p-2 border rounded" placeholder="Title" value={sessForm.title} onChange={(e) => setSessForm((s) => ({ ...s, title: e.target.value }))} />
            <input type="datetime-local" className="w-full p-2 border rounded" placeholder="Start" value={sessForm.start} onChange={(e) => setSessForm((s) => ({ ...s, start: e.target.value }))} />
            <input type="datetime-local" className="w-full p-2 border rounded" placeholder="End" value={sessForm.end} onChange={(e) => setSessForm((s) => ({ ...s, end: e.target.value }))} />
            <input className="w-full p-2 border rounded" placeholder="Join URL" value={sessForm.joinUrl} onChange={(e) => setSessForm((s) => ({ ...s, joinUrl: e.target.value }))} />
            <textarea className="w-full p-2 border rounded" placeholder="Description" value={sessForm.description} onChange={(e) => setSessForm((s) => ({ ...s, description: e.target.value }))} />
            <div>
              <button className="bg-black text-white px-3 py-1 rounded">{editingSessId ? "Save Session" : "Create Session"}</button>
            </div>
          </form>
        </section>
      </div>

      <section className="mt-6">
        <h3 className="font-semibold mb-2">Existing Recordings</h3>
        {loading ? <div>Loading...</div> : (
          <ul className="space-y-2">
            {recordings.map((r) => (
              <li key={r.id} className="flex items-center justify-between border p-2 rounded">
                <div>
                  <div className="font-semibold">{r.title}</div>
                  <div className="text-sm text-gray-600">{r.youtubeUrl}</div>
                </div>
                <div className="flex gap-2">
                  <button onClick={() => { setRecForm({ title: r.title, youtubeUrl: r.youtubeUrl, thumbnail: r.thumbnail || "", duration: r.duration || "", description: r.description || "" }); setEditingRecId(r.id); }} className="px-2 py-1 border rounded">Edit</button>
                  <button onClick={() => removeRecording(r.id)} className="px-2 py-1 border rounded">Delete</button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="mb-6">
        <h3 className="font-semibold mb-2">Existing Live Sessions</h3>
        {loading ? <div>Loading...</div> : (
          <ul className="space-y-2">
            {sessions.map((s) => (
              <li key={s.id} className="flex items-center justify-between border p-2 rounded">
                <div>
                  <div className="font-semibold">{s.title}</div>
                  <div className="text-sm text-gray-600">{s.start} → {s.end}</div>
                </div>
                <div className="flex gap-2">
                  <button onClick={() => { setSessForm({ title: s.title, start: s.start, end: s.end, joinUrl: s.joinUrl || "", description: s.description || "" }); setEditingSessId(s.id); }} className="px-2 py-1 border rounded">Edit</button>
                  <button onClick={() => removeSession(s.id)} className="px-2 py-1 border rounded">Delete</button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>

      {error && <div className="text-sm text-red-600">{error}</div>}
    </section>
  );
}
