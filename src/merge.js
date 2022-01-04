let fs = require('fs');
let path = require('path');
let pubRuleLocation = path.resolve(__dirname + '/public/');
let priRuleLocation = path.resolve(__dirname + '/private/');
let destFilesLocation = file => path.resolve(__dirname + `/../${file}`);
let buildFilesLocation = file => path.resolve(__dirname + `/../build/${file}`)

function* ruleFileRead(location) {
    var ruleFilesList = fs.readdirSync(location);
    for(let i of ruleFilesList) {
        yield file = fs.readFileSync(path.resolve(location + '/' + i)).toString();
    }
}
function updateRule(input, output=[]) {
    let data = JSON.parse(input);
    for(let rule of Object.keys(data)) output[rule].push.apply(output[rule], data[rule]);
    return output;
}

function build() {
    let outputData = {"redirect-rules":[],"cancel-rules":[],"request-headers": [],"response-headers": []};
    for(let i of ruleFileRead(pubRuleLocation)) {
        outputData = updateRule(i, outputData);
    }
    let e = end => 
				fs.readFileSync(path.resolve(priRuleLocation + '/' + end + ".json"));
    let desktopData = updateRule(e('desktop'),
						JSON.parse(JSON.stringify(outputData)))
    let mobileData = updateRule(e('mobile'),
						JSON.parse(JSON.stringify(outputData)));
    
    let write = (end, data) => 
				fs.writeFileSync(destFilesLocation(end + '.json'),
								JSON.stringify(data), err => 
								{if(err) return console.log(err)});
    let copy = end => 
				fs.copyFile(destFilesLocation(end + '.json'),
								buildFilesLocation(end + '.gson'), err => 
								{if(err) return console.log(err)
        console.log("The", end, "rule saved!");
    });

    write("desktop", desktopData);
    write("mobile", mobileData);
    copy("desktop");
    copy("mobile");
}
build();
