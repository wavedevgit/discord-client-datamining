// modules/main_tabs_v2/native/shared_components/SearchButton.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var3);
    var0 = 0;
    var4 = var6[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var4);
    var3 = 1;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.Pressable;
    var _closure1_slot2 = var3;
    var3 = 2;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var4 = var3.jsx;
    var _closure1_slot3 = var4;
    var3 = var3.jsxs;
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var6[var3];
    var9 = var5.bind(var0)(var3);
    var8 = var9.createStyles;
    var7 = {};
    var4 = {
        'backgroundColor': null,
        'height': 40,
        'alignItems': 'center',
        'flexDirection': 'row',
        'paddingHorizontal': 12
    };
    var10 = 4;
    var3 = var6[var10];
    var3 = var11.bind(var0)(var3);
    var3 = var3.colors;
    var3 = var3.INPUT_BACKGROUND_DEFAULT;
    var4.backgroundColor = var3;
    var3 = 40;
    var7.searchButton = var4;
    var4 = {};
    var12 = 20;
    var4.borderRadius = var12;
    var7.roundedCorners = var4;
    var4 = {};
    var12 = var6[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.round;
    var4.borderRadius = var12;
    var7.roundedCornersAlt = var4;
    var4 = {};
    var10 = var6[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.INTERACTIVE_TEXT_DEFAULT;
    var4.backgroundColor = var10;
    var7.icon = var4;
    var10 = {};
    var4 = 8;
    var10.marginLeft = var4;
    var7.text = var10;
    var11 = 'flex-end';
    var10 = {
        'flex': 1,
        'justifyContent': 'flex-end'
    };
    var7.tagContainer = var10;
    var10 = {};
    var10.alignSelf = var11;
    var7.tag = var10;
    var7 = var8.bind(var9)(var7);
    var _closure1_slot5 = var7;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/shared_components/SearchButton.tsx';
    var4 = var5.bind(var6)(var4);
    var2.SEARCH_BAR_HEIGHT = var3;
    var1 = function arg0() {
        _fun89934: for (var _fun89934_ip = 0;;) switch (_fun89934_ip) {
            case 0:
                var2 = arg0;
                var7 = var2.panelVariant;
                var0 = null;
                var1 = Object.create(var0);
                var0 = 0;
                var1.panelVariant = var0;
                var15 = {};
                var14 = var2;
                var13 = var1;
                var5 = copyDataProperties(var15, var14, var13);
                var0 = _closure1_slot5;
                var3 = undefined;
                var8 = var0.bind(var3)();
                var2 = _closure1_slot4;
                var1 = _closure1_slot2;
                var0 = {};
                var15 = var0;
                var14 = var5;
                var6 = copyDataProperties(var15, var14);
                var9 = var8.searchButton;
                var6 = new Array(3);
                var6[0] = var9;
                if (var7) {
                    _fun89934_ip = 91;
                    continue _fun89934
                }
            case 83:
                var7 = var8.roundedCorners;
                _fun89934_ip = 97;
                continue _fun89934;
            case 91:
                var7 = var8.roundedCornersAlt;
            case 97:
                var6[1] = var7;
                var5 = var5.style;
                var6[2] = var5;
                var5 = 'style';
                var0[var5] = var6;
                var7 = _closure1_slot3;
                var11 = _closure1_slot0;
                var12 = _closure1_slot1;
                var4 = 5;
                var4 = var12[var4];
                var4 = var11.bind(var3)(var4);
                var5 = var4.MagnifyingGlassIcon;
                var4 = {};
                var6 = 'xs';
                var4.size = var6;
                var4 = var7.bind(var3)(var5, var4);
                var5 = new Array(2);
                var5[0] = var4;
                var4 = 6;
                var4 = var12[var4];
                var4 = var11.bind(var3)(var4);
                var6 = var4.Text;
                var4 = {
                    'variant': 'text-sm/medium',
                    'color': 'text-muted',
                    'style': null,
                    'maxFontSizeMultiplier': 2
                };
                var8 = var8.text;
                var4.style = var8;
                var8 = 7;
                var9 = var12[var8];
                var9 = var11.bind(var3)(var9);
                var10 = var9.intl;
                var9 = var10.string;
                var8 = var12[var8];
                var8 = var11.bind(var3)(var8);
                var8 = var8.t;
                var8 = var8["5h0QOP"];
                var8 = var9.bind(var10)(var8);
                var4.children = var8;
                var4 = var7.bind(var3)(var6, var4);
                var5[1] = var4;
                var4 = 'children';
                var0[var4] = var5;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.SearchButtonContent = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 7038, 3943, 1234, 2]);