import * as React from "react"

interface RowProps {
 name: string,
}

export const Row_2_6: React.SFC<RowProps> = (props) => {
 return <h1>Hello, {props.name}</h1>;
}
