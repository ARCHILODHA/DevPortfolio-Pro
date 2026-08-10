package com.devportfolio.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.devportfolio.entity.Certificate;
import com.devportfolio.service.CertificateService;

@RestController
@RequestMapping("/api/certificates")
@CrossOrigin(origins = "http://localhost:5173")
public class CertificateController {

    @Autowired
    private CertificateService service;

    @GetMapping
    public List<Certificate> getAllCertificates() {
        return service.getAllCertificates();
    }

    @GetMapping("/{id}")
    public Certificate getCertificateById(@PathVariable Long id) {
        return service.getCertificateById(id);
    }

    @PostMapping
    public Certificate addCertificate(@RequestBody Certificate certificate) {
        return service.saveCertificate(certificate);
    }

    @PutMapping("/{id}")
    public Certificate updateCertificate(@PathVariable Long id,
                                         @RequestBody Certificate certificate) {
        return service.updateCertificate(id, certificate);
    }

    @DeleteMapping("/{id}")
    public void deleteCertificate(@PathVariable Long id) {
        service.deleteCertificate(id);
    }
}