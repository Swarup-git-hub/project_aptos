// import React from "react";
// import Home from "./Home";
// import Firstpage from "./Firstpage";
// import { BrowserRouter, Route, Routes } from "react-router-dom";

// export default function App() {
//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//           {/*<home/>*/}

//           <Route path="/" element={<Home />} />
//           <Route path="/firstpage" element={<Firstpage />} />
//           <Route path="/home" element={<Home />} />
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// }

App;

import React from "react";
import Home from "./Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FirstPage from "./Firstpage";
import "./index.css";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Home /> */}
          <Route path="/" element={<Home />} />
          <Route path="/first" element={<FirstPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
