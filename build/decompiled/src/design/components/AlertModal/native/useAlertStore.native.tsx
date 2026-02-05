// design/components/AlertModal/native/useAlertStore.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var7 = var5.bind(var0)(var3);
    var4 = var7.create;
    var3 = function() { // Environment: var1
        var0 = {};
        var1 = new Array(0);
        var0.alerts = var1;
        return var0;
    };
    var3 = var4.bind(var7)(var3);
    var _closure1_slot2 = var3;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'design/components/AlertModal/native/useAlertStore.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2.useAlertStore = var3;
    var3 = function() { // Environment: var1
        var3 = _closure1_slot2;
        var2 = var3.getState;
        var2 = var2.bind(var3)();
        var4 = var2.alerts;
        var3 = var4.forEach;
        var2 = function(arg0) { // Environment: var1
            _fun37357: for (var _fun37357_ip = 0;;) switch (_fun37357_ip) {
                case 0:
                    var2 = arg0;
                    var1 = var2.onDismiss;
                    var0 = null;
                    var1 = var0 == var1;
                    var0 = undefined;
                    if (var1) {
                        _fun37357_ip = 30;
                        continue _fun37357
                    }
                case 20:
                    var1 = var2.onDismiss;
                    var0 = var1.bind(var2)();
                case 30:
                    return var0;
            }
        };
        var2 = var3.bind(var4)(var2);
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var0 = 1;
        var2 = var2[var0];
        var0 = undefined;
        var3 = var3.bind(var0)(var2);
        var2 = var3.batchUpdates;
        var1 = function() { // Environment: var1
            var2 = _closure1_slot2;
            var1 = var2.setState;
            var0 = {};
            var3 = new Array(0);
            var0.alerts = var3;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.dismissAlerts = var3;
    var3 = function(arg0) { // Environment: var1
        var0 = arg0;
        var _closure2_slot0 = var0;
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var0 = 1;
        var2 = var2[var0];
        var0 = undefined;
        var3 = var3.bind(var0)(var2);
        var2 = var3.batchUpdates;
        var1 = function() { // Environment: var1
            _fun37360: for (var _fun37360_ip = 0;;) switch (_fun37360_ip) {
                case 0:
                    var3 = _closure1_slot2;
                    var2 = var3.getState;
                    var2 = var2.bind(var3)();
                    var4 = var2.alerts;
                    var3 = var4.find;
                    var2 = function(arg0) { // Environment: var0
                        var0 = arg0;
                        var1 = var0.key;
                        var0 = _closure2_slot0;
                        var0 = var1 === var0;
                        return var0;
                    };
                    var3 = var3.bind(var4)(var2);
                    var5 = null;
                    var2 = var5 == var3;
                    if (var2) {
                        _fun37360_ip = 59;
                        continue _fun37360
                    }
                case 49:
                    var4 = var3.onDismiss;
                    var2 = var5 == var4;
                case 59:
                    if (var2) {
                        _fun37360_ip = 72;
                        continue _fun37360
                    }
                case 62:
                    var2 = var3.onDismiss;
                    var2 = var2.bind(var3)();
                case 72:
                    var2 = _closure1_slot2;
                    var1 = var2.setState;
                    var0 = function(arg0) { // Environment: var0
                        var0 = {};
                        var1 = arg0;
                        var3 = var1.alerts;
                        var2 = var3.filter;
                        var1 = function(arg0) { // Environment: var1
                            var0 = arg0;
                            var1 = var0.key;
                            var0 = _closure2_slot0;
                            var0 = var1 !== var0;
                            return var0;
                        };
                        var1 = var2.bind(var3)(var1);
                        var0.alerts = var1;
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.dismissAlert = var3;
    var1 = function(arg0, arg1, arg2) { // Environment: var1
        var0 = arg0;
        var _closure2_slot0 = var0;
        var0 = arg1;
        var _closure2_slot1 = var0;
        var0 = arg2;
        var _closure2_slot2 = var0;
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var0 = 1;
        var2 = var2[var0];
        var0 = undefined;
        var3 = var3.bind(var0)(var2);
        var2 = var3.batchUpdates;
        var1 = function() { // Environment: var1
            var2 = _closure1_slot2;
            var1 = var2.setState;
            var0 = function(arg0) { // Environment: var0
                var0 = {};
                var1 = arg0;
                var7 = var1.alerts;
                var1 = new Array(1);
                var6 = 0;
                var8 = var1;
                var3 = arraySpread(var8, var7, var6);
                var2 = {};
                var5 = _closure2_slot0;
                var2.key = var5;
                var5 = _closure2_slot1;
                var2.node = var5;
                var4 = _closure2_slot2;
                var2.onDismiss = var4;
                var1[var3] = var2;
                var2 = 1;
                var2 = var3 + var2;
                var0.alerts = var1;
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.openAlert = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [629, 802, 2]);