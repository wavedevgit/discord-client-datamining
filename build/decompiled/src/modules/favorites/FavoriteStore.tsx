// modules/favorites/FavoriteStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var3 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var1
        _fun16001: for (var _fun16001_ip = 0;;) switch (_fun16001_ip) {
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
            case 70: // try_end0
                _fun16001_ip = 74;
                continue _fun16001;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot13 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot13 = var0;
    var0 = function() { // Original name: initializeFromUserSettings, environment: var1
        _fun16004: for (var _fun16004_ip = 0;;) switch (_fun16004_ip) {
            case 0:
                var0 = _closure1_slot7;
                var0 = var0.settings;
                var1 = var0.favorites;
                var9 = null;
                var3 = var9 == var1;
                var0 = undefined;
                var2 = undefined;
                if (var3) {
                    _fun16004_ip = 38;
                    continue _fun16004
                }
            case 32:
                var2 = var1.muted;
            case 38:
                var1 = var9 != var2;
                if (!var1) {
                    _fun16004_ip = 48;
                    continue _fun16004
                }
            case 45:
                var1 = var2;
            case 48:
                _closure1_slot12 = var1;
                var1 = {};
                _closure1_slot11 = var1;
                var1 = _closure1_slot7;
                var1 = var1.settings;
                var1 = var1.favorites;
                var2 = var9 == var1;
                var8 = undefined;
                if (var2) {
                    _fun16004_ip = 89;
                    continue _fun16004
                }
            case 83:
                var8 = var1.favoriteChannels;
            case 89:
                if (!(var9 != var8)) {
                    _fun16004_ip = 213;
                    continue _fun16004
                }
            case 93:
                var6 = var8;
                var2 = '0';
                var1 = '';
                for (var3 in var6)
                    case 114: {
                        case 123: var13 = var3;
                        var15 = var8[var13];
                        var12 = _closure1_slot11;
                        var11 = {};
                        var11.id = var13;
                        var16 = var15.nickname;
                        var14 = null;
                        if (!(var1 !== var16)) {
                            _fun16004_ip = 158;
                            continue _fun16004
                        }
                        case 152: var14 = var15.nickname;
                        case 158: var11.nickname = var14;
                        var14 = var15.type;
                        var11.type = var14;
                        var14 = var15.position;
                        var11.order = var14;
                        var16 = var15.parentId;
                        var14 = null;
                        if (!(var2 !== var16)) {
                            _fun16004_ip = 200;
                            continue _fun16004
                        }
                        case 194: var14 = var15.parentId;
                        case 200: var11.parentId = var14;
                        var12[var13] = var11;
                        _fun16004_ip = 114;
                        continue _fun16004;
                    }
            case 211:
                return var0;
            case 213:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot14 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var6);
    var0 = 0;
    var6 = var5[var0];
    var0 = undefined;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot2 = var6;
    var6 = 1;
    var6 = var5[var6];
    var6 = var3.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var6 = 2;
    var6 = var5[var6];
    var6 = var3.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var6 = 3;
    var6 = var5[var6];
    var6 = var3.bind(var0)(var6);
    var _closure1_slot5 = var6;
    var6 = 4;
    var6 = var5[var6];
    var6 = var3.bind(var0)(var6);
    var _closure1_slot6 = var6;
    var6 = 5;
    var6 = var5[var6];
    var6 = var3.bind(var0)(var6);
    var _closure1_slot7 = var6;
    var6 = 6;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var6 = var6.createChannelRecord;
    var _closure1_slot8 = var6;
    var6 = 7;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var7 = var6.ChannelTypes;
    var _closure1_slot9 = var7;
    var6 = var6.FAVORITES;
    var _closure1_slot10 = var6;
    var6 = {};
    var _closure1_slot11 = var6;
    var6 = false;
    var _closure1_slot12 = var6;
    var6 = 9;
    var6 = var5[var6];
    var6 = var3.bind(var0)(var6);
    var6 = var6.Store;
    var1 = function(arg0) { // Environment: var1
        var3 = function() { // Original name: FavoriteStore, environment: var5
            _fun16006: for (var _fun16006_ip = 0;;) switch (_fun16006_ip) {
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
                    var0 = _closure1_slot13;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun16006_ip = 69;
                        continue _fun16006
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun16006_ip = 105;
                    continue _fun16006;
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
            var4 = this;
            var2 = var4.waitFor;
            var0 = _closure1_slot7;
            var0 = var2.bind(var4)(var0);
            var3 = _closure1_slot14;
            var0 = undefined;
            var2 = var3.bind(var0)();
            var2 = var4.syncWith;
            var5 = _closure1_slot7;
            var1 = new Array(1);
            var1[0] = var5;
            var1 = var2.bind(var4)(var1, var3);
            return var0;
        };
        var4.value = var0;
        var0 = new Array(7);
        var0[0] = var4;
        var4 = {};
        var6 = 'getFavoriteChannels';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot11;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'favoriteServerMuted';
        var4.key = var6;
        var6 = function() { // Original name: get, environment: var5
            var0 = _closure1_slot12;
            return var0;
        };
        var4.get = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'isFavorite';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun16010: for (var _fun16010_ip = 0;;) switch (_fun16010_ip) {
                case 0:
                    var3 = arg0;
                    var2 = null;
                    var0 = var2 != var3;
                    if (!var0) {
                        _fun16010_ip = 27;
                        continue _fun16010
                    }
                case 12:
                    var1 = _closure1_slot11;
                    var1 = var1[var3];
                    var0 = var2 != var1;
                case 27:
                    return var0;
            }
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'getFavorite';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun16011: for (var _fun16011_ip = 0;;) switch (_fun16011_ip) {
                case 0:
                    var1 = arg0;
                    var0 = null;
                    if (!(var0 == var1)) {
                        _fun16011_ip = 13;
                        continue _fun16011
                    }
                case 9:
                    var0 = undefined;
                    return var0;
                case 13:
                    var0 = _closure1_slot11;
                    var0 = var0[var1];
                    return var0;
            }
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'getCategoryRecord';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun16012: for (var _fun16012_ip = 0;;) switch (_fun16012_ip) {
                case 0:
                    var2 = arg0;
                    var0 = _closure1_slot11;
                    var1 = var2 in var0;
                    var6 = null;
                    var0 = null;
                    if (!var1) {
                        _fun16012_ip = 161;
                        continue _fun16012
                    }
                case 24:
                    var1 = _closure1_slot11;
                    var1 = var1[var2];
                    var5 = var1.type;
                    var7 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var1 = 8;
                    var1 = var3[var1];
                    var3 = undefined;
                    var1 = var7.bind(var3)(var1);
                    var1 = var1.FavoriteChannelType;
                    var1 = var1.CATEGORY;
                    var0 = null;
                    if (!(var5 === var1)) {
                        _fun16012_ip = 161;
                        continue _fun16012
                    }
                case 77:
                    var1 = _closure1_slot11;
                    var5 = var1[var2];
                    var2 = _closure1_slot8;
                    var1 = {};
                    var7 = var5.id;
                    var1.id = var7;
                    var7 = var5.nickname;
                    var8 = var6 != var7;
                    var6 = '';
                    if (!var8) {
                        _fun16012_ip = 120;
                        continue _fun16012
                    }
                case 117:
                    var6 = var7;
                case 120:
                    var1.name = var6;
                    var6 = _closure1_slot9;
                    var6 = var6.GUILD_CATEGORY;
                    var1.type = var6;
                    var5 = var5.order;
                    var1.position = var5;
                    var4 = _closure1_slot10;
                    var1.guild_id = var4;
                    var0 = var2.bind(var3)(var1);
                case 161:
                    return var0;
            }
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'getNickname';
        var4.key = var6;
        var5 = function(arg0) { // Original name: value, environment: var5
            _fun16013: for (var _fun16013_ip = 0;;) switch (_fun16013_ip) {
                case 0:
                    var2 = this;
                    var1 = var2.getFavorite;
                    var0 = arg0;
                    var3 = var1.bind(var2)(var0);
                    var2 = null;
                    var4 = var2 == var3;
                    var1 = undefined;
                    if (var4) {
                        _fun16013_ip = 34;
                        continue _fun16013
                    }
                case 28:
                    var1 = var3.nickname;
                case 34:
                    var2 = var2 != var1;
                    var0 = undefined;
                    if (!var2) {
                        _fun16013_ip = 46;
                        continue _fun16013
                    }
                case 43:
                    var0 = var1;
                case 46:
                    return var0;
            }
        };
        var4.value = var5;
        var0[6] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var6);
    var1 = 'FavoriteStore';
    var7.displayName = var1;
    var1 = 10;
    var1 = var5[var1];
    var11 = var3.bind(var0)(var1);
    var1 = var7.prototype;
    var3 = Object.create(var1, {
        constructor: {
            value: var7
        }
    });
    var10 = {};
    var12 = var3;
    var1 = new var12[var7](var11, var10, var9);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/favorites/FavoriteStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1310, 1376, 660, 1311, 566, 806, 2]);