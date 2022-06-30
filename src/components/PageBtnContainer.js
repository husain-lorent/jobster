import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import "./style/PageBtn.css";
import { changePage } from "../features/allJobs/allJobsSlice";
const PageBtnContainer = () => {
  const { numOfPages, page } = useSelector((store) => store.allJobs);
  const dispatch = useDispatch();

  const pages = Array.from({ length: numOfPages }, (_, index) => {
    return index + 1;
  });
  const nextPage = () => {
    let newPage = page + 1;
    if (newPage > numOfPages) {
      newPage = 1;
    }
    dispatch(changePage(newPage));
  };
  const prevPage = () => {
    let newPage = page - 1;
    if (newPage < 1) {
      newPage = numOfPages;
    }
    dispatch(changePage(newPage));
  };
  return (
    <div className="lg:flex lg:flex-nowrap items-center gap-3 lg:gap-5 justify-end lg:justify-center mt-9 mb-2">
      <button
        className="flex items-center justify-center bg-white text-blue-600 text-xl font-semibold 
        py-2 px-3 rounded hover:bg-blue-500 hover:text-white"
        type="button"
        onClick={prevPage}
      >
        <HiChevronDoubleLeft className="mt-1 mr-1" />
        Prev
      </button>

      <div className="bg-blue-100 rounded-sm my-3">
        {pages.map((pageNumber) => {
          return (
            <button
              className={
                pageNumber === page ? "page-btn active-btn" : "page-btn"
              }
              type="button"
              key={pageNumber}
              onClick={() => dispatch(changePage(pageNumber))}
            >
              {pageNumber}
            </button>
          );
        })}
      </div>
      <button
        className="flex items-center justify-center bg-white text-blue-600 text-xl font-semibold 
        py-2 px-3 rounded hover:bg-blue-500 hover:text-white"
        type="button"
        onClick={nextPage}
      >
        Next
        <HiChevronDoubleRight className="mt-1 ml-1" />
      </button>
    </div>
  );
};

export default PageBtnContainer;
