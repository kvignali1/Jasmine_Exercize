describe("calculate tests", function () {
	it("should calculate monthly rate correctly", function () {
		expect(calculate(20000, 7, 3)).toEqual("264.27");
	});
});
	
// it("should return a result with 2 decimal places", function () {
// 	expect(calculate(20000, 7, 3).toString()).toMatch(/^\d+\.\d\d$/);
// });
