import { Nav } from "../componetes/nav"

export const Admi = () => {
    return (
        <div>
            <Nav/>
            <section className="mt-36">
                    <article>
                    <h3 class="font-bold text-[35px] sm:text-[75px] text-center tit">Administración Conjunto Cerrado Flores de Maria 2 </h3>
                        <div className="flex flex-col justify-center items-center mt-10">
                            <div className="perfil flex justify-center gap-10 rounded-3xl items-center sm:w-[80%] xl:w-[90%] shado border py-4 px-2">
                                   <img className="rounded-full border-[8px] border-[#EB5727] shadow-2xl" src="https://media.licdn.com/dms/image/D4D03AQE67pGEKYqvgw/profile-displayphoto-shrink_200_200/0/1646933804184?e=2147483647&v=beta&t=IhaO9EckKImae7dz_QDwWfr0OQRsLSOWXkvEFcv9wjM" alt="" width={300} />
                                   <div className=" zper w-fit">
                                   <p className="text-[70px] namess zper2">PAOLA QUINTANA BOHORQUEZ</p>
                                   <p className="text-[40px] text-[#EB5727] zper3 nanda">ADMINISTRADORA</p>
                                   </div>

                            </div>
                           
                            <div className="descrip flex w-[90%] rounded-3xl mt-5">
                               <div className="z1 w-[50%]">
                               <p class="p-4 flex flex-col font-medium text-xl"><p>El administrador de Flores de Maria. es el representante legal del Conjunto Cerrado Flores de
                                maria 2 y cuenta con la potestad para ejecutar, representar, conservar y recaudar de acuerdo a
                                las disposiciones legales y tiene estas atribuciones y funciones derivadas de su ejercicio
                                personal y bajo su responsabilidad.</p> <br />
                                <p>
                                Hace uso de los bienes y los recursos logísticos de la copropiedad, así como el manejo del
                                personal laboral.</p> <br /> <p>Debe mantener buenas relaciones con la comunidad y ejecutar el presupuesto, de
                                acuerdo a las disposiciones legales vigentes, velando por el buen funcionamiento del conjunto
                                Las funciones básicas del administrador las establece el art. 51 de la Ley 675 de 2001.</p>
                                    </p>
                               </div>
                               <div className="z2 w-[50%]">
                               <p class="p-4 font-medium text-xl">
                                                    Con una combinación única de creatividad y liderazgo innato, nuestra administradora es
                                                    la personificación de la excelencia en la gestión de propiedades. Su aguda capacidad
                                                    analítica y profundo conocimiento en legislación de propiedad horizontal la posicionan
                                                    como una figura indispensable en nuestro equipo. Seria, responsable y dinámica, esta
                                                    líder nata demuestra una capacidad excepcional para adaptarse a cualquier situación. Su
                                                    compromiso y habilidades la convierten en la persona ideal para brindar un servicio
                                                    excepcional a nuestra comunidad
                                                    <a href="https://wa.me/573142915857" target="_blank"
                                                        class="py-2 px-3 text-white rounded-lg mt-5 font-medium w-fit bg-[#4C9EEB] flex justify-center items-center text-center gap-3"><i
                                                            class="fa-brands fa-whatsapp"></i> <span class="sm:hidden">ESCRÍBEME 314
                                                                2915857</span><span class="hidden sm:block">CONTACTAR AL
                                                                    ADMINISTRADOR</span></a>
                                                </p>
                               </div>
                            </div>
                        </div>
                    </article>          
                            </section>
                            <footer class="mt-[5%]">
                                <div class="text-center sm:text-sm text-white bg-[#4C9EEB] py-5 px-2">
                                    <p>© Copyright 2023 - 2024 | Conjunto Cerrado Flores De Maria 2 | All Rights Reserved</p>
                                </div>
                            </footer>
                        </div>
                        )
}