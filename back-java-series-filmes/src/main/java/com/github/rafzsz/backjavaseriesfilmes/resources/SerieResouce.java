package com.github.rafzsz.backjavaseriesfilmes.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.github.rafzsz.backjavaseriesfilmes.models.Serie;
import com.github.rafzsz.backjavaseriesfilmes.repositorys.SerieRepository;

@CrossOrigin(origins = "http://127.0.0.1:5500")
@RestController
@RequestMapping("/serie")
public class SerieResouce {
	
	@Autowired
	SerieRepository serieRepository;
	
	@GetMapping
	public List <Serie> show(){
		return serieRepository.findAll();
	}
	
	@GetMapping("/{id}")
	public Serie showOne(@PathVariable(value="id") long id){
		return serieRepository.findById(id);
	}
	
	@PostMapping
	public Serie create(@RequestBody @Validated Serie serie) {
		return serieRepository.save(serie);
	}
	
	@PutMapping
	public Serie update(@RequestBody @Validated Serie serie) {
		return serieRepository.save(serie);
	}
	
	@DeleteMapping("/{id}")
	@ResponseStatus(HttpStatus.OK)
	public HttpStatus delete(@PathVariable(value="id") long id) {
		serieRepository.deleteById(id);
		return (HttpStatus.OK);
	}
}
