var fs=require('fs');
fs.writeFile('newfile3.txt','hello content!',function (err) {
    if (err) throw err;
    console.log('saved');
});
