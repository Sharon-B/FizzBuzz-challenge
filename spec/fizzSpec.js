describe ("fizzBuzz", function() {

     beforeEach(function() {
        fizzbuzz = new fizzBuzz();
    });

    describe ("number", function() {
        it("should exist", function() {
            expect(fizzBuzz).toBeDefined(); 
        });

        it("should return FizzBuzz when called as fizzBuzz(15)", function() {
            let result = fizzBuzz(15)
            expect(result).toBe("FizzBuzz");
        });

        it("should return Fizz when called as fizzBuzz(9)", function() {
            let result = fizzBuzz(9)
            expect(result).toBe("Fizz");
        });

        it("should return Buzz when called as fizzBuzz(20)", function() {
            let result = fizzBuzz(20)
            expect(result).toBe("Buzz");
        });

        it("should return  when called as fizzBuzz(2)", function() {
            var result = fizzBuzz(4)
            expect(result).toBe(4);
        });
    });
});

