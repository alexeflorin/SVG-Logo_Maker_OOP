class SVG {
    constructor(){
        this.text = ""
        this.shape = ""
    }
    setShape(shape){
        // pass tri, square, or circle object
        this.shape = shape.render()
    }
}