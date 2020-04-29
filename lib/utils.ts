import { v4 as UUID } from 'uuid'

export const generateElementID = ( name: string ) => {
    return name + '-' + UUID()
}
