package com.awongstory.job_application_tracker.repository;

import com.awongstory.job_application_tracker.entity.Application;
import java.util.List;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ApplicationRepository extends CrudRepository<Application, Integer> {

    @Override
    List<Application> findAll();

    List<Application> getApplicationsByStatusId(int status);

}
