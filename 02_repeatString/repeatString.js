const repeatString = function(string, numberOfRepeats) {
    parseInt(numberOfRepeats);
    let newString = 0
    if (numberOfRepeats < 0) {return 'ERROR'}
    else {
for (let i = 0; i < numberOfRepeats; i++) {
    newString++;
}
return string.repeat(newString);
};
}
// Do not edit below this line
module.exports = repeatString;
