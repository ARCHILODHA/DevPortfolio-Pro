package com.devportfolio.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.devportfolio.entity.Certificate;
import com.devportfolio.repository.CertificateRepository;
import com.devportfolio.service.CertificateService;

@Service
public class CertificateServiceImpl implements CertificateService {

    @Autowired
    private CertificateRepository repository;

    @Override
    public List<Certificate> getAllCertificates() {
        return repository.findAll();
    }

    @Override
    public Certificate getCertificateById(Long id) {
        return repository.findById(id).orElse(null);
    }

    @Override
    public Certificate saveCertificate(Certificate certificate) {
        return repository.save(certificate);
    }

    @Override
    public Certificate updateCertificate(Long id, Certificate certificate) {
        certificate.setId(id);
        return repository.save(certificate);
    }

    @Override
    public void deleteCertificate(Long id) {
        repository.deleteById(id);
    }
}