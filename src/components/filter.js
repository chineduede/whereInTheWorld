import { ReactComponent as SearchIcon } from '../icons/search.svg'
import MyRegion from './region'


export default function Filter ({ initialInput, inputFilter, initialSelect, selectFilter }) {

	return (
		<div className="flex flex-col w-full  md:flex-row md:my-0 lg:justify-between bg-gray-50 dark:bg-gray-800 dark:text-white">
			<div className="mx-16 relative flex w-auto my-2 md:w-96 flex-wrap items-stretch lg:mx-24 md:my-10">
				<SearchIcon className="z-40 h-10 leading-snug font-normal border-none text-gray-400 absolute bg-transparent dark:bg-gray-700 stroke-current w-8 pl-2 py-3"/>
				<input 
					type="text" 
					placeholder="Search for a country..." 
					className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white dark:bg-gray-700 rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pl-10"
					value={initialInput}
					onChange={({ target }) => inputFilter(target.value)}/>
			</div>
			<div className="w-auto sm:w-2/5 my-4 mx-16 md:mx-24 md:my-10 md:w-48">
				<MyRegion 
					selected={initialSelect}
					setSelected={selectFilter}
					/>
				</div>
		</div>
	)
}