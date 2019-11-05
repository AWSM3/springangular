package com.lanit.springangular.repository;

import com.lanit.springangular.entity.Item;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface ItemsRepositoryInterface extends JpaRepository<Item, UUID> {
}
