// modules/guild_settings/GuildSettingsConstants.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var3);
    var4 = {};
    var3 = 0;
    var4.DISPLAY = var3;
    var0 = 'DISPLAY';
    var4[var3] = var0;
    var0 = 1;
    var4.PERMISSIONS = var0;
    var3 = 'PERMISSIONS';
    var4[var0] = var3;
    var7 = 2;
    var4.MEMBERS = var7;
    var3 = 'MEMBERS';
    var4[var7] = var3;
    var7 = 3;
    var4.VERIFICATIONS = var7;
    var3 = 'VERIFICATIONS';
    var4[var7] = var3;
    var3 = {};
    var7 = function() { // Original name: afk_channel_id, environment: var1
        var4 = _closure1_slot0;
        var5 = _closure1_slot1;
        var0 = 0;
        var1 = var5[var0];
        var3 = undefined;
        var1 = var4.bind(var3)(var1);
        var2 = var1.intl;
        var1 = var2.string;
        var0 = var5[var0];
        var0 = var4.bind(var3)(var0);
        var0 = var0.t;
        var0 = var0.KuYcnU;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var3.afk_channel_id = var7;
    var7 = function() { // Original name: public_updates_channel_id, environment: var1
        var4 = _closure1_slot0;
        var5 = _closure1_slot1;
        var0 = 0;
        var1 = var5[var0];
        var3 = undefined;
        var1 = var4.bind(var3)(var1);
        var2 = var1.intl;
        var1 = var2.string;
        var0 = var5[var0];
        var0 = var4.bind(var3)(var0);
        var0 = var0.t;
        var0 = var0.vAyDGU;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var3.public_updates_channel_id = var7;
    var7 = function() { // Original name: safety_alerts_channel_id, environment: var1
        var4 = _closure1_slot0;
        var5 = _closure1_slot1;
        var0 = 0;
        var1 = var5[var0];
        var3 = undefined;
        var1 = var4.bind(var3)(var1);
        var2 = var1.intl;
        var1 = var2.string;
        var0 = var5[var0];
        var0 = var4.bind(var3)(var0);
        var0 = var0.t;
        var0 = var0.sMkYE8;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var3.safety_alerts_channel_id = var7;
    var7 = function() { // Original name: system_channel_id, environment: var1
        var4 = _closure1_slot0;
        var5 = _closure1_slot1;
        var0 = 0;
        var1 = var5[var0];
        var3 = undefined;
        var1 = var4.bind(var3)(var1);
        var2 = var1.intl;
        var1 = var2.string;
        var0 = var5[var0];
        var0 = var4.bind(var3)(var0);
        var0 = var0.t;
        var0 = var0.NASFnq;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var3.system_channel_id = var7;
    var _closure1_slot2 = var3;
    var5 = var5[var0];
    var0 = undefined;
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/guild_settings/GuildSettingsConstants.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = 5;
    var2.MAX_SUBCATEGORIES = var5;
    var5 = 10;
    var2.MAX_KEYWORDS = var5;
    var5 = 30;
    var2.MAX_KEYWORD_LENGTH = var5;
    var2.GuildSettingsRoleEditSections = var4;
    var2.ERROR_KEY_TO_LABEL_FUNC = var3;
    var1 = function(arg0) { // Original name: getSettingsErrorMessage, environment: var1
        _fun116040: for (var _fun116040_ip = 0;;) switch (_fun116040_ip) {
            case 0:
                var3 = arg0;
                var1 = global;
                var2 = var1.Object;
                var0 = var2.keys;
                var0 = var0.bind(var2)(var3);
                var0 = var0.length;
                var2 = 0;
                if (!(var2 !== var0)) {
                    _fun116040_ip = 132;
                    continue _fun116040
                }
            case 32:
                var4 = var1.Object;
                var0 = var4.keys;
                var0 = var0.bind(var4)(var3);
                var2 = var0[var2];
                var0 = _closure1_slot2;
                var7 = var0[var2];
                var0 = null;
                var6 = var0 == var7;
                var5 = undefined;
                if (var6) {
                    _fun116040_ip = 88;
                    continue _fun116040
                }
            case 74:
                var6 = var7.call;
                var4 = _closure1_slot2;
                var5 = var6.bind(var7)(var4);
            case 88:
                if (!(var0 == var5)) {
                    _fun116040_ip = 98;
                    continue _fun116040
                }
            case 92:
                var0 = var3[var2];
                _fun116040_ip = 130;
                continue _fun116040;
            case 98:
                var4 = var3[var2];
                var1 = var1.HermesInternal;
                var3 = var1.concat;
                var2 = '(';
                var1 = ') ';
                var0 = var3.bind(var2)(var5, var1, var4);
            case 130:
                return var0;
            case 132:
                var0 = null;
                return var0;
        }
    };
    var2.getSettingsErrorMessage = var1;
    var1 = 'https://discord.gg';
    var2.VANITY_URL_INVITE_ENDPOINT = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1234, 2]);