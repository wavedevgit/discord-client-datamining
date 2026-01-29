// uikit-native/Tooltip.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var0 = global;
    var5 = var0.Object;
    var3 = var5.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var5)(var2, var0, var1);
    var0 = 0;
    var3 = var7[var0];
    var1 = metroImportAll;
    var0 = undefined;
    var1 = var1.bind(var0)(var3);
    var _closure1_slot2 = var1;
    var1 = 1;
    var1 = var7[var1];
    var1 = var6.bind(var0)(var1);
    var1 = var1.View;
    var _closure1_slot3 = var1;
    var1 = 2;
    var1 = var7[var1];
    var1 = var6.bind(var0)(var1);
    var13 = var1.Fonts;
    var1 = 3;
    var1 = var7[var1];
    var1 = var6.bind(var0)(var1);
    var3 = var1.jsx;
    var _closure1_slot4 = var3;
    var1 = var1.jsxs;
    var _closure1_slot5 = var1;
    var3 = {};
    var1 = 'UP';
    var3.UP = var1;
    var1 = 'DOWN';
    var3.DOWN = var1;
    var _closure1_slot6 = var3;
    var1 = {};
    var5 = 'CENTER';
    var1.CENTER = var5;
    var5 = 'RIGHT';
    var1.RIGHT = var5;
    var5 = 'LEFT';
    var1.LEFT = var5;
    var _closure1_slot7 = var1;
    var5 = 4;
    var5 = var7[var5];
    var9 = var6.bind(var0)(var5);
    var8 = var9.createStyles;
    var5 = {};
    var10 = {
        'padding': 10,
        'borderRadius': null,
        'alignSelf': 'flex-start',
        'minWidth': 60,
        'alignItems': 'center'
    };
    var11 = 5;
    var14 = var7[var11];
    var14 = var12.bind(var0)(var14);
    var14 = var14.radii;
    var14 = var14.xs;
    var10.borderRadius = var14;
    var14 = var7[var11];
    var14 = var12.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_BRAND;
    var10.backgroundColor = var14;
    var5.container = var10;
    var10 = {};
    var14 = var13.PRIMARY_MEDIUM;
    var10.fontFamily = var14;
    var14 = 12;
    var10.fontSize = var14;
    var14 = var7[var11];
    var14 = var12.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.WHITE;
    var10.color = var14;
    var5.label = var10;
    var10 = {
        'fontFamily': null,
        'fontSize': 16,
        'lineHeight': 20,
        'marginBottom': 4
    };
    var13 = var13.PRIMARY_SEMIBOLD;
    var10.fontFamily = var13;
    var13 = var7[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.WHITE;
    var10.color = var13;
    var5.title = var10;
    var10 = {
        'width': 0,
        'height': 0,
        'borderStyle': 'solid',
        'borderLeftColor': 'transparent',
        'borderRightColor': 'transparent'
    };
    var13 = var7[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BRAND;
    var10.borderTopColor = var13;
    var11 = var7[var11];
    var11 = var12.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_BRAND;
    var10.borderBottomColor = var11;
    var5.arrow = var10;
    var5 = var8.bind(var9)(var5);
    var _closure1_slot8 = var5;
    var5 = 8;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'uikit-native/Tooltip.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function(arg0) { // Original name: Tooltip, environment: var4
        _fun68764: for (var _fun68764_ip = 0;;) switch (_fun68764_ip) {
            case 0:
                var1 = arg0;
                var4 = var1.style;
                var10 = var1.arrowStyle;
                var21 = var1.label;
                var22 = var1.title;
                var17 = var1.containerStyle;
                var23 = var1.labelStyle;
                var16 = var1.children;
                var15 = var1.arrowWidth;
                var3 = undefined;
                if (!(var15 === var3)) {
                    _fun68764_ip = 58;
                    continue _fun68764
                }
            case 55:
                var15 = 16;
            case 58:
                var13 = var1.arrowHeight;
                if (!(var13 === var3)) {
                    _fun68764_ip = 71;
                    continue _fun68764
                }
            case 68:
                var13 = 8;
            case 71:
                var8 = var1.arrowOffset;
                if (!(var8 === var3)) {
                    _fun68764_ip = 85;
                    continue _fun68764
                }
            case 83:
                var8 = 0;
            case 85:
                var _closure2_slot0 = var8;
                var11 = var1.arrowPosition;
                if (!(var11 === var3)) {
                    _fun68764_ip = 112;
                    continue _fun68764
                }
            case 99:
                var2 = _closure1_slot7;
                var11 = var2.LEFT;
            case 112:
                var _closure2_slot1 = var11;
                var7 = var1.arrowDirection;
                if (!(var7 === var3)) {
                    _fun68764_ip = 139;
                    continue _fun68764
                }
            case 126:
                var2 = _closure1_slot6;
                var7 = var2.UP;
            case 139:
                var14 = var1.onLayout;
                var1 = _closure1_slot8;
                var9 = var1.bind(var3)();
                var5 = _closure1_slot2;
                var2 = var5.useMemo;
                var1 = new Array(2);
                var1[0] = var11;
                var1[1] = var8;
                var0 = function() { // Environment: var0
                    _fun68765: for (var _fun68765_ip = 0;;) switch (_fun68765_ip) {
                        case 0:
                            var3 = _closure2_slot1;
                            var2 = _closure1_slot7;
                            var2 = var2.LEFT;
                            if (!(var2 !== var3)) {
                                _fun68765_ip = 127;
                                continue _fun68765
                            }
                        case 24:
                            var2 = _closure1_slot7;
                            var2 = var2.CENTER;
                            if (!(var2 !== var3)) {
                                _fun68765_ip = 114;
                                continue _fun68765
                            }
                        case 38:
                            var2 = _closure1_slot7;
                            var2 = var2.RIGHT;
                            if (!(var2 !== var3)) {
                                _fun68765_ip = 91;
                                continue _fun68765
                            }
                        case 52:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot1;
                            var0 = 6;
                            var2 = var2[var0];
                            var0 = undefined;
                            var4 = var3.bind(var0)(var2);
                            var3 = var4.assertNever;
                            var2 = _closure2_slot1;
                            var2 = var3.bind(var4)(var2);
                            return var0;
                        case 91:
                            var0 = {};
                            var2 = 'flex-end';
                            var0.alignSelf = var2;
                            var2 = _closure2_slot0;
                            var0.right = var2;
                            return var0;
                        case 114:
                            var0 = {};
                            var2 = 'center';
                            var0.alignSelf = var2;
                            return var0;
                        case 127:
                            var0 = {};
                            var2 = 'flex-start';
                            var0.alignSelf = var2;
                            var1 = _closure2_slot0;
                            var0.left = var1;
                            return var0;
                    }
                };
                var11 = var2.bind(var5)(var0, var1);
                var2 = _closure1_slot5;
                var1 = _closure1_slot3;
                var0 = {};
                var0.style = var4;
                var4 = _closure1_slot6;
                var4 = var4.UP;
                var5 = var7 === var4;
                if (!var5) {
                    _fun68764_ip = 295;
                    continue _fun68764
                }
            case 221:
                var12 = _closure1_slot4;
                var8 = _closure1_slot3;
                var4 = {};
                var19 = var9.arrow;
                var18 = new Array(4);
                var18[0] = var19;
                var19 = {};
                var20 = 2;
                var24 = var15 / var20;
                var19.borderLeftWidth = var24;
                var20 = var15 / var20;
                var19.borderRightWidth = var20;
                var19.borderBottomWidth = var13;
                var18[1] = var19;
                var18[2] = var11;
                var18[3] = var10;
                var4.style = var18;
                var5 = var12.bind(var3)(var8, var4);
            case 295:
                var4 = new Array(3);
                var4[0] = var5;
                var12 = _closure1_slot5;
                var8 = _closure1_slot3;
                var5 = {};
                var5.onLayout = var14;
                var18 = var9.container;
                var14 = new Array(2);
                var14[0] = var18;
                var14[1] = var17;
                var5.style = var14;
                var17 = null;
                var14 = var17 != var22;
                var18 = null;
                if (!var14) {
                    _fun68764_ip = 409;
                    continue _fun68764
                }
            case 350:
                var20 = _closure1_slot4;
                var19 = _closure1_slot0;
                var24 = _closure1_slot1;
                var14 = 7;
                var14 = var24[var14];
                var14 = var19.bind(var3)(var14);
                var19 = var14.LegacyText;
                var14 = {};
                var24 = var9.title;
                var14.style = var24;
                var24 = 'header';
                var14.accessibilityRole = var24;
                var14.children = var22;
                var18 = var20.bind(var3)(var19, var14);
            case 409:
                var14 = new Array(3);
                var14[0] = var18;
                var18 = var17 != var21;
                var17 = null;
                if (!var18) {
                    _fun68764_ip = 489;
                    continue _fun68764
                }
            case 426:
                var20 = _closure1_slot4;
                var19 = _closure1_slot0;
                var22 = _closure1_slot1;
                var18 = 7;
                var18 = var22[var18];
                var18 = var19.bind(var3)(var18);
                var19 = var18.LegacyText;
                var18 = {};
                var24 = var9.label;
                var22 = new Array(2);
                var22[0] = var24;
                var22[1] = var23;
                var18.style = var22;
                var18.children = var21;
                var17 = var20.bind(var3)(var19, var18);
            case 489:
                var14[1] = var17;
                var14[2] = var16;
                var5.children = var14;
                var5 = var12.bind(var3)(var8, var5);
                var4[1] = var5;
                var5 = _closure1_slot6;
                var5 = var5.DOWN;
                var5 = var7 === var5;
                if (!var5) {
                    _fun68764_ip = 602;
                    continue _fun68764
                }
            case 528:
                var8 = _closure1_slot4;
                var7 = _closure1_slot3;
                var6 = {};
                var12 = var9.arrow;
                var9 = new Array(4);
                var9[0] = var12;
                var12 = {};
                var14 = 2;
                var16 = var15 / var14;
                var12.borderLeftWidth = var16;
                var14 = var15 / var14;
                var12.borderRightWidth = var14;
                var12.borderTopWidth = var13;
                var9[1] = var12;
                var9[2] = var11;
                var9[3] = var10;
                var6.style = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 602:
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var4;
    var2.TooltipArrowDirections = var3;
    var2.TooltipArrowPositions = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 660, 33, 1297, 671, 1304, 4832, 2]);