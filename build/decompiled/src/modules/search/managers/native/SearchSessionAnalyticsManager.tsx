// modules/search/managers/native/SearchSessionAnalyticsManager.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function() {
        _fun72104: for (var _fun72104_ip = 0;;) switch (_fun72104_ip) {
            case 0:
            case 2: // try_start_0
                var1 = global;
                var2 = var1.Boolean;
                var2 = var2.prototype;
                var3 = var2.valueOf;
                var2 = var3.call;
                var7 = var1.Reflect;
                var6 = var7.construct;
                var5 = var1.Boolean;
                var4 = new Array(0);
                var1 = function() { // Environment: var0
                    var0 = undefined;
                    return var0;
                };
                var1 = var6.bind(var7)(var5, var4, var1);
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                var _closure2_slot0 = var1;
            case 72: // try_end0
                _fun72104_ip = 76;
                continue _fun72104;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot8 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot8 = var0;
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
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.SEARCH_TAB_TO_ANALYTICS_SEARCH_TAB;
    var _closure1_slot7 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var3 = function arg0() {
            _fun72108: for (var _fun72108_ip = 0;;) switch (_fun72108_ip) {
                case 0:
                    var3 = this;
                    var11 = 0;
                    var0 = copyRestArgs(var11);
                    var6 = _closure1_slot2;
                    var1 = _closure2_slot0;
                    var2 = undefined;
                    var6 = var6.bind(var2)(var3, var1);
                    var8 = new Array(0);
                    var11 = var8;
                    var10 = var0;
                    var9 = 0;
                    var0 = arraySpread(var11, var10, var9);
                    var0 = _closure1_slot5;
                    var7 = var0.bind(var2)(var1);
                    var1 = _closure1_slot4;
                    var0 = _closure1_slot8;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun72108_ip = 84;
                        continue _fun72108
                    }
                case 71:
                    var0 = var7.apply;
                    var0 = var0.bind(var7)(var3, var8);
                    _fun72108_ip = 118;
                    continue _fun72108;
                case 84:
                    var5 = global;
                    var6 = var5.Reflect;
                    var5 = var6.construct;
                    var4 = _closure1_slot5;
                    var4 = var4.bind(var2)(var3);
                    var4 = var4.constructor;
                    var0 = var5.bind(var6)(var7, var8, var4);
                case 118:
                    var0 = var1.bind(var2)(var3, var0);
                    var1 = global;
                    var2 = var1.Map;
                    var3 = var2.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var2
                        }
                    });
                    var12 = var3;
                    var2 = new var12[var2](var11);
                    var2 = var2 instanceof Object ? var2 : var3;
                    var0.locations = var2;
                    var1 = var1.Map;
                    var2 = var1.prototype;
                    var2 = Object.create(var2, {
                        constructor: {
                            value: var1
                        }
                    });
                    var12 = var2;
                    var1 = new var12[var1](var11);
                    var1 = var1 instanceof Object ? var1 : var2;
                    var0.selectedTabs = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot6;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot3;
        var4 = {};
        var0 = '_initialize';
        var4.key = var0;
        var0 = function arg0, arg1() {
            var2 = _closure1_slot0;
            var1 = _closure1_slot1;
            var0 = 6;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.getSearchContextId;
            var1 = arg0;
            var4 = var2.bind(var3)(var1);
            var1 = this;
            var3 = var1.locations;
            var2 = var3.set;
            var1 = arg1;
            var1 = var2.bind(var3)(var4, var1);
            return var0;
        };
        var4.value = var0;
        var0 = new Array(6);
        var0[0] = var4;
        var4 = {};
        var6 = '_terminate';
        var4.key = var6;
        var6 = function arg0() {
            var1 = this;
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var0 = 6;
            var2 = var2[var0];
            var0 = undefined;
            var4 = var3.bind(var0)(var2);
            var3 = var4.getSearchContextId;
            var2 = arg0;
            var3 = var3.bind(var4)(var2);
            var4 = var1.locations;
            var2 = var4.delete;
            var2 = var2.bind(var4)(var3);
            var2 = var1.selectedTabs;
            var1 = var2.delete;
            var1 = var1.bind(var2)(var3);
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = '_transferSession';
        var4.key = var6;
        var6 = function() {
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getLocation';
        var4.key = var6;
        var6 = function arg0() {
            var2 = _closure1_slot0;
            var1 = _closure1_slot1;
            var0 = 6;
            var1 = var1[var0];
            var0 = undefined;
            var2 = var2.bind(var0)(var1);
            var1 = var2.getSearchContextId;
            var0 = arg0;
            var2 = var1.bind(var2)(var0);
            var0 = this;
            var1 = var0.locations;
            var0 = var1.get;
            var0 = var0.bind(var1)(var2);
            return var0;
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'getSelectedTab';
        var4.key = var6;
        var6 = function arg0() {
            var2 = _closure1_slot0;
            var1 = _closure1_slot1;
            var0 = 6;
            var1 = var1[var0];
            var0 = undefined;
            var2 = var2.bind(var0)(var1);
            var1 = var2.getSearchContextId;
            var0 = arg0;
            var2 = var1.bind(var2)(var0);
            var0 = this;
            var1 = var0.selectedTabs;
            var0 = var1.get;
            var0 = var0.bind(var1)(var2);
            return var0;
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'setSelectedTab';
        var4.key = var6;
        var5 = function arg0, arg1() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var0 = 6;
            var2 = var2[var0];
            var0 = undefined;
            var4 = var3.bind(var0)(var2);
            var3 = var4.getSearchContextId;
            var2 = arg0;
            var4 = var3.bind(var4)(var2);
            var2 = _closure1_slot7;
            var1 = arg1;
            var3 = var2[var1];
            var1 = this;
            var2 = var1.selectedTabs;
            var1 = var2.set;
            var1 = var1.bind(var2)(var4, var3);
            return var0;
        };
        var4.value = var5;
        var0[5] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var3 = var1.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var1
        }
    });
    var12 = var3;
    var1 = new var12[var1](var11);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/search/managers/native/SearchSessionAnalyticsManager.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 8913, 8980, 8993, 2]);