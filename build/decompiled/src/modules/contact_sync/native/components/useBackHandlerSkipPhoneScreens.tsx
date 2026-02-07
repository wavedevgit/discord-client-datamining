// modules/contact_sync/native/components/useBackHandlerSkipPhoneScreens.tsx
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var3 = var3.NativeModules;
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ContactSyncScenes;
    var _closure1_slot3 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/contact_sync/native/components/useBackHandlerSkipPhoneScreens.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0, arg1() {
        var0 = arg0;
        var _closure2_slot0 = var0;
        var0 = arg1;
        var _closure2_slot1 = var0;
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var0 = 2;
        var2 = var2[var0];
        var0 = undefined;
        var3 = var3.bind(var0)(var2);
        var2 = var3.useNavigatorBackPressHandler;
        var1 = function() { // Environment: var1
            _fun82519: for (var _fun82519_ip = 0;;) switch (_fun82519_ip) {
                case 0:
                    var2 = _closure2_slot1;
                    var1 = null;
                    if (!(var1 == var2)) {
                        _fun82519_ip = 157;
                        continue _fun82519
                    }
                case 16:
                    var2 = _closure2_slot0;
                    var1 = _closure1_slot3;
                    var3 = var1.ADD_PHONE;
                    var5 = new Array(3);
                    var5[0] = var3;
                    var3 = var1.VERIFY_PHONE;
                    var5[1] = var3;
                    var1 = var1.VERIFY_PASSWORD;
                    var5[2] = var1;
                    var1 = var2.getState;
                    var1 = var1.bind(var2)();
                    var1 = var1.routes;
                    var3 = var1.length;
                    var4 = 2;
                    if (!(!(var3 <= var4))) {
                        _fun82519_ip = 145;
                        continue _fun82519
                    }
                case 89:
                    var3 = var1.length;
                    var3 = var3 - var4;
                    var3 = var1[var3];
                    var4 = var5.includes;
                    var3 = var3.name;
                    var3 = var4.bind(var5)(var3);
                    if (!var3) {
                        _fun82519_ip = 167;
                        continue _fun82519
                    }
                case 120:
                    var3 = var2.pop;
                    var4 = var1.length;
                    var1 = 1;
                    var1 = var4 - var1;
                    var1 = var3.bind(var2)(var1);
                    _fun82519_ip = 167;
                    continue _fun82519;
                case 145:
                    var1 = var2.pop;
                    var1 = var1.bind(var2)();
                    _fun82519_ip = 167;
                    continue _fun82519;
                case 157:
                    var1 = _closure2_slot1;
                    var0 = undefined;
                    var0 = var1.bind(var0)();
                case 167:
                    var0 = true;
                    return var0;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.default = var3;
    var1 = function() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 2;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.useNavigatorBackPressHandler;
        var1 = function() { // Environment: var1
            var0 = _closure1_slot2;
            var1 = var0.MinimizeApp;
            var0 = var1.minimizeApp;
            var0 = var0.bind(var1)();
            var0 = true;
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.useBackHandlerMinimizeApp = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 10381, 4708, 2]);