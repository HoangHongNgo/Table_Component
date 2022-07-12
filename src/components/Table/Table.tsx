import { Row } from 'antd';
import React, { useState } from 'react'
import Item from '../Item/Item';
import style from './Table.module.css'
import { Pagination } from 'antd';

interface header<T> {
  title: string,
  key: string,
  width: number,
  render?: (value: any) => React.ReactNode
}

interface TableProps<T extends {}> {
  items: T[],
  header: header<T>[]
}

// 


export default function Table<T extends {}>(props: TableProps<T>) {
  const [current, setCurrent] = useState(1);
  const onChange = (e: number) => {
    console.log(e);
    setCurrent(e);
  }
  let total = props.items.length + 1;
  const handleConsole = (): void => {
    console.log(props.header, '>>>', props.items);
  }
  return (
    <div >
      <button onClick={handleConsole}>console.log</button>
      <Row justify="center">
        <table>
          <thead>
            <tr>
              {props.header.map((data) =>
                <th className={style[`col-width-${data.width}`]}>{data.title}</th>
              )}
            </tr>
          </thead>
          <tbody>
            {props.items.map((item, index) => {
              if (index >= (current - 1) * 10 && index < current * 10) return (
                <Item item={item} header={props.header} />)
            })}
          </tbody>
        </table>
      </Row >
      <Pagination pageSize={10} onChange={onChange} defaultCurrent={1} total={total} />
    </div>
  )
}
