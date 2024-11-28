import { getAllPosts } from '@/lib/posts'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import { Post } from '@/types/post'

export default function Blog() {
  const posts = getAllPosts()

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold mb-8">Blog Posts</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post: Post) => (
          <Link href={`/posts/${post.id}`} key={post.id}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
                {/* Use the already formatted date */}
                <CardDescription>{post.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{post.excerpt}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
