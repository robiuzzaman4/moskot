"use client";

import { useGetTeamsQuery } from "@/redux/features/teams/teamsApi";
import TeamCard from "./TeamCard";
import { Team } from "@/types";
import Spinner from "./Spinner";

const Teams = () => {
  const { data, isLoading } = useGetTeamsQuery({});
  const teams: Array<Team> = data?.data;
  console.log(teams);

  return (
    <div className="container">
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="teams">
          {teams &&
            teams.length > 0 &&
            teams?.map((team) => <TeamCard key={team._id} {...team} />)}
        </div>
      )}
    </div>
  );
};

export default Teams;
