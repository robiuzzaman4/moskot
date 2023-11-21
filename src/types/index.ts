import React from "react";

export type Team = {
  _id?: string;
  teamName: string;
  teamCategory: string;
};

export type GeneralModal = {
  title: string;
  children: React.ReactNode;
};

export type TeamCreateModal = {
  title: string;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
