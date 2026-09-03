package com.awongstory.job_application_tracker.enums;

import lombok.Getter;

@Getter
public enum Status {
    APPLIED(1),
    REJECTED(2),
    REJECTED_POST_INTERVIEW(3),
    SCREENING_SCHEDULED(4),
    VIDEO_SCHEDULED(5),
    TECHNICAL_SCHEDULED(6),
    RECRUITER_SCHEDULED(7),
    OFFER_RECEIVED(8),
    OFFER_ACCEPTED(9),
    OFFER_REJECTED(10),
    INTERNAL_HIRE(11),
    POSITION_CLOSED(99);

    private final int statusId;

    Status(int statusId) {
        this.statusId = statusId;
    }
}