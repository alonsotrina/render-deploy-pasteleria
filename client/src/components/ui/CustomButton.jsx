import React from "react";
import { Button } from "antd";

const CustomButton = ({
    name,
    color = "default",
    variant = "solid",
    href = "href",
    size = "middle",
    htmlType = "button",
    shape = 'shape',
    className,
    icon
}) => {
    return (
        <Button
            color={color}
            variant={variant}
            href={href}
            size={size}
            className={className}
            htmlType={htmlType}
            shape={shape}
            icon={icon}
        >
            {name}
        </Button>
    );
};

export default CustomButton;
