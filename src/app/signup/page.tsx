"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const Signup = () => {
  const router = useRouter();

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;

    const email = form.email.value;
    const password = form.password.value;
    const user = {
      email,
      password,
    };

    fetch(
      "https://little-programmers-frontend-api.vercel.app/api/v1/user/register",
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
        if (data.message === "Successfully created user") {
          form.reset();
          toast.success("Sign Up Successfull.");
          router.push("/login");
        }
      });
  };

  return (
    <section className="signup">
      <div className="signup-card">
        <Image src="/team-logo.svg" alt="Team Logo" height={80} width={80} />

        <h2 className="font-lg signup-title">Sign Up Now</h2>

        <form className="form" onSubmit={handleRegister}>
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
