package com.awongstory.job_application_tracker.repository;

import com.awongstory.job_application_tracker.entity.Note;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NoteRepository extends JpaRepository<Note, Integer> {

}
