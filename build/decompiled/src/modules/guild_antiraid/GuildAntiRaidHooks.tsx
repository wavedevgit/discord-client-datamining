// modules/guild_antiraid/GuildAntiRaidHooks.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var0 = metroImportAll;
    var _closure1_slot2 = var0;
    var _closure1_slot3 = var5;
    var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var1
        _fun69661: for (var _fun69661_ip = 0;;) switch (_fun69661_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun69661_ip = 46;
                    continue _fun69661
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun69661_ip = 55;
                    continue _fun69661
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun69661_ip = 345;
                    continue _fun69661
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun69661_ip = 323;
                    continue _fun69661
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun69661_ip = 283;
                    continue _fun69661
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun69661_ip = 270;
                    continue _fun69661
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
                    _fun69661_ip = 163;
                    continue _fun69661
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun69661_ip = 179;
                    continue _fun69661
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun69661_ip = 249;
                    continue _fun69661
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun69661_ip = 249;
                    continue _fun69661
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun69661_ip = 234;
                    continue _fun69661
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun69661_ip = 247;
                    continue _fun69661
                }
            case 234:
                var8 = _closure1_slot14;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun69661_ip = 265;
                continue _fun69661;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun69661_ip = 283;
                continue _fun69661;
            case 270:
                var6 = _closure1_slot14;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun69661_ip = 323;
                    continue _fun69661
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
                    _fun69661_ip = 330;
                    continue _fun69661
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun69662: for (var _fun69662_ip = 0;;) switch (_fun69662_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun69662_ip = 56;
                                continue _fun69662
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
                            _fun69662_ip = 67;
                            continue _fun69662;
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
    var _closure1_slot13 = var0;
    var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var1
        _fun69663: for (var _fun69663_ip = 0;;) switch (_fun69663_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun69663_ip = 23;
                    continue _fun69663
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun69663_ip = 33;
                    continue _fun69663
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
                    _fun69663_ip = 70;
                    continue _fun69663
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun69663_ip = 55;
                    continue _fun69663
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot14 = var0;
    var0 = function(arg0) { // Original name: getFirstGuildIncidentId, environment: var1
        _fun69664: for (var _fun69664_ip = 0;;) switch (_fun69664_ip) {
            case 0:
                var14 = arg0;
                var1 = _closure1_slot8;
                var0 = var1.getCurrentUser;
                var12 = var0.bind(var1)();
                var1 = _closure1_slot9;
                var0 = var1.getIncidentsByGuild;
                var11 = var0.bind(var1)();
                var1 = _closure1_slot13;
                var2 = _closure1_slot1;
                var3 = _closure1_slot3;
                var0 = 9;
                var0 = var3[var0];
                var10 = undefined;
                var2 = var2.bind(var10)(var0);
                var0 = var2.keys;
                var3 = var0.bind(var2)(var11);
                var2 = var3.map;
                var0 = function(arg0) { // Environment: var0
                    var2 = _closure1_slot5;
                    var1 = var2.getGuild;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0 = var2.bind(var3)(var0);
                var9 = var1.bind(var10)(var0);
                var2 = var9.bind(var10)();
                var1 = var2.done;
                var8 = 11;
                var7 = 12;
                var6 = false;
                var5 = 10;
                var0 = null;
                var4 = var2;
                var3 = undefined;
                if (var1) {
                    _fun69664_ip = 366;
                    continue _fun69664
                }
            case 126:
                var1 = var4.value;
                if (!(var0 != var1)) {
                    _fun69664_ip = 339;
                    continue _fun69664
                }
            case 138:
                var2 = var1.id;
                var15 = var11[var2];
                var3 = var15;
                if (!(var0 != var15)) {
                    _fun69664_ip = 339;
                    continue _fun69664
                }
            case 157:
                var16 = _closure1_slot0;
                var2 = _closure1_slot3;
                var2 = var2[var5];
                var16 = var16.bind(var10)(var2);
                var2 = var16.hasDetectedActivity;
                var2 = var2.bind(var16)(var15);
                if (var2) {
                    _fun69664_ip = 222;
                    continue _fun69664
                }
            case 188:
                var16 = _closure1_slot0;
                var2 = _closure1_slot3;
                var2 = var2[var5];
                var16 = var16.bind(var10)(var2);
                var2 = var16.isUnderLockdown;
                var2 = var2.bind(var16)(var15);
                var3 = var15;
                if (!var2) {
                    _fun69664_ip = 339;
                    continue _fun69664
                }
            case 222:
                var16 = _closure1_slot0;
                var2 = _closure1_slot3;
                var2 = var2[var5];
                var16 = var16.bind(var10)(var2);
                var2 = var16.isUnderLockdown;
                var2 = var2.bind(var16)(var15);
                if (!var2) {
                    _fun69664_ip = 265;
                    continue _fun69664
                }
            case 253:
                var2 = var1.id;
                var3 = var15;
                if (!(var2 === var14)) {
                    _fun69664_ip = 339;
                    continue _fun69664
                }
            case 265:
                var16 = _closure1_slot2;
                var2 = _closure1_slot3;
                var17 = var2[var8];
                var18 = var16.bind(var10)(var17);
                var17 = var18.hasAny;
                var2 = var2[var7];
                var19 = var16.bind(var10)(var2);
                var16 = var19.computePermissions;
                var2 = {};
                var2.user = var12;
                var2.context = var1;
                var2.checkElevated = var6;
                var16 = var16.bind(var19)(var2);
                var2 = _closure1_slot10;
                var2 = var17.bind(var18)(var16, var2);
                var3 = var15;
                if (var2) {
                    _fun69664_ip = 359;
                    continue _fun69664
                }
            case 339:
                var15 = var9.bind(var10)();
                var2 = var15.done;
                var4 = var15;
                if (var2) {
                    _fun69664_ip = 366;
                    continue _fun69664
                }
            case 354:
                _fun69664_ip = 126;
                continue _fun69664;
            case 359:
                var1 = var1.id;
                return var1;
            case 366:
                return var0;
        }
    };
    var _closure1_slot15 = var0;
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
    var _closure1_slot4 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.IncidentAlertModeratorPermissions;
    var _closure1_slot10 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot11 = var6;
    var3 = var3.GuildFeatures;
    var _closure1_slot12 = var3;
    var3 = 14;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_antiraid/GuildAntiRaidHooks.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function() { // Original name: useFirstGuildIncidentId, environment: var1
        _fun69666: for (var _fun69666_ip = 0;;) switch (_fun69666_ip) {
            case 0:
                var3 = _closure1_slot0;
                var4 = _closure1_slot3;
                var2 = 8;
                var1 = var4[var2];
                var12 = undefined;
                var7 = var3.bind(var12)(var1);
                var6 = var7.useStateFromStores;
                var1 = _closure1_slot8;
                var5 = new Array(1);
                var5[0] = var1;
                var1 = function() { // Environment: var0
                    var1 = _closure1_slot8;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var11 = var6.bind(var7)(var5, var1);
                var1 = var4[var2];
                var7 = var3.bind(var12)(var1);
                var6 = var7.useStateFromStores;
                var1 = _closure1_slot9;
                var5 = new Array(1);
                var5[0] = var1;
                var1 = function() { // Environment: var0
                    var1 = _closure1_slot9;
                    var0 = var1.getIncidentsByGuild;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var10 = var6.bind(var7)(var5, var1);
                var _closure2_slot0 = var10;
                var1 = _closure1_slot13;
                var2 = var4[var2];
                var4 = var3.bind(var12)(var2);
                var3 = var4.useStateFromStoresArray;
                var5 = _closure1_slot5;
                var2 = new Array(1);
                var2[0] = var5;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot3;
                    var0 = 9;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.keys;
                    var0 = _closure2_slot0;
                    var2 = var1.bind(var2)(var0);
                    var1 = var2.map;
                    var0 = function(arg0) { // Environment: var0
                        var2 = _closure1_slot5;
                        var1 = var2.getGuild;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0 = var3.bind(var4)(var2, var0);
                var9 = var1.bind(var12)(var0);
                var2 = var9.bind(var12)();
                var1 = var2.done;
                var8 = 11;
                var7 = 12;
                var6 = false;
                var5 = 10;
                var0 = null;
                var4 = var2;
                var3 = undefined;
                if (var1) {
                    _fun69666_ip = 379;
                    continue _fun69666
                }
            case 182:
                var1 = var4.value;
                if (!(var0 != var1)) {
                    _fun69666_ip = 352;
                    continue _fun69666
                }
            case 194:
                var2 = var1.id;
                var14 = var10[var2];
                var3 = var14;
                if (!(var0 != var3)) {
                    _fun69666_ip = 352;
                    continue _fun69666
                }
            case 213:
                var15 = _closure1_slot0;
                var2 = _closure1_slot3;
                var2 = var2[var5];
                var15 = var15.bind(var12)(var2);
                var2 = var15.hasDetectedActivity;
                var2 = var2.bind(var15)(var14);
                if (var2) {
                    _fun69666_ip = 278;
                    continue _fun69666
                }
            case 244:
                var15 = _closure1_slot0;
                var2 = _closure1_slot3;
                var2 = var2[var5];
                var15 = var15.bind(var12)(var2);
                var2 = var15.isUnderLockdown;
                var2 = var2.bind(var15)(var14);
                var3 = var14;
                if (!var2) {
                    _fun69666_ip = 352;
                    continue _fun69666
                }
            case 278:
                var15 = _closure1_slot2;
                var2 = _closure1_slot3;
                var16 = var2[var8];
                var17 = var15.bind(var12)(var16);
                var16 = var17.hasAny;
                var2 = var2[var7];
                var18 = var15.bind(var12)(var2);
                var15 = var18.computePermissions;
                var2 = {};
                var2.user = var11;
                var2.context = var1;
                var2.checkElevated = var6;
                var15 = var15.bind(var18)(var2);
                var2 = _closure1_slot10;
                var2 = var16.bind(var17)(var15, var2);
                var3 = var14;
                if (var2) {
                    _fun69666_ip = 372;
                    continue _fun69666
                }
            case 352:
                var14 = var9.bind(var12)();
                var2 = var14.done;
                var4 = var14;
                if (var2) {
                    _fun69666_ip = 379;
                    continue _fun69666
                }
            case 367:
                _fun69666_ip = 182;
                continue _fun69666;
            case 372:
                var1 = var1.id;
                return var1;
            case 379:
                return var0;
        }
    };
    var2.useFirstGuildIncidentId = var3;
    var3 = function(arg0) { // Original name: useGuildIncidentsState, environment: var1
        _fun69671: for (var _fun69671_ip = 0;;) switch (_fun69671_ip) {
            case 0:
                var1 = arg0;
                var _closure2_slot0 = var1;
                var4 = _closure1_slot0;
                var6 = _closure1_slot3;
                var3 = 8;
                var1 = var6[var3];
                var5 = undefined;
                var9 = var4.bind(var5)(var1);
                var8 = var9.useStateFromStores;
                var1 = _closure1_slot5;
                var7 = new Array(2);
                var7[0] = var1;
                var1 = _closure1_slot6;
                var7[1] = var1;
                var1 = function() { // Environment: var0
                    _fun69672: for (var _fun69672_ip = 0;;) switch (_fun69672_ip) {
                        case 0:
                            var3 = _closure1_slot5;
                            var2 = var3.getGuild;
                            var0 = _closure2_slot0;
                            var4 = var2.bind(var3)(var0);
                            var0 = null;
                            if (!(var0 != var4)) {
                                _fun69672_ip = 92;
                                continue _fun69672
                            }
                        case 30:
                            var3 = _closure1_slot6;
                            var2 = var3.getGuildPermissions;
                            var4 = var2.bind(var3)(var4);
                            var0 = var0 != var4;
                            if (!var0) {
                                _fun69672_ip = 90;
                                continue _fun69672
                            }
                        case 52:
                            var5 = _closure1_slot2;
                            var3 = _closure1_slot3;
                            var2 = 11;
                            var3 = var3[var2];
                            var2 = undefined;
                            var3 = var5.bind(var2)(var3);
                            var2 = var3.hasAny;
                            var1 = _closure1_slot10;
                            var0 = var2.bind(var3)(var4, var1);
                        case 90:
                            return var0;
                        case 92:
                            var0 = false;
                            return var0;
                    }
                };
                var1 = var8.bind(var9)(var7, var1);
                var3 = var6[var3];
                var6 = var4.bind(var5)(var3);
                var4 = var6.useStateFromStores;
                var7 = _closure1_slot9;
                var3 = new Array(1);
                var3[0] = var7;
                var0 = function() { // Environment: var0
                    _fun69673: for (var _fun69673_ip = 0;;) switch (_fun69673_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var0 = null;
                            var2 = var0 != var2;
                            if (!var2) {
                                _fun69673_ip = 38;
                                continue _fun69673
                            }
                        case 16:
                            var3 = _closure1_slot9;
                            var2 = var3.getGuildIncident;
                            var1 = _closure2_slot0;
                            var0 = var2.bind(var3)(var1);
                        case 38:
                            return var0;
                    }
                };
                var4 = var4.bind(var6)(var3, var0);
                var0 = {};
                var0.shouldShowIncidentActions = var1;
                var0.incidentData = var4;
                var1 = null;
                var1 = var1 != var4;
                if (!var1) {
                    _fun69671_ip = 163;
                    continue _fun69671
                }
            case 132:
                var3 = _closure1_slot0;
                var6 = _closure1_slot3;
                var2 = 10;
                var2 = var6[var2];
                var3 = var3.bind(var5)(var2);
                var2 = var3.isUnderLockdown;
                var1 = var2.bind(var3)(var4);
            case 163:
                var0.isUnderLockdown = var1;
                return var0;
        }
    };
    var2.useGuildIncidentsState = var3;
    var3 = function() { // Original name: shouldShowRaidNotificationNagbar, environment: var1
        _fun69674: for (var _fun69674_ip = 0;;) switch (_fun69674_ip) {
            case 0:
                var3 = _closure1_slot15;
                var2 = _closure1_slot7;
                var1 = var2.getGuildId;
                var2 = var1.bind(var2)();
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var2 = _closure1_slot4;
                var0 = var2.getGuildsProto;
                var3 = var0.bind(var2)();
                var2 = null;
                if (!(var2 == var3)) {
                    _fun69674_ip = 50;
                    continue _fun69674
                }
            case 48:
                var3 = {};
            case 50:
                var4 = var2 != var1;
                var0 = null;
                if (!var4) {
                    _fun69674_ip = 63;
                    continue _fun69674
                }
            case 59:
                var0 = var3[var1];
            case 63:
                var3 = var2 != var0;
                if (!var3) {
                    _fun69674_ip = 76;
                    continue _fun69674
                }
            case 70:
                var3 = var0.disableRaidAlertNag;
            case 76:
                var0 = {};
                var2 = var2 != var1;
                if (!var2) {
                    _fun69674_ip = 88;
                    continue _fun69674
                }
            case 85:
                var2 = !var3;
            case 88:
                var0.show = var2;
                var0.guildId = var1;
                return var0;
        }
    };
    var2.shouldShowRaidNotificationNagbar = var3;
    var3 = function() { // Original name: shouldShowRaidInAppNotification, environment: var1
        _fun69675: for (var _fun69675_ip = 0;;) switch (_fun69675_ip) {
            case 0:
                var2 = _closure1_slot15;
                var3 = _closure1_slot7;
                var1 = var3.getGuildId;
                var1 = var1.bind(var3)();
                var7 = undefined;
                var1 = var2.bind(var7)(var1);
                var3 = _closure1_slot4;
                var2 = var3.getGuildsProto;
                var3 = var2.bind(var3)();
                var2 = null;
                if (!(var2 == var3)) {
                    _fun69675_ip = 50;
                    continue _fun69675
                }
            case 48:
                var3 = {};
            case 50:
                var5 = var2 != var1;
                var4 = null;
                if (!var5) {
                    _fun69675_ip = 63;
                    continue _fun69675
                }
            case 59:
                var4 = var3[var1];
            case 63:
                var3 = var2 != var4;
                if (!var3) {
                    _fun69675_ip = 76;
                    continue _fun69675
                }
            case 70:
                var3 = var4.disableRaidAlertNag;
            case 76:
                var4 = var2 != var1;
                var6 = null;
                if (!var4) {
                    _fun69675_ip = 100;
                    continue _fun69675
                }
            case 85:
                var5 = _closure1_slot9;
                var4 = var5.getGuildIncident;
                var6 = var4.bind(var5)(var1);
            case 100:
                var4 = var2 != var6;
                if (!var4) {
                    _fun69675_ip = 138;
                    continue _fun69675
                }
            case 107:
                var5 = _closure1_slot0;
                var8 = _closure1_slot3;
                var0 = 10;
                var0 = var8[var0];
                var5 = var5.bind(var7)(var0);
                var0 = var5.isUnderLockdown;
                var4 = var0.bind(var5)(var6);
            case 138:
                var0 = {};
                var2 = var2 != var1;
                if (!var2) {
                    _fun69675_ip = 150;
                    continue _fun69675
                }
            case 147:
                var2 = !var4;
            case 150:
                if (!var2) {
                    _fun69675_ip = 156;
                    continue _fun69675
                }
            case 153:
                var2 = !var3;
            case 156:
                var0.show = var2;
                var0.guildId = var1;
                return var0;
        }
    };
    var2.shouldShowRaidInAppNotification = var3;
    var3 = function(arg0) { // Original name: getDisabledActions, environment: var1
        _fun69676: for (var _fun69676_ip = 0;;) switch (_fun69676_ip) {
            case 0:
                var6 = arg0;
                var2 = null;
                if (!(var2 != var6)) {
                    _fun69676_ip = 262;
                    continue _fun69676
                }
            case 12:
                var3 = _closure1_slot9;
                var1 = var3.getGuildIncident;
                var0 = var6.id;
                var3 = var1.bind(var3)(var0);
                var0 = {};
                var7 = var2 == var6;
                var4 = undefined;
                if (var7) {
                    _fun69676_ip = 72;
                    continue _fun69676
                }
            case 46:
                var7 = var6.features;
                var6 = var7.has;
                var5 = _closure1_slot12;
                var5 = var5.INVITES_DISABLED;
                var4 = var6.bind(var7)(var5);
            case 72:
                if (var4) {
                    _fun69676_ip = 164;
                    continue _fun69676
                }
            case 75:
                var6 = var2 == var3;
                var5 = undefined;
                if (var6) {
                    _fun69676_ip = 90;
                    continue _fun69676
                }
            case 84:
                var5 = var3.invitesDisabledUntil;
            case 90:
                var5 = var2 != var5;
                if (!var5) {
                    _fun69676_ip = 161;
                    continue _fun69676
                }
            case 97:
                var6 = global;
                var9 = var6.Date;
                var10 = var3.invitesDisabledUntil;
                var8 = var9.prototype;
                var8 = Object.create(var8, {
                    constructor: {
                        value: var9
                    }
                });
                var11 = var8;
                var7 = new var11[var9](var10, var9);
                var7 = var7 instanceof Object ? var7 : var8;
                var6 = var6.Date;
                var8 = var6.prototype;
                var8 = Object.create(var8, {
                    constructor: {
                        value: var6
                    }
                });
                var11 = var8;
                var6 = new var11[var6](var10);
                var6 = var6 instanceof Object ? var6 : var8;
                var5 = var7 > var6;
            case 161:
                var4 = var5;
            case 164:
                var0.invitesDisabled = var4;
                var4 = var2 == var3;
                var1 = undefined;
                if (var4) {
                    _fun69676_ip = 184;
                    continue _fun69676
                }
            case 178:
                var1 = var3.dmsDisabledUntil;
            case 184:
                var1 = var2 != var1;
                if (!var1) {
                    _fun69676_ip = 255;
                    continue _fun69676
                }
            case 191:
                var2 = global;
                var5 = var2.Date;
                var10 = var3.dmsDisabledUntil;
                var4 = var5.prototype;
                var4 = Object.create(var4, {
                    constructor: {
                        value: var5
                    }
                });
                var11 = var4;
                var3 = new var11[var5](var10, var9);
                var3 = var3 instanceof Object ? var3 : var4;
                var2 = var2.Date;
                var4 = var2.prototype;
                var4 = Object.create(var4, {
                    constructor: {
                        value: var2
                    }
                });
                var11 = var4;
                var2 = new var11[var2](var10);
                var2 = var2 instanceof Object ? var2 : var4;
                var1 = var3 > var2;
            case 255:
                var0.dmsDisabled = var1;
                return var0;
            case 262:
                var0 = {
                    'dmsDisabled': false,
                    'invitesDisabled': false
                };
                return var0;
        }
    };
    var2.getDisabledActions = var3;
    var3 = function(arg0) { // Original name: useDisabledActions, environment: var1
        _fun69677: for (var _fun69677_ip = 0;;) switch (_fun69677_ip) {
            case 0:
                var6 = arg0;
                var2 = null;
                var3 = var2 == var6;
                var1 = undefined;
                var9 = undefined;
                if (var3) {
                    _fun69677_ip = 23;
                    continue _fun69677
                }
            case 18:
                var9 = var6.id;
            case 23:
                if (!(var2 == var9)) {
                    _fun69677_ip = 34;
                    continue _fun69677
                }
            case 27:
                var9 = _closure1_slot11;
            case 34:
                var _closure2_slot0 = var9;
                var4 = _closure1_slot0;
                var7 = _closure1_slot3;
                var3 = 8;
                var3 = var7[var3];
                var8 = var4.bind(var1)(var3);
                var7 = var8.useStateFromStores;
                var3 = _closure1_slot9;
                var4 = new Array(1);
                var4[0] = var3;
                var3 = new Array(1);
                var3[0] = var9;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot9;
                    var1 = var2.getGuildIncident;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var3 = var7.bind(var8)(var4, var0, var3);
                if (!(var2 != var6)) {
                    _fun69677_ip = 334;
                    continue _fun69677
                }
            case 107:
                var0 = {};
                var7 = var2 == var6;
                var4 = undefined;
                if (var7) {
                    _fun69677_ip = 144;
                    continue _fun69677
                }
            case 118:
                var7 = var6.features;
                var6 = var7.has;
                var5 = _closure1_slot12;
                var5 = var5.INVITES_DISABLED;
                var4 = var6.bind(var7)(var5);
            case 144:
                if (var4) {
                    _fun69677_ip = 236;
                    continue _fun69677
                }
            case 147:
                var6 = var2 == var3;
                var5 = undefined;
                if (var6) {
                    _fun69677_ip = 162;
                    continue _fun69677
                }
            case 156:
                var5 = var3.invitesDisabledUntil;
            case 162:
                var5 = var2 != var5;
                if (!var5) {
                    _fun69677_ip = 233;
                    continue _fun69677
                }
            case 169:
                var6 = global;
                var9 = var6.Date;
                var12 = var3.invitesDisabledUntil;
                var8 = var9.prototype;
                var8 = Object.create(var8, {
                    constructor: {
                        value: var9
                    }
                });
                var13 = var8;
                var7 = new var13[var9](var12, var11);
                var7 = var7 instanceof Object ? var7 : var8;
                var6 = var6.Date;
                var8 = var6.prototype;
                var8 = Object.create(var8, {
                    constructor: {
                        value: var6
                    }
                });
                var13 = var8;
                var6 = new var13[var6](var12);
                var6 = var6 instanceof Object ? var6 : var8;
                var5 = var7 > var6;
            case 233:
                var4 = var5;
            case 236:
                var0.invitesDisabled = var4;
                var4 = var2 == var3;
                var1 = undefined;
                if (var4) {
                    _fun69677_ip = 256;
                    continue _fun69677
                }
            case 250:
                var1 = var3.dmsDisabledUntil;
            case 256:
                var1 = var2 != var1;
                if (!var1) {
                    _fun69677_ip = 327;
                    continue _fun69677
                }
            case 263:
                var2 = global;
                var5 = var2.Date;
                var12 = var3.dmsDisabledUntil;
                var4 = var5.prototype;
                var4 = Object.create(var4, {
                    constructor: {
                        value: var5
                    }
                });
                var13 = var4;
                var3 = new var13[var5](var12, var11);
                var3 = var3 instanceof Object ? var3 : var4;
                var2 = var2.Date;
                var4 = var2.prototype;
                var4 = Object.create(var4, {
                    constructor: {
                        value: var2
                    }
                });
                var13 = var4;
                var2 = new var13[var2](var12);
                var2 = var2 instanceof Object ? var2 : var4;
                var1 = var3 > var2;
            case 327:
                var0.dmsDisabled = var1;
                _fun69677_ip = 344;
                continue _fun69677;
            case 334:
                var0 = {
                    'dmsDisabled': false,
                    'invitesDisabled': false
                };
            case 344:
                return var0;
        }
    };
    var2.useDisabledActions = var3;
    var1 = function(arg0) { // Original name: useShowAntiRaidInGuildNotifSettings, environment: var1
        var1 = arg0;
        var _closure2_slot0 = var1;
        var3 = _closure1_slot0;
        var2 = _closure1_slot3;
        var1 = 8;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.useStateFromStores;
        var5 = _closure1_slot6;
        var1 = new Array(2);
        var1[0] = var5;
        var4 = _closure1_slot5;
        var1[1] = var4;
        var0 = function() { // Environment: var0
            var3 = _closure1_slot5;
            var2 = var3.getGuild;
            var1 = _closure2_slot0;
            var3 = var2.bind(var3)(var1);
            var4 = _closure1_slot0;
            var2 = _closure1_slot3;
            var1 = 13;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var4.bind(var1)(var2);
            var1 = var2.canReportRaid;
            var0 = _closure1_slot6;
            var0 = var1.bind(var2)(var3, var0);
            return var0;
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.useShowAntiRaidInGuildNotifSettings = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1310, 1410, 3050, 3172, 1613, 8677, 6692, 660, 632, 21, 6691, 484, 3055, 8690, 2]);