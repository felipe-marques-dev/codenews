import CryptoPrices from "@/components/ui/cryptoPrices";
import PostsPage from "./pages/posts/page";

export default function Page() {
  return (
    <div className="w-full h-screen py-8 m-0">
      <div className="flex flex-wrap md:flex-col lg:flex-row justify-between">
        {/* Coluna da Esquerda (Preços de Criptomoedas) */}
        <div className="w-full sm:w-1/4 md:w-4/6 lg:w-1/4 mt-3 p-3 md:order-1">
          <CryptoPrices />
        </div>

        {/* Coluna Central (Posts) */}
        <div className="w-full sm:w-3/4 lg:w-1/2 mt-3 md:order-2">
          <h1 className="text-5xl font-bold p-4 ">Latest Blog Posts</h1>
          <PostsPage />
        </div>

        {/* Coluna da Direita (Preços de Criptomoedas) */}
        <div className="w-full sm:w-1/4 lg:w-1/4 mt-3 p-3 md:order-3 ">
          <CryptoPrices />
        </div>
      </div>
    </div>
  ); 
}
