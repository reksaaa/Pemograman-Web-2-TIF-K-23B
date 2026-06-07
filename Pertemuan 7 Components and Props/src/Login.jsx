export default function Login() {
  return (
    <div className="login-wrapper">
      <div className="login-card">
        <div className="login-header">
          <div className="brand-logo">
            {/* Music note icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 18V5l12-2v13" />
              <circle cx="6" cy="18" r="3" fill="currentColor" />
              <circle cx="18" cy="16" r="3" fill="currentColor" />
            </svg>
          </div>
          <h1>MelodyHub</h1>
          <p>Sign in to explore your favorite artists</p>
        </div>

        <form className="login-form">
          <div className="form-group">
            <label className="form-label" htmlFor="email-input">
              EMAIL OR USERNAME
            </label>
            <div className="input-container">
              <span className="input-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </span>
              <input
                id="email-input"
                type="text"
                placeholder="you@example.com"
                className="form-input"
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="password-input">
              PASSWORD
            </label>
            <div className="input-container">
              <span className="input-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </span>
              <input
                id="password-input"
                placeholder="••••••••"
                className="form-input"
              />
              <button type="button" className="password-toggle"></button>
            </div>
          </div>

          <div className="form-options">
            <label className="remember-me">
              <input type="checkbox" />
              <span>Remember me</span>
            </label>
            <a
              href="#forgot"
              className="forgot-password"
              onClick={(e) => e.preventDefault()}
            >
              Forgot password?
            </a>
          </div>

          <button type="submit" className="btn-primary">
            Sign in
          </button>
        </form>

        <div className="social-login">
          <div className="divider">
            <span>Or continue with</span>
          </div>
          <div className="social-buttons">
            <button
              type="button"
              className="btn-social"
              aria-label="Sign in with Google"
              onClick={() => alert("Google login clicked")}
            >
              <svg viewBox="0 0 24 24">
                <path d="M12.24 10.285V13.4h6.887C18.2 15.614 15.645 18 12.24 18c-3.86 0-7-3.14-7-7s3.14-7 7-7c1.7 0 3.3.65 4.5 1.8l2.42-2.42C17.347 1.764 14.96 1 12.24 1c-5.5 0-10 4.5-10 10s4.5 10 10 10c5.5 0 9.77-3.886 9.77-9.77 0-.615-.054-1.21-.16-1.76H12.24z" />
              </svg>
            </button>
            <button
              type="button"
              className="btn-social"
              aria-label="Sign in with GitHub"
              onClick={() => alert("GitHub login clicked")}
            >
              <svg viewBox="0 0 24 24">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
