package com.github.rafzsz.backjavaseriesfilmes.repositorys;

import org.springframework.data.jpa.repository.JpaRepository;

import com.github.rafzsz.backjavaseriesfilmes.models.Serie;

public interface SerieRepository extends JpaRepository<Serie, Long> {
	Serie findById(long id);
}
