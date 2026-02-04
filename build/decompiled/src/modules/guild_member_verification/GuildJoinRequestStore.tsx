// modules/guild_member_verification/GuildJoinRequestStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() {
        _fun54198: for (var _fun54198_ip = 0;;) switch (_fun54198_ip) {
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
                _fun54198_ip = 74;
                continue _fun54198;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot23 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot23 = var0;
    var0 = function arg0() {
        var1 = _closure1_slot11;
        var0 = arg0;
        var0 = var1[var0];
        return var0;
    };
    var _closure1_slot24 = var0;
    var0 = function arg0, arg1() {
        var4 = arg0;
        var2 = _closure1_slot11;
        var1 = arg1;
        var2[var4] = var1;
        var3 = _closure1_slot10;
        var2 = var3.set;
        var5 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 7;
        var1 = var1[var0];
        var0 = undefined;
        var1 = var5.bind(var0)(var1);
        var1 = var1.bind(var0)();
        var1 = var2.bind(var3)(var4, var1);
        return var0;
    };
    var _closure1_slot25 = var0;
    var0 = function arg0, arg1, arg2() {
        _fun54203: for (var _fun54203_ip = 0;;) switch (_fun54203_ip) {
            case 0:
                var3 = arg0;
                var5 = arg1;
                var4 = arg2;
                if (!(var5 !== var4)) {
                    _fun54203_ip = 172;
                    continue _fun54203
                }
            case 16:
                var0 = null;
                if (!(var0 != var5)) {
                    _fun54203_ip = 172;
                    continue _fun54203
                }
            case 25:
                var7 = _closure1_slot0;
                var1 = _closure1_slot2;
                var6 = 8;
                var1 = var1[var6];
                var2 = undefined;
                var1 = var7.bind(var2)(var1);
                var1 = var1.GuildJoinRequestApplicationStatuses;
                var1 = var1.SUBMITTED;
                if (!(var5 === var1)) {
                    _fun54203_ip = 92;
                    continue _fun54203
                }
            case 66:
                var5 = _closure1_slot25;
                var1 = _closure1_slot24;
                var7 = var1.bind(var2)(var3);
                var1 = 1;
                var1 = var7 + var1;
                var1 = var5.bind(var2)(var3, var1);
            case 92:
                var5 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var6];
                var1 = var5.bind(var2)(var1);
                var1 = var1.GuildJoinRequestApplicationStatuses;
                var1 = var1.SUBMITTED;
                if (!(var4 === var1)) {
                    _fun54203_ip = 172;
                    continue _fun54203
                }
            case 125:
                var1 = _closure1_slot24;
                var4 = var1.bind(var2)(var3);
                var1 = _closure1_slot25;
                var0 = global;
                var6 = var0.Math;
                var5 = var6.max;
                var0 = 1;
                var4 = var4 - var0;
                var0 = 0;
                var0 = var5.bind(var6)(var0, var4);
                var0 = var1.bind(var2)(var3, var0);
            case 172:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot26 = var0;
    var10 = function arg0() {
        var1 = arg0;
        var0 = new Array(0);
        var4 = var0.push;
        var6 = _closure1_slot13;
        var2 = var1.joinRequestId;
        var5 = undefined;
        var2 = var6.bind(var5)(var2);
        var2 = var4.bind(var0)(var2);
        var2 = var0.push;
        var4 = _closure1_slot14;
        var3 = var1.guildId;
        var1 = var1.applicationStatus;
        var1 = var4.bind(var5)(var3, var1);
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var0 = function arg0() {
        var2 = _closure1_slot15;
        var1 = var2.get;
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot27 = var0;
    var0 = function arg0() {
        _fun54206: for (var _fun54206_ip = 0;;) switch (_fun54206_ip) {
            case 0:
                var4 = arg0;
                var2 = _closure1_slot21;
                var0 = var4.joinRequestId;
                var2[var0] = var4;
                var3 = _closure1_slot15;
                var2 = var3.set;
                var0 = var4.joinRequestId;
                var0 = var2.bind(var3)(var0, var4);
                var3 = _closure1_slot0;
                var0 = _closure1_slot2;
                var5 = 10;
                var2 = var0[var5];
                var0 = undefined;
                var6 = var3.bind(var0)(var2);
                var3 = var6.isSubmittedApplicationStatus;
                var2 = var4.applicationStatus;
                var2 = var3.bind(var6)(var2);
                if (!var2) {
                    _fun54206_ip = 124;
                    continue _fun54206
                }
            case 83:
                var6 = _closure1_slot17;
                var3 = var6.delete;
                var2 = var4.joinRequestId;
                var2 = var3.bind(var6)(var2);
                var6 = _closure1_slot16;
                var3 = var6.set;
                var2 = var4.joinRequestId;
                var2 = var3.bind(var6)(var2, var4);
            case 124:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var5];
                var5 = var3.bind(var0)(var2);
                var3 = var5.isActionedApplicationStatus;
                var2 = var4.applicationStatus;
                var2 = var3.bind(var5)(var2);
                if (!var2) {
                    _fun54206_ip = 202;
                    continue _fun54206
                }
            case 161:
                var5 = _closure1_slot16;
                var3 = var5.delete;
                var2 = var4.joinRequestId;
                var2 = var3.bind(var5)(var2);
                var3 = _closure1_slot17;
                var2 = var3.set;
                var1 = var4.joinRequestId;
                var1 = var2.bind(var3)(var1, var4);
            case 202:
                return var0;
        }
    };
    var _closure1_slot28 = var0;
    var8 = function arg0() {
        _fun54207: for (var _fun54207_ip = 0;;) switch (_fun54207_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.guildId;
                var3 = var0.request;
                var1 = _closure1_slot9;
                var2 = undefined;
                var1 = var1.bind(var2)(var3);
                var4 = _closure1_slot8;
                var3 = var4.getCurrentUser;
                var3 = var3.bind(var4)();
                var4 = null;
                if (!(var4 != var3)) {
                    _fun54207_ip = 121;
                    continue _fun54207
                }
            case 47:
                var5 = var1.userId;
                var3 = var3.id;
                if (!(var5 !== var3)) {
                    _fun54207_ip = 121;
                    continue _fun54207
                }
            case 61:
                var5 = _closure1_slot27;
                var3 = var1.joinRequestId;
                var3 = var5.bind(var2)(var3);
                var4 = var4 == var3;
                var5 = undefined;
                if (var4) {
                    _fun54207_ip = 91;
                    continue _fun54207
                }
            case 85:
                var5 = var3.applicationStatus;
            case 91:
                var4 = _closure1_slot26;
                var3 = var1.applicationStatus;
                var3 = var4.bind(var2)(var6, var3, var5);
                var0 = _closure1_slot28;
                var0 = var0.bind(var2)(var1);
                var0 = true;
                return var0;
            case 121:
                var0 = false;
                return var0;
        }
    };
    var1 = global;
    var11 = var1.Object;
    var9 = var11.defineProperty;
    var7 = {};
    var0 = true;
    var7.value = var0;
    var0 = '__esModule';
    var0 = var9.bind(var11)(var2, var0, var7);
    var0 = 0;
    var7 = var5[var0];
    var0 = undefined;
    var7 = var6.bind(var0)(var7);
    var _closure1_slot3 = var7;
    var7 = 1;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot4 = var7;
    var7 = 2;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot5 = var7;
    var7 = 3;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot6 = var7;
    var7 = 4;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot7 = var7;
    var7 = 5;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot8 = var7;
    var7 = 6;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var7 = var7.joinRequestFromServer;
    var _closure1_slot9 = var7;
    var1 = var1.Map;
    var7 = var1.prototype;
    var7 = Object.create(var7, {
        constructor: {
            value: var1
        }
    });
    var15 = var7;
    var1 = new var15[var1](var14);
    var1 = var1 instanceof Object ? var1 : var7;
    var _closure1_slot10 = var1;
    var1 = {};
    var _closure1_slot11 = var1;
    var1 = false;
    var _closure1_slot12 = var1;
    var1 = function arg0() {
        var0 = global;
        var0 = var0.HermesInternal;
        var2 = var0.concat;
        var1 = 'guild-join-request=';
        var0 = arg0;
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var _closure1_slot13 = var1;
    var1 = function arg0, arg1() {
        var0 = global;
        var0 = var0.HermesInternal;
        var4 = var0.concat;
        var3 = 'guild-';
        var2 = arg0;
        var1 = '-';
        var0 = arg1;
        var0 = var4.bind(var3)(var2, var1, var0);
        return var0;
    };
    var _closure1_slot14 = var1;
    var1 = 9;
    var7 = var5[var1];
    var7 = var4.bind(var0)(var7);
    var11 = var7.SecondaryIndexMap;
    var7 = var11.prototype;
    var9 = Object.create(var7, {
        constructor: {
            value: var11
        }
    });
    var13 = function(arg0) { // Environment: var3
        var0 = arg0;
        var2 = var0.joinRequestId;
        var0 = global;
        var0 = var0.HermesInternal;
        var1 = var0.concat;
        var0 = '';
        var0 = var1.bind(var0)(var2);
        return var0;
    };
    var15 = var9;
    var14 = var10;
    var7 = new var15[var11](var14, var13, var12);
    var7 = var7 instanceof Object ? var7 : var9;
    var _closure1_slot15 = var7;
    var7 = var5[var1];
    var7 = var4.bind(var0)(var7);
    var11 = var7.SecondaryIndexMap;
    var7 = var11.prototype;
    var9 = Object.create(var7, {
        constructor: {
            value: var11
        }
    });
    var13 = function(arg0) { // Environment: var3
        var0 = arg0;
        var2 = var0.joinRequestId;
        var0 = global;
        var0 = var0.HermesInternal;
        var1 = var0.concat;
        var0 = '';
        var0 = var1.bind(var0)(var2);
        return var0;
    };
    var15 = var9;
    var14 = var10;
    var7 = new var15[var11](var14, var13, var12);
    var7 = var7 instanceof Object ? var7 : var9;
    var _closure1_slot16 = var7;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var9 = var1.SecondaryIndexMap;
    var1 = var9.prototype;
    var7 = Object.create(var1, {
        constructor: {
            value: var9
        }
    });
    var13 = function(arg0) { // Environment: var3
        var0 = arg0;
        var2 = var0.actionedAt;
        var0 = global;
        var0 = var0.HermesInternal;
        var1 = var0.concat;
        var0 = '';
        var0 = var1.bind(var0)(var2);
        return var0;
    };
    var15 = var7;
    var14 = var10;
    var1 = new var15[var9](var14, var13, var12);
    var1 = var1 instanceof Object ? var1 : var7;
    var _closure1_slot17 = var1;
    var1 = {};
    var _closure1_slot18 = var1;
    var1 = {};
    var _closure1_slot19 = var1;
    var1 = {};
    var _closure1_slot20 = var1;
    var1 = {};
    var _closure1_slot21 = var1;
    var1 = 11;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var1 = var1.Seconds;
    var7 = var1.MINUTE;
    var1 = 10;
    var1 = var1 * var7;
    var _closure1_slot22 = var1;
    var1 = 12;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun54214: for (var _fun54214_ip = 0;;) switch (_fun54214_ip) {
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
                    var0 = _closure1_slot23;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun54214_ip = 69;
                        continue _fun54214
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun54214_ip = 105;
                    continue _fun54214;
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
        var0 = function() {
            var2 = this;
            var1 = var2.waitFor;
            var0 = _closure1_slot8;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(9);
        var0[0] = var4;
        var4 = {};
        var6 = 'getRequest';
        var4.key = var6;
        var6 = function arg0() {
            var1 = _closure1_slot21;
            var0 = arg0;
            var0 = var1[var0];
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getRequests';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun54217: for (var _fun54217_ip = 0;;) switch (_fun54217_ip) {
                case 0:
                    var4 = arg1;
                    var2 = _closure1_slot14;
                    var5 = undefined;
                    var0 = arg0;
                    var3 = var2.bind(var5)(var0, var4);
                    var2 = _closure1_slot0;
                    var0 = _closure1_slot2;
                    var6 = 10;
                    var0 = var0[var6];
                    var2 = var2.bind(var5)(var0);
                    var0 = var2.isActionedApplicationStatus;
                    var0 = var0.bind(var2)(var4);
                    if (var0) {
                        _fun54217_ip = 118;
                        continue _fun54217
                    }
                case 55:
                    var2 = _closure1_slot0;
                    var0 = _closure1_slot2;
                    var0 = var0[var6];
                    var2 = var2.bind(var5)(var0);
                    var0 = var2.isSubmittedApplicationStatus;
                    var0 = var0.bind(var2)(var4);
                    if (var0) {
                        _fun54217_ip = 102;
                        continue _fun54217
                    }
                case 86:
                    var2 = _closure1_slot15;
                    var0 = var2.values;
                    var0 = var0.bind(var2)(var3);
                    _fun54217_ip = 116;
                    continue _fun54217;
                case 102:
                    var4 = _closure1_slot16;
                    var2 = var4.values;
                    var0 = var2.bind(var4)(var3);
                case 116:
                    _fun54217_ip = 132;
                    continue _fun54217;
                case 118:
                    var2 = _closure1_slot17;
                    var1 = var2.values;
                    var0 = var1.bind(var2)(var3);
                case 132:
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getSubmittedGuildJoinRequestTotal';
        var4.key = var6;
        var6 = function arg0() {
            var1 = _closure1_slot11;
            var0 = arg0;
            var0 = var1[var0];
            return var0;
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'isFetching';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot12;
            return var0;
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'hasFetched';
        var4.key = var6;
        var6 = function arg0() {
            _fun54220: for (var _fun54220_ip = 0;;) switch (_fun54220_ip) {
                case 0:
                    var3 = arg0;
                    var2 = _closure1_slot10;
                    var0 = var2.has;
                    var0 = var0.bind(var2)(var3);
                    if (var0) {
                        _fun54220_ip = 27;
                        continue _fun54220
                    }
                case 23:
                    var0 = false;
                    return var0;
                case 27:
                    var2 = _closure1_slot10;
                    var0 = var2.get;
                    var5 = var0.bind(var2)(var3);
                    var0 = null;
                    var0 = var0 != var5;
                    if (!var0) {
                        _fun54220_ip = 100;
                        continue _fun54220
                    }
                case 50:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 7;
                    var2 = var3[var2];
                    var3 = undefined;
                    var2 = var4.bind(var3)(var2);
                    var4 = var2.bind(var3)();
                    var3 = var4.diff;
                    var2 = 'seconds';
                    var2 = var3.bind(var4)(var5, var2);
                    var1 = _closure1_slot22;
                    var0 = var2 < var1;
                case 100:
                    return var0;
            }
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'getSelectedApplicationTab';
        var4.key = var6;
        var6 = function arg0() {
            _fun54221: for (var _fun54221_ip = 0;;) switch (_fun54221_ip) {
                case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 8;
                    var2 = var2[var0];
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2);
                    var0 = var0.GuildJoinRequestApplicationStatuses;
                    var0 = var0.SUBMITTED;
                    var2 = _closure1_slot18;
                    var1 = arg0;
                    var1 = var2[var1];
                    var2 = null;
                    if (!(var2 != var1)) {
                        _fun54221_ip = 57;
                        continue _fun54221
                    }
                case 54:
                    var0 = var1;
                case 57:
                    return var0;
            }
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'getSelectedSortOrder';
        var4.key = var6;
        var6 = function arg0() {
            _fun54222: for (var _fun54222_ip = 0;;) switch (_fun54222_ip) {
                case 0:
                    var2 = _closure1_slot19;
                    var0 = arg0;
                    var0 = var2[var0];
                    var2 = null;
                    if (!(var2 == var0)) {
                        _fun54222_ip = 54;
                        continue _fun54222
                    }
                case 20:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 8;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var1 = var1.GuildJoinRequestSortOrders;
                    var0 = var1.TIMESTAMP_DESC;
                case 54:
                    return var0;
            }
        };
        var4.value = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'getSelectedGuildJoinRequest';
        var4.key = var6;
        var5 = function arg0() {
            _fun54223: for (var _fun54223_ip = 0;;) switch (_fun54223_ip) {
                case 0:
                    var1 = _closure1_slot20;
                    var0 = arg0;
                    var1 = var1[var0];
                    var0 = null;
                    var3 = var0 != var1;
                    if (!var3) {
                        _fun54223_ip = 40;
                        continue _fun54223
                    }
                case 23:
                    var3 = _closure1_slot27;
                    var2 = var1.joinRequestId;
                    var1 = undefined;
                    var0 = var3.bind(var1)(var2);
                case 40:
                    return var0;
            }
        };
        var4.value = var5;
        var0[8] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'GuildJoinRequestStoreV2';
    var7.displayName = var1;
    var1 = 13;
    var1 = var5[var1];
    var14 = var6.bind(var0)(var1);
    var1 = {};
    var9 = function arg0() {
        var0 = arg0;
        var2 = var0.joinRequest;
        var1 = _closure1_slot28;
        var0 = undefined;
        var1 = var1.bind(var0)(var2);
        return var0;
    };
    var1.GUILD_JOIN_REQUEST_BY_ID_FETCH_SUCCESS = var9;
    var9 = function arg0() {
        _fun54225: for (var _fun54225_ip = 0;;) switch (_fun54225_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.status;
                var3 = var0.requests;
                var4 = var0.total;
                var2 = var0.guildId;
                var0 = false;
                _closure1_slot12 = var0;
                var7 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 8;
                var5 = var5[var0];
                var0 = undefined;
                var5 = var7.bind(var0)(var5);
                var5 = var5.GuildJoinRequestApplicationStatuses;
                var5 = var5.SUBMITTED;
                if (!(var6 === var5)) {
                    _fun54225_ip = 82;
                    continue _fun54225
                }
            case 72:
                var1 = _closure1_slot25;
                var1 = var1.bind(var0)(var2, var4);
            case 82:
                var2 = var3.forEach;
                var1 = function(arg0) { // Environment: var1
                    var2 = _closure1_slot28;
                    var0 = undefined;
                    var1 = arg0;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var1.GUILD_JOIN_REQUESTS_FETCH_SUCCESS = var9;
    var9 = function() {
        var0 = true;
        _closure1_slot12 = var0;
        var0 = undefined;
        return var0;
    };
    var1.GUILD_JOIN_REQUESTS_FETCH_START = var9;
    var9 = function() {
        var0 = false;
        _closure1_slot12 = var0;
        var0 = undefined;
        return var0;
    };
    var1.GUILD_JOIN_REQUESTS_FETCH_FAILURE = var9;
    var9 = function arg0() {
        var0 = arg0;
        var3 = var0.guildId;
        var0 = var0.action;
        var _closure2_slot0 = var0;
        var6 = _closure1_slot15;
        var5 = var6.values;
        var7 = _closure1_slot14;
        var8 = _closure1_slot0;
        var4 = _closure1_slot2;
        var0 = 8;
        var4 = var4[var0];
        var0 = undefined;
        var4 = var8.bind(var0)(var4);
        var4 = var4.GuildJoinRequestApplicationStatuses;
        var4 = var4.SUBMITTED;
        var4 = var7.bind(var0)(var3, var4);
        var5 = var5.bind(var6)(var4);
        var4 = var5.forEach;
        var2 = function(arg0) { // Environment: var2
            var2 = _closure1_slot28;
            var1 = {};
            var4 = arg0;
            var5 = var1;
            var0 = copyDataProperties(var5, var4);
            var3 = _closure2_slot0;
            var0 = 'applicationStatus';
            var1[var0] = var3;
            var0 = undefined;
            var1 = var2.bind(var0)(var1);
            return var0;
        };
        var2 = var4.bind(var5)(var2);
        var2 = _closure1_slot25;
        var1 = 0;
        var1 = var2.bind(var0)(var3, var1);
        return var0;
    };
    var1.GUILD_JOIN_REQUESTS_BULK_ACTION = var9;
    var1.GUILD_JOIN_REQUEST_CREATE = var8;
    var1.GUILD_JOIN_REQUEST_UPDATE = var8;
    var8 = function arg0() {
        _fun54231: for (var _fun54231_ip = 0;;) switch (_fun54231_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.id;
                var6 = var0.guildId;
                var2 = _closure1_slot27;
                var0 = undefined;
                var2 = var2.bind(var0)(var3);
                var4 = null;
                if (!(var4 != var2)) {
                    _fun54231_ip = 104;
                    continue _fun54231
                }
            case 33:
                var5 = _closure1_slot26;
                var4 = var2.applicationStatus;
                var2 = 'DELETED';
                var2 = var5.bind(var0)(var6, var2, var4);
                var2 = _closure1_slot21;
                var2 = delete var2[var3];
                var4 = _closure1_slot15;
                var2 = var4.delete;
                var2 = var2.bind(var4)(var3);
                var4 = _closure1_slot16;
                var2 = var4.delete;
                var2 = var2.bind(var4)(var3);
                var2 = _closure1_slot17;
                var1 = var2.delete;
                var1 = var1.bind(var2)(var3);
            case 104:
                return var0;
        }
    };
    var1.GUILD_JOIN_REQUEST_DELETE = var8;
    var8 = function arg0() {
        _fun54232: for (var _fun54232_ip = 0;;) switch (_fun54232_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.guildId;
                var1 = var0.applicationTab;
                var3 = _closure1_slot18;
                var3 = var3[var2];
                if (!(var1 !== var3)) {
                    _fun54232_ip = 37;
                    continue _fun54232
                }
            case 29:
                var0 = _closure1_slot18;
                var0[var2] = var1;
            case 37:
                var0 = undefined;
                return var0;
        }
    };
    var1.GUILD_JOIN_REQUESTS_SET_APPLICATION_TAB = var8;
    var8 = function arg0() {
        _fun54233: for (var _fun54233_ip = 0;;) switch (_fun54233_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.guildId;
                var3 = var0.sortOrder;
                var1 = _closure1_slot19;
                var1 = var1[var2];
                if (!(var3 !== var1)) {
                    _fun54233_ip = 193;
                    continue _fun54233
                }
            case 32:
                var1 = _closure1_slot19;
                var1[var2] = var3;
                var1 = _closure1_slot18;
                var3 = var1[var2];
                var1 = null;
                if (!(var1 == var3)) {
                    _fun54233_ip = 88;
                    continue _fun54233
                }
            case 54:
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 8;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var4.bind(var1)(var2);
                var1 = var1.GuildJoinRequestApplicationStatuses;
                var3 = var1.SUBMITTED;
            case 88:
                var1 = 'REVIEW_APPLICATION';
                if (!(var1 !== var3)) {
                    _fun54233_ip = 193;
                    continue _fun54233
                }
            case 98:
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var5 = 10;
                var1 = var1[var5];
                var4 = undefined;
                var2 = var2.bind(var4)(var1);
                var1 = var2.isActionedApplicationStatus;
                var1 = var1.bind(var2)(var3);
                if (!var1) {
                    _fun54233_ip = 148;
                    continue _fun54233
                }
            case 134:
                var2 = _closure1_slot17;
                var1 = var2.clear;
                var1 = var1.bind(var2)();
            case 148:
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var5];
                var2 = var2.bind(var4)(var1);
                var1 = var2.isSubmittedApplicationStatus;
                var1 = var1.bind(var2)(var3);
                if (!var1) {
                    _fun54233_ip = 193;
                    continue _fun54233
                }
            case 179:
                var1 = _closure1_slot16;
                var0 = var1.clear;
                var0 = var0.bind(var1)();
            case 193:
                var0 = undefined;
                return var0;
        }
    };
    var1.GUILD_JOIN_REQUESTS_SET_SORT_ORDER = var8;
    var3 = function arg0() {
        var0 = arg0;
        var2 = var0.guildId;
        var1 = var0.request;
        var0 = _closure1_slot20;
        var0[var2] = var1;
        var0 = undefined;
        return var0;
    };
    var1.GUILD_JOIN_REQUESTS_SET_SELECTED = var3;
    var3 = var7.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var15 = var3;
    var13 = var1;
    var1 = new var15[var7](var14, var13, var12);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 14;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_member_verification/GuildJoinRequestStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1621, 3214, 3045, 3216, 3087, 3215, 667, 566, 806, 2]);