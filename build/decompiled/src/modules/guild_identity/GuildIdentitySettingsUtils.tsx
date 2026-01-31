// modules/guild_identity/GuildIdentitySettingsUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var5);
    var0 = 1;
    var3 = var3[var0];
    var0 = undefined;
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_identity/GuildIdentitySettingsUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function(arg0, arg1) { // Original name: setNewPendingGuildIdentityBio, environment: var1
        _fun80718: for (var _fun80718_ip = 0;;) switch (_fun80718_ip) {
            case 0:
                var4 = arg0;
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 0;
                var1 = var1[var0];
                var0 = undefined;
                var3 = var2.bind(var0)(var1);
                var2 = var3.setPendingBio;
                var5 = arg1;
                var1 = undefined;
                if (!(var4 !== var5)) {
                    _fun80718_ip = 45;
                    continue _fun80718
                }
            case 42:
                var1 = var4;
            case 45:
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var2.setNewPendingGuildIdentityBio = var3;
    var3 = function(arg0, arg1) { // Original name: setNewPendingGuildIdentityPronouns, environment: var1
        _fun80719: for (var _fun80719_ip = 0;;) switch (_fun80719_ip) {
            case 0:
                var4 = arg0;
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 0;
                var1 = var1[var0];
                var0 = undefined;
                var3 = var2.bind(var0)(var1);
                var2 = var3.setPendingPronouns;
                var5 = arg1;
                var1 = undefined;
                if (!(var4 !== var5)) {
                    _fun80719_ip = 45;
                    continue _fun80719
                }
            case 42:
                var1 = var4;
            case 45:
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var2.setNewPendingGuildIdentityPronouns = var3;
    var3 = function(arg0, arg1) { // Original name: setNewPendingNickname, environment: var1
        _fun80720: for (var _fun80720_ip = 0;;) switch (_fun80720_ip) {
            case 0:
                var4 = arg0;
                var6 = arg1;
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 0;
                var1 = var1[var0];
                var0 = undefined;
                var3 = var2.bind(var0)(var1);
                var2 = var3.setPendingNickname;
                var1 = undefined;
                if (!(var4 !== var6)) {
                    _fun80720_ip = 61;
                    continue _fun80720
                }
            case 42:
                var5 = '';
                if (!(var5 === var4)) {
                    _fun80720_ip = 58;
                    continue _fun80720
                }
            case 50:
                var5 = null;
                var1 = undefined;
                if (!(var5 !== var6)) {
                    _fun80720_ip = 61;
                    continue _fun80720
                }
            case 58:
                var1 = var4;
            case 61:
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var2.setNewPendingNickname = var3;
    var3 = function(arg0, arg1) { // Original name: setNewPendingGuildIdentityThemeColors, environment: var1
        _fun80721: for (var _fun80721_ip = 0;;) switch (_fun80721_ip) {
            case 0:
                var4 = arg0;
                var5 = null;
                var2 = var5 == var4;
                var0 = undefined;
                var1 = undefined;
                if (var2) {
                    _fun80721_ip = 22;
                    continue _fun80721
                }
            case 16:
                var2 = 0;
                var1 = var4[var2];
            case 22:
                var1 = var5 == var1;
                if (var1) {
                    _fun80721_ip = 49;
                    continue _fun80721
                }
            case 29:
                var3 = var5 == var4;
                var2 = undefined;
                if (var3) {
                    _fun80721_ip = 45;
                    continue _fun80721
                }
            case 38:
                var3 = 1;
                var2 = var4[var3];
            case 45:
                var1 = var5 == var2;
            case 49:
                var3 = _closure1_slot0;
                var6 = _closure1_slot1;
                var2 = 0;
                var2 = var6[var2];
                var3 = var3.bind(var0)(var2);
                var2 = var3.setPendingThemeColors;
                if (!var1) {
                    _fun80721_ip = 92;
                    continue _fun80721
                }
            case 80:
                var1 = arg1;
                var5 = var5 == var1;
                var1 = undefined;
                if (var5) {
                    _fun80721_ip = 95;
                    continue _fun80721
                }
            case 92:
                var1 = var4;
            case 95:
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var2.setNewPendingGuildIdentityThemeColors = var3;
    var1 = function(arg0, arg1) { // Original name: canResetThemeColors, environment: var1
        _fun80722: for (var _fun80722_ip = 0;;) switch (_fun80722_ip) {
            case 0:
                var4 = arg0;
                var2 = undefined;
                if (!(var2 !== var4)) {
                    _fun80722_ip = 55;
                    continue _fun80722
                }
            case 9:
                var1 = null;
                var3 = var1 == var4;
                var0 = undefined;
                if (var3) {
                    _fun80722_ip = 26;
                    continue _fun80722
                }
            case 20:
                var3 = 0;
                var0 = var4[var3];
            case 26:
                var0 = var1 != var0;
                if (!var0) {
                    _fun80722_ip = 53;
                    continue _fun80722
                }
            case 33:
                var3 = var1 == var4;
                var2 = undefined;
                if (var3) {
                    _fun80722_ip = 49;
                    continue _fun80722
                }
            case 42:
                var3 = 1;
                var2 = var4[var3];
            case 49:
                var0 = var1 != var2;
            case 53:
                _fun80722_ip = 64;
                continue _fun80722;
            case 55:
                var2 = null;
                var1 = arg1;
                var0 = var2 != var1;
            case 64:
                return var0;
        }
    };
    var2.canResetThemeColors = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5684, 2]);