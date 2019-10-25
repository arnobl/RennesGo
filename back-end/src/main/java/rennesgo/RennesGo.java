package rennesgo;

import java.util.Collections;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityFilterAutoConfiguration;

@SpringBootApplication(exclude = {SecurityFilterAutoConfiguration.class })
public class RennesGo {
	public static void main(final String[] args) {
		final SpringApplication app = new SpringApplication(RennesGo.class);
		app.setDefaultProperties(Collections.singletonMap("server.port", "4444"));
		app.run(args);
	}
}
