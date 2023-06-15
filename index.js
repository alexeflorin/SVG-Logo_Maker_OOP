const CLI = require("./lib/cli.js")
/* Modulul ./lib/cli.js exporta o functie care este returnata de require.
Am atribuit rezultatul functia 'require' constantei CLI.
Aceasta constanta memoreaza o functie care atunci cand este apelata returneaza un obiect de tipul lib/cli.js.
*/

new CLI().start()

const inquirer= require("inquirer");

const fs=require ("fs");







