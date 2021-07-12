import React from 'react'
import { Link } from 'react-router-dom'
import Toggle from './themeToggle'

export default function Header () {

	return (
		<div className="flex flex-row justify-between py-4 bg-white dark:bg-gray-700 dark:text-gray-200 shadow-header border-box">
			<p className="text-xl font-bold px-16"><Link to="/">Where in the world?</Link></p>
			<Toggle />
		</div>
	)
}


