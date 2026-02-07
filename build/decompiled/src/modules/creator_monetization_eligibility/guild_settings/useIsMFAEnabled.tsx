// modules/creator_monetization_eligibility/guild_settings/useIsMFAEnabled.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
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
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.MFALevels;
    var _closure1_slot4 = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/creator_monetization_eligibility/guild_settings/useIsMFAEnabled.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        _fun117117: for (var _fun117117_ip = 0;;) switch (_fun117117_ip) {
            case 0:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var2 = 3;
                var3 = var6[var2];
                var4 = undefined;
                var9 = var5.bind(var4)(var3);
                var8 = var9.useStateFromStores;
                var3 = _closure1_slot3;
                var7 = new Array(1);
                var7[0] = var3;
                var3 = function() { // Environment: var0
                    var1 = _closure1_slot3;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var3 = var8.bind(var9)(var7, var3);
                var2 = var6[var2];
                var6 = var5.bind(var4)(var2);
                var5 = var6.useStateFromStores;
                var7 = _closure1_slot2;
                var2 = new Array(1);
                var2[0] = var7;
                var0 = function() { // Environment: var0
                    var1 = _closure1_slot2;
                    var0 = var1.getProps;
                    var0 = var0.bind(var1)();
                    var0 = var0.mfaLevel;
                    return var0;
                };
                var2 = var5.bind(var6)(var2, var0);
                var0 = {};
                var5 = null;
                var5 = var5 == var3;
                if (var5) {
                    _fun117117_ip = 113;
                    continue _fun117117
                }
            case 107:
                var4 = var3.mfaEnabled;
            case 113:
                var3 = true;
                var3 = var3 === var4;
                var0.isUserMFAEnabled = var3;
                var1 = _closure1_slot4;
                var1 = var1.ELEVATED;
                var1 = var2 === var1;
                var0.isModerationMFAEnabled = var1;
                return var0;
        }
    };
    var2.useIsMFAEnabled = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [8225, 1621, 660, 632, 2]);