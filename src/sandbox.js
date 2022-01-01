let fs = require('fs');
let path = require('path');
let ruleName = process.argv.slice(2)[0];
const testURL = process.argv.slice(2)[1];
const ruleLocation = path.resolve(__dirname + '/../' + ruleName);
let ruleFile = fs.readFileSync(ruleLocation).toString();
let data = JSON.parse(ruleFile);

function* getRule(data){
    for(let r of data["redirect-rules"]) {
        yield r;
    }
}

function test(input) {
    let resultURL = input, beforeURL;
    for(let rule of getRule(data)) {
        let srcURL = new RegExp(rule['kind'] == 'wildcard' 
                    ? rule['src'].replace('*', '.*').replace('/', '\\/').replace('.', '\\.') 
                    : rule['src']);
        let dstURL = rule['dst'];
        beforeURL = resultURL;
        resultURL = beforeURL.replace(srcURL, dstURL);
        if(resultURL == beforeURL) continue;
        console.log(srcURL.toString(), '->', dstURL);
        console.log(resultURL);
    }
}
test(testURL);