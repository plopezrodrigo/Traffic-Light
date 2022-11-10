import React from "react";

/*setLights -> función que modifica nuestro state
lights -> valor actual del state
color -> color
*/

const Light = (props) => {

    const switchLight =()=> {
        props.setLights({...props.lights, [props.color]: props.lights[props.color] === `off` ? `on` : `off`,
        [props.color]: props.lights[props.color] === `on` ? `off` : `on`})
    }
    return (
        <div className={`light ${props.style}`} onClick={()=>{switchLight()}}>
        </div>
    )

}

export default Light;