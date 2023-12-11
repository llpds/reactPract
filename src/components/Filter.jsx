import BlogInput from "./BlogInput"

const Filter = ({filter, setFilter}) => {
  return (
    <div>
      <h3>Filter:</h3>
      <select id="sortBy" value={filter.sortBy} onChange = {(e)=> setFilter({...filter, sortBy: e.target.value})}>
        <option value="sortTitle" disabled>sort by:</option>
        <option value="title">title</option>
        <option value="body">body</option>
      </select>

      <BlogInput
        placeholder="search in title"
        value={filter.search}
        onChange={(e) => setFilter({...filter, search:e.target.value})}
      />
    </div>
  )
}

export default Filter