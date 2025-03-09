package com.azash.repository;

import com.azash.model.Comments;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CommentRepository extends JpaRepository<Comments, Long> {


    List<Comments> findByIssueId(Long issueId);
}

