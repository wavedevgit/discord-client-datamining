// modules/main_tabs_v2/native/panels/createChatPanelNativeStackNavigator.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
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
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var6 = var4.bind(var0)(var3);
    var3 = var6.createNavigatorFactory;
    var1 = function arg0() {
        var3 = arg0;
        var14 = var3.id;
        var13 = var3.initialRouteName;
        var12 = var3.children;
        var11 = var3.screenListeners;
        var9 = var3.screenOptions;
        var2 = {
            'id': 0,
            'initialRouteName': 0,
            'children': 0,
            'screenListeners': 0,
            'screenOptions': 0
        };
        var16 = null;
        var17 = var2;
        var0 = silentSetPrototypeOf(var17, var16);
        var17 = {};
        var16 = var3;
        var15 = var2;
        var6 = copyDataProperties(var17, var16, var15);
        var5 = _closure1_slot0;
        var10 = _closure1_slot1;
        var2 = 2;
        var4 = var10[var2];
        var3 = undefined;
        var8 = var5.bind(var3)(var4);
        var7 = var8.useNavigationBuilder;
        var2 = var10[var2];
        var2 = var5.bind(var3)(var2);
        var4 = var2.StackRouter;
        var2 = {};
        var2.id = var14;
        var2.initialRouteName = var13;
        var2.children = var12;
        var2.screenListeners = var11;
        var2.screenOptions = var9;
        var2 = var7.bind(var8)(var4, var2);
        var11 = var2.state;
        var _closure2_slot0 = var11;
        var4 = var2.descriptors;
        var _closure2_slot1 = var4;
        var8 = var2.navigation;
        var _closure2_slot2 = var8;
        var2 = var2.NavigationContent;
        var12 = _closure1_slot2;
        var9 = var12.useMemo;
        var7 = new Array(2);
        var7[0] = var11;
        var7[1] = var4;
        var4 = function() { // Environment: var1
            _fun100217: for (var _fun100217_ip = 0;;) switch (_fun100217_ip) {
                case 0:
                    var2 = {};
                    var0 = _closure2_slot0;
                    var20 = var2;
                    var19 = var0;
                    var1 = copyDataProperties(var20, var19);
                    var19 = var0.routes;
                    var3 = new Array(0);
                    var0 = 0;
                    var20 = var3;
                    var18 = 0;
                    var1 = arraySpread(var20, var19, var18);
                    var1 = 'routes';
                    var2[var1] = var3;
                    var12 = new Array(0);
                    var3 = new Array(0);
                    var1 = {};
                    var4 = var2.routes;
                    var4 = var4.length;
                    var4 = var0 < var4;
                    var10 = 3;
                    var9 = undefined;
                    var8 = null;
                    var6 = 0;
                    var5 = 0;
                    var7 = 0;
                    if (!var4) {
                        _fun100217_ip = 246;
                        continue _fun100217
                    }
                case 96:
                    var4 = var2.routes;
                    var15 = var4[var5];
                    var14 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var4 = var4[var10];
                    var14 = var14.bind(var9)(var4);
                    var4 = var14.coerceChannelRoute;
                    var4 = var4.bind(var14)(var15);
                    if (!(var8 == var4)) {
                        _fun100217_ip = 194;
                        continue _fun100217
                    }
                case 138:
                    var4 = var3.push;
                    var4 = var4.bind(var3)(var15);
                    var14 = var15.key;
                    var4 = _closure2_slot1;
                    var4 = var14 in var4;
                    var14 = var6;
                    if (!var4) {
                        _fun100217_ip = 219;
                        continue _fun100217
                    }
                case 167:
                    var16 = var15.key;
                    var17 = _closure2_slot1;
                    var4 = var15.key;
                    var4 = var17[var4];
                    var1[var16] = var4;
                    var14 = var6;
                    _fun100217_ip = 219;
                    continue _fun100217;
                case 194:
                    var4 = var12.push;
                    var4 = var4.bind(var12)(var15);
                    var4 = var2.index;
                    var14 = var6;
                    if (!(var5 <= var4)) {
                        _fun100217_ip = 219;
                        continue _fun100217
                    }
                case 216:
                    var14 = var6 + 1;
                case 219:
                    var5 = var5 + 1;
                    var4 = var2.routes;
                    var4 = var4.length;
                    var6 = var14;
                    var7 = var6;
                    if (var5 < var4) {
                        _fun100217_ip = 96;
                        continue _fun100217
                    }
                case 246:
                    var4 = global;
                    var6 = var4.Math;
                    var5 = var6.max;
                    var4 = var2.index;
                    var4 = var4 - var7;
                    var4 = var5.bind(var6)(var0, var4);
                    var2.index = var4;
                    var2.routes = var3;
                    var3 = var2.routes;
                    var3 = var3.length;
                    if (!(var0 !== var3)) {
                        _fun100217_ip = 347;
                        continue _fun100217
                    }
                case 301:
                    var4 = var2.index;
                    var3 = var2.routes;
                    var3 = var3.length;
                    if (!(var4 >= var3)) {
                        _fun100217_ip = 353;
                        continue _fun100217
                    }
                case 321:
                    var3 = var2.routes;
                    var4 = var3.length;
                    var3 = 1;
                    var3 = var4 - var3;
                    var2.index = var3;
                    _fun100217_ip = 353;
                    continue _fun100217;
                case 347:
                    var2.index = var0;
                case 353:
                    var0 = {};
                    var0.state = var2;
                    var0.filteredDescriptors = var1;
                    return var0;
            }
        };
        var4 = var9.bind(var12)(var4, var7);
        var9 = var4.state;
        var _closure2_slot3 = var9;
        var7 = var4.filteredDescriptors;
        var11 = var12.useEffect;
        var4 = new Array(3);
        var4[0] = var8;
        var13 = var9.index;
        var4[1] = var13;
        var13 = var9.key;
        var4[2] = var13;
        var1 = function() { // Environment: var1
            _fun100218: for (var _fun100218_ip = 0;;) switch (_fun100218_ip) {
                case 0:
                    var0 = _closure2_slot2;
                    var4 = null;
                    var2 = var4 == var0;
                    var0 = undefined;
                    if (var2) {
                        _fun100218_ip = 66;
                        continue _fun100218
                    }
                case 18:
                    var2 = _closure2_slot2;
                    var2 = var2.addListener;
                    var2 = var4 == var2;
                    var0 = undefined;
                    if (var2) {
                        _fun100218_ip = 66;
                        continue _fun100218
                    }
                case 37:
                    var4 = _closure2_slot2;
                    var3 = var4.addListener;
                    var2 = 'tabPress';
                    var1 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var _closure4_slot0 = var0;
                        var2 = _closure2_slot2;
                        var0 = var2.isFocused;
                        var0 = var0.bind(var2)();
                        var _closure4_slot1 = var0;
                        var0 = global;
                        var2 = var0.requestAnimationFrame;
                        var0 = undefined;
                        var1 = function() { // Environment: var1
                            _fun100220: for (var _fun100220_ip = 0;;) switch (_fun100220_ip) {
                                case 0:
                                    var0 = _closure2_slot3;
                                    var1 = var0.index;
                                    var0 = 0;
                                    var0 = var1 > var0;
                                    if (!var0) {
                                        _fun100220_ip = 28;
                                        continue _fun100220
                                    }
                                case 21:
                                    var0 = _closure4_slot1;
                                case 28:
                                    if (!var0) {
                                        _fun100220_ip = 47;
                                        continue _fun100220
                                    }
                                case 31:
                                    var1 = _closure4_slot0;
                                    var1 = var1.defaultPrevented;
                                    var0 = !var1;
                                case 47:
                                    if (!var0) {
                                        _fun100220_ip = 132;
                                        continue _fun100220
                                    }
                                case 50:
                                    var2 = _closure2_slot2;
                                    var1 = var2.dispatch;
                                    var0 = {};
                                    var6 = _closure1_slot0;
                                    var5 = _closure1_slot1;
                                    var4 = 2;
                                    var5 = var5[var4];
                                    var4 = undefined;
                                    var4 = var6.bind(var4)(var5);
                                    var5 = var4.StackActions;
                                    var4 = var5.popToTop;
                                    var7 = var4.bind(var5)();
                                    var8 = var0;
                                    var4 = copyDataProperties(var8, var7);
                                    var3 = _closure2_slot3;
                                    var4 = var3.key;
                                    var3 = 'target';
                                    var0[var3] = var4;
                                    var0 = var1.bind(var2)(var0);
                                case 132:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var0 = var3.bind(var4)(var2, var1);
                case 66:
                    return var0;
            }
        };
        var1 = var11.bind(var12)(var1, var4);
        var1 = _closure1_slot3;
        var0 = {};
        var4 = 4;
        var4 = var10[var4];
        var4 = var5.bind(var3)(var4);
        var5 = var4.NativeStackView;
        var4 = {};
        var17 = var4;
        var16 = var6;
        var6 = copyDataProperties(var17, var16);
        var6 = 'state';
        var4[var6] = var9;
        var6 = 'navigation';
        var4[var6] = var8;
        var6 = 'descriptors';
        var4[var6] = var7;
        var4 = var1.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var1.bind(var3)(var2, var0);
        return var0;
    };
    var1 = var3.bind(var6)(var1);
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/main_tabs_v2/native/panels/createChatPanelNativeStackNavigator.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 33, 1470, 3919, 9141, 2]);