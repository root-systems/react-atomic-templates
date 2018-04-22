import * as React from "react"

interface StandardSectionProps {
 name: string,
}

export const StandardSection: React.SFC<StandardSectionProps> = (props) => {
 return <h1>Hello, {props.name}</h1>;
}