package com.devportfolio.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.devportfolio.entity.Project;
import com.devportfolio.repository.ProjectRepository;
import com.devportfolio.service.ProjectService;

@Service
public class ProjectServiceImpl implements ProjectService {

    @Autowired
    private ProjectRepository repository;

    @Override
    public List<Project> getAllProjects() {
        return repository.findAll();
    }

    @Override
    public Project getProjectById(Long id) {
        return repository.findById(id).orElse(null);
    }

    @Override
    public Project saveProject(Project project) {
        return repository.save(project);
    }

    @Override
    public Project updateProject(Long id, Project project) {
        project.setId(id);
        return repository.save(project);
    }

    @Override
    public void deleteProject(Long id) {
        repository.deleteById(id);
    }
}
