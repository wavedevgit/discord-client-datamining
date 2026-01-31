// modules/guild_settings/server_monetization/boost_perks/GuildSettingsVanityURLActionCreators.tsx
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var3 = var3.Endpoints;
    var _closure1_slot3 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_settings/server_monetization/boost_perks/GuildSettingsVanityURLActionCreators.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 1;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var2 = var0.HTTP;
        var1 = var2.get;
        var0 = {
            'url': null,
            'oldFormErrors': true,
            'rejectWithError': true
        };
        var5 = _closure1_slot3;
        var4 = var5.GUILD_VANITY_URL;
        var3 = arg0;
        var3 = var4.bind(var5)(var3);
        var0.url = var3;
        var2 = var1.bind(var2)(var0);
        var1 = var2.then;
        var0 = function(arg0) { // Environment: var0
            var0 = arg0;
            var0 = var0.body;
            var6 = var0.code;
            var5 = var0.uses;
            var4 = var0.error;
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 2;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.dispatch;
            var1 = {};
            var7 = 'GUILD_SETTINGS_SET_VANITY_URL';
            var1.type = var7;
            var1.code = var6;
            var1.uses = var5;
            var1.error = var4;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.fetchVanityUrl = var3;
    var3 = function() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 2;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'GUILD_SETTINGS_VANITY_URL_RESET';
        var1.type = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.resetCode = var3;
    var3 = function arg0() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 2;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'GUILD_SETTINGS_VANITY_URL_SET';
        var1.type = var4;
        var4 = arg0;
        var1.code = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.setCode = var3;
    var1 = function arg0, arg1, arg2() {
        var1 = arg2;
        var _closure2_slot0 = var1;
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 1;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var3 = var1.HTTP;
        var2 = var3.patch;
        var1 = {};
        var6 = _closure1_slot3;
        var5 = var6.GUILD_VANITY_URL;
        var4 = arg0;
        var4 = var5.bind(var6)(var4);
        var1.url = var4;
        var4 = {};
        var5 = arg1;
        var4.code = var5;
        var1.body = var4;
        var4 = true;
        var1.oldFormErrors = var4;
        var4 = false;
        var1.rejectWithError = var4;
        var3 = var2.bind(var3)(var1);
        var2 = var3.then;
        var1 = function(arg0) { // Environment: var0
            var0 = arg0;
            var0 = var0.body;
            var5 = var0.code;
            var4 = var0.uses;
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 2;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.dispatch;
            var1 = {};
            var6 = 'GUILD_SETTINGS_SET_VANITY_URL';
            var1.type = var6;
            var1.code = var5;
            var1.uses = var4;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var0 = function(arg0) { // Environment: var0
            _fun65866: for (var _fun65866_ip = 0;;) switch (_fun65866_ip) {
                case 0:
                    var0 = arg0;
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 2;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.dispatch;
                    var1 = {};
                    var4 = 'GUILD_SETTINGS_VANITY_URL_ERROR';
                    var1.type = var4;
                    var4 = var0.body;
                    var1.error = var4;
                    var1 = var2.bind(var3)(var1);
                    var3 = _closure2_slot0;
                    var2 = null;
                    if (!(var2 != var3)) {
                        _fun65866_ip = 85;
                        continue _fun65866
                    }
                case 72:
                    var1 = _closure2_slot0;
                    var1 = var1.throwErr;
                    if (var1) {
                        _fun65866_ip = 87;
                        continue _fun65866
                    }
                case 85:
                    return var0;
                case 87:
                    throw var0;
            }
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.saveCode = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 507, 806, 2]);