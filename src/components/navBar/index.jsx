import React, { useState } from "react";
import { FaBars, FaReact } from 'react-icons/fa';
import { HiX } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import './styles.scss';


const data = [
    {
        label: 'HOME',
        to: '/'
    },
    {
        label: 'ABOUT',
        to: '/about'
    },
    {
        label: 'SKILLS',
        to: '/skills'
    },
    {
        label: 'RESUME',
        to: '/resume'
    },
    {
        label: 'CONTACT',
        to: '/contact'
    },
    {
        label: 'TEST',
        to: '/test'
    }
    
]

const Navbar = () => {

    const [toggleIcon, setToggleIcon] = useState(false)


    const handleToggleIcon = () => {
        setToggleIcon(!toggleIcon)
    }
    return (
        <div>
            <nav className="navbar">
                <div className="navbar_container">
                    <Link to={'/'} className="navbar_container_logo">
                        <FaReact className="react-icon" size={35} />
                    </Link>
                </div>
                {/* Template Literals, throw vars and expressions inside string literals */}
                <ul className={`navbar_container_menu ${toggleIcon ? "active" : ""} `}>
                    {
                        data.map((item, key) => (
                            <li key={key} className="navbar_container_menu_item">
                                <Link className="navbar_container_menu_item_links" to={item.to}>
                                    {item.label}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
                <div className="nav-icon" onClick={handleToggleIcon}>
                    {
                        toggleIcon ? <HiX size={30} /> : <FaBars size={30} />
                    }
                </div>
            </nav>
        </div>
    )
}

export default Navbar
