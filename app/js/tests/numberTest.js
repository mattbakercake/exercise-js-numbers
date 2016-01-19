/**
 * numberTest.js defines unit tests to check
 * output of the number model
 */
define([
    '../models/NumberModel'
],
    function(numberModel) {
        
        /**
         * run object contains test suites and assertions
         */
        var run = function() {
            var Number = new numberModel();
            
            test('test getNumLength', function(assert) {
                assert.strictEqual(Number.getNumLength(0),1);
                assert.strictEqual(Number.getNumLength(5),1);
                assert.strictEqual(Number.getNumLength(10),2);
                assert.strictEqual(Number.getNumLength(100),3);
                assert.strictEqual(Number.getNumLength(1000),4);
                assert.strictEqual(Number.getNumLength(10000),5);
                assert.strictEqual(Number.getNumLength(100000),6);
                assert.strictEqual(Number.getNumLength(1000000),7);
            });
            
            test('test getRemainder', function(assert) {
                assert.strictEqual(Number.getRemainder(0,10),0);
                assert.strictEqual(Number.getRemainder(5,10),5);
                assert.strictEqual(Number.getRemainder(10,10),0);
                assert.strictEqual(Number.getRemainder(11,10),1);
                assert.strictEqual(Number.getRemainder(63,10),3);
                assert.strictEqual(Number.getRemainder(100,100),0);
                assert.strictEqual(Number.getRemainder(101,100),1);
                assert.strictEqual(Number.getRemainder(1000,1000),0);
                assert.strictEqual(Number.getRemainder(1100,1000),100);
                assert.strictEqual(Number.getRemainder(10000,10000),0);
                assert.strictEqual(Number.getRemainder(10563,10000),563);
                assert.strictEqual(Number.getRemainder(100000,100000),0);
                assert.strictEqual(Number.getRemainder(102365,100000),2365);
                assert.strictEqual(Number.getRemainder(1000000,1000000),0);
                assert.strictEqual(Number.getRemainder(1000543,1000000),543);
                
            });
            
            test('number model testing strings 0-19', function(assert) {
                assert.strictEqual(Number.getNumString(0), 'Zero');
                assert.strictEqual(Number.getNumString(1), 'One');
                assert.strictEqual(Number.getNumString(2), 'Two');
                assert.strictEqual(Number.getNumString(3), 'Three');
                assert.strictEqual(Number.getNumString(4), 'Four');
                assert.strictEqual(Number.getNumString(5), 'Five');
                assert.strictEqual(Number.getNumString(6), 'Six');
                assert.strictEqual(Number.getNumString(7), 'Seven');
                assert.strictEqual(Number.getNumString(8), 'Eight');
                assert.strictEqual(Number.getNumString(9), 'Nine');
                assert.strictEqual(Number.getNumString(10), 'Ten');
                assert.strictEqual(Number.getNumString(11), 'Eleven');
                assert.strictEqual(Number.getNumString(12), 'Twelve');
                assert.strictEqual(Number.getNumString(13), 'Thirteen');
                assert.strictEqual(Number.getNumString(14), 'Fourteen');
                assert.strictEqual(Number.getNumString(15), 'Fifteen');
                assert.strictEqual(Number.getNumString(16), 'Sixteen');
                assert.strictEqual(Number.getNumString(17), 'Seventeen');
                assert.strictEqual(Number.getNumString(18), 'Eighteen');
                assert.strictEqual(Number.getNumString(19), 'Nineteen');  
            });
            
            test('number model testing strings 20,30,40..90', function(assert) {
                assert.strictEqual(Number.getNumString(20), 'Twenty');
                assert.strictEqual(Number.getNumString(30), 'Thirty');
                assert.strictEqual(Number.getNumString(40), 'Fourty');
                assert.strictEqual(Number.getNumString(50), 'Fifty');
                assert.strictEqual(Number.getNumString(60), 'Sixty');
                assert.strictEqual(Number.getNumString(70), 'Seventy');
                assert.strictEqual(Number.getNumString(80), 'Eighty');
                assert.strictEqual(Number.getNumString(90), 'Ninety');  
            });
            
            test('number model testing compound tens 21,32 etc', function(assert) {
                assert.strictEqual(Number.getNumString(21), 'Twenty One');
                assert.strictEqual(Number.getNumString(32), 'Thirty Two');
                assert.strictEqual(Number.getNumString(43), 'Fourty Three');
                assert.strictEqual(Number.getNumString(54), 'Fifty Four');
                assert.strictEqual(Number.getNumString(65), 'Sixty Five');
                assert.strictEqual(Number.getNumString(76), 'Seventy Six');
                assert.strictEqual(Number.getNumString(87), 'Eighty Seven');
                assert.strictEqual(Number.getNumString(98), 'Ninety Eight');
                assert.strictEqual(Number.getNumString(99), 'Ninety Nine');
            });
            
            test('number model testing hundreds 100,200 etc', function(assert) {
                assert.strictEqual(Number.getNumString(100), 'One Hundred');
                assert.strictEqual(Number.getNumString(200), 'Two Hundred');
                assert.strictEqual(Number.getNumString(300), 'Three Hundred');
                assert.strictEqual(Number.getNumString(400), 'Four Hundred');
                assert.strictEqual(Number.getNumString(500), 'Five Hundred');
                assert.strictEqual(Number.getNumString(600), 'Six Hundred');
                assert.strictEqual(Number.getNumString(700), 'Seven Hundred');
                assert.strictEqual(Number.getNumString(800), 'Eight Hundred');
                assert.strictEqual(Number.getNumString(900), 'Nine Hundred');
            });
            
            test('number model testing compound hundreds 101,215 etc', function(assert) {
                assert.strictEqual(Number.getNumString(101), 'One Hundred And One');
                assert.strictEqual(Number.getNumString(215), 'Two Hundred And Fifteen');
                assert.strictEqual(Number.getNumString(327), 'Three Hundred And Twenty Seven');
                assert.strictEqual(Number.getNumString(432), 'Four Hundred And Thirty Two');
                assert.strictEqual(Number.getNumString(546), 'Five Hundred And Fourty Six');
                assert.strictEqual(Number.getNumString(658), 'Six Hundred And Fifty Eight');
                assert.strictEqual(Number.getNumString(763), 'Seven Hundred And Sixty Three');
                assert.strictEqual(Number.getNumString(874), 'Eight Hundred And Seventy Four');
                assert.strictEqual(Number.getNumString(989), 'Nine Hundred And Eighty Nine');
                assert.strictEqual(Number.getNumString(999), 'Nine Hundred And Ninety Nine');
            });
            
        };
        return {run: run}; /* require.js return run object */
    }
);


