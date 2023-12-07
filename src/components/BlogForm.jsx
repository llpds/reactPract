import BlogInput from './BlogInput'
import { useState } from 'react'

const BlogForm = ({saveBlog}) => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')


  const submitBlog = (e) => {
    e.preventDefault()
    const newBlog = {
      id: Date.now(),
      title: title,
      body: body,
      likes: 0
    }
      saveBlog(newBlog)
      setTitle('')
      setBody('')
    }

  return (
    <div>
      <h3>Blog form:</h3>
      <form action="">
        <BlogInput 
          placeholder="title"
          value = {title}
          onChange = {(e)=> setTitle(e.target.value)}
        />
        <BlogInput 
          placeholder="body"
          value = {body}
          onChange = {(e)=> setBody(e.target.value)}
        />
        <button type="submit" onClick={submitBlog}>Save</button>
      </form>
    </div>
  )
}

export default BlogForm