import React from 'react'
import headerImage from "../../assets/header.jpg";
import { CustomButtom } from '../ui'

const HeaderHome = ({title, desc, src, href}) => {
    return (
        <header
            className="relative container-custom h-[70vh] flex flex-row rounded-3xl bg-black bg-opacity-80 z-1"
            style={{ backgroundImage: `url(${headerImage})`, backgroundSize: "cover", backgroundPosition: "center" }}
        >
            <div className="absolute inset-0 bg-gradient-to-tr from-black/100 via-black/40 to-black/10 rounded-4xl z-2"></div>

            <div className="relative z-3 basis-3/4 flex items-end px-8 pb-[72px]">
                <div className='w-[80%]'>
                    <h1 className="text-4xl/12 text-white font-normal pb-3">{title}</h1>
                    <p className="text-lg/8 text-white font-light mb-4">{desc}</p>

                    <CustomButtom
                        color="danger"
                        size="large"
                        name="Ver prodcuto"
                        href={href}
                    />
                </div>
            </div>

            <div className="basis-1/4 py-5 px-4 relative z-3">
                <div className="bg-white/15 rounded-2xl p-6">
                    <img alt="example" src={headerImage} className='rounded-2xl mb-2 h-[140px] object-contain' />
                    <h1 className="text-lg/6 text-white font-bold pb-3">Tarta de Chocolate Supremo</h1>
                    <p className="text-sm text-white mb-5">
                        Bizcocho esponjoso de cacao, relleno con ganache d....
                    </p>
                    <CustomButtom
                        color="default"
                        name="Ver prodcuto"
                        href='/basket'
                    />
                </div>
            </div>
        </header>
    )
}

export default HeaderHome