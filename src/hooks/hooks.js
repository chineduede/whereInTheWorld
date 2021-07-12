import { useState, useEffect } from 'react'
import axios from 'axios'

export const baseUrl = 'https://restcountries.eu/rest/v2/all'

const useCountry = (url) => {
	const [ initialCountries, setInitialCountries ] = useState([])
	const [ filteredState, setFiltered ] = useState([])
	const [ selectFilter , setSelectFilter ] = useState('')
	const [ inputFilter , setInuptFilter ] = useState('')

	useEffect(() => {
	const getAll = async () => {
		const response = await axios.get(url)
		setInitialCountries(response.data)
		setFiltered(response.data)
	}
	getAll()
	}, [url])

	const countries = filteredState.filter(country => {
		return country.name.toLowerCase().includes(inputFilter.toLowerCase()) && country.region.toLowerCase().includes(selectFilter.toLowerCase())
	})


	return {
		initialCountries,
		countries,
		setInuptFilter,
		setSelectFilter,
		selectFilter,
		inputFilter
	}
}

export const changeObj = (state, obj) => {

	const borders = obj.borders
	const temp = []

	if (borders) {
		for (let country of state) {
			if (borders.includes(country.alpha3Code)) {
				temp.push(country.alpha3Code + ' ' + country.name)
			}
		}
	}

	return {...obj, borders: temp}
}


export default useCountry