// design/tokens/native/SemanticColorContext.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var3;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var5);
    var0 = 5;
    var3 = var3[var0];
    var0 = undefined;
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'design/tokens/native/SemanticColorContext.native.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun27460: for (var _fun27460_ip = 0;;) switch (_fun27460_ip) {
            case 0:
                var0 = arg0;
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 3;
                var1 = var5[var1];
                var14 = undefined;
                var2 = var3.bind(var14)(var1);
                var1 = var2.getGradientThemeFromFlags;
                var9 = var1.bind(var2)(var0);
                var8 = var0.contrast;
                var4 = var0.saturation;
                var6 = var0.primaryColor;
                var1 = var0.enabledExperiments;
                var2 = 4;
                var2 = var5[var2];
                var5 = var3.bind(var14)(var2);
                var3 = var5.getGradientThemeMetadata;
                var2 = var0.gradient;
                var2 = var3.bind(var5)(var9, var2);
                var5 = null;
                if (!(var5 != var6)) {
                    _fun27460_ip = 328;
                    continue _fun27460
                }
            case 102:
                var13 = var0.theme;
                var3 = var0.primaryColor;
                var12 = var0.secondaryColor;
                var9 = var5 == var3;
                var0 = null;
                if (var9) {
                    _fun27460_ip = 325;
                    continue _fun27460
                }
            case 132:
                var11 = _closure1_slot0;
                var15 = _closure1_slot2;
                var9 = 0;
                var10 = var15[var9];
                var16 = var11.bind(var14)(var10);
                var10 = var16.int2hex;
                var10 = var10.bind(var16)(var3);
                var9 = var15[var9];
                var11 = var11.bind(var14)(var9);
                var9 = var11.int2hex;
                if (!(var5 != var12)) {
                    _fun27460_ip = 184;
                    continue _fun27460
                }
            case 181:
                var3 = var12;
            case 184:
                var9 = var9.bind(var11)(var3);
                var11 = _closure1_slot1;
                var15 = _closure1_slot2;
                var3 = 1;
                var3 = var15[var3];
                var3 = var11.bind(var14)(var3);
                var12 = var3.bind(var14)(var10);
                var11 = var12.mix;
                var3 = 0.5;
                var11 = var11.bind(var12)(var9, var3);
                var3 = var11.hex;
                var11 = var3.bind(var11)();
                var3 = {};
                var12 = _closure1_slot0;
                var7 = 2;
                var7 = var15[var7];
                var12 = var12.bind(var14)(var7);
                var7 = var12.isThemeLight;
                var12 = var7.bind(var12)(var13);
                var7 = 'dark';
                if (!var12) {
                    _fun27460_ip = 286;
                    continue _fun27460
                }
            case 282:
                var7 = 'light';
            case 286:
                var3.theme = var7;
                var7 = {};
                var7['gradient.start'] = var10;
                var7['gradient.mid'] = var11;
                var7['gradient.end'] = var9;
                var7['gradient.primary'] = var10;
                var7['gradient.secondary'] = var9;
                var3.colors = var7;
                var0 = var3;
            case 325:
                var2 = var0;
            case 328:
                var0 = {};
                var9 = var5 != var6;
                var3 = 1;
                var7 = var3;
                if (var9) {
                    _fun27460_ip = 346;
                    continue _fun27460
                }
            case 343:
                var7 = var8;
            case 346:
                var0.contrast = var7;
                var5 = var5 != var6;
                if (var5) {
                    _fun27460_ip = 361;
                    continue _fun27460
                }
            case 358:
                var3 = var4;
            case 361:
                var0.saturation = var3;
                var0.gradient = var2;
                var0.enabledExperiments = var1;
                return var0;
        }
    };
    var2.getSemanticColorContextFromThemeContext = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [668, 669, 3160, 3165, 3202, 2]);