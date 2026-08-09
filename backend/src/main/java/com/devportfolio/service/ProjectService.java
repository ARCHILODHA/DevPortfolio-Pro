package com.devportfolio.service;

import java.util.List;

import com.devportfolio.entity.Project;

public interface ProjectService {

    List<Project> getAllProjects();

    Project getProjectById(Long id);

    Project saveProject(Project project);

    Project updateProject(Long id, Project project);

    void deleteProject(Long id);
}
