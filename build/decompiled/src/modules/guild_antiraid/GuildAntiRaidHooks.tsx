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
        _fun69637: for (var _fun69637_ip = 0;;) switch (_fun69637_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun69637_ip = 45;
                    continue _fun69637
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 45:
                if (var1) {
                    _fun69637_ip = 54;
                    continue _fun69637
                }
            case 48:
                var1 = var2["@@iterator"];
            case 54:
                if (var1) {
                    _fun69637_ip = 344;
                    continue _fun69637
                }
            case 60:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun69637_ip = 322;
                    continue _fun69637
                }
            case 85:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun69637_ip = 282;
                    continue _fun69637
                }
            case 95:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun69637_ip = 269;
                    continue _fun69637
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
                    _fun69637_ip = 162;
                    continue _fun69637
                }
            case 157:
                var6 = var2.constructor;
            case 162:
                var9 = var8;
                if (!var6) {
                    _fun69637_ip = 178;
                    continue _fun69637
                }
            case 168:
                var6 = var2.constructor;
                var9 = var6.name;
            case 178:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun69637_ip = 248;
                    continue _fun69637
                }
            case 186:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun69637_ip = 248;
                    continue _fun69637
                }
            case 194:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun69637_ip = 233;
                    continue _fun69637
                }
            case 204:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun69637_ip = 246;
                    continue _fun69637
                }
            case 233:
                var8 = _closure1_slot14;
                var6 = var8.bind(var7)(var2, var7);
            case 246:
                _fun69637_ip = 264;
                continue _fun69637;
            case 248:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 264:
                var5 = var6;
                _fun69637_ip = 282;
                continue _fun69637;
            case 269:
                var6 = _closure1_slot14;
                var5 = var6.bind(var7)(var2, var7);
            case 282:
                var3 = var5;
                if (var3) {
                    _fun69637_ip = 322;
                    continue _fun69637
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
                    _fun69637_ip = 329;
                    continue _fun69637
                }
            case 325:
                _closure2_slot0 = var3;
            case 329:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun69638: for (var _fun69638_ip = 0;;) switch (_fun69638_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun69638_ip = 56;
                                continue _fun69638
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
                            _fun69638_ip = 67;
                            continue _fun69638;
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
    var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var1
        _fun69639: for (var _fun69639_ip = 0;;) switch (_fun69639_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun69639_ip = 23;
                    continue _fun69639
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun69639_ip = 33;
                    continue _fun69639
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
                    _fun69639_ip = 70;
                    continue _fun69639
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun69639_ip = 55;
                    continue _fun69639
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot14 = var0;
    var0 = function(arg0) { // Original name: getFirstGuildIncidentId, environment: var1
        _fun69640: for (var _fun69640_ip = 0;;) switch (_fun69640_ip) {
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
                    _fun69640_ip = 366;
                    continue _fun69640
                }
            case 126:
                var1 = var4.value;
                if (!(var0 != var1)) {
                    _fun69640_ip = 339;
                    continue _fun69640
                }
            case 138:
                var2 = var1.id;
                var15 = var11[var2];
                var3 = var15;
                if (!(var0 != var15)) {
                    _fun69640_ip = 339;
                    continue _fun69640
                }
            case 157:
                var16 = _closure1_slot0;
                var2 = _closure1_slot3;
                var2 = var2[var5];
                var16 = var16.bind(var10)(var2);
                var2 = var16.hasDetectedActivity;
                var2 = var2.bind(var16)(var15);
                if (var2) {
                    _fun69640_ip = 222;
                    continue _fun69640
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
                    _fun69640_ip = 339;
                    continue _fun69640
                }
            case 222:
                var16 = _closure1_slot0;
                var2 = _closure1_slot3;
                var2 = var2[var5];
                var16 = var16.bind(var10)(var2);
                var2 = var16.isUnderLockdown;
                var2 = var2.bind(var16)(var15);
                if (!var2) {
                    _fun69640_ip = 265;
                    continue _fun69640
                }
            case 253:
                var2 = var1.id;
                var3 = var15;
                if (!(var2 === var14)) {
                    _fun69640_ip = 339;
                    continue _fun69640
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
                    _fun69640_ip = 359;
                    continue _fun69640
                }
            case 339:
                var15 = var9.bind(var10)();
                var2 = var15.done;
                var4 = var15;
                if (var2) {
                    _fun69640_ip = 366;
                    continue _fun69640
                }
            case 354:
                _fun69640_ip = 126;
                continue _fun69640;
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
        _fun69642: for (var _fun69642_ip = 0;;) switch (_fun69642_ip) {
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
                    _fun69642_ip = 379;
                    continue _fun69642
                }
            case 182:
                var1 = var4.value;
                if (!(var0 != var1)) {
                    _fun69642_ip = 352;
                    continue _fun69642
                }
            case 194:
                var2 = var1.id;
                var14 = var10[var2];
                var3 = var14;
                if (!(var0 != var3)) {
                    _fun69642_ip = 352;
                    continue _fun69642
                }
            case 213:
                var15 = _closure1_slot0;
                var2 = _closure1_slot3;
                var2 = var2[var5];
                var15 = var15.bind(var12)(var2);
                var2 = var15.hasDetectedActivity;
                var2 = var2.bind(var15)(var14);
                if (var2) {
                    _fun69642_ip = 278;
                    continue _fun69642
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
                    _fun69642_ip = 352;
                    continue _fun69642
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
                    _fun69642_ip = 372;
                    continue _fun69642
                }
            case 352:
                var14 = var9.bind(var12)();
                var2 = var14.done;
                var4 = var14;
                if (var2) {
                    _fun69642_ip = 379;
                    continue _fun69642
                }
            case 367:
                _fun69642_ip = 182;
                continue _fun69642;
            case 372:
                var1 = var1.id;
                return var1;
            case 379:
                return var0;
        }
    };
    var2.useFirstGuildIncidentId = var3;
    var3 = function(arg0) { // Original name: useGuildIncidentsState, environment: var1
        _fun69647: for (var _fun69647_ip = 0;;) switch (_fun69647_ip) {
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
                    _fun69648: for (var _fun69648_ip = 0;;) switch (_fun69648_ip) {
                        case 0:
                            var3 = _closure1_slot5;
                            var2 = var3.getGuild;
                            var0 = _closure2_slot0;
                            var4 = var2.bind(var3)(var0);
                            var0 = null;
                            if (!(var0 != var4)) {
                                _fun69648_ip = 92;
                                continue _fun69648
                            }
                        case 30:
                            var3 = _closure1_slot6;
                            var2 = var3.getGuildPermissions;
                            var4 = var2.bind(var3)(var4);
                            var0 = var0 != var4;
                            if (!var0) {
                                _fun69648_ip = 90;
                                continue _fun69648
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
                    _fun69649: for (var _fun69649_ip = 0;;) switch (_fun69649_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var0 = null;
                            var2 = var0 != var2;
                            if (!var2) {
                                _fun69649_ip = 38;
                                continue _fun69649
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
                    _fun69647_ip = 163;
                    continue _fun69647
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
        _fun69650: for (var _fun69650_ip = 0;;) switch (_fun69650_ip) {
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
                    _fun69650_ip = 50;
                    continue _fun69650
                }
            case 48:
                var3 = {};
            case 50:
                var4 = var2 != var1;
                var0 = null;
                if (!var4) {
                    _fun69650_ip = 63;
                    continue _fun69650
                }
            case 59:
                var0 = var3[var1];
            case 63:
                var3 = var2 != var0;
                if (!var3) {
                    _fun69650_ip = 76;
                    continue _fun69650
                }
            case 70:
                var3 = var0.disableRaidAlertNag;
            case 76:
                var0 = {};
                var2 = var2 != var1;
                if (!var2) {
                    _fun69650_ip = 88;
                    continue _fun69650
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
        _fun69651: for (var _fun69651_ip = 0;;) switch (_fun69651_ip) {
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
                    _fun69651_ip = 50;
                    continue _fun69651
                }
            case 48:
                var3 = {};
            case 50:
                var5 = var2 != var1;
                var4 = null;
                if (!var5) {
                    _fun69651_ip = 63;
                    continue _fun69651
                }
            case 59:
                var4 = var3[var1];
            case 63:
                var3 = var2 != var4;
                if (!var3) {
                    _fun69651_ip = 76;
                    continue _fun69651
                }
            case 70:
                var3 = var4.disableRaidAlertNag;
            case 76:
                var4 = var2 != var1;
                var6 = null;
                if (!var4) {
                    _fun69651_ip = 100;
                    continue _fun69651
                }
            case 85:
                var5 = _closure1_slot9;
                var4 = var5.getGuildIncident;
                var6 = var4.bind(var5)(var1);
            case 100:
                var4 = var2 != var6;
                if (!var4) {
                    _fun69651_ip = 138;
                    continue _fun69651
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
                    _fun69651_ip = 150;
                    continue _fun69651
                }
            case 147:
                var2 = !var4;
            case 150:
                if (!var2) {
                    _fun69651_ip = 156;
                    continue _fun69651
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
        _fun69652: for (var _fun69652_ip = 0;;) switch (_fun69652_ip) {
            case 0:
                var6 = arg0;
                var2 = null;
                if (!(var2 != var6)) {
                    _fun69652_ip = 262;
                    continue _fun69652
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
                    _fun69652_ip = 72;
                    continue _fun69652
                }
            case 46:
                var7 = var6.features;
                var6 = var7.has;
                var5 = _closure1_slot12;
                var5 = var5.INVITES_DISABLED;
                var4 = var6.bind(var7)(var5);
            case 72:
                if (var4) {
                    _fun69652_ip = 164;
                    continue _fun69652
                }
            case 75:
                var6 = var2 == var3;
                var5 = undefined;
                if (var6) {
                    _fun69652_ip = 90;
                    continue _fun69652
                }
            case 84:
                var5 = var3.invitesDisabledUntil;
            case 90:
                var5 = var2 != var5;
                if (!var5) {
                    _fun69652_ip = 161;
                    continue _fun69652
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
                    _fun69652_ip = 184;
                    continue _fun69652
                }
            case 178:
                var1 = var3.dmsDisabledUntil;
            case 184:
                var1 = var2 != var1;
                if (!var1) {
                    _fun69652_ip = 255;
                    continue _fun69652
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
        _fun69653: for (var _fun69653_ip = 0;;) switch (_fun69653_ip) {
            case 0:
                var6 = arg0;
                var2 = null;
                var3 = var2 == var6;
                var1 = undefined;
                var9 = undefined;
                if (var3) {
                    _fun69653_ip = 23;
                    continue _fun69653
                }
            case 18:
                var9 = var6.id;
            case 23:
                if (!(var2 == var9)) {
                    _fun69653_ip = 34;
                    continue _fun69653
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
                    _fun69653_ip = 334;
                    continue _fun69653
                }
            case 107:
                var0 = {};
                var7 = var2 == var6;
                var4 = undefined;
                if (var7) {
                    _fun69653_ip = 144;
                    continue _fun69653
                }
            case 118:
                var7 = var6.features;
                var6 = var7.has;
                var5 = _closure1_slot12;
                var5 = var5.INVITES_DISABLED;
                var4 = var6.bind(var7)(var5);
            case 144:
                if (var4) {
                    _fun69653_ip = 236;
                    continue _fun69653
                }
            case 147:
                var6 = var2 == var3;
                var5 = undefined;
                if (var6) {
                    _fun69653_ip = 162;
                    continue _fun69653
                }
            case 156:
                var5 = var3.invitesDisabledUntil;
            case 162:
                var5 = var2 != var5;
                if (!var5) {
                    _fun69653_ip = 233;
                    continue _fun69653
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
                    _fun69653_ip = 256;
                    continue _fun69653
                }
            case 250:
                var1 = var3.dmsDisabledUntil;
            case 256:
                var1 = var2 != var1;
                if (!var1) {
                    _fun69653_ip = 327;
                    continue _fun69653
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
                _fun69653_ip = 348;
                continue _fun69653;
            case 334:
                var0 = {
                    'dmsDisabled': false,
                    'invitesDisabled': false
                };
            case 348:
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [1310, 1410, 3050, 3172, 1613, 8677, 6691, 660, 632, 21, 6690, 484, 3055, 8690, 2]);