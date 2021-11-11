
//test file
  describe("Temperatures", function() {
    it("Fahrenheit to Celsius", function() {
      var result = convertFahrenheitToCelsius(100);

      expect(result).toEqual('37.8');
    });
  });

  describe("Temperatures", function() {
    it("Celsius to Fahrenheit", function() {
      var result = convertCelsiusToFahrenheit(37.8);

      expect(result).toEqual('100.0');
    });
  });

