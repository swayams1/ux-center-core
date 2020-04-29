import { Element, IAttribute } from './Element';
import { generateElementID } from '../lib/utils';
import { DIV } from './Types';

export class Div extends Element {
    name: string
    id: string
    type: string
    styles: string
    children: Element[]


    constructor(name: string, children: Element[], styles: string) {

        super(name, children, DIV);
        this.id = generateElementID(name)
        this.name = name
        this.type = DIV
        this.styles = styles

    }

}