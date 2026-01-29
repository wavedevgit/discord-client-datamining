// modules/voice_panel/native/utils/getRandomNumberInRange.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = global;
    var4 = var0.Object;
    var3 = var4.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var4)(var2, var0, var1);
    var0 = {};
    var1 = 'function getRandomNumberInRange_getRandomNumberInRangeTsx1(min,max){return Math.random()*(max-min)+min;}';
    var0.code = var1;
    var1 = function(arg0, arg1) { // Original name: n, environment: var1
        var1 = arg0;
        var0 = global;
        var2 = var0.Math;
        var0 = var2.random;
        var2 = var0.bind(var2)();
        var0 = arg1;
        var0 = var0 - var1;
        var0 = var2 * var0;
        var0 = var0 + var1;
        return var0;
    };
    var3 = {};
    var1.__closure = var3;
    var3 = 3489295446061.0;
    var1.__workletHash = var3;
    var1.__initData = var0;
    var3 = arg6;
    var0 = 0;
    var4 = var3[var0];
    var3 = arg1;
    var0 = undefined;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/voice_panel/native/utils/getRandomNumberInRange.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);