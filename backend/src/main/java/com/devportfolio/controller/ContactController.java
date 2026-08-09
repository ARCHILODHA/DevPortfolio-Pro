package com.devportfolio.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.devportfolio.entity.Contact;
import com.devportfolio.service.ContactService;


import jakarta.validation.Valid;
@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins = "http://localhost:5173")
public class ContactController {

    @Autowired
    private ContactService service;

    // GET all messages
    @GetMapping
    public List<Contact> getAllMessages() {
        return service.getAllMessages();
    }

    // GET message by ID
    @GetMapping("/{id}")
    public Contact getMessageById(@PathVariable Long id) {
        return service.getMessageById(id);
    }

    // SAVE message
   @PostMapping
public Contact saveMessage(@Valid @RequestBody Contact contact) {
    return service.saveMessage(contact);
}
    // DELETE message
    @DeleteMapping("/{id}")
    public void deleteMessage(@PathVariable Long id) {
        service.deleteMessage(id);
    }
}
