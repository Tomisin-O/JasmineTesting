
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

  describe("Weight", function() {
    it("Pounds to Kilos", function() {
      var result = convertPoundstoKilos(60);

      expect(result).toEqual('27.22');
    });
  });

  describe("Volume", function() {
    it("Litre to Gallons", function() {
      var result = convertLitretoGallons(3);

      expect(result).toEqual('0.66');
    });
  });

  describe("Distance", function() {
    it("Miles to Km", function() {
      var result = convertMilestoKm(5);

      expect(result).toEqual('8');
    });
  });


