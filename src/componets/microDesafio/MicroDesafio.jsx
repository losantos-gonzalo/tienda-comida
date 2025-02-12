import axios from 'axios'
import React, { useEffect, useState } from 'react'

const MicroDesafioC4 = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = (countryName) => {
            const url = `https://restcountries.com/v3.1/name/${countryName}`
            axios.get(url)
                .then((res) => setData(res.data[0].name.common))
                .catch((error) => console.log(error))
        }
        fetchData('Argentina')
    }, [])

    return (
        <div>
            {data}
        </div>
    )
}

export default MicroDesafioC4