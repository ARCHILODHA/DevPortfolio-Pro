package com.devportfolio.service;

import java.util.List;

import com.devportfolio.entity.Skill;

public interface SkillService {

    List<Skill> getAllSkills();

    Skill getSkillById(Long id);

    Skill saveSkill(Skill skill);

    Skill updateSkill(Long id, Skill skill);

    void deleteSkill(Long id);
}
