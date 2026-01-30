// modules/main_tabs_v2/native/shared_components/navigator/PressableNavigatorBackIcon.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
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
    var6 = var3.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.View;
    var _closure1_slot4 = var7;
    var3 = var3.Image;
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var10 = var3.BADGE_SIZE;
    var _closure1_slot7 = var10;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot8 = var7;
    var3 = var3.jsxs;
    var _closure1_slot9 = var3;
    var3 = 5;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {
        'position': 'absolute',
        'minWidth': null,
        'height': null,
        'top': 10,
        'left': 8,
        'flexShrink': 0,
        'flexGrow': 1,
        'zIndex': 100
    };
    var9.minWidth = var10;
    var9.height = var10;
    var3.maskWrapper = var9;
    var9 = {};
    var10 = 6;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_BASE_LOW;
    var9.backgroundColor = var12;
    var3.maskStroke = var9;
    var9 = {
        'padding': 8,
        'zIndex': 100,
        'width': 40,
        'height': 40,
        'borderRadius': 20
    };
    var3.actionButtonPressable = var9;
    var9 = {};
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.INTERACTIVE_TEXT_DEFAULT;
    var9.tintColor = var10;
    var3.actionButtonIcon = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot10 = var3;
    var3 = var6.forwardRef;
    var1 = function(arg0, arg1) { // Environment: var1
        _fun70919: for (var _fun70919_ip = 0;;) switch (_fun70919_ip) {
            case 0:
                var3 = arg0;
                var7 = var3.navigation;
                var _closure2_slot0 = var7;
                var5 = var3.onPress;
                var _closure2_slot1 = var5;
                var10 = null;
                var2 = Object.create(var10);
                var11 = 0;
                var2.navigation = var11;
                var2.onPress = var11;
                var24 = {};
                var23 = var3;
                var22 = var2;
                var6 = copyDataProperties(var24, var23, var22);
                var1 = _closure1_slot10;
                var3 = undefined;
                var15 = var1.bind(var3)();
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 7;
                var1 = var9[var1];
                var12 = var8.bind(var3)(var1);
                var4 = var12.useStateFromStores;
                var1 = _closure1_slot6;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var0
                    var1 = _closure1_slot6;
                    var0 = var1.getTotalMentionCount;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var18 = var4.bind(var12)(var2, var1);
                var _closure2_slot2 = var18;
                var12 = _closure1_slot3;
                var4 = var12.useMemo;
                var2 = new Array(1);
                var2[0] = var18;
                var1 = function() { // Environment: var0
                    _fun70921: for (var _fun70921_ip = 0;;) switch (_fun70921_ip) {
                        case 0:
                            var2 = _closure2_slot2;
                            var1 = 10;
                            if (!(!(var2 < var1))) {
                                _fun70921_ip = 74;
                                continue _fun70921
                            }
                        case 14:
                            var1 = _closure2_slot2;
                            var0 = 100;
                            if (!(!(var1 < var0))) {
                                _fun70921_ip = 48;
                                continue _fun70921
                            }
                        case 25:
                            var0 = {};
                            var2 = _closure1_slot7;
                            var1 = 12;
                            var1 = var2 + var1;
                            var0.minWidth = var1;
                            _fun70921_ip = 72;
                            continue _fun70921;
                        case 48:
                            var1 = {};
                            var3 = _closure1_slot7;
                            var2 = 8;
                            var2 = var3 + var2;
                            var1.minWidth = var2;
                            var0 = var1;
                        case 72:
                            return var0;
                        case 74:
                            var0 = undefined;
                            return var0;
                    }
                };
                var16 = var4.bind(var12)(var1, var2);
                var1 = 8;
                var2 = var9[var1];
                var4 = var8.bind(var3)(var2);
                var2 = var4.useGradientValue;
                var1 = var9[var1];
                var1 = var8.bind(var3)(var1);
                var1 = var1.GradientPercentage;
                var1 = var1.START;
                var17 = var2.bind(var4)(var1);
                if (!(var10 == var17)) {
                    _fun70919_ip = 208;
                    continue _fun70919
                }
            case 197:
                var1 = var15.maskStroke;
                var17 = var1.backgroundColor;
            case 208:
                var4 = _closure1_slot3;
                var2 = var4.useCallback;
                var1 = new Array(2);
                var1[0] = var7;
                var1[1] = var5;
                var0 = function() { // Environment: var0
                    _fun70922: for (var _fun70922_ip = 0;;) switch (_fun70922_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var2 = null;
                            if (!(var2 != var1)) {
                                _fun70922_ip = 25;
                                continue _fun70922
                            }
                        case 13:
                            var3 = _closure2_slot1;
                            var1 = undefined;
                            var1 = var3.bind(var1)();
                            _fun70922_ip = 47;
                            continue _fun70922;
                        case 25:
                            var1 = _closure2_slot0;
                            if (!(var2 != var1)) {
                                _fun70922_ip = 47;
                                continue _fun70922
                            }
                        case 33:
                            var1 = _closure2_slot0;
                            var0 = var1.goBack;
                            var0 = var0.bind(var1)();
                        case 47:
                            var0 = undefined;
                            return var0;
                    }
                };
                var7 = var2.bind(var4)(var0, var1);
                var2 = _closure1_slot8;
                var1 = _closure1_slot1;
                var8 = _closure1_slot2;
                var0 = 9;
                var0 = var8[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var5 = _closure1_slot0;
                var4 = 10;
                var4 = var8[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.PressableOpacity;
                var4 = {};
                var8 = arg1;
                var4.ref = var8;
                var24 = var4;
                var23 = var6;
                var6 = copyDataProperties(var24, var23);
                var8 = 'button';
                var6 = 'accessibilityRole';
                var4[var6] = var8;
                if (!(!(var18 > var11))) {
                    _fun70919_ip = 383;
                    continue _fun70919
                }
            case 326:
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var6 = 11;
                var8 = var13[var6];
                var8 = var12.bind(var3)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var6 = var13[var6];
                var6 = var12.bind(var3)(var6);
                var6 = var6.t;
                var6 = var6["13/7kX"];
                var8 = var8.bind(var9)(var6);
                _fun70919_ip = 448;
                continue _fun70919;
            case 383:
                var9 = _closure1_slot0;
                var19 = _closure1_slot2;
                var6 = 11;
                var12 = var19[var6];
                var12 = var9.bind(var3)(var12);
                var13 = var12.intl;
                var12 = var13.formatToPlainString;
                var6 = var19[var6];
                var6 = var9.bind(var3)(var6);
                var6 = var6.t;
                var9 = var6.vxFYaM;
                var6 = {};
                var6.mentionCount = var18;
                var8 = var12.bind(var13)(var9, var6);
            case 448:
                var6 = 'accessibilityLabel';
                var4[var6] = var8;
                var6 = 'onPress';
                var4[var6] = var7;
                var7 = var15.actionButtonPressable;
                var6 = 'style';
                var4[var6] = var7;
                var8 = _closure1_slot9;
                var7 = _closure1_slot4;
                var6 = {};
                var13 = _closure1_slot8;
                var12 = _closure1_slot5;
                var9 = {};
                var20 = _closure1_slot1;
                var21 = _closure1_slot2;
                var19 = 12;
                var19 = var21[var19];
                var19 = var20.bind(var3)(var19);
                var9.source = var19;
                var19 = {};
                var20 = var15.actionButtonIcon;
                var20 = var20.tintColor;
                var19.tintColor = var20;
                var9.style = var19;
                var12 = var13.bind(var3)(var12, var9);
                var9 = new Array(2);
                var9[0] = var12;
                var11 = var18 > var11;
                var10 = null;
                if (!var11) {
                    _fun70919_ip = 656;
                    continue _fun70919
                }
            case 571:
                var13 = _closure1_slot8;
                var12 = _closure1_slot4;
                var11 = {};
                var15 = var15.maskWrapper;
                var11.style = var15;
                var15 = _closure1_slot1;
                var19 = _closure1_slot2;
                var14 = 13;
                var14 = var19[var14];
                var15 = var15.bind(var3)(var14);
                var14 = {};
                var14.value = var18;
                var18 = 99;
                var14.maxValue = var18;
                var14.backgroundColor = var17;
                var17 = false;
                var14.unread = var17;
                var14.style = var16;
                var14 = var13.bind(var3)(var15, var14);
                var11.children = var14;
                var10 = var13.bind(var3)(var12, var11);
            case 656:
                var9[1] = var10;
                var6.children = var9;
                var7 = var8.bind(var3)(var7, var6);
                var6 = 'children';
                var4[var6] = var7;
                var4 = var2.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 14;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/main_tabs_v2/native/shared_components/navigator/PressableNavigatorBackIcon.tsx';
    var3 = var4.bind(var5)(var3);
    var2.PressableNavigatorBackIcon = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 8585, 8590, 33, 1297, 671, 566, 3154, 8851, 4864, 1234, 8852, 8853, 2]);