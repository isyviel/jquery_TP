import { HtmlElement } from "./HtmlElement.class.js";

export class RowElement extends HtmlElement {
    constructor(){
        super();
        this._elementType = '<tr>';
    }
}
//déterminer un tr