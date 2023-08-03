import React, { useState } from "react";
import {
  lastName_validation,
  firstName_validation,
  dob_validation,
  num_validation,
  address_validation
} from '../utils/InputValidations';
import { Input } from "./input.component";
import StudentService from "../services/student.service";
import { useNavigate } from "react-router-dom";
import { FormProvider, useForm } from "react-hook-form";
import { BsFillCheckSquareFill } from 'react-icons/bs'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const StudentFormComponent = () => {
  const navigate = useNavigate();
  const methods = useForm();
  const [success, setSuccess] = useState(false);

  const [student, setStudent] = useState({
    id: null,
    firstName: null,
    lastName: null,
    address: null,
    mobileNumber: null,
  });

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const saveStudent = methods.handleSubmit((student) => {
    console.log(student);
    StudentService.saveStudent(student)
      .then((response) => {
        toast.success(
          student.firstName +
            " " +
            student.lastName +
            " is added successfully"
        );
        navigate(`/students`);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    methods.reset();
    setSuccess(true);
  });

  const reset = (e) => {
    e.preventDefault();
    setStudent({
      id: "",
      firstName: "",
      lastName: "",
      mobileNumber: "",
      address: "",
    });
  };

  return (
    <FormProvider {...methods}>
    <div className="flex justify-center pt-12">
      <form 
      onSubmit={e => e.preventDefault()}
      noValidate
      autoComplete="off"
      className=" w-[700px] bg-white flex flex-col justify-between gap-y-6 shadow-[0_5px_50px_-15px_rgba(0,0,0,0.3)] rounded px-8 pt-6 pb-8 mb-4">
        <div>
          <div className="flex flex-wrap -mx-3 mb-6"> 
             <Input {...firstName_validation} className='w-full md:w-1/2 px-3 mb-6 md:mb-0'/>
             <Input {...lastName_validation} className="w-full md:w-1/2 px-3"/>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <Input {...num_validation} className="w-full md:w-1/2 px-3 mb-6 md:mb-0"/>
            <Input {...address_validation} className="w-full md:w-1/2 px-3 mb-6 md:mb-0"/>
          </div>

        </div>
        <div className="flex gap-8 justify-center">
          {success && (
            <p className="font-semibold text-green-500 mb-5 flex items-center gap-1">
              <BsFillCheckSquareFill /> Form has been submitted successfully
            </p>
          )}
          <button
            onClick={saveStudent}
            className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded focus:outline-none drop-shadow-lg"
            type="button"
          >
            Submit
          </button>
          <button
            onClick={reset}
            className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded focus:outline-none drop-shadow-lg"
            type="button"
          >
            Clear
          </button>
        </div>
      </form>
    </div>
    </FormProvider>
  );
};

export default StudentFormComponent;
