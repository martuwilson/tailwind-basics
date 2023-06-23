
const Navbar = () => {
  return (
    <>
       <div id='header' className='h-20 bg-black text-white bebas xs:h-36'>
        <div className='container w-11/12 mx-auto flex flex-row xs:flex-col '>
            <div className="flex-1 xs:mx-auto" id='logo'>
                <div className='group w-64 pt-0.5 pb-0.5 mt-4 ml-6 text-center tracking-wider cursor-pointer overflow-hidden transition duration-300 rounded-sm bg-light-blue hover:text-black hover:bg-gray-300'>
                <span className='symbol block float-left text-3xl mt-1 ml-11 animate-spin-slow group-hover:animate-none group-hover:animate-from-bellow'>
                    S
                </span>
                <h3 className='block float-right text-4xl mt-1.5 mr-16 transition duration-100 group-hover:animate-from-right'>
                    <a href='/' >ToolBox</a>
                </h3>
                </div>
                
            </div>

            <nav className='flex-1'>
                <ul className='flex flex-row h-20 items-center justify-end text-2xl text-center mr-6 xs:m-0 xs:text-center md:justify-end'>
                    <li className='menu-item'>
                        <a href="#" className='menu-href'>
                            INICIO
                        </a>
                    </li>
                    <li className='menu-item'>
                    <a href="#" className='menu-href'>
                            PRODUCTOS
                        </a>
                    </li>
                    <li className='menu-item'>
                    <a href="#" className='menu-href'>
                            FORMACION
                        </a>
                    </li>
                    <li className='menu-item'>
                    <a href="#" className='menu-href'>
                            CONTACTO
                        </a>
                    </li>
                </ul>
            </nav>

        </div>
       </div>
    </>
  )
}

export default Navbar