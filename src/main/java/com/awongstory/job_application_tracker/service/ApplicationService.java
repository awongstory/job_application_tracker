package com.awongstory.job_application_tracker.service;

import com.awongstory.job_application_tracker.converter.Converter;
import com.awongstory.job_application_tracker.dto.ApplicationDto;
import com.awongstory.job_application_tracker.entity.Application;
import com.awongstory.job_application_tracker.repository.ApplicationRepository;
import java.util.List;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Service
@Slf4j
@RequiredArgsConstructor
public class ApplicationService {

    private final ApplicationRepository applicationRepository;
    private final Converter converter;

    public List<ApplicationDto> getAllApplications() {
        log.debug("ApplicationService.getAllApplications()");
        return applicationRepository.findAll()
            .stream()
            .map(converter::toDto)
            .toList();
    }

    public List<ApplicationDto> getApplicationsByStatus(int statusId) {
        log.debug("ApplicationService.getApplicationsByStatus(statusId)");
        return applicationRepository.getApplicationsByStatusId(statusId)
            .stream()
            .map(converter::toDto)
            .toList();
    }

    public ApplicationDto saveApplication(ApplicationDto applicationDto) {
        log.debug("ApplicationService.createApplication()");
        Application application = applicationRepository.save(converter.toEntity(applicationDto));
        return converter.toDto(application);
    }
}