// modules/hang_status/HangStatusStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var9
        _fun31803: for (var _fun31803_ip = 0;;) switch (_fun31803_ip) {
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
                _fun31803_ip = 74;
                continue _fun31803;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot17 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot17 = var0;
    var3 = function() { // Original name: createState, environment: var9
        var0 = {};
        var1 = _closure1_slot10;
        var0.recentStatuses = var1;
        var1 = new Array(0);
        var0.favoritedStatuses = var1;
        var1 = null;
        var0.currentDefaultStatus = var1;
        return var0;
    };
    var _closure1_slot18 = var3;
    var4 = function() { // Original name: reset, environment: var9
        var1 = _closure1_slot18;
        var0 = undefined;
        var1 = var1.bind(var0)();
        _closure1_slot16 = var1;
        return var0;
    };
    var0 = function() { // Original name: handleRunningGameStoreChange, environment: var9
        _fun31808: for (var _fun31808_ip = 0;;) switch (_fun31808_ip) {
            case 0:
                var0 = _closure1_slot15;
                var4 = null;
                var0 = var4 != var0;
                if (!var0) {
                    _fun31808_ip = 109;
                    continue _fun31808
                }
            case 16:
                var2 = _closure1_slot8;
                var1 = var2.getRunningVerifiedApplicationIds;
                var5 = var1.bind(var2)();
                var2 = var5.includes;
                var1 = _closure1_slot15;
                var1 = var2.bind(var5)(var1);
                var1 = !var1;
                if (!var1) {
                    _fun31808_ip = 106;
                    continue _fun31808
                }
            case 50:
                var _closure1_slot15 = var4;
                var2 = _closure1_slot16;
                var5 = var2.currentDefaultStatus;
                var6 = var4 == var5;
                var2 = undefined;
                if (var6) {
                    _fun31808_ip = 79;
                    continue _fun31808
                }
            case 73:
                var2 = var5.gameActivityHangStatus;
            case 79:
                var5 = var4 != var2;
                var1 = true;
                if (!var5) {
                    _fun31808_ip = 106;
                    continue _fun31808
                }
            case 88:
                var3 = _closure1_slot16;
                var3 = var3.currentDefaultStatus;
                var3.gameActivityHangStatus = var4;
                var1 = true;
            case 106:
                var0 = var1;
            case 109:
                return var0;
        }
    };
    var _closure1_slot19 = var0;
    var0 = global;
    var10 = var0.Object;
    var8 = var10.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var10)(var2, var0, var1);
    var0 = 0;
    var1 = var6[var0];
    var0 = undefined;
    var1 = var7.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 2;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 3;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 4;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 5;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot8 = var1;
    var1 = 6;
    var8 = var6[var1];
    var8 = var5.bind(var0)(var8);
    var10 = var8.HangStatusTypes;
    var _closure1_slot9 = var10;
    var8 = var8.SYSTEM_HANG_STATUS_TYPES;
    var _closure1_slot10 = var8;
    var8 = 7;
    var8 = var6[var8];
    var8 = var5.bind(var0)(var8);
    var8 = var8.ActivityTypes;
    var _closure1_slot11 = var8;
    var3 = var3.bind(var0)();
    var _closure1_slot16 = var3;
    var3 = 13;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var8 = var3.PersistedStore;
    var3 = function(arg0) { // Environment: var9
        var3 = function() { // Original name: HangStatusStore, environment: var5
            _fun31810: for (var _fun31810_ip = 0;;) switch (_fun31810_ip) {
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
                    var0 = _closure1_slot17;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun31810_ip = 69;
                        continue _fun31810
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun31810_ip = 105;
                    continue _fun31810;
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
        var0 = 'initialize';
        var4.key = var0;
        var0 = function(arg0) { // Original name: value, environment: var5
            _fun31811: for (var _fun31811_ip = 0;;) switch (_fun31811_ip) {
                case 0:
                    var3 = arg0;
                    var4 = this;
                    var2 = {};
                    var5 = _closure1_slot18;
                    var0 = undefined;
                    var6 = var5.bind(var0)();
                    var7 = var2;
                    var5 = copyDataProperties(var7, var6);
                    var5 = null;
                    if (!(var5 == var3)) {
                        _fun31811_ip = 36;
                        continue _fun31811
                    }
                case 34:
                    var3 = {};
                case 36:
                    var7 = var2;
                    var6 = var3;
                    var3 = copyDataProperties(var7, var6);
                    _closure1_slot16 = var2;
                    var3 = var4.waitFor;
                    var2 = _closure1_slot8;
                    var2 = var3.bind(var4)(var2);
                    var3 = var4.syncWith;
                    var5 = _closure1_slot8;
                    var2 = new Array(1);
                    var2[0] = var5;
                    var1 = _closure1_slot19;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(10);
        var0[0] = var4;
        var4 = {};
        var6 = 'getState';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot16;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getCurrentHangStatus';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot12;
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getCustomHangStatus';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot13;
            return var0;
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'getGameActivityHangStatus';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot15;
            return var0;
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'getRecentStatuses';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot16;
            var0 = var0.recentStatuses;
            return var0;
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'getFavoritedStatuses';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot16;
            var0 = var0.favoritedStatuses;
            return var0;
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'getCurrentDefaultStatus';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot16;
            var0 = var0.currentDefaultStatus;
            return var0;
        };
        var4.value = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'getHangStatusActivity';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            _fun31819: for (var _fun31819_ip = 0;;) switch (_fun31819_ip) {
                case 0:
                    var2 = _closure1_slot12;
                    var0 = null;
                    var2 = var0 == var2;
                    if (var2) {
                        _fun31819_ip = 20;
                        continue _fun31819
                    }
                case 16:
                    var0 = _closure1_slot14;
                case 20:
                    return var0;
            }
        };
        var4.value = var6;
        var0[8] = var4;
        var4 = {};
        var6 = 'isFavorited';
        var4.key = var6;
        var5 = function(arg0) { // Original name: value, environment: var5
            var4 = arg0;
            var _closure3_slot0 = var4;
            var5 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 9;
            var2 = var3[var2];
            var3 = undefined;
            var2 = var5.bind(var3)(var2);
            var2 = var2.bind(var3)(var4);
            var _closure3_slot1 = var2;
            var1 = _closure1_slot16;
            var2 = var1.favoritedStatuses;
            var1 = var2.some;
            var0 = function(arg0) { // Environment: var0
                _fun31821: for (var _fun31821_ip = 0;;) switch (_fun31821_ip) {
                    case 0:
                        var2 = arg0;
                        var1 = _closure1_slot1;
                        var0 = _closure1_slot2;
                        var6 = 9;
                        var0 = var0[var6];
                        var5 = undefined;
                        var0 = var1.bind(var5)(var0);
                        var0 = var0.bind(var5)(var2);
                        if (!var0) {
                            _fun31821_ip = 43;
                            continue _fun31821
                        }
                    case 36:
                        var0 = _closure3_slot1;
                    case 43:
                        if (!var0) {
                            _fun31821_ip = 57;
                            continue _fun31821
                        }
                    case 46:
                        var1 = _closure3_slot0;
                        var0 = var2 === var1;
                    case 57:
                        if (var0) {
                            _fun31821_ip = 173;
                            continue _fun31821
                        }
                    case 60:
                        var4 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var1 = var1[var6];
                        var1 = var4.bind(var5)(var1);
                        var1 = var1.bind(var5)(var2);
                        var1 = !var1;
                        if (!var1) {
                            _fun31821_ip = 98;
                            continue _fun31821
                        }
                    case 88:
                        var4 = _closure3_slot1;
                        var1 = !var4;
                    case 98:
                        if (!var1) {
                            _fun31821_ip = 122;
                            continue _fun31821
                        }
                    case 101:
                        var4 = _closure3_slot0;
                        var6 = var4.status;
                        var4 = var2.status;
                        var1 = var6 === var4;
                    case 122:
                        if (!var1) {
                            _fun31821_ip = 170;
                            continue _fun31821
                        }
                    case 125:
                        var4 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var3 = 12;
                        var3 = var6[var3];
                        var4 = var4.bind(var5)(var3);
                        var3 = _closure3_slot0;
                        var3 = var3.emoji;
                        var2 = var2.emoji;
                        var1 = var4.bind(var5)(var3, var2);
                    case 170:
                        var0 = var1;
                    case 173:
                        return var0;
                }
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var5;
        var0[9] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var8 = var3.bind(var0)(var8);
    var3 = 'HangStatusStore';
    var8.displayName = var3;
    var8.persistKey = var3;
    var3 = new Array(3);
    var10 = function(arg0) { // Environment: var9
        _fun31822: for (var _fun31822_ip = 0;;) switch (_fun31822_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.currentDefaultStatus;
                var3 = null;
                if (!(var3 != var0)) {
                    _fun31822_ip = 31;
                    continue _fun31822
                }
            case 15:
                var0 = var1.currentDefaultStatus;
                var0 = var0.gameActivityHangStatus;
                if (!(var3 != var0)) {
                    _fun31822_ip = 33;
                    continue _fun31822
                }
            case 31:
                return var1;
            case 33:
                var2 = {};
                var4 = var1.currentDefaultStatus;
                var5 = var2;
                var0 = copyDataProperties(var5, var4);
                var0 = 'gameActivityHangStatus';
                var2[var0] = var3;
                var0 = {};
                var5 = var0;
                var4 = var1;
                var1 = copyDataProperties(var5, var4);
                var1 = 'currentDefaultStatus';
                var0[var1] = var2;
                return var0;
        }
    };
    var3[0] = var10;
    var10 = function(arg0) { // Environment: var9
        _fun31823: for (var _fun31823_ip = 0;;) switch (_fun31823_ip) {
            case 0:
                var0 = arg0;
                var1 = 'recentCustomStatuses';
                var1 = var1 in var0;
                if (!var1) {
                    _fun31823_ip = 23;
                    continue _fun31823
                }
            case 16:
                var1 = delete var0.recentCustomStatuses;
            case 23:
                return var0;
        }
    };
    var3[1] = var10;
    var10 = function(arg0) { // Environment: var9
        _fun31824: for (var _fun31824_ip = 0;;) switch (_fun31824_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.currentDefaultStatus;
                var1 = null;
                var1 = var1 != var2;
                if (!var1) {
                    _fun31824_ip = 32;
                    continue _fun31824
                }
            case 18:
                var3 = var0.currentDefaultStatus;
                var2 = 'expiresAt';
                var1 = var2 in var3;
            case 32:
                if (!var1) {
                    _fun31824_ip = 46;
                    continue _fun31824
                }
            case 35:
                var1 = var0.currentDefaultStatus;
                var1 = delete var1.expiresAt;
            case 46:
                return var0;
        }
    };
    var3[2] = var10;
    var8.migrations = var3;
    var3 = 14;
    var3 = var6[var3];
    var13 = var7.bind(var0)(var3);
    var3 = {};
    var3.LOGOUT = var4;
    var10 = function(arg0) { // Original name: handleSetHangStatus, environment: var9
        _fun31825: for (var _fun31825_ip = 0;;) switch (_fun31825_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.status;
                var _closure2_slot0 = var4;
                var5 = var0.guildId;
                var1 = var0.saveAsDefault;
                var7 = _closure1_slot1;
                var3 = _closure1_slot2;
                var0 = 8;
                var3 = var3[var0];
                var0 = undefined;
                var8 = var7.bind(var0)(var3);
                var3 = _closure1_slot9;
                var3 = var3.CUSTOM;
                var7 = var4 !== var3;
                var3 = 'Hang Status cannot be custom';
                var3 = var8.bind(var0)(var7, var3);
                var _closure1_slot12 = var4;
                var3 = null;
                var _closure1_slot13 = var3;
                _closure1_slot15 = var3;
                if (!(var3 != var4)) {
                    _fun31825_ip = 220;
                    continue _fun31825
                }
            case 97:
                var3 = _closure1_slot16;
                var11 = var3.recentStatuses;
                var8 = new Array(0);
                var3 = 0;
                var12 = var8;
                var10 = 0;
                var7 = arraySpread(var12, var11, var10);
                var7 = var8.findIndex;
                var6 = function(arg0) { // Environment: var6
                    _fun31826: for (var _fun31826_ip = 0;;) switch (_fun31826_ip) {
                        case 0:
                            var2 = arg0;
                            var3 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 9;
                            var0 = var1[var0];
                            var1 = undefined;
                            var0 = var3.bind(var1)(var0);
                            var0 = var0.bind(var1)(var2);
                            if (!var0) {
                                _fun31826_ip = 47;
                                continue _fun31826
                            }
                        case 36:
                            var1 = _closure2_slot0;
                            var0 = var2 === var1;
                        case 47:
                            return var0;
                    }
                };
                var7 = var7.bind(var8)(var6);
                if (!(!(var7 >= var3))) {
                    _fun31825_ip = 174;
                    continue _fun31825
                }
            case 142:
                var6 = var8.length;
                var3 = 7;
                if (!(var3 === var6)) {
                    _fun31825_ip = 189;
                    continue _fun31825
                }
            case 154:
                var9 = var8.splice;
                var6 = 6;
                var3 = 1;
                var3 = var9.bind(var8)(var6, var3);
                _fun31825_ip = 189;
                continue _fun31825;
            case 174:
                var6 = var8.splice;
                var3 = 1;
                var3 = var6.bind(var8)(var7, var3);
            case 189:
                var6 = _closure1_slot16;
                var3 = new Array(1);
                var3[0] = var4;
                var10 = 1;
                var12 = var3;
                var11 = var8;
                var7 = arraySpread(var12, var11, var10);
                var6.recentStatuses = var3;
            case 220:
                if (!var1) {
                    _fun31825_ip = 257;
                    continue _fun31825
                }
            case 223:
                var3 = _closure1_slot16;
                var1 = {};
                var1.status = var4;
                var4 = _closure1_slot13;
                var1.customHangStatus = var4;
                var4 = _closure1_slot15;
                var1.gameActivityHangStatus = var4;
                var3.currentDefaultStatus = var1;
            case 257:
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 10;
                var1 = var4[var1];
                var4 = var3.bind(var0)(var1);
                var3 = var4.getHangStatusExperiment;
                var1 = {};
                var1.guildId = var5;
                var5 = 'UpdateHangStatus';
                var1.location = var5;
                var1 = var3.bind(var4)(var1);
                var7 = var1.defaultStatusVariant;
                var1 = {};
                var3 = _closure1_slot11;
                var3 = var3.HANG_STATUS;
                var1.type = var3;
                var3 = 'Hang Status';
                var1.name = var3;
                var6 = _closure1_slot12;
                var3 = global;
                var3 = var3.HermesInternal;
                var5 = var3.concat;
                var4 = '';
                var3 = ':';
                var3 = var5.bind(var4)(var6, var3, var7);
                var1.state = var3;
                var _closure1_slot14 = var1;
                return var0;
        }
    };
    var3.UPDATE_HANG_STATUS = var10;
    var10 = function(arg0) { // Original name: handleSetCustomHangStatus, environment: var9
        _fun31827: for (var _fun31827_ip = 0;;) switch (_fun31827_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.status;
                var _closure2_slot0 = var3;
                var2 = var0.emoji;
                var _closure2_slot1 = var2;
                var0 = var0.saveAsDefault;
                var4 = _closure1_slot9;
                var4 = var4.CUSTOM;
                _closure1_slot12 = var4;
                var4 = null;
                _closure1_slot15 = var4;
                var4 = {};
                var4.status = var3;
                var4.emoji = var2;
                _closure1_slot13 = var4;
                var4 = _closure1_slot16;
                var10 = var4.recentStatuses;
                var7 = new Array(0);
                var4 = 0;
                var11 = var7;
                var9 = 0;
                var6 = arraySpread(var11, var10, var9);
                var6 = var7.findIndex;
                var5 = function(arg0) { // Environment: var5
                    _fun31828: for (var _fun31828_ip = 0;;) switch (_fun31828_ip) {
                        case 0:
                            var1 = arg0;
                            var3 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var0 = 9;
                            var0 = var4[var0];
                            var4 = undefined;
                            var0 = var3.bind(var4)(var0);
                            var0 = var0.bind(var4)(var1);
                            var0 = !var0;
                            if (!var0) {
                                _fun31828_ip = 55;
                                continue _fun31828
                            }
                        case 39:
                            var5 = var1.status;
                            var3 = _closure2_slot0;
                            var0 = var5 === var3;
                        case 55:
                            if (!var0) {
                                _fun31828_ip = 103;
                                continue _fun31828
                            }
                        case 58:
                            var3 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var2 = 11;
                            var2 = var5[var2];
                            var4 = var3.bind(var4)(var2);
                            var3 = var4.isEqual;
                            var2 = var1.emoji;
                            var1 = _closure2_slot1;
                            var0 = var3.bind(var4)(var2, var1);
                        case 103:
                            return var0;
                    }
                };
                var6 = var6.bind(var7)(var5);
                if (!(!(var6 >= var4))) {
                    _fun31827_ip = 145;
                    continue _fun31827
                }
            case 113:
                var5 = var7.length;
                var4 = 7;
                if (!(var4 === var5)) {
                    _fun31827_ip = 160;
                    continue _fun31827
                }
            case 125:
                var8 = var7.splice;
                var5 = 6;
                var4 = 1;
                var4 = var8.bind(var7)(var5, var4);
                _fun31827_ip = 160;
                continue _fun31827;
            case 145:
                var5 = var7.splice;
                var4 = 1;
                var4 = var5.bind(var7)(var6, var4);
            case 160:
                var5 = _closure1_slot16;
                var6 = _closure1_slot13;
                var4 = new Array(1);
                var4[0] = var6;
                var9 = 1;
                var11 = var4;
                var10 = var7;
                var6 = arraySpread(var11, var10, var9);
                var5.recentStatuses = var4;
                if (!var0) {
                    _fun31827_ip = 236;
                    continue _fun31827
                }
            case 198:
                var4 = _closure1_slot16;
                var0 = {};
                var5 = _closure1_slot12;
                var0.status = var5;
                var5 = _closure1_slot13;
                var0.customHangStatus = var5;
                var5 = _closure1_slot15;
                var0.gameActivityHangStatus = var5;
                var4.currentDefaultStatus = var0;
            case 236:
                var0 = {};
                var4 = _closure1_slot11;
                var4 = var4.HANG_STATUS;
                var0.type = var4;
                var4 = 'Hang Status';
                var0.name = var4;
                var4 = _closure1_slot12;
                var0.state = var4;
                var0.details = var3;
                var0.emoji = var2;
                _closure1_slot14 = var0;
                var0 = undefined;
                return var0;
        }
    };
    var3.UPDATE_HANG_STATUS_CUSTOM = var10;
    var10 = function(arg0) { // Original name: handleSetGameActivityHangStatus, environment: var9
        _fun31829: for (var _fun31829_ip = 0;;) switch (_fun31829_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.applicationId;
                var0 = var0.saveAsDefault;
                _closure1_slot15 = var1;
                var1 = null;
                _closure1_slot12 = var1;
                _closure1_slot13 = var1;
                _closure1_slot14 = var1;
                if (!var0) {
                    _fun31829_ip = 76;
                    continue _fun31829
                }
            case 38:
                var1 = _closure1_slot16;
                var0 = {};
                var3 = _closure1_slot12;
                var0.status = var3;
                var3 = _closure1_slot13;
                var0.customHangStatus = var3;
                var2 = _closure1_slot15;
                var0.gameActivityHangStatus = var2;
                var1.currentDefaultStatus = var0;
            case 76:
                var0 = undefined;
                return var0;
        }
    };
    var3.UPDATE_HANG_STATUS_GAME_ACTIVITY = var10;
    var10 = function(arg0) { // Original name: handleDeleteInvalidHangStatus, environment: var9
        var0 = arg0;
        var5 = var0.statuses;
        var1 = _closure1_slot16;
        var8 = var1.recentStatuses;
        var3 = new Array(0);
        var9 = var3;
        var7 = 0;
        var1 = arraySpread(var9, var8, var7);
        var _closure2_slot0 = var3;
        var1 = _closure1_slot16;
        var8 = var1.favoritedStatuses;
        var1 = new Array(0);
        var9 = var1;
        var4 = arraySpread(var9, var8, var7);
        var _closure2_slot1 = var1;
        var4 = var5.forEach;
        var2 = function(arg0) { // Environment: var2
            _fun31831: for (var _fun31831_ip = 0;;) switch (_fun31831_ip) {
                case 0:
                    var0 = arg0;
                    var4 = var0.status;
                    var _closure3_slot0 = var4;
                    var7 = var0.emoji;
                    var _closure3_slot1 = var7;
                    var5 = _closure2_slot0;
                    var3 = var5.findIndex;
                    var2 = function(arg0) { // Environment: var1
                        _fun31832: for (var _fun31832_ip = 0;;) switch (_fun31832_ip) {
                            case 0:
                                var2 = arg0;
                                var1 = _closure1_slot1;
                                var4 = _closure1_slot2;
                                var0 = 9;
                                var0 = var4[var0];
                                var5 = undefined;
                                var0 = var1.bind(var5)(var0);
                                var0 = var0.bind(var5)(var2);
                                if (var0) {
                                    _fun31832_ip = 99;
                                    continue _fun31832
                                }
                            case 39:
                                var4 = var2.status;
                                var0 = _closure3_slot0;
                                var0 = var4 === var0;
                                if (!var0) {
                                    _fun31832_ip = 97;
                                    continue _fun31832
                                }
                            case 55:
                                var4 = _closure1_slot1;
                                var6 = _closure1_slot2;
                                var3 = 11;
                                var3 = var6[var3];
                                var6 = var4.bind(var5)(var3);
                                var5 = var6.isEqual;
                                var4 = var2.emoji;
                                var3 = _closure3_slot1;
                                var0 = var5.bind(var6)(var4, var3);
                            case 97:
                                _fun31832_ip = 107;
                                continue _fun31832;
                            case 99:
                                var1 = _closure3_slot0;
                                var0 = var2 === var1;
                            case 107:
                                return var0;
                        }
                    };
                    var8 = var3.bind(var5)(var2);
                    var3 = _closure2_slot1;
                    var2 = var3.findIndex;
                    var1 = function(arg0) { // Environment: var1
                        _fun31833: for (var _fun31833_ip = 0;;) switch (_fun31833_ip) {
                            case 0:
                                var2 = arg0;
                                var1 = _closure1_slot1;
                                var4 = _closure1_slot2;
                                var0 = 9;
                                var0 = var4[var0];
                                var5 = undefined;
                                var0 = var1.bind(var5)(var0);
                                var0 = var0.bind(var5)(var2);
                                if (var0) {
                                    _fun31833_ip = 99;
                                    continue _fun31833
                                }
                            case 39:
                                var4 = var2.status;
                                var0 = _closure3_slot0;
                                var0 = var4 === var0;
                                if (!var0) {
                                    _fun31833_ip = 97;
                                    continue _fun31833
                                }
                            case 55:
                                var4 = _closure1_slot1;
                                var6 = _closure1_slot2;
                                var3 = 11;
                                var3 = var6[var3];
                                var6 = var4.bind(var5)(var3);
                                var5 = var6.isEqual;
                                var4 = var2.emoji;
                                var3 = _closure3_slot1;
                                var0 = var5.bind(var6)(var4, var3);
                            case 97:
                                _fun31833_ip = 107;
                                continue _fun31833;
                            case 99:
                                var1 = _closure3_slot0;
                                var0 = var2 === var1;
                            case 107:
                                return var0;
                        }
                    };
                    var3 = var2.bind(var3)(var1);
                    var1 = 0;
                    if (!(var8 >= var1)) {
                        _fun31831_ip = 92;
                        continue _fun31831
                    }
                case 73:
                    var6 = _closure2_slot0;
                    var5 = var6.splice;
                    var2 = 1;
                    var2 = var5.bind(var6)(var8, var2);
                case 92:
                    if (!(var3 >= var1)) {
                        _fun31831_ip = 115;
                        continue _fun31831
                    }
                case 96:
                    var2 = _closure2_slot1;
                    var1 = var2.splice;
                    var0 = 1;
                    var0 = var1.bind(var2)(var3, var0);
                case 115:
                    var5 = _closure1_slot13;
                    var1 = null;
                    var6 = var1 == var5;
                    var0 = undefined;
                    var3 = undefined;
                    if (var6) {
                        _fun31831_ip = 140;
                        continue _fun31831
                    }
                case 135:
                    var3 = var5.status;
                case 140:
                    var3 = var4 === var3;
                    if (!var3) {
                        _fun31831_ip = 198;
                        continue _fun31831
                    }
                case 147:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 11;
                    var4 = var6[var4];
                    var6 = var5.bind(var0)(var4);
                    var5 = var6.isEqual;
                    var8 = _closure1_slot13;
                    var9 = var1 == var8;
                    var4 = undefined;
                    if (var9) {
                        _fun31831_ip = 192;
                        continue _fun31831
                    }
                case 186:
                    var4 = var8.emoji;
                case 192:
                    var3 = var5.bind(var6)(var7, var4);
                case 198:
                    if (!var3) {
                        _fun31831_ip = 227;
                        continue _fun31831
                    }
                case 201:
                    _closure1_slot12 = var1;
                    _closure1_slot13 = var1;
                    _closure1_slot15 = var1;
                    var3 = _closure1_slot16;
                    var3.currentDefaultStatus = var1;
                    _closure1_slot14 = var1;
                case 227:
                    return var0;
            }
        };
        var2 = var4.bind(var5)(var2);
        var2 = _closure1_slot16;
        var2.recentStatuses = var3;
        var0 = _closure1_slot16;
        var0.favoritedStatuses = var1;
        var0 = undefined;
        return var0;
    };
    var3.DELETE_INVALID_HANG_STATUSES = var10;
    var10 = function(arg0) { // Original name: handleClearHangStatus, environment: var9
        _fun31834: for (var _fun31834_ip = 0;;) switch (_fun31834_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.saveAsDefault;
                var0 = null;
                _closure1_slot12 = var0;
                _closure1_slot13 = var0;
                _closure1_slot15 = var0;
                if (!var2) {
                    _fun31834_ip = 53;
                    continue _fun31834
                }
            case 29:
                var3 = _closure1_slot16;
                var2 = {
                    'status': null,
                    'customHangStatus': null,
                    'gameActivityHangStatus': null
                };
                var3.currentDefaultStatus = var2;
            case 53:
                _closure1_slot14 = var0;
                var0 = undefined;
                return var0;
        }
    };
    var3.CLEAR_HANG_STATUS = var10;
    var9 = function(arg0) { // Original name: handleFavoriteHangStatus, environment: var9
        _fun31835: for (var _fun31835_ip = 0;;) switch (_fun31835_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.status;
                var _closure2_slot0 = var7;
                var5 = var0.emoji;
                var _closure2_slot1 = var5;
                var0 = _closure1_slot16;
                var9 = var0.favoritedStatuses;
                var2 = new Array(0);
                var0 = 0;
                var10 = var2;
                var8 = 0;
                var4 = arraySpread(var10, var9, var8);
                var4 = var2.findIndex;
                var3 = function(arg0) { // Environment: var3
                    _fun31836: for (var _fun31836_ip = 0;;) switch (_fun31836_ip) {
                        case 0:
                            var2 = arg0;
                            var1 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var0 = 9;
                            var0 = var4[var0];
                            var5 = undefined;
                            var0 = var1.bind(var5)(var0);
                            var0 = var0.bind(var5)(var2);
                            if (var0) {
                                _fun31836_ip = 99;
                                continue _fun31836
                            }
                        case 39:
                            var4 = var2.status;
                            var0 = _closure2_slot0;
                            var0 = var4 === var0;
                            if (!var0) {
                                _fun31836_ip = 97;
                                continue _fun31836
                            }
                        case 55:
                            var4 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var3 = 11;
                            var3 = var6[var3];
                            var6 = var4.bind(var5)(var3);
                            var5 = var6.isEqual;
                            var4 = var2.emoji;
                            var3 = _closure2_slot1;
                            var0 = var5.bind(var6)(var4, var3);
                        case 97:
                            _fun31836_ip = 107;
                            continue _fun31836;
                        case 99:
                            var1 = _closure2_slot0;
                            var0 = var2 === var1;
                        case 107:
                            return var0;
                    }
                };
                var6 = var4.bind(var2)(var3);
                var3 = null;
                var4 = var7;
                if (!(var3 != var5)) {
                    _fun31835_ip = 91;
                    continue _fun31835
                }
            case 77:
                var3 = {};
                var3.status = var7;
                var3.emoji = var5;
                var4 = var3;
            case 91:
                var3 = -1;
                if (!(var3 === var6)) {
                    _fun31835_ip = 113;
                    continue _fun31835
                }
            case 101:
                var5 = var2.length;
                var3 = 6;
                if (!(!(var5 < var3))) {
                    _fun31835_ip = 141;
                    continue _fun31835
                }
            case 113:
                var0 = var6 >= var0;
                var3 = false;
                if (!var0) {
                    _fun31835_ip = 153;
                    continue _fun31835
                }
            case 122:
                var5 = var2.splice;
                var0 = 1;
                var0 = var5.bind(var2)(var6, var0);
                var3 = true;
                _fun31835_ip = 153;
                continue _fun31835;
            case 141:
                var0 = var2.push;
                var0 = var0.bind(var2)(var4);
                var3 = true;
            case 153:
                var0 = !var3;
                var0 = !var0;
                if (!var3) {
                    _fun31835_ip = 174;
                    continue _fun31835
                }
            case 162:
                var1 = _closure1_slot16;
                var1.favoritedStatuses = var2;
                var0 = true;
            case 174:
                return var0;
        }
    };
    var3.UPDATE_FAVORITE_HANG_STATUS = var9;
    var3.RESET_HANG_STATUS_STATE = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var8
        }
    });
    var14 = var4;
    var12 = var3;
    var3 = new var14[var8](var13, var12, var11);
    var3 = var3 instanceof Object ? var3 : var4;
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/hang_status/HangStatusStore.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.MAX_FAVORITES = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 3442, 3571, 660, 44, 3572, 3573, 22, 644, 566, 806, 2]);