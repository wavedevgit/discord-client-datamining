// stores/GuildMembershipStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var1
        _fun15975: for (var _fun15975_ip = 0;;) switch (_fun15975_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun15975_ip = 45;
                    continue _fun15975
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 45:
                if (var1) {
                    _fun15975_ip = 54;
                    continue _fun15975
                }
            case 48:
                var1 = var2["@@iterator"];
            case 54:
                if (var1) {
                    _fun15975_ip = 342;
                    continue _fun15975
                }
            case 60:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun15975_ip = 322;
                    continue _fun15975
                }
            case 85:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun15975_ip = 282;
                    continue _fun15975
                }
            case 95:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun15975_ip = 269;
                    continue _fun15975
                }
            case 109:
                var6 = {};
                var8 = var6.toString;
                var6 = var8.call;
                var10 = var6.bind(var8)(var2);
                var9 = var10.slice;
                var8 = 8;
                var6 = -1;
                var8 = var9.bind(var10)(var8, var6);
                var6 = 'Object';
                var6 = var6 === var8;
                if (!var6) {
                    _fun15975_ip = 162;
                    continue _fun15975
                }
            case 157:
                var6 = var2.constructor;
            case 162:
                var9 = var8;
                if (!var6) {
                    _fun15975_ip = 178;
                    continue _fun15975
                }
            case 168:
                var6 = var2.constructor;
                var9 = var6.name;
            case 178:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun15975_ip = 248;
                    continue _fun15975
                }
            case 186:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun15975_ip = 248;
                    continue _fun15975
                }
            case 194:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun15975_ip = 233;
                    continue _fun15975
                }
            case 204:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun15975_ip = 246;
                    continue _fun15975
                }
            case 233:
                var8 = _closure1_slot9;
                var6 = var8.bind(var7)(var2, var7);
            case 246:
                _fun15975_ip = 264;
                continue _fun15975;
            case 248:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 264:
                var5 = var6;
                _fun15975_ip = 282;
                continue _fun15975;
            case 269:
                var6 = _closure1_slot9;
                var5 = var6.bind(var7)(var2, var7);
            case 282:
                var3 = var5;
                if (var3) {
                    _fun15975_ip = 322;
                    continue _fun15975
                }
            case 288:
                var6 = var4.TypeError;
                var4 = var6.prototype;
                var5 = Object.create(var4, {
                    constructor: {
                        value: var6
                    }
                });
                var12 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
                var13 = var5;
                var4 = new var13[var6](var12, var11);
                var4 = var4 instanceof Object ? var4 : var5;
                throw var4;
            case 322:
                if (!var3) {
                    _fun15975_ip = 329;
                    continue _fun15975
                }
            case 325:
                _closure2_slot0 = var3;
            case 329:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun15976: for (var _fun15976_ip = 0;;) switch (_fun15976_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun15976_ip = 56;
                                continue _fun15976
                            }
                        case 20:
                            var0 = {};
                            var1 = false;
                            var0.done = var1;
                            var2 = _closure2_slot0;
                            var1 = _closure2_slot1;
                            var1 = parseFloat(var1);
                            var3 = var1 + 1;
                            _closure2_slot1 = var3;
                            var1 = var2[var1];
                            var0.value = var1;
                            _fun15976_ip = 67;
                            continue _fun15976;
                        case 56:
                            var1 = {};
                            var2 = true;
                            var1.done = var2;
                            var0 = var1;
                        case 67:
                            return var0;
                    }
                };
                return var0;
            case 342:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot8 = var0;
    var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var1
        _fun15977: for (var _fun15977_ip = 0;;) switch (_fun15977_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun15977_ip = 23;
                    continue _fun15977
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun15977_ip = 33;
                    continue _fun15977
                }
            case 28:
                var1 = var3.length;
            case 33:
                var0 = global;
                var0 = var0.Array;
                var0 = var0.bind(var2)(var1);
                var2 = 0;
                var4 = var2 < var1;
                if (!var4) {
                    _fun15977_ip = 70;
                    continue _fun15977
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun15977_ip = 55;
                    continue _fun15977
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot9 = var0;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var1
        _fun15978: for (var _fun15978_ip = 0;;) switch (_fun15978_ip) {
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
                _fun15978_ip = 74;
                continue _fun15978;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
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
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var3 = var3.Store;
    var1 = function(arg0) { // Environment: var1
        var3 = function() { // Original name: GuildMembershipStore, environment: var5
            _fun15982: for (var _fun15982_ip = 0;;) switch (_fun15982_ip) {
                case 0:
                    var4 = this;
                    var0 = _closure1_slot3;
                    var2 = _closure2_slot0;
                    var3 = undefined;
                    var0 = var0.bind(var3)(var4, var2);
                    var8 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var0 = 5;
                    var6 = var7[var0];
                    var6 = var8.bind(var3)(var6);
                    var9 = new Array(3);
                    var9[0] = var6;
                    var6 = {};
                    var8 = function(arg0) { // Original name: CACHE_LOADED, environment: var1
                        var2 = _closure3_slot0;
                        var1 = var2.handleCacheLoaded;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var6.CACHE_LOADED = var8;
                    var8 = function(arg0) { // Original name: CACHE_LOADED_LAZY, environment: var1
                        var2 = _closure3_slot0;
                        var1 = var2.handleCacheLoadedLazy;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var6.CACHE_LOADED_LAZY = var8;
                    var8 = function(arg0) { // Original name: CONNECTION_OPEN, environment: var1
                        var2 = _closure3_slot0;
                        var1 = var2.handleConnectionOpen;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var6.CONNECTION_OPEN = var8;
                    var8 = function(arg0) { // Original name: GUILD_CREATE, environment: var1
                        var2 = _closure3_slot0;
                        var1 = var2.handleGuildCreate;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var6.GUILD_CREATE = var8;
                    var8 = function(arg0) { // Original name: GUILD_DELETE, environment: var1
                        var2 = _closure3_slot0;
                        var1 = var2.handleGuildDelete;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var6.GUILD_DELETE = var8;
                    var9[1] = var6;
                    var6 = _closure1_slot0;
                    var0 = var7[var0];
                    var0 = var6.bind(var3)(var0);
                    var0 = var0.DispatchBand;
                    var0 = var0.Early;
                    var9[2] = var0;
                    var0 = _closure1_slot6;
                    var8 = var0.bind(var3)(var2);
                    var2 = _closure1_slot5;
                    var0 = _closure1_slot10;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun15982_ip = 177;
                        continue _fun15982
                    }
                case 164:
                    var0 = var8.apply;
                    var0 = var0.bind(var8)(var4, var9);
                    _fun15982_ip = 211;
                    continue _fun15982;
                case 177:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot6;
                    var5 = var5.bind(var3)(var4);
                    var5 = var5.constructor;
                    var0 = var6.bind(var7)(var8, var9, var5);
                case 211:
                    var0 = var2.bind(var3)(var4, var0);
                    var _closure3_slot0 = var0;
                    var1 = global;
                    var1 = var1.Set;
                    var2 = var1.prototype;
                    var2 = Object.create(var2, {
                        constructor: {
                            value: var1
                        }
                    });
                    var13 = var2;
                    var1 = new var13[var1](var12);
                    var1 = var1 instanceof Object ? var1 : var2;
                    var0.guildIds = var1;
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
        var0 = 'allGuildIds';
        var4.key = var0;
        var0 = function() { // Original name: value, environment: var5
            var0 = this;
            var0 = var0.guildIds;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(7);
        var0[0] = var4;
        var4 = {};
        var6 = 'isMember';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            var0 = this;
            var2 = var0.guildIds;
            var1 = var2.has;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'handleConnectionOpen';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            var1 = arg0;
            var0 = global;
            var2 = var0.Set;
            var4 = var1.guilds;
            var3 = var4.map;
            var0 = function(arg0) { // Environment: var0
                var0 = arg0;
                var0 = var0.id;
                return var0;
            };
            var6 = var3.bind(var4)(var0);
            var0 = new Array(0);
            var5 = 0;
            var7 = var0;
            var5 = arraySpread(var7, var6, var5);
            var6 = var1.unavailableGuilds;
            var7 = var0;
            var1 = arraySpread(var7, var6, var5);
            var1 = var2.prototype;
            var1 = Object.create(var1, {
                constructor: {
                    value: var2
                }
            });
            var8 = var1;
            var7 = var0;
            var0 = new var8[var2](var7, var6);
            var1 = var0 instanceof Object ? var0 : var1;
            var0 = this;
            var0.guildIds = var1;
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'handleCacheLoaded';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            var0 = global;
            var2 = var0.Set;
            var0 = arg0;
            var3 = var0.guilds;
            var1 = var3.map;
            var0 = function(arg0) { // Environment: var0
                var0 = arg0;
                var0 = var0.id;
                return var0;
            };
            var4 = var1.bind(var3)(var0);
            var1 = var2.prototype;
            var1 = Object.create(var1, {
                constructor: {
                    value: var2
                }
            });
            var5 = var1;
            var0 = new var5[var2](var4, var3);
            var1 = var0 instanceof Object ? var0 : var1;
            var0 = this;
            var0.guildIds = var1;
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'handleCacheLoadedLazy';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun15994: for (var _fun15994_ip = 0;;) switch (_fun15994_ip) {
                case 0:
                    var4 = this;
                    var2 = _closure1_slot8;
                    var0 = arg0;
                    var1 = var0.guilds;
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.bind(var0)();
                    var1 = var2.done;
                    if (var1) {
                        _fun15994_ip = 79;
                        continue _fun15994
                    }
                case 38:
                    var1 = var2.value;
                    var6 = var4.guildIds;
                    var5 = var6.add;
                    var1 = var1.id;
                    var1 = var5.bind(var6)(var1);
                    var5 = var3.bind(var0)();
                    var1 = var5.done;
                    var2 = var5;
                    if (!var1) {
                        _fun15994_ip = 38;
                        continue _fun15994
                    }
                case 79:
                    return var0;
            }
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'handleGuildCreate';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            var0 = this;
            var2 = var0.guildIds;
            var1 = var2.add;
            var0 = arg0;
            var0 = var0.guild;
            var0 = var0.id;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'handleGuildDelete';
        var4.key = var6;
        var5 = function(arg0) { // Original name: value, environment: var5
            _fun15996: for (var _fun15996_ip = 0;;) switch (_fun15996_ip) {
                case 0:
                    var0 = arg0;
                    var1 = var0.guild;
                    var2 = var1.unavailable;
                    var1 = true;
                    if (!(var1 !== var2)) {
                        _fun15996_ip = 49;
                        continue _fun15996
                    }
                case 20:
                    var1 = this;
                    var2 = var1.guildIds;
                    var1 = var2.delete;
                    var0 = var0.guild;
                    var0 = var0.id;
                    var0 = var1.bind(var2)(var0);
                case 49:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var5;
        var0[6] = var4;
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
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'stores/GuildMembershipStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 806, 566, 2]);