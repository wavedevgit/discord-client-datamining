// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var1
        _fun5593: for (var _fun5593_ip = 0;;) switch (_fun5593_ip) {
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
                _fun5593_ip = 74;
                continue _fun5593;
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
        _fun5596: for (var _fun5596_ip = 0;;) switch (_fun5596_ip) {
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
                    _fun5596_ip = 44;
                    continue _fun5596
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
                    _fun5596_ip = 97;
                    continue _fun5596
                }
            case 78:
                var3 = 'function';
                var2 = typeof var4;
                var0 = var4;
                if (!(var3 === var2)) {
                    _fun5596_ip = 97;
                    continue _fun5596
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
    var0 = function(arg0, arg1) { // Original name: mapTransforms, environment: var1
        var2 = arg0;
        var1 = arg1;
        var _closure2_slot0 = var1;
        var1 = var2.map;
        var0 = function(arg0) { // Environment: var0
            _fun5599: for (var _fun5599_ip = 0;;) switch (_fun5599_ip) {
                case 0:
                    var14 = arg0;
                    var0 = {};
                    var12 = var14;
                    var8 = undefined;
                    var5 = 8;
                    var4 = 'object';
                    var3 = global;
                    var2 = undefined;
                    var1 = undefined;
                    for (var9 in var12)
                        case 42: {
                            var16 = var1;
                            case 57: var18 = var9;
                            var19 = var14[var18];
                            var20 = _closure1_slot0;
                            var17 = _closure1_slot1;
                            var17 = var17[var5];
                            var17 = var20.bind(var8)(var17);
                            var17 = var19 instanceof var17;
                            if (var17) {
                                _fun5599_ip = 248;
                                continue _fun5599
                            }
                            case 91: var20 = var3.Array;
                            var17 = var20.isArray;
                            var17 = var17.bind(var20)(var19);
                            if (var17) {
                                _fun5599_ip = 221;
                                continue _fun5599
                            }
                            case 110: var17 = typeof var19;
                            if (!(var4 !== var17)) {
                                _fun5599_ip = 126;
                                continue _fun5599
                            }
                            case 117: var0[var18] = var19;
                            var1 = var16;
                            _fun5599_ip = 42;
                            continue _fun5599;
                            case 126: var17 = {};
                            var24 = var19;
                            var20 = var16;
                            var1 = var20;
                            for (var21 in var24)
                                case 145: {
                                    var1 = var20;
                                    case 157: var28 = var21;
                                    var26 = var19[var28];
                                    var29 = _closure1_slot0;
                                    var27 = _closure1_slot1;
                                    var27 = var27[var5];
                                    var27 = var29.bind(var8)(var27);
                                    var29 = var26 instanceof var27;
                                    var27 = var26;
                                    if (!var29) {
                                        _fun5599_ip = 200;
                                        continue _fun5599
                                    }
                                    case 191: var29 = _closure2_slot0;
                                    var27 = var29.bind(var8)(var26);
                                    case 200: var17[var28] = var27;
                                    var20 = var26;
                                    _fun5599_ip = 145;
                                    continue _fun5599;
                                }
                            case 209: var0[var18] = var17;
                            var2 = var17;
                            _fun5599_ip = 42;
                            continue _fun5599;
                            case 221: var20 = var19.map;
                            var17 = function(arg0) { // Environment: var15
                                _fun5600: for (var _fun5600_ip = 0;;) switch (_fun5600_ip) {
                                    case 0:
                                        var3 = arg0;
                                        var1 = _closure1_slot0;
                                        var2 = _closure1_slot1;
                                        var0 = 8;
                                        var0 = var2[var0];
                                        var2 = undefined;
                                        var0 = var1.bind(var2)(var0);
                                        var1 = var3 instanceof var0;
                                        var0 = var3;
                                        if (!var1) {
                                            _fun5600_ip = 50;
                                            continue _fun5600
                                        }
                                    case 38:
                                        var1 = _closure2_slot0;
                                        var0 = var1.bind(var2)(var3);
                                    case 50:
                                        return var0;
                                }
                            };
                            var17 = var20.bind(var19)(var17);
                            var0[var18] = var17;
                            var1 = var16;
                            _fun5599_ip = 42;
                            continue _fun5599;
                            case 248: var17 = _closure2_slot0;
                            var17 = var17.bind(var8)(var19);
                            var0[var18] = var17;
                            var1 = var16;
                            _fun5599_ip = 42;
                            continue _fun5599;
                        }
                case 269:
                    return var0;
            }
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot12 = var0;
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
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 7;
    var3 = var5[var3];
    var6 = var4.bind(var0)(var3);
    var3 = 'nodes';
    var3 = var6.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 10;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var4 = function(arg0, arg1, arg2) { // Original name: AnimatedTransform, environment: var0
            _fun5602: for (var _fun5602_ip = 0;;) switch (_fun5602_ip) {
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
                    var0 = _closure1_slot10;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun5602_ip = 73;
                        continue _fun5602
                    }
                case 60:
                    var0 = var8.apply;
                    var0 = var0.bind(var8)(var4, var9);
                    _fun5602_ip = 107;
                    continue _fun5602;
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
                    var3 = _closure1_slot9;
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
                    var0._transforms = var1;
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
        var1 = '__makeNative';
        var5.key = var1;
        var1 = function(arg0) { // Original name: __makeNative, environment: var0
            _fun5603: for (var _fun5603_ip = 0;;) switch (_fun5603_ip) {
                case 0:
                    var3 = arg0;
                    var6 = this;
                    var2 = _closure1_slot8;
                    var4 = _closure1_slot9;
                    var0 = undefined;
                    var2 = var2.bind(var0)(var6, var4);
                    var5 = var2[var4];
                    var4 = var5.length;
                    var2 = 0;
                    var7 = var2 < var4;
                    if (!var7) {
                        _fun5603_ip = 65;
                        continue _fun5603
                    }
                case 43:
                    var8 = var5[var2];
                    var7 = var8.__makeNative;
                    var7 = var7.bind(var8)(var3);
                    var2 = var2 + 1;
                    if (var2 < var4) {
                        _fun5603_ip = 43;
                        continue _fun5603
                    }
                case 65:
                    var5 = _closure1_slot11;
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
        var5.value = var1;
        var1 = new Array(7);
        var1[0] = var5;
        var5 = {};
        var6 = '__getValue';
        var5.key = var6;
        var6 = function() { // Original name: __getValue, environment: var0
            var3 = _closure1_slot12;
            var0 = this;
            var2 = var0._transforms;
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
        var5.value = var6;
        var1[1] = var5;
        var5 = {};
        var6 = '__getValueWithStaticTransforms';
        var5.key = var6;
        var6 = function(arg0) { // Original name: __getValueWithStaticTransforms, environment: var0
            var1 = new Array(0);
            var _closure3_slot0 = var1;
            var3 = _closure1_slot12;
            var1 = this;
            var4 = var1._transforms;
            var2 = undefined;
            var1 = function(arg0) { // Environment: var0
                var3 = arg0;
                var2 = _closure3_slot0;
                var1 = var2.push;
                var0 = var3.__getValue;
                var0 = var0.bind(var3)();
                var0 = var1.bind(var2)(var0);
                var0 = undefined;
                return var0;
            };
            var1 = var3.bind(var2)(var4, var1);
            var1 = arg0;
            var0 = function() { // Environment: var0
                var1 = _closure3_slot0;
                var0 = var1.shift;
                var0 = var0.bind(var1)();
                return var0;
            };
            var0 = var3.bind(var2)(var1, var0);
            return var0;
        };
        var5.value = var6;
        var1[2] = var5;
        var5 = {};
        var6 = '__getAnimatedValue';
        var5.key = var6;
        var6 = function() { // Original name: __getAnimatedValue, environment: var0
            var3 = _closure1_slot12;
            var0 = this;
            var2 = var0._transforms;
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
        var1[3] = var5;
        var5 = {};
        var6 = '__attach';
        var5.key = var6;
        var6 = function() { // Original name: __attach, environment: var0
            _fun5611: for (var _fun5611_ip = 0;;) switch (_fun5611_ip) {
                case 0:
                    var5 = this;
                    var2 = _closure1_slot8;
                    var3 = _closure1_slot9;
                    var0 = undefined;
                    var2 = var2.bind(var0)(var5, var3);
                    var4 = var2[var3];
                    var3 = var4.length;
                    var2 = 0;
                    var6 = var2 < var3;
                    if (!var6) {
                        _fun5611_ip = 62;
                        continue _fun5611
                    }
                case 40:
                    var7 = var4[var2];
                    var6 = var7.__addChild;
                    var6 = var6.bind(var7)(var5);
                    var2 = var2 + 1;
                    if (var2 < var3) {
                        _fun5611_ip = 40;
                        continue _fun5611
                    }
                case 62:
                    var4 = _closure1_slot11;
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
        var1[4] = var5;
        var5 = {};
        var6 = '__detach';
        var5.key = var6;
        var6 = function() { // Original name: __detach, environment: var0
            _fun5612: for (var _fun5612_ip = 0;;) switch (_fun5612_ip) {
                case 0:
                    var5 = this;
                    var2 = _closure1_slot8;
                    var3 = _closure1_slot9;
                    var0 = undefined;
                    var2 = var2.bind(var0)(var5, var3);
                    var4 = var2[var3];
                    var3 = var4.length;
                    var2 = 0;
                    var6 = var2 < var3;
                    if (!var6) {
                        _fun5612_ip = 62;
                        continue _fun5612
                    }
                case 40:
                    var7 = var4[var2];
                    var6 = var7.__removeChild;
                    var6 = var6.bind(var7)(var5);
                    var2 = var2 + 1;
                    if (var2 < var3) {
                        _fun5612_ip = 40;
                        continue _fun5612
                    }
                case 62:
                    var4 = _closure1_slot11;
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
        var1[5] = var5;
        var5 = {};
        var6 = '__getNativeConfig';
        var5.key = var6;
        var6 = function() { // Original name: __getNativeConfig, environment: var0
            _fun5613: for (var _fun5613_ip = 0;;) switch (_fun5613_ip) {
                case 0:
                    var2 = this;
                    var1 = new Array(0);
                    var12 = var2._transforms;
                    var11 = var12.length;
                    var10 = 0;
                    var13 = var10 < var11;
                    var9 = undefined;
                    var8 = 'animated';
                    var7 = 'static';
                    var5 = 9;
                    var4 = 8;
                    var3 = undefined;
                    var0 = undefined;
                    if (!var13) {
                        _fun5613_ip = 243;
                        continue _fun5613
                    }
                case 53:
                    var20 = var12[var10];
                    var18 = var20;
                    var14 = var3;
                    var13 = var0;
                    var3 = var14;
                    var0 = var13;
                    for (var15 in var18)
                        case 83: {
                            var3 = var14;
                            var0 = var13;
                            case 101: var22 = var15;
                            var21 = var20[var22];
                            var24 = _closure1_slot0;
                            var23 = _closure1_slot1;
                            var23 = var23[var4];
                            var23 = var24.bind(var9)(var23);
                            var25 = var21 instanceof var23;
                            var24 = var1.push;
                            var23 = {};
                            if (var25) {
                                _fun5613_ip = 193;
                                continue _fun5613
                            }
                            case 139: var23.type = var7;
                            var23.property = var22;
                            var26 = _closure1_slot0;
                            var25 = _closure1_slot1;
                            var25 = var25[var5];
                            var26 = var26.bind(var9)(var25);
                            var25 = var26.transformDataType;
                            var25 = var25.bind(var26)(var21);
                            var23.value = var25;
                            var25 = var24.bind(var1)(var23);
                            var14 = var22;
                            var13 = var21;
                            _fun5613_ip = 83;
                            continue _fun5613;
                            case 193: var23.type = var8;
                            var23.property = var22;
                            var25 = var21.__getNativeTag;
                            var25 = var25.bind(var21)();
                            var23.nodeTag = var25;
                            var23 = var24.bind(var1)(var23);
                            var14 = var22;
                            var13 = var21;
                            _fun5613_ip = 83;
                            continue _fun5613;
                        }
                case 233:
                    var10 = var10 + 1;
                    if (var10 < var11) {
                        _fun5613_ip = 53;
                        continue _fun5613
                    }
                case 243:
                    var0 = {};
                    var3 = 'transform';
                    var0.type = var3;
                    var0.transforms = var1;
                    var1 = var2.__getDebugID;
                    var1 = var1.bind(var2)();
                    var0.debugID = var1;
                    return var0;
            }
        };
        var5.value = var6;
        var1[6] = var5;
        var5 = {};
        var6 = 'from';
        var5.key = var6;
        var0 = function(arg0) { // Original name: from, environment: var0
            _fun5614: for (var _fun5614_ip = 0;;) switch (_fun5614_ip) {
                case 0:
                    var4 = arg0;
                    var0 = global;
                    var1 = var0.Array;
                    var0 = var1.isArray;
                    var0 = var0.bind(var1)(var4);
                    var9 = var4;
                    if (var0) {
                        _fun5614_ip = 31;
                        continue _fun5614
                    }
                case 27:
                    var9 = new Array(0);
                case 31:
                    var3 = new Array(0);
                    var8 = var9.length;
                    var2 = 0;
                    var10 = var2 < var8;
                    var7 = undefined;
                    var5 = 8;
                    var1 = 0;
                    var0 = undefined;
                    if (!var10) {
                        _fun5614_ip = 150;
                        continue _fun5614
                    }
                case 61:
                    var16 = var9[var1];
                    var14 = var16;
                    var10 = var0;
                    var0 = var10;
                    for (var11 in var14)
                        case 82: {
                            var0 = var10;
                            case 94: var17 = var11;
                            var17 = var16[var17];
                            var19 = _closure1_slot0;
                            var18 = _closure1_slot1;
                            var18 = var18[var5];
                            var18 = var19.bind(var7)(var18);
                            var18 = var17 instanceof var18;
                            var10 = var17;
                            if (!var18) {
                                _fun5614_ip = 82;
                                continue _fun5614
                            }
                            case 128: var18 = var3.push;
                            var18 = var18.bind(var3)(var17);
                            var10 = var17;
                            _fun5614_ip = 82;
                            continue _fun5614;
                        }
                case 143:
                    var1 = var1 + 1;
                    if (var1 < var8) {
                        _fun5614_ip = 61;
                        continue _fun5614
                    }
                case 150:
                    var1 = var3.length;
                    var0 = null;
                    if (!(var2 !== var1)) {
                        _fun5614_ip = 194;
                        continue _fun5614
                    }
                case 161:
                    var1 = _closure2_slot0;
                    var2 = var1.prototype;
                    var2 = Object.create(var2, {
                        constructor: {
                            value: var1
                        }
                    });
                    var22 = var2;
                    var21 = var3;
                    var20 = var4;
                    var1 = new var22[var1](var21, var20, var19);
                    var0 = var1 instanceof Object ? var1 : var2;
                case 194:
                    return var0;
            }
        };
        var5.value = var0;
        var0 = new Array(1);
        var0[0] = var5;
        var0 = var2.bind(var3)(var4, var1, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 102, 18, 99, 100, 359, 349, 358]);