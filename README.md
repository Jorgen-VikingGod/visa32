# visa32.js
> No time to work on!
> 
> Please use the improved [ni-visa](https://github.com/petertorelli/ni-visa) module by [Peter Torelli](https://github.com/petertorelli)

Simple VISA SCPI interface for node.js (tested only on Windows7 + Library not for commercial use!!!)

## install
> `npm install visa32`

## example (test_visa_query.js)
```javascript
var visa    = require('visa32');

var address = process.argv[2]; // ip or hostname, e.g. 192.168.123.123
var query   = process.argv[3]; // query, e.g. *IDN? or *OPT?

if (!address) address = '192.168.123.123';
if (!query)   query = '*IDN?';

visa.query('tcpip::' + address + '::instr', query, function(err, result){
  if (err) console.log('Error: ' + err);
  console.log(result);
});
```

## commandline call
> `node test_visa_query.js 192.168.123.123 *IDN?`<br>
Rohde&Schwarz,ESW-26,XXXXXXX,XXXXXX
