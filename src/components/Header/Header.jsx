import React, { useState } from "react";
import MobileNav from "../MobileNav/MobileNav";
import Navigation from "../Navigation/Navigation";

export default function Header({
  openNav,
  setOpenNav,
  handleCategory,
  setCategory,
  setHome,
  setShowModal,
}) {
  const defaultState = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const navChoices = [
    { id: 0, item: "Movies" },
    { id: 1, item: "TV Shows" },
    { id: 2, item: "Watchlist" },
    { id: 3, item: "Favorites" },
  ];

  const handleClick = (e) => {
    navChoices.map((item, id) => {
      if (item.id == e && e == 0) {
        setCategory("movie");
        handleCategory();
      }
      if (item.id == e && e == 1) {
        setCategory("tv");
        handleCategory();
      }
      if (item.id == e && e == 2) {
        setCategory("watchlist");
      }
      if (item.id == e && e == 3) {
        setCategory("favorite");
      }
    });
    setOpenNav(false);
    setHome(false);
    setShowModal(false);
  };

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
