package com.lanit.springangular.dto;

import com.lanit.springangular.entity.Item;
import com.lanit.springangular.enums.Priority;

import java.time.LocalDate;
import java.util.UUID;

public class ItemDto {
    private UUID id;
    private String subject;
    private String text;
    private Priority priority;
    private LocalDate deadline;

    public ItemDto() {
    }

    public ItemDto(UUID id, String subject, String text, Priority priority, LocalDate deadline) {
        this.id = id;
        this.subject = subject;
        this.text = text;
        this.priority = priority;
        this.deadline = deadline;
    }

    public ItemDto fromDomain(Item item) {
        return new ItemDto(item.getid(), item.getSubject(), item.getText(), item.getPriority(), item.getDeadline());
    }

    public UUID getId() {
        return id;
    }

    public ItemDto setId(UUID id) {
        this.id = id;
        return this;
    }

    public String getSubject() {
        return subject;
    }

    public ItemDto setSubject(String subject) {
        this.subject = subject;
        return this;
    }

    public String getText() {
        return text;
    }

    public ItemDto setText(String text) {
        this.text = text;
        return this;
    }

    public Priority getPriority() {
        return priority;
    }

    public ItemDto setPriority(Priority priority) {
        this.priority = priority;
        return this;
    }

    public LocalDate getDeadline() {
        return deadline;
    }

    public ItemDto setDeadline(LocalDate deadline) {
        this.deadline = deadline;
        return this;
    }
}
