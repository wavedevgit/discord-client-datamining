// modules/app_launcher/native/screens/home/InThisServerSection.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var0 = function arg0() {
        _fun107853: for (var _fun107853_ip = 0;;) switch (_fun107853_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.appItem;
                var1 = var1.onAppSelected;
                var _closure2_slot0 = var1;
                var1 = _closure1_slot7;
                var4 = undefined;
                var10 = var1.bind(var4)();
                var0 = var0.application;
                var _closure2_slot1 = var0;
                var2 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 10;
                var1 = var7[var1];
                var3 = var2.bind(var4)(var1);
                var1 = var3.getAppLauncherIconSource;
                var11 = var1.bind(var3)(var0);
                var3 = _closure1_slot6;
                var1 = 11;
                var1 = var7[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.PressableScale;
                var1 = {};
                var5 = function() {
                    _fun107854: for (var _fun107854_ip = 0;;) switch (_fun107854_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            var3 = null;
                            var1 = var3 != var1;
                            if (!var1) {
                                _fun107854_ip = 24;
                                continue _fun107854
                            }
                        case 16:
                            var2 = _closure2_slot1;
                            var1 = var3 != var2;
                        case 24:
                            if (!var1) {
                                _fun107854_ip = 88;
                                continue _fun107854
                            }
                        case 27:
                            var2 = _closure2_slot0;
                            var1 = {};
                            var0 = _closure2_slot1;
                            var1.application = var0;
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var0 = 12;
                            var3 = var3[var0];
                            var0 = undefined;
                            var3 = var4.bind(var0)(var3);
                            var3 = var3.AppLauncherSectionName;
                            var3 = var3.APPS_IN_THIS_SERVER;
                            var1.sectionName = var3;
                            var0 = var2.bind(var0)(var1);
                        case 88:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1.onPress = var5;
                var5 = var10.appCardContainer;
                var1.style = var5;
                var7 = null;
                var5 = var7 != var11;
                if (!var5) {
                    _fun107853_ip = 184;
                    continue _fun107853
                }
            case 128:
                var9 = _closure1_slot5;
                var8 = _closure1_slot1;
                var12 = _closure1_slot2;
                var5 = 13;
                var5 = var12[var5];
                var8 = var8.bind(var4)(var5);
                var5 = {};
                var5.iconSource = var11;
                var10 = var10.iconContainer;
                var5.wrapperStyle = var10;
                var10 = 36;
                var5.iconSize = var10;
                var7 = var9.bind(var4)(var8, var5);
            case 184:
                var5 = new Array(2);
                var5[0] = var7;
                var8 = _closure1_slot5;
                var7 = _closure1_slot0;
                var9 = _closure1_slot2;
                var6 = 7;
                var6 = var9[var6];
                var6 = var7.bind(var4)(var6);
                var7 = var6.Text;
                var6 = {
                    'variant': 'text-md/semibold',
                    'color': 'mobile-text-heading-primary',
                    'lineClamp': 1
                };
                var9 = var0.name;
                var6.children = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[1] = var6;
                var1.children = var5;
                var0 = var0.id;
                var0 = var3.bind(var4)(var2, var1, var0);
                return var0;
        }
    };
    var _closure1_slot8 = var0;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var1);
    var0 = 0;
    var4 = var6[var0];
    var1 = arg3;
    var0 = undefined;
    var1 = var1.bind(var0)(var4);
    var1 = 1;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var4 = var1.View;
    var _closure1_slot3 = var4;
    var1 = var1.ScrollView;
    var _closure1_slot4 = var1;
    var1 = 2;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var4 = var1.jsx;
    var _closure1_slot5 = var4;
    var1 = var1.jsxs;
    var _closure1_slot6 = var1;
    var1 = 3;
    var1 = var6[var1];
    var8 = var5.bind(var0)(var1);
    var7 = var8.createStyles;
    var4 = {};
    var1 = {};
    var9 = 16;
    var1.marginBottom = var9;
    var4.container = var1;
    var1 = {};
    var11 = 'center';
    var1.justifyContent = var11;
    var4.headerContainer = var1;
    var1 = {
        'position': 'absolute',
        'right': 0
    };
    var4.viewAll = var1;
    var1 = 8;
    var9 = {
        'marginTop': 8,
        'overflow': 'visible'
    };
    var4.scrollView = var9;
    var9 = {};
    var9.gap = var1;
    var4.scrollViewContentContainer = var9;
    var9 = {};
    var10 = 4;
    var13 = var6[var10];
    var13 = var12.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.CARD_BACKGROUND_DEFAULT;
    var9.backgroundColor = var13;
    var13 = var6[var10];
    var13 = var12.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.lg;
    var9.borderRadius = var13;
    var10 = var6[var10];
    var10 = var12.bind(var0)(var10);
    var10 = var10.shadows;
    var15 = var10.SHADOW_LOW;
    var16 = var9;
    var10 = copyDataProperties(var16, var15);
    var12 = 12;
    var10 = 'paddingLeft';
    var9[var10] = var12;
    var10 = 'paddingRight';
    var9[var10] = var12;
    var10 = 'paddingVertical';
    var9[var10] = var12;
    var12 = 'row';
    var10 = 'flexDirection';
    var9[var10] = var12;
    var10 = 'justifyContent';
    var9[var10] = var11;
    var10 = 'alignItems';
    var9[var10] = var11;
    var4.appCardContainer = var9;
    var9 = {
        'marginEnd': 12,
        'justifyContent': 'space-around'
    };
    var4.iconContainer = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot7 = var4;
    var4 = 14;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/app_launcher/native/screens/home/InThisServerSection.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function arg0() {
        _fun107855: for (var _fun107855_ip = 0;;) switch (_fun107855_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.items;
                var1 = var0.onAppSelected;
                var _closure2_slot0 = var1;
                var0 = var0.onViewAllSelected;
                var _closure2_slot1 = var0;
                var3 = undefined;
                var _closure2_slot2 = var3;
                var _closure2_slot4 = var3;
                var0 = _closure1_slot7;
                var9 = var0.bind(var3)();
                var2 = new Array(0);
                var _closure2_slot3 = var2;
                var0 = var6.length;
                var1 = 0;
                if (!(var1 !== var0)) {
                    _fun107855_ip = 603;
                    continue _fun107855
                }
            case 73:
                var4 = var6.forEach;
                var0 = function(arg0) { // Environment: var15
                    _fun107856: for (var _fun107856_ip = 0;;) switch (_fun107856_ip) {
                        case 0:
                            var2 = arg0;
                            var4 = var2.type;
                            var6 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var5 = 5;
                            var3 = var0[var5];
                            var0 = undefined;
                            var3 = var6.bind(var0)(var3);
                            var3 = var3.AppLauncherHomeListItemType;
                            var3 = var3.RECOMMENDATION_APP;
                            if (!(var4 === var3)) {
                                _fun107856_ip = 66;
                                continue _fun107856
                            }
                        case 49:
                            var4 = _closure2_slot3;
                            var3 = var4.push;
                            var3 = var3.bind(var4)(var2);
                        case 66:
                            var3 = var2.type;
                            var4 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var1 = var1[var5];
                            var1 = var4.bind(var0)(var1);
                            var1 = var1.AppLauncherHomeListItemType;
                            var1 = var1.VIEW_ALL;
                            if (!(var3 === var1)) {
                                _fun107856_ip = 111;
                                continue _fun107856
                            }
                        case 104:
                            _closure2_slot2 = var2;
                        case 111:
                            return var0;
                    }
                };
                var0 = var4.bind(var6)(var0);
                var0 = var2.slice;
                var21 = 8;
                var2 = var0.bind(var2)(var1, var21);
                var1 = var2.map;
                var0 = function(arg0) { // Environment: var15
                    var0 = arg0;
                    var4 = _closure1_slot5;
                    var3 = _closure1_slot8;
                    var2 = {};
                    var2.appItem = var0;
                    var1 = _closure2_slot0;
                    var2.onAppSelected = var1;
                    var0 = var0.application;
                    var1 = var0.id;
                    var0 = undefined;
                    var0 = var4.bind(var0)(var3, var2, var1);
                    return var0;
                };
                var2 = var1.bind(var2)(var0);
                var1 = var2.filter;
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 6;
                var0 = var6[var0];
                var0 = var4.bind(var3)(var0);
                var0 = var0.isNotNullish;
                var8 = var1.bind(var2)(var0);
                var1 = _closure2_slot2;
                var11 = null;
                var2 = var11 == var1;
                var0 = undefined;
                if (var2) {
                    _fun107855_ip = 195;
                    continue _fun107855
                }
            case 172:
                var4 = var1.applications;
                var2 = var4.map;
                var1 = function(arg0) { // Environment: var15
                    var0 = arg0;
                    return var0;
                };
                var0 = var2.bind(var4)(var1);
            case 195:
                _closure2_slot4 = var0;
                var2 = _closure1_slot6;
                var1 = _closure1_slot3;
                var0 = {};
                var4 = var9.container;
                var0.style = var4;
                var6 = _closure1_slot6;
                var4 = {};
                var7 = var9.headerContainer;
                var4.style = var7;
                var12 = _closure1_slot5;
                var18 = _closure1_slot0;
                var13 = _closure1_slot2;
                var14 = 7;
                var7 = var13[var14];
                var7 = var18.bind(var3)(var7);
                var10 = var7.Text;
                var7 = {
                    'variant': 'text-lg/bold',
                    'color': 'mobile-text-heading-primary'
                };
                var16 = var13[var21];
                var16 = var18.bind(var3)(var16);
                var17 = var16.intl;
                var16 = var17.string;
                var13 = var13[var21];
                var13 = var18.bind(var3)(var13);
                var13 = var13.t;
                var13 = var13.oJyzCu;
                var13 = var16.bind(var17)(var13);
                var7.children = var13;
                var10 = var12.bind(var3)(var10, var7);
                var7 = new Array(2);
                var7[0] = var10;
                var10 = _closure2_slot2;
                var10 = var11 != var10;
                if (!var10) {
                    _fun107855_ip = 510;
                    continue _fun107855
                }
            case 353:
                var13 = _closure1_slot5;
                var20 = _closure1_slot0;
                var17 = _closure1_slot2;
                var11 = 9;
                var11 = var17[var11];
                var11 = var20.bind(var3)(var11);
                var12 = var11.PressableOpacity;
                var11 = {};
                var16 = var9.viewAll;
                var11.style = var16;
                var15 = function() {
                    _fun107859: for (var _fun107859_ip = 0;;) switch (_fun107859_ip) {
                        case 0:
                            var2 = _closure2_slot4;
                            var0 = null;
                            var0 = var0 != var2;
                            if (!var0) {
                                _fun107859_ip = 26;
                                continue _fun107859
                            }
                        case 16:
                            var2 = _closure2_slot1;
                            var1 = undefined;
                            var0 = var2.bind(var1)();
                        case 26:
                            return var0;
                    }
                };
                var11.onPress = var15;
                var15 = 'button';
                var11.accessibilityRole = var15;
                var16 = _closure1_slot5;
                var14 = var17[var14];
                var14 = var20.bind(var3)(var14);
                var15 = var14.Text;
                var14 = {
                    'variant': 'text-sm/medium',
                    'color': 'text-brand'
                };
                var18 = var17[var21];
                var18 = var20.bind(var3)(var18);
                var19 = var18.intl;
                var18 = var19.string;
                var17 = var17[var21];
                var17 = var20.bind(var3)(var17);
                var17 = var17.t;
                var17 = var17["/qG8v7"];
                var17 = var18.bind(var19)(var17);
                var14.children = var17;
                var14 = var16.bind(var3)(var15, var14);
                var11.children = var14;
                var10 = var13.bind(var3)(var12, var11);
            case 510:
                var7[1] = var10;
                var4.children = var7;
                var6 = var6.bind(var3)(var1, var4);
                var4 = new Array(2);
                var4[0] = var6;
                var7 = _closure1_slot5;
                var6 = _closure1_slot4;
                var5 = {};
                var10 = var9.scrollView;
                var5.style = var10;
                var9 = var9.scrollViewContentContainer;
                var5.contentContainerStyle = var9;
                var9 = true;
                var5.horizontal = var9;
                var9 = false;
                var5.showsHorizontalScrollIndicator = var9;
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            case 603:
                var0 = null;
                return var0;
        }
    };
    var2.default = var3;
    var2.IN_THIS_SERVER_ITEM_MAX = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 13914, 1304, 3941, 1234, 4904, 13881, 7048, 7756, 10582, 2]);