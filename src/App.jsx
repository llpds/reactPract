import { useState } from 'react'
import BlogList from './components/BlogList'
import BlogForm from './components/BlogForm'

function App() {
const [blogs, setBlogs] = useState([
  {id:1, title: 'title1', body: 'some text', likes: 5},
  {id:2, title: 'title2', body: 'content',  likes: 3},
  {id:3, title: 'title3', body: 'lorem ipsum', likes: 17},
])


const saveBlog = (newBlog) => {
  setBlogs([...blogs, newBlog])
}


const deleteBlog = (b) => {
  setBlogs(blogs.filter(bl => bl.id !== b.id))
}

const like = (b) => {
  const updBlog = {...b, likes: b.likes + 1  }
  setBlogs(blogs.map(bl => bl.id === updBlog.id ? updBlog : bl))
}

  return (
    <>
      <BlogForm saveBlog = {saveBlog}/>
      <BlogList blogs = {blogs} like = {like} deleteBlog={deleteBlog}/>
    </>
  )
}

export default App
