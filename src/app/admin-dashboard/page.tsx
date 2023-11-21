"use client";

import Navbar from "@/components/Navbar";
import TeamCreateModal from "@/components/TeamCreateModal";
import Teams from "@/components/Teams";
import { useState } from "react";

const AdminDashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {/* navbar */}
      <Navbar />

      {/* create team section */}
      <div className="container">
        <div className="create-team-page">
          <section className="create-team">
            <div className="create-team-texts">
              <h2 className="font-lg create-team-title">
                Team Creation management system
              </h2>
              <p className="existing-team-title">Existing Team</p>
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="btn-indigo-outline create-team-btn"
            >
              {/* create team button */}
              <span>+</span> Create a team
            </button>

            {/* team create modal */}
            <TeamCreateModal
              title="Create a new team"
              isOpen={isOpen}
              setIsOpen={setIsOpen}
            />
          </section>
        </div>
      </div>

      {/* teams */}
      <Teams />
    </>
  );
};

export default AdminDashboard;
