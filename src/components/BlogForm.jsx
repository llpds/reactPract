import BlogInput from './BlogInput'
import { useState } from 'react'

const BlogForm = ({saveBlog}) => {
  const [newBlog, setNewBlog] = useState({title:'',body:''})


  const submitBlog = (e) => {
    e.preventDefault()
    const preparedBlog = {
      ...newBlog,
      id: Date.now(),
      likes: 0
    }

      saveBlog(preparedBlog)
      setNewBlog({title:'',body:''})
    }

  return (
    <div>
      <h3>Blog form:</h3>
      <form action="">
        <BlogInput 
          placeholder="title"
          value = {newBlog.title}
          onChange = {(e)=> setNewBlog({...newBlog, title:e.target.value})}
        />
        <BlogInput 
          placeholder="body"
          value = {newBlog.body}
          onChange = {(e)=> setNewBlog({...newBlog, body:e.target.value})}
        />
        <button type="submit" onClick={submitBlog}>Save</button>
      </form>
    </div>
  )
}

export default BlogForm