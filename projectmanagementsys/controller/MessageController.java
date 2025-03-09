package com.azash.controller;

import ch.qos.logback.core.encoder.EchoEncoder;
import com.azash.model.Chat;
import com.azash.model.Message;
import com.azash.model.Project;
import com.azash.model.User;
import com.azash.request.CreateMessageRequest;
import com.azash.service.MessageService;
import com.azash.service.ProjectService;
import com.azash.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/messages")
public class MessageController {

    @Autowired
    private MessageService messageService;
    @Autowired
    private UserService userService;
    @Autowired
    private ProjectService projectService;


    @PostMapping("/send")
    public ResponseEntity<Message> sendMessage(@RequestBody CreateMessageRequest request)
        throws Exception{
        User user = userService.findUserById(request.getSenderId());

        Chat chats = projectService.getProjectById(request.getProjectId()).getChat();

        if (chats==null) throw new Exception("Chats not found");

        Message sentMessage = messageService.sendMessage(request.getSenderId(),
                request.getProjectId(), request.getContent());
        return ResponseEntity.ok(sentMessage);
    }
    @GetMapping("/chat/{projectId}")
    public ResponseEntity<List<Message>> getMessageByChatId(@PathVariable Long projectId)
        throws Exception{
        List<Message> messages = messageService.getMessageByProjectId(projectId);
        return ResponseEntity.ok(messages);
    }

}
