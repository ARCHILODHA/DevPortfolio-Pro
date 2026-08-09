package com.devportfolio.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.devportfolio.entity.Project;
import com.devportfolio.service.ProjectService;

@RestController
@RequestMapping("/api/projects")
@CrossOrigin(origins = "http://localhost:5173")
public class ProjectController {

    @Autowired
    private ProjectService service;

    // GET ALL
    @GetMapping
    public List<Project> getAllProjects() {
        return service.getAllProjects();
    }

    // GET BY ID
    @GetMapping("/{id}")
    public Project getProjectById(@PathVariable Long id) {
        return service.getProjectById(id);
    }

    // CREATE
    @PostMapping
    public Project addProject(@RequestBody Project project) {
        return service.saveProject(project);
    }

    // UPDATE
    @PutMapping("/{id}")
    public Project updateProject(@PathVariable Long id,
                                 @RequestBody Project project) {
        return service.updateProject(id, project);
    }

    // DELETE
    @DeleteMapping("/{id}")
    public void deleteProject(@PathVariable Long id) {
        service.deleteProject(id);
    }
}
