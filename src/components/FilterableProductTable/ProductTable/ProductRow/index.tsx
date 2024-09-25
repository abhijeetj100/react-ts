import { IProduct } from "../.."

export default function ProductRow({ product }: { product: IProduct }) {
    console.log(product)
    return (
        <div
            style={{
                display: "flex",
                width: "500px",
                flexDirection: "row",
                borderBottom: "1px solid #ccc",
                padding: "8px 0",
                color: !product.stocked ? "Red" : "Black",
            }}
        >
            <span style={{ flex: 1, textAlign: "left", padding: "0 8px" }}>
                {product.category}
            </span>
            <span style={{ flex: 1, textAlign: "left", padding: "0 8px" }}>
                {product.name}
            </span>
            <span style={{ flex: 1, textAlign: "left", padding: "0 8px" }}>
                {product.price}
            </span>
            <span style={{ flex: 1, textAlign: "left", padding: "0 8px" }}>
                {product.stocked ? "True" : "False"}
            </span>
        </div>
    )
}
