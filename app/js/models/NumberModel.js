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
        }
        
    };
    
    /**
     * getTens returns a string representation for numbers 0-99
     * @param {int} num
     * @returns {string}
     */
    Number.prototype.getTens = function(num){
        
        var remainder = this.getRemainder(num,10);
        
        /* numbers between 20 and 99 */
        if(num > 19 && remainder !== 0) {
            var secondNum = this.uniqueStrings[remainder];
            var firstNum = this.uniqueStrings[num-remainder];
            
            return firstNum + " " + secondNum;
        }

        /* numbers between 9 and 19*/
        return this.uniqueStrings[num];
    };
    
    return Number; /* return require.js Number object definition */
});






