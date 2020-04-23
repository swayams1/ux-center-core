import { v4 as UUID } from 'uuid'
import { IElement } from '../entity/Element';
import { ContainerType } from '../entity/Types';
import { Div } from '../entity/Containers';

export const generateElementID = ( name: string ) => {
    return name + '-' + UUID()
}
