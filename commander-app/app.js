// 1.安装commander
const { program } = require('commander')

program
    .version('0.0.1')
    .option('-p , --peppers', 'Add peppers')
    .option('-P , --pineapple', 'Add pineapple')
    .parse(process.argv)
console.log(program.opts())
console.table(program.opts())
if (program.peppers) { console.log('run peppers') }
if (program.pineapple) { console.log('run pineapple') }
