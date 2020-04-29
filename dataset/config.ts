
import { DIV } from "../entity/Types";
import { IElement } from '../entity/Element';

const text = {
  name: "text",
  type: DIV,
  children: [],
};
const productName = {
  name: "productName",
  type: DIV,
  children: [text],
};

const productDescription = {
  name: "productType",
  type: DIV,
  children: [text],
};

export const config = {
  name: "product",
  type: DIV,
  children: [productName, productDescription],
};

