describe("calculate tests", function () {
	it("should calculate monthly rate correctly with 2 decimals", function () {
		expect(calculate(20000, 7, 3)).toEqual("264.27");
	});
});
