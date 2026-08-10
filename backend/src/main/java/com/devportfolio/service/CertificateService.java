package com.devportfolio.service;

import java.util.List;

import com.devportfolio.entity.Certificate;

public interface CertificateService {

    List<Certificate> getAllCertificates();

    Certificate getCertificateById(Long id);

    Certificate saveCertificate(Certificate certificate);

    Certificate updateCertificate(Long id, Certificate certificate);

    void deleteCertificate(Long id);

}