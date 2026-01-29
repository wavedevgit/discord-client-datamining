// modules/action_sheet/native/showShareActionSheet.android.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var7 = var3.NativeEventEmitter;
    var3 = var3.NativeModules;
    var _closure1_slot2 = var3;
    var11 = var3.ShareManager;
    var6 = var7.prototype;
    var6 = Object.create(var6, {
        constructor: {
            value: var7
        }
    });
    var12 = var6;
    var3 = new var12[var7](var11, var10);
    var8 = var3 instanceof Object ? var3 : var6;
    var7 = var8.addListener;
    var6 = 'share-broadcast-receiver-app-clicked';
    var3 = function(arg0) { // Environment: var1
        var0 = arg0;
        var4 = var0.app;
        var3 = var0.location;
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 1;
        var1 = var1[var0];
        var0 = undefined;
        var2 = var2.bind(var0)(var1);
        var1 = var2.trackAppClickInNativeShareSheet;
        var1 = var1.bind(var2)(var4, var3);
        return var0;
    };
    var3 = var7.bind(var8)(var6, var3);
    var3 = 2;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/action_sheet/native/showShareActionSheet.android.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0, arg1) { // Original name: showShareActionSheet, environment: var1
        var0 = arg0;
        var1 = _closure1_slot2;
        var5 = var1.ShareManager;
        var4 = var5.share;
        var9 = var0.message;
        var8 = var0.url;
        var7 = var0.subject;
        var6 = arg1;
        var10 = var5;
        var0 = var10[var4](var9, var8, var7, var6, var5);
        var0 = undefined;
        return var0;
    };
    var2.showShareActionSheet = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 8231, 2]);