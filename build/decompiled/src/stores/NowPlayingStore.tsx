// stores/NowPlayingStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var0 = function() {
        _fun95957: for (var _fun95957_ip = 0;;) switch (_fun95957_ip) {
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
                _fun95957_ip = 76;
                continue _fun95957;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
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
    var0 = function arg0() {
        var3 = arg0;
        var1 = false;
        var _closure2_slot0 = var1;
        var2 = var3.forEach;
        var1 = function(arg0) { // Environment: var0
            _fun95961: for (var _fun95961_ip = 0;;) switch (_fun95961_ip) {
                case 0:
                    var2 = _closure1_slot17;
                    var0 = undefined;
                    var1 = arg0;
                    var2 = var2.bind(var0)(var1);
                    var1 = false;
                    var2 = var1 !== var2;
                    if (var2) {
                        _fun95961_ip = 33;
                        continue _fun95961
                    }
                case 26:
                    var2 = _closure2_slot0;
                case 33:
                    _closure2_slot0 = var2;
                    return var0;
            }
        };
        var1 = var2.bind(var3)(var1);
        var0 = _closure2_slot0;
        return var0;
    };
    var _closure1_slot15 = var0;
    var0 = function arg0() {
        _fun95962: for (var _fun95962_ip = 0;;) switch (_fun95962_ip) {
            case 0:
                var1 = arg0;
                var0 = _closure1_slot13;
                var0 = var0[var1];
                var4 = null;
                if (!(var4 != var0)) {
                    _fun95962_ip = 133;
                    continue _fun95962
                }
            case 20:
                var3 = var0.gameId;
                var0 = _closure1_slot12;
                var0 = var0[var3];
                if (!(var4 != var0)) {
                    _fun95962_ip = 108;
                    continue _fun95962
                }
            case 38:
                var0 = {};
                var6 = _closure1_slot12;
                var7 = var0;
                var4 = copyDataProperties(var7, var6);
                _closure1_slot12 = var0;
                var0 = var0[var3];
                var0 = delete var0[var1];
                var0 = global;
                var5 = var0.Object;
                var4 = var5.values;
                var0 = _closure1_slot12;
                var0 = var0[var3];
                var0 = var4.bind(var5)(var0);
                var4 = var0.length;
                var0 = 0;
                if (!(var0 === var4)) {
                    _fun95962_ip = 108;
                    continue _fun95962
                }
            case 100:
                var0 = _closure1_slot12;
                var0 = delete var0[var3];
            case 108:
                var0 = {};
                var6 = _closure1_slot13;
                var7 = var0;
                var3 = copyDataProperties(var7, var6);
                _closure1_slot13 = var0;
                var0 = delete var0[var1];
                var0 = true;
                return var0;
            case 133:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot16 = var0;
    var0 = function arg0() {
        _fun95963: for (var _fun95963_ip = 0;;) switch (_fun95963_ip) {
            case 0:
                var2 = arg0;
                var0 = var2.user;
                var _closure2_slot0 = var0;
                var5 = var2.activities;
                var2 = undefined;
                var _closure2_slot1 = var2;
                var3 = null;
                if (!(var3 != var0)) {
                    _fun95963_ip = 108;
                    continue _fun95963
                }
            case 32:
                var4 = var5.filter;
                var3 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var1 = var0.type;
                    var0 = _closure1_slot10;
                    var0 = var0.CUSTOM_STATUS;
                    var0 = var1 !== var0;
                    return var0;
                };
                var5 = var4.bind(var5)(var3);
                var4 = var5.length;
                var3 = 0;
                if (!(var3 !== var4)) {
                    _fun95963_ip = 89;
                    continue _fun95963
                }
            case 60:
                var3 = false;
                _closure2_slot1 = var3;
                var4 = var5.forEach;
                var3 = function(arg0) { // Environment: var1
                    _fun95965: for (var _fun95965_ip = 0;;) switch (_fun95965_ip) {
                        case 0:
                            var4 = _closure2_slot0;
                            var3 = function arg0, arg1() {
                                _fun95966: for (var _fun95966_ip = 0;;) switch (_fun95966_ip) {
                                    case 0:
                                        var4 = arg0;
                                        var0 = arg1;
                                        var5 = _closure1_slot0;
                                        var3 = _closure1_slot1;
                                        var2 = 9;
                                        var3 = var3[var2];
                                        var2 = undefined;
                                        var3 = var5.bind(var2)(var3);
                                        var7 = var3.bind(var2)(var4);
                                        var5 = null;
                                        if (!(var5 != var7)) {
                                            _fun95966_ip = 252;
                                            continue _fun95966
                                        }
                                    case 45:
                                        var6 = _closure1_slot13;
                                        var3 = var0.id;
                                        var6 = var6[var3];
                                        var3 = var5 != var6;
                                        if (!var3) {
                                            _fun95966_ip = 75;
                                            continue _fun95966
                                        }
                                    case 65:
                                        var6 = var6.gameId;
                                        var3 = var6 !== var7;
                                    case 75:
                                        if (!var3) {
                                            _fun95966_ip = 92;
                                            continue _fun95966
                                        }
                                    case 78:
                                        var6 = _closure1_slot16;
                                        var3 = var0.id;
                                        var3 = var6.bind(var2)(var3);
                                    case 92:
                                        var6 = var4.timestamps;
                                        var8 = var5 == var6;
                                        var3 = undefined;
                                        if (var8) {
                                            _fun95966_ip = 112;
                                            continue _fun95966
                                        }
                                    case 107:
                                        var3 = var6.start;
                                    case 112:
                                        if (!(var5 == var3)) {
                                            _fun95966_ip = 133;
                                            continue _fun95966
                                        }
                                    case 116:
                                        var5 = global;
                                        var6 = var5.Date;
                                        var5 = var6.now;
                                        var3 = var5.bind(var6)();
                                    case 133:
                                        var6 = {};
                                        var5 = var0.id;
                                        var6.userId = var5;
                                        var6.activity = var4;
                                        var6.startedPlaying = var3;
                                        var3 = {};
                                        var9 = _closure1_slot12;
                                        var10 = var3;
                                        var4 = copyDataProperties(var10, var9);
                                        var4 = {};
                                        var5 = _closure1_slot12;
                                        var9 = var5[var7];
                                        var10 = var4;
                                        var5 = copyDataProperties(var10, var9);
                                        var5 = var6.userId;
                                        var4[var5] = var6;
                                        var3[var7] = var4;
                                        _closure1_slot12 = var3;
                                        var3 = {};
                                        var9 = _closure1_slot13;
                                        var10 = var3;
                                        var4 = copyDataProperties(var10, var9);
                                        var5 = var6.userId;
                                        var4 = {};
                                        var4.gameId = var7;
                                        var6 = var6.startedPlaying;
                                        var4.startedPlaying = var6;
                                        var3[var5] = var4;
                                        _closure1_slot13 = var3;
                                        var3 = true;
                                        return var3;
                                    case 252:
                                        var1 = _closure1_slot16;
                                        var0 = var0.id;
                                        var0 = var1.bind(var2)(var0);
                                        return var0;
                                }
                            };
                            var0 = undefined;
                            var1 = arg0;
                            var1 = var3.bind(var0)(var1, var4);
                            if (!var1) {
                                _fun95965_ip = 36;
                                continue _fun95965
                            }
                        case 30:
                            var1 = true;
                            _closure2_slot1 = var1;
                        case 36:
                            return var0;
                    }
                };
                var3 = var4.bind(var5)(var3);
                var1 = _closure2_slot1;
                return var1;
            case 89:
                var1 = _closure1_slot16;
                var0 = var0.id;
                var0 = var1.bind(var2)(var0);
                return var0;
            case 108:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot17 = var0;
    var0 = function() {
        _fun95967: for (var _fun95967_ip = 0;;) switch (_fun95967_ip) {
            case 0:
                var1 = _closure1_slot7;
                var0 = var1.shouldFetch;
                var1 = var0.bind(var1)();
                if (var1) {
                    _fun95967_ip = 24;
                    continue _fun95967
                }
            case 20:
                var1 = _closure1_slot11;
            case 24:
                var0 = false;
                if (var1) {
                    _fun95967_ip = 44;
                    continue _fun95967
                }
            case 29:
                var3 = function() {
                    var2 = {};
                    _closure1_slot12 = var2;
                    var2 = {};
                    _closure1_slot13 = var2;
                    var2 = false;
                    var _closure3_slot0 = var2;
                    var2 = _closure1_slot8;
                    var1 = var2.getUserIds;
                    var3 = var1.bind(var2)();
                    var2 = var3.forEach;
                    var1 = function(arg0) { // Environment: var0
                        _fun95969: for (var _fun95969_ip = 0;;) switch (_fun95969_ip) {
                            case 0:
                                var4 = arg0;
                                var2 = _closure1_slot9;
                                var1 = var2.getUser;
                                var3 = var1.bind(var2)(var4);
                                var1 = null;
                                if (!(var1 != var3)) {
                                    _fun95969_ip = 81;
                                    continue _fun95969
                                }
                            case 27:
                                var2 = _closure1_slot17;
                                var1 = {};
                                var1.user = var3;
                                var3 = _closure1_slot8;
                                var0 = var3.getActivities;
                                var0 = var0.bind(var3)(var4);
                                var1.activities = var0;
                                var0 = undefined;
                                var1 = var2.bind(var0)(var1);
                                if (var1) {
                                    _fun95969_ip = 74;
                                    continue _fun95969
                                }
                            case 67:
                                var1 = _closure3_slot0;
                            case 74:
                                _closure3_slot0 = var1;
                            case 81:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
                    var0 = _closure3_slot0;
                    return var0;
                };
                var1 = undefined;
                var0 = var3.bind(var1)();
            case 44:
                var3 = _closure1_slot7;
                var1 = var3.shouldFetch;
                var1 = var1.bind(var3)();
                var1 = !var1;
                _closure1_slot11 = var1;
                return var0;
        }
    };
    var _closure1_slot18 = var0;
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
    var1 = var1.ActivityTypes;
    var _closure1_slot10 = var1;
    var1 = false;
    var _closure1_slot11 = var1;
    var1 = {};
    var _closure1_slot12 = var1;
    var1 = {};
    var _closure1_slot13 = var1;
    var1 = 10;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun95971: for (var _fun95971_ip = 0;;) switch (_fun95971_ip) {
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
                        _fun95971_ip = 69;
                        continue _fun95971
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun95971_ip = 105;
                    continue _fun95971;
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
        var0 = function() {
            var3 = this;
            var5 = var3.waitFor;
            var4 = _closure1_slot8;
            var2 = _closure1_slot7;
            var1 = _closure1_slot9;
            var1 = var5.bind(var3)(var4, var2, var1);
            var2 = var3.syncWith;
            var4 = _closure1_slot7;
            var1 = new Array(1);
            var1[0] = var4;
            var0 = _closure1_slot18;
            var0 = var2.bind(var3)(var1, var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(6);
        var0[0] = var4;
        var4 = {};
        var6 = 'games';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot12;
            return var0;
        };
        var4.get = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'usersPlaying';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot13;
            return var0;
        };
        var4.get = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'gameIds';
        var4.key = var6;
        var6 = function() {
            var0 = global;
            var2 = var0.Object;
            var1 = var2.keys;
            var0 = _closure1_slot12;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.get = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'getNowPlaying';
        var4.key = var6;
        var6 = function arg0() {
            var1 = _closure1_slot12;
            var0 = arg0;
            var0 = var1[var0];
            return var0;
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'getUserGame';
        var4.key = var6;
        var5 = function arg0() {
            var1 = _closure1_slot13;
            var0 = arg0;
            var0 = var1[var0];
            return var0;
        };
        var4.value = var5;
        var0[5] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'NowPlayingStore';
    var7.displayName = var1;
    var1 = 11;
    var1 = var5[var1];
    var11 = var6.bind(var0)(var1);
    var1 = {};
    var8 = function() {
        var0 = {};
        _closure1_slot12 = var0;
        var0 = {};
        _closure1_slot13 = var0;
        var0 = undefined;
        return var0;
    };
    var1.CONNECTION_OPEN = var8;
    var8 = function arg0() {
        _fun95979: for (var _fun95979_ip = 0;;) switch (_fun95979_ip) {
            case 0:
                var1 = arg0;
                var4 = var1.guilds;
                var3 = var1.presences;
                var1 = false;
                var _closure2_slot0 = var1;
                var2 = var4.forEach;
                var1 = function(arg0) { // Environment: var0
                    _fun95980: for (var _fun95980_ip = 0;;) switch (_fun95980_ip) {
                        case 0:
                            var2 = _closure1_slot15;
                            var0 = arg0;
                            var1 = var0.presences;
                            var0 = undefined;
                            var1 = var2.bind(var0)(var1);
                            if (!var1) {
                                _fun95980_ip = 35;
                                continue _fun95980
                            }
                        case 26:
                            var1 = true;
                            _closure2_slot0 = var1;
                        case 35:
                            return var0;
                    }
                };
                var1 = var2.bind(var4)(var1);
                var2 = _closure1_slot15;
                var1 = undefined;
                var1 = var2.bind(var1)(var3);
                if (!var1) {
                    _fun95979_ip = 63;
                    continue _fun95979
                }
            case 57:
                var1 = true;
                _closure2_slot0 = var1;
            case 63:
                var0 = _closure2_slot0;
                return var0;
        }
    };
    var1.CONNECTION_OPEN_SUPPLEMENTAL = var8;
    var8 = function() {
        var0 = {};
        _closure1_slot12 = var0;
        var0 = {};
        _closure1_slot13 = var0;
        var0 = undefined;
        return var0;
    };
    var1.LOGOUT = var8;
    var8 = function arg0() {
        var1 = arg0;
        var3 = var1.updates;
        var2 = var3.map;
        var1 = function(arg0) { // Environment: var0
            var2 = _closure1_slot17;
            var1 = undefined;
            var0 = arg0;
            var0 = var2.bind(var1)(var0);
            return var0;
        };
        var2 = var2.bind(var3)(var1);
        var1 = var2.some;
        var0 = function(arg0) { // Environment: var0
            var0 = arg0;
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.PRESENCE_UPDATES = var8;
    var3 = function arg0() {
        var0 = arg0;
        var2 = var0.presences;
        var1 = _closure1_slot15;
        var0 = undefined;
        var0 = var1.bind(var0)(var2);
        return var0;
    };
    var1.PRESENCES_REPLACE = var3;
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
    var3 = 'stores/NowPlayingStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 6935, 3569, 1613, 660, 12463, 566, 806, 2]);