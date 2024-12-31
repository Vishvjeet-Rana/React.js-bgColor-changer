import { useState } from "react";
import Button from "./Button";

export default function App() {
  // Initialize state with value from localStorage, or default to a color if none exists
  // const [color, setColor] = useState(() => {
  //   // Get saved color from localStorage or use a default color (like "white")
  //   return localStorage.getItem("savedColor") || "white";
  // });

  const [color, setColor] = useState("");

  let bgChange = (newColor) => {
    setColor(newColor);
    // Save to localStorage whenever color changes
    // localStorage.setItem("savedColor", newColor);
  };

  return (
    <div
      className="absolute top-0 left-0 right-0 bottom-0 w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="flex flex-wrap inset-x-0 px-2 fixed bottom-5  justify-center">
        {/* button holder */}
        <div className="flex px-5 flex-wrap gap-3 justify-center items-center py-2 bg-gray-100 rounded-full ">
          <Button
            title={"red"}
            bgColor={"red"}
            textColor={"black"}
            onClick={() => bgChange("red")}
          />
          <Button
            title={"pink"}
            bgColor={"pink"}
            textColor={"black"}
            onClick={() => bgChange("pink")}
          />
          <Button
            title={"blue"}
            bgColor={"blue"}
            textColor={"white"}
            onClick={() => bgChange("blue")}
          />
          <Button
            title={"green"}
            bgColor={"green"}
            textColor={"black"}
            onClick={() => bgChange("green")}
          />
          <Button
            title={"violet"}
            bgColor={"violet"}
            textColor={"black"}
            onClick={() => bgChange("violet")}
          />
          <Button
            title={"orange"}
            bgColor={"orange"}
            textColor={"black"}
            onClick={() => bgChange("orange")}
          />
          <Button
            title={"yellow"}
            bgColor={"yellow"}
            textColor={"black"}
            onClick={() => bgChange("yellow")}
          />
          <Button
            title={"gray"}
            bgColor={"gray"}
            textColor={"black"}
            onClick={() => bgChange("gray")}
          />
        </div>
      </div>
    </div>
  );
}
