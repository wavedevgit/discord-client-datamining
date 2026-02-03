// utils/FileSizeUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var3 = function arg0() {
        _fun28912: for (var _fun28912_ip = 0;;) switch (_fun28912_ip) {
            case 0:
                var0 = arguments[1];
                var6 = undefined;
                if (!(var0 === var6)) {
                    _fun28912_ip = 16;
                    continue _fun28912
                }
            case 9:
                var0 = _closure1_slot3;
            case 16:
                var2 = var0.useKibibytes;
                var1 = 1000;
                var7 = var1;
                if (!var2) {
                    _fun28912_ip = 41;
                    continue _fun28912
                }
            case 34:
                var7 = _closure1_slot2;
            case 41:
                var2 = var0.useKibibytes;
                if (!var2) {
                    _fun28912_ip = 56;
                    continue _fun28912
                }
            case 50:
                var1 = 1024;
            case 56:
                var3 = global;
                var5 = var3.Math;
                var4 = var5.ceil;
                var2 = arg0;
                var2 = var2 / var7;
                var5 = var4.bind(var5)(var2);
                if (!(!(var5 < var1))) {
                    _fun28912_ip = 235;
                    continue _fun28912
                }
            case 89:
                var1 = var5 / var1;
                var2 = var0.showDecimalForGB;
                var4 = var3.Math;
                var3 = var4.round;
                if (var2) {
                    _fun28912_ip = 120;
                    continue _fun28912
                }
            case 113:
                var8 = var3.bind(var4)(var1);
                _fun28912_ip = 136;
                continue _fun28912;
            case 120:
                var2 = 10;
                var1 = var2 * var1;
                var1 = var3.bind(var4)(var1);
                var8 = var1 / var2;
            case 136:
                var1 = var0.useSpace;
                var3 = _closure1_slot0;
                var9 = _closure1_slot1;
                var2 = 0;
                var4 = var9[var2];
                var4 = var3.bind(var6)(var4);
                var7 = var4.intl;
                var4 = var7.formatToPlainString;
                var2 = var9[var2];
                var2 = var3.bind(var6)(var2);
                var2 = var2.t;
                if (var1) {
                    _fun28912_ip = 213;
                    continue _fun28912
                }
            case 191:
                var3 = var2.TbMX9D;
                var1 = {};
                var1.size = var8;
                var1 = var4.bind(var7)(var3, var1);
                _fun28912_ip = 233;
                continue _fun28912;
            case 213:
                var3 = var2.yhEXX7;
                var2 = {};
                var2.size = var8;
                var1 = var4.bind(var7)(var3, var2);
            case 233:
                return var1;
            case 235:
                var0 = var0.useSpace;
                var2 = _closure1_slot0;
                var7 = _closure1_slot1;
                var1 = 0;
                var3 = var7[var1];
                var3 = var2.bind(var6)(var3);
                var4 = var3.intl;
                var3 = var4.formatToPlainString;
                var1 = var7[var1];
                var1 = var2.bind(var6)(var1);
                var1 = var1.t;
                if (var0) {
                    _fun28912_ip = 310;
                    continue _fun28912
                }
            case 290:
                var2 = var1.pIn7Af;
                var0 = {};
                var0.size = var5;
                var0 = var3.bind(var4)(var2, var0);
                _fun28912_ip = 330;
                continue _fun28912;
            case 310:
                var2 = var1.cS889N;
                var1 = {};
                var1.size = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 330:
                return var0;
        }
    };
    var _closure1_slot4 = var3;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var4);
    var4 = 1024;
    var _closure1_slot2 = var4;
    var0 = {
        'useKibibytes': false,
        'showDecimalForGB': true,
        'useSpace': true
    };
    var _closure1_slot3 = var0;
    var0 = 1;
    var5 = var5[var0];
    var0 = undefined;
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'utils/FileSizeUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var2.BYTE_IN_KB = var4;
    var2.KB_IN_MB = var4;
    var2.formatSize = var3;
    var1 = function arg0() {
        _fun28913: for (var _fun28913_ip = 0;;) switch (_fun28913_ip) {
            case 0:
                var4 = arguments[1];
                var3 = undefined;
                if (!(var4 === var3)) {
                    _fun28913_ip = 16;
                    continue _fun28913
                }
            case 9:
                var4 = _closure1_slot3;
            case 16:
                var1 = var4.useKibibytes;
                var0 = 1000;
                var2 = var0;
                if (!var1) {
                    _fun28913_ip = 40;
                    continue _fun28913
                }
            case 34:
                var2 = 1024;
            case 40:
                var1 = arg0;
                var2 = var1 / var2;
                var1 = var4.useKibibytes;
                if (!var1) {
                    _fun28913_ip = 63;
                    continue _fun28913
                }
            case 56:
                var0 = _closure1_slot2;
            case 63:
                var1 = var2 / var0;
                var0 = 1;
                if (!(!(var1 >= var0))) {
                    _fun28913_ip = 214;
                    continue _fun28913
                }
            case 77:
                var0 = var4.useSpace;
                var5 = _closure1_slot0;
                var8 = _closure1_slot1;
                var1 = 0;
                var6 = var8[var1];
                var6 = var5.bind(var3)(var6);
                var7 = var6.intl;
                var6 = var7.formatToPlainString;
                var1 = var8[var1];
                var1 = var5.bind(var3)(var1);
                var1 = var1.t;
                if (var0) {
                    _fun28913_ip = 173;
                    continue _fun28913
                }
            case 132:
                var5 = var1.kEk9pr;
                var0 = {};
                var8 = global;
                var9 = var8.Math;
                var8 = var9.ceil;
                var8 = var8.bind(var9)(var2);
                var0.size = var8;
                var0 = var6.bind(var7)(var5, var0);
                _fun28913_ip = 212;
                continue _fun28913;
            case 173:
                var5 = var1.bTzRR6;
                var1 = {};
                var8 = global;
                var9 = var8.Math;
                var8 = var9.ceil;
                var8 = var8.bind(var9)(var2);
                var1.size = var8;
                var0 = var6.bind(var7)(var5, var1);
            case 212:
                _fun28913_ip = 227;
                continue _fun28913;
            case 214:
                var1 = _closure1_slot4;
                var0 = var1.bind(var3)(var2, var4);
            case 227:
                return var0;
        }
    };
    var2.formatKbSize = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1234, 2]);