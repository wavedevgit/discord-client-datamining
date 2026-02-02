// records/AuditLogRecord.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var0 = function() {
        _fun114784: for (var _fun114784_ip = 0;;) switch (_fun114784_ip) {
            case 0:
            case 2: // try_start_0
                var1 = global;
                var2 = var1.Boolean;
                var2 = var2.prototype;
                var3 = var2.valueOf;
                var2 = var3.call;
                var7 = var1.Reflect;
                var6 = var7.construct;
                var5 = var1.Boolean;
                var4 = new Array(0);
                var1 = function() { // Environment: var0
                    var0 = undefined;
                    return var0;
                };
                var1 = var6.bind(var7)(var5, var4, var1);
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                var _closure2_slot0 = var1;
            case 72: // try_end0
                _fun114784_ip = 76;
                continue _fun114784;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot10 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot10 = var0;
    var4 = function arg0() {
        _fun114787: for (var _fun114787_ip = 0;;) switch (_fun114787_ip) {
            case 0:
                var5 = arg0;
                var0 = _closure1_slot8;
                var0 = var0.ALL;
                if (!(var5 !== var0)) {
                    _fun114787_ip = 1017;
                    continue _fun114787
                }
            case 23:
                var0 = _closure1_slot8;
                var0 = var0.GUILD_UPDATE;
                if (!(!(var5 <= var0))) {
                    _fun114787_ip = 1005;
                    continue _fun114787
                }
            case 40:
                var0 = _closure1_slot8;
                var0 = var0.CHANNEL_DELETE;
                if (!(!(var5 <= var0))) {
                    _fun114787_ip = 993;
                    continue _fun114787
                }
            case 57:
                var0 = _closure1_slot8;
                var0 = var0.MESSAGE_BULK_DELETE;
                if (!(var5 !== var0)) {
                    _fun114787_ip = 993;
                    continue _fun114787
                }
            case 74:
                var0 = _closure1_slot8;
                var0 = var0.CHANNEL_OVERWRITE_DELETE;
                if (!(!(var5 <= var0))) {
                    _fun114787_ip = 981;
                    continue _fun114787
                }
            case 91:
                var0 = _closure1_slot8;
                var0 = var0.BOT_ADD;
                if (!(!(var5 <= var0))) {
                    _fun114787_ip = 969;
                    continue _fun114787
                }
            case 108:
                var0 = _closure1_slot8;
                var0 = var0.MESSAGE_DELETE;
                if (!(var5 !== var0)) {
                    _fun114787_ip = 969;
                    continue _fun114787
                }
            case 125:
                var0 = _closure1_slot8;
                var0 = var0.MESSAGE_PIN;
                if (!(var5 !== var0)) {
                    _fun114787_ip = 969;
                    continue _fun114787
                }
            case 142:
                var0 = _closure1_slot8;
                var0 = var0.MESSAGE_UNPIN;
                if (!(var5 !== var0)) {
                    _fun114787_ip = 969;
                    continue _fun114787
                }
            case 159:
                var0 = _closure1_slot8;
                var0 = var0.ROLE_DELETE;
                if (!(!(var5 <= var0))) {
                    _fun114787_ip = 957;
                    continue _fun114787
                }
            case 176:
                var0 = _closure1_slot8;
                var0 = var0.INVITE_DELETE;
                if (!(!(var5 <= var0))) {
                    _fun114787_ip = 945;
                    continue _fun114787
                }
            case 193:
                var0 = _closure1_slot8;
                var0 = var0.WEBHOOK_DELETE;
                if (!(!(var5 <= var0))) {
                    _fun114787_ip = 933;
                    continue _fun114787
                }
            case 210:
                var0 = _closure1_slot8;
                var0 = var0.EMOJI_DELETE;
                if (!(!(var5 <= var0))) {
                    _fun114787_ip = 921;
                    continue _fun114787
                }
            case 227:
                var0 = _closure1_slot8;
                var0 = var0.INTEGRATION_DELETE;
                if (!(!(var5 <= var0))) {
                    _fun114787_ip = 909;
                    continue _fun114787
                }
            case 244:
                var0 = _closure1_slot8;
                var0 = var0.STAGE_INSTANCE_DELETE;
                if (!(!(var5 <= var0))) {
                    _fun114787_ip = 897;
                    continue _fun114787
                }
            case 261:
                var0 = _closure1_slot8;
                var0 = var0.STICKER_DELETE;
                if (!(!(var5 <= var0))) {
                    _fun114787_ip = 885;
                    continue _fun114787
                }
            case 278:
                var0 = _closure1_slot8;
                var0 = var0.GUILD_SCHEDULED_EVENT_DELETE;
                if (!(!(var5 <= var0))) {
                    _fun114787_ip = 873;
                    continue _fun114787
                }
            case 295:
                var0 = _closure1_slot8;
                var0 = var0.THREAD_DELETE;
                if (!(!(var5 <= var0))) {
                    _fun114787_ip = 861;
                    continue _fun114787
                }
            case 312:
                var0 = _closure1_slot8;
                var0 = var0.APPLICATION_COMMAND_PERMISSION_UPDATE;
                if (!(var5 !== var0)) {
                    _fun114787_ip = 849;
                    continue _fun114787
                }
            case 329:
                var0 = _closure1_slot8;
                var0 = var0.SOUNDBOARD_SOUND_DELETE;
                if (!(!(var5 <= var0))) {
                    _fun114787_ip = 837;
                    continue _fun114787
                }
            case 346:
                var0 = _closure1_slot8;
                var0 = var0.AUTO_MODERATION_BLOCK_MESSAGE;
                if (!(!(var5 < var0))) {
                    _fun114787_ip = 825;
                    continue _fun114787
                }
            case 363:
                var0 = _closure1_slot8;
                var0 = var0.AUTO_MODERATION_BLOCK_MESSAGE;
                if (!(var5 !== var0)) {
                    _fun114787_ip = 813;
                    continue _fun114787
                }
            case 380:
                var0 = _closure1_slot8;
                var0 = var0.AUTO_MODERATION_FLAG_TO_CHANNEL;
                if (!(var5 !== var0)) {
                    _fun114787_ip = 813;
                    continue _fun114787
                }
            case 397:
                var0 = _closure1_slot8;
                var0 = var0.AUTO_MODERATION_USER_COMMUNICATION_DISABLED;
                if (!(var5 !== var0)) {
                    _fun114787_ip = 813;
                    continue _fun114787
                }
            case 414:
                var0 = _closure1_slot8;
                var0 = var0.AUTO_MODERATION_QUARANTINE_USER;
                if (!(var5 !== var0)) {
                    _fun114787_ip = 813;
                    continue _fun114787
                }
            case 431:
                var0 = _closure1_slot8;
                var0 = var0.CREATOR_MONETIZATION_TERMS_ACCEPTED;
                if (!(!(var5 <= var0))) {
                    _fun114787_ip = 801;
                    continue _fun114787
                }
            case 448:
                var0 = _closure1_slot8;
                var0 = var0.ONBOARDING_PROMPT_DELETE;
                if (!(!(var5 <= var0))) {
                    _fun114787_ip = 789;
                    continue _fun114787
                }
            case 465:
                var0 = _closure1_slot8;
                var0 = var0.ONBOARDING_UPDATE;
                if (!(!(var5 <= var0))) {
                    _fun114787_ip = 777;
                    continue _fun114787
                }
            case 482:
                var0 = _closure1_slot8;
                var0 = var0.GUILD_HOME_REMOVE_ITEM;
                if (!(!(var5 <= var0))) {
                    _fun114787_ip = 765;
                    continue _fun114787
                }
            case 499:
                var0 = _closure1_slot8;
                var0 = var0.HARMFUL_LINKS_BLOCKED_MESSAGE;
                if (!(!(var5 <= var0))) {
                    _fun114787_ip = 753;
                    continue _fun114787
                }
            case 516:
                var0 = _closure1_slot8;
                var0 = var0.HOME_SETTINGS_UPDATE;
                if (!(!(var5 <= var0))) {
                    _fun114787_ip = 741;
                    continue _fun114787
                }
            case 533:
                var0 = _closure1_slot8;
                var0 = var0.VOICE_CHANNEL_STATUS_DELETE;
                if (!(!(var5 <= var0))) {
                    _fun114787_ip = 729;
                    continue _fun114787
                }
            case 550:
                var0 = _closure1_slot8;
                var0 = var0.GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE;
                if (!(!(var5 <= var0))) {
                    _fun114787_ip = 717;
                    continue _fun114787
                }
            case 567:
                var0 = _closure1_slot8;
                var0 = var0.GUILD_MEMBER_VERIFICATION_UPDATE;
                if (!(!(var5 <= var0))) {
                    _fun114787_ip = 705;
                    continue _fun114787
                }
            case 584:
                var0 = _closure1_slot8;
                var0 = var0.GUILD_PROFILE_UPDATE;
                if (!(!(var5 <= var0))) {
                    _fun114787_ip = 693;
                    continue _fun114787
                }
            case 598:
                var0 = _closure1_slot8;
                var0 = var0.GUILD_MIGRATE_BYPASS_SLOWMODE_PERMISSION;
                if (!(!(var5 <= var0))) {
                    _fun114787_ip = 681;
                    continue _fun114787
                }
            case 612:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 7;
                var2 = var2[var0];
                var0 = undefined;
                var3 = var3.bind(var0)(var2);
                var2 = var3.captureMessage;
                var0 = global;
                var0 = var0.HermesInternal;
                var4 = var0.concat;
                var0 = 'Unknown target type for: ';
                var0 = var4.bind(var0)(var5);
                var0 = var2.bind(var3)(var0);
                var0 = _closure1_slot7;
                var0 = var0.UNKNOWN;
                _fun114787_ip = 691;
                continue _fun114787;
            case 681:
                var2 = _closure1_slot7;
                var0 = var2.GUILD;
            case 691:
                _fun114787_ip = 703;
                continue _fun114787;
            case 693:
                var2 = _closure1_slot7;
                var0 = var2.GUILD_PROFILE;
            case 703:
                _fun114787_ip = 715;
                continue _fun114787;
            case 705:
                var2 = _closure1_slot7;
                var0 = var2.GUILD_MEMBER_VERIFICATION;
            case 715:
                _fun114787_ip = 727;
                continue _fun114787;
            case 717:
                var2 = _closure1_slot7;
                var0 = var2.GUILD_SCHEDULED_EVENT_EXCEPTION;
            case 727:
                _fun114787_ip = 739;
                continue _fun114787;
            case 729:
                var2 = _closure1_slot7;
                var0 = var2.VOICE_CHANNEL_STATUS;
            case 739:
                _fun114787_ip = 751;
                continue _fun114787;
            case 741:
                var2 = _closure1_slot7;
                var0 = var2.HOME_SETTINGS;
            case 751:
                _fun114787_ip = 763;
                continue _fun114787;
            case 753:
                var2 = _closure1_slot7;
                var0 = var2.GUILD;
            case 763:
                _fun114787_ip = 775;
                continue _fun114787;
            case 765:
                var2 = _closure1_slot7;
                var0 = var2.GUILD_HOME;
            case 775:
                _fun114787_ip = 787;
                continue _fun114787;
            case 777:
                var2 = _closure1_slot7;
                var0 = var2.GUILD_ONBOARDING;
            case 787:
                _fun114787_ip = 799;
                continue _fun114787;
            case 789:
                var2 = _closure1_slot7;
                var0 = var2.ONBOARDING_PROMPT;
            case 799:
                _fun114787_ip = 811;
                continue _fun114787;
            case 801:
                var2 = _closure1_slot7;
                var0 = var2.GUILD;
            case 811:
                _fun114787_ip = 823;
                continue _fun114787;
            case 813:
                var2 = _closure1_slot7;
                var0 = var2.USER;
            case 823:
                _fun114787_ip = 835;
                continue _fun114787;
            case 825:
                var2 = _closure1_slot7;
                var0 = var2.AUTO_MODERATION_RULE;
            case 835:
                _fun114787_ip = 847;
                continue _fun114787;
            case 837:
                var2 = _closure1_slot7;
                var0 = var2.GUILD_SOUNDBOARD;
            case 847:
                _fun114787_ip = 859;
                continue _fun114787;
            case 849:
                var2 = _closure1_slot7;
                var0 = var2.APPLICATION_COMMAND;
            case 859:
                _fun114787_ip = 871;
                continue _fun114787;
            case 861:
                var2 = _closure1_slot7;
                var0 = var2.THREAD;
            case 871:
                _fun114787_ip = 883;
                continue _fun114787;
            case 873:
                var2 = _closure1_slot7;
                var0 = var2.GUILD_SCHEDULED_EVENT;
            case 883:
                _fun114787_ip = 895;
                continue _fun114787;
            case 885:
                var2 = _closure1_slot7;
                var0 = var2.STICKER;
            case 895:
                _fun114787_ip = 907;
                continue _fun114787;
            case 897:
                var2 = _closure1_slot7;
                var0 = var2.STAGE_INSTANCE;
            case 907:
                _fun114787_ip = 919;
                continue _fun114787;
            case 909:
                var2 = _closure1_slot7;
                var0 = var2.INTEGRATION;
            case 919:
                _fun114787_ip = 931;
                continue _fun114787;
            case 921:
                var2 = _closure1_slot7;
                var0 = var2.EMOJI;
            case 931:
                _fun114787_ip = 943;
                continue _fun114787;
            case 933:
                var2 = _closure1_slot7;
                var0 = var2.WEBHOOK;
            case 943:
                _fun114787_ip = 955;
                continue _fun114787;
            case 945:
                var2 = _closure1_slot7;
                var0 = var2.INVITE;
            case 955:
                _fun114787_ip = 967;
                continue _fun114787;
            case 957:
                var2 = _closure1_slot7;
                var0 = var2.ROLE;
            case 967:
                _fun114787_ip = 979;
                continue _fun114787;
            case 969:
                var2 = _closure1_slot7;
                var0 = var2.USER;
            case 979:
                _fun114787_ip = 991;
                continue _fun114787;
            case 981:
                var2 = _closure1_slot7;
                var0 = var2.CHANNEL_OVERWRITE;
            case 991:
                _fun114787_ip = 1003;
                continue _fun114787;
            case 993:
                var2 = _closure1_slot7;
                var0 = var2.CHANNEL;
            case 1003:
                _fun114787_ip = 1015;
                continue _fun114787;
            case 1005:
                var2 = _closure1_slot7;
                var0 = var2.GUILD;
            case 1015:
                _fun114787_ip = 1027;
                continue _fun114787;
            case 1017:
                var1 = _closure1_slot7;
                var0 = var1.ALL;
            case 1027:
                return var0;
        }
    };
    var _closure1_slot11 = var4;
    var3 = function arg0() {
        _fun114788: for (var _fun114788_ip = 0;;) switch (_fun114788_ip) {
            case 0:
                var2 = arg0;
                var1 = _closure1_slot8;
                var1 = var1.CHANNEL_CREATE;
                if (!(var1 !== var2)) {
                    _fun114788_ip = 1344;
                    continue _fun114788
                }
            case 23:
                var1 = _closure1_slot8;
                var1 = var1.CHANNEL_OVERWRITE_CREATE;
                if (!(var1 !== var2)) {
                    _fun114788_ip = 1344;
                    continue _fun114788
                }
            case 40:
                var1 = _closure1_slot8;
                var1 = var1.MEMBER_BAN_REMOVE;
                if (!(var1 !== var2)) {
                    _fun114788_ip = 1344;
                    continue _fun114788
                }
            case 57:
                var1 = _closure1_slot8;
                var1 = var1.ROLE_CREATE;
                if (!(var1 !== var2)) {
                    _fun114788_ip = 1344;
                    continue _fun114788
                }
            case 74:
                var1 = _closure1_slot8;
                var1 = var1.INVITE_CREATE;
                if (!(var1 !== var2)) {
                    _fun114788_ip = 1344;
                    continue _fun114788
                }
            case 91:
                var1 = _closure1_slot8;
                var1 = var1.WEBHOOK_CREATE;
                if (!(var1 !== var2)) {
                    _fun114788_ip = 1344;
                    continue _fun114788
                }
            case 108:
                var1 = _closure1_slot8;
                var1 = var1.EMOJI_CREATE;
                if (!(var1 !== var2)) {
                    _fun114788_ip = 1344;
                    continue _fun114788
                }
            case 125:
                var1 = _closure1_slot8;
                var1 = var1.STICKER_CREATE;
                if (!(var1 !== var2)) {
                    _fun114788_ip = 1344;
                    continue _fun114788
                }
            case 142:
                var1 = _closure1_slot8;
                var1 = var1.MESSAGE_PIN;
                if (!(var1 !== var2)) {
                    _fun114788_ip = 1344;
                    continue _fun114788
                }
            case 159:
                var1 = _closure1_slot8;
                var1 = var1.BOT_ADD;
                if (!(var1 !== var2)) {
                    _fun114788_ip = 1344;
                    continue _fun114788
                }
            case 176:
                var1 = _closure1_slot8;
                var1 = var1.INTEGRATION_CREATE;
                if (!(var1 !== var2)) {
                    _fun114788_ip = 1344;
                    continue _fun114788
                }
            case 193:
                var1 = _closure1_slot8;
                var1 = var1.STAGE_INSTANCE_CREATE;
                if (!(var1 !== var2)) {
                    _fun114788_ip = 1344;
                    continue _fun114788
                }
            case 210:
                var1 = _closure1_slot8;
                var1 = var1.GUILD_SCHEDULED_EVENT_CREATE;
                if (!(var1 !== var2)) {
                    _fun114788_ip = 1344;
                    continue _fun114788
                }
            case 227:
                var1 = _closure1_slot8;
                var1 = var1.THREAD_CREATE;
                if (!(var1 !== var2)) {
                    _fun114788_ip = 1344;
                    continue _fun114788
                }
            case 244:
                var1 = _closure1_slot8;
                var1 = var1.AUTO_MODERATION_RULE_CREATE;
                if (!(var1 !== var2)) {
                    _fun114788_ip = 1344;
                    continue _fun114788
                }
            case 261:
                var1 = _closure1_slot8;
                var1 = var1.CREATOR_MONETIZATION_REQUEST_CREATED;
                if (!(var1 !== var2)) {
                    _fun114788_ip = 1344;
                    continue _fun114788
                }
            case 278:
                var1 = _closure1_slot8;
                var1 = var1.ONBOARDING_PROMPT_CREATE;
                if (!(var1 !== var2)) {
                    _fun114788_ip = 1344;
                    continue _fun114788
                }
            case 295:
                var1 = _closure1_slot8;
                var1 = var1.ONBOARDING_CREATE;
                if (!(var1 !== var2)) {
                    _fun114788_ip = 1344;
                    continue _fun114788
                }
            case 312:
                var1 = _closure1_slot8;
                var1 = var1.GUILD_HOME_FEATURE_ITEM;
                if (!(var1 !== var2)) {
                    _fun114788_ip = 1344;
                    continue _fun114788
                }
            case 329:
                var1 = _closure1_slot8;
                var1 = var1.SOUNDBOARD_SOUND_CREATE;
                if (!(var1 !== var2)) {
                    _fun114788_ip = 1344;
                    continue _fun114788
                }
            case 346:
                var1 = _closure1_slot8;
                var1 = var1.HOME_SETTINGS_CREATE;
                if (!(var1 !== var2)) {
                    _fun114788_ip = 1344;
                    continue _fun114788
                }
            case 363:
                var1 = _closure1_slot8;
                var1 = var1.VOICE_CHANNEL_STATUS_CREATE;
                if (!(var1 !== var2)) {
                    _fun114788_ip = 1344;
                    continue _fun114788
                }
            case 380:
                var1 = _closure1_slot8;
                var1 = var1.CHANNEL_DELETE;
                if (!(var1 !== var2)) {
                    _fun114788_ip = 1332;
                    continue _fun114788
                }
            case 397:
                var1 = _closure1_slot8;
                var1 = var1.CHANNEL_OVERWRITE_DELETE;
                if (!(var1 !== var2)) {
                    _fun114788_ip = 1332;
                    continue _fun114788
                }
            case 414:
                var1 = _closure1_slot8;
                var1 = var1.MEMBER_KICK;
                if (!(var1 !== var2)) {
                    _fun114788_ip = 1332;
                    continue _fun114788
                }
            case 431:
                var1 = _closure1_slot8;
                var1 = var1.MEMBER_PRUNE;
                if (!(var1 !== var2)) {
                    _fun114788_ip = 1332;
                    continue _fun114788
                }
            case 448:
                var1 = _closure1_slot8;
                var1 = var1.MEMBER_BAN_ADD;
                if (!(var1 !== var2)) {
                    _fun114788_ip = 1332;
                    continue _fun114788
                }
            case 465:
                var1 = _closure1_slot8;
                var1 = var1.ROLE_DELETE;
                if (!(var1 !== var2)) {
                    _fun114788_ip = 1332;
                    continue _fun114788
                }
            case 482:
                var1 = _closure1_slot8;
                var1 = var1.INVITE_DELETE;
                if (!(var1 !== var2)) {
                    _fun114788_ip = 1332;
                    continue _fun114788
                }
            case 499:
                var1 = _closure1_slot8;
                var1 = var1.WEBHOOK_DELETE;
                if (!(var1 !== var2)) {
                    _fun114788_ip = 1332;
                    continue _fun114788
                }
            case 516:
                var1 = _closure1_slot8;
                var1 = var1.EMOJI_DELETE;
                if (!(var1 !== var2)) {
                    _fun114788_ip = 1332;
                    continue _fun114788
                }
            case 533:
                var1 = _closure1_slot8;
                var1 = var1.STICKER_DELETE;
                if (!(var1 !== var2)) {
                    _fun114788_ip = 1332;
                    continue _fun114788
                }
            case 550:
                var1 = _closure1_slot8;
                var1 = var1.MESSAGE_DELETE;
                if (!(var1 !== var2)) {
                    _fun114788_ip = 1332;
                    continue _fun114788
                }
            case 567:
                var1 = _closure1_slot8;
                var1 = var1.MESSAGE_BULK_DELETE;
                if (!(var1 !== var2)) {
                    _fun114788_ip = 1332;
                    continue _fun114788
                }
            case 584:
                var1 = _closure1_slot8;
                var1 = var1.MESSAGE_UNPIN;
                if (!(var1 !== var2)) {
                    _fun114788_ip = 1332;
                    continue _fun114788
                }
            case 601:
                var1 = _closure1_slot8;
                var1 = var1.INTEGRATION_DELETE;
                if (!(var1 !== var2)) {
                    _fun114788_ip = 1332;
                    continue _fun114788
                }
            case 618:
                var1 = _closure1_slot8;
                var1 = var1.MEMBER_DISCONNECT;
                if (!(var1 !== var2)) {
                    _fun114788_ip = 1332;
                    continue _fun114788
                }
            case 635:
                var1 = _closure1_slot8;
                var1 = var1.STAGE_INSTANCE_DELETE;
                if (!(var1 !== var2)) {
                    _fun114788_ip = 1332;
                    continue _fun114788
                }
            case 652:
                var1 = _closure1_slot8;
                var1 = var1.GUILD_SCHEDULED_EVENT_DELETE;
                if (!(var1 !== var2)) {
                    _fun114788_ip = 1332;
                    continue _fun114788
                }
            case 669:
                var1 = _closure1_slot8;
                var1 = var1.GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE;
                if (!(var1 !== var2)) {
                    _fun114788_ip = 1332;
                    continue _fun114788
                }
            case 686:
                var1 = _closure1_slot8;
                var1 = var1.THREAD_DELETE;
                if (!(var1 !== var2)) {
                    _fun114788_ip = 1332;
                    continue _fun114788
                }
            case 703:
                var1 = _closure1_slot8;
                var1 = var1.AUTO_MODERATION_BLOCK_MESSAGE;
                if (!(var1 !== var2)) {
                    _fun114788_ip = 1332;
                    continue _fun114788
                }
            case 720:
                var1 = _closure1_slot8;
                var1 = var1.AUTO_MODERATION_RULE_DELETE;
                if (!(var1 !== var2)) {
                    _fun114788_ip = 1332;
                    continue _fun114788
                }
            case 737:
                var1 = _closure1_slot8;
                var1 = var1.ONBOARDING_PROMPT_DELETE;
                if (!(var1 !== var2)) {
                    _fun114788_ip = 1332;
                    continue _fun114788
                }
            case 754:
                var1 = _closure1_slot8;
                var1 = var1.GUILD_HOME_REMOVE_ITEM;
                if (!(var1 !== var2)) {
                    _fun114788_ip = 1332;
                    continue _fun114788
                }
            case 771:
                var1 = _closure1_slot8;
                var1 = var1.SOUNDBOARD_SOUND_DELETE;
                if (!(var1 !== var2)) {
                    _fun114788_ip = 1332;
                    continue _fun114788
                }
            case 788:
                var1 = _closure1_slot8;
                var1 = var1.VOICE_CHANNEL_STATUS_DELETE;
                if (!(var1 !== var2)) {
                    _fun114788_ip = 1332;
                    continue _fun114788
                }
            case 805:
                var1 = _closure1_slot8;
                var1 = var1.GUILD_UPDATE;
                if (!(var1 !== var2)) {
                    _fun114788_ip = 1320;
                    continue _fun114788
                }
            case 822:
                var1 = _closure1_slot8;
                var1 = var1.CHANNEL_UPDATE;
                if (!(var1 !== var2)) {
                    _fun114788_ip = 1320;
                    continue _fun114788
                }
            case 839:
                var1 = _closure1_slot8;
                var1 = var1.CHANNEL_OVERWRITE_UPDATE;
                if (!(var1 !== var2)) {
                    _fun114788_ip = 1320;
                    continue _fun114788
                }
            case 856:
                var1 = _closure1_slot8;
                var1 = var1.MEMBER_UPDATE;
                if (!(var1 !== var2)) {
                    _fun114788_ip = 1320;
                    continue _fun114788
                }
            case 873:
                var1 = _closure1_slot8;
                var1 = var1.MEMBER_ROLE_UPDATE;
                if (!(var1 !== var2)) {
                    _fun114788_ip = 1320;
                    continue _fun114788
                }
            case 890:
                var1 = _closure1_slot8;
                var1 = var1.ROLE_UPDATE;
                if (!(var1 !== var2)) {
                    _fun114788_ip = 1320;
                    continue _fun114788
                }
            case 907:
                var1 = _closure1_slot8;
                var1 = var1.INVITE_UPDATE;
                if (!(var1 !== var2)) {
                    _fun114788_ip = 1320;
                    continue _fun114788
                }
            case 924:
                var1 = _closure1_slot8;
                var1 = var1.WEBHOOK_UPDATE;
                if (!(var1 !== var2)) {
                    _fun114788_ip = 1320;
                    continue _fun114788
                }
            case 941:
                var1 = _closure1_slot8;
                var1 = var1.EMOJI_UPDATE;
                if (!(var1 !== var2)) {
                    _fun114788_ip = 1320;
                    continue _fun114788
                }
            case 958:
                var1 = _closure1_slot8;
                var1 = var1.STICKER_UPDATE;
                if (!(var1 !== var2)) {
                    _fun114788_ip = 1320;
                    continue _fun114788
                }
            case 975:
                var1 = _closure1_slot8;
                var1 = var1.INTEGRATION_UPDATE;
                if (!(var1 !== var2)) {
                    _fun114788_ip = 1320;
                    continue _fun114788
                }
            case 992:
                var1 = _closure1_slot8;
                var1 = var1.MEMBER_MOVE;
                if (!(var1 !== var2)) {
                    _fun114788_ip = 1320;
                    continue _fun114788
                }
            case 1009:
                var1 = _closure1_slot8;
                var1 = var1.STAGE_INSTANCE_UPDATE;
                if (!(var1 !== var2)) {
                    _fun114788_ip = 1320;
                    continue _fun114788
                }
            case 1026:
                var1 = _closure1_slot8;
                var1 = var1.GUILD_SCHEDULED_EVENT_UPDATE;
                if (!(var1 !== var2)) {
                    _fun114788_ip = 1320;
                    continue _fun114788
                }
            case 1043:
                var1 = _closure1_slot8;
                var1 = var1.GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE;
                if (!(var1 !== var2)) {
                    _fun114788_ip = 1320;
                    continue _fun114788
                }
            case 1060:
                var1 = _closure1_slot8;
                var1 = var1.GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE;
                if (!(var1 !== var2)) {
                    _fun114788_ip = 1320;
                    continue _fun114788
                }
            case 1077:
                var1 = _closure1_slot8;
                var1 = var1.THREAD_UPDATE;
                if (!(var1 !== var2)) {
                    _fun114788_ip = 1320;
                    continue _fun114788
                }
            case 1094:
                var1 = _closure1_slot8;
                var1 = var1.APPLICATION_COMMAND_PERMISSION_UPDATE;
                if (!(var1 !== var2)) {
                    _fun114788_ip = 1320;
                    continue _fun114788
                }
            case 1111:
                var1 = _closure1_slot8;
                var1 = var1.CREATOR_MONETIZATION_TERMS_ACCEPTED;
                if (!(var1 !== var2)) {
                    _fun114788_ip = 1320;
                    continue _fun114788
                }
            case 1128:
                var1 = _closure1_slot8;
                var1 = var1.AUTO_MODERATION_RULE_UPDATE;
                if (!(var1 !== var2)) {
                    _fun114788_ip = 1320;
                    continue _fun114788
                }
            case 1145:
                var1 = _closure1_slot8;
                var1 = var1.AUTO_MODERATION_FLAG_TO_CHANNEL;
                if (!(var1 !== var2)) {
                    _fun114788_ip = 1320;
                    continue _fun114788
                }
            case 1162:
                var1 = _closure1_slot8;
                var1 = var1.AUTO_MODERATION_USER_COMMUNICATION_DISABLED;
                if (!(var1 !== var2)) {
                    _fun114788_ip = 1320;
                    continue _fun114788
                }
            case 1179:
                var1 = _closure1_slot8;
                var1 = var1.AUTO_MODERATION_QUARANTINE_USER;
                if (!(var1 !== var2)) {
                    _fun114788_ip = 1320;
                    continue _fun114788
                }
            case 1196:
                var1 = _closure1_slot8;
                var1 = var1.ONBOARDING_PROMPT_UPDATE;
                if (!(var1 !== var2)) {
                    _fun114788_ip = 1320;
                    continue _fun114788
                }
            case 1210:
                var1 = _closure1_slot8;
                var1 = var1.ONBOARDING_UPDATE;
                if (!(var1 !== var2)) {
                    _fun114788_ip = 1320;
                    continue _fun114788
                }
            case 1224:
                var1 = _closure1_slot8;
                var1 = var1.SOUNDBOARD_SOUND_UPDATE;
                if (!(var1 !== var2)) {
                    _fun114788_ip = 1320;
                    continue _fun114788
                }
            case 1238:
                var1 = _closure1_slot8;
                var1 = var1.HOME_SETTINGS_UPDATE;
                if (!(var1 !== var2)) {
                    _fun114788_ip = 1320;
                    continue _fun114788
                }
            case 1252:
                var1 = _closure1_slot8;
                var1 = var1.GUILD_MEMBER_VERIFICATION_UPDATE;
                if (!(var1 !== var2)) {
                    _fun114788_ip = 1320;
                    continue _fun114788
                }
            case 1266:
                var1 = _closure1_slot8;
                var1 = var1.GUILD_PROFILE_UPDATE;
                if (!(var1 !== var2)) {
                    _fun114788_ip = 1320;
                    continue _fun114788
                }
            case 1280:
                var1 = _closure1_slot8;
                var1 = var1.GUILD_MIGRATE_PIN_PERMISSION;
                if (!(var1 !== var2)) {
                    _fun114788_ip = 1320;
                    continue _fun114788
                }
            case 1294:
                var1 = _closure1_slot8;
                var1 = var1.GUILD_MIGRATE_BYPASS_SLOWMODE_PERMISSION;
                if (!(var1 !== var2)) {
                    _fun114788_ip = 1320;
                    continue _fun114788
                }
            case 1308:
                var1 = _closure1_slot9;
                var1 = var1.ALL;
                return var1;
            case 1320:
                var1 = _closure1_slot9;
                var1 = var1.UPDATE;
                return var1;
            case 1332:
                var1 = _closure1_slot9;
                var1 = var1.DELETE;
                return var1;
            case 1344:
                var0 = _closure1_slot9;
                var0 = var0.CREATE;
                return var0;
        }
    };
    var _closure1_slot12 = var3;
    var0 = global;
    var10 = var0.Object;
    var9 = var10.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var9.bind(var10)(var2, var0, var1);
    var0 = 0;
    var1 = var8[var0];
    var0 = undefined;
    var1 = var6.bind(var0)(var1);
    var _closure1_slot2 = var1;
    var1 = 1;
    var1 = var8[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 2;
    var1 = var8[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 3;
    var1 = var8[var1];
    var9 = var6.bind(var0)(var1);
    var _closure1_slot5 = var9;
    var1 = 4;
    var1 = var8[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 5;
    var1 = var8[var1];
    var6 = var6.bind(var0)(var1);
    var1 = 6;
    var1 = var8[var1];
    var1 = var7.bind(var0)(var1);
    var10 = var1.AuditLogTargetTypes;
    var _closure1_slot7 = var10;
    var10 = var1.AuditLogActions;
    var _closure1_slot8 = var10;
    var1 = var1.AuditLogActionTypes;
    var _closure1_slot9 = var1;
    var1 = function arg0, arg1, arg2() {
        var2 = this;
        var3 = _closure1_slot6;
        var1 = _closure1_slot13;
        var0 = undefined;
        var1 = var3.bind(var0)(var2, var1);
        var1 = arg0;
        var2.key = var1;
        var1 = arg1;
        var2.oldValue = var1;
        var1 = arg2;
        var2.newValue = var1;
        return var0;
    };
    var _closure1_slot13 = var1;
    var1 = var9.bind(var0)(var1);
    var5 = function(arg0) { // Environment: var5
        var2 = function arg0() {
            _fun114791: for (var _fun114791_ip = 0;;) switch (_fun114791_ip) {
                case 0:
                    var2 = arg0;
                    var4 = this;
                    var0 = _closure1_slot6;
                    var1 = _closure2_slot0;
                    var5 = undefined;
                    var0 = var0.bind(var5)(var4, var1);
                    var0 = _closure1_slot3;
                    var10 = var0.bind(var5)(var1);
                    var1 = _closure1_slot2;
                    var0 = _closure1_slot10;
                    var0 = var0.bind(var5)();
                    if (var0) {
                        _fun114791_ip = 65;
                        continue _fun114791
                    }
                case 52:
                    var0 = var10.apply;
                    var0 = var0.bind(var10)(var4, var5);
                    _fun114791_ip = 103;
                    continue _fun114791;
                case 65:
                    var6 = global;
                    var9 = var6.Reflect;
                    var8 = var9.construct;
                    var6 = _closure1_slot3;
                    var6 = var6.bind(var5)(var4);
                    var7 = var6.constructor;
                    var6 = new Array(0);
                    var0 = var8.bind(var9)(var10, var6, var7);
                case 103:
                    var0 = var1.bind(var5)(var4, var0);
                    var1 = var2.id;
                    var0.id = var1;
                    var1 = var2.action;
                    var0.action = var1;
                    var4 = _closure1_slot12;
                    var1 = var0.action;
                    var1 = var4.bind(var5)(var1);
                    var0.actionType = var1;
                    var1 = var2.targetId;
                    var0.targetId = var1;
                    var4 = var2.timestampStart;
                    var1 = null;
                    if (!(var1 == var4)) {
                        _fun114791_ip = 228;
                        continue _fun114791
                    }
                case 175:
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot1;
                    var6 = 8;
                    var6 = var9[var6];
                    var7 = var8.bind(var5)(var6);
                    var6 = 9;
                    var6 = var9[var6];
                    var9 = var8.bind(var5)(var6);
                    var8 = var9.extractTimestamp;
                    var6 = var0.id;
                    var6 = var8.bind(var9)(var6);
                    var4 = var7.bind(var5)(var6);
                case 228:
                    var0.timestampStart = var4;
                    var4 = var2.timestampEnd;
                    if (!(var1 == var4)) {
                        _fun114791_ip = 250;
                        continue _fun114791
                    }
                case 244:
                    var4 = var0.timestampStart;
                case 250:
                    var0.timestampEnd = var4;
                    var4 = var2.userId;
                    var0.userId = var4;
                    var4 = var2.changes;
                    if (!(var1 == var4)) {
                        _fun114791_ip = 281;
                        continue _fun114791
                    }
                case 277:
                    var4 = new Array(0);
                case 281:
                    var0.changes = var4;
                    var4 = _closure1_slot11;
                    var3 = var0.action;
                    var3 = var4.bind(var5)(var3);
                    var0.targetType = var3;
                    var3 = var2.options;
                    if (!(var1 == var3)) {
                        _fun114791_ip = 318;
                        continue _fun114791
                    }
                case 316:
                    var3 = {};
                case 318:
                    var0.options = var3;
                    var3 = var2.target;
                    if (!(var1 == var3)) {
                        _fun114791_ip = 339;
                        continue _fun114791
                    }
                case 334:
                    var3 = var2.id;
                case 339:
                    var0.target = var3;
                    var2 = var2.user;
                    var3 = var1 != var2;
                    var1 = null;
                    if (!var3) {
                        _fun114791_ip = 362;
                        continue _fun114791
                    }
                case 359:
                    var1 = var2;
                case 362:
                    var0.user = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var2;
        var4 = _closure1_slot4;
        var1 = undefined;
        var3 = arg0;
        var3 = var4.bind(var1)(var2, var3);
        var0 = _closure1_slot5;
        var0 = var0.bind(var1)(var2);
        return var0;
    };
    var5 = var5.bind(var0)(var6);
    var6 = 10;
    var6 = var8[var6];
    var8 = var7.bind(var0)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'records/AuditLogRecord.tsx';
    var6 = var7.bind(var8)(var6);
    var2.default = var5;
    var2.getTargetType = var4;
    var2.getActionType = var3;
    var2.AuditLogChange = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [15, 17, 18, 7, 6, 1621, 660, 1207, 3006, 21, 2]);