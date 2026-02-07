// modules/app_launcher/native/onboarding/hooks/useActivityApplications.tsx
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
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/app_launcher/native/onboarding/hooks/useActivityApplications.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var0 = arg0;
        var5 = var0.guildId;
        var _closure2_slot0 = var5;
        var6 = var0.fetchesShelf;
        var _closure2_slot1 = var6;
        var3 = _closure1_slot1;
        var4 = _closure1_slot2;
        var0 = 1;
        var0 = var4[var0];
        var4 = undefined;
        var3 = var3.bind(var4)(var0);
        var0 = {};
        var0.guildId = var5;
        var4 = var3.bind(var4)(var0);
        var3 = var4.map;
        var0 = function(arg0) { // Environment: var1
            var0 = arg0;
            var0 = var0.application;
            return var0;
        };
        var0 = var3.bind(var4)(var0);
        var4 = _closure1_slot3;
        var3 = var4.useEffect;
        var2 = new Array(2);
        var2[0] = var6;
        var2[1] = var5;
        var1 = function() { // Environment: var1
            _fun90902: for (var _fun90902_ip = 0;;) switch (_fun90902_ip) {
                case 0:
                    var0 = _closure2_slot1;
                    if (!var0) {
                        _fun90902_ip = 56;
                        continue _fun90902
                    }
                case 10:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 2;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.fetchShelf;
                    var0 = {};
                    var3 = _closure2_slot0;
                    var0.guildId = var3;
                    var0 = var1.bind(var2)(var0);
                case 56:
                    var0 = undefined;
                    return var0;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var0;
    };
    var2.useActivityApplications = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 11804, 7983, 2]);