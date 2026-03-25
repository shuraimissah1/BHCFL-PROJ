"use client";
import dynamic from "next/dynamic";

// dynamic import with ssr: false must live in a Client Component
const ClassesBrowser = dynamic(() => import("../sections/ClassesBrowser"), { ssr: false });

export default function ClassesBrowserClient() {
  return <ClassesBrowser />;
}
