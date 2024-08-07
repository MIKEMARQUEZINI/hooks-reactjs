import React from "react";

type ComplementStateLiftProps = {
  handleChangeMessage: (message: string) => void;
};

const ComplementStateLift = ({
  handleChangeMessage,
}: ComplementStateLiftProps) => {
  const allMessages = ["Hello", "World", "React", "Hooks", ""];

  return (
    <div>
      ComplementStateLift{" "}
      <button onClick={() => handleChangeMessage(allMessages[0])}>1</button>
      <button onClick={() => handleChangeMessage(allMessages[1])}>2</button>
      <button onClick={() => handleChangeMessage(allMessages[2])}>3</button>
      <button onClick={() => handleChangeMessage(allMessages[3])}>4</button>
      <button onClick={() => handleChangeMessage(allMessages[4])}>Reset</button>
    </div>
  );
};

export default ComplementStateLift;
