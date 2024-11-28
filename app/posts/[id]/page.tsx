import { getPostById } from '@/lib/posts'
import Markdown from 'markdown-to-jsx'

interface PostParams {
  params: {
    id: string;
  };
}

export default function Post({ params }: PostParams) {
  const post = getPostById(params.id)

  return (
    <article className="max-w-3xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      {/* Use the already formatted date */}
      <div className="text-muted-foreground mb-8">{post.date}</div>
      <div className="prose dark:prose-invert max-w-none">
        <Markdown>{post.content}</Markdown>
      </div>
    </article>
  )
}
