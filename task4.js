//How to compare two JSON have the same properties without order?


var obj1 = { name: "Person 1", age:5 };
var obj2 = { age:5, name: "Person 1" };


const equal = function (obj1, obj2) {
    const len1 = Object.keys(obj1).length;
    const len2 = Object.keys(obj2).length;

    if (len1 === len2) {
        return Object.keys(obj1).every( key => obj2.hasOwnProperty(key) && obj2[key] === obj1[key]);
    }
    return false;
}

console.log(equal(obj1, obj2))


//Use the rest countries API url -> https://restcountries.eu/rest/v2/all and display all the country flags in console

var xhr = new XMLHttpRequest();


xhr.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");

xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
        var t = JSON.parse(this.response);

        //Display Flags
        let data1 = t.filter(t=>t.flag).map(t=>t.flag);

        console.log(data1);

    } 
    else {

        console.log("Data is not available");

    }
};

xhr.send();


//Use the same rest countries and print all countries name, region, sub region and population

var xhr = new XMLHttpRequest();


xhr.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");

xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
        var t = JSON.parse(this.response);

        //countries name, region, sub region and population

        t.forEach(element => {
            console.log(
                `Name :${element.name},Region:${element.region},subregion:${element.subregion},Populatioon:${element.population}`)
        });
    

    } 
    else {

        console.log("Data is not available");

    }
};

xhr.send();

