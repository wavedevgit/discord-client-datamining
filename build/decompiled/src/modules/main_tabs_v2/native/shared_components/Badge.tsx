// modules/main_tabs_v2/native/shared_components/Badge.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var1);
    var0 = 0;
    var4 = var6[var0];
    var1 = metroImportAll;
    var0 = undefined;
    var7 = var1.bind(var0)(var4);
    var1 = 1;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.View;
    var _closure1_slot0 = var1;
    var1 = 2;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.jsx;
    var _closure1_slot1 = var1;
    var1 = 3;
    var1 = var6[var1];
    var9 = var5.bind(var0)(var1);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {};
    var1 = 4;
    var11 = var6[var1];
    var11 = var12.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_BRAND;
    var10.backgroundColor = var11;
    var4.badge = var10;
    var10 = {};
    var11 = var6[var1];
    var11 = var12.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.INTERACTIVE_TEXT_ACTIVE;
    var10.backgroundColor = var11;
    var4.badgeClassic = var10;
    var10 = {
        'alignItems': 'center',
        'justifyContent': 'center'
    };
    var4.mask = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot2 = var4;
    var4 = var7.memo;
    var3 = function arg0() {
        _fun71177: for (var _fun71177_ip = 0;;) switch (_fun71177_ip) {
            case 0:
                var0 = arg0;
                var9 = var0.size;
                var3 = undefined;
                if (!(var9 === var3)) {
                    _fun71177_ip = 17;
                    continue _fun71177
                }
            case 14:
                var9 = 12;
            case 17:
                var1 = var0.maskSize;
                if (!(var1 === var3)) {
                    _fun71177_ip = 30;
                    continue _fun71177
                }
            case 27:
                var1 = 4;
            case 30:
                var7 = var0.classic;
                if (!(var7 === var3)) {
                    _fun71177_ip = 42;
                    continue _fun71177
                }
            case 40:
                var7 = false;
            case 42:
                var4 = var0.maskColor;
                var10 = var0.style;
                var6 = var0.badgeStyle;
                var2 = _closure1_slot2;
                var5 = var2.bind(var3)();
                var8 = 2;
                var1 = var8 * var1;
                var2 = var9 + var1;
                var1 = null;
                var1 = var1 != var4;
                var11 = undefined;
                if (!var1) {
                    _fun71177_ip = 117;
                    continue _fun71177
                }
            case 92:
                var1 = {};
                var1.backgroundColor = var4;
                var1.height = var2;
                var1.width = var2;
                var2 = var2 / var8;
                var1.borderRadius = var2;
                var11 = var1;
            case 117:
                var2 = _closure1_slot1;
                var1 = _closure1_slot0;
                var0 = {};
                var12 = var5.mask;
                var4 = new Array(3);
                var4[0] = var12;
                var4[1] = var11;
                var4[2] = var10;
                var0.style = var4;
                var4 = {};
                if (var7) {
                    _fun71177_ip = 166;
                    continue _fun71177
                }
            case 158:
                var7 = var5.badge;
                _fun71177_ip = 172;
                continue _fun71177;
            case 166:
                var7 = var5.badgeClassic;
            case 172:
                var5 = new Array(3);
                var5[0] = var7;
                var7 = {};
                var7.height = var9;
                var7.width = var9;
                var8 = var9 / var8;
                var7.borderRadius = var8;
                var5[1] = var7;
                var5[2] = var6;
                var4.style = var5;
                var4 = var2.bind(var3)(var1, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var3 = var4.bind(var7)(var3);
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/shared_components/Badge.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var3 = 12;
    var2.DEFAULT_BADGE_SIZE = var3;
    var3 = 8;
    var2.CHANNEL_BADGE_SIZE = var3;
    var2.DEFAULT_BADGE_MASK_SIZE = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 2]);