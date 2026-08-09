package com.devportfolio.service;

import java.util.List;

import com.devportfolio.entity.Contact;

public interface ContactService {

    List<Contact> getAllMessages();

    Contact getMessageById(Long id);

    Contact saveMessage(Contact contact);

    void deleteMessage(Long id);
}
