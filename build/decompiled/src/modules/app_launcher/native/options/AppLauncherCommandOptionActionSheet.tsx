// modules/app_launcher/native/options/AppLauncherCommandOptionActionSheet.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var7 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var11 = 1;
    var3 = var5[var11];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var12 = var3.DEFAULT_CONTENT_PADDING;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot4 = var7;
    var3 = 4;
    var3 = var5[var3];
    var9 = var4.bind(var0)(var3);
    var8 = var9.createStyles;
    var3 = {};
    var10 = {};
    var13 = 5;
    var13 = var5[var13];
    var13 = var6.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BASE_LOWER;
    var10.backgroundColor = var13;
    var3.actionSheetBackground = var10;
    var10 = {};
    var13 = 'transparent';
    var10.backgroundColor = var13;
    var3.titleContainer = var10;
    var10 = {};
    var13 = 'center';
    var10.alignItems = var13;
    var3.titleWrapper = var10;
    var10 = {
        'paddingHorizontal': 12,
        'textAlign': 'center'
    };
    var3.subtitleWrapper = var10;
    var10 = {};
    var10.paddingHorizontal = var12;
    var10.paddingTop = var12;
    var10.flex = var11;
    var3.contentContainer = var10;
    var3 = var8.bind(var9)(var3);
    var _closure1_slot5 = var3;
    var3 = 6;
    var3 = var5[var3];
    var6 = var6.bind(var0)(var3);
    var3 = {};
    var8 = 24;
    var3.size = var8;
    var3 = var7.bind(var0)(var6, var3);
    var _closure1_slot6 = var3;
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/app_launcher/native/options/AppLauncherCommandOptionActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun106177: for (var _fun106177_ip = 0;;) switch (_fun106177_ip) {
            case 0:
                var3 = arg0;
                var0 = var3.option;
                var7 = var3.children;
                var9 = var3.contentContainerStyles;
                var10 = var3.scrollable;
                var4 = undefined;
                if (!(var10 === var4)) {
                    _fun106177_ip = 36;
                    continue _fun106177
                }
            case 34:
                var10 = true;
            case 36:
                var6 = var3.startExpanded;
                if (!(var6 === var4)) {
                    _fun106177_ip = 48;
                    continue _fun106177
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
                var14 = _closure1_slot0;
                var16 = _closure1_slot2;
                var1 = 7;
                var1 = var16[var1];
                var1 = var14.bind(var4)(var1);
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
                var5 = 8;
                var5 = var16[var5];
                var5 = var14.bind(var4)(var5);
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
                var13 = {};
                var17 = 'flex-start';
                var13.alignSelf = var17;
                var12.style = var13;
                var13 = 9;
                var13 = var16[var13];
                var13 = var14.bind(var4)(var13);
                var14 = var13.ActionSheetCloseButton;
                var13 = {};
                var15 = function() {
                    _fun106178: for (var _fun106178_ip = 0;;) switch (_fun106178_ip) {
                        case 0:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 10;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.hideActionSheet;
                            var1 = var1.bind(var2)();
                            var2 = _closure2_slot0;
                            var3 = var2.onDismiss;
                            var2 = null;
                            if (!(var2 != var3)) {
                                _fun106178_ip = 68;
                                continue _fun106178
                            }
                        case 54:
                            var2 = _closure2_slot0;
                            var1 = var2.onDismiss;
                            var1 = var1.bind(var2)();
                        case 68:
                            return var0;
                    }
                };
                var13.onPress = var15;
                var13 = var3.bind(var4)(var14, var13);
                var12.children = var13;
                var12 = var3.bind(var4)(var6, var12);
                var5.leading = var12;
                var12 = var0.displayName;
                var5.title = var12;
                var12 = var0.displayDescription;
                var5.subtitle = var12;
                var11 = _closure1_slot6;
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1468, 33, 1297, 671, 8880, 4907, 5237, 5233, 3279, 2]);