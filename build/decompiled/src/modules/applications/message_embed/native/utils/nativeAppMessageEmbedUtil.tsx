// modules/applications/message_embed/native/utils/nativeAppMessageEmbedUtil.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var9 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var7 = 0;
    var3 = var5[var7];
    var0 = undefined;
    var10 = var4.bind(var0)(var3);
    var8 = var10.hexToRgba;
    var6 = 1;
    var3 = var5[var6];
    var3 = var9.bind(var0)(var3);
    var3 = var3.unsafe_rawColors;
    var3 = var3.PRIMARY_760;
    var8 = var8.bind(var10)(var3);
    var3 = new Array(2);
    var3[0] = var8;
    var7 = var5[var7];
    var8 = var4.bind(var0)(var7);
    var7 = var8.hexToRgba;
    var6 = var5[var6];
    var6 = var9.bind(var0)(var6);
    var6 = var6.unsafe_rawColors;
    var6 = var6.PRIMARY_760;
    var6 = var7.bind(var8)(var6);
    var3[1] = var6;
    var _closure1_slot3 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/applications/message_embed/native/utils/nativeAppMessageEmbedUtil.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        _fun89247: for (var _fun89247_ip = 0;;) switch (_fun89247_ip) {
            case 0:
                var4 = arg0;
                var0 = _closure1_slot3;
                var1 = null;
                if (!(var1 != var4)) {
                    _fun89247_ip = 211;
                    continue _fun89247
                }
            case 19:
                var5 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 2;
                var3 = var3[var1];
                var6 = undefined;
                var5 = var5.bind(var6)(var3);
                var3 = var5.hasFetchedColors;
                var7 = var3.bind(var5)(var4);
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                if (var7) {
                    _fun89247_ip = 85;
                    continue _fun89247
                }
            case 63:
                var1 = var5[var1];
                var7 = var3.bind(var6)(var1);
                var1 = var7.maybeFetchColors;
                var1 = var1.bind(var7)(var4);
                return var0;
            case 85:
                var1 = 3;
                var1 = var5[var1];
                var3 = var3.bind(var6)(var1);
                var1 = var3.getHeroColors;
                var1 = var1.bind(var3)(var4);
                var9 = var1.primaryColor;
                var5 = var1.secondaryColor;
                var1 = '#000000';
                var4 = var9 === var1;
                if (!var4) {
                    _fun89247_ip = 135;
                    continue _fun89247
                }
            case 131:
                var4 = var5 === var1;
            case 135:
                var3 = false;
                var1 = var0;
                if (!(var3 === var4)) {
                    _fun89247_ip = 209;
                    continue _fun89247
                }
            case 144:
                var4 = _closure1_slot0;
                var7 = _closure1_slot2;
                var3 = 0;
                var2 = var7[var3];
                var8 = var4.bind(var6)(var2);
                var2 = var8.hexToRgba;
                var8 = var2.bind(var8)(var9);
                var2 = new Array(2);
                var2[0] = var8;
                var3 = var7[var3];
                var4 = var4.bind(var6)(var3);
                var3 = var4.hexToRgba;
                var3 = var3.bind(var4)(var5);
                var2[1] = var3;
                var1 = var2;
            case 209:
                return var1;
            case 211:
                return var0;
        }
    };
    var2.getAppGradientColors = var3;
    var1 = function arg0, arg1, arg2() {
        _fun89248: for (var _fun89248_ip = 0;;) switch (_fun89248_ip) {
            case 0:
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 4;
                var1 = var1[var0];
                var0 = undefined;
                var2 = var2.bind(var0)(var1);
                var1 = var2.getApplicationIconURL;
                var0 = {};
                var3 = arg0;
                var0.id = var3;
                var3 = arg1;
                var0.icon = var3;
                var3 = arg2;
                var0.bot = var3;
                var3 = false;
                var0.fallbackAvatar = var3;
                var1 = var1.bind(var2)(var0);
                var0 = null;
                var2 = var0 != var1;
                if (!var2) {
                    _fun89248_ip = 79;
                    continue _fun89248
                }
            case 76:
                var0 = var1;
            case 79:
                return var0;
        }
    };
    var2.getAppIconSrc = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3240, 671, 6862, 6863, 1417, 2]);