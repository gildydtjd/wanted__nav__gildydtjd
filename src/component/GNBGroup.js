import React, { useEffect, useState } from 'react';
import "../css/gnb.css";

function GNBGroup(data) {
    const [rsData, setRsData] = useState([]);
    console.log(data.data);

    useEffect(()=>{
        if(data!==null){
            setRsData(data.data);
        }
    },[data])

    const rsRender = rsData.map((rs, index)=>{
        return <div className="GNB__group" key={index}><ul key={index}>{rs.about} {rs.info.map((rrs,iindex)=>{
            return (
                <li key={iindex}>{rrs.name}</li>
            )
        })}
        </ul></div>
        }
    )
    return (
        <div className="GNB__div">
        <div className="GNB">
            {rsRender}
            </div>
            </div>
    );
}

export default GNBGroup;