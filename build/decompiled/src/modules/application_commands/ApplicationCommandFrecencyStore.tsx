// modules/application_commands/ApplicationCommandFrecencyStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var1
        _fun42932: for (var _fun42932_ip = 0;;) switch (_fun42932_ip) {
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
                _fun42932_ip = 74;
                continue _fun42932;
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
    var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var1
        _fun42935: for (var _fun42935_ip = 0;;) switch (_fun42935_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun42935_ip = 45;
                    continue _fun42935
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 45:
                if (var1) {
                    _fun42935_ip = 54;
                    continue _fun42935
                }
            case 48:
                var1 = var2["@@iterator"];
            case 54:
                if (var1) {
                    _fun42935_ip = 342;
                    continue _fun42935
                }
            case 60:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun42935_ip = 322;
                    continue _fun42935
                }
            case 85:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun42935_ip = 282;
                    continue _fun42935
                }
            case 95:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun42935_ip = 269;
                    continue _fun42935
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
                    _fun42935_ip = 162;
                    continue _fun42935
                }
            case 157:
                var6 = var2.constructor;
            case 162:
                var9 = var8;
                if (!var6) {
                    _fun42935_ip = 178;
                    continue _fun42935
                }
            case 168:
                var6 = var2.constructor;
                var9 = var6.name;
            case 178:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun42935_ip = 248;
                    continue _fun42935
                }
            case 186:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun42935_ip = 248;
                    continue _fun42935
                }
            case 194:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun42935_ip = 233;
                    continue _fun42935
                }
            case 204:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun42935_ip = 246;
                    continue _fun42935
                }
            case 233:
                var8 = _closure1_slot15;
                var6 = var8.bind(var7)(var2, var7);
            case 246:
                _fun42935_ip = 264;
                continue _fun42935;
            case 248:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 264:
                var5 = var6;
                _fun42935_ip = 282;
                continue _fun42935;
            case 269:
                var6 = _closure1_slot15;
                var5 = var6.bind(var7)(var2, var7);
            case 282:
                var3 = var5;
                if (var3) {
                    _fun42935_ip = 322;
                    continue _fun42935
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
                    _fun42935_ip = 329;
                    continue _fun42935
                }
            case 325:
                _closure2_slot0 = var3;
            case 329:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun42936: for (var _fun42936_ip = 0;;) switch (_fun42936_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun42936_ip = 56;
                                continue _fun42936
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
                            _fun42936_ip = 67;
                            continue _fun42936;
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
    var _closure1_slot14 = var0;
    var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var1
        _fun42937: for (var _fun42937_ip = 0;;) switch (_fun42937_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun42937_ip = 23;
                    continue _fun42937
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun42937_ip = 33;
                    continue _fun42937
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
                    _fun42937_ip = 70;
                    continue _fun42937
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun42937_ip = 55;
                    continue _fun42937
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot15 = var0;
    var0 = function(arg0, arg1) { // Original name: getKey, environment: var1
        _fun42938: for (var _fun42938_ip = 0;;) switch (_fun42938_ip) {
            case 0:
                var3 = arg0;
                var1 = arg1;
                var2 = global;
                var5 = var2.Number;
                var4 = var1.id;
                var0 = undefined;
                var5 = var5.bind(var0)(var4);
                var4 = 0;
                if (!(!(var5 < var4))) {
                    _fun42938_ip = 111;
                    continue _fun42938
                }
            case 32:
                var4 = null;
                var5 = var4 == var3;
                var0 = undefined;
                if (var5) {
                    _fun42938_ip = 48;
                    continue _fun42938
                }
            case 43:
                var0 = var3.guild;
            case 48:
                if (!(var4 != var0)) {
                    _fun42938_ip = 61;
                    continue _fun42938
                }
            case 52:
                var0 = var1.guildId;
                if (!(var4 == var0)) {
                    _fun42938_ip = 68;
                    continue _fun42938
                }
            case 61:
                var0 = var1.id;
                _fun42938_ip = 109;
                continue _fun42938;
            case 68:
                var6 = var1.id;
                var3 = var3.guild;
                var5 = var3.id;
                var2 = var2.HermesInternal;
                var4 = var2.concat;
                var3 = '';
                var2 = ':';
                var0 = var4.bind(var3)(var6, var2, var5);
            case 109:
                _fun42938_ip = 116;
                continue _fun42938;
            case 111:
                var0 = var1.id;
            case 116:
                return var0;
        }
    };
    var _closure1_slot16 = var0;
    var0 = function() { // Original name: handleUserSettingsProtoStoreChange, environment: var1
        _fun42939: for (var _fun42939_ip = 0;;) switch (_fun42939_ip) {
            case 0:
                var0 = _closure1_slot7;
                var0 = var0.frecencyWithoutFetchingLatest;
                var3 = var0.applicationCommandFrecency;
                var2 = null;
                var4 = var2 == var3;
                var0 = undefined;
                var7 = undefined;
                if (var4) {
                    _fun42939_ip = 38;
                    continue _fun42939
                }
            case 32:
                var7 = var3.applicationCommands;
            case 38:
                if (!(var2 == var7)) {
                    _fun42939_ip = 44;
                    continue _fun42939
                }
            case 42:
                var7 = {};
            case 44:
                var4 = _closure1_slot12;
                var3 = var4.overwriteHistory;
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var2 = 10;
                var2 = var6[var2];
                var6 = var5.bind(var0)(var2);
                var5 = var6.mapValues;
                var2 = function(arg0) { // Environment: var2
                    var1 = arg0;
                    var0 = {};
                    var5 = var0;
                    var4 = var1;
                    var2 = copyDataProperties(var5, var4);
                    var3 = var1.recentUses;
                    var2 = var3.map;
                    var1 = global;
                    var1 = var1.Number;
                    var3 = var2.bind(var3)(var1);
                    var2 = var3.filter;
                    var1 = function(arg0) { // Environment: var1
                        var1 = arg0;
                        var0 = 0;
                        var0 = var1 > var0;
                        return var0;
                    };
                    var2 = var2.bind(var3)(var1);
                    var1 = 'recentUses';
                    var0[var1] = var2;
                    return var0;
                };
                var2 = var5.bind(var6)(var7, var2);
                var1 = _closure1_slot11;
                var1 = var1.pendingUsages;
                var1 = var3.bind(var4)(var2, var1);
                return var0;
        }
    };
    var _closure1_slot17 = var0;
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
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 6;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var7 = var3.DISCOVERY_COMMAND_FRECENCY_GATEWAY_LIMIT;
    var _closure1_slot8 = var7;
    var3 = var3.SUB_COMMAND_KEY_SEPARATOR;
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var7 = var3.FREQUENCY_ITEM_LIMIT;
    var3 = 8;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.UserSettingsTypes;
    var _closure1_slot10 = var3;
    var3 = {};
    var8 = new Array(0);
    var3.pendingUsages = var8;
    var _closure1_slot11 = var3;
    var3 = 9;
    var3 = var6[var3];
    var8 = var4.bind(var0)(var3);
    var3 = {};
    var9 = function() { // Original name: computeBonus, environment: var1
        var0 = 1;
        return var0;
    };
    var3.computeBonus = var9;
    var9 = function(arg0) { // Original name: lookupKey, environment: var1
        var0 = arg0;
        return var0;
    };
    var3.lookupKey = var9;
    var9 = function() { // Original name: afterCompute, environment: var1
        var0 = undefined;
        return var0;
    };
    var3.afterCompute = var9;
    var3.numFrequentlyItems = var7;
    var7 = var8.prototype;
    var7 = Object.create(var7, {
        constructor: {
            value: var8
        }
    });
    var13 = var7;
    var12 = var3;
    var3 = new var13[var8](var12, var11);
    var3 = var3 instanceof Object ? var3 : var7;
    var _closure1_slot12 = var3;
    var3 = 11;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.PersistedStore;
    var3 = function(arg0) { // Environment: var1
        var3 = function() { // Original name: ApplicationCommandFrecencyStore, environment: var5
            _fun42946: for (var _fun42946_ip = 0;;) switch (_fun42946_ip) {
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
                        _fun42946_ip = 69;
                        continue _fun42946
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun42946_ip = 105;
                    continue _fun42946;
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
            _fun42947: for (var _fun42947_ip = 0;;) switch (_fun42947_ip) {
                case 0:
                    var1 = arg0;
                    var3 = this;
                    var0 = null;
                    if (!(var0 != var1)) {
                        _fun42947_ip = 19;
                        continue _fun42947
                    }
                case 12:
                    _closure1_slot11 = var1;
                case 19:
                    var2 = var3.syncWith;
                    var4 = _closure1_slot7;
                    var1 = new Array(1);
                    var1[0] = var4;
                    var0 = _closure1_slot17;
                    var0 = var2.bind(var3)(var1, var0);
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(6);
        var0[0] = var4;
        var4 = {};
        var6 = 'getState';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot11;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'hasPendingUsage';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot11;
            var0 = var0.pendingUsages;
            var1 = var0.length;
            var0 = 0;
            var0 = var1 > var0;
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getCommandFrecencyWithoutLoadingLatest';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot12;
            return var0;
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'getScoreWithoutLoadingLatest';
        var4.key = var6;
        var6 = function(arg0, arg1) { // Original name: value, environment: var5
            _fun42951: for (var _fun42951_ip = 0;;) switch (_fun42951_ip) {
                case 0:
                    var2 = _closure1_slot12;
                    var1 = var2.getScore;
                    var5 = _closure1_slot16;
                    var4 = undefined;
                    var3 = arg0;
                    var0 = arg1;
                    var0 = var5.bind(var4)(var3, var0);
                    var1 = var1.bind(var2)(var0);
                    var0 = null;
                    var2 = var0 != var1;
                    var0 = 0;
                    if (!var2) {
                        _fun42951_ip = 50;
                        continue _fun42951
                    }
                case 47:
                    var0 = var1;
                case 50:
                    return var0;
            }
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'getTopCommandsWithoutLoadingLatest';
        var4.key = var6;
        var5 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot12;
            var0 = var0.frequently;
            return var0;
        };
        var4.value = var5;
        var0[5] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var8 = var3.bind(var0)(var7);
    var3 = 'ApplicationCommandFrecencyStore';
    var8.displayName = var3;
    var3 = 'ApplicationCommandFrecencyV2';
    var8.persistKey = var3;
    var3 = 12;
    var3 = var6[var3];
    var12 = var4.bind(var0)(var3);
    var3 = {};
    var4 = function(arg0) { // Original name: handleApplicationCommandUsed, environment: var1
        var0 = arg0;
        var4 = var0.command;
        var3 = var0.context;
        var2 = _closure1_slot16;
        var0 = undefined;
        var4 = var2.bind(var0)(var3, var4);
        var2 = _closure1_slot11;
        var5 = var2.pendingUsages;
        var3 = var5.push;
        var2 = {};
        var2.key = var4;
        var6 = global;
        var7 = var6.Date;
        var6 = var7.now;
        var6 = var6.bind(var7)();
        var2.timestamp = var6;
        var2 = var3.bind(var5)(var2);
        var3 = _closure1_slot12;
        var2 = var3.track;
        var2 = var2.bind(var3)(var4);
        var2 = _closure1_slot12;
        var1 = var2.compute;
        var1 = var1.bind(var2)();
        return var0;
    };
    var3.APPLICATION_COMMAND_USED = var4;
    var4 = function(arg0) { // Original name: handleUserSettingsProtoUpdate, environment: var1
        _fun42954: for (var _fun42954_ip = 0;;) switch (_fun42954_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.settings;
                var3 = var1.type;
                var1 = var0.wasSaved;
                var2 = _closure1_slot10;
                var2 = var2.FRECENCY_AND_FAVORITES_SETTINGS;
                if (!(var3 === var2)) {
                    _fun42954_ip = 58;
                    continue _fun42954
                }
            case 37:
                if (!var1) {
                    _fun42954_ip = 58;
                    continue _fun42954
                }
            case 40:
                var1 = _closure1_slot11;
                var0 = new Array(0);
                var1.pendingUsages = var0;
                var0 = undefined;
                return var0;
            case 58:
                var0 = false;
                return var0;
        }
    };
    var3.USER_SETTINGS_PROTO_UPDATE = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var8
        }
    });
    var13 = var4;
    var11 = var3;
    var3 = new var13[var8](var12, var11, var10);
    var3 = var3 instanceof Object ? var3 : var4;
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/application_commands/ApplicationCommandFrecencyStore.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var3 = function(arg0) { // Original name: getTopRealCommands, environment: var1
        _fun42955: for (var _fun42955_ip = 0;;) switch (_fun42955_ip) {
            case 0:
                var7 = global;
                var0 = var7.Set;
                var1 = var0.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var0
                    }
                });
                var13 = var1;
                var0 = new var13[var0](var12);
                var2 = var0 instanceof Object ? var0 : var1;
                var1 = _closure1_slot14;
                var5 = undefined;
                var0 = arg0;
                var4 = var1.bind(var5)(var0);
                var3 = var4.bind(var5)();
                var0 = var3.done;
                var1 = 0;
                if (var0) {
                    _fun42955_ip = 135;
                    continue _fun42955
                }
            case 59:
                var9 = var3.value;
                var8 = var9.split;
                var0 = _closure1_slot9;
                var0 = var8.bind(var9)(var0);
                var8 = var0[var1];
                var0 = var7.Number;
                var0 = var0.bind(var5)(var8);
                if (!(var0 > var1)) {
                    _fun42955_ip = 107;
                    continue _fun42955
                }
            case 97:
                var0 = var2.add;
                var0 = var0.bind(var2)(var8);
            case 107:
                var8 = var2.size;
                var0 = _closure1_slot8;
                if (!(!(var8 >= var0))) {
                    _fun42955_ip = 135;
                    continue _fun42955
                }
            case 120:
                var8 = var4.bind(var5)();
                var0 = var8.done;
                var3 = var8;
                if (!var0) {
                    _fun42955_ip = 59;
                    continue _fun42955
                }
            case 135:
                var0 = new Array(0);
                var12 = var0;
                var11 = var2;
                var10 = 0;
                var1 = arraySpread(var12, var11, var10);
                return var0;
        }
    };
    var2.getTopRealCommands = var3;
    var1 = function(arg0, arg1) { // Original name: getFilteredTopCommands, environment: var1
        var3 = arg0;
        var1 = arg1;
        var _closure2_slot0 = var1;
        var2 = var3.filter;
        var1 = function(arg0) { // Environment: var0
            _fun42957: for (var _fun42957_ip = 0;;) switch (_fun42957_ip) {
                case 0:
                    var5 = arg0;
                    var0 = var5.includes;
                    var4 = ':';
                    var0 = var0.bind(var5)(var4);
                    var0 = !var0;
                    if (var0) {
                        _fun42957_ip = 95;
                        continue _fun42957
                    }
                case 23:
                    var1 = _closure2_slot0;
                    var3 = null;
                    var6 = var3 == var1;
                    var1 = undefined;
                    if (var6) {
                        _fun42957_ip = 50;
                        continue _fun42957
                    }
                case 41:
                    var6 = _closure2_slot0;
                    var1 = var6.guild;
                case 50:
                    var1 = var3 != var1;
                    if (!var1) {
                        _fun42957_ip = 92;
                        continue _fun42957
                    }
                case 57:
                    var2 = _closure2_slot0;
                    var2 = var2.guild;
                    var3 = var2.id;
                    var2 = var5.split;
                    var4 = var2.bind(var5)(var4);
                    var2 = 1;
                    var2 = var4[var2];
                    var1 = var3 === var2;
                case 92:
                    var0 = var1;
                case 95:
                    return var0;
            }
        };
        var2 = var2.bind(var3)(var1);
        var1 = var2.map;
        var0 = function(arg0) { // Environment: var0
            var2 = arg0;
            var1 = var2.split;
            var0 = ':';
            var1 = var1.bind(var2)(var0);
            var0 = 0;
            var0 = var1[var0];
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.getFilteredTopCommands = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1310, 4502, 3444, 665, 3564, 22, 566, 806, 2]);