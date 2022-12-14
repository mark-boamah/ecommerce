import { Link } from 'react-router-dom'
import ProductCard from '../product-card/product-card.component'
import { CategoryPreviewContainer, CategoryTitle, Preview } from './category-preview.styles'

const CategoryPreview = ({ title, products }) => {
    return (
        <CategoryPreviewContainer>
            <h2>
                <Link to={title}>
                <CategoryTitle as="span">{title.toUpperCase()}</CategoryTitle>
                </Link>
            </h2>
            <Preview>
                {
                    products.filter((_, index) => index < 4)
                    .map((product) => <ProductCard key={product.id} product={product}/>)
                }
            </Preview>
        </CategoryPreviewContainer>
    )
}

export default CategoryPreview