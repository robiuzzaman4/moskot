"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const Login = () => {
  const router = useRouter();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;

    const email = form.email.value;
    const password = form.password.value;
    const user = {
      email,
      password,
    };

    fetch(
      "https://little-programmers-frontend-api-abdurrahmantalha.vercel.app/api/v1/user/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.message === "Successfully logged in") {
          form.reset();
          toast.success("Successfully logged in.");
          router.push("/user-dashboard");
        }
      });
  };

  return (
    <section className="login">
      <div className="login-card">
        <Image src="/team-logo.svg" alt="Team Logo" height={80} width={80} />

        <h2 className="font-lg login-title">
          Welcome to <span>Back!</span>
        </h2>

        <form className="form" onSubmit={handleLogin}>
          <input
            className="input"
            type="email"
            name="email"
            placeholder="Email Address"
            required
          />
          <input
            className="input"
            type="password"
            name="password"
            placeholder="Password"
            required
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
