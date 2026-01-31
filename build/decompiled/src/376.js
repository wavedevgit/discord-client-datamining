// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var0 = function() {
        _fun5569: for (var _fun5569_ip = 0;;) switch (_fun5569_ip) {
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
                _fun5569_ip = 74;
                continue _fun5569;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot11 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var0 = function arg0, arg1, arg2, arg3() {
        _fun5572: for (var _fun5572_ip = 0;;) switch (_fun5572_ip) {
            case 0:
                var4 = arg0;
                var6 = arg2;
                var _closure2_slot0 = var6;
                var5 = _closure1_slot6;
                var3 = _closure1_slot5;
                var0 = 1;
                var2 = 3;
                var7 = var0 & var2;
                var0 = var4;
                if (!var7) {
                    _fun5572_ip = 44;
                    continue _fun5572
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
                    _fun5572_ip = 97;
                    continue _fun5572
                }
            case 78:
                var3 = 'function';
                var2 = typeof var4;
                var0 = var4;
                if (!(var3 === var2)) {
                    _fun5572_ip = 97;
                    continue _fun5572
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
    var _closure1_slot12 = var0;
    var1 = function arg0() {
        _fun5574: for (var _fun5574_ip = 0;;) switch (_fun5574_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var0 = var0 !== var3;
                if (!var0) {
                    _fun5574_ip = 23;
                    continue _fun5574
                }
            case 12:
                var2 = 'object';
                var1 = typeof var3;
                var0 = var2 === var1;
            case 23:
                if (!var0) {
                    _fun5574_ip = 62;
                    continue _fun5574
                }
            case 26:
                var1 = global;
                var4 = var1.Object;
                var2 = var4.getPrototypeOf;
                var4 = var2.bind(var4)(var3);
                var2 = var4.isPrototypeOf;
                var1 = var1.Object;
                var0 = var2.bind(var4)(var1);
            case 62:
                if (!var0) {
                    _fun5574_ip = 82;
                    continue _fun5574
                }
            case 65:
                var2 = _closure1_slot9;
                var1 = undefined;
                var1 = var2.bind(var1)(var3);
                var0 = !var1;
            case 82:
                return var0;
        }
    };
    var _closure1_slot13 = var1;
    var0 = function arg0() {
        _fun5575: for (var _fun5575_ip = 0;;) switch (_fun5575_ip) {
            case 0:
                var2 = arg0;
                var7 = undefined;
                var3 = undefined;
                var0 = arguments.length;
                var6 = 1;
                if (!(var0 > var6)) {
                    _fun5575_ip = 25;
                    continue _fun5575
                }
            case 17:
                var0 = arguments[var6];
                if (!(var7 === var0)) {
                    _fun5575_ip = 31;
                    continue _fun5575
                }
            case 25:
                var0 = new Array(0);
                _fun5575_ip = 35;
                continue _fun5575;
            case 31:
                var0 = arguments[var6];
            case 35:
                var4 = arguments.length;
                var1 = 2;
                var8 = var4 > var1;
                var5 = 0;
                var4 = 0;
                if (!var8) {
                    _fun5575_ip = 66;
                    continue _fun5575
                }
            case 52:
                var8 = arguments[var1];
                var4 = 0;
                if (!(var7 !== var8)) {
                    _fun5575_ip = 66;
                    continue _fun5575
                }
            case 62:
                var4 = arguments[var1];
            case 66:
                var1 = 5;
                if (!(!(var4 >= var1))) {
                    _fun5575_ip = 258;
                    continue _fun5575
                }
            case 76:
                var8 = _closure1_slot0;
                var9 = _closure1_slot1;
                var1 = 9;
                var1 = var9[var1];
                var1 = var8.bind(var7)(var1);
                var1 = var2 instanceof var1;
                if (var1) {
                    _fun5575_ip = 246;
                    continue _fun5575
                }
            case 109:
                var1 = global;
                var9 = var1.Array;
                var8 = var9.isArray;
                var8 = var8.bind(var9)(var2);
                if (var8) {
                    _fun5575_ip = 204;
                    continue _fun5575
                }
            case 130:
                var8 = _closure1_slot13;
                var8 = var8.bind(var7)(var2);
                if (!var8) {
                    _fun5575_ip = 256;
                    continue _fun5575
                }
            case 142:
                var8 = var1.Object;
                var1 = var8.keys;
                var9 = var1.bind(var8)(var2);
                var8 = var9.length;
                var10 = var5 < var8;
                var1 = 0;
                if (!var10) {
                    _fun5575_ip = 256;
                    continue _fun5575
                }
            case 172:
                var12 = _closure1_slot14;
                var10 = var9[var1];
                var11 = var2[var10];
                var10 = var4 + var6;
                var10 = var12.bind(var7)(var11, var0, var10);
                var1 = var1 + 1;
                if (var1 < var8) {
                    _fun5575_ip = 172;
                    continue _fun5575
                }
            case 202:
                _fun5575_ip = 256;
                continue _fun5575;
            case 204:
                var1 = var2.length;
                var8 = var5 < var1;
                var5 = 0;
                if (!var8) {
                    _fun5575_ip = 256;
                    continue _fun5575
                }
            case 218:
                var10 = _closure1_slot14;
                var9 = var2[var5];
                var8 = var4 + var6;
                var8 = var10.bind(var7)(var9, var0, var8);
                var5 = var5 + 1;
                if (var5 < var1) {
                    _fun5575_ip = 218;
                    continue _fun5575
                }
            case 244:
                _fun5575_ip = 256;
                continue _fun5575;
            case 246:
                var1 = var0.push;
                var1 = var1.bind(var0)(var2);
            case 256:
                return var0;
            case 258:
                return var0;
        }
    };
    var _closure1_slot14 = var0;
    var0 = function arg0, arg1() {
        _fun5576: for (var _fun5576_ip = 0;;) switch (_fun5576_ip) {
            case 0:
                var0 = arg0;
                var2 = arg1;
                var1 = undefined;
                var5 = undefined;
                var _closure2_slot0 = var2;
                var6 = arguments.length;
                var4 = 2;
                var6 = var6 > var4;
                var10 = 0;
                var9 = 0;
                if (!var6) {
                    _fun5576_ip = 47;
                    continue _fun5576
                }
            case 33:
                var6 = arguments[var4];
                var9 = 0;
                if (!(var1 !== var6)) {
                    _fun5576_ip = 47;
                    continue _fun5576
                }
            case 43:
                var9 = arguments[var4];
            case 47:
                var _closure2_slot1 = var9;
                var4 = 5;
                if (!(!(var9 >= var4))) {
                    _fun5576_ip = 224;
                    continue _fun5576
                }
            case 61:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var4 = 9;
                var4 = var6[var4];
                var4 = var5.bind(var1)(var4);
                var4 = var0 instanceof var4;
                if (var4) {
                    _fun5576_ip = 217;
                    continue _fun5576
                }
            case 94:
                var5 = global;
                var6 = var5.Array;
                var4 = var6.isArray;
                var4 = var4.bind(var6)(var0);
                if (var4) {
                    _fun5576_ip = 200;
                    continue _fun5576
                }
            case 115:
                var4 = _closure1_slot13;
                var4 = var4.bind(var1)(var0);
                if (var4) {
                    _fun5576_ip = 129;
                    continue _fun5576
                }
            case 127:
                return var0;
            case 129:
                var4 = {};
                var6 = var5.Object;
                var5 = var6.keys;
                var7 = var5.bind(var6)(var0);
                var6 = var7.length;
                var11 = var10 < var6;
                var5 = 1;
                var10 = 0;
                if (!var11) {
                    _fun5576_ip = 198;
                    continue _fun5576
                }
            case 164:
                var12 = var7[var10];
                var14 = _closure1_slot15;
                var13 = var0[var12];
                var11 = var9 + var5;
                var11 = var14.bind(var1)(var13, var2, var11);
                var4[var12] = var11;
                var10 = var10 + 1;
                if (var10 < var6) {
                    _fun5576_ip = 164;
                    continue _fun5576
                }
            case 198:
                return var4;
            case 200:
                var4 = var0.map;
                var3 = function(arg0) { // Environment: var3
                    var4 = _closure1_slot15;
                    var3 = _closure2_slot0;
                    var1 = _closure2_slot1;
                    var0 = 1;
                    var2 = var1 + var0;
                    var1 = undefined;
                    var0 = arg0;
                    var0 = var4.bind(var1)(var0, var3, var2);
                    return var0;
                };
                var3 = var4.bind(var0)(var3);
                return var3;
            case 217:
                var1 = var2.bind(var1)(var0);
                return var1;
            case 224:
                return var0;
        }
    };
    var _closure1_slot15 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var5.bind(var0)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot7 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot8 = var4;
    var4 = 7;
    var4 = var6[var4];
    var7 = var5.bind(var0)(var4);
    var4 = 8;
    var8 = var6[var4];
    var4 = arg1;
    var4 = var4.bind(var0)(var8);
    var4 = var4.isValidElement;
    var _closure1_slot9 = var4;
    var4 = 'nodes';
    var4 = var7.bind(var0)(var4);
    var _closure1_slot10 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var3 = function(arg0) { // Environment: var3
        var4 = function arg0, arg1, arg2() {
            _fun5579: for (var _fun5579_ip = 0;;) switch (_fun5579_ip) {
                case 0:
                    var4 = this;
                    var0 = _closure1_slot2;
                    var3 = _closure2_slot0;
                    var2 = undefined;
                    var0 = var0.bind(var2)(var4, var3);
                    var9 = new Array(1);
                    var0 = arg2;
                    var9[0] = var0;
                    var0 = _closure1_slot5;
                    var8 = var0.bind(var2)(var3);
                    var3 = _closure1_slot4;
                    var0 = _closure1_slot11;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun5579_ip = 73;
                        continue _fun5579
                    }
                case 60:
                    var0 = var8.apply;
                    var0 = var0.bind(var8)(var4, var9);
                    _fun5579_ip = 107;
                    continue _fun5579;
                case 73:
                    var5 = global;
                    var7 = var5.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot5;
                    var5 = var5.bind(var2)(var4);
                    var5 = var5.constructor;
                    var0 = var6.bind(var7)(var8, var9, var5);
                case 107:
                    var0 = var3.bind(var2)(var4, var0);
                    var3 = global;
                    var6 = var3.Object;
                    var5 = var6.defineProperty;
                    var3 = _closure1_slot10;
                    var4 = {};
                    var7 = true;
                    var4.writable = var7;
                    var4.value = var2;
                    var4 = var5.bind(var6)(var0, var3, var4);
                    var1 = _closure1_slot8;
                    var2 = var1.bind(var2)(var0, var3);
                    var1 = arg0;
                    var2[var3] = var1;
                    var1 = arg1;
                    var0._value = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg0;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot3;
        var5 = {};
        var1 = '__getValue';
        var5.key = var1;
        var1 = function() {
            var3 = _closure1_slot15;
            var0 = this;
            var2 = var0._value;
            var1 = undefined;
            var0 = function(arg0) { // Environment: var0
                var1 = arg0;
                var0 = var1.__getValue;
                var0 = var0.bind(var1)();
                return var0;
            };
            var0 = var3.bind(var1)(var2, var0);
            return var0;
        };
        var5.value = var1;
        var1 = new Array(7);
        var1[0] = var5;
        var5 = {};
        var6 = '__getValueWithStaticObject';
        var5.key = var6;
        var6 = function arg0() {
            var5 = _closure1_slot8;
            var4 = _closure1_slot10;
            var3 = undefined;
            var2 = this;
            var2 = var5.bind(var3)(var2, var4);
            var2 = var2[var4];
            var _closure3_slot0 = var2;
            var2 = 0;
            var _closure3_slot1 = var2;
            var2 = _closure1_slot15;
            var1 = arg0;
            var0 = function() { // Environment: var0
                var1 = _closure3_slot0;
                var0 = _closure3_slot1;
                var0 = parseFloat(var0);
                var2 = var0 + 1;
                _closure3_slot1 = var2;
                var1 = var1[var0];
                var0 = var1.__getValue;
                var0 = var0.bind(var1)();
                return var0;
            };
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var5.value = var6;
        var1[1] = var5;
        var5 = {};
        var6 = '__getAnimatedValue';
        var5.key = var6;
        var6 = function() {
            var3 = _closure1_slot15;
            var0 = this;
            var2 = var0._value;
            var1 = undefined;
            var0 = function(arg0) { // Environment: var0
                var1 = arg0;
                var0 = var1.__getAnimatedValue;
                var0 = var0.bind(var1)();
                return var0;
            };
            var0 = var3.bind(var1)(var2, var0);
            return var0;
        };
        var5.value = var6;
        var1[2] = var5;
        var5 = {};
        var6 = '__attach';
        var5.key = var6;
        var6 = function() {
            _fun5586: for (var _fun5586_ip = 0;;) switch (_fun5586_ip) {
                case 0:
                    var5 = this;
                    var2 = _closure1_slot8;
                    var3 = _closure1_slot10;
                    var0 = undefined;
                    var2 = var2.bind(var0)(var5, var3);
                    var4 = var2[var3];
                    var3 = var4.length;
                    var2 = 0;
                    var6 = var2 < var3;
                    if (!var6) {
                        _fun5586_ip = 62;
                        continue _fun5586
                    }
                case 40:
                    var7 = var4[var2];
                    var6 = var7.__addChild;
                    var6 = var6.bind(var7)(var5);
                    var2 = var2 + 1;
                    if (var2 < var3) {
                        _fun5586_ip = 40;
                        continue _fun5586
                    }
                case 62:
                    var4 = _closure1_slot12;
                    var11 = _closure2_slot0;
                    var10 = '__attach';
                    var8 = 3;
                    var12 = undefined;
                    var9 = var5;
                    var2 = var12[var4](var11, var10, var9, var8, var7);
                    var1 = new Array(0);
                    var1 = var2.bind(var0)(var1);
                    return var0;
            }
        };
        var5.value = var6;
        var1[3] = var5;
        var5 = {};
        var6 = '__detach';
        var5.key = var6;
        var6 = function() {
            _fun5587: for (var _fun5587_ip = 0;;) switch (_fun5587_ip) {
                case 0:
                    var5 = this;
                    var2 = _closure1_slot8;
                    var3 = _closure1_slot10;
                    var0 = undefined;
                    var2 = var2.bind(var0)(var5, var3);
                    var4 = var2[var3];
                    var3 = var4.length;
                    var2 = 0;
                    var6 = var2 < var3;
                    if (!var6) {
                        _fun5587_ip = 62;
                        continue _fun5587
                    }
                case 40:
                    var7 = var4[var2];
                    var6 = var7.__removeChild;
                    var6 = var6.bind(var7)(var5);
                    var2 = var2 + 1;
                    if (var2 < var3) {
                        _fun5587_ip = 40;
                        continue _fun5587
                    }
                case 62:
                    var4 = _closure1_slot12;
                    var11 = _closure2_slot0;
                    var10 = '__detach';
                    var8 = 3;
                    var12 = undefined;
                    var9 = var5;
                    var2 = var12[var4](var11, var10, var9, var8, var7);
                    var1 = new Array(0);
                    var1 = var2.bind(var0)(var1);
                    return var0;
            }
        };
        var5.value = var6;
        var1[4] = var5;
        var5 = {};
        var6 = '__makeNative';
        var5.key = var6;
        var6 = function arg0() {
            _fun5588: for (var _fun5588_ip = 0;;) switch (_fun5588_ip) {
                case 0:
                    var3 = arg0;
                    var6 = this;
                    var2 = _closure1_slot8;
                    var4 = _closure1_slot10;
                    var0 = undefined;
                    var2 = var2.bind(var0)(var6, var4);
                    var5 = var2[var4];
                    var4 = var5.length;
                    var2 = 0;
                    var7 = var2 < var4;
                    if (!var7) {
                        _fun5588_ip = 65;
                        continue _fun5588
                    }
                case 43:
                    var8 = var5[var2];
                    var7 = var8.__makeNative;
                    var7 = var7.bind(var8)(var3);
                    var2 = var2 + 1;
                    if (var2 < var4) {
                        _fun5588_ip = 43;
                        continue _fun5588
                    }
                case 65:
                    var5 = _closure1_slot12;
                    var12 = _closure2_slot0;
                    var11 = '__makeNative';
                    var9 = 3;
                    var13 = undefined;
                    var10 = var6;
                    var2 = var13[var5](var12, var11, var10, var9, var8);
                    var1 = new Array(1);
                    var1[0] = var3;
                    var1 = var2.bind(var0)(var1);
                    return var0;
            }
        };
        var5.value = var6;
        var1[5] = var5;
        var5 = {};
        var6 = '__getNativeConfig';
        var5.key = var6;
        var6 = function() {
            var2 = this;
            var0 = {};
            var1 = 'object';
            var0.type = var1;
            var5 = _closure1_slot15;
            var4 = var2._value;
            var3 = undefined;
            var1 = function(arg0) { // Environment: var1
                var2 = arg0;
                var0 = {};
                var1 = var2.__getNativeTag;
                var1 = var1.bind(var2)();
                var0.nodeTag = var1;
                return var0;
            };
            var1 = var5.bind(var3)(var4, var1);
            var0.value = var1;
            var1 = var2.__getDebugID;
            var1 = var1.bind(var2)();
            var0.debugID = var1;
            return var0;
        };
        var5.value = var6;
        var1[6] = var5;
        var5 = {};
        var6 = 'from';
        var5.key = var6;
        var0 = function arg0() {
            _fun5591: for (var _fun5591_ip = 0;;) switch (_fun5591_ip) {
                case 0:
                    var4 = arg0;
                    var1 = _closure1_slot14;
                    var0 = undefined;
                    var3 = var1.bind(var0)(var4);
                    var2 = var3.length;
                    var1 = 0;
                    var0 = null;
                    if (!(var1 !== var2)) {
                        _fun5591_ip = 63;
                        continue _fun5591
                    }
                case 30:
                    var1 = _closure2_slot0;
                    var2 = var1.prototype;
                    var2 = Object.create(var2, {
                        constructor: {
                            value: var1
                        }
                    });
                    var7 = var2;
                    var6 = var3;
                    var5 = var4;
                    var1 = new var7[var1](var6, var5, var4);
                    var0 = var1 instanceof Object ? var1 : var2;
                case 63:
                    return var0;
            }
        };
        var5.value = var0;
        var0 = new Array(1);
        var0[0] = var5;
        var0 = var2.bind(var3)(var4, var1, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var4);
    var2.default = var3;
    var2.isPlainObject = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 102, 18, 99, 100, 31, 359, 358]);