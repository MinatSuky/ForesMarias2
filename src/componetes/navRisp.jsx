import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
export const Risp = ({ negacion, animate }) => {
    return (
        <div className={classNames("fixed  flex justify-end items-center top-0 right-[1px] w-[200vh] h-[100vh] z-10", {
            'slide-in-right': animate
        })}>
            <div className="cont1 bg-[#2F2F2F] rounded-tl-3xl w-[45vh] h-[100vh] shadaa">
                <div className="flex justify-between items-center mx-5 mt-3">
                    <p className='text-white font-medium bg-[#4a4a4a] px-3 py-1 rounded'> <Link to={'/'}>inicio</Link></p>
                    <p onClick={negacion}>
                        <svg className='bg-[#4a4a4a] px-1   rounded' xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 12 12"><path fill="#ffffff" d="M2.22 2.22a.75.75 0 0 1 1.06 0L6 4.939L8.72 2.22a.749.749 0 1 1 1.06 1.06L7.061 6L9.78 8.72a.749.749 0 1 1-1.06 1.06L6 7.061L3.28 9.78a.749.749 0 1 1-1.06-1.06L4.939 6L2.22 3.28a.75.75 0 0 1 0-1.06" /></svg>
                    </p>
                </div>
                {/* SECCION */}
                <div className='mt-6 flex flex-col items-end mx-1'>
                    <p className='text-sky-400 font-semibold text-xl uppercase'>Flores de maria 2</p>
                    <p className='text-white text-xl font-normal pl-10 pr-2 py-[3px]  bg-gradient-to-l from-[#4a4a4a] rounded'> <Link to={'/Nosotros'}>Nosotros</Link></p>
                    <p className='text-white text-xl font-normal pl-10 pr-2 py-[3px] bg-gradient-to-l from-[#4a4a4a] rounded mt-1 capitalize'><Link to={'/Administracion'}>administración</Link></p>
                    <p className='text-white text-xl font-normal pl-10 pr-2 py-[3px] bg-gradient-to-l from-[#4a4a4a] rounded mt-1 capitalize'><Link to={'/Consejo'}>consejo de administración</Link></p>
                    <p className='text-white text-xl font-normal pl-10 pr-2 py-[3px] bg-gradient-to-l from-[#4a4a4a] rounded mt-1 capitalize'><Link to={'/Convivencia'}>comite de convivencia</Link></p>
                </div>
                
                <div className='mt-4 flex flex-col items-end mx-1'>
                    <p className='text-sky-400 font-semibold text-xl uppercase'>gestiones</p>
                    <p className='text-white text-xl font-normal pl-10 pr-2 py-[3px] bg-gradient-to-l from-[#4a4a4a] rounded capitalize'><Link to={'/comunidad'}>comunidad</Link></p>
                    <p className='text-white text-xl font-normal pl-10 pr-2 py-[3px] bg-gradient-to-l from-[#4a4a4a] rounded mt-1 capitalize'><Link to={'/Combocatorias'}>convocatorias</Link></p>
                    <p className='text-white text-xl font-normal pl-10 pr-2 py-[3px] bg-gradient-to-l from-[#4a4a4a] rounded mt-1 capitalize'><Link to={'/ZonaDePago'}>zona de pagos</Link></p>
                    <p className='text-white text-xl font-normal pl-10 pr-2 py-[3px] bg-gradient-to-l from-[#4a4a4a] rounded mt-1 capitalize'><Link to={'/Documentos'}>solicitudes</Link></p>
                </div>
                <div className='mt-4 flex flex-col items-end mx-1'>
                    <p className='text-sky-400 font-semibold text-xl uppercase'>servicios</p>
                    <p className='text-white text-xl font-normal pl-10 pr-2 py-[3px] bg-gradient-to-l from-[#4a4a4a] rounded capitalize'><Link to={'/Emprendimientos'}>emprendimientos</Link></p>
                    <p className='text-white text-xl font-normal pl-10 pr-2 py-[3px] bg-gradient-to-l from-[#4a4a4a] rounded mt-1 capitalize'><Link to={'/Trasporte'}>trasporte</Link></p>
                </div>
                <div className='mt-4 flex flex-col items-end mx-1'>
                    <p className='text-sky-400 font-semibold text-xl uppercase'>actividades</p>
                    <p className='text-white text-xl font-normal pl-10 pr-2 py-[3px] bg-gradient-to-l from-[#4a4a4a] rounded capitalize'><Link to={'/Clases-aerobicas'}>clases aerobicas</Link></p>
                    <p className='text-white text-xl font-normal pl-10 pr-2 py-[3px] bg-gradient-to-l from-[#4a4a4a] rounded mt-1 capitalize'><Link to={'/Futbol'}>Fútbol</Link></p>
                </div>
            </div>
        </div>
    );
};
