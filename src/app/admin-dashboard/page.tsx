import Navbar from "@/components/Navbar";
import Teams from "@/components/Teams";

const AdminDashboard = () => {

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
            <button className="btn-indigo-outline create-team-btn">
              {/* create team button */}
              <span>+</span> Create a team
            </button>
          </section>
        </div>
      </div>

      {/* teams */}
      <Teams/>
    </>
  );
};

export default AdminDashboard;
