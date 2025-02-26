import React from "react";
import { CustomAlert, CustomButtonAction, CustomInput, ModalComponent } from "../ui";
import { Input, Button, Form } from "antd";
import { ERROR_MESSAGES } from "../../utils/constants/messages";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const LoginModal = ({ isOpen, toggle }) => {
  const navigate = useNavigate();
  const { session, handleSession } = useAuth();
  const [form] = Form.useForm();

  // Función submit login
  const onFinish = async (values) => {
    const { email, password } = values
    await handleSession(email, password);
  };

  // Limpiar el formulario al cerrar el modal
  const handleClose = () => {
    form.resetFields();
    toggle();
  };

  const handleRegister = () => {
    form.resetFields();
    toggle();
    navigate('/register')
  };

  return (
    <ModalComponent
      title=""
      isOpen={isOpen}
      onClose={handleClose}
      className="text-2xl"
    >
      <h3 className="text-xl font-semibold text-stone-800 mt-5 mb-2">
        Inicia sesión para comprar
      </h3>
      <h3 className="text-[16px] font-light text-stone-800 mb-5">
        Por favor, ingresa tu correo y contraseña para continuar.
      </h3>

      {session.showMsg && (
        <CustomAlert
          type="error"
          msg={session.msg}
          className="!mb-4"
        />
      )}

      <Form
        form={form}
        layout="vertical"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        autoComplete="off"
        size="large"
      >
        <CustomInput
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: `${ERROR_MESSAGES.REQUIRED}`,
            },
            {
              type: 'email',
              message: 'Por favor, ingresa un email válido.'
            },
          ]}
          placeholder="Ingresa tu email"
        />

        <CustomInput
          label="Contraseña"
          name="password"
          type="password"
          rules={[
            {
              required: true,
              message: `${ERROR_MESSAGES.REQUIRED}`,
            },
            {
              min: 6,
              message: 'La contraseña debe tener al menos 6 caracteres.',
            },

          ]}
          placeholder="Ingresa tu contraseña"
        />


        <Form.Item>
          <Button
            size="large"
            type="primary"
            htmlType="submit"
            block
            className="mt-2 !rounded-[14px]"
          >
            Ingresar
          </Button>
        </Form.Item>
      </Form>

      <div className="justify-center my-[24px]">
        <h4 className="text-sm font-light text-stone-800">
          ¿No tienes cuenta?
        </h4>


        <CustomButtonAction
          color="default"
          onClick={handleRegister}
          size="small"
          name='Regístrate aquí.'
          variant='link'
        />
      </div>
    </ModalComponent>
  );
};

export default LoginModal;
