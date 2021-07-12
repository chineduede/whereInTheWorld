import React from 'react'
import { Switch, Route,	useRouteMatch } from 'react-router-dom'

import CountryDetail from './components/details'
import useCountry, { baseUrl, changeObj } from './hooks/hooks'
import Header from './components/header'
import CountryList from './components/countryList'
import Filter from './components/filter'


const App = () => {
	const countries = useCountry(baseUrl)	
	const match = useRouteMatch('/:code')
	
	let country = match
	? countries.initialCountries.find(country => country.alpha3Code === match.params.code)
	: null

	country = country && changeObj(countries.initialCountries, country)

	return (
		<div>
			<Header />
			<div>
				<Switch>
					<Route path="/:code">
						{country && <CountryDetail country={country}/>}
					</Route>
					<Route path="/">
						<Filter 
							inputFilter={countries.setInuptFilter} 
							selectFilter={countries.setSelectFilter}
							initialInput={countries.inputFilter}
							initialSelect={countries.selectFilter}/>
						<CountryList countries={countries.countries}/>
					</Route>
				</Switch>
			</div>
		</div>

	)
}


export default App