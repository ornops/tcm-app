import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
	const navigations = ['Dashboard', 'Test Cases', 'Test Suites', 'User Profile']
	return (
		<div>
			{navigations.map((navigation) => (
				<span>
					<Link key={navigation} to={`/${navigation.toLowerCase().replace(/[^a-z]/g, "")}`}>{navigation}</Link>
					<span> | </span>
				</span>
			))}
		</div>
	)
}

export default NavBar
