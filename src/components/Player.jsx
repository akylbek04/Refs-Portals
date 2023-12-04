import { useRef, useState } from "react";

export default function Player() {
  const name = useRef();

  /* useRef */
  // hook that return object with current property where any value can be stored. It give you access to actual DOM elements and persist between component rerenders(does not cause rerender when get updated)
  /* useRef */

  const [value, setValue] = useState("unknown entity");

  return (
    <section id="player">
      <h2>Welcome {value}</h2>
      <p>
        <input ref={name} type="text" />
        <button onClick={() => setValue(name.current.value)}>Set Name</button>
      </p>
    </section>
  );
}
