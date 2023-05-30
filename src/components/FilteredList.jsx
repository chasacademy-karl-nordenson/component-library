import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedTag } from "../features/filterSlice";
import SearchBar from "./SearchBar";
import TagButton from "./TagButton";
import JobList from "./JobList";

function FilteredList({ companies }) {
  const [query, setQuery] = useState("");
  const selectedTag = useSelector((state) => state.filter.selectedTag);
  const dispatch = useDispatch();

  const handleTagClick = (tag) => {
    dispatch(setSelectedTag(tag));
  };

  const filteredCompanies = companies.filter((company) => {
    if (selectedTag && !company.category.includes(selectedTag)) {
      return false;
    }

    if (query) {
      const searchTerms = query.toLowerCase().split(" ");
      const { jobTitle, companyName, category } = company;
      const searchIn = [jobTitle, companyName, ...category]
        .join(" ")
        .toLowerCase();
      return searchTerms.every((term) => searchIn.includes(term));
    }

    return true;
  });

  return (
    <div>
      <SearchBar query={query} setQuery={setQuery} />
      <div className="tags">
        <TagButton tag="Office" handleTagClick={handleTagClick} />
        <TagButton tag="Consulting" handleTagClick={handleTagClick} />
        <TagButton tag="Store" handleTagClick={handleTagClick} />
        <TagButton tag="Bank" handleTagClick={handleTagClick} />
        <TagButton tag="Betting" handleTagClick={handleTagClick} />
      </div>
      <JobList jobs={filteredCompanies} />
    </div>
  );
}

export default FilteredList;
