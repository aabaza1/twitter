import React from "react";

const SearchBar = (props) => {
    return(
        <input placeholder="filter by" value={props.search} onChange={(e) => props.setSearch(e.target.value)}/>
    )
};

export default SearchBar;