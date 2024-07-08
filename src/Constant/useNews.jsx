

import React, { useEffect, useState } from 'react'

const useNews = (query) => {

    const [showData, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, [query])

    async function fetchData () {
        const response = await fetch(`https://newsapi.org/v2/everything?q=${query}&language=en&sortBy=publishedAt&apiKey=dbce67461f2249409fd0f0c32b49f8d7`)
        const data = await response.json();
        setData(data?.articles);
    }

    return {showData}
}

export default useNews