import { Nav } from "../componetes/nav"
import img from "../static/comunicados/futbol.jpg"
import img2 from "../static/paguinas/Equipo de futbol.jpg"

export const Futbol = () => {
    return (
        <div>
            <Nav />
            <section class="sm:mx-[10%] mt-[10%]">
                <div className="flex items-center justify-center gap-5">
                    <p className="tai2 text-center font-black cursor-default text-[#4C9EEB]">Fútbol</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 1792 1792"><path fill="#4C9EEB" d="m609 816l287-208l287 208l-109 336H719zM896 0q182 0 348 71t286 191t191 286t71 348t-71 348t-191 286t-286 191t-348 71t-348-71t-286-191t-191-286T0 896t71-348t191-286T548 71T896 0m619 1350q149-203 149-454v-3l-102 89l-240-224l63-323l134 12q-150-206-389-282l53 124l-287 159l-287-159l53-124q-239 76-389 282l135-12l62 323l-240 224l-102-89v3q0 251 149 454l30-132l326 40l139 298l-116 69q117 39 240 39t240-39l-116-69l139-298l326-40z" /></svg>
                </div>
                <article>
                    <div className="mb-10 flex flex-col justify-center bg-white xl:w-[100%] shadow-lg rounded-xl p-6 border border-gray-200 cursor-default m-2">
                        <h2 className="title lg:text-center text-2xl font-semibold text-orange-700 mb-4">CAMPEONATO MICRO FUTBOL</h2>
                        <div className="conn xl:flex sm:flex flex sm:justify-center gap-10 items-center">
                            <img className=" h-auto rounded-lg" src={img} width={700} />
                            <div className="text-gray-800 leading-relaxed mb-4 text-3xl text-center">
                                <b>ESTUDIANTES DEL CCMFM2! </b>Los invitamos a participar en una emocionante actividad deportiva. Organicen sus equipos, denles nombres originales y prepárense para vivir momentos geniales. ¡Los esperamos para disfrutar juntos de deporte y diversión!
                            </div>
                        </div>

                    </div>

                    <div>
                        <div className="mt-40 w-full flex justify-center">
                            <img className="rounded-xl w-[80%] h-[750px]" src={img2} alt="" />
                        </div>
                        <div>
                            <p className="text-xl text-center mt-16">
                                ¡Invitamos a todos los vecinos del conjunto flores de maría 2, a participar en los partidos de fútbol que se realizarán los días martes y jueves a las 9:00 p.m. en la cancha sintética del barrio
                                El fútbol es un deporte rápido y emocionante que es ideal para todas las edades y niveles de habilidad. Es una excelente manera de hacer ejercicio, divertirse y conocer a nuevos vecinos.
                                Los partidos son gratuitos y abiertos a todos los interesados. Escribanos al 3188077430 y únase al juego.
                            </p>
                            <hr className="mt-5" />
                            <p className="text-xl mt-5"><b>¿Por qué deberías participar?</b></p>
                            <p className="mt-5 text-xl text-center">
                                ¡Es una excelente manera de hacer ejercicio! El fútbol es un deporte muy activo que puede
                                ayudarte a quemar calorías y mejorar tu condición física.
                                ¡Es divertido! El fútbol es un juego emocionante que te hará sudar y reír.
                                ¡Es una oportunidad para conocer a nuevos vecinos! El fútbol es una gran manera de hacer
                                amigos y crear una comunidad.
                            </p>
                            <hr className="mt-5" />
                            <p className="text-xl mt-5"><b>¿Qué necesitas para participar?</b></p>
                            <p className="mt-5 text-xl">
                            Solo necesitas un par de zapatos deportivos y ropa cómoda. <br/>
                            Si tienes un balón de fútbol, puedes llevarlo contigo. Si no, no te preocupes, habrá balones
                            disponibles en la cancha.
                            ¡Te esperamos!
                            </p>
                        </div>
                        {/* <div class="flex bg-[#4C9EEB]">

                    <div class="p-4 text-[1.3rem]">
                        <img src="../static/paguinas/Equipo de futbol.jpg" alt="" class="float-left md:w-[50%] p-4"/>
                        <p>¡Invitamos a todos los vecinos del conjunto flores de maría 2, a participar en los partidos
                            de fútbol que se realizarán los días martes y jueves a las 9:00 p.m. en la cancha sintética
                            del barrio <br/>
                            El fútbol es un deporte rápido y emocionante que es ideal para todas las edades y niveles de
                            habilidad. Es una excelente manera de hacer ejercicio, divertirse y conocer a nuevos
                            vecinos. <br/>

                            Los partidos son gratuitos y abiertos a todos los interesados. Escribanos al 3188077430 y
                            únase al juego. <br/><br/>

                            <b>¿Por qué deberías participar?</b> <br/><br/>

                            ¡Es una excelente manera de hacer ejercicio! El fútbol es un deporte muy activo que puede
                            ayudarte a quemar calorías y mejorar tu condición física.
                            ¡Es divertido! El fútbol es un juego emocionante que te hará sudar y reír. <br/><br/>
                            ¡Es una oportunidad para conocer a nuevos vecinos! El fútbol es una gran manera de hacer
                            amigos y crear una comunidad. <br/><br/>
                            <b>¿Qué necesitas para participar?</b> <br><br>

                            Solo necesitas un par de zapatos deportivos y ropa cómoda. <br/>
                            Si tienes un balón de fútbol, puedes llevarlo contigo. Si no, no te preocupes, habrá balones
                            disponibles en la cancha.
                            ¡Te esperamos!
                        </p>
                        <a href="https://wa.me/573188077430" target="_blank"
                            class="py-1 px-3 text-[#4C9EEB] rounded-full bg-white"/> <i
                                class="fa-brands fa-whatsapp"/></i> MAS INFO 318 807 7430</a>
                    </div>
                </div> */}
                    </div>
                </article>
            </section>


            <footer class="text-center text-white bg-[#4C9EEB] py-5 mt-[5%]">
                <p>© Copyright 2023 - 2024 | Conjunto Cerrado Flores De Maria 2 | All Rights Reserved</p>
            </footer>
        </div>
    )
}