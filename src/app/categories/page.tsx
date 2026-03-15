import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1>Categories List</h1>

      <ul>
        <li>
            <Link href="/categories/technology">Technology</Link>
        </li>
        <li>
            <Link href="/categories/lifestyle">Lifestyle</Link>
        </li>
        <li>
            <Link href="/categories/health">Health</Link>
        </li>
      </ul>
    </div>
  );
}