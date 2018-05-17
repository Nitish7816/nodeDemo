var fs=require('fs');
fs.appendFile('newfile3.txt','hii how r u',function (err) {
    if (err) throw err;
    console.log('update');
});
