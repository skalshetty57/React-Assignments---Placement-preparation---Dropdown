import React from "react";

function Select(props) {
  let itemList = props.optionList.map((val) => val.name);
  return (
    <>
      <select
        onChange={(e) => {
          props.onChange(e.target.value);
        }}
        id={props.id}
      >
        {itemList.map((val, idx) => (
          <option key={idx} value={idx}>
            {val}
          </option>
        ))}
      </select>
    </>
  );
}
export default Select;
