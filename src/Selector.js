import AssessmentButton from "./AssessmentButton.js";
import { useState } from "react";

export default function Selector({ quant }) {
  const [selectedButton, setSelected] = useState(-1);

  function clickHandler(n) {
    setSelected(n);
  }

  var list = [];
  for (var i = 0; i < quant; i++) {
    list[i] = i + 1;
  }
  var content = list.map((number) => (
    <AssessmentButton
      value={number}
      selected={selectedButton == number}
      onPress={() => clickHandler(number)}
    />
  ));
  return <div className="selector">{content}</div>;
}
