import { Button } from 'antd';
import { MouseEventHandler, useState } from 'react';

export default function Square({value, OnSquareClicked}: {value: String | null, OnSquareClicked: MouseEventHandler<HTMLButtonElement>}){
    
    return (
        <Button className='square'  onClick={OnSquareClicked}>{value || ""}</Button>
    )
}