import { useState } from 'react'
import BlogList from './components/BlogList'
import BlogForm from './components/BlogForm'
import Filter from './components/Filter'

function App() {
const [blogs, setBlogs] = useState([
  {id:1, title: 'title1', body: 'some text', likes: 5},
  {id:2, title: 'title2', body: 'content',  likes: 3},
  {id:3, title: 'title3', body: 'lorem ipsum', likes: 17},
])

const [filter, setFilter] = useState({sortBy:'title', search:''})


const sortedBlogs = [...blogs].sort((a,b) => a[filter.sortBy].localeCompare(b[filter.sortBy]))

const filteredSortedBlogs = [...sortedBlogs].filter(b => b.title.includes(filter.search))

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
      <Filter filter={filter} setFilter={setFilter} />
      <BlogList blogs = {filteredSortedBlogs} like = {like} deleteBlog={deleteBlog}/>
    </>
  )
}

export default App
