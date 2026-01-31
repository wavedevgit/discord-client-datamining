// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
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
    var1 = function() { // Environment: var1
        var3 = _closure1_slot3;
        var2 = function() {
            _fun5996: for (var _fun5996_ip = 0;;) switch (_fun5996_ip) {
                case 0:
                    var2 = this;
                    var _closure3_slot0 = var2;
                    var5 = _closure1_slot2;
                    var3 = _closure2_slot0;
                    var0 = undefined;
                    var3 = var5.bind(var0)(var2, var3);
                    var8 = null;
                    var2.currentState = var8;
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var3 = 2;
                    var5 = var5[var3];
                    var5 = var6.bind(var0)(var5);
                    if (!(var8 != var5)) {
                        _fun5996_ip = 226;
                        continue _fun5996
                    }
                case 66:
                    var5 = true;
                    var2.isAvailable = var5;
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var4 = 3;
                    var4 = var7[var4];
                    var4 = var6.bind(var0)(var4);
                    var5 = var4.prototype;
                    var5 = Object.create(var5, {
                        constructor: {
                            value: var4
                        }
                    });
                    var12 = var5;
                    var11 = null;
                    var4 = new var12[var4](var11, var10);
                    var9 = var4 instanceof Object ? var4 : var5;
                    var _closure3_slot1 = var9;
                    var2._emitter = var9;
                    var4 = var7[var3];
                    var5 = var6.bind(var0)(var4);
                    var4 = var5.getConstants;
                    var4 = var4.bind(var5)();
                    var4 = var4.initialAppState;
                    var2.currentState = var4;
                    var4 = false;
                    var _closure3_slot2 = var4;
                    var8 = var9.addListener;
                    var5 = 'appStateDidChange';
                    var4 = function(arg0) { // Environment: var1
                        var1 = true;
                        _closure3_slot2 = var1;
                        var1 = _closure3_slot0;
                        var0 = arg0;
                        var0 = var0.app_state;
                        var1.currentState = var0;
                        var0 = undefined;
                        return var0;
                    };
                    var4 = var8.bind(var9)(var5, var4);
                    var3 = var7[var3];
                    var5 = var6.bind(var0)(var3);
                    var4 = var5.getCurrentAppState;
                    var3 = 4;
                    var3 = var7[var3];
                    var3 = var6.bind(var0)(var3);
                    var1 = function(arg0) { // Environment: var1
                        _fun5998: for (var _fun5998_ip = 0;;) switch (_fun5998_ip) {
                            case 0:
                                var3 = arg0;
                                var1 = _closure3_slot2;
                                if (var1) {
                                    _fun5998_ip = 33;
                                    continue _fun5998
                                }
                            case 13:
                                var2 = _closure3_slot0;
                                var4 = var2.currentState;
                                var2 = var3.app_state;
                                var1 = var4 === var2;
                            case 33:
                                if (var1) {
                                    _fun5998_ip = 74;
                                    continue _fun5998
                                }
                            case 36:
                                var2 = _closure3_slot0;
                                var1 = var3.app_state;
                                var2.currentState = var1;
                                var2 = _closure3_slot1;
                                var1 = var2.emit;
                                var0 = 'appStateDidChange';
                                var0 = var1.bind(var2)(var0, var3);
                            case 74:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var1 = var4.bind(var5)(var1, var3);
                    _fun5996_ip = 234;
                    continue _fun5996;
                case 226:
                    var1 = false;
                    var2.isAvailable = var1;
                case 234:
                    return var0;
            }
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var4 = 'addEventListener';
        var0.key = var4;
        var1 = function arg0, arg1() {
            _fun5999: for (var _fun5999_ip = 0;;) switch (_fun5999_ip) {
                case 0:
                    var5 = arg0;
                    var1 = arg1;
                    var _closure3_slot0 = var5;
                    var2 = this;
                    var3 = var2._emitter;
                    var2 = null;
                    if (!(var2 != var3)) {
                        _fun5999_ip = 176;
                        continue _fun5999
                    }
                case 30:
                    var2 = 'change';
                    if (!(var2 !== var5)) {
                        _fun5999_ip = 147;
                        continue _fun5999
                    }
                case 38:
                    var4 = 'memoryWarning';
                    if (!(var4 !== var5)) {
                        _fun5999_ip = 133;
                        continue _fun5999
                    }
                case 48:
                    var2 = 'blur';
                    if (!(var2 !== var5)) {
                        _fun5999_ip = 104;
                        continue _fun5999
                    }
                case 56:
                    var2 = 'focus';
                    if (!(var2 !== var5)) {
                        _fun5999_ip = 104;
                        continue _fun5999
                    }
                case 64:
                    var2 = global;
                    var6 = var2.Error;
                    var2 = 'Trying to subscribe to unknown event: ';
                    var8 = var2 + var5;
                    var5 = var6.prototype;
                    var5 = Object.create(var5, {
                        constructor: {
                            value: var6
                        }
                    });
                    var9 = var5;
                    var2 = new var9[var6](var8, var7);
                    var2 = var2 instanceof Object ? var2 : var5;
                    throw var2;
                case 104:
                    var _closure3_slot2 = var1;
                    var6 = var3.addListener;
                    var5 = 'appStateFocusChange';
                    var2 = function(arg0) { // Environment: var0
                        _fun6001: for (var _fun6001_ip = 0;;) switch (_fun6001_ip) {
                            case 0:
                                var2 = arg0;
                                var3 = _closure3_slot0;
                                var1 = 'blur';
                                var1 = var1 !== var3;
                                if (var1) {
                                    _fun6001_ip = 24;
                                    continue _fun6001
                                }
                            case 21:
                                var1 = var2;
                            case 24:
                                if (var1) {
                                    _fun6001_ip = 37;
                                    continue _fun6001
                                }
                            case 27:
                                var3 = _closure3_slot2;
                                var1 = undefined;
                                var1 = var3.bind(var1)();
                            case 37:
                                var3 = _closure3_slot0;
                                var1 = 'focus';
                                var1 = var1 === var3;
                                if (!var1) {
                                    _fun6001_ip = 55;
                                    continue _fun6001
                                }
                            case 52:
                                var1 = var2;
                            case 55:
                                if (!var1) {
                                    _fun6001_ip = 68;
                                    continue _fun6001
                                }
                            case 58:
                                var1 = _closure3_slot2;
                                var0 = undefined;
                                var0 = var1.bind(var0)();
                            case 68:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var2 = var6.bind(var3)(var5, var2);
                    return var2;
                case 133:
                    var2 = var3.addListener;
                    var2 = var2.bind(var3)(var4, var1);
                    return var2;
                case 147:
                    var _closure3_slot1 = var1;
                    var2 = var3.addListener;
                    var1 = 'appStateDidChange';
                    var0 = function(arg0) { // Environment: var0
                        var2 = _closure3_slot1;
                        var0 = arg0;
                        var1 = var0.app_state;
                        var0 = undefined;
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                case 176:
                    var0 = global;
                    var2 = var0.Error;
                    var0 = var2.prototype;
                    var1 = Object.create(var0, {
                        constructor: {
                            value: var2
                        }
                    });
                    var8 = 'Cannot use AppState when `isAvailable` is false.';
                    var9 = var1;
                    var0 = new var9[var2](var8, var7);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
            }
        };
        var0.value = var1;
        var1 = new Array(1);
        var1[0] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var3 = var1.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var1
        }
    });
    var11 = var3;
    var1 = new var11[var1](var10);
    var1 = var1 instanceof Object ? var1 : var3;
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 439, 209, 441]);