import React from 'react'
import { FaChessQueen } from 'react-icons/fa'; 
import './Navbar.css'

export const Navbar = () => {
	return (
		<div className = "contenedor">
			<ul className = "icon"> 
				<li><a href="#"><FaChessQueen/></a></li>
			</ul>
			<ul className = "menu">
				<li><a href="/">Home</a></li>
				<li><a href="/about">About</a></li>
				<li><a href="/projects">Projects</a></li>
				<li><a href="/contact">Contact</a></li>
			</ul>
			
		</div>
	)
}
