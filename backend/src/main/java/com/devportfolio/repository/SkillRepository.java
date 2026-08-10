package com.devportfolio.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.devportfolio.entity.Skill;

@Repository
public interface SkillRepository extends JpaRepository<Skill, Long> {

}
