// modules/guild_settings/GuildSettingsActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var6.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 4;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 5;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot8 = var1;
    var1 = 6;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot9 = var1;
    var1 = 7;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var7 = var1.Endpoints;
    var _closure1_slot10 = var7;
    var7 = var1.Layers;
    var7 = var1.GuildSettingsSubsections;
    var _closure1_slot11 = var7;
    var7 = var1.GuildSettingsSections;
    var _closure1_slot12 = var7;
    var7 = var1.GuildFeatures;
    var _closure1_slot13 = var7;
    var1 = var1.Routes;
    var _closure1_slot14 = var1;
    var1 = 8;
    var1 = var5[var1];
    var7 = var6.bind(var0)(var1);
    var1 = var7.prototype;
    var6 = Object.create(var1, {
        constructor: {
            value: var7
        }
    });
    var11 = 'GuildSettingsActionCreators';
    var12 = var6;
    var1 = new var12[var7](var11, var10);
    var1 = var1 instanceof Object ? var1 : var6;
    var _closure1_slot15 = var1;
    var1 = {};
    var6 = function arg0, arg1, arg2, arg3() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 9;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'GUILD_SETTINGS_INIT';
        var1.type = var4;
        var4 = arg0;
        var1.guildId = var4;
        var4 = arg1;
        var1.section = var4;
        var4 = arg3;
        var1.subsection = var4;
        var4 = arg2;
        var1.location = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.init = var6;
    var6 = function arg0, arg1, arg2, arg3() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = arg1;
        var _closure2_slot1 = var1;
        var1 = arg2;
        var _closure2_slot2 = var1;
        var1 = arg3;
        var _closure2_slot3 = var1;
        var2 = _closure1_slot3;
        var1 = undefined;
        var0 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun65722: for (var _fun65722_ip = 0;;) switch (_fun65722_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun65722_ip = 299;
                            continue _fun65722
                        }
                    case 10:
                        var4 = _closure1_slot8;
                        var3 = var4.getGuild;
                        var2 = _closure2_slot0;
                        var4 = var3.bind(var4)(var2);
                        var3 = null;
                        var2 = var3 != var4;
                        if (!var2) {
                            _fun65722_ip = 69;
                            continue _fun65722
                        }
                    case 43:
                        var7 = var4.features;
                        var6 = var7.has;
                        var4 = _closure1_slot13;
                        var4 = var4.COMMUNITY;
                        var2 = var6.bind(var7)(var4);
                    case 69:
                        if (!var2) {
                            _fun65722_ip = 164;
                            continue _fun65722
                        }
                    case 72:
                        var4 = _closure2_slot1;
                        var2 = _closure1_slot12;
                        var2 = var2.GUILD_AUTOMOD;
                        if (!(var4 === var2)) {
                            _fun65722_ip = 118;
                            continue _fun65722
                        }
                    case 90:
                        var2 = _closure1_slot12;
                        var2 = var2.SAFETY;
                        _closure2_slot1 = var2;
                        var2 = _closure1_slot11;
                        var2 = var2.SAFETY_AUTOMOD;
                        _closure2_slot3 = var2;
                    case 118:
                        var4 = _closure2_slot1;
                        var2 = _closure1_slot12;
                        var2 = var2.MEMBER_VERIFICATION;
                        if (!(var4 === var2)) {
                            _fun65722_ip = 164;
                            continue _fun65722
                        }
                    case 136:
                        var2 = _closure1_slot12;
                        var2 = var2.SAFETY;
                        _closure2_slot1 = var2;
                        var2 = _closure1_slot11;
                        var2 = var2.SAFETY_DM_AND_SPAM_PROTECTION;
                        _closure2_slot3 = var2;
                    case 164:
                        var9 = _closure1_slot16;
                        var8 = var9.init;
                        var13 = _closure2_slot0;
                        var12 = _closure2_slot1;
                        var11 = _closure2_slot2;
                        var10 = _closure2_slot3;
                        var14 = var9;
                        var2 = var14[var8](var13, var12, var11, var10, var9);
                        var2 = _closure2_slot1;
                        if (!(var3 != var2)) {
                            _fun65722_ip = 229;
                            continue _fun65722
                        }
                    case 205:
                        var6 = _closure1_slot16;
                        var4 = var6.setSection;
                        var3 = _closure2_slot1;
                        var2 = _closure2_slot3;
                        var2 = var4.bind(var6)(var3, var2);
                    case 229:
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 9;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var6 = 'GUILD_SETTINGS_OPEN';
                        var2.type = var6;
                        var6 = _closure2_slot0;
                        var2.guildId = var6;
                        var6 = _closure2_slot1;
                        var2.section = var6;
                        var5 = _closure2_slot3;
                        var2.subsection = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    case 299:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        var0 = var0.bind(var1)();
        return var0;
    };
    var1.open = var6;
    var6 = function() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 9;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'GUILD_SETTINGS_CLOSE';
        var1.type = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.close = var6;
    var6 = function arg0() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 9;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'GUILD_SETTINGS_SAVE_ROUTE_STACK';
        var1.type = var4;
        var4 = arg0;
        var1.state = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.saveRouteStack = var6;
    var6 = function arg0, arg1() {
        _fun65725: for (var _fun65725_ip = 0;;) switch (_fun65725_ip) {
            case 0:
                var6 = arg0;
                var1 = arg1;
                var3 = _closure1_slot9;
                var2 = var3.getGuildId;
                var5 = var2.bind(var3)();
                var2 = null;
                if (!(var2 != var5)) {
                    _fun65725_ip = 216;
                    continue _fun65725
                }
            case 32:
                var4 = _closure1_slot8;
                var3 = var4.getGuild;
                var3 = var3.bind(var4)(var5);
                var2 = var2 != var3;
                if (!var2) {
                    _fun65725_ip = 79;
                    continue _fun65725
                }
            case 53:
                var5 = var3.features;
                var4 = var5.has;
                var3 = _closure1_slot13;
                var3 = var3.COMMUNITY;
                var2 = var4.bind(var5)(var3);
            case 79:
                var4 = var6;
                var3 = var1;
                if (!var2) {
                    _fun65725_ip = 165;
                    continue _fun65725
                }
            case 88:
                var2 = _closure1_slot12;
                var5 = var2.GUILD_AUTOMOD;
                var2 = var6;
                if (!(var6 === var5)) {
                    _fun65725_ip = 125;
                    continue _fun65725
                }
            case 105:
                var5 = _closure1_slot12;
                var2 = var5.SAFETY;
                var5 = _closure1_slot11;
                var1 = var5.SAFETY_AUTOMOD;
            case 125:
                var5 = _closure1_slot12;
                var5 = var5.MEMBER_VERIFICATION;
                if (!(var2 === var5)) {
                    _fun65725_ip = 159;
                    continue _fun65725
                }
            case 139:
                var5 = _closure1_slot12;
                var2 = var5.SAFETY;
                var5 = _closure1_slot11;
                var1 = var5.SAFETY_DM_AND_SPAM_PROTECTION;
            case 159:
                var4 = var2;
                var3 = var1;
            case 165:
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 9;
                var1 = var1[var0];
                var0 = undefined;
                var2 = var2.bind(var0)(var1);
                var1 = var2.dispatch;
                var0 = {};
                var5 = 'GUILD_SETTINGS_SET_SECTION';
                var0.type = var5;
                var0.section = var4;
                var0.subsection = var3;
                var0 = var1.bind(var2)(var0);
            case 216:
                var0 = undefined;
                return var0;
        }
    };
    var1.setSection = var6;
    var6 = function arg0() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 9;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'GUILD_SETTINGS_SET_SEARCH_QUERY';
        var1.type = var4;
        var4 = arg0;
        var1.searchQuery = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.setSearchQuery = var6;
    var6 = function arg0, arg1() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 9;
        var1 = var1[var0];
        var0 = undefined;
        var2 = var2.bind(var0)(var1);
        var1 = var2.dispatch;
        var0 = {};
        var3 = 'GUILD_SETTINGS_ROLE_SELECT';
        var0.type = var3;
        var3 = arg0;
        var0.roleId = var3;
        var3 = arg1;
        var0.searchQuery = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.selectRole = var6;
    var6 = function arg0, arg1, arg2() {
        var6 = arg0;
        var _closure2_slot0 = var6;
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 10;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var3 = var1.HTTP;
        var2 = var3.patch;
        var1 = {};
        var5 = _closure1_slot10;
        var4 = var5.GUILD_WIDGET;
        var4 = var4.bind(var5)(var6);
        var1.url = var4;
        var4 = {};
        var5 = arg1;
        var4.enabled = var5;
        var5 = arg2;
        var4.channel_id = var5;
        var1.body = var4;
        var4 = true;
        var1.oldFormErrors = var4;
        var1.rejectWithError = var4;
        var2 = var2.bind(var3)(var1);
        var1 = var2.then;
        var0 = function(arg0) { // Environment: var0
            var4 = arg0;
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 9;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.dispatch;
            var1 = {};
            var5 = 'GUILD_SETTINGS_SET_WIDGET';
            var1.type = var5;
            var5 = _closure2_slot0;
            var1.guildId = var5;
            var5 = var4.body;
            var5 = var5.enabled;
            var1.enabled = var5;
            var4 = var4.body;
            var4 = var4.channel_id;
            var1.channelId = var4;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.updateEmbed = var6;
    var6 = function arg0() {
        var0 = arg0;
        var6 = var0.guildId;
        var4 = var0.level;
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 10;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var2 = var0.HTTP;
        var1 = var2.post;
        var0 = {};
        var5 = _closure1_slot10;
        var3 = var5.GUILD_MFA;
        var3 = var3.bind(var5)(var6);
        var0.url = var3;
        var3 = {};
        var3.level = var4;
        var0.body = var3;
        var3 = true;
        var0.oldFormErrors = var3;
        var3 = false;
        var0.rejectWithError = var3;
        var2 = var1.bind(var2)(var0);
        var1 = var2.then;
        var0 = function(arg0) { // Environment: var0
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 9;
            var1 = var1[var0];
            var0 = undefined;
            var2 = var2.bind(var0)(var1);
            var1 = var2.dispatch;
            var0 = {};
            var3 = 'GUILD_SETTINGS_SET_MFA_SUCCESS';
            var0.type = var3;
            var3 = arg0;
            var3 = var3.body;
            var3 = var3.level;
            var0.level = var3;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.updateMFALevel = var6;
    var6 = function arg0, arg1() {
        var8 = arg0;
        var6 = arg1;
        var _closure2_slot0 = var8;
        var _closure2_slot1 = var6;
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var0 = 10;
        var2 = var2[var0];
        var0 = undefined;
        var2 = var3.bind(var0)(var2);
        var4 = var2.HTTP;
        var3 = var4.patch;
        var2 = {};
        var7 = _closure1_slot10;
        var5 = var7.GUILD;
        var5 = var5.bind(var7)(var8);
        var2.url = var5;
        var5 = {};
        var5.icon = var6;
        var2.body = var5;
        var5 = true;
        var2.oldFormErrors = var5;
        var5 = false;
        var2.rejectWithError = var5;
        var4 = var3.bind(var4)(var2);
        var3 = var4.then;
        var2 = function() { // Environment: var1
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var0 = 9;
            var1 = var4[var0];
            var0 = undefined;
            var6 = var3.bind(var0)(var1);
            var5 = var6.dispatch;
            var2 = {};
            var1 = 'GUILD_SETTINGS_UPDATE';
            var2.type = var1;
            var7 = _closure2_slot1;
            var2.icon = var7;
            var2 = var5.bind(var6)(var2);
            var2 = 11;
            var2 = var4[var2];
            var3 = var3.bind(var0)(var2);
            var2 = var3.checkGuildTemplateDirty;
            var1 = _closure2_slot0;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var1 = function(arg0) { // Environment: var1
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 9;
            var1 = var1[var0];
            var0 = undefined;
            var2 = var2.bind(var0)(var1);
            var1 = var2.dispatch;
            var0 = {};
            var3 = 'GUILD_SETTINGS_SUBMIT_FAILURE';
            var0.type = var3;
            var3 = arg0;
            var3 = var3.body;
            var0.errors = var3;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var1.updateIcon = var6;
    var6 = function arg0() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 9;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'GUILD_SETTINGS_CANCEL_CHANGES';
        var1.type = var4;
        var4 = arg0;
        var1.guildId = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.cancelChanges = var6;
    var6 = function arg0() {
        _fun65736: for (var _fun65736_ip = 0;;) switch (_fun65736_ip) {
            case 0:
                var5 = arg0;
                var1 = var5.safetyAlertsChannelId;
                var2 = var5.profile;
                var3 = null;
                var4 = Object.create(var3);
                var0 = 0;
                var4.safetyAlertsChannelId = var0;
                var4.profile = var0;
                var9 = {};
                var8 = var5;
                var7 = var4;
                var8 = copyDataProperties(var9, var8, var7);
                var4 = {};
                var9 = var4;
                var0 = copyDataProperties(var9, var8);
                if (!(var3 != var2)) {
                    _fun65736_ip = 97;
                    continue _fun65736
                }
            case 57:
                var0 = {};
                var5 = var4.profile;
                if (!(var3 == var5)) {
                    _fun65736_ip = 71;
                    continue _fun65736
                }
            case 69:
                var5 = {};
            case 71:
                var9 = var0;
                var8 = var5;
                var5 = copyDataProperties(var9, var8);
                var9 = var0;
                var8 = var2;
                var2 = copyDataProperties(var9, var8);
                var4.profile = var0;
            case 97:
                var5 = _closure1_slot9;
                var2 = var5.getGuildId;
                var2 = var2.bind(var5)();
                var2 = var3 != var2;
                if (!var2) {
                    _fun65736_ip = 125;
                    continue _fun65736
                }
            case 121:
                var2 = var3 != var1;
            case 125:
                if (!var2) {
                    _fun65736_ip = 134;
                    continue _fun65736
                }
            case 128:
                var4.safetyAlertsChannelId = var1;
            case 134:
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 9;
                var1 = var1[var0];
                var0 = undefined;
                var3 = var2.bind(var0)(var1);
                var2 = var3.dispatch;
                var1 = {};
                var5 = 'GUILD_SETTINGS_UPDATE';
                var1.type = var5;
                var9 = var1;
                var8 = var4;
                var4 = copyDataProperties(var9, var8);
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var1.updateGuild = var6;
    var6 = function arg0, arg1() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 9;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'GUILD_SETTINGS_PROFILE_UPDATE';
        var1.type = var4;
        var4 = arg0;
        var1.guildId = var4;
        var5 = arg1;
        var6 = var1;
        var4 = copyDataProperties(var6, var5);
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.updateGuildProfile = var6;
    var6 = function arg0, arg1() {
        _fun65738: for (var _fun65738_ip = 0;;) switch (_fun65738_ip) {
            case 0:
                var8 = arg0;
                var2 = arg1;
                var6 = arguments[2];
                var _closure2_slot0 = var8;
                var27 = var2.name;
                var26 = var2.description;
                var25 = var2.icon;
                var24 = var2.splash;
                var23 = var2.banner;
                var22 = var2.homeHeader;
                var19 = var2.afkChannelId;
                var18 = var2.afkTimeout;
                var17 = var2.systemChannelId;
                var16 = var2.verificationLevel;
                var15 = var2.defaultMessageNotifications;
                var14 = var2.explicitContentFilter;
                var21 = var2.features;
                var13 = var2.systemChannelFlags;
                var20 = var2.preferredLocale;
                var12 = var2.rulesChannelId;
                var1 = var2.safetyAlertsChannelId;
                var11 = var2.ownerConfiguredContentLevel;
                var7 = var2.discoverySplash;
                var5 = var2.publicUpdatesChannelId;
                var10 = var2.premiumProgressBarEnabled;
                var9 = var2.profile;
                var2 = var2.moderatorReportingEnabled;
                var3 = undefined;
                if (!(var6 === var3)) {
                    _fun65738_ip = 158;
                    continue _fun65738
                }
            case 156:
                var6 = {};
            case 158:
                var _closure2_slot1 = var6;
                var4 = {};
                var4.name = var27;
                var4.description = var26;
                var4.icon = var25;
                var4.splash = var24;
                var4.banner = var23;
                var4.home_header = var22;
                var4.features = var21;
                var4.preferred_locale = var20;
                var4.afk_channel_id = var19;
                var4.afk_timeout = var18;
                var4.system_channel_id = var17;
                var4.verification_level = var16;
                var4.default_message_notifications = var15;
                var4.explicit_content_filter = var14;
                var4.system_channel_flags = var13;
                var4.rules_channel_id = var12;
                var4.owner_configured_content_level = var11;
                var4.discovery_splash = var7;
                var4.public_updates_channel_id = var5;
                var4.safety_alerts_channel_id = var1;
                var1 = null;
                var7 = var1 != var10;
                var5 = null;
                if (!var7) {
                    _fun65738_ip = 282;
                    continue _fun65738
                }
            case 272:
                var7 = {};
                var7.premium_progress_bar_enabled = var10;
                var5 = var7;
            case 282:
                var29 = var4;
                var28 = var5;
                var5 = copyDataProperties(var29, var28);
                var5 = var9;
                if (!(var1 != var5)) {
                    _fun65738_ip = 333;
                    continue _fun65738
                }
            case 299:
                var7 = _closure1_slot0;
                var10 = _closure1_slot2;
                var1 = 12;
                var1 = var10[var1];
                var7 = var7.bind(var3)(var1);
                var1 = var7.toServerGuildProfile;
                var5 = var1.bind(var7)(var9);
            case 333:
                var1 = 'profile';
                var4[var1] = var5;
                var1 = 'moderator_reporting_enabled';
                var4[var1] = var2;
                var2 = _closure1_slot1;
                var7 = _closure1_slot2;
                var1 = 9;
                var1 = var7[var1];
                var9 = var2.bind(var3)(var1);
                var2 = var9.dispatch;
                var1 = {};
                var10 = 'GUILD_SETTINGS_SUBMIT';
                var1.type = var10;
                var1 = var2.bind(var9)(var1);
                var2 = _closure1_slot0;
                var1 = 10;
                var1 = var7[var1];
                var1 = var2.bind(var3)(var1);
                var3 = var1.HTTP;
                var2 = var3.patch;
                var1 = {};
                var7 = _closure1_slot10;
                var5 = var7.GUILD;
                var5 = var5.bind(var7)(var8);
                var1.url = var5;
                var5 = {};
                var6 = var6.isForDiscovery;
                var5.for_discovery = var6;
                var1.query = var5;
                var1.body = var4;
                var4 = true;
                var1.oldFormErrors = var4;
                var4 = false;
                var1.rejectWithError = var4;
                var3 = var2.bind(var3)(var1);
                var2 = var3.then;
                var1 = function(arg0) { // Environment: var0
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var0 = 9;
                    var1 = var3[var0];
                    var0 = undefined;
                    var5 = var2.bind(var0)(var1);
                    var4 = var5.dispatch;
                    var1 = {};
                    var6 = 'GUILD_SETTINGS_SUBMIT_SUCCESS';
                    var1.type = var6;
                    var6 = arg0;
                    var6 = var6.body;
                    var1.guild = var6;
                    var1 = var4.bind(var5)(var1);
                    var1 = 11;
                    var1 = var3[var1];
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.checkGuildTemplateDirty;
                    var1 = _closure2_slot0;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var0 = function(arg0) { // Environment: var0
                    _fun65740: for (var _fun65740_ip = 0;;) switch (_fun65740_ip) {
                        case 0:
                            var0 = arg0;
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var1 = 9;
                            var3 = var3[var1];
                            var1 = undefined;
                            var5 = var4.bind(var1)(var3);
                            var4 = var5.dispatch;
                            var3 = {};
                            var6 = 'GUILD_SETTINGS_SUBMIT_FAILURE';
                            var3.type = var6;
                            var6 = var0.body;
                            var3.errors = var6;
                            var3 = var4.bind(var5)(var3);
                            var5 = _closure1_slot15;
                            var4 = var5.error;
                            var3 = {};
                            var2 = var0.body;
                            var3.errors = var2;
                            var2 = 'Failed to save guild settings';
                            var2 = var4.bind(var5)(var2, var3);
                            var2 = _closure2_slot1;
                            var2 = var2.throwErr;
                            if (var2) {
                                _fun65740_ip = 111;
                                continue _fun65740
                            }
                        case 109:
                            return var1;
                        case 111:
                            var0 = var0.body;
                            throw var0;
                    }
                };
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1.saveGuild = var6;
    var6 = function arg0, arg1() {
        var7 = arg0;
        var5 = arg1;
        var _closure2_slot0 = var7;
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 10;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var3 = var1.HTTP;
        var2 = var3.patch;
        var1 = {};
        var6 = _closure1_slot10;
        var4 = var6.GUILD;
        var4 = var4.bind(var6)(var7);
        var1.url = var4;
        var4 = {};
        var6 = var5.verificationLevel;
        var4.verification_level = var6;
        var5 = var5.explicitContentFilter;
        var4.explicit_content_filter = var5;
        var1.body = var4;
        var4 = true;
        var1.oldFormErrors = var4;
        var4 = false;
        var1.rejectWithError = var4;
        var2 = var2.bind(var3)(var1);
        var1 = var2.then;
        var0 = function(arg0) { // Environment: var0
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 11;
            var1 = var1[var0];
            var0 = undefined;
            var2 = var2.bind(var0)(var1);
            var1 = var2.checkGuildTemplateDirty;
            var0 = _closure2_slot0;
            var0 = var1.bind(var2)(var0);
            var0 = arg0;
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.updateGuildModeration = var6;
    var6 = function arg0, arg1() {
        _fun65743: for (var _fun65743_ip = 0;;) switch (_fun65743_ip) {
            case 0:
                var6 = arg0;
                var5 = arguments[2];
                var7 = arguments[3];
                var8 = undefined;
                if (!(var5 === var8)) {
                    _fun65743_ip = 17;
                    continue _fun65743
                }
            case 15:
                var5 = null;
            case 17:
                if (!(var7 === var8)) {
                    _fun65743_ip = 23;
                    continue _fun65743
                }
            case 21:
                var7 = null;
            case 23:
                var1 = _closure1_slot1;
                var9 = _closure1_slot2;
                var0 = 13;
                var0 = var9[var0];
                var2 = var1.bind(var8)(var0);
                var1 = var2.patch;
                var0 = {};
                var10 = _closure1_slot10;
                var3 = var10.GUILD;
                var3 = var3.bind(var10)(var6);
                var0.url = var3;
                var3 = {};
                var10 = arg1;
                var3.owner_id = var10;
                var3.code = var7;
                var0.body = var3;
                var3 = true;
                var0.oldFormErrors = var3;
                var3 = {};
                var7 = _closure1_slot0;
                var4 = 14;
                var4 = var9[var4];
                var4 = var7.bind(var8)(var4);
                var4 = var4.NetworkActionNames;
                var4 = var4.GUILD_TRANSFER_OWNERSHIP;
                var3.event = var4;
                var4 = {};
                var4.guild_id = var6;
                var4.verification_type = var5;
                var3.properties = var4;
                var0.trackedActionData = var3;
                var3 = false;
                var0.rejectWithError = var3;
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var1.transferOwnership = var6;
    var6 = function arg0() {
        _fun65744: for (var _fun65744_ip = 0;;) switch (_fun65744_ip) {
            case 0:
                var6 = arg0;
                var5 = arguments[1];
                var8 = undefined;
                if (!(var5 === var8)) {
                    _fun65744_ip = 14;
                    continue _fun65744
                }
            case 12:
                var5 = false;
            case 14:
                var1 = _closure1_slot1;
                var9 = _closure1_slot2;
                var0 = 13;
                var0 = var9[var0];
                var2 = var1.bind(var8)(var0);
                var1 = var2.put;
                var0 = {};
                var7 = _closure1_slot10;
                var3 = var7.GUILD_PINCODE;
                var3 = var3.bind(var7)(var6);
                var0.url = var3;
                var3 = true;
                var0.oldFormErrors = var3;
                var3 = {};
                var7 = _closure1_slot0;
                var4 = 14;
                var4 = var9[var4];
                var4 = var7.bind(var8)(var4);
                var4 = var4.NetworkActionNames;
                var4 = var4.GUILD_TRANSFER_OWNERSHIP_SEND_CODE;
                var3.event = var4;
                var4 = {};
                var4.guild_id = var6;
                var4.is_resend = var5;
                var3.properties = var4;
                var0.trackedActionData = var3;
                var3 = false;
                var0.rejectWithError = var3;
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var1.sendTransferOwnershipPincode = var6;
    var6 = function arg0() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 10;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var2 = var0.HTTP;
        var1 = var2.post;
        var0 = {
            'url': null,
            'oldFormErrors': true,
            'rejectWithError': false
        };
        var5 = _closure1_slot10;
        var4 = var5.GUILD_DELETE;
        var3 = arg0;
        var3 = var4.bind(var5)(var3);
        var0.url = var3;
        var2 = var1.bind(var2)(var0);
        var1 = var2.then;
        var0 = function() { // Environment: var0
            var1 = _closure1_slot16;
            var0 = var1.close;
            var0 = var0.bind(var1)();
            var0 = undefined;
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.deleteGuild = var6;
    var6 = function arg0() {
        _fun65747: for (var _fun65747_ip = 0;;) switch (_fun65747_ip) {
            case 0:
                var2 = arguments[1];
                var1 = arg0;
                var _closure2_slot0 = var1;
                var1 = undefined;
                if (!(var2 === var1)) {
                    _fun65747_ip = 20;
                    continue _fun65747
                }
            case 18:
                var2 = false;
            case 20:
                var _closure2_slot1 = var2;
                var2 = _closure1_slot3;
                var0 = function*() { // Environment: var0
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun65749: for (var _fun65749_ip = 0;;) switch (_fun65749_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun65749_ip = 246;
                                    continue _fun65749
                                }
                            case 10:
                                var2 = _closure1_slot5;
                                var1 = var2.isLurking;
                                var10 = _closure2_slot0;
                                var5 = var1.bind(var2)(var10);
                                var6 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var1 = 10;
                                var1 = var2[var1];
                                var2 = undefined;
                                var1 = var6.bind(var2)(var1);
                                var7 = var1.HTTP;
                                var6 = var7.del;
                                var1 = {};
                                var9 = _closure1_slot10;
                                var8 = var9.GUILD_LEAVE;
                                var8 = var8.bind(var9)(var10);
                                var1.url = var8;
                                var8 = {};
                                var9 = var5;
                                if (var5) {
                                    _fun65749_ip = 116;
                                    continue _fun65749
                                }
                            case 97:
                                var12 = _closure1_slot7;
                                var11 = var12.isCurrentUserGuest;
                                var10 = _closure2_slot0;
                                var9 = var11.bind(var12)(var10);
                            case 116:
                                var8.lurking = var9;
                                var1.body = var8;
                                var8 = true;
                                var1.oldFormErrors = var8;
                                var8 = false;
                                var1.rejectWithError = var8;
                                var7 = var6.bind(var7)(var1);
                                var6 = var7.then;
                                var1 = function() { // Environment: var1
                                    var6 = _closure1_slot0;
                                    var7 = _closure1_slot2;
                                    var0 = 15;
                                    var1 = var7[var0];
                                    var0 = undefined;
                                    var1 = var6.bind(var0)(var1);
                                    var3 = var1.AccessibilityAnnouncer;
                                    var2 = var3.announce;
                                    var1 = 16;
                                    var4 = var7[var1];
                                    var4 = var6.bind(var0)(var4);
                                    var5 = var4.intl;
                                    var4 = var5.string;
                                    var1 = var7[var1];
                                    var1 = var6.bind(var0)(var1);
                                    var1 = var1.t;
                                    var1 = var1["7iPyVW"];
                                    var1 = var4.bind(var5)(var1);
                                    var1 = var2.bind(var3)(var1);
                                    return var0;
                                };
                                var1 = var6.bind(var7)(var1);
                                SaveGenerator(address = 166);
                            case 164:
                                return var1;
                            case 166:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 6);
                                if (var6) {
                                    _fun65749_ip = 243;
                                    continue _fun65749
                                }
                            case 172:
                                var7 = _closure1_slot16;
                                var6 = var7.close;
                                var6 = var6.bind(var7)();
                                var4 = _closure2_slot1;
                                if (!var4) {
                                    _fun65749_ip = 196;
                                    continue _fun65749
                                }
                            case 193:
                                var4 = var5;
                            case 196:
                                if (!var4) {
                                    _fun65749_ip = 240;
                                    continue _fun65749
                                }
                            case 199:
                                var5 = _closure1_slot0;
                                var6 = _closure1_slot2;
                                var4 = 17;
                                var4 = var6[var4];
                                var5 = var5.bind(var2)(var4);
                                var4 = var5.transitionTo;
                                var3 = _closure1_slot14;
                                var3 = var3.GUILD_DISCOVERY;
                                var3 = var4.bind(var5)(var3);
                            case 240:
                                return var2;
                            case 243:
                                return var1;
                            case 246:
                                return var0;
                        }
                    };
                    return var0;
                };
                var0 = var2.bind(var1)(var0);
                var0 = var0.bind(var1)();
                return var0;
        }
    };
    var1.leaveGuild = var6;
    var6 = function arg0, arg1, arg2, arg3, arg4() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = arg1;
        var _closure2_slot1 = var1;
        var1 = arg2;
        var _closure2_slot2 = var1;
        var1 = arg3;
        var _closure2_slot3 = var1;
        var1 = arg4;
        var _closure2_slot4 = var1;
        var2 = _closure1_slot3;
        var1 = undefined;
        var0 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun65753: for (var _fun65753_ip = 0;;) switch (_fun65753_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun65753_ip = 265;
                            continue _fun65753
                        }
                    case 12:
                        var6 = _closure1_slot4;
                        var5 = var6.isFullServerPreview;
                        var3 = _closure2_slot0;
                        var3 = var5.bind(var6)(var3);
                        if (!var3) {
                            _fun65753_ip = 65;
                            continue _fun65753
                        }
                    case 40:
                        var5 = _closure2_slot1;
                        var6 = _closure1_slot6;
                        var3 = var6.getId;
                        var3 = var3.bind(var6)();
                        if (!(var5 !== var3)) {
                            _fun65753_ip = 218;
                            continue _fun65753
                        }
                    case 65:
                        var6 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var3 = 10;
                        var5 = var5[var3];
                        var3 = undefined;
                        var3 = var6.bind(var3)(var5);
                        var6 = var3.HTTP;
                        var5 = var6.patch;
                        var3 = {};
                        var10 = _closure1_slot10;
                        var9 = var10.GUILD_MEMBER;
                        var8 = _closure2_slot0;
                        var7 = _closure2_slot1;
                        var7 = var9.bind(var10)(var8, var7);
                        var3.url = var7;
                        var7 = {};
                        var8 = _closure2_slot2;
                        var7.roles = var8;
                        var3.body = var7;
                        var7 = true;
                        var3.oldFormErrors = var7;
                        var7 = false;
                        var3.rejectWithError = var7;
                        var3 = var5.bind(var6)(var3);
                        SaveGenerator(address = 165);
                    case 163:
                        return var3;
                    case 165:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 5);
                        if (var5) {
                            _fun65753_ip = 215;
                            continue _fun65753
                        }
                    case 171:
                        var7 = _closure2_slot3;
                        var6 = var7.forEach;
                        var5 = function(arg0) { // Environment: var4
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 9;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.dispatch;
                            var0 = {};
                            var3 = 'GUILD_ROLE_MEMBER_ADD';
                            var0.type = var3;
                            var4 = _closure2_slot0;
                            var0.guildId = var4;
                            var4 = arg0;
                            var0.roleId = var4;
                            var3 = _closure2_slot1;
                            var0.userId = var3;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        };
                        var5 = var6.bind(var7)(var5);
                        var6 = _closure2_slot4;
                        var5 = var6.forEach;
                        var4 = function(arg0) { // Environment: var4
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 9;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.dispatch;
                            var0 = {};
                            var3 = 'GUILD_ROLE_MEMBER_REMOVE';
                            var0.type = var3;
                            var4 = _closure2_slot0;
                            var0.guildId = var4;
                            var4 = arg0;
                            var0.roleId = var4;
                            var3 = _closure2_slot1;
                            var0.userId = var3;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        };
                        var4 = var5.bind(var6)(var4);
                        _fun65753_ip = 260;
                        continue _fun65753;
                    case 215:
                        return var3;
                    case 218:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var2 = 18;
                        var3 = var3[var2];
                        var2 = undefined;
                        var4 = var4.bind(var2)(var3);
                        var3 = var4.updateImpersonatedRoles;
                        var2 = _closure2_slot0;
                        var1 = _closure2_slot2;
                        var1 = var3.bind(var4)(var2, var1);
                    case 260:
                        var1 = undefined;
                        return var1;
                    case 265:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        var0 = var0.bind(var1)();
        return var0;
    };
    var1.updateMemberRoles = var6;
    var6 = function arg0, arg1, arg2() {
        var7 = arg0;
        var6 = arg1;
        var _closure2_slot0 = var7;
        var _closure2_slot1 = var6;
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 10;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var3 = var1.HTTP;
        var2 = var3.patch;
        var1 = {};
        var5 = _closure1_slot10;
        var4 = var5.GUILD_ROLE_MEMBERS;
        var4 = var4.bind(var5)(var7, var6);
        var1.url = var4;
        var4 = {};
        var5 = arg2;
        var4.member_ids = var5;
        var1.body = var4;
        var4 = false;
        var1.rejectWithError = var4;
        var2 = var2.bind(var3)(var1);
        var1 = var2.then;
        var0 = function(arg0) { // Environment: var0
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 9;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.dispatch;
            var1 = {};
            var4 = 'GUILD_ROLE_MEMBER_BULK_ADD';
            var1.type = var4;
            var5 = _closure2_slot0;
            var1.guildId = var5;
            var4 = _closure2_slot1;
            var1.roleId = var4;
            var4 = arg0;
            var4 = var4.body;
            var1.added = var4;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.bulkAddMemberRoles = var6;
    var6 = function arg0, arg1, arg2() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 10;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var2 = var0.HTTP;
        var1 = var2.post;
        var0 = {};
        var5 = _closure1_slot10;
        var4 = var5.GUILD_INTEGRATIONS;
        var3 = arg0;
        var3 = var4.bind(var5)(var3);
        var0.url = var3;
        var3 = {};
        var4 = arg1;
        var3.type = var4;
        var4 = arg2;
        var3.id = var4;
        var0.body = var3;
        var3 = true;
        var0.oldFormErrors = var3;
        var3 = false;
        var0.rejectWithError = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.enableIntegration = var6;
    var6 = function arg0, arg1() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 10;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var2 = var0.HTTP;
        var1 = var2.del;
        var0 = {
            'url': null,
            'oldFormErrors': true,
            'rejectWithError': false
        };
        var6 = _closure1_slot10;
        var5 = var6.GUILD_INTEGRATION;
        var4 = arg0;
        var3 = arg1;
        var3 = var5.bind(var6)(var4, var3);
        var0.url = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.disableIntegration = var6;
    var6 = function arg0, arg1, arg2, arg3, arg4() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 10;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var2 = var0.HTTP;
        var1 = var2.patch;
        var0 = {};
        var6 = _closure1_slot10;
        var5 = var6.GUILD_INTEGRATION;
        var4 = arg0;
        var3 = arg1;
        var3 = var5.bind(var6)(var4, var3);
        var0.url = var3;
        var3 = {};
        var4 = arg2;
        var3.expire_behavior = var4;
        var4 = arg3;
        var3.expire_grace_period = var4;
        var4 = arg4;
        var3.enable_emoticons = var4;
        var0.body = var3;
        var3 = true;
        var0.oldFormErrors = var3;
        var3 = false;
        var0.rejectWithError = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.updateIntegration = var6;
    var6 = function arg0, arg1() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 10;
        var1 = var1[var0];
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        var3 = var1.HTTP;
        var2 = var3.post;
        var1 = {
            'url': null,
            'oldFormErrors': true,
            'rejectWithError': false
        };
        var7 = _closure1_slot10;
        var6 = var7.GUILD_INTEGRATION_SYNC;
        var5 = arg0;
        var4 = arg1;
        var4 = var6.bind(var7)(var5, var4);
        var1.url = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.syncIntegration = var6;
    var6 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var2 = _closure1_slot3;
        var1 = undefined;
        var0 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun65764: for (var _fun65764_ip = 0;;) switch (_fun65764_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun65764_ip = 117;
                            continue _fun65764
                        }
                    case 7:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 10;
                        var1 = var2[var1];
                        var2 = undefined;
                        var1 = var3.bind(var2)(var1);
                        var4 = var1.HTTP;
                        var3 = var4.post;
                        var1 = {};
                        var7 = _closure1_slot10;
                        var6 = var7.GUILD_MIGRATE_PIN_PERMISSION;
                        var5 = _closure2_slot0;
                        var5 = var6.bind(var7)(var5);
                        var1.url = var5;
                        var5 = true;
                        var1.rejectWithError = var5;
                        var4 = var3.bind(var4)(var1);
                        var3 = var4.then;
                        var1 = function() { // Environment: var1
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 9;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.dispatch;
                            var0 = {};
                            var3 = 'GUILD_SETTINGS_PIN_PERMISSION_MIGRATED';
                            var0.type = var3;
                            var3 = _closure2_slot0;
                            var0.guildId = var3;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        };
                        var1 = var3.bind(var4)(var1);
                        SaveGenerator(address = 105);
                    case 103:
                        return var1;
                    case 105:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun65764_ip = 114;
                            continue _fun65764
                        }
                    case 111:
                        return var2;
                    case 114:
                        return var1;
                    case 117:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        var0 = var0.bind(var1)();
        return var0;
    };
    var1.migratePinPermission = var6;
    var6 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var2 = _closure1_slot3;
        var1 = undefined;
        var0 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun65768: for (var _fun65768_ip = 0;;) switch (_fun65768_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun65768_ip = 117;
                            continue _fun65768
                        }
                    case 7:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 10;
                        var1 = var2[var1];
                        var2 = undefined;
                        var1 = var3.bind(var2)(var1);
                        var4 = var1.HTTP;
                        var3 = var4.post;
                        var1 = {};
                        var7 = _closure1_slot10;
                        var6 = var7.GUILD_MIGRATE_SLOWMODE_PERMISSION;
                        var5 = _closure2_slot0;
                        var5 = var6.bind(var7)(var5);
                        var1.url = var5;
                        var5 = true;
                        var1.rejectWithError = var5;
                        var4 = var3.bind(var4)(var1);
                        var3 = var4.then;
                        var1 = function() { // Environment: var1
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 9;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.dispatch;
                            var0 = {};
                            var3 = 'GUILD_SETTINGS_SLOWMODE_PERMISSION_MIGRATED';
                            var0.type = var3;
                            var3 = _closure2_slot0;
                            var0.guildId = var3;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        };
                        var1 = var3.bind(var4)(var1);
                        SaveGenerator(address = 105);
                    case 103:
                        return var1;
                    case 105:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun65768_ip = 114;
                            continue _fun65768
                        }
                    case 111:
                        return var2;
                    case 114:
                        return var1;
                    case 117:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        var0 = var0.bind(var1)();
        return var0;
    };
    var1.migrateSlowmodePermission = var6;
    var6 = function arg0, arg1() {
        var1 = arg1;
        var2 = arg0;
        var _closure2_slot0 = var2;
        var2 = var1.migratePin;
        var _closure2_slot1 = var2;
        var1 = var1.migrateSlowmode;
        var _closure2_slot2 = var1;
        var2 = _closure1_slot3;
        var1 = undefined;
        var0 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun65772: for (var _fun65772_ip = 0;;) switch (_fun65772_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun65772_ip = 99;
                            continue _fun65772
                        }
                    case 7:
                        var1 = _closure2_slot1;
                        if (!var1) {
                            _fun65772_ip = 49;
                            continue _fun65772
                        }
                    case 17:
                        var4 = _closure1_slot16;
                        var3 = var4.migratePinPermission;
                        var1 = _closure2_slot0;
                        var1 = var3.bind(var4)(var1);
                        SaveGenerator(address = 43);
                    case 41:
                        return var1;
                    case 43:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun65772_ip = 96;
                            continue _fun65772
                        }
                    case 49:
                        var3 = _closure2_slot2;
                        if (!var3) {
                            _fun65772_ip = 88;
                            continue _fun65772
                        }
                    case 56:
                        var4 = _closure1_slot16;
                        var3 = var4.migrateSlowmodePermission;
                        var2 = _closure2_slot0;
                        var2 = var3.bind(var4)(var2);
                        SaveGenerator(address = 82);
                    case 80:
                        return var2;
                    case 82:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                        if (var3) {
                            _fun65772_ip = 93;
                            continue _fun65772
                        }
                    case 88:
                        var3 = undefined;
                        return var3;
                    case 93:
                        return var2;
                    case 96:
                        return var1;
                    case 99:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        var0 = var0.bind(var1)();
        return var0;
    };
    var1.migratePermissions = var6;
    var _closure1_slot16 = var1;
    var3 = 19;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_settings/GuildSettingsActionCreators.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 1664, 3053, 1216, 1672, 1410, 8117, 660, 3, 806, 507, 6451, 8122, 4491, 481, 3168, 1234, 1220, 4657, 2]);