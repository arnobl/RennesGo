package rennesgo.data;

import java.util.Collections;
import java.util.HashSet;
import java.util.Set;

public class UserPref {
	private final Set<String> prefLines;

	public UserPref() {
		super();
		prefLines = new HashSet<>();
	}

	public void addPrefLine(final String line) {
		prefLines.add(line);
	}

	public void removePrefLine(final String line) {
		prefLines.remove(line);
	}

	public Set<String> getPrefLines() {
		return Collections.unmodifiableSet(prefLines);
	}
}
