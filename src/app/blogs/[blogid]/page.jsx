

const BlogDetailsPage = async ({params}) => {
    const {blogId} =await params;
    console.log(blogId)
    return (
        <div>
            <h1>Blog Details</h1>
        </div>
    );
};

export default BlogDetailsPage;