// design/components/Button/native/BaseIconButton.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var9 = metroImportDefault;
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
    var _closure1_slot2 = var6;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = function(arg0, arg1) { // Environment: var1
        _fun57401: for (var _fun57401_ip = 0;;) switch (_fun57401_ip) {
            case 0:
                var1 = arg1;
                var2 = {};
                var0 = 'sm';
                if (!(var0 !== var1)) {
                    _fun57401_ip = 159;
                    continue _fun57401
                }
            case 16:
                var0 = 'md';
                if (!(var0 !== var1)) {
                    _fun57401_ip = 97;
                    continue _fun57401
                }
            case 24:
                var0 = 'lg';
                if (!(var0 === var1)) {
                    _fun57401_ip = 219;
                    continue _fun57401
                }
            case 35:
                var0 = {};
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var1 = 3;
                var6 = var5[var1];
                var3 = undefined;
                var6 = var4.bind(var3)(var6);
                var6 = var6.LARGE_BUTTON_PADDING;
                var0.paddingHorizontal = var6;
                var1 = var5[var1];
                var1 = var4.bind(var3)(var1);
                var1 = var1.LARGE_BUTTON_PADDING;
                var0.paddingVertical = var1;
                var2 = var0;
                _fun57401_ip = 219;
                continue _fun57401;
            case 97:
                var0 = {};
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var1 = 3;
                var6 = var5[var1];
                var3 = undefined;
                var6 = var4.bind(var3)(var6);
                var6 = var6.MEDIUM_BUTTON_PADDING;
                var0.paddingHorizontal = var6;
                var1 = var5[var1];
                var1 = var4.bind(var3)(var1);
                var1 = var1.MEDIUM_BUTTON_PADDING;
                var0.paddingVertical = var1;
                var2 = var0;
                _fun57401_ip = 219;
                continue _fun57401;
            case 159:
                var0 = {};
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var1 = 3;
                var6 = var5[var1];
                var3 = undefined;
                var6 = var4.bind(var3)(var6);
                var6 = var6.SMALL_BUTTON_PADDING;
                var0.paddingHorizontal = var6;
                var1 = var5[var1];
                var1 = var4.bind(var3)(var1);
                var1 = var1.SMALL_BUTTON_PADDING;
                var0.paddingVertical = var1;
                var2 = var0;
            case 219:
                var0 = {};
                var1 = {
                    'flexShrink': 0,
                    'flexGrow': 0,
                    'alignSelf': 'center'
                };
                var0.button = var1;
                var1 = {};
                var8 = var1;
                var7 = var2;
                var2 = copyDataProperties(var8, var7);
                var0.pill = var1;
                return var0;
        }
    };
    var3 = var7.bind(var8)(var3);
    var _closure1_slot4 = var3;
    var3 = 4;
    var3 = var5[var3];
    var8 = var9.bind(var0)(var3);
    var7 = var8.createAnimatedComponent;
    var3 = 5;
    var3 = var5[var3];
    var3 = var9.bind(var0)(var3);
    var3 = var7.bind(var8)(var3);
    var _closure1_slot5 = var3;
    var3 = var6.forwardRef;
    var1 = function(arg0, arg1) { // Environment: var1
        _fun57402: for (var _fun57402_ip = 0;;) switch (_fun57402_ip) {
            case 0:
                var20 = arg0;
                var4 = var20.style;
                var16 = var20.pillStyle;
                var0 = var20.variant;
                var13 = 'primary';
                var3 = undefined;
                if (!(var3 !== var0)) {
                    _fun57402_ip = 32;
                    continue _fun57402
                }
            case 29:
                var13 = var0;
            case 32:
                var14 = var20.size;
                if (!(var3 === var14)) {
                    _fun57402_ip = 70;
                    continue _fun57402
                }
            case 41:
                var1 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 3;
                var0 = var2[var0];
                var0 = var1.bind(var3)(var0);
                var14 = var0.DEFAULT_BUTTON_SIZE;
            case 70:
                var9 = var20.maxFontSizeMultiplier;
                var8 = var20.loading;
                var10 = var20.icon;
                var1 = var20.scaleAmountInPx;
                var0 = 4;
                var19 = var0;
                if (!(var3 !== var1)) {
                    _fun57402_ip = 106;
                    continue _fun57402
                }
            case 103:
                var19 = var1;
            case 106:
                var1 = _closure1_slot4;
                var15 = var1.bind(var3)(var13, var14);
                var5 = _closure1_slot0;
                var17 = _closure1_slot1;
                var0 = var17[var0];
                var1 = var5.bind(var3)(var0);
                var0 = var1.useSharedValue;
                var18 = 0;
                var6 = var0.bind(var1)(var18);
                var0 = 6;
                var1 = var17[var0];
                var2 = var5.bind(var3)(var1);
                var1 = var2.useIconTintStyles;
                var12 = var1.bind(var2)(var13);
                var0 = var17[var0];
                var2 = var5.bind(var3)(var0);
                var1 = var2.useIconSizeStyles;
                var0 = true;
                var11 = var1.bind(var2)(var14, var0, var9);
                var23 = 3;
                var0 = var17[var23];
                var0 = var5.bind(var3)(var0);
                var21 = var0.LARGE_BUTTON_HEIGHT;
                var9 = 'sm';
                if (!(var9 !== var14)) {
                    _fun57402_ip = 255;
                    continue _fun57402
                }
            case 222:
                var0 = 'md';
                if (!(var0 === var14)) {
                    _fun57402_ip = 278;
                    continue _fun57402
                }
            case 230:
                var1 = _closure1_slot0;
                var0 = _closure1_slot1;
                var0 = var0[var23];
                var0 = var1.bind(var3)(var0);
                var21 = var0.MEDIUM_BUTTON_HEIGHT;
                _fun57402_ip = 278;
                continue _fun57402;
            case 255:
                var1 = _closure1_slot0;
                var0 = _closure1_slot1;
                var0 = var0[var23];
                var0 = var1.bind(var3)(var0);
                var21 = var0.SMALL_BUTTON_HEIGHT;
            case 278:
                var0 = global;
                var2 = var0.Math;
                var1 = var2.max;
                var22 = _closure1_slot0;
                var0 = _closure1_slot1;
                var0 = var0[var23];
                var0 = var22.bind(var3)(var0);
                var0 = var0.MINIMUM_HIT_AREA;
                var21 = var0 - var21;
                var0 = 2;
                var0 = var21 / var0;
                var18 = var1.bind(var2)(var0, var18);
                var2 = _closure1_slot3;
                var0 = 7;
                var0 = var17[var0];
                var0 = var5.bind(var3)(var0);
                var1 = var0.BaseButton;
                var0 = {};
                var26 = var0;
                var25 = var20;
                var20 = copyDataProperties(var26, var25);
                var21 = arg1;
                var20 = 'ref';
                var0[var20] = var21;
                var21 = var15.button;
                var20 = new Array(2);
                var20[0] = var21;
                var20[1] = var4;
                var4 = 'style';
                var0[var4] = var20;
                var4 = 'pressed';
                var0[var4] = var6;
                var4 = 'scaleAmountInPx';
                var0[var4] = var19;
                var4 = 'hitSlop';
                var0[var4] = var18;
                var4 = 8;
                var4 = var17[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.ButtonPill;
                var4 = {};
                var17 = var15.pill;
                var15 = new Array(2);
                var15[0] = var17;
                var15[1] = var16;
                var4.style = var15;
                var4.variant = var13;
                var4.size = var14;
                var4.loading = var8;
                var8 = 'xs';
                var13 = 'lg';
                if (!(var13 === var14)) {
                    _fun57402_ip = 501;
                    continue _fun57402
                }
            case 498:
                var8 = var9;
            case 501:
                var4.loaderSize = var8;
                var4.pressed = var6;
                var8 = _closure1_slot2;
                var6 = var8.isValidElement;
                var8 = var6.bind(var8)(var10);
                var6 = var10;
                if (var8) {
                    _fun57402_ip = 568;
                    continue _fun57402
                }
            case 532:
                var9 = _closure1_slot3;
                var8 = _closure1_slot5;
                var7 = {};
                var7.source = var10;
                var10 = new Array(2);
                var10[0] = var12;
                var10[1] = var11;
                var7.style = var10;
                var6 = var9.bind(var3)(var8, var7);
            case 568:
                var4.children = var6;
                var5 = var2.bind(var3)(var5, var4);
                var4 = 'children';
                var0[var4] = var5;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'design/components/Button/native/BaseIconButton.native.tsx';
    var3 = var4.bind(var5)(var3);
    var2.BaseIconButton = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 33, 1297, 4047, 3679, 4045, 4048, 4052, 4054, 2]);