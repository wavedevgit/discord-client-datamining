// uikit-native/refresh/form/FormSection.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun48024: for (var _fun48024_ip = 0;;) switch (_fun48024_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.length;
                var0 = 1;
                var0 = var2 - var0;
                var0 = var1[var0];
                var3 = _closure1_slot3;
                var2 = var3.isValidElement;
                var2 = var2.bind(var3)(var0);
                if (!var2) {
                    _fun48024_ip = 109;
                    continue _fun48024
                }
            case 40:
                var2 = var0.type;
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 8;
                var3 = var3[var1];
                var1 = undefined;
                var1 = var4.bind(var1)(var3);
                if (!(var2 !== var1)) {
                    _fun48024_ip = 109;
                    continue _fun48024
                }
            case 71:
                var1 = var0.props;
                var2 = null;
                if (!(var2 != var1)) {
                    _fun48024_ip = 109;
                    continue _fun48024
                }
            case 82:
                var1 = var0.props;
                var0 = 'error';
                var0 = var0 in var1;
                if (!var0) {
                    _fun48024_ip = 107;
                    continue _fun48024
                }
            case 98:
                var1 = var1.error;
                var0 = var2 != var1;
            case 107:
                return var0;
            case 109:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot9 = var0;
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
    var3 = arg3;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.View;
    var _closure1_slot4 = var6;
    var6 = var3.StyleSheet;
    var3 = var3.Platform;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.TitleStyleType;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot6 = var6;
    var3 = var3.jsxs;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'borderTopWidth': 1,
        'borderColor': null,
        'marginTop': 16
    };
    var9 = 5;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BORDER_SUBTLE;
    var8.borderColor = var11;
    var3.titledSectionHeader = var8;
    var8 = {};
    var11 = 24;
    var8.marginTop = var11;
    var3.titledSectionNoBorder = var8;
    var8 = {};
    var3.titledSectionNoBorderOrMargin = var8;
    var8 = {};
    var8.marginTop = var11;
    var3.emptySectionHeader = var8;
    var8 = {};
    var3.sectionBody = var8;
    var8 = {};
    var3.sectionBodyIOSBorder = var8;
    var8 = {};
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.unsafe_rawColors;
    var11 = var11.RED_400;
    var8.color = var11;
    var3.error = var8;
    var8 = {
        'paddingHorizontal': 16,
        'marginBottom': 24
    };
    var3.redesignCompatContainer = var8;
    var8 = {};
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.CARD_BACKGROUND_DEFAULT;
    var8.backgroundColor = var9;
    var3.redesignCompatFooter = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot8 = var3;
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'uikit-native/refresh/form/FormSection.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun48025: for (var _fun48025_ip = 0;;) switch (_fun48025_ip) {
            case 0:
                var1 = arg0;
                var23 = var1.icon;
                var4 = var1.children;
                var21 = var1.thinTitle;
                var16 = var1.inset;
                var3 = undefined;
                if (!(var16 === var3)) {
                    _fun48025_ip = 35;
                    continue _fun48025
                }
            case 33:
                var16 = false;
            case 35:
                var14 = var1.title;
                var8 = var1.description;
                var18 = var1.accessibilityRole;
                var11 = var1.accessibilityLabel;
                var20 = var1.uppercaseTitle;
                var2 = var1.titleStyleType;
                if (!(var2 === var3)) {
                    _fun48025_ip = 84;
                    continue _fun48025
                }
            case 71:
                var5 = _closure1_slot5;
                var2 = var5.DEFAULT;
            case 84:
                var24 = var1.titleViewStyle;
                var25 = var1.titleTextStyle;
                var15 = var1.sectionBodyStyle;
                var19 = var1.wrapperStyle;
                var22 = var1.error;
                var9 = var1.hint;
                var13 = var1.hasIcons;
                var1 = _closure1_slot8;
                var17 = var1.bind(var3)();
                var7 = _closure1_slot3;
                var5 = var7.useContext;
                var10 = _closure1_slot0;
                var12 = _closure1_slot2;
                var1 = 6;
                var1 = var12[var1];
                var1 = var10.bind(var3)(var1);
                var1 = var1.RedesignCompatContext;
                var1 = var5.bind(var7)(var1);
                if (var1) {
                    _fun48025_ip = 611;
                    continue _fun48025
                }
            case 185:
                var12 = null;
                var1 = var12 != var14;
                var10 = undefined;
                if (!var1) {
                    _fun48025_ip = 339;
                    continue _fun48025
                }
            case 199:
                var1 = var12 != var22;
                var27 = '';
                var26 = var27;
                if (!var1) {
                    _fun48025_ip = 240;
                    continue _fun48025
                }
            case 213:
                var1 = global;
                var1 = var1.HermesInternal;
                var7 = var1.concat;
                var5 = '(';
                var1 = ')';
                var26 = var7.bind(var5)(var22, var1);
            case 240:
                var7 = _closure1_slot6;
                var5 = _closure1_slot1;
                var28 = _closure1_slot2;
                var1 = 10;
                var1 = var28[var1];
                var5 = var5.bind(var3)(var1);
                var1 = {};
                var1.textStyle = var25;
                var1.viewStyle = var24;
                var24 = global;
                var24 = var24.HermesInternal;
                var25 = var24.concat;
                var24 = ' ';
                var24 = var25.bind(var27)(var14, var24, var26);
                var1.title = var24;
                var1.icon = var23;
                var22 = var12 != var22;
                var1.error = var22;
                var1.thinTitle = var21;
                var1.uppercaseTitle = var20;
                var1.inset = var16;
                var10 = var7.bind(var3)(var5, var1);
            case 339:
                var5 = var17.emptySectionHeader;
                var20 = var5;
                if (!(var12 != var10)) {
                    _fun48025_ip = 463;
                    continue _fun48025
                }
            case 352:
                var1 = _closure1_slot5;
                var1 = var1.DEFAULT;
                if (!(var1 !== var2)) {
                    _fun48025_ip = 457;
                    continue _fun48025
                }
            case 366:
                var1 = _closure1_slot5;
                var1 = var1.ANDROID_NO_BORDER;
                if (!(var1 !== var2)) {
                    _fun48025_ip = 405;
                    continue _fun48025
                }
            case 380:
                var1 = _closure1_slot5;
                var1 = var1.NO_BORDER_OR_MARGIN;
                var20 = var5;
                if (!(var1 === var2)) {
                    _fun48025_ip = 463;
                    continue _fun48025
                }
            case 397:
                var20 = var17.titledSectionNoBorderOrMargin;
                _fun48025_ip = 463;
                continue _fun48025;
            case 405:
                var2 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 11;
                var1 = var5[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.isAndroid;
                var1 = var1.bind(var2)();
                if (var1) {
                    _fun48025_ip = 446;
                    continue _fun48025
                }
            case 438:
                var1 = var17.titledSectionHeader;
                _fun48025_ip = 452;
                continue _fun48025;
            case 446:
                var1 = var17.titledSectionNoBorder;
            case 452:
                var20 = var1;
                _fun48025_ip = 463;
                continue _fun48025;
            case 457:
                var20 = var17.titledSectionHeader;
            case 463:
                var5 = _closure1_slot7;
                var2 = _closure1_slot4;
                var1 = {};
                var7 = new Array(2);
                var7[0] = var20;
                var7[1] = var19;
                var1.style = var7;
                var19 = var12 != var18;
                var7 = 'list';
                if (!var19) {
                    _fun48025_ip = 503;
                    continue _fun48025
                }
            case 500:
                var7 = var18;
            case 503:
                var1.accessibilityRole = var7;
                var7 = var14;
                if (!(var12 != var11)) {
                    _fun48025_ip = 517;
                    continue _fun48025
                }
            case 514:
                var7 = var11;
            case 517:
                var1.accessibilityLabel = var7;
                var7 = new Array(4);
                var7[0] = var10;
                var7[1] = var8;
                var11 = _closure1_slot6;
                var10 = _closure1_slot4;
                var8 = {};
                var18 = var17.sectionBody;
                var12 = new Array(3);
                var12[0] = var18;
                var16 = !var16;
                if (!var16) {
                    _fun48025_ip = 569;
                    continue _fun48025
                }
            case 563:
                var16 = var17.sectionBodyIOSBorder;
            case 569:
                var12[1] = var16;
                var12[2] = var15;
                var8.style = var12;
                var8.children = var4;
                var8 = var11.bind(var3)(var10, var8);
                var7[2] = var8;
                var7[3] = var9;
                var1.children = var7;
                var1 = var5.bind(var3)(var2, var1);
                return var1;
            case 611:
                var1 = _closure1_slot3;
                var2 = var1.Children;
                var1 = var2.toArray;
                var2 = var1.bind(var2)(var4);
                var4 = var2.find;
                var1 = function(arg0) { // Environment: var0
                    _fun48026: for (var _fun48026_ip = 0;;) switch (_fun48026_ip) {
                        case 0:
                            var1 = arg0;
                            var3 = _closure1_slot3;
                            var0 = var3.isValidElement;
                            var0 = var0.bind(var3)(var1);
                            if (!var0) {
                                _fun48026_ip = 55;
                                continue _fun48026
                            }
                        case 24:
                            var3 = var1.type;
                            var5 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var2 = 7;
                            var4 = var4[var2];
                            var2 = undefined;
                            var2 = var5.bind(var2)(var4);
                            var0 = var3 === var2;
                        case 55:
                            if (!var0) {
                                _fun48026_ip = 84;
                                continue _fun48026
                            }
                        case 58:
                            var2 = global;
                            var3 = var2.Boolean;
                            var1 = var1.props;
                            var2 = var1.leading;
                            var1 = undefined;
                            var0 = var3.bind(var1)(var2);
                        case 84:
                            return var0;
                    }
                };
                var1 = var4.bind(var2)(var1);
                var5 = null;
                var12 = var5 != var1;
                var1 = var2.filter;
                var0 = function(arg0) { // Environment: var0
                    _fun48027: for (var _fun48027_ip = 0;;) switch (_fun48027_ip) {
                        case 0:
                            var2 = arg0;
                            var3 = _closure1_slot3;
                            var0 = var3.isValidElement;
                            var0 = var0.bind(var3)(var2);
                            var3 = !var0;
                            var0 = !var3;
                            if (var3) {
                                _fun48027_ip = 61;
                                continue _fun48027
                            }
                        case 30:
                            var2 = var2.type;
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var1 = 8;
                            var3 = var3[var1];
                            var1 = undefined;
                            var1 = var4.bind(var1)(var3);
                            var0 = var2 !== var1;
                        case 61:
                            return var0;
                    }
                };
                var11 = var1.bind(var2)(var0);
                var2 = _closure1_slot7;
                var1 = _closure1_slot4;
                var0 = {};
                var4 = {};
                var7 = 24;
                var4.marginBottom = var7;
                var0.style = var4;
                var7 = _closure1_slot6;
                var4 = {};
                var8 = {};
                var10 = 12;
                var8.paddingHorizontal = var10;
                var4.style = var8;
                var10 = _closure1_slot0;
                var15 = _closure1_slot2;
                var8 = 9;
                var8 = var15[var8];
                var8 = var10.bind(var3)(var8);
                var10 = var8.TableRowGroup;
                var8 = {};
                var8.title = var14;
                if (!(var5 != var13)) {
                    _fun48025_ip = 749;
                    continue _fun48025
                }
            case 746:
                var12 = var13;
            case 749:
                var8.hasIcons = var12;
                var12 = _closure1_slot9;
                var12 = var12.bind(var3)(var11);
                var8.hasTrailingText = var12;
                var8.children = var11;
                var8 = var7.bind(var3)(var10, var8);
                var4.children = var8;
                var7 = var7.bind(var3)(var1, var4);
                var4 = new Array(2);
                var4[0] = var7;
                var7 = var5 != var9;
                var5 = null;
                if (!var7) {
                    _fun48025_ip = 838;
                    continue _fun48025
                }
            case 805:
                var8 = _closure1_slot6;
                var7 = _closure1_slot4;
                var6 = {};
                var10 = {};
                var11 = 8;
                var10.marginTop = var11;
                var6.style = var10;
                var6.children = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 838:
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 4837, 33, 1297, 671, 4860, 4854, 5346, 5325, 5373, 478, 2]);