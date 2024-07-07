import { Link } from "react-router-dom"
import logo from "../assets/logos/logo.png"

export const Nav = () => {
    return (
        <div>
            <section class="sm:h-[20vh] bg-cover bg-bottom p-4 relative">
                <div class="mb-[5%] mt-[1%]">
                    <div class="flex items-center justify-between sm:justify-around p-4 ">
                        <Link to={'/'}> <img src={logo} alt="" width={150} /></Link>
                        <nav
                            class="sm:flex sm:relative absolute hidden right-0 top-0 h-screen sm:h-0 p-4 bg-[#2f2f2f] sm:bg-transparent">

                            <ul id="dropdownmenu" className="menu  text-right flex-col sm:flex-row sm:flex">


                                <li class="text-black sm:w-[170px] lg:w-[200px] xl:w-[250px] relative  hover:text-[whit] group/drop ease-in-out duration-200 mb-3">
                                    <div className="border border-[#2C71B4] bg-opacity-30 bg-slate-300 rounded-md ">
                                        <div className="flex justify-end items-center font-bold  rounded-lg py-1 cursor-default">
                                            <p className="sm:text-[10px] lg:text-[12px] xl:text-[16px] ">FLORES DE MARIA 2</p>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="30" viewBox="0 0 24 24"><path fill="blue" d="m11.565 13.873l-2.677-2.677q-.055-.055-.093-.129q-.037-.073-.037-.157q0-.168.11-.289q.112-.121.294-.121h5.677q.181 0 .292.124t.111.288q0 .042-.13.284l-2.677 2.677q-.093.093-.2.143t-.235.05t-.235-.05t-.2-.143" /></svg>
                                        </div>

                                        <div>
                                            
                                            <ul id="Submenu" class="left-0 top-[35px] hidden group-hover/drop:block ease-in-out duration-300">
                                                <li class="py-1 text-black sm:text-[10px] lg:text-[12px] xl:text-[16px] px-2 hover:text-[#02519C] hover:font-semibold"><Link to={'/Nosotros'}>NOSOTROS</Link></li>
                                                <li class="py-1 text-black  sm:text-[10px] lg:text-[12px] xl:text-[16px] px-2 hover:text-[#02519C] hover:font-semibold"><Link to={'/Administracion'}>ADMINISTRACIÓN</Link></li>
                                                <li class="py-1 text-black sm:text-[10px] lg:text-[12px] xl:text-[16px] hover:text-[#02519C] hover:font-semibold"><Link to={'/Consejo'}>CONSEJO DE ADMINISTRACIÓN</Link></li>
                                                <li class="py-1 text-black sm:text-[10px] lg:text-[12px] xl:text-[16px] px-2 hover:text-[#02519C] hover:font-semibold"><Link to={'/Convivencia'}>COMITE DE CONVIVENCIA</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>


                                <li class="text-white  sm:w-[100px] lg:w-[auto] xl:w-[150px] sm:text-black relative hover:text-[#02519C] group/drop mb-3"><a
                                    href="#" class="font-bold">
                                    <div className="flex justify-end items-center">
                                        <p>GESTIONES</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="#0284c7" d="m11.565 13.873l-2.677-2.677q-.055-.055-.093-.129q-.037-.073-.037-.157q0-.168.11-.289q.112-.121.294-.121h5.677q.181 0 .292.124t.111.288q0 .042-.13.284l-2.677 2.677q-.093.093-.2.143t-.235.05t-.235-.05t-.2-.143" /></svg>
                                    </div>
                                </a>
                                    <ul id="Submenu" class="left-0 top-[35px] hidden group-hover/drop:block">
                                        <li class="py-1 text-black sm:text-[10px] lg:text-[12px] xl:text-[16px] px-2 hover:text-[#02519C]"><Link to={'/comunidad'}>
                                            COMUNIDAD</Link></li>
                                        <li class="py-1 text-black sm:text-[10px] lg:text-[12px] xl:text-[16px] px-2 hover:text-[#02519C]"> <Link to={'/Combocatorias'}>CONVOCATORIAS</Link></li>
                                        <li class="py-1 text-black sm:text-[10px] lg:text-[12px] xl:text-[16px] hover:text-[#02519C]"><Link to={'/ZonaDePago'}>ZONA DE PAGOS</Link></li>
                                        <li class="py-1 text-black sm:text-[10px] lg:text-[12px] xl:text-[16px] px-2 hover:text-[#02519C]"><Link to={'/Documentos'}>SOLICITUDES</Link></li>
                                    </ul>
                                </li>

                                <li class="w-[100px] lg:w-[100px] xl:w-[150px] sm:text-black relative hover:text-[#02519C] group/drop mb-3"><a
                                    href="#" class="font-bold ">
                                    <div className="flex justify-end items-center">
                                        <p>SERVICIOS</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="#0284c7" d="m11.565 13.873l-2.677-2.677q-.055-.055-.093-.129q-.037-.073-.037-.157q0-.168.11-.289q.112-.121.294-.121h5.677q.181 0 .292.124t.111.288q0 .042-.13.284l-2.677 2.677q-.093.093-.2.143t-.235.05t-.235-.05t-.2-.143" /></svg>
                                    </div>
                                </a>
                                    <ul id="Submenu" class="left-0 top-[35px] hidden group-hover/drop:block text-right">
                                        <li class="py-1 text-black sm:text-[10px] lg:text-[12px] xl:text-[16px] px-2 hover:text-[#02519C]"> <Link to={'/Emprendimientos'}>EMPRENDIMIENTOS</Link></li>
                                        <li class="py-1 text-black sm:text-[10px] lg:text-[12px] xl:text-[16px] px-2 hover:text-[#02519C]"> <Link to={'/Trasporte'}>TRANSPORTE</Link></li>
                                    </ul>
                                </li>

                                <li class="w-[100px] lg:w-[150px] xl:w-[160px] sm:text-black relative hover:text-[#02519C] group/drop mb-3"><a
                                    href="#" class="font-bold">
                                    <div className="flex justify-end items-center">
                                        <p>ACTIVIDADES</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="#0284c7" d="m11.565 13.873l-2.677-2.677q-.055-.055-.093-.129q-.037-.073-.037-.157q0-.168.11-.289q.112-.121.294-.121h5.677q.181 0 .292.124t.111.288q0 .042-.13.284l-2.677 2.677q-.093.093-.2.143t-.235.05t-.235-.05t-.2-.143" /></svg>
                                    </div>
                                </a>
                                    <ul id="Submenu" class="left-0 top-[35px] hidden group-hover/drop:block text-right">
                                        <li class="py-1 text-black lg:text-[12px] sm:text-[10px] xl:text-[16px] px-2 hover:text-[#02519C]"> <Link to={'/Clases-aerobicas'}>CLASES AERÓBICAS</Link></li>
                                        <li class="py-1 text-black lg:text-[12px] sm:text-[10px] xl:text-[16px] px-2 hover:text-[#02519C]"> <Link to={'/Futbol'}>FÚTBOL</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                        <figure class="abrir sm:hidden">Menu <i class="fa-solid fa-bars"></i></figure>
                    </div>
                </div>
            </section>

        </div>
    )
}