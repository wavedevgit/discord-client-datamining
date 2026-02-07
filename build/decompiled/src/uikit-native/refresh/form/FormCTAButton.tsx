// uikit-native/refresh/form/FormCTAButton.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var15 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var0 = function arg0, arg1() {
        _fun48570: for (var _fun48570_ip = 0;;) switch (_fun48570_ip) {
            case 0:
                var2 = arg0;
                var0 = arg1;
                var3 = _closure1_slot10;
                var3 = var3.BRAND;
                if (!(var3 !== var2)) {
                    _fun48570_ip = 71;
                    continue _fun48570
                }
            case 23:
                var3 = _closure1_slot10;
                var3 = var3.DANGER;
                if (!(var3 !== var2)) {
                    _fun48570_ip = 63;
                    continue _fun48570
                }
            case 37:
                var1 = _closure1_slot10;
                var1 = var1.WARNING;
                if (!(var1 !== var2)) {
                    _fun48570_ip = 55;
                    continue _fun48570
                }
            case 51:
                var1 = undefined;
                return var1;
            case 55:
                var1 = var0.textWarning;
                return var1;
            case 63:
                var1 = var0.textDanger;
                return var1;
            case 71:
                var0 = var0.textBrand;
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var3 = function arg0() {
        _fun48571: for (var _fun48571_ip = 0;;) switch (_fun48571_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.color;
                var3 = undefined;
                if (!(var3 === var4)) {
                    _fun48571_ip = 27;
                    continue _fun48571
                }
            case 14:
                var1 = _closure1_slot10;
                var4 = var1.BRAND;
            case 27:
                var12 = var0.label;
                var1 = var0.fontSize;
                var16 = 16;
                if (!(var3 !== var1)) {
                    _fun48571_ip = 48;
                    continue _fun48571
                }
            case 45:
                var16 = var1;
            case 48:
                var1 = var0.alignLeft;
                var14 = var3 !== var1;
                if (!var14) {
                    _fun48571_ip = 64;
                    continue _fun48571
                }
            case 61:
                var14 = var1;
            case 64:
                var1 = var0.disabled;
                var9 = var3 !== var1;
                if (!var9) {
                    _fun48571_ip = 79;
                    continue _fun48571
                }
            case 76:
                var9 = var1;
            case 79:
                var1 = var0.loading;
                var10 = var3 !== var1;
                if (!var10) {
                    _fun48571_ip = 95;
                    continue _fun48571
                }
            case 92:
                var10 = var1;
            case 95:
                var8 = var0.testID;
                var7 = var0.style;
                var11 = var0.onPress;
                var0 = _closure1_slot9;
                var6 = var0.bind(var3)();
                var2 = _closure1_slot8;
                var1 = _closure1_slot0;
                var13 = _closure1_slot1;
                var0 = 8;
                var0 = var13[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.LegacyText;
                var0 = {};
                var15 = var6.text;
                var13 = new Array(4);
                var13[0] = var15;
                var15 = _closure1_slot11;
                var15 = var15.bind(var3)(var4, var6);
                var13[1] = var15;
                var15 = {};
                var15.fontSize = var16;
                var13[2] = var15;
                if (!var14) {
                    _fun48571_ip = 201;
                    continue _fun48571
                }
            case 195:
                var14 = var6.alignLeft;
            case 201:
                var13[3] = var14;
                var0.style = var13;
                var0.children = var12;
                var12 = var2.bind(var3)(var1, var0);
                if (!var10) {
                    _fun48571_ip = 242;
                    continue _fun48571
                }
            case 222:
                var2 = _closure1_slot8;
                var1 = _closure1_slot3;
                var0 = {};
                var0.color = var4;
                var12 = var2.bind(var3)(var1, var0);
            case 242:
                var2 = _closure1_slot2;
                var1 = var2.useContext;
                var4 = _closure1_slot0;
                var13 = _closure1_slot1;
                var0 = 9;
                var0 = var13[var0];
                var0 = var4.bind(var3)(var0);
                var0 = var0.RedesignCompatContext;
                var0 = var1.bind(var2)(var0);
                var2 = _closure1_slot8;
                var1 = _closure1_slot5;
                var4 = {};
                if (var0) {
                    _fun48571_ip = 423;
                    continue _fun48571
                }
            case 299:
                var13 = var6.sectionBody;
                var0 = new Array(3);
                var0[0] = var13;
                var13 = var9;
                if (!var9) {
                    _fun48571_ip = 324;
                    continue _fun48571
                }
            case 319:
                var13 = var6.disabled;
            case 324:
                var0[1] = var13;
                var0[2] = var7;
                var4.style = var0;
                var13 = _closure1_slot8;
                var7 = _closure1_slot4;
                var0 = {};
                var0.testID = var8;
                var14 = 'button';
                var0.accessibilityRole = var14;
                var0.onPress = var11;
                var14 = var6.button;
                var0.style = var14;
                var14 = var9;
                if (var9) {
                    _fun48571_ip = 382;
                    continue _fun48571
                }
            case 379:
                var14 = var10;
            case 382:
                var0.disabled = var14;
                var15 = _closure1_slot7;
                var14 = _closure1_slot6;
                var14 = var15.bind(var3)(var14);
                var0.android_ripple = var14;
                var0.children = var12;
                var0 = var13.bind(var3)(var7, var0);
                var4.children = var0;
                var0 = var4;
                _fun48571_ip = 508;
                continue _fun48571;
            case 423:
                var6 = var6.rowButton;
                var4.style = var6;
                var7 = _closure1_slot8;
                var6 = _closure1_slot0;
                var13 = _closure1_slot1;
                var5 = 10;
                var5 = var13[var5];
                var5 = var6.bind(var3)(var5);
                var6 = var5.RowButton;
                var5 = {};
                var5.label = var12;
                var5.onPress = var11;
                var11 = false;
                var5.arrow = var11;
                if (var9) {
                    _fun48571_ip = 486;
                    continue _fun48571
                }
            case 483:
                var9 = var10;
            case 486:
                var5.disabled = var9;
                var5.testID = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4.children = var5;
                var0 = var4;
            case 508:
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var1);
    var0 = 0;
    var7 = var6[var0];
    var1 = arg3;
    var0 = undefined;
    var1 = var1.bind(var0)(var7);
    var _closure1_slot2 = var1;
    var1 = 1;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var7 = var1.ActivityIndicator;
    var _closure1_slot3 = var7;
    var7 = var1.Pressable;
    var _closure1_slot4 = var7;
    var7 = var1.Platform;
    var7 = var1.StyleSheet;
    var1 = var1.View;
    var _closure1_slot5 = var1;
    var1 = 2;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var7 = var1.ANDROID_FOREGROUND_RIPPLE;
    var _closure1_slot6 = var7;
    var1 = var1.getThemedRippleConfig;
    var _closure1_slot7 = var1;
    var1 = 3;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var12 = var1.Fonts;
    var1 = 4;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.jsx;
    var _closure1_slot8 = var1;
    var1 = 5;
    var1 = var6[var1];
    var8 = var5.bind(var0)(var1);
    var7 = var8.createStyles;
    var1 = {};
    var9 = {};
    var14 = 16;
    var9.paddingHorizontal = var14;
    var1.rowButton = var9;
    var9 = {};
    var1.sectionBody = var9;
    var9 = {
        'minHeight': 44,
        'justifyContent': 'center'
    };
    var1.button = var9;
    var10 = 'left';
    var9 = {
        'lineHeight': 44,
        'paddingHorizontal': 17,
        'textAlign': 'left'
    };
    var1.text = var9;
    var9 = {};
    var13 = 6;
    var11 = var6[var13];
    var18 = var15.bind(var0)(var11);
    var17 = var12.PRIMARY_SEMIBOLD;
    var11 = 7;
    var16 = var6[var11];
    var16 = var15.bind(var0)(var16);
    var16 = var16.colors;
    var16 = var16.CONTROL_BRAND_FOREGROUND;
    var20 = var18.bind(var0)(var17, var16, var14);
    var21 = var9;
    var16 = copyDataProperties(var21, var20);
    var1.textBrand = var9;
    var9 = {};
    var16 = var6[var13];
    var18 = var15.bind(var0)(var16);
    var17 = var12.PRIMARY_SEMIBOLD;
    var16 = var6[var11];
    var16 = var15.bind(var0)(var16);
    var16 = var16.colors;
    var16 = var16.TEXT_FEEDBACK_CRITICAL;
    var20 = var18.bind(var0)(var17, var16, var14);
    var21 = var9;
    var16 = copyDataProperties(var21, var20);
    var1.textDanger = var9;
    var9 = {};
    var13 = var6[var13];
    var13 = var15.bind(var0)(var13);
    var12 = var12.PRIMARY_SEMIBOLD;
    var11 = var6[var11];
    var11 = var15.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.STATUS_WARNING;
    var20 = var13.bind(var0)(var12, var11, var14);
    var21 = var9;
    var11 = copyDataProperties(var21, var20);
    var1.textWarning = var9;
    var9 = {};
    var9.textAlign = var10;
    var1.alignLeft = var9;
    var9 = {};
    var10 = 0.5;
    var9.opacity = var10;
    var1.disabled = var9;
    var1 = var7.bind(var8)(var1);
    var _closure1_slot9 = var1;
    var1 = {};
    var7 = 'brand';
    var1.BRAND = var7;
    var7 = 'danger';
    var1.DANGER = var7;
    var7 = 'warning';
    var1.WARNING = var7;
    var _closure1_slot10 = var1;
    var3.Colors = var1;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'uikit-native/refresh/form/FormCTAButton.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.FormCTAButtonColors = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 4876, 660, 33, 1297, 4682, 671, 4878, 4899, 5432, 2]);