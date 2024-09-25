import CryptoPrices from "@/components/CryptoPricess";
import LastNews from "@/components/LastNews";
import { Button } from "@/components/ui/button";
import RecentPosts from "@/components/RecentPosts";
import Footer from "@/components/Footer";

export default function Page() {

    // import Header from './header'import Footer from './footer'
   // import BlogPosts from './blog-posts'
// import NewsAndCrypto from './news-and-crypto'

  return (
        <div className="flex flex-col min-h-screen overflow-x-hidden">
          <main className="flex-1">
            <section className="w-full py-12 md:py-24 p-3 lg:py-32 xl:py-48">
              <div className="container max-w-full">
                <div className="flex flex-col items-center space-y-4 text-center">
                  <div className="space-y-2">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                      <div className="flex flex-col lg:flex-row justify-center items-center space-x-0 lg:space-x-6">
                        <span className="text-6xl font-bold bg-gradient-to-r from-blue-400 via-grey-400 to-cyan-400 bg-clip-text text-transparent">
                          Code.
                        </span>
                        <span className="text-6xl font-bold bg-gradient-to-r from-green-400 via-green-400 to-indigo-400 bg-clip-text text-transparent">
                          Crypto.
                        </span>
                        <span className="text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                          News.
                        </span>
                      </div>
                    </h1>
                    <p className="mx-auto max-w-[700px] text-gray-400 md:text-2xl dark:text-gray-400">
                      Discover the latest in tech, crypto, and more.
                    </p>
                  </div>
                  <div className="space-x-4">
                    <Button variant='default'>Latest Posts</Button>
                    <Button variant="outline">Subscribe</Button>
                  </div>
                </div>
              </div>
            </section>
            <RecentPosts />
            <section className="w-full py-12 md:py-24 lg:py-32 flex justify-center">
              <div className="container px-4 md:px-6 ">
                <div className="grid gap-6 lg:grid-cols-3">
                  <div className="lg:col-span-2">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Latest News</h2>
                    <LastNews />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Crypto Prices</h2>
                    <CryptoPrices/>
                  </div>
                </div>
              </div>
          </section>
          </main>
          <Footer />
        </div>
  )
}
    { /* <div className="w-full h-screen py-8 m-0">
      <div className='flex flex-col justify-center items-center lg:flex-row lg:justify-around'>
        <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-700 via-grey-500 to-cyan-500 bg-clip-text text-transparent">
          Code.
        </h1>
        <h1 className="text-5xl font-bold bg-gradient-to-r from-green-500 via-green-600 to-indigo-400 bg-clip-text text-transparent">
          Crypto.
        </h1>
        <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-600 bg-clip-text text-transparent">
          News.
        </h1>
      </div>

      <div className="flex flex-wrap md:flex-col lg:flex-row justify-between mt-14">
        
        <div className="w-full sm:w-1/4 md:w-4/6 lg:w-1/3 mt-3 p-3 md:order-1">
        <h1 className="text-5xl font-bold p-4">Crypto Prices</h1>
          <CryptoPrices />
        </div>
        
        
        <div className="w-full sm:w-3/4 lg:w-1/3 mt-3 md:order-2">
          <h1 className="text-5xl font-bold p-4">Latest Blog Posts</h1>
          <PostsPage />
        </div>

        
        <div className="w-full sm:w-3/4 lg:w-1/3 mt-3 md:order-2">
          <h1 className="text-5xl font-bold p-4">Latest News</h1>
          <LastNews />
        </div>
      </div>
    </div>
  ); 

    */ }

