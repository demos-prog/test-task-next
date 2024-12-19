"use client";
import Link from "next/link";

export default function ProductButton({ id }: { id: number }) {
  return (
    <button>
      <Link href={`/products/${id}`}>view details</Link>
    </button>
  );
}
