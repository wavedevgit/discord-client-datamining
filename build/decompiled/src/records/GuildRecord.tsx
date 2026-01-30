// records/GuildRecord.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = require;
    var2 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var8;
    var3 = function(arg0, arg1) { // Original name: isGuildOwner, environment: var1
        _fun16583: for (var _fun16583_ip = 0;;) switch (_fun16583_ip) {
            case 0:
                var2 = arg1;
                var3 = 'string';
                var0 = typeof var2;
                var1 = var2;
                if (!(var3 !== var0)) {
                    _fun16583_ip = 34;
                    continue _fun16583
                }
            case 17:
                var0 = null;
                var3 = var0 != var2;
                if (!var3) {
                    _fun16583_ip = 31;
                    continue _fun16583
                }
            case 26:
                var0 = var2.id;
            case 31:
                var1 = var0;
            case 34:
                var0 = arg0;
                var0 = var0.ownerId;
                var0 = var0 === var1;
                return var0;
        }
    };
    var _closure1_slot7 = var3;
    var10 = global;
    var6 = var10.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var4);
    var11 = 0;
    var4 = var8[var11];
    var0 = undefined;
    var4 = var7.bind(var0)(var4);
    var5 = var4.set;
    var _closure1_slot3 = var5;
    var4 = var4.TypeTag;
    var4 = 1;
    var4 = var8[var4];
    var4 = var7.bind(var0)(var4);
    var13 = var4.BoostedGuildTiers;
    var14 = var4.GuildExplicitContentFilterTypes;
    var12 = var4.GuildNSFWContentLevel;
    var _closure1_slot4 = var12;
    var17 = var4.MFALevels;
    var _closure1_slot5 = var17;
    var16 = var4.UserNotificationSettings;
    var15 = var4.VerificationLevels;
    var6 = var10.Set;
    var5 = var12.EXPLICIT;
    var4 = new Array(2);
    var4[0] = var5;
    var5 = var12.AGE_RESTRICTED;
    var4[1] = var5;
    var5 = var6.prototype;
    var5 = Object.create(var5, {
        constructor: {
            value: var6
        }
    });
    var21 = var5;
    var20 = var4;
    var4 = new var21[var6](var20, var19);
    var5 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot6 = var5;
    var9 = var10.Object;
    var6 = var9.freeze;
    var4 = {
        'mfaLevel': null,
        'preferredLocale': 'en-US',
        'afkTimeout': 0
    };
    var17 = var17.NONE;
    var4.mfaLevel = var17;
    var16 = var16.ALL_MESSAGES;
    var4.defaultMessageNotifications = var16;
    var15 = var15.NONE;
    var4.verificationLevel = var15;
    var14 = var14.DISABLED;
    var4.explicitContentFilter = var14;
    var14 = false;
    var4.premiumProgressBarEnabled = var14;
    var4.systemChannelFlags = var11;
    var14 = -1;
    var4.maxStageVideoChannelUsers = var14;
    var4.maxVideoChannelUsers = var14;
    var4.maxMembers = var14;
    var13 = var13.NONE;
    var4.premiumTier = var13;
    var12 = var12.DEFAULT;
    var4.nsfwLevel = var12;
    var4.premiumSubscriberCount = var11;
    var10 = var10.Set;
    var11 = var10.prototype;
    var11 = Object.create(var11, {
        constructor: {
            value: var10
        }
    });
    var21 = var11;
    var10 = new var21[var10](var20);
    var10 = var10 instanceof Object ? var10 : var11;
    var4.features = var10;
    var10 = null;
    var4.description = var10;
    var4.icon = var10;
    var4.ownerId = var10;
    var4.systemChannelId = var10;
    var4.joinedAt = var10;
    var4.discoverySplash = var10;
    var4.splash = var10;
    var4.banner = var10;
    var4.homeHeader = var10;
    var4.afkChannelId = var10;
    var4.application_id = var10;
    var4.vanityURLCode = var10;
    var4.rulesChannelId = var10;
    var4.safetyAlertsChannelId = var10;
    var4.publicUpdatesChannelId = var10;
    var4.ownerConfiguredContentLevel = var10;
    var4.hubType = var10;
    var4.latestOnboardingQuestionId = var10;
    var4.profile = var10;
    var4.premiumFeatures = var10;
    var4.moderatorReporting = var10;
    var4 = var6.bind(var9)(var4);
    var6 = 6;
    var6 = var8[var6];
    var8 = var7.bind(var0)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'records/GuildRecord.tsx';
    var6 = var7.bind(var8)(var6);
    var6 = 'Guild';
    var2.GuildRecordTypeTag = var6;
    var2.RESTRICTED_CONTENT_LEVELS = var5;
    var2.GUILD_DEFAULT_PROPERTY_VALUES = var4;
    var4 = function(arg0, arg1) { // Original name: getGuildIconURL, environment: var1
        _fun16584: for (var _fun16584_ip = 0;;) switch (_fun16584_ip) {
            case 0:
                var5 = arg0;
                var4 = arguments[2];
                var3 = arguments[3];
                var2 = undefined;
                if (!(var4 === var2)) {
                    _fun16584_ip = 17;
                    continue _fun16584
                }
            case 15:
                var4 = false;
            case 17:
                if (!(var3 === var2)) {
                    _fun16584_ip = 23;
                    continue _fun16584
                }
            case 21:
                var3 = false;
            case 23:
                var1 = _closure1_slot1;
                var6 = _closure1_slot2;
                var0 = 2;
                var0 = var6[var0];
                var2 = var1.bind(var2)(var0);
                var1 = var2.getGuildIconURL;
                var0 = {};
                var6 = var5.id;
                var0.id = var6;
                var6 = arg1;
                var0.size = var6;
                var5 = var5.icon;
                var0.icon = var5;
                var0.canAnimate = var4;
                var0.lossless = var3;
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var2.getGuildIconURL = var4;
    var4 = function(arg0, arg1) { // Original name: getGuildIconSource, environment: var1
        _fun16585: for (var _fun16585_ip = 0;;) switch (_fun16585_ip) {
            case 0:
                var3 = arguments[2];
                var1 = arg0;
                var _closure2_slot0 = var1;
                var1 = arg1;
                var _closure2_slot1 = var1;
                var4 = undefined;
                if (!(var3 === var4)) {
                    _fun16585_ip = 27;
                    continue _fun16585
                }
            case 25:
                var3 = false;
            case 27:
                var2 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 2;
                var1 = var5[var1];
                var2 = var2.bind(var4)(var1);
                var1 = var2.getAnimatableSourceWithFallback;
                var0 = function(arg0) { // Environment: var0
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 2;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.getGuildIconSource;
                    var0 = {};
                    var3 = _closure2_slot0;
                    var5 = var3.id;
                    var0.id = var5;
                    var4 = _closure2_slot1;
                    var0.size = var4;
                    var3 = var3.icon;
                    var0.icon = var3;
                    var3 = arg0;
                    var0.canAnimate = var3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0 = var1.bind(var2)(var3, var0);
                return var0;
        }
    };
    var2.getGuildIconSource = var4;
    var4 = function(arg0) { // Original name: getGuildAcronym, environment: var1
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 3;
        var1 = var1[var0];
        var0 = undefined;
        var2 = var2.bind(var0)(var1);
        var1 = var2.getAcronym;
        var0 = arg0;
        var0 = var0.name;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.getGuildAcronym = var4;
    var2.isGuildOwner = var3;
    var3 = function(arg0, arg1) { // Original name: isGuildOwnerWithRequiredMfaLevel, environment: var1
        _fun16588: for (var _fun16588_ip = 0;;) switch (_fun16588_ip) {
            case 0:
                var4 = arg0;
                var3 = arg1;
                var0 = var3.mfaEnabled;
                var1 = !var0;
                if (!var1) {
                    _fun16588_ip = 41;
                    continue _fun16588
                }
            case 18:
                var2 = var4.mfaLevel;
                var0 = _closure1_slot5;
                var0 = var0.ELEVATED;
                var1 = var2 === var0;
            case 41:
                var0 = !var1;
                if (var1) {
                    _fun16588_ip = 62;
                    continue _fun16588
                }
            case 47:
                var2 = _closure1_slot7;
                var1 = undefined;
                var0 = var2.bind(var1)(var4, var3);
            case 62:
                return var0;
        }
    };
    var2.isGuildOwnerWithRequiredMfaLevel = var3;
    var3 = function(arg0) { // Original name: isGuildLurker, environment: var1
        var0 = arg0;
        var1 = var0.joinedAt;
        var0 = null;
        var0 = var0 == var1;
        return var0;
    };
    var2.isGuildLurker = var3;
    var3 = function(arg0) { // Original name: getGuildEveryoneRoleId, environment: var1
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 4;
        var1 = var1[var0];
        var0 = undefined;
        var2 = var2.bind(var0)(var1);
        var1 = var2.castGuildIdAsEveryoneGuildRoleId;
        var0 = arg0;
        var0 = var0.id;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.getGuildEveryoneRoleId = var3;
    var3 = function(arg0, arg1) { // Original name: updateJoinedAt, environment: var1
        _fun16591: for (var _fun16591_ip = 0;;) switch (_fun16591_ip) {
            case 0:
                var2 = arg1;
                var4 = _closure1_slot3;
                var1 = 'string';
                var0 = typeof var2;
                var3 = var2;
                if (!(var1 === var0)) {
                    _fun16591_ip = 55;
                    continue _fun16591
                }
            case 24:
                var0 = global;
                var0 = var0.Date;
                var1 = var0.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var0
                    }
                });
                var8 = var1;
                var7 = var2;
                var0 = new var8[var0](var7, var6);
                var3 = var0 instanceof Object ? var0 : var1;
            case 55:
                var2 = undefined;
                var1 = arg0;
                var0 = 'joinedAt';
                var0 = var4.bind(var2)(var1, var0, var3);
                return var0;
        }
    };
    var2.updateJoinedAt = var3;
    var1 = function(arg0) { // Original name: isGuildNSFW, environment: var1
        _fun16592: for (var _fun16592_ip = 0;;) switch (_fun16592_ip) {
            case 0:
                var2 = arg0;
                var6 = null;
                var0 = var6 != var2;
                if (!var0) {
                    _fun16592_ip = 107;
                    continue _fun16592
                }
            case 12:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 5;
                var3 = var3[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = var4.isServerNSFWLevelEnabled;
                var1 = 'guild_record';
                var1 = var3.bind(var4)(var1);
                var4 = _closure1_slot6;
                var3 = var4.has;
                if (var1) {
                    _fun16592_ip = 93;
                    continue _fun16592
                }
            case 66:
                var1 = var2.ownerConfiguredContentLevel;
                if (!(var6 == var1)) {
                    _fun16592_ip = 86;
                    continue _fun16592
                }
            case 76:
                var5 = _closure1_slot4;
                var1 = var5.DEFAULT;
            case 86:
                var1 = var3.bind(var4)(var1);
                _fun16592_ip = 104;
                continue _fun16592;
            case 93:
                var2 = var2.nsfwLevel;
                var1 = var3.bind(var4)(var2);
            case 104:
                var0 = var1;
            case 107:
                return var0;
        }
    };
    var2.isGuildNSFW = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1411, 660, 1417, 1607, 21, 1611, 2]);