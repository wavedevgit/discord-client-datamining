// utils/ComponentDispatchUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var0 = metroImportAll;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var5;
    var0 = global;
    var7 = var0.Object;
    var3 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var7)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var4.bind(var0)(var1);
    var1 = var1.ComponentActionsKeyed;
    var _closure1_slot2 = var1;
    var1 = 2;
    var3 = var5[var1];
    var1 = metroImportDefault;
    var7 = var1.bind(var0)(var3);
    var1 = var7.prototype;
    var3 = Object.create(var1, {
        constructor: {
            value: var7
        }
    });
    var12 = 'ComponentDispatchUtils';
    var13 = var3;
    var1 = new var13[var7](var12, var11);
    var1 = var1 instanceof Object ? var1 : var3;
    var _closure1_slot3 = var1;
    var3 = 3;
    var1 = var5[var3];
    var1 = var4.bind(var0)(var1);
    var7 = var1.ComponentDispatcher;
    var1 = {
        'maxListeners': 100,
        'enableDevtools': false
    };
    var8 = {};
    var9 = function(arg0, arg1) { // Original name: warn, environment: var6
        var4 = 1;
        var8 = var4;
        var7 = copyRestArgs(var8);
        var2 = _closure1_slot3;
        var1 = var2.warn;
        var0 = new Array(1);
        var5 = arg0;
        var0[0] = var5;
        var8 = var0;
        var6 = var4;
        var3 = arraySpread(var8, var7, var6);
        var8 = var1;
        var7 = var0;
        var6 = var2;
        var0 = apply(var8, var7, var6);
        return var0;
    };
    var8.warn = var9;
    var1.logger = var8;
    var6 = function(arg0, arg1, arg2) { // Original name: reportDevtoolsEvent, environment: var6
        _fun13517: for (var _fun13517_ip = 0;;) switch (_fun13517_ip) {
            case 0:
                var5 = arg0;
                var _closure2_slot0 = var5;
                var0 = global;
                var4 = var0.Object;
                var3 = var4.values;
                var2 = _closure1_slot2;
                var3 = var3.bind(var4)(var2);
                var2 = var3.find;
                var1 = function(arg0) { // Environment: var1
                    var2 = _closure2_slot0;
                    var1 = var2.startsWith;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var1 = var2.bind(var3)(var1);
                var2 = null;
                var4 = var5;
                if (!(var2 != var1)) {
                    _fun13517_ip = 61;
                    continue _fun13517
                }
            case 58:
                var4 = var1;
            case 61:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 1;
                var1 = var1[var0];
                var0 = undefined;
                var3 = var2.bind(var0)(var1);
                var2 = var3.reportEvent;
                var1 = {};
                var6 = 'ComponentDispatch';
                var1.type = var6;
                var1.description = var4;
                var4 = {};
                var6 = arg1;
                var4.actionData = var6;
                var4.fullActionName = var5;
                var1.data = var4;
                var4 = arg2;
                var1.durationMs = var4;
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var1.devtoolsReporter = var6;
    var6 = var7.prototype;
    var6 = Object.create(var6, {
        constructor: {
            value: var7
        }
    });
    var13 = var6;
    var12 = var1;
    var1 = new var13[var7](var12, var11);
    var1 = var1 instanceof Object ? var1 : var6;
    var6 = 4;
    var6 = var5[var6];
    var8 = var4.bind(var0)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'utils/ComponentDispatchUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ComponentDispatcher;
    var2.ComponentDispatcher = var3;
    var2.ComponentDispatch = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 1230, 3, 1231, 2]);