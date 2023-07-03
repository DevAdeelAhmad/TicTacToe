import React from "react";

interface BlockProps{
    value ?: string | null; //value can either be null or undefined too...
    onClick?: () => void
}

const Block:React.FC<BlockProps> = (props) => {
    return(
        <div onClick={props.onClick} className="block">
            {props.value}
        </div>
    )
}

export default Block;