// modules/rtc/hooks/useSecureFramesUserVerifiedKeysCount.tsx
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
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportDefault;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/rtc/hooks/useSecureFramesUserVerifiedKeysCount.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: useSecureFramesUserVerifiedKeysCount, environment: var1
        var1 = arg0;
        var5 = var1.userId;
        var _closure2_slot0 = var5;
        var2 = var1.keyToOmit;
        var _closure2_slot1 = var2;
        var6 = _closure1_slot2;
        var4 = var6.useMemo;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = function() { // Environment: var0
            _fun66751: for (var _fun66751_ip = 0;;) switch (_fun66751_ip) {
                case 0:
                    var2 = _closure2_slot1;
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun66751_ip = 83;
                        continue _fun66751
                    }
                case 13:
                    var2 = global;
                    var3 = var2.Uint8Array;
                    var5 = _closure2_slot1;
                    var2 = var3.prototype;
                    var2 = Object.create(var2, {
                        constructor: {
                            value: var3
                        }
                    });
                    var6 = var2;
                    var1 = new var6[var3](var5, var4);
                    var3 = var1 instanceof Object ? var1 : var2;
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 2;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var4.bind(var1)(var2);
                    var1 = var2.serializeKey;
                    var1 = var1.bind(var2)(var3);
                    return var1;
                case 83:
                    return var0;
            }
        };
        var6 = var4.bind(var6)(var2, var3);
        var _closure2_slot2 = var6;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 3;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var1 = _closure1_slot3;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = new Array(2);
        var1[0] = var6;
        var1[1] = var5;
        var0 = function() { // Environment: var0
            _fun66752: for (var _fun66752_ip = 0;;) switch (_fun66752_ip) {
                case 0:
                    var2 = _closure1_slot3;
                    var1 = var2.getUserVerifiedKeys;
                    var0 = _closure2_slot0;
                    var3 = var1.bind(var2)(var0);
                    var0 = null;
                    var1 = var0 == var3;
                    var0 = 0;
                    if (var1) {
                        _fun66752_ip = 78;
                        continue _fun66752
                    }
                case 36:
                    var1 = global;
                    var2 = var1.Object;
                    var1 = var2.keys;
                    var3 = var1.bind(var2)(var3);
                    var2 = var3.filter;
                    var1 = function(arg0) { // Environment: var1
                        var1 = _closure2_slot2;
                        var0 = arg0;
                        var0 = var0 !== var1;
                        return var0;
                    };
                    var1 = var2.bind(var3)(var1);
                    var0 = var1.length;
                case 78:
                    return var0;
            }
        };
        var0 = var3.bind(var4)(var2, var0, var1);
        return var0;
    };
    var2.useSecureFramesUserVerifiedKeysCount = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 8205, 8206, 566, 2]);