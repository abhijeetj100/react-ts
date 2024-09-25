import { uniq } from "lodash-es"
import { IProduct } from ".."
import ProductCategoryRow from "./ProductCategoryRow"
import ProductRow from "./ProductRow"

interface IProductCategoryRow {
    categoryComponent: React.ReactElement<typeof ProductCategoryRow>
    productComponents: React.ReactElement<typeof ProductRow>[]
}

export default function ProductTable({
    ProductData,
}: {
    ProductData: IProduct[]
}) {
    const categories: string[] = ProductData.map((product) => product.category)
    const uniqCategories: string[] = uniq(categories)

    const productsByCategory = new Map<string, IProduct[]>()

    uniqCategories.forEach((category) => {
        productsByCategory.set(
            category,
            ProductData.filter((product) => product.category === category)
        )
    })

    let productCaregoriesComponents: Map<string, IProductCategoryRow> = new Map<
        string,
        IProductCategoryRow
    >()

    const tableRows: JSX.Element[] = []

    productsByCategory.forEach((value, key) => {
        productCaregoriesComponents.set(key, {
            categoryComponent: <ProductCategoryRow category={key} />,
            productComponents: value.map((product) => (
                <ProductRow product={product} />
            )),
        })
        tableRows.push(<ProductCategoryRow category={key} />)
        tableRows.push(
            ...value.map((product) => <ProductRow product={product} />)
        )
    })

    console.log("hellooo", Object.fromEntries(productCaregoriesComponents))

    return <div>{tableRows}</div>
}
