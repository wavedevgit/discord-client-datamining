// modules/parent_tools/hooks/useSelectedTeenUser.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
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
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/parent_tools/hooks/useSelectedTeenUser.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function() { // Environment: var1
        var2 = _closure1_slot1;
        var5 = _closure1_slot2;
        var1 = 3;
        var1 = var5[var1];
        var3 = undefined;
        var1 = var2.bind(var3)(var1);
        var1 = var1.bind(var3)();
        var _closure2_slot0 = var1;
        var2 = _closure1_slot0;
        var1 = 4;
        var1 = var5[var1];
        var3 = var2.bind(var3)(var1);
        var2 = var3.useStateFromStores;
        var5 = _closure1_slot5;
        var1 = new Array(2);
        var1[0] = var5;
        var4 = _closure1_slot3;
        var1[1] = var4;
        var0 = function() { // Environment: var0
            _fun81908: for (var _fun81908_ip = 0;;) switch (_fun81908_ip) {
                case 0:
                    var1 = _closure2_slot0;
                    var0 = true;
                    if (!(var0 === var1)) {
                        _fun81908_ip = 55;
                        continue _fun81908
                    }
                case 13:
                    var2 = _closure1_slot5;
                    var0 = var2.getSelectedTeenId;
                    var3 = var0.bind(var2)();
                    var2 = null;
                    var0 = undefined;
                    if (!(var2 !== var3)) {
                        _fun81908_ip = 53;
                        continue _fun81908
                    }
                case 38:
                    var2 = _closure1_slot3;
                    var1 = var2.getUser;
                    var0 = var1.bind(var2)(var3);
                case 53:
                    return var0;
                case 55:
                    var1 = _closure1_slot3;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.useSelectedTeenUser = var3;
    var3 = function(arg0) { // Environment: var1
        var1 = arg0;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 4;
        var3 = var3[var2];
        var2 = undefined;
        var3 = var4.bind(var2)(var3);
        var2 = var3.useStateFromStores;
        var4 = _closure1_slot3;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            _fun81910: for (var _fun81910_ip = 0;;) switch (_fun81910_ip) {
                case 0:
                    var2 = _closure1_slot3;
                    var1 = var2.getUser;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun81910_ip = 35;
                        continue _fun81910
                    }
                case 31:
                    var1 = undefined;
                    return var1;
                case 35:
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.useTeenUserForId = var3;
    var1 = function() { // Environment: var1
        _fun81911: for (var _fun81911_ip = 0;;) switch (_fun81911_ip) {
            case 0:
                var3 = _closure1_slot5;
                var2 = var3.getSelectedTeenId;
                var3 = var2.bind(var3)();
                var _closure2_slot0 = var3;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 4;
                var4 = var4[var2];
                var2 = undefined;
                var4 = var5.bind(var2)(var4);
                var2 = var4.useStateFromStoresObject;
                var5 = _closure1_slot4;
                var1 = new Array(1);
                var1[0] = var5;
                var0 = function() { // Environment: var0
                    _fun81912: for (var _fun81912_ip = 0;;) switch (_fun81912_ip) {
                        case 0:
                            var0 = {};
                            var3 = _closure2_slot0;
                            var1 = null;
                            var1 = var1 != var3;
                            if (!var1) {
                                _fun81912_ip = 42;
                                continue _fun81912
                            }
                        case 18:
                            var4 = _closure1_slot4;
                            var3 = var4.hasSettingsForUser;
                            var2 = _closure2_slot0;
                            var1 = var3.bind(var4)(var2);
                        case 42:
                            var0.hasLoadedSettings = var1;
                            var1 = _closure1_slot4;
                            var1 = var1.isLoading;
                            var0.isLoading = var1;
                            return var0;
                    }
                };
                var0 = var2.bind(var4)(var1, var0);
                var1 = var0.hasLoadedSettings;
                var2 = var0.isLoading;
                var0 = null;
                var0 = var0 !== var3;
                if (!var0) {
                    _fun81911_ip = 109;
                    continue _fun81911
                }
            case 97:
                var1 = !var1;
                if (!var1) {
                    _fun81911_ip = 106;
                    continue _fun81911
                }
            case 103:
                var1 = !var2;
            case 106:
                var0 = var1;
            case 109:
                return var0;
        }
    };
    var2.useShouldLoadSettingsForSelectedTeenUser = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1613, 4560, 4557, 6472, 632, 2]);