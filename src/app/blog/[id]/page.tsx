import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { Blog } from "../columns";

async function getPost(id: string): Promise<Blog> {
  try {
    const response = await fetch(`https://api.vercel.app/blog/${id}`, {
      next: { revalidate: 10 },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.status}`);
    }

    const post: Blog = await response.json();
    return post;
  } catch (error) {
    console.error("Error fetching blog data:", error);
    throw error;
  }
}

export default async function Page(props: PageProps<"/blog/[id]">) {
  const { id } = await props.params;
  const post: Blog = await getPost(id);
  return (
    <div>
      <h1>Blog post ID: {id}</h1>
      <p>{post?.title}</p>
      <p>{post?.content}</p>
      <p>Author: {post?.author}</p>
      <p>Date: {post?.date}</p>
      <p>Category: {post?.category}</p>
      <Button>Blog</Button>
      <Link href="/blog">Back to Blog List</Link>
    </div>
  );
}
