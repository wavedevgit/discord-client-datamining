// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = global;
    var _closure1_slot0 = var1;
    var1 = module;
    var _closure1_slot1 = var1;
    var1 = exports;
    var _closure1_slot2 = var1;
    var2 = function() { // Environment: var0
        _fun7344: for (var _fun7344_ip = 0;;) switch (_fun7344_ip) {
            case 0:
                var0 = this;
                var2 = function(arg0) { // Original name: capitalize, environment: var1
                    var0 = global;
                    var2 = var0.String;
                    var1 = undefined;
                    var0 = arg0;
                    var3 = var2.bind(var1)(var0);
                    var1 = var3.charAt;
                    var0 = 0;
                    var1 = var1.bind(var3)(var0);
                    var0 = var1.toUpperCase;
                    var1 = var0.bind(var1)();
                    var2 = var3.slice;
                    var0 = 1;
                    var0 = var2.bind(var3)(var0);
                    var0 = var1 + var0;
                    return var0;
                };
                var _closure2_slot7 = var2;
                var2 = function(arg0) { // Original name: format, environment: var1
                    _fun7346: for (var _fun7346_ip = 0;;) switch (_fun7346_ip) {
                        case 0:
                            var2 = _closure2_slot13;
                            var3 = undefined;
                            var0 = arg0;
                            var2 = var2.bind(var3)(var0);
                            var4 = /^(?:webOS|i(?:OS|P))/;
                            var0 = var4.test;
                            var4 = var0.bind(var4)(var2);
                            var0 = var2;
                            if (var4) {
                                _fun7346_ip = 56;
                                continue _fun7346
                            }
                        case 47:
                            var1 = _closure2_slot7;
                            var0 = var1.bind(var3)(var2);
                        case 56:
                            return var0;
                    }
                };
                var _closure2_slot8 = var2;
                var6 = function(arg0, arg1) { // Original name: forOwn, environment: var1
                    _fun7347: for (var _fun7347_ip = 0;;) switch (_fun7347_ip) {
                        case 0:
                            var8 = arg0;
                            var7 = arg1;
                            var5 = var8;
                            var0 = undefined;
                            for (var2 in var5)
                                case 22: {
                                    case 31: var10 = var2;
                                    var11 = _closure2_slot4;
                                    var9 = var11.call;
                                    var9 = var9.bind(var11)(var8, var10);
                                    if (!var9) {
                                        _fun7347_ip = 22;
                                        continue _fun7347
                                    }
                                    case 52: var9 = var8[var10];
                                    var9 = var7.bind(var0)(var9, var10, var8);
                                    _fun7347_ip = 22;
                                    continue _fun7347;
                                }
                        case 65:
                            return var0;
                    }
                };
                var _closure2_slot9 = var6;
                var2 = function(arg0) { // Original name: getClassOf, environment: var1
                    _fun7348: for (var _fun7348_ip = 0;;) switch (_fun7348_ip) {
                        case 0:
                            var3 = arg0;
                            var0 = null;
                            if (!(var0 != var3)) {
                                _fun7348_ip = 48;
                                continue _fun7348
                            }
                        case 9:
                            var1 = _closure2_slot5;
                            var0 = var1.call;
                            var4 = var0.bind(var1)(var3);
                            var2 = var4.slice;
                            var1 = 8;
                            var0 = -1;
                            var0 = var2.bind(var4)(var1, var0);
                            _fun7348_ip = 62;
                            continue _fun7348;
                        case 48:
                            var2 = _closure2_slot7;
                            var1 = undefined;
                            var0 = var2.bind(var1)(var3);
                        case 62:
                            return var0;
                    }
                };
                var _closure2_slot10 = var2;
                var2 = function(arg0) { // Original name: qualify, environment: var1
                    var0 = global;
                    var2 = var0.String;
                    var1 = undefined;
                    var0 = arg0;
                    var3 = var2.bind(var1)(var0);
                    var2 = var3.replace;
                    var1 = /([ -])(?!$)/g;
                    var0 = '$1?';
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var _closure2_slot11 = var2;
                var2 = function(arg0, arg1) { // Original name: reduce, environment: var1
                    _fun7350: for (var _fun7350_ip = 0;;) switch (_fun7350_ip) {
                        case 0:
                            var5 = arg0;
                            var _closure3_slot0 = var5;
                            var1 = arg1;
                            var _closure3_slot1 = var1;
                            var1 = null;
                            var _closure3_slot2 = var1;
                            var4 = function(arg0, arg1) { // Environment: var0
                                var6 = _closure3_slot1;
                                var10 = _closure3_slot2;
                                var7 = _closure3_slot0;
                                var0 = undefined;
                                var9 = arg0;
                                var8 = arg1;
                                var11 = undefined;
                                var1 = var11[var6](var10, var9, var8, var7, var6);
                                _closure3_slot2 = var1;
                                return var0;
                            };
                            var3 = 0;
                            var2 = 0;
                            if (!var5) {
                                _fun7350_ip = 39;
                                continue _fun7350
                            }
                        case 34:
                            var2 = var5.length;
                        case 39:
                            var6 = 'number';
                            var1 = typeof var2;
                            if (!(var6 === var1)) {
                                _fun7350_ip = 71;
                                continue _fun7350
                            }
                        case 50:
                            var1 = -1;
                            if (!(var2 > var1)) {
                                _fun7350_ip = 71;
                                continue _fun7350
                            }
                        case 60:
                            var1 = _closure2_slot2;
                            if (!(!(var2 <= var1))) {
                                _fun7350_ip = 88;
                                continue _fun7350
                            }
                        case 71:
                            var6 = _closure2_slot9;
                            var1 = undefined;
                            var1 = var6.bind(var1)(var5, var4);
                            _fun7350_ip = 117;
                            continue _fun7350;
                        case 88:
                            var6 = var3 < var2;
                            var1 = undefined;
                            var3 = 0;
                            if (!var6) {
                                _fun7350_ip = 117;
                                continue _fun7350
                            }
                        case 99:
                            var6 = var5[var3];
                            var6 = var4.bind(var1)(var6, var3, var5);
                            var3 = var3 + 1;
                            if (var3 < var2) {
                                _fun7350_ip = 99;
                                continue _fun7350
                            }
                        case 117:
                            var0 = _closure3_slot2;
                            return var0;
                    }
                };
                var _closure2_slot12 = var2;
                var2 = function(arg0) { // Original name: trim, environment: var1
                    var0 = global;
                    var2 = var0.String;
                    var1 = undefined;
                    var0 = arg0;
                    var3 = var2.bind(var1)(var0);
                    var2 = var3.replace;
                    var1 = /^ +| +$/g;
                    var0 = '';
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var _closure2_slot13 = var2;
                var5 = {
                    'function': true,
                    'object': true
                };
                var2 = global;
                var3 = var2.window;
                var3 = typeof var3;
                var4 = var5[var3];
                if (!var4) {
                    _fun7344_ip = 101;
                    continue _fun7344
                }
            case 95:
                var4 = var2.window;
            case 101:
                if (var4) {
                    _fun7344_ip = 107;
                    continue _fun7344
                }
            case 104:
                var4 = var0;
            case 107:
                var _closure2_slot0 = var4;
                var0 = _closure1_slot2;
                var0 = typeof var0;
                var7 = var5[var0];
                if (!var7) {
                    _fun7344_ip = 132;
                    continue _fun7344
                }
            case 128:
                var7 = _closure1_slot2;
            case 132:
                var _closure2_slot1 = var7;
                var0 = _closure1_slot1;
                var0 = typeof var0;
                var5 = var5[var0];
                if (!var5) {
                    _fun7344_ip = 154;
                    continue _fun7344
                }
            case 150:
                var5 = _closure1_slot1;
            case 154:
                if (!var5) {
                    _fun7344_ip = 170;
                    continue _fun7344
                }
            case 157:
                var0 = _closure1_slot1;
                var0 = var0.nodeType;
                var5 = !var0;
            case 170:
                if (!var5) {
                    _fun7344_ip = 177;
                    continue _fun7344
                }
            case 173:
                var5 = _closure1_slot1;
            case 177:
                var0 = var7;
                if (!var0) {
                    _fun7344_ip = 186;
                    continue _fun7344
                }
            case 183:
                var0 = var5;
            case 186:
                if (!var0) {
                    _fun7344_ip = 204;
                    continue _fun7344
                }
            case 189:
                var8 = _closure1_slot0;
                var9 = 'object';
                var8 = typeof var8;
                var0 = var9 === var8;
            case 204:
                if (!var0) {
                    _fun7344_ip = 211;
                    continue _fun7344
                }
            case 207:
                var0 = _closure1_slot0;
            case 211:
                var3 = !var0;
                if (var3) {
                    _fun7344_ip = 255;
                    continue _fun7344
                }
            case 217:
                var8 = var0.global;
                var8 = var8 !== var0;
                if (!var8) {
                    _fun7344_ip = 239;
                    continue _fun7344
                }
            case 230:
                var9 = var0.window;
                var8 = var9 !== var0;
            case 239:
                if (!var8) {
                    _fun7344_ip = 252;
                    continue _fun7344
                }
            case 242:
                var9 = var0.self;
                var8 = var9 !== var0;
            case 252:
                var3 = var8;
            case 255:
                if (var3) {
                    _fun7344_ip = 265;
                    continue _fun7344
                }
            case 258:
                _closure2_slot0 = var0;
                var4 = var0;
            case 265:
                var9 = var2.Math;
                var8 = var9.pow;
                var3 = 2;
                var0 = 53;
                var3 = var8.bind(var9)(var3, var0);
                var0 = 1;
                var0 = var3 - var0;
                var _closure2_slot2 = var0;
                var0 = /\bOpera/;
                var _closure2_slot3 = var0;
                var0 = var2.Object;
                var0 = var0.prototype;
                var3 = var0.hasOwnProperty;
                var _closure2_slot4 = var3;
                var0 = var0.toString;
                var _closure2_slot5 = var0;
                var3 = function(arg0) { // Original name: parse, environment: var1
                    _fun7353: for (var _fun7353_ip = 0;;) switch (_fun7353_ip) {
                        case 0:
                            var0 = arg0;
                            var _closure3_slot0 = var0;
                            var8 = undefined;
                            var12 = undefined;
                            var1 = undefined;
                            var3 = undefined;
                            var6 = undefined;
                            var5 = undefined;
                            var45 = function(arg0) { // Original name: getProduct, environment: var4
                                var3 = _closure2_slot12;
                                var2 = undefined;
                                var1 = arg0;
                                var0 = function(arg0, arg1) { // Environment: var0
                                    _fun7355: for (var _fun7355_ip = 0;;) switch (_fun7355_ip) {
                                        case 0:
                                            var6 = arg0;
                                            var2 = arg1;
                                            var9 = var2.pattern;
                                            if (var9) {
                                                _fun7355_ip = 29;
                                                continue _fun7355
                                            }
                                        case 15:
                                            var1 = _closure2_slot11;
                                            var0 = undefined;
                                            var9 = var1.bind(var0)(var2);
                                        case 29:
                                            var1 = !var6;
                                            if (!var1) {
                                                _fun7355_ip = 190;
                                                continue _fun7355
                                            }
                                        case 38:
                                            var5 = global;
                                            var3 = var5.RegExp;
                                            var4 = '\\b';
                                            var7 = var4 + var9;
                                            var8 = undefined;
                                            var0 = ' *\\d+[.\\w_]*';
                                            var0 = var7 + var0;
                                            var7 = 'i';
                                            var11 = var3.bind(var8)(var0, var7);
                                            var10 = var11.exec;
                                            var0 = _closure3_slot0;
                                            var0 = var10.bind(var11)(var0);
                                            if (var0) {
                                                _fun7355_ip = 140;
                                                continue _fun7355
                                            }
                                        case 99:
                                            var11 = var5.RegExp;
                                            var12 = var4 + var9;
                                            var10 = ' *\\w+-[\\w]*';
                                            var10 = var12 + var10;
                                            var12 = var11.bind(var8)(var10, var7);
                                            var11 = var12.exec;
                                            var10 = _closure3_slot0;
                                            var0 = var11.bind(var12)(var10);
                                        case 140:
                                            if (var0) {
                                                _fun7355_ip = 184;
                                                continue _fun7355
                                            }
                                        case 143:
                                            var5 = var5.RegExp;
                                            var10 = var4 + var9;
                                            var4 = '(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)';
                                            var4 = var10 + var4;
                                            var5 = var5.bind(var8)(var4, var7);
                                            var4 = var5.exec;
                                            var3 = _closure3_slot0;
                                            var0 = var4.bind(var5)(var3);
                                        case 184:
                                            var1 = var0;
                                            var6 = var1;
                                        case 190:
                                            var0 = var6;
                                            if (!var1) {
                                                _fun7355_ip = 509;
                                                continue _fun7355
                                            }
                                        case 199:
                                            var1 = global;
                                            var5 = var1.String;
                                            var3 = var2.label;
                                            var4 = var6;
                                            if (!var3) {
                                                _fun7355_ip = 262;
                                                continue _fun7355
                                            }
                                        case 218:
                                            var8 = var1.RegExp;
                                            var7 = undefined;
                                            var3 = 'i';
                                            var8 = var8.bind(var7)(var9, var3);
                                            var7 = var8.test;
                                            var3 = var2.label;
                                            var3 = var7.bind(var8)(var3);
                                            var4 = var6;
                                            if (var3) {
                                                _fun7355_ip = 262;
                                                continue _fun7355
                                            }
                                        case 257:
                                            var4 = var2.label;
                                        case 262:
                                            var3 = undefined;
                                            var6 = var5.bind(var3)(var4);
                                            var5 = var6.split;
                                            var4 = '/';
                                            var5 = var5.bind(var6)(var4);
                                            var4 = 1;
                                            var6 = var5[var4];
                                            if (!var6) {
                                                _fun7355_ip = 326;
                                                continue _fun7355
                                            }
                                        case 293:
                                            var10 = /[\d.]+/;
                                            var8 = var10.test;
                                            var7 = 0;
                                            var7 = var5[var7];
                                            var7 = var8.bind(var10)(var7);
                                            var6 = !var7;
                                        case 326:
                                            if (!var6) {
                                                _fun7355_ip = 357;
                                                continue _fun7355
                                            }
                                        case 329:
                                            var6 = 0;
                                            var7 = var5[var6];
                                            var8 = var5[var4];
                                            var4 = ' ';
                                            var4 = var4 + var8;
                                            var4 = var7 + var4;
                                            var5[var6] = var4;
                                        case 357:
                                            var8 = var2.label;
                                            if (var8) {
                                                _fun7355_ip = 368;
                                                continue _fun7355
                                            }
                                        case 365:
                                            var8 = var2;
                                        case 368:
                                            var2 = _closure2_slot8;
                                            var4 = 0;
                                            var6 = var5[var4];
                                            var5 = var6.replace;
                                            var4 = var1.RegExp;
                                            var7 = 'i';
                                            var4 = var4.bind(var3)(var9, var7);
                                            var9 = var5.bind(var6)(var4, var8);
                                            var6 = var9.replace;
                                            var5 = var1.RegExp;
                                            var4 = '; *(?:';
                                            var10 = var4 + var8;
                                            var4 = '[_-])?';
                                            var4 = var10 + var4;
                                            var5 = var5.bind(var3)(var4, var7);
                                            var4 = ' ';
                                            var6 = var6.bind(var9)(var5, var4);
                                            var5 = var6.replace;
                                            var4 = var1.RegExp;
                                            var1 = '(';
                                            var8 = var1 + var8;
                                            var1 = ')[-_.]?(\\w)';
                                            var1 = var8 + var1;
                                            var4 = var4.bind(var3)(var1, var7);
                                            var1 = '$1 $2';
                                            var1 = var5.bind(var6)(var4, var1);
                                            var0 = var2.bind(var3)(var1);
                                        case 509:
                                            return var0;
                                    }
                                };
                                var0 = var3.bind(var2)(var1, var0);
                                return var0;
                            };
                            var19 = function(arg0) { // Original name: getVersion, environment: var4
                                var3 = _closure2_slot12;
                                var2 = undefined;
                                var1 = arg0;
                                var0 = function(arg0, arg1) { // Environment: var0
                                    _fun7357: for (var _fun7357_ip = 0;;) switch (_fun7357_ip) {
                                        case 0:
                                            var0 = arg0;
                                            if (var0) {
                                                _fun7357_ip = 69;
                                                continue _fun7357
                                            }
                                        case 6:
                                            var1 = global;
                                            var4 = var1.RegExp;
                                            var2 = arg1;
                                            var1 = '(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)';
                                            var3 = var2 + var1;
                                            var2 = undefined;
                                            var1 = 'i';
                                            var3 = var4.bind(var2)(var3, var1);
                                            var2 = var3.exec;
                                            var1 = _closure3_slot0;
                                            var2 = var2.bind(var3)(var1);
                                            if (var2) {
                                                _fun7357_ip = 62;
                                                continue _fun7357
                                            }
                                        case 60:
                                            var2 = 0;
                                        case 62:
                                            var1 = 1;
                                            var0 = var2[var1];
                                        case 69:
                                            if (var0) {
                                                _fun7357_ip = 74;
                                                continue _fun7357
                                            }
                                        case 72:
                                            var0 = null;
                                        case 74:
                                            return var0;
                                    }
                                };
                                var0 = var3.bind(var2)(var1, var0);
                                return var0;
                            };
                            var28 = _closure2_slot0;
                            var9 = var0;
                            if (!var0) {
                                _fun7353_ip = 55;
                                continue _fun7353
                            }
                        case 44:
                            var10 = 'object';
                            var2 = typeof var0;
                            var9 = var10 === var2;
                        case 55:
                            if (!var9) {
                                _fun7353_ip = 75;
                                continue _fun7353
                            }
                        case 58:
                            var2 = _closure2_slot10;
                            var10 = var2.bind(var8)(var0);
                            var2 = 'String';
                            var9 = var2 != var10;
                        case 75:
                            var10 = var0;
                            if (!var9) {
                                _fun7353_ip = 92;
                                continue _fun7353
                            }
                        case 81:
                            var28 = var0;
                            var0 = null;
                            _closure3_slot0 = var0;
                            var10 = null;
                        case 92:
                            var0 = var28;
                            var20 = var0.navigator;
                            if (var20) {
                                _fun7353_ip = 106;
                                continue _fun7353
                            }
                        case 104:
                            var20 = {};
                        case 106:
                            var2 = var20.userAgent;
                            if (var2) {
                                _fun7353_ip = 119;
                                continue _fun7353
                            }
                        case 115:
                            var2 = '';
                        case 119:
                            if (var10) {
                                _fun7353_ip = 129;
                                continue _fun7353
                            }
                        case 122:
                            _closure3_slot0 = var2;
                            var10 = var2;
                        case 129:
                            if (var9) {
                                _fun7353_ip = 201;
                                continue _fun7353
                            }
                        case 132:
                            var11 = /\bChrome\b/;
                            var0 = var11.test;
                            var26 = var0.bind(var11)(var10);
                            if (!var26) {
                                _fun7353_ip = 199;
                                continue _fun7353
                            }
                        case 159:
                            var13 = /internal|\n/i;
                            var11 = var13.test;
                            var14 = _closure2_slot5;
                            var0 = var14.toString;
                            var0 = var0.bind(var14)();
                            var0 = var11.bind(var13)(var0);
                            var26 = !var0;
                        case 199:
                            _fun7353_ip = 213;
                            continue _fun7353;
                        case 201:
                            var0 = var20.likeChrome;
                            var0 = !var0;
                            var26 = !var0;
                        case 213:
                            var42 = 'ScriptBridgingProxyObject';
                            if (!var9) {
                                _fun7353_ip = 226;
                                continue _fun7353
                            }
                        case 222:
                            var42 = 'Object';
                        case 226:
                            var11 = 'Environment';
                            if (!var9) {
                                _fun7353_ip = 237;
                                continue _fun7353
                            }
                        case 233:
                            var11 = 'Object';
                        case 237:
                            if (!var9) {
                                _fun7353_ip = 258;
                                continue _fun7353
                            }
                        case 240:
                            var0 = var28;
                            var0 = var0.java;
                            var14 = 'JavaPackage';
                            if (var0) {
                                _fun7353_ip = 276;
                                continue _fun7353
                            }
                        case 258:
                            var13 = _closure2_slot10;
                            var0 = var28;
                            var0 = var0.java;
                            var14 = var13.bind(var8)(var0);
                        case 276:
                            var40 = 'RuntimeObject';
                            if (!var9) {
                                _fun7353_ip = 289;
                                continue _fun7353
                            }
                        case 285:
                            var40 = 'Object';
                        case 289:
                            var13 = /\bJava/;
                            var0 = var13.test;
                            var39 = var0.bind(var13)(var14);
                            if (!var39) {
                                _fun7353_ip = 325;
                                continue _fun7353
                            }
                        case 316:
                            var0 = var28;
                            var39 = var0.java;
                        case 325:
                            var38 = var39;
                            if (!var38) {
                                _fun7353_ip = 353;
                                continue _fun7353
                            }
                        case 331:
                            var13 = _closure2_slot10;
                            var0 = var28;
                            var0 = var0.environment;
                            var0 = var13.bind(var8)(var0);
                            var38 = var0 == var11;
                        case 353:
                            var34 = 'α';
                            if (!var39) {
                                _fun7353_ip = 364;
                                continue _fun7353
                            }
                        case 360:
                            var34 = 'a';
                        case 364:
                            var37 = 'β';
                            if (!var39) {
                                _fun7353_ip = 375;
                                continue _fun7353
                            }
                        case 371:
                            var37 = 'b';
                        case 375:
                            var0 = var28;
                            var41 = var0.document;
                            if (var41) {
                                _fun7353_ip = 389;
                                continue _fun7353
                            }
                        case 387:
                            var41 = {};
                        case 389:
                            var0 = var28;
                            var13 = var0.operamini;
                            if (var13) {
                                _fun7353_ip = 410;
                                continue _fun7353
                            }
                        case 401:
                            var0 = var28;
                            var13 = var0.opera;
                        case 410:
                            var11 = _closure2_slot3;
                            var0 = var11.test;
                            if (!var9) {
                                _fun7353_ip = 425;
                                continue _fun7353
                            }
                        case 422:
                            if (var13) {
                                _fun7353_ip = 436;
                                continue _fun7353
                            }
                        case 425:
                            var9 = _closure2_slot10;
                            var9 = var9.bind(var8)(var13);
                            _fun7353_ip = 442;
                            continue _fun7353;
                        case 436:
                            var9 = var13["[[Class]]"];
                        case 442:
                            var14 = var0.bind(var11)(var9);
                            var0 = null;
                            var11 = var9;
                            var9 = null;
                            var36 = null;
                            if (!var14) {
                                _fun7353_ip = 465;
                                continue _fun7353
                            }
                        case 459:
                            var9 = var13;
                            var36 = var11;
                        case 465:
                            var1 = new Array(0);
                            var16 = var10 == var2;
                            var2 = var16;
                            if (!var16) {
                                _fun7353_ip = 482;
                                continue _fun7353
                            }
                        case 479:
                            var2 = var9;
                        case 482:
                            if (!var2) {
                                _fun7353_ip = 502;
                                continue _fun7353
                            }
                        case 485:
                            var11 = var9.version;
                            var13 = 'function';
                            var11 = typeof var11;
                            var2 = var13 === var11;
                        case 502:
                            if (!var2) {
                                _fun7353_ip = 515;
                                continue _fun7353
                            }
                        case 505:
                            var11 = var9.version;
                            var2 = var11.bind(var9)();
                        case 515:
                            var3 = var2;
                            var11 = new Array(9);
                            var2 = {
                                'label': 'EdgeHTML',
                                'pattern': 'Edge'
                            };
                            var11[0] = var2;
                            var24 = 'Trident';
                            var11[1] = var24;
                            var29 = 'WebKit';
                            var2 = {
                                'label': 'WebKit',
                                'pattern': 'AppleWebKit'
                            };
                            var11[2] = var2;
                            var18 = 'iCab';
                            var11[3] = var18;
                            var43 = 'Presto';
                            var11[4] = var43;
                            var33 = 'NetFront';
                            var11[5] = var33;
                            var44 = 'Tasman';
                            var11[6] = var44;
                            var2 = 'KHTML';
                            var11[7] = var2;
                            var2 = 'Gecko';
                            var11[8] = var2;
                            var2 = function(arg0) { // Original name: getLayout, environment: var4
                                var3 = _closure2_slot12;
                                var2 = undefined;
                                var1 = arg0;
                                var0 = function(arg0, arg1) { // Environment: var0
                                    _fun7359: for (var _fun7359_ip = 0;;) switch (_fun7359_ip) {
                                        case 0:
                                            var0 = arg0;
                                            var3 = arg1;
                                            if (var0) {
                                                _fun7359_ip = 104;
                                                continue _fun7359
                                            }
                                        case 9:
                                            var1 = global;
                                            var5 = var1.RegExp;
                                            var1 = var3.pattern;
                                            if (var1) {
                                                _fun7359_ip = 40;
                                                continue _fun7359
                                            }
                                        case 26:
                                            var4 = _closure2_slot11;
                                            var2 = undefined;
                                            var1 = var4.bind(var2)(var3);
                                        case 40:
                                            var2 = '\\b';
                                            var1 = var2 + var1;
                                            var4 = undefined;
                                            var2 = var1 + var2;
                                            var1 = 'i';
                                            var4 = var5.bind(var4)(var2, var1);
                                            var2 = var4.exec;
                                            var1 = _closure3_slot0;
                                            var1 = var2.bind(var4)(var1);
                                            if (!var1) {
                                                _fun7359_ip = 101;
                                                continue _fun7359
                                            }
                                        case 87:
                                            var2 = var3.label;
                                            if (var2) {
                                                _fun7359_ip = 98;
                                                continue _fun7359
                                            }
                                        case 95:
                                            var2 = var3;
                                        case 98:
                                            var1 = var2;
                                        case 101:
                                            var0 = var1;
                                        case 104:
                                            return var0;
                                    }
                                };
                                var0 = var3.bind(var2)(var1, var0);
                                return var0;
                            };
                            var51 = var2.bind(var8)(var11);
                            var11 = ['Adobe AIR', 'Arora', 'Avant Browser', 'Breach', 'Camino', 'Electron', 'Epiphany', 'Fennec', 'Flock', 'Galeon', 'GreenBrowser', 'iCab', 'Iceweasel', 'K-Meleon', 'Konqueror', 'Lunascape', 'Maxthon'];
                            var2 = {
                                'label': 'Microsoft Edge',
                                'pattern': '(?:Edge|Edg|EdgA|EdgiOS)'
                            };
                            var11[17] = var2;
                            var2 = 'Midori';
                            var11[18] = var2;
                            var2 = 'Nook Browser';
                            var11[19] = var2;
                            var14 = 'PaleMoon';
                            var11[20] = var14;
                            var35 = 'PhantomJS';
                            var11[21] = var35;
                            var2 = 'Raven';
                            var11[22] = var2;
                            var2 = 'Rekonq';
                            var11[23] = var2;
                            var2 = 'RockMelt';
                            var11[24] = var2;
                            var2 = {
                                'label': 'Samsung Internet',
                                'pattern': 'SamsungBrowser'
                            };
                            var11[25] = var2;
                            var2 = 'SeaMonkey';
                            var11[26] = var2;
                            var49 = 'Silk';
                            var2 = {
                                'label': 'Silk',
                                'pattern': '(?:Cloud9|Silk-Accelerated)'
                            };
                            var11[27] = var2;
                            var2 = 'Sleipnir';
                            var11[28] = var2;
                            var2 = 'SlimBrowser';
                            var11[29] = var2;
                            var2 = {
                                'label': 'SRWare Iron',
                                'pattern': 'Iron'
                            };
                            var11[30] = var2;
                            var2 = 'Sunrise';
                            var11[31] = var2;
                            var2 = 'Swiftfox';
                            var11[32] = var2;
                            var2 = 'Vivaldi';
                            var11[33] = var2;
                            var2 = 'Waterfox';
                            var11[34] = var2;
                            var2 = 'WebPositive';
                            var11[35] = var2;
                            var2 = {
                                'label': 'Yandex Browser',
                                'pattern': 'YaBrowser'
                            };
                            var11[36] = var2;
                            var48 = 'UC Browser';
                            var2 = {
                                'label': 'UC Browser',
                                'pattern': 'UCBrowser'
                            };
                            var11[37] = var2;
                            var46 = 'Opera Mini';
                            var11[38] = var46;
                            var2 = {
                                'label': 'Opera Mini',
                                'pattern': 'OPiOS'
                            };
                            var11[39] = var2;
                            var23 = 'Opera';
                            var11[40] = var23;
                            var2 = {
                                'label': 'Opera',
                                'pattern': 'OPR'
                            };
                            var11[41] = var2;
                            var2 = 'Chromium';
                            var11[42] = var2;
                            var15 = 'Chrome';
                            var11[43] = var15;
                            var2 = {
                                'label': 'Chrome',
                                'pattern': '(?:HeadlessChrome)'
                            };
                            var11[44] = var2;
                            var17 = 'Chrome Mobile';
                            var2 = {
                                'label': 'Chrome Mobile',
                                'pattern': '(?:CriOS|CrMo)'
                            };
                            var11[45] = var2;
                            var31 = 'Firefox';
                            var2 = {
                                'label': 'Firefox',
                                'pattern': '(?:Firefox|Minefield)'
                            };
                            var11[46] = var2;
                            var2 = {
                                'label': 'Firefox for iOS',
                                'pattern': 'FxiOS'
                            };
                            var11[47] = var2;
                            var13 = 'IE';
                            var2 = {
                                'label': 'IE',
                                'pattern': 'IEMobile'
                            };
                            var11[48] = var2;
                            var2 = {
                                'label': 'IE',
                                'pattern': 'MSIE'
                            };
                            var11[49] = var2;
                            var22 = 'Safari';
                            var11[50] = var22;
                            var2 = function(arg0) { // Original name: getName, environment: var4
                                var3 = _closure2_slot12;
                                var2 = undefined;
                                var1 = arg0;
                                var0 = function(arg0, arg1) { // Environment: var0
                                    _fun7361: for (var _fun7361_ip = 0;;) switch (_fun7361_ip) {
                                        case 0:
                                            var0 = arg0;
                                            var3 = arg1;
                                            if (var0) {
                                                _fun7361_ip = 104;
                                                continue _fun7361
                                            }
                                        case 9:
                                            var1 = global;
                                            var5 = var1.RegExp;
                                            var1 = var3.pattern;
                                            if (var1) {
                                                _fun7361_ip = 40;
                                                continue _fun7361
                                            }
                                        case 26:
                                            var4 = _closure2_slot11;
                                            var2 = undefined;
                                            var1 = var4.bind(var2)(var3);
                                        case 40:
                                            var2 = '\\b';
                                            var1 = var2 + var1;
                                            var4 = undefined;
                                            var2 = var1 + var2;
                                            var1 = 'i';
                                            var4 = var5.bind(var4)(var2, var1);
                                            var2 = var4.exec;
                                            var1 = _closure3_slot0;
                                            var1 = var2.bind(var4)(var1);
                                            if (!var1) {
                                                _fun7361_ip = 101;
                                                continue _fun7361
                                            }
                                        case 87:
                                            var2 = var3.label;
                                            if (var2) {
                                                _fun7361_ip = 98;
                                                continue _fun7361
                                            }
                                        case 95:
                                            var2 = var3;
                                        case 98:
                                            var1 = var2;
                                        case 101:
                                            var0 = var1;
                                        case 104:
                                            return var0;
                                    }
                                };
                                var0 = var3.bind(var2)(var1, var0);
                                return var0;
                            };
                            var6 = var2.bind(var8)(var11);
                            var32 = 'BlackBerry';
                            var11 = new Array(30);
                            var2 = {
                                'label': 'BlackBerry',
                                'pattern': 'BB10'
                            };
                            var11[0] = var2;
                            var11[1] = var32;
                            var2 = {
                                'label': 'Galaxy S',
                                'pattern': 'GT-I9000'
                            };
                            var11[2] = var2;
                            var2 = {
                                'label': 'Galaxy S2',
                                'pattern': 'GT-I9100'
                            };
                            var11[3] = var2;
                            var2 = {
                                'label': 'Galaxy S3',
                                'pattern': 'GT-I9300'
                            };
                            var11[4] = var2;
                            var2 = {
                                'label': 'Galaxy S4',
                                'pattern': 'GT-I9500'
                            };
                            var11[5] = var2;
                            var2 = {
                                'label': 'Galaxy S5',
                                'pattern': 'SM-G900'
                            };
                            var11[6] = var2;
                            var2 = {
                                'label': 'Galaxy S6',
                                'pattern': 'SM-G920'
                            };
                            var11[7] = var2;
                            var2 = {
                                'label': 'Galaxy S6 Edge',
                                'pattern': 'SM-G925'
                            };
                            var11[8] = var2;
                            var2 = {
                                'label': 'Galaxy S7',
                                'pattern': 'SM-G930'
                            };
                            var11[9] = var2;
                            var2 = {
                                'label': 'Galaxy S7 Edge',
                                'pattern': 'SM-G935'
                            };
                            var11[10] = var2;
                            var2 = 'Google TV';
                            var11[11] = var2;
                            var2 = 'Lumia';
                            var11[12] = var2;
                            var2 = 'iPad';
                            var11[13] = var2;
                            var2 = 'iPod';
                            var11[14] = var2;
                            var2 = 'iPhone';
                            var11[15] = var2;
                            var2 = 'Kindle';
                            var11[16] = var2;
                            var2 = {
                                'label': 'Kindle Fire',
                                'pattern': '(?:Cloud9|Silk-Accelerated)'
                            };
                            var11[17] = var2;
                            var2 = 'Nexus';
                            var11[18] = var2;
                            var2 = 'Nook';
                            var11[19] = var2;
                            var2 = 'PlayBook';
                            var11[20] = var2;
                            var2 = 'PlayStation Vita';
                            var11[21] = var2;
                            var2 = 'PlayStation';
                            var11[22] = var2;
                            var2 = 'TouchPad';
                            var11[23] = var2;
                            var2 = 'Transformer';
                            var11[24] = var2;
                            var2 = {
                                'label': 'Wii U',
                                'pattern': 'WiiU'
                            };
                            var11[25] = var2;
                            var2 = 'Wii';
                            var11[26] = var2;
                            var21 = 'Xbox One';
                            var11[27] = var21;
                            var25 = 'Xbox 360';
                            var21 = {
                                'label': 'Xbox 360',
                                'pattern': 'Xbox'
                            };
                            var11[28] = var21;
                            var21 = 'Xoom';
                            var11[29] = var21;
                            var50 = var45.bind(var8)(var11);
                            var _closure3_slot2 = var50;
                            var27 = {};
                            var21 = 1;
                            var11 = {
                                'iPad': 1,
                                'iPhone': 1,
                                'iPod': 1
                            };
                            var27.Apple = var11;
                            var11 = {};
                            var27.Alcatel = var11;
                            var11 = {};
                            var27.Archos = var11;
                            var11 = {
                                'Kindle': 1,
                                'Kindle Fire': 1
                            };
                            var27.Amazon = var11;
                            var11 = {};
                            var11.Transformer = var21;
                            var27.Asus = var11;
                            var11 = {};
                            var11.Nook = var21;
                            var27['Barnes & Noble'] = var11;
                            var11 = {};
                            var11.PlayBook = var21;
                            var27.BlackBerry = var11;
                            var11 = {
                                'Google TV': 1,
                                'Nexus': 1
                            };
                            var27.Google = var11;
                            var11 = {};
                            var11.TouchPad = var21;
                            var27.HP = var11;
                            var11 = {};
                            var27.HTC = var11;
                            var11 = {};
                            var27.Huawei = var11;
                            var11 = {};
                            var27.Lenovo = var11;
                            var11 = {};
                            var27.LG = var11;
                            var11 = {
                                'Xbox': 1,
                                'Xbox One': 1
                            };
                            var27.Microsoft = var11;
                            var11 = {};
                            var11.Xoom = var21;
                            var27.Motorola = var11;
                            var11 = {
                                'Wii U': 1,
                                'Wii': 1
                            };
                            var27.Nintendo = var11;
                            var11 = {};
                            var11.Lumia = var21;
                            var27.Nokia = var11;
                            var11 = {};
                            var27.Oppo = var11;
                            var11 = {
                                'Galaxy S': 1,
                                'Galaxy S2': 1,
                                'Galaxy S3': 1,
                                'Galaxy S4': 1
                            };
                            var27.Samsung = var11;
                            var11 = {
                                'PlayStation': 1,
                                'PlayStation Vita': 1
                            };
                            var27.Sony = var11;
                            var11 = {
                                'Mi': 1,
                                'Redmi': 1
                            };
                            var27.Xiaomi = var11;
                            var11 = function(arg0) { // Original name: getManufacturer, environment: var4
                                var3 = _closure2_slot12;
                                var2 = undefined;
                                var1 = arg0;
                                var0 = function(arg0, arg1, arg2) { // Environment: var0
                                    _fun7363: for (var _fun7363_ip = 0;;) switch (_fun7363_ip) {
                                        case 0:
                                            var0 = arg0;
                                            var5 = arg1;
                                            var2 = arg2;
                                            if (var0) {
                                                _fun7363_ip = 141;
                                                continue _fun7363
                                            }
                                        case 15:
                                            var1 = _closure3_slot2;
                                            var1 = var5[var1];
                                            if (var1) {
                                                _fun7363_ip = 62;
                                                continue _fun7363
                                            }
                                        case 29:
                                            var7 = /^[a-z]+(?: +[a-z]+\b)*/i;
                                            var6 = var7.exec;
                                            var4 = _closure3_slot2;
                                            var4 = var6.bind(var7)(var4);
                                            var1 = var5[var4];
                                        case 62:
                                            if (var1) {
                                                _fun7363_ip = 132;
                                                continue _fun7363
                                            }
                                        case 65:
                                            var4 = global;
                                            var7 = var4.RegExp;
                                            var4 = _closure2_slot11;
                                            var6 = undefined;
                                            var5 = var4.bind(var6)(var2);
                                            var4 = '\\b';
                                            var5 = var4 + var5;
                                            var4 = '(?:\\b|\\w*\\d)';
                                            var5 = var5 + var4;
                                            var4 = 'i';
                                            var5 = var7.bind(var6)(var5, var4);
                                            var4 = var5.exec;
                                            var3 = _closure3_slot0;
                                            var1 = var4.bind(var5)(var3);
                                        case 132:
                                            if (!var1) {
                                                _fun7363_ip = 138;
                                                continue _fun7363
                                            }
                                        case 135:
                                            var1 = var2;
                                        case 138:
                                            var0 = var1;
                                        case 141:
                                            return var0;
                                    }
                                };
                                var0 = var3.bind(var2)(var1, var0);
                                return var0;
                            };
                            var30 = var11.bind(var8)(var27);
                            var27 = ['Windows Phone', 'KaiOS', 'Android', 'CentOS'];
                            var11 = {
                                'label': 'Chrome OS',
                                'pattern': 'CrOS'
                            };
                            var27[4] = var11;
                            var11 = 'Debian';
                            var27[5] = var11;
                            var11 = {
                                'label': 'DragonFly BSD',
                                'pattern': 'DragonFly'
                            };
                            var27[6] = var11;
                            var11 = 'Fedora';
                            var27[7] = var11;
                            var11 = 'FreeBSD';
                            var27[8] = var11;
                            var11 = 'Gentoo';
                            var27[9] = var11;
                            var11 = 'Haiku';
                            var27[10] = var11;
                            var47 = 'Kubuntu';
                            var27[11] = var47;
                            var11 = 'Linux Mint';
                            var27[12] = var11;
                            var11 = 'OpenBSD';
                            var27[13] = var11;
                            var11 = 'Red Hat';
                            var27[14] = var11;
                            var11 = 'SuSE';
                            var27[15] = var11;
                            var11 = 'Ubuntu';
                            var27[16] = var11;
                            var11 = 'Xubuntu';
                            var27[17] = var11;
                            var11 = 'Cygwin';
                            var27[18] = var11;
                            var11 = 'Symbian OS';
                            var27[19] = var11;
                            var11 = 'hpwOS';
                            var27[20] = var11;
                            var11 = 'webOS ';
                            var27[21] = var11;
                            var11 = 'webOS';
                            var27[22] = var11;
                            var11 = 'Tablet OS';
                            var27[23] = var11;
                            var11 = 'Tizen';
                            var27[24] = var11;
                            var11 = 'Linux';
                            var27[25] = var11;
                            var11 = 'Mac OS X';
                            var27[26] = var11;
                            var11 = 'Macintosh';
                            var27[27] = var11;
                            var11 = 'Mac';
                            var27[28] = var11;
                            var11 = 'Windows 98;';
                            var27[29] = var11;
                            var11 = 'Windows ';
                            var27[30] = var11;
                            var11 = function(arg0) { // Original name: getOS, environment: var4
                                var3 = _closure2_slot12;
                                var2 = undefined;
                                var1 = arg0;
                                var0 = function(arg0, arg1) { // Environment: var0
                                    _fun7365: for (var _fun7365_ip = 0;;) switch (_fun7365_ip) {
                                        case 0:
                                            var3 = arg0;
                                            var1 = arg1;
                                            var8 = var1.pattern;
                                            if (var8) {
                                                _fun7365_ip = 29;
                                                continue _fun7365
                                            }
                                        case 15:
                                            var2 = _closure2_slot11;
                                            var0 = undefined;
                                            var8 = var2.bind(var0)(var1);
                                        case 29:
                                            var2 = !var3;
                                            if (!var2) {
                                                _fun7365_ip = 96;
                                                continue _fun7365
                                            }
                                        case 35:
                                            var0 = global;
                                            var6 = var0.RegExp;
                                            var0 = '\\b';
                                            var4 = var0 + var8;
                                            var5 = undefined;
                                            var0 = '(?:/[\\d.]+|[ \\w.]*)';
                                            var4 = var4 + var0;
                                            var0 = 'i';
                                            var5 = var6.bind(var5)(var4, var0);
                                            var4 = var5.exec;
                                            var0 = _closure3_slot0;
                                            var2 = var4.bind(var5)(var0);
                                            var3 = var2;
                                        case 96:
                                            var0 = var3;
                                            if (!var2) {
                                                _fun7365_ip = 685;
                                                continue _fun7365
                                            }
                                        case 105:
                                            var5 = var1.label;
                                            if (var5) {
                                                _fun7365_ip = 116;
                                                continue _fun7365
                                            }
                                        case 113:
                                            var5 = var1;
                                        case 116:
                                            var6 = {
                                                '10.0': '10',
                                                '6.4': '10 Technical Preview',
                                                '6.3': '8.1',
                                                '6.2': '8',
                                                '6.1': 'Server 2008 R2 / 7',
                                                '6.0': 'Server 2008 / Vista',
                                                '5.2': 'Server 2003 / XP 64-bit',
                                                '5.1': 'XP',
                                                '5.01': '2000 SP1',
                                                '5.0': '2000',
                                                '4.0': 'NT',
                                                '4.90': 'ME'
                                            };
                                            var1 = var8;
                                            if (!var8) {
                                                _fun7365_ip = 135;
                                                continue _fun7365
                                            }
                                        case 132:
                                            var1 = var5;
                                        case 135:
                                            if (!var1) {
                                                _fun7365_ip = 162;
                                                continue _fun7365
                                            }
                                        case 138:
                                            var4 = /^Win/i;
                                            var2 = var4.test;
                                            var1 = var2.bind(var4)(var3);
                                        case 162:
                                            if (!var1) {
                                                _fun7365_ip = 192;
                                                continue _fun7365
                                            }
                                        case 165:
                                            var4 = /^Windows Phone /i;
                                            var2 = var4.test;
                                            var2 = var2.bind(var4)(var3);
                                            var1 = !var2;
                                        case 192:
                                            var2 = var6;
                                            if (!var1) {
                                                _fun7365_ip = 230;
                                                continue _fun7365
                                            }
                                        case 198:
                                            var7 = /[\d.]+$/;
                                            var4 = var7.exec;
                                            var4 = var4.bind(var7)(var3);
                                            var1 = var6[var4];
                                            var2 = var1;
                                        case 230:
                                            var4 = var3;
                                            if (!var1) {
                                                _fun7365_ip = 246;
                                                continue _fun7365
                                            }
                                        case 236:
                                            var1 = 'Windows ';
                                            var4 = var1 + var2;
                                        case 246:
                                            var1 = global;
                                            var2 = var1.String;
                                            var3 = undefined;
                                            var4 = var2.bind(var3)(var4);
                                            var2 = var8;
                                            if (!var2) {
                                                _fun7365_ip = 270;
                                                continue _fun7365
                                            }
                                        case 267:
                                            var2 = var5;
                                        case 270:
                                            var6 = var4;
                                            if (!var2) {
                                                _fun7365_ip = 303;
                                                continue _fun7365
                                            }
                                        case 276:
                                            var2 = var4.replace;
                                            var7 = var1.RegExp;
                                            var1 = 'i';
                                            var1 = var7.bind(var3)(var8, var1);
                                            var6 = var2.bind(var4)(var1, var5);
                                        case 303:
                                            var2 = _closure2_slot8;
                                            var5 = var6.replace;
                                            var4 = / ce$/i;
                                            var1 = ' CE';
                                            var6 = var5.bind(var6)(var4, var1);
                                            var5 = var6.replace;
                                            var4 = /\bhpw/i;
                                            var1 = 'web';
                                            var6 = var5.bind(var6)(var4, var1);
                                            var5 = var6.replace;
                                            var4 = /\bMacintosh\b/;
                                            var1 = 'Mac OS';
                                            var6 = var5.bind(var6)(var4, var1);
                                            var5 = var6.replace;
                                            var4 = /_PowerPC\b/i;
                                            var1 = ' OS';
                                            var5 = var5.bind(var6)(var4, var1);
                                            var4 = var5.replace;
                                            var1 = /\b(OS X) [^ \d]+/i;
                                            var6 = '$1';
                                            var5 = var4.bind(var5)(var1, var6);
                                            var4 = var5.replace;
                                            var1 = /\bMac (OS X)\b/;
                                            var7 = var4.bind(var5)(var1, var6);
                                            var5 = var7.replace;
                                            var4 = /\\/(\d) / ;
                                            var1 = ' $1';
                                            var7 = var5.bind(var7)(var4, var1);
                                            var5 = var7.replace;
                                            var4 = /_/g;
                                            var1 = '.';
                                            var7 = var5.bind(var7)(var4, var1);
                                            var5 = var7.replace;
                                            var4 = /(?: BePC|[ .]*fc[ \d.]+)$/i;
                                            var1 = '';
                                            var7 = var5.bind(var7)(var4, var1);
                                            var5 = var7.replace;
                                            var4 = /\bx86\.64\b/gi;
                                            var1 = 'x86_64';
                                            var5 = var5.bind(var7)(var4, var1);
                                            var4 = var5.replace;
                                            var1 = /\b(Windows Phone) OS\b/;
                                            var5 = var4.bind(var5)(var1, var6);
                                            var4 = var5.replace;
                                            var1 = /\b(Chrome OS \w+) [\d.]+\b/;
                                            var5 = var4.bind(var5)(var1, var6);
                                            var4 = var5.split;
                                            var1 = ' on ';
                                            var4 = var4.bind(var5)(var1);
                                            var1 = 0;
                                            var1 = var4[var1];
                                            var0 = var2.bind(var3)(var1);
                                        case 685:
                                            return var0;
                                    }
                                };
                                var0 = var3.bind(var2)(var1, var0);
                                return var0;
                            };
                            var5 = var11.bind(var8)(var27);
                            var27 = var51;
                            if (!var27) {
                                _fun7353_ip = 1988;
                                continue _fun7353
                            }
                        case 1977:
                            var11 = new Array(1);
                            var11[0] = var51;
                            var27 = var11;
                        case 1988:
                            var52 = /\bAndroid\b/;
                            var51 = var52.test;
                            var11 = var5;
                            var11 = var51.bind(var52)(var11);
                            if (!var11) {
                                _fun7353_ip = 2021;
                                continue _fun7353
                            }
                        case 2018:
                            var11 = !var50;
                        case 2021:
                            if (!var11) {
                                _fun7353_ip = 2055;
                                continue _fun7353
                            }
                        case 2024:
                            var52 = /\bAndroid[^;]*;(.*?)(?:Build|\) AppleWebKit)\b/i;
                            var51 = var52.exec;
                            var51 = var51.bind(var52)(var10);
                            var12 = var51;
                            var11 = var51;
                        case 2055:
                            var56 = var50;
                            if (!var11) {
                                _fun7353_ip = 2118;
                                continue _fun7353
                            }
                        case 2061:
                            var50 = _closure2_slot13;
                            var11 = var12;
                            var11 = var11[var21];
                            var52 = var50.bind(var8)(var11);
                            var51 = var52.replace;
                            var50 = /^[a-z]{2}-[a-z]{2};\s*/i;
                            var11 = '';
                            var11 = var51.bind(var52)(var50, var11);
                            if (var11) {
                                _fun7353_ip = 2111;
                                continue _fun7353
                            }
                        case 2109:
                            var11 = null;
                        case 2111:
                            _closure3_slot2 = var11;
                            var56 = var11;
                        case 2118:
                            if (!var30) {
                                _fun7353_ip = 2149;
                                continue _fun7353
                            }
                        case 2121:
                            if (var56) {
                                _fun7353_ip = 2149;
                                continue _fun7353
                            }
                        case 2124:
                            var11 = new Array(1);
                            var11[0] = var30;
                            var11 = var45.bind(var8)(var11);
                            _closure3_slot2 = var11;
                            var45 = var11;
                            _fun7353_ip = 2294;
                            continue _fun7353;
                        case 2149:
                            var11 = var30;
                            if (!var30) {
                                _fun7353_ip = 2158;
                                continue _fun7353
                            }
                        case 2155:
                            var11 = var56;
                        case 2158:
                            var45 = var56;
                            if (!var11) {
                                _fun7353_ip = 2294;
                                continue _fun7353
                            }
                        case 2167:
                            var55 = var56.replace;
                            var50 = global;
                            var52 = var50.RegExp;
                            var11 = _closure2_slot11;
                            var51 = var11.bind(var8)(var30);
                            var54 = '^(';
                            var53 = var54 + var51;
                            var51 = ')[-_.\\s]';
                            var51 = var53 + var51;
                            var53 = 'i';
                            var52 = var52.bind(var8)(var51, var53);
                            var51 = ' ';
                            var51 = var30 + var51;
                            var52 = var55.bind(var56)(var52, var51);
                            var51 = var52.replace;
                            var50 = var50.RegExp;
                            var11 = var11.bind(var8)(var30);
                            var54 = var54 + var11;
                            var11 = ')[-_.]?(\\w)';
                            var11 = var54 + var11;
                            var50 = var50.bind(var8)(var11, var53);
                            var11 = ' $2';
                            var11 = var30 + var11;
                            var11 = var51.bind(var52)(var50, var11);
                            _closure3_slot2 = var11;
                            var45 = var11;
                        case 2294:
                            var50 = /\bGoogle TV\b/;
                            var11 = var50.exec;
                            var11 = var11.bind(var50)(var45);
                            var12 = var11;
                            var51 = var45;
                            if (!var11) {
                                _fun7353_ip = 2344;
                                continue _fun7353
                            }
                        case 2328:
                            var45 = var12;
                            var11 = 0;
                            var11 = var45[var11];
                            _closure3_slot2 = var11;
                            var51 = var11;
                        case 2344:
                            var45 = /\bSimulator\b/i;
                            var11 = var45.test;
                            var11 = var11.bind(var45)(var10);
                            var45 = var51;
                            if (!var11) {
                                _fun7353_ip = 2408;
                                continue _fun7353
                            }
                        case 2374:
                            var50 = '';
                            if (!var51) {
                                _fun7353_ip = 2391;
                                continue _fun7353
                            }
                        case 2381:
                            var11 = ' ';
                            var50 = var51 + var11;
                        case 2391:
                            var11 = 'Simulator';
                            var11 = var50 + var11;
                            _closure3_slot2 = var11;
                            var45 = var11;
                        case 2408:
                            var11 = var6;
                            var11 = var46 == var11;
                            if (!var11) {
                                _fun7353_ip = 2442;
                                continue _fun7353
                            }
                        case 2418:
                            var50 = /\bOPiOS\b/;
                            var46 = var50.test;
                            var11 = var46.bind(var50)(var10);
                        case 2442:
                            if (!var11) {
                                _fun7353_ip = 2464;
                                continue _fun7353
                            }
                        case 2445:
                            var50 = var1;
                            var46 = var50.push;
                            var11 = 'running in Turbo/Uncompressed mode';
                            var11 = var46.bind(var50)(var11);
                        case 2464:
                            var11 = var6;
                            if (!(var13 == var11)) {
                                _fun7353_ip = 2501;
                                continue _fun7353
                            }
                        case 2471:
                            var46 = /\blike iPhone OS\b/;
                            var11 = var46.test;
                            var11 = var11.bind(var46)(var10);
                            if (var11) {
                                _fun7353_ip = 3727;
                                continue _fun7353
                            }
                        case 2501:
                            var46 = /^iP/;
                            var11 = var46.test;
                            var11 = var11.bind(var46)(var45);
                            var46 = var6;
                            if (var11) {
                                _fun7353_ip = 3622;
                                continue _fun7353
                            }
                        case 2534:
                            var11 = 'Konqueror';
                            if (!(var11 == var46)) {
                                _fun7353_ip = 2577;
                                continue _fun7353
                            }
                        case 2544:
                            var51 = /^Linux\b/i;
                            var50 = var51.test;
                            var11 = var5;
                            var11 = var50.bind(var51)(var11);
                            if (var11) {
                                _fun7353_ip = 3608;
                                continue _fun7353
                            }
                        case 2577:
                            if (!var30) {
                                _fun7353_ip = 2678;
                                continue _fun7353
                            }
                        case 2580:
                            var11 = 'Google';
                            if (!(var11 != var30)) {
                                _fun7353_ip = 2678;
                                continue _fun7353
                            }
                        case 2588:
                            var51 = /Chrome/;
                            var50 = var51.test;
                            var11 = var6;
                            var11 = var50.bind(var51)(var11);
                            if (!var11) {
                                _fun7353_ip = 2648;
                                continue _fun7353
                            }
                        case 2618:
                            var50 = /\bMobile Safari\b/i;
                            var11 = var50.test;
                            var11 = var11.bind(var50)(var10);
                            if (!var11) {
                                _fun7353_ip = 3549;
                                continue _fun7353
                            }
                        case 2648:
                            var50 = /\bVita\b/;
                            var11 = var50.test;
                            var11 = var11.bind(var50)(var45);
                            if (var11) {
                                _fun7353_ip = 3549;
                                continue _fun7353
                            }
                        case 2678:
                            var51 = /\bAndroid\b/;
                            var50 = var51.test;
                            var11 = var5;
                            var11 = var50.bind(var51)(var11);
                            if (!var11) {
                                _fun7353_ip = 2768;
                                continue _fun7353
                            }
                        case 2708:
                            var51 = /^Chrome/;
                            var50 = var51.test;
                            var11 = var6;
                            var11 = var50.bind(var51)(var11);
                            if (!var11) {
                                _fun7353_ip = 2768;
                                continue _fun7353
                            }
                        case 2738:
                            var50 = /\bVersion\\/ / i;
                            var11 = var50.test;
                            var11 = var11.bind(var50)(var10);
                            if (var11) {
                                _fun7353_ip = 3549;
                                continue _fun7353
                            }
                        case 2768:
                            var11 = var6;
                            if (!(var49 != var11)) {
                                _fun7353_ip = 3431;
                                continue _fun7353
                            }
                        case 2778:
                            var11 = var6;
                            if (!(var48 == var11)) {
                                _fun7353_ip = 2815;
                                continue _fun7353
                            }
                        case 2785:
                            var48 = /\bUCWEB\b/;
                            var11 = var48.test;
                            var11 = var11.bind(var48)(var10);
                            if (var11) {
                                _fun7353_ip = 3401;
                                continue _fun7353
                            }
                        case 2815:
                            var11 = var6;
                            if (!(var14 == var11)) {
                                _fun7353_ip = 2856;
                                continue _fun7353
                            }
                        case 2822:
                            var14 = /\bFirefox\\/([\d.] + )\ b / ;
                            var11 = var14.exec;
                            var11 = var11.bind(var14)(var10);
                            var12 = var11;
                            if (var11) {
                                _fun7353_ip = 3360;
                                continue _fun7353
                            }
                        case 2856:
                            var11 = var6;
                            if (!(var31 == var11)) {
                                _fun7353_ip = 2897;
                                continue _fun7353
                            }
                        case 2863:
                            var14 = /\b(Mobile|Tablet|TV)\b/i;
                            var11 = var14.exec;
                            var11 = var11.bind(var14)(var10);
                            var12 = var11;
                            if (var11) {
                                _fun7353_ip = 3314;
                                continue _fun7353
                            }
                        case 2897:
                            var11 = var6;
                            if (!var11) {
                                _fun7353_ip = 3075;
                                continue _fun7353
                            }
                        case 2906:
                            var14 = /\bMinefield\b/i;
                            var11 = var14.test;
                            var11 = var11.bind(var14)(var10);
                            var11 = !var11;
                            if (!var11) {
                                _fun7353_ip = 2964;
                                continue _fun7353
                            }
                        case 2936:
                            var49 = /\b(?:Firefox|Safari)\b/;
                            var48 = var49.exec;
                            var14 = var6;
                            var11 = var48.bind(var49)(var14);
                        case 2964:
                            var12 = var11;
                            if (var11) {
                                _fun7353_ip = 3075;
                                continue _fun7353
                            }
                        case 2970:
                            var14 = var6;
                            var11 = 'Electron';
                            var48 = var11 == var14;
                            if (!var48) {
                                _fun7353_ip = 3026;
                                continue _fun7353
                            }
                        case 2986:
                            var14 = /\bChrome\\/([\d.] + )\ b / ;
                            var11 = var14.exec;
                            var11 = var11.bind(var14)(var10);
                            if (var11) {
                                _fun7353_ip = 3016;
                                continue _fun7353
                            }
                        case 3014:
                            var11 = 0;
                        case 3016:
                            var11 = var11[var21];
                            var12 = var11;
                            var48 = var11;
                        case 3026:
                            var14 = var45;
                            var11 = var30;
                            if (!var48) {
                                _fun7353_ip = 3787;
                                continue _fun7353
                            }
                        case 3038:
                            var50 = var1;
                            var49 = var50.push;
                            var51 = var12;
                            var48 = 'Chromium ';
                            var48 = var48 + var51;
                            var48 = var49.bind(var50)(var48);
                            var14 = var45;
                            var11 = var30;
                            _fun7353_ip = 3787;
                            continue _fun7353;
                        case 3075:
                            var48 = var6;
                            if (!var48) {
                                _fun7353_ip = 3084;
                                continue _fun7353
                            }
                        case 3081:
                            var48 = !var45;
                        case 3084:
                            if (!var48) {
                                _fun7353_ip = 3150;
                                continue _fun7353
                            }
                        case 3087:
                            var51 = /[\\/,]|^[^(]+?\)/;
                            var50 = var51.test;
                            var52 = var10.slice;
                            var53 = var10.indexOf;
                            var54 = var12;
                            var49 = '/';
                            var49 = var54 + var49;
                            var53 = var53.bind(var10)(var49);
                            var49 = 8;
                            var49 = var53 + var49;
                            var49 = var52.bind(var10)(var49);
                            var48 = var50.bind(var51)(var49);
                        case 3150:
                            if (!var48) {
                                _fun7353_ip = 3155;
                                continue _fun7353
                            }
                        case 3153:
                            var6 = null;
                        case 3155:
                            var48 = var45;
                            if (var45) {
                                _fun7353_ip = 3164;
                                continue _fun7353
                            }
                        case 3161:
                            var48 = var30;
                        case 3164:
                            if (var48) {
                                _fun7353_ip = 3170;
                                continue _fun7353
                            }
                        case 3167:
                            var48 = var5;
                        case 3170:
                            var12 = var48;
                            if (!var48) {
                                _fun7353_ip = 3218;
                                continue _fun7353
                            }
                        case 3176:
                            var49 = var45;
                            if (var45) {
                                _fun7353_ip = 3185;
                                continue _fun7353
                            }
                        case 3182:
                            var49 = var30;
                        case 3185:
                            if (var49) {
                                _fun7353_ip = 3215;
                                continue _fun7353
                            }
                        case 3188:
                            var52 = /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/;
                            var51 = var52.test;
                            var50 = var5;
                            var49 = var51.bind(var52)(var50);
                        case 3215:
                            var48 = var49;
                        case 3218:
                            var14 = var45;
                            var11 = var30;
                            if (!var48) {
                                _fun7353_ip = 3787;
                                continue _fun7353
                            }
                        case 3230:
                            var50 = /[a-z]+(?: Hat)?/i;
                            var49 = var50.exec;
                            var52 = /\bAndroid\b/;
                            var51 = var52.test;
                            var48 = var5;
                            var48 = var51.bind(var52)(var48);
                            if (var48) {
                                _fun7353_ip = 3285;
                                continue _fun7353
                            }
                        case 3280:
                            var48 = var12;
                            _fun7353_ip = 3288;
                            continue _fun7353;
                        case 3285:
                            var48 = var5;
                        case 3288:
                            var49 = var49.bind(var50)(var48);
                            var48 = ' Browser';
                            var6 = var49 + var48;
                            var14 = var45;
                            var11 = var30;
                            _fun7353_ip = 3787;
                            continue _fun7353;
                        case 3314:
                            var48 = var5;
                            if (var48) {
                                _fun7353_ip = 3326;
                                continue _fun7353
                            }
                        case 3320:
                            var5 = 'Firefox OS';
                        case 3326:
                            var14 = var45;
                            var11 = var30;
                            if (var45) {
                                _fun7353_ip = 3787;
                                continue _fun7353
                            }
                        case 3338:
                            var48 = var12;
                            var48 = var48[var21];
                            _closure3_slot2 = var48;
                            var14 = var48;
                            var11 = var30;
                            _fun7353_ip = 3787;
                            continue _fun7353;
                        case 3360:
                            var50 = var1;
                            var49 = var50.push;
                            var48 = var12;
                            var51 = var48[var21];
                            var48 = 'identifying as Firefox ';
                            var48 = var48 + var51;
                            var48 = var49.bind(var50)(var48);
                            var14 = var45;
                            var11 = var30;
                            _fun7353_ip = 3787;
                            continue _fun7353;
                        case 3401:
                            var50 = var1;
                            var49 = var50.push;
                            var48 = 'speed mode';
                            var48 = var49.bind(var50)(var48);
                            var14 = var45;
                            var11 = var30;
                            _fun7353_ip = 3787;
                            continue _fun7353;
                        case 3431:
                            var49 = /\bMobi/i;
                            var48 = var49.test;
                            var48 = var48.bind(var49)(var10);
                            if (var48) {
                                _fun7353_ip = 3484;
                                continue _fun7353
                            }
                        case 3458:
                            var5 = 'Android';
                            var50 = var1;
                            var49 = var50.unshift;
                            var48 = 'desktop mode';
                            var48 = var49.bind(var50)(var48);
                        case 3484:
                            var49 = /Accelerated *= *true/i;
                            var48 = var49.test;
                            var48 = var48.bind(var49)(var10);
                            var14 = var45;
                            var11 = var30;
                            if (!var48) {
                                _fun7353_ip = 3787;
                                continue _fun7353
                            }
                        case 3520:
                            var50 = var1;
                            var49 = var50.unshift;
                            var48 = 'accelerated';
                            var48 = var49.bind(var50)(var48);
                            var14 = var45;
                            var11 = var30;
                            _fun7353_ip = 3787;
                            continue _fun7353;
                        case 3549:
                            var6 = 'Android Browser';
                            var50 = /\bAndroid\b/;
                            var49 = var50.test;
                            var48 = var5;
                            var49 = var49.bind(var50)(var48);
                            var48 = 'Android';
                            if (!var49) {
                                _fun7353_ip = 3594;
                                continue _fun7353
                            }
                        case 3591:
                            var48 = var5;
                        case 3594:
                            var5 = var48;
                            var14 = var45;
                            var11 = var30;
                            _fun7353_ip = 3787;
                            continue _fun7353;
                        case 3608:
                            var5 = var47;
                            var14 = var45;
                            var11 = var30;
                            _fun7353_ip = 3787;
                            continue _fun7353;
                        case 3622:
                            if (var46) {
                                _fun7353_ip = 3628;
                                continue _fun7353
                            }
                        case 3625:
                            var6 = var22;
                        case 3628:
                            var47 = / OS ([\d_]+)/i;
                            var46 = var47.exec;
                            var46 = var46.bind(var47)(var10);
                            var12 = var46;
                            var47 = '';
                            if (!var46) {
                                _fun7353_ip = 3709;
                                continue _fun7353
                            }
                        case 3663:
                            var46 = var12;
                            var50 = var46[var21];
                            var49 = var50.replace;
                            var48 = /_/g;
                            var46 = '.';
                            var48 = var49.bind(var50)(var48, var46);
                            var46 = ' ';
                            var47 = var46 + var48;
                        case 3709:
                            var46 = 'iOS';
                            var5 = var46 + var47;
                            var14 = var45;
                            var11 = var30;
                            _fun7353_ip = 3787;
                            continue _fun7353;
                        case 3727:
                            var45 = _closure2_slot14;
                            var47 = var10.replace;
                            var46 = /like iPhone OS/;
                            var30 = '';
                            var30 = var47.bind(var10)(var46, var30);
                            var45 = var45.bind(var8)(var30);
                            var12 = var45;
                            var11 = var45.manufacturer;
                            var45 = var45.product;
                            _closure3_slot2 = var45;
                            var14 = var45;
                        case 3787:
                            var30 = var3;
                            if (var30) {
                                _fun7353_ip = 3834;
                                continue _fun7353
                            }
                        case 3793:
                            var45 = _closure2_slot11;
                            var30 = var6;
                            var45 = var45.bind(var8)(var30);
                            var30 = ['(?:Cloud9|CriOS|CrMo|Edge|Edg|EdgA|EdgiOS|FxiOS|HeadlessChrome|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$)|UCBrowser|YaBrowser)', 'Version'];
                            var30[2] = var45;
                            var45 = '(?:Firefox|Minefield|NetFront)';
                            var30[3] = var45;
                            var3 = var19.bind(var8)(var30);
                        case 3834:
                            if (!(var18 == var27)) {
                                _fun7353_ip = 3867;
                                continue _fun7353
                            }
                        case 3838:
                            var18 = global;
                            var30 = var18.parseFloat;
                            var18 = var3;
                            var30 = var30.bind(var8)(var18);
                            var18 = 3;
                            var30 = var30 > var18;
                            var18 = var29;
                            if (var30) {
                                _fun7353_ip = 3936;
                                continue _fun7353
                            }
                        case 3867:
                            var46 = /\bOpera\b/;
                            var45 = var46.test;
                            var30 = var6;
                            var30 = var45.bind(var46)(var30);
                            if (!var30) {
                                _fun7353_ip = 3933;
                                continue _fun7353
                            }
                        case 3897:
                            var46 = /\bOPR\b/;
                            var45 = var46.test;
                            var45 = var45.bind(var46)(var10);
                            if (!var45) {
                                _fun7353_ip = 3930;
                                continue _fun7353
                            }
                        case 3924:
                            var43 = 'Blink';
                        case 3930:
                            var30 = var43;
                        case 3933:
                            var18 = var30;
                        case 3936:
                            if (var18) {
                                _fun7353_ip = 4002;
                                continue _fun7353
                            }
                        case 3939:
                            var43 = /\b(?:Midori|Nook|Safari)\b/i;
                            var30 = var43.test;
                            var30 = var30.bind(var43)(var10);
                            if (!var30) {
                                _fun7353_ip = 3993;
                                continue _fun7353
                            }
                        case 3966:
                            var45 = /^(?:Trident|EdgeHTML)$/;
                            var43 = var45.test;
                            var43 = var43.bind(var45)(var27);
                            var30 = !var43;
                        case 3993:
                            if (!var30) {
                                _fun7353_ip = 3999;
                                continue _fun7353
                            }
                        case 3996:
                            var30 = var29;
                        case 3999:
                            var18 = var30;
                        case 4002:
                            if (var18) {
                                _fun7353_ip = 4066;
                                continue _fun7353
                            }
                        case 4005:
                            var30 = !var27;
                            if (!var30) {
                                _fun7353_ip = 4035;
                                continue _fun7353
                            }
                        case 4011:
                            var45 = /\bMSIE\b/i;
                            var43 = var45.test;
                            var30 = var43.bind(var45)(var10);
                        case 4035:
                            if (!var30) {
                                _fun7353_ip = 4063;
                                continue _fun7353
                            }
                        case 4038:
                            var45 = var5;
                            var43 = 'Mac OS';
                            var45 = var43 == var45;
                            var43 = var24;
                            if (!var45) {
                                _fun7353_ip = 4060;
                                continue _fun7353
                            }
                        case 4057:
                            var43 = var44;
                        case 4060:
                            var30 = var43;
                        case 4063:
                            var18 = var30;
                        case 4066:
                            if (var18) {
                                _fun7353_ip = 4112;
                                continue _fun7353
                            }
                        case 4069:
                            var30 = var29 == var27;
                            if (!var30) {
                                _fun7353_ip = 4103;
                                continue _fun7353
                            }
                        case 4076:
                            var45 = /\bPlayStation\b(?! Vita\b)/i;
                            var44 = var45.test;
                            var43 = var6;
                            var30 = var44.bind(var45)(var43);
                        case 4103:
                            if (!var30) {
                                _fun7353_ip = 4109;
                                continue _fun7353
                            }
                        case 4106:
                            var30 = var33;
                        case 4109:
                            var18 = var30;
                        case 4112:
                            var12 = var18;
                            var33 = var27;
                            if (!var18) {
                                _fun7353_ip = 4135;
                                continue _fun7353
                            }
                        case 4121:
                            var27 = var12;
                            var18 = new Array(1);
                            var18[0] = var27;
                            var33 = var18;
                        case 4135:
                            var18 = var6;
                            if (!(var13 == var18)) {
                                _fun7353_ip = 4185;
                                continue _fun7353
                            }
                        case 4142:
                            var27 = /; *(?:XBLWP|ZuneWP)(\d+)/i;
                            var18 = var27.exec;
                            var18 = var18.bind(var27)(var10);
                            if (var18) {
                                _fun7353_ip = 4172;
                                continue _fun7353
                            }
                        case 4170:
                            var18 = 0;
                        case 4172:
                            var18 = var18[var21];
                            var12 = var18;
                            if (var18) {
                                _fun7353_ip = 4420;
                                continue _fun7353
                            }
                        case 4185:
                            var27 = /\bWPDesktop\b/i;
                            var18 = var27.test;
                            var18 = var18.bind(var27)(var10);
                            if (var18) {
                                _fun7353_ip = 4343;
                                continue _fun7353
                            }
                        case 4215:
                            var18 = var6;
                            var18 = var13 != var18;
                            if (!var18) {
                                _fun7353_ip = 4229;
                                continue _fun7353
                            }
                        case 4225:
                            var18 = var24 == var33;
                        case 4229:
                            if (!var18) {
                                _fun7353_ip = 4263;
                                continue _fun7353
                            }
                        case 4232:
                            var27 = /\brv:([\d.]+)/;
                            var24 = var27.exec;
                            var24 = var24.bind(var27)(var10);
                            var12 = var24;
                            var18 = var24;
                        case 4263:
                            if (!var18) {
                                _fun7353_ip = 4511;
                                continue _fun7353
                            }
                        case 4269:
                            var18 = var6;
                            if (!var18) {
                                _fun7353_ip = 4328;
                                continue _fun7353
                            }
                        case 4275:
                            var27 = var1;
                            var24 = var27.push;
                            var30 = var6;
                            var18 = 'identifying as ';
                            var30 = var18 + var30;
                            var43 = var3;
                            var18 = '';
                            if (!var43) {
                                _fun7353_ip = 4319;
                                continue _fun7353
                            }
                        case 4306:
                            var44 = var3;
                            var43 = ' ';
                            var18 = var43 + var44;
                        case 4319:
                            var18 = var30 + var18;
                            var18 = var24.bind(var27)(var18);
                        case 4328:
                            var6 = var13;
                            var18 = var12;
                            var3 = var18[var21];
                            _fun7353_ip = 4511;
                            continue _fun7353;
                        case 4343:
                            var6 = 'IE Mobile';
                            var5 = 'Windows Phone 8.x';
                            var27 = var1;
                            var24 = var27.unshift;
                            var18 = 'desktop mode';
                            var18 = var24.bind(var27)(var18);
                            var18 = var3;
                            if (var18) {
                                _fun7353_ip = 4511;
                                continue _fun7353
                            }
                        case 4384:
                            var24 = /\brv:([\d.]+)/;
                            var18 = var24.exec;
                            var18 = var18.bind(var24)(var10);
                            if (var18) {
                                _fun7353_ip = 4414;
                                continue _fun7353
                            }
                        case 4412:
                            var18 = 0;
                        case 4414:
                            var3 = var18[var21];
                            _fun7353_ip = 4511;
                            continue _fun7353;
                        case 4420:
                            var24 = var6;
                            var18 = ' Mobile';
                            var6 = var24 + var18;
                            var27 = /\+$/;
                            var24 = var27.test;
                            var18 = var12;
                            var24 = var24.bind(var27)(var18);
                            var18 = var12;
                            if (var24) {
                                _fun7353_ip = 4478;
                                continue _fun7353
                            }
                        case 4466:
                            var24 = '.x';
                            var24 = var18 + var24;
                            _fun7353_ip = 4481;
                            continue _fun7353;
                        case 4478:
                            var24 = var18;
                        case 4481:
                            var18 = 'Windows Phone ';
                            var5 = var18 + var24;
                            var27 = var1;
                            var24 = var27.unshift;
                            var18 = 'desktop mode';
                            var18 = var24.bind(var27)(var18);
                        case 4511:
                            var18 = var10;
                            var24 = var33;
                            if (!var16) {
                                _fun7353_ip = 5802;
                                continue _fun7353
                            }
                        case 4523:
                            var44 = var28;
                            var27 = var0 != var44;
                            var30 = 'number';
                            var43 = var30;
                            if (!var27) {
                                _fun7353_ip = 4549;
                                continue _fun7353
                            }
                        case 4540:
                            var27 = var44.global;
                            var43 = typeof var27;
                        case 4549:
                            var45 = /^(?:boolean|number|string|undefined)$/;
                            var27 = var45.test;
                            var27 = var27.bind(var45)(var43);
                            var45 = var43;
                            if (var27) {
                                _fun7353_ip = 4602;
                                continue _fun7353
                            }
                        case 4579:
                            var43 = 'object';
                            var43 = var43 === var45;
                            if (!var43) {
                                _fun7353_ip = 4599;
                                continue _fun7353
                            }
                        case 4590:
                            var44 = var44.global;
                            var43 = !var44;
                        case 4599:
                            var27 = var43;
                        case 4602:
                            var27 = !var27;
                            if (var27) {
                                _fun7353_ip = 5143;
                                continue _fun7353
                            }
                        case 4611:
                            var43 = _closure2_slot10;
                            var27 = var28;
                            var27 = var27.runtime;
                            var12 = var27;
                            var27 = var43.bind(var8)(var27);
                            if (!(var27 != var42)) {
                                _fun7353_ip = 5099;
                                continue _fun7353
                            }
                        case 4639:
                            var42 = _closure2_slot10;
                            var27 = var28;
                            var27 = var27.phantom;
                            var12 = var27;
                            var27 = var42.bind(var8)(var27);
                            if (!(var27 != var40)) {
                                _fun7353_ip = 5021;
                                continue _fun7353
                            }
                        case 4667:
                            var27 = var41.documentMode;
                            var27 = typeof var27;
                            if (!(var30 === var27)) {
                                _fun7353_ip = 4714;
                                continue _fun7353
                            }
                        case 4680:
                            var40 = /\bTrident\\/(\d + ) / i;
                            var27 = var40.exec;
                            var27 = var27.bind(var40)(var10);
                            var12 = var27;
                            if (var27) {
                                _fun7353_ip = 4845;
                                continue _fun7353
                            }
                        case 4714:
                            var27 = var41.documentMode;
                            var27 = typeof var27;
                            var40 = var30 === var27;
                            if (!var40) {
                                _fun7353_ip = 4757;
                                continue _fun7353
                            }
                        case 4730:
                            var42 = /^(?:Chrome|Firefox)\b/;
                            var30 = var42.test;
                            var27 = var6;
                            var40 = var30.bind(var42)(var27);
                        case 4757:
                            var30 = var10;
                            var27 = var33;
                            if (!var40) {
                                _fun7353_ip = 5775;
                                continue _fun7353
                            }
                        case 4769:
                            var43 = var1;
                            var42 = var43.push;
                            var44 = var6;
                            var40 = 'masking as ';
                            var45 = var40 + var44;
                            var44 = var3;
                            var40 = ' ';
                            var40 = var45 + var40;
                            var40 = var40 + var44;
                            var40 = var42.bind(var43)(var40);
                            var6 = var13;
                            var3 = '11.0';
                            var27 = ['Trident'];
                            var5 = 'Windows';
                            var30 = var10;
                            _fun7353_ip = 5775;
                            continue _fun7353;
                        case 4845:
                            var42 = var3;
                            var40 = new Array(2);
                            var40[0] = var42;
                            var41 = var41.documentMode;
                            var40[1] = var41;
                            var3 = var40;
                            var41 = var12;
                            var41 = var41[var21];
                            var42 = var41 - 0;
                            var41 = 4;
                            var41 = var42 + var41;
                            var12 = var41;
                            var40 = var40[var21];
                            if (!(var41 != var40)) {
                                _fun7353_ip = 4958;
                                continue _fun7353
                            }
                        case 4897:
                            var42 = var1;
                            var41 = var42.push;
                            var40 = var3;
                            var43 = var40[var21];
                            var40 = 'IE ';
                            var43 = var40 + var43;
                            var40 = ' mode';
                            var40 = var43 + var40;
                            var40 = var41.bind(var42)(var40);
                            if (!var33) {
                                _fun7353_ip = 4948;
                                continue _fun7353
                            }
                        case 4940:
                            var40 = '';
                            var33[var21] = var40;
                        case 4948:
                            var41 = var3;
                            var40 = var12;
                            var41[var21] = var40;
                        case 4958:
                            var40 = var6;
                            if (!(var13 != var40)) {
                                _fun7353_ip = 4976;
                                continue _fun7353
                            }
                        case 4965:
                            var41 = var3;
                            var40 = 0;
                            var40 = var41[var40];
                            _fun7353_ip = 5007;
                            continue _fun7353;
                        case 4976:
                            var41 = global;
                            var42 = var41.String;
                            var41 = var3;
                            var43 = var41[var21];
                            var41 = var43.toFixed;
                            var41 = var41.bind(var43)(var21);
                            var40 = var42.bind(var8)(var41);
                        case 5007:
                            var3 = var40;
                            var30 = var10;
                            var27 = var33;
                            _fun7353_ip = 5775;
                            continue _fun7353;
                        case 5021:
                            var6 = var35;
                            var35 = var12;
                            var35 = var35.version;
                            if (var35) {
                                _fun7353_ip = 5038;
                                continue _fun7353
                            }
                        case 5036:
                            var35 = null;
                        case 5038:
                            var12 = var35;
                            if (!var35) {
                                _fun7353_ip = 5085;
                                continue _fun7353
                            }
                        case 5044:
                            var41 = var12;
                            var40 = var41.major;
                            var42 = '.';
                            var43 = var40 + var42;
                            var40 = var41.minor;
                            var40 = var43 + var40;
                            var41 = var41.patch;
                            var40 = var40 + var42;
                            var35 = var40 + var41;
                        case 5085:
                            var3 = var35;
                            var30 = var10;
                            var27 = var33;
                            _fun7353_ip = 5775;
                            continue _fun7353;
                        case 5099:
                            var6 = 'Adobe AIR';
                            var35 = var12;
                            var35 = var35.flash;
                            var35 = var35.system;
                            var35 = var35.Capabilities;
                            var5 = var35.os;
                            var30 = var10;
                            var27 = var33;
                            _fun7353_ip = 5775;
                            continue _fun7353;
                        case 5143:
                            var35 = var10;
                            if (!var39) {
                                _fun7353_ip = 5244;
                                continue _fun7353
                            }
                        case 5149:
                            var39 = var39.lang;
                            var41 = var39.System;
                            var12 = var41;
                            var40 = var41.getProperty;
                            var39 = 'os.arch';
                            var39 = var40.bind(var41)(var39);
                            var40 = var5;
                            if (var40) {
                                _fun7353_ip = 5238;
                                continue _fun7353
                            }
                        case 5187:
                            var44 = var12;
                            var42 = var44.getProperty;
                            var41 = 'os.name';
                            var42 = var42.bind(var44)(var41);
                            var41 = ' ';
                            var42 = var42 + var41;
                            var43 = var44.getProperty;
                            var41 = 'os.version';
                            var41 = var43.bind(var44)(var41);
                            var40 = var42 + var41;
                        case 5238:
                            var5 = var40;
                            var35 = var39;
                        case 5244:
                            if (var38) {
                                _fun7353_ip = 5614;
                                continue _fun7353
                            }
                        case 5250:
                            var38 = var28;
                            var38 = var38.process;
                            var39 = 'object';
                            var38 = typeof var38;
                            var38 = var39 === var38;
                            if (!var38) {
                                _fun7353_ip = 5291;
                                continue _fun7353
                            }
                        case 5273:
                            var40 = var28;
                            var40 = var40.process;
                            var40 = var40.browser;
                            var38 = !var40;
                        case 5291:
                            if (!var38) {
                                _fun7353_ip = 5309;
                                continue _fun7353
                            }
                        case 5294:
                            var40 = var28;
                            var40 = var40.process;
                            var12 = var40;
                            var38 = var40;
                        case 5309:
                            var30 = var35;
                            var27 = var33;
                            if (!var38) {
                                _fun7353_ip = 5775;
                                continue _fun7353
                            }
                        case 5321:
                            var38 = var12;
                            var38 = var38.versions;
                            var38 = typeof var38;
                            if (!(var39 === var38)) {
                                _fun7353_ip = 5519;
                                continue _fun7353
                            }
                        case 5340:
                            var38 = var12;
                            var38 = var38.versions;
                            var38 = var38.electron;
                            var39 = 'string';
                            var38 = typeof var38;
                            if (!(var39 !== var38)) {
                                _fun7353_ip = 5463;
                                continue _fun7353
                            }
                        case 5366:
                            var38 = var12;
                            var38 = var38.versions;
                            var38 = var38.nw;
                            var38 = typeof var38;
                            if (!(var39 === var38)) {
                                _fun7353_ip = 5519;
                                continue _fun7353
                            }
                        case 5391:
                            var42 = var1;
                            var41 = var42.push;
                            var39 = var3;
                            var38 = 'Chromium ';
                            var40 = var38 + var39;
                            var38 = var12;
                            var39 = var38.versions;
                            var43 = var39.node;
                            var39 = 'Node ';
                            var39 = var39 + var43;
                            var39 = var41.bind(var42)(var40, var39);
                            var6 = 'NW.js';
                            var38 = var38.versions;
                            var3 = var38.nw;
                            _fun7353_ip = 5519;
                            continue _fun7353;
                        case 5463:
                            var41 = var1;
                            var40 = var41.push;
                            var38 = var12;
                            var39 = var38.versions;
                            var42 = var39.node;
                            var39 = 'Node ';
                            var39 = var39 + var42;
                            var39 = var40.bind(var41)(var39);
                            var6 = 'Electron';
                            var38 = var38.versions;
                            var3 = var38.electron;
                        case 5519:
                            var39 = var6;
                            var38 = var35;
                            if (var39) {
                                _fun7353_ip = 5603;
                                continue _fun7353
                            }
                        case 5528:
                            var6 = 'Node.js';
                            var40 = var12;
                            var39 = var40.arch;
                            var5 = var40.platform;
                            var42 = /[\d.]+/;
                            var41 = var42.exec;
                            var40 = var40.version;
                            var41 = var41.bind(var42)(var40);
                            var3 = var41;
                            var40 = null;
                            if (!var41) {
                                _fun7353_ip = 5597;
                                continue _fun7353
                            }
                        case 5588:
                            var42 = var3;
                            var41 = 0;
                            var40 = var42[var41];
                        case 5597:
                            var3 = var40;
                            var38 = var39;
                        case 5603:
                            var30 = var38;
                            var27 = var33;
                            _fun7353_ip = 5775;
                            continue _fun7353;
                        case 5614: // try_start_0
                            var40 = var28;
                            var39 = var40.require;
                            var38 = 'ringo/engine';
                            var38 = var39.bind(var40)(var38);
                            var40 = var38.version;
                            var39 = var40.join;
                            var38 = '.';
                            var3 = var39.bind(var40)(var38);
                            var6 = 'RingoJS';
                        case 5660: // try_end0
                            _fun7353_ip = 5751;
                            continue _fun7353;
                        case 5662: // catch_target0
                            CatchBlockStart(arg_register = 38);
                            var39 = var28;
                            var39 = var39.system;
                            var12 = var39;
                            var38 = var39;
                            if (!var39) {
                                _fun7353_ip = 5710;
                                continue _fun7353
                            }
                        case 5682:
                            var39 = var12;
                            var39 = var39.global;
                            var40 = var39.system;
                            var39 = var28;
                            var39 = var39.system;
                            var38 = var40 == var39;
                        case 5710:
                            if (!var38) {
                                _fun7353_ip = 5751;
                                continue _fun7353
                            }
                        case 5713:
                            var6 = 'Narwhal';
                            var38 = var5;
                            if (var38) {
                                _fun7353_ip = 5751;
                                continue _fun7353
                            }
                        case 5725:
                            var40 = var12;
                            var39 = 0;
                            var39 = var40[var39];
                            var39 = var39.os;
                            var38 = var39;
                            if (var39) {
                                _fun7353_ip = 5748;
                                continue _fun7353
                            }
                        case 5746:
                            var38 = null;
                        case 5748:
                            var5 = var38;
                        case 5751:
                            var38 = var6;
                            var30 = var35;
                            var27 = var33;
                            if (var38) {
                                _fun7353_ip = 5775;
                                continue _fun7353
                            }
                        case 5763:
                            var6 = 'Rhino';
                            var30 = var35;
                            var27 = var33;
                        case 5775:
                            var33 = var5;
                            if (!var33) {
                                _fun7353_ip = 5793;
                                continue _fun7353
                            }
                        case 5781:
                            var38 = _closure2_slot8;
                            var35 = var5;
                            var33 = var38.bind(var8)(var35);
                        case 5793:
                            var5 = var33;
                            var18 = var30;
                            var24 = var27;
                        case 5802:
                            var30 = var3;
                            if (!var30) {
                                _fun7353_ip = 5934;
                                continue _fun7353
                            }
                        case 5811:
                            var35 = /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i;
                            var33 = var35.exec;
                            var27 = var3;
                            var27 = var33.bind(var35)(var27);
                            if (var27) {
                                _fun7353_ip = 5891;
                                continue _fun7353
                            }
                        case 5842:
                            var38 = /(?:alpha|beta)(?: ?\d)?/i;
                            var35 = var38.exec;
                            var33 = ';';
                            var39 = var10 + var33;
                            var33 = var16;
                            if (!var16) {
                                _fun7353_ip = 5882;
                                continue _fun7353
                            }
                        case 5876:
                            var33 = var20.appMinorVersion;
                        case 5882:
                            var33 = var39 + var33;
                            var27 = var35.bind(var38)(var33);
                        case 5891:
                            if (var27) {
                                _fun7353_ip = 5928;
                                continue _fun7353
                            }
                        case 5894:
                            var35 = /\bMinefield\b/i;
                            var33 = var35.test;
                            var33 = var33.bind(var35)(var10);
                            if (!var33) {
                                _fun7353_ip = 5925;
                                continue _fun7353
                            }
                        case 5921:
                            var33 = 'a';
                        case 5925:
                            var27 = var33;
                        case 5928:
                            var12 = var27;
                            var30 = var27;
                        case 5934:
                            var27 = null;
                            if (!var30) {
                                _fun7353_ip = 6080;
                                continue _fun7353
                            }
                        case 5942:
                            var35 = /b/i;
                            var33 = var35.test;
                            var30 = var12;
                            var33 = var33.bind(var35)(var30);
                            var30 = 'alpha';
                            if (!var33) {
                                _fun7353_ip = 5980;
                                continue _fun7353
                            }
                        case 5976:
                            var30 = 'beta';
                        case 5980:
                            var39 = var3;
                            var38 = var39.replace;
                            var33 = global;
                            var35 = var33.RegExp;
                            var40 = var12;
                            var33 = '\\+?$';
                            var33 = var40 + var33;
                            var33 = var35.bind(var8)(var33);
                            var35 = '';
                            var33 = var38.bind(var39)(var33, var35);
                            var38 = 'beta';
                            if (!(var38 === var30)) {
                                _fun7353_ip = 6035;
                                continue _fun7353
                            }
                        case 6032:
                            var34 = var37;
                        case 6035:
                            var34 = var33 + var34;
                            var38 = /\d+\+?/;
                            var37 = var38.exec;
                            var33 = var12;
                            var33 = var37.bind(var38)(var33);
                            if (var33) {
                                _fun7353_ip = 6073;
                                continue _fun7353
                            }
                        case 6070:
                            var33 = var35;
                        case 6073:
                            var3 = var34 + var33;
                            var27 = var30;
                        case 6080:
                            var33 = var6;
                            var30 = 'Fennec';
                            if (!(var30 != var33)) {
                                _fun7353_ip = 7479;
                                continue _fun7353
                            }
                        case 6096:
                            var30 = var6;
                            if (!(var31 == var30)) {
                                _fun7353_ip = 6136;
                                continue _fun7353
                            }
                        case 6103:
                            var34 = /\b(?:Android|Firefox OS|KaiOS)\b/;
                            var33 = var34.test;
                            var30 = var5;
                            var30 = var33.bind(var34)(var30);
                            if (var30) {
                                _fun7353_ip = 7479;
                                continue _fun7353
                            }
                        case 6136:
                            var33 = var6;
                            var30 = 'Maxthon';
                            if (!(var30 == var33)) {
                                _fun7353_ip = 6158;
                                continue _fun7353
                            }
                        case 6149:
                            var30 = var3;
                            if (var30) {
                                _fun7353_ip = 7434;
                                continue _fun7353
                            }
                        case 6158:
                            var33 = /\bXbox\b/i;
                            var30 = var33.test;
                            var30 = var30.bind(var33)(var14);
                            if (var30) {
                                _fun7353_ip = 7354;
                                continue _fun7353
                            }
                        case 6188:
                            var34 = /^(?:Chrome|IE|Opera)$/;
                            var33 = var34.test;
                            var30 = var6;
                            var30 = var33.bind(var34)(var30);
                            if (var30) {
                                _fun7353_ip = 6257;
                                continue _fun7353
                            }
                        case 6218:
                            var30 = var6;
                            if (!var30) {
                                _fun7353_ip = 6303;
                                continue _fun7353
                            }
                        case 6224:
                            if (var14) {
                                _fun7353_ip = 6303;
                                continue _fun7353
                            }
                        case 6227:
                            var34 = /Browser|Mobi/;
                            var33 = var34.test;
                            var30 = var6;
                            var30 = var33.bind(var34)(var30);
                            if (var30) {
                                _fun7353_ip = 6303;
                                continue _fun7353
                            }
                        case 6257:
                            var33 = var5;
                            var30 = 'Windows CE';
                            if (!(var30 != var33)) {
                                _fun7353_ip = 7327;
                                continue _fun7353
                            }
                        case 6273:
                            var33 = /Mobi/i;
                            var30 = var33.test;
                            var30 = var30.bind(var33)(var10);
                            if (var30) {
                                _fun7353_ip = 7327;
                                continue _fun7353
                            }
                        case 6303:
                            var30 = var6;
                            if (!(var13 == var30)) {
                                _fun7353_ip = 6316;
                                continue _fun7353
                            }
                        case 6310:
                            if (var16) {
                                _fun7353_ip = 7249;
                                continue _fun7353
                            }
                        case 6316:
                            var33 = /\bBlackBerry\b/;
                            var30 = var33.test;
                            var30 = var30.bind(var33)(var14);
                            if (var30) {
                                _fun7353_ip = 6370;
                                continue _fun7353
                            }
                        case 6343:
                            var33 = /\bBB10\b/;
                            var30 = var33.test;
                            var30 = var30.bind(var33)(var10);
                            if (!var30) {
                                _fun7353_ip = 6464;
                                continue _fun7353
                            }
                        case 6370:
                            var30 = global;
                            var34 = var30.RegExp;
                            var35 = var14.replace;
                            var33 = / +/g;
                            var30 = ' *';
                            var33 = var35.bind(var14)(var33, var30);
                            var30 = '/([.\\d]+)';
                            var33 = var33 + var30;
                            var30 = 'i';
                            var33 = var34.bind(var8)(var33, var30);
                            var30 = var33.exec;
                            var30 = var30.bind(var33)(var10);
                            if (var30) {
                                _fun7353_ip = 6445;
                                continue _fun7353
                            }
                        case 6443:
                            var30 = 0;
                        case 6445:
                            var30 = var30[var21];
                            if (var30) {
                                _fun7353_ip = 6455;
                                continue _fun7353
                            }
                        case 6452:
                            var30 = var3;
                        case 6455:
                            var12 = var30;
                            if (var30) {
                                _fun7353_ip = 7137;
                                continue _fun7353
                            }
                        case 6464:
                            var33 = _closure2_slot9;
                            var30 = this;
                            var30 = var30 != var33;
                            if (!var30) {
                                _fun7353_ip = 6482;
                                continue _fun7353
                            }
                        case 6478:
                            var30 = var2 != var14;
                        case 6482:
                            if (!var30) {
                                _fun7353_ip = 6776;
                                continue _fun7353
                            }
                        case 6488:
                            var2 = var16;
                            if (!var16) {
                                _fun7353_ip = 6497;
                                continue _fun7353
                            }
                        case 6494:
                            var2 = var9;
                        case 6497:
                            if (var2) {
                                _fun7353_ip = 6557;
                                continue _fun7353
                            }
                        case 6500:
                            var34 = /Opera/;
                            var33 = var34.test;
                            var9 = var6;
                            var9 = var33.bind(var34)(var9);
                            if (!var9) {
                                _fun7353_ip = 6554;
                                continue _fun7353
                            }
                        case 6530:
                            var34 = /\b(?:MSIE|Firefox)\b/i;
                            var33 = var34.test;
                            var9 = var33.bind(var34)(var10);
                        case 6554:
                            var2 = var9;
                        case 6557:
                            if (var2) {
                                _fun7353_ip = 6600;
                                continue _fun7353
                            }
                        case 6560:
                            var9 = var6;
                            var9 = var31 == var9;
                            if (!var9) {
                                _fun7353_ip = 6597;
                                continue _fun7353
                            }
                        case 6570:
                            var34 = /\bOS X (?:\d+\.){2,}/;
                            var33 = var34.test;
                            var31 = var5;
                            var9 = var33.bind(var34)(var31);
                        case 6597:
                            var2 = var9;
                        case 6600:
                            if (var2) {
                                _fun7353_ip = 6773;
                                continue _fun7353
                            }
                        case 6606:
                            var9 = var6;
                            var9 = var13 == var9;
                            if (!var9) {
                                _fun7353_ip = 6770;
                                continue _fun7353
                            }
                        case 6619:
                            var13 = var5;
                            if (!var13) {
                                _fun7353_ip = 6655;
                                continue _fun7353
                            }
                        case 6625:
                            var34 = /^Win/;
                            var33 = var34.test;
                            var31 = var5;
                            var31 = var33.bind(var34)(var31);
                            var13 = !var31;
                        case 6655:
                            if (!var13) {
                                _fun7353_ip = 6675;
                                continue _fun7353
                            }
                        case 6658:
                            var33 = var3;
                            var31 = 5.5;
                            var13 = var33 > var31;
                        case 6675:
                            if (var13) {
                                _fun7353_ip = 6721;
                                continue _fun7353
                            }
                        case 6678:
                            var34 = /\bWindows XP\b/;
                            var33 = var34.test;
                            var31 = var5;
                            var31 = var33.bind(var34)(var31);
                            if (!var31) {
                                _fun7353_ip = 6718;
                                continue _fun7353
                            }
                        case 6708:
                            var34 = var3;
                            var33 = 8;
                            var31 = var34 > var33;
                        case 6718:
                            var13 = var31;
                        case 6721:
                            if (var13) {
                                _fun7353_ip = 6767;
                                continue _fun7353
                            }
                        case 6724:
                            var33 = var3;
                            var31 = 8;
                            var31 = var31 == var33;
                            if (!var31) {
                                _fun7353_ip = 6764;
                                continue _fun7353
                            }
                        case 6737:
                            var34 = /\bTrident\b/;
                            var33 = var34.test;
                            var33 = var33.bind(var34)(var10);
                            var31 = !var33;
                        case 6764:
                            var13 = var31;
                        case 6767:
                            var9 = var13;
                        case 6770:
                            var2 = var9;
                        case 6773:
                            var30 = var2;
                        case 6776:
                            if (!var30) {
                                _fun7353_ip = 6845;
                                continue _fun7353
                            }
                        case 6779:
                            var13 = _closure2_slot3;
                            var9 = var13.test;
                            var34 = _closure2_slot14;
                            var33 = var34.call;
                            var31 = _closure2_slot9;
                            var37 = var10.replace;
                            var35 = _closure2_slot3;
                            var2 = '';
                            var35 = var37.bind(var10)(var35, var2);
                            var2 = ';';
                            var2 = var35 + var2;
                            var2 = var33.bind(var34)(var31, var2);
                            var12 = var2;
                            var2 = var9.bind(var13)(var2);
                            var30 = !var2;
                        case 6845:
                            if (!var30) {
                                _fun7353_ip = 6856;
                                continue _fun7353
                            }
                        case 6848:
                            var2 = var12;
                            var30 = var2.name;
                        case 6856:
                            var9 = var24;
                            var2 = var14;
                            var13 = var11;
                            if (!var30) {
                                _fun7353_ip = 7494;
                                continue _fun7353
                            }
                        case 6871:
                            var30 = var12;
                            var33 = var30.name;
                            var31 = 'ing as ';
                            var31 = var31 + var33;
                            var33 = var30.version;
                            var12 = var33;
                            var30 = '';
                            if (!var33) {
                                _fun7353_ip = 6918;
                                continue _fun7353
                            }
                        case 6905:
                            var34 = var12;
                            var33 = ' ';
                            var30 = var33 + var34;
                        case 6918:
                            var12 = var31 + var30;
                            var33 = _closure2_slot3;
                            var31 = var33.test;
                            var30 = var6;
                            var30 = var31.bind(var33)(var30);
                            if (var30) {
                                _fun7353_ip = 7041;
                                continue _fun7353
                            }
                        case 6942:
                            var31 = var12;
                            var30 = 'mask';
                            var12 = var30 + var31;
                            var30 = var23;
                            if (!var36) {
                                _fun7353_ip = 6999;
                                continue _fun7353
                            }
                        case 6959:
                            var33 = _closure2_slot8;
                            var35 = var36.replace;
                            var34 = /([a-z])([A-Z])/g;
                            var31 = '$1 $2';
                            var31 = var35.bind(var36)(var34, var31);
                            var30 = var33.bind(var8)(var31);
                        case 6999:
                            var6 = var30;
                            var33 = /\bIE\b/;
                            var31 = var33.test;
                            var30 = var12;
                            var30 = var31.bind(var33)(var30);
                            if (!var30) {
                                _fun7353_ip = 7034;
                                continue _fun7353
                            }
                        case 7032:
                            var5 = null;
                        case 7034:
                            if (var16) {
                                _fun7353_ip = 7100;
                                continue _fun7353
                            }
                        case 7037:
                            var3 = null;
                            _fun7353_ip = 7100;
                            continue _fun7353;
                        case 7041:
                            var33 = /\bIE\b/;
                            var31 = var33.test;
                            var30 = var12;
                            var30 = var31.bind(var33)(var30);
                            if (!var30) {
                                _fun7353_ip = 7084;
                                continue _fun7353
                            }
                        case 7071:
                            var33 = var5;
                            var31 = 'Mac OS';
                            var30 = var31 == var33;
                        case 7084:
                            if (!var30) {
                                _fun7353_ip = 7089;
                                continue _fun7353
                            }
                        case 7087:
                            var5 = null;
                        case 7089:
                            var31 = var12;
                            var30 = 'identify';
                            var12 = var30 + var31;
                        case 7100:
                            var9 = ['Presto'];
                            var34 = var1;
                            var33 = var34.push;
                            var31 = var12;
                            var31 = var33.bind(var34)(var31);
                            var2 = var14;
                            var13 = var11;
                            _fun7353_ip = 7494;
                            continue _fun7353;
                        case 7137:
                            var31 = var12;
                            var30 = new Array(2);
                            var30[0] = var31;
                            var33 = /BB10/;
                            var31 = var33.test;
                            var31 = var31.bind(var33)(var10);
                            var30[1] = var31;
                            var12 = var30;
                            var33 = var30[var21];
                            var34 = 'Device Software';
                            var31 = var14;
                            var30 = var11;
                            if (!var33) {
                                _fun7353_ip = 7210;
                                continue _fun7353
                            }
                        case 7198:
                            _closure3_slot2 = var0;
                            var31 = null;
                            var30 = var32;
                            var34 = var30;
                        case 7210:
                            var33 = var12;
                            var32 = 0;
                            var33 = var33[var32];
                            var32 = ' ';
                            var32 = var34 + var32;
                            var5 = var32 + var33;
                            var3 = null;
                            var2 = var31;
                            var13 = var30;
                            var9 = var24;
                            _fun7353_ip = 7494;
                            continue _fun7353;
                        case 7249: // try_start_1
                            var28 = var28.external;
                            if (!(var0 === var28)) {
                                _fun7353_ip = 7279;
                                continue _fun7353
                            }
                        case 7259:
                            var31 = var1;
                            var30 = var31.unshift;
                            var28 = 'platform preview';
                            var28 = var30.bind(var31)(var28);
                        case 7279: // try_end1
                            var9 = var24;
                            var2 = var14;
                            var13 = var11;
                            _fun7353_ip = 7494;
                            continue _fun7353;
                        case 7293: // catch_target1
                            CatchBlockStart(arg_register = 28);
                            var31 = var1;
                            var30 = var31.unshift;
                            var28 = 'embedded';
                            var28 = var30.bind(var31)(var28);
                            var9 = var24;
                            var2 = var14;
                            var13 = var11;
                            _fun7353_ip = 7494;
                            continue _fun7353;
                        case 7327:
                            var30 = var6;
                            var28 = ' Mobile';
                            var6 = var30 + var28;
                            var9 = var24;
                            var2 = var14;
                            var13 = var11;
                            _fun7353_ip = 7494;
                            continue _fun7353;
                        case 7354:
                            if (!(var25 == var14)) {
                                _fun7353_ip = 7360;
                                continue _fun7353
                            }
                        case 7358:
                            var5 = null;
                        case 7360:
                            var25 = var25 == var14;
                            if (!var25) {
                                _fun7353_ip = 7391;
                                continue _fun7353
                            }
                        case 7367:
                            var30 = /\bIEMobile\b/;
                            var28 = var30.test;
                            var25 = var28.bind(var30)(var10);
                        case 7391:
                            var9 = var24;
                            var2 = var14;
                            var13 = var11;
                            if (!var25) {
                                _fun7353_ip = 7494;
                                continue _fun7353
                            }
                        case 7403:
                            var30 = var1;
                            var28 = var30.unshift;
                            var25 = 'mobile mode';
                            var25 = var28.bind(var30)(var25);
                            var9 = var24;
                            var2 = var14;
                            var13 = var11;
                            _fun7353_ip = 7494;
                            continue _fun7353;
                        case 7434:
                            var31 = var3;
                            var30 = var31.replace;
                            var28 = /\.[\d.]+/;
                            var25 = '.x';
                            var3 = var30.bind(var31)(var28, var25);
                            var9 = var24;
                            var2 = var14;
                            var13 = var11;
                            _fun7353_ip = 7494;
                            continue _fun7353;
                        case 7479:
                            var6 = 'Firefox Mobile';
                            var9 = var24;
                            var2 = var14;
                            var13 = var11;
                        case 7494:
                            var14 = /\bAppleWebKit\\/([\d.] + \ + ? ) / i;
                            var11 = var14.exec;
                            var11 = var11.bind(var14)(var10);
                            if (var11) {
                                _fun7353_ip = 7524;
                                continue _fun7353
                            }
                        case 7522:
                            var11 = 0;
                        case 7524:
                            var24 = var11[var21];
                            var12 = var24;
                            var11 = var27;
                            var14 = var9;
                            if (!var24) {
                                _fun7353_ip = 9183;
                                continue _fun7353
                            }
                        case 7543:
                            var25 = global;
                            var30 = var25.parseFloat;
                            var28 = var12;
                            var32 = var28.replace;
                            var31 = /\.(\d)$/;
                            var24 = '.0$1';
                            var24 = var32.bind(var28)(var31, var24);
                            var30 = var30.bind(var8)(var24);
                            var24 = new Array(2);
                            var24[0] = var30;
                            var24[1] = var28;
                            var12 = var24;
                            var24 = var6;
                            if (!(var22 == var24)) {
                                _fun7353_ip = 7643;
                                continue _fun7353
                            }
                        case 7612:
                            var24 = var12;
                            var28 = var24[var21];
                            var24 = var28.slice;
                            var31 = -1;
                            var28 = var24.bind(var28)(var31);
                            var24 = '+';
                            if (!(var24 != var28)) {
                                _fun7353_ip = 7724;
                                continue _fun7353
                            }
                        case 7643:
                            var28 = var3;
                            var24 = var12;
                            var24 = var24[var21];
                            var28 = var28 != var24;
                            if (!var28) {
                                _fun7353_ip = 7711;
                                continue _fun7353
                            }
                        case 7660:
                            var30 = var3;
                            var33 = var12;
                            var32 = /\bSafari\\/([\d.] + \ + ? ) / i;
                            var24 = var32.exec;
                            var24 = var24.bind(var32)(var10);
                            if (var24) {
                                _fun7353_ip = 7696;
                                continue _fun7353
                            }
                        case 7694:
                            var24 = 0;
                        case 7696:
                            var24 = var24[var21];
                            var32 = 2;
                            var33[var32] = var24;
                            var28 = var30 != var24;
                        case 7711:
                            var24 = var27;
                            if (var28) {
                                _fun7353_ip = 7754;
                                continue _fun7353
                            }
                        case 7717:
                            var3 = null;
                            var24 = var27;
                            _fun7353_ip = 7754;
                            continue _fun7353;
                        case 7724:
                            var6 = 'WebKit Nightly';
                            var27 = var12;
                            var30 = var27[var21];
                            var28 = var30.slice;
                            var27 = 0;
                            var3 = var28.bind(var30)(var27, var31);
                            var24 = 'alpha';
                        case 7754:
                            var28 = var12;
                            var30 = /\b(?:Headless)?Chrome\\/([\d.] + ) / i;
                            var27 = var30.exec;
                            var27 = var27.bind(var30)(var10);
                            if (var27) {
                                _fun7353_ip = 7787;
                                continue _fun7353
                            }
                        case 7785:
                            var27 = 0;
                        case 7787:
                            var27 = var27[var21];
                            var28[var21] = var27;
                            var27 = var12;
                            var28 = 0;
                            var27 = var27[var28];
                            var51 = 537.36;
                            var27 = var51 == var27;
                            if (!var27) {
                                _fun7353_ip = 7835;
                                continue _fun7353
                            }
                        case 7821:
                            var31 = var12;
                            var30 = 2;
                            var30 = var31[var30];
                            var27 = var51 == var30;
                        case 7835:
                            if (!var27) {
                                _fun7353_ip = 7863;
                                continue _fun7353
                            }
                        case 7838:
                            var31 = var25.parseFloat;
                            var30 = var12;
                            var30 = var30[var21];
                            var31 = var31.bind(var8)(var30);
                            var30 = 28;
                            var27 = var31 >= var30;
                        case 7863:
                            if (!var27) {
                                _fun7353_ip = 7870;
                                continue _fun7353
                            }
                        case 7866:
                            var27 = var29 == var9;
                        case 7870:
                            if (!var27) {
                                _fun7353_ip = 7883;
                                continue _fun7353
                            }
                        case 7873:
                            var9 = ['Blink'];
                        case 7883:
                            if (!var16) {
                                _fun7353_ip = 7905;
                                continue _fun7353
                            }
                        case 7886:
                            if (var26) {
                                _fun7353_ip = 8246;
                                continue _fun7353
                            }
                        case 7892:
                            var26 = var12;
                            var26 = var26[var21];
                            if (var26) {
                                _fun7353_ip = 8246;
                                continue _fun7353
                            }
                        case 7905:
                            if (!var9) {
                                _fun7353_ip = 7918;
                                continue _fun7353
                            }
                        case 7908:
                            var26 = 'like Safari';
                            var9[var21] = var26;
                        case 7918:
                            var26 = var12;
                            var27 = var26[var28];
                            var12 = var27;
                            var26 = 400;
                            var27 = var27 < var26;
                            var26 = var21;
                            if (var27) {
                                _fun7353_ip = 8238;
                                continue _fun7353
                            }
                        case 7947:
                            var29 = var12;
                            var27 = 500;
                            var29 = var29 < var27;
                            var27 = 2;
                            if (var29) {
                                _fun7353_ip = 8235;
                                continue _fun7353
                            }
                        case 7969:
                            var30 = var12;
                            var29 = 526;
                            var30 = var30 < var29;
                            var29 = 3;
                            if (var30) {
                                _fun7353_ip = 8232;
                                continue _fun7353
                            }
                        case 7991:
                            var31 = var12;
                            var30 = 533;
                            var31 = var31 < var30;
                            var30 = 4;
                            if (var31) {
                                _fun7353_ip = 8229;
                                continue _fun7353
                            }
                        case 8013:
                            var32 = var12;
                            var31 = 534;
                            var32 = var32 < var31;
                            var31 = '4+';
                            if (var32) {
                                _fun7353_ip = 8226;
                                continue _fun7353
                            }
                        case 8038:
                            var33 = var12;
                            var32 = 535;
                            var33 = var33 < var32;
                            var32 = 5;
                            if (var33) {
                                _fun7353_ip = 8223;
                                continue _fun7353
                            }
                        case 8060:
                            var34 = var12;
                            var33 = 537;
                            var34 = var34 < var33;
                            var33 = 6;
                            if (var34) {
                                _fun7353_ip = 8220;
                                continue _fun7353
                            }
                        case 8082:
                            var35 = var12;
                            var34 = 538;
                            var35 = var35 < var34;
                            var34 = 7;
                            if (var35) {
                                _fun7353_ip = 8217;
                                continue _fun7353
                            }
                        case 8101:
                            var36 = var12;
                            var35 = 601;
                            var36 = var36 < var35;
                            var35 = 8;
                            if (var36) {
                                _fun7353_ip = 8214;
                                continue _fun7353
                            }
                        case 8120:
                            var37 = var12;
                            var36 = 602;
                            var37 = var37 < var36;
                            var36 = 9;
                            if (var37) {
                                _fun7353_ip = 8211;
                                continue _fun7353
                            }
                        case 8139:
                            var38 = var12;
                            var37 = 604;
                            var38 = var38 < var37;
                            var37 = 10;
                            if (var38) {
                                _fun7353_ip = 8208;
                                continue _fun7353
                            }
                        case 8158:
                            var39 = var12;
                            var38 = 606;
                            var39 = var39 < var38;
                            var38 = 11;
                            if (var39) {
                                _fun7353_ip = 8205;
                                continue _fun7353
                            }
                        case 8177:
                            var40 = var12;
                            var39 = 608;
                            var40 = var40 < var39;
                            var39 = '12';
                            if (!var40) {
                                _fun7353_ip = 8202;
                                continue _fun7353
                            }
                        case 8199:
                            var39 = 12;
                        case 8202:
                            var38 = var39;
                        case 8205:
                            var37 = var38;
                        case 8208:
                            var36 = var37;
                        case 8211:
                            var35 = var36;
                        case 8214:
                            var34 = var35;
                        case 8217:
                            var33 = var34;
                        case 8220:
                            var32 = var33;
                        case 8223:
                            var31 = var32;
                        case 8226:
                            var30 = var31;
                        case 8229:
                            var29 = var30;
                        case 8232:
                            var27 = var29;
                        case 8235:
                            var26 = var27;
                        case 8238:
                            var12 = var26;
                            _fun7353_ip = 8978;
                            continue _fun7353;
                        case 8246:
                            if (!var9) {
                                _fun7353_ip = 8259;
                                continue _fun7353
                            }
                        case 8249:
                            var26 = 'like Chrome';
                            var9[var21] = var26;
                        case 8259:
                            var26 = var12;
                            var26 = var26[var21];
                            if (var26) {
                                _fun7353_ip = 8975;
                                continue _fun7353
                            }
                        case 8272:
                            var27 = var12;
                            var28 = var27[var28];
                            var12 = var28;
                            var27 = 530;
                            var28 = var28 < var27;
                            var27 = var21;
                            if (var28) {
                                _fun7353_ip = 8972;
                                continue _fun7353
                            }
                        case 8301:
                            var29 = var12;
                            var28 = 532;
                            var29 = var29 < var28;
                            var28 = 2;
                            if (var29) {
                                _fun7353_ip = 8969;
                                continue _fun7353
                            }
                        case 8323:
                            var30 = var12;
                            var29 = 532.05;
                            var30 = var30 < var29;
                            var29 = 3;
                            if (var30) {
                                _fun7353_ip = 8966;
                                continue _fun7353
                            }
                        case 8349:
                            var31 = var12;
                            var30 = 533;
                            var31 = var31 < var30;
                            var30 = 4;
                            if (var31) {
                                _fun7353_ip = 8963;
                                continue _fun7353
                            }
                        case 8371:
                            var32 = var12;
                            var31 = 534.03;
                            var32 = var32 < var31;
                            var31 = 5;
                            if (var32) {
                                _fun7353_ip = 8960;
                                continue _fun7353
                            }
                        case 8397:
                            var33 = var12;
                            var32 = 534.07;
                            var33 = var33 < var32;
                            var32 = 6;
                            if (var33) {
                                _fun7353_ip = 8957;
                                continue _fun7353
                            }
                        case 8423:
                            var34 = var12;
                            var33 = 534.1;
                            var34 = var34 < var33;
                            var33 = 7;
                            if (var34) {
                                _fun7353_ip = 8954;
                                continue _fun7353
                            }
                        case 8449:
                            var35 = var12;
                            var34 = 534.13;
                            var35 = var35 < var34;
                            var34 = 8;
                            if (var35) {
                                _fun7353_ip = 8951;
                                continue _fun7353
                            }
                        case 8475:
                            var36 = var12;
                            var35 = 534.16;
                            var36 = var36 < var35;
                            var35 = 9;
                            if (var36) {
                                _fun7353_ip = 8948;
                                continue _fun7353
                            }
                        case 8501:
                            var37 = var12;
                            var36 = 534.24;
                            var37 = var37 < var36;
                            var36 = 10;
                            if (var37) {
                                _fun7353_ip = 8945;
                                continue _fun7353
                            }
                        case 8527:
                            var38 = var12;
                            var37 = 534.3;
                            var38 = var38 < var37;
                            var37 = 11;
                            if (var38) {
                                _fun7353_ip = 8942;
                                continue _fun7353
                            }
                        case 8553:
                            var39 = var12;
                            var38 = 535.01;
                            var39 = var39 < var38;
                            var38 = 12;
                            if (var39) {
                                _fun7353_ip = 8939;
                                continue _fun7353
                            }
                        case 8579:
                            var40 = var12;
                            var39 = 535.02;
                            var40 = var40 < var39;
                            var39 = '13+';
                            if (var40) {
                                _fun7353_ip = 8936;
                                continue _fun7353
                            }
                        case 8608:
                            var41 = var12;
                            var40 = 535.07;
                            var41 = var41 < var40;
                            var40 = 15;
                            if (var41) {
                                _fun7353_ip = 8933;
                                continue _fun7353
                            }
                        case 8634:
                            var42 = var12;
                            var41 = 535.11;
                            var42 = var42 < var41;
                            var41 = 16;
                            if (var42) {
                                _fun7353_ip = 8930;
                                continue _fun7353
                            }
                        case 8660:
                            var43 = var12;
                            var42 = 535.19;
                            var43 = var43 < var42;
                            var42 = 17;
                            if (var43) {
                                _fun7353_ip = 8927;
                                continue _fun7353
                            }
                        case 8686:
                            var44 = var12;
                            var43 = 536.05;
                            var44 = var44 < var43;
                            var43 = 18;
                            if (var44) {
                                _fun7353_ip = 8924;
                                continue _fun7353
                            }
                        case 8712:
                            var45 = var12;
                            var44 = 536.1;
                            var45 = var45 < var44;
                            var44 = 19;
                            if (var45) {
                                _fun7353_ip = 8921;
                                continue _fun7353
                            }
                        case 8738:
                            var46 = var12;
                            var45 = 537.01;
                            var46 = var46 < var45;
                            var45 = 20;
                            if (var46) {
                                _fun7353_ip = 8918;
                                continue _fun7353
                            }
                        case 8764:
                            var47 = var12;
                            var46 = 537.11;
                            var47 = var47 < var46;
                            var46 = '21+';
                            if (var47) {
                                _fun7353_ip = 8915;
                                continue _fun7353
                            }
                        case 8793:
                            var48 = var12;
                            var47 = 537.13;
                            var48 = var48 < var47;
                            var47 = 23;
                            if (var48) {
                                _fun7353_ip = 8912;
                                continue _fun7353
                            }
                        case 8816:
                            var49 = var12;
                            var48 = 537.18;
                            var49 = var49 < var48;
                            var48 = 24;
                            if (var49) {
                                _fun7353_ip = 8909;
                                continue _fun7353
                            }
                        case 8839:
                            var50 = var12;
                            var49 = 537.24;
                            var50 = var50 < var49;
                            var49 = 25;
                            if (var50) {
                                _fun7353_ip = 8906;
                                continue _fun7353
                            }
                        case 8862:
                            var50 = var12;
                            var51 = var50 < var51;
                            var50 = 26;
                            if (var51) {
                                _fun7353_ip = 8903;
                                continue _fun7353
                            }
                        case 8875:
                            var51 = 'Blink';
                            var52 = var51 != var9;
                            var51 = '28';
                            if (!var52) {
                                _fun7353_ip = 8900;
                                continue _fun7353
                            }
                        case 8894:
                            var51 = '27';
                        case 8900:
                            var50 = var51;
                        case 8903:
                            var49 = var50;
                        case 8906:
                            var48 = var49;
                        case 8909:
                            var47 = var48;
                        case 8912:
                            var46 = var47;
                        case 8915:
                            var45 = var46;
                        case 8918:
                            var44 = var45;
                        case 8921:
                            var43 = var44;
                        case 8924:
                            var42 = var43;
                        case 8927:
                            var41 = var42;
                        case 8930:
                            var40 = var41;
                        case 8933:
                            var39 = var40;
                        case 8936:
                            var38 = var39;
                        case 8939:
                            var37 = var38;
                        case 8942:
                            var36 = var37;
                        case 8945:
                            var35 = var36;
                        case 8948:
                            var34 = var35;
                        case 8951:
                            var33 = var34;
                        case 8954:
                            var32 = var33;
                        case 8957:
                            var31 = var32;
                        case 8960:
                            var30 = var31;
                        case 8963:
                            var29 = var30;
                        case 8966:
                            var28 = var29;
                        case 8969:
                            var27 = var28;
                        case 8972:
                            var26 = var27;
                        case 8975:
                            var12 = var26;
                        case 8978:
                            if (!var9) {
                                _fun7353_ip = 9071;
                                continue _fun7353
                            }
                        case 8981:
                            var27 = var9[var21];
                            var28 = var12;
                            var26 = '.x';
                            var30 = 'number';
                            var29 = typeof var28;
                            if (!(var30 !== var29)) {
                                _fun7353_ip = 9046;
                                continue _fun7353
                            }
                        case 9005:
                            var31 = /[.+]/;
                            var30 = var31.test;
                            var29 = var12;
                            var30 = var30.bind(var31)(var29);
                            var29 = '+';
                            if (!var30) {
                                _fun7353_ip = 9043;
                                continue _fun7353
                            }
                        case 9039:
                            var29 = '';
                        case 9043:
                            var26 = var29;
                        case 9046:
                            var28 = var28 + var26;
                            var12 = var28;
                            var26 = ' ';
                            var26 = var26 + var28;
                            var26 = var27 + var26;
                            var9[var21] = var26;
                        case 9071:
                            var26 = var6;
                            if (!(var22 == var26)) {
                                _fun7353_ip = 9105;
                                continue _fun7353
                            }
                        case 9078:
                            var26 = var3;
                            if (!var26) {
                                _fun7353_ip = 9174;
                                continue _fun7353
                            }
                        case 9084:
                            var26 = var25.parseInt;
                            var25 = var3;
                            var26 = var26.bind(var8)(var25);
                            var25 = 45;
                            if (!(!(var26 > var25))) {
                                _fun7353_ip = 9174;
                                continue _fun7353
                            }
                        case 9105:
                            var25 = var6;
                            var25 = var15 == var25;
                            if (!var25) {
                                _fun7353_ip = 9139;
                                continue _fun7353
                            }
                        case 9115:
                            var27 = /\bHeadlessChrome/i;
                            var26 = var27.test;
                            var25 = var26.bind(var27)(var10);
                        case 9139:
                            var11 = var24;
                            var14 = var9;
                            if (!var25) {
                                _fun7353_ip = 9183;
                                continue _fun7353
                            }
                        case 9148:
                            var27 = var1;
                            var26 = var27.unshift;
                            var25 = 'headless';
                            var25 = var26.bind(var27)(var25);
                            var11 = var24;
                            var14 = var9;
                            _fun7353_ip = 9183;
                            continue _fun7353;
                        case 9174:
                            var3 = var12;
                            var11 = var24;
                            var14 = var9;
                        case 9183:
                            var9 = var6;
                            if (!(var23 == var9)) {
                                _fun7353_ip = 9227;
                                continue _fun7353
                            }
                        case 9190:
                            var24 = /\bzbov|zvav$/;
                            var23 = var24.exec;
                            var9 = var5;
                            var9 = var23.bind(var24)(var9);
                            var12 = var9;
                            if (var9) {
                                _fun7353_ip = 9410;
                                continue _fun7353
                            }
                        case 9227:
                            var9 = var6;
                            if (!(var22 == var9)) {
                                _fun7353_ip = 9272;
                                continue _fun7353
                            }
                        case 9234:
                            var24 = /\bChrome\b/;
                            var23 = var24.exec;
                            var9 = var14;
                            if (!var14) {
                                _fun7353_ip = 9264;
                                continue _fun7353
                            }
                        case 9260:
                            var9 = var14[var21];
                        case 9264:
                            var9 = var23.bind(var24)(var9);
                            if (var9) {
                                _fun7353_ip = 9330;
                                continue _fun7353
                            }
                        case 9272:
                            var24 = /\bSRWare Iron\b/;
                            var23 = var24.test;
                            var9 = var6;
                            var23 = var23.bind(var24)(var9);
                            if (!var23) {
                                _fun7353_ip = 9308;
                                continue _fun7353
                            }
                        case 9302:
                            var9 = var3;
                            var23 = !var9;
                        case 9308:
                            var9 = var13;
                            if (!var23) {
                                _fun7353_ip = 9541;
                                continue _fun7353
                            }
                        case 9317:
                            var3 = var19.bind(var8)(var15);
                            var9 = var13;
                            _fun7353_ip = 9541;
                            continue _fun7353;
                        case 9330:
                            var24 = var1;
                            var23 = var24.unshift;
                            var19 = 'desktop mode';
                            var19 = var23.bind(var24)(var19);
                            var6 = var17;
                            var3 = null;
                            var23 = /\bOS X\b/;
                            var19 = var23.test;
                            var17 = var5;
                            var17 = var19.bind(var23)(var17);
                            if (var17) {
                                _fun7353_ip = 9395;
                                continue _fun7353
                            }
                        case 9385:
                            var5 = null;
                            var9 = var13;
                            _fun7353_ip = 9541;
                            continue _fun7353;
                        case 9395:
                            var5 = 'iOS 4.3+';
                            var9 = 'Apple';
                            _fun7353_ip = 9541;
                            continue _fun7353;
                        case 9410:
                            var19 = var6;
                            var17 = ' ';
                            var6 = var19 + var17;
                            var23 = var1;
                            var19 = var23.unshift;
                            var17 = 'desktop mode';
                            var17 = var19.bind(var23)(var17);
                            var19 = var12;
                            var17 = 'zvav';
                            if (!(var17 != var19)) {
                                _fun7353_ip = 9471;
                                continue _fun7353
                            }
                        case 9456:
                            var19 = var6;
                            var17 = 'Mobile';
                            var6 = var19 + var17;
                            _fun7353_ip = 9486;
                            continue _fun7353;
                        case 9471:
                            var19 = var6;
                            var17 = 'Mini';
                            var6 = var19 + var17;
                            var3 = null;
                        case 9486:
                            var24 = var5;
                            var23 = var24.replace;
                            var17 = global;
                            var19 = var17.RegExp;
                            var25 = var12;
                            var17 = ' *';
                            var25 = var17 + var25;
                            var17 = '$';
                            var17 = var25 + var17;
                            var19 = var19.bind(var8)(var17);
                            var17 = '';
                            var5 = var23.bind(var24)(var19, var17);
                            var9 = var13;
                        case 9541:
                            var13 = var3;
                            if (!var13) {
                                _fun7353_ip = 9598;
                                continue _fun7353
                            }
                        case 9547:
                            var23 = var3;
                            var19 = var23.indexOf;
                            var25 = /[\d.]+$/;
                            var24 = var25.exec;
                            var17 = var5;
                            var17 = var24.bind(var25)(var17);
                            var12 = var17;
                            var19 = var19.bind(var23)(var17);
                            var17 = 0;
                            var13 = var17 == var19;
                        case 9598:
                            if (!var13) {
                                _fun7353_ip = 9641;
                                continue _fun7353
                            }
                        case 9601:
                            var19 = var10.indexOf;
                            var23 = var12;
                            var17 = '/';
                            var23 = var17 + var23;
                            var17 = '-';
                            var17 = var23 + var17;
                            var19 = var19.bind(var10)(var17);
                            var17 = -1;
                            var13 = var19 > var17;
                        case 9641:
                            if (!var13) {
                                _fun7353_ip = 9674;
                                continue _fun7353
                            }
                        case 9644:
                            var17 = _closure2_slot13;
                            var24 = var5;
                            var23 = var24.replace;
                            var19 = var12;
                            var13 = '';
                            var13 = var23.bind(var24)(var19, var13);
                            var5 = var17.bind(var8)(var13);
                        case 9674:
                            var13 = var5;
                            if (!var13) {
                                _fun7353_ip = 9707;
                                continue _fun7353
                            }
                        case 9680:
                            var23 = var5;
                            var19 = var23.indexOf;
                            var17 = var6;
                            var19 = var19.bind(var23)(var17);
                            var17 = -1;
                            var13 = var17 != var19;
                        case 9707:
                            if (!var13) {
                                _fun7353_ip = 9752;
                                continue _fun7353
                            }
                        case 9710:
                            var17 = global;
                            var19 = var17.RegExp;
                            var23 = var6;
                            var17 = ' OS';
                            var17 = var23 + var17;
                            var23 = var19.bind(var8)(var17);
                            var19 = var23.test;
                            var17 = var5;
                            var17 = var19.bind(var23)(var17);
                            var13 = !var17;
                        case 9752:
                            if (!var13) {
                                _fun7353_ip = 9812;
                                continue _fun7353
                            }
                        case 9755:
                            var23 = var5;
                            var19 = var23.replace;
                            var13 = global;
                            var17 = var13.RegExp;
                            var24 = _closure2_slot11;
                            var13 = var6;
                            var13 = var24.bind(var8)(var13);
                            var24 = ' *';
                            var13 = var24 + var13;
                            var13 = var13 + var24;
                            var17 = var17.bind(var8)(var13);
                            var13 = '';
                            var5 = var19.bind(var23)(var17, var13);
                        case 9812:
                            var13 = var14;
                            if (!var14) {
                                _fun7353_ip = 9848;
                                continue _fun7353
                            }
                        case 9818:
                            var23 = /\b(?:Avant|Nook)\b/;
                            var19 = var23.test;
                            var17 = var6;
                            var17 = var19.bind(var23)(var17);
                            var13 = !var17;
                        case 9848:
                            if (!var13) {
                                _fun7353_ip = 9998;
                                continue _fun7353
                            }
                        case 9854:
                            var23 = /Browser|Lunascape|Maxthon/;
                            var19 = var23.test;
                            var17 = var6;
                            var17 = var19.bind(var23)(var17);
                            if (var17) {
                                _fun7353_ip = 9955;
                                continue _fun7353
                            }
                        case 9884:
                            var19 = var6;
                            var19 = var22 != var19;
                            if (!var19) {
                                _fun7353_ip = 9921;
                                continue _fun7353
                            }
                        case 9894:
                            var24 = /^iOS/;
                            var23 = var24.test;
                            var22 = var5;
                            var19 = var23.bind(var24)(var22);
                        case 9921:
                            if (!var19) {
                                _fun7353_ip = 9952;
                                continue _fun7353
                            }
                        case 9924:
                            var24 = /\bSafari\b/;
                            var23 = var24.test;
                            var22 = var14[var21];
                            var19 = var23.bind(var24)(var22);
                        case 9952:
                            var17 = var19;
                        case 9955:
                            if (var17) {
                                _fun7353_ip = 9995;
                                continue _fun7353
                            }
                        case 9958:
                            var23 = /^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|SRWare Iron|Vivaldi|Web)/;
                            var22 = var23.test;
                            var19 = var6;
                            var19 = var22.bind(var23)(var19);
                            if (!var19) {
                                _fun7353_ip = 9992;
                                continue _fun7353
                            }
                        case 9988:
                            var19 = var14[var21];
                        case 9992:
                            var17 = var19;
                        case 9995:
                            var13 = var17;
                        case 9998:
                            if (!var13) {
                                _fun7353_ip = 10020;
                                continue _fun7353
                            }
                        case 10001:
                            var17 = var14.length;
                            var17 = var17 - var21;
                            var17 = var14[var17];
                            var12 = var17;
                            var13 = var17;
                        case 10020:
                            if (!var13) {
                                _fun7353_ip = 10039;
                                continue _fun7353
                            }
                        case 10023:
                            var19 = var1;
                            var17 = var19.push;
                            var13 = var12;
                            var13 = var17.bind(var19)(var13);
                        case 10039:
                            var13 = var1;
                            var13 = var13.length;
                            if (!var13) {
                                _fun7353_ip = 10096;
                                continue _fun7353
                            }
                        case 10050:
                            var19 = var1;
                            var17 = var19.join;
                            var13 = '; ';
                            var17 = var17.bind(var19)(var13);
                            var13 = '(';
                            var19 = var13 + var17;
                            var13 = new Array(1);
                            var17 = ')';
                            var17 = var19 + var17;
                            var13[0] = var17;
                            var1 = var13;
                        case 10096:
                            var13 = var9;
                            if (!var13) {
                                _fun7353_ip = 10105;
                                continue _fun7353
                            }
                        case 10102:
                            var13 = var2;
                        case 10105:
                            if (!var13) {
                                _fun7353_ip = 10125;
                                continue _fun7353
                            }
                        case 10108:
                            var17 = var2.indexOf;
                            var19 = var17.bind(var2)(var9);
                            var17 = 0;
                            var13 = var19 < var17;
                        case 10125:
                            if (!var13) {
                                _fun7353_ip = 10151;
                                continue _fun7353
                            }
                        case 10128:
                            var19 = var1;
                            var17 = var19.push;
                            var13 = 'on ';
                            var13 = var13 + var9;
                            var13 = var17.bind(var19)(var13);
                        case 10151:
                            if (!var2) {
                                _fun7353_ip = 10221;
                                continue _fun7353
                            }
                        case 10154:
                            var19 = var1;
                            var17 = var19.push;
                            var23 = /^on /;
                            var22 = var23.test;
                            var13 = var19.length;
                            var13 = var13 - var21;
                            var13 = var19[var13];
                            var22 = var22.bind(var23)(var13);
                            var13 = 'on ';
                            if (!var22) {
                                _fun7353_ip = 10212;
                                continue _fun7353
                            }
                        case 10208:
                            var13 = '';
                        case 10212:
                            var13 = var13 + var2;
                            var13 = var17.bind(var19)(var13);
                        case 10221:
                            var13 = var5;
                            if (!var13) {
                                _fun7353_ip = 10408;
                                continue _fun7353
                            }
                        case 10230:
                            var19 = / ([\d.+]+)$/;
                            var17 = var19.exec;
                            var13 = var5;
                            var13 = var17.bind(var19)(var13);
                            var12 = var13;
                            var17 = var13;
                            if (!var17) {
                                _fun7353_ip = 10316;
                                continue _fun7353
                            }
                        case 10267:
                            var22 = var5;
                            var19 = var22.charAt;
                            var23 = var22.length;
                            var24 = var12;
                            var13 = 0;
                            var13 = var24[var13];
                            var13 = var13.length;
                            var13 = var23 - var13;
                            var13 = var13 - var21;
                            var19 = var19.bind(var22)(var13);
                            var13 = '/';
                            var17 = var13 == var19;
                        case 10316:
                            var _closure3_slot1 = var17;
                            var13 = {};
                            var19 = 32;
                            var13.architecture = var19;
                            var19 = var12;
                            if (!var19) {
                                _fun7353_ip = 10368;
                                continue _fun7353
                            }
                        case 10336:
                            if (var17) {
                                _fun7353_ip = 10368;
                                continue _fun7353
                            }
                        case 10339:
                            var23 = var5;
                            var22 = var23.replace;
                            var19 = var12;
                            var17 = 0;
                            var19 = var19[var17];
                            var17 = '';
                            var17 = var22.bind(var23)(var19, var17);
                            _fun7353_ip = 10371;
                            continue _fun7353;
                        case 10368:
                            var17 = var5;
                        case 10371:
                            var13.family = var17;
                            var19 = var12;
                            var17 = null;
                            if (!var19) {
                                _fun7353_ip = 10391;
                                continue _fun7353
                            }
                        case 10384:
                            var19 = var12;
                            var17 = var19[var21];
                        case 10391:
                            var13.version = var17;
                            var17 = function() { // Original name: toString, environment: var4
                                _fun7366: for (var _fun7366_ip = 0;;) switch (_fun7366_ip) {
                                    case 0:
                                        var2 = this;
                                        var5 = var2.version;
                                        var3 = var2.family;
                                        var1 = '';
                                        var0 = var1;
                                        if (!var5) {
                                            _fun7366_ip = 48;
                                            continue _fun7366
                                        }
                                    case 25:
                                        var4 = _closure3_slot1;
                                        var0 = var1;
                                        if (var4) {
                                            _fun7366_ip = 48;
                                            continue _fun7366
                                        }
                                    case 38:
                                        var4 = ' ';
                                        var0 = var4 + var5;
                                    case 48:
                                        var0 = var3 + var0;
                                        var3 = var2.architecture;
                                        var2 = 64;
                                        var2 = var2 == var3;
                                        if (!var2) {
                                            _fun7366_ip = 74;
                                            continue _fun7366
                                        }
                                    case 68:
                                        var1 = ' 64-bit';
                                    case 74:
                                        var0 = var0 + var1;
                                        return var0;
                                }
                            };
                            var13.toString = var17;
                            var5 = var13;
                        case 10408:
                            var17 = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i;
                            var13 = var17.exec;
                            var13 = var13.bind(var17)(var18);
                            var12 = var13;
                            if (!var13) {
                                _fun7353_ip = 10679;
                                continue _fun7353
                            }
                        case 10442:
                            var17 = /\bi686\b/i;
                            var13 = var17.test;
                            var13 = var13.bind(var17)(var18);
                            if (var13) {
                                _fun7353_ip = 10679;
                                continue _fun7353
                            }
                        case 10472:
                            var13 = var5;
                            if (!var13) {
                                _fun7353_ip = 10543;
                                continue _fun7353
                            }
                        case 10478:
                            var13 = var5;
                            var17 = 64;
                            var13.architecture = var17;
                            var19 = var13.family;
                            var18 = var19.replace;
                            var17 = global;
                            var17 = var17.RegExp;
                            var21 = var12;
                            var12 = ' *';
                            var12 = var12 + var21;
                            var17 = var17.bind(var8)(var12);
                            var12 = '';
                            var12 = var18.bind(var19)(var17, var12);
                            var13.family = var12;
                        case 10543:
                            var12 = var6;
                            if (!var12) {
                                _fun7353_ip = 10654;
                                continue _fun7353
                            }
                        case 10549:
                            var17 = /\bWOW64\b/i;
                            var13 = var17.test;
                            var13 = var13.bind(var17)(var10);
                            if (var13) {
                                _fun7353_ip = 10651;
                                continue _fun7353
                            }
                        case 10576:
                            if (!var16) {
                                _fun7353_ip = 10618;
                                continue _fun7353
                            }
                        case 10579:
                            var19 = /\w(?:86|32)$/;
                            var18 = var19.test;
                            var17 = var20.cpuClass;
                            if (var17) {
                                _fun7353_ip = 10613;
                                continue _fun7353
                            }
                        case 10607:
                            var17 = var20.platform;
                        case 10613:
                            var16 = var18.bind(var19)(var17);
                        case 10618:
                            if (!var16) {
                                _fun7353_ip = 10648;
                                continue _fun7353
                            }
                        case 10621:
                            var18 = /\bWin64; x64\b/i;
                            var17 = var18.test;
                            var17 = var17.bind(var18)(var10);
                            var16 = !var17;
                        case 10648:
                            var13 = var16;
                        case 10651:
                            var12 = var13;
                        case 10654:
                            if (!var12) {
                                _fun7353_ip = 10769;
                                continue _fun7353
                            }
                        case 10657:
                            var16 = var1;
                            var13 = var16.unshift;
                            var12 = '32-bit';
                            var12 = var13.bind(var16)(var12);
                            _fun7353_ip = 10769;
                            continue _fun7353;
                        case 10679:
                            var12 = var5;
                            if (!var12) {
                                _fun7353_ip = 10718;
                                continue _fun7353
                            }
                        case 10685:
                            var17 = /^OS X/;
                            var16 = var17.test;
                            var13 = var5;
                            var13 = var13.family;
                            var12 = var16.bind(var17)(var13);
                        case 10718:
                            if (!var12) {
                                _fun7353_ip = 10728;
                                continue _fun7353
                            }
                        case 10721:
                            var13 = var6;
                            var12 = var15 == var13;
                        case 10728:
                            if (!var12) {
                                _fun7353_ip = 10754;
                                continue _fun7353
                            }
                        case 10731:
                            var13 = global;
                            var15 = var13.parseFloat;
                            var13 = var3;
                            var15 = var15.bind(var8)(var13);
                            var13 = 39;
                            var12 = var15 >= var13;
                        case 10754:
                            if (!var12) {
                                _fun7353_ip = 10769;
                                continue _fun7353
                            }
                        case 10757:
                            var13 = var5;
                            var12 = 64;
                            var13.architecture = var12;
                        case 10769:
                            if (var10) {
                                _fun7353_ip = 10778;
                                continue _fun7353
                            }
                        case 10772:
                            _closure3_slot0 = var0;
                            var10 = null;
                        case 10778:
                            var0 = {};
                            var0.description = var10;
                            var12 = var14;
                            if (!var12) {
                                _fun7353_ip = 10798;
                                continue _fun7353
                            }
                        case 10792:
                            var13 = 0;
                            var12 = var14[var13];
                        case 10798:
                            var0.layout = var12;
                            var0.manufacturer = var9;
                            var9 = var6;
                            var0.name = var9;
                            var0.prerelease = var11;
                            var0.product = var2;
                            var0.ua = var10;
                            if (!var9) {
                                _fun7353_ip = 10843;
                                continue _fun7353
                            }
                        case 10840:
                            var9 = var3;
                        case 10843:
                            var0.version = var9;
                            var9 = var5;
                            if (var9) {
                                _fun7353_ip = 10877;
                                continue _fun7353
                            }
                        case 10855:
                            var10 = {
                                'architecture': null,
                                'family': null,
                                'version': null
                            };
                            var11 = function() { // Original name: toString, environment: var4
                                var0 = 'null';
                                return var0;
                            };
                            var10.toString = var11;
                            var9 = var10;
                        case 10877:
                            var0.os = var9;
                            var7 = _closure2_slot14;
                            var0.parse = var7;
                            var4 = function() { // Original name: toStringPlatform, environment: var4
                                _fun7368: for (var _fun7368_ip = 0;;) switch (_fun7368_ip) {
                                    case 0:
                                        var0 = this;
                                        var0 = var0.description;
                                        if (var0) {
                                            _fun7368_ip = 15;
                                            continue _fun7368
                                        }
                                    case 11:
                                        var0 = '';
                                    case 15:
                                        return var0;
                                }
                            };
                            var0.toString = var4;
                            var4 = var0.version;
                            if (!var4) {
                                _fun7353_ip = 10927;
                                continue _fun7353
                            }
                        case 10913:
                            var7 = var1;
                            var4 = var7.unshift;
                            var3 = var4.bind(var7)(var3);
                        case 10927:
                            var3 = var0.name;
                            if (!var3) {
                                _fun7353_ip = 10952;
                                continue _fun7353
                            }
                        case 10935:
                            var7 = var1;
                            var4 = var7.unshift;
                            var3 = var6;
                            var3 = var4.bind(var7)(var3);
                        case 10952:
                            var3 = var5;
                            if (!var3) {
                                _fun7353_ip = 10961;
                                continue _fun7353
                            }
                        case 10958:
                            var3 = var6;
                        case 10961:
                            if (!var3) {
                                _fun7353_ip = 11045;
                                continue _fun7353
                            }
                        case 10964:
                            var7 = var5;
                            var4 = global;
                            var4 = var4.String;
                            var8 = var4.bind(var8)(var7);
                            var4 = var8.split;
                            var10 = ' ';
                            var4 = var4.bind(var8)(var10);
                            var8 = 0;
                            var4 = var4[var8];
                            var4 = var7 != var4;
                            if (var4) {
                                _fun7353_ip = 11042;
                                continue _fun7353
                            }
                        case 11009:
                            var7 = var5;
                            var9 = var6;
                            var6 = var9.split;
                            var6 = var6.bind(var9)(var10);
                            var6 = var6[var8];
                            var6 = var7 != var6;
                            if (!var6) {
                                _fun7353_ip = 11039;
                                continue _fun7353
                            }
                        case 11036:
                            var6 = !var2;
                        case 11039:
                            var4 = var6;
                        case 11042:
                            var3 = var4;
                        case 11045:
                            if (!var3) {
                                _fun7353_ip = 11095;
                                continue _fun7353
                            }
                        case 11048:
                            var4 = var1;
                            var3 = var4.push;
                            var6 = var5;
                            if (var2) {
                                _fun7353_ip = 11074;
                                continue _fun7353
                            }
                        case 11062:
                            var2 = 'on ';
                            var2 = var2 + var6;
                            _fun7353_ip = 11090;
                            continue _fun7353;
                        case 11074:
                            var5 = '(';
                            var6 = var5 + var6;
                            var5 = ')';
                            var2 = var6 + var5;
                        case 11090:
                            var2 = var3.bind(var4)(var2);
                        case 11095:
                            var2 = var1;
                            var2 = var2.length;
                            if (!var2) {
                                _fun7353_ip = 11131;
                                continue _fun7353
                            }
                        case 11106:
                            var3 = var1;
                            var2 = var3.join;
                            var1 = ' ';
                            var1 = var2.bind(var3)(var1);
                            var0.description = var1;
                        case 11131:
                            return var0;
                    }
                };
                var _closure2_slot14 = var3;
                var0 = undefined;
                var3 = var3.bind(var0)();
                var _closure2_slot6 = var3;
                var8 = var2.define;
                var9 = 'function';
                var8 = typeof var8;
                if (!(var9 === var8)) {
                    _fun7344_ip = 422;
                    continue _fun7344
                }
            case 384:
                var8 = var2.define;
                var8 = var8.amd;
                var9 = 'object';
                var8 = typeof var8;
                if (!(var9 === var8)) {
                    _fun7344_ip = 422;
                    continue _fun7344
                }
            case 407:
                var8 = var2.define;
                var8 = var8.amd;
                if (var8) {
                    _fun7344_ip = 449;
                    continue _fun7344
                }
            case 422:
                if (!var7) {
                    _fun7344_ip = 428;
                    continue _fun7344
                }
            case 425:
                if (var5) {
                    _fun7344_ip = 436;
                    continue _fun7344
                }
            case 428:
                var4.platform = var3;
                _fun7344_ip = 471;
                continue _fun7344;
            case 436:
                var5 = function(arg0, arg1) { // Environment: var1
                    var2 = _closure2_slot1;
                    var1 = arg0;
                    var0 = arg1;
                    var2[var0] = var1;
                    var0 = undefined;
                    return var0;
                };
                var5 = var6.bind(var0)(var3, var5);
                _fun7344_ip = 471;
                continue _fun7344;
            case 449:
                var4.platform = var3;
                var2 = var2.define;
                var1 = function() { // Environment: var1
                    var0 = _closure2_slot6;
                    return var0;
                };
                var1 = var2.bind(var0)(var1);
            case 471:
                return var0;
        }
    };
    var1 = var2.call;
    var0 = this;
    var0 = var1.bind(var2)(var0);
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);