package rennesgo.controller;

import java.security.Principal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import rennesgo.data.DataPref;
import rennesgo.data.UserPref;

@RestController
@RequestMapping("go/prefs")
public class UserPrefController {
	@Autowired
	private DataPref prefs;

	@GetMapping("/lines/get")
	public UserPref getPrefs(final Principal principal) {
		return prefs.findUser(principal.getName())
			.findFirst()
			.orElse(null);
	}

	@PutMapping("/lines/new/{idLine}")
	public UserPref newPrefLine(@PathVariable final String idLine, final Principal principal) {
		return prefs.findUser(principal.getName())
			.peek(pref -> pref.addPrefLine(idLine))
			.findFirst()
			.orElse(null);
	}

	@PutMapping("/lines/del/{idLine}")
	public UserPref delPrefLine(@PathVariable final String idLine, final Principal principal) {
		return prefs.findUser(principal.getName())
			.peek(pref -> pref.removePrefLine(idLine))
			.findFirst()
			.orElse(null);
	}

	@GetMapping(value = "/greeting", produces = "application/json")
	public String testMethod(final Principal principal) {
		return "yo " + principal.getName();
	}
}
