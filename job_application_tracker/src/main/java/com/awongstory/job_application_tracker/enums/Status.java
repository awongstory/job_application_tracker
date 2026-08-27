package com.awongstory.job_application_tracker.enums;

import lombok.Getter;

@Getter
public enum Status {
    APPLIED(1),
    REJECTED(2),
    SCREENING_SCHEDULED(3),
    VIDEO_SCHEDULED(4),
    TECHNICAL_SCHEDULED(5),
    RECRUITER_SCHEDULED(6),
    POSITION_CLOSED(99);

    private final int statusId;

    Status(int statusId) {
        this.statusId = statusId;
    }
}