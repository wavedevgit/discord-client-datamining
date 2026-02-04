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
        _fun27404: for (var _fun27404_ip = 0;;) switch (_fun27404_ip) {
            case 0:
                var0 = arg0;
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 3;
                var1 = var4[var1];
                var13 = undefined;
                var3 = var2.bind(var13)(var1);
                var1 = var3.getGradientThemeFromFlags;
                var8 = var1.bind(var3)(var0);
                var7 = var0.contrast;
                var3 = var0.saturation;
                var5 = var0.primaryColor;
                var1 = 4;
                var1 = var4[var1];
                var4 = var2.bind(var13)(var1);
                var2 = var4.getGradientThemeMetadata;
                var1 = var0.gradient;
                var1 = var2.bind(var4)(var8, var1);
                var4 = null;
                if (!(var4 != var5)) {
                    _fun27404_ip = 322;
                    continue _fun27404
                }
            case 96:
                var12 = var0.theme;
                var2 = var0.primaryColor;
                var11 = var0.secondaryColor;
                var8 = var4 == var2;
                var0 = null;
                if (var8) {
                    _fun27404_ip = 319;
                    continue _fun27404
                }
            case 126:
                var10 = _closure1_slot0;
                var14 = _closure1_slot2;
                var8 = 0;
                var9 = var14[var8];
                var15 = var10.bind(var13)(var9);
                var9 = var15.int2hex;
                var9 = var9.bind(var15)(var2);
                var8 = var14[var8];
                var10 = var10.bind(var13)(var8);
                var8 = var10.int2hex;
                if (!(var4 != var11)) {
                    _fun27404_ip = 178;
                    continue _fun27404
                }
            case 175:
                var2 = var11;
            case 178:
                var8 = var8.bind(var10)(var2);
                var10 = _closure1_slot1;
                var14 = _closure1_slot2;
                var2 = 1;
                var2 = var14[var2];
                var2 = var10.bind(var13)(var2);
                var11 = var2.bind(var13)(var9);
                var10 = var11.mix;
                var2 = 0.5;
                var10 = var10.bind(var11)(var8, var2);
                var2 = var10.hex;
                var10 = var2.bind(var10)();
                var2 = {};
                var11 = _closure1_slot0;
                var6 = 2;
                var6 = var14[var6];
                var11 = var11.bind(var13)(var6);
                var6 = var11.isThemeLight;
                var11 = var6.bind(var11)(var12);
                var6 = 'dark';
                if (!var11) {
                    _fun27404_ip = 280;
                    continue _fun27404
                }
            case 276:
                var6 = 'light';
            case 280:
                var2.theme = var6;
                var6 = {};
                var6['gradient.start'] = var9;
                var6['gradient.mid'] = var10;
                var6['gradient.end'] = var8;
                var6['gradient.primary'] = var9;
                var6['gradient.secondary'] = var8;
                var2.colors = var6;
                var0 = var2;
            case 319:
                var1 = var0;
            case 322:
                var0 = {};
                var8 = var4 != var5;
                var2 = 1;
                var6 = var2;
                if (var8) {
                    _fun27404_ip = 340;
                    continue _fun27404
                }
            case 337:
                var6 = var7;
            case 340:
                var0.contrast = var6;
                var4 = var4 != var5;
                if (var4) {
                    _fun27404_ip = 355;
                    continue _fun27404
                }
            case 352:
                var2 = var3;
            case 355:
                var0.saturation = var2;
                var0.gradient = var1;
                return var0;
        }
    };
    var2.getSemanticColorContextFromThemeContext = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [668, 669, 3153, 3158, 3195, 2]);