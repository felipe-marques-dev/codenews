"use client";

import Image from "next/image"
import { GetServerSideProps } from "next";
import { Post } from "@/types/Post";
import axios from "axios";
import { client } from "@/services/client";
import { useEffect, useState } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import "../../globals.css";
import BlogPostsLoading from "@/components/ui/postsLoading";

interface PostProps{
    posts: Post[];
}

export default function PostsPage (){
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const { data: posts} = await client.get<Post[]>('/post/allpost');
                setPosts(posts)
                setLoading(false)
                
            }catch (error) {
                console.error('Erro fetching posts:', error);
                setLoading(false)
            }
        }
        fetchPosts();
    }, []);

    
      return (
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-3">
            {posts.map((post) => (
              <Card key={post.id} className="flex flex-col min-h-full max-h-full m-3 bg-white/15 backdrop-blur-md"
                style={{
                    cursor: 'pointer',
                    borderRadius: '8px',
                }}
              >
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
                  <h2 className="text-2xl font-semibold text-justify">{post.title}</h2>
                </CardHeader>
                <CardContent className="flex-grow lg:pb-0">
                  <p className="text-muted-foreground text-lg text-justify">{post.content}</p>
                </CardContent>
                <CardFooter className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Avatar>
                      <AvatarFallback></AvatarFallback>
                    </Avatar>
                    <span className="text-md font-medium">{post.author.name}</span>
                  </div>
                  { /* <span className="text-sm text-muted-foreground">{post.date}</span> */}
                </CardFooter>
              </Card>
            ))}
          </div>
    ) 
};

