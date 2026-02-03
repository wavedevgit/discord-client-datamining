// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = ['id', 'initialRouteName', 'backBehavior', 'children', 'screenListeners', 'screenOptions', 'sceneContainerStyle'];
    var _closure1_slot3 = var0;
    var0 = ['lazy', 'tabBarOptions'];
    var _closure1_slot4 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var4 = var4.bind(var0)(var3);
    var3 = var4.createNavigatorFactory;
    var1 = function arg0() {
        _fun100515: for (var _fun100515_ip = 0;;) switch (_fun100515_ip) {
            case 0:
                var1 = arg0;
                var15 = var1.id;
                var14 = var1.initialRouteName;
                var13 = var1.backBehavior;
                var12 = var1.children;
                var11 = var1.screenListeners;
                var10 = var1.screenOptions;
                var4 = var1.sceneContainerStyle;
                var8 = _closure1_slot5;
                var0 = _closure1_slot3;
                var3 = undefined;
                var7 = var8.bind(var3)(var1, var0);
                var0 = var7.lazy;
                var6 = var7.tabBarOptions;
                var1 = _closure1_slot4;
                var9 = var8.bind(var3)(var7, var1);
                var8 = {};
                var _closure2_slot0 = var8;
                if (!var6) {
                    _fun100515_ip = 435;
                    continue _fun100515
                }
            case 100:
                var1 = global;
                var17 = var1.Object;
                var16 = var17.assign;
                var7 = {};
                var18 = var6.keyboardHidesTabBar;
                var7.tabBarHideOnKeyboard = var18;
                var18 = var6.activeTintColor;
                var7.tabBarActiveTintColor = var18;
                var18 = var6.inactiveTintColor;
                var7.tabBarInactiveTintColor = var18;
                var18 = var6.activeBackgroundColor;
                var7.tabBarActiveBackgroundColor = var18;
                var18 = var6.inactiveBackgroundColor;
                var7.tabBarInactiveBackgroundColor = var18;
                var18 = var6.allowFontScaling;
                var7.tabBarAllowFontScaling = var18;
                var18 = var6.showLabel;
                var7.tabBarShowLabel = var18;
                var18 = var6.labelStyle;
                var7.tabBarLabelStyle = var18;
                var18 = var6.iconStyle;
                var7.tabBarIconStyle = var18;
                var18 = var6.tabStyle;
                var7.tabBarItemStyle = var18;
                var19 = var6.labelPosition;
                var18 = null;
                if (!(var18 == var19)) {
                    _fun100515_ip = 266;
                    continue _fun100515
                }
            case 241:
                var22 = var6.adaptive;
                var21 = false;
                var20 = undefined;
                if (!(var21 === var22)) {
                    _fun100515_ip = 263;
                    continue _fun100515
                }
            case 257:
                var20 = 'below-icon';
            case 263:
                var19 = var20;
            case 266:
                var7.tabBarLabelPosition = var19;
                var20 = {};
                var21 = var6.tabBarVisible;
                var19 = 'flex';
                if (!var21) {
                    _fun100515_ip = 292;
                    continue _fun100515
                }
            case 288:
                var19 = 'none';
            case 292:
                var20.display = var19;
                var19 = new Array(2);
                var19[0] = var20;
                var20 = var8.tabBarStyle;
                var19[1] = var20;
                var7.tabBarStyle = var19;
                var7 = var16.bind(var17)(var8, var7);
                var16 = var1.Object;
                var7 = var16.keys;
                var16 = var7.bind(var16)(var8);
                var7 = var16.forEach;
                var2 = function(arg0) { // Environment: var2
                    _fun100516: for (var _fun100516_ip = 0;;) switch (_fun100516_ip) {
                        case 0:
                            var2 = arg0;
                            var0 = _closure2_slot0;
                            var3 = var0[var2];
                            var0 = undefined;
                            if (!(var0 === var3)) {
                                _fun100516_ip = 28;
                                continue _fun100516
                            }
                        case 20:
                            var1 = _closure2_slot0;
                            var1 = delete var1[var2];
                        case 28:
                            return var0;
                    }
                };
                var2 = var7.bind(var16)(var2);
                var7 = _closure1_slot1;
                var16 = _closure1_slot2;
                var2 = 3;
                var2 = var16[var2];
                var2 = var7.bind(var3)(var2);
                var17 = var1.JSON;
                var16 = var17.stringify;
                var7 = 2;
                var17 = var16.bind(var17)(var8, var18, var7);
                var1 = var1.HermesInternal;
                var16 = var1.concat;
                var7 = "Bottom Tab Navigator: 'tabBarOptions' is deprecated. Migrate the options to 'screenOptions' instead.\n\nPlace the following in 'screenOptions' in your code to keep current behavior:\n\n";
                var1 = '\n\nSee https://reactnavigation.org/docs/bottom-tab-navigator#options for more details.';
                var1 = var16.bind(var7)(var17, var1);
                var1 = var2.bind(var3)(var6, var1);
            case 435:
                var2 = 'boolean';
                var1 = typeof var0;
                if (!(var2 === var1)) {
                    _fun100515_ip = 486;
                    continue _fun100515
                }
            case 446:
                var8.lazy = var0;
                var1 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 3;
                var0 = var2[var0];
                var2 = var1.bind(var3)(var0);
                var1 = true;
                var0 = "Bottom Tab Navigator: 'lazy' in props is deprecated. Move it to 'screenOptions' instead.\n\nSee https://reactnavigation.org/docs/bottom-tab-navigator/#lazy for more details.";
                var0 = var2.bind(var3)(var1, var0);
            case 486:
                var1 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 4;
                var2 = var7[var0];
                var6 = var1.bind(var3)(var2);
                var2 = var6.useNavigationBuilder;
                var0 = var7[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.TabRouter;
                var0 = {};
                var0.id = var15;
                var0.initialRouteName = var14;
                var0.backBehavior = var13;
                var0.children = var12;
                var0.screenListeners = var11;
                var0.screenOptions = var10;
                var0.defaultScreenOptions = var8;
                var0 = var2.bind(var6)(var1, var0);
                var12 = var0.state;
                var10 = var0.descriptors;
                var11 = var0.navigation;
                var2 = var0.NavigationContent;
                var1 = _closure1_slot6;
                var0 = {};
                var6 = _closure1_slot1;
                var5 = 5;
                var5 = var7[var5];
                var5 = var6.bind(var3)(var5);
                var6 = global;
                var8 = var6.Object;
                var7 = var8.assign;
                var6 = {};
                var6.state = var12;
                var6.navigation = var11;
                var6.descriptors = var10;
                var6.sceneContainerStyle = var4;
                var4 = {};
                var4 = var7.bind(var8)(var4, var9, var6);
                var4 = var1.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var1.bind(var3)(var2, var0);
                return var0;
        }
    };
    var1 = var3.bind(var4)(var1);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [29, 31, 33, 4044, 1470, 13089]);