// modules/guild_badge/BadgeCategory.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var3 = {};
    var6 = 0;
    var3.PARTNERED = var6;
    var0 = 'PARTNERED';
    var3[var6] = var0;
    var0 = 1;
    var3.VERIFIED = var0;
    var6 = 'VERIFIED';
    var3[var0] = var6;
    var7 = 2;
    var3.VERIFIED_AND_PARTNERED = var7;
    var6 = 'VERIFIED_AND_PARTNERED';
    var3[var7] = var6;
    var7 = 3;
    var3.COMMUNITY = var7;
    var6 = 'COMMUNITY';
    var3[var7] = var6;
    var7 = 4;
    var3.DISCOVERABLE = var7;
    var6 = 'DISCOVERABLE';
    var3[var7] = var6;
    var7 = 5;
    var3.STAFF = var7;
    var6 = 'STAFF';
    var3[var7] = var6;
    var7 = 6;
    var3.NONE = var7;
    var6 = 'NONE';
    var3[var7] = var6;
    var _closure1_slot2 = var3;
    var4 = var4[var0];
    var0 = undefined;
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_badge/BadgeCategory.tsx';
    var4 = var5.bind(var6)(var4);
    var2.BadgeCategory = var3;
    var1 = function(arg0) { // Original name: getBadgeCategory, environment: var1
        _fun59681: for (var _fun59681_ip = 0;;) switch (_fun59681_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.staff;
                if (var1) {
                    _fun59681_ip = 201;
                    continue _fun59681
                }
            case 15:
                var1 = var0.verified;
                if (!var1) {
                    _fun59681_ip = 36;
                    continue _fun59681
                }
            case 24:
                var1 = var0.partnered;
                if (var1) {
                    _fun59681_ip = 186;
                    continue _fun59681
                }
            case 36:
                var1 = var0.verified;
                if (var1) {
                    _fun59681_ip = 171;
                    continue _fun59681
                }
            case 48:
                var1 = var0.partnered;
                if (var1) {
                    _fun59681_ip = 156;
                    continue _fun59681
                }
            case 57:
                var1 = var0.community;
                if (!var1) {
                    _fun59681_ip = 112;
                    continue _fun59681
                }
            case 66:
                var3 = var0.visibility;
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 0;
                var4 = var4[var2];
                var2 = undefined;
                var2 = var5.bind(var2)(var4);
                var2 = var2.GuildVisibility;
                var2 = var2.PUBLIC;
                if (!(var3 !== var2)) {
                    _fun59681_ip = 144;
                    continue _fun59681
                }
            case 112:
                var0 = var0.community;
                var2 = _closure1_slot2;
                if (var0) {
                    _fun59681_ip = 136;
                    continue _fun59681
                }
            case 128:
                var0 = var2.NONE;
                _fun59681_ip = 142;
                continue _fun59681;
            case 136:
                var0 = var2.COMMUNITY;
            case 142:
                _fun59681_ip = 154;
                continue _fun59681;
            case 144:
                var1 = _closure1_slot2;
                var0 = var1.DISCOVERABLE;
            case 154:
                _fun59681_ip = 169;
                continue _fun59681;
            case 156:
                var1 = _closure1_slot2;
                var0 = var1.PARTNERED;
            case 169:
                _fun59681_ip = 184;
                continue _fun59681;
            case 171:
                var1 = _closure1_slot2;
                var0 = var1.VERIFIED;
            case 184:
                _fun59681_ip = 199;
                continue _fun59681;
            case 186:
                var1 = _closure1_slot2;
                var0 = var1.VERIFIED_AND_PARTNERED;
            case 199:
                _fun59681_ip = 214;
                continue _fun59681;
            case 201:
                var1 = _closure1_slot2;
                var0 = var1.STAFF;
            case 214:
                return var0;
        }
    };
    var2.getBadgeCategory = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [7353, 2]);