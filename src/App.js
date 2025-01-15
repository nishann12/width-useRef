import React, { useEffect, useRef, useState } from "react";
const WidthHeightApp = () =>{
  const  containerRef =  useRef (null);
  const [dimensions,setDimensions] = useState ({
    width: 0,
    height:0,
  });

  const UpdateDimensions =() => {
    if (containerRef.current){
      setDimensions({
        width: containerRef.current.offsetWidth,
        height:containerRef.current.offsetHeight,
      });

    }
  };

 useEffect (()=>{
  UpdateDimensions();
  window.addEventListener("resize",UpdateDimensions);
  return () => window.removeEventListener ("resize",UpdateDimensions);
 },[]);
 return(
  <div
  className="d-flex justify-content-center flex-column align-items-center vh-100" 
  style={{ backgroundColor:"#f8f9fa"}} 
  >
    <div
    ref={containerRef}
    className="d-flex justify-content-center align-items-center"
    style={{
      backgroundColor:"red",
      color:"white",
      width:"50%",
      height:"20%",
      resize:"both",
      overflow:"auto",
      textAlign: "center",

    }}
    >
      {/* <div> */}
        <h4>width: {dimensions.width}px</h4> 
        <h4>height:{dimensions.height}px</h4>
      {/* </div> */}
    </div>
  </div>
 );
};
export default WidthHeightApp;