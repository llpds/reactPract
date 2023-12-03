import { useState } from 'react'

function App() {
const [blogs, setBlogs] = useState([
  {id:1, title: 'title1', body: 'some text', likes: 5},
  {id:2, title: 'title2', body: 'content',  likes: 3},
  {id:3, title: 'title3', body: 'lorem ipsum', likes: 17},
])
const [title, setTitle] = useState('')
const [body, setBody] = useState('')
const [sortBy, setSortBy] = useState('title')
const [search, setSearch] = useState('')

const sortedBlogs = [...blogs].sort((a,b) => a[sortBy].localeCompare(b[sortBy]))

const filteredSortedBlogs = [...sortedBlogs].filter(b => b.title.includes(search))

const saveBlog = (e) => {
  e.preventDefault()
  const newBlog = {
    id: Date.now(),
    title: title,
    body: body,
    likes: 0
  }
  setBlogs([...blogs, newBlog])
  setTitle('')
  setBody('')
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
      <h3>Blog form:</h3>
      <form action="">
        <input 
          type="text"
          placeholder="title"
          value = {title}
          onChange = {(e)=> setTitle(e.target.value)}
        />
        <input 
          type="text"
          placeholder="body"
          value = {body}
          onChange = {(e)=> setBody(e.target.value)}
        />
        <button type="submit" onClick={saveBlog}>Save</button>
      </form>

      <h3>Filter:</h3>
      <select id="sortBy" onChange = {(e)=> setSortBy(e.target.value)}>
        <option value="sortTitle" disabled>sort by:</option>
        <option value="title">title</option>
        <option value="body">body</option>
      </select>

      <input
        type="text"
        placeholder="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <h3>Blog list:</h3>
      <ul>
        {filteredSortedBlogs.map((b,i)=>
          <li key={b.id}>
            {i+1}. title: {b.title} body: {b.body} likes: {b.likes} 
            <button onClick={() => like(b)}>like</button>
            <button onClick={() => deleteBlog(b)}>delete</button>
          </li>
        )}
      </ul>
    </>
  )
}

export default App