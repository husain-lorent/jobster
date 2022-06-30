import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllJobs } from "../features/allJobs/allJobsSlice";
import Jobs from "./Jobs";
import Loading from "./Loading";
import PageBtnContainer from "./PageBtnContainer";
const JobsContainer = () => {
  const {
    jobs,
    isLoading,
    page,
    totalJobs,
    numOfPages,
    search,
    searchStatus,
    searchType,
    sort,
  } = useSelector((store) => store.allJobs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllJobs());
  }, [page, search, searchStatus, searchType, sort]);

  if (isLoading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }
  if (jobs.length === 0) {
    return <div>Nob jobs to display...</div>;
  }
  return (
    <div className="pb-2 pt-1">
      <h5 className="my-4 font-medium lg:text-2xl text-xl capitalize">
        {totalJobs} Jobs {jobs.length > 1 && "Found"}
      </h5>
      <div className="grid lg:grid-cols-2 gap-4 grid-cols-1">
        {jobs.map((job) => {
          return <Jobs key={job._id} {...job} />;
        })}
      </div>
      {numOfPages > 1 && <PageBtnContainer />}
    </div>
  );
};

export default JobsContainer;
