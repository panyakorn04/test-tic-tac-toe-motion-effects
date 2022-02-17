import { motion } from "framer-motion";
import React from "react";

const style = {
  width: "250px",
  margin: "0 auto",
  display: "grid",
  fontSize: "40px",
  fontWeight: "800",
};

const Refresh = (props) => (
  <motion.button
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    name={"btn"}
    style={style}
    onClick={props.onClick}
  >
    {props.value}
  </motion.button>
);

export default Refresh;
