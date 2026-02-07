// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var4 = function arg0, arg1() {
        _fun99910: for (var _fun99910_ip = 0;;) switch (_fun99910_ip) {
            case 0:
                var8 = arg1;
                var2 = arg0;
                var _closure2_slot0 = var8;
                var0 = undefined;
                var3 = undefined;
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var4 = 2;
                var4 = var7[var4];
                var4 = var6.bind(var0)(var4);
                var4 = var4.GLOBAL_OBJ;
                var4 = var4._sentryDebugIds;
                var3 = var4;
                if (!var4) {
                    _fun99910_ip = 206;
                    continue _fun99910
                }
            case 60:
                var6 = _closure1_slot4;
                var4 = var6.get;
                var4 = var4.bind(var6)(var8);
                if (var4) {
                    _fun99910_ip = 126;
                    continue _fun99910
                }
            case 77:
                var6 = global;
                var6 = var6.Map;
                var7 = var6.prototype;
                var7 = Object.create(var7, {
                    constructor: {
                        value: var6
                    }
                });
                var11 = var7;
                var6 = new var11[var6](var10);
                var7 = var6 instanceof Object ? var6 : var7;
                var _closure2_slot1 = var7;
                var6 = _closure1_slot4;
                var5 = var6.set;
                var5 = var5.bind(var6)(var8, var7);
                _fun99910_ip = 130;
                continue _fun99910;
            case 126:
                _closure2_slot1 = var4;
            case 130:
                var4 = global;
                var5 = var4.Object;
                var4 = var5.entries;
                var6 = var4.bind(var5)(var3);
                var5 = var6.reduce;
                var4 = function(arg0, arg1) { // Environment: var1
                    _fun99911: for (var _fun99911_ip = 0;;) switch (_fun99911_ip) {
                        case 0:
                            var0 = arg0;
                            var3 = _closure1_slot2;
                            var7 = undefined;
                            var2 = arg1;
                            var1 = 2;
                            var1 = var3.bind(var7)(var2, var1);
                            var5 = 0;
                            var8 = var1[var5];
                            var3 = 1;
                            var2 = var1[var3];
                            var4 = _closure2_slot1;
                            var1 = var4.get;
                            var4 = var1.bind(var4)(var8);
                            if (var4) {
                                _fun99911_ip = 84;
                                continue _fun99911
                            }
                        case 57:
                            var1 = _closure2_slot0;
                            var1 = var1.bind(var7)(var8);
                            var7 = _closure2_slot1;
                            var6 = var7.set;
                            var6 = var6.bind(var7)(var8, var1);
                            var4 = var1;
                        case 84:
                            var1 = var4.length;
                            var3 = var1 - var3;
                            if (!(var3 >= var5)) {
                                _fun99911_ip = 129;
                                continue _fun99911
                            }
                        case 97:
                            var1 = var4[var3];
                            var6 = var1.filename;
                            if (var6) {
                                _fun99911_ip = 119;
                                continue _fun99911
                            }
                        case 110:
                            var3 = var3 - 1;
                            if (var3 >= var5) {
                                _fun99911_ip = 97;
                                continue _fun99911
                            }
                        case 117:
                            _fun99911_ip = 129;
                            continue _fun99911;
                        case 119:
                            var1 = var1.filename;
                            var0[var1] = var2;
                        case 129:
                            return var0;
                    }
                };
                var3 = {};
                var3 = var5.bind(var6)(var4, var3);
                var _closure2_slot2 = var3;
            case 174: // try_start_0
                var2 = var2.exception;
                var3 = var2.values;
                var2 = var3.forEach;
                var1 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var0 = var0.stacktrace;
                    var2 = var0.frames;
                    var1 = var2.forEach;
                    var0 = function(arg0) { // Environment: var0
                        _fun99913: for (var _fun99913_ip = 0;;) switch (_fun99913_ip) {
                            case 0:
                                var1 = arg0;
                                var0 = var1.filename;
                                if (!var0) {
                                    _fun99913_ip = 35;
                                    continue _fun99913
                                }
                            case 12:
                                var2 = _closure2_slot2;
                                var0 = var1.filename;
                                var0 = var2[var0];
                                var1.debug_id = var0;
                            case 35:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var1 = var2.bind(var3)(var1);
            case 202: // try_end0
                _fun99910_ip = 206;
                continue _fun99910;
            case 204: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 206:
                return var0;
        }
    };
    var _closure1_slot6 = var4;
    var3 = function arg0() {
        _fun99914: for (var _fun99914_ip = 0;;) switch (_fun99914_ip) {
            case 0:
                var3 = arg0;
                var2 = {};
                var1 = var2;
                var _closure2_slot0 = var2;
            case 14: // try_start_0
                var2 = var3;
                var2 = var2.exception;
                var5 = var2.values;
                var4 = var5.forEach;
                var2 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var0 = var0.stacktrace;
                    var2 = var0.frames;
                    var1 = var2.forEach;
                    var0 = function(arg0) { // Environment: var0
                        _fun99916: for (var _fun99916_ip = 0;;) switch (_fun99916_ip) {
                            case 0:
                                var0 = arg0;
                                var1 = var0.debug_id;
                                if (!var1) {
                                    _fun99916_ip = 83;
                                    continue _fun99916
                                }
                            case 12:
                                var1 = var0.abs_path;
                                if (var1) {
                                    _fun99916_ip = 55;
                                    continue _fun99916
                                }
                            case 21:
                                var1 = var0.filename;
                                if (!var1) {
                                    _fun99916_ip = 78;
                                    continue _fun99916
                                }
                            case 30:
                                var3 = _closure2_slot0;
                                var2 = var0.filename;
                                var1 = var0.debug_id;
                                var3[var2] = var1;
                                _fun99916_ip = 78;
                                continue _fun99916;
                            case 55:
                                var3 = _closure2_slot0;
                                var2 = var0.abs_path;
                                var1 = var0.debug_id;
                                var3[var2] = var1;
                            case 78:
                                var0 = delete var0.debug_id;
                            case 83:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var2 = var4.bind(var5)(var2);
            case 45: // try_end0
                _fun99914_ip = 49;
                continue _fun99914;
            case 47: // catch_target0
                CatchBlockStart(arg_register = 2);
            case 49:
                var2 = global;
                var6 = var2.Object;
                var5 = var6.keys;
                var4 = var1;
                var4 = var5.bind(var6)(var4);
                var5 = var4.length;
                var4 = 0;
                if (!(var4 !== var5)) {
                    _fun99914_ip = 191;
                    continue _fun99914
                }
            case 81:
                var5 = var3;
                var6 = var5.debug_meta;
                var4 = var6;
                if (var6) {
                    _fun99914_ip = 98;
                    continue _fun99914
                }
            case 96:
                var4 = {};
            case 98:
                var5.debug_meta = var4;
                var6 = var3;
                var5 = var6.debug_meta;
                var6 = var6.debug_meta;
                var6 = var6.images;
                var4 = var6;
                if (var6) {
                    _fun99914_ip = 135;
                    continue _fun99914
                }
            case 131:
                var4 = new Array(0);
            case 135:
                var5.images = var4;
                var3 = var3.debug_meta;
                var3 = var3.images;
                var _closure2_slot1 = var3;
                var3 = var2.Object;
                var2 = var3.entries;
                var2 = var2.bind(var3)(var1);
                var1 = var2.forEach;
                var0 = function(arg0) { // Environment: var0
                    var3 = _closure1_slot2;
                    var0 = undefined;
                    var2 = arg0;
                    var1 = 2;
                    var2 = var3.bind(var0)(var2, var1);
                    var1 = 0;
                    var5 = var2[var1];
                    var1 = 1;
                    var4 = var2[var1];
                    var3 = _closure2_slot1;
                    var2 = var3.push;
                    var1 = {};
                    var6 = 'sourcemap';
                    var1.type = var6;
                    var1.code_file = var5;
                    var1.debug_id = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
            case 191:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot7 = var3;
    var0 = 0;
    var5 = var7[var0];
    var0 = undefined;
    var5 = var6.bind(var0)(var5);
    var _closure1_slot2 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var _closure1_slot3 = var5;
    var5 = global;
    var9 = var5.Object;
    var8 = var9.defineProperty;
    var7 = {};
    var6 = true;
    var7.value = var6;
    var6 = '__esModule';
    var6 = var8.bind(var9)(var2, var6, var7);
    var5 = var5.WeakMap;
    var6 = var5.prototype;
    var6 = Object.create(var6, {
        constructor: {
            value: var5
        }
    });
    var13 = var6;
    var5 = new var13[var5](var12);
    var5 = var5 instanceof Object ? var5 : var6;
    var _closure1_slot4 = var5;
    var5 = ['user', 'level', 'extra', 'contexts', 'tags', 'fingerprint', 'requestSession', 'propagationContext'];
    var _closure1_slot5 = var5;
    var2.applyDebugIds = var4;
    var2.applyDebugMeta = var3;
    var3 = function arg0() {
        _fun99918: for (var _fun99918_ip = 0;;) switch (_fun99918_ip) {
            case 0:
                var2 = arg0;
                if (var2) {
                    _fun99918_ip = 10;
                    continue _fun99918
                }
            case 6:
                var0 = undefined;
                return var0;
            case 10:
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 7;
                var0 = var1[var0];
                var1 = undefined;
                var0 = var3.bind(var1)(var0);
                var0 = var0.Scope;
                var0 = var2 instanceof var0;
                if (var0) {
                    _fun99918_ip = 59;
                    continue _fun99918
                }
            case 48:
                var4 = 'function';
                var3 = typeof var2;
                var0 = var4 === var3;
            case 59:
                if (var0) {
                    _fun99918_ip = 82;
                    continue _fun99918
                }
            case 62:
                var0 = function arg0() {
                    var0 = global;
                    var2 = var0.Object;
                    var1 = var2.keys;
                    var0 = arg0;
                    var2 = var1.bind(var2)(var0);
                    var1 = var2.some;
                    var0 = function(arg0) { // Environment: var0
                        var2 = _closure1_slot5;
                        var1 = var2.includes;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var1 = var0.bind(var1)(var2);
                var0 = var2;
                if (!var1) {
                    _fun99918_ip = 92;
                    continue _fun99918
                }
            case 82:
                var1 = {};
                var1.captureContext = var2;
                var0 = var1;
            case 92:
                return var0;
        }
    };
    var2.parseEventHintOrCaptureContext = var3;
    var1 = function arg0, arg1, arg2, arg3, arg4, arg5() {
        _fun99921: for (var _fun99921_ip = 0;;) switch (_fun99921_ip) {
            case 0:
                var1 = arg0;
                var3 = arg1;
                var5 = arg2;
                var11 = arg3;
                var2 = arg4;
                var8 = arg5;
                var7 = var1.normalizeDepth;
                var9 = 3;
                var6 = undefined;
                var4 = var9;
                if (!(var6 !== var7)) {
                    _fun99921_ip = 41;
                    continue _fun99921
                }
            case 38:
                var4 = var7;
            case 41:
                var _closure2_slot0 = var4;
                var7 = var1.normalizeMaxBreadth;
                var4 = 1000;
                if (!(var6 !== var7)) {
                    _fun99921_ip = 64;
                    continue _fun99921
                }
            case 61:
                var4 = var7;
            case 64:
                var _closure2_slot1 = var4;
                var4 = global;
                var12 = var4.Object;
                var10 = var12.assign;
                var7 = {};
                var4 = var3.event_id;
                if (var4) {
                    _fun99921_ip = 98;
                    continue _fun99921
                }
            case 92:
                var4 = var5.event_id;
            case 98:
                if (var4) {
                    _fun99921_ip = 134;
                    continue _fun99921
                }
            case 101:
                var14 = _closure1_slot0;
                var15 = _closure1_slot1;
                var13 = 2;
                var13 = var15[var13];
                var14 = var14.bind(var6)(var13);
                var13 = var14.uuid4;
                var4 = var13.bind(var14)();
            case 134:
                var7.event_id = var4;
                var4 = var3.timestamp;
                if (var4) {
                    _fun99921_ip = 181;
                    continue _fun99921
                }
            case 148:
                var14 = _closure1_slot0;
                var15 = _closure1_slot1;
                var13 = 2;
                var13 = var15[var13];
                var14 = var14.bind(var6)(var13);
                var13 = var14.dateTimestampInSeconds;
                var4 = var13.bind(var14)();
            case 181:
                var7.timestamp = var4;
                var4 = {};
                var4 = var10.bind(var12)(var4, var3, var7);
                var15 = var5.integrations;
                if (var15) {
                    _fun99921_ip = 227;
                    continue _fun99921
                }
            case 204:
                var12 = var1.integrations;
                var10 = var12.map;
                var7 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var0 = var0.name;
                    return var0;
                };
                var15 = var10.bind(var12)(var7);
            case 227:
                var12 = var1.environment;
                var10 = var1.release;
                var7 = var1.dist;
                var13 = var1.maxValueLength;
                var14 = 250;
                if (!(var6 !== var13)) {
                    _fun99921_ip = 261;
                    continue _fun99921
                }
            case 258:
                var14 = var13;
            case 261:
                var13 = 'environment';
                var16 = var13 in var4;
                if (var16) {
                    _fun99921_ip = 314;
                    continue _fun99921
                }
            case 272:
                var13 = var13 in var1;
                if (var13) {
                    _fun99921_ip = 308;
                    continue _fun99921
                }
            case 279:
                var16 = _closure1_slot0;
                var17 = _closure1_slot1;
                var13 = 6;
                var13 = var17[var13];
                var13 = var16.bind(var6)(var13);
                var12 = var13.DEFAULT_ENVIRONMENT;
            case 308:
                var4.environment = var12;
            case 314:
                var12 = var4.release;
                var12 = var6 === var12;
                if (!var12) {
                    _fun99921_ip = 331;
                    continue _fun99921
                }
            case 327:
                var12 = var6 !== var10;
            case 331:
                if (!var12) {
                    _fun99921_ip = 340;
                    continue _fun99921
                }
            case 334:
                var4.release = var10;
            case 340:
                var10 = var4.dist;
                var10 = var6 === var10;
                if (!var10) {
                    _fun99921_ip = 357;
                    continue _fun99921
                }
            case 353:
                var10 = var6 !== var7;
            case 357:
                if (!var10) {
                    _fun99921_ip = 366;
                    continue _fun99921
                }
            case 360:
                var4.dist = var7;
            case 366:
                var7 = var4.message;
                if (!var7) {
                    _fun99921_ip = 420;
                    continue _fun99921
                }
            case 374:
                var10 = _closure1_slot0;
                var12 = _closure1_slot1;
                var7 = 2;
                var7 = var12[var7];
                var12 = var10.bind(var6)(var7);
                var10 = var12.truncate;
                var7 = var4.message;
                var7 = var10.bind(var12)(var7, var14);
                var4.message = var7;
            case 420:
                var10 = var4.exception;
                if (!var10) {
                    _fun99921_ip = 440;
                    continue _fun99921
                }
            case 429:
                var7 = var4.exception;
                var10 = var7.values;
            case 440:
                if (!var10) {
                    _fun99921_ip = 460;
                    continue _fun99921
                }
            case 443:
                var7 = var4.exception;
                var12 = var7.values;
                var7 = 0;
                var10 = var12[var7];
            case 460:
                var7 = var10;
                if (!var7) {
                    _fun99921_ip = 471;
                    continue _fun99921
                }
            case 466:
                var7 = var10.value;
            case 471:
                if (!var7) {
                    _fun99921_ip = 520;
                    continue _fun99921
                }
            case 474:
                var12 = _closure1_slot0;
                var13 = _closure1_slot1;
                var7 = 2;
                var7 = var13[var7];
                var13 = var12.bind(var6)(var7);
                var12 = var13.truncate;
                var7 = var10.value;
                var7 = var12.bind(var13)(var7, var14);
                var10.value = var7;
            case 520:
                var10 = var4.request;
                var7 = var10;
                if (!var7) {
                    _fun99921_ip = 537;
                    continue _fun99921
                }
            case 532:
                var7 = var10.url;
            case 537:
                if (!var7) {
                    _fun99921_ip = 586;
                    continue _fun99921
                }
            case 540:
                var12 = _closure1_slot0;
                var13 = _closure1_slot1;
                var7 = 2;
                var7 = var13[var7];
                var13 = var12.bind(var6)(var7);
                var12 = var13.truncate;
                var7 = var10.url;
                var7 = var12.bind(var13)(var7, var14);
                var10.url = var7;
            case 586:
                var10 = var15.length;
                var7 = 0;
                if (!(var10 > var7)) {
                    _fun99921_ip = 681;
                    continue _fun99921
                }
            case 597:
                var7 = var4.sdk;
                if (var7) {
                    _fun99921_ip = 608;
                    continue _fun99921
                }
            case 606:
                var7 = {};
            case 608:
                var4.sdk = var7;
                var10 = var4.sdk;
                var14 = new Array(0);
                var13 = var14.concat;
                var16 = _closure1_slot3;
                var12 = var4.sdk;
                var12 = var12.integrations;
                if (var12) {
                    _fun99921_ip = 655;
                    continue _fun99921
                }
            case 651:
                var12 = new Array(0);
            case 655:
                var12 = var16.bind(var6)(var12);
                var7 = _closure1_slot3;
                var7 = var7.bind(var6)(var15);
                var7 = var13.bind(var14)(var12, var7);
                var10.integrations = var7;
            case 681:
                if (!var2) {
                    _fun99921_ip = 702;
                    continue _fun99921
                }
            case 684:
                var10 = var2.emit;
                var7 = 'applyFrameMetadata';
                var7 = var10.bind(var2)(var7, var3);
            case 702:
                var3 = var3.type;
                if (!(var6 === var3)) {
                    _fun99921_ip = 730;
                    continue _fun99921
                }
            case 711:
                var3 = _closure1_slot6;
                var1 = var1.stackParser;
                var1 = var3.bind(var6)(var4, var1);
            case 730:
                var10 = var5.captureContext;
                var7 = var11;
                if (!var10) {
                    _fun99921_ip = 820;
                    continue _fun99921
                }
            case 742:
                if (var11) {
                    _fun99921_ip = 796;
                    continue _fun99921
                }
            case 745:
                var3 = _closure1_slot0;
                var12 = _closure1_slot1;
                var1 = 7;
                var1 = var12[var1];
                var1 = var3.bind(var6)(var1);
                var1 = var1.Scope;
                var3 = var1.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var1
                    }
                });
                var21 = var3;
                var1 = new var21[var1](var20);
                var1 = var1 instanceof Object ? var1 : var3;
                _fun99921_ip = 806;
                continue _fun99921;
            case 796:
                var3 = var11.clone;
                var1 = var3.bind(var11)();
            case 806:
                var3 = var1.update;
                var3 = var3.bind(var1)(var10);
                var7 = var1;
            case 820:
                var1 = var5.mechanism;
                if (!var1) {
                    _fun99921_ip = 870;
                    continue _fun99921
                }
            case 829:
                var3 = _closure1_slot0;
                var10 = _closure1_slot1;
                var1 = 2;
                var1 = var10[var1];
                var10 = var3.bind(var6)(var1);
                var3 = var10.addExceptionMechanism;
                var1 = var5.mechanism;
                var1 = var3.bind(var10)(var4, var1);
            case 870:
                if (var2) {
                    _fun99921_ip = 879;
                    continue _fun99921
                }
            case 873:
                var3 = new Array(0);
                _fun99921_ip = 889;
                continue _fun99921;
            case 879:
                var1 = var2.getEventProcessors;
                var3 = var1.bind(var2)();
            case 889:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var9];
                var2 = var2.bind(var6)(var1);
                var1 = var2.getGlobalScope;
                var2 = var1.bind(var2)();
                var1 = var2.getScopeData;
                var1 = var1.bind(var2)();
                if (!var8) {
                    _fun99921_ip = 974;
                    continue _fun99921
                }
            case 932:
                var2 = var8.getScopeData;
                var9 = var2.bind(var8)();
                var8 = _closure1_slot0;
                var11 = _closure1_slot1;
                var2 = 4;
                var2 = var11[var2];
                var8 = var8.bind(var6)(var2);
                var2 = var8.mergeScopeData;
                var2 = var2.bind(var8)(var1, var9);
            case 974:
                if (!var7) {
                    _fun99921_ip = 1019;
                    continue _fun99921
                }
            case 977:
                var2 = var7.getScopeData;
                var8 = var2.bind(var7)();
                var7 = _closure1_slot0;
                var9 = _closure1_slot1;
                var2 = 4;
                var2 = var9[var2];
                var7 = var7.bind(var6)(var2);
                var2 = var7.mergeScopeData;
                var2 = var2.bind(var7)(var1, var8);
            case 1019:
                var9 = new Array(0);
                var8 = var9.concat;
                var7 = _closure1_slot3;
                var2 = var5.attachments;
                if (var2) {
                    _fun99921_ip = 1045;
                    continue _fun99921
                }
            case 1041:
                var2 = new Array(0);
            case 1045:
                var7 = var7.bind(var6)(var2);
                var11 = _closure1_slot3;
                var2 = var1.attachments;
                var2 = var11.bind(var6)(var2);
                var2 = var8.bind(var9)(var7, var2);
                var7 = var2.length;
                if (!var7) {
                    _fun99921_ip = 1085;
                    continue _fun99921
                }
            case 1079:
                var5.attachments = var2;
            case 1085:
                var2 = _closure1_slot0;
                var7 = _closure1_slot1;
                var8 = 4;
                var8 = var7[var8];
                var9 = var2.bind(var6)(var8);
                var8 = var9.applyScopeDataToEvent;
                var8 = var8.bind(var9)(var4, var1);
                var9 = new Array(0);
                var8 = var9.concat;
                var10 = _closure1_slot3;
                var3 = var10.bind(var6)(var3);
                var1 = var1.eventProcessors;
                var1 = var10.bind(var6)(var1);
                var3 = var8.bind(var9)(var3, var1);
                var1 = 5;
                var1 = var7[var1];
                var2 = var2.bind(var6)(var1);
                var1 = var2.notifyEventProcessors;
                var2 = var1.bind(var2)(var3, var4, var5);
                var1 = var2.then;
                var0 = function(arg0) { // Environment: var0
                    _fun99923: for (var _fun99923_ip = 0;;) switch (_fun99923_ip) {
                        case 0:
                            var5 = arg0;
                            if (!var5) {
                                _fun99923_ip = 20;
                                continue _fun99923
                            }
                        case 6:
                            var1 = _closure1_slot7;
                            var0 = undefined;
                            var0 = var1.bind(var0)(var5);
                        case 20:
                            var0 = _closure2_slot0;
                            var3 = 'number';
                            var2 = typeof var0;
                            var0 = var5;
                            if (!(var3 === var2)) {
                                _fun99923_ip = 80;
                                continue _fun99923
                            }
                        case 41:
                            var3 = _closure2_slot0;
                            var2 = 0;
                            var0 = var5;
                            if (!(var3 > var2)) {
                                _fun99923_ip = 80;
                                continue _fun99923
                            }
                        case 54:
                            var4 = _closure2_slot0;
                            var3 = _closure2_slot1;
                            var2 = function arg0, arg1, arg2() {
                                _fun99924: for (var _fun99924_ip = 0;;) switch (_fun99924_ip) {
                                    case 0:
                                        var2 = arg0;
                                        var8 = arg1;
                                        var7 = arg2;
                                        var _closure4_slot0 = var8;
                                        var _closure4_slot1 = var7;
                                        if (var2) {
                                            _fun99924_ip = 26;
                                            continue _fun99924
                                        }
                                    case 22:
                                        var0 = null;
                                        return var0;
                                    case 26:
                                        var0 = global;
                                        var10 = var0.Object;
                                        var9 = var10.assign;
                                        var6 = var2.breadcrumbs;
                                        if (!var6) {
                                            _fun99924_ip = 81;
                                            continue _fun99924
                                        }
                                    case 48:
                                        var0 = {};
                                        var5 = var2.breadcrumbs;
                                        var4 = var5.map;
                                        var3 = function(arg0) { // Environment: var1
                                            _fun99925: for (var _fun99925_ip = 0;;) switch (_fun99925_ip) {
                                                case 0:
                                                    var4 = arg0;
                                                    var0 = global;
                                                    var3 = var0.Object;
                                                    var2 = var3.assign;
                                                    var1 = var4.data;
                                                    if (!var1) {
                                                        _fun99925_ip = 87;
                                                        continue _fun99925
                                                    }
                                                case 24:
                                                    var0 = {};
                                                    var7 = _closure1_slot0;
                                                    var6 = _closure1_slot1;
                                                    var5 = 2;
                                                    var6 = var6[var5];
                                                    var5 = undefined;
                                                    var9 = var7.bind(var5)(var6);
                                                    var8 = var9.normalize;
                                                    var7 = var4.data;
                                                    var6 = _closure4_slot0;
                                                    var5 = _closure4_slot1;
                                                    var5 = var8.bind(var9)(var7, var6, var5);
                                                    var0.data = var5;
                                                    var1 = var0;
                                                case 87:
                                                    var0 = {};
                                                    var0 = var2.bind(var3)(var0, var4, var1);
                                                    return var0;
                                            }
                                        };
                                        var3 = var4.bind(var5)(var3);
                                        var0.breadcrumbs = var3;
                                        var6 = var0;
                                    case 81:
                                        var5 = var2.user;
                                        if (!var5) {
                                            _fun99924_ip = 141;
                                            continue _fun99924
                                        }
                                    case 89:
                                        var0 = {};
                                        var11 = _closure1_slot0;
                                        var4 = _closure1_slot1;
                                        var3 = 2;
                                        var4 = var4[var3];
                                        var3 = undefined;
                                        var11 = var11.bind(var3)(var4);
                                        var4 = var11.normalize;
                                        var3 = var2.user;
                                        var3 = var4.bind(var11)(var3, var8, var7);
                                        var0.user = var3;
                                        var5 = var0;
                                    case 141:
                                        var4 = var2.contexts;
                                        if (!var4) {
                                            _fun99924_ip = 204;
                                            continue _fun99924
                                        }
                                    case 150:
                                        var0 = {};
                                        var12 = _closure1_slot0;
                                        var11 = _closure1_slot1;
                                        var3 = 2;
                                        var11 = var11[var3];
                                        var3 = undefined;
                                        var12 = var12.bind(var3)(var11);
                                        var11 = var12.normalize;
                                        var3 = var2.contexts;
                                        var3 = var11.bind(var12)(var3, var8, var7);
                                        var0.contexts = var3;
                                        var4 = var0;
                                    case 204:
                                        var3 = var2.extra;
                                        if (!var3) {
                                            _fun99924_ip = 267;
                                            continue _fun99924
                                        }
                                    case 213:
                                        var0 = {};
                                        var13 = _closure1_slot0;
                                        var12 = _closure1_slot1;
                                        var11 = 2;
                                        var12 = var12[var11];
                                        var11 = undefined;
                                        var13 = var13.bind(var11)(var12);
                                        var12 = var13.normalize;
                                        var11 = var2.extra;
                                        var11 = var12.bind(var13)(var11, var8, var7);
                                        var0.extra = var11;
                                        var3 = var0;
                                    case 267:
                                        var19 = {};
                                        var20 = var10;
                                        var18 = var2;
                                        var17 = var6;
                                        var16 = var5;
                                        var15 = var4;
                                        var14 = var3;
                                        var0 = var20[var9](var19, var18, var17, var16, var15, var14, var13);
                                        var3 = var2.contexts;
                                        if (!var3) {
                                            _fun99924_ip = 312;
                                            continue _fun99924
                                        }
                                    case 300:
                                        var4 = var2.contexts;
                                        var3 = var4.trace;
                                    case 312:
                                        if (!var3) {
                                            _fun99924_ip = 321;
                                            continue _fun99924
                                        }
                                    case 315:
                                        var3 = var0.contexts;
                                    case 321:
                                        if (!var3) {
                                            _fun99924_ip = 441;
                                            continue _fun99924
                                        }
                                    case 324:
                                        var4 = var0.contexts;
                                        var3 = var2.contexts;
                                        var3 = var3.trace;
                                        var4.trace = var3;
                                        var3 = var2.contexts;
                                        var3 = var3.trace;
                                        var3 = var3.data;
                                        if (!var3) {
                                            _fun99924_ip = 441;
                                            continue _fun99924
                                        }
                                    case 368:
                                        var3 = var0.contexts;
                                        var4 = var3.trace;
                                        var6 = _closure1_slot0;
                                        var5 = _closure1_slot1;
                                        var3 = 2;
                                        var5 = var5[var3];
                                        var3 = undefined;
                                        var6 = var6.bind(var3)(var5);
                                        var5 = var6.normalize;
                                        var3 = var2.contexts;
                                        var3 = var3.trace;
                                        var3 = var3.data;
                                        var3 = var5.bind(var6)(var3, var8, var7);
                                        var4.data = var3;
                                    case 441:
                                        var3 = var2.spans;
                                        if (!var3) {
                                            _fun99924_ip = 479;
                                            continue _fun99924
                                        }
                                    case 450:
                                        var3 = var2.spans;
                                        var2 = var3.map;
                                        var1 = function(arg0) { // Environment: var1
                                            _fun99926: for (var _fun99926_ip = 0;;) switch (_fun99926_ip) {
                                                case 0:
                                                    var4 = arg0;
                                                    var0 = global;
                                                    var3 = var0.Object;
                                                    var2 = var3.assign;
                                                    var1 = var4.data;
                                                    if (!var1) {
                                                        _fun99926_ip = 87;
                                                        continue _fun99926
                                                    }
                                                case 24:
                                                    var0 = {};
                                                    var7 = _closure1_slot0;
                                                    var6 = _closure1_slot1;
                                                    var5 = 2;
                                                    var6 = var6[var5];
                                                    var5 = undefined;
                                                    var9 = var7.bind(var5)(var6);
                                                    var8 = var9.normalize;
                                                    var7 = var4.data;
                                                    var6 = _closure4_slot0;
                                                    var5 = _closure4_slot1;
                                                    var5 = var8.bind(var9)(var7, var6, var5);
                                                    var0.data = var5;
                                                    var1 = var0;
                                                case 87:
                                                    var0 = {};
                                                    var0 = var2.bind(var3)(var0, var4, var1);
                                                    return var0;
                                            }
                                        };
                                        var1 = var2.bind(var3)(var1);
                                        var0.spans = var1;
                                    case 479:
                                        return var0;
                                }
                            };
                            var1 = undefined;
                            var0 = var2.bind(var1)(var5, var4, var3);
                        case 80:
                            return var0;
                    }
                };
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var2.prepareEvent = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 65, 12935, 13000, 13019, 13020, 13010, 12996]);