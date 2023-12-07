import BlogInput from "./BlogInput"

const Filter = ({sortBy, setSortBy, search, setSearch}) => {
  return (
    <div>
      <h3>Filter:</h3>
      <select id="sortBy" onChange = {(e)=> setSortBy(e.target.value)}>
        <option value="sortTitle" disabled>sort by:</option>
        <option value="title">title</option>
        <option value="body">body</option>
      </select>

      <BlogInput
        placeholder="search in title"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  )
}

export default Filter