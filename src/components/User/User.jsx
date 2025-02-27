import React from "react";
import { useParams } from "react-router-dom";
function User() {
    const { userId } = useParams();
    return <div className="text-3xl text-center text-black bg-orange-500">User : {userId}</div>;
}

export default User;
