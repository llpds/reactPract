import React from 'react'

const Blog = ({listNumber, blog, like, deleteBlog}) => {
  return (
    <li key={blog.id}>
      {listNumber}. title: {blog.title} body: {blog.body} likes: {blog.likes} 
      <button onClick={() => like(blog)}>like</button>
      <button onClick={() => deleteBlog(blog)}>delete</button>
    </li>
  )
}

export default Blog