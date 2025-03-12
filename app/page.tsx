// app/page.tsx

import { createRoot } from "react-dom/client"; 
import { useState } from "react";

funcion Counter() {
  const [count, setCount] = Usestate(0);
  const increment = () => setcount(count + 1 )

  return (
    <div>
      <button onClick={increment}>{count}</button>
    </div>
  )
}

const rootEl document.getElementById("root");