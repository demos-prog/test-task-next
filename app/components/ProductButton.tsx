"use client";
import Link from "next/link";

export default function ProductButton({
  title,
  id,
}: {
  title: string;
  id: number;
}) {
  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      <Link href={`/products/${id}`}>{title}</Link>
    </button>
  );
}
