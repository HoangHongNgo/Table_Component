import React from 'react'


interface header {
    title : string,
    key: string
}

interface TableProps<T extends {}> {
  items: T[],
  header: header[]
}

function objectValues<T extends {}>(obj: T) {
  console.log(Object.keys(obj).map((objKey) => obj[objKey as keyof T]));
  return Object.keys(obj).map((objKey) => obj[objKey as keyof T]); 
  
}


export default function Table<T extends {}>(props: TableProps<T>) {
    const handleConsole = () => {
    console.log(props.header, '>>>', props.items);
    console.log(objectValues(props.header))
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
        </table>
    </div>
  )
}
