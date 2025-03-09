package com.azash.controller;

import com.azash.DTO.IssueDTO;
import com.azash.model.Issue;
import com.azash.model.User;
import com.azash.request.IssueRequest;
import com.azash.response.AuthResponse;
import com.azash.response.MessageResponse;
import com.azash.service.IssueServices;
import com.azash.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.parameters.P;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/issues")
public class IssueController {
    @Autowired
    private IssueServices issueServices;

    @Autowired
    private UserService userService;

    @GetMapping("/{issueId}")
    public ResponseEntity<Issue> getIssueById(@PathVariable Long issueId) throws Exception{
        return ResponseEntity.ok(issueServices.getIssuedById(issueId));
    }

    @GetMapping("/project/{projectId}")
    public ResponseEntity<List<Issue>> getIssueByProjectId(@PathVariable Long projectId)
        throws Exception{
        return ResponseEntity.ok(issueServices.getIssueByProjectId(projectId));
    }

    @PostMapping
    public ResponseEntity<IssueDTO> createIssue(@RequestBody IssueRequest issue,
                                                @RequestHeader("Authorization") String token) throws Exception {
//        if (issue.getProjectID() == null) {
//            return ResponseEntity.badRequest().body(null); // Or throw an exception
//        }
        User tokenUser= userService.findUserProfileByJwt(token);
        User user = userService.findUserById(tokenUser.getId());


        Issue createdIssue = issueServices.createIssue(issue, tokenUser);
            IssueDTO issueDTO=new IssueDTO();
            issueDTO.setDescription(createdIssue.getDescription());
            issueDTO.setDueDate(createdIssue.getDueDate());
            issueDTO.setId(createdIssue.getId());
            issueDTO.setPriority(createdIssue.getPriority());
            issueDTO.setProject(createdIssue.getProject());
            issueDTO.setProjectID(createdIssue.getProjectID());
            issueDTO.setStatus(createdIssue.getStatus());
            issueDTO.setTitle(createdIssue.getTitle());
            issueDTO.setTags(createdIssue.getTags());
            issueDTO.setAssignee(createdIssue.getAssignee());

            return ResponseEntity.ok(issueDTO);

        }

        @DeleteMapping("/{issueId}")
    public ResponseEntity<MessageResponse> deleteIssue(@PathVariable Long issueId,
                                                    @RequestHeader("Authorization") String token)
            throws Exception{
        User user= userService.findUserProfileByJwt(token);
        issueServices.deleteIssue(issueId, user.getId());

        MessageResponse res = new MessageResponse();
        res.setMessage("Issue deleted");

        return ResponseEntity.ok(res);

    }

    @PutMapping("/{issueId}/assignee/{userId}")
    public ResponseEntity<Issue> addUserToIssue(@PathVariable Long issueId,
                                                @PathVariable Long userId)
            throws Exception{
        Issue issue= issueServices.assUserToIssue(issueId, userId);

        return ResponseEntity.ok(issue);
    }

    @PutMapping("/{issueId}/status/{status}")
    public ResponseEntity<Issue> updateIssueStatus(
            @PathVariable String status,
            @PathVariable Long issueId) throws Exception{
        Issue issue = issueServices.updateStatus(issueId, status);

        return ResponseEntity.ok(issue);
    }

}
