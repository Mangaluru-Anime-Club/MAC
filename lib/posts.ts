import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { Post } from '@/types/post'

const postsDirectory = path.join(process.cwd(), 'posts')

// Helper function to format date
function formatDate(dateString: string): string {
  const date = new Date(dateString)
  const day = date.getDate()
  const month = date.toLocaleString('default', { month: 'long' })
  const year = date.getFullYear()

  const suffix =
    day === 1 ? 'st' :
      day === 2 ? 'nd' :
        day === 3 ? 'rd' : 'th'

  return `${day}${suffix} ${month} ${year}`
}

export function getAllPosts(): Post[] {
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '')
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      id,
      content,
      title: data.title,
      date: formatDate(data.date), // Format the date
      excerpt: data.excerpt,
    }
  })

  return allPostsData.sort((a, b) => {
    if (new Date(a.date) < new Date(b.date)) {
      return 1
    } else {
      return -1
    }
  })
}

export function getPostById(id: string): Post {
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  return {
    id,
    content,
    title: data.title,
    date: formatDate(data.date), // Format the date
    excerpt: data.excerpt,
  }
}
