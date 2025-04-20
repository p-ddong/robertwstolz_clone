import React, { useState } from "react";
import "./Sale.scss";
import { IoCloseCircleOutline } from "react-icons/io5";
const Sale = () => {
  const [isClose,setIsClose] = useState<boolean>(false)

  return (
    <div className="sales">
      <div className={`sale_content ${isClose?"hidden":""}`} onClick={()=>setIsClose(true)}>
        <div className="container">
          <IoCloseCircleOutline className="close_btn" onClick={()=>setIsClose(true)}/>
        <p>Sale up to 50%</p>
        <button>More infomation</button>
        </div>
      </div>
      <div className={`sale_block ${isClose?"":"hidden"}`} onClick={()=>setIsClose(false)}>Sale up to 50%</div>
    </div>
  );
};

export default Sale;
