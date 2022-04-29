import React, { useCallback, useEffect, useState, PureComponent } from "react";
import Drag from "./Drag";

const DragLand = () => {
  const [winReady, setwinReady] = useState(false);
  useEffect(() => {
    setwinReady(true);
  }, []);

  return <>{winReady ? <Drag /> : null}</>;
};

export default DragLand;
