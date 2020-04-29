import { config } from "../dataset/config";
import { IElement } from "../entity/Element";
import { JSDOM } from 'jsdom';
import { Flex } from "../entity/Layouts";


const document = new JSDOM('html').window.document;

const root: HTMLDivElement = document.createElement("div");
root.setAttribute("id", "root");

const draw = (element: any, root: HTMLDivElement) => {
  const current = createNode(element);
  root.appendChild(current);
  if (element.children.length > 0)
    element.children.forEach((child: IElement) => draw(child, current));
};

const createNode = (element: IElement) => {
  let flex = new Flex('column')
  let elem = document.createElement("div");
  elem.setAttribute("name", element.name);
  elem.setAttribute("style", flex.get())
  elem.innerHTML = "Test"
  return elem;
};

draw(config, root);
console.log( root.innerHTML)
