// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var5 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var6;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var3 = var5.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var5 = var6[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var5);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var5 = var3.Platform;
    var5 = var3.StyleSheet;
    var _closure1_slot6 = var5;
    var3 = 4;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var4 = var3.jsx;
    var _closure1_slot7 = var4;
    var3 = var3.jsxs;
    var _closure1_slot8 = var3;
    var4 = var5.create;
    var3 = {};
    var6 = {
        'flex': 1,
        'overflow': 'hidden'
    };
    var3.container = var6;
    var3 = var4.bind(var5)(var3);
    var _closure1_slot9 = var3;
    var1 = function(arg0) { // Original name: BottomTabView, environment: var1
        _fun100917: for (var _fun100917_ip = 0;;) switch (_fun100917_ip) {
            case 0:
                var0 = arg0;
                var _closure2_slot0 = var0;
                var1 = var0.tabBar;
                var3 = undefined;
                if (!(var3 === var1)) {
                    _fun100917_ip = 28;
                    continue _fun100917
                }
            case 21:
                var1 = function(arg0) { // Environment: var8
                    var3 = _closure1_slot7;
                    var1 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 5;
                    var0 = var2[var0];
                    var2 = undefined;
                    var1 = var1.bind(var2)(var0);
                    var0 = global;
                    var6 = var0.Object;
                    var5 = var6.assign;
                    var4 = {};
                    var0 = arg0;
                    var0 = var5.bind(var6)(var4, var0);
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
            case 28:
                var _closure2_slot1 = var1;
                var1 = var0.portal;
                var _closure2_slot2 = var1;
                var1 = var0.state;
                var _closure2_slot3 = var1;
                var2 = var0.navigation;
                var _closure2_slot4 = var2;
                var2 = var0.descriptors;
                var _closure2_slot5 = var2;
                var2 = var0.safeAreaInsets;
                var _closure2_slot6 = var2;
                var2 = var0.detachInactiveScreens;
                var11 = var3 === var2;
                if (var11) {
                    _fun100917_ip = 97;
                    continue _fun100917
                }
            case 94:
                var11 = var2;
            case 97:
                var _closure2_slot7 = var11;
                var2 = var0.sceneContainerStyle;
                var _closure2_slot8 = var2;
                var0 = var0.freezeAllTabs;
                var _closure2_slot9 = var0;
                var2 = var1.routes;
                var0 = var1.index;
                var0 = var2[var0];
                var13 = var0.key;
                var4 = _closure1_slot5;
                var2 = var4.useState;
                var0 = new Array(1);
                var0[0] = var13;
                var2 = var2.bind(var4)(var0);
                var0 = _closure1_slot4;
                var12 = 2;
                var0 = var0.bind(var3)(var2, var12);
                var7 = 0;
                var6 = var0[var7];
                var _closure2_slot10 = var6;
                var4 = 1;
                var2 = var0[var4];
                var0 = var6.includes;
                var0 = var0.bind(var6)(var13);
                if (var0) {
                    _fun100917_ip = 246;
                    continue _fun100917
                }
            case 209:
                var10 = new Array(0);
                var9 = var10.concat;
                var0 = _closure1_slot3;
                var6 = var0.bind(var3)(var6);
                var0 = new Array(1);
                var0[0] = var13;
                var0 = var9.bind(var10)(var6, var0);
                var0 = var2.bind(var3)(var0);
            case 246:
                var6 = _closure1_slot0;
                var10 = _closure1_slot2;
                var0 = 6;
                var2 = var10[var0];
                var2 = var6.bind(var3)(var2);
                var2 = var2.SafeAreaProviderCompat;
                var2 = var2.initialMetrics;
                var2 = var2.frame;
                var _closure2_slot11 = var2;
                var13 = _closure1_slot5;
                var9 = var13.useState;
                var2 = function() { // Environment: var8
                    var6 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var0 = 5;
                    var0 = var9[var0];
                    var5 = undefined;
                    var2 = var6.bind(var5)(var0);
                    var1 = var2.getTabBarHeight;
                    var0 = {};
                    var4 = _closure2_slot3;
                    var0.state = var4;
                    var4 = _closure2_slot5;
                    var0.descriptors = var4;
                    var4 = _closure2_slot11;
                    var0.dimensions = var4;
                    var4 = {};
                    var7 = _closure2_slot11;
                    var7 = var7.width;
                    var4.width = var7;
                    var7 = 0;
                    var4.height = var7;
                    var0.layout = var4;
                    var4 = global;
                    var8 = var4.Object;
                    var7 = var8.assign;
                    var4 = 6;
                    var4 = var9[var4];
                    var4 = var6.bind(var5)(var4);
                    var4 = var4.SafeAreaProviderCompat;
                    var4 = var4.initialMetrics;
                    var6 = var4.insets;
                    var4 = _closure2_slot0;
                    var5 = var4.safeAreaInsets;
                    var4 = {};
                    var4 = var7.bind(var8)(var4, var6, var5);
                    var0.insets = var4;
                    var4 = _closure2_slot5;
                    var5 = _closure2_slot3;
                    var5 = var5.routes;
                    var3 = _closure2_slot3;
                    var3 = var3.index;
                    var3 = var5[var3];
                    var3 = var3.key;
                    var3 = var4[var3];
                    var3 = var3.options;
                    var3 = var3.tabBarStyle;
                    var0.style = var3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var9 = var9.bind(var13)(var2);
                var2 = _closure1_slot4;
                var2 = var2.bind(var3)(var9, var12);
                var7 = var2[var7];
                var _closure2_slot12 = var7;
                var9 = var2[var4];
                var13 = var1.routes;
                var2 = _closure1_slot8;
                var0 = var10[var0];
                var0 = var6.bind(var3)(var0);
                var1 = var0.SafeAreaProviderCompat;
                var0 = {};
                var7 = _closure1_slot7;
                var4 = 9;
                var4 = var10[var4];
                var4 = var6.bind(var3)(var4);
                var6 = var4.MaybeScreenContainer;
                var4 = {};
                var4.enabled = var11;
                var11 = true;
                var4.hasTwoStates = var11;
                var11 = _closure1_slot9;
                var11 = var11.container;
                var4.style = var11;
                var12 = var13.map;
                var11 = function(arg0, arg1) { // Environment: var8
                    _fun100920: for (var _fun100920_ip = 0;;) switch (_fun100920_ip) {
                        case 0:
                            var0 = arg0;
                            var _closure3_slot0 = var0;
                            var3 = _closure2_slot5;
                            var1 = var0.key;
                            var11 = var3[var1];
                            var3 = var11.options;
                            var5 = var3.lazy;
                            var4 = undefined;
                            var1 = var4 === var5;
                            if (var1) {
                                _fun100920_ip = 48;
                                continue _fun100920
                            }
                        case 45:
                            var1 = var5;
                        case 48:
                            var3 = var3.unmountOnBlur;
                            var5 = _closure2_slot3;
                            var6 = var5.index;
                            var5 = arg1;
                            var16 = var6 === var5;
                            if (!var3) {
                                _fun100920_ip = 80;
                                continue _fun100920
                            }
                        case 73:
                            if (var16) {
                                _fun100920_ip = 80;
                                continue _fun100920
                            }
                        case 76:
                            var3 = null;
                            return var3;
                        case 80:
                            if (!var1) {
                                _fun100920_ip = 112;
                                continue _fun100920
                            }
                        case 83:
                            var5 = _closure2_slot10;
                            var3 = var5.includes;
                            var1 = var0.key;
                            var1 = var3.bind(var5)(var1);
                            if (var1) {
                                _fun100920_ip = 112;
                                continue _fun100920
                            }
                        case 105:
                            if (var16) {
                                _fun100920_ip = 112;
                                continue _fun100920
                            }
                        case 108:
                            var1 = null;
                            return var1;
                        case 112:
                            var1 = var11.options;
                            var5 = var1.freezeOnBlur;
                            var13 = var1.header;
                            if (!(var4 === var13)) {
                                _fun100920_ip = 139;
                                continue _fun100920
                            }
                        case 132:
                            var13 = function(arg0) { // Environment: var2
                                var0 = arg0;
                                var10 = var0.layout;
                                var7 = var0.options;
                                var3 = _closure1_slot7;
                                var8 = _closure1_slot0;
                                var9 = _closure1_slot2;
                                var0 = 6;
                                var1 = var9[var0];
                                var2 = undefined;
                                var1 = var8.bind(var2)(var1);
                                var1 = var1.Header;
                                var4 = global;
                                var6 = var4.Object;
                                var5 = var6.assign;
                                var4 = {};
                                var4.layout = var10;
                                var0 = var9[var0];
                                var9 = var8.bind(var2)(var0);
                                var8 = var9.getHeaderTitle;
                                var0 = _closure3_slot0;
                                var0 = var0.name;
                                var0 = var8.bind(var9)(var7, var0);
                                var4.title = var0;
                                var0 = {};
                                var0 = var5.bind(var6)(var0, var7, var4);
                                var0 = var3.bind(var2)(var1, var0);
                                return var0;
                            };
                        case 139:
                            var15 = var1.headerShown;
                            var14 = var1.headerStatusBarHeight;
                            var12 = var1.headerTransparent;
                            var3 = _closure1_slot7;
                            var2 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var1 = 9;
                            var1 = var6[var1];
                            var1 = var2.bind(var4)(var1);
                            var2 = var1.MaybeScreen;
                            var1 = {};
                            var6 = _closure1_slot6;
                            var7 = var6.absoluteFill;
                            var6 = new Array(2);
                            var6[0] = var7;
                            var7 = {};
                            var9 = -1;
                            if (!var16) {
                                _fun100920_ip = 223;
                                continue _fun100920
                            }
                        case 221:
                            var9 = 0;
                        case 223:
                            var7.zIndex = var9;
                            var6[1] = var7;
                            var1.style = var6;
                            var6 = var16;
                            if (!var6) {
                                _fun100920_ip = 249;
                                continue _fun100920
                            }
                        case 242:
                            var7 = _closure2_slot9;
                            var6 = !var7;
                        case 249:
                            var1.visible = var6;
                            var6 = _closure2_slot7;
                            var1.enabled = var6;
                            var1.freezeOnBlur = var5;
                            var7 = _closure1_slot7;
                            var6 = _closure1_slot1;
                            var17 = _closure1_slot2;
                            var5 = 10;
                            var5 = var17[var5];
                            var5 = var6.bind(var4)(var5);
                            var6 = var5.Provider;
                            var5 = {};
                            var9 = _closure2_slot12;
                            var5.value = var9;
                            var9 = _closure1_slot0;
                            var8 = 6;
                            var8 = var17[var8];
                            var8 = var9.bind(var4)(var8);
                            var9 = var8.Screen;
                            var8 = {};
                            var8.focused = var16;
                            var16 = var11.route;
                            var8.route = var16;
                            var16 = var11.navigation;
                            var8.navigation = var16;
                            var8.headerShown = var15;
                            var8.headerStatusBarHeight = var14;
                            var8.headerTransparent = var12;
                            var12 = {};
                            var14 = _closure2_slot11;
                            var12.layout = var14;
                            var14 = var11.route;
                            var12.route = var14;
                            var14 = var11.navigation;
                            var12.navigation = var14;
                            var14 = var11.options;
                            var12.options = var14;
                            var12 = var13.bind(var4)(var12);
                            var8.header = var12;
                            var10 = _closure2_slot8;
                            var8.style = var10;
                            var10 = var11.render;
                            var10 = var10.bind(var11)();
                            var8.children = var10;
                            var8 = var7.bind(var4)(var9, var8);
                            var5.children = var8;
                            var5 = var7.bind(var4)(var6, var5);
                            var1.children = var5;
                            var0 = var0.key;
                            var0 = var3.bind(var4)(var2, var1, var0);
                            return var0;
                    }
                };
                var11 = var12.bind(var13)(var11);
                var4.children = var11;
                var6 = var7.bind(var3)(var6, var4);
                var4 = new Array(2);
                var4[0] = var6;
                var6 = _closure1_slot1;
                var5 = 11;
                var5 = var10[var5];
                var5 = var6.bind(var3)(var5);
                var6 = var5.Provider;
                var5 = {};
                var5.value = var9;
                var8 = function() { // Original name: renderTabBar, environment: var8
                    var3 = _closure1_slot7;
                    var1 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 7;
                    var0 = var2[var0];
                    var2 = undefined;
                    var0 = var1.bind(var2)(var0);
                    var0 = var0.SafeAreaInsetsContext;
                    var1 = var0.Consumer;
                    var0 = {};
                    var4 = function(arg0) { // Original name: children, environment: var4
                        _fun100923: for (var _fun100923_ip = 0;;) switch (_fun100923_ip) {
                            case 0:
                                var9 = arg0;
                                var1 = _closure2_slot1;
                                var0 = {};
                                var2 = _closure2_slot3;
                                var0.state = var2;
                                var2 = _closure2_slot5;
                                var0.descriptors = var2;
                                var2 = _closure2_slot4;
                                var0.navigation = var2;
                                var2 = {};
                                var4 = _closure2_slot6;
                                var7 = null;
                                var5 = var7 == var4;
                                var4 = undefined;
                                var8 = undefined;
                                if (var5) {
                                    _fun100923_ip = 66;
                                    continue _fun100923
                                }
                            case 57:
                                var5 = _closure2_slot6;
                                var8 = var5.top;
                            case 66:
                                if (!(var7 == var8)) {
                                    _fun100923_ip = 87;
                                    continue _fun100923
                                }
                            case 70:
                                var6 = var7 == var9;
                                var5 = undefined;
                                if (var6) {
                                    _fun100923_ip = 84;
                                    continue _fun100923
                                }
                            case 79:
                                var5 = var9.top;
                            case 84:
                                var8 = var5;
                            case 87:
                                var10 = var7 != var8;
                                var6 = 0;
                                if (!var10) {
                                    _fun100923_ip = 99;
                                    continue _fun100923
                                }
                            case 96:
                                var6 = var8;
                            case 99:
                                var2.top = var6;
                                var6 = _closure2_slot6;
                                var6 = var7 == var6;
                                var8 = undefined;
                                if (var6) {
                                    _fun100923_ip = 125;
                                    continue _fun100923
                                }
                            case 116:
                                var6 = _closure2_slot6;
                                var8 = var6.right;
                            case 125:
                                if (!(var7 == var8)) {
                                    _fun100923_ip = 146;
                                    continue _fun100923
                                }
                            case 129:
                                var10 = var7 == var9;
                                var6 = undefined;
                                if (var10) {
                                    _fun100923_ip = 143;
                                    continue _fun100923
                                }
                            case 138:
                                var6 = var9.right;
                            case 143:
                                var8 = var6;
                            case 146:
                                var10 = var7 != var8;
                                var6 = 0;
                                if (!var10) {
                                    _fun100923_ip = 158;
                                    continue _fun100923
                                }
                            case 155:
                                var6 = var8;
                            case 158:
                                var2.right = var6;
                                var6 = _closure2_slot6;
                                var6 = var7 == var6;
                                var8 = undefined;
                                if (var6) {
                                    _fun100923_ip = 184;
                                    continue _fun100923
                                }
                            case 175:
                                var6 = _closure2_slot6;
                                var8 = var6.bottom;
                            case 184:
                                if (!(var7 == var8)) {
                                    _fun100923_ip = 205;
                                    continue _fun100923
                                }
                            case 188:
                                var10 = var7 == var9;
                                var6 = undefined;
                                if (var10) {
                                    _fun100923_ip = 202;
                                    continue _fun100923
                                }
                            case 197:
                                var6 = var9.bottom;
                            case 202:
                                var8 = var6;
                            case 205:
                                var10 = var7 != var8;
                                var6 = 0;
                                if (!var10) {
                                    _fun100923_ip = 217;
                                    continue _fun100923
                                }
                            case 214:
                                var6 = var8;
                            case 217:
                                var2.bottom = var6;
                                var6 = _closure2_slot6;
                                var8 = var7 == var6;
                                var6 = undefined;
                                if (var8) {
                                    _fun100923_ip = 243;
                                    continue _fun100923
                                }
                            case 234:
                                var8 = _closure2_slot6;
                                var6 = var8.left;
                            case 243:
                                if (!(var7 == var6)) {
                                    _fun100923_ip = 264;
                                    continue _fun100923
                                }
                            case 247:
                                var10 = var7 == var9;
                                var8 = undefined;
                                if (var10) {
                                    _fun100923_ip = 261;
                                    continue _fun100923
                                }
                            case 256:
                                var8 = var9.left;
                            case 261:
                                var6 = var8;
                            case 264:
                                var7 = var7 != var6;
                                var5 = 0;
                                if (!var7) {
                                    _fun100923_ip = 276;
                                    continue _fun100923
                                }
                            case 273:
                                var5 = var6;
                            case 276:
                                var2.left = var5;
                                var0.insets = var2;
                                var5 = var1.bind(var4)(var0);
                                var0 = _closure2_slot2;
                                var1 = 'function';
                                var0 = typeof var0;
                                if (!(var1 !== var0)) {
                                    _fun100923_ip = 311;
                                    continue _fun100923
                                }
                            case 305:
                                var1 = _closure2_slot2;
                                _fun100923_ip = 348;
                                continue _fun100923;
                            case 311:
                                var2 = _closure2_slot2;
                                var0 = {};
                                var6 = _closure2_slot3;
                                var0.state = var6;
                                var6 = _closure2_slot5;
                                var0.descriptors = var6;
                                var3 = _closure2_slot4;
                                var0.navigation = var3;
                                var1 = var2.bind(var4)(var0);
                            case 348:
                                var0 = var5;
                                if (!var1) {
                                    _fun100923_ip = 408;
                                    continue _fun100923
                                }
                            case 354:
                                var3 = _closure1_slot7;
                                var2 = _closure1_slot0;
                                var6 = _closure1_slot2;
                                var1 = 8;
                                var1 = var6[var1];
                                var1 = var2.bind(var4)(var1);
                                var2 = var1.Portal;
                                var1 = {};
                                var6 = 'BottomTabBar';
                                var1.hostName = var6;
                                var1.children = var5;
                                var0 = var3.bind(var4)(var2, var1);
                            case 408:
                                return var0;
                        }
                    };
                    var0.children = var4;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var8 = var8.bind(var3)();
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [65, 57, 31, 27, 33, 13094, 4665, 1571, 3880, 13101, 13102, 13096]);