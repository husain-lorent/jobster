import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import FormRow from "../../components/FormRow";
import FormRowSelect from "../../components/FormRowSelect";
import {
  handleChange,
  clearValues,
  createJob,
  editJob,
} from "../../features/job/jobSlice";
const AddJob = () => {
  const {
    isLoading,
    position,
    company,
    jobLocation,
    jobType,
    jobTypeOptions,
    status,
    statusOptions,
    isEditing,
    editJobId,
  } = useSelector((store) => store.job);
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!position || !company || !jobLocation) {
      toast.error("Please fill out all fields");
      return;
    }
    if (isEditing) {
      dispatch(
        editJob({
          jobId: editJobId,
          job: { position, company, jobLocation, jobType, status },
        })
      );
      return; //2marta sms bagi uchun
    }
    dispatch(createJob({ position, company, jobLocation, jobType, status }));
  };
  const handleJobInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(handleChange({ name, value }));
  };

  useEffect(() => {
    if (!isLoading) {
      dispatch(
        handleChange({
          name: "jobLocation",
          value: user.location,
        })
      );
    }
  }, []);
  return (
    <section className="bg-white p-5 overflow-hidden">
      <form>
        <h3 className="mb-5 font-semibold lg:text-2xl">
          {isEditing ? "Edit job" : "Add job"}
        </h3>
        <div className="lg:grid lg:grid-cols-3 grid grid-cols-1 gap-4 pb-2">
          {/* position */}
          <FormRow
            type="text"
            name="position"
            value={position}
            handleChange={handleJobInput}
          />
          {/* company */}
          <FormRow
            type="text"
            name="company"
            value={company}
            handleChange={handleJobInput}
          />
          {/* jobLocation */}
          <FormRow
            type="text"
            name="jobLocation"
            labelText="Job Location"
            value={jobLocation}
            handleChange={handleJobInput}
          />
          {/* Status */}
          <FormRowSelect
            name="status"
            value={status}
            handleChange={handleJobInput}
            list={statusOptions}
          />
          {/* jobtype */}
          <FormRowSelect
            name="jobType"
            labelText="text type"
            value={jobType}
            handleChange={handleJobInput}
            list={jobTypeOptions}
          />

          <div className="flex justify-between">
            <button
              className="bg-pink-900 text-white font-medium items-center h-9 my-auto mt-6 rounded w-[15vh] lg:w-[11vw]"
              type="button"
              onClick={() => dispatch(clearValues())}
            >
              Clear
            </button>
            <button
              className="bg-blue-500 text-white items-center font-medium h-9 my-auto mt-6 rounded w-[15vh] lg:w-[11vw]"
              type="submit"
              onClick={handleSubmit}
              disabled={isLoading}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};
export default AddJob;
