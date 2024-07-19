import { Link } from "react-router-dom"
import { Enca } from "../componetes/encabezado"

import { Nav } from "../componetes/nav"
import { Footer } from "../componetes/footer"



export const Home = () => {
    return (
        <div>
            <Enca />
            <section class="bg-[url('./static/bg/bg2.jpg')] sm:h-[80vh] bg-cover bg-bottom relative">

                <Nav />

                <div>
                    <h1 className="Flo text-[35px] sm:text-[80px] lg:text-[80px] xl:text-[100px] ml-[10%] sm:mt-[25%] lg:mt-[18%] xl:mt-[8%] font-bold">Flores De Maria 2</h1>
                    <h2 class=" text-[13px] sm:text-[20px] xl:text-[25px] ml-[10%] font-bold">CONJUNTO CERRADO</h2>
                </div>

                <div class="flex justify-center items-center text-white w-[60px] h-[60px] bg-[#02519C] rounded-full fixed right-[20px] bottom-[20px] scale-0 ease-in-out duration-300" id="up">
                    <i class="fa-solid fa-chevron-up"></i>
                </div>
            </section>
            {/* DESCRIPCION DEL CONJUNTO */}
            <section>
                <article>
                    <div class="px-[10%]">
                        <h5 class="font-bold text-center py-3 text-[2.5rem] sm:text-[50px] lg:text-[69px] xl:text-[84px] text-[#4C9EEB]">Descripción Del Conjunto <br /> Cerrado </h5>
                        <p class="text-[1.3rem] text-center flex flex-col items-center">Flores de María 2 es un proyecto de casas y apartamentos en conjunto cerrado, que
                            busca proporcionar a sus habitantes bienestar, seguridad y comodidad, mediante la creación de
                            ambientes urbanos amplios, agradables y de fácil accesibilidad. El proyecto se conforma de casas
                            unifamiliares y tres bloques de apartamentos de 4 pisos sin ascensor. Contará con dos salones
                            sociales, piscina para adultos, piscina para niños, juegos infantiles, gimnasio biosaludable y
                            cancha múltiple.</p>
                    </div>
                </article>
            </section>
            {/* SECCION PRINCIPAL BLOQUES */}
            <section>
                <article class="flex flex-col lg:flex-row justify-center gap-4 p-5 my-[7%] ">
                    <div class="lg:w-[24%] border-2 rounded-3xl p-5 bg-white text-black shadow-md hover:shadow-2xl">
                        <Link to={'/comunidad'}>
                            <div>
                                <figure className=" flex justify-center mb-[12%] mt-[10%] hover:scale-110 ease-in-out duration-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="180" height="180" color="#4c9eeb" fill="none">
                                        <path d="M9.89128 7.55559C9.34109 7.8715 7.89853 8.51654 8.77715 9.32371C9.20634 9.71801 9.68436 10 10.2853 10H13.7147C14.3156 10 14.7937 9.71801 15.2229 9.32371C16.1015 8.51654 14.6589 7.8715 14.1087 7.55559C12.8185 6.8148 11.1815 6.8148 9.89128 7.55559Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M13.5 3.5C13.5 4.32843 12.8284 5 12 5C11.1716 5 10.5 4.32843 10.5 3.5C10.5 2.67157 11.1716 2 12 2C12.8284 2 13.5 2.67157 13.5 3.5Z" stroke="currentColor" stroke-width="1.5" />
                                        <path d="M16.3913 19.5556C15.8411 19.8715 14.3985 20.5165 15.2771 21.3237C15.7063 21.718 16.1844 22 16.7853 22H20.2147C20.8156 22 21.2937 21.718 21.7229 21.3237C22.6015 20.5165 21.1589 19.8715 20.6087 19.5556C19.3185 18.8148 17.6815 18.8148 16.3913 19.5556Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M20 15.5C20 16.3284 19.3284 17 18.5 17C17.6716 17 17 16.3284 17 15.5C17 14.6716 17.6716 14 18.5 14C19.3284 14 20 14.6716 20 15.5Z" stroke="currentColor" stroke-width="1.5" />
                                        <path d="M3.39128 19.5556C2.84109 19.8715 1.39853 20.5165 2.27715 21.3237C2.70634 21.718 3.18436 22 3.78534 22H7.21466C7.81564 22 8.29366 21.718 8.72285 21.3237C9.60147 20.5165 8.15891 19.8715 7.60872 19.5556C6.31854 18.8148 4.68146 18.8148 3.39128 19.5556Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M7 15.5C7 16.3284 6.32843 17 5.5 17C4.67157 17 4 16.3284 4 15.5C4 14.6716 4.67157 14 5.5 14C6.32843 14 7 14.6716 7 15.5Z" stroke="currentColor" stroke-width="1.5" />
                                        <path d="M12 13V15.5M12 15.5L14.5 17M12 15.5L9.5 17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </figure>
                            </div>
                            <h5 class="text-[2rem] font-bold text-center">COMUNIDAD</h5>
                            <p class="text-center text-[1.2rem]">En este espacio se pueden encontrar anuncios de interés para los residentes
                                de la comunidad Flores de María 2</p>
                        </Link>
                    </div>
                    <div class="lg:w-[25%] border-2 border-[#4C9EEB] rounded-3xl p-5 bg-[#4C9EEB] text-white shadow-md hover:shadow-2xl
                               ">
                        <Link to={'/ZonaDePago'}>
                            <figure class=" flex justify-center mb-[10%] mt-[10%] hover:scale-110 ease-in-out duration-200">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="180" height="180" color="#ffffff" fill="none">
                                    <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" stroke-width="1.5" />
                                    <path d="M14.7102 10.0611C14.6111 9.29844 13.7354 8.06622 12.1608 8.06619C10.3312 8.06616 9.56136 9.07946 9.40515 9.58611C9.16145 10.2638 9.21019 11.6571 11.3547 11.809C14.0354 11.999 15.1093 12.3154 14.9727 13.956C14.836 15.5965 13.3417 15.951 12.1608 15.9129C10.9798 15.875 9.04764 15.3325 8.97266 13.8733M11.9734 6.99805V8.06982M11.9734 15.9031V16.998" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                                </svg>
                            </figure>
                            <h5 class="text-[2rem] font-bold text-center">ZONA DE PAGOS</h5>
                            <p class="text-center text-[1.2rem]">Según el Artículo 29 de la Ley 675 de 2001, en propiedad horizontal, los
                                copropietarios están
                                obligados a contribuir a las expensas necesarias para la administración y servicios comunes
                                esenciales.</p>
                        </Link>
                    </div>

                    <div class="lg:w-[24%] border-2 rounded-3xl bg-white text-black shadow-md hover:shadow-2xl">
                        <Link to={'/Documentos'}>
                            <figure class=" flex justify-center mb-[8%] mt-[10%] hover:scale-110 ease-in-out duration-200">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="180" height="180" color="#4c9eeb" fill="none">
                                    <path d="M14.9805 7.01562C14.9805 7.01562 15.4805 7.51562 15.9805 8.51562C15.9805 8.51562 17.5687 6.01562 18.9805 5.51562" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M9.99485 2.02141C7.49638 1.91562 5.56612 2.20344 5.56612 2.20344C4.34727 2.29059 2.01146 2.97391 2.01148 6.9646C2.0115 10.9214 1.98564 15.7993 2.01148 17.744C2.01148 18.932 2.7471 21.7034 5.29326 21.8519C8.3881 22.0324 13.9627 22.0708 16.5205 21.8519C17.2051 21.8133 19.4846 21.2758 19.7731 18.7957C20.072 16.2264 20.0125 14.4407 20.0125 14.0157" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M21.9999 7.01562C21.9999 9.77705 19.7591 12.0156 16.995 12.0156C14.231 12.0156 11.9902 9.77705 11.9902 7.01562C11.9902 4.2542 14.231 2.01562 16.995 2.01562C19.7591 2.01562 21.9999 4.2542 21.9999 7.01562Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                                    <path d="M6.98047 13.0156H10.9805" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                                    <path d="M6.98047 17.0156H14.9805" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                                </svg>
                            </figure>
                            <h5 class="text-[2rem] font-bold text-center">SOLICITUDES Y DOCUMENTOS</h5>
                            <p class="text-center text-[1.2rem]">
                                Este apartado presenta diversos formatos para cubrir solicitudes en la copropiedad, garantizando
                                eficiencia y cumplimiento de normativas.</p>
                        </Link>
                    </div>
                </article>
            </section>
            {/* De Primera Mano */}
            <section>
                <h5 class="font-bold text-center py-3  px-2 text-[2.5rem] text-[#4C9EEB]">De Primera Mano</h5>

                <article class="flex flex-col lg:flex-row  justify-center gap-4 p-5">
                    <div class="lg:w-[25%] border-2 border-solid border-white sha bg-[#4C9EEB] shadow-xl text-white cont hover:scale-95 ease-in-out duration-200">
                        <a class="p-4" href="https://drive.google.com/file/d/15Rxx7eFiGIspXImi-P-7H_8EyDTZIAaq/view?usp=sharing"
                            target="_blank">
                            <figure class="flex justify-center ">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="150" height="150" color="white" fill="none">
                                    <path d="M12.9502 22C15.5949 22 16.9172 22 17.8666 21.2437C18.8159 20.4874 19.1188 19.1927 19.7245 16.6033L21.6419 8.40693C21.9772 6.9736 22.1448 6.25693 21.8404 5.73787C21.2876 4.79526 19.8787 4.99997 18.9592 4.99997" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M2 9C2 5.70017 2 4.05025 3.02513 3.02513C4.05025 2 5.70017 2 9 2H12C15.2998 2 16.9497 2 17.9749 3.02513C19 4.05025 19 5.70017 19 9V15C19 18.2998 19 19.9497 17.9749 20.9749C16.9497 22 15.2998 22 12 22H9C5.70017 22 4.05025 22 3.02513 20.9749C2 19.9497 2 18.2998 2 15V9Z" stroke="currentColor" stroke-width="1.5" />
                                    <path d="M10.5 6C12.7091 6 14.5 7.79086 14.5 10C14.5 12.2091 12.7091 14 10.5 14M10.5 6C8.29086 6 6.5 7.79086 6.5 10C6.5 12.2091 8.29086 14 10.5 14M10.5 6C9.67157 6 9 7.79086 9 10C9 12.2091 9.67157 14 10.5 14M10.5 6C11.3284 6 12 7.79086 12 10C12 12.2091 11.3284 14 10.5 14" stroke="currentColor" stroke-width="1.5" />
                                    <path d="M7 17L14 17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                                </svg>
                            </figure>
                            <h5 class="text-[1.6rem] font-bold text-center">Reglamento De Propiedad <br /> Horizontal</h5>
                        </a>
                    </div>

                    <div class="lg:w-[25%] border-2 border-solid hover:scale-95 ease-in-out duration-200 border-[#4C9EEB] sha bg-[sky] shadow-xl text-[#4C9EEB] cont">
                        <a href="" class="p-4">
                            <figure class="flex justify-center ">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="170" height="170" color="#4c9eeb" fill="none">
                                    <path d="M12.5 2.01228C12.3344 2.00413 12.1677 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.1368 21.8906 10.299 21.685 9.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M8 15C8.91212 16.2144 10.3643 17 12 17C13.6357 17 15.0879 16.2144 16 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M10 9.5H8.70711C8.25435 9.5 7.82014 9.67986 7.5 10M14 9.5H15.2929C15.7456 9.5 16.1799 9.67986 16.5 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M15.8881 2.33117C16.8267 1.78287 17.6459 2.00383 18.138 2.35579C18.3398 2.50011 18.4406 2.57227 18.5 2.57227C18.5594 2.57227 18.6602 2.50011 18.862 2.35579C19.3541 2.00383 20.1733 1.78287 21.1119 2.33117C22.3437 3.05077 22.6224 5.42474 19.7812 7.42757C19.24 7.80905 18.9694 7.99979 18.5 7.99979C18.0306 7.99979 17.76 7.80905 17.2188 7.42757C14.3776 5.42474 14.6563 3.05077 15.8881 2.33117Z" fill="red" color="#4C9EEB" stroke="currentColor" stroke-width="0.8" stroke-linecap="round" />
                                </svg>
                            </figure>
                            <h5 class="text-[1.6rem] font-bold text-center">Manual De Convivencia</h5>
                        </a>
                    </div>

                    <div class="lg:w-[25%] border-2 border-solid hover:scale-95 ease-in-out duration-200 border-white sha bg-[#4C9EEB] cont shadow-xl text-white flex flex-col justify-center py-4 ">
                        <Link to={'/Circulares'}>
                            <figure class="flex justify-center ">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="160" height="160" color="white" fill="none">
                                    <path d="M11.5 3.00366C10.9383 3.01202 10.3789 3.03449 9.8294 3.07102C5.64639 3.34908 2.31441 6.72832 2.04024 10.9707C1.98659 11.8009 1.98659 12.6606 2.04024 13.4908C2.1401 15.0359 2.82343 16.4665 3.62791 17.6746C4.09501 18.5203 3.78674 19.5758 3.30021 20.4978C2.94941 21.1625 2.77401 21.4949 2.91484 21.735C3.05568 21.9752 3.37026 21.9828 3.99943 21.9981C5.24367 22.0284 6.08268 21.6757 6.74868 21.1846C7.1264 20.906 7.31527 20.7668 7.44544 20.7508C7.5756 20.7347 7.83177 20.8403 8.34401 21.0512C8.8044 21.2408 9.33896 21.3579 9.8294 21.3905C11.2536 21.4851 12.7435 21.4853 14.1706 21.3905C18.3536 21.1124 21.6856 17.7332 21.9598 13.4908C22.0134 12.6606 22.0134 11.8009 21.9598 10.9707C21.9038 10.1048 21.7205 9.27487 21.4285 8.49994" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M14 6C14 6 15 6 16 8C16 8 19.1765 3 22 2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M8.5 15H15.5M8.5 10H12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </figure>
                            <h5 class="text-[1.6rem] font-bold text-center">Circulares</h5>
                        </Link>
                    </div>
                </article>
            </section>
            {/* Ubicación */}
            <section>
                <div className="flex items-center justify-center gap-5">
                    <h5 class="font-bold text-center py-3 text-[3rem] text-[#4C9EEB]">Ubicación</h5>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50" height="50" color="#4c9eeb" fill="none" >
                        <path d="M7 18C5.17107 18.4117 4 19.0443 4 19.7537C4 20.9943 7.58172 22 12 22C16.4183 22 20 20.9943 20 19.7537C20 19.0443 18.8289 18.4117 17 18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                        <path d="M14.5 9C14.5 10.3807 13.3807 11.5 12 11.5C10.6193 11.5 9.5 10.3807 9.5 9C9.5 7.61929 10.6193 6.5 12 6.5C13.3807 6.5 14.5 7.61929 14.5 9Z" stroke="currentColor" stroke-width="1.5" />
                        <path d="M13.2574 17.4936C12.9201 17.8184 12.4693 18 12.0002 18C11.531 18 11.0802 17.8184 10.7429 17.4936C7.6543 14.5008 3.51519 11.1575 5.53371 6.30373C6.6251 3.67932 9.24494 2 12.0002 2C14.7554 2 17.3752 3.67933 18.4666 6.30373C20.4826 11.1514 16.3536 14.5111 13.2574 17.4936Z" stroke="currentColor" stroke-width="1.5" />
                    </svg>
                </div>
                <article class="p-5 justify-center px-[10%]">
                    <div class="">
                        <p class="text-[1.7rem]">Para llegar al conjunto <b>FLORES DE MARIA 2</b>, que esta ubicado en la
                            <b>Carrera 43 # 16 BIS – 146 en Valledupar</b>, Colombia, siga estas instrucciones:
                        </p>
                        <ol class="list-decimal p-4 text-[1.3rem]">
                            <li>Tome la vía que va hacia el corregimiento La Mesa.</li>
                            <li>Justo una cuadra después del parque de Don Alberto, gire a la izquierda.</li>
                            <li>Siga derecho por la calle pavimentada hasta que vea la parroquia Nuestra Señora de las
                                Misericordias.</li>
                            <li>La entrada del conjunto está justo a mano derecha de la parroquia.</li>
                        </ol>
                    </div>
                </article>

                <div className="ml-5 flex justify-center">
                    <figure class="w-[100%] sm:w-[50%]">
                        <a href="https://orbeconstrucciones.com.co/wp-content/uploads/2020/01/Book-SenderosMesa-de-trabajo-6@72x-80-1024x697.jpg"
                            data-lightbox="models" data-title="Mapa Ubicación"><img className="rounded-3xl"
                                src="https://orbeconstrucciones.com.co/wp-content/uploads/2020/01/Book-SenderosMesa-de-trabajo-6@72x-80-1024x697.jpg"
                                alt="" /></a>
                    </figure>
                </div>
            </section>
            <section>
                <article class="flex flex-col justify-center p-2">
                    <h5 class="font-bold text-center py-3 text-[3rem] text-[#4C9EEB] flex justify-center items-center gap-6">  Recorre Flores de María 2 <samp><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 1024 704"><path fill="#0284c7" d="M960 704H64q-26 0-45-19T0 640V128q0-27 19-45.5T64 64h384q0-27 18.5-45.5T512 0h320q26 0 45 18.5T896 64h64q26 0 45 18.5t19 45.5v512q0 27-18.5 45.5T960 704M320 192q-80 0-136 56t-56 135.5t56 136T320 576t136-56.5t56-136T456 248t-136-56M768 64H576q-13 0-22.5 9.5T544 96t9.5 22.5T576 128h192q13 0 22.5-9.5T800 96t-9.5-22.5T768 64M320 512q-53 0-90.5-37.5T192 384t37.5-90.5T320 256t90.5 37.5T448 384t-37.5 90.5T320 512"/></svg></samp></h5>
                    <div class="flex justify-center">
                        <iframe width="1100" height="515"
                            src="https://www.youtube.com/embed/ZPFdOzjtGPs?si=SvlRgHt-y_cjW4eC&amp;start=40"
                            title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen></iframe>
                    </div>
                </article>
            </section>
            

            <Footer />

            <script src="./src/js/vendor/main.js" type="module"></script>
            <script src="./src/js/vendor/lightbox-plus-jquery.min.js"></script>
            <script src="https://kit.fontawesome.com/95f9104639.js" crossorigin="anonymous"></script>
        </div>
    )
}