import Link from "next/link";


const BlogsPage
 = () => {

const blogs = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    description: "Learn the basics of Next.js and how to build your first app.",
    author: "John Doe",
    date: "2026-04-01"
  },
  {
    id: 2,
    title: "Understanding React Components",
    description: "A deep dive into functional and class components in React.",
    author: "Jane Smith",
    date: "2026-04-02"
  },
  {
    id: 3,
    title: "Tailwind CSS for Beginners",
    description: "Style your apps quickly using Tailwind CSS utility classes.",
    author: "Alex Johnson",
    date: "2026-04-03"
  },
  {
    id: 4,
    title: "API Routes in Next.js",
    description: "How to create backend APIs inside your Next.js app.",
    author: "Chris Lee",
    date: "2026-04-04"
  }
];

    return (
        <div>
         <h1 className="text-4xl text-center font-bold">This is Blogs componanets</h1>
{
    blogs.map(blog=>
        <div key={blog.id}>
<h2 className="text-2xl font-semibold space-y-4">{blog.title}</h2>
<Link href='/'>Show Details</Link>
<p>{blog.description}</p>
<div className="flex justify-between">
    <p>{blog.author}</p>
    <p>{blog.date}</p>
</div>
        </div>
    )
}
            
        </div>
    );
};

export default BlogsPage
;