package com.learning.demo;

import jakarta.annotation.PreDestroy;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.WebApplicationType;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class DbConntestApplication {

	private static final Logger logger = LogManager.getLogger(DbConntestApplication.class);

	public static void main(String[] args) {

//		ConfigurableApplicationContext app = new SpringApplicationBuilder(DbConntestApplication.class).web(WebApplicationType.NONE).run();
		SpringApplication.run(DbConntestApplication.class, args);
		logger.info("Hello, Log4j!");
//		app.close();

	}

	@GetMapping("/hello")
	public String hello(@RequestParam(value = "name", defaultValue = "world") String name){
		return String.format("Hello %s!", name);
	}

}
