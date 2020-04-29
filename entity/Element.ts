export interface IAttribute<T> {
    key: string
    value: T
}


export interface IElement {
    name: string
    children: IElement[] 
}

export class Element implements IElement {
    name: string
    children: Element[]
    type: string

    constructor(name: string,  children: Element[], type: string) {
        this.name = name
        this.children = children
        this.type = type
    }
}


