package com.github.rafzsz.backjavaseriesfilmes.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
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

import com.github.rafzsz.backjavaseriesfilmes.models.Filme;
import com.github.rafzsz.backjavaseriesfilmes.repositorys.FilmeRepository;

@CrossOrigin(origins = "http://127.0.0.1:5500")
@RestController
@RequestMapping("/filme")
public class FilmeResource {
	
	@Autowired
	FilmeRepository filmeRepository;
	
	@GetMapping
	public List <Filme> show(){
		return filmeRepository.findAll();
	}
	
	@GetMapping("/{id}")
	public Filme showOne(@PathVariable(value="id") long id){
		return filmeRepository.findById(id);
	}
	
	@PostMapping
	public Filme create(@RequestBody @Validated Filme filme) {
		return filmeRepository.save(filme);
	}
	
	@PutMapping
	public Filme update(@RequestBody @Validated Filme filme) {
		return filmeRepository.save(filme);
	}

	@DeleteMapping("/{id}")
	public Filme delete(@PathVariable(value="id") long id){
		filmeRepository.deleteById(id);
		return null;
	}
}
