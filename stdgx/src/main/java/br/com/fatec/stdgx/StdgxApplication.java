package br.com.fatec.stdgx;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class StdgxApplication {

    public static void main(String[] args) {
        SpringApplication.run(StdgxApplication.class, args);
        System.out.println("""
                          __      .___            \s
                  _______/  |_  __| _/ _______  ___
                 /  ___/\\   __\\/ __ | / ___\\  \\/  /
                 \\___ \\  |  | / /_/ |/ /_/  >    <\s
                /____  > |__| \\____ |\\___  /__/\\_ \\
                     \\/            \\/_____/      \\/
                Version(1.0.0)
                """);
    }

}
