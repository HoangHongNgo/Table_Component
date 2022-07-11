import React from 'react'


interface header <T> {
    title : string,
    key: string,
    render?: (value: any) => React.ReactNode
}

interface TableProps<T extends {}> {
  items: T[],
  header: header<T>[]
}

function objectKeys<T extends {}>(obj: T) {
  return Object.keys(obj).map((objKey) => objKey as keyof T);
}


export default function Table<T extends {}>(props: TableProps<T>) {
    const handleConsole = () => {
    console.log(props.header, '>>>', props.items);
}
    const renderRow = (item: T, columns: header<T>[]) => {
        return(
            <tr>
                {
                    
                }
            </tr>
        )
    }

  return (
    <div>
        <button onClick={handleConsole}>console.log</button>
        <table>
            <thead>
                {/* {props.header.map((headerItem : header) => (
                 <th>{objectValues(headerItem)[1]}</th>
                ))} */}
                {props.header.map((data) => 
                <th>{data.title}</th>
                )}
            </thead>
            <tbody>
                {props.items.map((item) =>
                    <tr>
                        <td></td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>
  )
}
