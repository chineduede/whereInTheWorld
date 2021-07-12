import React from 'react'

export default function Background ({ children }) {

	return (
		<div className="bg-white dark:bg-gray-800 transition-all">
			{children}
		</div>
	)
}