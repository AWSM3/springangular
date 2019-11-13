package com.lanit.springangular.web.request;

import com.lanit.springangular.enums.Priority;
import lombok.Data;

import java.time.LocalDate;

@Data
public class ItemRequest {
    private String text;
    private String subject;
    private Priority priority;
    private LocalDate deadline;

    public ItemRequest() {}
}
