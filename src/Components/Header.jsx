import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
const navigation = [
    {name:"Home" , to:"/", isActive:true},
    {name:"About" , to:"/about", isActive:false},
    {name:"Github" , to:"/github", isActive:false},
    {name:"Blogs" , to:"/blogs", isActive:false},
    {name:"Portfolio" , to:"/portfolio", isActive:false},
    {name:"Resume" , to:"/resume", isActive:false},
    {name:"Projects" , to:"/projects", isActive:false},
]

const Header = () => {
    const [nav, setNav] = useState(false)
    return (
        // max-w-[1240px] 
        <div className="flex justify-between items-center w-full mx-auto px-4 text-black sticky top-0 shadow-lg h-16">
            <div className="logo p-2 "><span className={nav ? 'text-white' : 'font-extrabold text-[#000fb5] text-2xl '}>Programmer Kanhaiya</span></div>
            <nav className=''>
                <ul className='hidden md:flex'>
                   {
                    navigation.map((items)=>{
                        return(
                            <li className="p-5" key={items.name}>
                                <NavLink  to={items.to} >{items.name}</NavLink>
                            </li>
                        )
                    })
                   }
                </ul>
            </nav>
            <div className='block md:hidden border-b-gray-900' onClick={() => {
                setNav(!nav)
            }}>
                {!nav ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
            {/* </div>
            <div className='block md:hidden ' > */}
                <ul className={nav ? 'fixed left-1 top-0 w-[60%] h-full border-r border-r-gray-300 ease-in-out duration-500 bg-slate-50' : 'ease-in-out duration-500 fixed left-[-100%]'}>
                    <div className="logo"><span className='font-bold w-full text-[#000fb5] px-5 py-2 text-2xl'>Programmer Kanhaiya</span></div>
                    {
                    navigation.map((items)=>{
                        return(
                            <li key={items.name} className="p-5 border-b border-gray-300">
                                
                                <NavLink  to={items.to} >{items.name}</NavLink>
                            </li>
                        )
                    })
                   }
                </ul>
            </div>
        </div>

    )
}



export default Header