import { Button } from "antd";
import { MouseEventHandler } from "react";

// function handleClick(count: number, setCount: Function){
//     alert("Button Clicked");
//     setCount(count+1);
// }

export default function MyButton({
    count,
    OnClick,
}: {
    count: number;
    OnClick: MouseEventHandler<HTMLButtonElement>;
}) {
    // const [count, setCount] = useState(0);
    console.log("Rendering MyButton"); // why is this being called twice?

    // function handleClick(){
    //     setCount(count+1);
    //     console.log(`Button clicked ${count} times`);
    // }
    return <Button onClick={OnClick}>Clicked{count} times</Button>;
}
