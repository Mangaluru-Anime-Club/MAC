import { getAllPosts } from "@/lib/posts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Post } from "@/types/post";
import "components/homeComponent.css";
import Image from "next/image";
export function HomeContent() {
  const posts = getAllPosts();

  return (
    // <div className="min-h-screen">
    //   <section className="py-20 bg-gray-50">
    //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //       <h1 className="text-6xl font-bold text-center mb-8">MAC</h1>
    //       <h2 className="text-3xl font-bold text-center mb-8">Mangalore Anime Club</h2>

    //       <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
    //         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
    //       </p>
    //     </div>
    //   </section>

    //   <section className="py-16">
    //     <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
    //       <h2 className="text-3xl font-bold mb-8">Recent Blog Posts</h2>
    //       <div className="grid gap-3">
    //         {posts.map((post: Post) => (
    //           <Link href={`/posts/${post.id}`} key={post.id}>
    //             <Card className="bg-white-500 shadow-md border rounded-lg">
    //               <CardHeader className='text-blue-600'>
    //                 <CardTitle >{post.title}</CardTitle>
    //                 <CardDescription className='text-blue-600'>{post.date}</CardDescription>
    //               </CardHeader>
    //               <CardContent>
    //                 <p className="text-blue-600">{post.excerpt}</p>
    //               </CardContent>
    //             </Card>
    //           </Link>
    //         ))}
    //       </div>
    //     </div>
    //   </section>
    // </div>
    <div className="min-h-screen" style={{ backgroundColor: "#0D0D0E" }}>
      <div className="upperDiv">
        <div className="center">
          <h1 style={{ fontSize: "2rem" }}>Welcome</h1>
          <h3 style={{ color: "#6C757D" }}>ಸುಸ್ವಾಗತ - ようこそ</h3>
        </div>
      </div>
      <div className="centerDiv center">
        <Image
          src="/images/luffy.png"
          width={500}
          height={500}
          alt="Picture of Luffy"
        />
      </div>
      <div className="lowerDiv">
        <div className="center">
          <h1 style={{ fontSize: "2.5rem" }}>mangaluru anime club</h1>
          <p style={{ color: "#6C757D" }}>
            ಮಂಗಳೂರು ಅನಿಮೆ ಕ್ಲಬ್ - マンガルル アニメ クラブ
          </p>
        </div>
      </div>
    </div>
  );
}
