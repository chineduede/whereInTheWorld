import React from 'react'
import { HiMoon, HiSun } from 'react-icons/hi'
import { ThemeContext } from './themeContext'

export default function Toggle () {
	const { theme, setTheme } = React.useContext(ThemeContext)
	return (
		<div className="transition duration-500 ease-in-out rounded-full p-2">
      {theme === "dark" ? (
				<div className="inline-flex ">
					<span className="pr-4 text-gray-200">Light Mode</span>
					<HiSun
						onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
						className="text-gray-500 dark:text-gray-400 text-2xl cursor-pointer"
					/>
				</div>
      ) : (
				<div className="inline-flex">
					<span className="pr-4 text-gray-500">Dark Mode</span>
					<HiMoon
						onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
						className="text-gray-500 dark:text-gray-400 text-2xl cursor-pointer"
					/>
				</div>
      )}
			
    </div>
	)
}