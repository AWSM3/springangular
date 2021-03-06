package com.lanit.springangular.repository;

import com.lanit.springangular.entity.Item;
import com.lanit.springangular.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface ItemsRepositoryInterface extends JpaRepository<Item, UUID> {
    @Query(value = "SELECT i FROM Item i WHERE i.user = :user")
    public List<Item> findAllByUser(@Param("user") User user);
}
