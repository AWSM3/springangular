package com.lanit.springangular.web.request;

import com.lanit.springangular.enums.Priority;

import java.time.LocalDate;

public class ItemRequest {
    private String text;
    private String subject;
    private Priority priority;
    private LocalDate deadline;

    public ItemRequest() {}

    public String getSubject() {
        return subject;
    }

    public ItemRequest setSubject(String subject) {
        this.subject = subject;
        return this;
    }

    public String getText() {
        return text;
    }

    public ItemRequest setText(String text) {
        this.text = text;
        return this;
    }

    public Priority getPriority() {
        return priority;
    }

    public ItemRequest setPriority(Priority priority) {
        this.priority = priority;
        return this;
    }

    public LocalDate getDeadline() {
        return deadline;
    }

    public ItemRequest setDeadline(LocalDate deadline) {
        this.deadline = deadline;
        return this;
    }
}
