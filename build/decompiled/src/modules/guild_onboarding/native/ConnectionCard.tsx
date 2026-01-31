// modules/guild_onboarding/native/ConnectionCard.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var0 = metroImportDefault;
    var _closure1_slot0 = var0;
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
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.OnboardingConnectionType;
    var _closure1_slot2 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot3 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_onboarding/native/ConnectionCard.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: ConnectionCard, environment: var1
        _fun77458: for (var _fun77458_ip = 0;;) switch (_fun77458_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.connection;
                var6 = var0.guildId;
                var5 = var0.location;
                var2 = var7.connection_type;
                var0 = _closure1_slot2;
                var0 = var0.APPLICATION;
                if (!(var2 !== var0)) {
                    _fun77458_ip = 113;
                    continue _fun77458
                }
            case 42:
                var3 = var7.connection_type;
                var0 = _closure1_slot2;
                var2 = var0.PROVIDER_CONNECTED_ACCOUNT;
                var0 = null;
                if (!(var3 === var2)) {
                    _fun77458_ip = 111;
                    continue _fun77458
                }
            case 64:
                var8 = _closure1_slot3;
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 4;
                var2 = var4[var2];
                var4 = undefined;
                var3 = var3.bind(var4)(var2);
                var2 = {};
                var2.connection = var7;
                var2.guildId = var6;
                var2.location = var5;
                var0 = var8.bind(var4)(var3, var2);
            case 111:
                _fun77458_ip = 160;
                continue _fun77458;
            case 113:
                var4 = _closure1_slot3;
                var2 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 3;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var1.connection = var7;
                var1.guildId = var6;
                var1.location = var5;
                var0 = var4.bind(var3)(var2, var1);
            case 160:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 4547, 33, 9790, 9792, 2]);