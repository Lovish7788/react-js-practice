import React, { useContext } from "react";
import { UserContext } from "../Context/Usercontext";

export default function Profile(){
    const {user} = useContext(UserContext)
    if (!user) return <div>Please Login</div>
    return <div>Welcome: {" "}{user.username}</div>
}
