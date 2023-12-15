import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";

export default function Header({
  openNav,
  setOpenNav,
  handleCategory,
  setCategory,
  setHome,
  setShowModal,
  watchList,
  favorite,
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
        console.log("this is watchlist");
        setCategory("watchlist");
      }
      if (item.id == e && e == 3) {
        console.log("this is favorite");
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
      <nav>
        <div
          onClick={() => handleOpenNav()}
          className="hamburger"
          style={{
            color: "#45A29E",
          }}
        >
          {openNav ? <CloseIcon /> : <MenuIcon />}
        </div>
        <div
          className="home-icon"
          style={{
            color: "#45A29E",
          }}
          onClick={() => handleHomeButton()}
        >
          <LocalMoviesIcon />
        </div>
        <AnimatePresence>
          {openNav && (
            <motion.ul
              initial={{ opacity: 0, y: -700, x: 0 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              exit={{
                y: -500,
                opacity: 0,
                transition: { duration: 0.5, ease: "easeInOut" },
              }}
              transition={{
                duration: 0.5,
                ease: "linear",
                type: "spring",
                damping: 10,
              }}
            >
              <motion.div
                initial="hidden"
                animate="visible"
                className="list-container"
                transition={{ staggerChildren: 0.3 }}
              >
                {navChoices.map((items, idx) => {
                  return (
                    <motion.li
                      variants={defaultState}
                      transition={{ duration: 1 }}
                      key={idx}
                      id={idx}
                      onClick={(e) => handleClick(e.target.id)}
                    >
                      {items.item}
                    </motion.li>
                  );
                })}
              </motion.div>
            </motion.ul>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
