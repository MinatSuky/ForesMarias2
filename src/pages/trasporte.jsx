import { Nav } from "../componetes/nav"

export const Tras = () => {
    return (
        <div>
            <Nav />
            <h5 class="font-bold text-center py-3 text-[3rem] text-[rgb(76,158,235)] mt-[5%] mb-[5%]">Transporte
            </h5>
            <div class="flex flex-col sm:flex-row mx-[1%] ">
                <div class="sm:w-[50%] mb-20 sm:m-0 ">
                    <h5 class="font-bold text-center py-3 text-[3rem] text-[#4C9EEB]"><span class="hidden sm:inline">Transportes</span> Externos <i class="fa-solid fa-taxi"></i>
                    </h5>
                    <p class="p-4 text-xl">En esta sección, encontrarás información sobre las compañías de taxi más seguras y eficientes para garantizar traslados satisfactorios. Exploraremos opciones confiables que te brindarán un servicio de calidad y tranquilidad durante tus desplazamientos.</p>

                    <div class="sm:mx-[5%]">

                        <div class="p-1 rounded-2xl grid grid-cols-2 border-2 shadow-md mb-[5%]">
                            <figure class=""><img src="https://conjuntocerradofloresdemaria.com/static/paguinas/logo%20servi-taxi.png" alt="" class=" m-auto p-4 hover:scale-110 duration-300 ease-in-out" /></figure>
                            <div class="p-2 self-center border-l-2">
                                <p class="text-[0.7rem]">Valledupar-Cesar-Colombia</p>
                                <h6 class="text-[1.5rem] font-bold">Taxi Franja Fucsia Ltda.</h6>
                                <span class="font-bold">"Cr19 e 18 C-04 - Guatapurí"</span>
                                <a href="https://wa.me/573008090010" class="block w-fit border-2 py-2 px-3 text-center mt-[5%] bg-blue-700 hover:bg-blue-500 text-white rounded-md"><i class="fa-brands fa-whatsapp"></i> (+57) 300 8090010</a>
                            </div>
                        </div>

                        <div class="p-1 rounded-2xl grid grid-cols-2 border-2 shadow-md mb-[5%]">
                            <figure class=""><img src="https://conjuntocerradofloresdemaria.com/static/paguinas/TransMitaxi.png" alt="" class=" m-auto p-4 hover:scale-[1.05] duration-300 ease-in-out" /></figure>
                            <div class="p-2 self-center border-l-2">
                                <p class="text-[0.7rem]">Valledupar-Cesar-Colombia</p>
                                <h6 class="text-[1.5rem] font-bold">Transmitaxi Ltda.</h6>
                                <span class="font-bold">"Taxi confiable y rápido"</span>
                                <a href="https://wa.me/576055733333" class="block w-fit border-2 py-2 px-3 text-center mt-[5%] bg-blue-700 hover:bg-blue-500 text-white rounded-md"><i class="fa-brands fa-whatsapp"></i> (+57) 605 5733333</a>
                            </div>
                        </div>

                        <div class="p-1 rounded-2xl grid grid-cols-2 border-2 shadow-md">
                            <figure class=""><img src="https://mototrabajo.com/wp-content/uploads/2020/07/AJUSTE-2-MOTOTRABAJO_0000_2634.png" alt="" class=" m-auto p-4 hover:scale-110 duration-300 ease-in-out" /></figure>
                            <div class="p-2 self-center border-l-2">
                                <p class="text-[0.7rem]">Valledupar-Cesar-Colombia</p>
                                <h6 class="text-[1.5rem] font-bold">CarrroMoto ( Carga )</h6>
                                <span class="font-bold">"Ágil transporte de carga: ¡Moto carro confiable!"</span>
                                <a href="https://wa.me/573232495165" class="block w-fit border-2 py-2 px-3 text-center mt-[5%] bg-blue-700 hover:bg-blue-500 text-white rounded-md"><i class="fa-brands fa-whatsapp"></i> (+57) 323 2495165</a>
                            </div>
                        </div>


                    </div>


                </div>

                <div class="sm:w-[50%] p-2 border-2 border-[#4C9EEB] bg-[#4C9EEB] rounded-lg">

                    <h5 class="font-bold text-center py-3 sm:text-[20px] lg:text-[40px] xl:text-[3rem] flex justify-center items-center gap-5 text-[white]"><span class="hidden sm:inline text-white">Transporte</span> Interno <span className="p-2 border-2 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" color="#ffffff" fill="none">
                            <path d="M12 6L12.9536 9.85977C13.119 10.5295 13.72 11 14.4098 11H20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M2 6H13.0689C14.6176 6 15.3919 6 16.0484 6.34597C16.705 6.69194 17.1427 7.33069 18.0182 8.60818C18.6321 9.50396 19.2765 10.1542 20.1826 10.7326C21.0949 11.315 21.5287 11.5996 21.7694 12.0566C22 12.4942 22 13.0125 22 14.049C22 15.4156 22 16.0989 21.5875 16.5331C21.5699 16.5517 21.5517 16.5699 21.5331 16.5875C21.0989 17 20.4156 17 19.049 17M5 17C4.67926 17 4.38501 17 4.22939 16.9666C4.07377 16.9332 3.92752 16.8674 3.63503 16.7358L2 16C2 12.8056 2.47904 10.9623 3.10557 9.44992C3.5164 8.45825 3.72182 7.96241 3.63686 7.52064C3.5519 7.07887 2.5 6 2.5 6M9 17H15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <circle cx="17" cy="17" r="2" stroke="currentColor" stroke-width="1.5" />
                            <circle cx="7" cy="17" r="2" stroke="currentColor" stroke-width="1.5" />
                        </svg></span></h5>
                    <p class="p-4 text-xl text-white">En esta sección, presentamos los servicios de transporte <b className="text-white">gestionados por propietarios del mismo conjunto</b>, quienes se esfuerzan por ofrecer un <b className="text-white">servicio confiable y más eficiente a sus vecinos, garantizando la confidencialidad en cada traslado.</b></p>
                    <div class="mx-[5%]">

                        <div class="p-1 rounded-2xl flex items-center border-2 shadow-md">
                            <figure class="w-[50%]"><img src="https://conjuntocerradofloresdemaria.com/static/emprendimiento/indriver.jpg" alt="" width={300} class=" m-auto p-4 hover:scale-105 duration-300 ease-in-out rounded-3xl" /></figure>
                            <div class="p-2">
                                <p class="text-[0.7rem] text-white">Conjunto Cerrado Flores de Maria 2</p>
                                <h6 class="text-[1.5rem] font-bold text-white">Servicio De Indriver</h6>
                                <span class="font-bold"></span>
                                <a href="https://wa.me/573002997808" class="block w-fit border-2 border-blue-500 py-2 px-3 text-center mt-[5%] bg-blue-700 hover:bg-blue-500 text-white rounded-lg"><i class="fa-brands fa-whatsapp"></i> (+57) 300 2997808</a>
                            </div>
                        </div>

                    </div>

                </div>
            </div>





            <footer class="text-center text-white bg-[#4C9EEB] py-5 mt-[10%]">
                <p>© Copyright 2023 - 2024 | Conjunto Cerrado Flores De Maria 2 | All Rights Reserved</p>
            </footer>
        </div>
    )
}