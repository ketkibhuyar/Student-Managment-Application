
import React, { useEffect, useState } from "react";
import StudentService from "../services/student.service";
import { useNavigate } from 'react-router-dom';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const StudentListComponent = () => {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();
  
  useEffect(() => {
    StudentService.getAllStudents()
      .then((response) => {
        setStudents(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },[]);

  const deleteStudent = (e, id) => {
    e.preventDefault();
    StudentService.deleteStudent(id).then((response) => {
      if (students) {
        toast('Student deleted successfully');
        console.log('After student deleted '+response.data);
        setStudents((prevElement) => {
          return prevElement.filter((student) => student.id !== id);
        });
      }
    });
  };

  const updateStudent = (e, id) => {
    e.preventDefault();
    navigate(`/update-student/${id}`);
  }
  return (
    <div className="relative w-[80%] flex flex-col shadow-[0_5px_50px_-15px_rgba(0,0,0,0.3)] mb-6 mt-8">
      <div className="flex flex-wrap items-center">
        <div className="relative w-full px-4">
          <h3 className="font-semibold text-xl p-4 m-4">Student list table</h3>
        </div>
      </div>
      <div>
        <table className="w-full">
          <thead>
            <tr className="border border-solid border-l-0 border-r-0">
              <th className="text-md px-6 py-3">Id</th>
              <th className="text-md px-6 py-3">Name</th>
              <th className="text-md px-6 py-3">Mobile Number</th>
              <th className="text-md px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td className="text-md px-6 py-3">{student.id}</td>
                <td className="text-md px-6 py-3">
                  {student.firstName} {student.lastName}
                </td>
                <td className="text-md px-6 py-3">{student.mobileNumber}</td>
                <td className="text-md px-2 py-3 flex justify-center gap-x-5">
                  <button onClick={(e, id) => updateStudent(e, student.id)} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    Update
                  </button>
                  <button
                    onClick={(e, id) => deleteStudent(e, student.id)}
                    className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"
                  >
                    Delete
                  </button>
                  <ToastContainer />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentListComponent;
