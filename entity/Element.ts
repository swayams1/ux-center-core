

interface IAttribute {
    name: string,
    value: string
}

interface IElement {
    name: string
    children: IElement[] 
    attributes: IAttribute[]
}

export class Element implements IElement {
    name: string
    children: Element[]
    attributes: IAttribute[]
    type: string

    constructor(name: string,  children: Element[], type: string) {
        this.name = name
        this.children = children
        this.type = type
    }
}


