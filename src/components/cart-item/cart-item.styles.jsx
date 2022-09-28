import styled from 'styled-components'

export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;

  img {
    width: 30%;
  }
`

export const ItemDetails = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 20px;
  background-color: rgba(0, 0, 0, 1.5%);
  border: 0.1px solid rgba(0, 0, 0, 5%);
`



// .cart-item-container {
//     width: 100%;
//     display: flex;
//     height: 80px;
//     margin-bottom: 15px;
  
//     img {
//       width: 30%;
//     }
  
//     .item-details {
//       width: 70%;
//       display: flex;
//       flex-direction: column;
//       align-items: flex-start;
//       justify-content: center;
//       padding: 10px 20px;
//       background-color: rgba(0, 0, 0, 1.5%);
//       border: 0.1px solid rgba(0, 0, 0, 5%);
  
//       .name {
//         font-size: 16px;
//       }
//     }
//   }