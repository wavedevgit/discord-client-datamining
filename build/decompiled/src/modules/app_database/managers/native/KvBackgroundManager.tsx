// modules/app_database/managers/native/KvBackgroundManager.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function arg0, arg1() {
        _fun112949: for (var _fun112949_ip = 0;;) switch (_fun112949_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun112949_ip = 46;
                    continue _fun112949
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun112949_ip = 55;
                    continue _fun112949
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun112949_ip = 345;
                    continue _fun112949
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun112949_ip = 323;
                    continue _fun112949
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun112949_ip = 283;
                    continue _fun112949
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun112949_ip = 270;
                    continue _fun112949
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
                    _fun112949_ip = 163;
                    continue _fun112949
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun112949_ip = 179;
                    continue _fun112949
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun112949_ip = 249;
                    continue _fun112949
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun112949_ip = 249;
                    continue _fun112949
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun112949_ip = 234;
                    continue _fun112949
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun112949_ip = 247;
                    continue _fun112949
                }
            case 234:
                var8 = _closure1_slot18;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun112949_ip = 265;
                continue _fun112949;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun112949_ip = 283;
                continue _fun112949;
            case 270:
                var6 = _closure1_slot18;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun112949_ip = 323;
                    continue _fun112949
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
                    _fun112949_ip = 330;
                    continue _fun112949
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun112950: for (var _fun112950_ip = 0;;) switch (_fun112950_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun112950_ip = 56;
                                continue _fun112950
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
                            _fun112950_ip = 67;
                            continue _fun112950;
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
            case 345:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot17 = var0;
    var0 = function arg0, arg1() {
        _fun112951: for (var _fun112951_ip = 0;;) switch (_fun112951_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun112951_ip = 23;
                    continue _fun112951
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun112951_ip = 33;
                    continue _fun112951
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
                    _fun112951_ip = 70;
                    continue _fun112951
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun112951_ip = 55;
                    continue _fun112951
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot18 = var0;
    var0 = function() {
        _fun112952: for (var _fun112952_ip = 0;;) switch (_fun112952_ip) {
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
                _fun112952_ip = 76;
                continue _fun112952;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot19 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot19 = var0;
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
    var7 = 5;
    var3 = var5[var7];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Platform;
    var3 = 8;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 9;
    var8 = var5[var3];
    var8 = var4.bind(var0)(var8);
    var9 = var8.MAXIMUM_MESSAGES_PER_CHANNEL_DEFAULT;
    var _closure1_slot11 = var9;
    var8 = var8.MAXIMUM_MESSAGES_PER_CHANNEL_EVER;
    var _closure1_slot12 = var8;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot13 = var3;
    var3 = 10;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot14 = var3;
    var3 = 11;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var3 = var3.Millis;
    var3 = var3.MINUTE;
    var3 = var7 * var3;
    var _closure1_slot15 = var3;
    var3 = 12;
    var3 = var5[var3];
    var8 = var6.bind(var0)(var3);
    var3 = var8.prototype;
    var7 = Object.create(var3, {
        constructor: {
            value: var8
        }
    });
    var12 = 'KvBackgroundManager';
    var13 = var7;
    var3 = new var13[var8](var12, var11);
    var3 = var3 instanceof Object ? var3 : var7;
    var _closure1_slot16 = var3;
    var3 = 17;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var3 = function arg0() {
            _fun112956: for (var _fun112956_ip = 0;;) switch (_fun112956_ip) {
                case 0:
                    var5 = this;
                    var3 = 0;
                    var13 = 0;
                    var0 = copyRestArgs(var13);
                    var7 = _closure1_slot5;
                    var1 = _closure2_slot3;
                    var4 = undefined;
                    var7 = var7.bind(var4)(var5, var1);
                    var10 = new Array(0);
                    var13 = var10;
                    var12 = var0;
                    var11 = 0;
                    var0 = arraySpread(var13, var12, var11);
                    var0 = _closure1_slot8;
                    var9 = var0.bind(var4)(var1);
                    var1 = _closure1_slot7;
                    var0 = _closure1_slot19;
                    var0 = var0.bind(var4)();
                    if (var0) {
                        _fun112956_ip = 88;
                        continue _fun112956
                    }
                case 75:
                    var0 = var9.apply;
                    var0 = var0.bind(var9)(var5, var10);
                    _fun112956_ip = 122;
                    continue _fun112956;
                case 88:
                    var7 = global;
                    var8 = var7.Reflect;
                    var7 = var8.construct;
                    var6 = _closure1_slot8;
                    var6 = var6.bind(var4)(var5);
                    var6 = var6.constructor;
                    var0 = var7.bind(var8)(var9, var10, var6);
                case 122:
                    var0 = var1.bind(var4)(var5, var0);
                    var _closure3_slot0 = var0;
                    var1 = false;
                    var0.isCleaning = var1;
                    var0.lastDeepClean = var3;
                    var0.hasConnected = var1;
                    var0.applicationActive = var1;
                    var1 = {};
                    var3 = function arg0() {
                        var2 = _closure3_slot0;
                        var1 = var2.handleAppStateUpdate;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var1.APP_STATE_UPDATE = var3;
                    var3 = function arg0() {
                        var2 = _closure3_slot0;
                        var1 = var2.handleLogout;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var1.LOGOUT = var3;
                    var3 = function arg0() {
                        var2 = _closure3_slot0;
                        var1 = var2.handlePostConnectionOpen;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var1.POST_CONNECTION_OPEN = var3;
                    var0.actions = var1;
                    var1 = {};
                    var3 = function arg0() {
                        var1 = arg0;
                        var _closure4_slot0 = var1;
                        var2 = _closure1_slot4;
                        var1 = undefined;
                        var0 = function*() { // Environment: var0
                            var0 = function*() { // Original name: ?anon_0_, environment: var0
                                _fun112962: for (var _fun112962_ip = 0;;) switch (_fun112962_ip) {
                                    case 0:
                                        StartGenerator();
                                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                                        if (var2) {
                                            _fun112962_ip = 181;
                                            continue _fun112962
                                        }
                                    case 12:
                                        var2 = undefined;
                                        var _closure6_slot0 = var2;
                                        var _closure6_slot1 = var2;
                                        var _closure6_slot2 = var2;
                                        var6 = _closure1_slot1;
                                        var8 = _closure1_slot2;
                                        var5 = 13;
                                        var3 = var8[var5];
                                        var10 = var6.bind(var2)(var3);
                                        var9 = var10.channels;
                                        var7 = _closure4_slot0;
                                        var9 = var9.bind(var10)(var7);
                                        _closure6_slot0 = var9;
                                        var9 = var8[var5];
                                        var10 = var6.bind(var2)(var9);
                                        var9 = var10.messages;
                                        var9 = var9.bind(var10)(var7);
                                        _closure6_slot1 = var9;
                                        var5 = var8[var5];
                                        var6 = var6.bind(var2)(var5);
                                        var5 = var6.channelsTemp;
                                        var5 = var5.bind(var6)(var7);
                                        _closure6_slot2 = var5;
                                        var5 = _closure1_slot13;
                                        var4 = var5.canEvictOrphans;
                                        var4 = var4.bind(var5)();
                                        if (!var4) {
                                            _fun112962_ip = 175;
                                            continue _fun112962
                                        }
                                    case 138:
                                        var5 = _closure4_slot0;
                                        var4 = var5.transaction;
                                        var3 = function(arg0) { // Environment: var1
                                            _fun112963: for (var _fun112963_ip = 0;;) switch (_fun112963_ip) {
                                                case 0:
                                                    var2 = arg0;
                                                    var1 = _closure6_slot1;
                                                    var0 = var1.upgradeTransaction;
                                                    var5 = var0.bind(var1)(var2);
                                                    var1 = _closure6_slot2;
                                                    var0 = var1.upgradeTransaction;
                                                    var2 = var0.bind(var1)(var2);
                                                    var6 = _closure1_slot17;
                                                    var4 = _closure1_slot13;
                                                    var0 = var4.getSaveableChannels;
                                                    var4 = var0.bind(var4)();
                                                    var0 = undefined;
                                                    var8 = var6.bind(var0)(var4);
                                                    var6 = var8.bind(var0)();
                                                    var4 = var6.done;
                                                    var7 = null;
                                                    if (var4) {
                                                        _fun112963_ip = 123;
                                                        continue _fun112963
                                                    }
                                                case 80:
                                                    var4 = var6.value;
                                                    var10 = var2.put;
                                                    var9 = var4.guildId;
                                                    var4 = var4.channelId;
                                                    var4 = var10.bind(var2)(var9, var4, var7);
                                                    var9 = var8.bind(var0)();
                                                    var4 = var9.done;
                                                    var6 = var9;
                                                    if (!var4) {
                                                        _fun112963_ip = 80;
                                                        continue _fun112963
                                                    }
                                                case 123:
                                                    var6 = var5.trimOrphans;
                                                    var4 = _closure6_slot0;
                                                    var4 = var4.prefix;
                                                    var4 = var6.bind(var5)(var4);
                                                    var7 = var5.trimChannelsIn;
                                                    var4 = _closure6_slot2;
                                                    var6 = var4.prefix;
                                                    var4 = _closure1_slot12;
                                                    var4 = var7.bind(var5)(var6, var4);
                                                    var4 = var5.trimChannelsNotIn;
                                                    var3 = _closure6_slot2;
                                                    var3 = var3.prefix;
                                                    var1 = _closure1_slot11;
                                                    var1 = var4.bind(var5)(var3, var1);
                                                    var1 = var2.delete;
                                                    var1 = var1.bind(var2)();
                                                    return var0;
                                            }
                                        };
                                        var1 = 'trimOrphanedChannels';
                                        var1 = var4.bind(var5)(var3, var1);
                                        SaveGenerator(address = 169);
                                    case 167:
                                        return var1;
                                    case 169:
                                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                        if (var3) {
                                            _fun112962_ip = 178;
                                            continue _fun112962
                                        }
                                    case 175:
                                        return var2;
                                    case 178:
                                        return var1;
                                    case 181:
                                        return var0;
                                }
                            };
                            return var0;
                        };
                        var0 = var2.bind(var1)(var0);
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var1.trimOrphanedChannels = var3;
                    var3 = function arg0() {
                        var1 = arg0;
                        var _closure4_slot0 = var1;
                        var2 = _closure1_slot4;
                        var1 = undefined;
                        var0 = function*() { // Environment: var0
                            var0 = function*() { // Original name: ?anon_0_, environment: var0
                                _fun112966: for (var _fun112966_ip = 0;;) switch (_fun112966_ip) {
                                    case 0:
                                        StartGenerator();
                                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                        if (var1) {
                                            _fun112966_ip = 57;
                                            continue _fun112966
                                        }
                                    case 7:
                                        var4 = _closure4_slot0;
                                        var3 = var4.transaction;
                                        var2 = function(arg0) { // Environment: var1
                                            _fun112967: for (var _fun112967_ip = 0;;) switch (_fun112967_ip) {
                                                case 0:
                                                    var11 = arg0;
                                                    var2 = _closure1_slot17;
                                                    var3 = _closure1_slot0;
                                                    var1 = _closure1_slot2;
                                                    var0 = 13;
                                                    var1 = var1[var0];
                                                    var0 = undefined;
                                                    var1 = var3.bind(var0)(var1);
                                                    var1 = var1.DEPRECATED_KEYSPACES;
                                                    var9 = var2.bind(var0)(var1);
                                                    var2 = var9.bind(var0)();
                                                    var1 = var2.done;
                                                    var8 = 2;
                                                    var7 = 0;
                                                    var6 = 1;
                                                    var5 = 14;
                                                    if (var1) {
                                                        _fun112967_ip = 187;
                                                        continue _fun112967
                                                    }
                                                case 69:
                                                    var12 = var2.value;
                                                    var1 = _closure1_slot3;
                                                    var1 = var1.bind(var0)(var12, var8);
                                                    var18 = var1[var7];
                                                    var1 = var1[var6];
                                                    var13 = _closure1_slot0;
                                                    var12 = _closure1_slot2;
                                                    var12 = var12[var5];
                                                    var12 = var13.bind(var0)(var12);
                                                    var14 = var12.Table;
                                                    var13 = new Array(1);
                                                    var13[0] = var1;
                                                    var17 = _closure4_slot0;
                                                    var12 = var14.prototype;
                                                    var12 = Object.create(var12, {
                                                        constructor: {
                                                            value: var14
                                                        }
                                                    });
                                                    var20 = var12;
                                                    var19 = var13;
                                                    var16 = true;
                                                    var1 = new var20[var14](var19, var18, var17, var16, var15);
                                                    var12 = var1 instanceof Object ? var1 : var12;
                                                    var1 = var12.upgradeTransaction;
                                                    var12 = var1.bind(var12)(var11);
                                                    var1 = var12.delete;
                                                    var1 = var1.bind(var12)();
                                                    var12 = var9.bind(var0)();
                                                    var1 = var12.done;
                                                    var2 = var12;
                                                    if (!var1) {
                                                        _fun112967_ip = 69;
                                                        continue _fun112967
                                                    }
                                                case 187:
                                                    return var0;
                                            }
                                        };
                                        var1 = 'deleteDeprecatedKeyspaces';
                                        var1 = var3.bind(var4)(var2, var1);
                                        SaveGenerator(address = 43);
                                    case 41:
                                        return var1;
                                    case 43:
                                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                                        if (var2) {
                                            _fun112966_ip = 54;
                                            continue _fun112966
                                        }
                                    case 49:
                                        var2 = undefined;
                                        return var2;
                                    case 54:
                                        return var1;
                                    case 57:
                                        return var0;
                                }
                            };
                            return var0;
                        };
                        var0 = var2.bind(var1)(var0);
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var1.deleteDeprecatedKeyspaces = var3;
                    var3 = function arg0() {
                        var1 = arg0;
                        var _closure4_slot0 = var1;
                        var2 = _closure1_slot4;
                        var1 = undefined;
                        var0 = function*() { // Environment: var0
                            var0 = function*() { // Original name: ?anon_0_, environment: var0
                                _fun112970: for (var _fun112970_ip = 0;;) switch (_fun112970_ip) {
                                    case 0:
                                        StartGenerator();
                                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                        if (var1) {
                                            _fun112970_ip = 78;
                                            continue _fun112970
                                        }
                                    case 7:
                                        var1 = _closure1_slot14;
                                        var1 = var1.isLowDisk;
                                        if (!var1) {
                                            _fun112970_ip = 70;
                                            continue _fun112970
                                        }
                                    case 23:
                                        var2 = _closure4_slot0;
                                        var1 = var2.incrementalVacuum;
                                        var3 = var1.bind(var2)();
                                        var2 = var3.catch;
                                        var1 = function(arg0) { // Environment: var1
                                            var2 = _closure1_slot16;
                                            var1 = var2.warn;
                                            var0 = arg0;
                                            var0 = var1.bind(var2)(var0);
                                            return var0;
                                        };
                                        var1 = var2.bind(var3)(var1);
                                        SaveGenerator(address = 64);
                                    case 62:
                                        return var1;
                                    case 64:
                                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                                        if (var2) {
                                            _fun112970_ip = 75;
                                            continue _fun112970
                                        }
                                    case 70:
                                        var2 = undefined;
                                        return var2;
                                    case 75:
                                        return var1;
                                    case 78:
                                        return var0;
                                }
                            };
                            return var0;
                        };
                        var0 = var2.bind(var1)(var0);
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var1.trimLowDisk = var3;
                    var3 = function() {
                        var2 = _closure1_slot4;
                        var1 = undefined;
                        var0 = function*() { // Environment: var0
                            var0 = function*() { // Original name: ?anon_0_, environment: var0
                                _fun112974: for (var _fun112974_ip = 0;;) switch (_fun112974_ip) {
                                    case 0:
                                        StartGenerator();
                                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                        if (var1) {
                                            _fun112974_ip = 272;
                                            continue _fun112974
                                        }
                                    case 12:
                                        var2 = _closure1_slot10;
                                        var1 = var2.getUsers;
                                        var4 = var1.bind(var2)();
                                        var9 = global;
                                        var3 = var9.Set;
                                        var2 = var4.map;
                                        var1 = function(arg0) { // Environment: var11
                                            var2 = _closure1_slot1;
                                            var1 = _closure1_slot2;
                                            var0 = 15;
                                            var1 = var1[var0];
                                            var0 = undefined;
                                            var2 = var2.bind(var0)(var1);
                                            var1 = var2.databaseName;
                                            var0 = arg0;
                                            var0 = var0.id;
                                            var0 = var1.bind(var2)(var0);
                                            return var0;
                                        };
                                        var15 = var2.bind(var4)(var1);
                                        var2 = var3.prototype;
                                        var2 = Object.create(var2, {
                                            constructor: {
                                                value: var3
                                            }
                                        });
                                        var16 = var2;
                                        var1 = new var16[var3](var15, var14);
                                        var8 = var1 instanceof Object ? var1 : var2;
                                        var3 = _closure1_slot17;
                                        var4 = _closure1_slot0;
                                        var1 = _closure1_slot2;
                                        var7 = 14;
                                        var1 = var1[var7];
                                        var2 = undefined;
                                        var1 = var4.bind(var2)(var1);
                                        var4 = var1.Kv;
                                        var1 = var4.databases;
                                        var1 = var1.bind(var4)();
                                        SaveGenerator(address = 120);
                                    case 118:
                                        return var1;
                                    case 120:
                                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                                        if (var4) {
                                            _fun112974_ip = 269;
                                            continue _fun112974
                                        }
                                    case 129:
                                        var6 = var3.bind(var2)(var1);
                                        var4 = var6.bind(var2)();
                                        var3 = var4.done;
                                        var5 = 'deleting orphaned database: ';
                                        if (var3) {
                                            _fun112974_ip = 266;
                                            continue _fun112974
                                        }
                                    case 152:
                                        var13 = var4.value;
                                        var3 = var8.has;
                                        var3 = var3.bind(var8)(var13);
                                        if (var3) {
                                            _fun112974_ip = 251;
                                            continue _fun112974
                                        }
                                    case 170:
                                        var14 = _closure1_slot16;
                                        var12 = var14.log;
                                        var3 = var9.HermesInternal;
                                        var3 = var3.concat;
                                        var3 = var3.bind(var5)(var13);
                                        var3 = var12.bind(var14)(var3);
                                        var12 = _closure1_slot0;
                                        var3 = _closure1_slot2;
                                        var3 = var3[var7];
                                        var3 = var12.bind(var2)(var3);
                                        var12 = var3.Database;
                                        var3 = var12.delete;
                                        var13 = var3.bind(var12)(var13);
                                        var12 = var13.catch;
                                        var3 = function() { // Environment: var11
                                            var0 = null;
                                            return var0;
                                        };
                                        var3 = var12.bind(var13)(var3);
                                    case 251:
                                        var12 = var6.bind(var2)();
                                        var3 = var12.done;
                                        var4 = var12;
                                        if (!var3) {
                                            _fun112974_ip = 152;
                                            continue _fun112974
                                        }
                                    case 266:
                                        return var2;
                                    case 269:
                                        return var1;
                                    case 272:
                                        return var0;
                                }
                            };
                            return var0;
                        };
                        var0 = var2.bind(var1)(var0);
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var1.deleteExtraDatabases = var3;
                    var2 = function() {
                        var2 = _closure1_slot4;
                        var1 = undefined;
                        var0 = function*() { // Environment: var0
                            var0 = function*() { // Original name: ?anon_0_, environment: var0
                                _fun112979: for (var _fun112979_ip = 0;;) switch (_fun112979_ip) {
                                    case 0:
                                        StartGenerator();
                                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                        if (var1) {
                                            _fun112979_ip = 67;
                                            continue _fun112979
                                        }
                                    case 7:
                                        var3 = _closure1_slot0;
                                        var2 = _closure1_slot2;
                                        var1 = 14;
                                        var1 = var2[var1];
                                        var2 = undefined;
                                        var1 = var3.bind(var2)(var1);
                                        var4 = var1.Kv;
                                        var3 = var4.optimize;
                                        var1 = true;
                                        var1 = var3.bind(var4)(var1);
                                        SaveGenerator(address = 55);
                                    case 53:
                                        return var1;
                                    case 55:
                                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                        if (var3) {
                                            _fun112979_ip = 64;
                                            continue _fun112979
                                        }
                                    case 61:
                                        return var2;
                                    case 64:
                                        return var1;
                                    case 67:
                                        return var0;
                                }
                            };
                            return var0;
                        };
                        var0 = var2.bind(var1)(var0);
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var1.optimize = var2;
                    var0.steps = var1;
                    return var0;
            }
        };
        var _closure2_slot3 = var3;
        var1 = _closure1_slot9;
        var2 = undefined;
        var0 = arg0;
        var0 = var1.bind(var2)(var3, var0);
        var1 = _closure1_slot6;
        var4 = {};
        var0 = 'handleAppStateUpdate';
        var4.key = var0;
        var0 = function arg0() {
            _fun112980: for (var _fun112980_ip = 0;;) switch (_fun112980_ip) {
                case 0:
                    var1 = this;
                    var0 = arg0;
                    var2 = var0.state;
                    var0 = 'active';
                    var0 = var0 === var2;
                    var3 = var1.applicationActive;
                    var2 = !var0;
                    if (var0) {
                        _fun112980_ip = 34;
                        continue _fun112980
                    }
                case 31:
                    var2 = var3;
                case 34:
                    if (!var2) {
                        _fun112980_ip = 49;
                        continue _fun112980
                    }
                case 37:
                    var2 = var1.maybeCleanup;
                    var2 = var2.bind(var1)();
                case 49:
                    var1.applicationActive = var0;
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(6);
        var0[0] = var4;
        var4 = {};
        var7 = 'handleLogout';
        var4.key = var7;
        var7 = function() {
            var1 = false;
            var0 = this;
            var0.hasConnected = var1;
            var0 = undefined;
            return var0;
        };
        var4.value = var7;
        var0[1] = var4;
        var4 = {};
        var7 = 'handlePostConnectionOpen';
        var4.key = var7;
        var7 = function() {
            var1 = true;
            var0 = this;
            var0.hasConnected = var1;
            var0 = undefined;
            return var0;
        };
        var4.value = var7;
        var0[2] = var4;
        var4 = {};
        var7 = 'maybeCleanup';
        var4.key = var7;
        var7 = _closure1_slot4;
        var6 = function*() { // Environment: var5
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun112984: for (var _fun112984_ip = 0;;) switch (_fun112984_ip) {
                    case 0:
                        StartGenerator();
                        var8 = this;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun112984_ip = 380;
                            continue _fun112984
                        }
                    case 13:
                        var1 = undefined;
                        var9 = undefined;
                        var6 = undefined;
                        var4 = undefined;
                        var2 = var8.hasConnected;
                        if (!var2) {
                            _fun112984_ip = 377;
                            continue _fun112984
                        }
                    case 33:
                        var2 = var8.isCleaning;
                        if (var2) {
                            _fun112984_ip = 377;
                            continue _fun112984
                        }
                    case 45:
                        var2 = global;
                        var3 = var2.Date;
                        var2 = var3.now;
                        var9 = var2.bind(var3)();
                        var2 = _closure1_slot14;
                        var2 = var2.isLowDisk;
                        if (var2) {
                            _fun112984_ip = 99;
                            continue _fun112984
                        }
                    case 78:
                        var7 = var9;
                        var3 = var8.lastDeepClean;
                        var7 = var7 - var3;
                        var3 = _closure1_slot15;
                        var2 = var7 >= var3;
                    case 99:
                        var6 = var2;
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var7 = 16;
                        var2 = var2[var7];
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.startBackgroundTask;
                        var2 = var2.bind(var3)();
                        SaveGenerator(address = 136);
                    case 134:
                        return var2;
                    case 136:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                        if (var3) {
                            _fun112984_ip = 374;
                            continue _fun112984
                        }
                    case 145:
                        var4 = var2;
                    case 148: // try_start_0
                        var3 = true;
                        var8.isCleaning = var3;
                        var10 = var8.cleanupAsync;
                        var3 = var6;
                        var3 = var10.bind(var8)(var3);
                        SaveGenerator(address = 176);
                    case 174:
                        return var3;
                    case 176:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 10);
                        if (var10) {
                            _fun112984_ip = 249;
                            continue _fun112984
                        }
                    case 182: // try_end0
                        var10 = false;
                        var8.isCleaning = var10;
                        var10 = var6;
                        if (var10) {
                            _fun112984_ip = 204;
                            continue _fun112984
                        }
                    case 196:
                        var10 = var8.lastDeepClean;
                        _fun112984_ip = 207;
                        continue _fun112984;
                    case 204:
                        var10 = var9;
                    case 207:
                        var8.lastDeepClean = var10;
                        var11 = _closure1_slot1;
                        var10 = _closure1_slot2;
                        var10 = var10[var7];
                        var12 = var11.bind(var1)(var10);
                        var11 = var12.endBackgroundTask;
                        var10 = var4;
                        var10 = var11.bind(var12)(var10);
                        _fun112984_ip = 377;
                        continue _fun112984;
                    case 249:
                        var10 = false;
                        var8.isCleaning = var10;
                        var10 = var6;
                        if (var10) {
                            _fun112984_ip = 271;
                            continue _fun112984
                        }
                    case 263:
                        var10 = var8.lastDeepClean;
                        _fun112984_ip = 274;
                        continue _fun112984;
                    case 271:
                        var10 = var9;
                    case 274:
                        var8.lastDeepClean = var10;
                        var11 = _closure1_slot1;
                        var10 = _closure1_slot2;
                        var10 = var10[var7];
                        var12 = var11.bind(var1)(var10);
                        var11 = var12.endBackgroundTask;
                        var10 = var4;
                        var10 = var11.bind(var12)(var10);
                        return var3;
                    case 314: // catch_target0
                        CatchBlockStart(arg_register = 3);
                        var10 = false;
                        var8.isCleaning = var10;
                        if (var6) {
                            _fun112984_ip = 335;
                            continue _fun112984
                        }
                    case 327:
                        var6 = var8.lastDeepClean;
                        _fun112984_ip = 338;
                        continue _fun112984;
                    case 335:
                        var6 = var9;
                    case 338:
                        var8.lastDeepClean = var6;
                        var6 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var5 = var5[var7];
                        var6 = var6.bind(var1)(var5);
                        var5 = var6.endBackgroundTask;
                        var4 = var5.bind(var6)(var4);
                        throw var3;
                    case 374:
                        return var2;
                    case 377:
                        return var1;
                    case 380:
                        return var0;
                }
            };
            return var0;
        };
        var6 = var7.bind(var2)(var6);
        var _closure2_slot2 = var6;
        var6 = function() {
            var0 = undefined;
            var3 = _closure2_slot2;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'cleanupAsync';
        var4.key = var6;
        var6 = function*(arg0) { // Environment: var5
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun112987: for (var _fun112987_ip = 0;;) switch (_fun112987_ip) {
                    case 0:
                        StartGenerator();
                        var5 = arg0;
                        var3 = this;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun112987_ip = 189;
                            continue _fun112987
                        }
                    case 16:
                        var6 = _closure1_slot16;
                        var4 = var6.verbose;
                        var2 = global;
                        var2 = var2.HermesInternal;
                        var8 = var2.concat;
                        var7 = 'performing cleanup (deep: ';
                        var2 = ')';
                        var2 = var8.bind(var7)(var5, var2);
                        var2 = var4.bind(var6)(var2);
                        var2 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var1 = 13;
                        var1 = var4[var1];
                        var4 = undefined;
                        var2 = var2.bind(var4)(var1);
                        var1 = var2.database;
                        var2 = var1.bind(var2)();
                        var1 = null;
                        if (!(var1 != var2)) {
                            _fun112987_ip = 125;
                            continue _fun112987
                        }
                    case 101:
                        var1 = var3.cleanDatabaseAsync;
                        var1 = var1.bind(var3)(var2, var5);
                        SaveGenerator(address = 119);
                    case 117:
                        return var1;
                    case 119:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun112987_ip = 186;
                            continue _fun112987
                        }
                    case 125:
                        var5 = var3.steps;
                        var2 = var5.optimize;
                        var2 = var2.bind(var5)();
                        SaveGenerator(address = 145);
                    case 143:
                        return var2;
                    case 145:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 5);
                        if (var5) {
                            _fun112987_ip = 183;
                            continue _fun112987
                        }
                    case 151:
                        var5 = var3.steps;
                        var3 = var5.deleteExtraDatabases;
                        var3 = var3.bind(var5)();
                        SaveGenerator(address = 171);
                    case 169:
                        return var3;
                    case 171:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 5);
                        if (var5) {
                            _fun112987_ip = 180;
                            continue _fun112987
                        }
                    case 177:
                        return var4;
                    case 180:
                        return var3;
                    case 183:
                        return var2;
                    case 186:
                        return var1;
                    case 189:
                        return var0;
                }
            };
            return var0;
        };
        var6 = var7.bind(var2)(var6);
        var _closure2_slot1 = var6;
        var6 = function() {
            var0 = undefined;
            var3 = _closure2_slot1;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'cleanDatabaseAsync';
        var4.key = var6;
        var6 = function*(arg0, arg1) { // Environment: var5
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun112990: for (var _fun112990_ip = 0;;) switch (_fun112990_ip) {
                    case 0:
                        StartGenerator();
                        var4 = this;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun112990_ip = 151;
                            continue _fun112990
                        }
                    case 13:
                        var3 = arg0;
                        var2 = arg1;
                    case 19: // try_start_0
                        var6 = var4.steps;
                        var5 = var6.trimOrphanedChannels;
                        var1 = var3;
                        var1 = var5.bind(var6)(var1);
                        SaveGenerator(address = 43);
                    case 41:
                        return var1;
                    case 43:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 5);
                        if (var5) {
                            _fun112990_ip = 117;
                            continue _fun112990
                        }
                    case 49:
                        if (!var2) {
                            _fun112990_ip = 109;
                            continue _fun112990
                        }
                    case 52:
                        var6 = var4.steps;
                        var5 = var6.deleteDeprecatedKeyspaces;
                        var2 = var3;
                        var2 = var5.bind(var6)(var2);
                        SaveGenerator(address = 76);
                    case 74:
                        return var2;
                    case 76:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 5);
                        if (var5) {
                            _fun112990_ip = 114;
                            continue _fun112990
                        }
                    case 82:
                        var5 = var4.steps;
                        var4 = var5.trimLowDisk;
                        var3 = var4.bind(var5)(var3);
                        SaveGenerator(address = 103);
                    case 101:
                        return var3;
                    case 103:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 4);
                        if (var4) {
                            _fun112990_ip = 111;
                            continue _fun112990
                        }
                    case 109: // try_end0
                        _fun112990_ip = 146;
                        continue _fun112990;
                    case 111:
                        return var3;
                    case 114:
                        return var2;
                    case 117:
                        return var1;
                    case 120: // catch_target0
                        CatchBlockStart(arg_register = 4);
                        var3 = _closure1_slot16;
                        var2 = var3.warn;
                        var1 = "couldn't clean database:";
                        var1 = var2.bind(var3)(var1, var4);
                    case 146:
                        var1 = undefined;
                        return var1;
                    case 151:
                        return var0;
                }
            };
            return var0;
        };
        var6 = var7.bind(var2)(var6);
        var _closure2_slot0 = var6;
        var5 = function() {
            var0 = undefined;
            var3 = _closure2_slot0;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
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
    var13 = var3;
    var1 = new var13[var1](var12);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 18;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/app_database/managers/native/KvBackgroundManager.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 5, 6, 7, 15, 17, 18, 27, 10278, 4367, 4368, 667, 3, 1646, 1647, 1662, 6546, 4299, 2]);