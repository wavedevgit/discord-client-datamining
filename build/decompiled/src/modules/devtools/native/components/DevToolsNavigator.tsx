// modules/devtools/native/components/DevToolsNavigator.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
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
    var7 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot4 = var6;
    var3 = var3.jsxs;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var6 = var4.bind(var0)(var3);
    var3 = var6.createNativeStackNavigator;
    var3 = var3.bind(var6)();
    var _closure1_slot6 = var3;
    var6 = var7.memo;
    var3 = function(arg0) { // Environment: var1
        _fun88001: for (var _fun88001_ip = 0;;) switch (_fun88001_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.screenKey;
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 4;
                var0 = var2[var0];
                var3 = undefined;
                var1 = var1.bind(var3)(var0);
                var0 = var1.useAccessibilityNativeStackOptions;
                var0 = var0.bind(var1)();
                var _closure2_slot0 = var0;
                var2 = _closure1_slot5;
                var0 = _closure1_slot6;
                var1 = var0.Navigator;
                var0 = {};
                var4 = null;
                var8 = var4 != var7;
                var9 = 'home';
                var4 = var9;
                if (!var8) {
                    _fun88001_ip = 85;
                    continue _fun88001
                }
            case 82:
                var4 = var7;
            case 85:
                var0.initialRouteName = var4;
                var4 = function arg0() {
                    var0 = arg0;
                    var3 = var0.navigation;
                    var0 = {};
                    var1 = function arg0() {
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
                        var0 = 5;
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
                    var0.headerTitle = var1;
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 5;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var4.bind(var1)(var2);
                    var1 = var2.getRenderModalCloseImage;
                    var1 = var1.bind(var2)(var3);
                    var0.headerLeft = var1;
                    var1 = 'center';
                    var0.headerTitleAlign = var1;
                    var5 = _closure2_slot0;
                    var6 = var0;
                    var1 = copyDataProperties(var6, var5);
                    return var0;
                };
                var0.screenOptions = var4;
                var8 = _closure1_slot4;
                var4 = _closure1_slot6;
                var7 = var4.Screen;
                var4 = {};
                var4.name = var9;
                var11 = _closure1_slot1;
                var10 = _closure1_slot2;
                var9 = 6;
                var9 = var10[var9];
                var9 = var11.bind(var3)(var9);
                var4.component = var9;
                var9 = function() {
                    var0 = {};
                    var1 = function() {
                        var3 = _closure1_slot5;
                        var2 = _closure1_slot3;
                        var1 = {};
                        var0 = {};
                        var4 = 'row';
                        var0.flexDirection = var4;
                        var1.style = var0;
                        var7 = _closure1_slot4;
                        var6 = _closure1_slot0;
                        var11 = _closure1_slot2;
                        var0 = 7;
                        var4 = var11[var0];
                        var0 = undefined;
                        var4 = var6.bind(var0)(var4);
                        var5 = var4.HammerIcon;
                        var4 = {};
                        var8 = 'sm';
                        var4.size = var8;
                        var5 = var7.bind(var0)(var5, var4);
                        var4 = new Array(2);
                        var4[0] = var5;
                        var5 = 8;
                        var5 = var11[var5];
                        var5 = var6.bind(var0)(var5);
                        var6 = var5.Text;
                        var5 = {
                            'style': null,
                            'variant': 'heading-md/semibold',
                            'color': 'mobile-text-heading-primary',
                            'children': 'DevTools'
                        };
                        var8 = {};
                        var10 = _closure1_slot1;
                        var9 = 9;
                        var9 = var11[var9];
                        var9 = var10.bind(var0)(var9);
                        var9 = var9.spacing;
                        var9 = var9.PX_8;
                        var8.marginLeft = var9;
                        var5.style = var8;
                        var5 = var7.bind(var0)(var6, var5);
                        var4[1] = var5;
                        var1.children = var4;
                        var0 = var3.bind(var0)(var2, var1);
                        return var0;
                    };
                    var0.headerTitle = var1;
                    var1 = 'DevTools';
                    var0.title = var1;
                    return var0;
                };
                var4.options = var9;
                var7 = var8.bind(var3)(var7, var4);
                var4 = new Array(2);
                var4[0] = var7;
                var7 = global;
                var8 = var7.Object;
                var7 = var8.entries;
                var9 = _closure1_slot0;
                var6 = 10;
                var6 = var10[var6];
                var6 = var9.bind(var3)(var6);
                var6 = var6.DevToolsScreens;
                var7 = var7.bind(var8)(var6);
                var6 = var7.map;
                var5 = function(arg0) { // Environment: var5
                    _fun88006: for (var _fun88006_ip = 0;;) switch (_fun88006_ip) {
                        case 0:
                            var5 = arg0;
                            var1 = var5[Symbol.iterator];
                            var5 = var1().next;
                            var7 = undefined;
                            var2 = undefined;
                            var4 = undefined;
                            var6 = var5().value;
                            var10 = var1;
                            var10 = var10 === var7;
                            var2 = var10;
                            if (var10) {
                                _fun88006_ip = 34;
                                continue _fun88006
                            }
                        case 31:
                            var4 = var6;
                        case 34:
                            var3 = var4;
                            var4 = undefined;
                            var6 = var2;
                            if (var6) {
                                _fun88006_ip = 65;
                                continue _fun88006
                            }
                        case 45:
                            var5 = var5().value;
                            var6 = var1;
                            var6 = var6 === var7;
                            var2 = var6;
                            if (var6) {
                                _fun88006_ip = 65;
                                continue _fun88006
                            }
                        case 62:
                            var4 = var5;
                        case 65: // try_start_0
                            var5 = var4.headerTitle;
                            var _closure3_slot0 = var5;
                            var9 = var4.render;
                        case 81: // try_end0
                            var4 = var2;
                            if (var4) {
                                _fun88006_ip = 90;
                                continue _fun88006
                            }
                        case 87:
                            var1.return();
                        case 90:
                            var6 = _closure1_slot4;
                            var4 = _closure1_slot6;
                            var5 = var4.Screen;
                            var4 = {};
                            var4.name = var3;
                            var4.children = var9;
                            var8 = function() {
                                var0 = {};
                                var1 = _closure3_slot0;
                                var0.title = var1;
                                return var0;
                            };
                            var4.options = var8;
                            var3 = var6.bind(var7)(var5, var4, var3);
                            return var3;
                        case 137: // catch_target0
                            CatchBlockStart(arg_register = 0);
                            _fun88006_ip = 143;
                            continue _fun88006;
                        case 141:
                            CatchBlockStart(arg_register = 0);
                        case 143:
                            if (var2) {
                                _fun88006_ip = 149;
                                continue _fun88006
                            }
                        case 146:
                            var1.return();
                        case 149:
                            throw var0;
                    }
                };
                var5 = var6.bind(var7)(var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var3 = var6.bind(var7)(var3);
    var _closure1_slot7 = var3;
    var3 = 13;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/devtools/native/components/DevToolsNavigator.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        _fun88008: for (var _fun88008_ip = 0;;) switch (_fun88008_ip) {
            case 0:
                var1 = arguments[0];
                var0 = undefined;
                if (!(var1 === var0)) {
                    _fun88008_ip = 11;
                    continue _fun88008
                }
            case 9:
                var1 = {};
            case 11:
                var1 = var1.screenKey;
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 11;
                var2 = var4[var2];
                var5 = var3.bind(var0)(var2);
                var2 = var5.hideActionSheet;
                var2 = var2.bind(var5)();
                var2 = 12;
                var2 = var4[var2];
                var5 = var3.bind(var0)(var2);
                var4 = var5.pushLazy;
                var3 = {};
                var3.screenKey = var1;
                var2 = function() { // Environment: var1
                    var0 = global;
                    var2 = var0.Promise;
                    var1 = var2.resolve;
                    var0 = _closure1_slot7;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var1 = 'DevToolsNavigator';
                var1 = var4.bind(var5)(var2, var3, var1);
                return var0;
        }
    };
    var2.navigateToDevTools = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 9141, 5790, 8922, 11392, 10146, 3941, 671, 11134, 3278, 4561, 2]);