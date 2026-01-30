// modules/a11y/native/useIsScreenReaderEnabled.native.tsx
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
    var3 = var3.AccessibilityInfo;
    var _closure1_slot2 = var3;
    var3 = function(arg0) { // Original name: SCREEN_READER_ENABLED_GETTER, environment: var1
        var0 = arg0;
        var0 = var0.screenReaderEnabled;
        return var0;
    };
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.create;
    var3 = function(arg0) { // Environment: var1
        var1 = arg0;
        var _closure2_slot0 = var1;
        var3 = function(arg0) { // Original name: updateScreenReaderEnabled, environment: var0
            var0 = arg0;
            var _closure3_slot0 = var0;
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var0 = 2;
            var2 = var2[var0];
            var0 = undefined;
            var3 = var3.bind(var0)(var2);
            var2 = var3.batchUpdates;
            var1 = function() { // Environment: var1
                var2 = _closure2_slot0;
                var1 = undefined;
                var0 = function(arg0) { // Environment: var0
                    _fun37318: for (var _fun37318_ip = 0;;) switch (_fun37318_ip) {
                        case 0:
                            var0 = arg0;
                            var3 = var0.screenReaderEnabled;
                            var1 = _closure3_slot0;
                            if (!(var3 !== var1)) {
                                _fun37318_ip = 34;
                                continue _fun37318
                            }
                        case 20:
                            var1 = {};
                            var2 = _closure3_slot0;
                            var1.screenReaderEnabled = var2;
                            var0 = var1;
                        case 34:
                            return var0;
                    }
                };
                var0 = var2.bind(var1)(var0);
                return var0;
            };
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var _closure2_slot1 = var3;
        var2 = _closure1_slot2;
        var1 = var2.isScreenReaderEnabled;
        var4 = var1.bind(var2)();
        var1 = var4.then;
        var4 = var1.bind(var4)(var3);
        var1 = var4.catch;
        var0 = function() { // Environment: var0
            var2 = _closure2_slot1;
            var0 = undefined;
            var1 = false;
            var1 = var2.bind(var0)(var1);
            return var0;
        };
        var0 = var1.bind(var4)(var0);
        var1 = var2.addEventListener;
        var0 = 'screenReaderChanged';
        var0 = var1.bind(var2)(var0, var3);
        var0 = {};
        var1 = false;
        var0.screenReaderEnabled = var1;
        return var0;
    };
    var3 = var6.bind(var7)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/a11y/native/useIsScreenReaderEnabled.native.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function(arg0) { // Original name: addScreenReaderEnabledListener, environment: var1
        var1 = arg0;
        var _closure2_slot0 = var1;
        var2 = _closure1_slot4;
        var1 = var2.subscribe;
        var0 = function(arg0) { // Environment: var0
            var0 = arg0;
            var2 = var0.screenReaderEnabled;
            var1 = _closure2_slot0;
            var0 = undefined;
            var1 = var1.bind(var0)(var2);
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.addScreenReaderEnabledListener = var3;
    var3 = function() { // Original name: getIsScreenReaderEnabled, environment: var1
        var1 = _closure1_slot4;
        var0 = var1.getState;
        var0 = var0.bind(var1)();
        var0 = var0.screenReaderEnabled;
        return var0;
    };
    var2.getIsScreenReaderEnabled = var3;
    var1 = function() { // Original name: useIsScreenReaderEnabled, environment: var1
        var2 = _closure1_slot4;
        var1 = _closure1_slot3;
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        return var0;
    };
    var2.useIsScreenReaderEnabled = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 629, 802, 2]);