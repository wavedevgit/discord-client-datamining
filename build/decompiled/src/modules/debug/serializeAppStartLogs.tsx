// modules/debug/serializeAppStartLogs.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var3;
    var0 = function arg0() {
        _fun70266: for (var _fun70266_ip = 0;;) switch (_fun70266_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.tag;
                var0 = null;
                if (!(var0 != var2)) {
                    _fun70266_ip = 56;
                    continue _fun70266
                }
            case 14:
                var5 = var1.label;
                var4 = var1.tag;
                var0 = global;
                var0 = var0.HermesInternal;
                var3 = var0.concat;
                var2 = '';
                var0 = ' ';
                var0 = var3.bind(var2)(var5, var0, var4);
                _fun70266_ip = 61;
                continue _fun70266;
            case 56:
                var0 = var1.label;
            case 61:
                var1 = var0.includes;
                var4 = '_START';
                var1 = var1.bind(var0)(var4);
                var3 = var0;
                var0 = var3;
                if (!var1) {
                    _fun70266_ip = 111;
                    continue _fun70266
                }
            case 86:
                var2 = var3.replace;
                var1 = '';
                var2 = var2.bind(var3)(var4, var1);
                var1 = 'Start ';
                var0 = var1 + var2;
            case 111:
                var1 = var0.includes;
                var4 = '_END';
                var1 = var1.bind(var0)(var4);
                var3 = var0;
                var0 = var3;
                if (!var1) {
                    _fun70266_ip = 161;
                    continue _fun70266
                }
            case 136:
                var2 = var3.replace;
                var1 = '';
                var2 = var2.bind(var3)(var4, var1);
                var1 = 'Finish ';
                var0 = var1 + var2;
            case 161:
                return var0;
        }
    };
    var _closure1_slot3 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var5);
    var0 = 3;
    var3 = var3[var0];
    var0 = undefined;
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/debug/serializeAppStartLogs.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun70267: for (var _fun70267_ip = 0;;) switch (_fun70267_ip) {
            case 0:
                var2 = arguments[1];
                var1 = arguments[2];
                var3 = arg0;
                var _closure2_slot0 = var3;
                var3 = undefined;
                if (!(var2 === var3)) {
                    _fun70267_ip = 23;
                    continue _fun70267
                }
            case 21:
                var2 = true;
            case 23:
                var _closure2_slot1 = var2;
                if (!(var1 === var3)) {
                    _fun70267_ip = 33;
                    continue _fun70267
                }
            case 31:
                var1 = true;
            case 33:
                var _closure2_slot2 = var1;
                var2 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 0;
                var1 = var4[var1];
                var1 = var2.bind(var3)(var1);
                var2 = var1.logGroups;
                var1 = var2.map;
                var0 = function(arg0) { // Environment: var0
                    _fun70268: for (var _fun70268_ip = 0;;) switch (_fun70268_ip) {
                        case 0:
                            var1 = arg0;
                            var4 = var1.index;
                            var2 = var1.timestamp;
                            var10 = var1.logs;
                            var9 = var1.nativeLogs;
                            var5 = var1.serverTrace;
                            var1 = 0;
                            var3 = var2;
                            if (!(var1 === var4)) {
                                _fun70268_ip = 115;
                                continue _fun70268
                            }
                        case 43:
                            var7 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var1 = 1;
                            var6 = var6[var1];
                            var1 = undefined;
                            var8 = var7.bind(var1)(var6);
                            var7 = var8.find;
                            var6 = function(arg0) { // Environment: var0
                                var0 = arg0;
                                var2 = var0.log;
                                var1 = var2.indexOf;
                                var0 = 'Logger loaded';
                                var1 = var1.bind(var2)(var0);
                                var0 = 0;
                                var0 = var1 >= var0;
                                return var0;
                            };
                            var7 = var7.bind(var8)(var10, var6);
                            var6 = null;
                            var8 = var6 == var7;
                            if (var8) {
                                _fun70268_ip = 101;
                                continue _fun70268
                            }
                        case 95:
                            var1 = var7.timestamp;
                        case 101:
                            if (!(var6 == var1)) {
                                _fun70268_ip = 112;
                                continue _fun70268
                            }
                        case 105:
                            var1 = _closure2_slot0;
                        case 112:
                            var3 = var1;
                        case 115:
                            var13 = _closure2_slot1;
                            var12 = _closure2_slot2;
                            var1 = function arg0, arg1, arg2, arg3() {
                                var2 = arg0;
                                var4 = arg1;
                                var1 = arg2;
                                var _closure4_slot1 = var1;
                                var1 = arg3;
                                var _closure4_slot2 = var1;
                                var1 = var2.slice;
                                var2 = var1.bind(var2)();
                                var _closure4_slot0 = var2;
                                var1 = global;
                                var5 = var1.Set;
                                var3 = var4.map;
                                var1 = _closure1_slot3;
                                var6 = var3.bind(var4)(var1);
                                var3 = var5.prototype;
                                var3 = Object.create(var3, {
                                    constructor: {
                                        value: var5
                                    }
                                });
                                var7 = var3;
                                var1 = new var7[var5](var6, var5);
                                var1 = var1 instanceof Object ? var1 : var3;
                                var _closure4_slot3 = var1;
                                var1 = '';
                                var _closure4_slot4 = var1;
                                var1 = new Array(0);
                                var _closure4_slot5 = var1;
                                var3 = var4.forEach;
                                var1 = function(arg0) { // Environment: var0
                                    _fun70276: for (var _fun70276_ip = 0;;) switch (_fun70276_ip) {
                                        case 0:
                                            var6 = arg0;
                                            var1 = _closure1_slot3;
                                            var0 = undefined;
                                            var5 = var1.bind(var0)(var6);
                                            var10 = _closure4_slot1;
                                            if (var10) {
                                                _fun70276_ip = 38;
                                                continue _fun70276
                                            }
                                        case 27:
                                            var2 = var6.autoGenerated;
                                            var10 = !var2;
                                        case 38:
                                            var2 = var5.startsWith;
                                            var13 = 'Start ';
                                            var2 = var2.bind(var5)(var13);
                                            if (!var2) {
                                                _fun70276_ip = 77;
                                                continue _fun70276
                                            }
                                        case 58:
                                            var4 = var5.includes;
                                            var3 = 'RUN_JS_BUNDLE';
                                            var3 = var4.bind(var5)(var3);
                                            var2 = !var3;
                                        case 77:
                                            if (!var2) {
                                                _fun70276_ip = 111;
                                                continue _fun70276
                                            }
                                        case 80:
                                            var7 = _closure4_slot3;
                                            var4 = var7.has;
                                            var8 = var5.replace;
                                            var3 = 'Finish ';
                                            var3 = var8.bind(var5)(var13, var3);
                                            var2 = var4.bind(var7)(var3);
                                        case 111:
                                            var3 = var5.startsWith;
                                            var12 = 'Finish ';
                                            var3 = var3.bind(var5)(var12);
                                            var7 = 0;
                                            var8 = 0;
                                            var4 = var10;
                                            if (!var3) {
                                                _fun70276_ip = 330;
                                                continue _fun70276
                                            }
                                        case 141:
                                            var9 = var5.includes;
                                            var3 = 'RUN_JS_BUNDLE';
                                            var3 = var9.bind(var5)(var3);
                                            var8 = 0;
                                            var4 = var10;
                                            if (var3) {
                                                _fun70276_ip = 330;
                                                continue _fun70276
                                            }
                                        case 168:
                                            var11 = _closure4_slot3;
                                            var9 = var11.has;
                                            var3 = var5.replace;
                                            var3 = var3.bind(var5)(var12, var13);
                                            var3 = var9.bind(var11)(var3);
                                            var8 = 0;
                                            var4 = var10;
                                            if (!var3) {
                                                _fun70276_ip = 330;
                                                continue _fun70276
                                            }
                                        case 204:
                                            var11 = _closure4_slot4;
                                            var9 = var11.substring;
                                            var3 = 2;
                                            var3 = var9.bind(var11)(var3);
                                            _closure4_slot4 = var3;
                                            var9 = _closure4_slot5;
                                            var3 = var9.pop;
                                            var11 = var3.bind(var9)();
                                            var3 = null;
                                            var3 = var3 != var11;
                                            var8 = 0;
                                            var4 = var10;
                                            if (!var3) {
                                                _fun70276_ip = 330;
                                                continue _fun70276
                                            }
                                        case 254:
                                            var9 = var6.timestamp;
                                            var3 = var11.timestamp;
                                            var9 = var9 - var3;
                                            var3 = var10;
                                            if (var10) {
                                                _fun70276_ip = 306;
                                                continue _fun70276
                                            }
                                        case 276:
                                            var10 = 5;
                                            var10 = var9 > var10;
                                            if (!var10) {
                                                _fun70276_ip = 303;
                                                continue _fun70276
                                            }
                                        case 286:
                                            var12 = function arg0() {
                                                var1 = arg0;
                                                var _closure6_slot0 = var1;
                                                var2 = ['GET_CONSTANTS', 'CONVERT_CONSTANTS'];
                                                var1 = var2.some;
                                                var0 = function(arg0) { // Environment: var0
                                                    var2 = _closure6_slot0;
                                                    var1 = var2.includes;
                                                    var0 = arg0;
                                                    var0 = var1.bind(var2)(var0);
                                                    return var0;
                                                };
                                                var0 = var1.bind(var2)(var0);
                                                return var0;
                                            };
                                            var12 = var12.bind(var0)(var5);
                                            var10 = !var12;
                                        case 303:
                                            var3 = var10;
                                        case 306:
                                            var10 = var11.shouldKeep;
                                            if (var10) {
                                                _fun70276_ip = 318;
                                                continue _fun70276
                                            }
                                        case 315:
                                            var10 = var3;
                                        case 318:
                                            var11.shouldKeep = var10;
                                            var8 = var9;
                                            var4 = var3;
                                        case 330:
                                            var3 = {};
                                            var9 = '☕';
                                            var3.emoji = var9;
                                            var6 = var6.timestamp;
                                            var3.timestamp = var6;
                                            var6 = undefined;
                                            if (!(var8 > var7)) {
                                                _fun70276_ip = 363;
                                                continue _fun70276
                                            }
                                        case 360:
                                            var6 = var8;
                                        case 363:
                                            var3.delta = var6;
                                            var6 = _closure4_slot4;
                                            var3.prefix = var6;
                                            var3.log = var5;
                                            var3.shouldKeep = var4;
                                            var6 = _closure4_slot0;
                                            var4 = var6.length;
                                            var4 = var7 < var4;
                                            var9 = null;
                                            var8 = 0;
                                            var5 = 0;
                                            if (!var4) {
                                                _fun70276_ip = 450;
                                                continue _fun70276
                                            }
                                        case 408:
                                            var4 = var6[var8];
                                            var10 = var4.timestamp;
                                            if (!(var9 != var10)) {
                                                _fun70276_ip = 435;
                                                continue _fun70276
                                            }
                                        case 422:
                                            var4 = var3.timestamp;
                                            var5 = var8;
                                            if (!(!(var10 > var4))) {
                                                _fun70276_ip = 450;
                                                continue _fun70276
                                            }
                                        case 435:
                                            var8 = var8 + 1;
                                            var4 = var6.length;
                                            var5 = var8;
                                            if (var5 < var4) {
                                                _fun70276_ip = 408;
                                                continue _fun70276
                                            }
                                        case 450:
                                            var4 = var6.splice;
                                            var4 = var4.bind(var6)(var5, var7, var3);
                                            if (!var2) {
                                                _fun70276_ip = 498;
                                                continue _fun70276
                                            }
                                        case 466:
                                            var4 = _closure4_slot4;
                                            var2 = '| ';
                                            var2 = var4 + var2;
                                            _closure4_slot4 = var2;
                                            var2 = _closure4_slot5;
                                            var1 = var2.push;
                                            var1 = var1.bind(var2)(var3);
                                        case 498:
                                            return var0;
                                    }
                                };
                                var1 = var3.bind(var4)(var1);
                                var1 = false;
                                var _closure4_slot6 = var1;
                                var1 = var2.filter;
                                var0 = function(arg0) { // Environment: var0
                                    _fun70279: for (var _fun70279_ip = 0;;) switch (_fun70279_ip) {
                                        case 0:
                                            var3 = arg0;
                                            var0 = _closure4_slot6;
                                            var0 = !var0;
                                            if (var0) {
                                                _fun70279_ip = 40;
                                                continue _fun70279
                                            }
                                        case 16:
                                            var5 = var3.log;
                                            var4 = var5.includes;
                                            var1 = '↪';
                                            var1 = var4.bind(var5)(var1);
                                            var0 = !var1;
                                        case 40:
                                            if (!var0) {
                                                _fun70279_ip = 89;
                                                continue _fun70279
                                            }
                                        case 43:
                                            var1 = _closure4_slot2;
                                            var1 = !var1;
                                            if (!var1) {
                                                _fun70279_ip = 67;
                                                continue _fun70279
                                            }
                                        case 53:
                                            var5 = var3.emoji;
                                            var4 = '🎨';
                                            var1 = var4 === var5;
                                        case 67:
                                            if (var1) {
                                                _fun70279_ip = 82;
                                                continue _fun70279
                                            }
                                        case 70:
                                            var4 = var3.shouldKeep;
                                            var3 = false;
                                            var1 = var3 === var4;
                                        case 82:
                                            _closure4_slot6 = var1;
                                            var0 = !var1;
                                        case 89:
                                            return var0;
                                    }
                                };
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var6 = undefined;
                            var16 = undefined;
                            var15 = var10;
                            var14 = var9;
                            var1 = var16[var1](var15, var14, var13, var12, var11);
                            var0 = function arg0, arg1() {
                                _fun70270: for (var _fun70270_ip = 0;;) switch (_fun70270_ip) {
                                    case 0:
                                        var10 = arg0;
                                        var1 = arg1;
                                        var _closure4_slot0 = var1;
                                        var6 = new Array(0);
                                        var2 = var10.length;
                                        var1 = 0;
                                        var3 = var1 < var2;
                                        var9 = 'Finish ';
                                        var2 = '';
                                        var7 = 'Start ';
                                        var8 = 1;
                                        var5 = null;
                                        var4 = 0;
                                        if (!var3) {
                                            _fun70270_ip = 156;
                                            continue _fun70270
                                        }
                                    case 53:
                                        var11 = var10[var4];
                                        var3 = var4 + var8;
                                        var12 = var10[var3];
                                        if (!(var5 != var12)) {
                                            _fun70270_ip = 94;
                                            continue _fun70270
                                        }
                                    case 69:
                                        var13 = var12.log;
                                        var14 = var11.log;
                                        var3 = var14.replace;
                                        var3 = var3.bind(var14)(var7, var9);
                                        if (!(var13 !== var3)) {
                                            _fun70270_ip = 109;
                                            continue _fun70270
                                        }
                                    case 94:
                                        var3 = var6.push;
                                        var3 = var3.bind(var6)(var11);
                                        var3 = var4;
                                        _fun70270_ip = 144;
                                        continue _fun70270;
                                    case 109:
                                        var13 = var12.log;
                                        var11 = var13.replace;
                                        var11 = var11.bind(var13)(var9, var2);
                                        var12.log = var11;
                                        var11 = var6.push;
                                        var11 = var11.bind(var6)(var12);
                                        var3 = var4 + 1;
                                    case 144:
                                        var4 = var3 + 1;
                                        var3 = var10.length;
                                        if (var4 < var3) {
                                            _fun70270_ip = 53;
                                            continue _fun70270
                                        }
                                    case 156:
                                        var4 = var6.map;
                                        var3 = function(arg0) { // Environment: var0
                                            _fun70271: for (var _fun70271_ip = 0;;) switch (_fun70271_ip) {
                                                case 0:
                                                    var1 = arg0;
                                                    var0 = {};
                                                    var2 = var1.timestamp;
                                                    var3 = null;
                                                    var4 = var3 == var2;
                                                    var6 = '';
                                                    var2 = var6;
                                                    if (var4) {
                                                        _fun70271_ip = 68;
                                                        continue _fun70271
                                                    }
                                                case 27:
                                                    var5 = var1.timestamp;
                                                    var4 = _closure4_slot0;
                                                    var5 = var5 - var4;
                                                    var4 = 1000;
                                                    var7 = var5 / var4;
                                                    var5 = var7.toFixed;
                                                    var4 = 3;
                                                    var2 = var5.bind(var7)(var4);
                                                case 68:
                                                    var0.totalTime = var2;
                                                    var2 = var1.delta;
                                                    var3 = var3 == var2;
                                                    var2 = var6;
                                                    if (var3) {
                                                        _fun70271_ip = 126;
                                                        continue _fun70271
                                                    }
                                                case 89:
                                                    var3 = global;
                                                    var5 = var3.String;
                                                    var7 = var3.Math;
                                                    var4 = var7.round;
                                                    var3 = var1.delta;
                                                    var4 = var4.bind(var7)(var3);
                                                    var3 = undefined;
                                                    var2 = var5.bind(var3)(var4);
                                                case 126:
                                                    var0.deltaTime = var2;
                                                    var2 = var1.emoji;
                                                    var3 = var2.length;
                                                    var2 = 0;
                                                    var2 = var3 > var2;
                                                    var5 = var6;
                                                    if (!var2) {
                                                        _fun70271_ip = 185;
                                                        continue _fun70271
                                                    }
                                                case 154:
                                                    var4 = var1.emoji;
                                                    var2 = global;
                                                    var2 = var2.HermesInternal;
                                                    var3 = var2.concat;
                                                    var2 = ' ';
                                                    var5 = var3.bind(var6)(var4, var2);
                                                case 185:
                                                    var10 = var1.prefix;
                                                    var9 = var1.log;
                                                    var1 = global;
                                                    var1 = var1.HermesInternal;
                                                    var2 = var1.concat;
                                                    var8 = '\n';
                                                    var12 = var6;
                                                    var11 = var5;
                                                    var1 = var12[var2](var11, var10, var9, var8, var7);
                                                    var0.log = var1;
                                                    return var0;
                                            }
                                        };
                                        var3 = var4.bind(var6)(var3);
                                        var9 = _closure1_slot1;
                                        var6 = _closure1_slot2;
                                        var6 = var6[var8];
                                        var7 = undefined;
                                        var10 = var9.bind(var7)(var6);
                                        var9 = var10.max;
                                        var11 = var3.map;
                                        var6 = function(arg0) { // Environment: var0
                                            var0 = arg0;
                                            var0 = var0.totalTime;
                                            var0 = var0.length;
                                            return var0;
                                        };
                                        var6 = var11.bind(var3)(var6);
                                        var9 = var9.bind(var10)(var6);
                                        var10 = var5 != var9;
                                        var6 = 0;
                                        if (!var10) {
                                            _fun70270_ip = 234;
                                            continue _fun70270
                                        }
                                    case 231:
                                        var6 = var9;
                                    case 234:
                                        var _closure4_slot1 = var6;
                                        var6 = _closure1_slot1;
                                        var4 = _closure1_slot2;
                                        var4 = var4[var8];
                                        var7 = var6.bind(var7)(var4);
                                        var6 = var7.max;
                                        var8 = var3.map;
                                        var4 = function(arg0) { // Environment: var0
                                            var0 = arg0;
                                            var0 = var0.deltaTime;
                                            var0 = var0.length;
                                            return var0;
                                        };
                                        var4 = var8.bind(var3)(var4);
                                        var4 = var6.bind(var7)(var4);
                                        var5 = var5 != var4;
                                        var1 = 0;
                                        if (!var5) {
                                            _fun70270_ip = 294;
                                            continue _fun70270
                                        }
                                    case 291:
                                        var1 = var4;
                                    case 294:
                                        var _closure4_slot2 = var1;
                                        var1 = var3.map;
                                        var0 = function(arg0) { // Environment: var0
                                            var0 = arg0;
                                            var10 = var0.totalTime;
                                            var3 = var0.deltaTime;
                                            var11 = var0.log;
                                            var6 = _closure1_slot1;
                                            var7 = _closure1_slot2;
                                            var1 = 1;
                                            var0 = var7[var1];
                                            var2 = undefined;
                                            var9 = var6.bind(var2)(var0);
                                            var8 = var9.padStart;
                                            var4 = _closure4_slot1;
                                            var4 = var8.bind(var9)(var10, var4);
                                            var1 = var7[var1];
                                            var2 = var6.bind(var2)(var1);
                                            var1 = var2.padStart;
                                            var0 = _closure4_slot2;
                                            var13 = var1.bind(var2)(var3, var0);
                                            var0 = global;
                                            var0 = var0.HermesInternal;
                                            var2 = var0.concat;
                                            var16 = '';
                                            var0 = ' ';
                                            var15 = var4;
                                            var14 = var0;
                                            var12 = var0;
                                            var0 = var16[var2](var15, var14, var13, var12, var11, var10);
                                            return var0;
                                        };
                                        var1 = var1.bind(var3)(var0);
                                        var0 = var1.join;
                                        var0 = var0.bind(var1)(var2);
                                        return var0;
                                }
                            };
                            var11 = var0.bind(var6)(var1, var3);
                            var3 = 1;
                            var9 = var4 + var3;
                            var1 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var0 = 2;
                            var0 = var7[var0];
                            var1 = var1.bind(var6)(var0);
                            var0 = var1.getTimestampString;
                            var13 = var0.bind(var1)(var2);
                            var1 = global;
                            var0 = var1.HermesInternal;
                            var7 = var0.concat;
                            var16 = 'Trace #';
                            var14 = ' started ';
                            var12 = '\n';
                            var15 = var9;
                            var2 = var16[var7](var15, var14, var13, var12, var11, var10);
                            var6 = null;
                            var0 = var2;
                            if (!(var6 != var5)) {
                                _fun70268_ip = 277;
                                continue _fun70268
                            }
                        case 246:
                            var4 = var4 + var3;
                            var1 = var1.HermesInternal;
                            var3 = var1.concat;
                            var1 = '\n Server trace for trace #';
                            var1 = var3.bind(var1)(var4, var5);
                            var0 = var2 + var1;
                        case 277:
                            return var0;
                    }
                };
                var2 = var1.bind(var2)(var0);
                var1 = var2.join;
                var0 = '\n\n';
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [20, 22, 6480, 2]);