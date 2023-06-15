const inquirer = require('inquirer');
const SVG = require('./svg.js');
const { Circle } = require("./shape");
const { writeFile } = require('fs/promises');

class CLI {
    start() {
        return inquirer.prompt([
            {
                name: "text",
                type: "input",
                message: "Enter text for the logo (no more then 3 characters long)",
                validate: function(text){
                    if(text.length <= 3){
                        return true
                    } else{
                        return "No more then 3 characters"
                    }
                }
            },
            {
                name: "textColor",
                type: "input",
                message:"Enter a color for the text",
            },
            {
                name: "shape",
                type: "list",
                message: "Choose the shape that yopu will like to create!",
                choices: ["Circle", "Square", "Triangle"],
            },
            {
                name: "shapeColor",
                type: "input",
                message: "Enter a color for the shape",
            }

        ])
        .then(function({text, color}){
            // check shape and instantiate new shape
            const shapeChosen = new Circle()
            // set the color of the shape
            shapeChosen.setColor(color)
            // instatiate the SVG and set its text and sahpe
            const svg = new SVG()
            svg.setShape(shapeChosen)
            // return writeFile('logo.svg", svg.render())
        })
    }
}

module.exports = CLI;