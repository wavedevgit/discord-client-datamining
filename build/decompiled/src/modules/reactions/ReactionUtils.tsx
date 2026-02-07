// modules/reactions/ReactionUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var3 = function arg0() {
        _fun25029: for (var _fun25029_ip = 0;;) switch (_fun25029_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.id;
                var0 = null;
                if (!(var0 != var2)) {
                    _fun25029_ip = 44;
                    continue _fun25029
                }
            case 14:
                var3 = var1.name;
                var0 = global;
                var0 = var0.HermesInternal;
                var2 = var0.concat;
                var0 = ':';
                var0 = var2.bind(var0)(var3, var0);
                _fun25029_ip = 85;
                continue _fun25029;
            case 44:
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 3;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var2 = var3.convertSurrogateToName;
                var1 = var1.name;
                var0 = var2.bind(var3)(var1);
            case 85:
                return var0;
        }
    };
    var _closure1_slot7 = var3;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var7.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.AnalyticsSections;
    var _closure1_slot4 = var7;
    var4 = var4.AnalyticEvents;
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.NotificationSettingsUpdateType;
    var _closure1_slot6 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/reactions/ReactionUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = 20;
    var2.MAX_REACTIONS = var4;
    var2.getReactionEmojiName = var3;
    var3 = function arg0, arg1, arg2, arg3() {
        _fun25030: for (var _fun25030_ip = 0;;) switch (_fun25030_ip) {
            case 0:
                var0 = arg0;
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var2 = 4;
                var1 = var1[var2];
                var8 = undefined;
                var1 = var3.bind(var8)(var1);
                var1 = var1.t;
                var3 = arg3;
                if (var3) {
                    _fun25030_ip = 62;
                    continue _fun25030
                }
            case 39:
                if (var0) {
                    _fun25030_ip = 52;
                    continue _fun25030
                }
            case 42:
                var3 = var1.PirBBE;
                _fun25030_ip = 60;
                continue _fun25030;
            case 52:
                var3 = var1.CLuzw5;
            case 60:
                _fun25030_ip = 86;
                continue _fun25030;
            case 62:
                if (var0) {
                    _fun25030_ip = 75;
                    continue _fun25030
                }
            case 65:
                var0 = var1["Z/l+qu"];
                _fun25030_ip = 83;
                continue _fun25030;
            case 75:
                var0 = var1.i9DXqM;
            case 83:
                var3 = var0;
            case 86:
                var1 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var2];
                var0 = var1.bind(var8)(var0);
                var2 = var0.intl;
                var1 = var2.formatToPlainString;
                var0 = {};
                var5 = arg1;
                var0.reactions = var5;
                var5 = _closure1_slot7;
                var4 = arg2;
                var10 = var5.bind(var8)(var4);
                var4 = null;
                var6 = var4 == var10;
                var5 = undefined;
                if (var6) {
                    _fun25030_ip = 196;
                    continue _fun25030
                }
            case 146:
                var9 = var10.replace;
                var7 = /[:_]/g;
                var6 = ' ';
                var7 = var9.bind(var10)(var7, var6);
                var6 = var4 == var7;
                var5 = undefined;
                if (var6) {
                    _fun25030_ip = 196;
                    continue _fun25030
                }
            case 186:
                var6 = var7.trim;
                var5 = var6.bind(var7)();
            case 196:
                var6 = var4 != var5;
                var4 = '';
                if (!var6) {
                    _fun25030_ip = 210;
                    continue _fun25030
                }
            case 207:
                var4 = var5;
            case 210:
                var0.emojiName = var4;
                var0 = var1.bind(var2)(var3, var0);
                return var0;
        }
    };
    var2.getAccessibleEmojiDisplayName = var3;
    var3 = function arg0() {
        _fun25031: for (var _fun25031_ip = 0;;) switch (_fun25031_ip) {
            case 0:
                var1 = arg0;
                var0 = {};
                var4 = var1.id;
                var2 = null;
                var5 = var2 != var4;
                var3 = null;
                if (!var5) {
                    _fun25031_ip = 24;
                    continue _fun25031
                }
            case 21:
                var3 = var4;
            case 24:
                var0.id = var3;
                var3 = var1.id;
                if (!(var2 == var3)) {
                    _fun25031_ip = 45;
                    continue _fun25031
                }
            case 37:
                var3 = var1.optionallyDiverseSequence;
                _fun25031_ip = 50;
                continue _fun25031;
            case 45:
                var3 = var1.name;
            case 50:
                if (!(var2 == var3)) {
                    _fun25031_ip = 59;
                    continue _fun25031
                }
            case 54:
                var3 = var1.name;
            case 59:
                var4 = var2 != var3;
                var2 = '';
                if (!var4) {
                    _fun25031_ip = 73;
                    continue _fun25031
                }
            case 70:
                var2 = var3;
            case 73:
                var0.name = var2;
                var2 = global;
                var3 = var2.Boolean;
                var2 = var1.animated;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var0.animated = var1;
                return var0;
        }
    };
    var2.toReactionEmoji = var3;
    var3 = function arg0, arg1() {
        _fun25032: for (var _fun25032_ip = 0;;) switch (_fun25032_ip) {
            case 0:
                var2 = arg0;
                var0 = arg1;
                var1 = var0.id;
                var3 = null;
                if (!(var3 == var1)) {
                    _fun25032_ip = 45;
                    continue _fun25032
                }
            case 17:
                var1 = var2.id;
                var1 = var3 == var1;
                if (!var1) {
                    _fun25032_ip = 43;
                    continue _fun25032
                }
            case 29:
                var5 = var0.name;
                var4 = var2.name;
                var1 = var5 === var4;
            case 43:
                return var1;
            case 45:
                var1 = var2.id;
                if (!(var3 == var1)) {
                    _fun25032_ip = 61;
                    continue _fun25032
                }
            case 54:
                var1 = var2.id;
                _fun25032_ip = 88;
                continue _fun25032;
            case 61:
                var4 = var2.id;
                var2 = global;
                var2 = var2.HermesInternal;
                var3 = var2.concat;
                var2 = '';
                var1 = var3.bind(var2)(var4);
            case 88:
                var3 = var0.id;
                var0 = global;
                var0 = var0.HermesInternal;
                var2 = var0.concat;
                var0 = '';
                var0 = var2.bind(var0)(var3);
                var0 = var0 === var1;
                return var0;
        }
    };
    var2.emojiEquals = var3;
    var3 = function arg0() {
        _fun25033: for (var _fun25033_ip = 0;;) switch (_fun25033_ip) {
            case 0:
                var2 = arg0;
                var0 = var2.isThread;
                var0 = var0.bind(var2)();
                if (var0) {
                    _fun25033_ip = 77;
                    continue _fun25033
                }
            case 19:
                var0 = var2.isForumPost;
                var0 = var0.bind(var2)();
                if (var0) {
                    _fun25033_ip = 65;
                    continue _fun25033
                }
            case 32:
                var0 = var2.isGuildVocal;
                var0 = var0.bind(var2)();
                var2 = _closure1_slot4;
                if (var0) {
                    _fun25033_ip = 57;
                    continue _fun25033
                }
            case 49:
                var0 = var2.CHANNEL_TEXT_AREA;
                _fun25033_ip = 63;
                continue _fun25033;
            case 57:
                var0 = var2.TEXT_IN_VOICE;
            case 63:
                _fun25033_ip = 75;
                continue _fun25033;
            case 65:
                var2 = _closure1_slot4;
                var0 = var2.FORUM_CHANNEL_TEXT_AREA;
            case 75:
                _fun25033_ip = 87;
                continue _fun25033;
            case 77:
                var1 = _closure1_slot4;
                var0 = var1.THREAD_TEXT_AREA;
            case 87:
                return var0;
        }
    };
    var2.getBurstAnalyticsSection = var3;
    var3 = function arg0() {
        _fun25034: for (var _fun25034_ip = 0;;) switch (_fun25034_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.userId;
                var0 = var0.optimistic;
                var3 = _closure1_slot3;
                var1 = var3.getId;
                var1 = var1.bind(var3)();
                if (!var0) {
                    _fun25034_ip = 41;
                    continue _fun25034
                }
            case 34:
                var1 = var1 === var2;
                var0 = !var1;
            case 41:
                var0 = !var0;
                return var0;
        }
    };
    var2.shouldApplyReaction = var3;
    var1 = function arg0, arg1() {
        var5 = arg0;
        var2 = _closure1_slot0;
        var3 = _closure1_slot2;
        var0 = 5;
        var1 = var3[var0];
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        var2 = var1.ReactionNotifications;
        var1 = var2.updateSetting;
        var1 = var1.bind(var2)(var5);
        var2 = _closure1_slot1;
        var1 = 6;
        var1 = var3[var1];
        var4 = var2.bind(var0)(var1);
        var3 = var4.track;
        var1 = _closure1_slot5;
        var2 = var1.NOTIFICATION_SETTINGS_UPDATED;
        var1 = {};
        var6 = _closure1_slot6;
        var6 = var6.ACCOUNT;
        var1.update_type = var6;
        var1.reaction_notifications = var5;
        var5 = arg1;
        var1.reaction_notifications_old = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var2.updateReactionNotificationsSetting = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1216, 660, 3105, 3106, 1234, 1348, 795, 2]);