import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <section className="auth">
        <div className="auth-card">
          <Image
            className="auth-card-img"
            src="/team-logo.svg"
            alt="Team Logo"
            height={80}
            width={80}
          />

          <h2 className="auth-card-title font-lg">
            Welcome to Agile3 Team <br /> Log in with your account to continue
          </h2>

          <div className="auth-card-buttons">
            <Link href="/login">
              <button className="btn-indigo-solid">Log in</button>
            </Link>
            <Link href="/signup">
              <button className="btn-indigo-solid">Sign up</button>
            </Link>
            <Link href="/admin-dashboard">
              <button className="btn-indigo-solid">Admin Dashboard</button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
