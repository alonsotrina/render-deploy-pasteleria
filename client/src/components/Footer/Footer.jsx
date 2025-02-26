
import React from 'react';
import { Button, Input, Form } from 'antd';
import { CustomButtom } from '../ui';
import { Link } from 'react-router-dom';
import { SendOutlined } from '@ant-design/icons';
import { ERROR_MESSAGES } from '../../utils/constants/messages';
import { menuFooter, rrssFooter } from "../../utils/constants/Footer";

const Footer = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('values:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <footer className='bg-white py-8'>
      <div className="container-custom grid grid-cols-4 !gap-0">
        <div className="col-span-4 justify-between py-8">
          <h4 className='text-lg text-slate-800 font-light'>DOLCE VITA</h4>

          <div className='flex gap-4'>
            {
              menuFooter.map((item) => (
                <Link key={item.id} to={item.href}
                  className='!text-stone-800 text-base px-5 !border-r-[0.5px] last:border-r-0'
                >
                  {item.name}
                </Link>

              ))
            }
          </div>
        </div>

        <div className="col-span-4 justify-between py-12 border-y-[0.5px] border-slate-400">
          <div>
            <h4 className='text-base text-slate-700 font-semibold mb-2'>Suscríbete a nuestro boletín</h4>
            <p className='text-sm text-slate-700 font-light'>Las últimas noticias, artículos y recursos, enviados a tu bandeja de entrada cada semana.</p>
          </div>

          <Form
            name="Login"
            form={form}
            layout="inline"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            size="large"
          >
            <Form.Item
              name="email"
              className='!mr-2'
              rules={[
                {
                  required: true,
                  message: `${ERROR_MESSAGES.REQUIRED}`,
                },
              ]}
            >
              <Input
                placeholder="Ingresa tu email"
                className='input-field'
              />
            </Form.Item>


            <Form.Item label={null}>
              <Button
                size="large"
                type="primary"
                htmlType="submit"
                className='!rounded-[14px]'
              >
                <SendOutlined />
              </Button>
            </Form.Item>
          </Form>
        </div>

        <div className="col-span-4 justify-between py-5">
          <h4 className='text-sm text-slate-700 font-light'>© 2025 Your Company, Inc. All rights reserved.</h4>

          <div>
            {
              rrssFooter.map((item)=>(
                <CustomButtom
                  key={item.id}
                  color="default"
                  size="sm"
                  href={item.href}
                  variant='link'
                  icon={<item.icon />}
                />
              ))
            }
          </div>
        </div>
      </div>

    </footer>
  )
}

export default Footer