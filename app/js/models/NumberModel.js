/*
 * NumberModel.js defines the Number model
 */
define([
   'backbone'
], function (Backbone) {
    
    /**
     * Number model provides methods for returning
     * the string version of an integer
     * 
     * @property {object} uniqueStrings unique number strings required to build
     * all number strings
     */
    var Number = Backbone.Model.extend({
        
        uniqueStrings : {
            0:"Zero",
            1:"One",
            2:"Two",
            3:"Three",
            4:"Four",
            5:"Five",
            6:"Six",
            7:"Seven",
            8:"Eight",
            9:"Nine",
            10:"Ten",
            11:"Eleven",
            12:"Twelve",
            13:"Thirteen",
            14:"Fourteen",
            15:"Fifteen",
            16:"Sixteen",
            17:"Seventeen",
            18:"Eighteen",
            19:"Nineteen",
            20:"Twenty",
            30:"Thirty",
            40:"Fourty",
            50:"Fifty",
            60:"Sixty",
            70:"Seventy",
            80:"Eighty",
            90:"Ninety"
        }
       
    });
    
    /**
     * getNumLength returns a digit count of the number e.g. 20 would return 2
     * @param {int} num
     * @returns {int}
     */
    Number.prototype.getNumLength = function(num) {
        return num.toString().length;
    };
    
    /**
     * getRemainder returns the remainder for a given modulus and number
     * @param {int} num
     * @param {int} operand
     * @returns {int}
     */
    Number.prototype.getRemainder = function(num,operand) {
        return num%operand; //remainder after operand is divided by num
    };
    
    /**
     * getNumString calls appropriate method based on number length and returns
     * number string for given integer
     * @param {int} num
     * @returns {string}
     */
    Number.prototype.getNumString = function(num) {
        
        var numLength = this.getNumLength(num);

        switch (numLength) {
            case 1: //fall through - case 1 & 2 are the same
            case 2:
                return this.getTens(num);
                break;
            case 3:
                return this.getHundreds(num);
                break;
            case 4:// fall through - case 4,5 and 6 are same
            case 5:
            case 6: 
                return this.getThousands(num);
                break;
            case 7://fall through - case 7,8 and 9 are same
            case 8:
            case 9:
                return this.getMillions(num);
                break;
            case 10://fall through - case 10,11 and 12 are same
            case 11:
            case 12:
                return this.getBillions(num);
                break;
        }
        
    };
    
    /**
     * getTens returns a string representation for numbers 0-99
     * @param {int} num
     * @returns {string}
     */
    Number.prototype.getTens = function(num){
        
        var remainder = this.getRemainder(num,10); //is number round? e.g. 20,30 etc 
        
        /* numbers between 20 and 99 */
        if(num > 19 && remainder !== 0) {
            var secondNum = this.uniqueStrings[remainder];
            var firstNum = this.uniqueStrings[num-remainder];
            
            return firstNum + " " + secondNum;
        }

        /* numbers between 9 and 19*/
        return this.uniqueStrings[num];
    };
    
    /**
     * getHundreds returns a string representation for numbers 100-999
     * @param {int} num
     * @returns {string}
     */
    Number.prototype.getHundreds = function(num) {
        
        var remainder = this.getRemainder(num,100);//is number round? e.g. 100,200 etc

        var firstNum = this.getTens((num-remainder)/100);//get string for first digit
        
        /* for numbers that are NOT round hundreds */
        if (remainder !== 0) {
            var secondNum = this.getTens(remainder);
            
            return firstNum + " Hundred And " + secondNum;
        }
        
        /* for round hundreds */
        return firstNum + " Hundred";
    };
    
    /**
     * get Thousands returns a string representation for numbers 1000-9999
     * @param {int} num
     * @returns {String}
     */
    Number.prototype.getThousands = function(num) {
        
        var remainder = this.getRemainder(num,1000);//is number round? e.g. 1000,2000 etc
        
        /* get string for first digit */
        if (this.getNumLength(num) === 6) { //hundreds (thousands)
            var firstNum = this.getHundreds((num-remainder)/1000);
        } else { //tens (thousands)
            var firstNum = this.getTens((num-remainder)/1000);
        }
        
        /* for numbers that aren't round thousands */
        if (remainder !== 0) {
            
            /* if the remaining number is hundreds*/
            if (this.getNumLength(remainder) === 3) {
                var secondNum = this.getHundreds(remainder);
                
                return firstNum + " Thousand " + secondNum;
            }
            
            /* remaining number is less than 100 */
            var secondNum = this.getTens(remainder);
            
            return firstNum + " Thousand And " + secondNum;
        }
        
        /* for round hundreds */
        return firstNum + " Thousand";
    };
    
    /**
     * getMillions returns a string representation for numbers 1000000-999999999
     * @param {int} num
     * @returns {String}
     */
    Number.prototype.getMillions = function(num) {
        
        var remainder = this.getRemainder(num,1000000);//is number round? e.g. 1000000 etc

        /* get string for first digit */
        if (this.getNumLength(num) === 9) { //hundreds (millions)
            var firstNum = this.getHundreds((num-remainder)/1000000);
        } else { //tens (millions)
            var firstNum = this.getTens((num-remainder)/1000000);
        }
        
        /* for numbers that aren't round millions */
        if (remainder !== 0) {
            
            /* if the remaining number is thousands*/
            if (this.getNumLength(remainder) >= 4 && this.getNumLength(remainder) <= 6) {
                var secondNum = this.getThousands(remainder);
                
                return firstNum + " Million " + secondNum;
            /* remaining number is hundreds */    
            } else if (this.getNumLength(remainder) === 3) {
                var secondNum = this.getHundreds(remainder);
                
                return firstNum + " Million " + secondNum;
            }   
            /* remaining number is less than 100 */
            var secondNum = this.getTens(remainder);
            
            return firstNum + " Million And " + secondNum;
        }
        
        /* for round millions */
        return firstNum + " Million";
    };
    
    /**
     * getBillions returns a string represntation for numbers 1000000000-999999999999
     * @param {int} num
     * @returns {String}
     */
    Number.prototype.getBillions = function(num) {
        
        var remainder = this.getRemainder(num,1000000000);//is number round? e.g. 1000000000 etc

        /* get string for first digit */
        if (this.getNumLength(num) === 12) { //hundreds (billions)
            var firstNum = this.getHundreds((num-remainder)/1000000000);
        } else { //tens (billions)
            var firstNum = this.getTens((num-remainder)/1000000000);
        }
        
        /* for numbers that aren't round billions */
        if (remainder !== 0) {
            
            /* if remaining number is millions */
            if (this.getNumLength(remainder) >= 7 && this.getNumLength(remainder) <= 9) {
                var secondNum = this.getMillions(remainder);
                
                return firstNum + " Billion " + secondNum;
            /* if the remaining number is thousands*/
            } else if (this.getNumLength(remainder) >= 4 && this.getNumLength(remainder) <= 6) {
                var secondNum = this.getThousands(remainder);
                
                return firstNum + " Billion " + secondNum;
            /* remaining number is hundreds */    
            } else if (this.getNumLength(remainder) === 3) {
                var secondNum = this.getHundreds(remainder);
                
                return firstNum + " Billion " + secondNum;
            }
            
            /* remaining number is less than 100 */
            var secondNum = this.getTens(remainder);
            
            return firstNum + " Billion And " + secondNum;
        }
        
        /* for round billions */
        return firstNum + " Billion";
    };
    
    return Number; /* return require.js Number object definition */
});






