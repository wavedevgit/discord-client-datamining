// utils/native/ChatInputUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var4 = function() {
        _fun33052: for (var _fun33052_ip = 0;;) switch (_fun33052_ip) {
            case 0:
                var9 = arguments[0];
                var4 = undefined;
                if (!(var9 === var4)) {
                    _fun33052_ip = 16;
                    continue _fun33052
                }
            case 9:
                var9 = _closure1_slot3;
            case 16:
                var0 = var9.size;
                var7 = 0;
                if (!(var7 !== var0)) {
                    _fun33052_ip = 140;
                    continue _fun33052
                }
            case 27:
                var1 = var9.has;
                var0 = 'voice-panel';
                var1 = var1.bind(var9)(var0);
                if (var1) {
                    _fun33052_ip = 188;
                    continue _fun33052
                }
            case 49:
                var2 = var9.has;
                var1 = 'message-request';
                var2 = var2.bind(var9)(var1);
                if (var2) {
                    _fun33052_ip = 186;
                    continue _fun33052
                }
            case 68:
                var3 = var9.has;
                var2 = 'new-message';
                var3 = var3.bind(var9)(var2);
                if (var3) {
                    _fun33052_ip = 184;
                    continue _fun33052
                }
            case 87:
                var3 = global;
                var8 = var3.Array;
                var6 = var8.from;
                var5 = var9.keys;
                var5 = var5.bind(var9)();
                var8 = var6.bind(var8)(var5);
                var6 = var8.filter;
                var5 = function(arg0) { // Environment: var5
                    _fun33053: for (var _fun33053_ip = 0;;) switch (_fun33053_ip) {
                        case 0:
                            var3 = arg0;
                            var1 = 'number';
                            var0 = typeof var3;
                            var0 = var1 === var0;
                            if (!var0) {
                                _fun33053_ip = 55;
                                continue _fun33053
                            }
                        case 17:
                            var4 = _closure1_slot0;
                            var2 = _closure1_slot1;
                            var1 = 0;
                            var2 = var2[var1];
                            var1 = undefined;
                            var2 = var4.bind(var1)(var2);
                            var1 = var2.isScreenIndexFrozen;
                            var1 = var1.bind(var2)(var3);
                            var0 = !var1;
                        case 55:
                            return var0;
                    }
                };
                var6 = var6.bind(var8)(var5);
                var5 = var6.length;
                if (!(var7 === var5)) {
                    _fun33052_ip = 142;
                    continue _fun33052
                }
            case 140:
                return var4;
            case 142:
                var5 = var3.Math;
                var4 = var5.max;
                var3 = new Array(0);
                var12 = var3;
                var11 = var6;
                var10 = 0;
                var6 = arraySpread(var12, var11, var10);
                var12 = var4;
                var11 = var3;
                var10 = var5;
                var3 = apply(var12, var11, var10);
                return var3;
            case 184:
                return var2;
            case 186:
                return var1;
            case 188:
                return var0;
        }
    };
    var _closure1_slot4 = var4;
    var0 = function arg0() {
        _fun33054: for (var _fun33054_ip = 0;;) switch (_fun33054_ip) {
            case 0:
                var2 = arg0;
                var1 = _closure1_slot4;
                var0 = undefined;
                var1 = var1.bind(var0)(var2);
                var3 = null;
                if (!(var3 == var1)) {
                    _fun33054_ip = 25;
                    continue _fun33054
                }
            case 23:
                return var0;
            case 25:
                var0 = var2.get;
                var0 = var0.bind(var2)(var1);
                return var0;
        }
    };
    var _closure1_slot5 = var0;
    var3 = function() {
        _fun33055: for (var _fun33055_ip = 0;;) switch (_fun33055_ip) {
            case 0:
                var2 = _closure1_slot5;
                var1 = _closure1_slot3;
                var0 = undefined;
                var3 = var2.bind(var0)(var1);
                var2 = null;
                var4 = var2 == var3;
                var1 = undefined;
                if (var4) {
                    _fun33055_ip = 34;
                    continue _fun33055
                }
            case 29:
                var1 = var3.current;
            case 34:
                var2 = var2 != var1;
                var0 = undefined;
                if (!var2) {
                    _fun33055_ip = 46;
                    continue _fun33055
                }
            case 43:
                var0 = var1;
            case 46:
                return var0;
        }
    };
    var _closure1_slot6 = var3;
    var0 = global;
    var10 = var0.Object;
    var9 = var10.defineProperty;
    var8 = {};
    var7 = true;
    var8.value = var7;
    var7 = '__esModule';
    var7 = var9.bind(var10)(var2, var7, var8);
    var7 = var0.Map;
    var8 = var7.prototype;
    var8 = Object.create(var8, {
        constructor: {
            value: var7
        }
    });
    var14 = var8;
    var7 = new var14[var7](var13);
    var7 = var7 instanceof Object ? var7 : var8;
    var _closure1_slot2 = var7;
    var0 = var0.Map;
    var7 = var0.prototype;
    var7 = Object.create(var7, {
        constructor: {
            value: var0
        }
    });
    var14 = var7;
    var0 = new var14[var0](var13);
    var0 = var0 instanceof Object ? var0 : var7;
    var _closure1_slot3 = var0;
    var0 = 6;
    var5 = var5[var0];
    var0 = undefined;
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'utils/native/ChatInputUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function arg0, arg1() {
        var0 = arg1;
        var _closure2_slot0 = var0;
        var0 = function arg0, arg1, arg2() {
            _fun33057: for (var _fun33057_ip = 0;;) switch (_fun33057_ip) {
                case 0:
                    var4 = arg0;
                    var6 = arg1;
                    var2 = arg2;
                    var3 = _closure1_slot2;
                    var1 = var3.get;
                    var5 = var1.bind(var3)(var6);
                    var1 = null;
                    if (!(var1 == var5)) {
                        _fun33057_ip = 60;
                        continue _fun33057
                    }
                case 32:
                    var1 = global;
                    var1 = var1.Map;
                    var3 = var1.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var1
                        }
                    });
                    var9 = var3;
                    var1 = new var9[var1](var8);
                    var5 = var1 instanceof Object ? var1 : var3;
                case 60:
                    var1 = var5.set;
                    var1 = var1.bind(var5)(var2, var4);
                    var3 = _closure1_slot2;
                    var1 = var3.set;
                    var1 = var1.bind(var3)(var6, var5);
                    var3 = _closure1_slot3;
                    var1 = var3.set;
                    var1 = var1.bind(var3)(var2, var4);
                    var1 = global;
                    var1 = var1.process;
                    var1 = var1.env;
                    var3 = var1.DEVELOPMENT;
                    var1 = 'development';
                    if (!(var1 === var3)) {
                        _fun33057_ip = 143;
                        continue _fun33057
                    }
                case 129:
                    var1 = _closure1_slot3;
                    var0 = var1.has;
                    var0 = var0.bind(var1)(var2);
                case 143:
                    var0 = undefined;
                    return var0;
            }
        };
        var _closure2_slot3 = var0;
        var0 = function arg0, arg1, arg2() {
            _fun33058: for (var _fun33058_ip = 0;;) switch (_fun33058_ip) {
                case 0:
                    var4 = arg1;
                    var2 = arg2;
                    var3 = _closure1_slot2;
                    var1 = var3.get;
                    var1 = var1.bind(var3)(var4);
                    var3 = null;
                    if (!(var3 != var1)) {
                        _fun33058_ip = 78;
                        continue _fun33058
                    }
                case 29:
                    var3 = var1.delete;
                    var3 = var3.bind(var1)(var2);
                    var3 = var1.size;
                    var1 = 0;
                    if (!(var1 === var3)) {
                        _fun33058_ip = 64;
                        continue _fun33058
                    }
                case 50:
                    var3 = _closure1_slot2;
                    var1 = var3.delete;
                    var1 = var1.bind(var3)(var4);
                case 64:
                    var1 = _closure1_slot3;
                    var0 = var1.delete;
                    var0 = var0.bind(var1)(var2);
                case 78:
                    var0 = undefined;
                    return var0;
            }
        };
        var _closure2_slot4 = var0;
        var0 = null;
        var _closure2_slot1 = var0;
        var0 = {};
        var2 = arg0;
        var0.current = var2;
        var _closure2_slot2 = var0;
        var0 = {};
        var2 = function arg0, arg1() {
            _fun33059: for (var _fun33059_ip = 0;;) switch (_fun33059_ip) {
                case 0:
                    var0 = arg0;
                    var5 = arg1;
                    var1 = _closure2_slot2;
                    var1.current = var5;
                    var1 = null;
                    if (!(var1 != var0)) {
                        _fun33059_ip = 76;
                        continue _fun33059
                    }
                case 25:
                    var3 = _closure2_slot1;
                    if (!(var1 != var3)) {
                        _fun33059_ip = 45;
                        continue _fun33059
                    }
                case 33:
                    var3 = _closure2_slot1;
                    var3.current = var0;
                    _fun33059_ip = 72;
                    continue _fun33059;
                case 45:
                    var6 = _closure2_slot3;
                    var4 = {};
                    var4.current = var0;
                    _closure2_slot1 = var4;
                    var3 = _closure2_slot0;
                    var0 = undefined;
                    var0 = var6.bind(var0)(var4, var5, var3);
                case 72:
                    var0 = undefined;
                    return var0;
                case 76:
                    var0 = _closure2_slot1;
                    if (!(var1 != var0)) {
                        _fun33059_ip = 107;
                        continue _fun33059
                    }
                case 84:
                    var4 = _closure2_slot4;
                    var3 = _closure2_slot0;
                    var0 = undefined;
                    var3 = var4.bind(var0)(var0, var5, var3);
                    _closure2_slot1 = var1;
                    return var0;
                case 107:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.handleRef = var2;
        var2 = function() {
            _fun33060: for (var _fun33060_ip = 0;;) switch (_fun33060_ip) {
                case 0:
                    var2 = _closure2_slot1;
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun33060_ip = 59;
                        continue _fun33060
                    }
                case 13:
                    var5 = _closure2_slot4;
                    var0 = _closure2_slot2;
                    var2 = var0.current;
                    var4 = _closure2_slot0;
                    var3 = undefined;
                    var2 = var5.bind(var3)(var3, var2, var4);
                    var2 = _closure2_slot3;
                    var1 = _closure2_slot1;
                    var0 = var0.current;
                    var0 = var2.bind(var3)(var1, var0, var4);
                case 59:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.register = var2;
        var1 = function() {
            _fun33061: for (var _fun33061_ip = 0;;) switch (_fun33061_ip) {
                case 0:
                    var2 = _closure2_slot1;
                    var1 = null;
                    if (!(var1 != var2)) {
                        _fun33061_ip = 39;
                        continue _fun33061
                    }
                case 13:
                    var3 = _closure2_slot4;
                    var1 = _closure2_slot2;
                    var2 = var1.current;
                    var1 = _closure2_slot0;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var0, var2, var1);
                case 39:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.unregister = var1;
        return var0;
    };
    var2.createInputRefTracker = var5;
    var2.getHighestActiveScreenIndex = var4;
    var4 = function arg0, arg1() {
        _fun33062: for (var _fun33062_ip = 0;;) switch (_fun33062_ip) {
            case 0:
                var3 = arg0;
                var2 = null;
                if (!(var2 == var3)) {
                    _fun33062_ip = 13;
                    continue _fun33062
                }
            case 9:
                var0 = undefined;
                return var0;
            case 13:
                var1 = _closure1_slot2;
                var0 = var1.get;
                var5 = var0.bind(var1)(var3);
                var3 = var2 == var5;
                var1 = undefined;
                if (var3) {
                    _fun33062_ip = 66;
                    continue _fun33062
                }
            case 39:
                var4 = var5.get;
                var3 = arg1;
                var3 = var4.bind(var5)(var3);
                var4 = var2 == var3;
                var1 = undefined;
                if (var4) {
                    _fun33062_ip = 66;
                    continue _fun33062
                }
            case 61:
                var1 = var3.current;
            case 66:
                var2 = var2 != var1;
                var0 = undefined;
                if (!var2) {
                    _fun33062_ip = 78;
                    continue _fun33062
                }
            case 75:
                var0 = var1;
            case 78:
                return var0;
        }
    };
    var2.getChatInputRef = var4;
    var4 = function arg0() {
        _fun33063: for (var _fun33063_ip = 0;;) switch (_fun33063_ip) {
            case 0:
                var4 = arg0;
                var2 = null;
                if (!(var2 != var4)) {
                    _fun33063_ip = 30;
                    continue _fun33063
                }
            case 9:
                var3 = _closure1_slot2;
                var1 = var3.get;
                var3 = var1.bind(var3)(var4);
                if (!(var2 == var3)) {
                    _fun33063_ip = 34;
                    continue _fun33063
                }
            case 30:
                var1 = undefined;
                return var1;
            case 34:
                var1 = _closure1_slot5;
                var0 = undefined;
                var3 = var1.bind(var0)(var3);
                var4 = var2 == var3;
                var1 = undefined;
                if (var4) {
                    _fun33063_ip = 59;
                    continue _fun33063
                }
            case 54:
                var1 = var3.current;
            case 59:
                var2 = var2 != var1;
                var0 = undefined;
                if (!var2) {
                    _fun33063_ip = 71;
                    continue _fun33063
                }
            case 68:
                var0 = var1;
            case 71:
                return var0;
        }
    };
    var2.getBestActiveInputForChannelId = var4;
    var2.getBestActiveInput = var3;
    var1 = function() {
        _fun33064: for (var _fun33064_ip = 0;;) switch (_fun33064_ip) {
            case 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 1;
                var2 = var2[var0];
                var0 = undefined;
                var3 = var3.bind(var0)(var2);
                var2 = var3.dismissGlobalKeyboard;
                var2 = var2.bind(var3)();
                var2 = _closure1_slot6;
                var3 = var2.bind(var0)();
                var2 = null;
                if (!(var2 != var3)) {
                    _fun33064_ip = 59;
                    continue _fun33064
                }
            case 49:
                var2 = var3.closeCustomKeyboard;
                var2 = var2.bind(var3)();
            case 59:
                var4 = _closure1_slot0;
                var2 = _closure1_slot1;
                var3 = 2;
                var3 = var2[var3];
                var5 = var4.bind(var0)(var3);
                var3 = var5.getKeyboardType;
                var3 = var3.bind(var5)();
                var7 = 3;
                var2 = var2[var7];
                var2 = var4.bind(var0)(var2);
                var2 = var2.KeyboardTypes;
                var2 = var2.SYSTEM;
                if (!(var3 !== var2)) {
                    _fun33064_ip = 175;
                    continue _fun33064
                }
            case 117:
                var6 = _closure1_slot0;
                var5 = _closure1_slot1;
                var2 = 4;
                var2 = var5[var2];
                var4 = var6.bind(var0)(var2);
                var3 = var4.setKeyboardType;
                var2 = {};
                var5 = var5[var7];
                var5 = var6.bind(var0)(var5);
                var5 = var5.KeyboardTypes;
                var5 = var5.SYSTEM;
                var2.type = var5;
                var2 = var3.bind(var4)(var2);
            case 175:
                var2 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 5;
                var1 = var3[var1];
                var2 = var2.bind(var0)(var1);
                var1 = var2.closePortalKeyboardRequest;
                var1 = var1.bind(var2)();
                return var0;
        }
    };
    var2.dismissKeyboard = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3710, 1582, 3905, 1567, 1467, 3906, 2]);