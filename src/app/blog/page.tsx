import Link from "next/link";
import { type Blog } from "./columns";
async function getData(): Promise<Blog[]> {
  try {
    const response = await fetch("https://api.vercel.app/blog", {
      next: { revalidate: 10 },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.status}`);
    }

    const posts: Blog[] = await response.json();
    return Array.isArray(posts) ? posts : [];
  } catch (error) {
    console.error("Error fetching blog data:", error);
    return [];
  }
}

export default async function DemoPage() {
  const posts = await getData();

  return (
    // <div className="container mx-auto py-10">
    //   <DataTable columns={columns} data={data} />
    // </div>
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <Link href={`/blog/${post.id}`}> {post.title} </Link>
          <p>{post.content}</p>
          <p>Author: {post.author}</p>
          <p>Date: {post.date}</p>
          <p>Category: {post.category}</p>
        </li>
      ))}
    </ul>
  );
}
