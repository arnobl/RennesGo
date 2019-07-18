package rennesgo.controller;

import org.springframework.lang.Nullable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import rennesgo.data.UserPref;

@RestController
public class UserPrefController {
	@Nullable
	private UserPref pref;

	@RequestMapping("/preflines/new/")
	public void newPrefLine(@RequestParam(value="idLine") final String idLine) {
		if(pref != null) {
			pref.addPrefLine(idLine);
		}
	}

	@RequestMapping("/preflines/del/")
	public void delPrefLine(@RequestParam(value="idLine") final String idLine) {
		if(pref != null) {
			pref.removePrefLine(idLine);
		}
	}

	@RequestMapping("/greeting")
	public UserPref greeting() {
		final UserPref userPref = new UserPref();
		userPref.addPrefLine("14");
		return userPref;
	}
}
