package com.devportfolio.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.devportfolio.entity.Contact;
import com.devportfolio.repository.ContactRepository;
import com.devportfolio.service.ContactService;

@Service
public class ContactServiceImpl implements ContactService {

    @Autowired
    private ContactRepository repository;

    @Override
    public List<Contact> getAllMessages() {
        return repository.findAll();
    }

    @Override
    public Contact getMessageById(Long id) {
        return repository.findById(id).orElse(null);
    }

    @Override
    public Contact saveMessage(Contact contact) {
        return repository.save(contact);
    }

    @Override
    public void deleteMessage(Long id) {
        repository.deleteById(id);
    }
}
