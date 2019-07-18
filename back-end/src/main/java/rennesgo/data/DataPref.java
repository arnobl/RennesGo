package rennesgo.data;

import java.util.Collections;
import java.util.HashSet;
import java.util.Set;
import java.util.stream.Stream;
import org.springframework.stereotype.Component;

@Component
public class DataPref {
	private final Set<UserPref> prefs;

	public DataPref() {
		super();
		prefs = new HashSet<>();
	}

	public void addPref(final String username) {
		prefs.add(new UserPref(username));
	}

	public Stream<UserPref> findUser(final String username) {
		return prefs
			.parallelStream()
			.filter(pref -> pref.getUsername().equals(username));
	}

	public void delPref(final String username) {
		findUser(username)
			.findFirst()
			.ifPresent(pref -> prefs.remove(pref));
	}

	public Set<UserPref> getPrefs() {
		return Collections.unmodifiableSet(prefs);
	}
}
