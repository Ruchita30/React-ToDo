import React from "react";
import Input from "./input";
import Add from "./add";

function header({ text, onAdd, onChange }) {
  return (
    <div>
      <Input value={text} onChange={onChange} />
      <Add onClick={onAdd} />
    </div>
  );
}

export default header;
