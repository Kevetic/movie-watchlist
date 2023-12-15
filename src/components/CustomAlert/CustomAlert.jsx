import React from "react";
import { motion } from "framer-motion";
import AddIcon from "@mui/icons-material/Add";
import FavoriteIcon from "@mui/icons-material/Favorite";

//delete button

export default function CustomAlert({ addedAction }) {
  const { type } = addedAction;
  return (
    <motion.div
      className="alert-container"
      initial={{ x: 1000, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, type: "spring", damping: 10 }}
    >
      <div className="custom-alert">Added to your {type}</div>
    </motion.div>
  );
}
