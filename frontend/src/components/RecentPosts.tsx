"use client";

import { Post } from "@/types/Post";
import { client } from "@/services/client";
import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import "../app/globals.css";
import { Button } from "./ui/button";
import { ArrowRightIcon } from "lucide-react";

export default function RecentPosts (){
    const [posts, setPosts] = useState<Post[]>([]);
    

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const { data: posts} = await client.get<Post[]>('/post/allpost');
                setPosts(posts)
                
                
            }catch (error) {
                console.error('Erro fetching posts:', error);
                
            }
        }
        fetchPosts();
    }, []);

    
    return (
        <section className="w-full py-12 md:py-24 lg:py-25 bg-neutral-950 flex justify-center">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 ">Recent Posts</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <Card key={post.id} className="bg-slate-800" style={{borderRadius: '8px'}}>
                    <div className="relative w-full h-62 p-4 pb-0 bg-cbackground">
                        <img
                            src={`http://localhost:8000/${post.imageUrl}`}
                            style={{
                            maxHeight: '21.5rem',
                            height: '21.5rem',
                            minHeight: '21.5rem',
                            maxWidth: '100vw',
                            width: '100%',
                            borderRadius: '8px',
                            }}
                            alt={`Cover image for ${post.title}`}
                            className="object-cover"
                        />
                    </div>
                  <CardHeader>
                    <CardTitle>{post.title}</CardTitle>
                    <CardDescription>Posted on September , 2023</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>{post.content}</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost">
                      Read More
                      <ArrowRightIcon className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )
};

