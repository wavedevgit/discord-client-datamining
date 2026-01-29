// ../discord_common/js/shared/shared-constants/AppCrashedReasons.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var1 = true;
    var3.value = var1;
    var1 = '__esModule';
    var1 = var4.bind(var5)(var2, var1, var3);
    var3 = {};
    var1 = 'unhandled_native_error';
    var3.UNHANDLED_NATIVE_ERROR = var1;
    var1 = 'unhandled_js_error';
    var3.UNHANDLED_JS_ERROR = var1;
    var1 = 'socket_crashed';
    var3.SOCKET_CRASHED = var1;
    var1 = {};
    var5 = var0.Set;
    var0 = var5.prototype;
    var4 = Object.create(var0, {
        constructor: {
            value: var5
        }
    });
    var9 = ['socket_crashed', 'unhandled_js_error', 'unhandled_native_error'];
    var10 = var4;
    var0 = new var10[var5](var9, var8);
    var0 = var0 instanceof Object ? var0 : var4;
    var1.ALL = var0;
    var4 = dependencyMap;
    var0 = 0;
    var5 = var4[var0];
    var4 = require;
    var0 = undefined;
    var6 = var4.bind(var0)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = '../discord_common/js/shared/shared-constants/AppCrashedReasons.tsx';
    var4 = var5.bind(var6)(var4);
    var2.AppCrashedReasons = var3;
    var2.AppCrashedReasonsSets = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);