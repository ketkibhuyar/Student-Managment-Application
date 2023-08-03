package com.student.demo.exception;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.NoSuchElementException;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.student.demo.exception.ErrorDetails;

public class ApplicationExceptionalHandler {
	
	@RestControllerAdvice
	public class ApplicationExceptionHandler {

		@ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
		@ExceptionHandler(NoSuchElementException.class)
		public Map<String, ErrorDetails> handleResourceNotFoundException(NoSuchElementException noSuchElementException)
		{
			Map<String, ErrorDetails> errorMap = new HashMap<>();
			errorMap.put("errorMessage", new ErrorDetails(new Date(), noSuchElementException.getMessage()));
			return errorMap;
		}
		
		@ResponseStatus(HttpStatus.BAD_REQUEST)
		@ExceptionHandler(MethodArgumentNotValidException.class)
		public Map<String, ErrorDetails> handleInvalidArgumentException(MethodArgumentNotValidException methArgNotValidException)
		{
			Map<String, ErrorDetails> errorMap = new HashMap<>();
			methArgNotValidException.getBindingResult().getFieldErrors().forEach(error -> {
				//errorMap.put(error.getField(), new ErrorDetails(new Date(), methArgNotValidException.getMessage(),error.getDefaultMessage()));
			});
			return errorMap;
		}

	}

}
