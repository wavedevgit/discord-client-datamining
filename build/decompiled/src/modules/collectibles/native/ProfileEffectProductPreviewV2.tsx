// modules/collectibles/native/ProfileEffectProductPreviewV2.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot4 = var6;
    var3 = var3.jsxs;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = function(arg0) { // Environment: var1
        _fun87104: for (var _fun87104_ip = 0;;) switch (_fun87104_ip) {
            case 0:
                var0 = {};
                var1 = {
                    'position': 'relative',
                    'flex': 1,
                    'alignItems': 'center',
                    'overflow': 'hidden'
                };
                var0.container = var1;
                var1 = {};
                var2 = '80%';
                var3 = arg0;
                if (!var3) {
                    _fun87104_ip = 40;
                    continue _fun87104
                }
            case 34:
                var2 = '66%';
            case 40:
                var1.width = var2;
                var0.profilePreview = var1;
                var1 = {
                    'position': 'absolute',
                    'right': 0,
                    'left': 0,
                    'top': 0,
                    'bottom': 0,
                    'pointerEvents': 'none'
                };
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 4;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
                var2 = var2.colors;
                var2 = var2.BACKGROUND_BASE_LOWER;
                var1.color = var2;
                var0.gradient = var1;
                return var0;
        }
    };
    var3 = var6.bind(var7)(var3);
    var _closure1_slot6 = var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/collectibles/native/ProfileEffectProductPreviewV2.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun87105: for (var _fun87105_ip = 0;;) switch (_fun87105_ip) {
            case 0:
                var0 = arg0;
                var16 = var0.product;
                var10 = var0.width;
                var6 = var0.showGradient;
                var4 = undefined;
                if (!(var6 === var4)) {
                    _fun87105_ip = 28;
                    continue _fun87105
                }
            case 26:
                var6 = false;
            case 28:
                var1 = var0.shrinkPreview;
                if (!(var1 === var4)) {
                    _fun87105_ip = 40;
                    continue _fun87105
                }
            case 38:
                var1 = false;
            case 40:
                var0 = _closure1_slot6;
                var11 = var0.bind(var4)(var1);
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 5;
                var0 = var2[var0];
                var3 = var1.bind(var4)(var0);
                var0 = var3.useCurrentUser;
                var13 = var0.bind(var3)();
                var0 = 6;
                var0 = var2[var0];
                var1 = var1.bind(var4)(var0);
                var0 = var1.useShopProductItems;
                var0 = var0.bind(var1)(var16);
                var12 = var0.firstProfileEffect;
                var0 = null;
                var1 = var0 == var12;
                if (var1) {
                    _fun87105_ip = 461;
                    continue _fun87105
                }
            case 123:
                var3 = _closure1_slot5;
                var2 = _closure1_slot3;
                var1 = {};
                var5 = var11.container;
                var1.style = var5;
                var5 = 'box-none';
                var1.pointerEvents = var5;
                var8 = _closure1_slot0;
                var14 = _closure1_slot2;
                var5 = 7;
                var9 = var14[var5];
                var9 = var8.bind(var4)(var9);
                var15 = var9.intl;
                var9 = var15.formatToPlainString;
                var5 = var14[var5];
                var5 = var8.bind(var4)(var5);
                var5 = var5.t;
                var8 = var5.HSX4HR;
                var5 = {};
                var16 = var16.name;
                var5.profileEffect = var16;
                var5 = var9.bind(var15)(var8, var5);
                var1.accessibilityLabel = var5;
                var5 = 'image';
                var1.accessibilityRole = var5;
                var9 = _closure1_slot4;
                var8 = _closure1_slot1;
                var5 = 8;
                var5 = var14[var5];
                var8 = var8.bind(var4)(var5);
                var5 = {};
                var5.user = var13;
                var13 = var11.profilePreview;
                var5.style = var13;
                var5.pendingProfileEffectRecord = var12;
                var5.maxWidth = var10;
                var10 = true;
                var5.gradientFullHeight = var10;
                var8 = var9.bind(var4)(var8, var5);
                var5 = new Array(2);
                var5[0] = var8;
                if (!var6) {
                    _fun87105_ip = 447;
                    continue _fun87105
                }
            case 308:
                var9 = _closure1_slot4;
                var8 = _closure1_slot1;
                var10 = _closure1_slot2;
                var7 = 9;
                var7 = var10[var7];
                var8 = var8.bind(var4)(var7);
                var7 = {};
                var10 = var11.gradient;
                var7.style = var10;
                var10 = {
                    'x': 0,
                    'y': 0.6
                };
                var7.start = var10;
                var10 = {
                    'x': 0,
                    'y': 1
                };
                var7.end = var10;
                var10 = var11.gradient;
                var14 = var10.color;
                var10 = global;
                var10 = var10.HermesInternal;
                var13 = var10.concat;
                var12 = '';
                var10 = '00';
                var12 = var13.bind(var12)(var14, var10);
                var10 = new Array(2);
                var10[0] = var12;
                var11 = var11.gradient;
                var11 = var11.color;
                var10[1] = var11;
                var7.colors = var10;
                var6 = var9.bind(var4)(var8, var7);
            case 447:
                var5[1] = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 461:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 9446, 6845, 1234, 6921, 4059, 2]);