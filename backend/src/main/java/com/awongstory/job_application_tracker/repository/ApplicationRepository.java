package com.awongstory.job_application_tracker.repository;

import com.awongstory.job_application_tracker.entity.Application;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ApplicationRepository extends JpaRepository<Application, Integer> {

    @Override
    List<Application> findAll();

    List<Application> findApplicationsByStatusId(int status);

    Application findApplicationByApplicationId(int applicationId);
}
