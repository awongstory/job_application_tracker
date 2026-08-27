package com.awongstory.job_application_tracker.dto;

import lombok.Data;
import java.time.LocalDate;

@Data
public class ApplicationDto {

    private int applicationId;
    private LocalDate date;
    private String companyName;
    private String method;
    private String jobTitle;
    private Integer yearsOfExperience;
    private String payRange;
    private int statusId;
    private String postingLink;
    private String loginLink;
}
