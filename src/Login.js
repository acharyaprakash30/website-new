import React, { useState } from "react";
import "./Login.css";
import Doctor from "./images/doctor.png";
import Patient from "./images/patient.png";
import { GoMail } from "react-icons/go";
import { TfiLock } from "react-icons/tfi";
import { TiTick } from "react-icons/ti";

const Login = () => {
  const [character, setcharacter] = useState(false);
  const [characterr, setcharacterr] = useState(false);
  const [holdermail, setholdermail] = useState("Email");
  const [holderpassword, setholderpassword] = useState("Password");
  const [feildname, setfeildname] = useState(false);

  return (
    <div className="bg-sky-100 flex justify-center align-center h-screen">
      <div className="bg-white align-center justify-center border-solid border-2 px-9 py-10 w-fit my-10">
        <p className="text-sky-500 text-xl text-center font-bold mb-10">
          Choose Account Type
        </p>

        <div className="flex flex-row gap-6 mb-6">
          <div
            className={
              character
                ? "px-8 py-3 relative border-2 border-solid border-sky-200"
                : "px-8 py-3 relative border-2 border-solid"
            }
            onClick={() => {
              setcharacter(true);
              setcharacterr(false);
            }}
          >
            <TiTick
              className={
                character
                  ? "absolute bottom-0 right-0 -right-2.5 -bottom-2.5 text-2xl bg-sky-500 text-white rounded-full"
                  : "hidden"
              }
            />
            <img className="h-20 mb-3" src={Doctor} alt="doctor" />
            <p className="text-sky-500 text-center font-semibold text-sm">
              Doctors
            </p>
          </div>
          <div
            className={
              characterr
                ? "px-8 py-3 relative border-2 border-solid border-sky-200"
                : "px-8 py-3 relative border-2 border-solid"
            }
            onClick={() => {
              setcharacterr(true);
              setcharacter(false);
            }}
          >
            <TiTick
              className={
                characterr
                  ? "absolute bottom-0 right-0 -right-2.5 -bottom-2.5 text-2xl bg-sky-500 text-white rounded-full"
                  : "hidden"
              }
            />

            <img className="h-20 mb-3" src={Patient} alt="patient" />
            <p className="text-sky-500 text-center font-semibold text-sm">
              Patient
            </p>
          </div>
        </div>
        <p className="text-center text-slate-400 text-xs">Hello Doctor!</p>
        <p className="text-center text-slate-400 text-sm mb-10">
          Please fill out the form below to get started
        </p>
        <div className="relative  mb-5">
          <span
            className={
              feildname
                ? "bg-sky-500 text-xs text-white ml-7 absolute -left-4 -top-3 h-fit text-center px-1 py-0.5"
                : "hidden"
            }
          >
            Email
          </span>
          <GoMail className="absolute top-3 left-2 text-slate-400" />
          <input
            type="text"
            name="Email"
            className="block pl-8 pr-2 border border-solid border-lightgray w-full h-10 focus:outline-sky-500"
            placeholder={holdermail}
            onFocus={() => {
              setholdermail("");
              setfeildname(true);
            }}
            onBlur={() => {
              setholdermail("Email");
              setfeildname(false);
            }}
          />
        </div>
        <div className="relative mb-7">
          <span className="bg-sky-500 text-xs text-white ml-7 absolute -left-4 -top-3 h-fit text-center px-1 py-0.5">
            Password
          </span>
          <TfiLock className="absolute top-3 left-2 text-slate-400" />
          <span className="absolute font-semibold h-6 top-2 text-xs border-l border-slate-300 px-3 text-sky-500 inset-y-0 right-0 flex items-center">
            Forgot?
          </span>
          <input
            type="text"
            name="password"
            className="block pl-8 pr-20 w-full h-10 border border-solid border-lightgray focus:outline-sky-500"
            placeholder={holderpassword}
            onFocus={() => {
              setholderpassword("");
            }}
            onBlur={() => {
              setholderpassword("password");
            }}
          />
        </div>
        <div className="flex flex-row justify-between relative">
          <span className="text-slate-400 text-sm absolute top-1.5">
            No account?
            <span className="font-semibold text-sky-500"> Signup</span>
          </span>
          <button className="bg-sky-500 rounded-md text-white text-sm font-semibold h-fit w-fit px-6 py-1.5 absolute right-0">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
