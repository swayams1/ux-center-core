
const DISPLAY = "flex"
export class Flex {
    
    display: string
    direction: string
    align: string
    justify: string

    constructor (direction: string = "row", align: string = "flex-start", justify: string = "center") {
        this.display = DISPLAY
        this.direction = direction
        this.align = align
        this.justify = justify
    }

    get() {
        return  ` display: ${this.display}, flex-direction: ${this.direction}, align-items: ${this.align}, justify-content: ${this.justify}`
    }
   
}