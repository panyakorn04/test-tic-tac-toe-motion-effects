import { motion } from "framer-motion";
import React from "react";
import Box from "./box";

// creating a sqaure box in with grid layout
const style = {
  width: "50vw",
  height: "50vh",
  margin: "0 auto",
  display: "grid",
  gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)",
};

// props has 'value' which is a array of 9 charectors that needs to de displayed in box.js
// and a 'onClick' function that needs to be called when button is clicked
// restoring array of box.jsx
const Board = (props) => (
  <motion.div
    style={style}
    initial={{ scale: 0 }}
    animate={{ rotate: 180, scale: 1 }}
    transition={{
      type: "spring",
      stiffness: 260,
      damping: 20,
    }}
  >
    {[...Array(9)].map((_, pos) => (
      <Box
        key={pos}
        name={pos}
        onClick={() => props.onClick(pos)}
        value={props.value[pos]}
      />
    ))}
  </motion.div>
);

export default Board;
