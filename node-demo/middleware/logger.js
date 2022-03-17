// checken of API key geldig is
const logger = (req, res, next) => { 
    console.log("lala");
    next(); // volgende middleware als die er is in gang zetten, anders gewoon verder gaan
}

module.exports = logger; // hetzelfde als export default class