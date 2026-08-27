package com.awongstory.job_application_tracker.converter;

import com.awongstory.job_application_tracker.dto.ApplicationDto;
import com.awongstory.job_application_tracker.entity.Application;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Service
@Slf4j
public class Converter {

    public ApplicationDto toDto(Application application) {
        ApplicationDto dto = new ApplicationDto();

        dto.setApplicationId(application.getApplicationId());
        dto.setDate(application.getDate());
        dto.setCompanyName(application.getCompanyName());
        dto.setMethod(application.getMethod());
        dto.setJobTitle(application.getJobTitle());
        dto.setYearsOfExperience(application.getYearsOfExperience());
        dto.setPayRange(application.getPayRange());
        dto.setStatusId(application.getStatusId());
        dto.setPostingLink(application.getPostingLink());
        dto.setLoginLink(application.getLoginLink());

        return dto;
    }

    public Application toEntity(ApplicationDto dto) {
        Application application = new Application();

        application.setApplicationId(dto.getApplicationId());
        application.setDate(dto.getDate());
        application.setCompanyName(dto.getCompanyName());
        application.setMethod(dto.getMethod());
        application.setJobTitle(dto.getJobTitle());
        application.setYearsOfExperience(dto.getYearsOfExperience());
        application.setPayRange(dto.getPayRange());
        application.setStatusId(dto.getStatusId());
        application.setPostingLink(dto.getPostingLink());
        application.setLoginLink(dto.getLoginLink());

        return application;
    }
}
