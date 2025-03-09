package com.azash.service;

import com.azash.model.User;

public interface UserService {

    User findUserProfileByJwt(String jwt) throws Exception;  // ✅ No static, must be implemented

    User findUserByEmail(String email) throws Exception;

    User findUserById(Long userId) throws Exception;

    User updateUsersProjectSize(User user, int number);
}
