// utils/web/KeyboardLayoutMapUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun94236: for (var _fun94236_ip = 0;;) switch (_fun94236_ip) {
        case 0:
            var11 = require;
            var15 = metroImportDefault;
            var2 = exports;
            var12 = dependencyMap;
            var _closure1_slot0 = var11;
            var _closure1_slot1 = var12;
            var0 = function() {
                _fun94237: for (var _fun94237_ip = 0;;) switch (_fun94237_ip) {
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
                        _fun94237_ip = 76;
                        continue _fun94237;
                    case 74: // catch_target0
                        CatchBlockStart(arg_register = 1);
                    case 76:
                        var1 = function() {
                            var0 = _closure2_slot0;
                            var0 = !var0;
                            var0 = !var0;
                            return var0;
                        };
                        _closure1_slot19 = var1;
                        var0 = undefined;
                        var0 = var1.bind(var0)();
                        return var0;
                }
            };
            var _closure1_slot19 = var0;
            var0 = function arg0() {
                _fun94240: for (var _fun94240_ip = 0;;) switch (_fun94240_ip) {
                    case 0:
                        var2 = arg0;
                        var1 = null;
                        var0 = var2;
                        if (!(var1 != var0)) {
                            _fun94240_ip = 22;
                            continue _fun94240
                        }
                    case 12:
                        var1 = var2.toLocaleLowerCase;
                        var0 = var1.bind(var2)();
                    case 22:
                        return var0;
                }
            };
            var _closure1_slot20 = var0;
            var0 = function() {
                var0 = undefined;
                var3 = _closure1_slot22;
                var2 = var3.apply;
                var0 = arguments;
                var1 = var0;
                var0 = this;
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            var _closure1_slot21 = var0;
            var0 = function() {
                var4 = undefined;
                var0 = undefined;
                var3 = _closure1_slot6;
                var2 = function*() { // Environment: var2
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun94244: for (var _fun94244_ip = 0;;) switch (_fun94244_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun94244_ip = 184;
                                    continue _fun94244
                                }
                            case 10:
                                var2 = global;
                                var1 = var2.navigator;
                                var4 = var1.keyboard;
                                var3 = null;
                                var5 = var3 == var4;
                                var1 = undefined;
                                if (var5) {
                                    _fun94244_ip = 41;
                                    continue _fun94244
                                }
                            case 35:
                                var1 = var4.getLayoutMap;
                            case 41:
                                if (!(var3 != var1)) {
                                    _fun94244_ip = 179;
                                    continue _fun94244
                                }
                            case 48: // try_start_0
                                var1 = var2.navigator;
                                var3 = var1.keyboard;
                                var1 = var3.getLayoutMap;
                                var1 = var1.bind(var3)();
                                SaveGenerator(address = 74);
                            case 72:
                                return var1;
                            case 74:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                if (var3) {
                                    _fun94244_ip = 143;
                                    continue _fun94244
                                }
                            case 80:
                                var5 = _closure1_slot13;
                                var6 = var2.Object;
                                var4 = var6.fromEntries;
                                var2 = var1.entries;
                                var2 = var2.bind(var1)();
                                var7 = var4.bind(var6)(var2);
                                var4 = var5.prototype;
                                var4 = Object.create(var4, {
                                    constructor: {
                                        value: var5
                                    }
                                });
                                var8 = var4;
                                var2 = new var8[var5](var7, var6);
                                var2 = var2 instanceof Object ? var2 : var4;
                                _closure1_slot14 = var2;
                            case 138: // try_end0
                                var2 = true;
                                return var2;
                            case 143:
                                return var1;
                            case 146: // catch_target0
                                CatchBlockStart(arg_register = 1);
                                var1 = _closure1_slot13;
                                var3 = var1.prototype;
                                var3 = Object.create(var3, {
                                    constructor: {
                                        value: var1
                                    }
                                });
                                var8 = var3;
                                var1 = new var8[var1](var7);
                                var1 = var1 instanceof Object ? var1 : var3;
                                _closure1_slot14 = var1;
                            case 179:
                                var1 = false;
                                return var1;
                            case 184:
                                return var0;
                        }
                    };
                    return var0;
                };
                var3 = var3.bind(var4)(var2);
                _closure1_slot22 = var3;
                var2 = var3.apply;
                var0 = arguments;
                var1 = var0;
                var0 = this;
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            var _closure1_slot22 = var0;
            var0 = function() {
                var0 = _closure1_slot14;
                return var0;
            };
            var _closure1_slot23 = var0;
            var7 = function arg0() {
                _fun94246: for (var _fun94246_ip = 0;;) switch (_fun94246_ip) {
                    case 0:
                        var12 = global;
                        var0 = var12.Set;
                        var1 = var0.prototype;
                        var1 = Object.create(var1, {
                            constructor: {
                                value: var0
                            }
                        });
                        var18 = var1;
                        var0 = new var18[var0](var17);
                        var11 = var0 instanceof Object ? var0 : var1;
                        var0 = {};
                        var3 = var12.Object;
                        var2 = var3.entries;
                        var1 = arg0;
                        var10 = var2.bind(var3)(var1);
                        var1 = var10.length;
                        var9 = 0;
                        var1 = var9 < var1;
                        var7 = 'Seperate keyCode mappings found for: ';
                        var6 = null;
                        var5 = undefined;
                        var4 = 2;
                        var3 = 1;
                        var2 = 0;
                        if (!var1) {
                            _fun94246_ip = 203;
                            continue _fun94246
                        }
                    case 85:
                        var13 = var10[var2];
                        var1 = _closure1_slot5;
                        var1 = var1.bind(var5)(var13, var4);
                        var14 = var1[var9];
                        var1 = var1[var3];
                        var13 = _closure1_slot20;
                        var15 = var13.bind(var5)(var14);
                        var13 = var11.has;
                        var13 = var13.bind(var11)(var15);
                        if (!var13) {
                            _fun94246_ip = 145;
                            continue _fun94246
                        }
                    case 129:
                        var13 = var0[var15];
                        if (!(var6 != var13)) {
                            _fun94246_ip = 145;
                            continue _fun94246
                        }
                    case 137:
                        var13 = var0[var15];
                        if (!(var13 === var1)) {
                            _fun94246_ip = 161;
                            continue _fun94246
                        }
                    case 145:
                        var13 = var11.add;
                        var13 = var13.bind(var11)(var15);
                        var0[var15] = var1;
                        _fun94246_ip = 191;
                        continue _fun94246;
                    case 161:
                        var14 = _closure1_slot10;
                        var13 = var14.error;
                        var1 = var12.HermesInternal;
                        var1 = var1.concat;
                        var1 = var1.bind(var7)(var15);
                        var1 = var13.bind(var14)(var1);
                    case 191:
                        var2 = var2 + 1;
                        var1 = var10.length;
                        if (var2 < var1) {
                            _fun94246_ip = 85;
                            continue _fun94246
                        }
                    case 203:
                        return var0;
                }
            };
            var _closure1_slot24 = var7;
            var0 = function arg0() {
                _fun94247: for (var _fun94247_ip = 0;;) switch (_fun94247_ip) {
                    case 0:
                        var1 = arg0;
                        var0 = {};
                        var2 = var1.keyCode;
                        var0.keyCode = var2;
                        var3 = var1.key;
                        var2 = null;
                        var3 = var2 != var3;
                        var5 = undefined;
                        var2 = undefined;
                        if (!var3) {
                            _fun94247_ip = 51;
                            continue _fun94247
                        }
                    case 34:
                        var4 = _closure1_slot20;
                        var3 = var1.key;
                        var2 = var4.bind(var5)(var3);
                    case 51:
                        var0.key = var2;
                        var1 = var1.code;
                        var0.code = var1;
                        return var0;
                }
            };
            var _closure1_slot25 = var0;
            var6 = function() {
                _fun94248: for (var _fun94248_ip = 0;;) switch (_fun94248_ip) {
                    case 0:
                        var2 = _closure1_slot18;
                        var1 = null;
                        if (!(var1 == var2)) {
                            _fun94248_ip = 60;
                            continue _fun94248
                        }
                    case 13:
                        var1 = global;
                        var3 = var1.Promise;
                        var2 = function() { // Environment: var1
                            var3 = _closure1_slot6;
                            var2 = undefined;
                            var1 = function*(arg0) { // Environment: var0
                                var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                                    _fun94251: for (var _fun94251_ip = 0;;) switch (_fun94251_ip) {
                                        case 0:
                                            StartGenerator();
                                            ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                            if (var1) {
                                                _fun94251_ip = 108;
                                                continue _fun94251
                                            }
                                        case 7:
                                            var1 = _closure1_slot21;
                                            var2 = undefined;
                                            var1 = var1.bind(var2)();
                                            SaveGenerator(address = 24);
                                        case 22:
                                            return var1;
                                        case 24:
                                            ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                            if (var3) {
                                                _fun94251_ip = 105;
                                                continue _fun94251
                                            }
                                        case 30:
                                            var6 = _closure1_slot16;
                                            var8 = _closure1_slot11;
                                            var5 = var6.prototype;
                                            var5 = Object.create(var5, {
                                                constructor: {
                                                    value: var6
                                                }
                                            });
                                            var9 = var5;
                                            var3 = new var9[var6](var8, var7);
                                            var3 = var3 instanceof Object ? var3 : var5;
                                            _closure1_slot17 = var3;
                                            var3 = global;
                                            var6 = var3.document;
                                            var5 = var6.addEventListener;
                                            var4 = 'keydown';
                                            var3 = function(arg0) { // Environment: var3
                                                _fun94252: for (var _fun94252_ip = 0;;) switch (_fun94252_ip) {
                                                    case 0:
                                                        var5 = arg0;
                                                        var0 = undefined;
                                                        var1 = undefined;
                                                    case 7: // try_start_0
                                                        var3 = _closure1_slot17;
                                                        var1 = var3;
                                                        var2 = null;
                                                        if (!(var2 != var3)) {
                                                            _fun94252_ip = 40;
                                                            continue _fun94252
                                                        }
                                                    case 23:
                                                        var3 = var1;
                                                        var2 = var3.addEvent;
                                                        var1 = var5;
                                                        var1 = var2.bind(var3)(var1);
                                                    case 40: // try_end0
                                                        _fun94252_ip = 79;
                                                        continue _fun94252;
                                                    case 42: // catch_target0
                                                        CatchBlockStart(arg_register = 1);
                                                        var4 = _closure1_slot10;
                                                        var3 = var4.error;
                                                        var2 = {};
                                                        var2.event = var5;
                                                        var2.error = var1;
                                                        var1 = 'KeyboardMapper - Error adding event';
                                                        var1 = var3.bind(var4)(var1, var2);
                                                    case 79:
                                                        return var0;
                                                }
                                            };
                                            var3 = var5.bind(var6)(var4, var3);
                                            var3 = arg0;
                                            var3 = var3.bind(var2)();
                                            return var2;
                                        case 105:
                                            return var1;
                                        case 108:
                                            return var0;
                                    }
                                };
                                return var0;
                            };
                            var1 = var3.bind(var2)(var1);
                            var _closure3_slot0 = var1;
                            var0 = function() { // Environment: var0
                                var0 = undefined;
                                var3 = _closure3_slot0;
                                var2 = var3.apply;
                                var0 = arguments;
                                var1 = var0;
                                var0 = this;
                                var0 = var2.bind(var3)(var0, var1);
                                return var0;
                            };
                            return var0;
                        };
                        var1 = undefined;
                        var4 = var2.bind(var1)();
                        var2 = var3.prototype;
                        var2 = Object.create(var2, {
                            constructor: {
                                value: var3
                            }
                        });
                        var5 = var2;
                        var1 = new var5[var3](var4, var3);
                        var1 = var1 instanceof Object ? var1 : var2;
                        _closure1_slot18 = var1;
                    case 60:
                        var0 = _closure1_slot18;
                        return var0;
                }
            };
            var _closure1_slot26 = var6;
            var5 = function() {
                _fun94254: for (var _fun94254_ip = 0;;) switch (_fun94254_ip) {
                    case 0:
                        var0 = _closure1_slot17;
                        var1 = null;
                        if (!(var1 != var0)) {
                            _fun94254_ip = 19;
                            continue _fun94254
                        }
                    case 13:
                        var0 = _closure1_slot17;
                        _fun94254_ip = 31;
                        continue _fun94254;
                    case 19:
                        var3 = _closure1_slot26;
                        var2 = undefined;
                        var2 = var3.bind(var2)();
                        var0 = null;
                    case 31:
                        return var0;
                }
            };
            var _closure1_slot27 = var5;
            var0 = function() {
                var4 = undefined;
                var0 = undefined;
                var3 = _closure1_slot6;
                var2 = function*() { // Environment: var2
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun94257: for (var _fun94257_ip = 0;;) switch (_fun94257_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun94257_ip = 60;
                                    continue _fun94257
                                }
                            case 7:
                                var1 = _closure1_slot21;
                                var2 = undefined;
                                var1 = var1.bind(var2)();
                                SaveGenerator(address = 24);
                            case 22:
                                return var1;
                            case 24:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                                if (var4) {
                                    _fun94257_ip = 57;
                                    continue _fun94257
                                }
                            case 30:
                                var3 = _closure1_slot27;
                                var4 = var3.bind(var2)();
                                var3 = null;
                                if (!(var3 != var4)) {
                                    _fun94257_ip = 54;
                                    continue _fun94257
                                }
                            case 44:
                                var3 = var4.reset;
                                var3 = var3.bind(var4)();
                            case 54:
                                return var2;
                            case 57:
                                return var1;
                            case 60:
                                return var0;
                        }
                    };
                    return var0;
                };
                var3 = var3.bind(var4)(var2);
                _closure1_slot28 = var3;
                var2 = var3.apply;
                var0 = arguments;
                var1 = var0;
                var0 = this;
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            var _closure1_slot28 = var0;
            var4 = function arg0() {
                _fun94258: for (var _fun94258_ip = 0;;) switch (_fun94258_ip) {
                    case 0:
                        var3 = arg0;
                        var2 = null;
                        var1 = var2 != var3;
                        var0 = undefined;
                        var5 = undefined;
                        if (!var1) {
                            _fun94258_ip = 28;
                            continue _fun94258
                        }
                    case 16:
                        var1 = _closure1_slot20;
                        var5 = var1.bind(var0)(var3);
                    case 28:
                        if (!(var2 == var5)) {
                            _fun94258_ip = 34;
                            continue _fun94258
                        }
                    case 32:
                        return var0;
                    case 34:
                        var1 = _closure1_slot27;
                        var4 = var1.bind(var0)();
                        var3 = var2 == var4;
                        var1 = undefined;
                        if (var3) {
                            _fun94258_ip = 65;
                            continue _fun94258
                        }
                    case 54:
                        var3 = var4.findCodeFromKeyboardLayoutMap;
                        var1 = var3.bind(var4)(var5);
                    case 65:
                        var2 = var2 != var1;
                        var0 = undefined;
                        if (!var2) {
                            _fun94258_ip = 77;
                            continue _fun94258
                        }
                    case 74:
                        var0 = var1;
                    case 77:
                        return var0;
                }
            };
            var _closure1_slot29 = var4;
            var3 = function arg0() {
                _fun94259: for (var _fun94259_ip = 0;;) switch (_fun94259_ip) {
                    case 0:
                        var2 = _closure1_slot25;
                        var1 = undefined;
                        var0 = arg0;
                        var2 = var2.bind(var1)(var0);
                        var0 = var2.key;
                        var3 = null;
                        var5 = var3 != var0;
                        var0 = null;
                        if (!var5) {
                            _fun94259_ip = 93;
                            continue _fun94259
                        }
                    case 33:
                        var4 = _closure1_slot27;
                        var7 = var4.bind(var1)();
                        var4 = var3 == var7;
                        var1 = undefined;
                        if (var4) {
                            _fun94259_ip = 81;
                            continue _fun94259
                        }
                    case 50:
                        var6 = var7.findExactKeyboardEventMatch;
                        var5 = var2.key;
                        var4 = var2.code;
                        var2 = var2.keyCode;
                        var1 = var6.bind(var7)(var5, var4, var2);
                    case 81:
                        var2 = var3 != var1;
                        var0 = null;
                        if (!var2) {
                            _fun94259_ip = 93;
                            continue _fun94259
                        }
                    case 90:
                        var0 = var1;
                    case 93:
                        return var0;
                }
            };
            var _closure1_slot30 = var3;
            var8 = global;
            var13 = var8.Object;
            var10 = var13.defineProperty;
            var9 = {};
            var0 = true;
            var9.value = var0;
            var0 = '__esModule';
            var0 = var10.bind(var13)(var2, var0, var9);
            var0 = 0;
            var9 = var12[var0];
            var0 = undefined;
            var9 = var15.bind(var0)(var9);
            var _closure1_slot2 = var9;
            var9 = 1;
            var9 = var12[var9];
            var9 = var15.bind(var0)(var9);
            var _closure1_slot3 = var9;
            var9 = 2;
            var9 = var12[var9];
            var9 = var15.bind(var0)(var9);
            var _closure1_slot4 = var9;
            var9 = 3;
            var9 = var12[var9];
            var9 = var15.bind(var0)(var9);
            var _closure1_slot5 = var9;
            var9 = 4;
            var9 = var12[var9];
            var9 = var15.bind(var0)(var9);
            var _closure1_slot6 = var9;
            var9 = 5;
            var9 = var12[var9];
            var9 = var15.bind(var0)(var9);
            var _closure1_slot7 = var9;
            var9 = 6;
            var9 = var12[var9];
            var9 = var15.bind(var0)(var9);
            var _closure1_slot8 = var9;
            var9 = 7;
            var9 = var12[var9];
            var9 = var15.bind(var0)(var9);
            var _closure1_slot9 = var9;
            var9 = 8;
            var9 = var12[var9];
            var13 = var11.bind(var0)(var9);
            var9 = var13.LinuxKeyToCode;
            var10 = var13.MacosKeyToCode;
            var13 = var13.WindowsKeyToCode;
            var14 = 9;
            var14 = var12[var14];
            var17 = var15.bind(var0)(var14);
            var14 = var17.prototype;
            var16 = Object.create(var14, {
                constructor: {
                    value: var17
                }
            });
            var20 = 'KeyboardLayoutMapUtils';
            var21 = var16;
            var14 = new var21[var17](var20, var19);
            var14 = var14 instanceof Object ? var14 : var16;
            var _closure1_slot10 = var14;
            var14 = 10;
            var16 = var12[var14];
            var17 = var11.bind(var0)(var16);
            var16 = var17.isLinux;
            var16 = var16.bind(var17)();
            if (var16) {
                _fun94236_ip = 480;
                continue _fun94236
            }
        case 412:
            var16 = var12[var14];
            var17 = var11.bind(var0)(var16);
            var16 = var17.isMac;
            var16 = var16.bind(var17)();
            if (var16) {
                _fun94236_ip = 477;
                continue _fun94236
            }
        case 434:
            var14 = var12[var14];
            var16 = var11.bind(var0)(var14);
            var14 = var16.isWindows;
            var14 = var14.bind(var16)();
            if (var14) {
                _fun94236_ip = 474;
                continue _fun94236
            }
        case 456:
            var14 = 11;
            var14 = var12[var14];
            var14 = var15.bind(var0)(var14);
            var13 = var14.codes;
        case 474:
            var10 = var13;
        case 477:
            var9 = var10;
        case 480:
            var _closure1_slot11 = var9;
            var13 = var8.Set;
            var9 = var13.prototype;
            var10 = Object.create(var9, {
                constructor: {
                    value: var13
                }
            });
            var20 = [192, 220, 222, 223, 229];
            var21 = var10;
            var9 = new var21[var13](var20, var19);
            var9 = var9 instanceof Object ? var9 : var10;
            var13 = var8.Object;
            var10 = var13.freeze;
            var8 = {
                'KeyA': 'a',
                'KeyB': 'b',
                'KeyC': 'c',
                'KeyD': 'd',
                'KeyE': 'e',
                'KeyF': 'f',
                'KeyG': 'g',
                'KeyH': 'h',
                'KeyI': 'i',
                'KeyJ': 'j',
                'KeyK': 'k',
                'KeyL': 'l',
                'KeyM': 'm',
                'KeyN': 'n',
                'KeyO': 'o',
                'KeyP': 'p',
                'KeyQ': 'q',
                'KeyR': 'r',
                'KeyS': 's',
                'KeyT': 't',
                'KeyU': 'u',
                'KeyV': 'v',
                'KeyW': 'w',
                'KeyX': 'x',
                'KeyY': 'y',
                'KeyZ': 'z',
                'Digit0': '0',
                'Digit1': '1',
                'Digit2': '2',
                'Digit3': '3',
                'Digit4': '4',
                'Digit5': '5',
                'Digit6': '6',
                'Digit7': '7',
                'Digit8': '8',
                'Digit9': '9',
                'Backquote': '`',
                'Backslash': '\\',
                'Quote': "'",
                'Slash': '/',
                'Comma': ',',
                'Period': '.',
                'Semicolon': ';',
                'Equal': '=',
                'Minus': '-',
                'BracketLeft': '[',
                'BracketRight': ']',
                'IntlBackslash': '§'
            };
            var8 = var10.bind(var13)(var8);
            var _closure1_slot12 = var8;
            var10 = function() { // Environment: var1
                var3 = _closure1_slot8;
                var2 = function() {
                    _fun94261: for (var _fun94261_ip = 0;;) switch (_fun94261_ip) {
                        case 0:
                            var5 = arguments[0];
                            var2 = this;
                            var0 = undefined;
                            if (!(var5 === var0)) {
                                _fun94261_ip = 19;
                                continue _fun94261
                            }
                        case 12:
                            var5 = _closure1_slot12;
                        case 19:
                            var3 = _closure1_slot7;
                            var1 = _closure2_slot0;
                            var1 = var3.bind(var0)(var2, var1);
                            var1 = global;
                            var4 = var1.Map;
                            var3 = var1.Object;
                            var1 = var3.entries;
                            var5 = var1.bind(var3)(var5);
                            var3 = var5.map;
                            var1 = function(arg0) { // Environment: var1
                                _fun94262: for (var _fun94262_ip = 0;;) switch (_fun94262_ip) {
                                    case 0:
                                        var5 = arg0;
                                        var0 = var5[Symbol.iterator];
                                        var5 = var0().next;
                                        var2 = var5().value;
                                        var1 = var0;
                                        var3 = undefined;
                                        var4 = var1 === var3;
                                        var1 = undefined;
                                        if (var4) {
                                            _fun94262_ip = 27;
                                            continue _fun94262
                                        }
                                    case 24:
                                        var1 = var2;
                                    case 27:
                                        var2 = undefined;
                                        if (var4) {
                                            _fun94262_ip = 57;
                                            continue _fun94262
                                        }
                                    case 32:
                                        var6 = var5().value;
                                        var5 = var0;
                                        var5 = var5 === var3;
                                        var2 = undefined;
                                        var4 = var5;
                                        if (var5) {
                                            _fun94262_ip = 57;
                                            continue _fun94262
                                        }
                                    case 51:
                                        var2 = var6;
                                        var4 = var5;
                                    case 57:
                                        if (var4) {
                                            _fun94262_ip = 63;
                                            continue _fun94262
                                        }
                                    case 60:
                                        var0.return();
                                    case 63:
                                        var0 = new Array(2);
                                        var0[0] = var1;
                                        var1 = _closure1_slot20;
                                        var1 = var1.bind(var3)(var2);
                                        var0[1] = var1;
                                        return var0;
                                }
                            };
                            var7 = var3.bind(var5)(var1);
                            var3 = var4.prototype;
                            var3 = Object.create(var3, {
                                constructor: {
                                    value: var4
                                }
                            });
                            var8 = var3;
                            var1 = new var8[var4](var7, var6);
                            var1 = var1 instanceof Object ? var1 : var3;
                            var2.map = var1;
                            return var0;
                    }
                };
                var _closure2_slot0 = var2;
                var0 = {};
                var1 = 'get';
                var0.key = var1;
                var1 = function arg0() {
                    var0 = this;
                    var2 = var0.map;
                    var1 = var2.get;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0.value = var1;
                var1 = new Array(8);
                var1[0] = var0;
                var0 = {};
                var5 = 'has';
                var0.key = var5;
                var5 = function arg0() {
                    var0 = this;
                    var2 = var0.map;
                    var1 = var2.has;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0.value = var5;
                var1[1] = var0;
                var0 = {};
                var5 = 'keys';
                var0.key = var5;
                var5 = function() {
                    var0 = this;
                    var1 = var0.map;
                    var0 = var1.keys;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var0.value = var5;
                var1[2] = var0;
                var0 = {};
                var5 = 'values';
                var0.key = var5;
                var5 = function() {
                    var0 = this;
                    var1 = var0.map;
                    var0 = var1.values;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var0.value = var5;
                var1[3] = var0;
                var0 = {};
                var5 = 'entries';
                var0.key = var5;
                var5 = function() {
                    var0 = this;
                    var1 = var0.map;
                    var0 = var1.entries;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var0.value = var5;
                var1[4] = var0;
                var0 = {};
                var5 = 'forEach';
                var0.key = var5;
                var5 = function arg0, arg1() {
                    var0 = this;
                    var3 = var0.map;
                    var2 = var3.forEach;
                    var1 = arg0;
                    var0 = arg1;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var0.value = var5;
                var1[5] = var0;
                var0 = {};
                var5 = 'size';
                var0.key = var5;
                var5 = function() {
                    var0 = this;
                    var0 = var0.map;
                    var0 = var0.size;
                    return var0;
                };
                var0.get = var5;
                var1[6] = var0;
                var0 = {};
                var5 = '_set';
                var0.key = var5;
                var4 = function arg0, arg1() {
                    var0 = this;
                    var3 = var0.map;
                    var2 = var3.set;
                    var1 = arg0;
                    var0 = arg1;
                    var0 = var2.bind(var3)(var1, var0);
                    var0 = undefined;
                    return var0;
                };
                var0.value = var4;
                var1[7] = var0;
                var0 = undefined;
                var0 = var3.bind(var0)(var2, var1);
                return var0;
            };
            var10 = var10.bind(var0)();
            var _closure1_slot13 = var10;
            var13 = var10.prototype;
            var13 = Object.create(var13, {
                constructor: {
                    value: var10
                }
            });
            var21 = var13;
            var10 = new var21[var10](var20);
            var10 = var10 instanceof Object ? var10 : var13;
            var _closure1_slot14 = var10;
            var10 = 'keyboard-layout-map';
            var _closure1_slot15 = var10;
            var10 = function() { // Environment: var1
                var3 = _closure1_slot8;
                var2 = function() {
                    _fun94272: for (var _fun94272_ip = 0;;) switch (_fun94272_ip) {
                        case 0:
                            var5 = arguments[0];
                            var2 = this;
                            var0 = undefined;
                            if (!(var5 === var0)) {
                                _fun94272_ip = 14;
                                continue _fun94272
                            }
                        case 12:
                            var5 = {};
                        case 14:
                            var4 = _closure1_slot7;
                            var1 = _closure2_slot0;
                            var1 = var4.bind(var0)(var2, var1);
                            var4 = null;
                            var2._internalKeyLayoutMap = var4;
                            var1 = new Array(0);
                            var2._cachedKeyCodeMapEntries = var1;
                            var1 = new Array(0);
                            var2._cachedKeyMapEntries = var1;
                            var1 = new Array(0);
                            var2._cachedKeyLayoutMapEntries = var1;
                            var1 = new Array(0);
                            var2._cachedAllEvents = var1;
                            var2._defaultKeyMap = var5;
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot1;
                            var1 = 12;
                            var1 = var7[var1];
                            var1 = var6.bind(var0)(var1);
                            var7 = var1.Storage;
                            var6 = var7.get;
                            var1 = _closure1_slot15;
                            var6 = var6.bind(var7)(var1);
                            var7 = var4 != var6;
                            var1 = null;
                            if (!var7) {
                                _fun94272_ip = 140;
                                continue _fun94272
                            }
                        case 137:
                            var1 = var6;
                        case 140:
                            if (!(var4 == var1)) {
                                _fun94272_ip = 165;
                                continue _fun94272
                            }
                        case 144:
                            var4 = _closure1_slot24;
                            var3 = {};
                            var9 = var3;
                            var8 = var5;
                            var5 = copyDataProperties(var9, var8);
                            var1 = var4.bind(var0)(var3);
                        case 165:
                            var2.keyMap = var1;
                            var1 = var2._initializeInternalLayoutMap;
                            var1 = var1.bind(var2)();
                            var1 = var2._buildKeyCodeMapFromKeyMap;
                            var1 = var1.bind(var2)();
                            var2.keyCodeMap = var1;
                            var1 = var2.updateCaches;
                            var1 = var1.bind(var2)();
                            var1 = var2.save;
                            var1 = var1.bind(var2)();
                            return var0;
                    }
                };
                var _closure2_slot0 = var2;
                var0 = {};
                var1 = '_setCachedKeyCodeMapEntries';
                var0.key = var1;
                var1 = function() {
                    var1 = this;
                    var2 = global;
                    var4 = var2.Object;
                    var3 = var4.entries;
                    var2 = var1.keyCodeMap;
                    var4 = var3.bind(var4)(var2);
                    var3 = var4.map;
                    var2 = function(arg0) { // Environment: var0
                        _fun94274: for (var _fun94274_ip = 0;;) switch (_fun94274_ip) {
                            case 0:
                                var5 = arg0;
                                var0 = var5[Symbol.iterator];
                                var5 = var0().next;
                                var1 = var5().value;
                                var2 = var0;
                                var3 = undefined;
                                var4 = var2 === var3;
                                var2 = undefined;
                                if (var4) {
                                    _fun94274_ip = 27;
                                    continue _fun94274
                                }
                            case 24:
                                var2 = var1;
                            case 27:
                                var1 = undefined;
                                if (var4) {
                                    _fun94274_ip = 57;
                                    continue _fun94274
                                }
                            case 32:
                                var6 = var5().value;
                                var5 = var0;
                                var5 = var5 === var3;
                                var1 = undefined;
                                var4 = var5;
                                if (var5) {
                                    _fun94274_ip = 57;
                                    continue _fun94274
                                }
                            case 51:
                                var1 = var6;
                                var4 = var5;
                            case 57:
                                if (var4) {
                                    _fun94274_ip = 63;
                                    continue _fun94274
                                }
                            case 60:
                                var0.return();
                            case 63:
                                var0 = global;
                                var0 = var0.Number;
                                var2 = var0.bind(var3)(var2);
                                var0 = new Array(2);
                                var0[0] = var2;
                                var0[1] = var1;
                                return var0;
                        }
                    };
                    var2 = var3.bind(var4)(var2);
                    var1._cachedKeyCodeMapEntries = var2;
                    var3 = var1._cachedKeyCodeMapEntries;
                    var2 = var3.flatMap;
                    var0 = function(arg0) { // Environment: var0
                        _fun94275: for (var _fun94275_ip = 0;;) switch (_fun94275_ip) {
                            case 0:
                                var3 = arg0;
                                var1 = var3[Symbol.iterator];
                                var3 = var1().next;
                                var0 = var3().value;
                                var0 = var1;
                                var5 = undefined;
                                var2 = var0 === var5;
                                var0 = undefined;
                                if (var2) {
                                    _fun94275_ip = 49;
                                    continue _fun94275
                                }
                            case 24:
                                var4 = var3().value;
                                var3 = var1;
                                var3 = var3 === var5;
                                var0 = undefined;
                                var2 = var3;
                                if (var3) {
                                    _fun94275_ip = 49;
                                    continue _fun94275
                                }
                            case 43:
                                var0 = var4;
                                var2 = var3;
                            case 49:
                                if (var2) {
                                    _fun94275_ip = 55;
                                    continue _fun94275
                                }
                            case 52:
                                var1.return();
                            case 55:
                                return var0;
                        }
                    };
                    var0 = var2.bind(var3)(var0);
                    var1._cachedAllEvents = var0;
                    var0 = undefined;
                    return var0;
                };
                var0.value = var1;
                var1 = new Array(18);
                var1[0] = var0;
                var0 = {};
                var5 = '_setCachedKeyMapEntries';
                var0.key = var5;
                var5 = function() {
                    var1 = this;
                    var0 = global;
                    var3 = var0.Object;
                    var2 = var3.entries;
                    var0 = var1.keyMap;
                    var0 = var2.bind(var3)(var0);
                    var1._cachedKeyMapEntries = var0;
                    var0 = undefined;
                    return var0;
                };
                var0.value = var5;
                var1[1] = var0;
                var0 = {};
                var5 = '_setCachedKeyLayoutMapEntries';
                var0.key = var5;
                var5 = function() {
                    var1 = this;
                    var0 = global;
                    var3 = var0.Array;
                    var2 = var3.from;
                    var0 = var1.getLayoutMap;
                    var4 = var0.bind(var1)();
                    var0 = var4.entries;
                    var0 = var0.bind(var4)();
                    var0 = var2.bind(var3)(var0);
                    var1._cachedKeyLayoutMapEntries = var0;
                    var0 = undefined;
                    return var0;
                };
                var0.value = var5;
                var1[2] = var0;
                var0 = {};
                var5 = 'cachedKeyCodeMapEntries';
                var0.key = var5;
                var5 = function() {
                    _fun94278: for (var _fun94278_ip = 0;;) switch (_fun94278_ip) {
                        case 0:
                            var0 = this;
                            var1 = var0._cachedKeyCodeMapEntries;
                            var2 = var1.length;
                            var1 = 0;
                            if (!(var1 === var2)) {
                                _fun94278_ip = 30;
                                continue _fun94278
                            }
                        case 20:
                            var1 = var0._setCachedKeyCodeMapEntries;
                            var1 = var1.bind(var0)();
                        case 30:
                            var0 = var0._cachedKeyCodeMapEntries;
                            return var0;
                    }
                };
                var0.get = var5;
                var1[3] = var0;
                var0 = {};
                var5 = 'cachedKeyMapEntries';
                var0.key = var5;
                var5 = function() {
                    _fun94279: for (var _fun94279_ip = 0;;) switch (_fun94279_ip) {
                        case 0:
                            var0 = this;
                            var1 = var0._cachedKeyMapEntries;
                            var2 = var1.length;
                            var1 = 0;
                            if (!(var1 === var2)) {
                                _fun94279_ip = 30;
                                continue _fun94279
                            }
                        case 20:
                            var1 = var0._setCachedKeyMapEntries;
                            var1 = var1.bind(var0)();
                        case 30:
                            var0 = var0._cachedKeyMapEntries;
                            return var0;
                    }
                };
                var0.get = var5;
                var1[4] = var0;
                var0 = {};
                var5 = 'cachedKeyLayoutMapEntries';
                var0.key = var5;
                var5 = function() {
                    _fun94280: for (var _fun94280_ip = 0;;) switch (_fun94280_ip) {
                        case 0:
                            var0 = this;
                            var1 = var0._cachedKeyLayoutMapEntries;
                            var2 = var1.length;
                            var1 = 0;
                            if (!(var1 === var2)) {
                                _fun94280_ip = 30;
                                continue _fun94280
                            }
                        case 20:
                            var1 = var0._setCachedKeyLayoutMapEntries;
                            var1 = var1.bind(var0)();
                        case 30:
                            var0 = var0._cachedKeyLayoutMapEntries;
                            return var0;
                    }
                };
                var0.get = var5;
                var1[5] = var0;
                var0 = {};
                var5 = 'cachedAllEvents';
                var0.key = var5;
                var5 = function() {
                    _fun94281: for (var _fun94281_ip = 0;;) switch (_fun94281_ip) {
                        case 0:
                            var0 = this;
                            var1 = var0._cachedAllEvents;
                            var2 = var1.length;
                            var1 = 0;
                            if (!(var1 === var2)) {
                                _fun94281_ip = 30;
                                continue _fun94281
                            }
                        case 20:
                            var1 = var0._setCachedKeyCodeMapEntries;
                            var1 = var1.bind(var0)();
                        case 30:
                            var0 = var0._cachedAllEvents;
                            return var0;
                    }
                };
                var0.get = var5;
                var1[6] = var0;
                var0 = {};
                var5 = 'getKeyCodeMapItem';
                var0.key = var5;
                var5 = function arg0() {
                    _fun94282: for (var _fun94282_ip = 0;;) switch (_fun94282_ip) {
                        case 0:
                            var1 = arg0;
                            var0 = this;
                            var2 = var0.keyCodeMap;
                            var3 = var2[var1];
                            var2 = null;
                            if (!(var2 == var3)) {
                                _fun94282_ip = 36;
                                continue _fun94282
                            }
                        case 22:
                            var3 = var0.keyCodeMap;
                            var2 = new Array(0);
                            var3[var1] = var2;
                        case 36:
                            var0 = var0.keyCodeMap;
                            var0 = var0[var1];
                            return var0;
                    }
                };
                var0.value = var5;
                var1[7] = var0;
                var0 = {};
                var5 = '_buildKeyCodeMapFromKeyMap';
                var0.key = var5;
                var5 = function() {
                    _fun94283: for (var _fun94283_ip = 0;;) switch (_fun94283_ip) {
                        case 0:
                            var11 = this;
                            var0 = {};
                            var1 = global;
                            var3 = var1.Object;
                            var2 = var3.entries;
                            var1 = var11.keyMap;
                            var10 = var2.bind(var3)(var1);
                            var1 = var10.length;
                            var9 = 0;
                            var1 = var9 < var1;
                            var8 = true;
                            var6 = undefined;
                            var5 = 2;
                            var4 = 1;
                            var3 = null;
                            var2 = 0;
                            if (!var1) {
                                _fun94283_ip = 152;
                                continue _fun94283
                            }
                        case 61:
                            var12 = var10[var2];
                            var1 = _closure1_slot5;
                            var1 = var1.bind(var6)(var12, var5);
                            var15 = var1[var9];
                            var14 = var1[var4];
                            var1 = var0[var14];
                            if (!(var3 == var1)) {
                                _fun94283_ip = 95;
                                continue _fun94283
                            }
                        case 91:
                            var1 = new Array(0);
                        case 95:
                            var0[var14] = var1;
                            var13 = var0[var14];
                            var12 = var13.push;
                            var1 = {};
                            var1.keyCode = var14;
                            var1.key = var15;
                            var14 = var11.findCodeFromKeyboardLayoutMap;
                            var14 = var14.bind(var11)(var15, var8);
                            var1.code = var14;
                            var1 = var12.bind(var13)(var1);
                            var2 = var2 + 1;
                            var1 = var10.length;
                            if (var2 < var1) {
                                _fun94283_ip = 61;
                                continue _fun94283
                            }
                        case 152:
                            return var0;
                    }
                };
                var0.value = var5;
                var1[8] = var0;
                var0 = {};
                var5 = '_initializeInternalLayoutMap';
                var0.key = var5;
                var5 = function() {
                    var2 = this;
                    var1 = _closure1_slot23;
                    var0 = undefined;
                    var6 = var1.bind(var0)();
                    var1 = global;
                    var4 = var1.Map;
                    var5 = var1.Array;
                    var3 = var5.from;
                    var1 = var6.entries;
                    var1 = var1.bind(var6)();
                    var7 = var3.bind(var5)(var1);
                    var3 = var4.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var4
                        }
                    });
                    var8 = var3;
                    var1 = new var8[var4](var7, var6);
                    var1 = var1 instanceof Object ? var1 : var3;
                    var2._internalKeyLayoutMap = var1;
                    var1 = var2._setCachedKeyLayoutMapEntries;
                    var1 = var1.bind(var2)();
                    return var0;
                };
                var0.value = var5;
                var1[9] = var0;
                var0 = {};
                var5 = '_hasExactMatch';
                var0.key = var5;
                var5 = function arg0() {
                    _fun94285: for (var _fun94285_ip = 0;;) switch (_fun94285_ip) {
                        case 0:
                            var2 = arg0;
                            var _closure3_slot0 = var2;
                            var3 = var2.keyCode;
                            var0 = null;
                            if (!(var0 != var3)) {
                                _fun94285_ip = 67;
                                continue _fun94285
                            }
                        case 21:
                            var3 = this;
                            var3 = var3.keyCodeMap;
                            var2 = var2.keyCode;
                            var3 = var3[var2];
                            var0 = var0 != var3;
                            if (!var0) {
                                _fun94285_ip = 65;
                                continue _fun94285
                            }
                        case 47:
                            var2 = var3.some;
                            var1 = function(arg0) { // Environment: var1
                                _fun94286: for (var _fun94286_ip = 0;;) switch (_fun94286_ip) {
                                    case 0:
                                        var2 = arg0;
                                        var3 = var2.key;
                                        var0 = _closure3_slot0;
                                        var0 = var0.key;
                                        var0 = var3 === var0;
                                        if (!var0) {
                                            _fun94286_ip = 45;
                                            continue _fun94286
                                        }
                                    case 27:
                                        var4 = var2.code;
                                        var3 = _closure3_slot0;
                                        var3 = var3.code;
                                        var0 = var4 === var3;
                                    case 45:
                                        if (!var0) {
                                            _fun94286_ip = 68;
                                            continue _fun94286
                                        }
                                    case 48:
                                        var2 = var2.keyCode;
                                        var1 = _closure3_slot0;
                                        var1 = var1.keyCode;
                                        var0 = var2 === var1;
                                    case 68:
                                        return var0;
                                }
                            };
                            var0 = var2.bind(var3)(var1);
                        case 65:
                            return var0;
                        case 67:
                            var0 = false;
                            return var0;
                    }
                };
                var0.value = var5;
                var1[10] = var0;
                var0 = {};
                var5 = 'addEvent';
                var0.key = var5;
                var5 = function arg0() {
                    _fun94287: for (var _fun94287_ip = 0;;) switch (_fun94287_ip) {
                        case 0:
                            var2 = this;
                            var3 = _closure1_slot25;
                            var0 = undefined;
                            var1 = arg0;
                            var1 = var3.bind(var0)(var1);
                            var5 = var2._internalKeyLayoutMap;
                            var3 = null;
                            if (!(var3 == var5)) {
                                _fun94287_ip = 42;
                                continue _fun94287
                            }
                        case 32:
                            var5 = var2._initializeInternalLayoutMap;
                            var5 = var5.bind(var2)();
                        case 42:
                            var5 = var2._hasExactMatch;
                            var5 = var5.bind(var2)(var1);
                            if (var5) {
                                _fun94287_ip = 359;
                                continue _fun94287
                            }
                        case 61:
                            var5 = var1.key;
                            var5 = var3 != var5;
                            if (!var5) {
                                _fun94287_ip = 88;
                                continue _fun94287
                            }
                        case 73:
                            var7 = var1.key;
                            var6 = 'dead';
                            var5 = var6 !== var7;
                        case 88:
                            if (!var5) {
                                _fun94287_ip = 359;
                                continue _fun94287
                            }
                        case 94:
                            var6 = var2.keyMap;
                            var5 = var1.key;
                            var5 = var6[var5];
                            if (!(var3 != var5)) {
                                _fun94287_ip = 231;
                                continue _fun94287
                            }
                        case 113:
                            var6 = var2.keyMap;
                            var5 = var1.key;
                            var6 = var6[var5];
                            var5 = var1.keyCode;
                            var5 = var6 !== var5;
                            if (!var5) {
                                _fun94287_ip = 151;
                                continue _fun94287
                            }
                        case 141:
                            var6 = _closure1_slot9;
                            var5 = var6.logKeyboardMismatches;
                        case 151:
                            if (!var5) {
                                _fun94287_ip = 252;
                                continue _fun94287
                            }
                        case 154:
                            var6 = _closure1_slot10;
                            var5 = var6.error;
                            var17 = var1.key;
                            var7 = var2.keyMap;
                            var4 = var1.key;
                            var15 = var7[var4];
                            var13 = var1.keyCode;
                            var4 = global;
                            var4 = var4.HermesInternal;
                            var9 = var4.concat;
                            var18 = 'KeyboardMapper - Key code mismatch for key ';
                            var16 = ': ';
                            var14 = ' !== ';
                            var4 = var18[var9](var17, var16, var15, var14, var13, var12);
                            var4 = var5.bind(var6)(var4);
                            _fun94287_ip = 252;
                            continue _fun94287;
                        case 231:
                            var6 = var2.keyMap;
                            var5 = var1.key;
                            var4 = var1.keyCode;
                            var6[var5] = var4;
                        case 252:
                            var6 = var2.keyCodeMap;
                            var5 = var1.keyCode;
                            var7 = var2.keyCodeMap;
                            var4 = var1.keyCode;
                            var4 = var7[var4];
                            if (!(var3 == var4)) {
                                _fun94287_ip = 288;
                                continue _fun94287
                            }
                        case 284:
                            var4 = new Array(0);
                        case 288:
                            var6[var5] = var4;
                            var5 = var2.keyCodeMap;
                            var4 = var1.keyCode;
                            var5 = var5[var4];
                            var4 = var5.push;
                            var4 = var4.bind(var5)(var1);
                            var5 = var2._internalKeyLayoutMap;
                            if (!(var3 != var5)) {
                                _fun94287_ip = 349;
                                continue _fun94287
                            }
                        case 328:
                            var4 = var5.set;
                            var3 = var1.code;
                            var1 = var1.key;
                            var1 = var4.bind(var5)(var3, var1);
                        case 349:
                            var1 = var2.updateCaches;
                            var1 = var1.bind(var2)();
                        case 359:
                            return var0;
                    }
                };
                var0.value = var5;
                var1[11] = var0;
                var0 = {};
                var5 = 'updateCaches';
                var0.key = var5;
                var5 = function() {
                    var1 = this;
                    var0 = var1._setCachedKeyCodeMapEntries;
                    var0 = var0.bind(var1)();
                    var0 = var1._setCachedKeyMapEntries;
                    var0 = var0.bind(var1)();
                    var0 = var1._setCachedKeyLayoutMapEntries;
                    var0 = var0.bind(var1)();
                    var0 = undefined;
                    return var0;
                };
                var0.value = var5;
                var1[12] = var0;
                var0 = {};
                var5 = 'reset';
                var0.key = var5;
                var5 = function() {
                    var2 = this;
                    var0 = null;
                    var2._internalKeyLayoutMap = var0;
                    var3 = _closure1_slot24;
                    var1 = {};
                    var4 = var2._defaultKeyMap;
                    var5 = var1;
                    var0 = copyDataProperties(var5, var4);
                    var0 = undefined;
                    var1 = var3.bind(var0)(var1);
                    var2.keyMap = var1;
                    var1 = var2._initializeInternalLayoutMap;
                    var1 = var1.bind(var2)();
                    var1 = var2._buildKeyCodeMapFromKeyMap;
                    var1 = var1.bind(var2)();
                    var2.keyCodeMap = var1;
                    var1 = var2.updateCaches;
                    var1 = var1.bind(var2)();
                    var1 = var2.save;
                    var1 = var1.bind(var2)();
                    return var0;
                };
                var0.value = var5;
                var1[13] = var0;
                var0 = {};
                var5 = 'save';
                var0.key = var5;
                var5 = function() {
                    var0 = this;
                    var4 = var0.keyMap;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var0 = 12;
                    var2 = var2[var0];
                    var0 = undefined;
                    var2 = var3.bind(var0)(var2);
                    var3 = var2.Storage;
                    var2 = var3.set;
                    var1 = _closure1_slot15;
                    var1 = var2.bind(var3)(var1, var4);
                    return var0;
                };
                var0.value = var5;
                var1[14] = var0;
                var0 = {};
                var5 = 'getLayoutMap';
                var0.key = var5;
                var5 = function() {
                    _fun94291: for (var _fun94291_ip = 0;;) switch (_fun94291_ip) {
                        case 0:
                            var0 = this;
                            var2 = var0._internalKeyLayoutMap;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun94291_ip = 23;
                                continue _fun94291
                            }
                        case 15:
                            var0 = var0._internalKeyLayoutMap;
                            _fun94291_ip = 36;
                            continue _fun94291;
                        case 23:
                            var2 = _closure1_slot23;
                            var1 = undefined;
                            var0 = var2.bind(var1)();
                        case 36:
                            return var0;
                    }
                };
                var0.value = var5;
                var1[15] = var0;
                var0 = {};
                var5 = 'getKeyCode';
                var0.key = var5;
                var5 = function arg0() {
                    var0 = this;
                    var1 = var0.keyMap;
                    var0 = arg0;
                    var0 = var1[var0];
                    return var0;
                };
                var0.value = var5;
                var1[16] = var0;
                var0 = {};
                var5 = 'findCodeFromKeyboardLayoutMap';
                var0.key = var5;
                var4 = function arg0() {
                    _fun94293: for (var _fun94293_ip = 0;;) switch (_fun94293_ip) {
                        case 0:
                            var0 = arg0;
                            var3 = arguments[1];
                            var1 = undefined;
                            if (!(var3 === var1)) {
                                _fun94293_ip = 16;
                                continue _fun94293
                            }
                        case 14:
                            var3 = false;
                        case 16:
                            var _closure3_slot0 = var1;
                            var4 = this;
                            var4 = var4.cachedKeyLayoutMapEntries;
                            if (!var3) {
                                _fun94293_ip = 73;
                                continue _fun94293
                            }
                        case 34:
                            var3 = global;
                            var6 = var3.Array;
                            var5 = var6.from;
                            var3 = _closure1_slot23;
                            var7 = var3.bind(var1)();
                            var3 = var7.entries;
                            var3 = var3.bind(var7)();
                            var4 = var5.bind(var6)(var3);
                        case 73:
                            var3 = _closure1_slot20;
                            var3 = var3.bind(var1)(var0);
                            _closure3_slot0 = var3;
                            var3 = var4.find;
                            var2 = function(arg0) { // Environment: var2
                                _fun94294: for (var _fun94294_ip = 0;;) switch (_fun94294_ip) {
                                    case 0:
                                        var3 = arg0;
                                        var0 = var3[Symbol.iterator];
                                        var3 = var0().next;
                                        var1 = var3().value;
                                        var1 = var0;
                                        var5 = undefined;
                                        var2 = var1 === var5;
                                        var1 = undefined;
                                        if (var2) {
                                            _fun94294_ip = 49;
                                            continue _fun94294
                                        }
                                    case 24:
                                        var4 = var3().value;
                                        var3 = var0;
                                        var3 = var3 === var5;
                                        var1 = undefined;
                                        var2 = var3;
                                        if (var3) {
                                            _fun94294_ip = 49;
                                            continue _fun94294
                                        }
                                    case 43:
                                        var1 = var4;
                                        var2 = var3;
                                    case 49:
                                        if (var2) {
                                            _fun94294_ip = 55;
                                            continue _fun94294
                                        }
                                    case 52:
                                        var0.return();
                                    case 55:
                                        var0 = _closure3_slot0;
                                        var0 = var1 === var0;
                                        return var0;
                                }
                            };
                            var4 = var3.bind(var4)(var2);
                            var2 = null;
                            var3 = var2 == var4;
                            var1 = undefined;
                            if (var3) {
                                _fun94293_ip = 123;
                                continue _fun94293
                            }
                        case 117:
                            var3 = 0;
                            var1 = var4[var3];
                        case 123:
                            if (!(var2 != var1)) {
                                _fun94293_ip = 130;
                                continue _fun94293
                            }
                        case 127:
                            var0 = var1;
                        case 130:
                            return var0;
                    }
                };
                var0.value = var4;
                var1[17] = var0;
                var0 = undefined;
                var0 = var3.bind(var0)(var2, var1);
                return var0;
            };
            var13 = var10.bind(var0)();
            var10 = function(arg0) { // Environment: var1
                var3 = function() {
                    _fun94296: for (var _fun94296_ip = 0;;) switch (_fun94296_ip) {
                        case 0:
                            var3 = this;
                            var2 = undefined;
                            var4 = undefined;
                            var0 = _closure1_slot7;
                            var1 = _closure2_slot0;
                            var0 = var0.bind(var2)(var3, var1);
                            var0 = _closure1_slot3;
                            var8 = var0.bind(var2)(var1);
                            var1 = _closure1_slot2;
                            var0 = _closure1_slot19;
                            var0 = var0.bind(var2)();
                            if (var0) {
                                _fun94296_ip = 69;
                                continue _fun94296
                            }
                        case 51:
                            var6 = var8.apply;
                            var4 = arguments;
                            var0 = var4;
                            var0 = var6.bind(var8)(var3, var0);
                            _fun94296_ip = 105;
                            continue _fun94296;
                        case 69:
                            var6 = global;
                            var7 = var6.Reflect;
                            var6 = var7.construct;
                            var5 = _closure1_slot3;
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
                var4 = _closure1_slot4;
                var2 = undefined;
                var1 = arg0;
                var1 = var4.bind(var2)(var3, var1);
                var1 = _closure1_slot8;
                var4 = {};
                var0 = 'getKeyString';
                var4.key = var0;
                var0 = function arg0, arg1() {
                    _fun94297: for (var _fun94297_ip = 0;;) switch (_fun94297_ip) {
                        case 0:
                            var3 = arg0;
                            var1 = this;
                            var _closure3_slot0 = var1;
                            var _closure3_slot1 = var3;
                            var2 = arg1;
                            var _closure3_slot2 = var2;
                            var2 = var1.getKeyCodeMapItem;
                            var2 = var2.bind(var1)(var3);
                            var4 = var2.length;
                            var3 = 0;
                            if (!(var3 === var4)) {
                                _fun94297_ip = 85;
                                continue _fun94297
                            }
                        case 45:
                            var4 = var1.cachedKeyMapEntries;
                            var3 = var4.filter;
                            var1 = function(arg0) { // Environment: var0
                                _fun94298: for (var _fun94298_ip = 0;;) switch (_fun94298_ip) {
                                    case 0:
                                        var3 = arg0;
                                        var1 = var3[Symbol.iterator];
                                        var3 = var1().next;
                                        var0 = var3().value;
                                        var0 = var1;
                                        var5 = undefined;
                                        var2 = var0 === var5;
                                        var0 = undefined;
                                        if (var2) {
                                            _fun94298_ip = 49;
                                            continue _fun94298
                                        }
                                    case 24:
                                        var4 = var3().value;
                                        var3 = var1;
                                        var3 = var3 === var5;
                                        var0 = undefined;
                                        var2 = var3;
                                        if (var3) {
                                            _fun94298_ip = 49;
                                            continue _fun94298
                                        }
                                    case 43:
                                        var0 = var4;
                                        var2 = var3;
                                    case 49:
                                        if (var2) {
                                            _fun94298_ip = 55;
                                            continue _fun94298
                                        }
                                    case 52:
                                        var1.return();
                                    case 55:
                                        var0 = var0 == var0;
                                        return var0;
                                }
                            };
                            var4 = var3.bind(var4)(var1);
                            var3 = var4.map;
                            var1 = function(arg0) { // Environment: var0
                                _fun94299: for (var _fun94299_ip = 0;;) switch (_fun94299_ip) {
                                    case 0:
                                        var3 = arg0;
                                        var0 = var3[Symbol.iterator];
                                        var3 = var0().next;
                                        var1 = var3().value;
                                        var2 = var0;
                                        var6 = undefined;
                                        var2 = var2 === var6;
                                        var4 = undefined;
                                        if (var2) {
                                            _fun94299_ip = 27;
                                            continue _fun94299
                                        }
                                    case 24:
                                        var4 = var1;
                                    case 27:
                                        var1 = undefined;
                                        if (var2) {
                                            _fun94299_ip = 57;
                                            continue _fun94299
                                        }
                                    case 32:
                                        var5 = var3().value;
                                        var3 = var0;
                                        var3 = var3 === var6;
                                        var1 = undefined;
                                        var2 = var3;
                                        if (var3) {
                                            _fun94299_ip = 57;
                                            continue _fun94299
                                        }
                                    case 51:
                                        var1 = var5;
                                        var2 = var3;
                                    case 57:
                                        if (var2) {
                                            _fun94299_ip = 63;
                                            continue _fun94299
                                        }
                                    case 60:
                                        var0.return();
                                    case 63:
                                        var0 = {};
                                        var0.key = var4;
                                        var0.keyCode = var1;
                                        var3 = _closure3_slot2;
                                        var1 = null;
                                        if (!(var1 == var3)) {
                                            _fun94299_ip = 104;
                                            continue _fun94299
                                        }
                                    case 87:
                                        var3 = _closure3_slot0;
                                        var1 = var3.findCodeFromKeyboardLayoutMap;
                                        var1 = var1.bind(var3)(var4);
                                        _fun94299_ip = 108;
                                        continue _fun94299;
                                    case 104:
                                        var1 = _closure3_slot2;
                                    case 108:
                                        var0.code = var1;
                                        return var0;
                                }
                            };
                            var2 = var3.bind(var4)(var1);
                        case 85:
                            var1 = var2.find;
                            var0 = function(arg0) { // Environment: var0
                                _fun94300: for (var _fun94300_ip = 0;;) switch (_fun94300_ip) {
                                    case 0:
                                        var3 = arg0;
                                        var1 = var3.keyCode;
                                        var0 = _closure3_slot1;
                                        var4 = var1 === var0;
                                        var5 = _closure3_slot2;
                                        var1 = null;
                                        var0 = var4;
                                        if (!(var1 != var5)) {
                                            _fun94300_ip = 55;
                                            continue _fun94300
                                        }
                                    case 33:
                                        var1 = var4;
                                        if (!var4) {
                                            _fun94300_ip = 52;
                                            continue _fun94300
                                        }
                                    case 39:
                                        var3 = var3.code;
                                        var2 = _closure3_slot2;
                                        var1 = var3 === var2;
                                    case 52:
                                        var0 = var1;
                                    case 55:
                                        return var0;
                                }
                            };
                            var1 = var1.bind(var2)(var0);
                            var0 = null;
                            var2 = var0 == var1;
                            var0 = undefined;
                            if (var2) {
                                _fun94297_ip = 118;
                                continue _fun94297
                            }
                        case 113:
                            var0 = var1.key;
                        case 118:
                            return var0;
                    }
                };
                var4.value = var0;
                var0 = new Array(6);
                var0[0] = var4;
                var4 = {};
                var6 = 'findExactKeyboardEventMatch';
                var4.key = var6;
                var6 = function arg0, arg1, arg2() {
                    _fun94301: for (var _fun94301_ip = 0;;) switch (_fun94301_ip) {
                        case 0:
                            var5 = arg1;
                            var6 = arg2;
                            var2 = this;
                            var _closure3_slot0 = var5;
                            var _closure3_slot1 = var6;
                            var4 = _closure1_slot20;
                            var3 = undefined;
                            var0 = arg0;
                            var7 = var4.bind(var3)(var0);
                            var _closure3_slot2 = var7;
                            var4 = null;
                            if (!(var4 == var5)) {
                                _fun94301_ip = 64;
                                continue _fun94301
                            }
                        case 46:
                            var0 = var2.findCodeFromKeyboardLayoutMap;
                            var0 = var0.bind(var2)(var7);
                            _closure3_slot0 = var0;
                            var5 = var0;
                        case 64:
                            if (!(var4 != var6)) {
                                _fun94301_ip = 103;
                                continue _fun94301
                            }
                        case 68:
                            var0 = var2.keyCodeMap;
                            var8 = var0[var6];
                            if (!(var4 != var8)) {
                                _fun94301_ip = 103;
                                continue _fun94301
                            }
                        case 82:
                            var7 = var8.find;
                            var0 = function(arg0) { // Environment: var1
                                _fun94302: for (var _fun94302_ip = 0;;) switch (_fun94302_ip) {
                                    case 0:
                                        var2 = arg0;
                                        var3 = _closure1_slot20;
                                        var1 = var2.key;
                                        var0 = undefined;
                                        var3 = var3.bind(var0)(var1);
                                        var0 = _closure3_slot2;
                                        var0 = var3 === var0;
                                        if (!var0) {
                                            _fun94302_ip = 49;
                                            continue _fun94302
                                        }
                                    case 36:
                                        var2 = var2.code;
                                        var1 = _closure3_slot0;
                                        var0 = var2 === var1;
                                    case 49:
                                        return var0;
                                }
                            };
                            var0 = var7.bind(var8)(var0);
                            if (!(var4 == var0)) {
                                _fun94301_ip = 138;
                                continue _fun94301
                            }
                        case 103:
                            if (!(var4 != var6)) {
                                _fun94301_ip = 111;
                                continue _fun94301
                            }
                        case 107:
                            if (!(var4 == var5)) {
                                _fun94301_ip = 113;
                                continue _fun94301
                            }
                        case 111:
                            return var3;
                        case 113:
                            var3 = var2.cachedAllEvents;
                            var2 = var3.find;
                            var1 = function(arg0) { // Environment: var1
                                _fun94303: for (var _fun94303_ip = 0;;) switch (_fun94303_ip) {
                                    case 0:
                                        var3 = arg0;
                                        var2 = _closure1_slot20;
                                        var1 = var3.key;
                                        var0 = undefined;
                                        var2 = var2.bind(var0)(var1);
                                        var0 = _closure3_slot2;
                                        var2 = var2 === var0;
                                        var4 = var3.keyCode;
                                        var0 = _closure3_slot1;
                                        var0 = var4 === var0;
                                        var3 = var3.code;
                                        var1 = _closure3_slot0;
                                        var1 = var3 === var1;
                                        if (!var0) {
                                            _fun94303_ip = 66;
                                            continue _fun94303
                                        }
                                    case 63:
                                        var0 = var2;
                                    case 66:
                                        if (!var0) {
                                            _fun94303_ip = 72;
                                            continue _fun94303
                                        }
                                    case 69:
                                        var0 = var1;
                                    case 72:
                                        return var0;
                                }
                            };
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        case 138:
                            return var0;
                    }
                };
                var4.value = var6;
                var0[1] = var4;
                var4 = {};
                var6 = 'getWeightedPossibleKeyStringMatches';
                var4.key = var6;
                var6 = function arg0, arg1, arg2() {
                    var1 = arg0;
                    var _closure3_slot0 = var1;
                    var1 = arg1;
                    var _closure3_slot1 = var1;
                    var1 = arg2;
                    var _closure3_slot2 = var1;
                    var1 = this;
                    var3 = var1.cachedAllEvents;
                    var2 = var3.filter;
                    var1 = function(arg0) { // Environment: var0
                        _fun94305: for (var _fun94305_ip = 0;;) switch (_fun94305_ip) {
                            case 0:
                                var4 = arg0;
                                var5 = _closure1_slot20;
                                var0 = var4.key;
                                var2 = undefined;
                                var1 = var5.bind(var2)(var0);
                                var0 = _closure3_slot0;
                                var0 = var5.bind(var2)(var0);
                                var2 = var1 === var0;
                                var0 = _closure3_slot2;
                                var5 = null;
                                var0 = var5 == var0;
                                if (var0) {
                                    _fun94305_ip = 65;
                                    continue _fun94305
                                }
                            case 51:
                                var6 = var4.keyCode;
                                var1 = _closure3_slot2;
                                var0 = var6 === var1;
                            case 65:
                                var1 = _closure3_slot1;
                                var1 = var5 == var1;
                                if (var1) {
                                    _fun94305_ip = 89;
                                    continue _fun94305
                                }
                            case 76:
                                var4 = var4.code;
                                var3 = _closure3_slot1;
                                var1 = var4 === var3;
                            case 89:
                                if (!var0) {
                                    _fun94305_ip = 95;
                                    continue _fun94305
                                }
                            case 92:
                                var0 = var2;
                            case 95:
                                if (!var0) {
                                    _fun94305_ip = 101;
                                    continue _fun94305
                                }
                            case 98:
                                var0 = var1;
                            case 101:
                                return var0;
                        }
                    };
                    var2 = var2.bind(var3)(var1);
                    var1 = var2.sort;
                    var0 = function(arg0, arg1) { // Environment: var0
                        var3 = function arg0() {
                            _fun94307: for (var _fun94307_ip = 0;;) switch (_fun94307_ip) {
                                case 0:
                                    var3 = arg0;
                                    var5 = _closure1_slot20;
                                    var0 = var3.key;
                                    var4 = undefined;
                                    var2 = var5.bind(var4)(var0);
                                    var1 = _closure3_slot0;
                                    var1 = var5.bind(var4)(var1);
                                    var5 = 0;
                                    if (!(var2 === var1)) {
                                        _fun94307_ip = 50;
                                        continue _fun94307
                                    }
                                case 40:
                                    var5 = 0.5;
                                case 50:
                                    var1 = _closure3_slot1;
                                    var4 = null;
                                    var1 = var4 != var1;
                                    if (!var1) {
                                        _fun94307_ip = 76;
                                        continue _fun94307
                                    }
                                case 63:
                                    var6 = var3.code;
                                    var2 = _closure3_slot1;
                                    var1 = var6 === var2;
                                case 76:
                                    var2 = var5;
                                    if (!var1) {
                                        _fun94307_ip = 96;
                                        continue _fun94307
                                    }
                                case 82:
                                    var1 = 0.3;
                                    var2 = var5 + var1;
                                case 96:
                                    var1 = _closure3_slot2;
                                    var1 = var4 != var1;
                                    if (!var1) {
                                        _fun94307_ip = 121;
                                        continue _fun94307
                                    }
                                case 107:
                                    var3 = var3.keyCode;
                                    var0 = _closure3_slot2;
                                    var1 = var3 === var0;
                                case 121:
                                    var0 = var2;
                                    if (!var1) {
                                        _fun94307_ip = 141;
                                        continue _fun94307
                                    }
                                case 127:
                                    var1 = 0.2;
                                    var0 = var2 + var1;
                                case 141:
                                    return var0;
                            }
                        };
                        var2 = undefined;
                        var0 = arg0;
                        var1 = var3.bind(var2)(var0);
                        var0 = arg1;
                        var0 = var3.bind(var2)(var0);
                        var0 = var0 - var1;
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var4.value = var6;
                var0[2] = var4;
                var4 = {};
                var6 = 'findKeyboardEventByKey';
                var4.key = var6;
                var6 = function arg0, arg1, arg2() {
                    _fun94308: for (var _fun94308_ip = 0;;) switch (_fun94308_ip) {
                        case 0:
                            var7 = arg0;
                            var6 = arg1;
                            var5 = arg2;
                            var3 = this;
                            var _closure3_slot0 = var6;
                            var2 = _closure1_slot20;
                            var4 = undefined;
                            var9 = var2.bind(var4)(var7);
                            var _closure3_slot1 = var9;
                            var2 = null;
                            if (!(var2 == var6)) {
                                _fun94308_ip = 60;
                                continue _fun94308
                            }
                        case 42:
                            var8 = var3.findCodeFromKeyboardLayoutMap;
                            var8 = var8.bind(var3)(var9);
                            _closure3_slot0 = var8;
                            var6 = var8;
                        case 60:
                            if (!(var2 != var5)) {
                                _fun94308_ip = 99;
                                continue _fun94308
                            }
                        case 64:
                            var8 = var3.keyCodeMap;
                            var9 = var8[var5];
                            if (!(var2 != var9)) {
                                _fun94308_ip = 99;
                                continue _fun94308
                            }
                        case 78:
                            var8 = var9.find;
                            var0 = function(arg0) { // Environment: var0
                                _fun94309: for (var _fun94309_ip = 0;;) switch (_fun94309_ip) {
                                    case 0:
                                        var2 = arg0;
                                        var3 = _closure1_slot20;
                                        var1 = var2.key;
                                        var0 = undefined;
                                        var3 = var3.bind(var0)(var1);
                                        var0 = _closure3_slot1;
                                        var0 = var3 === var0;
                                        if (!var0) {
                                            _fun94309_ip = 49;
                                            continue _fun94309
                                        }
                                    case 36:
                                        var2 = var2.code;
                                        var1 = _closure3_slot0;
                                        var0 = var2 === var1;
                                    case 49:
                                        return var0;
                                }
                            };
                            var0 = var8.bind(var9)(var0);
                            if (!(var2 == var0)) {
                                _fun94308_ip = 135;
                                continue _fun94308
                            }
                        case 99:
                            var2 = var3.getWeightedPossibleKeyStringMatches;
                            var3 = var2.bind(var3)(var7, var6, var5);
                            var2 = _closure1_slot5;
                            var1 = 1;
                            var2 = var2.bind(var4)(var3, var1);
                            var1 = 0;
                            var1 = var2[var1];
                            return var1;
                        case 135:
                            return var0;
                    }
                };
                var4.value = var6;
                var0[3] = var4;
                var4 = {};
                var6 = 'findKeyboardEventByKeyCode';
                var4.key = var6;
                var6 = function arg0, arg1() {
                    _fun94310: for (var _fun94310_ip = 0;;) switch (_fun94310_ip) {
                        case 0:
                            var5 = arg0;
                            var4 = arg1;
                            var3 = this;
                            var _closure3_slot0 = var5;
                            var _closure3_slot1 = var4;
                            var0 = var3.getKeyString;
                            var1 = var0.bind(var3)(var5, var4);
                            var0 = null;
                            var6 = var0 == var1;
                            if (!var6) {
                                _fun94310_ip = 46;
                                continue _fun94310
                            }
                        case 42:
                            var6 = var0 != var4;
                        case 46:
                            if (!var6) {
                                _fun94310_ip = 69;
                                continue _fun94310
                            }
                        case 49:
                            var6 = var3.getLayoutMap;
                            var7 = var6.bind(var3)();
                            var6 = var7.get;
                            var1 = var6.bind(var7)(var4);
                        case 69:
                            if (!(var0 == var1)) {
                                _fun94310_ip = 118;
                                continue _fun94310
                            }
                        case 73:
                            var6 = var3.getKeyCodeMapItem;
                            var7 = var6.bind(var3)(var5);
                            var6 = var7.find;
                            var2 = function(arg0) { // Environment: var2
                                _fun94311: for (var _fun94311_ip = 0;;) switch (_fun94311_ip) {
                                    case 0:
                                        var3 = arg0;
                                        var1 = var3.keyCode;
                                        var0 = _closure3_slot0;
                                        var4 = var1 === var0;
                                        var5 = _closure3_slot1;
                                        var1 = null;
                                        var0 = var4;
                                        if (!(var1 != var5)) {
                                            _fun94311_ip = 55;
                                            continue _fun94311
                                        }
                                    case 33:
                                        var1 = var4;
                                        if (!var4) {
                                            _fun94311_ip = 52;
                                            continue _fun94311
                                        }
                                    case 39:
                                        var3 = var3.code;
                                        var2 = _closure3_slot1;
                                        var1 = var3 === var2;
                                    case 52:
                                        var0 = var1;
                                    case 55:
                                        return var0;
                                }
                            };
                            var6 = var6.bind(var7)(var2);
                            var7 = var0 == var6;
                            var2 = undefined;
                            if (var7) {
                                _fun94310_ip = 115;
                                continue _fun94310
                            }
                        case 110:
                            var2 = var6.key;
                        case 115:
                            var1 = var2;
                        case 118:
                            if (!(var0 != var1)) {
                                _fun94310_ip = 137;
                                continue _fun94310
                            }
                        case 122:
                            var0 = var3.findKeyboardEventByKey;
                            var0 = var0.bind(var3)(var1, var4, var5);
                            _fun94310_ip = 152;
                            continue _fun94310;
                        case 137:
                            var2 = var3.getDefaultKeyboardEventShape;
                            var1 = undefined;
                            var0 = var2.bind(var3)(var1, var5, var4);
                        case 152:
                            return var0;
                    }
                };
                var4.value = var6;
                var0[4] = var4;
                var4 = {};
                var6 = 'getDefaultKeyboardEventShape';
                var4.key = var6;
                var5 = function arg0, arg1, arg2() {
                    _fun94312: for (var _fun94312_ip = 0;;) switch (_fun94312_ip) {
                        case 0:
                            var8 = arg0;
                            var7 = arg1;
                            var3 = arg2;
                            var6 = this;
                            var _closure3_slot0 = var7;
                            var4 = null;
                            var2 = var4 != var8;
                            var0 = undefined;
                            var5 = undefined;
                            if (!var2) {
                                _fun94312_ip = 43;
                                continue _fun94312
                            }
                        case 31:
                            var2 = _closure1_slot20;
                            var5 = var2.bind(var0)(var8);
                        case 43:
                            if (!(var4 == var5)) {
                                _fun94312_ip = 144;
                                continue _fun94312
                            }
                        case 47:
                            if (!(var4 == var7)) {
                                _fun94312_ip = 53;
                                continue _fun94312
                            }
                        case 51:
                            return var0;
                        case 53:
                            var8 = var6.cachedKeyMapEntries;
                            var2 = var8.find;
                            var1 = function(arg0) { // Environment: var1
                                _fun94313: for (var _fun94313_ip = 0;;) switch (_fun94313_ip) {
                                    case 0:
                                        var3 = arg0;
                                        var0 = var3[Symbol.iterator];
                                        var3 = var0().next;
                                        var1 = var3().value;
                                        var1 = var0;
                                        var5 = undefined;
                                        var2 = var1 === var5;
                                        var1 = undefined;
                                        if (var2) {
                                            _fun94313_ip = 49;
                                            continue _fun94313
                                        }
                                    case 24:
                                        var4 = var3().value;
                                        var3 = var0;
                                        var3 = var3 === var5;
                                        var1 = undefined;
                                        var2 = var3;
                                        if (var3) {
                                            _fun94313_ip = 49;
                                            continue _fun94313
                                        }
                                    case 43:
                                        var1 = var4;
                                        var2 = var3;
                                    case 49:
                                        if (var2) {
                                            _fun94313_ip = 55;
                                            continue _fun94313
                                        }
                                    case 52:
                                        var0.return();
                                    case 55:
                                        var0 = _closure3_slot0;
                                        var0 = var1 === var0;
                                        return var0;
                                }
                            };
                            var2 = var2.bind(var8)(var1);
                            var1 = var4 == var2;
                            var9 = undefined;
                            if (var1) {
                                _fun94312_ip = 91;
                                continue _fun94312
                            }
                        case 85:
                            var1 = 0;
                            var9 = var2[var1];
                        case 91:
                            if (!(var4 != var9)) {
                                _fun94312_ip = 142;
                                continue _fun94312
                            }
                        case 95:
                            var2 = _closure1_slot25;
                            var1 = {};
                            var1.keyCode = var7;
                            var1.key = var9;
                            var7 = var3;
                            if (!(var4 == var3)) {
                                _fun94312_ip = 131;
                                continue _fun94312
                            }
                        case 120:
                            var8 = var6.findCodeFromKeyboardLayoutMap;
                            var7 = var8.bind(var6)(var9);
                        case 131:
                            var1.code = var7;
                            var1 = var2.bind(var0)(var1);
                            return var1;
                        case 142:
                            return var0;
                        case 144:
                            var1 = var6.keyMap;
                            var7 = var1[var5];
                            if (!(var4 != var7)) {
                                _fun94312_ip = 202;
                                continue _fun94312
                            }
                        case 158:
                            var2 = _closure1_slot25;
                            var1 = {};
                            var1.keyCode = var7;
                            var1.key = var5;
                            if (!(var4 == var3)) {
                                _fun94312_ip = 191;
                                continue _fun94312
                            }
                        case 180:
                            var4 = var6.findCodeFromKeyboardLayoutMap;
                            var3 = var4.bind(var6)(var5);
                        case 191:
                            var1.code = var3;
                            var1 = var2.bind(var0)(var1);
                            return var1;
                        case 202:
                            return var0;
                    }
                };
                var4.value = var5;
                var0[5] = var4;
                var0 = var1.bind(var2)(var3, var0);
                return var0;
            };
            var10 = var10.bind(var0)(var13);
            var _closure1_slot16 = var10;
            var10 = null;
            var _closure1_slot17 = var10;
            var _closure1_slot18 = var10;
            var10 = 13;
            var10 = var12[var10];
            var12 = var11.bind(var0)(var10);
            var11 = var12.fileFinishedImporting;
            var10 = 'utils/web/KeyboardLayoutMapUtils.tsx';
            var10 = var11.bind(var12)(var10);
            var2.BACKTICK_CODES = var9;
            var2.DefaultKeyboardLayout = var8;
            var2.normalizeKeyMap = var7;
            var2.initializeKeyboardMapper = var6;
            var6 = function arg0, arg1() {
                _fun94314: for (var _fun94314_ip = 0;;) switch (_fun94314_ip) {
                    case 0:
                        var4 = _closure1_slot14;
                        var3 = var4._set;
                        var2 = arg0;
                        var0 = arg1;
                        var0 = var3.bind(var4)(var2, var0);
                        var3 = _closure1_slot17;
                        var0 = null;
                        if (!(var0 != var3)) {
                            _fun94314_ip = 45;
                            continue _fun94314
                        }
                    case 35:
                        var2 = var3._initializeInternalLayoutMap;
                        var2 = var2.bind(var3)();
                    case 45:
                        var1 = _closure1_slot17;
                        if (!(var0 != var1)) {
                            _fun94314_ip = 63;
                            continue _fun94314
                        }
                    case 53:
                        var0 = var1.updateCaches;
                        var0 = var0.bind(var1)();
                    case 63:
                        var0 = undefined;
                        return var0;
                }
            };
            var2.__DEV_overrideLayoutMapKey = var6;
            var2.getKeyboardMapper = var5;
            var5 = function() {
                var0 = undefined;
                var3 = _closure1_slot28;
                var2 = var3.apply;
                var0 = arguments;
                var1 = var0;
                var0 = this;
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            var2.resetKeyboardMapper = var5;
            var5 = function() {
                _fun94316: for (var _fun94316_ip = 0;;) switch (_fun94316_ip) {
                    case 0:
                        var0 = arguments[0];
                        var2 = undefined;
                        if (!(var0 === var2)) {
                            _fun94316_ip = 11;
                            continue _fun94316
                        }
                    case 9:
                        var0 = false;
                    case 11:
                        if (var0) {
                            _fun94316_ip = 60;
                            continue _fun94316
                        }
                    case 17:
                        var0 = _closure1_slot27;
                        var5 = var0.bind(var2)();
                        var3 = null;
                        var4 = var3 == var5;
                        var0 = undefined;
                        if (var4) {
                            _fun94316_ip = 46;
                            continue _fun94316
                        }
                    case 36:
                        var4 = var5.getLayoutMap;
                        var0 = var4.bind(var5)();
                    case 46:
                        if (!(var3 == var0)) {
                            _fun94316_ip = 58;
                            continue _fun94316
                        }
                    case 50:
                        var3 = _closure1_slot23;
                        var0 = var3.bind(var2)();
                    case 58:
                        _fun94316_ip = 68;
                        continue _fun94316;
                    case 60:
                        var1 = _closure1_slot23;
                        var0 = var1.bind(var2)();
                    case 68:
                        return var0;
                }
            };
            var2.getLayoutMap = var5;
            var2.reverseLookupCodeFromKey = var4;
            var2.getExactKeyboardEventMatchFromAny = var3;
            var3 = function arg0() {
                _fun94317: for (var _fun94317_ip = 0;;) switch (_fun94317_ip) {
                    case 0:
                        var4 = arg0;
                        var0 = _closure1_slot30;
                        var3 = undefined;
                        var0 = var0.bind(var3)(var4);
                        var1 = null;
                        if (!(var1 == var0)) {
                            _fun94317_ip = 131;
                            continue _fun94317
                        }
                    case 23:
                        var5 = _closure1_slot27;
                        var6 = var5.bind(var3)();
                        if (!(var1 != var6)) {
                            _fun94317_ip = 129;
                            continue _fun94317
                        }
                    case 35:
                        var2 = _closure1_slot25;
                        var3 = var2.bind(var3)(var4);
                        var2 = var3.key;
                        if (!(var1 != var2)) {
                            _fun94317_ip = 86;
                            continue _fun94317
                        }
                    case 53:
                        var7 = var6.findKeyboardEventByKey;
                        var5 = var3.key;
                        var4 = var3.code;
                        var2 = var3.keyCode;
                        var2 = var7.bind(var6)(var5, var4, var2);
                        if (!(var1 == var2)) {
                            _fun94317_ip = 127;
                            continue _fun94317
                        }
                    case 86:
                        var4 = var3.keyCode;
                        if (!(var1 != var4)) {
                            _fun94317_ip = 123;
                            continue _fun94317
                        }
                    case 96:
                        var5 = var6.findKeyboardEventByKeyCode;
                        var4 = var3.keyCode;
                        var3 = var3.code;
                        var3 = var5.bind(var6)(var4, var3);
                        if (!(var1 == var3)) {
                            _fun94317_ip = 125;
                            continue _fun94317
                        }
                    case 123:
                        return var1;
                    case 125:
                        return var3;
                    case 127:
                        return var2;
                    case 129:
                        return var1;
                    case 131:
                        return var0;
                }
            };
            var2.getKeyboardEventShapeFromAny = var3;
            var3 = function arg0() {
                _fun94318: for (var _fun94318_ip = 0;;) switch (_fun94318_ip) {
                    case 0:
                        var5 = arg0;
                        var4 = undefined;
                        var8 = undefined;
                        var7 = undefined;
                        var6 = undefined;
                        var9 = undefined;
                        var3 = undefined;
                        var0 = null;
                        var2 = var0 != var5;
                        var1 = undefined;
                        if (!var2) {
                            _fun94318_ip = 38;
                            continue _fun94318
                        }
                    case 26:
                        var2 = _closure1_slot20;
                        var1 = var2.bind(var4)(var5);
                    case 38:
                        var8 = var1;
                        if (!(var0 != var1)) {
                            _fun94318_ip = 260;
                            continue _fun94318
                        }
                    case 48:
                        var5 = _closure1_slot29;
                        var1 = var8;
                        var7 = var5.bind(var4)(var1);
                        var1 = _closure1_slot27;
                        var12 = var1.bind(var4)();
                        var1 = var0 == var12;
                        var5 = undefined;
                        if (var1) {
                            _fun94318_ip = 98;
                            continue _fun94318
                        }
                    case 80:
                        var11 = var12.findKeyboardEventByKey;
                        var10 = var8;
                        var1 = var7;
                        var5 = var11.bind(var12)(var10, var1);
                    case 98:
                        var10 = var0 != var5;
                        var1 = null;
                        if (!var10) {
                            _fun94318_ip = 110;
                            continue _fun94318
                        }
                    case 107:
                        var1 = var5;
                    case 110:
                        if (!(var0 == var1)) {
                            _fun94318_ip = 258;
                            continue _fun94318
                        }
                    case 117: // try_start_0
                        var5 = _closure1_slot27;
                        var5 = var5.bind(var4)();
                        var9 = var5;
                        var10 = var0 == var5;
                        var5 = undefined;
                        if (var10) {
                            _fun94318_ip = 153;
                            continue _fun94318
                        }
                    case 137:
                        var10 = var9;
                        var9 = var10.getDefaultKeyboardEventShape;
                        var5 = var9.bind(var10)(var8, var4, var7);
                    case 153:
                        var6 = var5;
                        var7 = var0 != var5;
                        var5 = null;
                        if (!var7) {
                            _fun94318_ip = 168;
                            continue _fun94318
                        }
                    case 165:
                        var5 = var6;
                    case 168:
                        var3 = var5;
                        if (!(var0 != var5)) {
                            _fun94318_ip = 252;
                            continue _fun94318
                        }
                    case 175:
                        var5 = global;
                        var7 = var5.KeyboardEvent;
                        var14 = var3;
                        var3 = var7.prototype;
                        var5 = Object.create(var3, {
                            constructor: {
                                value: var7
                            }
                        });
                        var15 = 'keydown';
                        var16 = var5;
                        var3 = new var16[var7](var15, var14, var13);
                        var5 = var3 instanceof Object ? var3 : var5;
                        var3 = _closure1_slot25;
                        var2 = {};
                        var6 = var5.keyCode;
                        var2.keyCode = var6;
                        var6 = var5.key;
                        var2.key = var6;
                        var5 = var5.code;
                        var2.code = var5;
                        var2 = var3.bind(var4)(var2);
                    case 250: // try_end0
                        return var2;
                    case 252:
                        return var0;
                    case 254: // catch_target0
                        CatchBlockStart(arg_register = 2);
                        return var0;
                    case 258:
                        return var1;
                    case 260:
                        return var0;
                }
            };
            var2.getKeyboardEventShapeFromKey = var3;
            var1 = function arg0() {
                _fun94319: for (var _fun94319_ip = 0;;) switch (_fun94319_ip) {
                    case 0:
                        var7 = arg0;
                        var4 = undefined;
                        var6 = undefined;
                        var8 = undefined;
                        var3 = undefined;
                        var0 = _closure1_slot27;
                        var10 = var0.bind(var4)();
                        var1 = null;
                        var0 = var1 == var10;
                        var5 = undefined;
                        if (var0) {
                            _fun94319_ip = 47;
                            continue _fun94319
                        }
                    case 33:
                        var9 = var10.findKeyboardEventByKeyCode;
                        var0 = var7;
                        var5 = var9.bind(var10)(var0);
                    case 47:
                        var9 = var1 != var5;
                        var0 = null;
                        if (!var9) {
                            _fun94319_ip = 59;
                            continue _fun94319
                        }
                    case 56:
                        var0 = var5;
                    case 59:
                        if (!(var1 == var0)) {
                            _fun94319_ip = 206;
                            continue _fun94319
                        }
                    case 66: // try_start_0
                        var5 = _closure1_slot27;
                        var5 = var5.bind(var4)();
                        var8 = var5;
                        var9 = var1 == var5;
                        var5 = undefined;
                        if (var9) {
                            _fun94319_ip = 101;
                            continue _fun94319
                        }
                    case 86:
                        var9 = var8;
                        var8 = var9.getDefaultKeyboardEventShape;
                        var5 = var8.bind(var9)(var4, var7);
                    case 101:
                        var6 = var5;
                        var7 = var1 != var5;
                        var5 = null;
                        if (!var7) {
                            _fun94319_ip = 116;
                            continue _fun94319
                        }
                    case 113:
                        var5 = var6;
                    case 116:
                        var3 = var5;
                        if (!(var1 != var5)) {
                            _fun94319_ip = 200;
                            continue _fun94319
                        }
                    case 123:
                        var5 = global;
                        var7 = var5.KeyboardEvent;
                        var11 = var3;
                        var3 = var7.prototype;
                        var5 = Object.create(var3, {
                            constructor: {
                                value: var7
                            }
                        });
                        var12 = 'keydown';
                        var13 = var5;
                        var3 = new var13[var7](var12, var11, var10);
                        var5 = var3 instanceof Object ? var3 : var5;
                        var3 = _closure1_slot25;
                        var2 = {};
                        var6 = var5.keyCode;
                        var2.keyCode = var6;
                        var6 = var5.key;
                        var2.key = var6;
                        var5 = var5.code;
                        var2.code = var5;
                        var2 = var3.bind(var4)(var2);
                    case 198: // try_end0
                        return var2;
                    case 200:
                        return var1;
                    case 202: // catch_target0
                        CatchBlockStart(arg_register = 2);
                        return var1;
                    case 206:
                        return var0;
                }
            };
            var2.getKeyboardEventShapeFromKeycode = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [15, 17, 18, 57, 5, 6, 7, 803, 4526, 3, 478, 12346, 587, 2]);