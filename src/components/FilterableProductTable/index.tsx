import ProductTable from "./ProductTable"
import SearchTable from "./SearchBar"

export interface IProduct {
    category: string
    price: string
    stocked: boolean
    name: string
}

const ProductData: IProduct[] = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
]

export default function FilterableProductTable() {
    return (
        <div
            style={{
                padding: "5px",
            }}
        >
            <SearchTable />
            <ProductTable ProductData={ProductData} />
        </div>
    )
}
