// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = global;
    var _closure1_slot0 = var1;
    var1 = module;
    var _closure1_slot1 = var1;
    var1 = exports;
    var _closure1_slot2 = var1;
    var2 = function() { // Environment: var0
        _fun29222: for (var _fun29222_ip = 0;;) switch (_fun29222_ip) {
            case 0:
                var0 = this;
                var2 = function arg0() {
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
                var2 = function arg0() {
                    _fun29224: for (var _fun29224_ip = 0;;) switch (_fun29224_ip) {
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
                                _fun29224_ip = 56;
                                continue _fun29224
                            }
                        case 47:
                            var1 = _closure2_slot7;
                            var0 = var1.bind(var3)(var2);
                        case 56:
                            return var0;
                    }
                };
                var _closure2_slot8 = var2;
                var6 = function arg0, arg1() {
                    _fun29225: for (var _fun29225_ip = 0;;) switch (_fun29225_ip) {
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
                                        _fun29225_ip = 22;
                                        continue _fun29225
                                    }
                                    case 52: var9 = var8[var10];
                                    var9 = var7.bind(var0)(var9, var10, var8);
                                    _fun29225_ip = 22;
                                    continue _fun29225;
                                }
                        case 65:
                            return var0;
                    }
                };
                var _closure2_slot9 = var6;
                var2 = function arg0() {
                    _fun29226: for (var _fun29226_ip = 0;;) switch (_fun29226_ip) {
                        case 0:
                            var3 = arg0;
                            var0 = null;
                            if (!(var0 != var3)) {
                                _fun29226_ip = 48;
                                continue _fun29226
                            }
                        case 9:
                            var1 = _closure2_slot5;
                            var0 = var1.call;
                            var4 = var0.bind(var1)(var3);
                            var2 = var4.slice;
                            var1 = 8;
                            var0 = -1;
                            var0 = var2.bind(var4)(var1, var0);
                            _fun29226_ip = 62;
                            continue _fun29226;
                        case 48:
                            var2 = _closure2_slot7;
                            var1 = undefined;
                            var0 = var2.bind(var1)(var3);
                        case 62:
                            return var0;
                    }
                };
                var _closure2_slot10 = var2;
                var2 = function arg0() {
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
                var2 = function arg0, arg1() {
                    _fun29228: for (var _fun29228_ip = 0;;) switch (_fun29228_ip) {
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
                                _fun29228_ip = 39;
                                continue _fun29228
                            }
                        case 34:
                            var2 = var5.length;
                        case 39:
                            var6 = 'number';
                            var1 = typeof var2;
                            if (!(var6 === var1)) {
                                _fun29228_ip = 71;
                                continue _fun29228
                            }
                        case 50:
                            var1 = -1;
                            if (!(var2 > var1)) {
                                _fun29228_ip = 71;
                                continue _fun29228
                            }
                        case 60:
                            var1 = _closure2_slot2;
                            if (!(!(var2 <= var1))) {
                                _fun29228_ip = 88;
                                continue _fun29228
                            }
                        case 71:
                            var6 = _closure2_slot9;
                            var1 = undefined;
                            var1 = var6.bind(var1)(var5, var4);
                            _fun29228_ip = 117;
                            continue _fun29228;
                        case 88:
                            var6 = var3 < var2;
                            var1 = undefined;
                            var3 = 0;
                            if (!var6) {
                                _fun29228_ip = 117;
                                continue _fun29228
                            }
                        case 99:
                            var6 = var5[var3];
                            var6 = var4.bind(var1)(var6, var3, var5);
                            var3 = var3 + 1;
                            if (var3 < var2) {
                                _fun29228_ip = 99;
                                continue _fun29228
                            }
                        case 117:
                            var0 = _closure3_slot2;
                            return var0;
                    }
                };
                var _closure2_slot12 = var2;
                var2 = function arg0() {
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
                    _fun29222_ip = 101;
                    continue _fun29222
                }
            case 95:
                var4 = var2.window;
            case 101:
                if (var4) {
                    _fun29222_ip = 107;
                    continue _fun29222
                }
            case 104:
                var4 = var0;
            case 107:
                var _closure2_slot0 = var4;
                var0 = _closure1_slot2;
                var0 = typeof var0;
                var7 = var5[var0];
                if (!var7) {
                    _fun29222_ip = 132;
                    continue _fun29222
                }
            case 128:
                var7 = _closure1_slot2;
            case 132:
                var _closure2_slot1 = var7;
                var0 = _closure1_slot1;
                var0 = typeof var0;
                var5 = var5[var0];
                if (!var5) {
                    _fun29222_ip = 154;
                    continue _fun29222
                }
            case 150:
                var5 = _closure1_slot1;
            case 154:
                if (!var5) {
                    _fun29222_ip = 170;
                    continue _fun29222
                }
            case 157:
                var0 = _closure1_slot1;
                var0 = var0.nodeType;
                var5 = !var0;
            case 170:
                if (!var5) {
                    _fun29222_ip = 177;
                    continue _fun29222
                }
            case 173:
                var5 = _closure1_slot1;
            case 177:
                var0 = var7;
                if (!var0) {
                    _fun29222_ip = 186;
                    continue _fun29222
                }
            case 183:
                var0 = var5;
            case 186:
                if (!var0) {
                    _fun29222_ip = 204;
                    continue _fun29222
                }
            case 189:
                var8 = _closure1_slot0;
                var9 = 'object';
                var8 = typeof var8;
                var0 = var9 === var8;
            case 204:
                if (!var0) {
                    _fun29222_ip = 211;
                    continue _fun29222
                }
            case 207:
                var0 = _closure1_slot0;
            case 211:
                var3 = !var0;
                if (var3) {
                    _fun29222_ip = 255;
                    continue _fun29222
                }
            case 217:
                var8 = var0.global;
                var8 = var8 !== var0;
                if (!var8) {
                    _fun29222_ip = 239;
                    continue _fun29222
                }
            case 230:
                var9 = var0.window;
                var8 = var9 !== var0;
            case 239:
                if (!var8) {
                    _fun29222_ip = 252;
                    continue _fun29222
                }
            case 242:
                var9 = var0.self;
                var8 = var9 !== var0;
            case 252:
                var3 = var8;
            case 255:
                if (var3) {
                    _fun29222_ip = 265;
                    continue _fun29222
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
                var3 = function arg0() {
                    _fun29231: for (var _fun29231_ip = 0;;) switch (_fun29231_ip) {
                        case 0:
                            var0 = arg0;
                            var _closure3_slot0 = var0;
                            var8 = undefined;
                            var12 = undefined;
                            var1 = undefined;
                            var3 = undefined;
                            var6 = undefined;
                            var5 = undefined;
                            var46 = function arg0() {
                                var3 = _closure2_slot12;
                                var2 = undefined;
                                var1 = arg0;
                                var0 = function(arg0, arg1) { // Environment: var0
                                    _fun29233: for (var _fun29233_ip = 0;;) switch (_fun29233_ip) {
                                        case 0:
                                            var6 = arg0;
                                            var2 = arg1;
                                            var9 = var2.pattern;
                                            if (var9) {
                                                _fun29233_ip = 29;
                                                continue _fun29233
                                            }
                                        case 15:
                                            var1 = _closure2_slot11;
                                            var0 = undefined;
                                            var9 = var1.bind(var0)(var2);
                                        case 29:
                                            var1 = !var6;
                                            if (!var1) {
                                                _fun29233_ip = 190;
                                                continue _fun29233
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
                                                _fun29233_ip = 140;
                                                continue _fun29233
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
                                                _fun29233_ip = 184;
                                                continue _fun29233
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
                                                _fun29233_ip = 509;
                                                continue _fun29233
                                            }
                                        case 199:
                                            var1 = global;
                                            var5 = var1.String;
                                            var3 = var2.label;
                                            var4 = var6;
                                            if (!var3) {
                                                _fun29233_ip = 262;
                                                continue _fun29233
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
                                                _fun29233_ip = 262;
                                                continue _fun29233
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
                                                _fun29233_ip = 326;
                                                continue _fun29233
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
                                                _fun29233_ip = 357;
                                                continue _fun29233
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
                                                _fun29233_ip = 368;
                                                continue _fun29233
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
                            var27 = _closure2_slot0;
                            var9 = var0;
                            if (!var0) {
                                _fun29231_ip = 50;
                                continue _fun29231
                            }
                        case 39:
                            var10 = 'object';
                            var2 = typeof var0;
                            var9 = var10 === var2;
                        case 50:
                            if (!var9) {
                                _fun29231_ip = 70;
                                continue _fun29231
                            }
                        case 53:
                            var2 = _closure2_slot10;
                            var10 = var2.bind(var8)(var0);
                            var2 = 'String';
                            var9 = var2 != var10;
                        case 70:
                            var10 = var0;
                            if (!var9) {
                                _fun29231_ip = 87;
                                continue _fun29231
                            }
                        case 76:
                            var27 = var0;
                            var0 = null;
                            _closure3_slot0 = var0;
                            var10 = null;
                        case 87:
                            var0 = var27;
                            var20 = var0.navigator;
                            if (var20) {
                                _fun29231_ip = 101;
                                continue _fun29231
                            }
                        case 99:
                            var20 = {};
                        case 101:
                            var2 = var20.userAgent;
                            if (var2) {
                                _fun29231_ip = 114;
                                continue _fun29231
                            }
                        case 110:
                            var2 = '';
                        case 114:
                            if (var10) {
                                _fun29231_ip = 124;
                                continue _fun29231
                            }
                        case 117:
                            _closure3_slot0 = var2;
                            var10 = var2;
                        case 124:
                            if (var9) {
                                _fun29231_ip = 196;
                                continue _fun29231
                            }
                        case 127:
                            var11 = /\bChrome\b/;
                            var0 = var11.test;
                            var24 = var0.bind(var11)(var10);
                            if (!var24) {
                                _fun29231_ip = 194;
                                continue _fun29231
                            }
                        case 154:
                            var13 = /internal|\n/i;
                            var11 = var13.test;
                            var14 = _closure2_slot5;
                            var0 = var14.toString;
                            var0 = var0.bind(var14)();
                            var0 = var11.bind(var13)(var0);
                            var24 = !var0;
                        case 194:
                            _fun29231_ip = 208;
                            continue _fun29231;
                        case 196:
                            var0 = var20.likeChrome;
                            var0 = !var0;
                            var24 = !var0;
                        case 208:
                            var41 = 'ScriptBridgingProxyObject';
                            if (!var9) {
                                _fun29231_ip = 221;
                                continue _fun29231
                            }
                        case 217:
                            var41 = 'Object';
                        case 221:
                            var11 = 'Environment';
                            if (!var9) {
                                _fun29231_ip = 232;
                                continue _fun29231
                            }
                        case 228:
                            var11 = 'Object';
                        case 232:
                            if (!var9) {
                                _fun29231_ip = 253;
                                continue _fun29231
                            }
                        case 235:
                            var0 = var27;
                            var0 = var0.java;
                            var14 = 'JavaPackage';
                            if (var0) {
                                _fun29231_ip = 271;
                                continue _fun29231
                            }
                        case 253:
                            var13 = _closure2_slot10;
                            var0 = var27;
                            var0 = var0.java;
                            var14 = var13.bind(var8)(var0);
                        case 271:
                            var39 = 'RuntimeObject';
                            if (!var9) {
                                _fun29231_ip = 284;
                                continue _fun29231
                            }
                        case 280:
                            var39 = 'Object';
                        case 284:
                            var13 = /\bJava/;
                            var0 = var13.test;
                            var38 = var0.bind(var13)(var14);
                            if (!var38) {
                                _fun29231_ip = 320;
                                continue _fun29231
                            }
                        case 311:
                            var0 = var27;
                            var38 = var0.java;
                        case 320:
                            var37 = var38;
                            if (!var37) {
                                _fun29231_ip = 348;
                                continue _fun29231
                            }
                        case 326:
                            var13 = _closure2_slot10;
                            var0 = var27;
                            var0 = var0.environment;
                            var0 = var13.bind(var8)(var0);
                            var37 = var0 == var11;
                        case 348:
                            var33 = 'α';
                            if (!var38) {
                                _fun29231_ip = 359;
                                continue _fun29231
                            }
                        case 355:
                            var33 = 'a';
                        case 359:
                            var36 = 'β';
                            if (!var38) {
                                _fun29231_ip = 370;
                                continue _fun29231
                            }
                        case 366:
                            var36 = 'b';
                        case 370:
                            var0 = var27;
                            var40 = var0.document;
                            if (var40) {
                                _fun29231_ip = 384;
                                continue _fun29231
                            }
                        case 382:
                            var40 = {};
                        case 384:
                            var0 = var27;
                            var13 = var0.operamini;
                            if (var13) {
                                _fun29231_ip = 405;
                                continue _fun29231
                            }
                        case 396:
                            var0 = var27;
                            var13 = var0.opera;
                        case 405:
                            var11 = _closure2_slot3;
                            var0 = var11.test;
                            if (!var9) {
                                _fun29231_ip = 420;
                                continue _fun29231
                            }
                        case 417:
                            if (var13) {
                                _fun29231_ip = 431;
                                continue _fun29231
                            }
                        case 420:
                            var9 = _closure2_slot10;
                            var9 = var9.bind(var8)(var13);
                            _fun29231_ip = 437;
                            continue _fun29231;
                        case 431:
                            var9 = var13["[[Class]]"];
                        case 437:
                            var14 = var0.bind(var11)(var9);
                            var0 = null;
                            var11 = var9;
                            var9 = null;
                            var35 = null;
                            if (!var14) {
                                _fun29231_ip = 460;
                                continue _fun29231
                            }
                        case 454:
                            var9 = var13;
                            var35 = var11;
                        case 460:
                            var1 = new Array(0);
                            var16 = var10 == var2;
                            var2 = var16;
                            if (!var16) {
                                _fun29231_ip = 477;
                                continue _fun29231
                            }
                        case 474:
                            var2 = var9;
                        case 477:
                            if (!var2) {
                                _fun29231_ip = 497;
                                continue _fun29231
                            }
                        case 480:
                            var11 = var9.version;
                            var13 = 'function';
                            var11 = typeof var11;
                            var2 = var13 === var11;
                        case 497:
                            if (!var2) {
                                _fun29231_ip = 510;
                                continue _fun29231
                            }
                        case 500:
                            var11 = var9.version;
                            var2 = var11.bind(var9)();
                        case 510:
                            var3 = var2;
                            var11 = new Array(9);
                            var2 = {
                                'label': 'EdgeHTML',
                                'pattern': 'Edge'
                            };
                            var11[0] = var2;
                            var23 = 'Trident';
                            var11[1] = var23;
                            var28 = 'WebKit';
                            var2 = {
                                'label': 'WebKit',
                                'pattern': 'AppleWebKit'
                            };
                            var11[2] = var2;
                            var18 = 'iCab';
                            var11[3] = var18;
                            var42 = 'Presto';
                            var11[4] = var42;
                            var32 = 'NetFront';
                            var11[5] = var32;
                            var43 = 'Tasman';
                            var11[6] = var43;
                            var2 = 'KHTML';
                            var11[7] = var2;
                            var2 = 'Gecko';
                            var11[8] = var2;
                            var2 = function arg0() {
                                var3 = _closure2_slot12;
                                var2 = undefined;
                                var1 = arg0;
                                var0 = function(arg0, arg1) { // Environment: var0
                                    _fun29235: for (var _fun29235_ip = 0;;) switch (_fun29235_ip) {
                                        case 0:
                                            var0 = arg0;
                                            var3 = arg1;
                                            if (var0) {
                                                _fun29235_ip = 104;
                                                continue _fun29235
                                            }
                                        case 9:
                                            var1 = global;
                                            var5 = var1.RegExp;
                                            var1 = var3.pattern;
                                            if (var1) {
                                                _fun29235_ip = 40;
                                                continue _fun29235
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
                                                _fun29235_ip = 101;
                                                continue _fun29235
                                            }
                                        case 87:
                                            var2 = var3.label;
                                            if (var2) {
                                                _fun29235_ip = 98;
                                                continue _fun29235
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
                            var49 = var2.bind(var8)(var11);
                            var11 = ['Adobe AIR', 'Arora', 'Avant Browser', 'Breach', 'Camino', 'Electron', 'Epiphany', 'Fennec', 'Flock', 'Galeon', 'GreenBrowser', 'iCab', 'Iceweasel', 'K-Meleon', 'Konqueror', 'Lunascape', 'Maxthon'];
                            var2 = {
                                'label': 'Microsoft Edge',
                                'pattern': 'Edge'
                            };
                            var11[17] = var2;
                            var2 = 'Midori';
                            var11[18] = var2;
                            var2 = 'Nook Browser';
                            var11[19] = var2;
                            var47 = 'PaleMoon';
                            var11[20] = var47;
                            var34 = 'PhantomJS';
                            var11[21] = var34;
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
                            var48 = 'Silk';
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
                            var2 = 'Waterfox';
                            var11[33] = var2;
                            var2 = 'WebPositive';
                            var11[34] = var2;
                            var45 = 'Opera Mini';
                            var11[35] = var45;
                            var2 = {
                                'label': 'Opera Mini',
                                'pattern': 'OPiOS'
                            };
                            var11[36] = var2;
                            var19 = 'Opera';
                            var11[37] = var19;
                            var2 = {
                                'label': 'Opera',
                                'pattern': 'OPR'
                            };
                            var11[38] = var2;
                            var15 = 'Chrome';
                            var11[39] = var15;
                            var17 = 'Chrome Mobile';
                            var2 = {
                                'label': 'Chrome Mobile',
                                'pattern': '(?:CriOS|CrMo)'
                            };
                            var11[40] = var2;
                            var30 = 'Firefox';
                            var2 = {
                                'label': 'Firefox',
                                'pattern': '(?:Firefox|Minefield)'
                            };
                            var11[41] = var2;
                            var2 = {
                                'label': 'Firefox for iOS',
                                'pattern': 'FxiOS'
                            };
                            var11[42] = var2;
                            var13 = 'IE';
                            var2 = {
                                'label': 'IE',
                                'pattern': 'IEMobile'
                            };
                            var11[43] = var2;
                            var2 = {
                                'label': 'IE',
                                'pattern': 'MSIE'
                            };
                            var11[44] = var2;
                            var22 = 'Safari';
                            var11[45] = var22;
                            var2 = function arg0() {
                                var3 = _closure2_slot12;
                                var2 = undefined;
                                var1 = arg0;
                                var0 = function(arg0, arg1) { // Environment: var0
                                    _fun29237: for (var _fun29237_ip = 0;;) switch (_fun29237_ip) {
                                        case 0:
                                            var0 = arg0;
                                            var3 = arg1;
                                            if (var0) {
                                                _fun29237_ip = 104;
                                                continue _fun29237
                                            }
                                        case 9:
                                            var1 = global;
                                            var5 = var1.RegExp;
                                            var1 = var3.pattern;
                                            if (var1) {
                                                _fun29237_ip = 40;
                                                continue _fun29237
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
                                                _fun29237_ip = 101;
                                                continue _fun29237
                                            }
                                        case 87:
                                            var2 = var3.label;
                                            if (var2) {
                                                _fun29237_ip = 98;
                                                continue _fun29237
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
                            var31 = 'BlackBerry';
                            var11 = new Array(30);
                            var2 = {
                                'label': 'BlackBerry',
                                'pattern': 'BB10'
                            };
                            var11[0] = var2;
                            var11[1] = var31;
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
                            var14 = 'Xbox One';
                            var11[27] = var14;
                            var26 = 'Xbox 360';
                            var14 = {
                                'label': 'Xbox 360',
                                'pattern': 'Xbox'
                            };
                            var11[28] = var14;
                            var14 = 'Xoom';
                            var11[29] = var14;
                            var44 = var46.bind(var8)(var11);
                            var _closure3_slot2 = var44;
                            var14 = {};
                            var21 = 1;
                            var11 = {
                                'iPad': 1,
                                'iPhone': 1,
                                'iPod': 1
                            };
                            var14.Apple = var11;
                            var11 = {};
                            var14.Archos = var11;
                            var11 = {
                                'Kindle': 1,
                                'Kindle Fire': 1
                            };
                            var14.Amazon = var11;
                            var11 = {};
                            var11.Transformer = var21;
                            var14.Asus = var11;
                            var11 = {};
                            var11.Nook = var21;
                            var14['Barnes & Noble'] = var11;
                            var11 = {};
                            var11.PlayBook = var21;
                            var14.BlackBerry = var11;
                            var11 = {
                                'Google TV': 1,
                                'Nexus': 1
                            };
                            var14.Google = var11;
                            var11 = {};
                            var11.TouchPad = var21;
                            var14.HP = var11;
                            var11 = {};
                            var14.HTC = var11;
                            var11 = {};
                            var14.LG = var11;
                            var11 = {
                                'Xbox': 1,
                                'Xbox One': 1
                            };
                            var14.Microsoft = var11;
                            var11 = {};
                            var11.Xoom = var21;
                            var14.Motorola = var11;
                            var11 = {
                                'Wii U': 1,
                                'Wii': 1
                            };
                            var14.Nintendo = var11;
                            var11 = {};
                            var11.Lumia = var21;
                            var14.Nokia = var11;
                            var11 = {
                                'Galaxy S': 1,
                                'Galaxy S2': 1,
                                'Galaxy S3': 1,
                                'Galaxy S4': 1
                            };
                            var14.Samsung = var11;
                            var11 = {
                                'PlayStation': 1,
                                'PlayStation Vita': 1
                            };
                            var14.Sony = var11;
                            var11 = function arg0() {
                                var3 = _closure2_slot12;
                                var2 = undefined;
                                var1 = arg0;
                                var0 = function(arg0, arg1, arg2) { // Environment: var0
                                    _fun29239: for (var _fun29239_ip = 0;;) switch (_fun29239_ip) {
                                        case 0:
                                            var0 = arg0;
                                            var5 = arg1;
                                            var2 = arg2;
                                            if (var0) {
                                                _fun29239_ip = 141;
                                                continue _fun29239
                                            }
                                        case 15:
                                            var1 = _closure3_slot2;
                                            var1 = var5[var1];
                                            if (var1) {
                                                _fun29239_ip = 62;
                                                continue _fun29239
                                            }
                                        case 29:
                                            var7 = /^[a-z]+(?: +[a-z]+\b)*/i;
                                            var6 = var7.exec;
                                            var4 = _closure3_slot2;
                                            var4 = var6.bind(var7)(var4);
                                            var1 = var5[var4];
                                        case 62:
                                            if (var1) {
                                                _fun29239_ip = 132;
                                                continue _fun29239
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
                                                _fun29239_ip = 138;
                                                continue _fun29239
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
                            var29 = var11.bind(var8)(var14);
                            var25 = ['Windows Phone', 'Android', 'CentOS'];
                            var11 = {
                                'label': 'Chrome OS',
                                'pattern': 'CrOS'
                            };
                            var25[3] = var11;
                            var11 = 'Debian';
                            var25[4] = var11;
                            var11 = 'Fedora';
                            var25[5] = var11;
                            var11 = 'FreeBSD';
                            var25[6] = var11;
                            var11 = 'Gentoo';
                            var25[7] = var11;
                            var11 = 'Haiku';
                            var25[8] = var11;
                            var11 = 'Kubuntu';
                            var25[9] = var11;
                            var14 = 'Linux Mint';
                            var25[10] = var14;
                            var14 = 'OpenBSD';
                            var25[11] = var14;
                            var14 = 'Red Hat';
                            var25[12] = var14;
                            var14 = 'SuSE';
                            var25[13] = var14;
                            var14 = 'Ubuntu';
                            var25[14] = var14;
                            var14 = 'Xubuntu';
                            var25[15] = var14;
                            var14 = 'Cygwin';
                            var25[16] = var14;
                            var14 = 'Symbian OS';
                            var25[17] = var14;
                            var14 = 'hpwOS';
                            var25[18] = var14;
                            var14 = 'webOS ';
                            var25[19] = var14;
                            var14 = 'webOS';
                            var25[20] = var14;
                            var14 = 'Tablet OS';
                            var25[21] = var14;
                            var14 = 'Tizen';
                            var25[22] = var14;
                            var14 = 'Linux';
                            var25[23] = var14;
                            var14 = 'Mac OS X';
                            var25[24] = var14;
                            var14 = 'Macintosh';
                            var25[25] = var14;
                            var14 = 'Mac';
                            var25[26] = var14;
                            var14 = 'Windows 98;';
                            var25[27] = var14;
                            var14 = 'Windows ';
                            var25[28] = var14;
                            var14 = function arg0() {
                                var3 = _closure2_slot12;
                                var2 = undefined;
                                var1 = arg0;
                                var0 = function(arg0, arg1) { // Environment: var0
                                    _fun29241: for (var _fun29241_ip = 0;;) switch (_fun29241_ip) {
                                        case 0:
                                            var3 = arg0;
                                            var1 = arg1;
                                            var8 = var1.pattern;
                                            if (var8) {
                                                _fun29241_ip = 29;
                                                continue _fun29241
                                            }
                                        case 15:
                                            var2 = _closure2_slot11;
                                            var0 = undefined;
                                            var8 = var2.bind(var0)(var1);
                                        case 29:
                                            var2 = !var3;
                                            if (!var2) {
                                                _fun29241_ip = 96;
                                                continue _fun29241
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
                                                _fun29241_ip = 685;
                                                continue _fun29241
                                            }
                                        case 105:
                                            var5 = var1.label;
                                            if (var5) {
                                                _fun29241_ip = 116;
                                                continue _fun29241
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
                                                _fun29241_ip = 135;
                                                continue _fun29241
                                            }
                                        case 132:
                                            var1 = var5;
                                        case 135:
                                            if (!var1) {
                                                _fun29241_ip = 162;
                                                continue _fun29241
                                            }
                                        case 138:
                                            var4 = /^Win/i;
                                            var2 = var4.test;
                                            var1 = var2.bind(var4)(var3);
                                        case 162:
                                            if (!var1) {
                                                _fun29241_ip = 192;
                                                continue _fun29241
                                            }
                                        case 165:
                                            var4 = /^Windows Phone /i;
                                            var2 = var4.test;
                                            var2 = var2.bind(var4)(var3);
                                            var1 = !var2;
                                        case 192:
                                            var2 = var6;
                                            if (!var1) {
                                                _fun29241_ip = 230;
                                                continue _fun29241
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
                                                _fun29241_ip = 246;
                                                continue _fun29241
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
                                                _fun29241_ip = 270;
                                                continue _fun29241
                                            }
                                        case 267:
                                            var2 = var5;
                                        case 270:
                                            var6 = var4;
                                            if (!var2) {
                                                _fun29241_ip = 303;
                                                continue _fun29241
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
                            var5 = var14.bind(var8)(var25);
                            var25 = var49;
                            if (!var25) {
                                _fun29231_ip = 1862;
                                continue _fun29231
                            }
                        case 1851:
                            var14 = new Array(1);
                            var14[0] = var49;
                            var25 = var14;
                        case 1862:
                            var14 = var29;
                            if (!var29) {
                                _fun29231_ip = 1871;
                                continue _fun29231
                            }
                        case 1868:
                            var14 = !var44;
                        case 1871:
                            if (!var14) {
                                _fun29231_ip = 1894;
                                continue _fun29231
                            }
                        case 1874:
                            var14 = new Array(1);
                            var14[0] = var29;
                            var14 = var46.bind(var8)(var14);
                            _closure3_slot2 = var14;
                            var44 = var14;
                        case 1894:
                            var46 = /\bGoogle TV\b/;
                            var14 = var46.exec;
                            var14 = var14.bind(var46)(var44);
                            var12 = var14;
                            var49 = var44;
                            if (!var14) {
                                _fun29231_ip = 1944;
                                continue _fun29231
                            }
                        case 1928:
                            var44 = var12;
                            var14 = 0;
                            var14 = var44[var14];
                            _closure3_slot2 = var14;
                            var49 = var14;
                        case 1944:
                            var44 = /\bSimulator\b/i;
                            var14 = var44.test;
                            var14 = var14.bind(var44)(var10);
                            var44 = var49;
                            if (!var14) {
                                _fun29231_ip = 2008;
                                continue _fun29231
                            }
                        case 1974:
                            var46 = '';
                            if (!var49) {
                                _fun29231_ip = 1991;
                                continue _fun29231
                            }
                        case 1981:
                            var14 = ' ';
                            var46 = var49 + var14;
                        case 1991:
                            var14 = 'Simulator';
                            var14 = var46 + var14;
                            _closure3_slot2 = var14;
                            var44 = var14;
                        case 2008:
                            var14 = var6;
                            var14 = var45 == var14;
                            if (!var14) {
                                _fun29231_ip = 2042;
                                continue _fun29231
                            }
                        case 2018:
                            var46 = /\bOPiOS\b/;
                            var45 = var46.test;
                            var14 = var45.bind(var46)(var10);
                        case 2042:
                            if (!var14) {
                                _fun29231_ip = 2064;
                                continue _fun29231
                            }
                        case 2045:
                            var46 = var1;
                            var45 = var46.push;
                            var14 = 'running in Turbo/Uncompressed mode';
                            var14 = var45.bind(var46)(var14);
                        case 2064:
                            var14 = var6;
                            if (!(var13 == var14)) {
                                _fun29231_ip = 2101;
                                continue _fun29231
                            }
                        case 2071:
                            var45 = /\blike iPhone OS\b/;
                            var14 = var45.test;
                            var14 = var14.bind(var45)(var10);
                            if (var14) {
                                _fun29231_ip = 3257;
                                continue _fun29231
                            }
                        case 2101:
                            var45 = /^iP/;
                            var14 = var45.test;
                            var14 = var14.bind(var45)(var44);
                            var45 = var6;
                            if (var14) {
                                _fun29231_ip = 3152;
                                continue _fun29231
                            }
                        case 2134:
                            var14 = 'Konqueror';
                            if (!(var14 == var45)) {
                                _fun29231_ip = 2188;
                                continue _fun29231
                            }
                        case 2144:
                            var49 = /buntu/i;
                            var46 = var49.test;
                            var14 = var5;
                            var14 = var46.bind(var49)(var14);
                            if (var14) {
                                _fun29231_ip = 2188;
                                continue _fun29231
                            }
                        case 2174:
                            var5 = var11;
                            var14 = var44;
                            var11 = var29;
                            _fun29231_ip = 3317;
                            continue _fun29231;
                        case 2188:
                            if (!var29) {
                                _fun29231_ip = 2289;
                                continue _fun29231
                            }
                        case 2191:
                            var46 = 'Google';
                            if (!(var46 != var29)) {
                                _fun29231_ip = 2289;
                                continue _fun29231
                            }
                        case 2199:
                            var50 = /Chrome/;
                            var49 = var50.test;
                            var46 = var6;
                            var46 = var49.bind(var50)(var46);
                            if (!var46) {
                                _fun29231_ip = 2259;
                                continue _fun29231
                            }
                        case 2229:
                            var49 = /\bMobile Safari\b/i;
                            var46 = var49.test;
                            var46 = var46.bind(var49)(var10);
                            if (!var46) {
                                _fun29231_ip = 3093;
                                continue _fun29231
                            }
                        case 2259:
                            var49 = /\bVita\b/;
                            var46 = var49.test;
                            var46 = var46.bind(var49)(var44);
                            if (var46) {
                                _fun29231_ip = 3093;
                                continue _fun29231
                            }
                        case 2289:
                            var50 = /\bAndroid\b/;
                            var49 = var50.test;
                            var46 = var5;
                            var46 = var49.bind(var50)(var46);
                            if (!var46) {
                                _fun29231_ip = 2379;
                                continue _fun29231
                            }
                        case 2319:
                            var50 = /^Chrome/;
                            var49 = var50.test;
                            var46 = var6;
                            var46 = var49.bind(var50)(var46);
                            if (!var46) {
                                _fun29231_ip = 2379;
                                continue _fun29231
                            }
                        case 2349:
                            var49 = /\bVersion\\/ / i;
                            var46 = var49.test;
                            var46 = var46.bind(var49)(var10);
                            if (var46) {
                                _fun29231_ip = 3093;
                                continue _fun29231
                            }
                        case 2379:
                            var46 = var6;
                            if (!(var48 != var46)) {
                                _fun29231_ip = 2975;
                                continue _fun29231
                            }
                        case 2389:
                            var46 = var6;
                            if (!(var47 == var46)) {
                                _fun29231_ip = 2430;
                                continue _fun29231
                            }
                        case 2396:
                            var47 = /\bFirefox\\/([\d.] + )\ b / ;
                            var46 = var47.exec;
                            var46 = var46.bind(var47)(var10);
                            var12 = var46;
                            if (var46) {
                                _fun29231_ip = 2934;
                                continue _fun29231
                            }
                        case 2430:
                            var46 = var6;
                            if (!(var30 == var46)) {
                                _fun29231_ip = 2471;
                                continue _fun29231
                            }
                        case 2437:
                            var47 = /\b(Mobile|Tablet|TV)\b/i;
                            var46 = var47.exec;
                            var46 = var46.bind(var47)(var10);
                            var12 = var46;
                            if (var46) {
                                _fun29231_ip = 2888;
                                continue _fun29231
                            }
                        case 2471:
                            var46 = var6;
                            if (!var46) {
                                _fun29231_ip = 2649;
                                continue _fun29231
                            }
                        case 2480:
                            var47 = /\bMinefield\b/i;
                            var46 = var47.test;
                            var46 = var46.bind(var47)(var10);
                            var46 = !var46;
                            if (!var46) {
                                _fun29231_ip = 2538;
                                continue _fun29231
                            }
                        case 2510:
                            var49 = /\b(?:Firefox|Safari)\b/;
                            var48 = var49.exec;
                            var47 = var6;
                            var46 = var48.bind(var49)(var47);
                        case 2538:
                            var12 = var46;
                            if (var46) {
                                _fun29231_ip = 2649;
                                continue _fun29231
                            }
                        case 2544:
                            var47 = var6;
                            var46 = 'Electron';
                            var46 = var46 == var47;
                            if (!var46) {
                                _fun29231_ip = 2600;
                                continue _fun29231
                            }
                        case 2560:
                            var48 = /\bChrome\\/([\d.] + )\ b / ;
                            var47 = var48.exec;
                            var47 = var47.bind(var48)(var10);
                            if (var47) {
                                _fun29231_ip = 2590;
                                continue _fun29231
                            }
                        case 2588:
                            var47 = 0;
                        case 2590:
                            var47 = var47[var21];
                            var12 = var47;
                            var46 = var47;
                        case 2600:
                            var14 = var44;
                            var11 = var29;
                            if (!var46) {
                                _fun29231_ip = 3317;
                                continue _fun29231
                            }
                        case 2612:
                            var48 = var1;
                            var47 = var48.push;
                            var49 = var12;
                            var46 = 'Chromium ';
                            var46 = var46 + var49;
                            var46 = var47.bind(var48)(var46);
                            var14 = var44;
                            var11 = var29;
                            _fun29231_ip = 3317;
                            continue _fun29231;
                        case 2649:
                            var46 = var6;
                            if (!var46) {
                                _fun29231_ip = 2658;
                                continue _fun29231
                            }
                        case 2655:
                            var46 = !var44;
                        case 2658:
                            if (!var46) {
                                _fun29231_ip = 2724;
                                continue _fun29231
                            }
                        case 2661:
                            var49 = /[\\/,]|^[^(]+?\)/;
                            var48 = var49.test;
                            var50 = var10.slice;
                            var51 = var10.indexOf;
                            var52 = var12;
                            var47 = '/';
                            var47 = var52 + var47;
                            var51 = var51.bind(var10)(var47);
                            var47 = 8;
                            var47 = var51 + var47;
                            var47 = var50.bind(var10)(var47);
                            var46 = var48.bind(var49)(var47);
                        case 2724:
                            if (!var46) {
                                _fun29231_ip = 2729;
                                continue _fun29231
                            }
                        case 2727:
                            var6 = null;
                        case 2729:
                            var46 = var44;
                            if (var44) {
                                _fun29231_ip = 2738;
                                continue _fun29231
                            }
                        case 2735:
                            var46 = var29;
                        case 2738:
                            if (var46) {
                                _fun29231_ip = 2744;
                                continue _fun29231
                            }
                        case 2741:
                            var46 = var5;
                        case 2744:
                            var12 = var46;
                            if (!var46) {
                                _fun29231_ip = 2792;
                                continue _fun29231
                            }
                        case 2750:
                            var47 = var44;
                            if (var44) {
                                _fun29231_ip = 2759;
                                continue _fun29231
                            }
                        case 2756:
                            var47 = var29;
                        case 2759:
                            if (var47) {
                                _fun29231_ip = 2789;
                                continue _fun29231
                            }
                        case 2762:
                            var50 = /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/;
                            var49 = var50.test;
                            var48 = var5;
                            var47 = var49.bind(var50)(var48);
                        case 2789:
                            var46 = var47;
                        case 2792:
                            var14 = var44;
                            var11 = var29;
                            if (!var46) {
                                _fun29231_ip = 3317;
                                continue _fun29231
                            }
                        case 2804:
                            var48 = /[a-z]+(?: Hat)?/i;
                            var47 = var48.exec;
                            var50 = /\bAndroid\b/;
                            var49 = var50.test;
                            var46 = var5;
                            var46 = var49.bind(var50)(var46);
                            if (var46) {
                                _fun29231_ip = 2859;
                                continue _fun29231
                            }
                        case 2854:
                            var46 = var12;
                            _fun29231_ip = 2862;
                            continue _fun29231;
                        case 2859:
                            var46 = var5;
                        case 2862:
                            var47 = var47.bind(var48)(var46);
                            var46 = ' Browser';
                            var6 = var47 + var46;
                            var14 = var44;
                            var11 = var29;
                            _fun29231_ip = 3317;
                            continue _fun29231;
                        case 2888:
                            var46 = var5;
                            if (var46) {
                                _fun29231_ip = 2900;
                                continue _fun29231
                            }
                        case 2894:
                            var5 = 'Firefox OS';
                        case 2900:
                            var11 = var29;
                            var14 = var44;
                            if (var14) {
                                _fun29231_ip = 3317;
                                continue _fun29231
                            }
                        case 2912:
                            var46 = var12;
                            var46 = var46[var21];
                            _closure3_slot2 = var46;
                            var14 = var46;
                            var11 = var29;
                            _fun29231_ip = 3317;
                            continue _fun29231;
                        case 2934:
                            var48 = var1;
                            var47 = var48.push;
                            var46 = var12;
                            var49 = var46[var21];
                            var46 = 'identifying as Firefox ';
                            var46 = var46 + var49;
                            var46 = var47.bind(var48)(var46);
                            var14 = var44;
                            var11 = var29;
                            _fun29231_ip = 3317;
                            continue _fun29231;
                        case 2975:
                            var47 = /\bMobi/i;
                            var46 = var47.test;
                            var46 = var46.bind(var47)(var10);
                            if (var46) {
                                _fun29231_ip = 3028;
                                continue _fun29231
                            }
                        case 3002:
                            var5 = 'Android';
                            var48 = var1;
                            var47 = var48.unshift;
                            var46 = 'desktop mode';
                            var46 = var47.bind(var48)(var46);
                        case 3028:
                            var47 = /Accelerated *= *true/i;
                            var46 = var47.test;
                            var46 = var46.bind(var47)(var10);
                            var14 = var44;
                            var11 = var29;
                            if (!var46) {
                                _fun29231_ip = 3317;
                                continue _fun29231
                            }
                        case 3064:
                            var48 = var1;
                            var47 = var48.unshift;
                            var46 = 'accelerated';
                            var46 = var47.bind(var48)(var46);
                            var14 = var44;
                            var11 = var29;
                            _fun29231_ip = 3317;
                            continue _fun29231;
                        case 3093:
                            var6 = 'Android Browser';
                            var48 = /\bAndroid\b/;
                            var47 = var48.test;
                            var46 = var5;
                            var47 = var47.bind(var48)(var46);
                            var46 = 'Android';
                            if (!var47) {
                                _fun29231_ip = 3138;
                                continue _fun29231
                            }
                        case 3135:
                            var46 = var5;
                        case 3138:
                            var5 = var46;
                            var14 = var44;
                            var11 = var29;
                            _fun29231_ip = 3317;
                            continue _fun29231;
                        case 3152:
                            if (var45) {
                                _fun29231_ip = 3158;
                                continue _fun29231
                            }
                        case 3155:
                            var6 = var22;
                        case 3158:
                            var46 = / OS ([\d_]+)/i;
                            var45 = var46.exec;
                            var45 = var45.bind(var46)(var10);
                            var12 = var45;
                            var46 = '';
                            if (!var45) {
                                _fun29231_ip = 3239;
                                continue _fun29231
                            }
                        case 3193:
                            var45 = var12;
                            var49 = var45[var21];
                            var48 = var49.replace;
                            var47 = /_/g;
                            var45 = '.';
                            var47 = var48.bind(var49)(var47, var45);
                            var45 = ' ';
                            var46 = var45 + var47;
                        case 3239:
                            var45 = 'iOS';
                            var5 = var45 + var46;
                            var14 = var44;
                            var11 = var29;
                            _fun29231_ip = 3317;
                            continue _fun29231;
                        case 3257:
                            var44 = _closure2_slot14;
                            var46 = var10.replace;
                            var45 = /like iPhone OS/;
                            var29 = '';
                            var29 = var46.bind(var10)(var45, var29);
                            var44 = var44.bind(var8)(var29);
                            var12 = var44;
                            var11 = var44.manufacturer;
                            var44 = var44.product;
                            _closure3_slot2 = var44;
                            var14 = var44;
                        case 3317:
                            var29 = var3;
                            if (var29) {
                                _fun29231_ip = 3369;
                                continue _fun29231
                            }
                        case 3323:
                            var44 = _closure2_slot11;
                            var29 = var6;
                            var29 = var44.bind(var8)(var29);
                            var44 = ['(?:Cloud9|CriOS|CrMo|Edge|FxiOS|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$))', 'Version'];
                            var44[2] = var29;
                            var29 = '(?:Firefox|Minefield|NetFront)';
                            var44[3] = var29;
                            var29 = function arg0() {
                                var3 = _closure2_slot12;
                                var2 = undefined;
                                var1 = arg0;
                                var0 = function(arg0, arg1) { // Environment: var0
                                    _fun29243: for (var _fun29243_ip = 0;;) switch (_fun29243_ip) {
                                        case 0:
                                            var0 = arg0;
                                            if (var0) {
                                                _fun29243_ip = 69;
                                                continue _fun29243
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
                                                _fun29243_ip = 62;
                                                continue _fun29243
                                            }
                                        case 60:
                                            var2 = 0;
                                        case 62:
                                            var1 = 1;
                                            var0 = var2[var1];
                                        case 69:
                                            if (var0) {
                                                _fun29243_ip = 74;
                                                continue _fun29243
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
                            var3 = var29.bind(var8)(var44);
                        case 3369:
                            if (!(var18 == var25)) {
                                _fun29231_ip = 3402;
                                continue _fun29231
                            }
                        case 3373:
                            var18 = global;
                            var29 = var18.parseFloat;
                            var18 = var3;
                            var29 = var29.bind(var8)(var18);
                            var18 = 3;
                            var29 = var29 > var18;
                            var18 = var28;
                            if (var29) {
                                _fun29231_ip = 3471;
                                continue _fun29231
                            }
                        case 3402:
                            var45 = /\bOpera\b/;
                            var44 = var45.test;
                            var29 = var6;
                            var29 = var44.bind(var45)(var29);
                            if (!var29) {
                                _fun29231_ip = 3468;
                                continue _fun29231
                            }
                        case 3432:
                            var45 = /\bOPR\b/;
                            var44 = var45.test;
                            var44 = var44.bind(var45)(var10);
                            if (!var44) {
                                _fun29231_ip = 3465;
                                continue _fun29231
                            }
                        case 3459:
                            var42 = 'Blink';
                        case 3465:
                            var29 = var42;
                        case 3468:
                            var18 = var29;
                        case 3471:
                            if (var18) {
                                _fun29231_ip = 3537;
                                continue _fun29231
                            }
                        case 3474:
                            var42 = /\b(?:Midori|Nook|Safari)\b/i;
                            var29 = var42.test;
                            var29 = var29.bind(var42)(var10);
                            if (!var29) {
                                _fun29231_ip = 3528;
                                continue _fun29231
                            }
                        case 3501:
                            var44 = /^(?:Trident|EdgeHTML)$/;
                            var42 = var44.test;
                            var42 = var42.bind(var44)(var25);
                            var29 = !var42;
                        case 3528:
                            if (!var29) {
                                _fun29231_ip = 3534;
                                continue _fun29231
                            }
                        case 3531:
                            var29 = var28;
                        case 3534:
                            var18 = var29;
                        case 3537:
                            if (var18) {
                                _fun29231_ip = 3601;
                                continue _fun29231
                            }
                        case 3540:
                            var29 = !var25;
                            if (!var29) {
                                _fun29231_ip = 3570;
                                continue _fun29231
                            }
                        case 3546:
                            var44 = /\bMSIE\b/i;
                            var42 = var44.test;
                            var29 = var42.bind(var44)(var10);
                        case 3570:
                            if (!var29) {
                                _fun29231_ip = 3598;
                                continue _fun29231
                            }
                        case 3573:
                            var44 = var5;
                            var42 = 'Mac OS';
                            var44 = var42 == var44;
                            var42 = var23;
                            if (!var44) {
                                _fun29231_ip = 3595;
                                continue _fun29231
                            }
                        case 3592:
                            var42 = var43;
                        case 3595:
                            var29 = var42;
                        case 3598:
                            var18 = var29;
                        case 3601:
                            if (var18) {
                                _fun29231_ip = 3647;
                                continue _fun29231
                            }
                        case 3604:
                            var29 = var28 == var25;
                            if (!var29) {
                                _fun29231_ip = 3638;
                                continue _fun29231
                            }
                        case 3611:
                            var44 = /\bPlayStation\b(?! Vita\b)/i;
                            var43 = var44.test;
                            var42 = var6;
                            var29 = var43.bind(var44)(var42);
                        case 3638:
                            if (!var29) {
                                _fun29231_ip = 3644;
                                continue _fun29231
                            }
                        case 3641:
                            var29 = var32;
                        case 3644:
                            var18 = var29;
                        case 3647:
                            var12 = var18;
                            var32 = var25;
                            if (!var18) {
                                _fun29231_ip = 3670;
                                continue _fun29231
                            }
                        case 3656:
                            var25 = var12;
                            var18 = new Array(1);
                            var18[0] = var25;
                            var32 = var18;
                        case 3670:
                            var18 = var6;
                            if (!(var13 == var18)) {
                                _fun29231_ip = 3720;
                                continue _fun29231
                            }
                        case 3677:
                            var25 = /; *(?:XBLWP|ZuneWP)(\d+)/i;
                            var18 = var25.exec;
                            var18 = var18.bind(var25)(var10);
                            if (var18) {
                                _fun29231_ip = 3707;
                                continue _fun29231
                            }
                        case 3705:
                            var18 = 0;
                        case 3707:
                            var18 = var18[var21];
                            var12 = var18;
                            if (var18) {
                                _fun29231_ip = 3955;
                                continue _fun29231
                            }
                        case 3720:
                            var25 = /\bWPDesktop\b/i;
                            var18 = var25.test;
                            var18 = var18.bind(var25)(var10);
                            if (var18) {
                                _fun29231_ip = 3878;
                                continue _fun29231
                            }
                        case 3750:
                            var18 = var6;
                            var18 = var13 != var18;
                            if (!var18) {
                                _fun29231_ip = 3764;
                                continue _fun29231
                            }
                        case 3760:
                            var18 = var23 == var32;
                        case 3764:
                            if (!var18) {
                                _fun29231_ip = 3798;
                                continue _fun29231
                            }
                        case 3767:
                            var25 = /\brv:([\d.]+)/;
                            var23 = var25.exec;
                            var23 = var23.bind(var25)(var10);
                            var12 = var23;
                            var18 = var23;
                        case 3798:
                            if (!var18) {
                                _fun29231_ip = 4046;
                                continue _fun29231
                            }
                        case 3804:
                            var18 = var6;
                            if (!var18) {
                                _fun29231_ip = 3863;
                                continue _fun29231
                            }
                        case 3810:
                            var25 = var1;
                            var23 = var25.push;
                            var29 = var6;
                            var18 = 'identifying as ';
                            var29 = var18 + var29;
                            var42 = var3;
                            var18 = '';
                            if (!var42) {
                                _fun29231_ip = 3854;
                                continue _fun29231
                            }
                        case 3841:
                            var43 = var3;
                            var42 = ' ';
                            var18 = var42 + var43;
                        case 3854:
                            var18 = var29 + var18;
                            var18 = var23.bind(var25)(var18);
                        case 3863:
                            var6 = var13;
                            var18 = var12;
                            var3 = var18[var21];
                            _fun29231_ip = 4046;
                            continue _fun29231;
                        case 3878:
                            var6 = 'IE Mobile';
                            var5 = 'Windows Phone 8.x';
                            var25 = var1;
                            var23 = var25.unshift;
                            var18 = 'desktop mode';
                            var18 = var23.bind(var25)(var18);
                            var18 = var3;
                            if (var18) {
                                _fun29231_ip = 4046;
                                continue _fun29231
                            }
                        case 3919:
                            var23 = /\brv:([\d.]+)/;
                            var18 = var23.exec;
                            var18 = var18.bind(var23)(var10);
                            if (var18) {
                                _fun29231_ip = 3949;
                                continue _fun29231
                            }
                        case 3947:
                            var18 = 0;
                        case 3949:
                            var3 = var18[var21];
                            _fun29231_ip = 4046;
                            continue _fun29231;
                        case 3955:
                            var23 = var6;
                            var18 = ' Mobile';
                            var6 = var23 + var18;
                            var25 = /\+$/;
                            var23 = var25.test;
                            var18 = var12;
                            var23 = var23.bind(var25)(var18);
                            var18 = var12;
                            if (var23) {
                                _fun29231_ip = 4013;
                                continue _fun29231
                            }
                        case 4001:
                            var23 = '.x';
                            var23 = var18 + var23;
                            _fun29231_ip = 4016;
                            continue _fun29231;
                        case 4013:
                            var23 = var18;
                        case 4016:
                            var18 = 'Windows Phone ';
                            var5 = var18 + var23;
                            var25 = var1;
                            var23 = var25.unshift;
                            var18 = 'desktop mode';
                            var18 = var23.bind(var25)(var18);
                        case 4046:
                            var18 = var10;
                            var23 = var32;
                            if (!var16) {
                                _fun29231_ip = 5337;
                                continue _fun29231
                            }
                        case 4058:
                            var43 = var27;
                            var25 = var0 != var43;
                            var29 = 'number';
                            var42 = var29;
                            if (!var25) {
                                _fun29231_ip = 4084;
                                continue _fun29231
                            }
                        case 4075:
                            var25 = var43.global;
                            var42 = typeof var25;
                        case 4084:
                            var44 = /^(?:boolean|number|string|undefined)$/;
                            var25 = var44.test;
                            var25 = var25.bind(var44)(var42);
                            var44 = var42;
                            if (var25) {
                                _fun29231_ip = 4137;
                                continue _fun29231
                            }
                        case 4114:
                            var42 = 'object';
                            var42 = var42 === var44;
                            if (!var42) {
                                _fun29231_ip = 4134;
                                continue _fun29231
                            }
                        case 4125:
                            var43 = var43.global;
                            var42 = !var43;
                        case 4134:
                            var25 = var42;
                        case 4137:
                            var25 = !var25;
                            if (var25) {
                                _fun29231_ip = 4678;
                                continue _fun29231
                            }
                        case 4146:
                            var42 = _closure2_slot10;
                            var25 = var27;
                            var25 = var25.runtime;
                            var12 = var25;
                            var25 = var42.bind(var8)(var25);
                            if (!(var25 != var41)) {
                                _fun29231_ip = 4634;
                                continue _fun29231
                            }
                        case 4174:
                            var41 = _closure2_slot10;
                            var25 = var27;
                            var25 = var25.phantom;
                            var12 = var25;
                            var25 = var41.bind(var8)(var25);
                            if (!(var25 != var39)) {
                                _fun29231_ip = 4556;
                                continue _fun29231
                            }
                        case 4202:
                            var25 = var40.documentMode;
                            var25 = typeof var25;
                            if (!(var29 === var25)) {
                                _fun29231_ip = 4249;
                                continue _fun29231
                            }
                        case 4215:
                            var39 = /\bTrident\\/(\d + ) / i;
                            var25 = var39.exec;
                            var25 = var25.bind(var39)(var10);
                            var12 = var25;
                            if (var25) {
                                _fun29231_ip = 4380;
                                continue _fun29231
                            }
                        case 4249:
                            var25 = var40.documentMode;
                            var25 = typeof var25;
                            var39 = var29 === var25;
                            if (!var39) {
                                _fun29231_ip = 4292;
                                continue _fun29231
                            }
                        case 4265:
                            var41 = /^(?:Chrome|Firefox)\b/;
                            var29 = var41.test;
                            var25 = var6;
                            var39 = var29.bind(var41)(var25);
                        case 4292:
                            var29 = var10;
                            var25 = var32;
                            if (!var39) {
                                _fun29231_ip = 5310;
                                continue _fun29231
                            }
                        case 4304:
                            var42 = var1;
                            var41 = var42.push;
                            var43 = var6;
                            var39 = 'masking as ';
                            var44 = var39 + var43;
                            var43 = var3;
                            var39 = ' ';
                            var39 = var44 + var39;
                            var39 = var39 + var43;
                            var39 = var41.bind(var42)(var39);
                            var6 = var13;
                            var3 = '11.0';
                            var25 = ['Trident'];
                            var5 = 'Windows';
                            var29 = var10;
                            _fun29231_ip = 5310;
                            continue _fun29231;
                        case 4380:
                            var41 = var3;
                            var39 = new Array(2);
                            var39[0] = var41;
                            var40 = var40.documentMode;
                            var39[1] = var40;
                            var3 = var39;
                            var40 = var12;
                            var40 = var40[var21];
                            var41 = var40 - 0;
                            var40 = 4;
                            var40 = var41 + var40;
                            var12 = var40;
                            var39 = var39[var21];
                            if (!(var40 != var39)) {
                                _fun29231_ip = 4493;
                                continue _fun29231
                            }
                        case 4432:
                            var41 = var1;
                            var40 = var41.push;
                            var39 = var3;
                            var42 = var39[var21];
                            var39 = 'IE ';
                            var42 = var39 + var42;
                            var39 = ' mode';
                            var39 = var42 + var39;
                            var39 = var40.bind(var41)(var39);
                            if (!var32) {
                                _fun29231_ip = 4483;
                                continue _fun29231
                            }
                        case 4475:
                            var39 = '';
                            var32[var21] = var39;
                        case 4483:
                            var40 = var3;
                            var39 = var12;
                            var40[var21] = var39;
                        case 4493:
                            var39 = var6;
                            if (!(var13 != var39)) {
                                _fun29231_ip = 4511;
                                continue _fun29231
                            }
                        case 4500:
                            var40 = var3;
                            var39 = 0;
                            var39 = var40[var39];
                            _fun29231_ip = 4542;
                            continue _fun29231;
                        case 4511:
                            var40 = global;
                            var41 = var40.String;
                            var40 = var3;
                            var42 = var40[var21];
                            var40 = var42.toFixed;
                            var40 = var40.bind(var42)(var21);
                            var39 = var41.bind(var8)(var40);
                        case 4542:
                            var3 = var39;
                            var29 = var10;
                            var25 = var32;
                            _fun29231_ip = 5310;
                            continue _fun29231;
                        case 4556:
                            var6 = var34;
                            var34 = var12;
                            var34 = var34.version;
                            if (var34) {
                                _fun29231_ip = 4573;
                                continue _fun29231
                            }
                        case 4571:
                            var34 = null;
                        case 4573:
                            var12 = var34;
                            if (!var34) {
                                _fun29231_ip = 4620;
                                continue _fun29231
                            }
                        case 4579:
                            var40 = var12;
                            var39 = var40.major;
                            var41 = '.';
                            var42 = var39 + var41;
                            var39 = var40.minor;
                            var39 = var42 + var39;
                            var40 = var40.patch;
                            var39 = var39 + var41;
                            var34 = var39 + var40;
                        case 4620:
                            var3 = var34;
                            var29 = var10;
                            var25 = var32;
                            _fun29231_ip = 5310;
                            continue _fun29231;
                        case 4634:
                            var6 = 'Adobe AIR';
                            var34 = var12;
                            var34 = var34.flash;
                            var34 = var34.system;
                            var34 = var34.Capabilities;
                            var5 = var34.os;
                            var29 = var10;
                            var25 = var32;
                            _fun29231_ip = 5310;
                            continue _fun29231;
                        case 4678:
                            var34 = var10;
                            if (!var38) {
                                _fun29231_ip = 4779;
                                continue _fun29231
                            }
                        case 4684:
                            var38 = var38.lang;
                            var40 = var38.System;
                            var12 = var40;
                            var39 = var40.getProperty;
                            var38 = 'os.arch';
                            var38 = var39.bind(var40)(var38);
                            var39 = var5;
                            if (var39) {
                                _fun29231_ip = 4773;
                                continue _fun29231
                            }
                        case 4722:
                            var43 = var12;
                            var41 = var43.getProperty;
                            var40 = 'os.name';
                            var41 = var41.bind(var43)(var40);
                            var40 = ' ';
                            var41 = var41 + var40;
                            var42 = var43.getProperty;
                            var40 = 'os.version';
                            var40 = var42.bind(var43)(var40);
                            var39 = var41 + var40;
                        case 4773:
                            var5 = var39;
                            var34 = var38;
                        case 4779:
                            if (var37) {
                                _fun29231_ip = 5149;
                                continue _fun29231
                            }
                        case 4785:
                            var37 = var27;
                            var37 = var37.process;
                            var38 = 'object';
                            var37 = typeof var37;
                            var37 = var38 === var37;
                            if (!var37) {
                                _fun29231_ip = 4826;
                                continue _fun29231
                            }
                        case 4808:
                            var39 = var27;
                            var39 = var39.process;
                            var39 = var39.browser;
                            var37 = !var39;
                        case 4826:
                            if (!var37) {
                                _fun29231_ip = 4844;
                                continue _fun29231
                            }
                        case 4829:
                            var39 = var27;
                            var39 = var39.process;
                            var12 = var39;
                            var37 = var39;
                        case 4844:
                            var29 = var34;
                            var25 = var32;
                            if (!var37) {
                                _fun29231_ip = 5310;
                                continue _fun29231
                            }
                        case 4856:
                            var37 = var12;
                            var37 = var37.versions;
                            var37 = typeof var37;
                            if (!(var38 === var37)) {
                                _fun29231_ip = 5054;
                                continue _fun29231
                            }
                        case 4875:
                            var37 = var12;
                            var37 = var37.versions;
                            var37 = var37.electron;
                            var38 = 'string';
                            var37 = typeof var37;
                            if (!(var38 !== var37)) {
                                _fun29231_ip = 4998;
                                continue _fun29231
                            }
                        case 4901:
                            var37 = var12;
                            var37 = var37.versions;
                            var37 = var37.nw;
                            var37 = typeof var37;
                            if (!(var38 === var37)) {
                                _fun29231_ip = 5054;
                                continue _fun29231
                            }
                        case 4926:
                            var41 = var1;
                            var40 = var41.push;
                            var38 = var3;
                            var37 = 'Chromium ';
                            var39 = var37 + var38;
                            var37 = var12;
                            var38 = var37.versions;
                            var42 = var38.node;
                            var38 = 'Node ';
                            var38 = var38 + var42;
                            var38 = var40.bind(var41)(var39, var38);
                            var6 = 'NW.js';
                            var37 = var37.versions;
                            var3 = var37.nw;
                            _fun29231_ip = 5054;
                            continue _fun29231;
                        case 4998:
                            var40 = var1;
                            var39 = var40.push;
                            var37 = var12;
                            var38 = var37.versions;
                            var41 = var38.node;
                            var38 = 'Node ';
                            var38 = var38 + var41;
                            var38 = var39.bind(var40)(var38);
                            var6 = 'Electron';
                            var37 = var37.versions;
                            var3 = var37.electron;
                        case 5054:
                            var38 = var6;
                            var37 = var34;
                            if (var38) {
                                _fun29231_ip = 5138;
                                continue _fun29231
                            }
                        case 5063:
                            var6 = 'Node.js';
                            var39 = var12;
                            var38 = var39.arch;
                            var5 = var39.platform;
                            var41 = /[\d.]+/;
                            var40 = var41.exec;
                            var39 = var39.version;
                            var40 = var40.bind(var41)(var39);
                            var3 = var40;
                            var39 = null;
                            if (!var40) {
                                _fun29231_ip = 5132;
                                continue _fun29231
                            }
                        case 5123:
                            var41 = var3;
                            var40 = 0;
                            var39 = var41[var40];
                        case 5132:
                            var3 = var39;
                            var37 = var38;
                        case 5138:
                            var29 = var37;
                            var25 = var32;
                            _fun29231_ip = 5310;
                            continue _fun29231;
                        case 5149: // try_start_0
                            var39 = var27;
                            var38 = var39.require;
                            var37 = 'ringo/engine';
                            var37 = var38.bind(var39)(var37);
                            var39 = var37.version;
                            var38 = var39.join;
                            var37 = '.';
                            var3 = var38.bind(var39)(var37);
                            var6 = 'RingoJS';
                        case 5195: // try_end0
                            _fun29231_ip = 5286;
                            continue _fun29231;
                        case 5197: // catch_target0
                            CatchBlockStart(arg_register = 37);
                            var38 = var27;
                            var38 = var38.system;
                            var12 = var38;
                            var37 = var38;
                            if (!var38) {
                                _fun29231_ip = 5245;
                                continue _fun29231
                            }
                        case 5217:
                            var38 = var12;
                            var38 = var38.global;
                            var39 = var38.system;
                            var38 = var27;
                            var38 = var38.system;
                            var37 = var39 == var38;
                        case 5245:
                            if (!var37) {
                                _fun29231_ip = 5286;
                                continue _fun29231
                            }
                        case 5248:
                            var6 = 'Narwhal';
                            var37 = var5;
                            if (var37) {
                                _fun29231_ip = 5286;
                                continue _fun29231
                            }
                        case 5260:
                            var39 = var12;
                            var38 = 0;
                            var38 = var39[var38];
                            var38 = var38.os;
                            var37 = var38;
                            if (var38) {
                                _fun29231_ip = 5283;
                                continue _fun29231
                            }
                        case 5281:
                            var37 = null;
                        case 5283:
                            var5 = var37;
                        case 5286:
                            var37 = var6;
                            var29 = var34;
                            var25 = var32;
                            if (var37) {
                                _fun29231_ip = 5310;
                                continue _fun29231
                            }
                        case 5298:
                            var6 = 'Rhino';
                            var29 = var34;
                            var25 = var32;
                        case 5310:
                            var32 = var5;
                            if (!var32) {
                                _fun29231_ip = 5328;
                                continue _fun29231
                            }
                        case 5316:
                            var37 = _closure2_slot8;
                            var34 = var5;
                            var32 = var37.bind(var8)(var34);
                        case 5328:
                            var5 = var32;
                            var18 = var29;
                            var23 = var25;
                        case 5337:
                            var29 = var3;
                            if (!var29) {
                                _fun29231_ip = 5469;
                                continue _fun29231
                            }
                        case 5346:
                            var34 = /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i;
                            var32 = var34.exec;
                            var25 = var3;
                            var25 = var32.bind(var34)(var25);
                            if (var25) {
                                _fun29231_ip = 5426;
                                continue _fun29231
                            }
                        case 5377:
                            var37 = /(?:alpha|beta)(?: ?\d)?/i;
                            var34 = var37.exec;
                            var32 = ';';
                            var38 = var10 + var32;
                            var32 = var16;
                            if (!var16) {
                                _fun29231_ip = 5417;
                                continue _fun29231
                            }
                        case 5411:
                            var32 = var20.appMinorVersion;
                        case 5417:
                            var32 = var38 + var32;
                            var25 = var34.bind(var37)(var32);
                        case 5426:
                            if (var25) {
                                _fun29231_ip = 5463;
                                continue _fun29231
                            }
                        case 5429:
                            var34 = /\bMinefield\b/i;
                            var32 = var34.test;
                            var32 = var32.bind(var34)(var10);
                            if (!var32) {
                                _fun29231_ip = 5460;
                                continue _fun29231
                            }
                        case 5456:
                            var32 = 'a';
                        case 5460:
                            var25 = var32;
                        case 5463:
                            var12 = var25;
                            var29 = var25;
                        case 5469:
                            var25 = null;
                            if (!var29) {
                                _fun29231_ip = 5615;
                                continue _fun29231
                            }
                        case 5477:
                            var34 = /b/i;
                            var32 = var34.test;
                            var29 = var12;
                            var32 = var32.bind(var34)(var29);
                            var29 = 'alpha';
                            if (!var32) {
                                _fun29231_ip = 5515;
                                continue _fun29231
                            }
                        case 5511:
                            var29 = 'beta';
                        case 5515:
                            var38 = var3;
                            var37 = var38.replace;
                            var32 = global;
                            var34 = var32.RegExp;
                            var39 = var12;
                            var32 = '\\+?$';
                            var32 = var39 + var32;
                            var32 = var34.bind(var8)(var32);
                            var34 = '';
                            var32 = var37.bind(var38)(var32, var34);
                            var37 = 'beta';
                            if (!(var37 === var29)) {
                                _fun29231_ip = 5570;
                                continue _fun29231
                            }
                        case 5567:
                            var33 = var36;
                        case 5570:
                            var33 = var32 + var33;
                            var37 = /\d+\+?/;
                            var36 = var37.exec;
                            var32 = var12;
                            var32 = var36.bind(var37)(var32);
                            if (var32) {
                                _fun29231_ip = 5608;
                                continue _fun29231
                            }
                        case 5605:
                            var32 = var34;
                        case 5608:
                            var3 = var33 + var32;
                            var25 = var29;
                        case 5615:
                            var32 = var6;
                            var29 = 'Fennec';
                            if (!(var29 != var32)) {
                                _fun29231_ip = 7014;
                                continue _fun29231
                            }
                        case 5631:
                            var29 = var6;
                            if (!(var30 == var29)) {
                                _fun29231_ip = 5671;
                                continue _fun29231
                            }
                        case 5638:
                            var33 = /\b(?:Android|Firefox OS)\b/;
                            var32 = var33.test;
                            var29 = var5;
                            var29 = var32.bind(var33)(var29);
                            if (var29) {
                                _fun29231_ip = 7014;
                                continue _fun29231
                            }
                        case 5671:
                            var32 = var6;
                            var29 = 'Maxthon';
                            if (!(var29 == var32)) {
                                _fun29231_ip = 5693;
                                continue _fun29231
                            }
                        case 5684:
                            var29 = var3;
                            if (var29) {
                                _fun29231_ip = 6969;
                                continue _fun29231
                            }
                        case 5693:
                            var32 = /\bXbox\b/i;
                            var29 = var32.test;
                            var29 = var29.bind(var32)(var14);
                            if (var29) {
                                _fun29231_ip = 6889;
                                continue _fun29231
                            }
                        case 5723:
                            var33 = /^(?:Chrome|IE|Opera)$/;
                            var32 = var33.test;
                            var29 = var6;
                            var29 = var32.bind(var33)(var29);
                            if (var29) {
                                _fun29231_ip = 5792;
                                continue _fun29231
                            }
                        case 5753:
                            var29 = var6;
                            if (!var29) {
                                _fun29231_ip = 5838;
                                continue _fun29231
                            }
                        case 5759:
                            if (var14) {
                                _fun29231_ip = 5838;
                                continue _fun29231
                            }
                        case 5762:
                            var33 = /Browser|Mobi/;
                            var32 = var33.test;
                            var29 = var6;
                            var29 = var32.bind(var33)(var29);
                            if (var29) {
                                _fun29231_ip = 5838;
                                continue _fun29231
                            }
                        case 5792:
                            var32 = var5;
                            var29 = 'Windows CE';
                            if (!(var29 != var32)) {
                                _fun29231_ip = 6862;
                                continue _fun29231
                            }
                        case 5808:
                            var32 = /Mobi/i;
                            var29 = var32.test;
                            var29 = var29.bind(var32)(var10);
                            if (var29) {
                                _fun29231_ip = 6862;
                                continue _fun29231
                            }
                        case 5838:
                            var29 = var6;
                            if (!(var13 == var29)) {
                                _fun29231_ip = 5851;
                                continue _fun29231
                            }
                        case 5845:
                            if (var16) {
                                _fun29231_ip = 6784;
                                continue _fun29231
                            }
                        case 5851:
                            var32 = /\bBlackBerry\b/;
                            var29 = var32.test;
                            var29 = var29.bind(var32)(var14);
                            if (var29) {
                                _fun29231_ip = 5905;
                                continue _fun29231
                            }
                        case 5878:
                            var32 = /\bBB10\b/;
                            var29 = var32.test;
                            var29 = var29.bind(var32)(var10);
                            if (!var29) {
                                _fun29231_ip = 5999;
                                continue _fun29231
                            }
                        case 5905:
                            var29 = global;
                            var33 = var29.RegExp;
                            var34 = var14.replace;
                            var32 = / +/g;
                            var29 = ' *';
                            var32 = var34.bind(var14)(var32, var29);
                            var29 = '/([.\\d]+)';
                            var32 = var32 + var29;
                            var29 = 'i';
                            var32 = var33.bind(var8)(var32, var29);
                            var29 = var32.exec;
                            var29 = var29.bind(var32)(var10);
                            if (var29) {
                                _fun29231_ip = 5980;
                                continue _fun29231
                            }
                        case 5978:
                            var29 = 0;
                        case 5980:
                            var29 = var29[var21];
                            if (var29) {
                                _fun29231_ip = 5990;
                                continue _fun29231
                            }
                        case 5987:
                            var29 = var3;
                        case 5990:
                            var12 = var29;
                            if (var29) {
                                _fun29231_ip = 6672;
                                continue _fun29231
                            }
                        case 5999:
                            var32 = _closure2_slot9;
                            var29 = this;
                            var29 = var29 != var32;
                            if (!var29) {
                                _fun29231_ip = 6017;
                                continue _fun29231
                            }
                        case 6013:
                            var29 = var2 != var14;
                        case 6017:
                            if (!var29) {
                                _fun29231_ip = 6311;
                                continue _fun29231
                            }
                        case 6023:
                            var2 = var16;
                            if (!var16) {
                                _fun29231_ip = 6032;
                                continue _fun29231
                            }
                        case 6029:
                            var2 = var9;
                        case 6032:
                            if (var2) {
                                _fun29231_ip = 6092;
                                continue _fun29231
                            }
                        case 6035:
                            var33 = /Opera/;
                            var32 = var33.test;
                            var9 = var6;
                            var9 = var32.bind(var33)(var9);
                            if (!var9) {
                                _fun29231_ip = 6089;
                                continue _fun29231
                            }
                        case 6065:
                            var33 = /\b(?:MSIE|Firefox)\b/i;
                            var32 = var33.test;
                            var9 = var32.bind(var33)(var10);
                        case 6089:
                            var2 = var9;
                        case 6092:
                            if (var2) {
                                _fun29231_ip = 6135;
                                continue _fun29231
                            }
                        case 6095:
                            var9 = var6;
                            var9 = var30 == var9;
                            if (!var9) {
                                _fun29231_ip = 6132;
                                continue _fun29231
                            }
                        case 6105:
                            var33 = /\bOS X (?:\d+\.){2,}/;
                            var32 = var33.test;
                            var30 = var5;
                            var9 = var32.bind(var33)(var30);
                        case 6132:
                            var2 = var9;
                        case 6135:
                            if (var2) {
                                _fun29231_ip = 6308;
                                continue _fun29231
                            }
                        case 6141:
                            var9 = var6;
                            var9 = var13 == var9;
                            if (!var9) {
                                _fun29231_ip = 6305;
                                continue _fun29231
                            }
                        case 6154:
                            var13 = var5;
                            if (!var13) {
                                _fun29231_ip = 6190;
                                continue _fun29231
                            }
                        case 6160:
                            var33 = /^Win/;
                            var32 = var33.test;
                            var30 = var5;
                            var30 = var32.bind(var33)(var30);
                            var13 = !var30;
                        case 6190:
                            if (!var13) {
                                _fun29231_ip = 6210;
                                continue _fun29231
                            }
                        case 6193:
                            var32 = var3;
                            var30 = 5.5;
                            var13 = var32 > var30;
                        case 6210:
                            if (var13) {
                                _fun29231_ip = 6256;
                                continue _fun29231
                            }
                        case 6213:
                            var33 = /\bWindows XP\b/;
                            var32 = var33.test;
                            var30 = var5;
                            var30 = var32.bind(var33)(var30);
                            if (!var30) {
                                _fun29231_ip = 6253;
                                continue _fun29231
                            }
                        case 6243:
                            var33 = var3;
                            var32 = 8;
                            var30 = var33 > var32;
                        case 6253:
                            var13 = var30;
                        case 6256:
                            if (var13) {
                                _fun29231_ip = 6302;
                                continue _fun29231
                            }
                        case 6259:
                            var32 = var3;
                            var30 = 8;
                            var30 = var30 == var32;
                            if (!var30) {
                                _fun29231_ip = 6299;
                                continue _fun29231
                            }
                        case 6272:
                            var33 = /\bTrident\b/;
                            var32 = var33.test;
                            var32 = var32.bind(var33)(var10);
                            var30 = !var32;
                        case 6299:
                            var13 = var30;
                        case 6302:
                            var9 = var13;
                        case 6305:
                            var2 = var9;
                        case 6308:
                            var29 = var2;
                        case 6311:
                            if (!var29) {
                                _fun29231_ip = 6380;
                                continue _fun29231
                            }
                        case 6314:
                            var13 = _closure2_slot3;
                            var9 = var13.test;
                            var33 = _closure2_slot14;
                            var32 = var33.call;
                            var30 = _closure2_slot9;
                            var36 = var10.replace;
                            var34 = _closure2_slot3;
                            var2 = '';
                            var34 = var36.bind(var10)(var34, var2);
                            var2 = ';';
                            var2 = var34 + var2;
                            var2 = var32.bind(var33)(var30, var2);
                            var12 = var2;
                            var2 = var9.bind(var13)(var2);
                            var29 = !var2;
                        case 6380:
                            if (!var29) {
                                _fun29231_ip = 6391;
                                continue _fun29231
                            }
                        case 6383:
                            var2 = var12;
                            var29 = var2.name;
                        case 6391:
                            var9 = var23;
                            var2 = var14;
                            var13 = var11;
                            if (!var29) {
                                _fun29231_ip = 7029;
                                continue _fun29231
                            }
                        case 6406:
                            var29 = var12;
                            var32 = var29.name;
                            var30 = 'ing as ';
                            var30 = var30 + var32;
                            var32 = var29.version;
                            var12 = var32;
                            var29 = '';
                            if (!var32) {
                                _fun29231_ip = 6453;
                                continue _fun29231
                            }
                        case 6440:
                            var33 = var12;
                            var32 = ' ';
                            var29 = var32 + var33;
                        case 6453:
                            var12 = var30 + var29;
                            var32 = _closure2_slot3;
                            var30 = var32.test;
                            var29 = var6;
                            var29 = var30.bind(var32)(var29);
                            if (var29) {
                                _fun29231_ip = 6576;
                                continue _fun29231
                            }
                        case 6477:
                            var30 = var12;
                            var29 = 'mask';
                            var12 = var29 + var30;
                            var29 = var19;
                            if (!var35) {
                                _fun29231_ip = 6534;
                                continue _fun29231
                            }
                        case 6494:
                            var32 = _closure2_slot8;
                            var34 = var35.replace;
                            var33 = /([a-z])([A-Z])/g;
                            var30 = '$1 $2';
                            var30 = var34.bind(var35)(var33, var30);
                            var29 = var32.bind(var8)(var30);
                        case 6534:
                            var6 = var29;
                            var32 = /\bIE\b/;
                            var30 = var32.test;
                            var29 = var12;
                            var29 = var30.bind(var32)(var29);
                            if (!var29) {
                                _fun29231_ip = 6569;
                                continue _fun29231
                            }
                        case 6567:
                            var5 = null;
                        case 6569:
                            if (var16) {
                                _fun29231_ip = 6635;
                                continue _fun29231
                            }
                        case 6572:
                            var3 = null;
                            _fun29231_ip = 6635;
                            continue _fun29231;
                        case 6576:
                            var32 = /\bIE\b/;
                            var30 = var32.test;
                            var29 = var12;
                            var29 = var30.bind(var32)(var29);
                            if (!var29) {
                                _fun29231_ip = 6619;
                                continue _fun29231
                            }
                        case 6606:
                            var32 = var5;
                            var30 = 'Mac OS';
                            var29 = var30 == var32;
                        case 6619:
                            if (!var29) {
                                _fun29231_ip = 6624;
                                continue _fun29231
                            }
                        case 6622:
                            var5 = null;
                        case 6624:
                            var30 = var12;
                            var29 = 'identify';
                            var12 = var29 + var30;
                        case 6635:
                            var9 = ['Presto'];
                            var33 = var1;
                            var32 = var33.push;
                            var30 = var12;
                            var30 = var32.bind(var33)(var30);
                            var2 = var14;
                            var13 = var11;
                            _fun29231_ip = 7029;
                            continue _fun29231;
                        case 6672:
                            var30 = var12;
                            var29 = new Array(2);
                            var29[0] = var30;
                            var32 = /BB10/;
                            var30 = var32.test;
                            var30 = var30.bind(var32)(var10);
                            var29[1] = var30;
                            var12 = var29;
                            var32 = var29[var21];
                            var33 = 'Device Software';
                            var30 = var14;
                            var29 = var11;
                            if (!var32) {
                                _fun29231_ip = 6745;
                                continue _fun29231
                            }
                        case 6733:
                            _closure3_slot2 = var0;
                            var30 = null;
                            var29 = var31;
                            var33 = var29;
                        case 6745:
                            var32 = var12;
                            var31 = 0;
                            var32 = var32[var31];
                            var31 = ' ';
                            var31 = var33 + var31;
                            var5 = var31 + var32;
                            var3 = null;
                            var2 = var30;
                            var13 = var29;
                            var9 = var23;
                            _fun29231_ip = 7029;
                            continue _fun29231;
                        case 6784: // try_start_1
                            var27 = var27.external;
                            if (!(var0 === var27)) {
                                _fun29231_ip = 6814;
                                continue _fun29231
                            }
                        case 6794:
                            var30 = var1;
                            var29 = var30.unshift;
                            var27 = 'platform preview';
                            var27 = var29.bind(var30)(var27);
                        case 6814: // try_end1
                            var9 = var23;
                            var2 = var14;
                            var13 = var11;
                            _fun29231_ip = 7029;
                            continue _fun29231;
                        case 6828: // catch_target1
                            CatchBlockStart(arg_register = 27);
                            var30 = var1;
                            var29 = var30.unshift;
                            var27 = 'embedded';
                            var27 = var29.bind(var30)(var27);
                            var9 = var23;
                            var2 = var14;
                            var13 = var11;
                            _fun29231_ip = 7029;
                            continue _fun29231;
                        case 6862:
                            var29 = var6;
                            var27 = ' Mobile';
                            var6 = var29 + var27;
                            var9 = var23;
                            var2 = var14;
                            var13 = var11;
                            _fun29231_ip = 7029;
                            continue _fun29231;
                        case 6889:
                            if (!(var26 == var14)) {
                                _fun29231_ip = 6895;
                                continue _fun29231
                            }
                        case 6893:
                            var5 = null;
                        case 6895:
                            var26 = var26 == var14;
                            if (!var26) {
                                _fun29231_ip = 6926;
                                continue _fun29231
                            }
                        case 6902:
                            var29 = /\bIEMobile\b/;
                            var27 = var29.test;
                            var26 = var27.bind(var29)(var10);
                        case 6926:
                            var9 = var23;
                            var2 = var14;
                            var13 = var11;
                            if (!var26) {
                                _fun29231_ip = 7029;
                                continue _fun29231
                            }
                        case 6938:
                            var29 = var1;
                            var27 = var29.unshift;
                            var26 = 'mobile mode';
                            var26 = var27.bind(var29)(var26);
                            var9 = var23;
                            var2 = var14;
                            var13 = var11;
                            _fun29231_ip = 7029;
                            continue _fun29231;
                        case 6969:
                            var30 = var3;
                            var29 = var30.replace;
                            var27 = /\.[\d.]+/;
                            var26 = '.x';
                            var3 = var29.bind(var30)(var27, var26);
                            var9 = var23;
                            var2 = var14;
                            var13 = var11;
                            _fun29231_ip = 7029;
                            continue _fun29231;
                        case 7014:
                            var6 = 'Firefox Mobile';
                            var9 = var23;
                            var2 = var14;
                            var13 = var11;
                        case 7029:
                            var14 = /\bAppleWebKit\\/([\d.] + \ + ? ) / i;
                            var11 = var14.exec;
                            var11 = var11.bind(var14)(var10);
                            if (var11) {
                                _fun29231_ip = 7059;
                                continue _fun29231
                            }
                        case 7057:
                            var11 = 0;
                        case 7059:
                            var23 = var11[var21];
                            var12 = var23;
                            var11 = var25;
                            var14 = var9;
                            if (!var23) {
                                _fun29231_ip = 8567;
                                continue _fun29231
                            }
                        case 7078:
                            var26 = global;
                            var29 = var26.parseFloat;
                            var27 = var12;
                            var31 = var27.replace;
                            var30 = /\.(\d)$/;
                            var23 = '.0$1';
                            var23 = var31.bind(var27)(var30, var23);
                            var29 = var29.bind(var8)(var23);
                            var23 = new Array(2);
                            var23[0] = var29;
                            var23[1] = var27;
                            var12 = var23;
                            var23 = var6;
                            if (!(var22 == var23)) {
                                _fun29231_ip = 7178;
                                continue _fun29231
                            }
                        case 7147:
                            var23 = var12;
                            var27 = var23[var21];
                            var23 = var27.slice;
                            var30 = -1;
                            var27 = var23.bind(var27)(var30);
                            var23 = '+';
                            if (!(var23 != var27)) {
                                _fun29231_ip = 7259;
                                continue _fun29231
                            }
                        case 7178:
                            var27 = var3;
                            var23 = var12;
                            var23 = var23[var21];
                            var27 = var27 != var23;
                            if (!var27) {
                                _fun29231_ip = 7246;
                                continue _fun29231
                            }
                        case 7195:
                            var29 = var3;
                            var32 = var12;
                            var31 = /\bSafari\\/([\d.] + \ + ? ) / i;
                            var23 = var31.exec;
                            var23 = var23.bind(var31)(var10);
                            if (var23) {
                                _fun29231_ip = 7231;
                                continue _fun29231
                            }
                        case 7229:
                            var23 = 0;
                        case 7231:
                            var23 = var23[var21];
                            var31 = 2;
                            var32[var31] = var23;
                            var27 = var29 != var23;
                        case 7246:
                            var23 = var25;
                            if (var27) {
                                _fun29231_ip = 7289;
                                continue _fun29231
                            }
                        case 7252:
                            var3 = null;
                            var23 = var25;
                            _fun29231_ip = 7289;
                            continue _fun29231;
                        case 7259:
                            var6 = 'WebKit Nightly';
                            var25 = var12;
                            var29 = var25[var21];
                            var27 = var29.slice;
                            var25 = 0;
                            var3 = var27.bind(var29)(var25, var30);
                            var23 = 'alpha';
                        case 7289:
                            var27 = var12;
                            var29 = /\bChrome\\/([\d.] + ) / i;
                            var25 = var29.exec;
                            var25 = var25.bind(var29)(var10);
                            if (var25) {
                                _fun29231_ip = 7322;
                                continue _fun29231
                            }
                        case 7320:
                            var25 = 0;
                        case 7322:
                            var25 = var25[var21];
                            var27[var21] = var25;
                            var25 = var12;
                            var27 = 0;
                            var25 = var25[var27];
                            var50 = 537.36;
                            var25 = var50 == var25;
                            if (!var25) {
                                _fun29231_ip = 7370;
                                continue _fun29231
                            }
                        case 7356:
                            var30 = var12;
                            var29 = 2;
                            var29 = var30[var29];
                            var25 = var50 == var29;
                        case 7370:
                            if (!var25) {
                                _fun29231_ip = 7398;
                                continue _fun29231
                            }
                        case 7373:
                            var30 = var26.parseFloat;
                            var29 = var12;
                            var29 = var29[var21];
                            var30 = var30.bind(var8)(var29);
                            var29 = 28;
                            var25 = var30 >= var29;
                        case 7398:
                            if (!var25) {
                                _fun29231_ip = 7405;
                                continue _fun29231
                            }
                        case 7401:
                            var25 = var28 == var9;
                        case 7405:
                            if (!var25) {
                                _fun29231_ip = 7418;
                                continue _fun29231
                            }
                        case 7408:
                            var9 = ['Blink'];
                        case 7418:
                            if (!var16) {
                                _fun29231_ip = 7440;
                                continue _fun29231
                            }
                        case 7421:
                            if (var24) {
                                _fun29231_ip = 7681;
                                continue _fun29231
                            }
                        case 7427:
                            var24 = var12;
                            var24 = var24[var21];
                            if (var24) {
                                _fun29231_ip = 7681;
                                continue _fun29231
                            }
                        case 7440:
                            if (!var9) {
                                _fun29231_ip = 7453;
                                continue _fun29231
                            }
                        case 7443:
                            var24 = 'like Safari';
                            var9[var21] = var24;
                        case 7453:
                            var24 = var12;
                            var25 = var24[var27];
                            var12 = var25;
                            var24 = 400;
                            var25 = var25 < var24;
                            var24 = var21;
                            if (var25) {
                                _fun29231_ip = 7673;
                                continue _fun29231
                            }
                        case 7482:
                            var28 = var12;
                            var25 = 500;
                            var28 = var28 < var25;
                            var25 = 2;
                            if (var28) {
                                _fun29231_ip = 7670;
                                continue _fun29231
                            }
                        case 7504:
                            var29 = var12;
                            var28 = 526;
                            var29 = var29 < var28;
                            var28 = 3;
                            if (var29) {
                                _fun29231_ip = 7667;
                                continue _fun29231
                            }
                        case 7526:
                            var30 = var12;
                            var29 = 533;
                            var30 = var30 < var29;
                            var29 = 4;
                            if (var30) {
                                _fun29231_ip = 7664;
                                continue _fun29231
                            }
                        case 7545:
                            var31 = var12;
                            var30 = 534;
                            var31 = var31 < var30;
                            var30 = '4+';
                            if (var31) {
                                _fun29231_ip = 7661;
                                continue _fun29231
                            }
                        case 7567:
                            var32 = var12;
                            var31 = 535;
                            var32 = var32 < var31;
                            var31 = 5;
                            if (var32) {
                                _fun29231_ip = 7658;
                                continue _fun29231
                            }
                        case 7586:
                            var33 = var12;
                            var32 = 537;
                            var33 = var33 < var32;
                            var32 = 6;
                            if (var33) {
                                _fun29231_ip = 7655;
                                continue _fun29231
                            }
                        case 7605:
                            var34 = var12;
                            var33 = 538;
                            var34 = var34 < var33;
                            var33 = 7;
                            if (var34) {
                                _fun29231_ip = 7652;
                                continue _fun29231
                            }
                        case 7624:
                            var35 = var12;
                            var34 = 601;
                            var35 = var35 < var34;
                            var34 = '8';
                            if (!var35) {
                                _fun29231_ip = 7649;
                                continue _fun29231
                            }
                        case 7646:
                            var34 = 8;
                        case 7649:
                            var33 = var34;
                        case 7652:
                            var32 = var33;
                        case 7655:
                            var31 = var32;
                        case 7658:
                            var30 = var31;
                        case 7661:
                            var29 = var30;
                        case 7664:
                            var28 = var29;
                        case 7667:
                            var25 = var28;
                        case 7670:
                            var24 = var25;
                        case 7673:
                            var12 = var24;
                            _fun29231_ip = 8413;
                            continue _fun29231;
                        case 7681:
                            if (!var9) {
                                _fun29231_ip = 7694;
                                continue _fun29231
                            }
                        case 7684:
                            var24 = 'like Chrome';
                            var9[var21] = var24;
                        case 7694:
                            var24 = var12;
                            var24 = var24[var21];
                            if (var24) {
                                _fun29231_ip = 8410;
                                continue _fun29231
                            }
                        case 7707:
                            var25 = var12;
                            var27 = var25[var27];
                            var12 = var27;
                            var25 = 530;
                            var27 = var27 < var25;
                            var25 = var21;
                            if (var27) {
                                _fun29231_ip = 8407;
                                continue _fun29231
                            }
                        case 7736:
                            var28 = var12;
                            var27 = 532;
                            var28 = var28 < var27;
                            var27 = 2;
                            if (var28) {
                                _fun29231_ip = 8404;
                                continue _fun29231
                            }
                        case 7758:
                            var29 = var12;
                            var28 = 532.05;
                            var29 = var29 < var28;
                            var28 = 3;
                            if (var29) {
                                _fun29231_ip = 8401;
                                continue _fun29231
                            }
                        case 7784:
                            var30 = var12;
                            var29 = 533;
                            var30 = var30 < var29;
                            var29 = 4;
                            if (var30) {
                                _fun29231_ip = 8398;
                                continue _fun29231
                            }
                        case 7806:
                            var31 = var12;
                            var30 = 534.03;
                            var31 = var31 < var30;
                            var30 = 5;
                            if (var31) {
                                _fun29231_ip = 8395;
                                continue _fun29231
                            }
                        case 7832:
                            var32 = var12;
                            var31 = 534.07;
                            var32 = var32 < var31;
                            var31 = 6;
                            if (var32) {
                                _fun29231_ip = 8392;
                                continue _fun29231
                            }
                        case 7858:
                            var33 = var12;
                            var32 = 534.1;
                            var33 = var33 < var32;
                            var32 = 7;
                            if (var33) {
                                _fun29231_ip = 8389;
                                continue _fun29231
                            }
                        case 7884:
                            var34 = var12;
                            var33 = 534.13;
                            var34 = var34 < var33;
                            var33 = 8;
                            if (var34) {
                                _fun29231_ip = 8386;
                                continue _fun29231
                            }
                        case 7910:
                            var35 = var12;
                            var34 = 534.16;
                            var35 = var35 < var34;
                            var34 = 9;
                            if (var35) {
                                _fun29231_ip = 8383;
                                continue _fun29231
                            }
                        case 7936:
                            var36 = var12;
                            var35 = 534.24;
                            var36 = var36 < var35;
                            var35 = 10;
                            if (var36) {
                                _fun29231_ip = 8380;
                                continue _fun29231
                            }
                        case 7962:
                            var37 = var12;
                            var36 = 534.3;
                            var37 = var37 < var36;
                            var36 = 11;
                            if (var37) {
                                _fun29231_ip = 8377;
                                continue _fun29231
                            }
                        case 7988:
                            var38 = var12;
                            var37 = 535.01;
                            var38 = var38 < var37;
                            var37 = 12;
                            if (var38) {
                                _fun29231_ip = 8374;
                                continue _fun29231
                            }
                        case 8014:
                            var39 = var12;
                            var38 = 535.02;
                            var39 = var39 < var38;
                            var38 = '13+';
                            if (var39) {
                                _fun29231_ip = 8371;
                                continue _fun29231
                            }
                        case 8043:
                            var40 = var12;
                            var39 = 535.07;
                            var40 = var40 < var39;
                            var39 = 15;
                            if (var40) {
                                _fun29231_ip = 8368;
                                continue _fun29231
                            }
                        case 8069:
                            var41 = var12;
                            var40 = 535.11;
                            var41 = var41 < var40;
                            var40 = 16;
                            if (var41) {
                                _fun29231_ip = 8365;
                                continue _fun29231
                            }
                        case 8095:
                            var42 = var12;
                            var41 = 535.19;
                            var42 = var42 < var41;
                            var41 = 17;
                            if (var42) {
                                _fun29231_ip = 8362;
                                continue _fun29231
                            }
                        case 8121:
                            var43 = var12;
                            var42 = 536.05;
                            var43 = var43 < var42;
                            var42 = 18;
                            if (var43) {
                                _fun29231_ip = 8359;
                                continue _fun29231
                            }
                        case 8147:
                            var44 = var12;
                            var43 = 536.1;
                            var44 = var44 < var43;
                            var43 = 19;
                            if (var44) {
                                _fun29231_ip = 8356;
                                continue _fun29231
                            }
                        case 8173:
                            var45 = var12;
                            var44 = 537.01;
                            var45 = var45 < var44;
                            var44 = 20;
                            if (var45) {
                                _fun29231_ip = 8353;
                                continue _fun29231
                            }
                        case 8199:
                            var46 = var12;
                            var45 = 537.11;
                            var46 = var46 < var45;
                            var45 = '21+';
                            if (var46) {
                                _fun29231_ip = 8350;
                                continue _fun29231
                            }
                        case 8228:
                            var47 = var12;
                            var46 = 537.13;
                            var47 = var47 < var46;
                            var46 = 23;
                            if (var47) {
                                _fun29231_ip = 8347;
                                continue _fun29231
                            }
                        case 8251:
                            var48 = var12;
                            var47 = 537.18;
                            var48 = var48 < var47;
                            var47 = 24;
                            if (var48) {
                                _fun29231_ip = 8344;
                                continue _fun29231
                            }
                        case 8274:
                            var49 = var12;
                            var48 = 537.24;
                            var49 = var49 < var48;
                            var48 = 25;
                            if (var49) {
                                _fun29231_ip = 8341;
                                continue _fun29231
                            }
                        case 8297:
                            var49 = var12;
                            var50 = var49 < var50;
                            var49 = 26;
                            if (var50) {
                                _fun29231_ip = 8338;
                                continue _fun29231
                            }
                        case 8310:
                            var50 = 'Blink';
                            var51 = var50 != var9;
                            var50 = '28';
                            if (!var51) {
                                _fun29231_ip = 8335;
                                continue _fun29231
                            }
                        case 8329:
                            var50 = '27';
                        case 8335:
                            var49 = var50;
                        case 8338:
                            var48 = var49;
                        case 8341:
                            var47 = var48;
                        case 8344:
                            var46 = var47;
                        case 8347:
                            var45 = var46;
                        case 8350:
                            var44 = var45;
                        case 8353:
                            var43 = var44;
                        case 8356:
                            var42 = var43;
                        case 8359:
                            var41 = var42;
                        case 8362:
                            var40 = var41;
                        case 8365:
                            var39 = var40;
                        case 8368:
                            var38 = var39;
                        case 8371:
                            var37 = var38;
                        case 8374:
                            var36 = var37;
                        case 8377:
                            var35 = var36;
                        case 8380:
                            var34 = var35;
                        case 8383:
                            var33 = var34;
                        case 8386:
                            var32 = var33;
                        case 8389:
                            var31 = var32;
                        case 8392:
                            var30 = var31;
                        case 8395:
                            var29 = var30;
                        case 8398:
                            var28 = var29;
                        case 8401:
                            var27 = var28;
                        case 8404:
                            var25 = var27;
                        case 8407:
                            var24 = var25;
                        case 8410:
                            var12 = var24;
                        case 8413:
                            if (!var9) {
                                _fun29231_ip = 8506;
                                continue _fun29231
                            }
                        case 8416:
                            var25 = var9[var21];
                            var27 = var12;
                            var24 = '.x';
                            var29 = 'number';
                            var28 = typeof var27;
                            if (!(var29 !== var28)) {
                                _fun29231_ip = 8481;
                                continue _fun29231
                            }
                        case 8440:
                            var30 = /[.+]/;
                            var29 = var30.test;
                            var28 = var12;
                            var29 = var29.bind(var30)(var28);
                            var28 = '+';
                            if (!var29) {
                                _fun29231_ip = 8478;
                                continue _fun29231
                            }
                        case 8474:
                            var28 = '';
                        case 8478:
                            var24 = var28;
                        case 8481:
                            var27 = var27 + var24;
                            var12 = var27;
                            var24 = ' ';
                            var24 = var24 + var27;
                            var24 = var25 + var24;
                            var9[var21] = var24;
                        case 8506:
                            var24 = var6;
                            var24 = var22 == var24;
                            if (!var24) {
                                _fun29231_ip = 8549;
                                continue _fun29231
                            }
                        case 8516:
                            var25 = var3;
                            var25 = !var25;
                            if (var25) {
                                _fun29231_ip = 8546;
                                continue _fun29231
                            }
                        case 8525:
                            var27 = var26.parseInt;
                            var26 = var3;
                            var27 = var27.bind(var8)(var26);
                            var26 = 45;
                            var25 = var27 > var26;
                        case 8546:
                            var24 = var25;
                        case 8549:
                            var11 = var23;
                            var14 = var9;
                            if (!var24) {
                                _fun29231_ip = 8567;
                                continue _fun29231
                            }
                        case 8558:
                            var3 = var12;
                            var11 = var23;
                            var14 = var9;
                        case 8567:
                            var9 = var6;
                            if (!(var19 == var9)) {
                                _fun29231_ip = 8611;
                                continue _fun29231
                            }
                        case 8574:
                            var23 = /\bzbov|zvav$/;
                            var19 = var23.exec;
                            var9 = var5;
                            var9 = var19.bind(var23)(var9);
                            var12 = var9;
                            if (var9) {
                                _fun29231_ip = 8745;
                                continue _fun29231
                            }
                        case 8611:
                            var9 = var6;
                            var19 = var22 == var9;
                            if (!var19) {
                                _fun29231_ip = 8656;
                                continue _fun29231
                            }
                        case 8621:
                            var24 = /\bChrome\b/;
                            var23 = var24.exec;
                            var9 = var14;
                            if (!var14) {
                                _fun29231_ip = 8651;
                                continue _fun29231
                            }
                        case 8647:
                            var9 = var14[var21];
                        case 8651:
                            var19 = var23.bind(var24)(var9);
                        case 8656:
                            var9 = var13;
                            if (!var19) {
                                _fun29231_ip = 8876;
                                continue _fun29231
                            }
                        case 8665:
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
                                _fun29231_ip = 8727;
                                continue _fun29231
                            }
                        case 8720:
                            var5 = null;
                            var17 = var13;
                            _fun29231_ip = 8737;
                            continue _fun29231;
                        case 8727:
                            var5 = 'iOS 4.3+';
                            var17 = 'Apple';
                        case 8737:
                            var9 = var17;
                            _fun29231_ip = 8876;
                            continue _fun29231;
                        case 8745:
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
                                _fun29231_ip = 8806;
                                continue _fun29231
                            }
                        case 8791:
                            var19 = var6;
                            var17 = 'Mobile';
                            var6 = var19 + var17;
                            _fun29231_ip = 8821;
                            continue _fun29231;
                        case 8806:
                            var19 = var6;
                            var17 = 'Mini';
                            var6 = var19 + var17;
                            var3 = null;
                        case 8821:
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
                        case 8876:
                            var13 = var3;
                            if (!var13) {
                                _fun29231_ip = 8933;
                                continue _fun29231
                            }
                        case 8882:
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
                        case 8933:
                            if (!var13) {
                                _fun29231_ip = 8976;
                                continue _fun29231
                            }
                        case 8936:
                            var19 = var10.indexOf;
                            var23 = var12;
                            var17 = '/';
                            var23 = var17 + var23;
                            var17 = '-';
                            var17 = var23 + var17;
                            var19 = var19.bind(var10)(var17);
                            var17 = -1;
                            var13 = var19 > var17;
                        case 8976:
                            if (!var13) {
                                _fun29231_ip = 9009;
                                continue _fun29231
                            }
                        case 8979:
                            var17 = _closure2_slot13;
                            var24 = var5;
                            var23 = var24.replace;
                            var19 = var12;
                            var13 = '';
                            var13 = var23.bind(var24)(var19, var13);
                            var5 = var17.bind(var8)(var13);
                        case 9009:
                            var13 = var14;
                            if (!var14) {
                                _fun29231_ip = 9045;
                                continue _fun29231
                            }
                        case 9015:
                            var23 = /\b(?:Avant|Nook)\b/;
                            var19 = var23.test;
                            var17 = var6;
                            var17 = var19.bind(var23)(var17);
                            var13 = !var17;
                        case 9045:
                            if (!var13) {
                                _fun29231_ip = 9195;
                                continue _fun29231
                            }
                        case 9051:
                            var23 = /Browser|Lunascape|Maxthon/;
                            var19 = var23.test;
                            var17 = var6;
                            var17 = var19.bind(var23)(var17);
                            if (var17) {
                                _fun29231_ip = 9152;
                                continue _fun29231
                            }
                        case 9081:
                            var19 = var6;
                            var19 = var22 != var19;
                            if (!var19) {
                                _fun29231_ip = 9118;
                                continue _fun29231
                            }
                        case 9091:
                            var24 = /^iOS/;
                            var23 = var24.test;
                            var22 = var5;
                            var19 = var23.bind(var24)(var22);
                        case 9118:
                            if (!var19) {
                                _fun29231_ip = 9149;
                                continue _fun29231
                            }
                        case 9121:
                            var24 = /\bSafari\b/;
                            var23 = var24.test;
                            var22 = var14[var21];
                            var19 = var23.bind(var24)(var22);
                        case 9149:
                            var17 = var19;
                        case 9152:
                            if (var17) {
                                _fun29231_ip = 9192;
                                continue _fun29231
                            }
                        case 9155:
                            var23 = /^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|Web)/;
                            var22 = var23.test;
                            var19 = var6;
                            var19 = var22.bind(var23)(var19);
                            if (!var19) {
                                _fun29231_ip = 9189;
                                continue _fun29231
                            }
                        case 9185:
                            var19 = var14[var21];
                        case 9189:
                            var17 = var19;
                        case 9192:
                            var13 = var17;
                        case 9195:
                            if (!var13) {
                                _fun29231_ip = 9217;
                                continue _fun29231
                            }
                        case 9198:
                            var17 = var14.length;
                            var17 = var17 - var21;
                            var17 = var14[var17];
                            var12 = var17;
                            var13 = var17;
                        case 9217:
                            if (!var13) {
                                _fun29231_ip = 9236;
                                continue _fun29231
                            }
                        case 9220:
                            var19 = var1;
                            var17 = var19.push;
                            var13 = var12;
                            var13 = var17.bind(var19)(var13);
                        case 9236:
                            var13 = var1;
                            var13 = var13.length;
                            if (!var13) {
                                _fun29231_ip = 9293;
                                continue _fun29231
                            }
                        case 9247:
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
                        case 9293:
                            var13 = var9;
                            if (!var13) {
                                _fun29231_ip = 9302;
                                continue _fun29231
                            }
                        case 9299:
                            var13 = var2;
                        case 9302:
                            if (!var13) {
                                _fun29231_ip = 9322;
                                continue _fun29231
                            }
                        case 9305:
                            var17 = var2.indexOf;
                            var19 = var17.bind(var2)(var9);
                            var17 = 0;
                            var13 = var19 < var17;
                        case 9322:
                            if (!var13) {
                                _fun29231_ip = 9348;
                                continue _fun29231
                            }
                        case 9325:
                            var19 = var1;
                            var17 = var19.push;
                            var13 = 'on ';
                            var13 = var13 + var9;
                            var13 = var17.bind(var19)(var13);
                        case 9348:
                            if (!var2) {
                                _fun29231_ip = 9418;
                                continue _fun29231
                            }
                        case 9351:
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
                                _fun29231_ip = 9409;
                                continue _fun29231
                            }
                        case 9405:
                            var13 = '';
                        case 9409:
                            var13 = var13 + var2;
                            var13 = var17.bind(var19)(var13);
                        case 9418:
                            var13 = var5;
                            if (!var13) {
                                _fun29231_ip = 9605;
                                continue _fun29231
                            }
                        case 9427:
                            var19 = / ([\d.+]+)$/;
                            var17 = var19.exec;
                            var13 = var5;
                            var13 = var17.bind(var19)(var13);
                            var12 = var13;
                            var17 = var13;
                            if (!var17) {
                                _fun29231_ip = 9513;
                                continue _fun29231
                            }
                        case 9464:
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
                        case 9513:
                            var _closure3_slot1 = var17;
                            var13 = {};
                            var19 = 32;
                            var13.architecture = var19;
                            var19 = var12;
                            if (!var19) {
                                _fun29231_ip = 9565;
                                continue _fun29231
                            }
                        case 9533:
                            if (var17) {
                                _fun29231_ip = 9565;
                                continue _fun29231
                            }
                        case 9536:
                            var23 = var5;
                            var22 = var23.replace;
                            var19 = var12;
                            var17 = 0;
                            var19 = var19[var17];
                            var17 = '';
                            var17 = var22.bind(var23)(var19, var17);
                            _fun29231_ip = 9568;
                            continue _fun29231;
                        case 9565:
                            var17 = var5;
                        case 9568:
                            var13.family = var17;
                            var19 = var12;
                            var17 = null;
                            if (!var19) {
                                _fun29231_ip = 9588;
                                continue _fun29231
                            }
                        case 9581:
                            var19 = var12;
                            var17 = var19[var21];
                        case 9588:
                            var13.version = var17;
                            var17 = function() {
                                _fun29244: for (var _fun29244_ip = 0;;) switch (_fun29244_ip) {
                                    case 0:
                                        var2 = this;
                                        var5 = var2.version;
                                        var3 = var2.family;
                                        var1 = '';
                                        var0 = var1;
                                        if (!var5) {
                                            _fun29244_ip = 48;
                                            continue _fun29244
                                        }
                                    case 25:
                                        var4 = _closure3_slot1;
                                        var0 = var1;
                                        if (var4) {
                                            _fun29244_ip = 48;
                                            continue _fun29244
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
                                            _fun29244_ip = 74;
                                            continue _fun29244
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
                        case 9605:
                            var17 = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i;
                            var13 = var17.exec;
                            var13 = var13.bind(var17)(var18);
                            var12 = var13;
                            if (!var13) {
                                _fun29231_ip = 9876;
                                continue _fun29231
                            }
                        case 9639:
                            var17 = /\bi686\b/i;
                            var13 = var17.test;
                            var13 = var13.bind(var17)(var18);
                            if (var13) {
                                _fun29231_ip = 9876;
                                continue _fun29231
                            }
                        case 9669:
                            var13 = var5;
                            if (!var13) {
                                _fun29231_ip = 9740;
                                continue _fun29231
                            }
                        case 9675:
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
                        case 9740:
                            var12 = var6;
                            if (!var12) {
                                _fun29231_ip = 9851;
                                continue _fun29231
                            }
                        case 9746:
                            var17 = /\bWOW64\b/i;
                            var13 = var17.test;
                            var13 = var13.bind(var17)(var10);
                            if (var13) {
                                _fun29231_ip = 9848;
                                continue _fun29231
                            }
                        case 9773:
                            if (!var16) {
                                _fun29231_ip = 9815;
                                continue _fun29231
                            }
                        case 9776:
                            var19 = /\w(?:86|32)$/;
                            var18 = var19.test;
                            var17 = var20.cpuClass;
                            if (var17) {
                                _fun29231_ip = 9810;
                                continue _fun29231
                            }
                        case 9804:
                            var17 = var20.platform;
                        case 9810:
                            var16 = var18.bind(var19)(var17);
                        case 9815:
                            if (!var16) {
                                _fun29231_ip = 9845;
                                continue _fun29231
                            }
                        case 9818:
                            var18 = /\bWin64; x64\b/i;
                            var17 = var18.test;
                            var17 = var17.bind(var18)(var10);
                            var16 = !var17;
                        case 9845:
                            var13 = var16;
                        case 9848:
                            var12 = var13;
                        case 9851:
                            if (!var12) {
                                _fun29231_ip = 9966;
                                continue _fun29231
                            }
                        case 9854:
                            var16 = var1;
                            var13 = var16.unshift;
                            var12 = '32-bit';
                            var12 = var13.bind(var16)(var12);
                            _fun29231_ip = 9966;
                            continue _fun29231;
                        case 9876:
                            var12 = var5;
                            if (!var12) {
                                _fun29231_ip = 9915;
                                continue _fun29231
                            }
                        case 9882:
                            var17 = /^OS X/;
                            var16 = var17.test;
                            var13 = var5;
                            var13 = var13.family;
                            var12 = var16.bind(var17)(var13);
                        case 9915:
                            if (!var12) {
                                _fun29231_ip = 9925;
                                continue _fun29231
                            }
                        case 9918:
                            var13 = var6;
                            var12 = var15 == var13;
                        case 9925:
                            if (!var12) {
                                _fun29231_ip = 9951;
                                continue _fun29231
                            }
                        case 9928:
                            var13 = global;
                            var15 = var13.parseFloat;
                            var13 = var3;
                            var15 = var15.bind(var8)(var13);
                            var13 = 39;
                            var12 = var15 >= var13;
                        case 9951:
                            if (!var12) {
                                _fun29231_ip = 9966;
                                continue _fun29231
                            }
                        case 9954:
                            var13 = var5;
                            var12 = 64;
                            var13.architecture = var12;
                        case 9966:
                            if (var10) {
                                _fun29231_ip = 9975;
                                continue _fun29231
                            }
                        case 9969:
                            _closure3_slot0 = var0;
                            var10 = null;
                        case 9975:
                            var0 = {};
                            var0.description = var10;
                            var12 = var14;
                            if (!var12) {
                                _fun29231_ip = 9995;
                                continue _fun29231
                            }
                        case 9989:
                            var13 = 0;
                            var12 = var14[var13];
                        case 9995:
                            var0.layout = var12;
                            var0.manufacturer = var9;
                            var9 = var6;
                            var0.name = var9;
                            var0.prerelease = var11;
                            var0.product = var2;
                            var0.ua = var10;
                            if (!var9) {
                                _fun29231_ip = 10040;
                                continue _fun29231
                            }
                        case 10037:
                            var9 = var3;
                        case 10040:
                            var0.version = var9;
                            var9 = var5;
                            if (var9) {
                                _fun29231_ip = 10074;
                                continue _fun29231
                            }
                        case 10052:
                            var10 = {
                                'architecture': null,
                                'family': null,
                                'version': null
                            };
                            var11 = function() {
                                var0 = 'null';
                                return var0;
                            };
                            var10.toString = var11;
                            var9 = var10;
                        case 10074:
                            var0.os = var9;
                            var7 = _closure2_slot14;
                            var0.parse = var7;
                            var4 = function() {
                                _fun29246: for (var _fun29246_ip = 0;;) switch (_fun29246_ip) {
                                    case 0:
                                        var0 = this;
                                        var0 = var0.description;
                                        if (var0) {
                                            _fun29246_ip = 15;
                                            continue _fun29246
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
                                _fun29231_ip = 10124;
                                continue _fun29231
                            }
                        case 10110:
                            var7 = var1;
                            var4 = var7.unshift;
                            var3 = var4.bind(var7)(var3);
                        case 10124:
                            var3 = var0.name;
                            if (!var3) {
                                _fun29231_ip = 10149;
                                continue _fun29231
                            }
                        case 10132:
                            var7 = var1;
                            var4 = var7.unshift;
                            var3 = var6;
                            var3 = var4.bind(var7)(var3);
                        case 10149:
                            var3 = var5;
                            if (!var3) {
                                _fun29231_ip = 10158;
                                continue _fun29231
                            }
                        case 10155:
                            var3 = var6;
                        case 10158:
                            if (!var3) {
                                _fun29231_ip = 10242;
                                continue _fun29231
                            }
                        case 10161:
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
                                _fun29231_ip = 10239;
                                continue _fun29231
                            }
                        case 10206:
                            var7 = var5;
                            var9 = var6;
                            var6 = var9.split;
                            var6 = var6.bind(var9)(var10);
                            var6 = var6[var8];
                            var6 = var7 != var6;
                            if (!var6) {
                                _fun29231_ip = 10236;
                                continue _fun29231
                            }
                        case 10233:
                            var6 = !var2;
                        case 10236:
                            var4 = var6;
                        case 10239:
                            var3 = var4;
                        case 10242:
                            if (!var3) {
                                _fun29231_ip = 10292;
                                continue _fun29231
                            }
                        case 10245:
                            var4 = var1;
                            var3 = var4.push;
                            var6 = var5;
                            if (var2) {
                                _fun29231_ip = 10271;
                                continue _fun29231
                            }
                        case 10259:
                            var2 = 'on ';
                            var2 = var2 + var6;
                            _fun29231_ip = 10287;
                            continue _fun29231;
                        case 10271:
                            var5 = '(';
                            var6 = var5 + var6;
                            var5 = ')';
                            var2 = var6 + var5;
                        case 10287:
                            var2 = var3.bind(var4)(var2);
                        case 10292:
                            var2 = var1;
                            var2 = var2.length;
                            if (!var2) {
                                _fun29231_ip = 10328;
                                continue _fun29231
                            }
                        case 10303:
                            var3 = var1;
                            var2 = var3.join;
                            var1 = ' ';
                            var1 = var2.bind(var3)(var1);
                            var0.description = var1;
                        case 10328:
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
                    _fun29222_ip = 422;
                    continue _fun29222
                }
            case 384:
                var8 = var2.define;
                var8 = var8.amd;
                var9 = 'object';
                var8 = typeof var8;
                if (!(var9 === var8)) {
                    _fun29222_ip = 422;
                    continue _fun29222
                }
            case 407:
                var8 = var2.define;
                var8 = var8.amd;
                if (var8) {
                    _fun29222_ip = 449;
                    continue _fun29222
                }
            case 422:
                if (!var7) {
                    _fun29222_ip = 428;
                    continue _fun29222
                }
            case 425:
                if (var5) {
                    _fun29222_ip = 436;
                    continue _fun29222
                }
            case 428:
                var4.platform = var3;
                _fun29222_ip = 471;
                continue _fun29222;
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
                _fun29222_ip = 471;
                continue _fun29222;
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