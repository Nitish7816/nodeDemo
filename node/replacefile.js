var fs=require('fs');
fs.writeFile('hello.txt','hii how r u',function (err) {
    if (err) throw err;
    console.log('replace');
});
