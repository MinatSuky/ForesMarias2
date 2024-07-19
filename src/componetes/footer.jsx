import logo from "../assets/logos/logo.png"

export const Footer = () => {
    return (

        <div class="text-center sm:text-sm text-white bg-[#4C9EEB] py-5  flex flex-col mt-20">


       {/*flex-col*/}      <div className="flex conve1 justify-center items-center">
                <div className="flex justify-between  items-end">
                    <div className="flex text-center ">
                {/*iten-center*/}       <figure className="flex flex-col conve2 item justify-center"><img src={logo} alt="" class="w-[30%] mb-[5%]" />

                            <button class="w-[250px] bg-[#02529c5d] font-semibold h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#009b49] before:to-[rgb(105,184,141)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]">
                                <a className="w-full" href="https://web-conjuntos.jelpit.com/zona-publica-pagos?_ga=2.123618891.1946377582.1700225843-419690911.1698957252">
                                    $ PAGAR ADMINISTRACIÓN
                                </a>
                            </button>

                        </figure>

                    </div>


                </div>
                <div className="flex flex-col justify-center">
                    <h4 className="font-bold text-[25px] text-[white]">CONTÁCTENOS</h4>
                    <ul>
                        <li><a href="https://wa.me/573142915857" target="_blank" className="text-[18px] hover:text-[#02519C] flex gap-3 mt-4"> <span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 14 14"><path fill="white" d="M5.17 13.24a3.317 3.317 0 0 1-4.161-.457l-.468-.458a1.123 1.123 0 0 1 0-1.57l1.986-1.966a1.113 1.113 0 0 1 1.56 0a1.123 1.123 0 0 0 1.571 0l3.12-3.12a1.103 1.103 0 0 0 0-1.571a1.113 1.113 0 0 1 0-1.56L10.756.56a1.123 1.123 0 0 1 1.57 0l.458.468a3.318 3.318 0 0 1 .458 4.16A30.103 30.103 0 0 1 5.17 13.24" /></svg></span> 314 291 5857</a></li>
                        <li><a href="#" className="text-[18px] hover:text-[#02519C] flex gap-2 items-center "> <span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="white" d="m20 8l-8 5l-8-5V6l8 5l8-5m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2" /></svg></span>floresdemaria2@gmail.com</a></li>
                        <li><a href="https://wa.me/573172794002" target="_blank" className="text-[18px] hover:text-[#02519C] flex gap-3 mt-1"> <span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 14 14"><path fill="white" d="M5.17 13.24a3.317 3.317 0 0 1-4.161-.457l-.468-.458a1.123 1.123 0 0 1 0-1.57l1.986-1.966a1.113 1.113 0 0 1 1.56 0a1.123 1.123 0 0 0 1.571 0l3.12-3.12a1.103 1.103 0 0 0 0-1.571a1.113 1.113 0 0 1 0-1.56L10.756.56a1.123 1.123 0 0 1 1.57 0l.458.468a3.318 3.318 0 0 1 .458 4.16A30.103 30.103 0 0 1 5.17 13.24" /></svg></span> Portería: 317 279 4002</a></li>
                        <li><a href="https://maps.app.goo.gl/arjLs3WhgYWPr6Hu8" target="_blank" class="text-[18px] hover:text-[#02519C] flex gap-2 mt-1"> <span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 48 48"><g fill="none" stroke="white" stroke-linejoin="round" stroke-width="4"><path stroke-linecap="round" d="M9.858 32.757C6.238 33.843 4 35.343 4 37c0 3.314 8.954 6 20 6s20-2.686 20-6c0-1.657-2.239-3.157-5.858-4.243" /><path d="M24 35s13-8.496 13-18.318C37 9.678 31.18 4 24 4S11 9.678 11 16.682C11 26.504 24 35 24 35Z" /><path d="M24 22a5 5 0 1 0 0-10a5 5 0 0 0 0 10Z" /></g></svg></span> Carrera 43 # 16 bis-146</a></li>
                    </ul>
                </div>

            </div>
    {/* flex-col*/}        <div className="flex justify-center conve3 gap-10 items-center mt-5">
                <p>© Copyright 2023 - 2024 | Conjunto Cerrado Flores De Maria 2 | All Rights Reserved</p>
                <div className="flex gap-5 ">
                    <a href="#"> <button

                        class="group flex justify-center p-3 rounded-md drop-shadow-xl bg-gradient-to-r from-gray-800 to-black text-white font-semibold transition-all duration-500 hover:from-[#331029] hover:to-[#310413]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" stroke-width="0" fill="currentColor" stroke="currentColor">
                            <path d="M8 2H1L9.26086 13.0145L1.44995 21.9999H4.09998L10.4883 14.651L16 22H23L14.3917 10.5223L21.8001 2H19.1501L13.1643 8.88578L8 2ZM17 20L5 4H7L19 20H17Z"></path>
                        </svg>

                    </button>
                    </a>
                    <a href="#">
                        <section class="flex justify-center items-center">
                            <button
                                class="group flex justify-center p-3 rounded-md drop-shadow-xl from-gray-800 bg-[#316FF6] hover:bg-[#437efb] text-white font-semibold transition-all hover:from-[#331029] hover:to-[#310413]"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="1.em"
                                    height="1.1em"
                                    viewBox="0 0 448 512"
                                    stroke-width="0"
                                    fill="currentColor"
                                    stroke="currentColor"
                                    class="w-5"
                                >
                                    <path
                                        d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"
                                    ></path>
                                </svg>
                            </button>
                        </section>

                    </a>
                    <a href="#">
                        <section class="flex justify-center items-center">
                            <button
                                href="/"
                                class="group flex justify-center p-2 rounded-md drop-shadow-xl from-gray-800 bg-[#a21caf] hover:bg-[#ab3ab6] text-white font-semibold transition-all  hover:from-[#331029] hover:to-[#310413]"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="22" viewBox="0 0 24 24"><g fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="#ffffff"><path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12" /><path d="M16.5 12a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m1.008-5.5h-.01" /></g></svg>

                            </button>
                        </section>

                    </a>
                </div>
            </div>


        </div>

    )
}