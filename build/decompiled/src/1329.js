// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var3);
    var0 = undefined;
    var2.isOneofGroup = var0;
    var2.getOneofValue = var0;
    var2.setOneofValue = var0;
    var2.setUnknownOneofValue = var0;
    var2.clearOneofValue = var0;
    var2.getSelectedOneofValue = var0;
    var3 = function arg0() {
        _fun14939: for (var _fun14939_ip = 0;;) switch (_fun14939_ip) {
            case 0:
                var3 = arg0;
                var1 = 'object';
                var0 = typeof var3;
                if (!(var1 === var0)) {
                    _fun14939_ip = 156;
                    continue _fun14939
                }
            case 17:
                var0 = null;
                if (!(var0 !== var3)) {
                    _fun14939_ip = 156;
                    continue _fun14939
                }
            case 26:
                var1 = var3.hasOwnProperty;
                var0 = 'oneofKind';
                var0 = var1.bind(var3)(var0);
                if (!var0) {
                    _fun14939_ip = 156;
                    continue _fun14939
                }
            case 44:
                var0 = var3.oneofKind;
                var1 = typeof var0;
                var0 = 'string';
                if (!(var0 !== var1)) {
                    _fun14939_ip = 105;
                    continue _fun14939
                }
            case 61:
                var0 = 'undefined';
                if (!(var0 !== var1)) {
                    _fun14939_ip = 73;
                    continue _fun14939
                }
            case 69:
                var0 = false;
                return var0;
            case 73:
                var0 = global;
                var1 = var0.Object;
                var0 = var1.keys;
                var0 = var0.bind(var1)(var3);
                var1 = var0.length;
                var0 = 1;
                var0 = var0 == var1;
                return var0;
            case 105:
                var0 = var3.oneofKind;
                var1 = var3[var0];
                var0 = undefined;
                var0 = var0 !== var1;
                if (!var0) {
                    _fun14939_ip = 154;
                    continue _fun14939
                }
            case 124:
                var1 = global;
                var2 = var1.Object;
                var1 = var2.keys;
                var1 = var1.bind(var2)(var3);
                var2 = var1.length;
                var1 = 2;
                var0 = var1 == var2;
            case 154:
                return var0;
            case 156:
                var0 = false;
                return var0;
        }
    };
    var2.isOneofGroup = var3;
    var3 = function arg0, arg1() {
        var1 = arg0;
        var0 = arg1;
        var0 = var1[var0];
        return var0;
    };
    var2.getOneofValue = var3;
    var3 = function arg0, arg1, arg2() {
        _fun14941: for (var _fun14941_ip = 0;;) switch (_fun14941_ip) {
            case 0:
                var3 = arg0;
                var2 = arg1;
                var1 = arg2;
                var4 = var3.oneofKind;
                var0 = undefined;
                if (!(var0 !== var4)) {
                    _fun14941_ip = 31;
                    continue _fun14941
                }
            case 21:
                var4 = var3.oneofKind;
                var4 = delete var3[var4];
            case 31:
                var3.oneofKind = var2;
                if (!(var0 !== var1)) {
                    _fun14941_ip = 45;
                    continue _fun14941
                }
            case 41:
                var3[var2] = var1;
            case 45:
                return var0;
        }
    };
    var2.setOneofValue = var3;
    var3 = function arg0, arg1, arg2() {
        _fun14942: for (var _fun14942_ip = 0;;) switch (_fun14942_ip) {
            case 0:
                var3 = arg0;
                var2 = arg1;
                var1 = arg2;
                var4 = var3.oneofKind;
                var0 = undefined;
                if (!(var0 !== var4)) {
                    _fun14942_ip = 31;
                    continue _fun14942
                }
            case 21:
                var4 = var3.oneofKind;
                var4 = delete var3[var4];
            case 31:
                var3.oneofKind = var2;
                var4 = var0 !== var1;
                if (!var4) {
                    _fun14942_ip = 48;
                    continue _fun14942
                }
            case 44:
                var4 = var0 !== var2;
            case 48:
                if (!var4) {
                    _fun14942_ip = 55;
                    continue _fun14942
                }
            case 51:
                var3[var2] = var1;
            case 55:
                return var0;
        }
    };
    var2.setUnknownOneofValue = var3;
    var3 = function arg0() {
        _fun14943: for (var _fun14943_ip = 0;;) switch (_fun14943_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.oneofKind;
                var0 = undefined;
                if (!(var0 !== var2)) {
                    _fun14943_ip = 25;
                    continue _fun14943
                }
            case 15:
                var2 = var1.oneofKind;
                var2 = delete var1[var2];
            case 25:
                var1.oneofKind = var0;
                return var0;
        }
    };
    var2.clearOneofValue = var3;
    var1 = function arg0() {
        _fun14944: for (var _fun14944_ip = 0;;) switch (_fun14944_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.oneofKind;
                var0 = undefined;
                if (!(var0 === var2)) {
                    _fun14944_ip = 17;
                    continue _fun14944
                }
            case 15:
                return var0;
            case 17:
                var0 = var1.oneofKind;
                var0 = var1[var0];
                return var0;
        }
    };
    var2.getSelectedOneofValue = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);