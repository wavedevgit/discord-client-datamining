// modules/feedback/FeedbackManager.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var0 = function() {
        _fun113107: for (var _fun113107_ip = 0;;) switch (_fun113107_ip) {
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
                _fun113107_ip = 76;
                continue _fun113107;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
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
    var0 = function arg0, arg1() {
        _fun113110: for (var _fun113110_ip = 0;;) switch (_fun113110_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun113110_ip = 46;
                    continue _fun113110
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun113110_ip = 55;
                    continue _fun113110
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun113110_ip = 345;
                    continue _fun113110
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun113110_ip = 323;
                    continue _fun113110
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun113110_ip = 283;
                    continue _fun113110
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun113110_ip = 270;
                    continue _fun113110
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
                    _fun113110_ip = 163;
                    continue _fun113110
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun113110_ip = 179;
                    continue _fun113110
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun113110_ip = 249;
                    continue _fun113110
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun113110_ip = 249;
                    continue _fun113110
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun113110_ip = 234;
                    continue _fun113110
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun113110_ip = 247;
                    continue _fun113110
                }
            case 234:
                var8 = _closure1_slot15;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun113110_ip = 265;
                continue _fun113110;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun113110_ip = 283;
                continue _fun113110;
            case 270:
                var6 = _closure1_slot15;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun113110_ip = 323;
                    continue _fun113110
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
                    _fun113110_ip = 330;
                    continue _fun113110
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun113111: for (var _fun113111_ip = 0;;) switch (_fun113111_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun113111_ip = 56;
                                continue _fun113111
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
                            _fun113111_ip = 67;
                            continue _fun113111;
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
    var _closure1_slot14 = var0;
    var0 = function arg0, arg1() {
        _fun113112: for (var _fun113112_ip = 0;;) switch (_fun113112_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun113112_ip = 23;
                    continue _fun113112
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun113112_ip = 33;
                    continue _fun113112
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
                    _fun113112_ip = 70;
                    continue _fun113112
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun113112_ip = 55;
                    continue _fun113112
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot15 = var0;
    var0 = function arg0() {
        _fun113113: for (var _fun113113_ip = 0;;) switch (_fun113113_ip) {
            case 0:
                var1 = arg0;
                var _closure2_slot0 = var1;
                var4 = _closure1_slot0;
                var2 = _closure1_slot1;
                var6 = 11;
                var2 = var2[var6];
                var5 = undefined;
                var2 = var4.bind(var5)(var2);
                var4 = var2.InAppFeedbackStates;
                var2 = var4.getSetting;
                var4 = var2.bind(var4)();
                var2 = var1.feedbackType;
                var4 = var4[var2];
                var2 = null;
                var8 = var2 == var4;
                var7 = undefined;
                if (var8) {
                    _fun113113_ip = 77;
                    continue _fun113113
                }
            case 71:
                var7 = var4.optOutExpiryTime;
            case 77:
                var2 = var2 != var7;
                if (!var2) {
                    _fun113113_ip = 106;
                    continue _fun113113
                }
            case 84:
                var4 = global;
                var8 = var4.Number;
                var4 = var8.isNaN;
                var4 = var4.bind(var8)(var7);
                var2 = !var4;
            case 106:
                if (!var2) {
                    _fun113113_ip = 130;
                    continue _fun113113
                }
            case 109:
                var4 = global;
                var8 = var4.Date;
                var4 = var8.now;
                var4 = var4.bind(var8)();
                var2 = var4 < var7;
            case 130:
                var7 = _closure1_slot7;
                var4 = var7.hasHotspot;
                var1 = var1.hotspot;
                var1 = var4.bind(var7)(var1);
                var1 = !var1;
                var4 = var1;
                if (!var4) {
                    _fun113113_ip = 163;
                    continue _fun113113
                }
            case 160:
                var4 = !var2;
            case 163:
                if (!var4) {
                    _fun113113_ip = 207;
                    continue _fun113113
                }
            case 166:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var6];
                var3 = var4.bind(var5)(var3);
                var4 = var3.InAppFeedbackStates;
                var3 = var4.updateSetting;
                var0 = function(arg0) { // Environment: var0
                    var4 = arg0;
                    var0 = {};
                    var6 = var0;
                    var5 = var4;
                    var1 = copyDataProperties(var6, var5);
                    var3 = _closure2_slot0;
                    var2 = var3.feedbackType;
                    var1 = {};
                    var3 = var3.feedbackType;
                    var5 = var4[var3];
                    var6 = var1;
                    var3 = copyDataProperties(var6, var5);
                    var4 = _closure1_slot11;
                    var3 = 'optOutExpiryTime';
                    var1[var3] = var4;
                    var0[var2] = var1;
                    return var0;
                };
                var0 = var3.bind(var4)(var0);
            case 207:
                var0 = !var2;
                if (var2) {
                    _fun113113_ip = 216;
                    continue _fun113113
                }
            case 213:
                var0 = !var1;
            case 216:
                return var0;
        }
    };
    var _closure1_slot16 = var0;
    var0 = function arg0() {
        var0 = global;
        var1 = var0.Math;
        var0 = var1.random;
        var1 = var0.bind(var1)();
        var0 = arg0;
        var0 = var0.chance;
        var0 = var1 < var0;
        return var0;
    };
    var _closure1_slot17 = var0;
    var0 = function arg0, arg1() {
        _fun113116: for (var _fun113116_ip = 0;;) switch (_fun113116_ip) {
            case 0:
                var2 = arg1;
                var _closure2_slot0 = var2;
                var4 = _closure1_slot0;
                var1 = _closure1_slot1;
                var9 = 11;
                var1 = var1[var9];
                var3 = undefined;
                var1 = var4.bind(var3)(var1);
                var4 = var1.InAppFeedbackStates;
                var1 = var4.getSetting;
                var4 = var1.bind(var4)();
                var1 = var2.feedbackType;
                var4 = var4[var1];
                var1 = null;
                var7 = var1 == var4;
                var5 = undefined;
                if (var7) {
                    _fun113116_ip = 77;
                    continue _fun113116
                }
            case 71:
                var5 = var4.lastImpressionTime;
            case 77:
                var _closure2_slot1 = var3;
                var7 = var1 != var5;
                if (!var7) {
                    _fun113116_ip = 110;
                    continue _fun113116
                }
            case 88:
                var4 = global;
                var8 = var4.Number;
                var4 = var8.isNaN;
                var4 = var4.bind(var8)(var5);
                var7 = !var4;
            case 110:
                if (var7) {
                    _fun113116_ip = 123;
                    continue _fun113116
                }
            case 113:
                var4 = var2.storageKey;
                var7 = var1 == var4;
            case 123:
                var4 = undefined;
                if (var7) {
                    _fun113116_ip = 265;
                    continue _fun113116
                }
            case 131:
                var8 = _closure1_slot0;
                var10 = _closure1_slot1;
                var7 = 12;
                var7 = var10[var7];
                var7 = var8.bind(var3)(var7);
                var8 = var7.Storage;
                var7 = var8.get;
                var2 = var2.storageKey;
                var7 = var7.bind(var8)(var2);
                var8 = var1 != var7;
                var2 = undefined;
                if (!var8) {
                    _fun113116_ip = 185;
                    continue _fun113116
                }
            case 182:
                var2 = var7;
            case 185:
                _closure2_slot1 = var2;
                var7 = var1 == var2;
                if (var7) {
                    _fun113116_ip = 215;
                    continue _fun113116
                }
            case 196:
                var8 = global;
                var10 = var8.Number;
                var8 = var10.isNaN;
                var7 = var8.bind(var10)(var2);
            case 215:
                var4 = var2;
                if (var7) {
                    _fun113116_ip = 265;
                    continue _fun113116
                }
            case 221:
                var8 = _closure1_slot0;
                var7 = _closure1_slot1;
                var7 = var7[var9];
                var7 = var8.bind(var3)(var7);
                var8 = var7.InAppFeedbackStates;
                var7 = var8.updateSetting;
                var6 = function(arg0) { // Environment: var6
                    var5 = arg0;
                    var0 = {};
                    var7 = var0;
                    var6 = var5;
                    var1 = copyDataProperties(var7, var6);
                    var4 = _closure2_slot0;
                    var2 = var4.feedbackType;
                    var1 = {};
                    var4 = var4.feedbackType;
                    var6 = var5[var4];
                    var7 = var1;
                    var4 = copyDataProperties(var7, var6);
                    var4 = _closure2_slot1;
                    var3 = 'lastImpressionTime';
                    var1[var3] = var4;
                    var0[var2] = var1;
                    return var0;
                };
                var6 = var7.bind(var8)(var6);
                var4 = var2;
            case 265:
                var2 = _closure1_slot0;
                var6 = _closure1_slot1;
                var0 = 13;
                var0 = var6[var0];
                var3 = var2.bind(var3)(var0);
                var2 = var3.max;
                var0 = new Array(2);
                var0[0] = var5;
                var0[1] = var4;
                var0 = var2.bind(var3)(var0);
                var2 = var1 != var0;
                var1 = 0;
                if (!var2) {
                    _fun113116_ip = 319;
                    continue _fun113116
                }
            case 316:
                var1 = var0;
            case 319:
                var0 = arg0;
                var0 = var0.cooldown;
                var1 = var1 + var0;
                var0 = global;
                var2 = var0.Date;
                var0 = var2.now;
                var0 = var0.bind(var2)();
                var0 = var1 < var0;
                return var0;
        }
    };
    var _closure1_slot18 = var0;
    var0 = function arg0() {
        _fun113118: for (var _fun113118_ip = 0;;) switch (_fun113118_ip) {
            case 0:
                var5 = arg0;
                var _closure2_slot0 = var5;
                var1 = _closure1_slot14;
                var2 = global;
                var6 = var2.Object;
                var3 = var6.values;
                var2 = _closure1_slot12;
                var3 = var3.bind(var6)(var2);
                var2 = var3.filter;
                var0 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var1 = var0.group;
                    var0 = _closure2_slot0;
                    var0 = var0.group;
                    var0 = var1 === var0;
                    return var0;
                };
                var0 = var2.bind(var3)(var0);
                var3 = undefined;
                var2 = var1.bind(var3)(var0);
                var1 = var2.bind(var3)();
                var0 = var1.done;
                if (var0) {
                    _fun113118_ip = 111;
                    continue _fun113118
                }
            case 74:
                var6 = var1.value;
                var0 = _closure1_slot18;
                var0 = var0.bind(var3)(var5, var6);
                if (var0) {
                    _fun113118_ip = 96;
                    continue _fun113118
                }
            case 92:
                var0 = false;
                return var0;
            case 96:
                var6 = var2.bind(var3)();
                var0 = var6.done;
                var1 = var6;
                if (!var0) {
                    _fun113118_ip = 74;
                    continue _fun113118
                }
            case 111:
                var0 = true;
                return var0;
        }
    };
    var _closure1_slot19 = var0;
    var19 = function() {
        _fun113120: for (var _fun113120_ip = 0;;) switch (_fun113120_ip) {
            case 0:
                var2 = _closure1_slot8;
                var0 = var2.getWasEverRtcConnected;
                var0 = var0.bind(var2)();
                var0 = !var0;
                if (var0) {
                    _fun113120_ip = 39;
                    continue _fun113120
                }
            case 23:
                var2 = _closure1_slot8;
                var1 = var2.getWasEverMultiParticipant;
                var0 = var1.bind(var2)();
            case 39:
                return var0;
        }
    };
    var0 = global;
    var8 = var0.Object;
    var4 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var6[var0];
    var0 = undefined;
    var1 = var7.bind(var0)(var1);
    var _closure1_slot2 = var1;
    var1 = 1;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 2;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 3;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 4;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 5;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 6;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot8 = var1;
    var1 = 7;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot9 = var1;
    var1 = 8;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var11 = var1.FeedbackGroup;
    var9 = var1.FeedbackType;
    var4 = var1.FeedbackTypePrecedence;
    var _closure1_slot10 = var4;
    var1 = var1.MAX_REPRESENTABLE_DATE;
    var _closure1_slot11 = var1;
    var12 = {
        'chance': 0.2,
        'cooldown': 86400000
    };
    var1 = {};
    var8 = var9.VOICE;
    var4 = {};
    var22 = var4;
    var21 = var12;
    var10 = copyDataProperties(var22, var21);
    var10 = var11.AV;
    var17 = 'group';
    var4[var17] = var10;
    var10 = 9;
    var13 = var6[var10];
    var13 = var5.bind(var0)(var13);
    var13 = var13.HotspotLocations;
    var13 = var13.VOICE_CALL_FEEDBACK;
    var16 = 'hotspot';
    var4[var16] = var13;
    var13 = 'lastVoiceFeedback';
    var15 = 'storageKey';
    var4[var15] = var13;
    var13 = var9.VOICE;
    var14 = 'feedbackType';
    var4[var14] = var13;
    var18 = new Array(1);
    var18[0] = var19;
    var13 = 'eligibilityChecks';
    var4[var13] = var18;
    var1[var8] = var4;
    var8 = var9.STREAM;
    var4 = {};
    var22 = var4;
    var21 = var12;
    var18 = copyDataProperties(var22, var21);
    var18 = var11.AV;
    var4[var17] = var18;
    var18 = var6[var10];
    var18 = var5.bind(var0)(var18);
    var18 = var18.HotspotLocations;
    var18 = var18.REPORT_PROBLEM_POST_STREAM;
    var4[var16] = var18;
    var18 = 'lastStreamFeedback';
    var4[var15] = var18;
    var18 = var9.STREAM;
    var4[var14] = var18;
    var1[var8] = var4;
    var8 = var9.VIDEO_BACKGROUND;
    var4 = {};
    var22 = var4;
    var21 = var12;
    var18 = copyDataProperties(var22, var21);
    var18 = var11.AV;
    var4[var17] = var18;
    var18 = var6[var10];
    var18 = var5.bind(var0)(var18);
    var18 = var18.HotspotLocations;
    var18 = var18.VIDEO_BACKGROUND_FEEDBACK;
    var4[var16] = var18;
    var18 = 'lastVideoBackgroundFeedback';
    var4[var15] = var18;
    var18 = var9.VIDEO_BACKGROUND;
    var4[var14] = var18;
    var1[var8] = var4;
    var8 = var9.ACTIVITY;
    var4 = {
        'cooldown': 0,
        'chance': 0.5,
        'group': null,
        'hotspot': null,
        'storageKey': 'lastActivityFeedback'
    };
    var18 = var11.AV;
    var4.group = var18;
    var18 = var6[var10];
    var18 = var5.bind(var0)(var18);
    var18 = var18.HotspotLocations;
    var18 = var18.POST_ACTIVITY_FEEDBACK;
    var4.hotspot = var18;
    var18 = var9.ACTIVITY;
    var4.feedbackType = var18;
    var1[var8] = var4;
    var8 = var9.IN_APP_REPORTS;
    var4 = {
        'cooldown': 172800000,
        'chance': 0.5,
        'group': null,
        'hotspot': null,
        'storageKey': 'inAppReportsFeedback'
    };
    var18 = var11.SAFETY;
    var4.group = var18;
    var18 = var6[var10];
    var18 = var5.bind(var0)(var18);
    var18 = var18.HotspotLocations;
    var18 = var18.IN_APP_REPORTS_FEEDBACK;
    var4.hotspot = var18;
    var18 = var9.IN_APP_REPORTS;
    var4.feedbackType = var18;
    var1[var8] = var4;
    var8 = var9.BLOCK_USER;
    var4 = {
        'cooldown': 0,
        'chance': 1,
        'group': null,
        'hotspot': null,
        'storageKey': 'blockUser'
    };
    var18 = var11.SAFETY;
    var4.group = var18;
    var18 = var6[var10];
    var18 = var5.bind(var0)(var18);
    var18 = var18.HotspotLocations;
    var18 = var18.BLOCK_USER_FEEDBACK;
    var4.hotspot = var18;
    var18 = var9.BLOCK_USER;
    var4.feedbackType = var18;
    var1[var8] = var4;
    var8 = var9.VOICE_FILTER;
    var4 = {};
    var22 = var4;
    var21 = var12;
    var18 = copyDataProperties(var22, var21);
    var18 = var11.AV;
    var4[var17] = var18;
    var18 = var6[var10];
    var18 = var5.bind(var0)(var18);
    var18 = var18.HotspotLocations;
    var18 = var18.VOICE_FILTER_FEEDBACK;
    var4[var16] = var18;
    var18 = 'lastVoiceFilterFeedback';
    var4[var15] = var18;
    var18 = var9.VOICE_FILTER;
    var4[var14] = var18;
    var18 = new Array(1);
    var18[0] = var19;
    var4[var13] = var18;
    var1[var8] = var4;
    var8 = var9.SEARCH_RESULTS;
    var4 = {};
    var22 = var4;
    var21 = var12;
    var12 = copyDataProperties(var22, var21);
    var12 = var11.SEARCH;
    var4[var17] = var12;
    var12 = var6[var10];
    var12 = var5.bind(var0)(var12);
    var12 = var12.HotspotLocations;
    var12 = var12.SEARCH_RESULTS_FEEDBACK;
    var4[var16] = var12;
    var12 = 'searchResultsFeedback';
    var4[var15] = var12;
    var12 = var9.SEARCH_RESULTS;
    var4[var14] = var12;
    var12 = new Array(1);
    var14 = function() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 14;
        var1 = var1[var0];
        var0 = undefined;
        var2 = var2.bind(var0)(var1);
        var1 = var2.getIsSearchResultsFeedbackExperimentEnabled;
        var0 = {};
        var3 = 'FeedbackManager';
        var0.location = var3;
        var0 = var1.bind(var2)(var0);
        var0 = !var0;
        var0 = !var0;
        return var0;
    };
    var12[0] = var14;
    var4[var13] = var12;
    var1[var8] = var4;
    var8 = var9.AGE_VERIFICATION;
    var4 = {
        'cooldown': 0,
        'chance': 1,
        'group': null,
        'hotspot': null,
        'storageKey': 'ageVerificationFeedback'
    };
    var11 = var11.SAFETY;
    var4.group = var11;
    var10 = var6[var10];
    var10 = var5.bind(var0)(var10);
    var10 = var10.HotspotLocations;
    var10 = var10.AGE_VERIFICATION_FEEDBACK;
    var4.hotspot = var10;
    var9 = var9.AGE_VERIFICATION;
    var4.feedbackType = var9;
    var1[var8] = var4;
    var _closure1_slot12 = var1;
    var4 = 15;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var3 = function(arg0) { // Environment: var3
        var3 = function arg0() {
            _fun113123: for (var _fun113123_ip = 0;;) switch (_fun113123_ip) {
                case 0:
                    var5 = this;
                    var13 = 0;
                    var0 = copyRestArgs(var13);
                    var7 = _closure1_slot2;
                    var3 = _closure2_slot0;
                    var4 = undefined;
                    var7 = var7.bind(var4)(var5, var3);
                    var10 = new Array(0);
                    var13 = var10;
                    var12 = var0;
                    var11 = 0;
                    var0 = arraySpread(var13, var12, var11);
                    var0 = _closure1_slot5;
                    var9 = var0.bind(var4)(var3);
                    var3 = _closure1_slot4;
                    var0 = _closure1_slot13;
                    var0 = var0.bind(var4)();
                    if (var0) {
                        _fun113123_ip = 86;
                        continue _fun113123
                    }
                case 73:
                    var0 = var9.apply;
                    var0 = var0.bind(var9)(var5, var10);
                    _fun113123_ip = 120;
                    continue _fun113123;
                case 86:
                    var6 = global;
                    var8 = var6.Reflect;
                    var7 = var8.construct;
                    var6 = _closure1_slot5;
                    var6 = var6.bind(var4)(var5);
                    var6 = var6.constructor;
                    var0 = var7.bind(var8)(var9, var10, var6);
                case 120:
                    var0 = var3.bind(var4)(var5, var0);
                    var _closure3_slot0 = var0;
                    var3 = null;
                    var0.feedbackTypeToShow = var3;
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var2 = 13;
                    var2 = var5[var2];
                    var4 = var3.bind(var4)(var2);
                    var3 = var4.debounce;
                    var2 = function(arg0, arg1) { // Environment: var1
                        _fun113124: for (var _fun113124_ip = 0;;) switch (_fun113124_ip) {
                            case 0:
                                var3 = arg1;
                                var1 = _closure3_slot0;
                                var1 = var1.feedbackTypeToShow;
                                var2 = null;
                                if (!(var2 == var1)) {
                                    _fun113124_ip = 34;
                                    continue _fun113124
                                }
                            case 22:
                                if (!(var2 != var3)) {
                                    _fun113124_ip = 73;
                                    continue _fun113124
                                }
                            case 26:
                                var1 = undefined;
                                var1 = var3.bind(var1)();
                                _fun113124_ip = 73;
                                continue _fun113124;
                            case 34:
                                var0 = _closure3_slot0;
                                var4 = var0.feedbackTypeToShow;
                                var3 = function arg0() {
                                    var0 = arg0;
                                    var _closure5_slot0 = var0;
                                    var3 = _closure1_slot0;
                                    var2 = _closure1_slot1;
                                    var0 = 11;
                                    var2 = var2[var0];
                                    var0 = undefined;
                                    var2 = var3.bind(var0)(var2);
                                    var3 = var2.InAppFeedbackStates;
                                    var2 = var3.updateSetting;
                                    var1 = function(arg0) { // Environment: var1
                                        var3 = arg0;
                                        var0 = {};
                                        var6 = var0;
                                        var5 = var3;
                                        var1 = copyDataProperties(var6, var5);
                                        var2 = _closure5_slot0;
                                        var1 = {};
                                        var5 = var3[var2];
                                        var6 = var1;
                                        var3 = copyDataProperties(var6, var5);
                                        var3 = global;
                                        var4 = var3.Date;
                                        var3 = var4.now;
                                        var4 = var3.bind(var4)();
                                        var3 = 'lastImpressionTime';
                                        var1[var3] = var4;
                                        var0[var2] = var1;
                                        return var0;
                                    };
                                    var1 = var2.bind(var3)(var1);
                                    return var0;
                                };
                                var1 = undefined;
                                var3 = var3.bind(var1)(var4);
                                var0.feedbackTypeToShow = var2;
                                var0 = arg0;
                                var0 = var0.bind(var1)();
                            case 73:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var1 = 200;
                    var1 = var3.bind(var4)(var2, var1);
                    var0.showFeedbackModalDebounced = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot6;
        var2 = undefined;
        var4 = arg0;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot3;
        var4 = {};
        var5 = 'possiblyShowFeedbackModal';
        var4.key = var5;
        var0 = function arg0, arg1, arg2() {
            _fun113127: for (var _fun113127_ip = 0;;) switch (_fun113127_ip) {
                case 0:
                    var2 = arg0;
                    var1 = arg2;
                    var4 = this;
                    var3 = function arg0() {
                        _fun113128: for (var _fun113128_ip = 0;;) switch (_fun113128_ip) {
                            case 0:
                                var5 = arg0;
                                var4 = _closure1_slot0;
                                var3 = _closure1_slot1;
                                var2 = 10;
                                var3 = var3[var2];
                                var2 = undefined;
                                var4 = var4.bind(var2)(var3);
                                var3 = var4.getFeedbackSurveyEligibilityOverrideConfig;
                                var2 = {};
                                var6 = 'FeedbackManager';
                                var2.location = var6;
                                var2 = var3.bind(var4)(var2);
                                var2 = var2.overrideEligibility;
                                if (var2) {
                                    _fun113128_ip = 182;
                                    continue _fun113128
                                }
                            case 62:
                                var3 = _closure1_slot9;
                                var2 = var3.getFeedbackConfig;
                                var3 = var2.bind(var3)(var5);
                                var2 = null;
                                if (!(var2 == var3)) {
                                    _fun113128_ip = 93;
                                    continue _fun113128
                                }
                            case 85:
                                var4 = _closure1_slot12;
                                var3 = var4[var5];
                            case 93:
                                var _closure4_slot0 = var3;
                                var3 = var3.eligibilityChecks;
                                if (!(var2 == var3)) {
                                    _fun113128_ip = 113;
                                    continue _fun113128
                                }
                            case 109:
                                var3 = new Array(0);
                            case 113:
                                var2 = _closure1_slot17;
                                var4 = new Array(3);
                                var4[0] = var2;
                                var2 = _closure1_slot16;
                                var4[1] = var2;
                                var0 = _closure1_slot19;
                                var4[2] = var0;
                                var2 = var4.every;
                                var0 = function(arg0) { // Environment: var1
                                    var2 = _closure4_slot0;
                                    var1 = arg0;
                                    var0 = undefined;
                                    var0 = var1.bind(var0)(var2);
                                    return var0;
                                };
                                var0 = var2.bind(var4)(var0);
                                if (!var0) {
                                    _fun113128_ip = 180;
                                    continue _fun113128
                                }
                            case 162:
                                var2 = var3.every;
                                var1 = function(arg0) { // Environment: var1
                                    var2 = _closure4_slot0;
                                    var1 = arg0;
                                    var0 = undefined;
                                    var0 = var1.bind(var0)(var2);
                                    return var0;
                                };
                                var0 = var2.bind(var3)(var1);
                            case 180:
                                return var0;
                            case 182:
                                var0 = true;
                                return var0;
                        }
                    };
                    var0 = undefined;
                    var3 = var3.bind(var0)(var2);
                    if (!var3) {
                        _fun113127_ip = 88;
                        continue _fun113127
                    }
                case 28:
                    var5 = var4.feedbackTypeToShow;
                    var3 = null;
                    if (!(var3 != var5)) {
                        _fun113127_ip = 65;
                        continue _fun113127
                    }
                case 40:
                    var3 = _closure1_slot10;
                    var5 = var4.feedbackTypeToShow;
                    var5 = var3[var5];
                    var3 = var3[var2];
                    if (!(!(var5 < var3))) {
                        _fun113127_ip = 88;
                        continue _fun113127
                    }
                case 65:
                    var4.feedbackTypeToShow = var2;
                    var3 = var4.showFeedbackModalDebounced;
                    var2 = arg1;
                    var2 = var3.bind(var4)(var2, var1);
                    _fun113127_ip = 98;
                    continue _fun113127;
                case 88:
                    var2 = null;
                    if (!(var2 != var1)) {
                        _fun113127_ip = 98;
                        continue _fun113127
                    }
                case 94:
                    var1 = var1.bind(var0)();
                case 98:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(1);
        var0[0] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var4);
    var4 = 16;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/feedback/FeedbackManager.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.FeedbackConfig = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 8320, 3518, 14517, 9725, 8319, 14518, 1348, 587, 22, 14519, 4299, 2]);