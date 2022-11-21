import React from "react";

/*setLights -> función que modifica nuestro state
lights -> valor actual del state
color -> color
*/

const Light = (props) => {

    const switchLight =()=> {
        props.setLights(props.color)}
    return (
        <div className={`light ${props.color} ${props.style}`} onClick={()=>{switchLight()}}>
        </div>
    )

}

export default Light;