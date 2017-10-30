(function(global){
    global.seng560 = {
        add: function(augend, addend, base) {
            if(!base) {
                base = 10;
            }
            
            if(base == 10) {
                return augend + addend;
            } else {
                var numAugend = this.convert(augend, base, 10);
                var numAddend = this.convert(addend, base, 10);
                var numSum = numAugend + numAddend;
                return this.convert(numSum, 10, base);
            }
        },
        
        subtract: function(minuend, subtrahend, base) {
            if(!base) {
                base = 10;
            }
            
            if(base == 10) {
                return minuend - subtrahend;
            } else {
                var numMinuend = this.convert(minuend, base, 10);
                var numSubtrahend = this.convert(subtrahend, base, 10);
                var numDifference = numMinuend - numSubtrahend;
                return this.convert(numDifference, 10, base);
            }
        },
        
        multiply: function(multiplicand, multiplier, base) {
            if(!base) {
                base = 10;
            }
            
            if(base == 10) {
                return multiplicand * multiplier;
            } else {
                var numMultiplicand = this.convert(multiplicand, base, 10);
                var numMultiplier = this.convert(multiplier, base, 10);
                var numProduct = numMultiplicand * numMultiplier;
                return this.convert(numProduct, 10, base);
            }
        },
        
        divide: function(numerator, denominator, base) {
            if(!base) {
                base = 10;
            }
            
            if(base == 10) {
                return numerator / denominator;
            } else {
                var numNumerator = this.convert(numerator, base, 10);
                var numDenominator = this.convert(denominator, base, 10);
                var numFraction = numNumerator / numDenominator;
                return this.convert(numFraction, 10, base);
            }
        },
        
        sqrt: function(radicand, base) {
            if(!base) {
                base = 10;
            }
            
            if(base == 10) {
                return Math.sqrt(radicand);
            } else {
                var numRadicand = this.convert(radicand, base, 10);
                var numRoot = Math.sqrt(numRadicand);
                return this.convert(numRoot, 10, base);
            }
        },
        
        exponent: function(root, exponent, base){
            if(!base) {
                base = 10;
            }
            
            if(base == 10) {
                return Math.pow(root, exponent);
            } else {
                var numBase = this.convert(root, base, 10);
                var numExponent = this.convert(exponent, base, 10);
                var numPower = Math.pow(numBase, numExponent);
                return this.convert(numPower, 10, base);
            }
        },
        
        convert: function(value, fromBase, toBase){
            var strValue = value.substring ? value : value.toString(fromBase);
            
            var decVal = parseInt(strValue, fromBase);
                
            if(toBase === 10) {
                return decVal;
            } else {
                return decVal.toString(toBase);
            }
        }
    }
})(window);