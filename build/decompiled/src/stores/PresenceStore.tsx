// stores/PresenceStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var0 = function() {
        _fun31913: for (var _fun31913_ip = 0;;) switch (_fun31913_ip) {
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
                _fun31913_ip = 74;
                continue _fun31913;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot26 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot26 = var0;
    var0 = function arg0, arg1() {
        _fun31916: for (var _fun31916_ip = 0;;) switch (_fun31916_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun31916_ip = 46;
                    continue _fun31916
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun31916_ip = 55;
                    continue _fun31916
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun31916_ip = 343;
                    continue _fun31916
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun31916_ip = 323;
                    continue _fun31916
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun31916_ip = 283;
                    continue _fun31916
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun31916_ip = 270;
                    continue _fun31916
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
                    _fun31916_ip = 163;
                    continue _fun31916
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun31916_ip = 179;
                    continue _fun31916
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun31916_ip = 249;
                    continue _fun31916
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun31916_ip = 249;
                    continue _fun31916
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun31916_ip = 234;
                    continue _fun31916
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun31916_ip = 247;
                    continue _fun31916
                }
            case 234:
                var8 = _closure1_slot28;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun31916_ip = 265;
                continue _fun31916;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun31916_ip = 283;
                continue _fun31916;
            case 270:
                var6 = _closure1_slot28;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun31916_ip = 323;
                    continue _fun31916
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
                    _fun31916_ip = 330;
                    continue _fun31916
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun31917: for (var _fun31917_ip = 0;;) switch (_fun31917_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun31917_ip = 56;
                                continue _fun31917
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
                            _fun31917_ip = 67;
                            continue _fun31917;
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
            case 343:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot27 = var0;
    var0 = function arg0, arg1() {
        _fun31918: for (var _fun31918_ip = 0;;) switch (_fun31918_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun31918_ip = 23;
                    continue _fun31918
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun31918_ip = 33;
                    continue _fun31918
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
                    _fun31918_ip = 70;
                    continue _fun31918
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun31918_ip = 55;
                    continue _fun31918
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot28 = var0;
    var0 = function arg0, arg1() {
        _fun31919: for (var _fun31919_ip = 0;;) switch (_fun31919_ip) {
            case 0:
                var1 = _closure1_slot17;
                var0 = arg0;
                var2 = var1[var0];
                var0 = null;
                var1 = var0 != var2;
                if (!var1) {
                    _fun31919_ip = 30;
                    continue _fun31919
                }
            case 23:
                var1 = arg1;
                var0 = var2[var1];
            case 30:
                return var0;
        }
    };
    var _closure1_slot29 = var0;
    var1 = function arg0, arg1() {
        _fun31920: for (var _fun31920_ip = 0;;) switch (_fun31920_ip) {
            case 0:
                var3 = arg0;
                var1 = arg1;
                var0 = _closure1_slot24;
                var5 = undefined;
                var4 = var0.bind(var5)(var1);
                var0 = _closure1_slot24;
                var0 = var0.bind(var5)(var3);
                var0 = var4 - var0;
                if (var0) {
                    _fun31920_ip = 58;
                    continue _fun31920
                }
            case 36:
                var4 = _closure1_slot25;
                var4 = var4.bind(var5)(var1);
                var2 = _closure1_slot25;
                var2 = var2.bind(var5)(var3);
                var0 = var4 - var2;
            case 58:
                if (var0) {
                    _fun31920_ip = 103;
                    continue _fun31920
                }
            case 61:
                var5 = var1.created_at;
                var4 = null;
                var6 = var4 != var5;
                var1 = 0;
                if (!var6) {
                    _fun31920_ip = 81;
                    continue _fun31920
                }
            case 78:
                var1 = var5;
            case 81:
                var3 = var3.created_at;
                var4 = var4 != var3;
                var2 = 0;
                if (!var4) {
                    _fun31920_ip = 99;
                    continue _fun31920
                }
            case 96:
                var2 = var3;
            case 99:
                var0 = var1 - var2;
            case 103:
                return var0;
        }
    };
    var _closure1_slot30 = var1;
    var0 = function arg0() {
        _fun31921: for (var _fun31921_ip = 0;;) switch (_fun31921_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.length;
                var6 = 0;
                if (!(var6 !== var1)) {
                    _fun31921_ip = 197;
                    continue _fun31921
                }
            case 17:
                var1 = new Array(0);
                var2 = new Array(0);
                var4 = _closure1_slot27;
                var8 = undefined;
                var7 = var4.bind(var8)(var0);
                var5 = var7.bind(var8)();
                var4 = var5.done;
                if (var4) {
                    _fun31921_ip = 112;
                    continue _fun31921
                }
            case 51:
                var9 = var5.value;
                var10 = var9.type;
                var4 = _closure1_slot12;
                var4 = var4.PLAYING;
                if (!(var10 !== var4)) {
                    _fun31921_ip = 87;
                    continue _fun31921
                }
            case 75:
                var4 = var1.push;
                var4 = var4.bind(var1)(var9);
                _fun31921_ip = 97;
                continue _fun31921;
            case 87:
                var4 = var2.push;
                var4 = var4.bind(var2)(var9);
            case 97:
                var9 = var7.bind(var8)();
                var4 = var9.done;
                var5 = var9;
                if (!var4) {
                    _fun31921_ip = 51;
                    continue _fun31921
                }
            case 112:
                var5 = var2.length;
                var4 = 1;
                if (!(!(var5 <= var4))) {
                    _fun31921_ip = 195;
                    continue _fun31921
                }
            case 124:
                var5 = new Array(0);
                var13 = var5;
                var12 = var2;
                var11 = 0;
                var2 = arraySpread(var13, var12, var11);
                var2 = var5.sort;
                var3 = _closure1_slot30;
                var2 = var2.bind(var5)(var3);
                var5 = var2[var6];
                var2 = new Array(1);
                var13 = var2;
                var12 = var1;
                var1 = arraySpread(var13, var12, var11);
                var2[var1] = var5;
                var1 = var1 + var4;
                var1 = var2.sort;
                var1 = var1.bind(var2)(var3);
                return var1;
            case 195:
                return var0;
            case 197:
                return var0;
        }
    };
    var _closure1_slot31 = var0;
    var0 = function arg0, arg1() {
        var3 = arg0;
        var4 = arg1;
        var1 = _closure1_slot19;
        var1[var3] = var4;
        var2 = _closure1_slot20;
        var1 = _closure1_slot31;
        var0 = undefined;
        var1 = var1.bind(var0)(var4);
        var2[var3] = var1;
        return var0;
    };
    var _closure1_slot32 = var0;
    var0 = function arg0, arg1() {
        _fun31923: for (var _fun31923_ip = 0;;) switch (_fun31923_ip) {
            case 0:
                var1 = arg0;
                var3 = _closure1_slot9;
                var0 = var3.getId;
                var3 = var0.bind(var3)();
                var0 = arg1;
                if (!(var0 !== var3)) {
                    _fun31923_ip = 422;
                    continue _fun31923
                }
            case 32:
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 10;
                var0 = var4[var0];
                var10 = undefined;
                var0 = var3.bind(var10)(var0);
                var5 = var0.ViewRobloxSubgamesInRichPresenceExperiment;
                var4 = var5.getConfig;
                var3 = {};
                var0 = 'presence_filtering';
                var3.location = var0;
                var3 = var4.bind(var5)(var3);
                var4 = var3.enabled;
                var3 = var1.map;
                if (var4) {
                    _fun31923_ip = 108;
                    continue _fun31923
                }
            case 96:
                var4 = function(arg0) { // Environment: var2
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 11;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.maybeTransformRobloxSubgameIntoRobloxActivity;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var4 = var3.bind(var1)(var4);
                _fun31923_ip = 118;
                continue _fun31923;
            case 108:
                var2 = function(arg0) { // Environment: var2
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 11;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.transformRobloxSubgameNames;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var4 = var3.bind(var1)(var2);
            case 118:
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 12;
                var2 = var5[var2];
                var2 = var3.bind(var10)(var2);
                var5 = var2.GamePresenceNegativeTestExperiment;
                var3 = var5.getCurrentConfig;
                var2 = {};
                var2.location = var0;
                var0 = {};
                var6 = false;
                var0.autoTrackExposure = var6;
                var9 = var3.bind(var5)(var2, var0);
                var0 = var9.filterGamePresence;
                if (var0) {
                    _fun31923_ip = 207;
                    continue _fun31923
                }
            case 180:
                var0 = var9.filterRichPresence;
                if (var0) {
                    _fun31923_ip = 207;
                    continue _fun31923
                }
            case 189:
                var0 = {};
                var0.visible = var4;
                var2 = new Array(0);
                var0.hidden = var2;
                return var0;
            case 207:
                var3 = new Array(0);
                var2 = new Array(0);
                var0 = _closure1_slot27;
                var8 = var0.bind(var10)(var4);
                var4 = var8.bind(var10)();
                var0 = var4.done;
                var7 = 9;
                var6 = null;
                var5 = var4;
                var4 = undefined;
                if (var0) {
                    _fun31923_ip = 408;
                    continue _fun31923
                }
            case 249:
                var13 = var5.value;
                var12 = var13.type;
                var0 = _closure1_slot12;
                var0 = var0.PLAYING;
                if (!(var12 !== var0)) {
                    _fun31923_ip = 285;
                    continue _fun31923
                }
            case 273:
                var0 = var3.push;
                var0 = var0.bind(var3)(var13);
                _fun31923_ip = 390;
                continue _fun31923;
            case 285:
                var0 = var13.application_id;
                var0 = var6 != var0;
                if (!var0) {
                    _fun31923_ip = 320;
                    continue _fun31923
                }
            case 298:
                var14 = _closure1_slot1;
                var12 = _closure1_slot2;
                var12 = var12[var7];
                var12 = var14.bind(var10)(var12);
                var0 = var12.bind(var10)(var13);
            case 320:
                var12 = var9.filterGamePresence;
                if (var12) {
                    _fun31923_ip = 371;
                    continue _fun31923
                }
            case 329:
                var12 = var9.filterRichPresence;
                if (!var12) {
                    _fun31923_ip = 341;
                    continue _fun31923
                }
            case 338:
                if (var0) {
                    _fun31923_ip = 356;
                    continue _fun31923
                }
            case 341:
                var12 = var3.push;
                var12 = var12.bind(var3)(var13);
                var4 = var0;
                _fun31923_ip = 390;
                continue _fun31923;
            case 356:
                var12 = var2.push;
                var12 = var12.bind(var2)(var13);
                var4 = var0;
                _fun31923_ip = 390;
                continue _fun31923;
            case 371:
                var4 = var0;
                if (!var0) {
                    _fun31923_ip = 390;
                    continue _fun31923
                }
            case 377:
                var12 = var2.push;
                var12 = var12.bind(var2)(var13);
                var4 = var0;
            case 390:
                var12 = var8.bind(var10)();
                var0 = var12.done;
                var5 = var12;
                if (!var0) {
                    _fun31923_ip = 249;
                    continue _fun31923
                }
            case 408:
                var0 = {};
                var0.visible = var3;
                var0.hidden = var2;
                return var0;
            case 422:
                var0 = {};
                var0.visible = var1;
                var1 = new Array(0);
                var0.hidden = var1;
                return var0;
        }
    };
    var _closure1_slot33 = var0;
    var0 = function arg0() {
        _fun31926: for (var _fun31926_ip = 0;;) switch (_fun31926_ip) {
            case 0:
                var2 = arg0;
                var0 = _closure1_slot18;
                var0 = delete var0[var2];
                var0 = _closure1_slot19;
                var0 = delete var0[var2];
                var0 = _closure1_slot20;
                var0 = delete var0[var2];
                var0 = _closure1_slot21;
                var0 = delete var0[var2];
                var0 = _closure1_slot22;
                var0 = delete var0[var2];
                var0 = _closure1_slot17;
                var0 = var0[var2];
                var4 = null;
                if (!(var4 != var0)) {
                    _fun31926_ip = 423;
                    continue _fun31926
                }
            case 65:
                var8 = global;
                var6 = var8.Object;
                var5 = var6.values;
                var0 = _closure1_slot17;
                var0 = var0[var2];
                var10 = var5.bind(var6)(var0);
                var7 = var10.reduce;
                var6 = 0;
                var5 = var10[var6];
                var0 = function(arg0, arg1) { // Environment: var3
                    _fun31927: for (var _fun31927_ip = 0;;) switch (_fun31927_ip) {
                        case 0:
                            var4 = arg0;
                            var1 = arg1;
                            var6 = var1.processedAtTimestamp;
                            var5 = var4.processedAtTimestamp;
                            var0 = var1.activities;
                            var7 = null;
                            var0 = var7 != var0;
                            var2 = 0;
                            if (!var0) {
                                _fun31927_ip = 46;
                                continue _fun31927
                            }
                        case 35:
                            var0 = var1.activities;
                            var2 = var0.length;
                        case 46:
                            var0 = var4.activities;
                            var0 = var7 != var0;
                            var3 = 0;
                            if (!var0) {
                                _fun31927_ip = 72;
                                continue _fun31927
                            }
                        case 61:
                            var0 = var4.activities;
                            var3 = var0.length;
                        case 72:
                            if (!(!(var6 > var5))) {
                                _fun31927_ip = 90;
                                continue _fun31927
                            }
                        case 76:
                            var0 = var4;
                            if (!(var6 === var5)) {
                                _fun31927_ip = 93;
                                continue _fun31927
                            }
                        case 83:
                            var0 = var4;
                            if (!(var2 > var3)) {
                                _fun31927_ip = 93;
                                continue _fun31927
                            }
                        case 90:
                            var0 = var1;
                        case 93:
                            return var0;
                    }
                };
                var0 = var7.bind(var10)(var0, var5);
                var7 = var0.status;
                var5 = _closure1_slot11;
                var5 = var5.OFFLINE;
                if (!(var7 === var5)) {
                    _fun31926_ip = 319;
                    continue _fun31926
                }
            case 136:
                var5 = var0.hiddenActivities;
                if (!(var4 != var5)) {
                    _fun31926_ip = 164;
                    continue _fun31926
                }
            case 146:
                var5 = var0.hiddenActivities;
                var5 = var5.length;
                if (!(!(var5 > var6))) {
                    _fun31926_ip = 319;
                    continue _fun31926
                }
            case 164:
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var5 = 13;
                var5 = var7[var5];
                var9 = undefined;
                var11 = var6.bind(var9)(var5);
                var7 = var11.every;
                var5 = _closure1_slot17;
                var6 = var5[var2];
                var5 = function(arg0) { // Environment: var3
                    _fun31929: for (var _fun31929_ip = 0;;) switch (_fun31929_ip) {
                        case 0:
                            var2 = arg0;
                            var1 = var2.status;
                            var0 = _closure1_slot11;
                            var0 = var0.OFFLINE;
                            var0 = var1 === var0;
                            if (!var0) {
                                _fun31929_ip = 63;
                                continue _fun31929
                            }
                        case 28:
                            var3 = var2.hiddenActivities;
                            var1 = null;
                            var1 = var1 == var3;
                            if (var1) {
                                _fun31929_ip = 60;
                                continue _fun31929
                            }
                        case 43:
                            var2 = var2.hiddenActivities;
                            var3 = var2.length;
                            var2 = 0;
                            var1 = var2 === var3;
                        case 60:
                            var0 = var1;
                        case 63:
                            return var0;
                    }
                };
                var5 = var7.bind(var11)(var6, var5);
                if (var5) {
                    _fun31926_ip = 309;
                    continue _fun31926
                }
            case 214:
                var6 = var0.status;
                var5 = _closure1_slot11;
                var5 = var5.OFFLINE;
                if (!(var6 === var5)) {
                    _fun31926_ip = 423;
                    continue _fun31926
                }
            case 236:
                var6 = var10.some;
                var5 = function(arg0) { // Environment: var3
                    _fun31930: for (var _fun31930_ip = 0;;) switch (_fun31930_ip) {
                        case 0:
                            var1 = arg0;
                            var2 = var1.hiddenActivities;
                            var0 = null;
                            var0 = var0 != var2;
                            if (!var0) {
                                _fun31930_ip = 35;
                                continue _fun31930
                            }
                        case 18:
                            var1 = var1.hiddenActivities;
                            var2 = var1.length;
                            var1 = 0;
                            var0 = var2 > var1;
                        case 35:
                            return var0;
                    }
                };
                var5 = var6.bind(var10)(var5);
                if (!var5) {
                    _fun31926_ip = 423;
                    continue _fun31926
                }
            case 258:
                var6 = _closure1_slot21;
                var7 = _closure1_slot35;
                var11 = var8.Object;
                var5 = var11.values;
                var12 = var5.bind(var11)(var10);
                var11 = var12.flatMap;
                var5 = function(arg0) { // Environment: var3
                    _fun31931: for (var _fun31931_ip = 0;;) switch (_fun31931_ip) {
                        case 0:
                            var0 = arg0;
                            var0 = var0.hiddenActivities;
                            var1 = null;
                            if (!(var1 == var0)) {
                                _fun31931_ip = 19;
                                continue _fun31931
                            }
                        case 15:
                            var0 = new Array(0);
                        case 19:
                            return var0;
                    }
                };
                var5 = var11.bind(var12)(var5);
                var5 = var7.bind(var9)(var5);
                var6[var2] = var5;
                _fun31926_ip = 423;
                continue _fun31926;
            case 309:
                var5 = _closure1_slot17;
                var5 = delete var5[var2];
                _fun31926_ip = 423;
                continue _fun31926;
            case 319:
                var6 = _closure1_slot18;
                var5 = var0.status;
                var6[var2] = var5;
                var6 = _closure1_slot32;
                var5 = var0.activities;
                var7 = undefined;
                var5 = var6.bind(var7)(var2, var5);
                var5 = _closure1_slot21;
                var6 = _closure1_slot35;
                var9 = var8.Object;
                var8 = var9.values;
                var9 = var8.bind(var9)(var10);
                var8 = var9.flatMap;
                var3 = function(arg0) { // Environment: var3
                    _fun31928: for (var _fun31928_ip = 0;;) switch (_fun31928_ip) {
                        case 0:
                            var0 = arg0;
                            var0 = var0.hiddenActivities;
                            var1 = null;
                            if (!(var1 == var0)) {
                                _fun31928_ip = 19;
                                continue _fun31928
                            }
                        case 15:
                            var0 = new Array(0);
                        case 19:
                            return var0;
                    }
                };
                var3 = var8.bind(var9)(var3);
                var3 = var6.bind(var7)(var3);
                var5[var2] = var3;
                var3 = var0.clientStatus;
                if (!(var4 != var3)) {
                    _fun31926_ip = 423;
                    continue _fun31926
                }
            case 409:
                var1 = _closure1_slot22;
                var0 = var0.clientStatus;
                var1[var2] = var0;
            case 423:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot34 = var0;
    var0 = function arg0() {
        _fun31932: for (var _fun31932_ip = 0;;) switch (_fun31932_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.length;
                var3 = 0;
                if (!(var3 !== var1)) {
                    _fun31932_ip = 107;
                    continue _fun31932
                }
            case 14:
                var2 = new Array(0);
                var8 = var2;
                var7 = var0;
                var6 = 0;
                var1 = arraySpread(var8, var7, var6);
                var1 = var2.reverse;
                var5 = var1.bind(var2)();
                var1 = global;
                var4 = var1.Map;
                var2 = var5.map;
                var1 = function(arg0) { // Environment: var1
                    _fun31933: for (var _fun31933_ip = 0;;) switch (_fun31933_ip) {
                        case 0:
                            var1 = arg0;
                            var5 = var1.application_id;
                            var0 = var1.party;
                            var2 = null;
                            var2 = var2 == var0;
                            var4 = undefined;
                            if (var2) {
                                _fun31933_ip = 31;
                                continue _fun31933
                            }
                        case 26:
                            var4 = var0.id;
                        case 31:
                            var0 = global;
                            var0 = var0.HermesInternal;
                            var3 = var0.concat;
                            var2 = '';
                            var0 = ':';
                            var2 = var3.bind(var2)(var5, var0, var4);
                            var0 = new Array(2);
                            var0[0] = var2;
                            var0[1] = var1;
                            return var0;
                    }
                };
                var8 = var2.bind(var5)(var1);
                var2 = var4.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var4
                    }
                });
                var9 = var2;
                var1 = new var9[var4](var8, var7);
                var2 = var1 instanceof Object ? var1 : var2;
                var1 = var2.values;
                var7 = var1.bind(var2)();
                var1 = new Array(0);
                var8 = var1;
                var2 = arraySpread(var8, var7, var6);
                return var1;
            case 107:
                return var0;
        }
    };
    var _closure1_slot35 = var0;
    var0 = function arg0() {
        _fun31934: for (var _fun31934_ip = 0;;) switch (_fun31934_ip) {
            case 0:
                var2 = arg0;
                var0 = _closure1_slot17;
                var8 = var0[var2];
                var4 = null;
                if (!(var4 != var8)) {
                    _fun31934_ip = 203;
                    continue _fun31934
                }
            case 23:
                var3 = _closure1_slot1;
                var5 = _closure1_slot2;
                var0 = 13;
                var0 = var5[var0];
                var6 = undefined;
                var7 = var3.bind(var6)(var0);
                var5 = var7.maxBy;
                var0 = global;
                var3 = var0.Object;
                var0 = var3.values;
                var3 = var0.bind(var3)(var8);
                var0 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var0 = var0.processedAtTimestamp;
                    return var0;
                };
                var0 = var5.bind(var7)(var3, var0);
                var5 = var0.status;
                var3 = _closure1_slot11;
                var3 = var3.OFFLINE;
                if (!(var5 === var3)) {
                    _fun31934_ip = 128;
                    continue _fun31934
                }
            case 101:
                var3 = var0.hiddenActivities;
                if (!(var4 != var3)) {
                    _fun31934_ip = 203;
                    continue _fun31934
                }
            case 111:
                var3 = var0.hiddenActivities;
                var5 = var3.length;
                var3 = 0;
                if (!(var5 > var3)) {
                    _fun31934_ip = 203;
                    continue _fun31934
                }
            case 128:
                var5 = _closure1_slot18;
                var3 = var0.status;
                var5[var2] = var3;
                var5 = _closure1_slot32;
                var3 = var0.activities;
                var3 = var5.bind(var6)(var2, var3);
                var5 = _closure1_slot21;
                var3 = var0.hiddenActivities;
                if (!(var4 == var3)) {
                    _fun31934_ip = 175;
                    continue _fun31934
                }
            case 171:
                var3 = new Array(0);
            case 175:
                var5[var2] = var3;
                var3 = var0.clientStatus;
                if (!(var4 != var3)) {
                    _fun31934_ip = 203;
                    continue _fun31934
                }
            case 189:
                var1 = _closure1_slot22;
                var0 = var0.clientStatus;
                var1[var2] = var0;
            case 203:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot36 = var0;
    var0 = function arg0() {
        _fun31936: for (var _fun31936_ip = 0;;) switch (_fun31936_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.guildId;
                var2 = var0.userId;
                var7 = var0.status;
                var6 = var0.clientStatus;
                var11 = var0.activities;
                var14 = var0.hiddenActivities;
                var5 = var0.processedAtTimestamp;
                var3 = _closure1_slot9;
                var1 = var3.getId;
                var1 = var1.bind(var3)();
                if (!(var2 !== var1)) {
                    _fun31936_ip = 407;
                    continue _fun31936
                }
            case 66:
                var1 = _closure1_slot11;
                var1 = var1.OFFLINE;
                var1 = var7 === var1;
                if (!var1) {
                    _fun31936_ip = 106;
                    continue _fun31936
                }
            case 83:
                var3 = null;
                var3 = var3 == var14;
                if (var3) {
                    _fun31936_ip = 103;
                    continue _fun31936
                }
            case 92:
                var9 = var14.length;
                var8 = 0;
                var3 = var8 === var9;
            case 103:
                var1 = var3;
            case 106:
                var3 = _closure1_slot17;
                var3 = var3[var2];
                var10 = null;
                if (!(var10 == var3)) {
                    _fun31936_ip = 139;
                    continue _fun31936
                }
            case 120:
                if (var1) {
                    _fun31936_ip = 403;
                    continue _fun31936
                }
            case 126:
                var9 = _closure1_slot17;
                var8 = {};
                var9[var2] = var8;
                var3 = var8;
            case 139:
                if (var1) {
                    _fun31936_ip = 342;
                    continue _fun31936
                }
            case 145:
                var8 = _closure1_slot33;
                var12 = var11.length;
                var9 = 1;
                var1 = var11;
                if (!(var12 > var9)) {
                    _fun31936_ip = 195;
                    continue _fun31936
                }
            case 164:
                var12 = new Array(0);
                var15 = 0;
                var17 = var12;
                var16 = var11;
                var9 = arraySpread(var17, var16, var15);
                var11 = var12.sort;
                var9 = _closure1_slot30;
                var1 = var11.bind(var12)(var9);
            case 195:
                var13 = undefined;
                var9 = var8.bind(var13)(var1, var2);
                var11 = var9.visible;
                var8 = _closure1_slot35;
                if (!(var10 == var14)) {
                    _fun31936_ip = 221;
                    continue _fun31936
                }
            case 217:
                var14 = new Array(0);
            case 221:
                var1 = new Array(0);
                var15 = 0;
                var17 = var1;
                var16 = var14;
                var15 = arraySpread(var17, var16, var15);
                var16 = var9.hidden;
                var17 = var1;
                var9 = arraySpread(var17, var16, var15);
                var8 = var8.bind(var13)(var1);
                var1 = var3[var4];
                var9 = var11;
                if (!(var10 != var1)) {
                    _fun31936_ip = 310;
                    continue _fun31936
                }
            case 266:
                var12 = _closure1_slot1;
                var14 = _closure1_slot2;
                var10 = 14;
                var10 = var14[var10];
                var12 = var12.bind(var13)(var10);
                var10 = var1.activities;
                var10 = var12.bind(var13)(var10, var11);
                var9 = var11;
                if (!var10) {
                    _fun31936_ip = 310;
                    continue _fun31936
                }
            case 304:
                var9 = var1.activities;
            case 310:
                var1 = {};
                var1.status = var7;
                var1.clientStatus = var6;
                var1.activities = var9;
                var1.hiddenActivities = var8;
                var1.processedAtTimestamp = var5;
                var3[var4] = var1;
                _fun31936_ip = 380;
                continue _fun31936;
            case 342:
                var1 = {};
                var1.status = var7;
                var1.clientStatus = var6;
                var6 = _closure1_slot16;
                var1.activities = var6;
                var6 = _closure1_slot16;
                var1.hiddenActivities = var6;
                var1.processedAtTimestamp = var5;
                var3[var4] = var1;
            case 380:
                var1 = _closure1_slot23;
                var1 = delete var1[var2];
                var1 = _closure1_slot34;
                var0 = undefined;
                var0 = var1.bind(var0)(var2);
                var0 = true;
                return var0;
            case 403:
                var0 = false;
                return var0;
            case 407:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot37 = var0;
    var0 = function arg0() {
        _fun31937: for (var _fun31937_ip = 0;;) switch (_fun31937_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.guildId;
                var10 = var0.userId;
                var6 = var0.status;
                var5 = var0.clientStatus;
                var11 = var0.activities;
                var12 = var0.hiddenActivities;
                var3 = var0.processedAtTimestamp;
                var1 = _closure1_slot9;
                var0 = var1.getId;
                var0 = var0.bind(var1)();
                if (!(var10 !== var0)) {
                    _fun31937_ip = 325;
                    continue _fun31937
                }
            case 66:
                var0 = _closure1_slot11;
                var0 = var0.OFFLINE;
                var7 = var6 === var0;
                if (!var7) {
                    _fun31937_ip = 106;
                    continue _fun31937
                }
            case 83:
                var0 = null;
                var0 = var0 == var12;
                if (var0) {
                    _fun31937_ip = 103;
                    continue _fun31937
                }
            case 92:
                var8 = var12.length;
                var1 = 0;
                var0 = var1 === var8;
            case 103:
                var7 = var0;
            case 106:
                var0 = _closure1_slot17;
                var1 = var0[var10];
                var0 = null;
                if (!(var0 == var1)) {
                    _fun31937_ip = 139;
                    continue _fun31937
                }
            case 120:
                if (var7) {
                    _fun31937_ip = 329;
                    continue _fun31937
                }
            case 126:
                var9 = _closure1_slot17;
                var8 = {};
                var9[var10] = var8;
                var1 = var8;
            case 139:
                if (var7) {
                    _fun31937_ip = 287;
                    continue _fun31937
                }
            case 145:
                var8 = _closure1_slot33;
                var13 = var11.length;
                var9 = 1;
                var7 = var11;
                if (!(var13 > var9)) {
                    _fun31937_ip = 195;
                    continue _fun31937
                }
            case 164:
                var13 = new Array(0);
                var14 = 0;
                var16 = var13;
                var15 = var11;
                var9 = arraySpread(var16, var15, var14);
                var11 = var13.sort;
                var9 = _closure1_slot30;
                var7 = var11.bind(var13)(var9);
            case 195:
                var9 = undefined;
                var10 = var8.bind(var9)(var7, var10);
                var8 = var10.visible;
                var7 = _closure1_slot35;
                if (!(var0 == var12)) {
                    _fun31937_ip = 221;
                    continue _fun31937
                }
            case 217:
                var12 = new Array(0);
            case 221:
                var0 = new Array(0);
                var14 = 0;
                var16 = var0;
                var15 = var12;
                var14 = arraySpread(var16, var15, var14);
                var15 = var10.hidden;
                var16 = var0;
                var10 = arraySpread(var16, var15, var14);
                var7 = var7.bind(var9)(var0);
                var0 = {};
                var0.status = var6;
                var0.clientStatus = var5;
                var0.activities = var8;
                var0.hiddenActivities = var7;
                var0.processedAtTimestamp = var3;
                var1[var2] = var0;
                _fun31937_ip = 325;
                continue _fun31937;
            case 287:
                var0 = {};
                var0.status = var6;
                var0.clientStatus = var5;
                var5 = _closure1_slot16;
                var0.activities = var5;
                var4 = _closure1_slot16;
                var0.hiddenActivities = var4;
                var0.processedAtTimestamp = var3;
                var1[var2] = var0;
            case 325:
                var0 = undefined;
                return var0;
            case 329:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot38 = var0;
    var0 = function arg0, arg1() {
        _fun31938: for (var _fun31938_ip = 0;;) switch (_fun31938_ip) {
            case 0:
                var1 = arg0;
                var2 = arg1;
                var4 = _closure1_slot9;
                var3 = var4.getId;
                var3 = var3.bind(var4)();
                if (!(var2 !== var3)) {
                    _fun31938_ip = 107;
                    continue _fun31938
                }
            case 27:
                var3 = _closure1_slot17;
                var4 = var3[var2];
                var5 = null;
                if (!(var5 != var4)) {
                    _fun31938_ip = 103;
                    continue _fun31938
                }
            case 41:
                var3 = var4[var1];
                if (!(var5 != var3)) {
                    _fun31938_ip = 103;
                    continue _fun31938
                }
            case 49:
                var1 = delete var4[var1];
                var1 = global;
                var3 = var1.Object;
                var1 = var3.keys;
                var1 = var1.bind(var3)(var4);
                var3 = var1.length;
                var1 = 0;
                if (!(var1 === var3)) {
                    _fun31938_ip = 90;
                    continue _fun31938
                }
            case 82:
                var1 = _closure1_slot17;
                var1 = delete var1[var2];
            case 90:
                var1 = _closure1_slot34;
                var0 = undefined;
                var1 = var1.bind(var0)(var2);
                return var0;
            case 103:
                var0 = false;
                return var0;
            case 107:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot39 = var0;
    var0 = function arg0() {
        _fun31939: for (var _fun31939_ip = 0;;) switch (_fun31939_ip) {
            case 0:
                var5 = arg0;
                var2 = _closure1_slot27;
                var3 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 15;
                var1 = var1[var0];
                var0 = undefined;
                var6 = var3.bind(var0)(var1);
                var3 = var6.keys;
                var1 = _closure1_slot17;
                var1 = var3.bind(var6)(var1);
                var3 = var2.bind(var0)(var1);
                var2 = var3.bind(var0)();
                var1 = var2.done;
                if (var1) {
                    _fun31939_ip = 93;
                    continue _fun31939
                }
            case 63:
                var6 = _closure1_slot39;
                var1 = var2.value;
                var1 = var6.bind(var0)(var5, var1);
                var6 = var3.bind(var0)();
                var1 = var6.done;
                var2 = var6;
                if (!var1) {
                    _fun31939_ip = 63;
                    continue _fun31939
                }
            case 93:
                return var0;
        }
    };
    var _closure1_slot40 = var0;
    var3 = global;
    var10 = var3.Object;
    var9 = var10.defineProperty;
    var8 = {};
    var0 = true;
    var8.value = var0;
    var0 = '__esModule';
    var0 = var9.bind(var10)(var2, var0, var8);
    var0 = 0;
    var8 = var6[var0];
    var0 = undefined;
    var8 = var7.bind(var0)(var8);
    var _closure1_slot3 = var8;
    var8 = 1;
    var8 = var6[var8];
    var8 = var7.bind(var0)(var8);
    var _closure1_slot4 = var8;
    var8 = 2;
    var8 = var6[var8];
    var8 = var7.bind(var0)(var8);
    var _closure1_slot5 = var8;
    var8 = 3;
    var8 = var6[var8];
    var8 = var7.bind(var0)(var8);
    var _closure1_slot6 = var8;
    var8 = 4;
    var8 = var6[var8];
    var8 = var7.bind(var0)(var8);
    var _closure1_slot7 = var8;
    var8 = 5;
    var8 = var6[var8];
    var8 = var7.bind(var0)(var8);
    var _closure1_slot8 = var8;
    var8 = 6;
    var8 = var6[var8];
    var8 = var7.bind(var0)(var8);
    var _closure1_slot9 = var8;
    var8 = 7;
    var8 = var6[var8];
    var8 = var7.bind(var0)(var8);
    var _closure1_slot10 = var8;
    var8 = 8;
    var8 = var6[var8];
    var8 = var5.bind(var0)(var8);
    var9 = var8.StatusTypes;
    var _closure1_slot11 = var9;
    var9 = var8.ActivityTypes;
    var _closure1_slot12 = var9;
    var9 = var8.ClientTypes;
    var _closure1_slot13 = var9;
    var9 = var8.ME;
    var _closure1_slot14 = var9;
    var8 = var8.UserFlags;
    var _closure1_slot15 = var8;
    var9 = var3.Object;
    var8 = var9.freeze;
    var3 = new Array(0);
    var3 = var8.bind(var9)(var3);
    var _closure1_slot16 = var3;
    var3 = {};
    var _closure1_slot17 = var3;
    var3 = {};
    var _closure1_slot18 = var3;
    var3 = {};
    var _closure1_slot19 = var3;
    var3 = {};
    var _closure1_slot20 = var3;
    var3 = {};
    var _closure1_slot21 = var3;
    var3 = {};
    var _closure1_slot22 = var3;
    var3 = {};
    var _closure1_slot23 = var3;
    var3 = function arg0() {
        _fun31940: for (var _fun31940_ip = 0;;) switch (_fun31940_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.type;
                var2 = _closure1_slot12;
                var2 = var2.CUSTOM_STATUS;
                if (!(var2 !== var1)) {
                    _fun31940_ip = 86;
                    continue _fun31940
                }
            case 25:
                var2 = _closure1_slot12;
                var2 = var2.COMPETING;
                if (!(var2 !== var1)) {
                    _fun31940_ip = 81;
                    continue _fun31940
                }
            case 39:
                var2 = _closure1_slot12;
                var2 = var2.STREAMING;
                if (!(var2 !== var1)) {
                    _fun31940_ip = 76;
                    continue _fun31940
                }
            case 53:
                var0 = _closure1_slot12;
                var0 = var0.PLAYING;
                if (!(var0 !== var1)) {
                    _fun31940_ip = 71;
                    continue _fun31940
                }
            case 67:
                var0 = 0;
                return var0;
            case 71:
                var0 = 1;
                return var0;
            case 76:
                var0 = 2;
                return var0;
            case 81:
                var0 = 3;
                return var0;
            case 86:
                var0 = 4;
                return var0;
        }
    };
    var _closure1_slot24 = var3;
    var3 = function arg0() {
        _fun31941: for (var _fun31941_ip = 0;;) switch (_fun31941_ip) {
            case 0:
                var1 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 9;
                var0 = var2[var0];
                var2 = undefined;
                var1 = var1.bind(var2)(var0);
                var0 = arg0;
                var1 = var1.bind(var2)(var0);
                var0 = 0;
                if (!var1) {
                    _fun31941_ip = 41;
                    continue _fun31941
                }
            case 38:
                var0 = 1;
            case 41:
                return var0;
        }
    };
    var _closure1_slot25 = var3;
    var3 = 16;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var8 = var3.Store;
    var3 = function(arg0) { // Environment: var4
        var3 = function() {
            _fun31943: for (var _fun31943_ip = 0;;) switch (_fun31943_ip) {
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
                    var0 = _closure1_slot26;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun31943_ip = 69;
                        continue _fun31943
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun31943_ip = 105;
                    continue _fun31943;
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
            var4 = this;
            var3 = var4.waitFor;
            var2 = _closure1_slot9;
            var1 = _closure1_slot8;
            var0 = _closure1_slot10;
            var0 = var3.bind(var4)(var2, var1, var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(16);
        var0[0] = var4;
        var4 = {};
        var6 = 'setCurrentUserOnConnectionOpen';
        var4.key = var6;
        var6 = function arg0, arg1() {
            var3 = _closure1_slot18;
            var2 = _closure1_slot9;
            var1 = var2.getId;
            var2 = var1.bind(var2)();
            var1 = arg0;
            var3[var2] = var1;
            var3 = _closure1_slot32;
            var2 = _closure1_slot9;
            var1 = var2.getId;
            var2 = var1.bind(var2)();
            var4 = new Array(0);
            var7 = arg1;
            var6 = 0;
            var8 = var4;
            var1 = arraySpread(var8, var7, var6);
            var1 = var4.sort;
            var0 = _closure1_slot30;
            var1 = var1.bind(var4)(var0);
            var0 = undefined;
            var1 = var3.bind(var0)(var2, var1);
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getStatus';
        var4.key = var6;
        var6 = function arg0() {
            _fun31946: for (var _fun31946_ip = 0;;) switch (_fun31946_ip) {
                case 0:
                    var3 = arg0;
                    var6 = arguments[1];
                    var0 = arguments[2];
                    var5 = undefined;
                    if (!(var6 === var5)) {
                        _fun31946_ip = 17;
                        continue _fun31946
                    }
                case 15:
                    var6 = null;
                case 17:
                    if (!(var0 === var5)) {
                        _fun31946_ip = 34;
                        continue _fun31946
                    }
                case 21:
                    var1 = _closure1_slot11;
                    var0 = var1.OFFLINE;
                case 34:
                    var4 = _closure1_slot10;
                    var2 = var4.getUser;
                    var9 = var2.bind(var4)(var3);
                    var2 = null;
                    var4 = var2 != var9;
                    if (!var4) {
                        _fun31946_ip = 82;
                        continue _fun31946
                    }
                case 61:
                    var8 = var9.hasFlag;
                    var7 = _closure1_slot15;
                    var7 = var7.BOT_HTTP_INTERACTIONS;
                    var4 = var8.bind(var9)(var7);
                case 82:
                    if (!var4) {
                        _fun31946_ip = 95;
                        continue _fun31946
                    }
                case 85:
                    var4 = _closure1_slot11;
                    var0 = var4.UNKNOWN;
                case 95:
                    if (!(var2 != var6)) {
                        _fun31946_ip = 135;
                        continue _fun31946
                    }
                case 99:
                    var4 = _closure1_slot29;
                    var4 = var4.bind(var5)(var3, var6);
                    var6 = var2 == var4;
                    var5 = undefined;
                    if (var6) {
                        _fun31946_ip = 123;
                        continue _fun31946
                    }
                case 118:
                    var5 = var4.status;
                case 123:
                    var4 = var0;
                    if (!(var2 != var5)) {
                        _fun31946_ip = 133;
                        continue _fun31946
                    }
                case 130:
                    var4 = var5;
                case 133:
                    return var4;
                case 135:
                    var1 = _closure1_slot18;
                    var1 = var1[var3];
                    if (!(var2 != var1)) {
                        _fun31946_ip = 150;
                        continue _fun31946
                    }
                case 147:
                    var0 = var1;
                case 150:
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getActivities';
        var4.key = var6;
        var6 = function arg0() {
            _fun31947: for (var _fun31947_ip = 0;;) switch (_fun31947_ip) {
                case 0:
                    var3 = arg0;
                    var4 = arguments[1];
                    var5 = undefined;
                    if (!(var4 === var5)) {
                        _fun31947_ip = 14;
                        continue _fun31947
                    }
                case 12:
                    var4 = null;
                case 14:
                    var2 = null;
                    if (!(var2 != var4)) {
                        _fun31947_ip = 70;
                        continue _fun31947
                    }
                case 20:
                    var0 = _closure1_slot29;
                    var0 = var0.bind(var5)(var3, var4);
                    if (!(var2 != var0)) {
                        _fun31947_ip = 64;
                        continue _fun31947
                    }
                case 37:
                    var4 = var0.activities;
                    if (!(var2 != var4)) {
                        _fun31947_ip = 64;
                        continue _fun31947
                    }
                case 47:
                    var4 = _closure1_slot31;
                    var0 = var0.activities;
                    var0 = var4.bind(var5)(var0);
                    _fun31947_ip = 68;
                    continue _fun31947;
                case 64:
                    var0 = _closure1_slot16;
                case 68:
                    return var0;
                case 70:
                    var0 = _closure1_slot20;
                    var0 = var0[var3];
                    if (!(var2 == var0)) {
                        _fun31947_ip = 89;
                        continue _fun31947
                    }
                case 85:
                    var0 = _closure1_slot16;
                case 89:
                    return var0;
            }
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'getUnfilteredActivities';
        var4.key = var6;
        var6 = function arg0() {
            _fun31948: for (var _fun31948_ip = 0;;) switch (_fun31948_ip) {
                case 0:
                    var3 = arg0;
                    var5 = arguments[1];
                    var4 = undefined;
                    if (!(var5 === var4)) {
                        _fun31948_ip = 14;
                        continue _fun31948
                    }
                case 12:
                    var5 = null;
                case 14:
                    var2 = null;
                    if (!(var2 != var5)) {
                        _fun31948_ip = 61;
                        continue _fun31948
                    }
                case 20:
                    var0 = _closure1_slot29;
                    var0 = var0.bind(var4)(var3, var5);
                    if (!(var2 != var0)) {
                        _fun31948_ip = 55;
                        continue _fun31948
                    }
                case 37:
                    var4 = var0.activities;
                    if (!(var2 != var4)) {
                        _fun31948_ip = 55;
                        continue _fun31948
                    }
                case 47:
                    var0 = var0.activities;
                    _fun31948_ip = 59;
                    continue _fun31948;
                case 55:
                    var0 = _closure1_slot16;
                case 59:
                    return var0;
                case 61:
                    var0 = _closure1_slot19;
                    var0 = var0[var3];
                    if (!(var2 == var0)) {
                        _fun31948_ip = 80;
                        continue _fun31948
                    }
                case 76:
                    var0 = _closure1_slot16;
                case 80:
                    return var0;
            }
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'getHiddenActivities';
        var4.key = var6;
        var6 = function arg0() {
            _fun31949: for (var _fun31949_ip = 0;;) switch (_fun31949_ip) {
                case 0:
                    var4 = arg0;
                    var5 = arguments[1];
                    var0 = undefined;
                    if (!(var5 === var0)) {
                        _fun31949_ip = 14;
                        continue _fun31949
                    }
                case 12:
                    var5 = null;
                case 14:
                    var3 = null;
                    if (!(var3 != var5)) {
                        _fun31949_ip = 58;
                        continue _fun31949
                    }
                case 20:
                    var2 = _closure1_slot29;
                    var2 = var2.bind(var0)(var4, var5);
                    var5 = var3 == var2;
                    var0 = undefined;
                    if (var5) {
                        _fun31949_ip = 48;
                        continue _fun31949
                    }
                case 42:
                    var0 = var2.hiddenActivities;
                case 48:
                    if (!(var3 == var0)) {
                        _fun31949_ip = 56;
                        continue _fun31949
                    }
                case 52:
                    var0 = _closure1_slot16;
                case 56:
                    _fun31949_ip = 80;
                    continue _fun31949;
                case 58:
                    var1 = _closure1_slot21;
                    var1 = var1[var4];
                    if (!(var3 == var1)) {
                        _fun31949_ip = 77;
                        continue _fun31949
                    }
                case 73:
                    var1 = _closure1_slot16;
                case 77:
                    var0 = var1;
                case 80:
                    return var0;
            }
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'getPrimaryActivity';
        var4.key = var6;
        var6 = function arg0() {
            _fun31950: for (var _fun31950_ip = 0;;) switch (_fun31950_ip) {
                case 0:
                    var3 = arguments[1];
                    var2 = this;
                    var0 = undefined;
                    if (!(var3 === var0)) {
                        _fun31950_ip = 14;
                        continue _fun31950
                    }
                case 12:
                    var3 = null;
                case 14:
                    var1 = var2.getActivities;
                    var0 = arg0;
                    var2 = var1.bind(var2)(var0, var3);
                    var1 = var2.filter;
                    var0 = function(arg0) { // Environment: var0
                        var0 = arg0;
                        var1 = var0.type;
                        var0 = _closure1_slot12;
                        var0 = var0.HANG_STATUS;
                        var0 = var1 !== var0;
                        return var0;
                    };
                    var1 = var1.bind(var2)(var0);
                    var0 = 0;
                    var0 = var1[var0];
                    return var0;
            }
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'getAllApplicationActivities';
        var4.key = var6;
        var6 = function arg0() {
            _fun31952: for (var _fun31952_ip = 0;;) switch (_fun31952_ip) {
                case 0:
                    var7 = arg0;
                    var0 = new Array(0);
                    var2 = _closure1_slot27;
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var1 = 15;
                    var1 = var4[var1];
                    var5 = undefined;
                    var4 = var3.bind(var5)(var1);
                    var3 = var4.keys;
                    var1 = _closure1_slot20;
                    var1 = var3.bind(var4)(var1);
                    var4 = var2.bind(var5)(var1);
                    var2 = var4.bind(var5)();
                    var1 = var2.done;
                    var3 = var2;
                    var2 = undefined;
                    if (var1) {
                        _fun31952_ip = 175;
                        continue _fun31952
                    }
                case 72:
                    var10 = var3.value;
                    var8 = _closure1_slot27;
                    var1 = _closure1_slot20;
                    var1 = var1[var10];
                    var9 = var8.bind(var5)(var1);
                    var8 = var9.bind(var5)();
                    var1 = var8.done;
                    if (var1) {
                        _fun31952_ip = 160;
                        continue _fun31952
                    }
                case 106:
                    var11 = var8.value;
                    var1 = var11.application_id;
                    if (!(var1 === var7)) {
                        _fun31952_ip = 142;
                        continue _fun31952
                    }
                case 121:
                    var12 = var0.push;
                    var1 = {};
                    var1.userId = var10;
                    var1.activity = var11;
                    var1 = var12.bind(var0)(var1);
                case 142:
                    var12 = var9.bind(var5)();
                    var1 = var12.done;
                    var8 = var12;
                    var2 = var11;
                    if (!var1) {
                        _fun31952_ip = 106;
                        continue _fun31952
                    }
                case 160:
                    var8 = var4.bind(var5)();
                    var1 = var8.done;
                    var3 = var8;
                    if (!var1) {
                        _fun31952_ip = 72;
                        continue _fun31952
                    }
                case 175:
                    return var0;
            }
        };
        var4.value = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'getApplicationActivity';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun31953: for (var _fun31953_ip = 0;;) switch (_fun31953_ip) {
                case 0:
                    var5 = arguments[2];
                    var4 = this;
                    var1 = arg1;
                    var _closure3_slot0 = var1;
                    var1 = undefined;
                    if (!(var5 === var1)) {
                        _fun31953_ip = 23;
                        continue _fun31953
                    }
                case 21:
                    var5 = null;
                case 23:
                    var3 = var4.findActivity;
                    var9 = arg0;
                    var8 = function(arg0) { // Environment: var0
                        var0 = arg0;
                        var1 = var0.application_id;
                        var0 = _closure3_slot0;
                        var0 = var1 === var0;
                        return var0;
                    };
                    var6 = true;
                    var10 = var4;
                    var7 = var5;
                    var0 = var10[var3](var9, var8, var7, var6, var5);
                    return var0;
            }
        };
        var4.value = var6;
        var0[8] = var4;
        var4 = {};
        var6 = 'findActivity';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun31955: for (var _fun31955_ip = 0;;) switch (_fun31955_ip) {
                case 0:
                    var6 = arg0;
                    var5 = arguments[2];
                    var1 = arguments[3];
                    var4 = this;
                    var0 = undefined;
                    if (!(var5 === var0)) {
                        _fun31955_ip = 20;
                        continue _fun31955
                    }
                case 18:
                    var5 = null;
                case 20:
                    if (!(var1 === var0)) {
                        _fun31955_ip = 26;
                        continue _fun31955
                    }
                case 24:
                    var1 = false;
                case 26:
                    var0 = null;
                    var0 = var0 != var1;
                    if (!var0) {
                        _fun31955_ip = 38;
                        continue _fun31955
                    }
                case 35:
                    var0 = var1;
                case 38:
                    var1 = var4.getActivities;
                    var3 = var1.bind(var4)(var6, var5);
                    var2 = var3;
                    if (!var0) {
                        _fun31955_ip = 78;
                        continue _fun31955
                    }
                case 56:
                    var1 = var3.concat;
                    var0 = var4.getHiddenActivities;
                    var0 = var0.bind(var4)(var6, var5);
                    var2 = var1.bind(var3)(var0);
                case 78:
                    var1 = var2.find;
                    var0 = arg1;
                    var0 = var1.bind(var2)(var0);
                    return var0;
            }
        };
        var4.value = var6;
        var0[9] = var4;
        var4 = {};
        var6 = 'getActivityMetadata';
        var4.key = var6;
        var6 = function arg0() {
            var1 = _closure1_slot23;
            var0 = arg0;
            var0 = var1[var0];
            return var0;
        };
        var4.value = var6;
        var0[10] = var4;
        var4 = {};
        var6 = 'getUserIds';
        var4.key = var6;
        var6 = function() {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 15;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var1 = var2.keys;
            var0 = _closure1_slot19;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[11] = var4;
        var4 = {};
        var6 = 'isMobileOnline';
        var4.key = var6;
        var6 = function arg0() {
            _fun31958: for (var _fun31958_ip = 0;;) switch (_fun31958_ip) {
                case 0:
                    var2 = _closure1_slot22;
                    var0 = arg0;
                    var3 = var2[var0];
                    var0 = null;
                    var0 = var0 != var3;
                    if (!var0) {
                        _fun31958_ip = 51;
                        continue _fun31958
                    }
                case 23:
                    var2 = _closure1_slot13;
                    var2 = var2.MOBILE;
                    var4 = var3[var2];
                    var2 = _closure1_slot11;
                    var2 = var2.ONLINE;
                    var0 = var4 === var2;
                case 51:
                    if (!var0) {
                        _fun31958_ip = 82;
                        continue _fun31958
                    }
                case 54:
                    var2 = _closure1_slot13;
                    var2 = var2.DESKTOP;
                    var4 = var3[var2];
                    var2 = _closure1_slot11;
                    var2 = var2.ONLINE;
                    var0 = var4 !== var2;
                case 82:
                    if (!var0) {
                        _fun31958_ip = 113;
                        continue _fun31958
                    }
                case 85:
                    var2 = _closure1_slot13;
                    var2 = var2.VR;
                    var2 = var3[var2];
                    var1 = _closure1_slot11;
                    var1 = var1.ONLINE;
                    var0 = var2 !== var1;
                case 113:
                    return var0;
            }
        };
        var4.value = var6;
        var0[12] = var4;
        var4 = {};
        var6 = 'isVROnline';
        var4.key = var6;
        var6 = function arg0() {
            _fun31959: for (var _fun31959_ip = 0;;) switch (_fun31959_ip) {
                case 0:
                    var2 = _closure1_slot22;
                    var0 = arg0;
                    var3 = var2[var0];
                    var0 = null;
                    var0 = var0 != var3;
                    if (!var0) {
                        _fun31959_ip = 51;
                        continue _fun31959
                    }
                case 23:
                    var2 = _closure1_slot13;
                    var2 = var2.VR;
                    var2 = var3[var2];
                    var1 = _closure1_slot11;
                    var1 = var1.ONLINE;
                    var0 = var2 === var1;
                case 51:
                    return var0;
            }
        };
        var4.value = var6;
        var0[13] = var4;
        var4 = {};
        var6 = 'getClientStatus';
        var4.key = var6;
        var6 = function arg0() {
            var1 = _closure1_slot22;
            var0 = arg0;
            var0 = var1[var0];
            return var0;
        };
        var4.value = var6;
        var0[14] = var4;
        var4 = {};
        var6 = 'getState';
        var4.key = var6;
        var5 = function() {
            var0 = {};
            var2 = _closure1_slot17;
            var0.presencesForGuilds = var2;
            var2 = _closure1_slot18;
            var0.statuses = var2;
            var2 = _closure1_slot19;
            var0.activities = var2;
            var2 = _closure1_slot20;
            var0.filteredActivities = var2;
            var2 = _closure1_slot21;
            var0.hiddenActivities = var2;
            var2 = _closure1_slot23;
            var0.activityMetadata = var2;
            var1 = _closure1_slot22;
            var0.clientStatuses = var1;
            return var0;
        };
        var4.value = var5;
        var0[15] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var8 = var3.bind(var0)(var8);
    var3 = 'PresenceStore';
    var8.displayName = var3;
    var3 = 17;
    var3 = var6[var3];
    var13 = var7.bind(var0)(var3);
    var3 = {};
    var9 = function() {
        var0 = true;
        return var0;
    };
    var3.CONNECTION_OPEN = var9;
    var9 = function arg0() {
        var0 = arg0;
        var7 = var0.guilds;
        var5 = var0.presences;
        var3 = _closure1_slot9;
        var2 = var3.getId;
        var3 = var2.bind(var3)();
        var2 = {};
        _closure1_slot17 = var2;
        var2 = {};
        _closure1_slot23 = var2;
        var2 = {};
        var4 = _closure1_slot18;
        var4 = var4[var3];
        var2[var3] = var4;
        _closure1_slot18 = var2;
        var2 = {};
        var4 = _closure1_slot19;
        var4 = var4[var3];
        var2[var3] = var4;
        _closure1_slot19 = var2;
        var2 = {};
        var4 = _closure1_slot20;
        var4 = var4[var3];
        var2[var3] = var4;
        _closure1_slot20 = var2;
        var2 = {};
        var4 = _closure1_slot21;
        var4 = var4[var3];
        var2[var3] = var4;
        _closure1_slot21 = var2;
        var2 = {};
        var4 = {};
        var2[var3] = var4;
        _closure1_slot22 = var2;
        var2 = global;
        var2 = var2.Set;
        var4 = var2.prototype;
        var4 = Object.create(var4, {
            constructor: {
                value: var2
            }
        });
        var9 = var4;
        var2 = new var9[var2](var8);
        var2 = var2 instanceof Object ? var2 : var4;
        var _closure2_slot0 = var2;
        var6 = var7.forEach;
        var4 = function(arg0) { // Environment: var1
            var1 = arg0;
            var _closure3_slot0 = var1;
            var2 = var1.presences;
            var1 = var2.forEach;
            var0 = function(arg0) { // Environment: var0
                var0 = arg0;
                var1 = var0.user;
                var7 = var0.status;
                var6 = var0.clientStatus;
                var5 = var0.activities;
                var4 = var0.hiddenActivities;
                var0 = var0.processedAtTimestamp;
                var3 = _closure1_slot38;
                var2 = {};
                var8 = _closure3_slot0;
                var8 = var8.id;
                var2.guildId = var8;
                var8 = var1.id;
                var2.userId = var8;
                var2.status = var7;
                var2.clientStatus = var6;
                var2.activities = var5;
                var2.hiddenActivities = var4;
                var2.processedAtTimestamp = var0;
                var0 = undefined;
                var2 = var3.bind(var0)(var2);
                var3 = _closure2_slot0;
                var2 = var3.add;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var4 = var6.bind(var7)(var4);
        var4 = var5.forEach;
        var1 = function(arg0) { // Environment: var1
            _fun31966: for (var _fun31966_ip = 0;;) switch (_fun31966_ip) {
                case 0:
                    var1 = arg0;
                    var0 = var1.user;
                    var7 = var1.status;
                    var6 = var1.clientStatus;
                    var5 = var1.activities;
                    var4 = var1.hiddenActivities;
                    var1 = var1.processedAtTimestamp;
                    var2 = null;
                    if (!(var2 != var0)) {
                        _fun31966_ip = 122;
                        continue _fun31966
                    }
                case 43:
                    var3 = _closure1_slot38;
                    var2 = {};
                    var8 = _closure1_slot14;
                    var2.guildId = var8;
                    var8 = var0.id;
                    var2.userId = var8;
                    var2.status = var7;
                    var2.clientStatus = var6;
                    var2.activities = var5;
                    var2.hiddenActivities = var4;
                    var2.processedAtTimestamp = var1;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var2 = _closure2_slot0;
                    var1 = var2.add;
                    var0 = var0.id;
                    var0 = var1.bind(var2)(var0);
                case 122:
                    var0 = undefined;
                    return var0;
            }
        };
        var1 = var4.bind(var5)(var1);
        var1 = var2.delete;
        var1 = var1.bind(var2)(var3);
        var1 = var2.forEach;
        var0 = _closure1_slot36;
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var3.CONNECTION_OPEN_SUPPLEMENTAL = var9;
    var9 = function arg0() {
        var0 = arg0;
        var0 = var0.presences;
        var2 = var0.presencesForGuilds;
        _closure1_slot17 = var2;
        var2 = var0.statuses;
        _closure1_slot18 = var2;
        var2 = var0.activities;
        _closure1_slot19 = var2;
        var2 = var0.hiddenActivities;
        _closure1_slot21 = var2;
        var0 = var0.activityMetadata;
        _closure1_slot23 = var0;
        var0 = undefined;
        return var0;
    };
    var3.OVERLAY_INITIALIZE = var9;
    var9 = function arg0() {
        var1 = arg0;
        var1 = var1.guild;
        var _closure2_slot0 = var1;
        var2 = var1.presences;
        var1 = var2.forEach;
        var0 = function(arg0) { // Environment: var0
            var0 = arg0;
            var7 = var0.user;
            var6 = var0.status;
            var5 = var0.clientStatus;
            var4 = var0.activities;
            var3 = var0.hiddenActivities;
            var0 = var0.processedAtTimestamp;
            var2 = _closure1_slot37;
            var1 = {};
            var8 = _closure2_slot0;
            var8 = var8.id;
            var1.guildId = var8;
            var7 = var7.id;
            var1.userId = var7;
            var1.status = var6;
            var1.clientStatus = var5;
            var1.activities = var4;
            var1.hiddenActivities = var3;
            var1.processedAtTimestamp = var0;
            var0 = undefined;
            var1 = var2.bind(var0)(var1);
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var3.GUILD_CREATE = var9;
    var9 = function arg0() {
        var0 = arg0;
        var0 = var0.guild;
        var2 = _closure1_slot40;
        var1 = var0.id;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3.GUILD_DELETE = var9;
    var9 = function arg0() {
        var0 = arg0;
        var3 = var0.guildId;
        var0 = var0.user;
        var2 = _closure1_slot39;
        var1 = var0.id;
        var0 = undefined;
        var0 = var2.bind(var0)(var3, var1);
        return var0;
    };
    var3.GUILD_MEMBER_REMOVE = var9;
    var9 = function arg0() {
        var1 = arg0;
        var3 = var1.updates;
        var2 = var3.map;
        var1 = function(arg0) { // Environment: var0
            _fun31973: for (var _fun31973_ip = 0;;) switch (_fun31973_ip) {
                case 0:
                    var0 = arg0;
                    var8 = var0.guildId;
                    var7 = var0.user;
                    var6 = var0.status;
                    var5 = var0.clientStatus;
                    var4 = var0.activities;
                    var3 = var0.hiddenActivities;
                    var0 = var0.processedAtTimestamp;
                    var2 = _closure1_slot37;
                    var1 = {};
                    var10 = null;
                    if (!(var10 == var8)) {
                        _fun31973_ip = 61;
                        continue _fun31973
                    }
                case 57:
                    var8 = _closure1_slot14;
                case 61:
                    var1.guildId = var8;
                    var7 = var7.id;
                    var1.userId = var7;
                    var1.status = var6;
                    var1.clientStatus = var5;
                    var1.activities = var4;
                    var1.hiddenActivities = var3;
                    var1.processedAtTimestamp = var0;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
            }
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
    var3.PRESENCE_UPDATES = var9;
    var9 = function arg0() {
        var0 = arg0;
        var3 = var0.presences;
        var2 = _closure1_slot40;
        var1 = _closure1_slot14;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        var2 = var3.forEach;
        var1 = function(arg0) { // Environment: var1
            _fun31976: for (var _fun31976_ip = 0;;) switch (_fun31976_ip) {
                case 0:
                    var0 = arg0;
                    var7 = var0.user;
                    var6 = var0.status;
                    var5 = var0.clientStatus;
                    var4 = var0.activities;
                    var3 = var0.hiddenActivities;
                    var0 = var0.processedAtTimestamp;
                    var1 = null;
                    if (!(var1 != var7)) {
                        _fun31976_ip = 100;
                        continue _fun31976
                    }
                case 43:
                    var2 = _closure1_slot37;
                    var1 = {};
                    var8 = _closure1_slot14;
                    var1.guildId = var8;
                    var7 = var7.id;
                    var1.userId = var7;
                    var1.status = var6;
                    var1.clientStatus = var5;
                    var1.activities = var4;
                    var1.hiddenActivities = var3;
                    var1.processedAtTimestamp = var0;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                case 100:
                    var0 = undefined;
                    return var0;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var3.PRESENCES_REPLACE = var9;
    var9 = function arg0() {
        var0 = arg0;
        var2 = var0.userId;
        var1 = var0.metadata;
        var0 = _closure1_slot23;
        var0[var2] = var1;
        var0 = false;
        return var0;
    };
    var3.ACTIVITY_METADATA_UPDATE = var9;
    var9 = function arg0() {
        var1 = arg0;
        var2 = var1.guildId;
        var _closure2_slot0 = var2;
        var2 = var1.members;
        var1 = var2.forEach;
        var0 = function(arg0) { // Environment: var0
            _fun31979: for (var _fun31979_ip = 0;;) switch (_fun31979_ip) {
                case 0:
                    var0 = arg0;
                    var2 = var0.presence;
                    var1 = null;
                    if (!(var1 != var2)) {
                        _fun31979_ip = 135;
                        continue _fun31979
                    }
                case 15:
                    var2 = _closure1_slot37;
                    var1 = {};
                    var3 = _closure2_slot0;
                    var1.guildId = var3;
                    var3 = var0.user_id;
                    var1.userId = var3;
                    var3 = var0.presence;
                    var3 = var3.status;
                    var1.status = var3;
                    var3 = var0.presence;
                    var3 = var3.clientStatus;
                    var1.clientStatus = var3;
                    var3 = var0.presence;
                    var3 = var3.activities;
                    var1.activities = var3;
                    var3 = var0.presence;
                    var3 = var3.hiddenActivities;
                    var1.hiddenActivities = var3;
                    var0 = var0.presence;
                    var0 = var0.processedAtTimestamp;
                    var1.processedAtTimestamp = var0;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                case 135:
                    var0 = undefined;
                    return var0;
            }
        };
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var3.THREAD_MEMBER_LIST_UPDATE = var9;
    var9 = function arg0() {
        _fun31980: for (var _fun31980_ip = 0;;) switch (_fun31980_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.guildId;
                var _closure2_slot0 = var2;
                var2 = var1.addedMembers;
                var1 = null;
                if (!(var1 != var2)) {
                    _fun31980_ip = 41;
                    continue _fun31980
                }
            case 26:
                var1 = var2.forEach;
                var0 = function(arg0) { // Environment: var0
                    _fun31981: for (var _fun31981_ip = 0;;) switch (_fun31981_ip) {
                        case 0:
                            var0 = arg0;
                            var2 = var0.presence;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun31981_ip = 134;
                                continue _fun31981
                            }
                        case 15:
                            var2 = _closure1_slot37;
                            var1 = {};
                            var3 = _closure2_slot0;
                            var1.guildId = var3;
                            var3 = var0.userId;
                            var1.userId = var3;
                            var3 = var0.presence;
                            var3 = var3.status;
                            var1.status = var3;
                            var3 = var0.presence;
                            var3 = var3.clientStatus;
                            var1.clientStatus = var3;
                            var3 = var0.presence;
                            var3 = var3.activities;
                            var1.activities = var3;
                            var3 = var0.presence;
                            var3 = var3.hiddenActivities;
                            var1.hiddenActivities = var3;
                            var0 = var0.presence;
                            var0 = var0.processedAtTimestamp;
                            var1.processedAtTimestamp = var0;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                        case 134:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var1.bind(var2)(var0);
            case 41:
                var0 = undefined;
                return var0;
        }
    };
    var3.THREAD_MEMBERS_UPDATE = var9;
    var4 = function arg0() {
        _fun31982: for (var _fun31982_ip = 0;;) switch (_fun31982_ip) {
            case 0:
                var3 = arg0;
                var2 = _closure1_slot9;
                var0 = var2.getId;
                var2 = var0.bind(var2)();
                var0 = _closure1_slot18;
                var4 = var0[var2];
                var0 = var3.status;
                if (!(var4 === var0)) {
                    _fun31982_ip = 73;
                    continue _fun31982
                }
            case 37:
                var0 = _closure1_slot19;
                var4 = var0[var2];
                var0 = var3.activities;
                if (!(var4 === var0)) {
                    _fun31982_ip = 73;
                    continue _fun31982
                }
            case 55:
                var0 = _closure1_slot21;
                var4 = var0[var2];
                var0 = var3.hiddenActivities;
                if (!(var4 !== var0)) {
                    _fun31982_ip = 178;
                    continue _fun31982
                }
            case 73:
                var4 = _closure1_slot18;
                var0 = var3.status;
                var4[var2] = var0;
                var5 = _closure1_slot32;
                var9 = var3.activities;
                var4 = new Array(0);
                var10 = var4;
                var8 = 0;
                var0 = arraySpread(var10, var9, var8);
                var0 = var4.sort;
                var6 = _closure1_slot30;
                var4 = var0.bind(var4)(var6);
                var0 = undefined;
                var4 = var5.bind(var0)(var2, var4);
                var4 = _closure1_slot21;
                var9 = var3.hiddenActivities;
                var5 = new Array(0);
                var10 = var5;
                var3 = arraySpread(var10, var9, var8);
                var3 = var5.sort;
                var3 = var3.bind(var5)(var6);
                var4[var2] = var3;
                var1 = _closure1_slot23;
                var1 = delete var1[var2];
                return var0;
            case 178:
                var0 = false;
                return var0;
        }
    };
    var3.SELF_PRESENCE_STORE_UPDATE = var4;
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
    var4 = 18;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'stores/PresenceStore.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.sortActivity = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 3611, 1216, 1621, 660, 3615, 3616, 3617, 3622, 22, 644, 21, 566, 806, 2]);