import { useContext } from 'react'
import { CartContext } from '../../context/cart.context'
import { CheckoutContainer, ImageContainer, Quantity, RemoveButton, Arrow, ValueControl, WidthControl } from './checkout-item.styles'

const CheckoutItem = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem
    const { clearItemFromCart, addItemToCart, removeItemFromCart } = useContext(CartContext)

    const clearItemHandler = () => clearItemFromCart(cartItem)
    const addItemHandler = () => addItemToCart(cartItem)
    const removeItemHandler = () => removeItemFromCart(cartItem)

    return (
        <CheckoutContainer>
            <ImageContainer>
                <img src={imageUrl} alt={`${name}`} />
            </ImageContainer>
            <WidthControl as="span">{name}</WidthControl>
            <Quantity>
                <Arrow onClick={removeItemHandler}>
                    &#10094;
                </Arrow>
                <ValueControl>{quantity}</ValueControl>
                <Arrow onClick={addItemHandler}>
                    &#10095;
                </Arrow>
            </Quantity>
            <WidthControl as="span">{`\u20AC${price}`}</WidthControl>
            <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
        </CheckoutContainer>
    )
}

export default CheckoutItem