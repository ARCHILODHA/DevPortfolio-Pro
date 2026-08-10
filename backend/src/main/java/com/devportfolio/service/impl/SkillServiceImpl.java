package com.devportfolio.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.devportfolio.entity.Skill;
import com.devportfolio.repository.SkillRepository;
import com.devportfolio.service.SkillService;

@Service
public class SkillServiceImpl implements SkillService {

    @Autowired
    private SkillRepository repository;

    @Override
    public List<Skill> getAllSkills() {
        return repository.findAll();
    }

    @Override
    public Skill getSkillById(Long id) {
        return repository.findById(id).orElse(null);
    }

    @Override
    public Skill saveSkill(Skill skill) {
        return repository.save(skill);
    }

    @Override
    public Skill updateSkill(Long id, Skill skill) {
        skill.setId(id);
        return repository.save(skill);
    }

    @Override
    public void deleteSkill(Long id) {
        repository.deleteById(id);
    }
}
