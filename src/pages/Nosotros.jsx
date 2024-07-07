import { Nav } from "../componetes/nav"

export const Noso = () => {
    return (
        <div>
            <div>
                <Nav />
            </div>
            <section className="mt-28">

                <article >
               
                    <div class="nosotros">
                    <h3 class=" text-[3rem] text-center font-bold">Nosotros</h3>
                        <div className="contenedor mt-10 flex mx-3">
                        <div className="w-[50%] connt">
                        <figure className="flex justify-center items-center mx-3">
                                <img className="rounded-xl" src="https://orbeconstrucciones.com.co/wp-content/uploads/2023/02/0003-new-1024x678.jpg" alt="" width={700} />
                            </figure>
                        </div>
                            <div className="w-[50%] connt">
                           
                            <p class="p-4 text-center font-medium">Flores de María 2 es un proyecto de casas y apartamentos en conjunto cerrado, que
                                busca proporcionar a sus habitantes bienestar, seguridad y comodidad, mediante la creación de
                                ambientes urbanos amplios, agradables y de fácil accesibilidad. El proyecto se conforma de casas
                                unifamiliares y tres bloques de apartamentos de 4 pisos sin ascensor. Contará con dos salones
                                sociales, piscina para adultos, piscina para niños, juegos infantiles, gimnasio biosaludable y
                                cancha múltiple.</p>
                            <div className="flex justify-around mt-[3%]">
                                <ul className="text-xl flex flex-col gap-2  p-4  text-white cursor-default ala">
                                    <li className="bg-[#008cff] rounded-md p-1"> ✅ Una piscina para adultos</li>
                                    <li className="bg-[#008cff] rounded-md p-1"> ✅ Dos piscina para niños</li>
                                    <li className="bg-[#008cff] rounded-md p-1"> ✅ Dos salones sociales</li>
                                    <li className="bg-[#008cff] rounded-md p-1"> ✅ Una cancha múltiple</li>
                                    <li className="bg-[#008cff] rounded-md p-1"> ✅ Juegos infantiles</li>
                                </ul>
                                <ul className="text-xl flex flex-col gap-2  p-4  text-white cursor-default ala">
                                    <li className="bg-[#008cff] rounded-md p-1"> ✅ Gimnasio biosaludable</li>
                                    <li className="bg-[#008cff] rounded-md p-1"> ✅ Zona de barbecue</li>
                                    <li className="bg-[#008cff] rounded-md p-1"> ✅ Zona de patinaje </li>
                                    <li className="bg-[#008cff] rounded-md p-1"> ✅ Mesa de ping pong</li>
                                    <li className="bg-[#008cff] rounded-md p-1"> ✅ Locales Comerciales</li>
                                </ul>
                            </div>

                        </div>
                        </div>
                        {/* <div class="w-[100%]">
                            <figure>
                                <img className="rounded-xl" src="https://orbeconstrucciones.com.co/wp-content/uploads/2023/02/0003-new-1024x678.jpg" alt="" />
                            </figure>
                        </div>
                        <div>
                            <h3 class="font-bol text-[3rem] text-center font-bold">Nosotros</h3>
                            <p class="p-4 text-center">Flores de María 2 es un proyecto de casas y apartamentos en conjunto cerrado, que
                                busca proporcionar a sus habitantes bienestar, seguridad y comodidad, mediante la creación de
                                ambientes urbanos amplios, agradables y de fácil accesibilidad. El proyecto se conforma de casas
                                unifamiliares y tres bloques de apartamentos de 4 pisos sin ascensor. Contará con dos salones
                                sociales, piscina para adultos, piscina para niños, juegos infantiles, gimnasio biosaludable y
                                cancha múltiple.</p>
                            <div className="flex justify-around mt-[3%] p-5">
                                <ul className="text-xl flex flex-col gap-2  p-4  text-white cursor-default ala">
                                    <li className="bg-[#008cff] rounded-md p-1"> ✅ Una piscina para adultos</li>
                                    <li className="bg-[#008cff] rounded-md p-1"> ✅ Dos piscina para niños</li>
                                    <li className="bg-[#008cff] rounded-md p-1"> ✅ Dos salones sociales</li>
                                    <li className="bg-[#008cff] rounded-md p-1"> ✅ Una cancha múltiple</li>
                                    <li className="bg-[#008cff] rounded-md p-1"> ✅ Juegos infantiles</li>
                                </ul>
                                <ul className="text-xl flex flex-col gap-2  p-4  text-white cursor-default ala">
                                    <li className="bg-[#008cff] rounded-md p-1"> ✅ Gimnasio biosaludable</li>
                                    <li className="bg-[#008cff] rounded-md p-1"> ✅ Zona de barbecue</li>
                                    <li className="bg-[#008cff] rounded-md p-1"> ✅ Zona de patinaje </li>
                                    <li className="bg-[#008cff] rounded-md p-1"> ✅ Mesa de ping pong</li>
                                    <li className="bg-[#008cff] rounded-md p-1"> ✅ Locales Comerciales</li>
                                </ul>
                            </div>

                        </div> */}


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