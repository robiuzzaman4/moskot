import { Team } from "@/types";
import Image from "next/image";

const TeamCard = ({ teamName, teamCategory }: Team) => {
  return (
    <div className="team-card">
        <Image
            className=""
            src="/team.svg"
            alt="Team Avatar"
            height={60}
            width={60}
          />
      <h2 className="team-name">{teamName}</h2>
      <p className="team-category">{teamCategory}</p>
    </div>
  );
};

export default TeamCard;
