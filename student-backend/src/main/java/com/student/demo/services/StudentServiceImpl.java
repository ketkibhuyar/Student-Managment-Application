package com.student.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import com.student.demo.model.Student;
import com.student.demo.model.Student;
import com.student.demo.repository.StudentRepository;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class StudentServiceImpl implements StudentService {

	@Autowired
	StudentRepository studentRepository;
	
	@Override
	public Student createStudent(Student student) {
		// TODO Auto-generated method stub
		return studentRepository.save(student);
	}

	@Override
	public List<Student> getAllStudents() {
		// TODO Auto-generated method stub
		return studentRepository.findAll();
	}

	@Override
	public boolean deleteStudent(Long id) {
		// TODO Auto-generated method stub
	  studentRepository.delete(studentRepository.findById(id).get());
	  return true;
	}

	@Override
	public Student getstudentById(Long id) {
		// TODO Auto-generated method stub
		return studentRepository.findById(id).get();
	}

	@Override
	public Student updateStudent(Long id, Student student) {
		// TODO Auto-generated method stub
	Student modifyStudentData = studentRepository.findById(id).get();
	modifyStudentData.setFirstName(student.getFirstName());
	modifyStudentData.setLastName(student.getLastName());
	modifyStudentData.setMobileNumber(student.getMobileNumber());
	modifyStudentData.setAddress(student.getAddress());
	 studentRepository.save(modifyStudentData);
	 return modifyStudentData;
	}

	

		

}
