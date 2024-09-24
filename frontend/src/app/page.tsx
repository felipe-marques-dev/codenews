import PostsPage from "./pages/posts/page";

export default function Page() {
  return (
    <div className="container mx-auto py-8 m-3 lg:w-1/2">
          <h1 className="text-5xl font-bold mb-8 m-4">Latest Blog Posts</h1>
          <PostsPage />
    </div>
  ); 
}