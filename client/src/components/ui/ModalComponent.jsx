import React from 'react'
import { Modal } from 'antd';

const ModalComponent = ({ title, isOpen, onClose, children, size = 'sm'}) => {
  const sizes = {
    sm: 400,
    md: 550,
    lg: 800,
    xl: 1100,
    full: '100vw',
  }; 
  return (
    <Modal
      title={title}
      footer={null}
      open={isOpen}
      onCancel={onClose}
      centered
      width={sizes[size]}
    >
      {children}
    </Modal>
  );
};
export default ModalComponent