// uikit-native/refresh/form/FormConstants.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun44336: for (var _fun44336_ip = 0;;) switch (_fun44336_ip) {
        case 0:
            var9 = require;
            var14 = metroImportDefault;
            var2 = exports;
            var10 = dependencyMap;
            var _closure1_slot0 = var9;
            var _closure1_slot1 = var10;
            var3 = global;
            var6 = var3.Object;
            var5 = var6.defineProperty;
            var4 = {};
            var12 = true;
            var4.value = var12;
            var0 = '__esModule';
            var0 = var5.bind(var6)(var2, var0, var4);
            var0 = 0;
            var4 = var10[var0];
            var0 = undefined;
            var4 = var9.bind(var0)(var4);
            var4 = var4.Platform;
            var5 = 1;
            var5 = var10[var5];
            var5 = var14.bind(var0)(var5);
            var _closure1_slot2 = var5;
            var5 = 2;
            var5 = var10[var5];
            var6 = var9.bind(var0)(var5);
            var5 = var6.isAndroid;
            var5 = var5.bind(var6)();
            var7 = 24;
            if (!var5) {
                _fun44336_ip = 120;
                continue _fun44336
            }
        case 117:
            var7 = 32;
        case 120:
            var5 = 3;
            var6 = var10[var5];
            var6 = var14.bind(var0)(var6);
            var13 = var6.internal;
            var11 = var13.resolveSemanticColor;
            var6 = var10[var5];
            var6 = var14.bind(var0)(var6);
            var6 = var6.themes;
            var8 = var6.DARK;
            var6 = var10[var5];
            var6 = var14.bind(var0)(var6);
            var6 = var6.colors;
            var6 = var6.MOBILE_ANDROID_BUTTON_BACKGROUND_RIPPLE;
            var6 = var11.bind(var13)(var8, var6);
            var _closure1_slot3 = var6;
            var8 = var10[var5];
            var8 = var14.bind(var0)(var8);
            var13 = var8.internal;
            var11 = var13.resolveSemanticColor;
            var8 = var10[var5];
            var8 = var14.bind(var0)(var8);
            var8 = var8.themes;
            var8 = var8.LIGHT;
            var5 = var10[var5];
            var5 = var14.bind(var0)(var5);
            var5 = var5.colors;
            var5 = var5.MOBILE_ANDROID_BUTTON_BACKGROUND_RIPPLE;
            var5 = var11.bind(var13)(var8, var5);
            var _closure1_slot4 = var5;
            var11 = var3.parseInt;
            var8 = var4.Version;
            var4 = 10;
            var4 = var11.bind(var0)(var8, var4);
            var _closure1_slot5 = var4;
            var11 = var3.Object;
            var8 = var11.freeze;
            var4 = {};
            var4.foreground = var12;
            var4 = var8.bind(var11)(var4);
            var12 = var3.Object;
            var11 = var12.freeze;
            var8 = {};
            var8 = var11.bind(var12)(var8);
            var _closure1_slot6 = var8;
            var3 = var3.Map;
            var8 = var3.prototype;
            var8 = Object.create(var8, {
                constructor: {
                    value: var3
                }
            });
            var18 = var8;
            var3 = new var18[var3](var17);
            var3 = var3 instanceof Object ? var3 : var8;
            var _closure1_slot7 = var3;
            var3 = {};
            var8 = 'default';
            var3.DEFAULT = var8;
            var8 = 'no_border';
            var3.ANDROID_NO_BORDER = var8;
            var8 = 'no_border_or_margin';
            var3.NO_BORDER_OR_MARGIN = var8;
            var8 = 5;
            var8 = var10[var8];
            var10 = var9.bind(var0)(var8);
            var9 = var10.fileFinishedImporting;
            var8 = 'uikit-native/refresh/form/FormConstants.tsx';
            var8 = var9.bind(var10)(var8);
            var2.FORM_ROW_VERTICAL_PADDING = var7;
            var2.RIPPLE_DARK_COLOR = var6;
            var2.RIPPLE_LIGHT_COLOR = var5;
            var2.ANDROID_FOREGROUND_RIPPLE = var4;
            var2.TitleStyleType = var3;
            var1 = function(arg0) { // Original name: getThemedRippleConfig, environment: var1
                _fun44337: for (var _fun44337_ip = 0;;) switch (_fun44337_ip) {
                    case 0:
                        var1 = arg0;
                        var0 = var1.foreground;
                        var9 = var1.radius;
                        var7 = var1.cornerRadius;
                        var8 = var1.borderless;
                        var3 = var1.color;
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot1;
                        var1 = 2;
                        var1 = var5[var1];
                        var5 = undefined;
                        var4 = var4.bind(var5)(var1);
                        var1 = var4.isAndroid;
                        var1 = var1.bind(var4)();
                        if (var1) {
                            _fun44337_ip = 76;
                            continue _fun44337
                        }
                    case 70:
                        var1 = _closure1_slot6;
                        return var1;
                    case 76:
                        var4 = _closure1_slot5;
                        var1 = 23;
                        var6 = var4 >= var1;
                        if (!var6) {
                            _fun44337_ip = 93;
                            continue _fun44337
                        }
                    case 90:
                        var6 = var0;
                    case 93:
                        var1 = null;
                        if (!(var1 == var3)) {
                            _fun44337_ip = 156;
                            continue _fun44337
                        }
                    case 99:
                        var4 = _closure1_slot0;
                        var10 = _closure1_slot1;
                        var0 = 4;
                        var0 = var10[var0];
                        var5 = var4.bind(var5)(var0);
                        var4 = var5.isThemeLight;
                        var0 = _closure1_slot2;
                        var0 = var0.theme;
                        var0 = var4.bind(var5)(var0);
                        if (var0) {
                            _fun44337_ip = 149;
                            continue _fun44337
                        }
                    case 143:
                        var0 = _closure1_slot3;
                        _fun44337_ip = 153;
                        continue _fun44337;
                    case 149:
                        var0 = _closure1_slot4;
                    case 153:
                        var3 = var0;
                    case 156:
                        var0 = var3.toString;
                        var0 = var0.bind(var3)();
                        var0 = '' + var0;
                        var0 = var0 + var7;
                        var0 = var0 + var9;
                        var4 = var0 + var6;
                        var5 = _closure1_slot7;
                        var0 = var5.get;
                        var0 = var0.bind(var5)(var4);
                        var10 = var3;
                        if (!(var1 == var0)) {
                            _fun44337_ip = 263;
                            continue _fun44337
                        }
                    case 201:
                        var1 = global;
                        var5 = var1.Object;
                        var3 = var5.freeze;
                        var1 = {};
                        var1.color = var10;
                        var1.radius = var9;
                        var1.borderless = var8;
                        var1.cornerRadius = var7;
                        var1.foreground = var6;
                        var1 = var3.bind(var5)(var1);
                        var3 = _closure1_slot7;
                        var2 = var3.set;
                        var2 = var2.bind(var3)(var4, var1);
                        return var1;
                    case 263:
                        return var0;
                }
            };
            var2.getThemedRippleConfig = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 3155, 478, 671, 3165, 2]);