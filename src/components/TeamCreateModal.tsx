"use client";

import { TeamCreateModal } from "@/types";
import Modal from "./Modal";
import React from "react";
import { useCreateNewTeamMutation } from "@/redux/features/teams/teamsApi";
import toast from "react-hot-toast";

const TeamCreateModal = ({ title, isOpen, setIsOpen }: TeamCreateModal) => {
  const [createNewTeam, { data: teamDataResponse }] =
    useCreateNewTeamMutation();

  console.log("12", teamDataResponse);

  const handleTeamCreate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;

    const teamName = form.teamName.value;
    const teamCategory = form.teamCategory.value;
    const team = {
      teamName,
      teamCategory,
    };

    // create team
    createNewTeam(team);

    if (teamDataResponse?.success === true) {
      toast.success("Sucessfully Created New Team.");
    } else {
      toast.error("Somthing went wrong!")
    }
  };

  return (
    <div
      className={`team-create-modal ${isOpen ? "modal-open" : "modal-close"}`}
    >
      <Modal title={title}>
        <form className="team-create-form" onSubmit={handleTeamCreate}>
          <input
            className="input"
            type="text"
            name="teamName"
            placeholder="Team Name"
            required
          />
          <input
            className="input"
            type="text"
            name="teamCategory"
            placeholder="Team Category"
            required
          />
          <div className="team-create-modal-btns">
            <button
              type="button"
              className="btn-black-outline-pill"
              onClick={() => setIsOpen(!isOpen)}
            >
              Cancel
            </button>
            <button type="submit" className="btn-blue-solid-pill">
              Continue
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default TeamCreateModal;
