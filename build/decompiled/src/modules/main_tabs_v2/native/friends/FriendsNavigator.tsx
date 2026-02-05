// modules/main_tabs_v2/native/friends/FriendsNavigator.tsx
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
        var0 = arg0;
        var7 = var0.onPress;
        var3 = _closure1_slot4;
        var9 = _closure1_slot1;
        var11 = _closure1_slot2;
        var0 = 5;
        var0 = var11[var0];
        var2 = undefined;
        var1 = var9.bind(var2)(var0);
        var0 = {};
        var5 = true;
        var0.isModal = var5;
        var6 = _closure1_slot4;
        var10 = _closure1_slot0;
        var4 = 6;
        var4 = var11[var4];
        var4 = var10.bind(var2)(var4);
        var5 = var4.HeaderIconButton;
        var4 = {};
        var8 = 7;
        var8 = var11[var8];
        var8 = var9.bind(var2)(var8);
        var4.source = var8;
        var4.onPress = var7;
        var7 = 8;
        var8 = var11[var7];
        var8 = var10.bind(var2)(var8);
        var9 = var8.intl;
        var8 = var9.string;
        var7 = var11[var7];
        var7 = var10.bind(var2)(var7);
        var7 = var7.t;
        var7 = var7["3D5yo/"];
        var7 = var8.bind(var9)(var7);
        var4.accessibilityLabel = var7;
        var4 = var6.bind(var2)(var5, var4);
        var0.children = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var _closure1_slot8 = var0;
    var0 = function() {
        var0 = _closure1_slot7;
        var3 = undefined;
        var0 = var0.bind(var3)();
        var _closure2_slot0 = var0;
        var1 = _closure1_slot1;
        var14 = _closure1_slot2;
        var0 = 9;
        var0 = var14[var0];
        var0 = var1.bind(var3)(var0);
        var0 = var0.bind(var3)();
        var _closure2_slot1 = var0;
        var4 = _closure1_slot3;
        var2 = var4.useLayoutEffect;
        var1 = function() { // Environment: var8
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 10;
            var1 = var1[var0];
            var0 = undefined;
            var1 = var2.bind(var0)(var1);
            var0 = var1.trackAppUIViewed;
            var0 = var0.bind(var1)();
            return var0;
        };
        var0 = new Array(0);
        var0 = var2.bind(var4)(var1, var0);
        var13 = _closure1_slot0;
        var0 = 11;
        var0 = var14[var0];
        var1 = var13.bind(var3)(var0);
        var0 = var1.useAccessibilityNativeStackOptions;
        var0 = var0.bind(var1)();
        var _closure2_slot2 = var0;
        var2 = _closure1_slot5;
        var0 = _closure1_slot6;
        var1 = var0.Navigator;
        var0 = {};
        var4 = function arg0() {
            _fun107182: for (var _fun107182_ip = 0;;) switch (_fun107182_ip) {
                case 0:
                    var0 = arg0;
                    var10 = var0.navigation;
                    var5 = var0.route;
                    var1 = var5.params;
                    var6 = null;
                    var2 = var6 == var1;
                    var3 = undefined;
                    var0 = undefined;
                    if (var2) {
                        _fun107182_ip = 40;
                        continue _fun107182
                    }
                case 34:
                    var0 = var1.presentation;
                case 40:
                    var4 = 'card';
                    var2 = var4 === var0;
                    var0 = {};
                    var12 = _closure2_slot1;
                    var13 = var0;
                    var7 = copyDataProperties(var13, var12);
                    var8 = var5.params;
                    var9 = var6 == var8;
                    var7 = undefined;
                    if (var9) {
                        _fun107182_ip = 85;
                        continue _fun107182
                    }
                case 79:
                    var7 = var8.presentation;
                case 85:
                    var8 = null;
                    if (!(var4 !== var7)) {
                        _fun107182_ip = 106;
                        continue _fun107182
                    }
                case 91:
                    var8 = null;
                    if (var2) {
                        _fun107182_ip = 106;
                        continue _fun107182
                    }
                case 96:
                    var7 = _closure2_slot1;
                    var8 = var7.contentStyle;
                case 106:
                    var7 = 'contentStyle';
                    var0[var7] = var8;
                    var7 = _closure2_slot0;
                    var8 = var7.header;
                    var7 = 'headerStyle';
                    var0[var7] = var8;
                    var8 = false;
                    var7 = 'headerShadowVisible';
                    var0[var7] = var8;
                    var8 = function arg0() {
                        var2 = arg0;
                        var5 = var2.children;
                        var0 = null;
                        var1 = Object.create(var0);
                        var0 = 0;
                        var1.children = var0;
                        var8 = {};
                        var7 = var2;
                        var6 = var1;
                        var7 = copyDataProperties(var8, var7, var6);
                        var3 = _closure1_slot4;
                        var1 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var0 = 6;
                        var0 = var2[var0];
                        var2 = undefined;
                        var0 = var1.bind(var2)(var0);
                        var1 = var0.GenericHeaderTitle;
                        var0 = {};
                        var0.title = var5;
                        var8 = var0;
                        var4 = copyDataProperties(var8, var7);
                        var0 = var3.bind(var2)(var1, var0);
                        return var0;
                    };
                    var7 = 'headerTitle';
                    var0[var7] = var8;
                    var8 = 'center';
                    var7 = 'headerTitleAlign';
                    var0[var7] = var8;
                    var7 = var10.getState;
                    var7 = var7.bind(var10)();
                    var8 = var7.routes;
                    var7 = 0;
                    var7 = var8[var7];
                    var8 = var7.key;
                    var7 = var5.key;
                    if (!(var8 === var7)) {
                        _fun107182_ip = 236;
                        continue _fun107182
                    }
                case 211:
                    var8 = var5.params;
                    var9 = var6 == var8;
                    var7 = undefined;
                    if (var9) {
                        _fun107182_ip = 232;
                        continue _fun107182
                    }
                case 226:
                    var7 = var8.presentation;
                case 232:
                    if (!(var4 === var7)) {
                        _fun107182_ip = 272;
                        continue _fun107182
                    }
                case 236:
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var7 = 6;
                    var7 = var9[var7];
                    var8 = var8.bind(var3)(var7);
                    var7 = var8.getRenderModalBackImage;
                    var8 = var7.bind(var8)(var10);
                    _fun107182_ip = 306;
                    continue _fun107182;
                case 272:
                    var9 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var7 = 6;
                    var7 = var11[var7];
                    var9 = var9.bind(var3)(var7);
                    var7 = var9.getRenderModalCloseImage;
                    var8 = var7.bind(var9)(var10);
                case 306:
                    var7 = 'headerLeft';
                    var0[var7] = var8;
                    var5 = var5.params;
                    var6 = var6 == var5;
                    var3 = undefined;
                    if (var6) {
                        _fun107182_ip = 336;
                        continue _fun107182
                    }
                case 330:
                    var3 = var5.presentation;
                case 336:
                    var3 = var4 === var3;
                    if (var3) {
                        _fun107182_ip = 346;
                        continue _fun107182
                    }
                case 343:
                    var3 = var2;
                case 346:
                    var2 = 'fullScreenGestureEnabled';
                    var0[var2] = var3;
                    var12 = _closure2_slot2;
                    var13 = var0;
                    var1 = copyDataProperties(var13, var12);
                    return var0;
            }
        };
        var0.screenOptions = var4;
        var7 = _closure1_slot4;
        var4 = _closure1_slot6;
        var6 = var4.Screen;
        var4 = {};
        var9 = 'root';
        var4.name = var9;
        var9 = function arg0() {
            var0 = arg0;
            var0 = var0.navigation;
            var _closure3_slot0 = var0;
            var0 = {};
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 8;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.TdEu5X;
            var2 = var3.bind(var4)(var2);
            var0.title = var2;
            var1 = function arg0() {
                var3 = _closure1_slot4;
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var0 = 6;
                var0 = var8[var0];
                var2 = undefined;
                var0 = var7.bind(var2)(var0);
                var1 = var0.HeaderTextButton;
                var0 = {};
                var9 = arg0;
                var10 = var0;
                var4 = copyDataProperties(var10, var9);
                var4 = 8;
                var5 = var8[var4];
                var5 = var7.bind(var2)(var5);
                var6 = var5.intl;
                var5 = var6.string;
                var4 = var8[var4];
                var4 = var7.bind(var2)(var4);
                var4 = var4.t;
                var4 = var4.zIJnA6;
                var5 = var5.bind(var6)(var4);
                var4 = 'label';
                var0[var4] = var5;
                var5 = function() {
                    var3 = _closure3_slot0;
                    var2 = var3.navigate;
                    var1 = {};
                    var0 = 'Friends Screen Header';
                    var1.sourcePage = var0;
                    var0 = 'add-friends';
                    var0 = var2.bind(var3)(var0, var1);
                    return var0;
                };
                var4 = 'onPress';
                var0[var4] = var5;
                var0 = var3.bind(var2)(var1, var0);
                return var0;
            };
            var0.headerRight = var1;
            return var0;
        };
        var4.options = var9;
        var9 = function() {
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 12;
            var1 = var1[var0];
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            var0 = var0.default;
            return var0;
        };
        var4.getComponent = var9;
        var6 = var7.bind(var3)(var6, var4);
        var4 = new Array(11);
        var4[0] = var6;
        var9 = _closure1_slot4;
        var6 = _closure1_slot6;
        var7 = var6.Screen;
        var6 = {};
        var10 = 'new-message';
        var6.name = var10;
        var11 = {};
        var10 = 8;
        var12 = var14[var10];
        var12 = var13.bind(var3)(var12);
        var16 = var12.intl;
        var15 = var16.string;
        var12 = var14[var10];
        var12 = var13.bind(var3)(var12);
        var12 = var12.t;
        var12 = var12.jD1qzM;
        var12 = var15.bind(var16)(var12);
        var11.title = var12;
        var6.options = var11;
        var11 = function() {
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 13;
            var1 = var1[var0];
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            var0 = var0.default;
            return var0;
        };
        var6.getComponent = var11;
        var6 = var9.bind(var3)(var7, var6);
        var4[1] = var6;
        var9 = _closure1_slot4;
        var6 = _closure1_slot6;
        var7 = var6.Screen;
        var6 = {};
        var11 = 'gdm';
        var6.name = var11;
        var11 = {};
        var12 = var14[var10];
        var12 = var13.bind(var3)(var12);
        var16 = var12.intl;
        var15 = var16.string;
        var12 = var14[var10];
        var12 = var13.bind(var3)(var12);
        var12 = var12.t;
        var12 = var12["3hF1W4"];
        var12 = var15.bind(var16)(var12);
        var11.title = var12;
        var6.options = var11;
        var11 = function() {
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 14;
            var1 = var1[var0];
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            var0 = var0.default;
            return var0;
        };
        var6.getComponent = var11;
        var6 = var9.bind(var3)(var7, var6);
        var4[2] = var6;
        var9 = _closure1_slot4;
        var6 = _closure1_slot6;
        var7 = var6.Screen;
        var6 = {};
        var11 = 'add-friend';
        var6.name = var11;
        var11 = {};
        var12 = var14[var10];
        var12 = var13.bind(var3)(var12);
        var16 = var12.intl;
        var15 = var16.string;
        var12 = var14[var10];
        var12 = var13.bind(var3)(var12);
        var12 = var12.t;
        var12 = var12.w5uwoI;
        var12 = var15.bind(var16)(var12);
        var11.title = var12;
        var6.options = var11;
        var11 = function() {
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 15;
            var1 = var1[var0];
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            var0 = var0.default;
            return var0;
        };
        var6.getComponent = var11;
        var6 = var9.bind(var3)(var7, var6);
        var4[3] = var6;
        var9 = _closure1_slot4;
        var6 = _closure1_slot6;
        var7 = var6.Screen;
        var6 = {};
        var11 = 'add-friends';
        var6.name = var11;
        var11 = {};
        var12 = var14[var10];
        var12 = var13.bind(var3)(var12);
        var16 = var12.intl;
        var15 = var16.string;
        var12 = var14[var10];
        var12 = var13.bind(var3)(var12);
        var12 = var12.t;
        var12 = var12.zIJnA6;
        var12 = var15.bind(var16)(var12);
        var11.title = var12;
        var6.options = var11;
        var11 = function() {
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 16;
            var1 = var1[var0];
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            var0 = var0.default;
            return var0;
        };
        var6.getComponent = var11;
        var6 = var9.bind(var3)(var7, var6);
        var4[4] = var6;
        var9 = _closure1_slot4;
        var6 = _closure1_slot6;
        var7 = var6.Screen;
        var6 = {};
        var11 = 'username-search';
        var6.name = var11;
        var11 = {};
        var12 = var14[var10];
        var12 = var13.bind(var3)(var12);
        var16 = var12.intl;
        var15 = var16.string;
        var12 = var14[var10];
        var12 = var13.bind(var3)(var12);
        var12 = var12.t;
        var12 = var12.QzVsOs;
        var12 = var15.bind(var16)(var12);
        var11.title = var12;
        var6.options = var11;
        var11 = function() {
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 17;
            var1 = var1[var0];
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            var0 = var0.default;
            return var0;
        };
        var6.getComponent = var11;
        var6 = var9.bind(var3)(var7, var6);
        var4[5] = var6;
        var9 = _closure1_slot4;
        var6 = _closure1_slot6;
        var7 = var6.Screen;
        var6 = {};
        var11 = 'suggested-friends';
        var6.name = var11;
        var11 = {};
        var12 = var14[var10];
        var12 = var13.bind(var3)(var12);
        var16 = var12.intl;
        var15 = var16.string;
        var12 = var14[var10];
        var12 = var13.bind(var3)(var12);
        var12 = var12.t;
        var12 = var12["1uAmCw"];
        var12 = var15.bind(var16)(var12);
        var11.title = var12;
        var6.options = var11;
        var11 = function() {
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 18;
            var1 = var1[var0];
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            var0 = var0.default;
            return var0;
        };
        var6.getComponent = var11;
        var6 = var9.bind(var3)(var7, var6);
        var4[6] = var6;
        var9 = _closure1_slot4;
        var6 = _closure1_slot6;
        var7 = var6.Screen;
        var6 = {};
        var11 = 'requests-settings';
        var6.name = var11;
        var11 = {};
        var12 = var14[var10];
        var12 = var13.bind(var3)(var12);
        var16 = var12.intl;
        var15 = var16.string;
        var12 = var14[var10];
        var12 = var13.bind(var3)(var12);
        var12 = var12.t;
        var12 = var12.XT4hVl;
        var12 = var15.bind(var16)(var12);
        var11.title = var12;
        var6.options = var11;
        var11 = function() {
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 19;
            var1 = var1[var0];
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            var0 = var0.default;
            return var0;
        };
        var6.getComponent = var11;
        var6 = var9.bind(var3)(var7, var6);
        var4[7] = var6;
        var9 = _closure1_slot4;
        var6 = _closure1_slot6;
        var7 = var6.Screen;
        var6 = {};
        var11 = 'requests';
        var6.name = var11;
        var11 = function arg0() {
            var0 = arg0;
            var0 = var0.navigation;
            var _closure3_slot0 = var0;
            var0 = {};
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 8;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.fyA115;
            var2 = var3.bind(var4)(var2);
            var0.title = var2;
            var1 = function() {
                var3 = _closure1_slot4;
                var2 = _closure1_slot8;
                var1 = {};
                var0 = function() {
                    var2 = _closure3_slot0;
                    var1 = var2.navigate;
                    var0 = 'requests-settings';
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var1.onPress = var0;
                var0 = undefined;
                var0 = var3.bind(var0)(var2, var1);
                return var0;
            };
            var0.headerRight = var1;
            return var0;
        };
        var6.options = var11;
        var11 = function() {
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 20;
            var1 = var1[var0];
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            var0 = var0.default;
            return var0;
        };
        var6.getComponent = var11;
        var6 = var9.bind(var3)(var7, var6);
        var4[8] = var6;
        var9 = _closure1_slot4;
        var6 = _closure1_slot6;
        var7 = var6.Screen;
        var6 = {};
        var11 = 'spam-requests';
        var6.name = var11;
        var11 = {};
        var12 = var14[var10];
        var12 = var13.bind(var3)(var12);
        var16 = var12.intl;
        var15 = var16.string;
        var12 = var14[var10];
        var12 = var13.bind(var3)(var12);
        var12 = var12.t;
        var12 = var12.oHVeHc;
        var12 = var15.bind(var16)(var12);
        var11.title = var12;
        var6.options = var11;
        var11 = function() {
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 21;
            var1 = var1[var0];
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            var0 = var0.default;
            return var0;
        };
        var6.getComponent = var11;
        var6 = var9.bind(var3)(var7, var6);
        var4[9] = var6;
        var7 = _closure1_slot4;
        var5 = _closure1_slot6;
        var6 = var5.Screen;
        var5 = {};
        var9 = 'ignored-user-requests';
        var5.name = var9;
        var9 = {};
        var11 = var14[var10];
        var11 = var13.bind(var3)(var11);
        var12 = var11.intl;
        var11 = var12.string;
        var10 = var14[var10];
        var10 = var13.bind(var3)(var10);
        var10 = var10.t;
        var10 = var10.tFY5Zb;
        var10 = var11.bind(var12)(var10);
        var9.title = var10;
        var5.options = var9;
        var8 = function() {
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 22;
            var1 = var1[var0];
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            var0 = var0.default;
            return var0;
        };
        var5.getComponent = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[10] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
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
    var6 = var3.jsx;
    var _closure1_slot4 = var6;
    var3 = var3.jsxs;
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var6 = var4.bind(var0)(var3);
    var3 = var6.createNativeStackNavigator;
    var3 = var3.bind(var6)();
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'borderBottomWidth': 0,
        'backgroundColor': null,
        'shadowColor': 'transparent'
    };
    var9 = 4;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_BASE_LOWER;
    var8.backgroundColor = var11;
    var3.header = var8;
    var8 = {};
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.INTERACTIVE_TEXT_ACTIVE;
    var8.color = var9;
    var3.button = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot7 = var3;
    var3 = 25;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/main_tabs_v2/native/friends/FriendsNavigator.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        var1 = _closure1_slot1;
        var6 = _closure1_slot2;
        var0 = 23;
        var0 = var6[var0];
        var3 = undefined;
        var0 = var1.bind(var3)(var0);
        var5 = var0.bind(var3)();
        var2 = _closure1_slot4;
        var1 = _closure1_slot0;
        var0 = 24;
        var0 = var6[var0];
        var0 = var1.bind(var3)(var0);
        var1 = var0.ThemeContextProvider;
        var0 = {};
        var0.gradient = var5;
        var6 = _closure1_slot4;
        var5 = _closure1_slot9;
        var4 = {};
        var4 = var6.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 33, 9141, 1297, 671, 8925, 8922, 11817, 1234, 13863, 4364, 5790, 13864, 13869, 14029, 14030, 14031, 14037, 14038, 14039, 14041, 14044, 14045, 3242, 3159, 2]);