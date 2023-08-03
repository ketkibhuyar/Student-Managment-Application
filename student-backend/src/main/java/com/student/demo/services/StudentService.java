package com.student.demo.services;

import java.util.List;

import com.student.demo.dto.StudentDto;
import com.student.demo.model.Student;

public interface StudentService {
	
Student createStudent(Student student);
	
	List<Student> getAllStudents();
	
	boolean deleteStudent(Long id);
	
	Student getstudentById(Long id);

	Student updateStudent(Long id, Student student);



}
