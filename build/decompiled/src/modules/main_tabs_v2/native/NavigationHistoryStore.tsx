// modules/main_tabs_v2/native/NavigationHistoryStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var8;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var1
        _fun99833: for (var _fun99833_ip = 0;;) switch (_fun99833_ip) {
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
                _fun99833_ip = 76;
                continue _fun99833;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot11 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var0 = function(arg0) { // Original name: cleanDuplicatesAndAppend, environment: var1
        _fun99836: for (var _fun99836_ip = 0;;) switch (_fun99836_ip) {
            case 0:
                var3 = arg0;
                var _closure2_slot0 = var3;
                var4 = _closure1_slot9;
                var2 = var4.has;
                var2 = var2.bind(var4)(var3);
                if (!var2) {
                    _fun99836_ip = 54;
                    continue _fun99836
                }
            case 29:
                var4 = _closure1_slot8;
                var2 = var4.filter;
                var1 = function(arg0) { // Environment: var1
                    var1 = _closure2_slot0;
                    var0 = arg0;
                    var0 = var0 !== var1;
                    return var0;
                };
                var1 = var2.bind(var4)(var1);
                _closure1_slot8 = var1;
            case 54:
                var2 = _closure1_slot9;
                var1 = var2.add;
                var1 = var1.bind(var2)(var3);
                var2 = _closure1_slot8;
                var1 = var2.push;
                var1 = var1.bind(var2)(var3);
                var1 = _closure1_slot8;
                var2 = var1.length;
                var1 = 100;
                if (!(var2 > var1)) {
                    _fun99836_ip = 112;
                    continue _fun99836
                }
            case 98:
                var2 = _closure1_slot8;
                var1 = var2.shift;
                var1 = var1.bind(var2)();
            case 112:
                var1 = _closure1_slot10;
                var0 = var1.emitChange;
                var0 = var0.bind(var1)();
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var5 = global;
    var9 = var5.Object;
    var4 = var9.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var9)(var2, var0, var3);
    var0 = 0;
    var3 = var8[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var8[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var8[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var8[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var8[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var11 = var5.RegExp;
    var3 = var5.HermesInternal;
    var13 = var3.concat;
    var18 = '^(?:';
    var4 = 'channel-';
    var16 = '|';
    var3 = 'guild-';
    var14 = ')';
    var17 = var4;
    var15 = var3;
    var17 = var18[var13](var17, var16, var15, var14, var13);
    var10 = var11.prototype;
    var10 = Object.create(var10, {
        constructor: {
            value: var11
        }
    });
    var18 = var10;
    var9 = new var18[var11](var17, var16);
    var9 = var9 instanceof Object ? var9 : var10;
    var _closure1_slot7 = var9;
    var9 = new Array(0);
    var _closure1_slot8 = var9;
    var5 = var5.Set;
    var9 = var5.prototype;
    var9 = Object.create(var9, {
        constructor: {
            value: var5
        }
    });
    var18 = var9;
    var5 = new var18[var5](var17);
    var5 = var5 instanceof Object ? var5 : var9;
    var _closure1_slot9 = var5;
    var5 = 5;
    var5 = var8[var5];
    var5 = var6.bind(var0)(var5);
    var9 = var5.PersistedStore;
    var5 = function(arg0) { // Environment: var1
        var3 = function() { // Original name: NavigationHistoryStore, environment: var5
            _fun99839: for (var _fun99839_ip = 0;;) switch (_fun99839_ip) {
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
                    var0 = _closure1_slot11;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun99839_ip = 69;
                        continue _fun99839
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun99839_ip = 105;
                    continue _fun99839;
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
        var0 = function(arg0) { // Original name: value, environment: var5
            _fun99840: for (var _fun99840_ip = 0;;) switch (_fun99840_ip) {
                case 0:
                    var4 = arg0;
                    var0 = global;
                    var3 = var0.Set;
                    var2 = null;
                    var5 = var2 == var4;
                    var0 = undefined;
                    var1 = undefined;
                    if (var5) {
                        _fun99840_ip = 30;
                        continue _fun99840
                    }
                case 24:
                    var1 = var4.history;
                case 30:
                    if (!(var2 == var1)) {
                        _fun99840_ip = 38;
                        continue _fun99840
                    }
                case 34:
                    var1 = new Array(0);
                case 38:
                    var2 = var3.prototype;
                    var2 = Object.create(var2, {
                        constructor: {
                            value: var3
                        }
                    });
                    var9 = var2;
                    var8 = var1;
                    var1 = new var9[var3](var8, var7);
                    var4 = var1 instanceof Object ? var1 : var2;
                    _closure1_slot9 = var4;
                    var1 = new Array(0);
                    var6 = 0;
                    var8 = var1;
                    var7 = var4;
                    var3 = arraySpread(var8, var7, var6);
                    _closure1_slot8 = var1;
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'getState';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = {};
            var1 = _closure1_slot8;
            var0.history = var1;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getLastHistory';
        var4.key = var6;
        var5 = function() { // Original name: value, environment: var5
            _fun99842: for (var _fun99842_ip = 0;;) switch (_fun99842_ip) {
                case 0:
                    var2 = arguments[0];
                    var0 = undefined;
                    if (!(var2 === var0)) {
                        _fun99842_ip = 12;
                        continue _fun99842
                    }
                case 9:
                    var2 = 1;
                case 12:
                    var1 = _closure1_slot8;
                    var0 = var1.length;
                    var0 = var0 - var2;
                    var0 = var1[var0];
                    return var0;
            }
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var10 = var5.bind(var0)(var9);
    var5 = 'NavigationHistoryStore';
    var10.displayName = var5;
    var10.persistKey = var5;
    var5 = 6;
    var5 = var8[var5];
    var17 = var6.bind(var0)(var5);
    var5 = {};
    var6 = function() { // Original name: LOGOUT, environment: var1
        var1 = new Array(0);
        _closure1_slot8 = var1;
        var1 = _closure1_slot9;
        var0 = var1.clear;
        var0 = var0.bind(var1)();
        var0 = undefined;
        return var0;
    };
    var5.LOGOUT = var6;
    var6 = var10.prototype;
    var6 = Object.create(var6, {
        constructor: {
            value: var10
        }
    });
    var18 = var6;
    var16 = var5;
    var5 = new var18[var10](var17, var16, var15);
    var5 = var5 instanceof Object ? var5 : var6;
    var _closure1_slot10 = var5;
    var6 = 9;
    var6 = var8[var6];
    var8 = var7.bind(var0)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/main_tabs_v2/native/NavigationHistoryStore.tsx';
    var6 = var7.bind(var8)(var6);
    var2.default = var5;
    var2.CHANNEL_PREFIX = var4;
    var2.GUILD_PREFIX = var3;
    var3 = function(arg0) { // Original name: getIdFromHistoryItem, environment: var1
        var3 = arg0;
        var2 = var3.replace;
        var1 = _closure1_slot7;
        var0 = '';
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.getIdFromHistoryItem = var3;
    var3 = function() { // Original name: handleHistoryStoreNavigationChange, environment: var1
        _fun99845: for (var _fun99845_ip = 0;;) switch (_fun99845_ip) {
            case 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 7;
                var2 = var2[var0];
                var0 = undefined;
                var3 = var3.bind(var0)(var2);
                var2 = var3.getRootNavigationRef;
                var4 = var2.bind(var3)();
                var2 = null;
                if (!(var2 != var4)) {
                    _fun99845_ip = 278;
                    continue _fun99845
                }
            case 44:
                var3 = var4.getCurrentRoute;
                var5 = var3.bind(var4)();
                if (!(var2 != var5)) {
                    _fun99845_ip = 278;
                    continue _fun99845
                }
            case 61:
                var3 = var5.params;
                if (!(var2 != var3)) {
                    _fun99845_ip = 278;
                    continue _fun99845
                }
            case 74:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var6 = 8;
                var3 = var3[var6];
                var4 = var4.bind(var0)(var3);
                var3 = var4.coerceChannelRoute;
                var3 = var3.bind(var4)(var5);
                if (!(var2 != var3)) {
                    _fun99845_ip = 160;
                    continue _fun99845
                }
            case 109:
                var3 = var3.params;
                var9 = var3.channelId;
                var4 = _closure1_slot12;
                var3 = global;
                var3 = var3.HermesInternal;
                var8 = var3.concat;
                var7 = '';
                var3 = 'channel-';
                var3 = var8.bind(var7)(var3, var9);
                var3 = var4.bind(var0)(var3);
                _fun99845_ip = 278;
                continue _fun99845;
            case 160:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var6];
                var4 = var4.bind(var0)(var3);
                var3 = var4.coerceGuildsRoute;
                var3 = var3.bind(var4)(var5);
                if (!(var2 != var3)) {
                    _fun99845_ip = 278;
                    continue _fun99845
                }
            case 192:
                var4 = var3.params;
                var6 = var2 == var4;
                var5 = undefined;
                if (var6) {
                    _fun99845_ip = 212;
                    continue _fun99845
                }
            case 207:
                var5 = var4.channelId;
            case 212:
                if (!(var2 == var5)) {
                    _fun99845_ip = 280;
                    continue _fun99845
                }
            case 216:
                var3 = var3.params;
                var4 = var2 == var3;
                var7 = undefined;
                if (var4) {
                    _fun99845_ip = 236;
                    continue _fun99845
                }
            case 231:
                var7 = var3.guildId;
            case 236:
                if (!(var2 != var7)) {
                    _fun99845_ip = 278;
                    continue _fun99845
                }
            case 240:
                var3 = _closure1_slot12;
                var2 = global;
                var2 = var2.HermesInternal;
                var6 = var2.concat;
                var4 = '';
                var2 = 'guild-';
                var2 = var6.bind(var4)(var2, var7);
                var2 = var3.bind(var0)(var2);
            case 278:
                return var0;
            case 280:
                var2 = _closure1_slot12;
                var1 = global;
                var1 = var1.HermesInternal;
                var4 = var1.concat;
                var3 = '';
                var1 = 'channel-';
                var1 = var4.bind(var3)(var1, var5);
                var1 = var2.bind(var0)(var1);
                return var0;
        }
    };
    var2.handleHistoryStoreNavigationChange = var3;
    var1 = function() { // Original name: getNavigationHistory, environment: var1
        var0 = _closure1_slot8;
        return var0;
    };
    var2.getNavigationHistory = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 566, 806, 3879, 3878, 2]);