// modules/guild_progress/GuildProgressStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var3
        _fun80011: for (var _fun80011_ip = 0;;) switch (_fun80011_ip) {
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
                _fun80011_ip = 76;
                continue _fun80011;
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
    var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var3
        _fun80014: for (var _fun80014_ip = 0;;) switch (_fun80014_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun80014_ip = 45;
                    continue _fun80014
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 45:
                if (var1) {
                    _fun80014_ip = 54;
                    continue _fun80014
                }
            case 48:
                var1 = var2["@@iterator"];
            case 54:
                if (var1) {
                    _fun80014_ip = 344;
                    continue _fun80014
                }
            case 60:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun80014_ip = 322;
                    continue _fun80014
                }
            case 85:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun80014_ip = 282;
                    continue _fun80014
                }
            case 95:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun80014_ip = 269;
                    continue _fun80014
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
                    _fun80014_ip = 162;
                    continue _fun80014
                }
            case 157:
                var6 = var2.constructor;
            case 162:
                var9 = var8;
                if (!var6) {
                    _fun80014_ip = 178;
                    continue _fun80014
                }
            case 168:
                var6 = var2.constructor;
                var9 = var6.name;
            case 178:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun80014_ip = 248;
                    continue _fun80014
                }
            case 186:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun80014_ip = 248;
                    continue _fun80014
                }
            case 194:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun80014_ip = 233;
                    continue _fun80014
                }
            case 204:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun80014_ip = 246;
                    continue _fun80014
                }
            case 233:
                var8 = _closure1_slot14;
                var6 = var8.bind(var7)(var2, var7);
            case 246:
                _fun80014_ip = 264;
                continue _fun80014;
            case 248:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 264:
                var5 = var6;
                _fun80014_ip = 282;
                continue _fun80014;
            case 269:
                var6 = _closure1_slot14;
                var5 = var6.bind(var7)(var2, var7);
            case 282:
                var3 = var5;
                if (var3) {
                    _fun80014_ip = 322;
                    continue _fun80014
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
                    _fun80014_ip = 329;
                    continue _fun80014
                }
            case 325:
                _closure2_slot0 = var3;
            case 329:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun80015: for (var _fun80015_ip = 0;;) switch (_fun80015_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun80015_ip = 56;
                                continue _fun80015
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
                            _fun80015_ip = 67;
                            continue _fun80015;
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
            case 344:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot13 = var0;
    var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var3
        _fun80016: for (var _fun80016_ip = 0;;) switch (_fun80016_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun80016_ip = 23;
                    continue _fun80016
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun80016_ip = 33;
                    continue _fun80016
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
                    _fun80016_ip = 70;
                    continue _fun80016
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun80016_ip = 55;
                    continue _fun80016
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot14 = var0;
    var0 = function(arg0, arg1) { // Original name: completeStep, environment: var3
        _fun80017: for (var _fun80017_ip = 0;;) switch (_fun80017_ip) {
            case 0:
                var4 = arg0;
                var7 = arg1;
                var0 = _closure1_slot11;
                var5 = var0[var4];
                var0 = null;
                var0 = var0 != var5;
                if (!var0) {
                    _fun80017_ip = 93;
                    continue _fun80017
                }
            case 26:
                var1 = var5.has;
                var1 = var1.bind(var5)(var7);
                var1 = !var1;
                if (!var1) {
                    _fun80017_ip = 90;
                    continue _fun80017
                }
            case 42:
                var3 = _closure1_slot11;
                var2 = global;
                var6 = var2.Set;
                var2 = var5.add;
                var8 = var2.bind(var5)(var7);
                var5 = var6.prototype;
                var5 = Object.create(var5, {
                    constructor: {
                        value: var6
                    }
                });
                var9 = var5;
                var2 = new var9[var6](var8, var7);
                var2 = var2 instanceof Object ? var2 : var5;
                var3[var4] = var2;
                var1 = true;
            case 90:
                var0 = var1;
            case 93:
                return var0;
        }
    };
    var _closure1_slot15 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var6.bind(var0)(var1);
    var _closure1_slot2 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 4;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 5;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 6;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot8 = var1;
    var1 = 7;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot9 = var1;
    var1 = 8;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.Steps;
    var _closure1_slot10 = var1;
    var1 = {};
    var _closure1_slot11 = var1;
    var1 = 10;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.PersistedStore;
    var1 = function(arg0) { // Environment: var3
        var3 = function() { // Original name: GuildProgressStore, environment: var5
            _fun80019: for (var _fun80019_ip = 0;;) switch (_fun80019_ip) {
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
                        _fun80019_ip = 69;
                        continue _fun80019
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun80019_ip = 105;
                    continue _fun80019;
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
            _fun80020: for (var _fun80020_ip = 0;;) switch (_fun80020_ip) {
                case 0:
                    var3 = arg0;
                    var7 = this;
                    var _closure3_slot0 = var3;
                    var6 = var7.waitFor;
                    var5 = _closure1_slot7;
                    var4 = _closure1_slot8;
                    var2 = _closure1_slot9;
                    var2 = var6.bind(var7)(var5, var4, var2);
                    var2 = {};
                    _closure1_slot11 = var2;
                    var2 = null;
                    if (!(var2 != var3)) {
                        _fun80020_ip = 101;
                        continue _fun80020
                    }
                case 52:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 9;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var4.bind(var1)(var2);
                    var1 = var2.keys;
                    var2 = var1.bind(var2)(var3);
                    var1 = var2.forEach;
                    var0 = function(arg0) { // Environment: var0
                        _fun80021: for (var _fun80021_ip = 0;;) switch (_fun80021_ip) {
                            case 0:
                                var2 = arg0;
                                var0 = _closure3_slot0;
                                var4 = var0[var2];
                                var0 = null;
                                var0 = var0 != var4;
                                if (!var0) {
                                    _fun80021_ip = 51;
                                    continue _fun80021
                                }
                            case 23:
                                var1 = global;
                                var1 = var1.Symbol;
                                var1 = var1.iterator;
                                var1 = var4[var1];
                                var3 = 'function';
                                var1 = typeof var1;
                                var0 = var3 === var1;
                            case 51:
                                if (!var0) {
                                    _fun80021_ip = 96;
                                    continue _fun80021
                                }
                            case 54:
                                var1 = _closure1_slot11;
                                var0 = global;
                                var0 = var0.Set;
                                var3 = var0.prototype;
                                var3 = Object.create(var3, {
                                    constructor: {
                                        value: var0
                                    }
                                });
                                var6 = var3;
                                var5 = var4;
                                var0 = new var6[var0](var5, var4);
                                var0 = var0 instanceof Object ? var0 : var3;
                                var1[var2] = var0;
                            case 96:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0 = var1.bind(var2)(var0);
                case 101:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(4);
        var0[0] = var4;
        var4 = {};
        var6 = 'getProgress';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            var1 = _closure1_slot11;
            var0 = arg0;
            var0 = var1[var0];
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'hasProgress';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun80023: for (var _fun80023_ip = 0;;) switch (_fun80023_ip) {
                case 0:
                    var2 = _closure1_slot11;
                    var0 = arg0;
                    var3 = var2[var0];
                    var0 = null;
                    var0 = var0 != var3;
                    if (!var0) {
                        _fun80023_ip = 46;
                        continue _fun80023
                    }
                case 23:
                    var2 = var3.has;
                    var1 = _closure1_slot10;
                    var1 = var1.DISMISSED;
                    var1 = var2.bind(var3)(var1);
                    var0 = !var1;
                case 46:
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getState';
        var4.key = var6;
        var5 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot11;
            return var0;
        };
        var4.value = var5;
        var0[3] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'GuildProgressStore';
    var7.displayName = var1;
    var7.persistKey = var1;
    var1 = 11;
    var1 = var5[var1];
    var11 = var6.bind(var0)(var1);
    var1 = {};
    var8 = function() { // Original name: handleConnectionOpen, environment: var3
        var3 = new Array(0);
        var _closure2_slot0 = var3;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var0 = 9;
        var4 = var4[var0];
        var0 = undefined;
        var5 = var5.bind(var0)(var4);
        var4 = var5.keys;
        var2 = _closure1_slot11;
        var5 = var4.bind(var5)(var2);
        var4 = var5.forEach;
        var2 = function(arg0) { // Environment: var1
            _fun80026: for (var _fun80026_ip = 0;;) switch (_fun80026_ip) {
                case 0:
                    var2 = arg0;
                    var1 = _closure1_slot11;
                    var3 = var1[var2];
                    var1 = var3.has;
                    var0 = _closure1_slot10;
                    var0 = var0.COMPLETED;
                    var0 = var1.bind(var3)(var0);
                    if (!var0) {
                        _fun80026_ip = 54;
                        continue _fun80026
                    }
                case 37:
                    var1 = _closure2_slot0;
                    var0 = var1.push;
                    var0 = var0.bind(var1)(var2);
                case 54:
                    var0 = undefined;
                    return var0;
            }
        };
        var2 = var4.bind(var5)(var2);
        var2 = var3.forEach;
        var1 = function(arg0) { // Environment: var1
            var3 = _closure1_slot15;
            var0 = _closure1_slot10;
            var2 = var0.DISMISSED;
            var1 = undefined;
            var0 = arg0;
            var0 = var3.bind(var1)(var0, var2);
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.CONNECTION_OPEN = var8;
    var8 = function(arg0) { // Original name: handleInitialize, environment: var3
        _fun80028: for (var _fun80028_ip = 0;;) switch (_fun80028_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.guildId;
                var1 = _closure1_slot11;
                var3 = var1[var2];
                var1 = null;
                if (!(var1 == var3)) {
                    _fun80028_ip = 61;
                    continue _fun80028
                }
            case 25:
                var3 = _closure1_slot11;
                var1 = global;
                var1 = var1.Set;
                var4 = var1.prototype;
                var4 = Object.create(var4, {
                    constructor: {
                        value: var1
                    }
                });
                var6 = var4;
                var1 = new var6[var1](var5);
                var1 = var1 instanceof Object ? var1 : var4;
                var3[var2] = var1;
            case 61:
                var1 = _closure1_slot11;
                var4 = var1[var2];
                var3 = var4.has;
                var1 = _closure1_slot10;
                var1 = var1.COMPLETED;
                var1 = var3.bind(var4)(var1);
                if (var1) {
                    _fun80028_ip = 120;
                    continue _fun80028
                }
            case 92:
                var1 = _closure1_slot11;
                var2 = var1[var2];
                var1 = var2.delete;
                var0 = _closure1_slot10;
                var0 = var0.DISMISSED;
                var0 = var1.bind(var2)(var0);
            case 120:
                var0 = undefined;
                return var0;
        }
    };
    var1.GUILD_PROGRESS_INITIALIZE = var8;
    var8 = function(arg0) { // Original name: handleCompletedSeen, environment: var3
        _fun80029: for (var _fun80029_ip = 0;;) switch (_fun80029_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.guildId;
                var1 = _closure1_slot11;
                var3 = var1[var2];
                var1 = null;
                if (!(var1 != var3)) {
                    _fun80029_ip = 93;
                    continue _fun80029
                }
            case 25:
                var1 = _closure1_slot11;
                var3 = global;
                var4 = var3.Set;
                var3 = _closure1_slot11;
                var5 = var3[var2];
                var3 = var5.add;
                var0 = _closure1_slot10;
                var0 = var0.COMPLETED;
                var6 = var3.bind(var5)(var0);
                var3 = var4.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var4
                    }
                });
                var7 = var3;
                var0 = new var7[var4](var6, var5);
                var0 = var0 instanceof Object ? var0 : var3;
                var1[var2] = var0;
                var0 = undefined;
                return var0;
            case 93:
                var0 = false;
                return var0;
        }
    };
    var1.GUILD_PROGRESS_COMPLETED_SEEN = var8;
    var8 = function(arg0) { // Original name: handleGuildProgressDismiss, environment: var3
        var0 = arg0;
        var3 = var0.guildId;
        var2 = _closure1_slot15;
        var0 = _closure1_slot10;
        var1 = var0.DISMISSED;
        var0 = undefined;
        var0 = var2.bind(var0)(var3, var1);
        return var0;
    };
    var1.GUILD_PROGRESS_DISMISS = var8;
    var8 = function(arg0) { // Original name: handleGuildCreate, environment: var3
        _fun80031: for (var _fun80031_ip = 0;;) switch (_fun80031_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.guild;
                var4 = var0.id;
                var3 = var0.member_count;
                var2 = _closure1_slot9;
                var1 = var2.getGuild;
                var1 = var1.bind(var2)(var4);
                var4 = null;
                if (!(var4 != var1)) {
                    _fun80031_ip = 178;
                    continue _fun80031
                }
            case 45:
                var5 = var1.ownerId;
                var6 = _closure1_slot7;
                var2 = var6.getId;
                var2 = var2.bind(var6)();
                var2 = var5 === var2;
                if (!var2) {
                    _fun80031_ip = 89;
                    continue _fun80031
                }
            case 72:
                var6 = _closure1_slot11;
                var5 = var1.id;
                var5 = var6[var5];
                var2 = var4 != var5;
            case 89:
                if (!var2) {
                    _fun80031_ip = 174;
                    continue _fun80031
                }
            case 92:
                var2 = var1.icon;
                if (!(var4 != var2)) {
                    _fun80031_ip = 134;
                    continue _fun80031
                }
            case 101:
                var4 = _closure1_slot11;
                var2 = var1.id;
                var5 = var4[var2];
                var4 = var5.add;
                var2 = _closure1_slot10;
                var2 = var2.AVATAR;
                var2 = var4.bind(var5)(var2);
            case 134:
                var2 = 1;
                if (!(var3 > var2)) {
                    _fun80031_ip = 174;
                    continue _fun80031
                }
            case 141:
                var2 = _closure1_slot11;
                var1 = var1.id;
                var2 = var2[var1];
                var1 = var2.add;
                var0 = _closure1_slot10;
                var0 = var0.INVITE;
                var0 = var1.bind(var2)(var0);
            case 174:
                var0 = undefined;
                return var0;
            case 178:
                var0 = false;
                return var0;
        }
    };
    var1.GUILD_CREATE = var8;
    var8 = function(arg0) { // Original name: handleChannelCreate, environment: var3
        _fun80032: for (var _fun80032_ip = 0;;) switch (_fun80032_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.channel;
                var3 = null;
                var0 = var3 != var2;
                if (!var0) {
                    _fun80032_ip = 26;
                    continue _fun80032
                }
            case 17:
                var1 = var2.guild_id;
                var0 = var3 != var1;
            case 26:
                if (!var0) {
                    _fun80032_ip = 49;
                    continue _fun80032
                }
            case 29:
                var4 = _closure1_slot11;
                var1 = var2.guild_id;
                var1 = var4[var1];
                var0 = var3 != var1;
            case 49:
                if (!var0) {
                    _fun80032_ip = 82;
                    continue _fun80032
                }
            case 52:
                var4 = _closure1_slot15;
                var3 = var2.guild_id;
                var1 = _closure1_slot10;
                var2 = var1.CHANNEL;
                var1 = undefined;
                var0 = var4.bind(var1)(var3, var2);
            case 82:
                return var0;
        }
    };
    var1.CHANNEL_CREATE = var8;
    var8 = function(arg0) { // Original name: handleChannelUpdates, environment: var3
        _fun80033: for (var _fun80033_ip = 0;;) switch (_fun80033_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.channels;
                var0 = _closure1_slot13;
                var8 = undefined;
                var7 = var0.bind(var8)(var1);
                var0 = var7.bind(var8)();
                var1 = var0.done;
                var6 = false;
                var4 = null;
                var3 = var0;
                var2 = false;
                var0 = false;
                if (var1) {
                    _fun80033_ip = 142;
                    continue _fun80033
                }
            case 46:
                var10 = var3.value;
                var1 = var4 != var10;
                if (!var1) {
                    _fun80033_ip = 67;
                    continue _fun80033
                }
            case 58:
                var11 = var10.guild_id;
                var1 = var4 != var11;
            case 67:
                if (!var1) {
                    _fun80033_ip = 87;
                    continue _fun80033
                }
            case 70:
                var12 = _closure1_slot11;
                var11 = var10.guild_id;
                var11 = var12[var11];
                var1 = var4 != var11;
            case 87:
                if (!var1) {
                    _fun80033_ip = 119;
                    continue _fun80033
                }
            case 90:
                var12 = _closure1_slot15;
                var11 = var10.guild_id;
                var10 = _closure1_slot10;
                var10 = var10.CHANNEL;
                var10 = var12.bind(var8)(var11, var10);
                var1 = var6 !== var10;
            case 119:
                if (!var1) {
                    _fun80033_ip = 124;
                    continue _fun80033
                }
            case 122:
                var2 = true;
            case 124:
                var11 = var7.bind(var8)();
                var1 = var11.done;
                var3 = var11;
                var0 = var2;
                if (!var1) {
                    _fun80033_ip = 46;
                    continue _fun80033
                }
            case 142:
                return var0;
        }
    };
    var1.CHANNEL_UPDATES = var8;
    var8 = function(arg0) { // Original name: handleGuildSettings, environment: var3
        _fun80034: for (var _fun80034_ip = 0;;) switch (_fun80034_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.guild;
                var4 = null;
                var0 = var4 != var3;
                if (!var0) {
                    _fun80034_ip = 97;
                    continue _fun80034
                }
            case 17:
                var1 = var3.id;
                var1 = var4 != var1;
                if (!var1) {
                    _fun80034_ip = 49;
                    continue _fun80034
                }
            case 29:
                var5 = _closure1_slot11;
                var2 = var3.id;
                var2 = var5[var2];
                var1 = var4 != var2;
            case 49:
                if (!var1) {
                    _fun80034_ip = 61;
                    continue _fun80034
                }
            case 52:
                var2 = var3.icon;
                var1 = var4 != var2;
            case 61:
                if (!var1) {
                    _fun80034_ip = 94;
                    continue _fun80034
                }
            case 64:
                var5 = _closure1_slot15;
                var4 = var3.id;
                var2 = _closure1_slot10;
                var3 = var2.AVATAR;
                var2 = undefined;
                var1 = var5.bind(var2)(var4, var3);
            case 94:
                var0 = var1;
            case 97:
                return var0;
        }
    };
    var1.GUILD_SETTINGS_SUBMIT_SUCCESS = var8;
    var8 = function(arg0) { // Original name: handleMessage, environment: var3
        _fun80035: for (var _fun80035_ip = 0;;) switch (_fun80035_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.channelId;
                var0 = var0.message;
                var3 = _closure1_slot8;
                var2 = var3.getChannel;
                var2 = var2.bind(var3)(var4);
                var0 = var0.author;
                var5 = null;
                var6 = var5 == var0;
                var4 = undefined;
                var3 = undefined;
                if (var6) {
                    _fun80035_ip = 54;
                    continue _fun80035
                }
            case 49:
                var3 = var0.id;
            case 54:
                var6 = _closure1_slot7;
                var0 = var6.getId;
                var0 = var0.bind(var6)();
                var0 = var3 === var0;
                if (!var0) {
                    _fun80035_ip = 79;
                    continue _fun80035
                }
            case 75:
                var0 = var5 != var2;
            case 79:
                if (!var0) {
                    _fun80035_ip = 99;
                    continue _fun80035
                }
            case 82:
                var6 = _closure1_slot11;
                var3 = var2.guild_id;
                var3 = var6[var3];
                var0 = var5 != var3;
            case 99:
                if (!var0) {
                    _fun80035_ip = 127;
                    continue _fun80035
                }
            case 102:
                var3 = _closure1_slot15;
                var2 = var2.guild_id;
                var1 = _closure1_slot10;
                var1 = var1.MESSAGE;
                var0 = var3.bind(var4)(var2, var1);
            case 127:
                return var0;
        }
    };
    var1.MESSAGE_CREATE = var8;
    var3 = function(arg0) { // Original name: handleGuildMember, environment: var3
        _fun80036: for (var _fun80036_ip = 0;;) switch (_fun80036_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.guildId;
                var3 = var0.memberCount;
                var0 = _closure1_slot11;
                var2 = var0[var4];
                var0 = null;
                var0 = var0 != var2;
                if (!var0) {
                    _fun80036_ip = 41;
                    continue _fun80036
                }
            case 34:
                var2 = 1;
                var0 = var3 > var2;
            case 41:
                if (!var0) {
                    _fun80036_ip = 66;
                    continue _fun80036
                }
            case 44:
                var3 = _closure1_slot15;
                var1 = _closure1_slot10;
                var2 = var1.INVITE;
                var1 = undefined;
                var0 = var3.bind(var1)(var4, var2);
            case 66:
                return var0;
        }
    };
    var1.GUILD_MEMBER_LIST_UPDATE = var3;
    var3 = var7.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var12 = var3;
    var10 = var1;
    var1 = new var12[var7](var11, var10, var9);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_progress/GuildProgressStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1216, 1372, 1410, 10150, 21, 566, 806, 2]);