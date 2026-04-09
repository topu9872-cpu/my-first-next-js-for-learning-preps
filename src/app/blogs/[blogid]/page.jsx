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

const BlogDetailsPage = async ({params}) => {
    const {blogid} =await params;
   const blog= blogs.find(blog => blog.id === parseInt(blogid));
    console.log(blog)
    return (
        <div>
            <h1 className="text-3xl font-bold text-center">Blog Details</h1>
            {
                blog && <div>
                    <h1>{blog.author}</h1>
                </div>
            }
        </div>
    );
};

export default BlogDetailsPage;