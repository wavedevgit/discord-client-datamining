// modules/global_discovery_apps/stores/MyGuildApplicationsStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var4
        _fun108156: for (var _fun108156_ip = 0;;) switch (_fun108156_ip) {
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
                _fun108156_ip = 76;
                continue _fun108156;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot9 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot9 = var0;
    var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var4
        _fun108159: for (var _fun108159_ip = 0;;) switch (_fun108159_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun108159_ip = 45;
                    continue _fun108159
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 45:
                if (var1) {
                    _fun108159_ip = 54;
                    continue _fun108159
                }
            case 48:
                var1 = var2["@@iterator"];
            case 54:
                if (var1) {
                    _fun108159_ip = 344;
                    continue _fun108159
                }
            case 60:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun108159_ip = 322;
                    continue _fun108159
                }
            case 85:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun108159_ip = 282;
                    continue _fun108159
                }
            case 95:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun108159_ip = 269;
                    continue _fun108159
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
                    _fun108159_ip = 162;
                    continue _fun108159
                }
            case 157:
                var6 = var2.constructor;
            case 162:
                var9 = var8;
                if (!var6) {
                    _fun108159_ip = 178;
                    continue _fun108159
                }
            case 168:
                var6 = var2.constructor;
                var9 = var6.name;
            case 178:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun108159_ip = 248;
                    continue _fun108159
                }
            case 186:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun108159_ip = 248;
                    continue _fun108159
                }
            case 194:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun108159_ip = 233;
                    continue _fun108159
                }
            case 204:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun108159_ip = 246;
                    continue _fun108159
                }
            case 233:
                var8 = _closure1_slot11;
                var6 = var8.bind(var7)(var2, var7);
            case 246:
                _fun108159_ip = 264;
                continue _fun108159;
            case 248:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 264:
                var5 = var6;
                _fun108159_ip = 282;
                continue _fun108159;
            case 269:
                var6 = _closure1_slot11;
                var5 = var6.bind(var7)(var2, var7);
            case 282:
                var3 = var5;
                if (var3) {
                    _fun108159_ip = 322;
                    continue _fun108159
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
                    _fun108159_ip = 329;
                    continue _fun108159
                }
            case 325:
                _closure2_slot0 = var3;
            case 329:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun108160: for (var _fun108160_ip = 0;;) switch (_fun108160_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun108160_ip = 56;
                                continue _fun108160
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
                            _fun108160_ip = 67;
                            continue _fun108160;
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
    var _closure1_slot10 = var0;
    var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var4
        _fun108161: for (var _fun108161_ip = 0;;) switch (_fun108161_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun108161_ip = 23;
                    continue _fun108161
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun108161_ip = 33;
                    continue _fun108161
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
                    _fun108161_ip = 70;
                    continue _fun108161
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun108161_ip = 55;
                    continue _fun108161
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var0 = function(arg0) { // Original name: addToApplicationIdToGuildIds, environment: var4
        _fun108162: for (var _fun108162_ip = 0;;) switch (_fun108162_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.applicationId;
                var4 = var0.guildId;
                var1 = _closure1_slot8;
                var1 = var1.applicationIdToGuildIds;
                var3 = var1[var2];
                var1 = null;
                if (!(var1 == var3)) {
                    _fun108162_ip = 78;
                    continue _fun108162
                }
            case 36:
                var1 = _closure1_slot8;
                var3 = var1.applicationIdToGuildIds;
                var1 = global;
                var1 = var1.Set;
                var5 = var1.prototype;
                var5 = Object.create(var5, {
                    constructor: {
                        value: var1
                    }
                });
                var7 = var5;
                var1 = new var7[var1](var6);
                var1 = var1 instanceof Object ? var1 : var5;
                var3[var2] = var1;
            case 78:
                var1 = _closure1_slot8;
                var1 = var1.applicationIdToGuildIds;
                var3 = var1[var2];
                var1 = var3.add;
                var1 = var1.bind(var3)(var4);
                var1 = _closure1_slot8;
                var1 = var1.applicationIdToGuildIds;
                var3 = global;
                var4 = var3.Set;
                var0 = _closure1_slot8;
                var0 = var0.applicationIdToGuildIds;
                var6 = var0[var2];
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
        }
    };
    var _closure1_slot12 = var0;
    var0 = global;
    var7 = var0.Object;
    var3 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var7)(var2, var0, var1);
    var10 = 0;
    var1 = var5[var10];
    var0 = undefined;
    var1 = var6.bind(var0)(var1);
    var _closure1_slot2 = var1;
    var9 = 1;
    var1 = var5[var9];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var8 = 2;
    var1 = var5[var8];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var7 = 3;
    var1 = var5[var7];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 4;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = {};
    var1.NOT_FETCHED = var10;
    var3 = 'NOT_FETCHED';
    var1[var10] = var3;
    var1.FETCHING = var9;
    var3 = 'FETCHING';
    var1[var9] = var3;
    var1.FETCHED = var8;
    var3 = 'FETCHED';
    var1[var8] = var3;
    var1.ERROR = var7;
    var3 = 'ERROR';
    var1[var7] = var3;
    var _closure1_slot7 = var1;
    var3 = {
        'applicationIdToGuildIds': null,
        'lastFetchTimeMs': null,
        'nextFetchRetryTimeMs': null
    };
    var7 = {};
    var3.applicationIdToGuildIds = var7;
    var7 = var1.NOT_FETCHED;
    var3.fetchState = var7;
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var7 = var3.PersistedStore;
    var3 = function(arg0) { // Environment: var4
        var3 = function() { // Original name: MyGuildApplicationsStore, environment: var5
            _fun108164: for (var _fun108164_ip = 0;;) switch (_fun108164_ip) {
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
                    var0 = _closure1_slot9;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun108164_ip = 69;
                        continue _fun108164
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun108164_ip = 105;
                    continue _fun108164;
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
            _fun108165: for (var _fun108165_ip = 0;;) switch (_fun108165_ip) {
                case 0:
                    var7 = arg0;
                    var0 = null;
                    if (!(var0 != var7)) {
                        _fun108165_ip = 143;
                        continue _fun108165
                    }
                case 12:
                    var1 = _closure1_slot8;
                    var0 = var7.lastFetchTimeMs;
                    var1.lastFetchTimeMs = var0;
                    var1 = _closure1_slot8;
                    var0 = var7.nextFetchRetryTimeMs;
                    var1.nextFetchRetryTimeMs = var0;
                    var1 = _closure1_slot8;
                    var0 = var7.fetchState;
                    var1.fetchState = var0;
                    var5 = var7.applicationIdToGuildIds;
                    var0 = global;
                    for (var1 in var5)
                        case 79: {
                            case 88: var10 = var1;
                            var8 = _closure1_slot8;
                            var9 = var8.applicationIdToGuildIds;
                            var12 = var0.Set;
                            var8 = var7.applicationIdToGuildIds;
                            var13 = var8[var10];
                            var11 = var12.prototype;
                            var11 = Object.create(var11, {
                                constructor: {
                                    value: var12
                                }
                            });
                            var14 = var11;
                            var8 = new var14[var12](var13, var12);
                            var8 = var8 instanceof Object ? var8 : var11;
                            var9[var10] = var8;
                            _fun108165_ip = 79;
                            continue _fun108165;
                        }
                case 143:
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
            var0 = _closure1_slot8;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getGuildIdsForApplication';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun108167: for (var _fun108167_ip = 0;;) switch (_fun108167_ip) {
                case 0:
                    var1 = arg0;
                    var0 = null;
                    if (!(var0 == var1)) {
                        _fun108167_ip = 13;
                        continue _fun108167
                    }
                case 9:
                    var0 = undefined;
                    return var0;
                case 13:
                    var0 = _closure1_slot8;
                    var0 = var0.applicationIdToGuildIds;
                    var0 = var0[var1];
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getLastFetchTimeMs';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot8;
            var0 = var0.lastFetchTimeMs;
            return var0;
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'getNextFetchRetryTimeMs';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot8;
            var0 = var0.nextFetchRetryTimeMs;
            return var0;
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'getFetchState';
        var4.key = var6;
        var5 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot8;
            var0 = var0.fetchState;
            return var0;
        };
        var4.value = var5;
        var0[5] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var3.bind(var0)(var7);
    var3 = 'MyGuildApplicationsStore';
    var7.displayName = var3;
    var7.persistKey = var3;
    var3 = 7;
    var3 = var5[var3];
    var13 = var6.bind(var0)(var3);
    var3 = {};
    var8 = function() { // Original name: handleLogout, environment: var4
        var2 = _closure1_slot8;
        var1 = {};
        var2.applicationIdToGuildIds = var1;
        var1 = _closure1_slot8;
        var2 = null;
        var1.lastFetchTimeMs = var2;
        var1 = _closure1_slot8;
        var1.nextFetchRetryTimeMs = var2;
        var1 = _closure1_slot8;
        var0 = _closure1_slot7;
        var0 = var0.NOT_FETCHED;
        var1.fetchState = var0;
        var0 = undefined;
        return var0;
    };
    var3.LOGOUT = var8;
    var8 = function() { // Original name: handleGuildApplicationsFetch, environment: var4
        var1 = _closure1_slot8;
        var0 = _closure1_slot7;
        var0 = var0.FETCHING;
        var1.fetchState = var0;
        var0 = undefined;
        return var0;
    };
    var3.FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS = var8;
    var8 = function(arg0) { // Original name: handleGuildApplicationsFetchSuccess, environment: var4
        _fun108173: for (var _fun108173_ip = 0;;) switch (_fun108173_ip) {
            case 0:
                var0 = arg0;
                var11 = var0.guildIdToApplicationIds;
                var1 = _closure1_slot8;
                var0 = _closure1_slot7;
                var0 = var0.FETCHED;
                var1.fetchState = var0;
                var1 = _closure1_slot8;
                var0 = global;
                var2 = var0.Date;
                var0 = var2.now;
                var0 = var0.bind(var2)();
                var1.lastFetchTimeMs = var0;
                var1 = _closure1_slot8;
                var0 = {};
                var1.applicationIdToGuildIds = var0;
                var1 = _closure1_slot8;
                var0 = null;
                var1.nextFetchRetryTimeMs = var0;
                var9 = var11;
                var0 = undefined;
                for (var5 in var9)
                    case 96: {
                        case 105: var4 = var5;
                        var2 = _closure1_slot10;
                        var1 = var11[var4];
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.bind(var0)();
                        var1 = var2.done;
                        if (var1) {
                            _fun108173_ip = 96;
                            continue _fun108173
                        }
                        case 133: var12 = _closure1_slot12;
                        var1 = {};
                        var13 = var2.value;
                        var1.applicationId = var13;
                        var1.guildId = var4;
                        var1 = var12.bind(var0)(var1);
                        var12 = var3.bind(var0)();
                        var1 = var12.done;
                        var2 = var12;
                        if (var1) {
                            _fun108173_ip = 96;
                            continue _fun108173
                        }
                        case 172: _fun108173_ip = 133;
                        continue _fun108173;
                    }
            case 174:
                return var0;
        }
    };
    var3.FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS_SUCCESS = var8;
    var8 = function(arg0) { // Original name: handleGuildApplicationsFetchFailure, environment: var4
        _fun108174: for (var _fun108174_ip = 0;;) switch (_fun108174_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.retryAfterSeconds;
                var3 = _closure1_slot8;
                var1 = _closure1_slot7;
                var1 = var1.ERROR;
                var3.fetchState = var1;
                var1 = null;
                if (!(var1 != var2)) {
                    _fun108174_ip = 107;
                    continue _fun108174
                }
            case 38:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 5;
                var3 = var3[var1];
                var1 = undefined;
                var1 = var4.bind(var1)(var3);
                var1 = var1.Millis;
                var1 = var1.SECOND;
                var2 = var2 * var1;
                var1 = _closure1_slot8;
                var0 = global;
                var3 = var0.Date;
                var0 = var3.now;
                var0 = var0.bind(var3)();
                var0 = var0 + var2;
                var1.nextFetchRetryTimeMs = var0;
            case 107:
                var0 = undefined;
                return var0;
        }
    };
    var3.FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS_FAILURE = var8;
    var8 = function(arg0) { // Original name: handleIntegrationCreate, environment: var4
        _fun108175: for (var _fun108175_ip = 0;;) switch (_fun108175_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.application;
                var0 = var0.guildId;
                var1 = null;
                if (!(var1 != var3)) {
                    _fun108175_ip = 48;
                    continue _fun108175
                }
            case 19:
                var2 = _closure1_slot12;
                var1 = {};
                var3 = var3.id;
                var1.applicationId = var3;
                var1.guildId = var0;
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
            case 48:
                var0 = undefined;
                return var0;
        }
    };
    var3.INTEGRATION_CREATE = var8;
    var4 = function(arg0) { // Original name: handleIntegrationDelete, environment: var4
        _fun108176: for (var _fun108176_ip = 0;;) switch (_fun108176_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.applicationId;
                var1 = var0.guildId;
                var3 = null;
                if (!(var3 != var2)) {
                    _fun108176_ip = 143;
                    continue _fun108176
                }
            case 22:
                var0 = {};
                var0.applicationId = var2;
                var0.guildId = var1;
                var2 = var0.applicationId;
                var4 = var0.guildId;
                var1 = _closure1_slot8;
                var1 = var1.applicationIdToGuildIds;
                var1 = var1[var2];
                if (!(var3 != var1)) {
                    _fun108176_ip = 143;
                    continue _fun108176
                }
            case 63:
                var1 = _closure1_slot8;
                var1 = var1.applicationIdToGuildIds;
                var3 = var1[var2];
                var1 = var3.delete;
                var1 = var1.bind(var3)(var4);
                var1 = _closure1_slot8;
                var1 = var1.applicationIdToGuildIds;
                var3 = global;
                var4 = var3.Set;
                var0 = _closure1_slot8;
                var0 = var0.applicationIdToGuildIds;
                var5 = var0[var2];
                var3 = var4.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var4
                    }
                });
                var6 = var3;
                var0 = new var6[var4](var5, var4);
                var0 = var0 instanceof Object ? var0 : var3;
                var1[var2] = var0;
            case 143:
                var0 = undefined;
                return var0;
        }
    };
    var3.INTEGRATION_DELETE = var4;
    var4 = var7.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var7
        }
    });
    var14 = var4;
    var12 = var3;
    var3 = new var14[var7](var13, var12, var11);
    var3 = var3 instanceof Object ? var3 : var4;
    var4 = 8;
    var5 = var5[var4];
    var4 = arg1;
    var6 = var4.bind(var0)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/global_discovery_apps/stores/MyGuildApplicationsStore.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.FetchState = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 667, 566, 806, 2]);