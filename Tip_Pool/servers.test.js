describe("Servers test", function() {
  it('should add a new server to allServers on submitServerInfo()', function () {
    expect(allServers).toBeTruthy();
    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });
  it('update Server table with serverName', function () {
    expect(curServer).toBeTruthy();
  })
});


// // create server object and add to allServers, update html and reset input
// function submitServerInfo(evt) {
//   if (evt) evt.preventDefault(); // when running tests there is no event

//   let serverName = serverNameInput.value;

//   if (serverName !== '') {
//     serverId++;
//     allServers['server' + serverId] = { serverName };

//     updateServerTable();

//     serverNameInput.value = '';
//   }
// }

// Create table row element and pass to appendTd function with input value
function updateServerTable() {
  serverTbody.innerHTML = '';

  for (let key in allServers) {
    let curServer = allServers[key];

    let newTr = document.createElement('tr');
    newTr.setAttribute('id', key);

    let tipAverage = sumPaymentTotal('tipAmt') / Object.keys(allServers).length;

    appendTd(newTr, curServer.serverName);
    appendTd(newTr, '$' + tipAverage.toFixed(2));

    serverTbody.append(newTr);
  }
}
