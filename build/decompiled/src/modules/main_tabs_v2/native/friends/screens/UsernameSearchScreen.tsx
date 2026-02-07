// modules/main_tabs_v2/native/friends/screens/UsernameSearchScreen.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
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
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var11 = 1;
    var3 = var5[var11];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ScrollView;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.AnalyticEvents;
    var _closure1_slot5 = var6;
    var3 = var3.AnalyticsSections;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot7 = var6;
    var6 = var3.Fragment;
    var _closure1_slot8 = var6;
    var3 = var3.jsxs;
    var _closure1_slot9 = var3;
    var3 = 4;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var8.flex = var11;
    var9 = 5;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_BASE_LOWER;
    var8.backgroundColor = var12;
    var3.content = var8;
    var8 = {};
    var12 = 36;
    var8.paddingTop = var12;
    var3.iosPaddingThemeAdjust = var8;
    var8 = {};
    var8.flexGrow = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_BASE_LOWER;
    var8.backgroundColor = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_16;
    var8.paddingHorizontal = var11;
    var3.container = var8;
    var8 = {
        'marginTop': null,
        'backgroundColor': 'transparent',
        'paddingHorizontal': 0
    };
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_32;
    var8.marginTop = var11;
    var3.inputContainer = var8;
    var8 = {};
    var11 = 'center';
    var8.textAlign = var11;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.spacing;
    var9 = var9.PX_16;
    var8.marginTop = var9;
    var3.titleText = var8;
    var8 = {};
    var9 = 'none';
    var8.textTransform = var9;
    var3.headerText = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot10 = var3;
    var3 = 14;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/main_tabs_v2/native/friends/screens/UsernameSearchScreen.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun109214: for (var _fun109214_ip = 0;;) switch (_fun109214_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.navigation;
                var _closure2_slot0 = var7;
                var0 = _closure1_slot10;
                var3 = undefined;
                var13 = var0.bind(var3)();
                var6 = _closure1_slot3;
                var4 = var6.useEffect;
                var2 = function() { // Environment: var1
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 6;
                    var1 = var1[var0];
                    var0 = undefined;
                    var4 = var2.bind(var0)(var1);
                    var3 = var4.track;
                    var1 = _closure1_slot5;
                    var2 = var1.FRIEND_ADD_VIEWED;
                    var1 = {};
                    var5 = _closure1_slot6;
                    var5 = var5.FRIENDS_ADD_BY_USERNAME_MODAL;
                    var1.friend_add_type = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var0 = new Array(0);
                var0 = var4.bind(var6)(var2, var0);
                var2 = _closure1_slot1;
                var4 = _closure1_slot2;
                var0 = 7;
                var0 = var4[var0];
                var0 = var2.bind(var3)(var0);
                var0 = var0.bind(var3)();
                var17 = var0.insets;
                var2 = var6.useRef;
                var0 = null;
                var12 = var2.bind(var6)(var0);
                var _closure2_slot1 = var12;
                var5 = var6.useEffect;
                var2 = new Array(1);
                var2[0] = var7;
                var1 = function() { // Environment: var1
                    var3 = _closure2_slot0;
                    var2 = var3.addListener;
                    var1 = 'transitionEnd';
                    var0 = function(arg0) { // Environment: var0
                        _fun109217: for (var _fun109217_ip = 0;;) switch (_fun109217_ip) {
                            case 0:
                                var0 = arg0;
                                var0 = var0.data;
                                var0 = var0.closing;
                                if (var0) {
                                    _fun109217_ip = 45;
                                    continue _fun109217
                                }
                            case 17:
                                var0 = _closure2_slot1;
                                var1 = var0.current;
                                var0 = null;
                                if (!(var0 != var1)) {
                                    _fun109217_ip = 45;
                                    continue _fun109217
                                }
                            case 35:
                                var0 = var1.focus;
                                var0 = var0.bind(var1)();
                            case 45:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var1 = var5.bind(var6)(var1, var2);
                var2 = _closure1_slot0;
                var1 = 8;
                var1 = var4[var1];
                var5 = var2.bind(var3)(var1);
                var1 = var5.useClientThemesOverride;
                var9 = var1.bind(var5)();
                var1 = 9;
                var1 = var4[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.isIOS;
                var1 = var1.bind(var2)();
                var16 = null;
                if (!var1) {
                    _fun109214_ip = 191;
                    continue _fun109214
                }
            case 179:
                var16 = null;
                if (!(var16 !== var9)) {
                    _fun109214_ip = 191;
                    continue _fun109214
                }
            case 185:
                var16 = var13.iosPaddingThemeAdjust;
            case 191:
                var2 = _closure1_slot9;
                var1 = _closure1_slot8;
                var0 = {};
                var7 = _closure1_slot7;
                var11 = _closure1_slot1;
                var18 = _closure1_slot2;
                var4 = 10;
                var4 = var18[var4];
                var5 = var11.bind(var3)(var4);
                var4 = {};
                var6 = true;
                var4.absolute = var6;
                var5 = var7.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var5 = 11;
                var5 = var18[var5];
                var6 = var11.bind(var3)(var5);
                var5 = {};
                var10 = var13.content;
                var8 = new Array(2);
                var8[0] = var10;
                var8[1] = var9;
                var5.style = var8;
                var9 = _closure1_slot4;
                var8 = {
                    'alwaysBounceVertical': false,
                    'keyboardShouldPersistTaps': 'handled'
                };
                var15 = false;
                var19 = var13.container;
                var10 = new Array(3);
                var10[0] = var19;
                var10[1] = var16;
                var16 = {};
                var19 = var17.bottom;
                var17 = 5;
                var17 = var18[var17];
                var17 = var11.bind(var3)(var17);
                var17 = var17.spacing;
                var17 = var17.PX_16;
                var17 = var19 + var17;
                var16.paddingBottom = var17;
                var10[2] = var16;
                var8.contentContainerStyle = var10;
                var10 = 12;
                var10 = var18[var10];
                var11 = var11.bind(var3)(var10);
                var10 = {};
                var16 = var13.inputContainer;
                var10.style = var16;
                var10.autoFocusInput = var15;
                var17 = _closure1_slot0;
                var14 = 13;
                var15 = var18[var14];
                var15 = var17.bind(var3)(var15);
                var16 = var15.intl;
                var15 = var16.string;
                var14 = var18[var14];
                var14 = var17.bind(var3)(var14);
                var14 = var14.t;
                var14 = var14.YEOwDM;
                var14 = var15.bind(var16)(var14);
                var10.headerText = var14;
                var13 = var13.headerText;
                var10.headerTextStyle = var13;
                var10.ref = var12;
                var10 = var7.bind(var3)(var11, var10);
                var8.children = var10;
                var8 = var7.bind(var3)(var9, var8);
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 660, 33, 1297, 671, 795, 4895, 8981, 478, 8795, 5823, 12595, 1234, 2]);