// uikit-native/refresh/form/FormTitle.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun48032: for (var _fun48032_ip = 0;;) switch (_fun48032_ip) {
        case 0:
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
            var1 = 1;
            var1 = var7[var1];
            var1 = var6.bind(var0)(var1);
            var3 = var1.View;
            var _closure1_slot2 = var3;
            var1 = var1.Platform;
            var1 = 2;
            var1 = var7[var1];
            var1 = var6.bind(var0)(var1);
            var11 = var1.Fonts;
            var1 = 3;
            var1 = var7[var1];
            var1 = var6.bind(var0)(var1);
            var3 = var1.jsx;
            var _closure1_slot3 = var3;
            var1 = var1.jsxs;
            var _closure1_slot4 = var1;
            var1 = 4;
            var3 = var7[var1];
            var5 = var6.bind(var0)(var3);
            var3 = var5.isAndroid;
            var5 = var3.bind(var5)();
            var3 = 58;
            if (!var5) {
                _fun48032_ip = 176;
                continue _fun48032
            }
        case 173:
            var3 = 48;
        case 176:
            var1 = var7[var1];
            var5 = var6.bind(var0)(var1);
            var1 = var5.isAndroid;
            var5 = var1.bind(var5)();
            var1 = 48;
            if (!var5) {
                _fun48032_ip = 204;
                continue _fun48032
            }
        case 201:
            var1 = 56;
        case 204:
            var5 = 5;
            var5 = var7[var5];
            var9 = var6.bind(var0)(var5);
            var8 = var9.createStyles;
            var5 = {};
            var13 = 16;
            var10 = {
                'flexDirection': 'row',
                'justifyContent': 'space-between',
                'paddingTop': 16,
                'paddingBottom': 16
            };
            var5.titleWrapper = var10;
            var10 = {};
            var10.paddingHorizontal = var13;
            var5.horizontalPadding = var10;
            var10 = {};
            var13 = 26;
            var10.paddingTop = var13;
            var5.thinTitle = var10;
            var10 = {};
            var11 = var11.PRIMARY_SEMIBOLD;
            var10.fontFamily = var11;
            var11 = 13;
            var10.fontSize = var11;
            var11 = 6;
            var13 = var7[var11];
            var13 = var12.bind(var0)(var13);
            var13 = var13.colors;
            var13 = var13.TEXT_SUBTLE;
            var10.color = var13;
            var5.titleText = var10;
            var10 = {};
            var11 = var7[var11];
            var11 = var12.bind(var0)(var11);
            var11 = var11.unsafe_rawColors;
            var11 = var11.RED_400;
            var10.color = var11;
            var5.error = var10;
            var5 = var8.bind(var9)(var5);
            var _closure1_slot5 = var5;
            var5 = 8;
            var5 = var7[var5];
            var7 = var6.bind(var0)(var5);
            var6 = var7.fileFinishedImporting;
            var5 = 'uikit-native/refresh/form/FormTitle.tsx';
            var5 = var6.bind(var7)(var5);
            var4 = function arg0() {
                _fun48033: for (var _fun48033_ip = 0;;) switch (_fun48033_ip) {
                    case 0:
                        var0 = arg0;
                        var10 = var0.title;
                        var5 = var0.icon;
                        var8 = var0.numberOfLines;
                        var9 = var0.uppercaseTitle;
                        var3 = undefined;
                        if (!(var9 === var3)) {
                            _fun48033_ip = 33;
                            continue _fun48033
                        }
                    case 31:
                        var9 = true;
                    case 33:
                        var15 = var0.thinTitle;
                        if (!(var15 === var3)) {
                            _fun48033_ip = 45;
                            continue _fun48033
                        }
                    case 43:
                        var15 = false;
                    case 45:
                        var12 = var0.error;
                        if (!(var12 === var3)) {
                            _fun48033_ip = 56;
                            continue _fun48033
                        }
                    case 54:
                        var12 = false;
                    case 56:
                        var11 = var0.inset;
                        if (!(var11 === var3)) {
                            _fun48033_ip = 68;
                            continue _fun48033
                        }
                    case 66:
                        var11 = false;
                    case 68:
                        var7 = var0.viewStyle;
                        var14 = var0.textStyle;
                        var0 = _closure1_slot5;
                        var13 = var0.bind(var3)();
                        var2 = _closure1_slot4;
                        var1 = _closure1_slot2;
                        var0 = {};
                        var16 = var13.titleWrapper;
                        var6 = new Array(4);
                        var6[0] = var16;
                        if (!var15) {
                            _fun48033_ip = 124;
                            continue _fun48033
                        }
                    case 118:
                        var15 = var13.thinTitle;
                    case 124:
                        var6[1] = var15;
                        var11 = !var11;
                        if (!var11) {
                            _fun48033_ip = 140;
                            continue _fun48033
                        }
                    case 134:
                        var11 = var13.horizontalPadding;
                    case 140:
                        var6[2] = var11;
                        var6[3] = var7;
                        var0.style = var6;
                        var7 = _closure1_slot3;
                        var6 = _closure1_slot0;
                        var11 = _closure1_slot1;
                        var4 = 7;
                        var4 = var11[var4];
                        var4 = var6.bind(var3)(var4);
                        var6 = var4.LegacyText;
                        var4 = {};
                        var15 = var13.titleText;
                        var11 = new Array(3);
                        var11[0] = var15;
                        var11[1] = var14;
                        if (!var12) {
                            _fun48033_ip = 210;
                            continue _fun48033
                        }
                    case 205:
                        var12 = var13.error;
                    case 210:
                        var11[2] = var12;
                        var4.style = var11;
                        var4.numberOfLines = var8;
                        var8 = 'header';
                        var4.accessibilityRole = var8;
                        var8 = var10;
                        if (!var9) {
                            _fun48033_ip = 247;
                            continue _fun48033
                        }
                    case 237:
                        var9 = var10.toUpperCase;
                        var8 = var9.bind(var10)();
                    case 247:
                        var4.children = var8;
                        var6 = var7.bind(var3)(var6, var4);
                        var4 = new Array(2);
                        var4[0] = var6;
                        var4[1] = var5;
                        var0.children = var4;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                }
            };
            var2.default = var4;
            var2.FORM_TITLE_HEIGHT = var3;
            var2.THIN_FORM_TITLE_HEIGHT = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 660, 33, 478, 1297, 671, 4841, 2]);