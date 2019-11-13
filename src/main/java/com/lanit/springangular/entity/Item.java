package com.lanit.springangular.entity;

import com.lanit.springangular.enums.Priority;
import lombok.AllArgsConstructor;
import lombok.Data;
import org.hibernate.annotations.Type;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import java.time.LocalDate;
import java.util.UUID;

@Entity
@Data
@AllArgsConstructor
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

    public Item(String subject, String text, Priority priority, LocalDate deadline, User user) {
        this.id = UUID.randomUUID();
        this.subject = subject;
        this.text = text;
        this.priority = priority;
        this.deadline = deadline;
        this.user = user;
    }
}
