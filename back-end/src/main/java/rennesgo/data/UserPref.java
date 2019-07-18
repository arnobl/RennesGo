package rennesgo.data;

import java.util.Collections;
import java.util.HashSet;
import java.util.Set;

public class UserPref {
	private final Set<String> prefLines;
	private final String username;

	public UserPref(final String username) {
		super();
		this.username = username;
		prefLines = new HashSet<>();
	}

	public void addPrefLine(final String line) {
		prefLines.add(line);
	}

	public void removePrefLine(final String line) {
		prefLines.remove(line);
	}

	public String getUsername() {
		return username;
	}

	public Set<String> getPrefLines() {
		return Collections.unmodifiableSet(prefLines);
	}
}
