const chalk = require("chalk")

const getFormatedText = function(i)
{
    return chalk.red.inverse('hello from class 13 '+i)
}

module.exports=getFormatedText