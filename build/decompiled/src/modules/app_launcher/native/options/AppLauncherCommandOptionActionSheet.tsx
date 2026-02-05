// modules/app_launcher/native/options/AppLauncherCommandOptionActionSheet.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var12;
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
    var9 = 1;
    var3 = var5[var9];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var10 = var3.DEFAULT_CONTENT_PADDING;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot4 = var3;
    var3 = 4;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var11 = 5;
    var11 = var5[var11];
    var11 = var12.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_BASE_LOWER;
    var8.backgroundColor = var11;
    var3.actionSheetBackground = var8;
    var8 = {};
    var11 = 'transparent';
    var8.backgroundColor = var11;
    var3.titleContainer = var8;
    var8 = {};
    var11 = 'center';
    var8.alignItems = var11;
    var3.titleWrapper = var8;
    var8 = {
        'paddingHorizontal': 12,
        'textAlign': 'center'
    };
    var3.subtitleWrapper = var8;
    var8 = {};
    var8.paddingHorizontal = var10;
    var8.paddingTop = var10;
    var8.flex = var9;
    var3.contentContainer = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot5 = var3;
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/app_launcher/native/options/AppLauncherCommandOptionActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun105559: for (var _fun105559_ip = 0;;) switch (_fun105559_ip) {
            case 0:
                var3 = arg0;
                var0 = var3.option;
                var7 = var3.children;
                var9 = var3.contentContainerStyles;
                var10 = var3.scrollable;
                var4 = undefined;
                if (!(var10 === var4)) {
                    _fun105559_ip = 36;
                    continue _fun105559
                }
            case 34:
                var10 = true;
            case 36:
                var6 = var3.startExpanded;
                if (!(var6 === var4)) {
                    _fun105559_ip = 48;
                    continue _fun105559
                }
            case 46:
                var6 = true;
            case 48:
                var2 = {
                    'option': 0,
                    'children': 0,
                    'contentContainerStyles': 0,
                    'scrollable': 0,
                    'startExpanded': 0
                };
                var19 = null;
                var20 = var2;
                var1 = silentSetPrototypeOf(var20, var19);
                var20 = {};
                var19 = var3;
                var18 = var2;
                var5 = copyDataProperties(var20, var19, var18);
                var _closure2_slot0 = var5;
                var1 = _closure1_slot5;
                var8 = var1.bind(var4)();
                var3 = _closure1_slot4;
                var15 = _closure1_slot0;
                var13 = _closure1_slot2;
                var1 = 6;
                var1 = var13[var1];
                var1 = var15.bind(var4)(var1);
                var2 = var1.BottomSheet;
                var1 = {};
                var20 = var1;
                var19 = var5;
                var5 = copyDataProperties(var20, var19);
                var12 = var8.actionSheetBackground;
                var5 = 'backgroundStyles';
                var1[var5] = var12;
                var5 = 'scrollable';
                var1[var5] = var10;
                var5 = 'startExpanded';
                var1[var5] = var6;
                var5 = 7;
                var5 = var13[var5];
                var5 = var15.bind(var4)(var5);
                var10 = var5.BottomSheetTitleHeader;
                var5 = {};
                var6 = var8.titleContainer;
                var5.titleContainerStyle = var6;
                var6 = var8.titleWrapper;
                var5.titleWrapperStyle = var6;
                var6 = var8.subtitleWrapper;
                var5.subtitleStyle = var6;
                var6 = _closure1_slot3;
                var12 = {};
                var14 = {};
                var17 = 'flex-start';
                var14.alignSelf = var17;
                var12.style = var14;
                var14 = 8;
                var14 = var13[var14];
                var14 = var15.bind(var4)(var14);
                var15 = var14.ActionSheetCloseButton;
                var14 = {};
                var16 = function() {
                    _fun105560: for (var _fun105560_ip = 0;;) switch (_fun105560_ip) {
                        case 0:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 9;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.hideActionSheet;
                            var1 = var1.bind(var2)();
                            var2 = _closure2_slot0;
                            var3 = var2.onDismiss;
                            var2 = null;
                            if (!(var2 != var3)) {
                                _fun105560_ip = 68;
                                continue _fun105560
                            }
                        case 54:
                            var2 = _closure2_slot0;
                            var1 = var2.onDismiss;
                            var1 = var1.bind(var2)();
                        case 68:
                            return var0;
                    }
                };
                var14.onPress = var16;
                var14 = var3.bind(var4)(var15, var14);
                var12.children = var14;
                var12 = var3.bind(var4)(var6, var12);
                var5.leading = var12;
                var12 = var0.displayName;
                var5.title = var12;
                var12 = var0.displayDescription;
                var5.subtitle = var12;
                var12 = _closure1_slot1;
                var11 = 10;
                var11 = var13[var11];
                var12 = var12.bind(var4)(var11);
                var11 = {};
                var13 = 24;
                var11.size = var13;
                var11 = var3.bind(var4)(var12, var11);
                var5.trailing = var11;
                var10 = var3.bind(var4)(var10, var5);
                var5 = 'header';
                var1[var5] = var10;
                var5 = {};
                var10 = var8.contentContainer;
                var8 = new Array(2);
                var8[0] = var10;
                var8[1] = var9;
                var5.style = var8;
                var5.children = var7;
                var6 = var3.bind(var4)(var6, var5);
                var5 = 'children';
                var1[var5] = var6;
                var0 = var0.name;
                var0 = var3.bind(var4)(var2, var1, var0);
                return var0;
        }
    };
    var2.AppLauncherCommandOptionActionSheet = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1468, 33, 1297, 671, 4933, 5213, 5211, 3278, 9300, 2]);