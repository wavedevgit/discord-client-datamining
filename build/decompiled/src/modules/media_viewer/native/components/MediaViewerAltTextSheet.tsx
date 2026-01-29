// modules/media_viewer/native/components/MediaViewerAltTextSheet.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
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
    var _closure1_slot2 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot3 = var6;
    var3 = var3.jsxs;
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 4;
    var10 = var5[var9];
    var9 = metroImportDefault;
    var9 = var9.bind(var0)(var10);
    var9 = var9.colors;
    var9 = var9.BACKGROUND_BASE_LOWER;
    var8.backgroundColor = var9;
    var9 = 16;
    var8.padding = var9;
    var3.container = var8;
    var8 = {};
    var9 = 8;
    var8.marginBottom = var9;
    var3.title = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot5 = var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/media_viewer/native/components/MediaViewerAltTextSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: _default, environment: var1
        _fun72919: for (var _fun72919_ip = 0;;) switch (_fun72919_ip) {
            case 0:
                var0 = arg0;
                var11 = var0.description;
                var4 = var0.onClose;
                var5 = var0.showBackdrop;
                var3 = undefined;
                if (!(var5 === var3)) {
                    _fun72919_ip = 28;
                    continue _fun72919
                }
            case 26:
                var5 = false;
            case 28:
                var0 = _closure1_slot5;
                var14 = var0.bind(var3)();
                var2 = _closure1_slot0;
                var6 = _closure1_slot1;
                var0 = 5;
                var0 = var6[var0];
                var1 = var2.bind(var3)(var0);
                var0 = var1.useMessagePreviewCollapsedheight;
                var1 = var0.bind(var1)();
                var0 = 6;
                var0 = var6[var0];
                var2 = var2.bind(var3)(var0);
                var0 = var2.useIsScreenLandscape;
                var0 = var0.bind(var2)();
                var10 = 70;
                if (var0) {
                    _fun72919_ip = 111;
                    continue _fun72919
                }
            case 97:
                var0 = 20;
                var1 = var1 + var0;
                var0 = 50;
                var10 = var1 + var0;
            case 111:
                var2 = _closure1_slot3;
                var1 = _closure1_slot0;
                var6 = _closure1_slot1;
                var0 = 7;
                var0 = var6[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.BottomSheet;
                var0 = {};
                var0.onDismiss = var4;
                var4 = 0;
                if (!var5) {
                    _fun72919_ip = 155;
                    continue _fun72919
                }
            case 153:
                var4 = undefined;
            case 155:
                var0.backdropOpacity = var4;
                var6 = _closure1_slot4;
                var5 = _closure1_slot2;
                var4 = {};
                var9 = var14.container;
                var8 = new Array(2);
                var8[0] = var9;
                var9 = {};
                var9.minHeight = var10;
                var8[1] = var9;
                var4.style = var8;
                var10 = _closure1_slot3;
                var9 = _closure1_slot0;
                var12 = _closure1_slot1;
                var8 = 8;
                var7 = var12[var8];
                var7 = var9.bind(var3)(var7);
                var13 = var7.Text;
                var7 = {
                    'accessibilityRole': 'text',
                    'variant': 'heading-md/semibold'
                };
                var14 = var14.title;
                var7.style = var14;
                var14 = 9;
                var15 = var12[var14];
                var15 = var9.bind(var3)(var15);
                var16 = var15.intl;
                var15 = var16.string;
                var14 = var12[var14];
                var14 = var9.bind(var3)(var14);
                var14 = var14.t;
                var14 = var14.J3IOO1;
                var14 = var15.bind(var16)(var14);
                var7.children = var14;
                var13 = var10.bind(var3)(var13, var7);
                var7 = new Array(2);
                var7[0] = var13;
                var8 = var12[var8];
                var8 = var9.bind(var3)(var8);
                var9 = var8.Text;
                var8 = {
                    'accessibilityRole': 'text',
                    'variant': 'text-md/normal'
                };
                var8.children = var11;
                var8 = var10.bind(var3)(var9, var8);
                var7[1] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 9139, 5319, 4887, 3895, 1234, 2]);