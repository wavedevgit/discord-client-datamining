// modules/premium/native/google_play_price_changes/GooglePlayPriceChangeStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var3 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var1
        _fun110149: for (var _fun110149_ip = 0;;) switch (_fun110149_ip) {
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
                _fun110149_ip = 76;
                continue _fun110149;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot12 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var6 = global;
    var9 = var6.Object;
    var8 = var9.defineProperty;
    var7 = {};
    var0 = true;
    var7.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var7);
    var0 = 0;
    var7 = var5[var0];
    var0 = undefined;
    var7 = var3.bind(var0)(var7);
    var _closure1_slot2 = var7;
    var7 = 1;
    var7 = var5[var7];
    var7 = var3.bind(var0)(var7);
    var _closure1_slot3 = var7;
    var7 = 2;
    var7 = var5[var7];
    var7 = var3.bind(var0)(var7);
    var _closure1_slot4 = var7;
    var7 = 3;
    var7 = var5[var7];
    var7 = var3.bind(var0)(var7);
    var _closure1_slot5 = var7;
    var7 = 4;
    var7 = var5[var7];
    var7 = var3.bind(var0)(var7);
    var _closure1_slot6 = var7;
    var7 = 5;
    var7 = var5[var7];
    var7 = var3.bind(var0)(var7);
    var _closure1_slot7 = var7;
    var7 = 6;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var7 = var7.SubscriptionStatusTypes;
    var8 = var6.Set;
    var9 = var7.ACTIVE;
    var6 = new Array(3);
    var6[0] = var9;
    var9 = var7.PAST_DUE;
    var6[1] = var9;
    var7 = var7.UNPAID;
    var6[2] = var7;
    var7 = var8.prototype;
    var7 = Object.create(var7, {
        constructor: {
            value: var8
        }
    });
    var13 = var7;
    var12 = var6;
    var6 = new var13[var8](var12, var11);
    var6 = var6 instanceof Object ? var6 : var7;
    var _closure1_slot8 = var6;
    var6 = false;
    var _closure1_slot9 = var6;
    var6 = null;
    var _closure1_slot10 = var6;
    var6 = function() { // Original name: onInitializeSync, environment: var1
        _fun110152: for (var _fun110152_ip = 0;;) switch (_fun110152_ip) {
            case 0:
                var4 = null;
                _closure1_slot10 = var4;
                var0 = false;
                _closure1_slot9 = var0;
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 7;
                var1 = var1[var0];
                var0 = undefined;
                var3 = var3.bind(var0)(var1);
                var1 = var3.isAndroid;
                var1 = var1.bind(var3)();
                if (!var1) {
                    _fun110152_ip = 207;
                    continue _fun110152
                }
            case 53:
                var3 = _closure1_slot0;
                var5 = _closure1_slot1;
                var1 = 8;
                var1 = var5[var1];
                var1 = var3.bind(var0)(var1);
                var5 = var1.GooglePlayPriceChangeNoticeKSExperiment;
                var3 = var5.getCurrentConfig;
                var1 = {};
                var6 = 'GooglePlayPriceChangeStore.onInitializeSync';
                var1.location = var6;
                var1 = var3.bind(var5)(var1);
                var1 = var1.enabled;
                if (var1) {
                    _fun110152_ip = 207;
                    continue _fun110152
                }
            case 110:
                var3 = _closure1_slot7;
                var1 = var3.getPremiumSubscription;
                var5 = var1.bind(var3)();
                var3 = var4 == var5;
                var1 = undefined;
                if (var3) {
                    _fun110152_ip = 139;
                    continue _fun110152
                }
            case 133:
                var1 = var5.priceChange;
            case 139:
                var3 = var4 != var5;
                if (!var3) {
                    _fun110152_ip = 165;
                    continue _fun110152
                }
            case 146:
                var7 = _closure1_slot8;
                var6 = var7.has;
                var5 = var5.status;
                var3 = var6.bind(var7)(var5);
            case 165:
                if (!var3) {
                    _fun110152_ip = 172;
                    continue _fun110152
                }
            case 168:
                var3 = var4 != var1;
            case 172:
                if (!var3) {
                    _fun110152_ip = 183;
                    continue _fun110152
                }
            case 175:
                var3 = var1.isInFuture;
            case 183:
                if (!var3) {
                    _fun110152_ip = 194;
                    continue _fun110152
                }
            case 186:
                var3 = var1.isPriceIncrease;
            case 194:
                if (!var3) {
                    _fun110152_ip = 207;
                    continue _fun110152
                }
            case 197:
                _closure1_slot10 = var1;
                var1 = true;
                _closure1_slot9 = var1;
            case 207:
                return var0;
        }
    };
    var _closure1_slot11 = var6;
    var6 = 9;
    var6 = var5[var6];
    var6 = var3.bind(var0)(var6);
    var6 = var6.Store;
    var1 = function(arg0) { // Environment: var1
        var3 = function() { // Original name: GooglePlayPriceChangeStore, environment: var5
            _fun110154: for (var _fun110154_ip = 0;;) switch (_fun110154_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot2;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot5;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot4;
                    var0 = _closure1_slot12;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun110154_ip = 69;
                        continue _fun110154
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun110154_ip = 105;
                    continue _fun110154;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot5;
                    var5 = var5.bind(var2)(var3);
                    var5 = var5.constructor;
                    var4 = arguments;
                    var0 = var6.bind(var7)(var8, var4, var5);
                case 105:
                    var0 = var1.bind(var2)(var3, var0);
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
        var0 = 'initialize';
        var4.key = var0;
        var0 = function() { // Original name: value, environment: var5
            var2 = this;
            var4 = var2.syncWith;
            var1 = _closure1_slot7;
            var3 = new Array(1);
            var3[0] = var1;
            var0 = _closure1_slot11;
            var0 = var4.bind(var2)(var3, var0);
            var0 = var2.waitFor;
            var0 = var0.bind(var2)(var1);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'shouldShowGooglePlayPriceChange';
        var4.key = var6;
        var6 = function() { // Original name: get, environment: var5
            _fun110156: for (var _fun110156_ip = 0;;) switch (_fun110156_ip) {
                case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var0 = 8;
                    var2 = var2[var0];
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2);
                    var3 = var0.GooglePlayPriceChangeNoticeKSExperiment;
                    var2 = var3.getCurrentConfig;
                    var0 = {};
                    var4 = 'GooglePlayPriceChangeStore.shouldShowGooglePlayPriceChange';
                    var0.location = var4;
                    var0 = var2.bind(var3)(var0);
                    var0 = var0.enabled;
                    var0 = !var0;
                    if (!var0) {
                        _fun110156_ip = 69;
                        continue _fun110156
                    }
                case 65:
                    var0 = _closure1_slot9;
                case 69:
                    return var0;
            }
        };
        var4.get = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'priceChangeRecord';
        var4.key = var6;
        var5 = function() { // Original name: get, environment: var5
            _fun110157: for (var _fun110157_ip = 0;;) switch (_fun110157_ip) {
                case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var0 = 8;
                    var2 = var2[var0];
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2);
                    var3 = var0.GooglePlayPriceChangeNoticeKSExperiment;
                    var2 = var3.getCurrentConfig;
                    var0 = {};
                    var4 = 'GooglePlayPriceChangeStore.priceChangeRecord';
                    var0.location = var4;
                    var0 = var2.bind(var3)(var0);
                    var2 = var0.enabled;
                    var0 = null;
                    if (var2) {
                        _fun110157_ip = 68;
                        continue _fun110157
                    }
                case 64:
                    var0 = _closure1_slot10;
                case 68:
                    return var0;
            }
        };
        var4.get = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var6);
    var1 = 'GooglePlayPriceChangeStore';
    var7.displayName = var1;
    var1 = 10;
    var1 = var5[var1];
    var12 = var3.bind(var0)(var1);
    var1 = var7.prototype;
    var3 = Object.create(var1, {
        constructor: {
            value: var7
        }
    });
    var11 = {};
    var13 = var3;
    var1 = new var13[var7](var12, var11, var10);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/native/google_play_price_changes/GooglePlayPriceChangeStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 3076, 660, 478, 12459, 566, 806, 2]);