package com.lanit.springangular.service;

import com.lanit.springangular.dto.UserDto;
import com.lanit.springangular.entity.User;
import com.lanit.springangular.repository.UserRepositoryInterface;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    private final UserRepositoryInterface userRepository;
    private final PasswordEncoder bcryptEncoder;

    public UserService(UserRepositoryInterface userRepository, PasswordEncoder bcryptEncoder) {
        this.userRepository = userRepository;
        this.bcryptEncoder = bcryptEncoder;
    }

    public User register(UserDto userDto) {
        User user = new User(userDto.getUsername(), bcryptEncoder.encode(userDto.getPassword()));

        return userRepository.save(user);
    }
}
