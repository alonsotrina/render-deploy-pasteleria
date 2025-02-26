import React from 'react'
import { Form, Select } from 'antd';

const CustomInput = ({ label, name, rules = [], placeholder, className, inputClassName, disabled = false, onChange, options }) => {

    return (
        <Form.Item
            label={label}
            name={name}
            rules={rules}
            className={`!mb-2 ${className}`}
        >
            <Select
                placeholder={placeholder}
                className={inputClassName}
                disabled={disabled}
                showSearch
                optionFilterProp="children"
                onChange={onChange}
                filterOption={(input, option) =>
                    option.children.toLowerCase().includes(input.toLowerCase())
                }
            >
                {
                    options?.map((item, index) => (
                        <Select.Option value={item.value} key={index}>{item.label}</Select.Option>
                    ))
                }
            </Select>
        </Form.Item>
    )
}

export default CustomInput