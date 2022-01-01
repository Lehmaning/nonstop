let fs = require('fs');
let path = require('path');
const pubRuleLocation = path.resolve(__dirname + '/../public/');
const priRuleLocation = path.resolve(__dirname + '/../private/');
const destFilesLocation = path.resolve(__dirname + '/../');

function* ruleFileRead(location) {
    var ruleFilesList = fs.readdirSync(location);
    for(let i of ruleFilesList) {
        let file = fs.readFileSync(path.resolve(location + '/' + i)).toString();
        yield file;
    }
}
function updateRule(input, output=[]) {
    let data = JSON.parse(input);
    for(let rule of Object.keys(data)) output[rule].push.apply(output[rule], data[rule]);
    return output;
}

function build() {
    var outputData = {"redirect-rules":[],"cancel-rules":[],"request-headers": [],"response-headers": []};
    for(let i of ruleFileRead(pubRuleLocation)) {
        outputData = updateRule(i, outputData);
    }
    let e = end => fs.readFileSync(path.resolve(priRuleLocation + '/' + end + ".json"));
    let desktopData = outputData;
    let mobileData = outputData;
    desktopData = updateRule(e('desktop'), desktopData);
    mobileData = updateRule(e('mobile'), mobileData);
    
    let write = (end, data) =>
     fs.writeFile(destFilesLocation + '/' + end + '.json', JSON.stringify(data), err => {if(err) return console.log(err)
        console.log("The", end, "rules file saved!");
    });
    write("desktop", desktopData);
    write("mobile", mobileData);
}
build();