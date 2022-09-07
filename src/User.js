import React from "react";
// import "./User.css";
const data=[
    {
        "id":1,
        "username":"Nancy",
        "country":"Zambia"
    },
    {
    "id":2,
    "username":"Wairimu",
    "country":"Qatar"

    }
]
const User=({email})=>{
    return(
        <div>
            {data.map(item =><div
             style={{
                display:"flex", flexDirection:"column",
                border:"1px solid black", margin:"40%",marginLeft:"20%"
            }}
            key={item.id}>
                <h4>{item.username}</h4>
               <p>{item.country}</p>
               </div>)}
        </div>
    )
}
export default User;