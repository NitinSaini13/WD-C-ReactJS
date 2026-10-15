import { useState } from "react"
function ObjectState() {
    const[name,Setname]=useState({
        id:157,
        name:"Nitin",
        course:"MCA"
    })

    function changeName(){
        Setname({
            ...name,
            name:"Nitin Saini"
        })
    }
  return (
    <div>
    <h2>Student Info</h2>
    <p>ID:{name.id}</p>
    <p>Name:{name.name}</p>
    <p>Course:{name.course}</p>
    <div>
        <button onClick={changeName}>Change Name</button>
    </div>
    </div>
  )
}

export default ObjectState