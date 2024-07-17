
import { Nav } from "../componetes/nav"

export const Pay = () => {
    return (
        <div>
            <Nav />
            <section class="px-[15%] mt-[8%]">
                <h4 class="font-bold text-[40px] text-center">Zona De Pagos</h4>
                <p class="text-[1.3rem] text-center mb-[5%]">A continuación encontrará los enlaces para realizar pagos en línea de empresas
                    que actualmente prestan
                    servicios públicos en el Conjunto Cerrado <br /> <samp className="Flo text-3xl"> Flores de Maria 2</samp></p>


                <div class="flex flex-col sm:flex-row  justify-center gap-4">

                    <div class="sm:w-[45%] flex flex-col justify-between p-4 shadow text-center hover:shadow-2xl rounded-xl cursor-default border">
                        <h4 class="font-bold text-[1.4rem]">PAGAR ADMINISTRACIÓN JELPIT</h4>
                        <p class="text-[1.3rem] mb-[5%]">A través del siguiente enlace será dirigido a la página web de la jelpit
                            para el pago de la
                            administración</p>
                        <p className="text-[14px] md:text-[17px] py-3 px-4 text-white rounded-lg bg-[#4C9EEB] cursor-pointer text-center">
                        <a href="https://web-conjuntos.jelpit.com/zona-publica-pagos?_ga=2.123618891.1946377582.1700225843-419690911.1698957252"
                            target="_blank" >$ PAGAR ADMINISTRACIÓN</a>
                        </p>
                    </div>

                    <div class="sm:w-[45%] flex flex-col justify-between p-4 shadow text-center  rounded-xl hover:shadow-2xl bg-[#4C9EEB] cursor-default">
                        <h4 class="font-bold text-[1.4rem] text-white">¿¿ COMO PAGAR ??</h4>
                        <p class="text-[1.3rem] mb-[5%] text-white">El enlace brinda instrucciones claras para realizar un pago
                            satisfactorio, asegurando una experiencia sin complicaciones.</p>
                        <p className="text-[14px] md:text-[17px] py-3 px-4 text-[#4C9EEB] font-semibold rounded-lg cursor-pointer bg-[#ffffff]">
                        <a href="https://drive.google.com/file/d/1iABcjvugEAj3v8KLXQqByS1zGJaQ9LCd/view?usp=sharing"
                            target="_blank" class=""><i
                                class="fa-solid fa-circle-info"></i> INSTRUCTIVO DE PAGO</a>
                        </p>
                    </div>

                </div>

                <div className="mt-10">
                    <h5 class="font-bold text-center py-3 text-[2rem] text-[#4C9EEB]">PAGOS SERVICIOS HOGAR </h5>
                    <div class="flex flex-col sm:flex-row justify-center gap-5 ">
                        <a href="https://www.avalpaycenter.com/wps/portal/portal-de-pagos/web/ventanilla-pagos/realizar-pago-facturadores?idConv=6348" target="_blank" class="sm:w-[25%]">
                            <div class="p-2  rounded-xl shadow-md hover:shadow-2xl sha2  border-l-[5px] border-l-blue-500 hover:scale-[1.02] ease-in-out duration-200">
                                <figure className="flex justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" color="blue" fill="none">
                                        <path d="M3.5 13.678C3.5 9.49387 7.08079 5.35907 9.59413 2.97222C10.9591 1.67593 13.0409 1.67593 14.4059 2.97222C16.9192 5.35907 20.5 9.49387 20.5 13.678C20.5 17.7804 17.2812 22 12 22C6.71878 22 3.5 17.7804 3.5 13.678Z" stroke="currentColor" stroke-width="1.5" />
                                        <path d="M16 14C16 16.2091 14.2091 18 12 18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </figure>
                                <h5 class="text-[1rem] font-bold text-center"><span class="text-[30px] text-[#000000]">AGUA</span> <br /> <span className="opacity-40">( ENDUPAR )</span></h5>
                            </div>
                        </a>

                        <a href="https://caribemar.facture.co/Pagar#/List" target="_blank" class="sm:w-[25%]">
                            <div class="p-2  rounded-xl shadow-md hover:shadow-2xl sha2  border-l-[5px] border-l-yellow-400 hover:scale-[1.02] ease-in-out duration-200">
                                <figure className="flex justify-center">
                                    <svg className="bg-yellow-400 rounded-full p-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" color="white" fill="none">
                                        <path d="M5.14286 14C4.41735 12.8082 4 11.4118 4 9.91886C4 5.54539 7.58172 2 12 2C16.4183 2 20 5.54539 20 9.91886C20 11.4118 19.5827 12.8082 18.8571 14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                                        <path d="M7.38287 17.0982C7.291 16.8216 7.24507 16.6833 7.25042 16.5713C7.26174 16.3343 7.41114 16.1262 7.63157 16.0405C7.73579 16 7.88105 16 8.17157 16H15.8284C16.119 16 16.2642 16 16.3684 16.0405C16.5889 16.1262 16.7383 16.3343 16.7496 16.5713C16.7549 16.6833 16.709 16.8216 16.6171 17.0982C16.4473 17.6094 16.3624 17.8651 16.2315 18.072C15.9572 18.5056 15.5272 18.8167 15.0306 18.9408C14.7935 19 14.525 19 13.9881 19H10.0119C9.47495 19 9.2065 19 8.96944 18.9408C8.47283 18.8167 8.04281 18.5056 7.7685 18.072C7.63755 17.8651 7.55266 17.6094 7.38287 17.0982Z" stroke="currentColor" stroke-width="1.5" />
                                        <path d="M15 19L14.8707 19.6466C14.7293 20.3537 14.6586 20.7072 14.5001 20.9866C14.2552 21.4185 13.8582 21.7439 13.3866 21.8994C13.0816 22 12.7211 22 12 22C11.2789 22 10.9184 22 10.6134 21.8994C10.1418 21.7439 9.74484 21.4185 9.49987 20.9866C9.34144 20.7072 9.27073 20.3537 9.12932 19.6466L9 19" stroke="currentColor" stroke-width="1.5" />
                                        <path d="M12 16V11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </figure>
                                <h5 class="text-[1rem] font-bold text-center"><span class="text-[30px] text-[#000000]">LUZ</span> <br /> <span className="opacity-40">( AFINIA )</span></h5>
                            </div>
                        </a>

                        <a href="https://portal.gascaribe.com/payments" target="_blank" class="sm:w-[25%]">
                            <div class="p-2  rounded-xl shadow-md hover:shadow-2xl sha2  border-l-[5px] border-l-green-700 hover:scale-[1.02] ease-in-out duration-200">
                                <figure className="flex justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" color="green" fill="none">
                                        <path d="M13.8561 22C26.0783 19 19.2338 7 10.9227 2C9.9453 5.5 8.47838 6.5 5.54497 10C1.66121 14.6339 3.5895 20 8.96719 22C8.1524 21 6.04958 18.9008 7.5 16C8 15 9 14 8.5 12C9.47778 12.5 11.5 13 12 15.5C12.8148 14.5 13.6604 12.4 12.8783 10C19 14.5 16.5 19 13.8561 22Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </figure>
                                <h5 class="text-[1rem] font-bold text-center"><span class="text-[30px] text-[#000000]">GAS</span> <br /> <span className="opacity-40">( GASCARIBE )</span></h5>
                            </div>
                        </a>
                    </div>
                </div>

            </section>
            <footer class="mt-[5%]">
                                <div class="text-center sm:text-sm text-white bg-[#4C9EEB] py-5 px-2">
                                    <p>© Copyright 2023 - 2024 | Conjunto Cerrado Flores De Maria 2 | All Rights Reserved</p>
                                </div>
                            </footer>
        </div>
    )
}