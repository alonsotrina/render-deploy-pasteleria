import React from "react";
import { Button } from "antd";

const CustomButtonAction = ({
    name,
    color = "default",
    variant = "solid",
    size = "middle",
    htmlType = "button",
    shape = 'shape',
    disabled = false,
    className,
    icon,
    onClick
}) => {

    const handleClick = (e) => {
        e.preventDefault();
        if (onClick) {
            onClick(e); 
        }
    };

    return (
        
        <Button
            color={color}
            variant={variant}
            size={size}
            className={`${className} ${color === "default" ? "bg-gray-200" : ""}`} 
            htmlType={htmlType}
            shape={shape}
            icon={icon}
            onClick={handleClick}
            disabled={disabled}
        >
            {name}
        </Button>
    );
};

export default CustomButtonAction;
