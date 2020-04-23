import { IElement, IAttribute } from './Element';
import { generateElementID } from '../lib/utils';
import { ContainerType } from './Types';

export class Div implements IElement {
    name: string
    id: string
    type: string
    styles: IAttribute<object>
    attributes: IAttribute<string>[]
    children: IElement[]


    constructor(name: string) {
        this.id = generateElementID(name)
        this.name = name
        this.type = 'div'

    }

}