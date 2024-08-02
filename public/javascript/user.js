import { db, doc, getDoc,  } from "../javascript/firebase.js";

window.addEventListener("load", async ()=>{

    if (!localStorage.getItem("user")) {
        window.location.replace("../pages/login.html");
        return;
      }
    
      // console.log(localStorage.getItem("user"));


const uID = localStorage.getItem("user")

const res = await getDoc(doc(db,"todo-User",uID))
// console.log(res);


const nm = document.getElementById("name")
const em = document.getElementById("email")

nm.innerHTML = `Name: ${res.data().name} `
em.innerHTML = `Email: ${res.data().email} `
})