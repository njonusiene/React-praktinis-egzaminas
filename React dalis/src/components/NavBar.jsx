import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { GiSpotedFlower, GiFlowerPot } from "react-icons/gi"
import { IoMdContacts } from "react-icons/io";

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav>
        <Link to="/" className='title'><GiSpotedFlower id='icon' /> Flower Store </Link>
        <div className="menu" onClick={() => {
            setMenuOpen(!menuOpen)}}>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <ul className={menuOpen ? "open" : ""}>
            <li><NavLink to="/Flowers" >Flowers <GiFlowerPot /></NavLink> </li>
            <li><NavLink to="/Contact" >Contacts <IoMdContacts /></NavLink> </li>
        </ul>
    </nav>
  )
}

export default Navbar
