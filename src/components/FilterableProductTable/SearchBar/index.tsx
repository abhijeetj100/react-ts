import { Button, Checkbox, Input } from "antd"
import { useState } from "react"
import type { ButtonProps, CheckboxProps, InputProps } from "antd"

export default function SearchTable() {
    const [checked, setChecked] = useState(false)

    const [searchVal, setSearchVal] = useState("")

    const onChange: CheckboxProps["onChange"] = (e) => {
        setChecked(e.target.checked)
    }

    const OnSearchClicked: ButtonProps["onClick"] = (e) => {
        console.log(checked)
    }

    const OnSearchInput: InputProps["onInput"] = (e: any) => {
        console.log(e.target.value)
        setSearchVal(e.target.value)
    }

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                width: "500px",
                alignItems: "center",
                gap: "10px",
            }}
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "10px",
                }}
            >
                <Input
                    placeholder="Search"
                    style={{ width: "200px" }}
                    value={searchVal}
                    onInput={OnSearchInput}
                />
                <Button type="primary" onClick={OnSearchClicked}>
                    Search
                </Button>
            </div>
            <Checkbox onChange={onChange} checked={checked}>
                Only show products in stock
            </Checkbox>
        </div>
    )
}
