// modules/samsung/native/SamsungManager.android.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var4.bind(var0)(var1);
    var1 = var1.NativeModules;
    var _closure1_slot0 = var1;
    var1 = {};
    var6 = function arg0() {
        var0 = _closure1_slot0;
        var2 = var0.Samsung;
        var1 = var2.checkIfOAuthRequest;
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.checkIfOAuthRequest = var6;
    var6 = function() {
        var0 = _closure1_slot0;
        var1 = var0.Samsung;
        var0 = var1.showConnectionDisclaimer;
        var0 = var0.bind(var1)();
        return var0;
    };
    var1.showConnectionDisclaimer = var6;
    var6 = function() {
        var0 = _closure1_slot0;
        var1 = var0.Samsung;
        var0 = var1.getAccountUrlAndAuthCode;
        var0 = var0.bind(var1)();
        return var0;
    };
    var1.getAccountUrlAndAuthCode = var6;
    var3 = function arg0, arg1, arg2() {
        var0 = _closure1_slot0;
        var4 = var0.Samsung;
        var3 = var4.finishSamsungAuthorization;
        var2 = arg0;
        var1 = arg1;
        var0 = arg2;
        var0 = var3.bind(var4)(var2, var1, var0);
        return var0;
    };
    var1.finishSamsungAuthorization = var3;
    var3 = 1;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/samsung/native/SamsungManager.android.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 2]);