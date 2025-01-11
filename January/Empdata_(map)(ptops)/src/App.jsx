// import React from 'react'
// import Empdata from './Empdata'
// import Empdis from './Empdis'
// const ans=Empdata.map((key)=> <Empdis
// Eno={key.Eno}
// Name={key.Name}
// Salary={key.Salary}




// />)
// function App() {

//   return (
//     <>
    
//     <table border="1">
//     <tr>
//       <td>Eno</td>
//       <td>Name</td>
//       <td>Salary</td>
//     </tr>
//      {ans}
//     </table>
    
//     </>
//   )
// }

// export default App


// import React from 'react'
// import { useState } from 'react'
// function App() {
//   const [cnt,setcnt]=useState(0)
//   const inc=()=>{
//       setcnt(cnt+1)
//   }
//   const dec=()=>{

//     if(cnt>=1){
//       setcnt(cnt-1)

//     }else{

//       alert("Ram")
//     }
      

 
//   }
//   return (
//    <>
//     <h1>Count :{cnt} </h1>
//     {/* <button onClick={()=>{setcnt(cnt+1)}}>Increment</button>

//     <button onClick={()=>{setcnt(cnt-1)}}>Decrement</button> */}
//      <button onClick={inc}>Increment</button>

//     <button onClick={dec}>Decrement</button>
   
//    </>
//   )
// }

// export default App

import { useState,useEffect } from "react";


const App=()=>{
  const [cnt,setcnt]=useState(1)
useEffect(()=>{

  if(cnt>=10){
    alert("jhg")
  }else{
    setTimeout(()=>{
  
      setcnt(cnt+1)
    
    
    
    },1000)
  }

})

return(
<>
<h1>Count:{cnt}</h1>


</>


)


}
export default App;