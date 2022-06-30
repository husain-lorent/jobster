import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FormRow, Logo } from "../components";
import { loginUser, registerUser } from "../features/user/userSlice";
import "./style/Register.css";
const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

const Register = () => {
  const [values, setValues] = useState(initialState);

  const { user, isLoading } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  let navigate = useNavigate();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    // console.log(`${name}:${value}`);
    setValues({ ...values, [name]: value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values;
    if (!email || !password || (!isMember && !name)) {
      toast.error("Please fill out all fields");
      return;
    }
    if (isMember) {
      dispatch(loginUser({ email: email, password: password }));
      return;
    }
    dispatch(registerUser({ name, email, password }));
  };
  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };
  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 1500);
    }
  }, [user]);
  return (
    <div className="fluid-page">
      <form onSubmit={onSubmit} className="form-container">
        <div className="flex justify-center pb-2 w-[70vw] md:w-[350px]">
          <Logo />
        </div>
        <h3>{values.isMember ? "Login" : "Register"}</h3>
        {/* name field */}
        {!values.isMember && (
          <FormRow
            type="text"
            name="name"
            value={values.name}
            handleChange={handleChange}
          />
        )}

        {/* email field */}
        <FormRow
          type="email"
          name="email"
          value={values.email}
          handleChange={handleChange}
        />
        {/* password field */}
        <FormRow
          type="password"
          name="password"
          value={values.password}
          handleChange={handleChange}
        />

        <button
          disabled={isLoading}
          type="submit"
          className="bg-blue-600 text-white w-full rounded p-1 font-medium mt-2 mb-3 hover:bg-blue-700"
        >
          {isLoading ? "Loading..." : "Submit"}
        </button>

        <button
          className="bg-green-500 text-white w-full rounded p-1 font-medium mt-2 mb-3 hover:bg-green-600"
          type="button"
          disabled={isLoading}
          onClick={() =>
            dispatch(
              loginUser({ email: "testUser@test.com", password: "secret" })
            )
          }
        >
          {isLoading ? "loading..." : "Demo Test app"}
        </button>

        <p className="text-black font-semibold text-center">
          {values.isMember ? "Not a member yet ?" : "Already member"}
          <button
            type="button"
            onClick={toggleMember}
            className="text-blue-500 font-semibold ml-2"
          >
            {values.isMember ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </div>
  );
};

export default Register;
