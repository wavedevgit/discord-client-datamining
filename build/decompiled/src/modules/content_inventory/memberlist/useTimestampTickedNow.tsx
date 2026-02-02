// modules/content_inventory/memberlist/useTimestampTickedNow.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        var0 = global;
        var6 = var0.Math;
        var5 = var6.floor;
        var3 = _closure1_slot1;
        var4 = _closure1_slot2;
        var0 = 3;
        var1 = var4[var0];
        var2 = undefined;
        var1 = var3.bind(var2)(var1);
        var1 = var1.Millis;
        var7 = var1.SECOND;
        var1 = arg0;
        var1 = var1 / var7;
        var1 = var5.bind(var6)(var1);
        var0 = var4[var0];
        var0 = var3.bind(var2)(var0);
        var0 = var0.Millis;
        var0 = var0.SECOND;
        var0 = var1 * var0;
        return var0;
    };
    var _closure1_slot6 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var7 = var5[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/content_inventory/memberlist/useTimestampTickedNow.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        _fun62407: for (var _fun62407_ip = 0;;) switch (_fun62407_ip) {
            case 0:
                var1 = arguments[0];
                var6 = undefined;
                if (!(var1 === var6)) {
                    _fun62407_ip = 13;
                    continue _fun62407
                }
            case 11:
                var1 = {};
            case 13:
                var5 = var1.hovered;
                var1 = var1.isAppFocused;
                if (!(var1 === var6)) {
                    _fun62407_ip = 35;
                    continue _fun62407
                }
            case 33:
                var1 = true;
            case 35:
                var _closure2_slot0 = var6;
                var _closure2_slot1 = var6;
                var7 = _closure1_slot4;
                var4 = var7.useState;
                var2 = function() { // Environment: var0
                    var2 = _closure1_slot6;
                    var0 = global;
                    var1 = var0.Date;
                    var0 = var1.now;
                    var1 = var0.bind(var1)();
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var7 = var4.bind(var7)(var2);
                var4 = _closure1_slot3;
                var2 = 2;
                var7 = var4.bind(var6)(var7, var2);
                var2 = 0;
                var2 = var7[var2];
                var4 = 1;
                var4 = var7[var4];
                _closure2_slot0 = var4;
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var4 = 4;
                var4 = var8[var4];
                var9 = var7.bind(var6)(var4);
                var8 = var9.useStateFromStores;
                var4 = _closure1_slot5;
                var7 = new Array(1);
                var7[0] = var4;
                var4 = function() { // Environment: var0
                    var0 = _closure1_slot5;
                    var0 = var0.useReducedMotion;
                    return var0;
                };
                var4 = var8.bind(var9)(var7, var4);
                var1 = !var1;
                if (var1) {
                    _fun62407_ip = 158;
                    continue _fun62407
                }
            case 149:
                if (!var4) {
                    _fun62407_ip = 155;
                    continue _fun62407
                }
            case 152:
                var4 = !var5;
            case 155:
                var1 = var4;
            case 158:
                var5 = _closure1_slot1;
                var7 = _closure1_slot2;
                var4 = 3;
                var4 = var7[var4];
                var4 = var5.bind(var6)(var4);
                var4 = var4.Millis;
                var5 = var4.SECOND;
                if (var1) {
                    _fun62407_ip = 198;
                    continue _fun62407
                }
            case 193:
                var6 = var5;
                _fun62407_ip = 205;
                continue _fun62407;
            case 198:
                var4 = 15;
                var6 = var4 * var5;
            case 205:
                _closure2_slot1 = var6;
                var5 = _closure1_slot4;
                var4 = var5.useEffect;
                var3 = new Array(1);
                var3[0] = var6;
                var0 = function() { // Environment: var0
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 5;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var1 = var1.Interval;
                    var2 = var1.prototype;
                    var2 = Object.create(var2, {
                        constructor: {
                            value: var1
                        }
                    });
                    var7 = var2;
                    var1 = new var7[var1](var6);
                    var4 = var1 instanceof Object ? var1 : var2;
                    var _closure3_slot0 = var4;
                    var3 = var4.start;
                    var2 = _closure2_slot1;
                    var1 = function() { // Environment: var0
                        var2 = _closure2_slot0;
                        var3 = _closure1_slot6;
                        var0 = global;
                        var1 = var0.Date;
                        var0 = var1.now;
                        var1 = var0.bind(var1)();
                        var0 = undefined;
                        var1 = var3.bind(var0)(var1);
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var1 = var3.bind(var4)(var2, var1);
                    var0 = function() { // Environment: var0
                        var1 = _closure3_slot0;
                        var0 = var1.stop;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    return var0;
                };
                var0 = var4.bind(var5)(var0, var3);
                var0 = {};
                var0.now = var2;
                var0.slowTickMode = var1;
                return var0;
        }
    };
    var2.useTimestampTickedNow = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 1298, 667, 566, 3591, 2]);