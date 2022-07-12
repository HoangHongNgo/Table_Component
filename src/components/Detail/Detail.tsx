interface header<T> {
    title: string;
    key: string;
    width: number;
    render?: (value: any) => React.ReactNode;
}

interface Props<T extends {}> {
    item_key: string | number | symbol;
    column: header<T>;
    data: any;
}

export default function Detail<T extends {}>(props: Props<T>) {
    return (
        <td>{props.column.render?.(props.data[props.item_key])}</td>
    )
}
