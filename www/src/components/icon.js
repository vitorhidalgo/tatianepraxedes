import React from "react";
import * as FontAwesome from "react-icons/fa";

export const Icon = props => {
  const { name, size, color } = props;
  const icon = React.createElement(FontAwesome[name]);

  return (
    <i style={{ fontSize: size, color: color }}>{icon}</i>
  );
};