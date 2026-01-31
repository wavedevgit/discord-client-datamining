// modules/webauthn/native/UserSettingsWebAuthn.tsx
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
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.WebAuthnScreens;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot5 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/webauthn/native/UserSettingsWebAuthn.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun79589: for (var _fun79589_ip = 0;;) switch (_fun79589_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.navigation;
                var _closure2_slot0 = var2;
                var5 = var0.initialRouteName;
                var3 = undefined;
                if (!(var5 === var3)) {
                    _fun79589_ip = 40;
                    continue _fun79589
                }
            case 27:
                var2 = _closure1_slot4;
                var5 = var2.INIT;
            case 40:
                var0 = var0.showNav;
                if (!(var0 === var3)) {
                    _fun79589_ip = 52;
                    continue _fun79589
                }
            case 50:
                var0 = false;
            case 52:
                var _closure2_slot1 = var0;
                var4 = _closure1_slot1;
                var7 = _closure1_slot2;
                var2 = 3;
                var2 = var7[var2];
                var8 = var4.bind(var3)(var2);
                var6 = var8.getScreens;
                var2 = {};
                var4 = false;
                var2.isModal = var4;
                var6 = var6.bind(var8)(var2);
                var8 = _closure1_slot3;
                var2 = var8.useLayoutEffect;
                var1 = function() { // Environment: var1
                    var2 = _closure2_slot0;
                    var1 = var2.setOptions;
                    var0 = {};
                    var3 = _closure2_slot1;
                    var0.headerShown = var3;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var1 = var2.bind(var8)(var1);
                var2 = _closure1_slot5;
                var1 = _closure1_slot0;
                var0 = 4;
                var0 = var7[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.Navigator;
                var0 = {};
                var0.screens = var6;
                var0.initialRouteName = var5;
                var6 = {};
                var6.name = var5;
                var5 = new Array(1);
                var5[0] = var6;
                var0.initialRouteStack = var5;
                var0.useContainer = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 7453, 33, 7452, 5748, 2]);