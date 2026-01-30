// utils/SecondaryIndexMapUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = global;
    var4 = var0.Object;
    var3 = var4.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var4)(var2, var0, var1);
    var1 = dependencyMap;
    var0 = 0;
    var3 = var1[var0];
    var1 = require;
    var0 = undefined;
    var4 = var1.bind(var0)(var3);
    var3 = var4.fileFinishedImporting;
    var1 = 'utils/SecondaryIndexMapUtils.tsx';
    var1 = var3.bind(var4)(var1);
    var1 = function(arg0, arg1) { // Original name: isVersionEqual, environment: var1
        _fun67685: for (var _fun67685_ip = 0;;) switch (_fun67685_ip) {
            case 0:
                var4 = arg0;
                var1 = var4[Symbol.iterator];
                var4 = var1().next;
                var11 = undefined;
                var2 = undefined;
                var3 = undefined;
                var5 = var4().value;
                var8 = var1;
                var8 = var8 === var11;
                var2 = var8;
                if (var8) {
                    _fun67685_ip = 32;
                    continue _fun67685
                }
            case 29:
                var3 = var5;
            case 32:
                var3 = undefined;
                var5 = var2;
                if (var5) {
                    _fun67685_ip = 60;
                    continue _fun67685
                }
            case 40:
                var4 = var4().value;
                var5 = var1;
                var5 = var5 === var11;
                var2 = var5;
                if (var5) {
                    _fun67685_ip = 60;
                    continue _fun67685
                }
            case 57:
                var3 = var4;
            case 60:
                var7 = var3;
                var3 = var2;
                if (var3) {
                    _fun67685_ip = 72;
                    continue _fun67685
                }
            case 69:
                var1.return();
            case 72:
                var9 = arg1;
                var4 = var9[Symbol.iterator];
                var9 = var4().next;
                var5 = undefined;
                var8 = undefined;
                var10 = var9().value;
                var12 = var4;
                var12 = var12 === var11;
                var5 = var12;
                if (var12) {
                    _fun67685_ip = 102;
                    continue _fun67685
                }
            case 99:
                var8 = var10;
            case 102:
                var8 = undefined;
                var10 = var5;
                if (var10) {
                    _fun67685_ip = 130;
                    continue _fun67685
                }
            case 110:
                var9 = var9().value;
                var10 = var4;
                var10 = var10 === var11;
                var5 = var10;
                if (var10) {
                    _fun67685_ip = 130;
                    continue _fun67685
                }
            case 127:
                var8 = var9;
            case 130:
                var6 = var8;
                var8 = var5;
                if (var8) {
                    _fun67685_ip = 142;
                    continue _fun67685
                }
            case 139:
                var4.return();
            case 142:
                var6 = var7 === var6;
                return var6;
            case 148:
                CatchBlockStart(arg_register = 3);
                if (var5) {
                    _fun67685_ip = 156;
                    continue _fun67685
                }
            case 153:
                var4.return();
            case 156:
                throw var3;
            case 158:
                CatchBlockStart(arg_register = 0);
                if (var2) {
                    _fun67685_ip = 166;
                    continue _fun67685
                }
            case 163:
                var1.return();
            case 166:
                throw var0;
        }
    };
    var2.isVersionEqual = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);