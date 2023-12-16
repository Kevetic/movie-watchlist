import React, { useState } from "react";
import MobileNav from "../MobileNav/MobileNav";
import Navigation from "../Navigation/Navigation";

export default function Header({
  openNav,
  setOpenNav,
  defaultState,
  setHome,
  setShowModal,
  navChoices,
  handleClick,
}) {
  const handleHomeButton = () => {
    setHome(true);
    setOpenNav(false);
    setShowModal(false);
  };

  const handleOpenNav = () => {
    setOpenNav(!openNav);
    setShowModal(false);
  };

  return (
    <header>
      <MobileNav
        handleHomeButton={handleHomeButton}
        handleOpenNav={handleOpenNav}
        defaultState={defaultState}
        openNav={openNav}
        navChoices={navChoices}
        handleClick={handleClick}
      />
    </header>
  );
}
