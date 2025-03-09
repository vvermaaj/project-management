package com.azash.controller;

import com.azash.model.Comments;
import com.azash.model.User;
import com.azash.request.CreateCommentRequest;
import com.azash.response.MessageResponse;
import com.azash.service.CommentService;
import com.azash.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/comments")
public class CommentController {

    @Autowired
    private CommentService commentService;

    @Autowired
    private UserService userService;

    @PostMapping
    public ResponseEntity<Comments> createComment(
            @RequestBody CreateCommentRequest req,
            @RequestHeader("Authorization") String jwt) throws Exception{
        User user = userService.findUserProfileByJwt(jwt);
        Comments createdComment = commentService.createComment(
                req.getIssueId(),
                user.getId(),
                req.getContent());
        return new ResponseEntity<>(createdComment, HttpStatus.CREATED);
    }

    @DeleteMapping("/{commentId}")
    public ResponseEntity<MessageResponse> deleteComment(@PathVariable Long commentId,
                                                         @RequestHeader("Authorization") String jwt)
            throws Exception{
        User user = userService.findUserProfileByJwt(jwt);
        commentService.deleteComment(commentId, user.getId());
        MessageResponse res = new MessageResponse();
        res.setMessage("Comment deleted successfully");

        return new ResponseEntity<>(res, HttpStatus.OK);

    }

    @GetMapping("/{issueId}")
    public ResponseEntity<List<Comments>> getCommentsByIssueId(@PathVariable Long issueId){
        List<Comments> comments = commentService.findCommentByIssueId(issueId);
        return new ResponseEntity<>(comments, HttpStatus.OK);
    }

}