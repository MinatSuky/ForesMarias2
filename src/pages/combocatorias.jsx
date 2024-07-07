import { Nav } from "../componetes/nav"

export const Combo = () => {
    return (
        <div>
            <Nav />
            <section>
                <article class="sm:mx-[10%] mt-[5%]">

                    <h5 class="text-[2rem] font-bold text-center text-[#4C9EEB]">Convocatorias</h5>

                    <table class="m-auto w-[100%] ">
                        <tr class="w-[100%] border-gray-400 bg-gray-400 border-2 ">
                            <td class="border-2 p-2 ">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50" height="50" color="black" fill="none">
                                    <path d="M7.99805 16H11.998M7.99805 11H15.998" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                                    <path d="M7.5 3.5C5.9442 3.54667 5.01661 3.71984 4.37477 4.36227C3.49609 5.24177 3.49609 6.6573 3.49609 9.48836L3.49609 15.9944C3.49609 18.8255 3.49609 20.241 4.37477 21.1205C5.25345 22 6.66767 22 9.49609 22L14.4961 22C17.3245 22 18.7387 22 19.6174 21.1205C20.4961 20.241 20.4961 18.8255 20.4961 15.9944V9.48836C20.4961 6.6573 20.4961 5.24177 19.6174 4.36228C18.9756 3.71984 18.048 3.54667 16.4922 3.5" stroke="currentColor" stroke-width="1.5" />
                                    <path d="M7.49609 3.75C7.49609 2.7835 8.2796 2 9.24609 2H14.7461C15.7126 2 16.4961 2.7835 16.4961 3.75C16.4961 4.7165 15.7126 5.5 14.7461 5.5H9.24609C8.2796 5.5 7.49609 4.7165 7.49609 3.75Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
                                </svg>
                            </td>
                            <td class="w-[30%] p-2 font-bold border-2 none">NOMBRE</td>
                            <td class="w-[60%] p-2 font-bold border-2 none">DESCRIPCÍON</td>
                            <td class="w-[10%] p-2 font-bold border-2 none">FECHA</td>
                        </tr>
                        <tr class="hover:text-[#4C9EEB] cursor-pointer">
                            <td class="border-2 p-2 "><a href="https://drive.google.com/file/d/1qu59B1xYmgdkofTN5N9GG5CCkEEc8e2H/view?usp=drive_link" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50" height="50" color="black" fill="none">
                                    <path d="M7 18V15.5M7 15.5V14C7 13.5286 7 13.2929 7.15377 13.1464C7.30754 13 7.55503 13 8.05 13H8.75C9.47487 13 10.0625 13.5596 10.0625 14.25C10.0625 14.9404 9.47487 15.5 8.75 15.5H7ZM21 13H19.6875C18.8625 13 18.4501 13 18.1938 13.2441C17.9375 13.4882 17.9375 13.881 17.9375 14.6667V15.5M17.9375 18V15.5M17.9375 15.5H20.125M15.75 15.5C15.75 16.8807 14.5747 18 13.125 18C12.7979 18 12.6343 18 12.5125 17.933C12.2208 17.7726 12.25 17.448 12.25 17.1667V13.8333C12.25 13.552 12.2208 13.2274 12.5125 13.067C12.6343 13 12.7979 13 13.125 13C14.5747 13 15.75 14.1193 15.75 15.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M15 22H10.7273C7.46607 22 5.83546 22 4.70307 21.2022C4.37862 20.9736 4.09058 20.7025 3.8477 20.3971C3 19.3313 3 17.7966 3 14.7273V12.1818C3 9.21865 3 7.73706 3.46894 6.55375C4.22281 4.65142 5.81714 3.15088 7.83836 2.44135C9.09563 2 10.6698 2 13.8182 2C15.6173 2 16.5168 2 17.2352 2.2522C18.3902 2.65765 19.3012 3.5151 19.732 4.60214C20 5.27832 20 6.12494 20 7.81818V10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M3 12C3 10.1591 4.49238 8.66667 6.33333 8.66667C6.99912 8.66667 7.78404 8.78333 8.43137 8.60988C9.00652 8.45576 9.45576 8.00652 9.60988 7.43136C9.78333 6.78404 9.66667 5.99912 9.66667 5.33333C9.66667 3.49238 11.1591 2 13 2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </a>
                            </td>
                            <td class="px-2 border-2 none"><a href="https://drive.google.com/file/d/1qu59B1xYmgdkofTN5N9GG5CCkEEc8e2H/view?usp=drive_link" target="_blank" class="hover:underline">ASISTENTE ADMINISTRACIÓN 2024</a></td>
                            <td class=" border-2 px-2 none">CONVOCATORIA ASISTENTE ADMINISTRACIÓN 2024</td>
                            <td class="border-2 none"><input type="date" value="2024-01-12" /></td>
                        </tr>

                    </table>

                </article>
            </section>
        </div>
    )
}