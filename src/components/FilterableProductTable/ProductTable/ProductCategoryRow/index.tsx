export default function ProductCategoryRow({ category }: { category: string }) {
    return (
        <div>
            <div
                style={{
                    display: "flex",
                    width: "500px",
                    flexDirection: "row",
                    borderBottom: "1px solid #ccc",
                    padding: "8px 0",
                    fontWeight: "bold",
                }}
            >
                <span style={{ flex: 1, textAlign: "left", padding: "0 8px" }}>
                    {category}
                </span>
                <span style={{ flex: 1, textAlign: "left", padding: "0 8px" }}>
                    Name
                </span>
                <span style={{ flex: 1, textAlign: "left", padding: "0 8px" }}>
                    Price
                </span>
                <span style={{ flex: 1, textAlign: "left", padding: "0 8px" }}>
                    In Stock
                </span>
            </div>
        </div>
    );
}
