package com.awongstory.job_application_tracker.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import java.time.LocalDate;
import java.time.LocalDateTime;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

@Data
@Entity
@Table
public class Application {

    @Id
    @Column(name = "ApplicationId", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int applicationId;

    @Column(name = "Date")
    private LocalDate date;

    @Column(name = "CompanyName")
    private String companyName;

    @Column(name = "Method")
    private String method;

    @Column(name = "JobTitle")
    private String jobTitle;

    @Column(name = "YearsOfExperience")
    private Integer yearsOfExperience;

    @Column(name = "PayRange")
    private String payRange;

    @Column(name = "StatusId")
    private int statusId;

    @Column(name = "PostingLink")
    private String postingLink;

    @Column(name = "LoginLink")
    private String loginLink;

    @CreationTimestamp
    @Column(name = "DateCreated", insertable = false, updatable = false)
    private LocalDateTime dateCreated;

    @Column(name = "LastUpdated", insertable = false, updatable = false)
    private LocalDateTime lastUpdated;
}
