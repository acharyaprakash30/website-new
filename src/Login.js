import React from "react";
import "./Login.css";
import Doctor from "./Images/doctor.png";
import Patient from "./Images/patient.png";

const Login = () => {
  return (
    <div className="bg-sky-100 flex justify-center align-center h-screen">
      <div className="bg-white align-center justify-center border-solid border-2 px-5 py-10 w-fit my-10">
        <p className="text-sky-500 text-xl text-center font-bold mb-10">
          Choose Account Type
        </p>

        <div className="flex flex-row gap-6 mb-6">
          <div className="px-8 py-3 border-2 border-solid border-sky-100">
            <img className="h-24 mb-3" src={Doctor} alt="doctor" />
            <p className="text-sky-500 text-center font-semibold text-sm">
              Doctor
            </p>
          </div>
          <div className="px-8 py-3 border-2 border-solid border-sky-100">
            <img className="h-24 mb-3" src={Patient} alt="patient" />
            <p className="text-sky-500 text-center font-semibold text-sm">
              Patient
            </p>
          </div>
        </div>
        <p className="text-center text-slate-400 text-xs">Hello Doctor!</p>
        <p className="text-center text-slate-400 text-sm">
          Please fill out the form below to get started
        </p>
      </div>
    </div>
  );
};

export default Login;
