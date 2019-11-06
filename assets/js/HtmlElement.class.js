export class HtmlElement
{
    /**
     * @abstract class HtmlElement
     * Abstract class that generalize HTML components
     */



_elementType = null;
_children = new Array();
addChild(child){
    this._children.push(child);
    return this;   
}

build(){
        const_element = $(this._elementType);
        if(this._children.length > 0) {
            this._children.forEach((child)=>{
                _element.append(child.build());
            })
        }
    return _element; 
    }
}