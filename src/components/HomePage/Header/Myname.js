import React,{useState} from 'react'
import "./Header.css"
const Myname = () => {
    const[Name,Setname]=useState('');
   const clear =()=>{
     Setname("");
   }
    const handle=()=>{
    localStorage.setItem('Name',Name);
  Setname(" ");}
  return (
    <>
    <form onSubmit={clear}>
    <div><input placeholder='ENTER YOUR NAME BLOGE' value={Name} onChange={(e)=>Setname(e.target.value)}></input></div>
    <div><button classname="Raja" style={{border:"none", background:"#808000",position:"relative",top:"6px",left:"6pc"}} onClick={{handle}}>Nice To Meet</button></div>
    </form>
    </>
  )
}

export default Myname