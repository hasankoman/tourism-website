import Header from "./Components/Header";
import Home from "./Components/Home";
import { useElementSize } from "use-element-size";
import { useEffect, useState } from "react";
import { useResizeDetector } from "react-resize-detector";
import { Outlet } from "react-router-dom";

function App() {
  const { width, height, ref } = useResizeDetector();

  return (
    <main
      className="text-white relative h-full overflow-x-hidden overflow-y-auto sm:overflow-hidden "
      ref={ref}
    >
      <Header width={width} />
      <Outlet />
    </main>
  );
}

export default App;
