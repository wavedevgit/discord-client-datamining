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
    var3 = 3;
    var3 = var5[var3];
    var4 = var4.bind(var0)(var3);
    var3 = var4.createNavigatorFactory;
    var1 = function arg0() {
        var4 = arg0;
        var13 = var4.id;
        var12 = var4.initialRouteName;
        var11 = var4.children;
        var10 = var4.screenListeners;
        var8 = var4.screenOptions;
        var2 = _closure1_slot4;
        var1 = _closure1_slot3;
        var3 = undefined;
        var9 = var2.bind(var3)(var4, var1);
        var2 = _closure1_slot0;
        var7 = _closure1_slot2;
        var1 = 3;
        var4 = var7[var1];
        var6 = var2.bind(var3)(var4);
        var4 = var6.useNavigationBuilder;
        var1 = var7[var1];
        var1 = var2.bind(var3)(var1);
        var2 = var1.StackRouter;
        var1 = {};
        var1.id = var13;
        var1.initialRouteName = var12;
        var1.children = var11;
        var1.screenListeners = var10;
        var1.screenOptions = var8;
        var1 = var4.bind(var6)(var2, var1);
        var11 = var1.state;
        var _closure2_slot0 = var11;
        var4 = var1.descriptors;
        var10 = var1.navigation;
        var _closure2_slot1 = var10;
        var2 = var1.NavigationContent;
        var8 = _closure1_slot5;
        var6 = var8.useEffect;
        var1 = new Array(3);
        var1[0] = var10;
        var12 = var11.index;
        var1[1] = var12;
        var12 = var11.key;
        var1[2] = var12;
        var0 = function() { // Environment: var0
            _fun72679: for (var _fun72679_ip = 0;;) switch (_fun72679_ip) {
                case 0:
                    var0 = _closure2_slot1;
                    var4 = null;
                    var2 = var4 == var0;
                    var0 = undefined;
                    if (var2) {
                        _fun72679_ip = 66;
                        continue _fun72679
                    }
                case 18:
                    var2 = _closure2_slot1;
                    var2 = var2.addListener;
                    var2 = var4 == var2;
                    var0 = undefined;
                    if (var2) {
                        _fun72679_ip = 66;
                        continue _fun72679
                    }
                case 37:
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
                            _fun72681: for (var _fun72681_ip = 0;;) switch (_fun72681_ip) {
                                case 0:
                                    var1 = _closure2_slot0;
                                    var2 = var1.index;
                                    var1 = 0;
                                    var1 = var2 > var1;
                                    if (!var1) {
                                        _fun72681_ip = 28;
                                        continue _fun72681
                                    }
                                case 21:
                                    var1 = _closure4_slot1;
                                case 28:
                                    if (!var1) {
                                        _fun72681_ip = 47;
                                        continue _fun72681
                                    }
                                case 31:
                                    var2 = _closure4_slot0;
                                    var2 = var2.defaultPrevented;
                                    var1 = !var2;
                                case 47:
                                    if (!var1) {
                                        _fun72681_ip = 143;
                                        continue _fun72681
                                    }
                                case 50:
                                    var2 = _closure2_slot1;
                                    var1 = var2.dispatch;
                                    var3 = global;
                                    var6 = var3.Object;
                                    var5 = var6.assign;
                                    var7 = _closure1_slot0;
                                    var4 = _closure1_slot2;
                                    var3 = 3;
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
                case 66:
                    return var0;
            }
        };
        var0 = var6.bind(var8)(var0, var1);
        var1 = _closure1_slot6;
        var0 = {};
        var6 = _closure1_slot1;
        var5 = 4;
        var5 = var7[var5];
        var5 = var6.bind(var3)(var5);
        var6 = global;
        var8 = var6.Object;
        var7 = var8.assign;
        var6 = {};
        var6.state = var11;
        var6.navigation = var10;
        var6.descriptors = var4;
        var4 = {};
        var4 = var7.bind(var8)(var4, var9, var6);
        var4 = var1.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var1.bind(var3)(var2, var0);
        return var0;
    };
    var1 = var3.bind(var4)(var1);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [29, 31, 33, 1470, 9071]);