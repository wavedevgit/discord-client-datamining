// modules/app_database/stores/BasicChannelCacheStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var1
        _fun15952: for (var _fun15952_ip = 0;;) switch (_fun15952_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun15952_ip = 46;
                    continue _fun15952
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun15952_ip = 55;
                    continue _fun15952
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun15952_ip = 343;
                    continue _fun15952
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun15952_ip = 323;
                    continue _fun15952
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun15952_ip = 283;
                    continue _fun15952
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun15952_ip = 270;
                    continue _fun15952
                }
            case 110:
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
                    _fun15952_ip = 163;
                    continue _fun15952
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun15952_ip = 179;
                    continue _fun15952
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun15952_ip = 249;
                    continue _fun15952
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun15952_ip = 249;
                    continue _fun15952
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun15952_ip = 234;
                    continue _fun15952
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun15952_ip = 247;
                    continue _fun15952
                }
            case 234:
                var8 = _closure1_slot10;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun15952_ip = 265;
                continue _fun15952;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun15952_ip = 283;
                continue _fun15952;
            case 270:
                var6 = _closure1_slot10;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun15952_ip = 323;
                    continue _fun15952
                }
            case 289:
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
            case 323:
                if (!var3) {
                    _fun15952_ip = 330;
                    continue _fun15952
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun15953: for (var _fun15953_ip = 0;;) switch (_fun15953_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun15953_ip = 56;
                                continue _fun15953
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
                            _fun15953_ip = 67;
                            continue _fun15953;
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
            case 343:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot9 = var0;
    var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var1
        _fun15954: for (var _fun15954_ip = 0;;) switch (_fun15954_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun15954_ip = 23;
                    continue _fun15954
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun15954_ip = 33;
                    continue _fun15954
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
                    _fun15954_ip = 70;
                    continue _fun15954
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun15954_ip = 55;
                    continue _fun15954
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot10 = var0;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var1
        _fun15955: for (var _fun15955_ip = 0;;) switch (_fun15955_ip) {
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
                _fun15955_ip = 74;
                continue _fun15955;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
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
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var4[var0];
    var0 = undefined;
    var3 = var5.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 6;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 7;
    var3 = var4[var3];
    var7 = var5.bind(var0)(var3);
    var3 = var7.prototype;
    var11 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var10 = 'BasicChannelCacheStore';
    var3 = new var11[var7](var10, var9);
    var3 = 9;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.Store;
    var1 = function(arg0) { // Environment: var1
        var3 = function() { // Original name: BasicChannelCacheStore, environment: var5
            _fun15959: for (var _fun15959_ip = 0;;) switch (_fun15959_ip) {
                case 0:
                    var4 = this;
                    var0 = _closure1_slot3;
                    var2 = _closure2_slot0;
                    var3 = undefined;
                    var0 = var0.bind(var3)(var4, var2);
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var0 = 8;
                    var0 = var7[var0];
                    var0 = var6.bind(var3)(var0);
                    var9 = new Array(2);
                    var9[0] = var0;
                    var0 = {};
                    var6 = function(arg0) { // Original name: CACHE_LOADED_LAZY_NO_CACHE, environment: var1
                        var2 = _closure3_slot0;
                        var1 = var2.handleCacheLoadedLazyNoCache;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.CACHE_LOADED_LAZY_NO_CACHE = var6;
                    var6 = function(arg0) { // Original name: CACHE_LOADED_LAZY, environment: var1
                        var2 = _closure3_slot0;
                        var1 = var2.handleCacheLoadedLazy;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.CACHE_LOADED_LAZY = var6;
                    var6 = function(arg0) { // Original name: CONNECTION_OPEN, environment: var1
                        var2 = _closure3_slot0;
                        var1 = var2.handleConnectionOpen;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.CONNECTION_OPEN = var6;
                    var6 = function(arg0) { // Original name: LOGOUT, environment: var1
                        var2 = _closure3_slot0;
                        var1 = var2.handleLogout;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.LOGOUT = var6;
                    var9[1] = var0;
                    var0 = _closure1_slot6;
                    var8 = var0.bind(var3)(var2);
                    var2 = _closure1_slot5;
                    var0 = _closure1_slot11;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun15959_ip = 138;
                        continue _fun15959
                    }
                case 125:
                    var0 = var8.apply;
                    var0 = var0.bind(var8)(var4, var9);
                    _fun15959_ip = 172;
                    continue _fun15959;
                case 138:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot6;
                    var5 = var5.bind(var3)(var4);
                    var5 = var5.constructor;
                    var0 = var6.bind(var7)(var8, var9, var5);
                case 172:
                    var0 = var2.bind(var3)(var4, var0);
                    var _closure3_slot0 = var0;
                    var1 = global;
                    var2 = var1.Map;
                    var3 = var2.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var2
                        }
                    });
                    var13 = var3;
                    var2 = new var13[var2](var12);
                    var2 = var2 instanceof Object ? var2 : var3;
                    var0.channels = var2;
                    var1 = var1.Map;
                    var2 = var1.prototype;
                    var2 = Object.create(var2, {
                        constructor: {
                            value: var1
                        }
                    });
                    var13 = var2;
                    var1 = new var13[var1](var12);
                    var1 = var1 instanceof Object ? var1 : var2;
                    var0.guilds = var1;
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
        var0 = 'hasChannel';
        var4.key = var0;
        var0 = function(arg0) { // Original name: value, environment: var5
            var0 = this;
            var2 = var0.channels;
            var1 = var2.has;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var0;
        var0 = new Array(12);
        var0[0] = var4;
        var4 = {};
        var6 = 'hasGuild';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            var0 = this;
            var2 = var0.guilds;
            var1 = var2.has;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getBasicChannel';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun15966: for (var _fun15966_ip = 0;;) switch (_fun15966_ip) {
                case 0:
                    var0 = this;
                    var2 = var0.channels;
                    var1 = var2.get;
                    var0 = arg0;
                    var1 = var1.bind(var2)(var0);
                    var0 = null;
                    var2 = var0 != var1;
                    if (!var2) {
                        _fun15966_ip = 34;
                        continue _fun15966
                    }
                case 31:
                    var0 = var1;
                case 34:
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getGuildBasicChannels';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun15967: for (var _fun15967_ip = 0;;) switch (_fun15967_ip) {
                case 0:
                    var0 = this;
                    var2 = var0.guilds;
                    var1 = var2.get;
                    var0 = arg0;
                    var1 = var1.bind(var2)(var0);
                    var0 = null;
                    var2 = var0 != var1;
                    if (!var2) {
                        _fun15967_ip = 34;
                        continue _fun15967
                    }
                case 31:
                    var0 = var1;
                case 34:
                    return var0;
            }
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'invalidate';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            var2 = this;
            var1 = var2.delete;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'restored';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            var2 = this;
            var1 = var2.delete;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'initialize';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var2 = this;
            var1 = var2.waitFor;
            var0 = _closure1_slot8;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'handleCacheLoadedLazy';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun15971: for (var _fun15971_ip = 0;;) switch (_fun15971_ip) {
                case 0:
                    var9 = this;
                    var8 = global;
                    var0 = var8.Map;
                    var1 = var0.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var0
                        }
                    });
                    var20 = var1;
                    var0 = new var20[var0](var19);
                    var0 = var0 instanceof Object ? var0 : var1;
                    var9.guilds = var0;
                    var0 = var8.Map;
                    var1 = var0.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var0
                        }
                    });
                    var20 = var1;
                    var0 = new var20[var0](var19);
                    var0 = var0 instanceof Object ? var0 : var1;
                    var9.channels = var0;
                    var2 = _closure1_slot9;
                    var0 = arg0;
                    var1 = var0.basicGuildChannels;
                    var0 = undefined;
                    var6 = var2.bind(var0)(var1);
                    var2 = var6.bind(var0)();
                    var1 = var2.done;
                    var5 = 2;
                    var4 = 0;
                    var3 = 1;
                    if (var1) {
                        _fun15971_ip = 270;
                        continue _fun15971
                    }
                case 117:
                    var11 = var2.value;
                    var1 = _closure1_slot2;
                    var1 = var1.bind(var0)(var11, var5);
                    var14 = var1[var4];
                    var11 = var1[var3];
                    var13 = var9.guilds;
                    var12 = var13.set;
                    var16 = var8.Object;
                    var15 = var16.fromEntries;
                    var17 = var11.map;
                    var1 = function(arg0) { // Environment: var10
                        var1 = arg0;
                        var2 = var1.id;
                        var0 = new Array(2);
                        var0[0] = var2;
                        var0[1] = var1;
                        return var0;
                    };
                    var1 = var17.bind(var11)(var1);
                    var1 = var15.bind(var16)(var1);
                    var1 = var12.bind(var13)(var14, var1);
                    var1 = _closure1_slot9;
                    var12 = var1.bind(var0)(var11);
                    var11 = var12.bind(var0)();
                    var1 = var11.done;
                    if (var1) {
                        _fun15971_ip = 252;
                        continue _fun15971
                    }
                case 210:
                    var15 = var11.value;
                    var14 = var9.channels;
                    var13 = var14.set;
                    var1 = var15.id;
                    var1 = var13.bind(var14)(var1, var15);
                    var13 = var12.bind(var0)();
                    var1 = var13.done;
                    var11 = var13;
                    if (!var1) {
                        _fun15971_ip = 210;
                        continue _fun15971
                    }
                case 252:
                    var11 = var6.bind(var0)();
                    var1 = var11.done;
                    var2 = var11;
                    if (!var1) {
                        _fun15971_ip = 117;
                        continue _fun15971
                    }
                case 270:
                    return var0;
            }
        };
        var4.value = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'handleCacheLoadedLazyNoCache';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = this;
            var2 = var0.guilds;
            var1 = var2.clear;
            var1 = var1.bind(var2)();
            var1 = var0.channels;
            var0 = var1.clear;
            var0 = var0.bind(var1)();
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[8] = var4;
        var4 = {};
        var6 = 'handleConnectionOpen';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            _fun15974: for (var _fun15974_ip = 0;;) switch (_fun15974_ip) {
                case 0:
                    var5 = this;
                    var2 = _closure1_slot8;
                    var1 = var2.allGuildIds;
                    var4 = var1.bind(var2)();
                    var2 = _closure1_slot9;
                    var1 = var5.guilds;
                    var0 = var1.keys;
                    var1 = var0.bind(var1)();
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.bind(var0)();
                    var1 = var2.done;
                    if (var1) {
                        _fun15974_ip = 101;
                        continue _fun15974
                    }
                case 58:
                    var6 = var2.value;
                    var1 = var4.has;
                    var1 = var1.bind(var4)(var6);
                    if (var1) {
                        _fun15974_ip = 86;
                        continue _fun15974
                    }
                case 76:
                    var1 = var5.delete;
                    var1 = var1.bind(var5)(var6);
                case 86:
                    var6 = var3.bind(var0)();
                    var1 = var6.done;
                    var2 = var6;
                    if (!var1) {
                        _fun15974_ip = 58;
                        continue _fun15974
                    }
                case 101:
                    return var0;
            }
        };
        var4.value = var6;
        var0[9] = var4;
        var4 = {};
        var6 = 'handleLogout';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = this;
            var2 = var0.guilds;
            var1 = var2.clear;
            var1 = var1.bind(var2)();
            var1 = var0.channels;
            var0 = var1.clear;
            var0 = var0.bind(var1)();
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[10] = var4;
        var4 = {};
        var6 = 'delete';
        var4.key = var6;
        var5 = function(arg0) { // Original name: value, environment: var5
            _fun15976: for (var _fun15976_ip = 0;;) switch (_fun15976_ip) {
                case 0:
                    var2 = arg0;
                    var0 = this;
                    var7 = var0.guilds;
                    var1 = var7.get;
                    var1 = var1.bind(var7)(var2);
                    var7 = null;
                    if (!(var7 == var1)) {
                        _fun15976_ip = 30;
                        continue _fun15976
                    }
                case 28:
                    var1 = {};
                case 30:
                    var5 = var1;
                    for (var1 in var5)
                        case 41: {
                            case 50: var9 = var1;
                            var8 = var0.channels;
                            var7 = var8.delete;
                            var7 = var7.bind(var8)(var9);
                            _fun15976_ip = 41;
                            continue _fun15976;
                        }
                case 71:
                    var1 = var0.guilds;
                    var0 = var1.delete;
                    var0 = var0.bind(var1)(var2);
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var5;
        var0[11] = var4;
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
    var11 = var3;
    var1 = new var11[var1](var10);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 10;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/app_database/stores/BasicChannelCacheStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 6, 7, 15, 17, 18, 1374, 3, 806, 566, 2]);