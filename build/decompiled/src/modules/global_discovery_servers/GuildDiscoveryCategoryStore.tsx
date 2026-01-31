// modules/global_discovery_servers/GuildDiscoveryCategoryStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var6;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var1
        _fun103655: for (var _fun103655_ip = 0;;) switch (_fun103655_ip) {
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
                _fun103655_ip = 76;
                continue _fun103655;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot16 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot16 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var7 = var3.DEFAULT_DISCOVERY_CATEGORY_ID;
    var _closure1_slot8 = var7;
    var7 = var3.OTHER_DISCOVERY_CATEGORY_ID;
    var _closure1_slot9 = var7;
    var7 = var3.DISCOVERY_ALL_CATEGORIES_ID;
    var _closure1_slot10 = var7;
    var3 = var3.DISCOVERY_SIDEBAR_CATEGORIES;
    var _closure1_slot11 = var3;
    var3 = null;
    var _closure1_slot12 = var3;
    var3 = new Array(0);
    var _closure1_slot13 = var3;
    var3 = new Array(0);
    var _closure1_slot14 = var3;
    var3 = {};
    var _closure1_slot15 = var3;
    var3 = 9;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.Store;
    var3 = function(arg0) { // Environment: var1
        var3 = function() { // Original name: GuildDiscoveryCategoryStore, environment: var5
            _fun103659: for (var _fun103659_ip = 0;;) switch (_fun103659_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot3;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot6;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot5;
                    var0 = _closure1_slot16;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun103659_ip = 69;
                        continue _fun103659
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun103659_ip = 105;
                    continue _fun103659;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot6;
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
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'getPrimaryCategories';
        var4.key = var0;
        var0 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot13;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(6);
        var0[0] = var4;
        var4 = {};
        var6 = 'getDiscoveryCategories';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var3 = _closure1_slot11;
            var2 = var3.map;
            var1 = function(arg0) { // Environment: var1
                var1 = arg0;
                var _closure4_slot0 = var1;
                var2 = _closure1_slot14;
                var1 = var2.find;
                var0 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var1 = var0.categoryId;
                    var0 = _closure4_slot0;
                    var0 = var1 === var0;
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var3 = var2.bind(var3)(var1);
            var2 = var3.filter;
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 7;
            var1 = var7[var1];
            var5 = undefined;
            var1 = var6.bind(var5)(var1);
            var1 = var1.isNotNullish;
            var9 = var2.bind(var3)(var1);
            var1 = {};
            var0 = _closure1_slot10;
            var1.categoryId = var0;
            var0 = 8;
            var3 = var7[var0];
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var0 = var7[var0];
            var0 = var6.bind(var5)(var0);
            var0 = var0.t;
            var0 = var0.Ym2Ri6;
            var0 = var3.bind(var4)(var0);
            var1.name = var0;
            var0 = new Array(1);
            var0[0] = var1;
            var8 = 1;
            var10 = var0;
            var1 = arraySpread(var10, var9, var8);
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getClanDiscoveryCategories';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var3 = _closure1_slot11;
            var2 = var3.map;
            var1 = function(arg0) { // Environment: var1
                var1 = arg0;
                var _closure4_slot0 = var1;
                var2 = _closure1_slot14;
                var1 = var2.find;
                var0 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var1 = var0.categoryId;
                    var0 = _closure4_slot0;
                    var0 = var1 === var0;
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var3 = var2.bind(var3)(var1);
            var2 = var3.filter;
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 7;
            var1 = var7[var1];
            var5 = undefined;
            var1 = var6.bind(var5)(var1);
            var1 = var1.isNotNullish;
            var9 = var2.bind(var3)(var1);
            var1 = {};
            var0 = _closure1_slot10;
            var1.categoryId = var0;
            var0 = 8;
            var3 = var7[var0];
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var0 = var7[var0];
            var0 = var6.bind(var5)(var0);
            var0 = var0.t;
            var0 = var0.QToH29;
            var0 = var3.bind(var4)(var0);
            var1.name = var0;
            var0 = new Array(1);
            var0[0] = var1;
            var8 = 1;
            var10 = var0;
            var1 = arraySpread(var10, var9, var8);
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getAllCategories';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot14;
            return var0;
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'getFetchedLocale';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot12;
            return var0;
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'getCategoryName';
        var4.key = var6;
        var5 = function(arg0) { // Original name: value, environment: var5
            _fun103669: for (var _fun103669_ip = 0;;) switch (_fun103669_ip) {
                case 0:
                    var2 = arg0;
                    var0 = _closure1_slot10;
                    if (!(var2 !== var0)) {
                        _fun103669_ip = 24;
                        continue _fun103669
                    }
                case 14:
                    var0 = _closure1_slot15;
                    var0 = var0[var2];
                    _fun103669_ip = 81;
                    continue _fun103669;
                case 24:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 8;
                    var2 = var6[var1];
                    var4 = undefined;
                    var2 = var5.bind(var4)(var2);
                    var3 = var2.intl;
                    var2 = var3.string;
                    var1 = var6[var1];
                    var1 = var5.bind(var4)(var1);
                    var1 = var1.t;
                    var1 = var1.Ym2Ri6;
                    var0 = var2.bind(var3)(var1);
                case 81:
                    return var0;
            }
        };
        var4.value = var5;
        var0[5] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var8 = var3.bind(var0)(var7);
    var3 = 'GuildDiscoveryCategoryStore';
    var8.displayName = var3;
    var3 = 10;
    var3 = var6[var3];
    var11 = var4.bind(var0)(var3);
    var3 = {};
    var4 = function(arg0) { // Original name: handleCategoryFetchSuccess, environment: var1
        _fun103670: for (var _fun103670_ip = 0;;) switch (_fun103670_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.categories;
                var4 = var0.locale;
                var0 = undefined;
                var _closure2_slot0 = var0;
                var3 = new Array(0);
                var _closure2_slot1 = var3;
                var2 = new Array(0);
                var _closure2_slot2 = var2;
                var6 = var7.sort;
                var5 = function(arg0, arg1) { // Environment: var1
                    _fun103671: for (var _fun103671_ip = 0;;) switch (_fun103671_ip) {
                        case 0:
                            var0 = arg0;
                            var1 = var0.name;
                            var0 = arg1;
                            var0 = var0.name;
                            var1 = var1 < var0;
                            var0 = 1;
                            if (!var1) {
                                _fun103671_ip = 32;
                                continue _fun103671
                            }
                        case 26:
                            var0 = -1;
                        case 32:
                            return var0;
                    }
                };
                var7 = var6.bind(var7)(var5);
                var6 = var7.forEach;
                var5 = function(arg0) { // Environment: var1
                    _fun103672: for (var _fun103672_ip = 0;;) switch (_fun103672_ip) {
                        case 0:
                            var0 = arg0;
                            var2 = var0.id;
                            var1 = var0.name;
                            var4 = var0.is_primary;
                            var3 = _closure1_slot8;
                            if (!(var2 !== var3)) {
                                _fun103672_ip = 130;
                                continue _fun103672
                            }
                        case 32:
                            var3 = _closure1_slot9;
                            if (!(var2 === var3)) {
                                _fun103672_ip = 60;
                                continue _fun103672
                            }
                        case 40:
                            var5 = {};
                            var5.categoryId = var2;
                            var5.name = var1;
                            _closure2_slot0 = var5;
                            _fun103672_ip = 130;
                            continue _fun103672;
                        case 60:
                            var3 = true;
                            if (!(var3 === var4)) {
                                _fun103672_ip = 94;
                                continue _fun103672
                            }
                        case 66:
                            var5 = _closure2_slot1;
                            var4 = var5.push;
                            var3 = {};
                            var3.categoryId = var2;
                            var3.name = var1;
                            var3 = var4.bind(var5)(var3);
                        case 94:
                            var5 = _closure2_slot2;
                            var4 = var5.push;
                            var3 = {};
                            var3.categoryId = var2;
                            var3.name = var1;
                            var3 = var4.bind(var5)(var3);
                            var0 = _closure1_slot15;
                            var0[var2] = var1;
                        case 130:
                            var0 = undefined;
                            return var0;
                    }
                };
                var5 = var6.bind(var7)(var5);
                var6 = _closure2_slot0;
                var5 = null;
                if (!(var5 != var6)) {
                    _fun103670_ip = 131;
                    continue _fun103670
                }
            case 84:
                var1 = _closure2_slot0;
                var6 = var1.categoryId;
                var5 = var1.name;
                var7 = var3.push;
                var1 = {};
                var1.categoryId = var6;
                var1.name = var5;
                var1 = var7.bind(var3)(var1);
                var1 = _closure1_slot15;
                var1[var6] = var5;
            case 131:
                _closure1_slot12 = var4;
                _closure1_slot13 = var3;
                _closure1_slot14 = var2;
                return var0;
        }
    };
    var3.GUILD_DISCOVERY_CATEGORY_FETCH_SUCCESS = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var8
        }
    });
    var12 = var4;
    var10 = var3;
    var3 = new var12[var8](var11, var10, var9);
    var3 = var3 instanceof Object ? var3 : var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/global_discovery_servers/GuildDiscoveryCategoryStore.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var1 = function(arg0, arg1) { // Original name: areDiscoveryCategoriesEqual, environment: var1
        var6 = arg0;
        var5 = arg1;
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 6;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.isEqual;
        var4 = var6.map;
        var1 = function(arg0) { // Environment: var0
            var1 = arg0;
            var2 = var1.categoryId;
            var0 = new Array(2);
            var0[0] = var2;
            var1 = var1.name;
            var0[1] = var1;
            return var0;
        };
        var1 = var4.bind(var6)(var1);
        var4 = var5.map;
        var0 = function(arg0) { // Environment: var0
            var1 = arg0;
            var2 = var1.categoryId;
            var0 = new Array(2);
            var0[0] = var2;
            var1 = var1.name;
            var0[1] = var1;
            return var0;
        };
        var0 = var4.bind(var5)(var0);
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.areDiscoveryCategoriesEqual = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 8116, 22, 1304, 1234, 566, 806, 2]);