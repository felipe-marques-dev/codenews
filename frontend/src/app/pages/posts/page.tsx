"use client";


import { GetServerSideProps } from "next";
import { Post } from "@/types/Post";
import axios from "axios";
import { client } from "@/services/client";
import { useEffect, useState } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

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

    if(loading){
        return <p> Loading...</p>
    }

    return (
        <div className="container mx-auto py-8">
          <h1 className="text-3xl font-bold mb-8 ml-2 mr-3">Latest Blog Posts</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Card key={post.id} className="flex flex-col">
                <CardHeader>
                  <h2 className="text-xl font-semibold">{post.title}</h2>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{post.content}</p>
                </CardContent>
                <CardFooter className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Avatar>
                      <AvatarFallback>{post.authorId}</AvatarFallback>
                    </Avatar>
                    <span className="text-sm font-medium">{post.author.name}</span>
                  </div>
                  { /* <span className="text-sm text-muted-foreground">{post.date}</span> */}
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
    ) 
};

