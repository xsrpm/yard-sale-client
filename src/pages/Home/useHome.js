import { useEffect, useState  } from 'react';

const LIMIT = 20;
const INITIAL_PAGE = 0

export function useHome(categoryName){
    const [page, setPage] = useState(INITIAL_PAGE)
    const [products, setProducts] = useState([])
    const [search, setSearch] = useState('')
    const [searchedProducts, setSearchedProducts] = useState([])

    useEffect(() => {
       // console.log(page)
        setPage(INITIAL_PAGE)
        const  url = `https://api.escuelajs.co/api/v1/products?limit=${LIMIT}&offset=${page*LIMIT}`
        fetch(url)
        .then((response) => response.json())
        .then((data) => {
            let newData = data
            
            if (categoryName) {
                newData = newData.filter(
                    (product) => product.category.name === categoryName
                )
                setSearch('')
            }
            setProducts(newData)
            setSearchedProducts(newData)
        })
    },[categoryName])

    useEffect(() => {
        console.log(page)
        if(page === INITIAL_PAGE) return 
        const  url = `https://api.escuelajs.co/api/v1/products?limit=${LIMIT}&offset=${page*LIMIT}`
        fetch(url)
        .then((response) => response.json())
        .then((data) => {
            let newData = products.concat(data)
            
            if (categoryName) {
                newData = newData.filter(
                    (product) => product.category.name === categoryName
                )
                setSearch('')
            }
            setProducts(newData)
            setSearchedProducts(newData) 
        })
    },[page])

    const incrementPage = () => {
        setPage(page + 1)
    }
    const handleTextSearchChange = (e) => {
        setSearch(e.target.value)
        setSearchedProducts(
            products.filter((product) =>
            product.title.toLowerCase().includes(e.target.value.toLowerCase())
            )
        )
    }
    
    return { products, incrementPage, handleTextSearchChange, searchedProducts, search}
}