// import { Card } from "antd";

const user = {
    name: "Iron Man",
    imgSrc: "https://www.shutterstock.com/shutterstock/photos/2061533240/display_1500/stock-photo-mountain-view-california-october-iron-man-cardstock-mask-of-marvel-book-character-2061533240.jpg",
    imageSize: 90,
    altDesc: "Iron Man profile photo",
}

interface IProduct {
    title: string
    id: number
    isFruit: boolean
}

const products: IProduct[] = [
    { title: "Cabbage", isFruit: false, id: 1 },
    { title: "Garlic", isFruit: false, id: 2 },
    { title: "Apple", isFruit: true, id: 3 },
]

export default function ProfileCard() {
    let title: JSX.Element | null
    let image: JSX.Element | null
    let productsList: JSX.Element[] = products.map((product) => (
        <li
            key={product.id}
            style={{ color: product.isFruit ? "red" : "green" }}
        >
            {product.title}
        </li>
    ))
    if (user.name.length !== 0) {
        title = <h1>{user.name}</h1>
        image = (
            <img
                className="avatar"
                src={user.imgSrc}
                alt={user.altDesc}
                style={{ height: user.imageSize, width: user.imageSize }}
            />
        )
    } else {
        title = <h1>John Doe</h1>
        image = (
            <img
                src="https://www.shutterstock.com/shutterstock/photos/2061533240/display_1500/stock-photo-mountain-view-california-oct"
                alt="Profile"
            />
        )
    }
    return (
        <div>
            {title}
            {image}
            <ul>{productsList}</ul>
        </div>
    )
}
