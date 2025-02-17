import { Link } from "react-router-dom"
import logo from "../assets/logos/logo.png"
import { Risp } from "./navRisp"
import { useState } from "react"
import 'animate.css';

export const Nav = () => {

    const [menu, setMenu] = useState(false)

    const negacion = () => {
        setMenu(!menu)
    }

    return (
        <div>
            <section class="sm:h-[20vh] bg-cover bg-bottom  relative ">
               {menu &&  <Risp negacion={negacion}  animate={true} />}
                
                <div class="mb-[5%]">
                    <div class="flex items-center justify-between sm:justify-around ml-5">
                        <Link to={'/'}> <img src={logo} alt="" width={150} /></Link>
                        <nav
                            class="sm:flex sm:relative absolute hidden right-0 top-0 h-screen sm:h-0 p-4 bg-[#2f2f2f] sm:bg-transparent">

                            <ul id="dropdownmenu" className="menu  text-right flex-col sm:flex-row sm:flex">


                                <li class="text-black sm:w-[170px] lg:w-[200px] xl:w-[250px] relative  hover:text-[whit] group/drop ease-in-out duration-200 mb-3 encabezado">
                                    <div className=" rounded-md ">
                                        <div className="flex justify-end items-center font-bold  rounded-lg  cursor-default">
                                            <p className="sm:text-[10px] lg:text-[12px] xl:text-[16px] "><span className="flex items-center gap-2">FLORES DE MARIA 2
                                            <svg className="FLECHITA duration-200 ease-in-out" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="blue" d="M10 22L0 12L10 2l1.775 1.775L3.55 12l8.225 8.225z"/></svg></span></p>
                                            
                                        </div>

                                        <div>
                                            
                                            <ul id="Submenu" class="left-0 top-[35px] hidden group-hover/drop:block ">
                                                <li class="py-1 encabezado text-black sm:text-[10px] lg:text-[12px] xl:text-[16px] px-2 hover:text-[#02519C] hover:font-bold"><Link to={'/Nosotros'}>NOSOTROS</Link></li>
                                                <li class="py-1 text-black  sm:text-[10px] lg:text-[12px] xl:text-[16px] px-2 hover:text-[#02519C] hover:font-bold"><Link to={'/Administracion'}>ADMINISTRACIÓN</Link></li>
                                                <li class="py-1 text-black sm:text-[10px] lg:text-[12px] xl:text-[16px] hover:text-[#02519C] hover:font-bold"><Link to={'/Consejo'}>CONSEJO DE ADMINISTRACIÓN</Link></li>
                                                <li class="py-1 text-black sm:text-[10px] lg:text-[12px] xl:text-[16px] px-2 hover:text-[#02519C] hover:font-bold"><Link to={'/Convivencia'}>COMITE DE CONVIVENCIA</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>


                                <li class="text-white  sm:w-[100px] lg:w-[auto] xl:w-[150px] sm:text-black relative group/drop mb-3 encabezado "><a
                                    href="#" class="font-bold">
                                    <div className="flex justify-end items-center">
                                    <p className="sm:text-[10px] lg:text-[12px] xl:text-[16px] "><span className="flex items-center gap-2">GESTIONES
                                    <svg className="FLECHITA duration-200 ease-in-out" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="blue" d="M10 22L0 12L10 2l1.775 1.775L3.55 12l8.225 8.225z"/></svg></span></p>
                                    </div>
                                </a>
                                    <ul id="Submenu" class="left-0 top-[35px] hidden group-hover/drop:block">
                                        <li class="py-1 text-black sm:text-[10px] lg:text-[12px] xl:text-[16px] px-2 hover:text-[#02519C] hover:font-bold"><Link to={'/comunidad'}>
                                            COMUNIDAD</Link></li>
                                        <li class="py-1 text-black sm:text-[10px] lg:text-[12px] xl:text-[16px] px-2 hover:text-[#02519C] hover:font-bold"> <Link to={'/Combocatorias'}>CONVOCATORIAS</Link></li>
                                        <li class="py-1 text-black sm:text-[10px] lg:text-[12px] xl:text-[16px] hover:text-[#02519C] hover:font-bold"><Link to={'/ZonaDePago'}>ZONA DE PAGOS</Link></li>
                                        <li class="py-1 text-black sm:text-[10px] lg:text-[12px] xl:text-[16px] px-2 hover:text-[#02519C] hover:font-bold"><Link to={'/Documentos'}>SOLICITUDES</Link></li>
                                    </ul>
                                </li>

                                <li class="w-[100px] lg:w-[100px] xl:w-[150px] sm:text-black relative encabezado group/drop mb-3"><a
                                    href="#" class="font-bold ">
                                    <div className="flex justify-end items-center">
                                    <p className="sm:text-[10px] lg:text-[12px] xl:text-[16px] "><span className="flex items-center gap-2">SERVICIOS
                                    <svg className="FLECHITA duration-200 ease-in-out" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="blue" d="M10 22L0 12L10 2l1.775 1.775L3.55 12l8.225 8.225z"/></svg></span></p>
                                    </div>
                                </a>
                                    <ul id="Submenu" class="left-0 top-[35px] hidden group-hover/drop:block text-right">
                                        <li class="py-1 text-black sm:text-[10px] lg:text-[12px] xl:text-[16px] px-2 hover:text-[#02519C] hover:font-bold"> <Link to={'/Emprendimientos'}>EMPRENDIMIENTOS</Link></li>
                                        <li class="py-1 text-black sm:text-[10px] lg:text-[12px] xl:text-[16px] px-2 hover:text-[#02519C] hover:font-bold"> <Link to={'/Trasporte'}>TRANSPORTE</Link></li>
                                    </ul>
                                </li>

                                <li class="w-[100px] lg:w-[150px] xl:w-[160px] sm:text-black relative encabezado group/drop mb-3"><a
                                    href="#" class="font-bold">
                                    <div className="flex justify-end items-center">
                                    <p className="sm:text-[10px] lg:text-[12px] xl:text-[16px] "><span className="flex items-center gap-2">AVTIVIDADES
                                    <svg className="FLECHITA duration-200 ease-in-out" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="blue" d="M10 22L0 12L10 2l1.775 1.775L3.55 12l8.225 8.225z"/></svg></span></p>
                                    </div>
                                </a>
                                    <ul id="Submenu" class="left-0 top-[35px] hidden group-hover/drop:block text-right">
                                        <li class="py-1 text-black lg:text-[12px] sm:text-[10px] xl:text-[16px] px-2 hover:text-[#02519C] hover:font-semibold"> <Link to={'/Clases-aerobicas'}>CLASES AERÓBICAS</Link></li>
                                        <li class="py-1 text-black lg:text-[12px] sm:text-[10px] xl:text-[16px] px-2 hover:text-[#02519C] hover:font-bold"> <Link to={'/Futbol'}>FÚTBOL</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                        <figure onClick={negacion} class="border sm:hidden border-black px-2 py-2 rounded opacity-90 mr-10">
                            <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 16 16"><path fill="#000000" d="M0 1h16v3H0zm0 5h16v3H0zm0 5h16v3H0z"/></svg>
                            </span>
                        </figure>
                    </div>
                </div>
            </section>

        </div>
    )
}