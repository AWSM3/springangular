package com.lanit.springangular.entity;

import com.lanit.springangular.enums.Priority;
import org.hibernate.annotations.Type;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import java.time.LocalDate;
import java.util.UUID;

@Entity
public class Item {
    @Id
    @Type(type = "uuid-char")
    private UUID id;
    private String subject;
    private String text;
    private Priority priority;
    private LocalDate deadline;
    @ManyToOne @JoinColumn(name = "user_id")
    private User user;

    public Item() {}

    public Item(UUID id, String subject, String text, Priority priority, LocalDate deadline, User user) {
        this.id = id;
        this.subject = subject;
        this.text = text;
        this.priority = priority;
        this.deadline = deadline;
        this.user = user;
    }

    public Item(String subject, String text, Priority priority, LocalDate deadline, User user) {
        this.id = UUID.randomUUID();
        this.subject = subject;
        this.text = text;
        this.priority = priority;
        this.deadline = deadline;
        this.user = user;
    }

    public UUID getid() {
        return id;
    }

    public String getSubject() {
        return subject;
    }

    public Item setSubject(String subject) {
        this.subject = subject;
        return this;
    }

    public String getText() {
        return text;
    }

    public Item setText(String text) {
        this.text = text;
        return this;
    }

    public Priority getPriority() {
        return priority;
    }

    public Item setPriority(Priority priority) {
        this.priority = priority;
        return this;
    }

    public LocalDate getDeadline() {
        return deadline;
    }

    public Item setDeadline(LocalDate deadline) {
        this.deadline = deadline;
        return this;
    }

    public User getUser() {
        return user;
    }

    public Item setUser(User user) {
        this.user = user;
        return this;
    }
}
