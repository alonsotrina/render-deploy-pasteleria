import React from 'react'
import { CustomButtom } from '../ui'
import { ArrowRightOutlined } from '@ant-design/icons';

const CaregoryCard = ({src, nameCategory='Nombre categoria', href, gradient='' }) => {
    return (
        <div className='relative rounded-2xl h-60 overflow-hidden p-6'>
            <img
                alt="example"
                src={src}
                className='absolute top-0 left-0 w-full h-full object-cover object-left rounded-2xl'
            />

            <div className="absolute inset-0 bg-gradient-to-br from-teal-800/100 via-black/20 to-teal-700/30 rounded-2xl z-2"></div>

            <div className='relative h-full'>
                <h3 className="relative z-3 text-sm text-white font-light mb-2">Categoria</h3>
                <h4 className="relative z-3 text-4xl text-white font-normal">{nameCategory}</h4>

                <CustomButtom
                    color="default"
                    href={href}
                    shape="circle"
                    size='large'
                    variant='link'
                    icon={<ArrowRightOutlined className="!text-[40px] !text-white" />}
                    className="!absolute right-0 bottom-0 z-4"
                />
            </div>
        </div>
    )
}

export default CaregoryCard