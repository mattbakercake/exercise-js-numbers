/*
 * NumberModel.js defines the Number model
 */
define([
   'backbone'
], function (Backbone) {
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
    
    Number.prototype.getNumLength = function(num) {
        return num.toString().length;
    };
    
    Number.prototype.getNumString = function(num) {
        
        var numLength = this.getNumLength(num);

        switch (numLength) {
            case 1:
            case 2:
                return this.getTens(num);
                break;
        }
        
    };
    
    Number.prototype.getTens = function(num){
        if(num > 19 && num%10 !== 0) {
            var secondNum = this.uniqueStrings[num%10];
            var firstNum = this.uniqueStrings[num-num%10];
            
            return firstNum + " " + secondNum;
        }

        return this.uniqueStrings[num];
    };
    
    return Number; /* return require.js Number object definition */
});






