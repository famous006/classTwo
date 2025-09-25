import React, { useEffect } from 'react'
// import myHero from "../assets/header.png"
import PropsBtn from '../components/PropsBtn'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Herosection = () => {
    let count = useSelector(state => state.counterReducer.count)
    useSelector(function(state) {return state })
    let navigate = useNavigate()
    useEffect(() => {
        getDashboard()
    }, [])
    let token = localStorage.token
    let url = "http://localhost:5444/user/dashboard"
    const getDashboard = ()=>{
        axios.get(url,{
            headers:{
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
        .then((res)=>{
            if(res.data.status){
                console.log(res);
            }
            else{
                localStorage.removeItem(token)
                navigate("/signin")
            }
        })
        .catch((err)=>{
            console.error("Error:",err.response?err.response.data:err);
        })
    }
    const test = () => {
        alert("Yeah on point")
    }
    const test1 = () => {
        alert("Yeah on point again")
    }
    const test2 = () => {
        alert("Yeah on point too")
    }

    const logOut = () => {
        localStorage.removeItem(token)
        navigate("/signin")
    }
    return (
        <>
            <div style={{ display: "flex", gap: "40px", padding: "0px 300px", alignItems: "center", justifyContent: "center    " }}>
                <div style={{ fontWeight: "900" }} className='hero'>Here is my Hero section Page</div>
                {/* <img src={myHero} alt="" /> */}
            </div>
            <button onClick={logOut}>
                Log Out
            </button>
            <PropsBtn title="Edit" color="btn btn-primary" test={test} />
            <PropsBtn title="Delete" color="btn btn-danger" test={test1} />
            <PropsBtn title="Rusticate" color="btn btn-success" test={test2} />

        </>
    )
}

export default Herosection