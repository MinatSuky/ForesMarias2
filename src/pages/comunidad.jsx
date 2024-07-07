
import { Nav } from "../componetes/nav"
import { comunidad } from "../js/vendor/comuniadad"
export const Comun = () => {
    return (
        <div>
            <Nav />
            <div className="CONT xl:flex gap-20 justify-center  flex-wrap mt-[8%] mb-10 ">
                {comunidad.map((item, index) => (

                    <div key={index} className="flex flex-col justify-center bg-white xl:w-[45%] shadow-lg rounded-xl p-6 border border-gray-200 cursor-default m-2">
                        <h2 className="title lg:text-center text-2xl font-semibold text-orange-700 mb-4" dangerouslySetInnerHTML={{ __html: item.titulo }}></h2>
                        <div className="conn xl:flex sm:flex flex sm:justify-center gap-10 items-center">
                            <img className=" h-auto rounded-lg" src={item.foto} alt={`Imagen para ${item.titulo}`} width={400} />
                            <div className="text-gray-800 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: item.contenido }}></div>
                        </div>
                        <p className="text-sm flex items-center gap-2 text-gray-400 mb-4 mt-5">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" color="#9b9b9b" fill="none">
                                <path d="M18 2V4M6 2V4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M11.9955 13H12.0045M11.9955 17H12.0045M15.991 13H16M8 13H8.00897M8 17H8.00897" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M3.5 8H20.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M2.5 12.2432C2.5 7.88594 2.5 5.70728 3.75212 4.35364C5.00424 3 7.01949 3 11.05 3H12.95C16.9805 3 18.9958 3 20.2479 4.35364C21.5 5.70728 21.5 7.88594 21.5 12.2432V12.7568C21.5 17.1141 21.5 19.2927 20.2479 20.6464C18.9958 22 16.9805 22 12.95 22H11.05C7.01949 22 5.00424 22 3.75212 20.6464C2.5 19.2927 2.5 17.1141 2.5 12.7568V12.2432Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M3 8H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            {item.fecha}</p>
                    </div>

                ))}
            </div>


            <footer className="text-center text-white bg-[#4C9EEB] py-5">
                <p>© Copyright 2023 - 2024 | Conjunto Cerrado Flores De Maria 2 | All Rights Reserved</p>
            </footer>


        </div>
    )
}