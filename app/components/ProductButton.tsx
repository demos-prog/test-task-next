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
    <button>
      <Link href={`/products/${id}`}>{title}</Link>
    </button>
  );
}
