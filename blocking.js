const crypto = require("crypto");

crypto.pbkdf2Sync('password', 'salt', 500000, 50, 'sha512');
console.log(':::key is generated sync >>>>>')

crypto.pbkdf2('password', 'salt', 500000, 50, 'sha512', (err, key)=>{
    console.log('Key is generated....');
});

console.log('Finished file... ');