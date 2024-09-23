import ProductTable from "./ProductTable";
import SearchTable from "./SearchBar";

// interface IProduct{
//     category: string;
//     price: string;
//     stocked: boolean;
//     name: string;
// }

// const ProductData: IProduct[] = [
//     { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
//     { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
//     { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
//     { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
//     { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
//     { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
//   ];

export default function FilterableProductTable(){
    return (
        <div>
            <h1>FilterableProductTable</h1>
            <SearchTable />
            <ProductTable />
        </div>
    )
}