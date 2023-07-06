describe("Servers test", function () {
	beforeEach(function () {
		serverNameInput.value = "Kevin";
	});
	it("should add a new server to allServers on submitServerInfo()", function () {
		submitServerInfo();
		expect(Object.keys(allServers).length).toEqual(1);
		expect(allServers["server" + serverId].serverName).toEqual("Kevin");
	});
	afterEach(function () {
		allServers = {};
		serverTbody.innerHTML = "";
	});
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
