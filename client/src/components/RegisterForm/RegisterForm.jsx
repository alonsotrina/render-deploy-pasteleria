import React, { useEffect, useState } from "react";
import { Button, Form, Select } from "antd";
import { CustomInput } from "../ui";
import { useAuth } from "../../hooks/useAuth";
import { formFields } from "../../utils/constants/formFields";
import { regiones } from "../../utils/constants/Regiones";
import { useComuna } from "../../context/ComunasContext";
import { ERROR_MESSAGES } from "../../utils/constants/messages";

const RegisterForm = () => {
  const [form] = Form.useForm();
  const { session, handleRegister, perfil } = useAuth();
  const { comunaList,  region, setRegion, comuna, setComuna } = useComuna();

  // Filtra la comuna del perfil
  useEffect(() => {
    if (session.token) {
      const comunaFiltrada = comunaList.find(c => c.id === perfil.comuna_id);
      setComuna(comunaFiltrada.id)
    }
  }, [comunaList, perfil]);

  //Asigna valor  alos input del formulario profile
  useEffect(() => {
    if (session.token) {
      form.setFieldsValue({
        ...perfil,
        region: regiones[0]?.label,
        comuna: comuna
      });
      setRegion(regiones[0].label);
    }
  }, [perfil, form, comuna]);

  // limpiar el form cuando el usuario se registra
  useEffect(() => {
    if (session.msg === "Usuario registrado con exito.") {
      form.resetFields();
    }
  }, [session.msg, form]);

  // Obteniendo el valor del select región 
  const handleRegionChange = (value) => {
    setRegion(value);
  };

  // Función submit registro usuario
  const onFinish = async (values) => {

    console.log('values', values )
    if (session.token) {
      console.log('enviando otra data')
    } else {
      await handleRegister(values);
    }
  };

  return (
    <>
      <Form
        name="registerForm"
        form={form}
        layout="vertical"
        initialValues={perfil}
        onFinish={onFinish}
        autoComplete="off"
        size="large"
        className="grid grid-cols-3 gap-2"
      >
        {formFields.slice(0, 3).map((item, index) => (
          <CustomInput
            key={index}
            type={item.type}
            label={item.label}
            name={item.name}
            rules={item.rules}
            placeholder={item.placeholder}
            disabled={item.disabled}
          />
        ))}

        {/* {formLocation.map((item, index) => (
          <CustomInputSelect
            key={index}
            label={item.label}
            name={item.name}
            rules={item.rules}
            placeholder={item.placeholder}
            options={item.options}
            disabled={session.token ? false : (item.name === "comuna" ? !region : item.disabled)}
            onChange={handleRegionChange}
          />
        ))} */}

        <Form.Item
          label="Región 3"
          name="region"
          rules={
            [
              { required: true, message: ERROR_MESSAGES.REQUIRED },
            ]
          }
          className="!mb-2"
        >
          <Select
            placeholder="Seleciona una opción"
            showSearch
            optionFilterProp="children"
            onChange={handleRegionChange}
            filterOption={(input, option) =>
              option.children.toLowerCase().includes(input.toLowerCase())
            }
          >
            <Select.Option value="1">R. Metro</Select.Option>
          </Select>
        </Form.Item>


        <Form.Item
          label="Comuna"
          name="comuna_id"
          rules={
            [
              { required: true, message: ERROR_MESSAGES.REQUIRED },
            ]
          }
          className="!mb-2"
        >
          <Select
            placeholder="Seleciona una opción"
            disabled={!region}
            showSearch
            optionFilterProp="children"
            filterOption={(input, option) =>
              option.children.toLowerCase().includes(input.toLowerCase())
            }
          >
            {
              comunaList?.map((item, index) => (
                <Select.Option value={item.id} key={index}>{item.nombre_comuna}</Select.Option>
              ))
            }
          </Select>
        </Form.Item>


        {formFields.slice(3, 7).map((item, index) => (
          <CustomInput
            key={index}
            type={item.type}
            label={item.label}
            name={item.name}
            rules={item.rules}
            placeholder={item.placeholder}
            disabled={
              item.name === "direccion"
                ? !region
                : item.name === "email"
                  ? !!session.token
                  : item.disabled
            }
          />
        ))}

        <Form.Item label={null}>
          <Button
            size="large"
            type="primary"
            htmlType="submit"
            block
            className="mt-2 !rounded-[14px]"
          >
            {session.token ? 'Editar' : 'Ingresar'}
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default RegisterForm;
