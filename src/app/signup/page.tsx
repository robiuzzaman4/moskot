import Image from "next/image";
import Link from "next/link";

const Signup = () => {
  return (
    <section className="signup">
      <div className="signup-card">
        <Image src="/team-logo.svg" alt="Team Logo" height={80} width={80} />

        <h2 className="font-lg signup-title">
          Sign Up Now
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
          <button type="submit" className="btn-indigo-solid">
            Continue
          </button>
          <p className="login-cta">
            Already have an account?
            <Link href="/login" className="login-link">
              Login
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Signup;
