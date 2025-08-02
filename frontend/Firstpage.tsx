// import React from "react";
// import { useNavigate } from "react-router-dom";

// export default function Firstpage() {
//   const navigate = useNavigate();

//   async function disconnect_btn() {
//     alert("Disconnect button clicked");

//     // try {
//     const disconnected = await window.aptos.disconnect();
//     if (disconnected) {
//       console.log("Wallet is disconnected");
//       alert("Disconnected from wallet");
//       navigate("/home");
//     } else {
//       console.log("Wallet is not disconnected");
//     }

//     //   } catch (error) {
//     //     console.error("Error disconnecting wallet:", error);
//     //   }
//   }

//   return (
//     <div>
//       <h1>Welcome to the First page</h1>
//       <button className="stylebtn" onClick={disconnect_btn}>
//         Disconnect
//       </button>
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function FirstPage() {
  const [name, setname] = useState("");
  const [number, setnumber] = useState("");
  useEffect(() => {
    checkConnection();
  }, []);

  async function checkConnection() {
    const isConnected = await window.aptos.isConnected();
    console.log("Is connected:", isConnected);
    if (!isConnected) {
      alert("you are not connected to the wallet, redirecting to main page");
      console.log("Not connected, redirecting to home page.");
      navigate("/");
    } else {
      var add = await window.aptos.account();
      console.log("Account address:", add?.address);
    }
  }

  var navigate = useNavigate();

  async function Disconnfun() {
    window.aptos.disconnect();
    alert("Disconnected from wallet");
    console.log("Disconnected from wallet");
    navigate("/");
  }

  function submitfun() {
    event?.preventDefault();
    console.log("Name:", name);
    console.log("Number:", number);
  }

  return (
    <div>
      <h1>This is FirstPage</h1>
      <form>
        <label htmlFor="address">Enter Name:</label>
        <input type="text" id="name" name="name" required onChange={(e) => setname(e.target.value)} />
        <br />
        <label htmlFor="address">Enter number:</label>
        <input type="text" id="number" name="number" required onChange={(e) => setnumber(e.target.value)} />
        <br />
        <button onClick={submitfun}>Submit</button>
      </form>
      <button onClick={Disconnfun}>Disconnect</button>
    </div>
  );
}
