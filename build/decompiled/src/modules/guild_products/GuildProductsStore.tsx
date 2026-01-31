// modules/guild_products/GuildProductsStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var6;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var7
        _fun95515: for (var _fun95515_ip = 0;;) switch (_fun95515_ip) {
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
                _fun95515_ip = 76;
                continue _fun95515;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot14 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot14 = var0;
    var0 = function(arg0) { // Original name: makeProductListingGuildIndex, environment: var7
        var0 = global;
        var0 = var0.HermesInternal;
        var2 = var0.concat;
        var1 = 'guild:';
        var0 = arg0;
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var _closure1_slot15 = var0;
    var0 = function(arg0) { // Original name: makeProductListingGuildPublishedIndex, environment: var7
        var0 = global;
        var0 = var0.HermesInternal;
        var3 = var0.concat;
        var2 = 'guild:';
        var1 = arg0;
        var0 = ':published';
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var _closure1_slot16 = var0;
    var0 = global;
    var4 = var0.Object;
    var3 = var4.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var4)(var2, var0, var1);
    var10 = 0;
    var1 = var6[var10];
    var0 = undefined;
    var1 = var8.bind(var0)(var1);
    var _closure1_slot2 = var1;
    var9 = 1;
    var1 = var6[var9];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var4 = 2;
    var1 = var6[var4];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 3;
    var1 = var6[var1];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 4;
    var1 = var6[var1];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = {};
    var1.NOT_FETCHED = var10;
    var3 = 'NOT_FETCHED';
    var1[var10] = var3;
    var1.FETCHING = var9;
    var3 = 'FETCHING';
    var1[var9] = var3;
    var1.FETCHED = var4;
    var3 = 'FETCHED';
    var1[var4] = var3;
    var _closure1_slot7 = var1;
    var3 = {};
    var _closure1_slot8 = var3;
    var3 = {};
    var _closure1_slot9 = var3;
    var3 = {};
    var _closure1_slot10 = var3;
    var3 = 5;
    var3 = var6[var3];
    var3 = var8.bind(var0)(var3);
    var3 = var3.Millis;
    var3 = var3.MINUTE;
    var4 = 10;
    var3 = var4 * var3;
    var _closure1_slot11 = var3;
    var3 = 7;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var11 = var3.SecondaryIndexMap;
    var3 = var11.prototype;
    var9 = Object.create(var3, {
        constructor: {
            value: var11
        }
    });
    var14 = function(arg0) { // Environment: var7
        _fun95520: for (var _fun95520_ip = 0;;) switch (_fun95520_ip) {
            case 0:
                var1 = arg0;
                var2 = _closure1_slot15;
                var0 = var1.guild_id;
                var4 = undefined;
                var2 = var2.bind(var4)(var0);
                var0 = new Array(1);
                var0[0] = var2;
                var2 = var1.published;
                if (!var2) {
                    _fun95520_ip = 63;
                    continue _fun95520
                }
            case 39:
                var2 = var0.push;
                var3 = _closure1_slot16;
                var1 = var1.guild_id;
                var1 = var3.bind(var4)(var1);
                var1 = var2.bind(var0)(var1);
            case 63:
                return var0;
        }
    };
    var13 = function(arg0) { // Environment: var7
        _fun95521: for (var _fun95521_ip = 0;;) switch (_fun95521_ip) {
            case 0:
                var0 = arg0;
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 6;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.extractTimestamp;
                var1 = var0.id;
                var1 = var2.bind(var3)(var1);
                var0 = var0.published;
                if (var0) {
                    _fun95521_ip = 69;
                    continue _fun95521
                }
            case 53:
                var0 = 1000000000000.0;
                var0 = var0 - var1;
                _fun95521_ip = 72;
                continue _fun95521;
            case 69:
                var0 = -var1;
            case 72:
                return var0;
        }
    };
    var15 = var9;
    var3 = new var15[var11](var14, var13, var12);
    var3 = var3 instanceof Object ? var3 : var9;
    var _closure1_slot12 = var3;
    var3 = new Array(0);
    var _closure1_slot13 = var3;
    var3 = 8;
    var3 = var6[var3];
    var3 = var8.bind(var0)(var3);
    var9 = var3.Store;
    var3 = function(arg0) { // Environment: var7
        var3 = function() { // Original name: GuildProductsStore, environment: var5
            _fun95523: for (var _fun95523_ip = 0;;) switch (_fun95523_ip) {
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
                    var0 = _closure1_slot14;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun95523_ip = 69;
                        continue _fun95523
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun95523_ip = 105;
                    continue _fun95523;
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
        var0 = 'getGuildProductsForGuildFetchState';
        var4.key = var0;
        var0 = function(arg0) { // Original name: value, environment: var5
            _fun95524: for (var _fun95524_ip = 0;;) switch (_fun95524_ip) {
                case 0:
                    var2 = _closure1_slot8;
                    var0 = arg0;
                    var0 = var2[var0];
                    var2 = null;
                    if (!(var2 == var0)) {
                        _fun95524_ip = 30;
                        continue _fun95524
                    }
                case 20:
                    var1 = _closure1_slot7;
                    var0 = var1.NOT_FETCHED;
                case 30:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(5);
        var0[0] = var4;
        var4 = {};
        var6 = 'getGuildProduct';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            var2 = _closure1_slot12;
            var1 = var2.get;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getGuildProductsForGuild';
        var4.key = var6;
        var6 = function(arg0, arg1) { // Original name: value, environment: var5
            _fun95526: for (var _fun95526_ip = 0;;) switch (_fun95526_ip) {
                case 0:
                    var5 = arg0;
                    var0 = arg1;
                    var0 = var0.publishedOnly;
                    var1 = null;
                    if (!(var1 != var5)) {
                        _fun95526_ip = 66;
                        continue _fun95526
                    }
                case 20:
                    var2 = _closure1_slot12;
                    var1 = var2.values;
                    if (var0) {
                        _fun95526_ip = 48;
                        continue _fun95526
                    }
                case 35:
                    var4 = _closure1_slot15;
                    var0 = undefined;
                    var0 = var4.bind(var0)(var5);
                    _fun95526_ip = 59;
                    continue _fun95526;
                case 48:
                    var4 = _closure1_slot16;
                    var3 = undefined;
                    var0 = var4.bind(var3)(var5);
                case 59:
                    var0 = var1.bind(var2)(var0);
                    _fun95526_ip = 73;
                    continue _fun95526;
                case 66:
                    var0 = _closure1_slot13;
                case 73:
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getGuildProductFetchState';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun95527: for (var _fun95527_ip = 0;;) switch (_fun95527_ip) {
                case 0:
                    var2 = _closure1_slot9;
                    var0 = arg0;
                    var0 = var2[var0];
                    var2 = null;
                    if (!(var2 == var0)) {
                        _fun95527_ip = 30;
                        continue _fun95527
                    }
                case 20:
                    var1 = _closure1_slot7;
                    var0 = var1.NOT_FETCHED;
                case 30:
                    return var0;
            }
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'isGuildProductsCacheExpired';
        var4.key = var6;
        var5 = function(arg0) { // Original name: value, environment: var5
            _fun95528: for (var _fun95528_ip = 0;;) switch (_fun95528_ip) {
                case 0:
                    var0 = global;
                    var1 = var0.Date;
                    var0 = var1.now;
                    var2 = var0.bind(var1)();
                    var3 = _closure1_slot10;
                    var1 = arg0;
                    var3 = var3[var1];
                    var1 = null;
                    var4 = var1 != var3;
                    var1 = 0;
                    if (!var4) {
                        _fun95528_ip = 45;
                        continue _fun95528
                    }
                case 42:
                    var1 = var3;
                case 45:
                    var1 = var2 - var1;
                    var0 = _closure1_slot11;
                    var0 = var1 > var0;
                    return var0;
            }
        };
        var4.value = var5;
        var0[4] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var9 = var3.bind(var0)(var9);
    var3 = 'GuildProductsStore';
    var9.displayName = var3;
    var3 = 9;
    var3 = var6[var3];
    var14 = var8.bind(var0)(var3);
    var3 = {};
    var10 = function() { // Original name: handleConnectionOpen, environment: var7
        var2 = _closure1_slot12;
        var0 = var2.clear;
        var0 = var0.bind(var2)();
        var0 = {};
        _closure1_slot8 = var0;
        var0 = {};
        _closure1_slot9 = var0;
        var0 = {};
        _closure1_slot10 = var0;
        var0 = undefined;
        return var0;
    };
    var3.CONNECTION_OPEN = var10;
    var10 = function(arg0) { // Original name: handleFetchGuildProducts, environment: var7
        var0 = arg0;
        var4 = var0.guildId;
        var2 = _closure1_slot8;
        var1 = _closure1_slot7;
        var1 = var1.FETCHING;
        var2[var4] = var1;
        var3 = _closure1_slot12;
        var2 = var3.values;
        var1 = _closure1_slot15;
        var0 = undefined;
        var1 = var1.bind(var0)(var4);
        var6 = var2.bind(var3)(var1);
        var3 = new Array(0);
        var5 = 0;
        var7 = var3;
        var1 = arraySpread(var7, var6, var5);
        var2 = var3.forEach;
        var1 = function(arg0) { // Environment: var1
            var2 = _closure1_slot12;
            var1 = var2.delete;
            var0 = arg0;
            var0 = var0.id;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var3.GUILD_PRODUCTS_FETCH = var10;
    var10 = function(arg0) { // Original name: handleFetchProductsSuccess, environment: var7
        var0 = arg0;
        var3 = var0.guildId;
        var2 = var0.products;
        var4 = _closure1_slot8;
        var1 = _closure1_slot7;
        var1 = var1.FETCHED;
        var4[var3] = var1;
        var1 = _closure1_slot10;
        var0 = global;
        var4 = var0.Date;
        var0 = var4.now;
        var0 = var0.bind(var4)();
        var1[var3] = var0;
        var1 = var2.forEach;
        var0 = function(arg0) { // Environment: var0
            var1 = arg0;
            var4 = _closure1_slot12;
            var3 = var4.set;
            var2 = var1.id;
            var2 = var3.bind(var4)(var2, var1);
            var2 = _closure1_slot9;
            var1 = var1.id;
            var0 = _closure1_slot7;
            var0 = var0.FETCHED;
            var2[var1] = var0;
            var0 = undefined;
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var3.GUILD_PRODUCTS_FETCH_SUCCESS = var10;
    var10 = function(arg0) { // Original name: handleFetchProductsFailure, environment: var7
        var0 = arg0;
        var2 = var0.guildId;
        var1 = _closure1_slot8;
        var0 = _closure1_slot7;
        var0 = var0.FETCHED;
        var1[var2] = var0;
        var0 = undefined;
        return var0;
    };
    var3.GUILD_PRODUCTS_FETCH_FAILURE = var10;
    var10 = function(arg0) { // Original name: handleCreateProduct, environment: var7
        var0 = arg0;
        var3 = var0.product;
        var2 = _closure1_slot12;
        var1 = var2.set;
        var0 = var3.id;
        var0 = var1.bind(var2)(var0, var3);
        var0 = undefined;
        return var0;
    };
    var3.GUILD_PRODUCT_CREATE = var10;
    var10 = function(arg0) { // Original name: handleUpdateProduct, environment: var7
        var0 = arg0;
        var3 = var0.product;
        var2 = _closure1_slot12;
        var1 = var2.set;
        var0 = var3.id;
        var0 = var1.bind(var2)(var0, var3);
        var0 = undefined;
        return var0;
    };
    var3.GUILD_PRODUCT_UPDATE = var10;
    var10 = function(arg0) { // Original name: handleDeleteProduct, environment: var7
        var0 = arg0;
        var2 = var0.productId;
        var1 = _closure1_slot12;
        var0 = var1.delete;
        var0 = var0.bind(var1)(var2);
        var0 = undefined;
        return var0;
    };
    var3.GUILD_PRODUCT_DELETE = var10;
    var10 = function(arg0) { // Original name: handleFetchGuildProduct, environment: var7
        var0 = arg0;
        var2 = var0.productId;
        var1 = _closure1_slot9;
        var0 = _closure1_slot7;
        var0 = var0.FETCHING;
        var1[var2] = var0;
        var0 = undefined;
        return var0;
    };
    var3.GUILD_PRODUCT_FETCH = var10;
    var10 = function(arg0) { // Original name: handleFetchProductSuccess, environment: var7
        var0 = arg0;
        var3 = var0.product;
        var4 = _closure1_slot9;
        var2 = var3.id;
        var1 = _closure1_slot7;
        var1 = var1.FETCHED;
        var4[var2] = var1;
        var2 = _closure1_slot12;
        var1 = var2.set;
        var0 = var3.id;
        var0 = var1.bind(var2)(var0, var3);
        var0 = undefined;
        return var0;
    };
    var3.GUILD_PRODUCT_FETCH_SUCCESS = var10;
    var7 = function(arg0) { // Original name: handleFetchProductFailure, environment: var7
        _fun95540: for (var _fun95540_ip = 0;;) switch (_fun95540_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.productId;
                var1 = var0.error;
                var4 = _closure1_slot9;
                var3 = _closure1_slot7;
                var3 = var3.FETCHED;
                var4[var2] = var3;
                var3 = var1.status;
                var1 = 404;
                if (!(var1 === var3)) {
                    _fun95540_ip = 64;
                    continue _fun95540
                }
            case 50:
                var1 = _closure1_slot12;
                var0 = var1.delete;
                var0 = var0.bind(var1)(var2);
            case 64:
                var0 = undefined;
                return var0;
        }
    };
    var3.GUILD_PRODUCT_FETCH_FAILURE = var7;
    var7 = var9.prototype;
    var7 = Object.create(var7, {
        constructor: {
            value: var9
        }
    });
    var15 = var7;
    var13 = var3;
    var3 = new var15[var9](var14, var13, var12);
    var3 = var3 instanceof Object ? var3 : var7;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_products/GuildProductsStore.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.FetchState = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 667, 21, 3046, 566, 806, 2]);