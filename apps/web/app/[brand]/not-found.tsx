import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="text-lg">Brand not found.</p>
      <Link href="/existence" className="underline hover:opacity-70">
        Go to Existence
      </Link>
    </div>
  );
}
