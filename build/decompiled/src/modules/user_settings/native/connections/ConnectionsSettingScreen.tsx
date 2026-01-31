// modules/user_settings/native/connections/ConnectionsSettingScreen.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var0 = function() { // Original name: onPress, environment: var1
        var4 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 2;
        var3 = var1[var0];
        var0 = undefined;
        var4 = var4.bind(var0)(var3);
        var3 = var4.openLazy;
        var5 = _closure1_slot0;
        var2 = 4;
        var2 = var1[var2];
        var5 = var5.bind(var0)(var2);
        var2 = 3;
        var2 = var1[var2];
        var1 = var1.paths;
        var2 = var5.bind(var0)(var2, var1);
        var1 = 'AddConnection';
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var _closure1_slot5 = var0;
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
    var6 = var3.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot4 = var3;
    var3 = var6.memo;
    var1 = function() { // Original name: ConnectionsSettingScreen, environment: var1
        _fun82224: for (var _fun82224_ip = 0;;) switch (_fun82224_ip) {
            case 0:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 5;
                var2 = var5[var2];
                var3 = undefined;
                var6 = var4.bind(var3)(var2);
                var2 = var6.useStackNavigation;
                var7 = var2.bind(var6)();
                var _closure2_slot0 = var7;
                var2 = 6;
                var2 = var5[var2];
                var4 = var4.bind(var3)(var2);
                var2 = var4.useSettingNavigationRoute;
                var2 = var2.bind(var4)();
                var2 = var2.params;
                var4 = null;
                var5 = var4 == var2;
                var4 = undefined;
                if (var5) {
                    _fun82224_ip = 86;
                    continue _fun82224
                }
            case 80:
                var4 = var2.selectedPlatformType;
            case 86:
                var6 = _closure1_slot3;
                var5 = var6.useLayoutEffect;
                var2 = new Array(1);
                var2[0] = var7;
                var1 = function() { // Environment: var1
                    var2 = _closure2_slot0;
                    var1 = var2.setOptions;
                    var0 = {};
                    var3 = function(arg0) { // Original name: headerRight, environment: var3
                        var3 = _closure1_slot4;
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var0 = 7;
                        var0 = var8[var0];
                        var2 = undefined;
                        var0 = var7.bind(var2)(var0);
                        var1 = var0.HeaderTextButton;
                        var0 = {};
                        var9 = arg0;
                        var10 = var0;
                        var5 = copyDataProperties(var10, var9);
                        var5 = _closure1_slot5;
                        var4 = 'onPress';
                        var0[var4] = var5;
                        var4 = 8;
                        var5 = var8[var4];
                        var5 = var7.bind(var2)(var5);
                        var6 = var5.intl;
                        var5 = var6.string;
                        var4 = var8[var4];
                        var4 = var7.bind(var2)(var4);
                        var4 = var4.t;
                        var4 = var4.OYkgVk;
                        var5 = var5.bind(var6)(var4);
                        var4 = 'label';
                        var0[var4] = var5;
                        var0 = var3.bind(var2)(var1, var0);
                        return var0;
                    };
                    var0.headerRight = var3;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var1 = var5.bind(var6)(var1, var2);
                var2 = _closure1_slot4;
                var1 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 9;
                var0 = var5[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.UserSettingsConnections;
                var0 = {};
                var0.selectedPlatformType = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/connections/ConnectionsSettingScreen.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 33, 3237, 10491, 1307, 1469, 7511, 8848, 1234, 10492, 2]);