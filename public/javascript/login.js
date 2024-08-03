window.addEventListener("load", ()=>{
    if(localStorage.getItem("user")){
        window.location.replace("../pages/index.html")
    }
})

import { auth, signInWithEmailAndPassword } from "./firebase.js";

const btn = document.querySelector("#login")
btn.addEventListener("click", async () => {
    try {
        const em = document.getElementById('email');
        const ps = document.getElementById('password');

        // Validate input values
        if (!em.value || !ps.value) {
            alert("Please enter both email and password");
            return;
        }

        const res = await signInWithEmailAndPassword(auth, em.value, ps.value);
        console.log("Login successfully:", res);
        localStorage.setItem("user", res.user.uid)
        window.location.href = "../pages/index.html"        

    } catch (error) {
        alert(`This user can not exist: ${error.message}`);

    }
})
