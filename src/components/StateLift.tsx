import React from "react";

const StateLift = ({ msg }: { msg: string }) => {
  return (
    <div>
      StateLift
      <p>This is message: {msg}</p>
    </div>
  );
};

export default StateLift;
