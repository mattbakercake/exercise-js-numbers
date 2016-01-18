define([
    '../models/NumberModel'
],
    function(numberModel) {
        var run = function() {
            var Number = new numberModel();
            
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
            
        };
        return {run: run};
    }
);


