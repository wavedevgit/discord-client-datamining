// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = ['id', 'initialRouteName', 'children', 'screenListeners', 'screenOptions'];
    var _closure1_slot3 = var0;
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
    var _closure1_slot4 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot5 = var3;
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
        _fun51629: for (var _fun51629_ip = 0;;) switch (_fun51629_ip) {
            case 0:
                var4 = arg0;
                var15 = var4.id;
                var14 = var4.initialRouteName;
                var13 = var4.children;
                var12 = var4.screenListeners;
                var11 = var4.screenOptions;
                var2 = _closure1_slot4;
                var1 = _closure1_slot3;
                var3 = undefined;
                var9 = var2.bind(var3)(var4, var1);
                var2 = var9.mode;
                var10 = _closure1_slot1;
                var8 = _closure1_slot2;
                var16 = 3;
                var1 = var8[var16];
                var17 = var10.bind(var3)(var1);
                var1 = null;
                var7 = var1 != var2;
                var6 = global;
                var4 = var6.HermesInternal;
                var20 = var4.concat;
                var25 = 'Stack Navigator: \'mode="';
                var23 = '"\' is deprecated. Use \'presentation: "';
                var21 = '"\' in \'screenOptions\' instead.\n\nSee https://reactnavigation.org/docs/stack-navigator#presentation for more details.';
                var24 = var2;
                var22 = var2;
                var4 = var25[var20](var24, var23, var22, var21, var20);
                var4 = var17.bind(var3)(var7, var4);
                var4 = var9.headerMode;
                var7 = var8[var16];
                var19 = var10.bind(var3)(var7);
                var7 = 'none';
                var18 = var7 === var4;
                var17 = 'Stack Navigator: \'headerMode="none"\' is deprecated. Use \'headerShown: false\' in \'screenOptions\' instead.\n\nSee https://reactnavigation.org/docs/stack-navigator/#headershown for more details.';
                var17 = var19.bind(var3)(var18, var17);
                var8 = var8[var16];
                var10 = var10.bind(var3)(var8);
                var8 = var1 != var4;
                if (!var8) {
                    _fun51629_ip = 185;
                    continue _fun51629
                }
            case 181:
                var8 = var7 !== var4;
            case 185:
                var1 = "Stack Navigator: 'headerMode' is moved to 'options'. Moved it to 'screenOptions' to keep current behavior.\n\nSee https://reactnavigation.org/docs/stack-navigator/#headermode for more details.";
                var1 = var10.bind(var3)(var8, var1);
                var1 = var9.keyboardHandlingEnabled;
                var10 = _closure1_slot1;
                var8 = _closure1_slot2;
                var8 = var8[var16];
                var16 = var10.bind(var3)(var8);
                var10 = var3 !== var1;
                var8 = "Stack Navigator: 'keyboardHandlingEnabled' is moved to 'options'. Moved it to 'screenOptions' to keep current behavior.\n\nSee https://reactnavigation.org/docs/stack-navigator/#keyboardhandlingenabled for more details.";
                var8 = var16.bind(var3)(var10, var8);
                var10 = {};
                var10.presentation = var2;
                var2 = !var4;
                if (var2) {
                    _fun51629_ip = 253;
                    continue _fun51629
                }
            case 249:
                var2 = var7 !== var4;
            case 253:
                var10.headerShown = var2;
                var2 = undefined;
                if (!var4) {
                    _fun51629_ip = 272;
                    continue _fun51629
                }
            case 263:
                var2 = undefined;
                if (!(var7 !== var4)) {
                    _fun51629_ip = 272;
                    continue _fun51629
                }
            case 269:
                var2 = var4;
            case 272:
                var10.headerMode = var2;
                var10.keyboardHandlingEnabled = var1;
                var2 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 4;
                var4 = var8[var1];
                var7 = var2.bind(var3)(var4);
                var4 = var7.useNavigationBuilder;
                var1 = var8[var1];
                var1 = var2.bind(var3)(var1);
                var2 = var1.StackRouter;
                var1 = {};
                var1.id = var15;
                var1.initialRouteName = var14;
                var1.children = var13;
                var1.screenListeners = var12;
                var1.screenOptions = var11;
                var1.defaultScreenOptions = var10;
                var1 = var4.bind(var7)(var2, var1);
                var11 = var1.state;
                var _closure2_slot0 = var11;
                var10 = var1.descriptors;
                var4 = var1.navigation;
                var _closure2_slot1 = var4;
                var2 = var1.NavigationContent;
                var12 = _closure1_slot5;
                var7 = var12.useEffect;
                var1 = new Array(3);
                var1[0] = var4;
                var13 = var11.index;
                var1[1] = var13;
                var13 = var11.key;
                var1[2] = var13;
                var0 = function() { // Environment: var0
                    _fun51630: for (var _fun51630_ip = 0;;) switch (_fun51630_ip) {
                        case 0:
                            var0 = _closure2_slot1;
                            var2 = var0.addListener;
                            var0 = null;
                            var2 = var0 == var2;
                            var0 = undefined;
                            if (var2) {
                                _fun51630_ip = 51;
                                continue _fun51630
                            }
                        case 24:
                            var4 = _closure2_slot1;
                            var3 = var4.addListener;
                            var2 = 'tabPress';
                            var1 = function(arg0) { // Environment: var1
                                var0 = arg0;
                                var _closure4_slot0 = var0;
                                var2 = _closure2_slot1;
                                var0 = var2.isFocused;
                                var0 = var0.bind(var2)();
                                var _closure4_slot1 = var0;
                                var0 = global;
                                var2 = var0.requestAnimationFrame;
                                var0 = undefined;
                                var1 = function() { // Environment: var1
                                    _fun51632: for (var _fun51632_ip = 0;;) switch (_fun51632_ip) {
                                        case 0:
                                            var1 = _closure2_slot0;
                                            var2 = var1.index;
                                            var1 = 0;
                                            var1 = var2 > var1;
                                            if (!var1) {
                                                _fun51632_ip = 28;
                                                continue _fun51632
                                            }
                                        case 21:
                                            var1 = _closure4_slot1;
                                        case 28:
                                            if (!var1) {
                                                _fun51632_ip = 47;
                                                continue _fun51632
                                            }
                                        case 31:
                                            var2 = _closure4_slot0;
                                            var2 = var2.defaultPrevented;
                                            var1 = !var2;
                                        case 47:
                                            if (!var1) {
                                                _fun51632_ip = 143;
                                                continue _fun51632
                                            }
                                        case 50:
                                            var2 = _closure2_slot1;
                                            var1 = var2.dispatch;
                                            var3 = global;
                                            var6 = var3.Object;
                                            var5 = var6.assign;
                                            var7 = _closure1_slot0;
                                            var4 = _closure1_slot2;
                                            var3 = 4;
                                            var4 = var4[var3];
                                            var3 = undefined;
                                            var3 = var7.bind(var3)(var4);
                                            var4 = var3.StackActions;
                                            var3 = var4.popToTop;
                                            var4 = var3.bind(var4)();
                                            var3 = {};
                                            var0 = _closure2_slot0;
                                            var0 = var0.key;
                                            var3.target = var0;
                                            var0 = {};
                                            var0 = var5.bind(var6)(var0, var4, var3);
                                            var0 = var1.bind(var2)(var0);
                                        case 143:
                                            var0 = undefined;
                                            return var0;
                                    }
                                };
                                var1 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var0 = var3.bind(var4)(var2, var1);
                        case 51:
                            return var0;
                    }
                };
                var0 = var7.bind(var12)(var0, var1);
                var1 = _closure1_slot6;
                var0 = {};
                var7 = _closure1_slot1;
                var5 = 5;
                var5 = var8[var5];
                var5 = var7.bind(var3)(var5);
                var8 = var6.Object;
                var7 = var8.assign;
                var6 = {};
                var6.state = var11;
                var6.descriptors = var10;
                var6.navigation = var4;
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [29, 31, 33, 4053, 1470, 5841]);