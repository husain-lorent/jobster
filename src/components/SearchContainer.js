import React from "react";
import { useDispatch, useSelector } from "react-redux";
import FormRow from "./FormRow";
import FormRowSelect from "./FormRowSelect";
import { handleChange, clearFilters } from "../features/allJobs/allJobsSlice";
const SearchContainer = () => {
  const { isLoading, search, searchType, searchStatus, sort, sortOptions } =
    useSelector((store) => store.allJobs);

  const { jobTypeOptions, statusOptions } = useSelector((store) => store.job);
  const dispatch = useDispatch();
  const handleSearch = (e) => {
    //is loading check later
    dispatch(handleChange({ name: e.target.name, value: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(clearFilters());
  };
  return (
    <div className="bg-white p-7 rounded-sm shadow mb-5 hover:shadow-lg">
      <form>
        <h4>Search Form</h4>
        <div className="grid lg:grid-cols-3 grid-cols-1 items-center gap-4">
          {/* search position */}
          <FormRow
            type="text"
            name="search"
            value={search}
            handleChange={handleSearch}
          />
          {/* search by status */}
          <FormRowSelect
            labelText="status"
            name="searchStatus"
            value={searchStatus}
            handleChange={handleSearch}
            list={["all", ...statusOptions]}
          />
          {/* search by type */}
          <FormRowSelect
            labelText="type"
            name="searchType"
            value={searchType}
            handleChange={handleSearch}
            list={["all", ...jobTypeOptions]}
          />
          {/* sort*/}
          <FormRowSelect
            name="sort"
            value={sort}
            handleChange={handleSearch}
            list={sortOptions}
          />
          <button
            className="bg-pink-500 hover:bg-pink-700 mt-7 p-1 rounded text-white tracking-wide"
            disabled={isLoading}
            onClick={handleSubmit}
          >
            Clear filters
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchContainer;
