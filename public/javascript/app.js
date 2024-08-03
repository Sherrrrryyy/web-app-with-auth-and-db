window.addEventListener("load", () => {
    if (!localStorage.getItem("user")) {
        window.location.replace("../pages/signin.html")
    }
})

import { addDoc, collection, db, deleteDoc, doc, getDocs, updateDoc } from "./firebase.js"

const parent = document.getElementById("parent")
const uid = localStorage.getItem("user")
const userCollection = collection(db, uid)

const todo = document.getElementById("addTodo")
todo.addEventListener("click", async () => {
    try {
        const todoInput = document.getElementById('todoInput')
        // console.log(todoInput.value);
        
        if (todoInput.value.length < 2) {
            alert("Enter valid value")
            return
        }
        const userObj = {
            value: todoInput.value
        }
        
        todoInput.value = ""

        // const userCol = db.collection(uid)
        const docRef = await addDoc(userCollection, userObj)
        console.log(docRef);
        
        getTodo()
        // localStorage.getItem("user")

    } catch (error) {
        alert(error.message)
    }
})


const getTodo = async ()=>{
try {

    parent.innerHTML = ""
    const querySnapShot = await getDocs(userCollection)


    querySnapShot.forEach((doc) =>{
        

        const obj = {
id : doc.id,
...doc.data()
        }

parent.innerHTML += ` <div class="card-body">
                <h3>${obj.value}</h3>
                <button  id="${obj.id}" onclick="edtTodo(this)">Edit</button>
                <button id="${obj.id}" onclick="dltTodo(this)">Delete</button>
            </div>`
    })


} catch (error) {
    alert(error.message)
}
}

const edtTodo = async (ele) => {
    try {
        console.log("ele",ele.id);
        const editkrdo = prompt("Enter your edit task")
const updTodo = await updateDoc(doc(db,uid,ele.id),{
    value : editkrdo
    
})
     getTodo()

    } catch (error) {
      console.error(error);
    }
  };

  const dltTodo = async (ele) =>{
    try {
        // console.log("ele",ele.id);
        const del = await deleteDoc(doc(db,uid,ele.id))
        getTodo()
    } catch (error) {
        console.log("error",error.message);
    }
}


// const dltAllTodo = async () => {
//     try {
//       const querySnapshot = await getDocs(collection(db, uid));
//       querySnapshot.docs.map((doc) => deleteDoc(doc.ref));
//     //   await Promise.all(deletePromises);
//       parent.innerHTML = '';
//     } catch (error) {
//       console.log(error.message);
//     }
//   }


const dltAllTodo = document.getElementById("dltAllTodo")
dltAllTodo.addEventListener("click", async () =>{

    try {

        const querySnapshot = await getDocs(userCollection);
        querySnapshot.forEach((doc) => {
            deleteDoc(doc.ref);
          });

          parent.innerHTML = ""


    } catch (error) {
        console.log("error",error.message);
    }

}) 



const signOut = ()=>{

    localStorage.removeItem("user");
    localStorage.clear();
    window.location.replace("../pages/login.html");
}

window.addEventListener("load",getTodo)
window.edtTodo = edtTodo
window.dltTodo = dltTodo
window.dltAllTodo = dltAllTodo
window.signOut = signOut
