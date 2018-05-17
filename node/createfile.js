var fs=require('fs');
fs.appendFile('hello.txt','i am nitish',function (err) {
    if(err) throw err;
    console.log('saved');
});
