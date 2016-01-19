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
            
            test('number model testing thousands 1000,2000 etc', function(assert) {
                assert.strictEqual(Number.getNumString(1000), 'One Thousand');
                assert.strictEqual(Number.getNumString(2000), 'Two Thousand');
                assert.strictEqual(Number.getNumString(3000), 'Three Thousand');
                assert.strictEqual(Number.getNumString(4000), 'Four Thousand');
                assert.strictEqual(Number.getNumString(5000), 'Five Thousand');
                assert.strictEqual(Number.getNumString(6000), 'Six Thousand');
                assert.strictEqual(Number.getNumString(7000), 'Seven Thousand');
                assert.strictEqual(Number.getNumString(8000), 'Eight Thousand');
                assert.strictEqual(Number.getNumString(9000), 'Nine Thousand');
                assert.strictEqual(Number.getNumString(10000), 'Ten Thousand');
                assert.strictEqual(Number.getNumString(20000), 'Twenty Thousand');
                assert.strictEqual(Number.getNumString(30000), 'Thirty Thousand');
                assert.strictEqual(Number.getNumString(40000), 'Fourty Thousand');
                assert.strictEqual(Number.getNumString(50000), 'Fifty Thousand');
                assert.strictEqual(Number.getNumString(60000), 'Sixty Thousand');
                assert.strictEqual(Number.getNumString(70000), 'Seventy Thousand');
                assert.strictEqual(Number.getNumString(80000), 'Eighty Thousand');
                assert.strictEqual(Number.getNumString(90000), 'Ninety Thousand');
                assert.strictEqual(Number.getNumString(100000), 'One Hundred Thousand');
                assert.strictEqual(Number.getNumString(200000), 'Two Hundred Thousand');
                assert.strictEqual(Number.getNumString(300000), 'Three Hundred Thousand');
                assert.strictEqual(Number.getNumString(400000), 'Four Hundred Thousand');
                assert.strictEqual(Number.getNumString(500000), 'Five Hundred Thousand');
                assert.strictEqual(Number.getNumString(600000), 'Six Hundred Thousand');
                assert.strictEqual(Number.getNumString(700000), 'Seven Hundred Thousand');
                assert.strictEqual(Number.getNumString(800000), 'Eight Hundred Thousand');
                assert.strictEqual(Number.getNumString(900000), 'Nine Hundred Thousand');
            });
            
            test('number model testing compound thousands 1001,2015 etc', function(assert) {
                assert.strictEqual(Number.getNumString(1001), 'One Thousand And One');
                assert.strictEqual(Number.getNumString(2015), 'Two Thousand And Fifteen');
                assert.strictEqual(Number.getNumString(3072), 'Three Thousand And Seventy Two');
                assert.strictEqual(Number.getNumString(4105), 'Four Thousand One Hundred And Five');
                assert.strictEqual(Number.getNumString(5398), 'Five Thousand Three Hundred And Ninety Eight');
                assert.strictEqual(Number.getNumString(6500), 'Six Thousand Five Hundred');
                assert.strictEqual(Number.getNumString(10001), 'Ten Thousand And One');
                assert.strictEqual(Number.getNumString(20019), 'Twenty Thousand And Nineteen');
                assert.strictEqual(Number.getNumString(30101), 'Thirty Thousand One Hundred And One');
                assert.strictEqual(Number.getNumString(40318), 'Fourty Thousand Three Hundred And Eighteen');
                assert.strictEqual(Number.getNumString(50776), 'Fifty Thousand Seven Hundred And Seventy Six');
                assert.strictEqual(Number.getNumString(64000), 'Sixty Four Thousand');
                assert.strictEqual(Number.getNumString(72001), 'Seventy Two Thousand And One');
                assert.strictEqual(Number.getNumString(85401), 'Eighty Five Thousand Four Hundred And One');
                assert.strictEqual(Number.getNumString(97898), 'Ninety Seven Thousand Eight Hundred And Ninety Eight');
                assert.strictEqual(Number.getNumString(100001), 'One Hundred Thousand And One');
                assert.strictEqual(Number.getNumString(200018), 'Two Hundred Thousand And Eighteen');
                assert.strictEqual(Number.getNumString(300100), 'Three Hundred Thousand One Hundred');
                assert.strictEqual(Number.getNumString(400605), 'Four Hundred Thousand Six Hundred And Five');
                assert.strictEqual(Number.getNumString(500784), 'Five Hundred Thousand Seven Hundred And Eighty Four');
                assert.strictEqual(Number.getNumString(604300), 'Six Hundred And Four Thousand Three Hundred');
                assert.strictEqual(Number.getNumString(708216), 'Seven Hundred And Eight Thousand Two Hundred And Sixteen');
                assert.strictEqual(Number.getNumString(825592), 'Eight Hundred And Twenty Five Thousand Five Hundred And Ninety Two');
                assert.strictEqual(Number.getNumString(999999), 'Nine Hundred And Ninety Nine Thousand Nine Hundred And Ninety Nine');
            });
            
            test('number model testing millions 1000000,2000000 etc', function(assert) {
                assert.strictEqual(Number.getNumString(1000000), 'One Million');
                assert.strictEqual(Number.getNumString(2000000), 'Two Million');
                assert.strictEqual(Number.getNumString(3000000), 'Three Million');
                assert.strictEqual(Number.getNumString(4000000), 'Four Million');
                assert.strictEqual(Number.getNumString(5000000), 'Five Million');
                assert.strictEqual(Number.getNumString(6000000), 'Six Million');
                assert.strictEqual(Number.getNumString(7000000), 'Seven Million');
                assert.strictEqual(Number.getNumString(8000000), 'Eight Million');
                assert.strictEqual(Number.getNumString(9000000), 'Nine Million');
                assert.strictEqual(Number.getNumString(10000000), 'Ten Million');
                assert.strictEqual(Number.getNumString(15000000), 'Fifteen Million');
                assert.strictEqual(Number.getNumString(20000000), 'Twenty Million');
                assert.strictEqual(Number.getNumString(50000000), 'Fifty Million');
                assert.strictEqual(Number.getNumString(100000000), 'One Hundred Million');
                assert.strictEqual(Number.getNumString(500000000), 'Five Hundred Million');
                assert.strictEqual(Number.getNumString(900000000), 'Nine Hundred Million');
            });
            
            test('number model testing compound millions 1000001,2000020 etc', function(assert) {
                assert.strictEqual(Number.getNumString(1000001), 'One Million And One');
                assert.strictEqual(Number.getNumString(2000020), 'Two Million And Twenty');
                assert.strictEqual(Number.getNumString(3000100), 'Three Million One Hundred');
                assert.strictEqual(Number.getNumString(4000999), 'Four Million Nine Hundred And Ninety Nine');
                assert.strictEqual(Number.getNumString(5001203), 'Five Million One Thousand Two Hundred And Three');
                assert.strictEqual(Number.getNumString(6010780), 'Six Million Ten Thousand Seven Hundred And Eighty');
                assert.strictEqual(Number.getNumString(7800000), 'Seven Million Eight Hundred Thousand');
                assert.strictEqual(Number.getNumString(8108325), 'Eight Million One Hundred And Eight Thousand Three Hundred And Twenty Five');
                assert.strictEqual(Number.getNumString(9600001), 'Nine Million Six Hundred Thousand And One');
                assert.strictEqual(Number.getNumString(10000008), 'Ten Million And Eight');
                assert.strictEqual(Number.getNumString(15000563), 'Fifteen Million Five Hundred And Sixty Three');
                assert.strictEqual(Number.getNumString(25001045), 'Twenty Five Million One Thousand And Fourty Five');
                assert.strictEqual(Number.getNumString(54025018), 'Fifty Four Million Twenty Five Thousand And Eighteen');
                assert.strictEqual(Number.getNumString(62400008), 'Sixty Two Million Four Hundred Thousand And Eight');
                assert.strictEqual(Number.getNumString(100000006), 'One Hundred Million And Six');
                assert.strictEqual(Number.getNumString(200000078), 'Two Hundred Million And Seventy Eight');
                assert.strictEqual(Number.getNumString(300000100), 'Three Hundred Million One Hundred');
                assert.strictEqual(Number.getNumString(400001206), 'Four Hundred Million One Thousand Two Hundred And Six');
                assert.strictEqual(Number.getNumString(500036289), 'Five Hundred Million Thirty Six Thousand Two Hundred And Eighty Nine');
                assert.strictEqual(Number.getNumString(600100000), 'Six Hundred Million One Hundred Thousand');
                assert.strictEqual(Number.getNumString(700453278), 'Seven Hundred Million Four Hundred And Fifty Three Thousand Two Hundred And Seventy Eight');
                assert.strictEqual(Number.getNumString(807650100), 'Eight Hundred And Seven Million Six Hundred And Fifty Thousand One Hundred');
                assert.strictEqual(Number.getNumString(820000000), 'Eight Hundred And Twenty Million');
                assert.strictEqual(Number.getNumString(846603006), 'Eight Hundred And Fourty Six Million Six Hundred And Three Thousand And Six');
                assert.strictEqual(Number.getNumString(999999999), 'Nine Hundred And Ninety Nine Million Nine Hundred And Ninety Nine Thousand Nine Hundred And Ninety Nine');
            });
            
        };
        return {run: run}; /* require.js return run object */
    }
);


