import Image from "next/image";
import Link from "next/link";

const Login = () => {
  return (
    <section className="login">
      <div className="login-card">
        <Image src="/team-logo.svg" alt="Team Logo" height={80} width={80} />

        <h2 className="font-lg login-title">
          Welcome to <span>Back!</span>
        </h2>

        <form className="form">
          <input
            className="input"
            type="email"
            name="email"
            placeholder="Email Address"
          />
          <input
            className="input"
            type="password"
            name="password"
            placeholder="Password"
          />
          <p className="forgot-pass">Forgot password?</p>
          <button type="submit" className="btn-indigo-solid">
            Continue
          </button>
          <p className="signup-cta">
            Don&apos;t have an account?
            <Link href="/signup" className="signup-link">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
