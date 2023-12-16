import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";

export default function MobileNav({
  handleHomeButton,
  handleOpenNav,
  defaultState,
  openNav,
  handleClick,
  navChoices,
}) {
  return (
    <nav className="mobile-nav">
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
  );
}
