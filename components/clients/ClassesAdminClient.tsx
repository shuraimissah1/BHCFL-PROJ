"use client";
import dynamic from "next/dynamic";

// dynamic import with ssr: false must live in a Client Component
const ClassesAdmin = dynamic(() => import("../admin/ClassesAdmin"), { ssr: false });

export default function ClassesAdminClient() {
  return <ClassesAdmin />;
}
