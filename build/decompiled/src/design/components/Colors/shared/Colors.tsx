// design/components/Colors/shared/Colors.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function arg0() {
        var1 = arg0;
        var0 = var1.rgba;
        var3 = var0.bind(var1)();
        var2 = _closure1_slot2;
        var1 = undefined;
        var0 = 4;
        var1 = var2.bind(var1)(var3, var0);
        var0 = 0;
        var15 = var1[var0];
        var0 = 1;
        var13 = var1[var0];
        var0 = 2;
        var11 = var1[var0];
        var0 = 3;
        var9 = var1[var0];
        var0 = global;
        var0 = var0.HermesInternal;
        var3 = var0.concat;
        var16 = 'rgba(';
        var1 = ', ';
        var8 = ')';
        var14 = var1;
        var12 = var1;
        var10 = var1;
        var0 = var16[var3](var15, var14, var13, var12, var11, var10, var9, var8, var7);
        return var0;
    };
    var _closure1_slot4 = var0;
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
    var3 = {
        'NonText': 3,
        'Text': 4.5,
        'HighContrastText': 7
    };
    var _closure1_slot3 = var3;
    var4 = 2;
    var5 = var5[var4];
    var4 = arg1;
    var6 = var4.bind(var0)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'design/components/Colors/shared/Colors.tsx';
    var4 = var5.bind(var6)(var4);
    var2.WCAGContrastRatios = var3;
    var3 = function arg0() {
        _fun27758: for (var _fun27758_ip = 0;;) switch (_fun27758_ip) {
            case 0:
                var5 = arg0;
                var1 = arguments[1];
                var2 = undefined;
                if (!(var1 === var2)) {
                    _fun27758_ip = 14;
                    continue _fun27758
                }
            case 12:
                var1 = {};
            case 14:
                var12 = var1.contrastRatio;
                var6 = null;
                if (!(var6 == var12)) {
                    _fun27758_ip = 39;
                    continue _fun27758
                }
            case 26:
                var0 = _closure1_slot3;
                var12 = var0.NonText;
            case 39:
                var0 = var1.tolerance;
                var3 = var6 != var0;
                var11 = 3;
                if (!var3) {
                    _fun27758_ip = 60;
                    continue _fun27758
                }
            case 57:
                var11 = var0;
            case 60:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var10 = 1;
                var3 = var3[var10];
                var3 = var4.bind(var2)(var3);
                var4 = var1.base;
                var1 = var5;
                if (!(var6 != var4)) {
                    _fun27758_ip = 99;
                    continue _fun27758
                }
            case 96:
                var1 = var4;
            case 99:
                var9 = var3.bind(var2)(var1);
                var4 = _closure1_slot0;
                var1 = _closure1_slot1;
                var3 = var1[var10];
                var3 = var4.bind(var2)(var3);
                var3 = var3.bind(var2)(var5);
                var5 = var9.luminance;
                var8 = var5.bind(var9)();
                var1 = var1[var10];
                var4 = var4.bind(var2)(var1);
                var1 = var4.contrast;
                var4 = var1.bind(var4)(var9, var3);
                var7 = 99;
                var6 = 0;
                var5 = var3;
            case 165:
                var13 = var4 < var12;
                var1 = var12 + var11;
                var14 = var4 > var1;
                if (var13) {
                    _fun27758_ip = 186;
                    continue _fun27758
                }
            case 180:
                var1 = var5;
                if (!var14) {
                    _fun27758_ip = 279;
                    continue _fun27758
                }
            case 186:
                var3 = var5.luminance;
                var3 = var3.bind(var5)();
                var3 = var3 > var8;
                if (!var14) {
                    _fun27758_ip = 206;
                    continue _fun27758
                }
            case 203:
                if (var3) {
                    _fun27758_ip = 224;
                    continue _fun27758
                }
            case 206:
                if (!var13) {
                    _fun27758_ip = 212;
                    continue _fun27758
                }
            case 209:
                if (!var3) {
                    _fun27758_ip = 224;
                    continue _fun27758
                }
            case 212:
                var3 = var5.brighten;
                var13 = var3.bind(var5)();
                _fun27758_ip = 234;
                continue _fun27758;
            case 224:
                var3 = var5.darken;
                var13 = var3.bind(var5)();
            case 234:
                var14 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var10];
                var14 = var14.bind(var2)(var3);
                var3 = var14.contrast;
                var4 = var3.bind(var14)(var9, var13);
                var3 = parseFloat(var7);
                var7 = var3 - 1;
                var5 = var13;
                var1 = var5;
                if (var3 > var6) {
                    _fun27758_ip = 165;
                    continue _fun27758
                }
            case 279:
                var0 = _closure1_slot4;
                var0 = var0.bind(var2)(var1);
                return var0;
        }
    };
    var2.getContrastingColor = var3;
    var3 = function arg0, arg1() {
        var2 = _closure1_slot4;
        var3 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 1;
        var0 = var1[var0];
        var1 = undefined;
        var3 = var3.bind(var1)(var0);
        var0 = arg0;
        var4 = var3.bind(var1)(var0);
        var3 = var4.darken;
        var0 = arg1;
        var0 = var3.bind(var4)(var0);
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var2.darkenColor = var3;
    var3 = function arg0, arg1() {
        var2 = _closure1_slot4;
        var3 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 1;
        var0 = var1[var0];
        var1 = undefined;
        var3 = var3.bind(var1)(var0);
        var0 = arg0;
        var4 = var3.bind(var1)(var0);
        var3 = var4.brighten;
        var0 = arg1;
        var0 = var3.bind(var4)(var0);
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var2.brightenColor = var3;
    var1 = function arg0, arg1() {
        var2 = _closure1_slot4;
        var3 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 1;
        var0 = var1[var0];
        var1 = undefined;
        var3 = var3.bind(var1)(var0);
        var0 = arg0;
        var4 = var3.bind(var1)(var0);
        var3 = var4.alpha;
        var0 = arg1;
        var0 = var3.bind(var4)(var0);
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var2.setColorOpacity = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 669, 2]);