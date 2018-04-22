import * as React from "react"

interface RowProps {
 name: string,
}

export const Row_12: React.SFC<RowProps> = (props) => {
 return <h1>Hello, {props.name}</h1>;
}
