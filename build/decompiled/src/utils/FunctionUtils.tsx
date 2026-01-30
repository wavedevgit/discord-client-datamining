// utils/FunctionUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var3 = function(arg0, arg1) { // Original name: areArraysShallowlyEqual, environment: var1
        _fun19004: for (var _fun19004_ip = 0;;) switch (_fun19004_ip) {
            case 0:
                var3 = arg0;
                var2 = arg1;
                if (!(var3 !== var2)) {
                    _fun19004_ip = 79;
                    continue _fun19004
                }
            case 10:
                var0 = null;
                if (!(var0 != var3)) {
                    _fun19004_ip = 75;
                    continue _fun19004
                }
            case 16:
                if (!(var0 != var2)) {
                    _fun19004_ip = 75;
                    continue _fun19004
                }
            case 20:
                var1 = var3.length;
                var0 = var2.length;
                if (!(var1 === var0)) {
                    _fun19004_ip = 75;
                    continue _fun19004
                }
            case 34:
                var1 = var3.length;
                var0 = 0;
                var4 = var0 < var1;
                if (!var4) {
                    _fun19004_ip = 67;
                    continue _fun19004
                }
            case 48:
                var5 = var3[var0];
                var4 = var2[var0];
                if (!(var5 === var4)) {
                    _fun19004_ip = 71;
                    continue _fun19004
                }
            case 60:
                var0 = var0 + 1;
                if (var0 < var1) {
                    _fun19004_ip = 48;
                    continue _fun19004
                }
            case 67:
                var0 = true;
                return var0;
            case 71:
                var0 = false;
                return var0;
            case 75:
                var0 = false;
                return var0;
            case 79:
                var0 = true;
                return var0;
        }
    };
    var _closure1_slot0 = var3;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var4);
    var4 = arg6;
    var0 = 0;
    var5 = var4[var0];
    var4 = arg1;
    var0 = undefined;
    var6 = var4.bind(var0)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'utils/FunctionUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var2.areArraysShallowlyEqual = var3;
    var3 = function(arg0) { // Original name: cachedFunction, environment: var1
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = null;
        var _closure2_slot1 = var1;
        var _closure2_slot2 = var1;
        var0 = function(arg0) { // Environment: var0
            _fun19006: for (var _fun19006_ip = 0;;) switch (_fun19006_ip) {
                case 0:
                    var8 = 0;
                    var1 = copyRestArgs(var8);
                    var3 = _closure1_slot0;
                    var2 = _closure2_slot1;
                    var4 = undefined;
                    var2 = var3.bind(var4)(var2, var1);
                    if (var2) {
                        _fun19006_ip = 67;
                        continue _fun19006
                    }
                case 31:
                    var3 = _closure2_slot0;
                    var2 = new Array(0);
                    var8 = var2;
                    var7 = var1;
                    var6 = 0;
                    var5 = arraySpread(var8, var7, var6);
                    var8 = var3;
                    var7 = var2;
                    var6 = undefined;
                    var2 = apply(var8, var7, var6);
                    _closure2_slot2 = var2;
                case 67:
                    _closure2_slot1 = var1;
                    var0 = _closure2_slot2;
                    return var0;
            }
        };
        return var0;
    };
    var2.cachedFunction = var3;
    var3 = function(arg0) { // Original name: promiseThrottle, environment: var1
        _fun19007: for (var _fun19007_ip = 0;;) switch (_fun19007_ip) {
            case 0:
                var1 = arguments[1];
                var2 = arg0;
                var _closure2_slot0 = var2;
                var2 = undefined;
                if (!(var1 === var2)) {
                    _fun19007_ip = 24;
                    continue _fun19007
                }
            case 18:
                var1 = 5000;
            case 24:
                var _closure2_slot1 = var1;
                var1 = -1;
                var _closure2_slot2 = var1;
                var1 = null;
                var _closure2_slot3 = var1;
                var0 = function() { // Environment: var0
                    _fun19008: for (var _fun19008_ip = 0;;) switch (_fun19008_ip) {
                        case 0:
                            var2 = _closure2_slot3;
                            var1 = null;
                            var1 = var1 == var2;
                            if (var1) {
                                _fun19008_ip = 41;
                                continue _fun19008
                            }
                        case 16:
                            var2 = global;
                            var3 = var2.Date;
                            var2 = var3.now;
                            var3 = var2.bind(var3)();
                            var2 = _closure2_slot2;
                            var1 = var3 >= var2;
                        case 41:
                            if (!var1) {
                                _fun19008_ip = 87;
                                continue _fun19008
                            }
                        case 44:
                            var1 = global;
                            var2 = var1.Date;
                            var1 = var2.now;
                            var2 = var1.bind(var2)();
                            var1 = _closure2_slot1;
                            var1 = var2 + var1;
                            _closure2_slot2 = var1;
                            var2 = _closure2_slot0;
                            var1 = undefined;
                            var1 = var2.bind(var1)();
                            _closure2_slot3 = var1;
                        case 87:
                            var0 = _closure2_slot3;
                            return var0;
                    }
                };
                return var0;
        }
    };
    var2.promiseThrottle = var3;
    var3 = function(arg0) { // Original name: clearObject, environment: var1
        _fun19009: for (var _fun19009_ip = 0;;) switch (_fun19009_ip) {
            case 0:
                var5 = arg0;
                var3 = var5;
                for (var0 in var3)
                    case 14: {
                        case 23: var6 = var0;
                        var7 = var5.hasOwnProperty;
                        var7 = var7.bind(var5)(var6);
                        if (!var7) {
                            _fun19009_ip = 14;
                            continue _fun19009
                        }
                        case 40: var6 = delete var5[var6];
                        _fun19009_ip = 14;
                        continue _fun19009;
                    }
            case 46:
                var0 = undefined;
                return var0;
        }
    };
    var2.clearObject = var3;
    var1 = function(arg0) { // Original name: isPlainObjectEmpty, environment: var1
        _fun19010: for (var _fun19010_ip = 0;;) switch (_fun19010_ip) {
            case 0:
                var3 = arg0;
                for (var0 in var3)
                    case 11: {
                        case 20: var0 = false;
                        return var0;
                    }
            case 24:
                var0 = true;
                return var0;
        }
    };
    var2.isPlainObjectEmpty = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);