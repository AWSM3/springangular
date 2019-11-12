package com.lanit.springangular.web.controller.rest;

import com.lanit.springangular.dto.ItemDto;
import com.lanit.springangular.entity.Item;
import com.lanit.springangular.entity.User;
import com.lanit.springangular.repository.ItemsRepositoryInterface;
import com.lanit.springangular.repository.UserRepositoryInterface;
import com.lanit.springangular.web.request.ItemRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/rest/item")
public class ItemController {
    private final ItemsRepositoryInterface itemsRepository;
    private final UserRepositoryInterface userRepository;

    public ItemController(ItemsRepositoryInterface itemsRepository, UserRepositoryInterface userRepository) {
        this.itemsRepository = itemsRepository;
        this.userRepository = userRepository;
    }

    @GetMapping("/list")
    public ResponseEntity<List> list(Principal principal) {
        List<Item> itemsList = itemsRepository.findAllByUser(this.userRepository.findByUsername(principal.getName()));

        return ResponseEntity.ok(itemsList);
    }

    @GetMapping("/get/{id}")
    public ResponseEntity get(@PathVariable("id") String id) {
        Item item = itemsRepository.findById(UUID.fromString(id)).get();

        return ResponseEntity.ok()
                .body(new ItemDto(item.getid(), item.getSubject(), item.getText(), item.getPriority(), item.getDeadline()));
    }

    @PostMapping("/save")
    public ResponseEntity save(@RequestBody ItemRequest request, Principal principal) {
        try {
            User user = this.userRepository.findByUsername(principal.getName());
            Item item = new Item(request.getSubject(), request.getText(), request.getPriority(), request.getDeadline(), user);
            itemsRepository.save(item);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e);
        }

        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity delete(@PathVariable("id") String id) {
        try {
            itemsRepository.deleteById(UUID.fromString(id));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e);
        }

        return ResponseEntity.ok().build();
    }
}
