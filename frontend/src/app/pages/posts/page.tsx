"use client";


import { GetServerSideProps } from "next";
import { Post } from "@/types/Post";
import axios from "axios";
import { client } from "@/services/client";
import { useEffect, useState } from "react";

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

    return(
        <div>
            <h1>Posts</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <h1>{post.title}</h1>
                        <p>{post.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
    
};

