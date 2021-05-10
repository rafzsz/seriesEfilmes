package com.github.rafzsz.backjavaseriesfilmes.repositorys;

import org.springframework.data.jpa.repository.JpaRepository;

import com.github.rafzsz.backjavaseriesfilmes.models.Filme;

public interface FilmeRepository extends JpaRepository<Filme, Long> {
	Filme findById(long id);
}
