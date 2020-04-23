
import { ContainerType } from "../entity/Types";
import { IElement } from '../entity/Element';

const text = {
  name: "text",
  type: ContainerType.div,
  children: [],
};
const productName = {
  name: "productName",
  type: ContainerType.div,
  children: [text],
};

const productDescription = {
  name: "productType",
  type: ContainerType.div,
  children: [text],
};

export const config = {
  name: "product",
  type: ContainerType.div,
  children: [productName, productDescription],
};

