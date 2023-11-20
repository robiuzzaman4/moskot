"use client";

import Navbar from "@/components/Navbar";
import Link from "next/link";

const UserDashboard = () => {

  return (
    <>
      {/* navbar */}
      <Navbar />

      {/* invite notification */}
      <div className="container user-dashboard">
        <h2 className="notifacation-title font-lg">
          You don&apos;t have any invite notification!
        </h2>
        <Link href="/admin-dashboard">
          <button className="btn-indigo-solid">Visit Admin Dashboard</button>
        </Link>
      </div>
    </>
  );
};

export default UserDashboard;
