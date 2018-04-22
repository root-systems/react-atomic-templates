import * as React from "react"

interface FullWidthSectionProps {
 name: string,
}

export const FullWidthSection: React.SFC<FullWidthSectionProps> = (props) => {
 return <h1>Hello, {props.name}</h1>;
}