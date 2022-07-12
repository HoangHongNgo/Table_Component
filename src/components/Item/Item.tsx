import React from 'react'
import Detail from '../Detail/Detail';

interface header<T> {
  title: string;
  key: string;
  width: number;
  render?: (value: any) => React.ReactNode;
}

interface Props<T extends {}> {
  item: T;
  header: header<T>[];
}

function objectKeys<T extends {}>(obj: T) {
  return Object.keys(obj).map((objKey) => objKey as keyof T);
}



export default function Item<T extends {}>(props: Props<T>) {
  // const renderData = () => {
  //   return objectKeys(item).map((keyItem) => {
  //     return <td>{((item[keyItem]) as unknown) as React.ReactNode}</td>
  //   })
  // }

  return (
    <tr>
      {props.header.map((column) => {
        return <Detail item_key={column.key} column={column} data={props.item} />
      }
      )}
      {/* <tr>
        {
          renderData()
        }
      </tr> */}
    </tr>
  )
}
