// ../discord_common/js/packages/flux/useStateFromStores.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var0 = function arg0, arg1() {
        var1 = arg0;
        var0 = arg1;
        var0 = var1 === var0;
        return var0;
    };
    var _closure1_slot7 = var0;
    var3 = function arg0, arg1, arg2() {
        _fun7118: for (var _fun7118_ip = 0;;) switch (_fun7118_ip) {
            case 0:
                var7 = arg0;
                var3 = arg1;
                var10 = arg2;
                var8 = arguments[3];
                var _closure2_slot0 = var7;
                var _closure2_slot1 = var3;
                var _closure2_slot2 = var10;
                var4 = undefined;
                if (!(var8 === var4)) {
                    _fun7118_ip = 39;
                    continue _fun7118
                }
            case 32:
                var8 = _closure1_slot7;
            case 39:
                var _closure2_slot3 = var8;
                var _closure2_slot4 = var4;
                var _closure2_slot5 = var4;
                var _closure2_slot6 = var4;
                var0 = _closure1_slot5;
                var5 = null;
                var0 = var0.bind(var4)(var5);
                var6 = var0.current;
                if (!(var5 == var6)) {
                    _fun7118_ip = 110;
                    continue _fun7118
                }
            case 78:
                var6 = {};
                var6.stores = var7;
                var6.areStatesEqual = var8;
                var6.getStateFromStores = var3;
                var6.prevDeps = var4;
                var6.state = var4;
                var0.current = var6;
            case 110:
                var0 = var0.current;
                _closure2_slot4 = var0;
                var7 = var0.state;
                _closure2_slot5 = var7;
                if (!(var5 != var10)) {
                    _fun7118_ip = 176;
                    continue _fun7118
                }
            case 132:
                var9 = _closure1_slot0;
                var11 = _closure1_slot2;
                var6 = 2;
                var6 = var11[var6];
                var9 = var9.bind(var4)(var6);
                var6 = var9.areArraysShallowEqual;
                var0 = var0.prevDeps;
                var6 = var6.bind(var9)(var10, var0);
                var0 = var7;
                if (var6) {
                    _fun7118_ip = 206;
                    continue _fun7118
                }
            case 176:
                var3 = var3.bind(var4)();
                var6 = var5 != var7;
                if (!var6) {
                    _fun7118_ip = 193;
                    continue _fun7118
                }
            case 187:
                var6 = var8.bind(var4)(var7, var3);
            case 193:
                var0 = var7;
                if (var6) {
                    _fun7118_ip = 206;
                    continue _fun7118
                }
            case 199:
                _closure2_slot5 = var3;
                var0 = var3;
            case 206:
                var6 = _closure1_slot6;
                var3 = function() { // Environment: var1
                    var2 = _closure2_slot4;
                    var1 = _closure2_slot1;
                    var2.getStateFromStores = var1;
                    var2 = _closure2_slot4;
                    var1 = _closure2_slot2;
                    var2.prevDeps = var1;
                    var1 = _closure2_slot4;
                    var0 = _closure2_slot5;
                    var1.state = var0;
                    var0 = undefined;
                    return var0;
                };
                var3 = var6.bind(var4)(var3);
                var3 = _closure1_slot4;
                var6 = var3.bind(var4)(var5);
                var5 = _closure1_slot3;
                var3 = 2;
                var5 = var5.bind(var4)(var6, var3);
                var3 = 1;
                var3 = var5[var3];
                _closure2_slot6 = var3;
                var3 = _closure1_slot6;
                var2 = function() { // Environment: var1
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 3;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var4 = var1.BatchedStoreListener;
                    var6 = _closure2_slot0;
                    var1 = var4.prototype;
                    var2 = Object.create(var1, {
                        constructor: {
                            value: var4
                        }
                    });
                    var5 = function() { // Environment: var0
                        _fun7121: for (var _fun7121_ip = 0;;) switch (_fun7121_ip) {
                            case 0:
                                var2 = _closure2_slot4;
                                var0 = var2.getStateFromStores;
                                var3 = var0.bind(var2)();
                                var4 = _closure2_slot3;
                                var0 = _closure2_slot4;
                                var2 = var0.state;
                                var0 = undefined;
                                var2 = var4.bind(var0)(var2, var3);
                                if (var2) {
                                    _fun7121_ip = 62;
                                    continue _fun7121
                                }
                            case 41:
                                var2 = _closure2_slot4;
                                var2.state = var3;
                                var2 = _closure2_slot6;
                                var1 = {};
                                var1 = var2.bind(var0)(var1);
                            case 62:
                                return var0;
                        }
                    };
                    var7 = var2;
                    var1 = new var7[var4](var6, var5, var4);
                    var3 = var1 instanceof Object ? var1 : var2;
                    var _closure3_slot0 = var3;
                    var2 = var3.attach;
                    var1 = 'useStateFromStores';
                    var1 = var2.bind(var3)(var1);
                    var0 = function() { // Environment: var0
                        var1 = _closure3_slot0;
                        var0 = var1.detach;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    return var0;
                };
                var1 = new Array(0);
                var1 = var3.bind(var4)(var2, var1);
                return var0;
        }
    };
    var _closure1_slot8 = var3;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var7.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.useState;
    var _closure1_slot4 = var7;
    var7 = var4.useRef;
    var _closure1_slot5 = var7;
    var4 = var4.useInsertionEffect;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = '../discord_common/js/packages/flux/useStateFromStores.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function() {
        var0 = false;
        return var0;
    };
    var2.statesWillNeverBeEqual = var4;
    var2.useStateFromStores = var3;
    var3 = function arg0, arg1, arg2() {
        var5 = _closure1_slot8;
        var1 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 2;
        var0 = var2[var0];
        var4 = undefined;
        var6 = var1.bind(var4)(var0);
        var9 = arg0;
        var8 = arg1;
        var7 = arg2;
        var10 = undefined;
        var0 = var10[var5](var9, var8, var7, var6, var5);
        return var0;
    };
    var2.useStateFromStoresObject = var3;
    var1 = function arg0, arg1, arg2() {
        var5 = _closure1_slot8;
        var1 = _closure1_slot0;
        var2 = _closure1_slot2;
        var0 = 2;
        var0 = var2[var0];
        var4 = undefined;
        var0 = var1.bind(var4)(var0);
        var6 = var0.areArraysShallowEqual;
        var9 = arg0;
        var8 = arg1;
        var7 = arg2;
        var10 = undefined;
        var0 = var10[var5](var9, var8, var7, var6, var5);
        return var0;
    };
    var2.useStateFromStoresArray = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 628, 633, 2]);