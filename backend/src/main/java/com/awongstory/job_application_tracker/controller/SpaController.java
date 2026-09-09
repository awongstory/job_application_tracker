package com.awongstory.job_application_tracker.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class SpaController {

    @GetMapping(value = {
        "/{path:[^\\.]*}",
        "/*/{path:[^\\.]*}",
        "/**/{path:[^\\.]*}"
    })
    public String forwardToFrontend() {
        return "forward:/index.html";
    }
}
