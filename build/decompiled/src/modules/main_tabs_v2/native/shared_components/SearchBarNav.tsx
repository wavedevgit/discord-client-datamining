// modules/main_tabs_v2/native/shared_components/SearchBarNav.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var12 = metroImportDefault;
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
    var6 = var3.bind(var0)(var6);
    var10 = 1;
    var3 = var5[var10];
    var3 = var4.bind(var0)(var3);
    var7 = var3.View;
    var _closure1_slot2 = var7;
    var13 = var3.StyleSheet;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot3 = var7;
    var3 = var3.jsxs;
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var11 = 4;
    var11 = var5[var11];
    var11 = var4.bind(var0)(var11);
    var11 = var11.NAV_BAR_HEIGHT;
    var9.height = var11;
    var11 = 5;
    var14 = var5[var11];
    var14 = var12.bind(var0)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_16;
    var9.paddingHorizontal = var14;
    var14 = var5[var11];
    var14 = var12.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_BASE_LOW;
    var9.backgroundColor = var14;
    var13 = var13.hairlineWidth;
    var9.borderBottomWidth = var13;
    var13 = var5[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BORDER_STRONG;
    var9.borderColor = var13;
    var3.container = var9;
    var9 = {};
    var13 = var5[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_16;
    var9.paddingLeft = var13;
    var3.cancelText = var9;
    var9 = {};
    var11 = var5[var11];
    var11 = var12.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_16;
    var9.marginRight = var11;
    var3.cancelIcon = var9;
    var9 = {};
    var9.flex = var10;
    var3.flex = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot5 = var3;
    var3 = var6.forwardRef;
    var1 = function(arg0, arg1) { // Environment: var1
        _fun71729: for (var _fun71729_ip = 0;;) switch (_fun71729_ip) {
            case 0:
                var2 = arg0;
                var9 = var2.onClose;
                var5 = null;
                var1 = Object.create(var5);
                var0 = 0;
                var1.onClose = var0;
                var20 = {};
                var19 = var2;
                var18 = var1;
                var16 = copyDataProperties(var20, var19, var18);
                var0 = _closure1_slot5;
                var3 = undefined;
                var8 = var0.bind(var3)();
                var2 = _closure1_slot3;
                var6 = _closure1_slot0;
                var4 = _closure1_slot1;
                var0 = 6;
                var0 = var4[var0];
                var0 = var6.bind(var3)(var0);
                var1 = var0.PressableOpacity;
                var0 = {};
                var10 = 'button';
                var0.accessibilityRole = var10;
                var13 = 7;
                var10 = var4[var13];
                var10 = var6.bind(var3)(var10);
                var12 = var10.intl;
                var11 = var12.string;
                var10 = var4[var13];
                var10 = var6.bind(var3)(var10);
                var10 = var10.t;
                var10 = var10["ETE/oC"];
                var10 = var11.bind(var12)(var10);
                var0.accessibilityLabel = var10;
                var0.onPress = var9;
                var9 = 8;
                var10 = {
                    'top': 8,
                    'right': 8,
                    'bottom': 8,
                    'left': 8
                };
                var0.hitSlop = var10;
                var4 = var4[var9];
                var6 = var6.bind(var3)(var4);
                var4 = var6.isAndroid;
                var4 = var4.bind(var6)();
                var11 = _closure1_slot3;
                var10 = _closure1_slot0;
                var12 = _closure1_slot1;
                if (var4) {
                    _fun71729_ip = 296;
                    continue _fun71729
                }
            case 197:
                var4 = 10;
                var4 = var12[var4];
                var4 = var10.bind(var3)(var4);
                var6 = var4.Text;
                var4 = {
                    'style': null,
                    'maxFontSizeMultiplier': 2,
                    'variant': 'text-md/semibold',
                    'color': 'mobile-text-heading-primary'
                };
                var14 = var8.cancelText;
                var4.style = var14;
                var14 = var12[var13];
                var14 = var10.bind(var3)(var14);
                var15 = var14.intl;
                var14 = var15.string;
                var13 = var12[var13];
                var13 = var10.bind(var3)(var13);
                var13 = var13.t;
                var13 = var13["ETE/oC"];
                var13 = var14.bind(var15)(var13);
                var4.children = var13;
                var4 = var11.bind(var3)(var6, var4);
                _fun71729_ip = 332;
                continue _fun71729;
            case 296:
                var6 = 9;
                var6 = var12[var6];
                var6 = var10.bind(var3)(var6);
                var10 = var6.ArrowLargeLeftIcon;
                var6 = {};
                var12 = var8.cancelIcon;
                var6.style = var12;
                var4 = var11.bind(var3)(var10, var6);
            case 332:
                var0.children = var4;
                var6 = var2.bind(var3)(var1, var0);
                var2 = _closure1_slot4;
                var1 = _closure1_slot2;
                var0 = {};
                var4 = var8.container;
                var0.style = var4;
                var10 = _closure1_slot0;
                var4 = _closure1_slot1;
                var4 = var4[var9];
                var10 = var10.bind(var3)(var4);
                var4 = var10.isAndroid;
                var4 = var4.bind(var10)();
                var10 = null;
                if (!var4) {
                    _fun71729_ip = 396;
                    continue _fun71729
                }
            case 393:
                var10 = var6;
            case 396:
                var4 = new Array(3);
                var4[0] = var10;
                var12 = _closure1_slot3;
                var11 = _closure1_slot2;
                var10 = {};
                var8 = var8.flex;
                var10.style = var8;
                var13 = {};
                var8 = _closure1_slot0;
                var7 = _closure1_slot1;
                var14 = 11;
                var14 = var7[var14];
                var14 = var8.bind(var3)(var14);
                var15 = var14.SearchField;
                var14 = {
                    'size': 'md',
                    'isRound': true
                };
                var17 = arg1;
                var14.ref = var17;
                var20 = var14;
                var19 = var16;
                var16 = copyDataProperties(var20, var19);
                var14 = var12.bind(var3)(var15, var14);
                var13.children = var14;
                var13 = var12.bind(var3)(var11, var13);
                var10.children = var13;
                var10 = var12.bind(var3)(var11, var10);
                var4[1] = var10;
                var7 = var7[var9];
                var8 = var8.bind(var3)(var7);
                var7 = var8.isAndroid;
                var7 = var7.bind(var8)();
                var5 = null;
                if (var7) {
                    _fun71729_ip = 539;
                    continue _fun71729
                }
            case 536:
                var5 = var6;
            case 539:
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/main_tabs_v2/native/shared_components/SearchBarNav.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 4703, 671, 4902, 1234, 478, 4706, 3941, 7012, 2]);