package com.devportfolio.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.devportfolio.entity.Skill;
import com.devportfolio.service.SkillService;

@RestController
@RequestMapping("/api/skills")
@CrossOrigin(origins = "http://localhost:5173")
public class SkillController {

    @Autowired
    private SkillService service;

    @GetMapping
    public List<Skill> getAllSkills() {
        return service.getAllSkills();
    }

    @GetMapping("/{id}")
    public Skill getSkillById(@PathVariable Long id) {
        return service.getSkillById(id);
    }

    @PostMapping
    public Skill addSkill(@RequestBody Skill skill) {
        return service.saveSkill(skill);
    }

    @PutMapping("/{id}")
    public Skill updateSkill(@PathVariable Long id,
                             @RequestBody Skill skill) {
        return service.updateSkill(id, skill);
    }

    @DeleteMapping("/{id}")
    public void deleteSkill(@PathVariable Long id) {
        service.deleteSkill(id);
    }
}
