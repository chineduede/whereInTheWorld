import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { ReactComponent as BackIcon } from '../icons/back.svg'


export default function CountryDetail({ country }) {
	const history = useHistory()

	return (
		<div className="flex flex-col dark:bg-gray-800 dark:text-gray-200">
			<div className="my-12 mx-16 shadow-4xl">
				<button className="py-1 rounded-lg inline-flex hover:shadow-shad dark:bg-gray-700 justify-center w-24 shadow-button focus:outline-none" onClick={() => history.goBack()}>
					<BackIcon className=""/>
					<span className="justify-self-end pb-1 font-medium text-gray-400 dark:text-gray-200">Back</span>
				</button>
			</div>
			
			<div className="flex flex-col md:flex-row border-box m-8 md:m-16 mt-1">
				<div className="w-full md:w-96 md:flex-none flex-grow">
					<img src={country.flag} alt={country.name} className=" w-full h-full` align-middle border-none object-cover"/>
				</div>
				<div className="md:ml-16 mt-8 md:mt-0">
					<p className="text-xl font-bold md:px-12 md:pb-4">{country.name}</p>
					<div className="md:px-12 text-base">
					<div className="flex flex-col md:flex-row md:space-x-28">
						<div className="">
							<p className="font-extralight text-sm py-1"><span className="font-medium">Native Name: </span>{country.nativeName}</p>
							<p className="font-extralight text-sm py-1"><span className="font-medium">Population: </span>{country.population.toLocaleString()}</p>
							<p className="font-extralight text-sm py-1"><span className="font-medium">Region: </span>{country.region}</p>
							<p className="font-extralight text-sm py-1"><span className="font-medium">Sub Region: </span>{country.subregion}</p>
							<p className="font-extralight text-sm py-1"><span className="font-medium">Capital: </span>{country.capital}</p>
						</div>
						<div className="mt-8 md:mt-0">
							<p className="font-extralight text-sm py-1"><span className="font-medium">Top Level Domain: </span>{country.topLevelDomain}</p>
							<p className="font-extralight text-sm py-1"><span className="font-medium">Currencies: </span>{country.currencies.map(curr => curr.name).join()}</p>
							<p className="font-extralight text-sm py-1"><span className="font-medium">Languages: </span>{country.languages.map(lang => lang.name).join()}</p>
						</div>
					</div>
						<div className="flex flex-row md:flex-wrap text-xs my-6">
							<p><span className="font-medium text-base">Border Countries: </span>{
								country.borders.map(border => 
									<button className="border-box p-2 rounded inline-flex justify-center w-28 hover:shadow-shad shadow-button m-1 mb-4 focus:outline-none dark:bg-gray-700" key={border}>
									<Link to={`/${border.slice(0, 3)}`}>{border.slice(3,20)}</Link></button>)}
							</p>
						</div> 
				</div>
			</div>
			</div>
		</div>
	)
}