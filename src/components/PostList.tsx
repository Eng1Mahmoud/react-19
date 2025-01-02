import { Post } from "../types/post";
const PostList = ({posts}:{posts:Post[]}) => {
  return (  
  <div className="mt-6">
    {posts.map((post) => (
      <div key={post.id} className="border-t pt-4 mt-4">
        <h3 className="text-xl">{post.title}</h3>
      </div>
    ))}
 </div>
  )
}

export default PostList