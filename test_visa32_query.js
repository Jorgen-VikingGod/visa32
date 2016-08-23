var visa = require('./visa32.js');

var address = process.argv[2]; // 192.168.123.123
var query   = process.argv[3]; // *IDN?
if (!address) {
  address = '192.168.123.123';
}
if (!query) {
  query = '*IDN?';
}
var scpiAddress = 'tcpip::' + address + '::instr';

visa.query(scpiAddress, query, function(err, result){
  if (err) console.log('Error: ' + err);
  console.log(result);
});

/*
// do query in single method calls (..., open, write, read, close,...)
var resourceManager = 0;
var sessionDevice   = 0;
var viStatus        = 0;

visa.openDefaultRM(function(err, session){
  if (err) console.log('Error: ' + err);
  resourceManager = session;
  console.log('openDefaultRM: ' + resourceManager);
});

visa.open(resourceManager, scpiAddress, function(err, session){
  if (err) console.log('Error: ' + err);
  sessionDevice = session;
  console.log('open: ' + sessionDevice);
});

visa.write(sessionDevice, query, function(err, result){
  if (err) console.log('Error: ' + err);
  console.log('write: "' + query + '" = ' + result);
});

visa.read(sessionDevice, function(err, result){
  if (err) console.log('Error: ' + err);
  console.log('read: ' + result);
});

visa.close(sessionDevice, function(err, result){
  if (err) console.log('Error: ' + err);
  console.log('close: "' + sessionDevice + '" = ' + result);
});

visa.close(resourceManager, function(err, result){
  if (err) console.log('Error: ' + err);
  console.log('close: "' + resourceManager + '" = ' + result);
});
*/


