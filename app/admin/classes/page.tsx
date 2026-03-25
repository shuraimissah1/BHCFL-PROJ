import ClassesAdminClient from "../../../components/clients/ClassesAdminClient";

export default function AdminClassesPage() {
  return (
    <main className="pt-28 bg-[#f9fafb] min-h-screen">
      <section className="max-w-5xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">Admin — Classes</h1>
        <p className="text-sm text-gray-600 mb-6">Manage recorded videos and live sessions.</p>
      </section>

      <ClassesAdminClient />
    </main>
  );
}
