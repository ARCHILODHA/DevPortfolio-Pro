package com.devportfolio.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.devportfolio.entity.Contact;

@Repository
public interface ContactRepository extends JpaRepository<Contact, Long> {

}
