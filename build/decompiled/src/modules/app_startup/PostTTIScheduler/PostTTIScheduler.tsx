// modules/app_startup/PostTTIScheduler/PostTTIScheduler.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var3 = true;
    var4.value = var3;
    var3 = '__esModule';
    var3 = var5.bind(var6)(var2, var3, var4);
    var3 = {};
    var4 = function() {
        var0 = undefined;
        return var0;
    };
    var3.resolve = var4;
    var _closure1_slot0 = var3;
    var4 = var0.Promise;
    var0 = var4.prototype;
    var3 = Object.create(var0, {
        constructor: {
            value: var4
        }
    });
    var9 = function(arg0) { // Environment: var1
        var1 = _closure1_slot0;
        var0 = arg0;
        var1.resolve = var0;
        var0 = undefined;
        return var0;
    };
    var10 = var3;
    var0 = new var10[var4](var9, var8);
    var0 = var0 instanceof Object ? var0 : var3;
    var _closure1_slot1 = var0;
    var3 = arg6;
    var0 = 0;
    var4 = var3[var0];
    var3 = arg1;
    var0 = undefined;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/app_startup/PostTTIScheduler/PostTTIScheduler.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var2 = _closure1_slot1;
        var1 = var2.then;
        var0 = function() { // Environment: var0
            var1 = _closure2_slot0;
            var0 = undefined;
            var1 = var1.bind(var0)();
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var2.schedulePostTTIEvent = var3;
    var1 = function() {
        var2 = _closure1_slot0;
        var1 = var2.resolve;
        var0 = null;
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var2.notifyAboutTTI = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);