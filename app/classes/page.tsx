import ClassesBrowserClient from "../../components/clients/ClassesBrowserClient";

export default function ClassesPage() {
  return (
    <main className="pt-28 bg-[#F4EFE9]">
      <section className="max-w-7xl mx-auto px-6 pb-8">
        <h1 className="text-3xl font-bold my-6">Classes & Recordings</h1>
        <p className="text-gray-600 mb-6">Browse recorded lessons or join live classes when available.</p>
      </section>

      <ClassesBrowserClient />
    </main>
  );
}
