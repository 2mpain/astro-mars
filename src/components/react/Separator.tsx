import React from "react";

interface Props {
    width?: string;
    color?: string;
    className?: string;
}

const Separator: React.FC<Props> = ({ width, color, className }) => {
    return (
        <div 
            className={className} 
            style={{ width: width, backgroundColor: color }}
        />
    );
};

export default Separator;
