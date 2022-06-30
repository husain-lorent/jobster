import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import FormRow from "../../components/FormRow";
import { updateUser } from "../../features/user/userSlice";
const Profile = () => {
  const { isLoading, user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    lastName: user?.lastName || "",
    location: user?.location || "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, lastName, location } = userData;
    if (!name || !email || !lastName || !location) {
      toast.error("Pleaes fill out all fields");
      return;
    }
    dispatch(updateUser(userData));
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };
  return (
    <div className="bg-white shadow-lg rounded-sm overflow-hidden">
      <form onSubmit={handleSubmit}>
        <h3 className="pt-6 ml-7 text-2xl font-semibold">Profile</h3>
        <div className="grid grid-rows-1 lg:grid-cols-3 gap-5 m-5 p-2 items-center">
          <FormRow
            type="text"
            name="name"
            value={userData.name}
            handleChange={handleChange}
          />
          <FormRow
            labelText="Last name"
            type="text"
            name="lastname"
            value={userData.lastName}
            handleChange={handleChange}
          />
          <FormRow
            type="email"
            name="email"
            value={userData.email}
            handleChange={handleChange}
          />
          <FormRow
            type="text"
            name="location"
            value={userData.location}
            handleChange={handleChange}
          />
          <div className="my-auto mb-3">
            <button
              type="submit"
              disabled={isLoading}
              className="bg-blue-500 py-1 px-6 rounded text-white font-medium tracking-wider"
            >
              {isLoading ? "Please Wait..." : "Save Changes"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Profile;
