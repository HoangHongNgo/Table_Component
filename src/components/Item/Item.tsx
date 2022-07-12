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

export default function Item<T extends {}>(props: Props<T>) {
  return (
    <tr>
      {props.header.map<JSX.Element>((column) => {
        return <Detail item_key={column.key} column={column} data={props.item} />
      }
      )}
    </tr>
  )
}
