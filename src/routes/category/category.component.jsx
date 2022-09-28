import { Fragment, useEffect } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from '../../components/product-card/product-card.component'
import { CategoriesContext } from '../../context/categories.context'
import { CategoryContainer, CategoryTitle } from './category.styles'

const Category = () => {
    const { category } = useParams()
    const { categoriesMap } = useContext(CategoriesContext)
    const [products, setProducts] = useState(categoriesMap[category])

    useEffect(() => {
        setProducts(categoriesMap[category])
    }, [category, categoriesMap])
    //const products = categoriesMap[category]

    return (
        <Fragment>
            <CategoryTitle as="h2">{category.toUpperCase()}</CategoryTitle>
            <CategoryContainer>
                {
                    products &&
                    products.map((product) => <ProductCard key={product.id} product={product} />)
                }
            </CategoryContainer>
        </Fragment>
    )
}

export default Category