import { Button } from "antd";
import { MouseEventHandler } from "react";

export default function Square({
    value,
    OnSquareClicked,
}: {
    value: string | null;
    OnSquareClicked: MouseEventHandler<HTMLButtonElement>;
}) {
    return (
        <Button className="square" onClick={OnSquareClicked}>
            {value || ""}
        </Button>
    );
}
