// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun66559: for (var _fun66559_ip = 0;;) switch (_fun66559_ip) {
        case 0:
            var7 = require;
            var3 = exports;
            var8 = dependencyMap;
            var _closure1_slot0 = var7;
            var _closure1_slot1 = var3;
            var _closure1_slot2 = var8;
            var0 = function arg0() {
                _fun66560: for (var _fun66560_ip = 0;;) switch (_fun66560_ip) {
                    case 0:
                        var2 = arg0;
                        var0 = _closure1_slot7;
                        var0 = var0._0;
                        if (!(var2 >= var0)) {
                            _fun66560_ip = 34;
                            continue _fun66560
                        }
                    case 20:
                        var0 = _closure1_slot7;
                        var0 = var0._9;
                        if (!(!(var2 <= var0))) {
                            _fun66560_ip = 146;
                            continue _fun66560
                        }
                    case 34:
                        var0 = _closure1_slot7;
                        var0 = var0._A;
                        if (!(var2 >= var0)) {
                            _fun66560_ip = 62;
                            continue _fun66560
                        }
                    case 48:
                        var0 = _closure1_slot7;
                        var0 = var0._F;
                        if (!(!(var2 <= var0))) {
                            _fun66560_ip = 123;
                            continue _fun66560
                        }
                    case 62:
                        var0 = _closure1_slot7;
                        var0 = var0._a;
                        var3 = var2 >= var0;
                        var0 = undefined;
                        if (!var3) {
                            _fun66560_ip = 121;
                            continue _fun66560
                        }
                    case 81:
                        var3 = _closure1_slot7;
                        var3 = var3._f;
                        var3 = var2 <= var3;
                        var0 = undefined;
                        if (!var3) {
                            _fun66560_ip = 121;
                            continue _fun66560
                        }
                    case 100:
                        var3 = _closure1_slot7;
                        var4 = var3._a;
                        var3 = 10;
                        var3 = var4 - var3;
                        var0 = var2 - var3;
                    case 121:
                        _fun66560_ip = 144;
                        continue _fun66560;
                    case 123:
                        var3 = _closure1_slot7;
                        var4 = var3._A;
                        var3 = 10;
                        var3 = var4 - var3;
                        var0 = var2 - var3;
                    case 144:
                        _fun66560_ip = 160;
                        continue _fun66560;
                    case 146:
                        var1 = _closure1_slot7;
                        var1 = var1._0;
                        var0 = var2 - var1;
                    case 160:
                        return var0;
                }
            };
            var _closure1_slot9 = var0;
            var0 = function() {
                var4 = undefined;
                var0 = undefined;
                var3 = _closure1_slot5;
                var2 = function*(arg0, arg1, arg2) { // Environment: var2
                    var0 = function*(arg0, arg1, arg2) { // Original name: ?anon_0_, environment: var0
                        _fun66563: for (var _fun66563_ip = 0;;) switch (_fun66563_ip) {
                            case 0:
                                StartGenerator();
                                var9 = arg0;
                                var8 = arg1;
                                var7 = arg2;
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun66563_ip = 142;
                                    continue _fun66563
                                }
                            case 19:
                                var6 = global;
                                var2 = var6.Date;
                                var1 = var2.now;
                                var3 = var1.bind(var2)();
                                var5 = 0;
                                var10 = var5 < var9;
                                var1 = undefined;
                                var2 = 0;
                                if (!var10) {
                                    _fun66563_ip = 139;
                                    continue _fun66563
                                }
                            case 52:
                                var10 = var7.bind(var1)(var2);
                                var11 = var6.Date;
                                var10 = var11.now;
                                var10 = var10.bind(var11)();
                                var13 = var10 - var3;
                                var12 = var13 >= var5;
                                var11 = var2;
                                if (!var12) {
                                    _fun66563_ip = 90;
                                    continue _fun66563
                                }
                            case 86:
                                var12 = var13 < var8;
                            case 90:
                                var10 = var3;
                                if (var12) {
                                    _fun66563_ip = 129;
                                    continue _fun66563
                                }
                            case 96:
                                var12 = _closure1_slot1;
                                var12 = var12.nextTick;
                                var12 = var12.bind(var1)();
                                SaveGenerator(address = 114);
                            case 112:
                                return var12;
                            case 114:
                                ResumeGenerator(result_out_reg = 12, return_bool_out_reg = 14);
                                if (var14) {
                                    _fun66563_ip = 126;
                                    continue _fun66563
                                }
                            case 120:
                                var10 = var3 + var13;
                                _fun66563_ip = 129;
                                continue _fun66563;
                            case 126:
                                return var12;
                            case 129:
                                var2 = var11 + 1;
                                var3 = var10;
                                if (var2 < var9) {
                                    _fun66563_ip = 52;
                                    continue _fun66563
                                }
                            case 139:
                                return var1;
                            case 142:
                                return var0;
                        }
                    };
                    return var0;
                };
                var3 = var3.bind(var4)(var2);
                _closure1_slot10 = var3;
                var2 = var3.apply;
                var0 = arguments;
                var1 = var0;
                var0 = this;
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            var _closure1_slot10 = var0;
            var6 = function arg0() {
                _fun66564: for (var _fun66564_ip = 0;;) switch (_fun66564_ip) {
                    case 0:
                        var4 = arg0;
                        var3 = typeof var4;
                        var0 = 'string';
                        if (!(var0 === var3)) {
                            _fun66564_ip = 81;
                            continue _fun66564
                        }
                    case 14:
                        var0 = global;
                        var2 = var0.Uint8Array;
                        var0 = var0.TextEncoder;
                        var1 = var0.prototype;
                        var1 = Object.create(var1, {
                            constructor: {
                                value: var0
                            }
                        });
                        var6 = var1;
                        var0 = new var6[var0](var5);
                        var1 = var0 instanceof Object ? var0 : var1;
                        var0 = var1.encode;
                        var5 = var0.bind(var1)(var4);
                        var1 = var2.prototype;
                        var1 = Object.create(var1, {
                            constructor: {
                                value: var2
                            }
                        });
                        var6 = var1;
                        var0 = new var6[var2](var5, var4);
                        var0 = var0 instanceof Object ? var0 : var1;
                        return var0;
                    case 81:
                        var0 = global;
                        var2 = var0.Error;
                        var0 = var2.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var2
                            }
                        });
                        var0 = 'utf8ToBytes expected string, got ';
                        var5 = var0 + var3;
                        var6 = var1;
                        var0 = new var6[var2](var5, var4);
                        var0 = var0 instanceof Object ? var0 : var1;
                        throw var0;
                }
            };
            var _closure1_slot11 = var6;
            var4 = function arg0() {
                _fun66565: for (var _fun66565_ip = 0;;) switch (_fun66565_ip) {
                    case 0:
                        var3 = arg0;
                        var2 = 'string';
                        var1 = typeof var3;
                        var0 = var3;
                        if (!(var2 === var1)) {
                            _fun66565_ip = 31;
                            continue _fun66565
                        }
                    case 17:
                        var2 = _closure1_slot11;
                        var1 = undefined;
                        var0 = var2.bind(var1)(var3);
                    case 31:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 3;
                        var1 = var2[var1];
                        var2 = undefined;
                        var1 = var3.bind(var2)(var1);
                        var1 = var1.bytes;
                        var1 = var1.bind(var2)(var0);
                        return var0;
                }
            };
            var _closure1_slot12 = var4;
            var5 = 0;
            var1 = var8[var5];
            var0 = undefined;
            var1 = var7.bind(var0)(var1);
            var _closure1_slot3 = var1;
            var1 = 1;
            var1 = var8[var1];
            var1 = var7.bind(var0)(var1);
            var _closure1_slot4 = var1;
            var1 = 2;
            var1 = var8[var1];
            var1 = var7.bind(var0)(var1);
            var _closure1_slot5 = var1;
            var1 = global;
            var10 = var1.Object;
            var9 = var10.defineProperty;
            var8 = {};
            var7 = true;
            var8.value = var7;
            var7 = '__esModule';
            var7 = var9.bind(var10)(var3, var7, var8);
            var3.u8 = var0;
            var3.u32 = var0;
            var3.createView = var0;
            var3.rotr = var0;
            var3.rotl = var0;
            var3.isLE = var0;
            var3.byteSwap = var0;
            var3.byteSwapIfBE = var0;
            var3.nextTick = var0;
            var3.Hash = var0;
            var7 = function arg0() {
                _fun66566: for (var _fun66566_ip = 0;;) switch (_fun66566_ip) {
                    case 0:
                        var2 = arg0;
                        var0 = global;
                        var0 = var0.Uint8Array;
                        var0 = var2 instanceof var0;
                        if (var0) {
                            _fun66566_ip = 62;
                            continue _fun66566
                        }
                    case 18:
                        var1 = null;
                        var1 = var1 != var2;
                        if (!var1) {
                            _fun66566_ip = 38;
                            continue _fun66566
                        }
                    case 27:
                        var4 = 'object';
                        var3 = typeof var2;
                        var1 = var4 === var3;
                    case 38:
                        if (!var1) {
                            _fun66566_ip = 59;
                            continue _fun66566
                        }
                    case 41:
                        var2 = var2.constructor;
                        var3 = var2.name;
                        var2 = 'Uint8Array';
                        var1 = var2 === var3;
                    case 59:
                        var0 = var1;
                    case 62:
                        return var0;
                }
            };
            var3.isBytes = var7;
            var7 = function arg0() {
                _fun66567: for (var _fun66567_ip = 0;;) switch (_fun66567_ip) {
                    case 0:
                        var4 = arg0;
                        var0 = var4.length;
                        var3 = 0;
                        var1 = var3 < var0;
                        var0 = undefined;
                        if (!var1) {
                            _fun66567_ip = 57;
                            continue _fun66567
                        }
                    case 22:
                        var1 = _closure1_slot1;
                        var5 = var1.byteSwap;
                        var1 = var4[var3];
                        var1 = var5.bind(var0)(var1);
                        var4[var3] = var1;
                        var3 = var3 + 1;
                        var1 = var4.length;
                        if (var3 < var1) {
                            _fun66567_ip = 22;
                            continue _fun66567
                        }
                    case 57:
                        return var0;
                }
            };
            var3.byteSwap32 = var7;
            var7 = function arg0() {
                _fun66568: for (var _fun66568_ip = 0;;) switch (_fun66568_ip) {
                    case 0:
                        var5 = arg0;
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 3;
                        var0 = var1[var0];
                        var1 = undefined;
                        var0 = var2.bind(var1)(var0);
                        var0 = var0.bytes;
                        var0 = var0.bind(var1)(var5);
                        var0 = var5.length;
                        var3 = 0;
                        var1 = var3 < var0;
                        var2 = '';
                        var0 = var2;
                        if (!var1) {
                            _fun66568_ip = 91;
                            continue _fun66568
                        }
                    case 60:
                        var6 = _closure1_slot6;
                        var1 = var5[var3];
                        var1 = var6[var1];
                        var2 = var2 + var1;
                        var3 = var3 + 1;
                        var1 = var5.length;
                        var0 = var2;
                        if (var3 < var1) {
                            _fun66568_ip = 60;
                            continue _fun66568
                        }
                    case 91:
                        return var0;
                }
            };
            var3.bytesToHex = var7;
            var7 = function arg0() {
                _fun66569: for (var _fun66569_ip = 0;;) switch (_fun66569_ip) {
                    case 0:
                        var5 = arg0;
                        var3 = typeof var5;
                        var0 = 'string';
                        if (!(var0 === var3)) {
                            _fun66569_ip = 267;
                            continue _fun66569
                        }
                    case 17:
                        var1 = var5.length;
                        var14 = 2;
                        var13 = var1 / var14;
                        var2 = var1 % var14;
                        var0 = global;
                        if (var2) {
                            _fun66569_ip = 229;
                            continue _fun66569
                        }
                    case 41:
                        var2 = var0.Uint8Array;
                        var4 = var2.prototype;
                        var4 = Object.create(var4, {
                            constructor: {
                                value: var2
                            }
                        });
                        var19 = var4;
                        var18 = var13;
                        var2 = new var19[var2](var18, var17);
                        var4 = var2 instanceof Object ? var2 : var4;
                        var8 = 0;
                        var12 = 16;
                        var11 = undefined;
                        var9 = 1;
                        var7 = 0;
                        if (!(var7 < var13)) {
                            _fun66569_ip = 163;
                            continue _fun66569
                        }
                    case 89:
                        var16 = _closure1_slot9;
                        var2 = var5.charCodeAt;
                        var2 = var2.bind(var5)(var7);
                        var15 = var16.bind(var11)(var2);
                        var6 = var5.charCodeAt;
                        var2 = var7 + var9;
                        var6 = var6.bind(var5)(var2);
                        var16 = var16.bind(var11)(var6);
                        var6 = var7;
                        if (!(var11 !== var15)) {
                            _fun66569_ip = 165;
                            continue _fun66569
                        }
                    case 136:
                        if (!(var11 !== var16)) {
                            _fun66569_ip = 165;
                            continue _fun66569
                        }
                    case 140:
                        var15 = var12 * var15;
                        var15 = var15 + var16;
                        var4[var8] = var15;
                        var8 = var8 + 1;
                        var7 = var6 + var14;
                        if (var8 < var13) {
                            _fun66569_ip = 89;
                            continue _fun66569
                        }
                    case 163:
                        return var4;
                    case 165:
                        var4 = var5[var6];
                        var2 = var5[var2];
                        var7 = var4 + var2;
                        var5 = var0.Error;
                        var2 = var5.prototype;
                        var4 = Object.create(var2, {
                            constructor: {
                                value: var5
                            }
                        });
                        var2 = 'hex string expected, got non-hex character "';
                        var7 = var2 + var7;
                        var2 = '" at index ';
                        var2 = var7 + var2;
                        var18 = var2 + var6;
                        var19 = var4;
                        var2 = new var19[var5](var18, var17);
                        var2 = var2 instanceof Object ? var2 : var4;
                        throw var2;
                    case 229:
                        var2 = var0.Error;
                        var0 = 'padded hex string expected, got unpadded hex of length ';
                        var18 = var0 + var1;
                        var1 = var2.prototype;
                        var1 = Object.create(var1, {
                            constructor: {
                                value: var2
                            }
                        });
                        var19 = var1;
                        var0 = new var19[var2](var18, var17);
                        var0 = var0 instanceof Object ? var0 : var1;
                        throw var0;
                    case 267:
                        var0 = global;
                        var2 = var0.Error;
                        var0 = var2.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var2
                            }
                        });
                        var0 = 'hex string expected, got ';
                        var18 = var0 + var3;
                        var19 = var1;
                        var0 = new var19[var2](var18, var17);
                        var0 = var0 instanceof Object ? var0 : var1;
                        throw var0;
                }
            };
            var3.hexToBytes = var7;
            var7 = function arg0, arg1, arg2() {
                var0 = undefined;
                var3 = _closure1_slot10;
                var2 = var3.apply;
                var0 = arguments;
                var1 = var0;
                var0 = this;
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            var3.asyncLoop = var7;
            var3.utf8ToBytes = var6;
            var3.toBytes = var4;
            var4 = function() {
                _fun66571: for (var _fun66571_ip = 0;;) switch (_fun66571_ip) {
                    case 0:
                        var5 = undefined;
                        var6 = undefined;
                        var0 = arguments.length;
                        var4 = 0;
                        var0 = var4 < var0;
                        var7 = 3;
                        var3 = 0;
                        var1 = 0;
                        var2 = 0;
                        if (!var0) {
                            _fun66571_ip = 100;
                            continue _fun66571
                        }
                    case 28:
                        var0 = undefined;
                        if (!(!(var1 < var4))) {
                            _fun66571_ip = 50;
                            continue _fun66571
                        }
                    case 34:
                        var9 = arguments.length;
                        var9 = var9 <= var1;
                        var0 = undefined;
                        if (var9) {
                            _fun66571_ip = 50;
                            continue _fun66571
                        }
                    case 46:
                        var0 = arguments[var1];
                    case 50:
                        var10 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var9 = var9[var7];
                        var9 = var10.bind(var5)(var9);
                        var9 = var9.bytes;
                        var9 = var9.bind(var5)(var0);
                        var0 = var0.length;
                        var3 = var3 + var0;
                        var1 = var1 + 1;
                        var0 = arguments.length;
                        var2 = var3;
                        if (var1 < var0) {
                            _fun66571_ip = 28;
                            continue _fun66571
                        }
                    case 100:
                        var0 = global;
                        var0 = var0.Uint8Array;
                        var1 = var0.prototype;
                        var1 = Object.create(var1, {
                            constructor: {
                                value: var0
                            }
                        });
                        var13 = var1;
                        var12 = var2;
                        var0 = new var13[var0](var12, var11);
                        var0 = var0 instanceof Object ? var0 : var1;
                        var1 = arguments.length;
                        var1 = var4 < var1;
                        var3 = 0;
                        var2 = 0;
                        if (!var1) {
                            _fun66571_ip = 197;
                            continue _fun66571
                        }
                    case 145:
                        var1 = undefined;
                        if (!(!(var3 < var4))) {
                            _fun66571_ip = 167;
                            continue _fun66571
                        }
                    case 151:
                        var7 = arguments.length;
                        var7 = var7 <= var3;
                        var1 = undefined;
                        if (var7) {
                            _fun66571_ip = 167;
                            continue _fun66571
                        }
                    case 163:
                        var1 = arguments[var3];
                    case 167:
                        var7 = var0.set;
                        var7 = var7.bind(var0)(var1, var2);
                        var1 = var1.length;
                        var2 = var2 + var1;
                        var3 = var3 + 1;
                        var1 = arguments.length;
                        if (var3 < var1) {
                            _fun66571_ip = 145;
                            continue _fun66571
                        }
                    case 197:
                        return var0;
                }
            };
            var3.concatBytes = var4;
            var4 = function arg0, arg1() {
                _fun66572: for (var _fun66572_ip = 0;;) switch (_fun66572_ip) {
                    case 0:
                        var3 = arg1;
                        var0 = undefined;
                        if (!(var0 !== var3)) {
                            _fun66572_ip = 34;
                            continue _fun66572
                        }
                    case 9:
                        var1 = _closure1_slot8;
                        var0 = var1.call;
                        var1 = var0.bind(var1)(var3);
                        var0 = '[object Object]';
                        if (!(var0 === var1)) {
                            _fun66572_ip = 58;
                            continue _fun66572
                        }
                    case 34:
                        var0 = global;
                        var2 = var0.Object;
                        var1 = var2.assign;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0, var3);
                        return var0;
                    case 58:
                        var0 = global;
                        var2 = var0.Error;
                        var0 = var2.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var2
                            }
                        });
                        var5 = 'Options should be object or undefined';
                        var6 = var1;
                        var0 = new var6[var2](var5, var4);
                        var0 = var0 instanceof Object ? var0 : var1;
                        throw var0;
                }
            };
            var3.checkOpts = var4;
            var4 = function arg0() {
                var3 = arg0;
                var _closure2_slot0 = var3;
                var0 = function arg0() {
                    var0 = _closure2_slot0;
                    var4 = undefined;
                    var2 = var0.bind(var4)();
                    var1 = var2.update;
                    var3 = _closure1_slot12;
                    var0 = arg0;
                    var0 = var3.bind(var4)(var0);
                    var1 = var1.bind(var2)(var0);
                    var0 = var1.digest;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var2 = undefined;
                var2 = var3.bind(var2)();
                var3 = var2.outputLen;
                var0.outputLen = var3;
                var2 = var2.blockLen;
                var0.blockLen = var2;
                var1 = function() { // Environment: var1
                    var1 = _closure2_slot0;
                    var0 = undefined;
                    var0 = var1.bind(var0)();
                    return var0;
                };
                var0.create = var1;
                return var0;
            };
            var3.wrapConstructor = var4;
            var4 = function arg0() {
                var4 = arg0;
                var _closure2_slot0 = var4;
                var0 = function arg0, arg1() {
                    var1 = _closure2_slot0;
                    var4 = undefined;
                    var0 = arg1;
                    var2 = var1.bind(var4)(var0);
                    var1 = var2.update;
                    var3 = _closure1_slot12;
                    var0 = arg0;
                    var0 = var3.bind(var4)(var0);
                    var1 = var1.bind(var2)(var0);
                    var0 = var1.digest;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var3 = undefined;
                var2 = {};
                var2 = var4.bind(var3)(var2);
                var3 = var2.outputLen;
                var0.outputLen = var3;
                var2 = var2.blockLen;
                var0.blockLen = var2;
                var1 = function(arg0) { // Environment: var1
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var0 = arg0;
                    var0 = var2.bind(var1)(var0);
                    return var0;
                };
                var0.create = var1;
                return var0;
            };
            var3.wrapConstructorWithOpts = var4;
            var4 = function arg0() {
                var4 = arg0;
                var _closure2_slot0 = var4;
                var0 = function arg0, arg1() {
                    var1 = _closure2_slot0;
                    var4 = undefined;
                    var0 = arg1;
                    var2 = var1.bind(var4)(var0);
                    var1 = var2.update;
                    var3 = _closure1_slot12;
                    var0 = arg0;
                    var0 = var3.bind(var4)(var0);
                    var1 = var1.bind(var2)(var0);
                    var0 = var1.digest;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var3 = undefined;
                var2 = {};
                var2 = var4.bind(var3)(var2);
                var3 = var2.outputLen;
                var0.outputLen = var3;
                var2 = var2.blockLen;
                var0.blockLen = var2;
                var1 = function(arg0) { // Environment: var1
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var0 = arg0;
                    var0 = var2.bind(var1)(var0);
                    return var0;
                };
                var0.create = var1;
                return var0;
            };
            var3.wrapXOFConstructorWithOpts = var4;
            var4 = function() {
                _fun66582: for (var _fun66582_ip = 0;;) switch (_fun66582_ip) {
                    case 0:
                        var2 = undefined;
                        var1 = undefined;
                        var3 = arguments.length;
                        var0 = 0;
                        var3 = var3 > var0;
                        var5 = 32;
                        var4 = var5;
                        if (!var3) {
                            _fun66582_ip = 37;
                            continue _fun66582
                        }
                    case 22:
                        var3 = arguments[var0];
                        var4 = var5;
                        if (!(var2 !== var3)) {
                            _fun66582_ip = 37;
                            continue _fun66582
                        }
                    case 33:
                        var4 = arguments[var0];
                    case 37:
                        var5 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var3 = 4;
                        var1 = var1[var3];
                        var1 = var5.bind(var2)(var1);
                        var1 = var1.crypto;
                        if (!var1) {
                            _fun66582_ip = 112;
                            continue _fun66582
                        }
                    case 69:
                        var5 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var1 = var1[var3];
                        var1 = var5.bind(var2)(var1);
                        var1 = var1.crypto;
                        var1 = var1.getRandomValues;
                        var5 = 'function';
                        var1 = typeof var1;
                        if (!(var5 !== var1)) {
                            _fun66582_ip = 250;
                            continue _fun66582
                        }
                    case 112:
                        var5 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var1 = var1[var3];
                        var1 = var5.bind(var2)(var1);
                        var1 = var1.crypto;
                        if (!var1) {
                            _fun66582_ip = 178;
                            continue _fun66582
                        }
                    case 138:
                        var5 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var1 = var1[var3];
                        var1 = var5.bind(var2)(var1);
                        var1 = var1.crypto;
                        var1 = var1.randomBytes;
                        var5 = 'function';
                        var1 = typeof var1;
                        if (!(var5 !== var1)) {
                            _fun66582_ip = 214;
                            continue _fun66582
                        }
                    case 178:
                        var1 = global;
                        var6 = var1.Error;
                        var1 = var6.prototype;
                        var5 = Object.create(var1, {
                            constructor: {
                                value: var6
                            }
                        });
                        var7 = 'crypto.getRandomValues must be defined';
                        var8 = var5;
                        var1 = new var8[var6](var7, var6);
                        var1 = var1 instanceof Object ? var1 : var5;
                        throw var1;
                    case 214:
                        var5 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var1 = var1[var3];
                        var1 = var5.bind(var2)(var1);
                        var5 = var1.crypto;
                        var1 = var5.randomBytes;
                        var1 = var1.bind(var5)(var4);
                        return var1;
                    case 250:
                        var1 = _closure1_slot0;
                        var0 = _closure1_slot2;
                        var0 = var0[var3];
                        var0 = var1.bind(var2)(var0);
                        var2 = var0.crypto;
                        var1 = var2.getRandomValues;
                        var0 = global;
                        var0 = var0.Uint8Array;
                        var3 = var0.prototype;
                        var3 = Object.create(var3, {
                            constructor: {
                                value: var0
                            }
                        });
                        var8 = var3;
                        var7 = var4;
                        var0 = new var8[var0](var7, var6);
                        var0 = var0 instanceof Object ? var0 : var3;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                }
            };
            var3.randomBytes = var4;
            var4 = function arg0() {
                var0 = arg0;
                var1 = global;
                var4 = var1.Uint8Array;
                var7 = var0.buffer;
                var6 = var0.byteOffset;
                var5 = var0.byteLength;
                var1 = var4.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var4
                    }
                });
                var8 = var1;
                var0 = new var8[var4](var7, var6, var5, var4);
                var0 = var0 instanceof Object ? var0 : var1;
                return var0;
            };
            var3.u8 = var4;
            var4 = function arg0() {
                var0 = arg0;
                var1 = global;
                var4 = var1.Uint32Array;
                var3 = var0.buffer;
                var8 = var0.byteOffset;
                var5 = var1.Math;
                var1 = var5.floor;
                var6 = var0.byteLength;
                var0 = 4;
                var0 = var6 / var0;
                var7 = var1.bind(var5)(var0);
                var1 = var4.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var4
                    }
                });
                var10 = var1;
                var9 = var3;
                var0 = new var10[var4](var9, var8, var7, var6);
                var0 = var0 instanceof Object ? var0 : var1;
                return var0;
            };
            var3.u32 = var4;
            var4 = function arg0() {
                var0 = arg0;
                var1 = global;
                var4 = var1.DataView;
                var7 = var0.buffer;
                var6 = var0.byteOffset;
                var5 = var0.byteLength;
                var1 = var4.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var4
                    }
                });
                var8 = var1;
                var0 = new var8[var4](var7, var6, var5, var4);
                var0 = var0 instanceof Object ? var0 : var1;
                return var0;
            };
            var3.createView = var4;
            var4 = function arg0, arg1() {
                var2 = arg0;
                var0 = arg1;
                var1 = 32;
                var1 = var1 - var0;
                var1 = var2 << var1;
                var0 = var2 >>> var0;
                var0 = var1 | var0;
                return var0;
            };
            var3.rotr = var4;
            var4 = function arg0, arg1() {
                var2 = arg0;
                var3 = arg1;
                var1 = var2 << var3;
                var0 = 32;
                var0 = var0 - var3;
                var2 = var2 >>> var0;
                var0 = 0;
                var0 = var2 >>> var0;
                var0 = var1 | var0;
                return var0;
            };
            var3.rotl = var4;
            var7 = var1.Uint8Array;
            var8 = var1.Uint32Array;
            var4 = var8.prototype;
            var6 = Object.create(var4, {
                constructor: {
                    value: var8
                }
            });
            var13 = [287454020];
            var14 = var6;
            var4 = new var14[var8](var13, var12);
            var4 = var4 instanceof Object ? var4 : var6;
            var13 = var4.buffer;
            var6 = var7.prototype;
            var6 = Object.create(var6, {
                constructor: {
                    value: var7
                }
            });
            var14 = var6;
            var4 = new var14[var7](var13, var12);
            var4 = var4 instanceof Object ? var4 : var6;
            var5 = var4[var5];
            var4 = 68;
            var4 = var4 === var5;
            var3.isLE = var4;
            var4 = function arg0() {
                var2 = arg0;
                var0 = 24;
                var1 = var2 << var0;
                var3 = 8;
                var4 = var2 << var3;
                var3 = var2 >>> var3;
                var2 = var2 >>> var0;
                var0 = 4278190080.0;
                var1 = var1 & var0;
                var0 = 16711680;
                var0 = var4 & var0;
                var1 = var1 | var0;
                var0 = 65280;
                var0 = var3 & var0;
                var1 = var1 | var0;
                var0 = 255;
                var0 = var2 & var0;
                var0 = var1 | var0;
                return var0;
            };
            var3.byteSwap = var4;
            var4 = var3.isLE;
            if (var4) {
                _fun66559_ip = 554;
                continue _fun66559
            }
        case 545:
            var4 = function(arg0) { // Environment: var2
                var0 = _closure1_slot1;
                var2 = var0.byteSwap;
                var1 = undefined;
                var0 = arg0;
                var0 = var2.bind(var1)(var0);
                return var0;
            };
            _fun66559_ip = 561;
            continue _fun66559;
        case 554:
            var4 = function(arg0) { // Environment: var2
                var0 = arg0;
                return var0;
            };
        case 561:
            var3.byteSwapIfBE = var4;
            var6 = var1.Array;
            var5 = var6.from;
            var4 = {};
            var1 = 256;
            var4.length = var1;
            var1 = function(arg0, arg1) { // Environment: var2
                var2 = arg1;
                var1 = var2.toString;
                var0 = 16;
                var3 = var1.bind(var2)(var0);
                var2 = var3.padStart;
                var1 = 2;
                var0 = '0';
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var1 = var5.bind(var6)(var4, var1);
            var _closure1_slot6 = var1;
            var1 = {
                '_0': 48,
                '_9': 57,
                '_A': 65,
                '_F': 70,
                '_a': 97,
                '_f': 102
            };
            var _closure1_slot7 = var1;
            var1 = function() { // Environment: var2
                var3 = _closure1_slot5;
                var2 = undefined;
                var1 = function*() { // Environment: var0
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun66594: for (var _fun66594_ip = 0;;) switch (_fun66594_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun66594_ip = 12;
                                    continue _fun66594
                                }
                            case 7:
                                var1 = undefined;
                                return var1;
                            case 12:
                                return var0;
                        }
                    };
                    return var0;
                };
                var1 = var3.bind(var2)(var1);
                var _closure2_slot0 = var1;
                var0 = function() {
                    var0 = undefined;
                    var3 = _closure2_slot0;
                    var2 = var3.apply;
                    var0 = arguments;
                    var1 = var0;
                    var0 = this;
                    var0 = var2.bind(var3)(var0, var1);
                    return var0;
                };
                return var0;
            };
            var1 = var1.bind(var0)();
            var3.nextTick = var1;
            var1 = function() { // Environment: var2
                var3 = _closure1_slot4;
                var2 = function() {
                    var3 = _closure1_slot3;
                    var2 = _closure2_slot0;
                    var0 = undefined;
                    var1 = this;
                    var1 = var3.bind(var0)(var1, var2);
                    return var0;
                };
                var _closure2_slot0 = var2;
                var0 = {};
                var4 = 'clone';
                var0.key = var4;
                var1 = function() {
                    var1 = this;
                    var0 = var1._cloneInto;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var0.value = var1;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = undefined;
                var0 = var3.bind(var0)(var2, var1);
                return var0;
            };
            var1 = var1.bind(var0)();
            var3.Hash = var1;
            var1 = {};
            var1 = var1.toString;
            var _closure1_slot8 = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 5, 8215, 8216]);