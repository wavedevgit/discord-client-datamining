// lib/Keybinds.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun94917: for (var _fun94917_ip = 0;;) switch (_fun94917_ip) {
        case 0:
            var4 = require;
            var11 = metroImportDefault;
            var2 = exports;
            var5 = dependencyMap;
            var _closure1_slot0 = var4;
            var _closure1_slot1 = var11;
            var _closure1_slot2 = var5;
            var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var3
                _fun94918: for (var _fun94918_ip = 0;;) switch (_fun94918_ip) {
                    case 0:
                        var2 = arg0;
                        var _closure2_slot0 = var2;
                        var4 = global;
                        var1 = var4.Symbol;
                        var3 = 'undefined';
                        var1 = typeof var1;
                        var1 = var3 !== var1;
                        if (!var1) {
                            _fun94918_ip = 45;
                            continue _fun94918
                        }
                    case 30:
                        var3 = var4.Symbol;
                        var3 = var3.iterator;
                        var1 = var2[var3];
                    case 45:
                        if (var1) {
                            _fun94918_ip = 54;
                            continue _fun94918
                        }
                    case 48:
                        var1 = var2["@@iterator"];
                    case 54:
                        if (var1) {
                            _fun94918_ip = 344;
                            continue _fun94918
                        }
                    case 60:
                        var5 = var4.Array;
                        var3 = var5.isArray;
                        var5 = var3.bind(var5)(var2);
                        var3 = var1;
                        if (var5) {
                            _fun94918_ip = 322;
                            continue _fun94918
                        }
                    case 85:
                        var7 = undefined;
                        var5 = undefined;
                        if (!var2) {
                            _fun94918_ip = 282;
                            continue _fun94918
                        }
                    case 95:
                        var8 = 'string';
                        var6 = typeof var2;
                        if (!(var8 !== var6)) {
                            _fun94918_ip = 269;
                            continue _fun94918
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
                            _fun94918_ip = 162;
                            continue _fun94918
                        }
                    case 157:
                        var6 = var2.constructor;
                    case 162:
                        var9 = var8;
                        if (!var6) {
                            _fun94918_ip = 178;
                            continue _fun94918
                        }
                    case 168:
                        var6 = var2.constructor;
                        var9 = var6.name;
                    case 178:
                        var6 = 'Map';
                        if (!(var6 !== var9)) {
                            _fun94918_ip = 248;
                            continue _fun94918
                        }
                    case 186:
                        var6 = 'Set';
                        if (!(var6 !== var9)) {
                            _fun94918_ip = 248;
                            continue _fun94918
                        }
                    case 194:
                        var6 = 'Arguments';
                        if (!(var6 !== var9)) {
                            _fun94918_ip = 233;
                            continue _fun94918
                        }
                    case 204:
                        var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                        var6 = var8.test;
                        var8 = var6.bind(var8)(var9);
                        var6 = undefined;
                        if (!var8) {
                            _fun94918_ip = 246;
                            continue _fun94918
                        }
                    case 233:
                        var8 = _closure1_slot14;
                        var6 = var8.bind(var7)(var2, var7);
                    case 246:
                        _fun94918_ip = 264;
                        continue _fun94918;
                    case 248:
                        var9 = var4.Array;
                        var8 = var9.from;
                        var6 = var8.bind(var9)(var2);
                    case 264:
                        var5 = var6;
                        _fun94918_ip = 282;
                        continue _fun94918;
                    case 269:
                        var6 = _closure1_slot14;
                        var5 = var6.bind(var7)(var2, var7);
                    case 282:
                        var3 = var5;
                        if (var3) {
                            _fun94918_ip = 322;
                            continue _fun94918
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
                            _fun94918_ip = 329;
                            continue _fun94918
                        }
                    case 325:
                        _closure2_slot0 = var3;
                    case 329:
                        var3 = 0;
                        var _closure2_slot1 = var3;
                        var0 = function() { // Environment: var0
                            _fun94919: for (var _fun94919_ip = 0;;) switch (_fun94919_ip) {
                                case 0:
                                    var1 = _closure2_slot1;
                                    var0 = _closure2_slot0;
                                    var0 = var0.length;
                                    if (!(!(var1 >= var0))) {
                                        _fun94919_ip = 56;
                                        continue _fun94919
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
                                    _fun94919_ip = 67;
                                    continue _fun94919;
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
            var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var3
                _fun94920: for (var _fun94920_ip = 0;;) switch (_fun94920_ip) {
                    case 0:
                        var3 = arg0;
                        var0 = null;
                        var2 = undefined;
                        var0 = var0 == var2;
                        if (var0) {
                            _fun94920_ip = 23;
                            continue _fun94920
                        }
                    case 14:
                        var1 = var3.length;
                        var0 = var2 > var1;
                    case 23:
                        var1 = undefined;
                        if (!var0) {
                            _fun94920_ip = 33;
                            continue _fun94920
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
                            _fun94920_ip = 70;
                            continue _fun94920
                        }
                    case 55:
                        var4 = var3[var2];
                        var0[var2] = var4;
                        var2 = var2 + 1;
                        if (var2 < var1) {
                            _fun94920_ip = 55;
                            continue _fun94920
                        }
                    case 70:
                        return var0;
                }
            };
            var _closure1_slot14 = var0;
            var0 = function(arg0) { // Original name: getAllKeybinds, environment: var3
                _fun94921: for (var _fun94921_ip = 0;;) switch (_fun94921_ip) {
                    case 0:
                        var2 = new Array(0);
                        var0 = global;
                        var3 = var0.Object;
                        var1 = var3.values;
                        var0 = arg0;
                        var5 = var1.bind(var3)(var0);
                        var0 = var5.length;
                        var4 = 0;
                        var0 = var4 < var0;
                        var3 = null;
                        var1 = 0;
                        if (!var0) {
                            _fun94921_ip = 100;
                            continue _fun94921
                        }
                    case 43:
                        var0 = var5[var1];
                        if (!(var3 != var0)) {
                            _fun94921_ip = 88;
                            continue _fun94921
                        }
                    case 51:
                        var6 = var2.push;
                        var9 = var0.binds;
                        var0 = new Array(0);
                        var10 = var0;
                        var8 = 0;
                        var7 = arraySpread(var10, var9, var8);
                        var10 = var6;
                        var9 = var0;
                        var8 = var2;
                        var0 = apply(var10, var9, var8);
                    case 88:
                        var1 = var1 + 1;
                        var0 = var5.length;
                        if (var1 < var0) {
                            _fun94921_ip = 43;
                            continue _fun94921
                        }
                    case 100:
                        var1 = var2.map;
                        var0 = function(arg0) { // Environment: var0
                            var3 = arg0;
                            var2 = var3.replace;
                            var1 = _closure1_slot9;
                            var0 = 'mod';
                            var0 = var2.bind(var3)(var0, var1);
                            return var0;
                        };
                        var0 = var1.bind(var2)(var0);
                        return var0;
                }
            };
            var _closure1_slot15 = var0;
            var0 = function(arg0, arg1) { // Original name: wrapBind, environment: var3
                var1 = arg0;
                var _closure2_slot0 = var1;
                var1 = arg1;
                var _closure2_slot1 = var1;
                var0 = function(arg0, arg1) { // Environment: var0
                    var3 = arg1;
                    var4 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 6;
                    var1 = var2[var1];
                    var2 = undefined;
                    var6 = var4.bind(var2)(var1);
                    var5 = var6.track;
                    var0 = _closure1_slot4;
                    var4 = var0.KEYBOARD_SHORTCUT_USED;
                    var1 = {};
                    var7 = _closure2_slot0;
                    var1.shortcut_name = var7;
                    var1.shortcut_combo = var3;
                    var1 = var5.bind(var6)(var4, var1);
                    var1 = _closure2_slot1;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0, var3);
                    return var0;
                };
                return var0;
            };
            var _closure1_slot16 = var0;
            var0 = function(arg0) { // Original name: registerBinds, environment: var3
                _fun94925: for (var _fun94925_ip = 0;;) switch (_fun94925_ip) {
                    case 0:
                        var8 = function() { // Original name: _loop, environment: var9
                            _fun94926: for (var _fun94926_ip = 0;;) switch (_fun94926_ip) {
                                case 0:
                                    var0 = _closure2_slot1;
                                    var5 = null;
                                    if (!(var5 != var0)) {
                                        _fun94926_ip = 482;
                                        continue _fun94926
                                    }
                                case 18:
                                    var0 = _closure1_slot11;
                                    var1 = undefined;
                                    var7 = var0.bind(var1)();
                                    var _closure3_slot0 = var7;
                                    var6 = _closure1_slot0;
                                    var8 = _closure1_slot2;
                                    var0 = 3;
                                    var0 = var8[var0];
                                    var0 = var6.bind(var1)(var0);
                                    var0 = var0.isPlatformEmbedded;
                                    if (var0) {
                                        _fun94926_ip = 82;
                                        continue _fun94926
                                    }
                                case 64:
                                    var6 = var7.concat;
                                    var0 = _closure1_slot10;
                                    var0 = var6.bind(var7)(var0);
                                    _closure3_slot0 = var0;
                                case 82:
                                    var0 = _closure2_slot1;
                                    var7 = var0.binds;
                                    var6 = var7.filter;
                                    var0 = function(arg0) { // Environment: var4
                                        var3 = arg0;
                                        var2 = var3.replace;
                                        var1 = _closure1_slot9;
                                        var0 = 'mod';
                                        var2 = var2.bind(var3)(var0, var1);
                                        var1 = _closure3_slot0;
                                        var0 = var1.indexOf;
                                        var1 = var0.bind(var1)(var2);
                                        var0 = 0;
                                        var0 = var1 < var0;
                                        return var0;
                                    };
                                    var7 = var6.bind(var7)(var0);
                                    var6 = var7.length;
                                    var0 = 0;
                                    if (!(var0 !== var6)) {
                                        _fun94926_ip = 480;
                                        continue _fun94926
                                    }
                                case 123:
                                    var6 = _closure2_slot1;
                                    var6 = var6.comboKeysBindGlobal;
                                    var8 = _closure1_slot8;
                                    if (var6) {
                                        _fun94926_ip = 147;
                                        continue _fun94926
                                    }
                                case 140:
                                    var6 = var8.bind;
                                    _fun94926_ip = 153;
                                    continue _fun94926;
                                case 147:
                                    var6 = var8.bindGlobal;
                                case 153:
                                    var8 = _closure2_slot1;
                                    var8 = var8.action;
                                    if (!(var5 != var8)) {
                                        _fun94926_ip = 205;
                                        continue _fun94926
                                    }
                                case 166:
                                    var10 = var6.call;
                                    var9 = _closure1_slot8;
                                    var12 = _closure1_slot16;
                                    var11 = _closure2_slot0;
                                    var8 = _closure2_slot1;
                                    var8 = var8.action;
                                    var8 = var12.bind(var1)(var11, var8);
                                    var8 = var10.bind(var6)(var9, var7, var8);
                                case 205:
                                    var8 = _closure2_slot1;
                                    var8 = var8.keyup;
                                    if (!(var5 != var8)) {
                                        _fun94926_ip = 269;
                                        continue _fun94926
                                    }
                                case 219:
                                    var11 = var6.call;
                                    var10 = _closure1_slot8;
                                    var12 = _closure1_slot16;
                                    var9 = _closure2_slot0;
                                    var8 = _closure2_slot1;
                                    var8 = var8.keyup;
                                    var14 = var12.bind(var1)(var9, var8);
                                    var13 = 'keyup';
                                    var17 = var6;
                                    var16 = var10;
                                    var15 = var7;
                                    var8 = var17[var11](var16, var15, var14, var13, var12);
                                case 269:
                                    var8 = _closure2_slot1;
                                    var8 = var8.keydown;
                                    if (!(var5 != var8)) {
                                        _fun94926_ip = 414;
                                        continue _fun94926
                                    }
                                case 286:
                                    var9 = var7.indexOf;
                                    var8 = 'any-character';
                                    var9 = var9.bind(var7)(var8);
                                    var8 = -1;
                                    if (!(var8 !== var9)) {
                                        _fun94926_ip = 355;
                                        continue _fun94926
                                    }
                                case 313:
                                    var8 = _closure2_slot1;
                                    var10 = var8.keydown;
                                    var8 = function(arg0, arg1) { // Original name: nativeBind, environment: var4
                                        var4 = 'keydown';
                                        var _closure4_slot0 = var4;
                                        var1 = arg1;
                                        var _closure4_slot1 = var1;
                                        var3 = function(arg0) { // Original name: wrappedCallback, environment: var0
                                            var3 = arg0;
                                            var2 = _closure4_slot1;
                                            var1 = var3.key;
                                            var0 = undefined;
                                            var0 = var2.bind(var0)(var3, var1);
                                            return var0;
                                        };
                                        var _closure4_slot2 = var3;
                                        var1 = global;
                                        var2 = var1.document;
                                        var1 = var2.addEventListener;
                                        var1 = var1.bind(var2)(var4, var3);
                                        var2 = _closure1_slot12;
                                        var1 = var2.push;
                                        var0 = function() { // Environment: var0
                                            var0 = global;
                                            var3 = var0.document;
                                            var2 = var3.removeEventListener;
                                            var1 = _closure4_slot0;
                                            var0 = _closure4_slot2;
                                            var0 = var2.bind(var3)(var1, var0);
                                            return var0;
                                        };
                                        var0 = var1.bind(var2)(var0);
                                        var0 = undefined;
                                        return var0;
                                    };
                                    var4 = 'keydown';
                                    var4 = var8.bind(var1)(var4, var10);
                                    var8 = var7.splice;
                                    var4 = 1;
                                    var4 = var8.bind(var7)(var9, var4);
                                case 355:
                                    var4 = var7.length;
                                    if (!(var4 > var0)) {
                                        _fun94926_ip = 414;
                                        continue _fun94926
                                    }
                                case 364:
                                    var10 = var6.call;
                                    var9 = _closure1_slot8;
                                    var11 = _closure1_slot16;
                                    var8 = _closure2_slot0;
                                    var4 = _closure2_slot1;
                                    var4 = var4.keydown;
                                    var14 = var11.bind(var1)(var8, var4);
                                    var13 = 'keydown';
                                    var17 = var6;
                                    var16 = var9;
                                    var15 = var7;
                                    var4 = var17[var10](var16, var15, var14, var13, var12);
                                case 414:
                                    var4 = _closure2_slot1;
                                    var4 = var4.keypress;
                                    if (!(var5 != var4)) {
                                        _fun94926_ip = 478;
                                        continue _fun94926
                                    }
                                case 428:
                                    var5 = var6.call;
                                    var4 = _closure1_slot8;
                                    var8 = _closure1_slot16;
                                    var3 = _closure2_slot0;
                                    var2 = _closure2_slot1;
                                    var2 = var2.keypress;
                                    var14 = var8.bind(var1)(var3, var2);
                                    var13 = 'keypress';
                                    var17 = var6;
                                    var16 = var4;
                                    var15 = var7;
                                    var2 = var17[var5](var16, var15, var14, var13, var12);
                                case 478:
                                    return var1;
                                case 480:
                                    return var0;
                                case 482:
                                    var0 = 0;
                                    return var0;
                            }
                        };
                        var0 = global;
                        var2 = var0.Object;
                        var1 = var2.entries;
                        var0 = arg0;
                        var7 = var1.bind(var2)(var0);
                        var0 = var7.length;
                        var6 = 0;
                        var1 = var6 < var0;
                        var0 = undefined;
                        var4 = 2;
                        var3 = 1;
                        var2 = 0;
                        if (!var1) {
                            _fun94925_ip = 104;
                            continue _fun94925
                        }
                    case 58:
                        var10 = var7[var2];
                        var1 = _closure1_slot3;
                        var1 = var1.bind(var0)(var10, var4);
                        var10 = var1[var6];
                        var _closure2_slot0 = var10;
                        var1 = var1[var3];
                        var _closure2_slot1 = var1;
                        var1 = var8.bind(var0)();
                        var2 = var2 + 1;
                        var1 = var7.length;
                        if (var2 < var1) {
                            _fun94925_ip = 58;
                            continue _fun94925
                        }
                    case 104:
                        return var0;
                }
            };
            var _closure1_slot17 = var0;
            var1 = global;
            var8 = var1.Object;
            var7 = var8.defineProperty;
            var6 = {};
            var0 = true;
            var6.value = var0;
            var0 = '__esModule';
            var0 = var7.bind(var8)(var2, var0, var6);
            var13 = 0;
            var6 = var5[var13];
            var0 = undefined;
            var6 = var11.bind(var0)(var6);
            var _closure1_slot3 = var6;
            var15 = 1;
            var6 = var5[var15];
            var6 = var4.bind(var0)(var6);
            var6 = var6.AnalyticEvents;
            var _closure1_slot4 = var6;
            var6 = {};
            var _closure1_slot5 = var6;
            var6 = new Array(0);
            var _closure1_slot6 = var6;
            var6 = false;
            var _closure1_slot7 = var6;
            var6 = 2;
            var6 = var5[var6];
            var8 = var4.bind(var0)(var6);
            var7 = var8.createGlobalBinder;
            var6 = var1.window;
            var9 = var7.bind(var8)(var6);
            var _closure1_slot8 = var9;
            var10 = 3;
            var6 = var5[var10];
            var7 = var4.bind(var0)(var6);
            var6 = var7.isMac;
            var6 = var6.bind(var7)();
            if (var6) {
                _fun94917_ip = 255;
                continue _fun94917
            }
        case 229:
            var6 = var5[var10];
            var7 = var4.bind(var0)(var6);
            var6 = var7.isMacWeb;
            var6 = var6.bind(var7)();
            var8 = 'ctrl';
            if (!var6) {
                _fun94917_ip = 259;
                continue _fun94917
            }
        case 255:
            var8 = 'cmd';
        case 259:
            var _closure1_slot9 = var8;
            var6 = var5[var10];
            var7 = var4.bind(var0)(var6);
            var6 = var7.isMac;
            var6 = var6.bind(var7)();
            if (var6) {
                _fun94917_ip = 311;
                continue _fun94917
            }
        case 285:
            var6 = var5[var10];
            var7 = var4.bind(var0)(var6);
            var6 = var7.isMacWeb;
            var6 = var6.bind(var7)();
            var7 = 'alt';
            if (!var6) {
                _fun94917_ip = 315;
                continue _fun94917
            }
        case 311:
            var7 = 'opt';
        case 315:
            var6 = var5[var10];
            var12 = var4.bind(var0)(var6);
            var6 = var12.isMac;
            var6 = var6.bind(var12)();
            if (var6) {
                _fun94917_ip = 363;
                continue _fun94917
            }
        case 337:
            var6 = var5[var10];
            var12 = var4.bind(var0)(var6);
            var6 = var12.isMacWeb;
            var12 = var6.bind(var12)();
            var6 = 'enter';
            if (!var12) {
                _fun94917_ip = 367;
                continue _fun94917
            }
        case 363:
            var6 = 'return';
        case 367:
            var12 = 4;
            var12 = var5[var12];
            var12 = var4.bind(var0)(var12);
            var12 = var12.JUMP_TO_GUILD;
            var17 = var12.binds;
            var14 = new Array(14);
            var18 = var14;
            var16 = 0;
            var12 = arraySpread(var18, var17, var16);
            var13 = 'mod+shift+[';
            var14[var12] = var13;
            var12 = var12 + var15;
            var13 = 'mod+shift+]';
            var14[var12] = var13;
            var12 = var12 + var15;
            var13 = 'mod+[';
            var14[var12] = var13;
            var12 = var12 + var15;
            var13 = 'mod+]';
            var14[var12] = var13;
            var12 = var12 + var15;
            var13 = 'alt+[';
            var14[var12] = var13;
            var12 = var12 + var15;
            var13 = 'alt+]';
            var14[var12] = var13;
            var12 = var12 + var15;
            var13 = 'ctrl+shift+tab';
            var14[var12] = var13;
            var12 = var12 + var15;
            var13 = 'ctrl+tab';
            var14[var12] = var13;
            var12 = var12 + var15;
            var13 = 'mod+n';
            var14[var12] = var13;
            var12 = var12 + var15;
            var13 = 'mod+t';
            var14[var12] = var13;
            var12 = var12 + var15;
            var13 = 'mod+shift+t';
            var14[var12] = var13;
            var12 = var12 + var15;
            var13 = 'mod+plus';
            var14[var12] = var13;
            var12 = var12 + var15;
            var13 = 'mod+minus';
            var14[var12] = var13;
            var13 = 'mod+0';
            var12 = var12 + var15;
            var14[var12] = var13;
            var13 = var14.map;
            var12 = function(arg0) { // Environment: var3
                var3 = arg0;
                var2 = var3.replace;
                var1 = _closure1_slot9;
                var0 = 'mod';
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            var12 = var13.bind(var14)(var12);
            var _closure1_slot10 = var12;
            var12 = function() { // Original name: getKeybindList, environment: var3
                var0 = new Array(0);
                return var0;
            };
            var _closure1_slot11 = var12;
            var12 = new Array(0);
            var _closure1_slot12 = var12;
            var10 = var5[var10];
            var12 = var4.bind(var0)(var10);
            var10 = var12.isDesktop;
            var10 = var10.bind(var12)();
            if (!var10) {
                _fun94917_ip = 738;
                continue _fun94917
            }
        case 672:
            var10 = 5;
            var10 = var5[var10];
            var11 = var11.bind(var0)(var10);
            var1 = var1.document;
            var18 = var1.documentElement;
            var10 = var11.prototype;
            var10 = Object.create(var10, {
                constructor: {
                    value: var11
                }
            });
            var19 = var10;
            var1 = new var19[var11](var18, var17);
            var12 = var1 instanceof Object ? var1 : var10;
            var11 = var12.bind;
            var10 = 'backspace';
            var1 = function(arg0) { // Environment: var3
                var1 = arg0;
                var0 = var1.preventDefault;
                var0 = var0.bind(var1)();
                return var0;
            };
            var1 = var11.bind(var12)(var10, var1);
        case 738:
            var1 = {};
            var1.combokeys = var9;
            var1.modKey = var8;
            var1.altKey = var7;
            var1.returnKey = var6;
            var6 = function(arg0) { // Original name: setGetKeybindList, environment: var3
                var0 = arg0;
                _closure1_slot11 = var0;
                var0 = undefined;
                return var0;
            };
            var1.setGetKeybindList = var6;
            var6 = function(arg0) { // Original name: checkDupes, environment: var3
                _fun94935: for (var _fun94935_ip = 0;;) switch (_fun94935_ip) {
                    case 0:
                        var0 = global;
                        var0 = var0.Set;
                        var1 = var0.prototype;
                        var1 = Object.create(var1, {
                            constructor: {
                                value: var0
                            }
                        });
                        var10 = var1;
                        var0 = new var10[var0](var9);
                        var6 = var0 instanceof Object ? var0 : var1;
                        var4 = new Array(0);
                        var3 = _closure1_slot13;
                        var5 = _closure1_slot15;
                        var0 = undefined;
                        var2 = arg0;
                        var2 = var5.bind(var0)(var2);
                        var5 = var3.bind(var0)(var2);
                        var3 = var5.bind(var0)();
                        var2 = var3.done;
                        if (var2) {
                            _fun94935_ip = 123;
                            continue _fun94935
                        }
                    case 70:
                        var7 = var3.value;
                        var2 = var6.has;
                        var2 = var2.bind(var6)(var7);
                        if (!var2) {
                            _fun94935_ip = 98;
                            continue _fun94935
                        }
                    case 88:
                        var2 = var4.push;
                        var2 = var2.bind(var4)(var7);
                    case 98:
                        var2 = var6.add;
                        var2 = var2.bind(var6)(var7);
                        var7 = var5.bind(var0)();
                        var2 = var7.done;
                        var3 = var7;
                        if (!var2) {
                            _fun94935_ip = 70;
                            continue _fun94935
                        }
                    case 123:
                        var3 = var4.length;
                        var2 = 0;
                        if (!(var3 > var2)) {
                            _fun94935_ip = 197;
                            continue _fun94935
                        }
                    case 134:
                        var2 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 7;
                        var1 = var3[var1];
                        var3 = var2.bind(var0)(var1);
                        var1 = var3.prototype;
                        var2 = Object.create(var1, {
                            constructor: {
                                value: var3
                            }
                        });
                        var9 = 'Keybinds';
                        var10 = var2;
                        var1 = new var10[var3](var9, var8);
                        var3 = var1 instanceof Object ? var1 : var2;
                        var2 = var3.warn;
                        var1 = 'Duplicate keyboard shortcuts defined:';
                        var1 = var2.bind(var3)(var1, var4);
                    case 197:
                        return var0;
                }
            };
            var1.checkDupes = var6;
            var6 = function(arg0) { // Original name: setLayout, environment: var3
                var0 = arg0;
                _closure1_slot5 = var0;
                var0 = undefined;
                return var0;
            };
            var1.setLayout = var6;
            var6 = function() { // Original name: enable, environment: var3
                _fun94937: for (var _fun94937_ip = 0;;) switch (_fun94937_ip) {
                    case 0:
                        var3 = this;
                        var1 = _closure1_slot7;
                        if (var1) {
                            _fun94937_ip = 49;
                            continue _fun94937
                        }
                    case 13:
                        var1 = true;
                        _closure1_slot7 = var1;
                        var2 = var3.checkDupes;
                        var1 = _closure1_slot5;
                        var1 = var2.bind(var3)(var1);
                        var2 = _closure1_slot17;
                        var1 = _closure1_slot5;
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                    case 49:
                        var0 = undefined;
                        return var0;
                }
            };
            var1.enable = var6;
            var6 = function(arg0) { // Original name: enableTemp, environment: var3
                var3 = arg0;
                var4 = _closure1_slot6;
                var1 = var4.push;
                var0 = _closure1_slot5;
                var0 = var1.bind(var4)(var0);
                _closure1_slot5 = var3;
                var1 = _closure1_slot17;
                var0 = undefined;
                var1 = var1.bind(var0)(var3);
                var1 = true;
                _closure1_slot7 = var1;
                return var0;
            };
            var1.enableTemp = var6;
            var6 = function() { // Original name: disableTemp, environment: var3
                _fun94939: for (var _fun94939_ip = 0;;) switch (_fun94939_ip) {
                    case 0:
                        var1 = this;
                        var3 = _closure1_slot6;
                        var0 = var3.pop;
                        var0 = var0.bind(var3)();
                        var3 = null;
                        if (!(var3 != var0)) {
                            _fun94939_ip = 30;
                            continue _fun94939
                        }
                    case 26:
                        _closure1_slot5 = var0;
                    case 30:
                        var0 = var1.disable;
                        var0 = var0.bind(var1)();
                        var0 = var1.enable;
                        var0 = var0.bind(var1)();
                        var0 = undefined;
                        return var0;
                }
            };
            var1.disableTemp = var6;
            var6 = function() { // Original name: disable, environment: var3
                _fun94940: for (var _fun94940_ip = 0;;) switch (_fun94940_ip) {
                    case 0:
                        var1 = _closure1_slot7;
                        if (!var1) {
                            _fun94940_ip = 61;
                            continue _fun94940
                        }
                    case 10:
                        var1 = false;
                        _closure1_slot7 = var1;
                        var3 = _closure1_slot12;
                        var2 = var3.forEach;
                        var1 = function(arg0) { // Environment: var1
                            var1 = arg0;
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                            return var0;
                        };
                        var1 = var2.bind(var3)(var1);
                        var1 = new Array(0);
                        _closure1_slot12 = var1;
                        var1 = _closure1_slot8;
                        var0 = var1.reset;
                        var0 = var0.bind(var1)();
                    case 61:
                        var0 = undefined;
                        return var0;
                }
            };
            var1.disable = var6;
            var6 = function(arg0) { // Original name: validateKeybind, environment: var3
                _fun94942: for (var _fun94942_ip = 0;;) switch (_fun94942_ip) {
                    case 0:
                        var2 = arg0;
                        var4 = this;
                        var1 = _closure1_slot7;
                        if (!var1) {
                            _fun94942_ip = 27;
                            continue _fun94942
                        }
                    case 16:
                        var3 = var4.hasBind;
                        var1 = var3.bind(var4)(var2);
                    case 27:
                        if (!var1) {
                            _fun94942_ip = 45;
                            continue _fun94942
                        }
                    case 30:
                        var1 = _closure1_slot8;
                        var0 = var1.unbind;
                        var0 = var0.bind(var1)(var2);
                    case 45:
                        var0 = undefined;
                        return var0;
                }
            };
            var1.validateKeybind = var6;
            var3 = function(arg0) { // Original name: hasBind, environment: var3
                var4 = arg0;
                var2 = _closure1_slot15;
                var1 = _closure1_slot5;
                var0 = undefined;
                var2 = var2.bind(var0)(var1);
                var3 = var4.replace;
                var1 = 'meta';
                var0 = 'cmd';
                var4 = var3.bind(var4)(var1, var0);
                var3 = var4.replace;
                var1 = /right |left /i;
                var0 = '';
                var1 = var3.bind(var4)(var1, var0);
                var0 = var1.trim;
                var1 = var0.bind(var1)();
                var0 = var2.includes;
                var0 = var0.bind(var2)(var1);
                return var0;
            };
            var1.hasBind = var3;
            var3 = 8;
            var3 = var5[var3];
            var5 = var4.bind(var0)(var3);
            var4 = var5.fileFinishedImporting;
            var3 = 'lib/Keybinds.tsx';
            var3 = var4.bind(var5)(var3);
            var2.default = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 660, 12366, 478, 12401, 12368, 795, 3, 2]);