import axios from 'axios';

const STUDENT_BASE_REST_API_URL = 'http://localhost:8080/api/v1/student';

class StudentService {

    saveStudent(student){
        return axios.post(STUDENT_BASE_REST_API_URL+"/add",student);
    }

    getAllStudents(){
        return axios.get(STUDENT_BASE_REST_API_URL);
    }
    
    deleteStudent(studentId){
        return axios.delete(STUDENT_BASE_REST_API_URL+`/delete/${studentId}`);
    }

    getStudentById(id){
        return axios.get(STUDENT_BASE_REST_API_URL + "/"+ id);
    }

    updateStudent(id,student){
        return axios.put(STUDENT_BASE_REST_API_URL + "/"+ id, student);
    }
}

export default new StudentService();