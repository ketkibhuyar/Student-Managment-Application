package com.student.demo;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.student.demo.repository.StudentRepository;
import com.student.demo.services.StudentService;

@SpringBootApplication
public class StudentApplication {

	public static void main(String[] args) {
		SpringApplication.run(StudentApplication.class, args);
	}
	
	@Bean
	public ModelMapper getModelMapper() {
		
	return new ModelMapper();
   
	}
	
	
	
	}
	
	


