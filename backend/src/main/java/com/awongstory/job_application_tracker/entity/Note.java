package com.awongstory.job_application_tracker.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;
import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "Note")
public class Note {

    @Id
    @Column(name = "NoteId")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int noteId;

    @Column(name = "NoteText")
    private String noteText;

    @CreationTimestamp
    @Column(name = "DateCreated", insertable = false, updatable = false)
    private LocalDateTime dateCreated;

    @Column(name = "LastUpdated", insertable = false, updatable = false)
    private LocalDateTime lastUpdated;
}
