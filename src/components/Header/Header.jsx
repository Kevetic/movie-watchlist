import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header({
  openNav,
  setOpenNav,
  handleCategory,
  setCategory,
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
      }
      if (item.id == e && e == 1) {
        setCategory("tv");
      }
    });
    handleCategory();
    setOpenNav(false);
  };
  return (
    <header>
      <nav>
        <div
          onClick={() => setOpenNav(!openNav)}
          className="hamburger"
          style={{ color: openNav ? "black" : "white" }}
        >
          X
        </div>
        <AnimatePresence>
          {openNav && (
            <motion.ul
              initial={{ opacity: 0, y: -700, x: 0 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              exit={{
                y: -500,
                opacity: 0,
                transition: { duration: 1, ease: "easeInOut" },
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
