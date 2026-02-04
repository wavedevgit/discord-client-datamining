// modules/native_on_demand/native/NativeOnDemandResourceManager.android.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var0 = function() {
        _fun113820: for (var _fun113820_ip = 0;;) switch (_fun113820_ip) {
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
                _fun113820_ip = 76;
                continue _fun113820;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot10 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot10 = var0;
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AppStates;
    var _closure1_slot9 = var3;
    var3 = 10;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var2 = function arg0() {
            _fun113824: for (var _fun113824_ip = 0;;) switch (_fun113824_ip) {
                case 0:
                    var4 = this;
                    var12 = 0;
                    var0 = copyRestArgs(var12);
                    var7 = _closure1_slot3;
                    var2 = _closure2_slot0;
                    var3 = undefined;
                    var7 = var7.bind(var3)(var4, var2);
                    var9 = new Array(0);
                    var12 = var9;
                    var11 = var0;
                    var10 = 0;
                    var0 = arraySpread(var12, var11, var10);
                    var0 = _closure1_slot5;
                    var8 = var0.bind(var3)(var2);
                    var2 = _closure1_slot4;
                    var0 = _closure1_slot10;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun113824_ip = 86;
                        continue _fun113824
                    }
                case 73:
                    var0 = var8.apply;
                    var0 = var0.bind(var8)(var4, var9);
                    _fun113824_ip = 120;
                    continue _fun113824;
                case 86:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot5;
                    var5 = var5.bind(var3)(var4);
                    var5 = var5.constructor;
                    var0 = var6.bind(var7)(var8, var9, var5);
                case 120:
                    var0 = var2.bind(var3)(var4, var0);
                    var _closure3_slot0 = var0;
                    var2 = {};
                    var3 = function() {
                        var1 = _closure3_slot0;
                        var0 = var1.handlePostConnectionOpen;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var2.POST_CONNECTION_OPEN = var3;
                    var3 = function() {
                        var1 = _closure3_slot0;
                        var0 = var1.handleAppStateUpdate;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var2.APP_STATE_UPDATE = var3;
                    var0.actions = var2;
                    var2 = false;
                    var0.isPastConnectionOpen = var2;
                    var0.hasFetchedKrisp = var2;
                    var2 = function() { // Environment: var1
                        var1 = _closure3_slot0;
                        var0 = true;
                        var1.isPastConnectionOpen = var0;
                        var0 = var1.maybeLoadKrisp;
                        var0 = var0.bind(var1)();
                        var0 = undefined;
                        return var0;
                    };
                    var0.handlePostConnectionOpen = var2;
                    var2 = function() { // Environment: var1
                        var1 = _closure3_slot0;
                        var0 = var1.maybeLoadKrisp;
                        var0 = var0.bind(var1)();
                        var0 = undefined;
                        return var0;
                    };
                    var0.handleAppStateUpdate = var2;
                    var1 = function() { // Environment: var1
                        _fun113829: for (var _fun113829_ip = 0;;) switch (_fun113829_ip) {
                            case 0:
                                var2 = _closure3_slot0;
                                var2 = var2.isPastConnectionOpen;
                                if (!var2) {
                                    _fun113829_ip = 309;
                                    continue _fun113829
                                }
                            case 21:
                                var4 = _closure1_slot8;
                                var2 = var4.getState;
                                var4 = var2.bind(var4)();
                                var2 = _closure1_slot9;
                                var2 = var2.ACTIVE;
                                if (!(var4 === var2)) {
                                    _fun113829_ip = 309;
                                    continue _fun113829
                                }
                            case 55:
                                var4 = _closure1_slot0;
                                var2 = _closure1_slot1;
                                var7 = 8;
                                var2 = var2[var7];
                                var6 = undefined;
                                var2 = var4.bind(var6)(var2);
                                var4 = null;
                                if (!(var4 != var2)) {
                                    _fun113829_ip = 123;
                                    continue _fun113829
                                }
                            case 83:
                                var5 = _closure1_slot0;
                                var2 = _closure1_slot1;
                                var2 = var2[var7];
                                var8 = var5.bind(var6)(var2);
                                var5 = var8.hasOnDemandResource;
                                var2 = 'krisp';
                                var2 = var5.bind(var8)(var2);
                                if (var2) {
                                    _fun113829_ip = 309;
                                    continue _fun113829
                                }
                            case 123:
                                var2 = _closure3_slot0;
                                var2 = var2.hasFetchedKrisp;
                                if (var2) {
                                    _fun113829_ip = 309;
                                    continue _fun113829
                                }
                            case 139:
                                var2 = _closure3_slot0;
                                var1 = true;
                                var2.hasFetchedKrisp = var1;
                                var2 = _closure1_slot7;
                                var1 = var2.getMode;
                                var10 = var1.bind(var2)();
                                var _closure4_slot0 = var10;
                                var1 = var2.getModeOptions;
                                var1 = var1.bind(var2)();
                                var1 = var1.autoThreshold;
                                var _closure4_slot1 = var1;
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot1;
                                var5 = 9;
                                var5 = var1[var5];
                                var9 = var2.bind(var6)(var5);
                                var8 = var9.setMode;
                                var5 = {};
                                var11 = false;
                                var5.autoThreshold = var11;
                                var5 = var8.bind(var9)(var10, var5);
                                var1 = var1[var7];
                                var1 = var2.bind(var6)(var1);
                                var1 = var4 == var1;
                                var2 = undefined;
                                if (var1) {
                                    _fun113829_ip = 289;
                                    continue _fun113829
                                }
                            case 248:
                                var5 = _closure1_slot0;
                                var3 = _closure1_slot1;
                                var3 = var3[var7];
                                var6 = var5.bind(var6)(var3);
                                var5 = var6.fetchOnDemandResource;
                                var3 = 'krisp';
                                var3 = var5.bind(var6)(var3);
                                var1 = var4 == var3;
                                var2 = var3;
                            case 289:
                                if (var1) {
                                    _fun113829_ip = 309;
                                    continue _fun113829
                                }
                            case 292:
                                var1 = var2.then;
                                var0 = function(arg0) { // Environment: var0
                                    _fun113830: for (var _fun113830_ip = 0;;) switch (_fun113830_ip) {
                                        case 0:
                                            var3 = _closure1_slot0;
                                            var0 = _closure1_slot1;
                                            var5 = 8;
                                            var2 = var0[var5];
                                            var0 = undefined;
                                            var3 = var3.bind(var0)(var2);
                                            var2 = null;
                                            var3 = var2 == var3;
                                            var2 = undefined;
                                            if (var3) {
                                                _fun113830_ip = 65;
                                                continue _fun113830
                                            }
                                        case 36:
                                            var4 = _closure1_slot0;
                                            var3 = _closure1_slot1;
                                            var3 = var3[var5];
                                            var4 = var4.bind(var0)(var3);
                                            var3 = var4.isOnDemandResourcingAvailable;
                                            var2 = var3.bind(var4)();
                                        case 65:
                                            var3 = arg0;
                                            if (var3) {
                                                _fun113830_ip = 91;
                                                continue _fun113830
                                            }
                                        case 71:
                                            if (!var2) {
                                                _fun113830_ip = 91;
                                                continue _fun113830
                                            }
                                        case 74:
                                            var3 = _closure3_slot0;
                                            var2 = false;
                                            var3.hasFetchedKrisp = var2;
                                            _fun113830_ip = 141;
                                            continue _fun113830;
                                        case 91:
                                            var2 = _closure1_slot0;
                                            var3 = _closure1_slot1;
                                            var1 = 9;
                                            var1 = var3[var1];
                                            var4 = var2.bind(var0)(var1);
                                            var3 = var4.setMode;
                                            var2 = _closure4_slot0;
                                            var1 = {};
                                            var5 = _closure4_slot1;
                                            var1.autoThreshold = var5;
                                            var1 = var3.bind(var4)(var2, var1);
                                        case 141:
                                            return var0;
                                    }
                                };
                                var0 = var1.bind(var2)(var0);
                            case 309:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.maybeLoadKrisp = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var2;
        var4 = _closure1_slot6;
        var1 = undefined;
        var3 = arg0;
        var3 = var4.bind(var1)(var2, var3);
        var0 = _closure1_slot2;
        var0 = var0.bind(var1)(var2);
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
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/native_on_demand/native/NativeOnDemandResourceManager.android.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [7, 6, 15, 17, 18, 3476, 5284, 660, 14587, 8211, 4299, 2]);