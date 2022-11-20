import React, {useEffect, useState} from 'react';
// import "./User.css";
// const data=[
//     {
//         "id":1,
//         "username":"Nancy",
//         "country":"Zambia"
//     },
//     {
//     "id":2,
//     "username":"Wairimu",
//     "country":"Qatar"

//     }
// ]
const User=()=>{ 
    const [User, setUser] = useState();
    const [loading, setloading] = useState(false);
    useEffect(() => {
        userData()
    },[]);
const userData = () => {
     fetch('https://dummyjson.com/users')
    .then(res => res.json())
    .then((data) => {
        setUser(data.users);
        setloading(true);
        console.log("data fetch --> ", User);
    })
    .catch(error=>console.log(error));
}
    if(!loading){
        return <div>Loading ...</div>
    }
    return(
        <div>
            {User.map(item =>(
            <div>
                <img src={item.image} alt="user"/>
                <p>{item.firstName} {item.maidenName}</p>
                <h4>Details</h4>
                <p>Age: {item.age}</p>
                <p>Height: {item.height}</p>
                <p>Gender: {item.gender}</p>
                <p>Contact: {item.email}</p>
            </div>
            ))}
        </div>
    );
};
export default User;