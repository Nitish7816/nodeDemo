var fs=require('fs');
fs.open('newfile.txt','w',function (err) {
    if (err) throw err;
    console.log('saved')
})
