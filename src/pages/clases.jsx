import { Nav } from "../componetes/nav"
import img from "../static/paguinas/aerobicas.jpg"

export const Clases = () => {
    return (
        <div>
            <Nav />
            <section className="mt-24">

                <article>
                    <h5 class="font-bold text-center py-3 text-[3rem] text-[#4C9EEB] tai2">CLASES AERÓBICAS</h5>
                    <div className="CONTAI mx-[5%] flex gap-10 mt-8">
                        <div className="w-[70%] con">
                            <img className="rounded-lg img65" src={img} alt="" />
                        </div>
                        <div className="flex flex-col justify-around items-start con">
                            <div className="text-lg">
                                <p>BIENVENID@S TOD@S reciban un cordial saludo de parte de la alcadia de Valledupar a través
                                    del
                                    Instituto de deportes recreación y actividad física de Valledupar INDER y su programa de
                                    Hábitos y
                                    Estilos de Vida Saludable Valledupar Más Activa <br />
                                    Este es un espacio donde se promueven Hábitos y Estilos de Vida Saludable, basados en
                                    tres
                                    pilares
                                    fundamentales:</p><br />
                                <ul>
                                    <li> La práctica regular de Actividad Física (acumular por lo menos entre 150 a 300
                                        minutos
                                        a la
                                        semana) por ello <b>tenemos sesiones o encuentros 3 veces por semana los días;
                                            Miércoles
                                            y Viernes
                                            de 6:30 a 7:30 p.m. y Jueves de 7:50 a 8:50 p.m.</b></li><br />
                                    <li>• El consumo de Frutas y verduras (por lo menos 5 porciones al día) 3 de verduras y
                                        2 de
                                        frutas.
                                    </li><br />
                                    <li>• La protección de espacios 100% libres de humo</li><br />
                                </ul>
                            </div>
                            <button>
                                <a href="https://wa.me/573006967676" target="_blank"
                                    class="py-3 px-5 text-white font-semibold rounded-full bg-[#4C9EEB]"> <i
                                        class="fa-brands fa-whatsapp"></i> MAS INFO 300 696 7676</a>
                            </button>
                        </div>
                    </div>
                   
                </article>

            </section>

            <footer class="text-center text-white bg-[#4C9EEB] py-5 mt-[10%]">
                <p>© Copyright 2023 - 2024 | Conjunto Cerrado Flores De Maria 2 | All Rights Reserved</p>
            </footer>
        </div>
    )
}