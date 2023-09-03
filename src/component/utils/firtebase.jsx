// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBiHGnu0QHzRMPGhcpQcyT1ymdepn_3_gc",
//   authDomain: "reactfullwebsite-contactform.firebaseapp.com",
//   databaseURL:
//     "https://reactfullwebsite-contactform-default-rtdb.firebaseio.com",
//   projectId: "reactfullwebsite-contactform",
//   storageBucket: "reactfullwebsite-contactform.appspot.com",
//   messagingSenderId: "34757178025",
//   appId: "1:34757178025:web:ef1fece00717f8de47afb8",
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

// const db = getDatabase(app, firebaseConfig.databaseURL);

// export { db };

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDm2AdrGvP1GQYv_SxHUYxjrkVP5YtxLG8",
  authDomain: "portfolio-dinithi.firebaseapp.com",
  databaseURL: "https://portfolio-dinithi-default-rtdb.firebaseio.com",
  projectId: "portfolio-dinithi",
  storageBucket: "portfolio-dinithi.appspot.com",
  messagingSenderId: "254058833422",
  appId: "1:254058833422:web:7705dcc3635e800ad47e5f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getDatabase(app, firebaseConfig.databaseURL);

export { db };
