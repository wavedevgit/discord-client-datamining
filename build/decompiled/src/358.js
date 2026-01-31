// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var0 = function() {
        _fun5284: for (var _fun5284_ip = 0;;) switch (_fun5284_ip) {
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
                _fun5284_ip = 74;
                continue _fun5284;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot8 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot8 = var0;
    var0 = function arg0, arg1, arg2, arg3() {
        _fun5287: for (var _fun5287_ip = 0;;) switch (_fun5287_ip) {
            case 0:
                var4 = arg0;
                var6 = arg2;
                var _closure2_slot0 = var6;
                var5 = _closure1_slot4;
                var3 = _closure1_slot3;
                var0 = 1;
                var2 = 3;
                var7 = var0 & var2;
                var0 = var4;
                if (!var7) {
                    _fun5287_ip = 44;
                    continue _fun5287
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
                    _fun5287_ip = 97;
                    continue _fun5287
                }
            case 78:
                var3 = 'function';
                var2 = typeof var4;
                var0 = var4;
                if (!(var3 === var2)) {
                    _fun5287_ip = 97;
                    continue _fun5287
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
    var _closure1_slot9 = var0;
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
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot1 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 6;
    var6 = var5[var3];
    var6 = var4.bind(var0)(var6);
    var6 = var6.API;
    var6 = var6.connectAnimatedNodes;
    var _closure1_slot6 = var6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.API;
    var3 = var3.disconnectAnimatedNodes;
    var _closure1_slot7 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var3 = function() {
            _fun5290: for (var _fun5290_ip = 0;;) switch (_fun5290_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var8 = undefined;
                    var5 = _closure1_slot0;
                    var1 = _closure2_slot0;
                    var1 = var5.bind(var2)(var3, var1);
                    var5 = arguments.length;
                    var6 = global;
                    var1 = var6.Array;
                    var7 = var1.prototype;
                    var7 = Object.create(var7, {
                        constructor: {
                            value: var1
                        }
                    });
                    var13 = var7;
                    var12 = var5;
                    var1 = new var13[var1](var12, var11);
                    var7 = var1 instanceof Object ? var1 : var7;
                    var1 = 0;
                    var9 = var1 < var5;
                    if (!var9) {
                        _fun5290_ip = 85;
                        continue _fun5290
                    }
                case 70:
                    var9 = arguments[var1];
                    var7[var1] = var9;
                    var1 = var1 + 1;
                    if (var1 < var5) {
                        _fun5290_ip = 70;
                        continue _fun5290
                    }
                case 85:
                    var1 = _closure2_slot0;
                    var5 = new Array(0);
                    var0 = var5.concat;
                    var5 = var0.bind(var5)(var7);
                    var0 = _closure1_slot3;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot2;
                    var0 = _closure1_slot8;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun5290_ip = 140;
                        continue _fun5290
                    }
                case 127:
                    var0 = var8.apply;
                    var0 = var0.bind(var8)(var3, var5);
                    _fun5290_ip = 179;
                    continue _fun5290;
                case 140:
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    if (var5) {
                        _fun5290_ip = 158;
                        continue _fun5290
                    }
                case 154:
                    var5 = new Array(0);
                case 158:
                    var4 = _closure1_slot3;
                    var4 = var4.bind(var2)(var3);
                    var4 = var4.constructor;
                    var0 = var6.bind(var7)(var8, var5, var4);
                case 179:
                    var0 = var1.bind(var2)(var3, var0);
                    var1 = new Array(0);
                    var0._children = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot5;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot1;
        var4 = {};
        var0 = '__makeNative';
        var4.key = var0;
        var0 = function arg0() {
            _fun5291: for (var _fun5291_ip = 0;;) switch (_fun5291_ip) {
                case 0:
                    var3 = arg0;
                    var6 = this;
                    var0 = var6.__isNative;
                    if (var0) {
                        _fun5291_ip = 106;
                        continue _fun5291
                    }
                case 15:
                    var0 = true;
                    var6.__isNative = var0;
                    var5 = var6._children;
                    var4 = var5.length;
                    var2 = 0;
                    if (!(var4 > var2)) {
                        _fun5291_ip = 106;
                        continue _fun5291
                    }
                case 40:
                    var7 = var2 < var4;
                    var0 = undefined;
                    var2 = 0;
                    if (!var7) {
                        _fun5291_ip = 106;
                        continue _fun5291
                    }
                case 54:
                    var10 = var5[var2];
                    var7 = var10.__makeNative;
                    var7 = var7.bind(var10)(var3);
                    var9 = _closure1_slot6;
                    var7 = var6.__getNativeTag;
                    var8 = var7.bind(var6)();
                    var7 = var10.__getNativeTag;
                    var7 = var7.bind(var10)();
                    var7 = var9.bind(var0)(var8, var7);
                    var2 = var2 + 1;
                    if (var2 < var4) {
                        _fun5291_ip = 54;
                        continue _fun5291
                    }
                case 106:
                    var5 = _closure1_slot9;
                    var14 = _closure2_slot0;
                    var0 = undefined;
                    var13 = '__makeNative';
                    var11 = 3;
                    var15 = undefined;
                    var12 = var6;
                    var2 = var15[var5](var14, var13, var12, var11, var10);
                    var1 = new Array(1);
                    var1[0] = var3;
                    var1 = var2.bind(var0)(var1);
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(5);
        var0[0] = var4;
        var4 = {};
        var6 = '__addChild';
        var4.key = var6;
        var6 = function arg0() {
            _fun5292: for (var _fun5292_ip = 0;;) switch (_fun5292_ip) {
                case 0:
                    var1 = arg0;
                    var2 = this;
                    var0 = var2._children;
                    var3 = var0.length;
                    var0 = 0;
                    if (!(var0 === var3)) {
                        _fun5292_ip = 33;
                        continue _fun5292
                    }
                case 23:
                    var0 = var2.__attach;
                    var0 = var0.bind(var2)();
                case 33:
                    var3 = var2._children;
                    var0 = var3.push;
                    var0 = var0.bind(var3)(var1);
                    var0 = var2.__isNative;
                    if (!var0) {
                        _fun5292_ip = 114;
                        continue _fun5292
                    }
                case 58:
                    var3 = var1.__makeNative;
                    var0 = var2.__getPlatformConfig;
                    var0 = var0.bind(var2)();
                    var0 = var3.bind(var1)(var0);
                    var3 = _closure1_slot6;
                    var0 = var2.__getNativeTag;
                    var2 = var0.bind(var2)();
                    var0 = var1.__getNativeTag;
                    var1 = var0.bind(var1)();
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2, var1);
                case 114:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = '__removeChild';
        var4.key = var6;
        var6 = function arg0() {
            _fun5293: for (var _fun5293_ip = 0;;) switch (_fun5293_ip) {
                case 0:
                    var2 = arg0;
                    var1 = this;
                    var3 = var1._children;
                    var0 = var3.indexOf;
                    var4 = var0.bind(var3)(var2);
                    var0 = -1;
                    if (!(var0 === var4)) {
                        _fun5293_ip = 59;
                        continue _fun5293
                    }
                case 33:
                    var0 = global;
                    var5 = var0.console;
                    var3 = var5.warn;
                    var0 = "Trying to remove a child that doesn't exist";
                    var0 = var3.bind(var5)(var0);
                    _fun5293_ip = 160;
                    continue _fun5293;
                case 59:
                    var0 = var1.__isNative;
                    if (!var0) {
                        _fun5293_ip = 74;
                        continue _fun5293
                    }
                case 68:
                    var0 = var2.__isNative;
                case 74:
                    if (!var0) {
                        _fun5293_ip = 112;
                        continue _fun5293
                    }
                case 77:
                    var5 = _closure1_slot7;
                    var0 = var1.__getNativeTag;
                    var3 = var0.bind(var1)();
                    var0 = var2.__getNativeTag;
                    var2 = var0.bind(var2)();
                    var0 = undefined;
                    var0 = var5.bind(var0)(var3, var2);
                case 112:
                    var3 = var1._children;
                    var2 = var3.splice;
                    var0 = 1;
                    var0 = var2.bind(var3)(var4, var0);
                    var0 = var1._children;
                    var2 = var0.length;
                    var0 = 0;
                    if (!(var0 === var2)) {
                        _fun5293_ip = 160;
                        continue _fun5293
                    }
                case 150:
                    var0 = var1.__detach;
                    var0 = var0.bind(var1)();
                case 160:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = '__getChildren';
        var4.key = var6;
        var6 = function() {
            var0 = this;
            var0 = var0._children;
            return var0;
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = '__callListeners';
        var4.key = var6;
        var5 = function arg0() {
            _fun5295: for (var _fun5295_ip = 0;;) switch (_fun5295_ip) {
                case 0:
                    var1 = this;
                    var5 = _closure1_slot9;
                    var10 = _closure2_slot0;
                    var0 = undefined;
                    var9 = '__callListeners';
                    var7 = 3;
                    var11 = undefined;
                    var8 = var1;
                    var3 = var11[var5](var10, var9, var8, var7, var6);
                    var2 = new Array(1);
                    var4 = arg0;
                    var2[0] = var4;
                    var2 = var3.bind(var0)(var2);
                    var2 = var1.__isNative;
                    if (var2) {
                        _fun5295_ip = 121;
                        continue _fun5295
                    }
                case 60:
                    var3 = var1._children;
                    var2 = var3.length;
                    var1 = 0;
                    var4 = var1 < var2;
                    if (!var4) {
                        _fun5295_ip = 121;
                        continue _fun5295
                    }
                case 80:
                    var6 = var3[var1];
                    var4 = var6.__getValue;
                    if (!var4) {
                        _fun5295_ip = 114;
                        continue _fun5295
                    }
                case 93:
                    var5 = var6.__callListeners;
                    var4 = var6.__getValue;
                    var4 = var4.bind(var6)();
                    var4 = var5.bind(var6)(var4);
                case 114:
                    var1 = var1 + 1;
                    if (var1 < var2) {
                        _fun5295_ip = 80;
                        continue _fun5295
                    }
                case 121:
                    return var0;
            }
        };
        var4.value = var5;
        var0[4] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 102, 18, 349, 359]);