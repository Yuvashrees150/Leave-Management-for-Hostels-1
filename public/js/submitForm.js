import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import {
  getFirestore,
  getDoc,
  setDoc,
  doc,
  collection,
  addDoc,
  onSnapshot,
  query,
  where,
  getDocs,
} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";
import {
  getAuth,
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhuD-3yonP88M0i2Ix3tvDjQSB3EzFna0",
  authDomain: "leave-management-for-hostel.firebaseapp.com",
  databaseURL:
    "https://leave-management-for-hostel-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "leave-management-for-hostel",
  storageBucket: "leave-management-for-hostel.appspot.com",
  messagingSenderId: "799414591097",
  appId: "1:799414591097:web:ae9c26fe05a6335236fea8",
  measurementId: "G-ZDHQ7Z5WDT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
const user = auth.currentUser;
const id = localStorage.getItem("id");

const docRef = doc(db, "students", id);
const docSnap = await getDoc(docRef);

const name1 = document.getElementById("name1");
name1.innerHTML = docSnap.get("Name");
const name2 = document.getElementById("name2");
name2.innerHTML = docSnap.get("Name");
const id1 = document.getElementById("id1");
id1.innerHTML = id;

const out = document.getElementById("out");
const inn = document.getElementById("in");
const place = document.getElementById("place");
const purpose = document.getElementById("purpose");
const companion = document.getElementById("companion");

const docData = {
  Email: docSnap.get("Email"),
  ID: id,
  outDate: out.value,
  outTime: out.value,
  inDate: inn.value,
  inTime: inn.value,
  place: place.value,
  purpose: purpose.value,
  companion: companion.value,
  status: "pending",
  Name: docSnap.get("Name"),
};
const newDocRef = doc(collection(db, "applications"));
await setDoc(newDocRef, docData);
console.log("success");

window.location.replace("public/students-form.html");
