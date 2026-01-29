// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var0 = require;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var5;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var1
        _fun5456: for (var _fun5456_ip = 0;;) switch (_fun5456_ip) {
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
                _fun5456_ip = 74;
                continue _fun5456;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot10 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot10 = var0;
    var0 = function(arg0, arg1, arg2, arg3) { // Original name: _superPropGet, environment: var1
        _fun5459: for (var _fun5459_ip = 0;;) switch (_fun5459_ip) {
            case 0:
                var4 = arg0;
                var6 = arg2;
                var _closure2_slot0 = var6;
                var5 = _closure1_slot7;
                var3 = _closure1_slot6;
                var0 = 1;
                var2 = 3;
                var7 = var0 & var2;
                var0 = var4;
                if (!var7) {
                    _fun5459_ip = 44;
                    continue _fun5459
                }
            case 39:
                var0 = var4.prototype;
            case 44:
                var4 = undefined;
                var3 = var3.bind(var4)(var0);
                var0 = arg1;
                var4 = var5.bind(var4)(var3, var0, var6);
                var _closure2_slot1 = var4;
                var0 = 2;
                var2 = var0 & var2;
                var0 = var4;
                if (!var2) {
                    _fun5459_ip = 97;
                    continue _fun5459
                }
            case 78:
                var3 = 'function';
                var2 = typeof var4;
                var0 = var4;
                if (!(var3 === var2)) {
                    _fun5459_ip = 97;
                    continue _fun5459
                }
            case 92:
                var0 = function(arg0) { // Environment: var1
                    var3 = _closure2_slot1;
                    var2 = var3.apply;
                    var1 = _closure2_slot0;
                    var0 = arg0;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
            case 97:
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var0 = function(arg0) { // Original name: processColor, environment: var1
        _fun5461: for (var _fun5461_ip = 0;;) switch (_fun5461_ip) {
            case 0:
                var1 = arg0;
                var0 = null;
                if (!(var0 != var1)) {
                    _fun5461_ip = 216;
                    continue _fun5461
                }
            case 12:
                var3 = _closure1_slot13;
                var5 = undefined;
                var3 = var3.bind(var5)(var1);
                if (var3) {
                    _fun5461_ip = 214;
                    continue _fun5461
                }
            case 32:
                var4 = _closure1_slot1;
                var6 = _closure1_slot2;
                var3 = 6;
                var3 = var6[var3];
                var3 = var4.bind(var5)(var3);
                var4 = var3.bind(var5)(var1);
                if (!(var0 != var4)) {
                    _fun5461_ip = 212;
                    continue _fun5461
                }
            case 64:
                var6 = typeof var4;
                var3 = 'object';
                if (!(var3 !== var6)) {
                    _fun5461_ip = 173;
                    continue _fun5461
                }
            case 75:
                var3 = 'number';
                if (!(var3 === var6)) {
                    _fun5461_ip = 208;
                    continue _fun5461
                }
            case 86:
                var3 = {};
                var6 = 4278190080.0;
                var7 = var6 & var4;
                var6 = 24;
                var6 = var7 >>> var6;
                var3.r = var6;
                var6 = 16711680;
                var7 = var6 & var4;
                var6 = 16;
                var6 = var7 >>> var6;
                var3.g = var6;
                var6 = 65280;
                var7 = var6 & var4;
                var6 = 8;
                var6 = var7 >>> var6;
                var3.b = var6;
                var7 = 255;
                var6 = var7 & var4;
                var6 = var6 / var7;
                var3.a = var6;
                return var3;
            case 173:
                var3 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 7;
                var2 = var6[var2];
                var3 = var3.bind(var5)(var2);
                var2 = var3.processColorObject;
                var2 = var2.bind(var3)(var4);
                if (!(var0 == var2)) {
                    _fun5461_ip = 210;
                    continue _fun5461
                }
            case 208:
                return var0;
            case 210:
                return var2;
            case 212:
                return var0;
            case 214:
                return var1;
            case 216:
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var0 = function(arg0) { // Original name: isRgbaValue, environment: var1
        _fun5462: for (var _fun5462_ip = 0;;) switch (_fun5462_ip) {
            case 0:
                var1 = arg0;
                var0 = var1;
                if (!var0) {
                    _fun5462_ip = 25;
                    continue _fun5462
                }
            case 9:
                var2 = var1.r;
                var3 = 'number';
                var2 = typeof var2;
                var0 = var3 === var2;
            case 25:
                if (!var0) {
                    _fun5462_ip = 44;
                    continue _fun5462
                }
            case 28:
                var2 = var1.g;
                var3 = 'number';
                var2 = typeof var2;
                var0 = var3 === var2;
            case 44:
                if (!var0) {
                    _fun5462_ip = 64;
                    continue _fun5462
                }
            case 47:
                var2 = var1.b;
                var3 = 'number';
                var2 = typeof var2;
                var0 = var3 === var2;
            case 64:
                if (!var0) {
                    _fun5462_ip = 83;
                    continue _fun5462
                }
            case 67:
                var1 = var1.a;
                var2 = 'number';
                var1 = typeof var1;
                var0 = var2 === var1;
            case 83:
                return var0;
        }
    };
    var _closure1_slot13 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = {
        'r': 0,
        'g': 0,
        'b': 0,
        'a': 1
    };
    var _closure1_slot9 = var3;
    var3 = 10;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var3 = function(arg0, arg1) { // Original name: AnimatedColor, environment: var5
            _fun5464: for (var _fun5464_ip = 0;;) switch (_fun5464_ip) {
                case 0:
                    var3 = arg0;
                    var2 = arg1;
                    var4 = this;
                    var0 = _closure1_slot3;
                    var1 = _closure2_slot0;
                    var7 = undefined;
                    var0 = var0.bind(var7)(var4, var1);
                    var11 = new Array(1);
                    var11[0] = var2;
                    var0 = _closure1_slot6;
                    var10 = var0.bind(var7)(var1);
                    var1 = _closure1_slot5;
                    var0 = _closure1_slot10;
                    var0 = var0.bind(var7)();
                    if (var0) {
                        _fun5464_ip = 76;
                        continue _fun5464
                    }
                case 63:
                    var0 = var10.apply;
                    var0 = var0.bind(var10)(var4, var11);
                    _fun5464_ip = 110;
                    continue _fun5464;
                case 76:
                    var6 = global;
                    var9 = var6.Reflect;
                    var8 = var9.construct;
                    var6 = _closure1_slot6;
                    var6 = var6.bind(var7)(var4);
                    var6 = var6.constructor;
                    var0 = var8.bind(var9)(var10, var11, var6);
                case 110:
                    var0 = var1.bind(var7)(var4, var0);
                    var1 = 0;
                    var0._suspendCallbacks = var1;
                    var1 = null;
                    if (!(var1 == var3)) {
                        _fun5464_ip = 134;
                        continue _fun5464
                    }
                case 130:
                    var3 = _closure1_slot9;
                case 134:
                    var4 = var3;
                    if (!var4) {
                        _fun5464_ip = 169;
                        continue _fun5464
                    }
                case 140:
                    var8 = var3.r;
                    var9 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var6 = 8;
                    var6 = var10[var6];
                    var6 = var9.bind(var7)(var6);
                    var4 = var8 instanceof var6;
                case 169:
                    if (!var4) {
                        _fun5464_ip = 201;
                        continue _fun5464
                    }
                case 172:
                    var8 = var3.g;
                    var9 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var6 = 8;
                    var6 = var10[var6];
                    var6 = var9.bind(var7)(var6);
                    var4 = var8 instanceof var6;
                case 201:
                    if (!var4) {
                        _fun5464_ip = 234;
                        continue _fun5464
                    }
                case 204:
                    var8 = var3.b;
                    var9 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var6 = 8;
                    var6 = var10[var6];
                    var6 = var9.bind(var7)(var6);
                    var4 = var8 instanceof var6;
                case 234:
                    if (!var4) {
                        _fun5464_ip = 266;
                        continue _fun5464
                    }
                case 237:
                    var8 = var3.a;
                    var9 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var6 = 8;
                    var6 = var10[var6];
                    var6 = var9.bind(var7)(var6);
                    var4 = var8 instanceof var6;
                case 266:
                    if (var4) {
                        _fun5464_ip = 494;
                        continue _fun5464
                    }
                case 272:
                    var4 = _closure1_slot12;
                    var4 = var4.bind(var7)(var3);
                    if (!(var1 == var4)) {
                        _fun5464_ip = 289;
                        continue _fun5464
                    }
                case 285:
                    var4 = _closure1_slot9;
                case 289:
                    var6 = _closure1_slot9;
                    var8 = _closure1_slot13;
                    var9 = var8.bind(var7)(var4);
                    var8 = var4;
                    var4 = var8;
                    if (var9) {
                        _fun5464_ip = 320;
                        continue _fun5464
                    }
                case 311:
                    var0.nativeColor = var8;
                    var4 = var6;
                case 320:
                    var6 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var5 = 8;
                    var9 = var8[var5];
                    var11 = var6.bind(var7)(var9);
                    var14 = var4.r;
                    var10 = var11.prototype;
                    var10 = Object.create(var10, {
                        constructor: {
                            value: var11
                        }
                    });
                    var15 = var10;
                    var9 = new var15[var11](var14, var13);
                    var9 = var9 instanceof Object ? var9 : var10;
                    var0.r = var9;
                    var9 = var8[var5];
                    var11 = var6.bind(var7)(var9);
                    var14 = var4.g;
                    var10 = var11.prototype;
                    var10 = Object.create(var10, {
                        constructor: {
                            value: var11
                        }
                    });
                    var15 = var10;
                    var9 = new var15[var11](var14, var13);
                    var9 = var9 instanceof Object ? var9 : var10;
                    var0.g = var9;
                    var9 = var8[var5];
                    var11 = var6.bind(var7)(var9);
                    var14 = var4.b;
                    var10 = var11.prototype;
                    var10 = Object.create(var10, {
                        constructor: {
                            value: var11
                        }
                    });
                    var15 = var10;
                    var9 = new var15[var11](var14, var13);
                    var9 = var9 instanceof Object ? var9 : var10;
                    var0.b = var9;
                    var5 = var8[var5];
                    var6 = var6.bind(var7)(var5);
                    var14 = var4.a;
                    var5 = var6.prototype;
                    var5 = Object.create(var5, {
                        constructor: {
                            value: var6
                        }
                    });
                    var15 = var5;
                    var4 = new var15[var6](var14, var13);
                    var4 = var4 instanceof Object ? var4 : var5;
                    var0.a = var4;
                    _fun5464_ip = 539;
                    continue _fun5464;
                case 494:
                    var4 = var3.r;
                    var0.r = var4;
                    var4 = var3.g;
                    var0.g = var4;
                    var4 = var3.b;
                    var0.b = var4;
                    var3 = var3.a;
                    var0.a = var3;
                case 539:
                    var1 = var1 != var2;
                    if (!var1) {
                        _fun5464_ip = 552;
                        continue _fun5464
                    }
                case 546:
                    var1 = var2.useNativeDriver;
                case 552:
                    if (!var1) {
                        _fun5464_ip = 565;
                        continue _fun5464
                    }
                case 555:
                    var1 = var0.__makeNative;
                    var1 = var1.bind(var0)();
                case 565:
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot8;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'setValue';
        var4.key = var0;
        var0 = function(arg0) { // Original name: setValue, environment: var5
            _fun5465: for (var _fun5465_ip = 0;;) switch (_fun5465_ip) {
                case 0:
                    var3 = this;
                    var _closure3_slot0 = var3;
                    var0 = false;
                    var _closure3_slot1 = var0;
                    var0 = var3.__isNative;
                    if (!var0) {
                        _fun5465_ip = 85;
                        continue _fun5465
                    }
                case 24:
                    var0 = var3.__getNativeTag;
                    var5 = var0.bind(var3)();
                    var4 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 9;
                    var1 = var1[var0];
                    var0 = undefined;
                    var0 = var4.bind(var0)(var1);
                    var4 = var0.API;
                    var1 = var4.setWaitingForIdentifier;
                    var0 = var5.toString;
                    var0 = var0.bind(var5)();
                    var0 = var1.bind(var4)(var0);
                case 85:
                    var5 = _closure1_slot12;
                    var0 = undefined;
                    var4 = arg0;
                    var4 = var5.bind(var0)(var4);
                    var5 = null;
                    if (!(var5 == var4)) {
                        _fun5465_ip = 112;
                        continue _fun5465
                    }
                case 108:
                    var4 = _closure1_slot9;
                case 112:
                    var _closure3_slot2 = var4;
                    var5 = var3._withSuspendedCallbacks;
                    var4 = function() { // Environment: var2
                        _fun5466: for (var _fun5466_ip = 0;;) switch (_fun5466_ip) {
                            case 0:
                                var3 = _closure1_slot13;
                                var1 = _closure3_slot2;
                                var0 = undefined;
                                var4 = var3.bind(var0)(var1);
                                var3 = _closure3_slot2;
                                var1 = _closure3_slot0;
                                if (var4) {
                                    _fun5466_ip = 63;
                                    continue _fun5466
                                }
                            case 32:
                                var4 = var1.nativeColor;
                                if (!(var4 !== var3)) {
                                    _fun5466_ip = 177;
                                    continue _fun5466
                                }
                            case 45:
                                var4 = _closure3_slot0;
                                var4.nativeColor = var3;
                                var4 = true;
                                _closure3_slot1 = var4;
                                _fun5466_ip = 177;
                                continue _fun5466;
                            case 63:
                                var6 = var1.r;
                                var5 = var6.setValue;
                                var4 = var3.r;
                                var4 = var5.bind(var6)(var4);
                                var6 = var1.g;
                                var5 = var6.setValue;
                                var4 = var3.g;
                                var4 = var5.bind(var6)(var4);
                                var6 = var1.b;
                                var5 = var6.setValue;
                                var4 = var3.b;
                                var4 = var5.bind(var6)(var4);
                                var5 = var1.a;
                                var4 = var5.setValue;
                                var3 = var3.a;
                                var3 = var4.bind(var5)(var3);
                                var1 = var1.nativeColor;
                                var3 = null;
                                if (!(var3 != var1)) {
                                    _fun5466_ip = 177;
                                    continue _fun5466
                                }
                            case 161:
                                var1 = _closure3_slot0;
                                var1.nativeColor = var3;
                                var1 = true;
                                _closure3_slot1 = var1;
                            case 177:
                                return var0;
                        }
                    };
                    var4 = var5.bind(var3)(var4);
                    var4 = var3.__isNative;
                    if (var4) {
                        _fun5465_ip = 174;
                        continue _fun5465
                    }
                case 141:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 8;
                    var4 = var6[var4];
                    var5 = var5.bind(var0)(var4);
                    var4 = var5.flushValue;
                    var4 = var4.bind(var5)(var3);
                    _fun5465_ip = 285;
                    continue _fun5465;
                case 174:
                    var4 = var3.__getNativeTag;
                    var5 = var4.bind(var3)();
                    var2 = _closure3_slot1;
                    if (!var2) {
                        _fun5465_ip = 239;
                        continue _fun5465
                    }
                case 191:
                    var4 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var2 = 9;
                    var2 = var6[var2];
                    var2 = var4.bind(var0)(var2);
                    var6 = var2.API;
                    var4 = var6.updateAnimatedNodeConfig;
                    var2 = var3.__getNativeConfig;
                    var2 = var2.bind(var3)();
                    var2 = var4.bind(var6)(var5, var2);
                case 239:
                    var2 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var1 = 9;
                    var1 = var4[var1];
                    var1 = var2.bind(var0)(var1);
                    var4 = var1.API;
                    var2 = var4.unsetWaitingForIdentifier;
                    var1 = var5.toString;
                    var1 = var1.bind(var5)();
                    var1 = var2.bind(var4)(var1);
                case 285:
                    var2 = var3.__callListeners;
                    var1 = var3.__getValue;
                    var1 = var1.bind(var3)();
                    var1 = var2.bind(var3)(var1);
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(13);
        var0[0] = var4;
        var4 = {};
        var6 = 'setOffset';
        var4.key = var6;
        var6 = function(arg0) { // Original name: setOffset, environment: var5
            var0 = arg0;
            var1 = this;
            var4 = var1.r;
            var3 = var4.setOffset;
            var2 = var0.r;
            var2 = var3.bind(var4)(var2);
            var4 = var1.g;
            var3 = var4.setOffset;
            var2 = var0.g;
            var2 = var3.bind(var4)(var2);
            var4 = var1.b;
            var3 = var4.setOffset;
            var2 = var0.b;
            var2 = var3.bind(var4)(var2);
            var2 = var1.a;
            var1 = var2.setOffset;
            var0 = var0.a;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'flattenOffset';
        var4.key = var6;
        var6 = function() { // Original name: flattenOffset, environment: var5
            var0 = this;
            var2 = var0.r;
            var1 = var2.flattenOffset;
            var1 = var1.bind(var2)();
            var2 = var0.g;
            var1 = var2.flattenOffset;
            var1 = var1.bind(var2)();
            var2 = var0.b;
            var1 = var2.flattenOffset;
            var1 = var1.bind(var2)();
            var1 = var0.a;
            var0 = var1.flattenOffset;
            var0 = var0.bind(var1)();
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'extractOffset';
        var4.key = var6;
        var6 = function() { // Original name: extractOffset, environment: var5
            var0 = this;
            var2 = var0.r;
            var1 = var2.extractOffset;
            var1 = var1.bind(var2)();
            var2 = var0.g;
            var1 = var2.extractOffset;
            var1 = var1.bind(var2)();
            var2 = var0.b;
            var1 = var2.extractOffset;
            var1 = var1.bind(var2)();
            var1 = var0.a;
            var0 = var1.extractOffset;
            var0 = var0.bind(var1)();
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'stopAnimation';
        var4.key = var6;
        var6 = function(arg0) { // Original name: stopAnimation, environment: var5
            _fun5470: for (var _fun5470_ip = 0;;) switch (_fun5470_ip) {
                case 0:
                    var2 = arg0;
                    var1 = this;
                    var3 = var1.r;
                    var0 = var3.stopAnimation;
                    var0 = var0.bind(var3)();
                    var3 = var1.g;
                    var0 = var3.stopAnimation;
                    var0 = var0.bind(var3)();
                    var3 = var1.b;
                    var0 = var3.stopAnimation;
                    var0 = var0.bind(var3)();
                    var3 = var1.a;
                    var0 = var3.stopAnimation;
                    var0 = var0.bind(var3)();
                    if (!var2) {
                        _fun5470_ip = 87;
                        continue _fun5470
                    }
                case 70:
                    var0 = var1.__getValue;
                    var1 = var0.bind(var1)();
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                case 87:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'resetAnimation';
        var4.key = var6;
        var6 = function(arg0) { // Original name: resetAnimation, environment: var5
            _fun5471: for (var _fun5471_ip = 0;;) switch (_fun5471_ip) {
                case 0:
                    var2 = arg0;
                    var1 = this;
                    var3 = var1.r;
                    var0 = var3.resetAnimation;
                    var0 = var0.bind(var3)();
                    var3 = var1.g;
                    var0 = var3.resetAnimation;
                    var0 = var0.bind(var3)();
                    var3 = var1.b;
                    var0 = var3.resetAnimation;
                    var0 = var0.bind(var3)();
                    var3 = var1.a;
                    var0 = var3.resetAnimation;
                    var0 = var0.bind(var3)();
                    if (!var2) {
                        _fun5471_ip = 87;
                        continue _fun5471
                    }
                case 70:
                    var0 = var1.__getValue;
                    var1 = var0.bind(var1)();
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                case 87:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = '__getValue';
        var4.key = var6;
        var6 = function() { // Original name: __getValue, environment: var5
            _fun5472: for (var _fun5472_ip = 0;;) switch (_fun5472_ip) {
                case 0:
                    var1 = this;
                    var2 = var1.nativeColor;
                    var0 = null;
                    if (!(var0 == var2)) {
                        _fun5472_ip = 120;
                        continue _fun5472
                    }
                case 15:
                    var2 = var1.r;
                    var0 = var2.__getValue;
                    var16 = var0.bind(var2)();
                    var2 = var1.g;
                    var0 = var2.__getValue;
                    var14 = var0.bind(var2)();
                    var2 = var1.b;
                    var0 = var2.__getValue;
                    var12 = var0.bind(var2)();
                    var2 = var1.a;
                    var0 = var2.__getValue;
                    var10 = var0.bind(var2)();
                    var0 = global;
                    var0 = var0.HermesInternal;
                    var4 = var0.concat;
                    var17 = 'rgba(';
                    var2 = ', ';
                    var9 = ')';
                    var15 = var2;
                    var13 = var2;
                    var11 = var2;
                    var0 = var17[var4](var16, var15, var14, var13, var12, var11, var10, var9, var8);
                    _fun5472_ip = 126;
                    continue _fun5472;
                case 120:
                    var0 = var1.nativeColor;
                case 126:
                    return var0;
            }
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = '__attach';
        var4.key = var6;
        var6 = function() { // Original name: __attach, environment: var5
            var5 = this;
            var1 = var5.r;
            var0 = var1.__addChild;
            var0 = var0.bind(var1)(var5);
            var1 = var5.g;
            var0 = var1.__addChild;
            var0 = var0.bind(var1)(var5);
            var1 = var5.b;
            var0 = var1.__addChild;
            var0 = var0.bind(var1)(var5);
            var1 = var5.a;
            var0 = var1.__addChild;
            var0 = var0.bind(var1)(var5);
            var4 = _closure1_slot11;
            var9 = _closure2_slot0;
            var0 = undefined;
            var8 = '__attach';
            var6 = 3;
            var10 = undefined;
            var7 = var5;
            var2 = var10[var4](var9, var8, var7, var6, var5);
            var1 = new Array(0);
            var1 = var2.bind(var0)(var1);
            return var0;
        };
        var4.value = var6;
        var0[7] = var4;
        var4 = {};
        var6 = '__detach';
        var4.key = var6;
        var6 = function() { // Original name: __detach, environment: var5
            var5 = this;
            var1 = var5.r;
            var0 = var1.__removeChild;
            var0 = var0.bind(var1)(var5);
            var1 = var5.g;
            var0 = var1.__removeChild;
            var0 = var0.bind(var1)(var5);
            var1 = var5.b;
            var0 = var1.__removeChild;
            var0 = var0.bind(var1)(var5);
            var1 = var5.a;
            var0 = var1.__removeChild;
            var0 = var0.bind(var1)(var5);
            var4 = _closure1_slot11;
            var9 = _closure2_slot0;
            var0 = undefined;
            var8 = '__detach';
            var6 = 3;
            var10 = undefined;
            var7 = var5;
            var2 = var10[var4](var9, var8, var7, var6, var5);
            var1 = new Array(0);
            var1 = var2.bind(var0)(var1);
            return var0;
        };
        var4.value = var6;
        var0[8] = var4;
        var4 = {};
        var6 = '_withSuspendedCallbacks';
        var4.key = var6;
        var6 = function(arg0) { // Original name: _withSuspendedCallbacks, environment: var5
            var2 = this;
            var0 = var2._suspendCallbacks;
            var0 = var0 + 1;
            var2._suspendCallbacks = var0;
            var1 = arg0;
            var0 = undefined;
            var1 = var1.bind(var0)();
            var1 = var2._suspendCallbacks;
            var1 = var1 - 1;
            var2._suspendCallbacks = var1;
            return var0;
        };
        var4.value = var6;
        var0[9] = var4;
        var4 = {};
        var6 = '__callListeners';
        var4.key = var6;
        var6 = function(arg0) { // Original name: __callListeners, environment: var5
            _fun5476: for (var _fun5476_ip = 0;;) switch (_fun5476_ip) {
                case 0:
                    var5 = this;
                    var1 = var5._suspendCallbacks;
                    var0 = 0;
                    if (!(var0 === var1)) {
                        _fun5476_ip = 63;
                        continue _fun5476
                    }
                case 15:
                    var4 = _closure1_slot11;
                    var9 = _closure2_slot0;
                    var2 = undefined;
                    var8 = '__callListeners';
                    var6 = 3;
                    var10 = undefined;
                    var7 = var5;
                    var1 = var10[var4](var9, var8, var7, var6, var5);
                    var0 = new Array(1);
                    var3 = arg0;
                    var0[0] = var3;
                    var0 = var1.bind(var2)(var0);
                case 63:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[10] = var4;
        var4 = {};
        var6 = '__makeNative';
        var4.key = var6;
        var6 = function(arg0) { // Original name: __makeNative, environment: var5
            var3 = arg0;
            var6 = this;
            var1 = var6.r;
            var0 = var1.__makeNative;
            var0 = var0.bind(var1)(var3);
            var1 = var6.g;
            var0 = var1.__makeNative;
            var0 = var0.bind(var1)(var3);
            var1 = var6.b;
            var0 = var1.__makeNative;
            var0 = var0.bind(var1)(var3);
            var1 = var6.a;
            var0 = var1.__makeNative;
            var0 = var0.bind(var1)(var3);
            var5 = _closure1_slot11;
            var10 = _closure2_slot0;
            var0 = undefined;
            var9 = '__makeNative';
            var7 = 3;
            var11 = undefined;
            var8 = var6;
            var2 = var11[var5](var10, var9, var8, var7, var6);
            var1 = new Array(1);
            var1[0] = var3;
            var1 = var2.bind(var0)(var1);
            return var0;
        };
        var4.value = var6;
        var0[11] = var4;
        var4 = {};
        var6 = '__getNativeConfig';
        var4.key = var6;
        var5 = function() { // Original name: __getNativeConfig, environment: var5
            var2 = this;
            var0 = {};
            var1 = 'color';
            var0.type = var1;
            var3 = var2.r;
            var1 = var3.__getNativeTag;
            var1 = var1.bind(var3)();
            var0.r = var1;
            var3 = var2.g;
            var1 = var3.__getNativeTag;
            var1 = var1.bind(var3)();
            var0.g = var1;
            var3 = var2.b;
            var1 = var3.__getNativeTag;
            var1 = var1.bind(var3)();
            var0.b = var1;
            var3 = var2.a;
            var1 = var3.__getNativeTag;
            var1 = var1.bind(var3)();
            var0.a = var1;
            var1 = var2.nativeColor;
            var0.nativeColor = var1;
            var1 = var2.__getDebugID;
            var1 = var1.bind(var2)();
            var0.debugID = var1;
            return var0;
        };
        var4.value = var5;
        var0[12] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 102, 18, 39, 40, 348, 349, 358]);