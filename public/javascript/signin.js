window.addEventListener("load", () => {
  if (localStorage.getItem("user")) {
    window.location.replace("../pages/index.html");
  }
});

import { auth, createUserWithEmailAndPassword, db, doc, setDoc,  } from "./firebase.js";

const btn = document.getElementById("signUp");
btn.addEventListener("click", async () => {
  try {
    const nm = document.getElementById('name');
    const em = document.getElementById('email');
    const ps = document.getElementById('password');

const userObj = {
  name : nm.value,
  email : em.value
}

    if (!em.value ||!ps.value) {
      alert("Please enter both email and password");
      return;
    }

    const res = await createUserWithEmailAndPassword(auth,em.value,ps.value);

const uid = res.user.uid
console.log(uid);

    const userResponse = await setDoc(doc(db, "todo-User", uid), userObj);
    localStorage.setItem("user", uid)
    window.location.href = "../pages/index.html"   


  } catch (error) {
    alert(`Error: ${error.message}`);
  }
});