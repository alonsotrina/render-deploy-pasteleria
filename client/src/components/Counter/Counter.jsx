import React from 'react'
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { CustomButtonAction } from '../ui';

const Counter = ({ 
    counter, 
    setCounter, 
    classIcon='!text-[18px] !text-slate-600', 
    textCounter='text-2xl/15 font-normal text-slate-600 my-4',
    handelIncrease, 
    handleDiscount,
    disabled
}) => {

    const increase = () => {
        setCounter(prevCounter => prevCounter + 1);
    };

    const discount = () => {
        setCounter(prevCounter => prevCounter - 1);
    };

    return (
        <div className="flex items-center gap-4">
            <CustomButtonAction
                color="default"
                onClick={handleDiscount|| discount}
                shape="circle"
                size='large'
                variant='link'
                icon={<MinusOutlined className={`${classIcon}`} />}
                disabled={disabled}
            />

            <h4 className={`${textCounter}`}>{counter}</h4>

            <CustomButtonAction
                color="default"
                onClick={handelIncrease || increase}
                shape="circle"
                size='large'
                variant='link'
                icon={<PlusOutlined className={`${classIcon}`} />}
            />
        </div>
    )
}



export default Counter