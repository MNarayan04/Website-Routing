import React from 'react';
import { useEffect,useState  } from 'react';
import { useLoaderData } from 'react-router-dom';


function Github() {
    // const [data,setdata]=useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setdata(data)
    //         console.log(data.followers
    //             );
    //     })
    // })

    const data = useLoaderData()
    return (
        <div>
           <div className=' text-center m-3  bg-gray-600 text-white'>Github : {data?.followers
}</div> 
    {/* <img src={data.} alt="" srcset=""> */}
        </div>
    );
}

export default Github


export const githubloader =async ()=>{
    const res = await fetch('https://api.github.com/users/hiteshchoudhary')
    return res.json()
}