// import React from "react";
// import { useNavigate } from "react-router-dom";

// export default function Home() {
//   const navigate = useNavigate();

//   async function connect_btn() {
//     alert("Connect button clicked");

//     const isconnected = await window.aptos.isConnected();
//     if (isconnected) {
//       console.log("Wallet is connected");
//       navigate("/firstpage");
//       alert("Connected to wallet");

//       const account = await window.aptos.account();
//       console.log("Account:", account?.address);
//     } else {
//       console.log("Wallet is not connected");
//     }
//   }

//   return (
//     <div>
//       <h1>Welcome to the Home</h1>
//       <button className="stylebtn" onClick={connect_btn}>
//         Connect
//       </button>
//     </div>
//   );
// }

import { useNavigate } from "react-router-dom";

export default function Home() {
  var navigate = useNavigate();
  async function connectbtn() {
    // alert("Connect button clicked!");
    console.log("Connect button clicked!");
    const isconnected = await window.aptos.isConnected();
    console.log("Is connected:", isconnected);
    if (!isconnected) {
      await window.aptos.connect();
      navigate("/first");
    } else {
      console.log("Already connected");
      var add = await window.aptos.account();
      console.log("Account address:", add.address);
      alert("Your account address is: " + add.address);
      navigate("/first");
    }
  }

  return (
    <>
      <h1>Welcome to the Home Page</h1>
      <p>This is the home page of your application.</p>
      {/* <p>Your account address is: {add?.address}</p> */}
      <button onClick={connectbtn}>connect</button>
    </>
  );
}
