import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';

const CustomDropdown = ({items, title, className}) => (
  <Dropdown
    menu={{ items }}
    overlayStyle={{ minWidth: '200px'}}
  >
    <a onClick={(e) => e.preventDefault()} className={`${className}`}>
      <Space>
        { title }
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
);
export default CustomDropdown;