// actions/native/GuildActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var7;
    var3 = function arg0, arg1() {
        _fun116072: for (var _fun116072_ip = 0;;) switch (_fun116072_ip) {
            case 0:
                var4 = arg1;
                var1 = var4.length;
                var0 = 0;
                if (!(!(var1 <= var0))) {
                    _fun116072_ip = 153;
                    continue _fun116072
                }
            case 17:
                var2 = function() {
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 1;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.dispatch;
                    var0 = {};
                    var3 = 'GUILD_SETTINGS_SUBMIT_SUCCESS';
                    var0.type = var3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var1 = _closure1_slot1;
                var6 = _closure1_slot2;
                var0 = 1;
                var0 = var6[var0];
                var3 = undefined;
                var7 = var1.bind(var3)(var0);
                var1 = var7.dispatch;
                var0 = {};
                var8 = 'GUILD_SETTINGS_SUBMIT';
                var0.type = var8;
                var0 = var1.bind(var7)(var0);
                var1 = _closure1_slot0;
                var0 = 2;
                var0 = var6[var0];
                var0 = var1.bind(var3)(var0);
                var3 = var0.HTTP;
                var1 = var3.patch;
                var0 = {};
                var7 = _closure1_slot3;
                var6 = var7.GUILD_CHANNELS;
                var5 = arg0;
                var5 = var6.bind(var7)(var5);
                var0.url = var5;
                var0.body = var4;
                var4 = true;
                var0.oldFormErrors = var4;
                var0.rejectWithError = var4;
                var1 = var1.bind(var3)(var0);
                var0 = var1.then;
                var0 = var0.bind(var1)(var2, var2);
            case 153:
                var0 = undefined;
                return var0;
        }
    };
    var1 = function arg0, arg1() {
        _fun116074: for (var _fun116074_ip = 0;;) switch (_fun116074_ip) {
            case 0:
                var4 = arg1;
                var1 = var4.length;
                var0 = 0;
                if (!(!(var1 <= var0))) {
                    _fun116074_ip = 153;
                    continue _fun116074
                }
            case 17:
                var2 = function() {
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 1;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.dispatch;
                    var0 = {};
                    var3 = 'GUILD_SETTINGS_SUBMIT_SUCCESS';
                    var0.type = var3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var1 = _closure1_slot1;
                var6 = _closure1_slot2;
                var0 = 1;
                var0 = var6[var0];
                var3 = undefined;
                var7 = var1.bind(var3)(var0);
                var1 = var7.dispatch;
                var0 = {};
                var8 = 'GUILD_SETTINGS_SUBMIT';
                var0.type = var8;
                var0 = var1.bind(var7)(var0);
                var1 = _closure1_slot0;
                var0 = 2;
                var0 = var6[var0];
                var0 = var1.bind(var3)(var0);
                var3 = var0.HTTP;
                var1 = var3.patch;
                var0 = {};
                var7 = _closure1_slot3;
                var6 = var7.GUILD_ROLES;
                var5 = arg0;
                var5 = var6.bind(var7)(var5);
                var0.url = var5;
                var0.body = var4;
                var4 = true;
                var0.oldFormErrors = var4;
                var0.rejectWithError = var4;
                var1 = var1.bind(var3)(var0);
                var0 = var1.then;
                var0 = var0.bind(var1)(var2, var2);
            case 153:
                var0 = undefined;
                return var0;
        }
    };
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var0 = 0;
    var4 = var7[var0];
    var0 = undefined;
    var4 = var6.bind(var0)(var4);
    var4 = var4.Endpoints;
    var _closure1_slot3 = var4;
    var4 = {};
    var4.batchChannelUpdate = var3;
    var4.batchRoleUpdate = var1;
    var5 = 3;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'actions/native/GuildActionCreators.tsx';
    var5 = var6.bind(var7)(var5);
    var2.default = var4;
    var2.batchChannelUpdate = var3;
    var2.batchRoleUpdate = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 806, 507, 2]);