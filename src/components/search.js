import { useState } from "react";

// so any-thing that is being searched in search box will go to parent component and from there upadate the list component

function Search({searchTerm, handleSearch}) {
//   const [searchTerm, setSearchTerm] = useState(); //moving this to parent component = lifting state
  return (
    <div>
        <label>Search</label>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
      />
    </div>
  );
}
export default Search;
