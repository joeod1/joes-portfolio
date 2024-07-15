import type { MetaFunction } from "@remix-run/node";
import React from "react";
import ReactDOM from "react-dom";
import useWindowScroll from "@react-hook/window-scroll";
/*import cats from "../components/cats";*/
import { Masonry, usePositioner } from "masonic";

export const meta: MetaFunction = () => {
  return [
    { title: "Joseph O'Dowd" },
    { name: "description", content: "Joseph O'Dowd's portfolio, bio, and hobbies" },
  ];
};

export default function App() {
  // Constructs the data for our grid items
  const [items] = React.useState(() =>
    Array.from(Array(5000), () => ({
      id: 100,
      name: "Wow",
      src: "leaf.jpg"//randomChoice(cats)
    }))
  );

  return (
    <main>
      <div>
        <Masonry
          // Provides the data for our grid items
          items={items}
          // Adds 8px of space between the grid cells
          columnGutter={8}
          // Sets the minimum column width to 172px
          columnWidth={172}
          // Pre-renders 5 windows worth of content
          overscanBy={5}
          // This is the grid item component
          render={FakeCard}
        />
      </div>
    </main>
  );
};

const FakeCard = ({ data: { id, name, src } }) => (
  <div className={style("card")}>
    <img className={style("img")} alt="kitty" src={src} />
    <span children={name} />
  </div>
);

/*const Header = () => {
  const scrollY = useWindowScroll(5);
  return (
    <h1 className={style("header", scrollY > 64 && "minify")}>
      <span role="img" aria-label="bricks">
        🧱
      </span>{" "}
      MASONIC
    </h1>
  );
};

const randomChoice = (items) => items[Math.floor(Math.random() * items.length)];
let i = 0;

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
*/