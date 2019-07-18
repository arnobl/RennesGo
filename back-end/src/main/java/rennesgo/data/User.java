package rennesgo.data;

import java.util.Collection;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

//@Entity
public class User implements UserDetails {
//	@Id
//	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int userId;

	private String username;

	private String password;

	public int getUserId() {
		return userId;
	}

	void setUserId(final int userId) {
		this.userId = userId;
	}


	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return null;
	}

	@Override
	public String getPassword() {
		return password;
	}

	void setUsername(final String username) {
		this.username = username;
	}

	void setPassword(final String password) {
		this.password = password;
	}

	@Override
	public String getUsername() {
		return username;
	}

	@Override
	public boolean isAccountNonExpired() {
		return false;
	}

	@Override
	public boolean isAccountNonLocked() {
		return false;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return false;
	}

	@Override
	public boolean isEnabled() {
		return false;
	}
}
