import React from "react";
import { useLoaderData } from "react-router-dom";
function Github() {
    const data = useLoaderData();
    // const [data, setData] = useState({});
    // useEffect(() => {
    //     fetch(`https://api.github.com/users/hiteshchoudhary`)
    //         .then((res) => res.json())
    //         .then((data) => setData(data));
    // }, []);
    // console.log(data);
    return (
        <div className="p-4 m-4 text-center text-white bg-gray-600 ">Github :{data.followers}</div>
    );
}

export default Github;

export const githubInfo = async () => {
    const response = await fetch("https://api.github.com/users/hiteshchoudhary").then((res) =>
        res.json()
    );
    return response;
};
