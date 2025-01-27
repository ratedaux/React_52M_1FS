import "./styles.css";
import { ProductProps } from "./types";

function Product({ productName = "Unknown", productPrice }: ProductProps) {
  return (
    <div className="product-wrapper">
      <h3>{productName}</h3>
      {productPrice !== undefined && <div>{productPrice} $</div>}
    </div>
  );
}

export default Product;