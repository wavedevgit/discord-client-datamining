// modules/guild_automod/AutomodFeedback.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var8 = require;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var7;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var1);
    var6 = {};
    var0 = 'BUG';
    var6.BUG = var0;
    var0 = 'ALLOWED';
    var6.ALLOWED = var0;
    var0 = 'MENTION_RAID_REMOVE_RESTRICTION';
    var6.MENTION_RAID_REMOVE_RESTRICTION = var0;
    var _closure1_slot2 = var6;
    var5 = {};
    var0 = 'JOIN_RAID';
    var5.JOIN_RAID = var0;
    var1 = 'MENTION_RAID';
    var5.MENTION_RAID = var1;
    var4 = {};
    var1 = 'LEGITIMATE_ACTIVITY';
    var4.LEGITIMATE_ACTIVITY = var1;
    var1 = 'LEGITIMATE_ACCOUNTS';
    var4.LEGITIMATE_ACCOUNTS = var1;
    var1 = 'LEGITIMATE_DMS';
    var4.LEGITIMATE_DMS = var1;
    var9 = 'DM_SPAM';
    var4.DM_SPAM = var9;
    var4.JOIN_RAID = var0;
    var0 = 'OTHER';
    var4.OTHER = var0;
    var _closure1_slot3 = var4;
    var1 = {};
    var1.DM_SPAM = var9;
    var9 = 'MENTION_SPAM';
    var1.MENTION_SPAM = var9;
    var9 = 'CHANNEL_SPAM';
    var1.CHANNEL_SPAM = var9;
    var9 = 'SUS_NEW_MEMBERS';
    var1.SUS_NEW_MEMBERS = var9;
    var9 = 'CHANGING_SETTINGS';
    var1.CHANGING_SETTINGS = var9;
    var1.OTHER = var0;
    var0 = 1;
    var7 = var7[var0];
    var0 = undefined;
    var9 = var8.bind(var0)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/guild_automod/AutomodFeedback.tsx';
    var7 = var8.bind(var9)(var7);
    var2.Feedback = var6;
    var6 = function() {
        var1 = {};
        var7 = _closure1_slot0;
        var8 = _closure1_slot1;
        var3 = 0;
        var2 = var8[var3];
        var6 = undefined;
        var2 = var7.bind(var6)(var2);
        var5 = var2.intl;
        var4 = var5.string;
        var2 = var8[var3];
        var2 = var7.bind(var6)(var2);
        var2 = var2.t;
        var2 = var2["+MbOX4"];
        var2 = var4.bind(var5)(var2);
        var1.name = var2;
        var2 = _closure1_slot2;
        var0 = var2.BUG;
        var1.value = var0;
        var0 = new Array(2);
        var0[0] = var1;
        var1 = {};
        var4 = var8[var3];
        var4 = var7.bind(var6)(var4);
        var5 = var4.intl;
        var4 = var5.string;
        var3 = var8[var3];
        var3 = var7.bind(var6)(var3);
        var3 = var3.t;
        var3 = var3.CRsCRC;
        var3 = var4.bind(var5)(var3);
        var1.name = var3;
        var2 = var2.ALLOWED;
        var1.value = var2;
        var0[1] = var1;
        return var0;
    };
    var2.generateFeedbackOptions = var6;
    var2.RaidAlertType = var5;
    var2.RaidResolutionType = var4;
    var3 = function arg0() {
        _fun40927: for (var _fun40927_ip = 0;;) switch (_fun40927_ip) {
            case 0:
                var3 = arg0;
                var2 = var3.includes;
                var0 = _closure1_slot3;
                var0 = var0.LEGITIMATE_ACTIVITY;
                var0 = var2.bind(var3)(var0);
                if (var0) {
                    _fun40927_ip = 107;
                    continue _fun40927
                }
            case 29:
                var2 = var3.includes;
                var0 = _closure1_slot3;
                var0 = var0.DM_SPAM;
                var0 = var2.bind(var3)(var0);
                if (var0) {
                    _fun40927_ip = 95;
                    continue _fun40927
                }
            case 52:
                var2 = var3.includes;
                var0 = _closure1_slot3;
                var0 = var0.JOIN_RAID;
                var0 = var2.bind(var3)(var0);
                var2 = _closure1_slot3;
                if (var0) {
                    _fun40927_ip = 87;
                    continue _fun40927
                }
            case 79:
                var0 = var2.OTHER;
                _fun40927_ip = 93;
                continue _fun40927;
            case 87:
                var0 = var2.JOIN_RAID;
            case 93:
                _fun40927_ip = 105;
                continue _fun40927;
            case 95:
                var2 = _closure1_slot3;
                var0 = var2.DM_SPAM;
            case 105:
                _fun40927_ip = 117;
                continue _fun40927;
            case 107:
                var1 = _closure1_slot3;
                var0 = var1.LEGITIMATE_ACTIVITY;
            case 117:
                return var0;
        }
    };
    var2.getMostImportantRaidResolutionType = var3;
    var2.RaidLockdownFeedbackType = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1234, 2]);