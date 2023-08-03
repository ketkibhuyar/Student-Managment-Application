import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import StudentService from "../services/student.service";


const UpdateStudentComponent = () => {
  const { id } = useParams();
  const nvaigate = useNavigate();
  const [student,setStudent] = useState({
    id: null,
    firstName: null,
    lastName: null,
    mobileNumber: null,
    emailId: null,
  });

//   useEffect(() => {
//     StudentService.getAllStudents()
//       .then((response) => {
//         setStudents(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   },[]);

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await StudentService.getStudentById(id);
        setStudent(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const updateStudent = (e) => {
    e.preventDefault();
    StudentService.updateStudent(id, student)
      .then((response) => {
        toast.success(
          response.data.firstName +
            " " +
            response.data.lastName +
            " is updated successfully"
        );
        nvaigate(`/students`);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex justify-center pt-12">
      <form
        onSubmit={(e) => updateStudent(e)}
        className=" w-[700px] bg-white flex flex-col justify-between gap-y-6 shadow-[0_5px_50px_-15px_rgba(0,0,0,0.3)] rounded px-8 pt-6 pb-8 mb-4"
      >
        <div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-first-name"
              >
                First Name
              </label>
              <input
                className="appearance-none block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-first-name"
                name="firstName"
                value={student.firstName}
                onChange={(e) => handleChange(e)}
                type="text"
                placeholder="Enter first name"
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Last Name
              </label>
              <input
                className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                name="lastName"
                value={student.lastName}
                onChange={(e) => handleChange(e)}
                placeholder="Enter last name"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-city"
              >
                address
              </label>
              <input
                className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-city"
                name="address"
                value={student.address}
                onChange={(e) => handleChange(e)}
                type="text"
                placeholder="Enter address"
              />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-zip"
              >
                Mobile Number
              </label>
              <input
                className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-zip"
                name="mobileNumber"
                value={student.mobileNumber}
                onChange={(e) => handleChange(e)}
                type="text"
                placeholder="Enter mobile number"
              />
            </div>
          </div>
        </div>
        <div className="flex gap-8 justify-center">
          <button
            onClick={(e) => updateStudent(e)}
            className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded focus:outline-none drop-shadow-lg"
            type="button"
          >
            Submit
          </button>
          <button
            onClick={() => nvaigate(`/students`)}
            className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded focus:outline-none drop-shadow-lg"
            type="button"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateStudentComponent;
