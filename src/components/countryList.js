import { Link } from 'react-router-dom'


export default function CountryList ({ countries }) {
		
	return (
		<div className="grid justify-items-center gap-8 px-16 sm:justify-self-auto sm:grid-cols-2 lg:px-2 lg:gap-2 lg:grid-cols-4 xl:grid-cols-4 dark:bg-gray-800 dark:text-white xl:px-16">
			{countries.map(country => 
				<CountryCard key={country.alpha3Code} country={country} />)}
		</div>
	)
}

function CountryCard ({ country }) {

	return (
		<div className="w-full md:w-60 flex-col box-border lg:my-6 space-y-5 rounded-lg shadow-button bg-white hover:transition duration-500 ease-in-out dark:text-gray-200 dark:bg-gray-700 transform hover:-translate-y-1 hover:scale-110">
			<Link to={`/${country.alpha3Code}`}>
			<div className="w-full h-1/2 overflow-hidden rounded-t-lg">
				<img src={country.flag} alt={country.name} className=" w-full h-full rounded-t-lg align-middle border-none object-cover"/>
			</div>
			<div className="px-8 py-2 text-xs lg:text-base">
				<p className="font-bold py-2">{country.name}</p>
				<p><span className="font-medium">Population: </span><span className="font-extralight">{country.population.toLocaleString()}</span></p>
				<p><span className="font-medium">Region: </span><span className="font-extralight">{country.region}</span></p>
				<p><span className="font-medium">Capital: </span><span className="font-extralight">{country.capital}</span></p>
			</div>
			</Link>
		</div>
	)
}

