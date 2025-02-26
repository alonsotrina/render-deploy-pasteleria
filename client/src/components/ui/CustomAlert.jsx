import React from 'react'
import { Alert } from 'antd';

const CustomAlert = ({ type = 'info', msg = 'Info Text', className }) => {
    return (
        <Alert
            message={msg}
            type={type}
            className={`${className}`}
            closable
        />
    )
}

export default CustomAlert