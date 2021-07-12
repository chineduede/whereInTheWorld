import React, { Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { ReactComponent as CheckIcon } from '../icons/check.svg'
import { ReactComponent as DownIcon } from '../icons/down.svg'

function classNames (...classes) {
	return classes.filter(Boolean).join(' ')
}

const regions = [
	{id: 1, name: 'Africa', value: 'africa'},
	{id: 2, name: 'America', value: 'america'},
	{id: 3, name: 'Asia', value: 'asia'},
	{id: 4, name: 'Europe', value: 'europe'},
	{id: 5, name: 'Ocenia', value: 'ocenia'},
	{id: 6, name: 'All', value: ''},
]


const MyRegion = ({ selected, setSelected }) => {

  return (
    <Listbox value={selected} onChange={setSelected}>
			{({ open }) => (
				<>
				<Listbox.Button 
					className="relative h-10 w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-pointer focus:outline-none focus:ring-1 focus:ring-gray-100 focus:border-gray-100 dark:border-gray-900 dark:bg-gray-700 sm:text-sm">
					Filter by Region
					<span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
						<DownIcon className="h-5 w-5 text-gray-400" aria-hidden="true"/>
					</span>
				</Listbox.Button>

				<Transition show={open} 
					as={Fragment} 
					leave="transition ease-in duration-100" 
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
				<Listbox.Options 
				static
				className="absolute z-10 mt-1 w-36 bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto dark:bg-gray-700 dark:text-white focus:outline-none sm:text-sm"
				>
					{regions.map((region) => (
						<Listbox.Option
							key={region.id}
							className={({ active }) =>
								classNames(
									active ? 'text-white bg-indigo-600' : 'text-gray-900 dark:text-gray-200', 
									'cursor-pointer select-none relative py-2 pl-3 pr-9'
								)
							}
							value={region.value}>
								{({ selected, active }) => (
									<>
										<div className="flex items-center">
											<span
											 className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
											 >
												{region.name}
											</span>
										</div>
										{selected ? (
											<span
											className={classNames(
												active ? 'text-white' : 'text-indigo-600',
												'absolute inset-y-0 right-0 flex items-center pr-4'
											)}>
												<CheckIcon className="h-5 w-5" aria-hidden="true"/>
											</span>
										) : null}
									</>	
								)}
						</Listbox.Option>
					))}
				</Listbox.Options>
				</Transition>
				</>
			)}
    </Listbox>
	)
}

export default MyRegion