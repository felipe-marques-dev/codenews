"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import "../app/globals.css";

interface Source {
    id: string | null;
    name: string;
}

interface Article {
    source: Source;
    author: string | null;
    title: string;
    description: string;
    url: string;
    urlToImage: string | null;
    publishedAt: string;
    content: string;
}

interface NewsApiResponse {
    status: string;
    totalResults: number;
    articles: Article[];
}

export default function LastNews() {
    const [posts, setPosts] = useState<Article[]>([]);
    const [loading, setLoading] = useState(true);
    
    const api_key = process.env.NEXT_PUBLIC_API_KEY;

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const { data } = await axios.get<NewsApiResponse>(`https://newsapi.org/v2/top-headlines?country=us&category=technology&pageSize=2&apiKey=${api_key}`);
                setPosts(data.articles); // Acesse os artigos corretamente
                console.log(data.articles); // Log apenas os artigos
                setLoading(false);
            } catch (error) {
                console.error('Erro fetching posts:', error);
                setLoading(false);
            }
        };
        fetchPosts();
    }, []);

    if (loading) {
        return <div>Loading...</div>; // Opcional: exiba um indicador de carregamento
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-3">
            {posts.map((post) => (
                <Card key={post.source.id} className="flex bg-neutral-950 flex-col min-h-full max-h-full "
                    style={{
                        cursor: 'pointer',
                        borderRadius: '8px',

                    }}
                >
                    <div className="relative w-full p-4 pb-0 bg-cbackground">
                        <img
                            src={post.urlToImage || '/default-image.jpg'} // Use uma imagem padrão se não houver
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
                    <CardContent className="flex-grow lg:pb-0 mb-3">
                        <p className="text-muted-foreground text-lg text-justify">{post.description}</p>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};
