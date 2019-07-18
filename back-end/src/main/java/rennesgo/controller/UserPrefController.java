package rennesgo.controller;

import org.springframework.lang.Nullable;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import rennesgo.data.UserPref;

@RestController
@RequestMapping("go")
public class UserPrefController {
	@Nullable
	private UserPref pref;

	@PutMapping("/preflines/new/{idLine}")
	public void newPrefLine(@PathVariable final String idLine) {
		if(pref != null) {
			pref.addPrefLine(idLine);
		}
	}

	@DeleteMapping("/preflines/del/{idLine}")
	public void delPrefLine(@PathVariable final String idLine) {
		if(pref != null) {
			pref.removePrefLine(idLine);
		}
	}

	@GetMapping(value = "/greeting", produces = "application/json")
	public UserPref greeting() {
		final UserPref userPref = new UserPref();
		userPref.addPrefLine("14");
		return userPref;
	}
}
