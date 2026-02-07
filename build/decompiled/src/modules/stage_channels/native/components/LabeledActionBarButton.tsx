// modules/stage_channels/native/components/LabeledActionBarButton.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
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
    var8 = 0;
    var4 = var6[var8];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var4);
    var7 = 1;
    var3 = var6[var7];
    var3 = var5.bind(var0)(var3);
    var4 = var3.Image;
    var _closure1_slot2 = var4;
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var13 = var3.Fonts;
    var3 = 3;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var4 = var3.jsx;
    var _closure1_slot4 = var4;
    var3 = var3.jsxs;
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var6[var3];
    var9 = var5.bind(var0)(var3);
    var4 = var9.createStyles;
    var3 = {};
    var10 = {
        'minHeight': 56,
        'minWidth': 56,
        'alignItems': 'center',
        'justifyContent': 'center',
        'borderRadius': 28
    };
    var11 = 5;
    var11 = var6[var11];
    var11 = var5.bind(var0)(var11);
    var11 = var11.ACTION_BAR_BUTTON_BACKGROUND;
    var10.backgroundColor = var11;
    var3.buttonContainer = var10;
    var10 = {};
    var11 = 12;
    var10.marginHorizontal = var11;
    var3.container = var10;
    var10 = {
        'minWidth': '50%',
        'maxWidth': '70%',
        'flexShrink': 1
    };
    var3.containerWithLabel = var10;
    var10 = {
        'marginHorizontal': 12,
        'borderRadius': 28
    };
    var3.pressable = var10;
    var10 = {
        'display': 'flex',
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var3.buttonContent = var10;
    var10 = {
        'marginStart': 8,
        'fontSize': 14,
        'color': null,
        'fontFamily': null,
        'paddingStart': 3
    };
    var11 = 6;
    var14 = var6[var11];
    var14 = var12.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.WHITE;
    var10.color = var14;
    var13 = var13.PRIMARY_SEMIBOLD;
    var10.fontFamily = var13;
    var3.buttonText = var10;
    var10 = {
        'marginStart': 0,
        'marginEnd': 8
    };
    var3.rightTextMargin = var10;
    var10 = {};
    var3.notifiedButtonContainer = var10;
    var10 = {
        'position': 'absolute',
        'top': 4294967292,
        'right': 4294967292,
        'height': 24,
        'width': 24,
        'borderRadius': 12,
        'borderWidth': 4,
        'borderColor': null,
        'alignItems': 'center',
        'justifyContent': 'center'
    };
    var13 = var6[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.unsafe_rawColors;
    var13 = var13.PRIMARY_760;
    var10.borderColor = var13;
    var11 = var6[var11];
    var11 = var12.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.CONTROL_CRITICAL_PRIMARY_BACKGROUND_DEFAULT;
    var10.backgroundColor = var11;
    var3.notificationArea = var10;
    var10 = {};
    var11 = 16;
    var10.lineHeight = var11;
    var3.notificationText = var10;
    var3 = var4.bind(var9)(var3);
    var _closure1_slot6 = var3;
    var3 = {};
    var3.LEFT = var8;
    var4 = 'LEFT';
    var3[var8] = var4;
    var3.RIGHT = var7;
    var4 = 'RIGHT';
    var3[var7] = var4;
    var _closure1_slot7 = var3;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/stage_channels/native/components/LabeledActionBarButton.tsx';
    var4 = var5.bind(var6)(var4);
    var2.IconPosition = var3;
    var1 = function(arg0) { // Environment: var1
        _fun68754: for (var _fun68754_ip = 0;;) switch (_fun68754_ip) {
            case 0:
                var2 = arg0;
                var14 = var2.backgroundColor;
                var19 = var2.imageStyle;
                var11 = var2.children;
                var20 = var2.source;
                var18 = var2.disabled;
                var23 = var2.label;
                var17 = var2.iconPosition;
                var3 = undefined;
                if (!(var17 === var3)) {
                    _fun68754_ip = 59;
                    continue _fun68754
                }
            case 46:
                var0 = _closure1_slot7;
                var17 = var0.LEFT;
            case 59:
                var1 = {
                    'backgroundColor': 0,
                    'imageStyle': 0,
                    'children': 0,
                    'source': 0,
                    'disabled': 0,
                    'label': 0,
                    'iconPosition': 0
                };
                var15 = null;
                var30 = var1;
                var29 = null;
                var0 = silentSetPrototypeOf(var30, var29);
                var30 = {};
                var29 = var2;
                var28 = var1;
                var7 = copyDataProperties(var30, var29, var28);
                var0 = _closure1_slot6;
                var26 = var0.bind(var3)();
                var2 = _closure1_slot4;
                var1 = _closure1_slot3;
                var0 = {};
                var5 = var26.container;
                var4 = new Array(2);
                var4[0] = var5;
                var6 = var15 != var23;
                var5 = null;
                if (!var6) {
                    _fun68754_ip = 145;
                    continue _fun68754
                }
            case 139:
                var5 = var26.containerWithLabel;
            case 145:
                var4[1] = var5;
                var0.style = var4;
                var6 = _closure1_slot4;
                var5 = _closure1_slot0;
                var8 = _closure1_slot1;
                var4 = 7;
                var4 = var8[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.PressableOpacity;
                var4 = {};
                var8 = 'button';
                var4.accessibilityRole = var8;
                var4.disabled = var18;
                var8 = var26.pressable;
                var4.style = var8;
                var30 = var4;
                var29 = var7;
                var7 = copyDataProperties(var30, var29);
                var9 = _closure1_slot5;
                var8 = _closure1_slot3;
                var7 = {};
                var12 = var26.buttonContainer;
                var10 = new Array(3);
                var10[0] = var12;
                var12 = {};
                var13 = 1;
                if (!var18) {
                    _fun68754_ip = 259;
                    continue _fun68754
                }
            case 249:
                var13 = 0.25;
            case 259:
                var12.opacity = var13;
                var10[1] = var12;
                var13 = var15 != var14;
                var12 = null;
                if (!var13) {
                    _fun68754_ip = 285;
                    continue _fun68754
                }
            case 276:
                var13 = {};
                var13.backgroundColor = var14;
                var12 = var13;
            case 285:
                var10[2] = var12;
                var7.style = var10;
                var13 = _closure1_slot5;
                var12 = _closure1_slot3;
                var10 = {};
                var18 = var26.buttonContent;
                var14 = new Array(2);
                var14[0] = var18;
                var21 = var15 != var23;
                var18 = null;
                if (!var21) {
                    _fun68754_ip = 338;
                    continue _fun68754
                }
            case 326:
                var21 = {};
                var22 = 16;
                var21.paddingHorizontal = var22;
                var18 = var21;
            case 338:
                var14[1] = var18;
                var10.style = var14;
                var14 = _closure1_slot7;
                var14 = var14.LEFT;
                var18 = var17 === var14;
                if (!var18) {
                    _fun68754_ip = 387;
                    continue _fun68754
                }
            case 363:
                var22 = _closure1_slot4;
                var21 = _closure1_slot2;
                var14 = {};
                var14.source = var20;
                var14.style = var19;
                var18 = var22.bind(var3)(var21, var14);
            case 387:
                var14 = new Array(3);
                var14[0] = var18;
                var18 = var15 != var23;
                var15 = null;
                if (!var18) {
                    _fun68754_ip = 499;
                    continue _fun68754
                }
            case 404:
                var22 = _closure1_slot4;
                var21 = _closure1_slot0;
                var24 = _closure1_slot1;
                var18 = 8;
                var18 = var24[var18];
                var18 = var21.bind(var3)(var18);
                var21 = var18.LegacyText;
                var18 = {};
                var24 = 2;
                var18.numberOfLines = var24;
                var25 = var26.buttonText;
                var24 = new Array(2);
                var24[0] = var25;
                var25 = _closure1_slot7;
                var25 = var25.RIGHT;
                var25 = var17 === var25;
                if (!var25) {
                    _fun68754_ip = 481;
                    continue _fun68754
                }
            case 475:
                var25 = var26.rightTextMargin;
            case 481:
                var24[1] = var25;
                var18.style = var24;
                var18.children = var23;
                var15 = var22.bind(var3)(var21, var18);
            case 499:
                var14[1] = var15;
                var15 = _closure1_slot7;
                var15 = var15.RIGHT;
                var15 = var17 === var15;
                if (!var15) {
                    _fun68754_ip = 544;
                    continue _fun68754
                }
            case 520:
                var18 = _closure1_slot4;
                var17 = _closure1_slot2;
                var16 = {};
                var16.source = var20;
                var16.style = var19;
                var15 = var18.bind(var3)(var17, var16);
            case 544:
                var14[2] = var15;
                var10.children = var14;
                var12 = var13.bind(var3)(var12, var10);
                var10 = new Array(2);
                var10[0] = var12;
                var10[1] = var11;
                var7.children = var10;
                var8 = var9.bind(var3)(var8, var7);
                var7 = 'children';
                var4[var7] = var8;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.LabeledActionButton = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 483, 33, 1297, 4874, 671, 4904, 4878, 2]);