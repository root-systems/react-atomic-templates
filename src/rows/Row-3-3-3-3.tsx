import * as React from "react"

interface RowProps {
 name: string,
}

export const Row_3_3_3_3: React.SFC<RowProps> = (props) => {
 return <h1>Hello, {props.name}</h1>;
}
