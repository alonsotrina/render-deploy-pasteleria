import React from 'react'
import { Input, Form } from 'antd';

const CustomInput = ({label, name, rules =[], placeholder, className, inputClassName, type, dependencies, disabled=false }) => {


    const renderInput = (inputType) => {
        const inputTypes =  {
            text:  <Input placeholder={placeholder} className={`input-field ${inputClassName}`} disabled={disabled} />,
            password: <Input.Password placeholder={placeholder} className={`input-field ${inputClassName}`} disabled={disabled}/>,
        }
    
        return inputTypes[inputType] || inputTypes.text;
    }

    return (
        <Form.Item
            label={label}
            name={name}
            rules={rules}
            className={`!mb-2 ${className}`}
            dependencies={[{dependencies}]}
        >
            {renderInput(type)}
        </Form.Item>
    )
}

export default CustomInput