package com.awongstory.job_application_tracker.controller;

import com.awongstory.job_application_tracker.dto.ApplicationDto;
import com.awongstory.job_application_tracker.service.ApplicationService;
import java.util.List;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/jobs")
public class CoreController {

    private final ApplicationService applicationService;

    @GetMapping("")
    public ResponseEntity<List<ApplicationDto>> getAllApplications() {
        log.debug("Controller.getAllApplications()");
        return ResponseEntity.ok(applicationService.getAllApplications());
    }

    @GetMapping("/{statusId}")
    public ResponseEntity<List<ApplicationDto>> getApplicationsByStatus(@PathVariable("statusId") int statusId) {
        log.debug("Controller.getApplicationsByStatus()");
        return ResponseEntity.ok(applicationService.getApplicationsByStatus(statusId));
    }

    @PutMapping("")
    public ResponseEntity<ApplicationDto> saveApplication(
        @RequestBody ApplicationDto applicationDto) {
        log.debug("Controller.createApplication()");
        return ResponseEntity.ok(applicationService.saveApplication(applicationDto));
    }

}
