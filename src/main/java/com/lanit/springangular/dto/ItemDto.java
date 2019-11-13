package com.lanit.springangular.dto;

import com.lanit.springangular.entity.Item;
import com.lanit.springangular.entity.User;
import com.lanit.springangular.enums.Priority;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.time.LocalDate;
import java.util.UUID;

@Data
@AllArgsConstructor
public class ItemDto {
    private UUID id;
    private String subject;
    private String text;
    private Priority priority;
    private LocalDate deadline;
    private User user;

    public ItemDto() {}

    public ItemDto fromDomain(Item item) {
        return new ItemDto(item.getId(), item.getSubject(), item.getText(), item.getPriority(), item.getDeadline(), item.getUser());
    }
}
