import styled from "styled-components";
import { Add, Remove } from "@material-ui/icons";
import { mobile } from "../responsive";

const Product = styled.div`
  display: flex;
  justify-content: space-between;
    ${mobile({ flexDirection: "column" })}
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;
const Image = styled.img`
  width: 200px;
`;
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductColor = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const ProductSize = styled.span``;
const PriceDetail = styled.div`
  flex: 1;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;
const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;
const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;
const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const CartItem = ({ props }) => {
  return (
    <>
      <Product>
        <ProductDetail>
          <Image src={props.img} />
          <Details>
            <ProductName>
              <b>Product:</b> {props.productName}
            </ProductName>
            <ProductId>
              <b>ID:</b> {props.productId}
            </ProductId>
            <ProductColor color={props.productColor} />
            <ProductSize>
              <b>Size:</b> {props.productSize}
            </ProductSize>
          </Details>
        </ProductDetail>
        <PriceDetail>
          <ProductAmountContainer>
            <Add style={{ cursor: "pointer" }} />
            <ProductAmount>{props.productAmount}</ProductAmount>
            <Remove style={{ cursor: "pointer" }} />
          </ProductAmountContainer>
          <ProductPrice>$ {props.productPrice}</ProductPrice>
        </PriceDetail>
      </Product>
      <Hr />
    </>
  );
};

export default CartItem;
