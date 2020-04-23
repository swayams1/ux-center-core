export interface IAttribute<T> {
    key: string
    value: T
}


export interface IElement {
    name: string
    type: string
    children: IElement[]
}