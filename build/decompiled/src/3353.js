// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun28930: for (var _fun28930_ip = 0;;) switch (_fun28930_ip) {
        case 0:
            var3 = require;
            var1 = dependencyMap;
            var _closure1_slot0 = var3;
            var _closure1_slot1 = var1;
            var0 = global;
            var4 = var0.Symbol;
            var5 = 'function';
            var4 = typeof var4;
            var4 = var5 === var4;
            if (!var4) {
                _fun28930_ip = 65;
                continue _fun28930
            }
        case 37:
            var7 = var0.Symbol;
            var6 = undefined;
            var5 = 'foo';
            var5 = var7.bind(var6)(var5);
            var6 = 'symbol';
            var5 = typeof var5;
            var4 = var6 === var5;
        case 65:
            var _closure1_slot2 = var4;
            var4 = var0.Object;
            var4 = var4.prototype;
            var4 = var4.toString;
            var _closure1_slot3 = var4;
            var0 = var0.Array;
            var0 = var0.prototype;
            var0 = var0.concat;
            var _closure1_slot4 = var0;
            var0 = 0;
            var1 = var1[var0];
            var0 = undefined;
            var1 = var3.bind(var0)(var1);
            var1 = var1.bind(var0)();
            var _closure1_slot5 = var1;
            var3 = function arg0, arg1, arg2, arg3() {
                _fun28931: for (var _fun28931_ip = 0;;) switch (_fun28931_ip) {
                    case 0:
                        var5 = arg0;
                        var4 = arg1;
                        var3 = arg2;
                        var1 = arg3;
                        var0 = var4 in var5;
                        if (!var0) {
                            _fun28931_ip = 88;
                            continue _fun28931
                        }
                    case 19:
                        var0 = true;
                        if (!(var0 !== var1)) {
                            _fun28931_ip = 80;
                            continue _fun28931
                        }
                    case 25:
                        var2 = 'function';
                        var0 = typeof var1;
                        var0 = var2 === var0;
                        if (!var0) {
                            _fun28931_ip = 64;
                            continue _fun28931
                        }
                    case 39:
                        var6 = _closure1_slot3;
                        var2 = var6.call;
                        var6 = var2.bind(var6)(var1);
                        var2 = '[object Function]';
                        var0 = var2 === var6;
                    case 64:
                        if (!var0) {
                            _fun28931_ip = 76;
                            continue _fun28931
                        }
                    case 67:
                        var0 = undefined;
                        var0 = var1.bind(var0)();
                        if (var0) {
                            _fun28931_ip = 88;
                            continue _fun28931
                        }
                    case 76:
                        var0 = undefined;
                        return var0;
                    case 80:
                        var0 = var5[var4];
                        if (!(var0 !== var3)) {
                            _fun28931_ip = 148;
                            continue _fun28931
                        }
                    case 88:
                        var1 = _closure1_slot5;
                        var6 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var0 = 1;
                        var2 = var2[var0];
                        var0 = undefined;
                        var2 = var6.bind(var0)(var2);
                        if (var1) {
                            _fun28931_ip = 129;
                            continue _fun28931
                        }
                    case 120:
                        var1 = var2.bind(var0)(var5, var4, var3);
                        _fun28931_ip = 146;
                        continue _fun28931;
                    case 129:
                        var7 = true;
                        var11 = undefined;
                        var10 = var5;
                        var9 = var4;
                        var8 = var3;
                        var1 = var11[var2](var10, var9, var8, var7, var6);
                    case 146:
                        return var0;
                    case 148:
                        var0 = undefined;
                        return var0;
                }
            };
            var _closure1_slot6 = var3;
            var2 = function arg0, arg1() {
                _fun28932: for (var _fun28932_ip = 0;;) switch (_fun28932_ip) {
                    case 0:
                        var8 = arg0;
                        var7 = arg1;
                        var0 = undefined;
                        var1 = undefined;
                        var2 = arguments.length;
                        var3 = 2;
                        if (!(!(var2 > var3))) {
                            _fun28932_ip = 24;
                            continue _fun28932
                        }
                    case 20:
                        var6 = {};
                        _fun28932_ip = 28;
                        continue _fun28932;
                    case 24:
                        var6 = arguments[var3];
                    case 28:
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot1;
                        var1 = var1[var3];
                        var1 = var2.bind(var0)(var1);
                        var9 = var1.bind(var0)(var7);
                        var1 = _closure1_slot2;
                        var4 = var9;
                        if (!var1) {
                            _fun28932_ip = 97;
                            continue _fun28932
                        }
                    case 63:
                        var3 = _closure1_slot4;
                        var2 = var3.call;
                        var1 = global;
                        var10 = var1.Object;
                        var1 = var10.getOwnPropertySymbols;
                        var1 = var1.bind(var10)(var7);
                        var4 = var2.bind(var3)(var9, var1);
                    case 97:
                        var1 = var4.length;
                        var3 = 0;
                        var1 = var3 < var1;
                        var2 = 1;
                        if (!var1) {
                            _fun28932_ip = 160;
                            continue _fun28932
                        }
                    case 114:
                        var11 = _closure1_slot6;
                        var14 = var4[var3];
                        var1 = var4[var3];
                        var13 = var7[var1];
                        var1 = var4[var3];
                        var12 = var6[var1];
                        var16 = undefined;
                        var15 = var8;
                        var1 = var16[var11](var15, var14, var13, var12, var11);
                        var3 = var3 + var2;
                        var1 = var4.length;
                        if (var3 < var1) {
                            _fun28932_ip = 114;
                            continue _fun28932
                        }
                    case 160:
                        return var0;
                }
            };
            var1 = !var1;
            var1 = !var1;
            var2.supportsDescriptors = var1;
            var1 = arg4;
            var1.exports = var2;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [1405, 1406, 3354]);