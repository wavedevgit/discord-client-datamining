// design/tokens/native/useToken.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var3 = true;
    var6.value = var3;
    var3 = '__esModule';
    var3 = var7.bind(var8)(var2, var3, var6);
    var3 = var0.Map;
    var6 = var3.prototype;
    var6 = Object.create(var6, {
        constructor: {
            value: var3
        }
    });
    var14 = var6;
    var3 = new var14[var3](var13);
    var3 = var3 instanceof Object ? var3 : var6;
    var _closure1_slot3 = var3;
    var7 = var0.Object;
    var6 = var7.fromEntries;
    var9 = var0.Object;
    var8 = var9.keys;
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var10.bind(var0)(var3);
    var3 = var3.colors;
    var9 = var8.bind(var9)(var3);
    var8 = var9.map;
    var3 = function(arg0) { // Environment: var1
        var1 = arg0;
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 2;
        var2 = var2[var0];
        var0 = undefined;
        var2 = var3.bind(var0)(var2);
        var0 = var2.kebabCase;
        var2 = var0.bind(var2)(var1);
        var0 = new Array(2);
        var0[0] = var2;
        var0[1] = var1;
        return var0;
    };
    var3 = var8.bind(var9)(var3);
    var3 = var6.bind(var7)(var3);
    var _closure1_slot4 = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'design/tokens/native/useToken.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1() {
        _fun27219: for (var _fun27219_ip = 0;;) switch (_fun27219_ip) {
            case 0:
                var12 = arg0;
                var11 = arg1;
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 3;
                var0 = var2[var0];
                var6 = undefined;
                var1 = var1.bind(var6)(var0);
                var0 = var1.useThemeContext;
                var13 = var0.bind(var1)();
                var4 = null;
                if (!(var4 == var11)) {
                    _fun27219_ip = 53;
                    continue _fun27219
                }
            case 47:
                var11 = var13.theme;
            case 53:
                var0 = var12;
                if (!(var4 != var0)) {
                    _fun27219_ip = 475;
                    continue _fun27219
                }
            case 63:
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var7 = 0;
                var1 = var1[var7];
                var1 = var2.bind(var6)(var1);
                var2 = var1.internal;
                var1 = var2.isSemanticColor;
                var1 = var1.bind(var2)(var12);
                var9 = var12;
                if (!var1) {
                    _fun27219_ip = 139;
                    continue _fun27219
                }
            case 105:
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var1 = var1[var7];
                var1 = var2.bind(var6)(var1);
                var2 = var1.internal;
                var1 = var2.getSemanticColorName;
                var9 = var1.bind(var2)(var12);
            case 139:
                var18 = var13.key;
                var1 = global;
                var1 = var1.HermesInternal;
                var5 = var1.concat;
                var21 = '';
                var1 = '-';
                var20 = var9;
                var19 = var1;
                var17 = var1;
                var16 = var11;
                var5 = var21[var5](var20, var19, var18, var17, var16, var15);
                var2 = _closure1_slot3;
                var1 = var2.get;
                var9 = var1.bind(var2)(var5);
                var2 = var9;
                if (!(var4 == var9)) {
                    _fun27219_ip = 445;
                    continue _fun27219
                }
            case 205:
                var8 = 'string';
                var1 = typeof var12;
                if (!(var8 !== var1)) {
                    _fun27219_ip = 324;
                    continue _fun27219
                }
            case 216:
                var8 = _closure1_slot1;
                var1 = _closure1_slot2;
                var1 = var1[var7];
                var1 = var8.bind(var6)(var1);
                var8 = var1.internal;
                var1 = var8.isSemanticColor;
                var1 = var1.bind(var8)(var12);
                var2 = var9;
                if (!var1) {
                    _fun27219_ip = 445;
                    continue _fun27219
                }
            case 259:
                var8 = _closure1_slot1;
                var15 = _closure1_slot2;
                var1 = var15[var7];
                var1 = var8.bind(var6)(var1);
                var10 = var1.internal;
                var8 = var10.resolveSemanticColor;
                var14 = _closure1_slot0;
                var1 = 1;
                var1 = var15[var1];
                var14 = var14.bind(var6)(var1);
                var1 = var14.getSemanticColorContextFromThemeContext;
                var1 = var1.bind(var14)(var13);
                var2 = var8.bind(var10)(var11, var12, var1);
                _fun27219_ip = 445;
                continue _fun27219;
            case 324:
                var10 = var12[var7];
                var8 = '#';
                var1 = var12;
                if (!(var8 !== var10)) {
                    _fun27219_ip = 472;
                    continue _fun27219
                }
            case 342:
                var8 = _closure1_slot4;
                var8 = var12 in var8;
                var2 = var9;
                if (!var8) {
                    _fun27219_ip = 445;
                    continue _fun27219
                }
            case 356:
                var8 = _closure1_slot1;
                var14 = _closure1_slot2;
                var9 = var14[var7];
                var9 = var8.bind(var6)(var9);
                var10 = var9.internal;
                var9 = var10.resolveSemanticColor;
                var7 = var14[var7];
                var7 = var8.bind(var6)(var7);
                var8 = var7.colors;
                var7 = _closure1_slot4;
                var7 = var7[var12];
                var8 = var8[var7];
                var12 = _closure1_slot0;
                var7 = 1;
                var7 = var14[var7];
                var12 = var12.bind(var6)(var7);
                var7 = var12.getSemanticColorContextFromThemeContext;
                var7 = var7.bind(var12)(var13);
                var2 = var9.bind(var10)(var11, var8, var7);
            case 445:
                var4 = var4 != var2;
                var1 = undefined;
                if (!var4) {
                    _fun27219_ip = 472;
                    continue _fun27219
                }
            case 454:
                var4 = _closure1_slot3;
                var3 = var4.set;
                var3 = var3.bind(var4)(var5, var2);
                var1 = var2;
            case 472:
                var0 = var1;
            case 475:
                return var0;
        }
    };
    var2.useToken = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [671, 3111, 22, 3118, 2]);