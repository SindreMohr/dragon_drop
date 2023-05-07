import { ReactNode, useState } from "react";
import styled from "styled-components"


const TableWrapper = styled.div`
    border: 1px solid black;
    display: flex;
`;

type ColumnProps = {
    isDragged: boolean;
}

const ColumnWrapper = styled.div<ColumnProps>`
display: inline;
border: 1px solid grey;
padding: 6px;
background-color: ${({isDragged}) => isDragged ? "green" : "red"};
`;

function Column({key, value}: {key: ColumnEntity, value: ColumnEntity}) {
    const [isDragged, setIsDragged] = useState(false)
    return (
        <ColumnWrapper key={key} draggable isDragged={isDragged} onDrag={() => setIsDragged(true)} onDragEnd={() => setIsDragged(false)}>{value}</ColumnWrapper>
    )
}

type ColumnEntity = "A" | "B" | "C"

type Props = {
    columns?: ColumnEntity[];
}


function Table({columns}: Props) {
    return (
        <TableWrapper>
        {columns?.map((column) =>{ 
            return <Column key={column} value={column} />
        })}
        </TableWrapper>
    )
}

export default Table