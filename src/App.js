import React, { useState } from "react";
import "./styles.css";
import Header from "./component/header";
import { List, ListItems } from "./component/list";

export default function App() {
  const [list, setList] = useState([]);
  const [text, setText] = useState("");
  const headerProps = {
    onAdd: function() {
      setList([...list, text]);
      setText("");
    },
    text,
    onChange: function(event) {
      console.log("test", event.currentTarget.value);
      setText(event.currentTarget.value);
    }
  };
  console.log("text", headerProps.text);
  const listProps = {
    list
  };
  return (
    <div>
      <Header {...headerProps} />
      <List {...listProps}>
        {list.map((li, index) => (
          <ListItems text={li} key={index} />
        ))}
      </List>
    </div>
  );
}
