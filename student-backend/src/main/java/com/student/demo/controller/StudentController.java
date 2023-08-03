package com.student.demo.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.student.demo.dto.StudentDto;
import com.student.demo.model.Student;
import com.student.demo.services.StudentService;

//import jakarta.validation.Valid;



@RestController
@RequestMapping("/api/v1/student")
@CrossOrigin("*")

public class StudentController{
	
	@Autowired
	private ModelMapper modelMapper;
		
	@Autowired
	private StudentService studentService;
	
	
	@GetMapping
	public List<StudentDto> getAllStudents(){
		return studentService.getAllStudents().stream()
				.map(student -> modelMapper.map(student, StudentDto.class))
				.collect(Collectors.toList());
	
	
	}
	
	@PostMapping("/add")
    public ResponseEntity<StudentDto> createEmployee(@RequestBody @Validated StudentDto studentdto) {
		Student studentResquest= modelMapper.map(studentdto, Student.class);
		Student student = studentService.createStudent(studentResquest);
		StudentDto studentResponse = modelMapper.map(student, StudentDto.class);
		return new ResponseEntity<StudentDto>(studentResponse, HttpStatus.CREATED);
	}
	
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<Map<String,Boolean>> deleteStudent(@PathVariable Long id){
	boolean isStudentDeleted = studentService.deleteStudent(id);	
	Map<String,Boolean> response = new HashMap<>();
		response.put("deleted",isStudentDeleted );
		return ResponseEntity.ok(response);
	}
	
	
	@GetMapping("/{id}")
	public ResponseEntity<StudentDto> getStudentById(@PathVariable Long id) {
		Student student= studentService.getstudentById(id);
		StudentDto studentResponse = modelMapper.map(student, StudentDto.class);
		return ResponseEntity.ok().body(studentResponse);
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<Student> updateStudent(@PathVariable Long id, @Validated @RequestBody Student student){
		Student updatedStudent = studentService.updateStudent(id, student);   
		return ResponseEntity.ok().body(updatedStudent);
	}
	
		
}
