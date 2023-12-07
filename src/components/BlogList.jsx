import Blog from './Blog'

const BlogList = ({blogs, like, deleteBlog}) => {
  return (
    <div>
      <h3>Blog list:</h3>
      <ul>
        {blogs.map((b,i)=>
            <Blog key={b.id} listNumber={i+1} blog = {b} like = {like} deleteBlog={deleteBlog}/>
        )}
      </ul>
    </div>
  )
}

export default BlogList