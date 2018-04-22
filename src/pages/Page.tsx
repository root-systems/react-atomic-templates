import * as React from "react"

interface PageProps {
 name: string,
}

export const Page: React.SFC<PageProps> = (props) => {
 return <h1>Hello, {props.name}</h1>;
}