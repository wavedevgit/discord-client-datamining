// modules/guild_member_verification/GuildJoinRequestUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var3 = function arg0() {
        _fun27889: for (var _fun27889_ip = 0;;) switch (_fun27889_ip) {
            case 0:
                var2 = arg0;
                var3 = _closure1_slot0;
                var0 = _closure1_slot1;
                var5 = 0;
                var0 = var0[var5];
                var4 = undefined;
                var0 = var3.bind(var4)(var0);
                var0 = var0.GuildJoinRequestApplicationStatuses;
                var0 = var0.APPROVED;
                var0 = var2 === var0;
                if (var0) {
                    _fun27889_ip = 79;
                    continue _fun27889
                }
            case 46:
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var5];
                var1 = var3.bind(var4)(var1);
                var1 = var1.GuildJoinRequestApplicationStatuses;
                var1 = var1.REJECTED;
                var0 = var2 === var1;
            case 79:
                return var0;
        }
    };
    var _closure1_slot2 = var3;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var6);
    var0 = 1;
    var4 = var4[var0];
    var0 = undefined;
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_member_verification/GuildJoinRequestUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var2.isActionedApplicationStatus = var3;
    var3 = function arg0() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 0;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var0 = var0.GuildJoinRequestApplicationStatuses;
        var1 = var0.SUBMITTED;
        var0 = arg0;
        var0 = var0 === var1;
        return var0;
    };
    var2.isSubmittedApplicationStatus = var3;
    var3 = function arg0() {
        _fun27891: for (var _fun27891_ip = 0;;) switch (_fun27891_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.applicationStatus;
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var0 = 0;
                var3 = var3[var0];
                var0 = undefined;
                var0 = var4.bind(var0)(var3);
                var0 = var0.GuildJoinRequestApplicationStatuses;
                var0 = var0.APPROVED;
                var0 = var2 === var0;
                if (!var0) {
                    _fun27891_ip = 64;
                    continue _fun27891
                }
            case 52:
                var2 = var1.lastSeen;
                var1 = null;
                var0 = var1 != var2;
            case 64:
                return var0;
        }
    };
    var2.isApprovedAndAcked = var3;
    var1 = function arg0() {
        _fun27892: for (var _fun27892_ip = 0;;) switch (_fun27892_ip) {
            case 0:
                var1 = arg0;
                var3 = _closure1_slot2;
                var2 = var1.applicationStatus;
                var0 = undefined;
                var0 = var3.bind(var0)(var2);
                if (!var0) {
                    _fun27892_ip = 38;
                    continue _fun27892
                }
            case 26:
                var2 = var1.lastSeen;
                var1 = null;
                var0 = var1 == var2;
            case 38:
                return var0;
        }
    };
    var2.isActionedAndNotAcked = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3216, 2]);