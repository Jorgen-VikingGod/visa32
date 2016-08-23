# visa32.js

Simple VISA SCPI interface for node.js (tested only on Windows7 + Library not for commercial use!!!)


```javascript
var visa    = require('visa32');

var address = process.argv[2]; //192.168.25.228
var query   = process.argv[3]; //*IDN?

if (!address) address = '192.168.25.228';
if (!query)   query = '*IDN?';

visa.query('tcpip::' + address + '::instr', query, function(err, result){
  if (err) console.log('Error: ' + err);
  console.log(result);
});
```
