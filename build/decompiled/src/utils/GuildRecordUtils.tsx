// utils/GuildRecordUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var7;
    var4 = function arg0, arg1, arg2() {
        _fun17774: for (var _fun17774_ip = 0;;) switch (_fun17774_ip) {
            case 0:
                var5 = arg0;
                var0 = arg1;
                var4 = _closure1_slot6;
                var3 = _closure1_slot8;
                var2 = {};
                var1 = var5.id;
                var2.id = var1;
                var1 = var0.joinedAt;
                var2.joinedAt = var1;
                var0 = var0.premiumSubscriberCount;
                var2.premiumSubscriberCount = var0;
                var0 = var5.name;
                var2.name = var0;
                var6 = var5.description;
                var0 = null;
                var8 = var0 != var6;
                var1 = null;
                if (!var8) {
                    _fun17774_ip = 78;
                    continue _fun17774
                }
            case 75:
                var1 = var6;
            case 78:
                var2.description = var1;
                var6 = var5.icon;
                var8 = var0 != var6;
                var1 = null;
                if (!var8) {
                    _fun17774_ip = 99;
                    continue _fun17774
                }
            case 96:
                var1 = var6;
            case 99:
                var2.icon = var1;
                var6 = var5.splash;
                var8 = var0 != var6;
                var1 = null;
                if (!var8) {
                    _fun17774_ip = 121;
                    continue _fun17774
                }
            case 118:
                var1 = var6;
            case 121:
                var2.splash = var1;
                var6 = var5.banner;
                var8 = var0 != var6;
                var1 = null;
                if (!var8) {
                    _fun17774_ip = 144;
                    continue _fun17774
                }
            case 141:
                var1 = var6;
            case 144:
                var2.banner = var1;
                var6 = var5.home_header;
                var8 = var0 != var6;
                var1 = null;
                if (!var8) {
                    _fun17774_ip = 167;
                    continue _fun17774
                }
            case 164:
                var1 = var6;
            case 167:
                var2.homeHeader = var1;
                var8 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 3;
                var6 = var6[var1];
                var1 = undefined;
                var9 = var8.bind(var1)(var6);
                var8 = var9.toSetInplace;
                var6 = var5.features;
                var6 = var8.bind(var9)(var6);
                var2.features = var6;
                var6 = var5.preferred_locale;
                if (!(var0 == var6)) {
                    _fun17774_ip = 236;
                    continue _fun17774
                }
            case 226:
                var8 = _closure1_slot7;
                var6 = var8.preferredLocale;
            case 236:
                var2.preferredLocale = var6;
                var6 = var5.owner_id;
                var2.ownerId = var6;
                var8 = var5.application_id;
                var9 = var0 != var8;
                var6 = null;
                if (!var9) {
                    _fun17774_ip = 270;
                    continue _fun17774
                }
            case 267:
                var6 = var8;
            case 270:
                var2.application_id = var6;
                var8 = var5.afk_channel_id;
                var9 = var0 != var8;
                var6 = null;
                if (!var9) {
                    _fun17774_ip = 293;
                    continue _fun17774
                }
            case 290:
                var6 = var8;
            case 293:
                var2.afkChannelId = var6;
                var6 = var5.afk_timeout;
                if (!(var0 == var6)) {
                    _fun17774_ip = 318;
                    continue _fun17774
                }
            case 308:
                var8 = _closure1_slot7;
                var6 = var8.afkTimeout;
            case 318:
                var2.afkTimeout = var6;
                var8 = var5.system_channel_id;
                var9 = var0 != var8;
                var6 = null;
                if (!var9) {
                    _fun17774_ip = 341;
                    continue _fun17774
                }
            case 338:
                var6 = var8;
            case 341:
                var2.systemChannelId = var6;
                var6 = var5.verification_level;
                if (!(var0 == var6)) {
                    _fun17774_ip = 366;
                    continue _fun17774
                }
            case 356:
                var8 = _closure1_slot7;
                var6 = var8.verificationLevel;
            case 366:
                var2.verificationLevel = var6;
                var6 = var5.explicit_content_filter;
                if (!(var0 == var6)) {
                    _fun17774_ip = 391;
                    continue _fun17774
                }
            case 381:
                var8 = _closure1_slot7;
                var6 = var8.explicitContentFilter;
            case 391:
                var2.explicitContentFilter = var6;
                var6 = var5.default_message_notifications;
                var2.defaultMessageNotifications = var6;
                var6 = var5.mfa_level;
                if (!(var0 == var6)) {
                    _fun17774_ip = 427;
                    continue _fun17774
                }
            case 417:
                var8 = _closure1_slot7;
                var6 = var8.mfaLevel;
            case 427:
                var2.mfaLevel = var6;
                var8 = var5.vanity_url_code;
                var9 = var0 != var8;
                var6 = null;
                if (!var9) {
                    _fun17774_ip = 450;
                    continue _fun17774
                }
            case 447:
                var6 = var8;
            case 450:
                var2.vanityURLCode = var6;
                var6 = var5.premium_tier;
                if (!(var0 == var6)) {
                    _fun17774_ip = 475;
                    continue _fun17774
                }
            case 465:
                var8 = _closure1_slot7;
                var6 = var8.premiumTier;
            case 475:
                var2.premiumTier = var6;
                var6 = var5.premium_progress_bar_enabled;
                if (var6) {
                    _fun17774_ip = 499;
                    continue _fun17774
                }
            case 489:
                var8 = _closure1_slot7;
                var6 = var8.premiumProgressBarEnabled;
            case 499:
                var2.premiumProgressBarEnabled = var6;
                var6 = var5.premium_progress_bar_enabled_user_updated_at;
                var8 = var0 != var6;
                var6 = null;
                if (!var8) {
                    _fun17774_ip = 553;
                    continue _fun17774
                }
            case 519:
                var8 = global;
                var10 = var8.Date;
                var13 = var5.premium_progress_bar_enabled_user_updated_at;
                var9 = var10.prototype;
                var9 = Object.create(var9, {
                    constructor: {
                        value: var10
                    }
                });
                var14 = var9;
                var8 = new var14[var10](var13, var12);
                var6 = var8 instanceof Object ? var8 : var9;
            case 553:
                var2.premiumProgressBarEnabledUserUpdatedAt = var6;
                var6 = var5.system_channel_flags;
                var2.systemChannelFlags = var6;
                var8 = var5.discovery_splash;
                var9 = var0 != var8;
                var6 = null;
                if (!var9) {
                    _fun17774_ip = 587;
                    continue _fun17774
                }
            case 584:
                var6 = var8;
            case 587:
                var2.discoverySplash = var6;
                var8 = var5.rules_channel_id;
                var9 = var0 != var8;
                var6 = null;
                if (!var9) {
                    _fun17774_ip = 610;
                    continue _fun17774
                }
            case 607:
                var6 = var8;
            case 610:
                var2.rulesChannelId = var6;
                var8 = var5.safety_alerts_channel_id;
                var9 = var0 != var8;
                var6 = null;
                if (!var9) {
                    _fun17774_ip = 633;
                    continue _fun17774
                }
            case 630:
                var6 = var8;
            case 633:
                var2.safetyAlertsChannelId = var6;
                var8 = var5.public_updates_channel_id;
                var9 = var0 != var8;
                var6 = null;
                if (!var9) {
                    _fun17774_ip = 656;
                    continue _fun17774
                }
            case 653:
                var6 = var8;
            case 656:
                var2.publicUpdatesChannelId = var6;
                var6 = var5.max_stage_video_channel_users;
                if (!(var0 == var6)) {
                    _fun17774_ip = 681;
                    continue _fun17774
                }
            case 671:
                var8 = _closure1_slot7;
                var6 = var8.maxStageVideoChannelUsers;
            case 681:
                var2.maxStageVideoChannelUsers = var6;
                var6 = var5.max_video_channel_users;
                if (!(var0 == var6)) {
                    _fun17774_ip = 706;
                    continue _fun17774
                }
            case 696:
                var8 = _closure1_slot7;
                var6 = var8.maxVideoChannelUsers;
            case 706:
                var2.maxVideoChannelUsers = var6;
                var6 = var5.max_members;
                if (!(var0 == var6)) {
                    _fun17774_ip = 731;
                    continue _fun17774
                }
            case 721:
                var8 = _closure1_slot7;
                var6 = var8.maxMembers;
            case 731:
                var2.maxMembers = var6;
                var6 = var5.nsfw_level;
                if (!(var0 == var6)) {
                    _fun17774_ip = 756;
                    continue _fun17774
                }
            case 746:
                var7 = _closure1_slot7;
                var6 = var7.nsfwLevel;
            case 756:
                var2.nsfwLevel = var6;
                var7 = var5.owner_configured_content_level;
                var8 = var0 != var7;
                var6 = null;
                if (!var8) {
                    _fun17774_ip = 779;
                    continue _fun17774
                }
            case 776:
                var6 = var7;
            case 779:
                var2.ownerConfiguredContentLevel = var6;
                var7 = var5.hub_type;
                var8 = var0 != var7;
                var6 = null;
                if (!var8) {
                    _fun17774_ip = 802;
                    continue _fun17774
                }
            case 799:
                var6 = var7;
            case 802:
                var2.hubType = var6;
                var7 = var5.latest_onboarding_question_id;
                var8 = var0 != var7;
                var6 = null;
                if (!var8) {
                    _fun17774_ip = 825;
                    continue _fun17774
                }
            case 822:
                var6 = var7;
            case 825:
                var2.latestOnboardingQuestionId = var6;
                var7 = var5.profile;
                var8 = var0 != var7;
                var6 = null;
                if (!var8) {
                    _fun17774_ip = 848;
                    continue _fun17774
                }
            case 845:
                var6 = var7;
            case 848:
                var2.profile = var6;
                var6 = var5.premium_features;
                var7 = var0 != var6;
                var6 = null;
                if (!var7) {
                    _fun17774_ip = 923;
                    continue _fun17774
                }
            case 868:
                var8 = var5.premium_features;
                var7 = {};
                var9 = var8.features;
                var7.features = var9;
                var9 = var8.additional_emoji_slots;
                var7.additionalEmojiSlots = var9;
                var9 = var8.additional_sticker_slots;
                var7.additionalStickerSlots = var9;
                var8 = var8.additional_sound_slots;
                var7.additionalSoundSlots = var8;
                var6 = var7;
            case 923:
                var2.premiumFeatures = var6;
                var6 = var5.moderator_reporting;
                var6 = var0 != var6;
                var0 = null;
                if (!var6) {
                    _fun17774_ip = 976;
                    continue _fun17774
                }
            case 943:
                var6 = var5.moderator_reporting;
                var5 = {};
                var7 = var6.moderator_reporting_enabled;
                var5.moderatorReportingEnabled = var7;
                var6 = var6.moderator_report_channel_id;
                var5.moderatorReportChannelId = var6;
                var0 = var5;
            case 976:
                var2.moderatorReporting = var0;
                var0 = arg2;
                var0 = var4.bind(var1)(var3, var0, var2);
                return var0;
        }
    };
    var _closure1_slot10 = var4;
    var1 = function arg0() {
        var2 = _closure1_slot12;
        var1 = {};
        var3 = _closure1_slot7;
        var4 = var1;
        var0 = copyDataProperties(var4, var3);
        var3 = arg0;
        var4 = var1;
        var0 = copyDataProperties(var4, var3);
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        return var0;
    };
    var _closure1_slot11 = var1;
    var0 = function arg0() {
        var3 = _closure1_slot3;
        var2 = _closure1_slot8;
        var1 = undefined;
        var0 = arg0;
        var0 = var3.bind(var1)(var2, var0);
        return var0;
    };
    var _closure1_slot12 = var0;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var5);
    var0 = 0;
    var5 = var7[var0];
    var0 = undefined;
    var5 = var6.bind(var0)(var5);
    var8 = var5.constructInPlace;
    var _closure1_slot3 = var8;
    var8 = var5.merge;
    var _closure1_slot4 = var8;
    var8 = var5.objectIsPlainRecordOfType;
    var _closure1_slot5 = var8;
    var5 = var5.tryReuseExistingInPlacePlainRecord;
    var _closure1_slot6 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var8 = var5.GUILD_DEFAULT_PROPERTY_VALUES;
    var _closure1_slot7 = var8;
    var5 = var5.GuildRecordTypeTag;
    var _closure1_slot8 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var5 = var5.GuildNSFWContentLevel;
    var _closure1_slot9 = var5;
    var5 = 5;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'utils/GuildRecordUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function arg0() {
        var3 = _closure1_slot5;
        var2 = _closure1_slot8;
        var1 = undefined;
        var0 = arg0;
        var0 = var3.bind(var1)(var2, var0);
        return var0;
    };
    var2.isGuildRecord = var5;
    var2.fromGuildPropertiesWithAdditionalFields = var4;
    var4 = function arg0, arg1() {
        _fun17778: for (var _fun17778_ip = 0;;) switch (_fun17778_ip) {
            case 0:
                var0 = arg0;
                var4 = arg1;
                var1 = var0.joined_at;
                var2 = null;
                if (!(var2 == var1)) {
                    _fun17778_ip = 47;
                    continue _fun17778
                }
            case 18:
                var3 = var2 == var4;
                var1 = undefined;
                if (var3) {
                    _fun17778_ip = 33;
                    continue _fun17778
                }
            case 27:
                var1 = var4.joinedAt;
            case 33:
                var3 = var2 != var1;
                var6 = null;
                if (!var3) {
                    _fun17778_ip = 45;
                    continue _fun17778
                }
            case 42:
                var6 = var1;
            case 45:
                _fun17778_ip = 81;
                continue _fun17778;
            case 47:
                var1 = global;
                var5 = var1.Date;
                var11 = var0.joined_at;
                var3 = var5.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var5
                    }
                });
                var12 = var3;
                var1 = new var12[var5](var11, var10);
                var6 = var1 instanceof Object ? var1 : var3;
            case 81:
                var1 = var0.premium_subscription_count;
                var3 = var2 != var1;
                var5 = 0;
                if (!var3) {
                    _fun17778_ip = 99;
                    continue _fun17778
                }
            case 96:
                var5 = var1;
            case 99:
                var1 = var0.properties;
                if (!(var2 != var1)) {
                    _fun17778_ip = 145;
                    continue _fun17778
                }
            case 109:
                var7 = _closure1_slot10;
                var3 = var0.properties;
                var1 = {};
                var1.joinedAt = var6;
                var1.premiumSubscriberCount = var5;
                var0 = undefined;
                var0 = var7.bind(var0)(var3, var1, var4);
                _fun17778_ip = 208;
                continue _fun17778;
            case 145:
                var8 = _closure1_slot1;
                var7 = _closure1_slot2;
                var3 = 4;
                var7 = var7[var3];
                var3 = undefined;
                var8 = var8.bind(var3)(var7);
                var7 = var2 != var4;
                var2 = 'If guild.properties is null, existingGuild must be passed in';
                var2 = var8.bind(var3)(var7, var2);
                var2 = _closure1_slot4;
                var1 = {};
                var1.joinedAt = var6;
                var1.premiumSubscriberCount = var5;
                var0 = var2.bind(var3)(var4, var1);
            case 208:
                return var0;
        }
    };
    var2.fromServer = var4;
    var4 = function arg0, arg1, arg2() {
        _fun17779: for (var _fun17779_ip = 0;;) switch (_fun17779_ip) {
            case 0:
                var1 = arg0;
                var3 = arg2;
                var0 = {};
                var8 = var0;
                var7 = var1;
                var2 = copyDataProperties(var8, var7);
                var4 = var1.joinedAt;
                var2 = null;
                var4 = var2 != var4;
                var5 = null;
                if (!var4) {
                    _fun17779_ip = 51;
                    continue _fun17779
                }
            case 35:
                var6 = var1.joinedAt;
                var4 = var6.toISOString;
                var5 = var4.bind(var6)();
            case 51:
                var4 = 'joinedAt';
                var0[var4] = var5;
                var4 = var1.premiumProgressBarEnabledUserUpdatedAt;
                var4 = var2 != var4;
                var5 = null;
                if (!var4) {
                    _fun17779_ip = 91;
                    continue _fun17779
                }
            case 75:
                var6 = var1.premiumProgressBarEnabledUserUpdatedAt;
                var4 = var6.toISOString;
                var5 = var4.bind(var6)();
            case 91:
                var4 = 'premiumProgressBarEnabledUserUpdatedAt';
                var0[var4] = var5;
                var4 = global;
                var5 = var4.Array;
                var4 = var5.from;
                var1 = var1.features;
                var4 = var4.bind(var5)(var1);
                var1 = 'features';
                var0[var1] = var4;
                var4 = arg1;
                var1 = 'roles';
                var0[var1] = var4;
                var1 = var2 != var3;
                var2 = null;
                if (!var1) {
                    _fun17779_ip = 179;
                    continue _fun17779
                }
            case 154:
                var1 = {};
                var4 = var3.userId;
                var1.userId = var4;
                var3 = var3.roles;
                var1.roles = var3;
                var2 = var1;
            case 179:
                var1 = 'member';
                var0[var1] = var2;
                return var0;
        }
    };
    var2.attachSerializedData = var4;
    var4 = function arg0, arg1() {
        _fun17780: for (var _fun17780_ip = 0;;) switch (_fun17780_ip) {
            case 0:
                var1 = arg0;
                var5 = arg1;
                var3 = var1.properties;
                var2 = null;
                var0 = var5;
                if (!(var2 != var3)) {
                    _fun17780_ip = 67;
                    continue _fun17780
                }
            case 21:
                var4 = _closure1_slot10;
                var3 = var1.properties;
                var2 = {};
                var1 = var5.joinedAt;
                var2.joinedAt = var1;
                var1 = var5.premiumSubscriberCount;
                var2.premiumSubscriberCount = var1;
                var1 = undefined;
                var0 = var4.bind(var1)(var3, var2, var5);
            case 67:
                return var0;
        }
    };
    var2.fromBackgroundSync = var4;
    var4 = function arg0, arg1() {
        _fun17781: for (var _fun17781_ip = 0;;) switch (_fun17781_ip) {
            case 0:
                var4 = arg0;
                var3 = arg1;
                var2 = _closure1_slot10;
                var1 = {};
                var5 = var4.joined_at;
                var0 = null;
                if (!(var0 == var5)) {
                    _fun17781_ip = 56;
                    continue _fun17781
                }
            case 27:
                var6 = var0 == var3;
                var5 = undefined;
                if (var6) {
                    _fun17781_ip = 42;
                    continue _fun17781
                }
            case 36:
                var5 = var3.joinedAt;
            case 42:
                var6 = var0 != var5;
                var0 = null;
                if (!var6) {
                    _fun17781_ip = 54;
                    continue _fun17781
                }
            case 51:
                var0 = var5;
            case 54:
                _fun17781_ip = 90;
                continue _fun17781;
            case 56:
                var5 = global;
                var7 = var5.Date;
                var10 = var4.joined_at;
                var6 = var7.prototype;
                var6 = Object.create(var6, {
                    constructor: {
                        value: var7
                    }
                });
                var11 = var6;
                var5 = new var11[var7](var10, var9);
                var0 = var5 instanceof Object ? var5 : var6;
            case 90:
                var1.joinedAt = var0;
                var0 = var4.premium_subscription_count;
                var1.premiumSubscriberCount = var0;
                var0 = undefined;
                var0 = var2.bind(var0)(var4, var1, var3);
                return var0;
        }
    };
    var2.fromGuild = var4;
    var4 = function arg0() {
        var3 = arg0;
        var2 = _closure1_slot11;
        var1 = {};
        var4 = var3.id;
        var1.id = var4;
        var4 = var3.name;
        var1.name = var4;
        var4 = var3.description;
        var1.description = var4;
        var4 = var3.icon;
        var1.icon = var4;
        var4 = var3.splash;
        var1.splash = var4;
        var4 = var3.banner;
        var1.banner = var4;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var0 = 3;
        var4 = var4[var0];
        var0 = undefined;
        var6 = var5.bind(var0)(var4);
        var5 = var6.toSetInplace;
        var4 = var3.features;
        var4 = var5.bind(var6)(var4);
        var1.features = var4;
        var4 = var3.verification_level;
        var1.verificationLevel = var4;
        var4 = var3.vanity_url_code;
        var1.vanityURLCode = var4;
        var4 = var3.premium_subscription_count;
        var1.premiumSubscriberCount = var4;
        var4 = var3.nsfw_level;
        var1.nsfwLevel = var4;
        var4 = var3.premium_tier;
        var1.premiumTier = var4;
        var3 = var3.home_header;
        var1.homeHeader = var3;
        var0 = var2.bind(var0)(var1);
        return var0;
    };
    var2.fromInviteGuild = var4;
    var4 = function arg0() {
        _fun17783: for (var _fun17783_ip = 0;;) switch (_fun17783_ip) {
            case 0:
                var3 = arg0;
                var2 = _closure1_slot11;
                var1 = {};
                var4 = var3.id;
                var1.id = var4;
                var4 = var3.name;
                var1.name = var4;
                var4 = var3.description;
                var1.description = var4;
                var4 = var3.icon;
                var1.icon = var4;
                var4 = var3.premiumSubscriberCount;
                var5 = null;
                if (!(var5 == var4)) {
                    _fun17783_ip = 70;
                    continue _fun17783
                }
            case 60:
                var6 = _closure1_slot7;
                var4 = var6.premiumSubscriberCount;
            case 70:
                var1.premiumSubscriberCount = var4;
                var4 = var3.premiumTier;
                if (!(var5 == var4)) {
                    _fun17783_ip = 95;
                    continue _fun17783
                }
            case 85:
                var5 = _closure1_slot7;
                var4 = var5.premiumTier;
            case 95:
                var1.premiumTier = var4;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 3;
                var4 = var4[var0];
                var0 = undefined;
                var5 = var5.bind(var0)(var4);
                var4 = var5.toSetInplace;
                var3 = var3.features;
                var3 = var4.bind(var5)(var3);
                var1.features = var3;
                var0 = var2.bind(var0)(var1);
                return var0;
        }
    };
    var2.fromGuildProfile = var4;
    var4 = function arg0() {
        _fun17784: for (var _fun17784_ip = 0;;) switch (_fun17784_ip) {
            case 0:
                var0 = arg0;
                var2 = _closure1_slot11;
                var1 = {};
                var3 = var0.id;
                var1.id = var3;
                var3 = var0.name;
                var1.name = var3;
                var3 = var0.icon;
                var0 = null;
                var4 = var0 != var3;
                if (!var4) {
                    _fun17784_ip = 47;
                    continue _fun17784
                }
            case 44:
                var0 = var3;
            case 47:
                var1.icon = var0;
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                return var0;
        }
    };
    var2.fromStoreListingGuild = var4;
    var4 = function arg0() {
        _fun17785: for (var _fun17785_ip = 0;;) switch (_fun17785_ip) {
            case 0:
                var3 = arg0;
                var2 = _closure1_slot11;
                var1 = {};
                var4 = var3.id;
                var1.id = var4;
                var4 = var3.name;
                var1.name = var4;
                var6 = var3.icon;
                var4 = null;
                var7 = var4 != var6;
                var5 = null;
                if (!var7) {
                    _fun17785_ip = 49;
                    continue _fun17785
                }
            case 46:
                var5 = var6;
            case 49:
                var1.icon = var5;
                var6 = var3.description;
                var7 = var4 != var6;
                var5 = null;
                if (!var7) {
                    _fun17785_ip = 70;
                    continue _fun17785
                }
            case 67:
                var5 = var6;
            case 70:
                var1.description = var5;
                var5 = var3.splash;
                var6 = var4 != var5;
                var4 = null;
                if (!var6) {
                    _fun17785_ip = 92;
                    continue _fun17785
                }
            case 89:
                var4 = var5;
            case 92:
                var1.splash = var4;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 3;
                var4 = var4[var0];
                var0 = undefined;
                var5 = var5.bind(var0)(var4);
                var4 = var5.toSetInplace;
                var3 = var3.features;
                var3 = var4.bind(var5)(var3);
                var1.features = var3;
                var0 = var2.bind(var0)(var1);
                return var0;
        }
    };
    var2.fromDirectoryGuild = var4;
    var4 = function arg0() {
        _fun17786: for (var _fun17786_ip = 0;;) switch (_fun17786_ip) {
            case 0:
                var3 = arg0;
                var2 = _closure1_slot11;
                var1 = {};
                var4 = var3.guildId;
                var1.id = var4;
                var6 = var3.name;
                var4 = null;
                var7 = var4 != var6;
                var5 = '';
                if (!var7) {
                    _fun17786_ip = 42;
                    continue _fun17786
                }
            case 39:
                var5 = var6;
            case 42:
                var1.name = var5;
                var6 = var3.icon;
                var7 = var4 != var6;
                var5 = null;
                if (!var7) {
                    _fun17786_ip = 63;
                    continue _fun17786
                }
            case 60:
                var5 = var6;
            case 63:
                var1.icon = var5;
                var6 = var3.description;
                var7 = var4 != var6;
                var5 = null;
                if (!var7) {
                    _fun17786_ip = 84;
                    continue _fun17786
                }
            case 81:
                var5 = var6;
            case 84:
                var1.description = var5;
                var5 = var3.splash;
                var6 = var4 != var5;
                var4 = null;
                if (!var6) {
                    _fun17786_ip = 106;
                    continue _fun17786
                }
            case 103:
                var4 = var5;
            case 106:
                var1.splash = var4;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 3;
                var4 = var4[var0];
                var0 = undefined;
                var5 = var5.bind(var0)(var4);
                var4 = var5.toSetInplace;
                var3 = var3.features;
                var3 = var4.bind(var5)(var3);
                var1.features = var3;
                var0 = var2.bind(var0)(var1);
                return var0;
        }
    };
    var2.fromGuildDirectoryEntry = var4;
    var4 = function arg0() {
        _fun17787: for (var _fun17787_ip = 0;;) switch (_fun17787_ip) {
            case 0:
                var3 = arg0;
                var2 = _closure1_slot11;
                var1 = {};
                var0 = var3.id;
                var1.id = var0;
                var0 = var3.name;
                var1.name = var0;
                var6 = var3.icon;
                var5 = null;
                var7 = var5 != var6;
                var0 = null;
                if (!var7) {
                    _fun17787_ip = 49;
                    continue _fun17787
                }
            case 46:
                var0 = var6;
            case 49:
                var1.icon = var0;
                var6 = var3.description;
                var7 = var5 != var6;
                var0 = null;
                if (!var7) {
                    _fun17787_ip = 70;
                    continue _fun17787
                }
            case 67:
                var0 = var6;
            case 70:
                var1.description = var0;
                var6 = var3.splash;
                var7 = var5 != var6;
                var0 = null;
                if (!var7) {
                    _fun17787_ip = 92;
                    continue _fun17787
                }
            case 89:
                var0 = var6;
            case 92:
                var1.splash = var0;
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 3;
                var6 = var6[var0];
                var0 = undefined;
                var8 = var7.bind(var0)(var6);
                var7 = var8.toSetInplace;
                var6 = var3.features;
                var6 = var7.bind(var8)(var6);
                var1.features = var6;
                var3 = var3.verification_level;
                if (!(var5 == var3)) {
                    _fun17787_ip = 161;
                    continue _fun17787
                }
            case 151:
                var4 = _closure1_slot7;
                var3 = var4.verificationLevel;
            case 161:
                var1.verificationLevel = var3;
                var0 = var2.bind(var0)(var1);
                return var0;
        }
    };
    var2.fromVerificationGateGuild = var4;
    var4 = function arg0() {
        _fun17788: for (var _fun17788_ip = 0;;) switch (_fun17788_ip) {
            case 0:
                var4 = arg0;
                var2 = _closure1_slot11;
                var1 = {};
                var0 = var4.id;
                var1.id = var0;
                var0 = var4.name;
                var1.name = var0;
                var5 = var4.description;
                var3 = null;
                var7 = var3 != var5;
                var0 = null;
                if (!var7) {
                    _fun17788_ip = 49;
                    continue _fun17788
                }
            case 46:
                var0 = var5;
            case 49:
                var1.description = var0;
                var5 = var4.splash;
                var7 = var3 != var5;
                var0 = null;
                if (!var7) {
                    _fun17788_ip = 71;
                    continue _fun17788
                }
            case 68:
                var0 = var5;
            case 71:
                var1.splash = var0;
                var5 = var4.banner;
                var7 = var3 != var5;
                var0 = null;
                if (!var7) {
                    _fun17788_ip = 94;
                    continue _fun17788
                }
            case 91:
                var0 = var5;
            case 94:
                var1.banner = var0;
                var0 = var4.preferredLocale;
                if (!(var3 == var0)) {
                    _fun17788_ip = 119;
                    continue _fun17788
                }
            case 109:
                var5 = _closure1_slot7;
                var0 = var5.preferredLocale;
            case 119:
                var1.preferredLocale = var0;
                var5 = var4.icon;
                var7 = var3 != var5;
                var0 = null;
                if (!var7) {
                    _fun17788_ip = 141;
                    continue _fun17788
                }
            case 138:
                var0 = var5;
            case 141:
                var1.icon = var0;
                var7 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 3;
                var5 = var5[var0];
                var0 = undefined;
                var8 = var7.bind(var0)(var5);
                var7 = var8.toSetInplace;
                var5 = var4.features;
                var5 = var7.bind(var8)(var5);
                var1.features = var5;
                var5 = var4.premiumSubscriptionCount;
                if (!(var3 == var5)) {
                    _fun17788_ip = 209;
                    continue _fun17788
                }
            case 199:
                var6 = _closure1_slot7;
                var5 = var6.premiumSubscriberCount;
            case 209:
                var1.premiumSubscriberCount = var5;
                var4 = var4.discoverySplash;
                var5 = var3 != var4;
                var3 = null;
                if (!var5) {
                    _fun17788_ip = 232;
                    continue _fun17788
                }
            case 229:
                var3 = var4;
            case 232:
                var1.discoverySplash = var3;
                var0 = var2.bind(var0)(var1);
                return var0;
        }
    };
    var2.fromClientDiscoverableGuild = var4;
    var4 = function arg0() {
        _fun17789: for (var _fun17789_ip = 0;;) switch (_fun17789_ip) {
            case 0:
                var3 = arg0;
                var2 = _closure1_slot11;
                var1 = {};
                var4 = var3.id;
                var1.id = var4;
                var4 = var3.name;
                var1.name = var4;
                var6 = var3.icon;
                var4 = null;
                var7 = var4 != var6;
                var5 = null;
                if (!var7) {
                    _fun17789_ip = 49;
                    continue _fun17789
                }
            case 46:
                var5 = var6;
            case 49:
                var1.icon = var5;
                var6 = var3.description;
                var7 = var4 != var6;
                var5 = null;
                if (!var7) {
                    _fun17789_ip = 70;
                    continue _fun17789
                }
            case 67:
                var5 = var6;
            case 70:
                var1.description = var5;
                var6 = var3.splash;
                var7 = var4 != var6;
                var5 = null;
                if (!var7) {
                    _fun17789_ip = 92;
                    continue _fun17789
                }
            case 89:
                var5 = var6;
            case 92:
                var1.splash = var5;
                var5 = var3.discovery_splash;
                var6 = var4 != var5;
                var4 = null;
                if (!var6) {
                    _fun17789_ip = 115;
                    continue _fun17789
                }
            case 112:
                var4 = var5;
            case 115:
                var1.discoverySplash = var4;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 3;
                var4 = var4[var0];
                var0 = undefined;
                var5 = var5.bind(var0)(var4);
                var4 = var5.toSetInplace;
                var3 = var3.features;
                var3 = var4.bind(var5)(var3);
                var1.features = var3;
                var0 = var2.bind(var0)(var1);
                return var0;
        }
    };
    var2.fromGuildBasic = var4;
    var4 = function arg0() {
        _fun17790: for (var _fun17790_ip = 0;;) switch (_fun17790_ip) {
            case 0:
                var4 = arg0;
                var2 = _closure1_slot12;
                var1 = {};
                var0 = var4.id;
                var1.id = var0;
                var0 = var4.name;
                if (var0) {
                    _fun17790_ip = 33;
                    continue _fun17790
                }
            case 29:
                var0 = '';
            case 33:
                var1.name = var0;
                var0 = var4.description;
                if (var0) {
                    _fun17790_ip = 47;
                    continue _fun17790
                }
            case 45:
                var0 = null;
            case 47:
                var1.description = var0;
                var0 = var4.ownerId;
                if (var0) {
                    _fun17790_ip = 62;
                    continue _fun17790
                }
            case 60:
                var0 = null;
            case 62:
                var1.ownerId = var0;
                var0 = var4.icon;
                if (var0) {
                    _fun17790_ip = 77;
                    continue _fun17790
                }
            case 75:
                var0 = null;
            case 77:
                var1.icon = var0;
                var0 = var4.splash;
                if (var0) {
                    _fun17790_ip = 92;
                    continue _fun17790
                }
            case 90:
                var0 = null;
            case 92:
                var1.splash = var0;
                var0 = var4.banner;
                if (var0) {
                    _fun17790_ip = 108;
                    continue _fun17790
                }
            case 106:
                var0 = null;
            case 108:
                var1.banner = var0;
                var0 = var4.homeHeader;
                if (var0) {
                    _fun17790_ip = 124;
                    continue _fun17790
                }
            case 122:
                var0 = null;
            case 124:
                var1.homeHeader = var0;
                var5 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 3;
                var3 = var3[var0];
                var0 = undefined;
                var7 = var5.bind(var0)(var3);
                var5 = var7.toSetInplace;
                var3 = var4.features;
                var3 = var5.bind(var7)(var3);
                var1.features = var3;
                var3 = var4.preferredLocale;
                if (var3) {
                    _fun17790_ip = 192;
                    continue _fun17790
                }
            case 182:
                var5 = _closure1_slot7;
                var3 = var5.preferredLocale;
            case 192:
                var1.preferredLocale = var3;
                var3 = var4.afkChannelId;
                if (var3) {
                    _fun17790_ip = 208;
                    continue _fun17790
                }
            case 206:
                var3 = null;
            case 208:
                var1.afkChannelId = var3;
                var3 = var4.afkTimeout;
                var1.afkTimeout = var3;
                var3 = var4.systemChannelId;
                if (var3) {
                    _fun17790_ip = 235;
                    continue _fun17790
                }
            case 233:
                var3 = null;
            case 235:
                var1.systemChannelId = var3;
                var3 = var4.verificationLevel;
                if (var3) {
                    _fun17790_ip = 259;
                    continue _fun17790
                }
            case 249:
                var5 = _closure1_slot7;
                var3 = var5.verificationLevel;
            case 259:
                var1.verificationLevel = var3;
                var5 = var4.joinedAt;
                var7 = global;
                var3 = var7.Date;
                var3 = var5 instanceof var3;
                var5 = var4.joinedAt;
                if (var3) {
                    _fun17790_ip = 339;
                    continue _fun17790
                }
            case 291:
                var3 = null;
                if (!(var3 == var5)) {
                    _fun17790_ip = 305;
                    continue _fun17790
                }
            case 297:
                var3 = var4.joinedAt;
                _fun17790_ip = 337;
                continue _fun17790;
            case 305:
                var10 = var7.Date;
                var11 = var4.joinedAt;
                var9 = var10.prototype;
                var9 = Object.create(var9, {
                    constructor: {
                        value: var10
                    }
                });
                var12 = var9;
                var8 = new var12[var10](var11, var10);
                var3 = var8 instanceof Object ? var8 : var9;
            case 337:
                _fun17790_ip = 342;
                continue _fun17790;
            case 339:
                var3 = var5;
            case 342:
                var1.joinedAt = var3;
                var3 = var4.defaultMessageNotifications;
                if (var3) {
                    _fun17790_ip = 366;
                    continue _fun17790
                }
            case 356:
                var5 = _closure1_slot7;
                var3 = var5.defaultMessageNotifications;
            case 366:
                var1.defaultMessageNotifications = var3;
                var3 = var4.mfaLevel;
                if (var3) {
                    _fun17790_ip = 390;
                    continue _fun17790
                }
            case 380:
                var5 = _closure1_slot7;
                var3 = var5.mfaLevel;
            case 390:
                var1.mfaLevel = var3;
                var3 = var4.application_id;
                if (var3) {
                    _fun17790_ip = 406;
                    continue _fun17790
                }
            case 404:
                var3 = null;
            case 406:
                var1.application_id = var3;
                var3 = var4.explicitContentFilter;
                if (var3) {
                    _fun17790_ip = 430;
                    continue _fun17790
                }
            case 420:
                var5 = _closure1_slot7;
                var3 = var5.explicitContentFilter;
            case 430:
                var1.explicitContentFilter = var3;
                var3 = var4.vanityURLCode;
                if (var3) {
                    _fun17790_ip = 446;
                    continue _fun17790
                }
            case 444:
                var3 = null;
            case 446:
                var1.vanityURLCode = var3;
                var3 = var4.premiumTier;
                if (var3) {
                    _fun17790_ip = 470;
                    continue _fun17790
                }
            case 460:
                var5 = _closure1_slot7;
                var3 = var5.premiumTier;
            case 470:
                var1.premiumTier = var3;
                var3 = var4.premiumSubscriberCount;
                if (var3) {
                    _fun17790_ip = 494;
                    continue _fun17790
                }
            case 484:
                var5 = _closure1_slot7;
                var3 = var5.premiumSubscriberCount;
            case 494:
                var1.premiumSubscriberCount = var3;
                var3 = var4.premiumProgressBarEnabled;
                if (var3) {
                    _fun17790_ip = 518;
                    continue _fun17790
                }
            case 508:
                var5 = _closure1_slot7;
                var3 = var5.premiumProgressBarEnabled;
            case 518:
                var1.premiumProgressBarEnabled = var3;
                var5 = var4.premiumProgressBarEnabledUserUpdatedAt;
                var3 = var7.Date;
                var3 = var5 instanceof var3;
                var5 = var4.premiumProgressBarEnabledUserUpdatedAt;
                if (var3) {
                    _fun17790_ip = 591;
                    continue _fun17790
                }
            case 548:
                var3 = null;
                var8 = var3 != var5;
                if (!var8) {
                    _fun17790_ip = 589;
                    continue _fun17790
                }
            case 557:
                var9 = var7.Date;
                var11 = var4.premiumProgressBarEnabledUserUpdatedAt;
                var8 = var9.prototype;
                var8 = Object.create(var8, {
                    constructor: {
                        value: var9
                    }
                });
                var12 = var8;
                var7 = new var12[var9](var11, var10);
                var3 = var7 instanceof Object ? var7 : var8;
            case 589:
                _fun17790_ip = 594;
                continue _fun17790;
            case 591:
                var3 = var5;
            case 594:
                var1.premiumProgressBarEnabledUserUpdatedAt = var3;
                var3 = var4.systemChannelFlags;
                var1.systemChannelFlags = var3;
                var3 = var4.discoverySplash;
                if (var3) {
                    _fun17790_ip = 621;
                    continue _fun17790
                }
            case 619:
                var3 = null;
            case 621:
                var1.discoverySplash = var3;
                var3 = var4.rulesChannelId;
                if (var3) {
                    _fun17790_ip = 637;
                    continue _fun17790
                }
            case 635:
                var3 = null;
            case 637:
                var1.rulesChannelId = var3;
                var3 = var4.safetyAlertsChannelId;
                if (var3) {
                    _fun17790_ip = 653;
                    continue _fun17790
                }
            case 651:
                var3 = null;
            case 653:
                var1.safetyAlertsChannelId = var3;
                var3 = var4.publicUpdatesChannelId;
                if (var3) {
                    _fun17790_ip = 669;
                    continue _fun17790
                }
            case 667:
                var3 = null;
            case 669:
                var1.publicUpdatesChannelId = var3;
                var3 = var4.maxStageVideoChannelUsers;
                if (var3) {
                    _fun17790_ip = 693;
                    continue _fun17790
                }
            case 683:
                var5 = _closure1_slot7;
                var3 = var5.maxStageVideoChannelUsers;
            case 693:
                var1.maxStageVideoChannelUsers = var3;
                var3 = var4.maxVideoChannelUsers;
                if (var3) {
                    _fun17790_ip = 717;
                    continue _fun17790
                }
            case 707:
                var5 = _closure1_slot7;
                var3 = var5.maxVideoChannelUsers;
            case 717:
                var1.maxVideoChannelUsers = var3;
                var3 = var4.maxMembers;
                if (var3) {
                    _fun17790_ip = 741;
                    continue _fun17790
                }
            case 731:
                var5 = _closure1_slot7;
                var3 = var5.maxMembers;
            case 741:
                var1.maxMembers = var3;
                var5 = var4.nsfwLevel;
                var3 = null;
                if (!(var3 == var5)) {
                    _fun17790_ip = 768;
                    continue _fun17790
                }
            case 758:
                var6 = _closure1_slot7;
                var5 = var6.nsfwLevel;
            case 768:
                var1.nsfwLevel = var5;
                var6 = var4.ownerConfiguredContentLevel;
                var7 = var3 != var6;
                var5 = null;
                if (!var7) {
                    _fun17790_ip = 791;
                    continue _fun17790
                }
            case 788:
                var5 = var6;
            case 791:
                var1.ownerConfiguredContentLevel = var5;
                var5 = var4.hubType;
                var1.hubType = var5;
                var6 = var4.latestOnboardingQuestionId;
                var7 = var3 != var6;
                var5 = null;
                if (!var7) {
                    _fun17790_ip = 825;
                    continue _fun17790
                }
            case 822:
                var5 = var6;
            case 825:
                var1.latestOnboardingQuestionId = var5;
                var6 = var4.profile;
                var7 = var3 != var6;
                var5 = null;
                if (!var7) {
                    _fun17790_ip = 848;
                    continue _fun17790
                }
            case 845:
                var5 = var6;
            case 848:
                var1.profile = var5;
                var6 = var4.premiumFeatures;
                var7 = var3 != var6;
                var5 = null;
                if (!var7) {
                    _fun17790_ip = 871;
                    continue _fun17790
                }
            case 868:
                var5 = var6;
            case 871:
                var1.premiumFeatures = var5;
                var4 = var4.moderatorReporting;
                var5 = var3 != var4;
                var3 = null;
                if (!var5) {
                    _fun17790_ip = 894;
                    continue _fun17790
                }
            case 891:
                var3 = var4;
            case 894:
                var1.moderatorReporting = var3;
                var0 = var2.bind(var0)(var1);
                return var0;
        }
    };
    var2.dangerouslyConstructGuildRecordFromUntypedObject = var4;
    var4 = function arg0() {
        _fun17791: for (var _fun17791_ip = 0;;) switch (_fun17791_ip) {
            case 0:
                var3 = arg0;
                var0 = {};
                var1 = var3.id;
                var0.id = var1;
                var1 = var3.name;
                var0.name = var1;
                var1 = var3.description;
                var0.description = var1;
                var1 = var3.icon;
                var0.icon = var1;
                var1 = var3.splash;
                var0.splash = var1;
                var1 = var3.banner;
                var0.banner = var1;
                var1 = var3.homeHeader;
                var0.home_header = var1;
                var1 = global;
                var4 = var1.Array;
                var2 = var4.from;
                var1 = var3.features;
                var1 = var2.bind(var4)(var1);
                var0.features = var1;
                var1 = var3.preferredLocale;
                var0.preferred_locale = var1;
                var1 = var3.ownerId;
                var0.owner_id = var1;
                var1 = var3.application_id;
                var0.application_id = var1;
                var1 = var3.afkChannelId;
                var0.afk_channel_id = var1;
                var1 = var3.afkTimeout;
                var0.afk_timeout = var1;
                var1 = var3.systemChannelId;
                var0.system_channel_id = var1;
                var1 = var3.verificationLevel;
                var0.verification_level = var1;
                var1 = var3.explicitContentFilter;
                var0.explicit_content_filter = var1;
                var1 = var3.defaultMessageNotifications;
                var0.default_message_notifications = var1;
                var1 = var3.mfaLevel;
                var0.mfa_level = var1;
                var4 = var3.vanityURLCode;
                var1 = null;
                var5 = var1 != var4;
                var2 = null;
                if (!var5) {
                    _fun17791_ip = 233;
                    continue _fun17791
                }
            case 230:
                var2 = var4;
            case 233:
                var0.vanity_url_code = var2;
                var2 = var3.premiumTier;
                var0.premium_tier = var2;
                var2 = var3.premiumProgressBarEnabled;
                var0.premium_progress_bar_enabled = var2;
                var5 = var3.premiumProgressBarEnabledUserUpdatedAt;
                var2 = var1 == var5;
                var4 = undefined;
                if (var2) {
                    _fun17791_ip = 285;
                    continue _fun17791
                }
            case 275:
                var2 = var5.toISOString;
                var4 = var2.bind(var5)();
            case 285:
                var5 = var1 != var4;
                var2 = null;
                if (!var5) {
                    _fun17791_ip = 297;
                    continue _fun17791
                }
            case 294:
                var2 = var4;
            case 297:
                var0.premium_progress_bar_enabled_user_updated_at = var2;
                var2 = var3.premiumFeatures;
                var4 = var1 != var2;
                var2 = null;
                if (!var4) {
                    _fun17791_ip = 372;
                    continue _fun17791
                }
            case 317:
                var5 = var3.premiumFeatures;
                var4 = {};
                var6 = var5.features;
                var4.features = var6;
                var6 = var5.additionalEmojiSlots;
                var4.additional_emoji_slots = var6;
                var6 = var5.additionalStickerSlots;
                var4.additional_sticker_slots = var6;
                var5 = var5.additionalSoundSlots;
                var4.additional_sound_slots = var5;
                var2 = var4;
            case 372:
                var0.premium_features = var2;
                var2 = var3.systemChannelFlags;
                var0.system_channel_flags = var2;
                var2 = var3.discoverySplash;
                var0.discovery_splash = var2;
                var2 = var3.rulesChannelId;
                var0.rules_channel_id = var2;
                var2 = var3.safetyAlertsChannelId;
                var0.safety_alerts_channel_id = var2;
                var2 = var3.publicUpdatesChannelId;
                var0.public_updates_channel_id = var2;
                var2 = var3.maxStageVideoChannelUsers;
                var0.max_stage_video_channel_users = var2;
                var2 = var3.maxVideoChannelUsers;
                var0.max_video_channel_users = var2;
                var2 = var3.maxMembers;
                var0.max_members = var2;
                var2 = var3.nsfwLevel;
                var0.nsfw_level = var2;
                var2 = _closure1_slot9;
                var4 = var2.AGE_RESTRICTED;
                var5 = new Array(2);
                var5[0] = var4;
                var2 = var2.EXPLICIT;
                var5[1] = var2;
                var4 = var5.includes;
                var2 = var3.nsfwLevel;
                var2 = var4.bind(var5)(var2);
                var0.nsfw = var2;
                var2 = var3.ownerConfiguredContentLevel;
                var0.owner_configured_content_level = var2;
                var2 = var3.hubType;
                var0.hub_type = var2;
                var2 = var3.latestOnboardingQuestionId;
                var0.latest_onboarding_question_id = var2;
                var2 = var3.profile;
                var0.profile = var2;
                var2 = var3.moderatorReporting;
                var4 = var1 != var2;
                var2 = null;
                if (!var4) {
                    _fun17791_ip = 620;
                    continue _fun17791
                }
            case 587:
                var4 = var3.moderatorReporting;
                var3 = {};
                var5 = var4.moderatorReportingEnabled;
                var3.moderator_reporting_enabled = var5;
                var4 = var4.moderatorReportChannelId;
                var3.moderator_report_channel_id = var4;
                var2 = var3;
            case 620:
                var0.moderator_reporting = var2;
                var0.incidents_data = var1;
                return var0;
        }
    };
    var2.toGuildProperties = var4;
    var3 = function arg0() {
        _fun17792: for (var _fun17792_ip = 0;;) switch (_fun17792_ip) {
            case 0:
                var3 = arg0;
                var2 = {};
                var10 = var2;
                var9 = var3;
                var0 = copyDataProperties(var10, var9);
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 3;
                var4 = var4[var1];
                var1 = undefined;
                var6 = var5.bind(var1)(var4);
                var5 = var6.toSetInplace;
                var4 = var3.features;
                var5 = var5.bind(var6)(var4);
                var4 = 'features';
                var2[var4] = var5;
                var5 = var3.joinedAt;
                var4 = null;
                var5 = var4 != var5;
                var6 = null;
                if (!var5) {
                    _fun17792_ip = 117;
                    continue _fun17792
                }
            case 83:
                var5 = global;
                var8 = var5.Date;
                var10 = var3.joinedAt;
                var7 = var8.prototype;
                var7 = Object.create(var7, {
                    constructor: {
                        value: var8
                    }
                });
                var11 = var7;
                var5 = new var11[var8](var10, var9);
                var6 = var5 instanceof Object ? var5 : var7;
            case 117:
                var5 = 'joinedAt';
                var2[var5] = var6;
                var5 = var3.premiumProgressBarEnabledUserUpdatedAt;
                var5 = var4 != var5;
                var4 = null;
                if (!var5) {
                    _fun17792_ip = 175;
                    continue _fun17792
                }
            case 141:
                var5 = global;
                var6 = var5.Date;
                var10 = var3.premiumProgressBarEnabledUserUpdatedAt;
                var5 = var6.prototype;
                var5 = Object.create(var5, {
                    constructor: {
                        value: var6
                    }
                });
                var11 = var5;
                var3 = new var11[var6](var10, var9);
                var4 = var3 instanceof Object ? var3 : var5;
            case 175:
                var3 = 'premiumProgressBarEnabledUserUpdatedAt';
                var2[var3] = var4;
                var3 = delete var2.roles;
                var3 = delete var2.member;
                var0 = _closure1_slot12;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var2.fromSerializedGuildRecord = var3;
    var2.constructFromPartialGuildRecord = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1411, 1416, 660, 1413, 44, 2]);