import { config } from "../dataset/config";
import { Element } from "../entity/Element";
import { JSDOM } from 'jsdom';
import { Flex } from "../entity/Layouts";


const document = new JSDOM('html').window.document;

const root: HTMLDivElement = document.createElement("div");
root.setAttribute("id", "root");

let link: HTMLElement = document.createElement("link")
link.setAttribute( "href", "../templates/layouts.css")
link.setAttribute("rel", "stylesheet")
root.appendChild(link)

const draw = (element: any, root: HTMLDivElement) => {
  const current = createNodeWithClass(element);
  root.appendChild(current);
  if (element.children.length > 0)
    element.children.forEach((child: Element) => draw(child, current));
};

const createNode = (element: Element) => {
  let flex = new Flex('column')
  let elem = document.createElement("div");
  elem.setAttribute("name", element.name);
  elem.setAttribute("style", flex.get())
  return elem;
};

const createNodeWithClass = (element: Element) => {
  let flex = new Flex('column')
  let elem = document.createElement("div");
  elem.setAttribute("name", element.name);
  elem.setAttribute("class", "grid")
  return elem;
};

draw(config, root);
console.log( root.innerHTML)
