// modules/guild_settings/GuildSettingsStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var0 = function() {
        _fun65954: for (var _fun65954_ip = 0;;) switch (_fun65954_ip) {
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
                _fun65954_ip = 76;
                continue _fun65954;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot60 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot60 = var0;
    var0 = function arg0() {
        _fun65957: for (var _fun65957_ip = 0;;) switch (_fun65957_ip) {
            case 0:
                var4 = arg0;
                var1 = _closure1_slot29;
                var0 = null;
                if (!(var0 != var1)) {
                    _fun65957_ip = 90;
                    continue _fun65957
                }
            case 16:
                var1 = _closure1_slot28;
                if (!(var0 != var1)) {
                    _fun65957_ip = 90;
                    continue _fun65957
                }
            case 24:
                var1 = _closure1_slot28;
                var1 = var1.id;
                if (!(var1 === var4)) {
                    _fun65957_ip = 90;
                    continue _fun65957
                }
            case 37:
                var3 = _closure1_slot14;
                var1 = var3.getGuild;
                var1 = var1.bind(var3)(var4);
                var0 = var0 != var1;
                if (!var0) {
                    _fun65957_ip = 88;
                    continue _fun65957
                }
            case 58:
                var4 = _closure1_slot28;
                var3 = _closure1_slot29;
                if (!(var4 !== var3)) {
                    _fun65957_ip = 78;
                    continue _fun65957
                }
            case 70:
                var _closure1_slot28 = var1;
                var0 = true;
                _fun65957_ip = 88;
                continue _fun65957;
            case 78:
                _closure1_slot28 = var1;
                var _closure1_slot29 = var1;
                var0 = true;
            case 88:
                return var0;
            case 90:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot61 = var0;
    var13 = function arg0() {
        _fun65958: for (var _fun65958_ip = 0;;) switch (_fun65958_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.guildId;
                var5 = var0.section;
                var1 = var0.subsection;
                var3 = var0.location;
                var2 = _closure1_slot14;
                var1 = var2.getGuild;
                var10 = var1.bind(var2)(var7);
                var2 = null;
                if (!(var2 != var10)) {
                    _fun65958_ip = 316;
                    continue _fun65958
                }
            case 50:
                var6 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 16;
                var4 = var8[var1];
                var1 = undefined;
                var9 = var6.bind(var1)(var4);
                var6 = var9.getIsBoostProgressBarEnabled;
                var4 = {};
                var11 = 'guild-settings';
                var4.location = var11;
                var9 = var6.bind(var9)(var10, var4);
                var6 = _closure1_slot8;
                var4 = 'premiumProgressBarEnabled';
                var6 = var6.bind(var1)(var10, var4, var9);
                var9 = _closure1_slot9;
                var4 = var9.getProfile;
                var4 = var4.bind(var9)(var7);
                _closure1_slot29 = var6;
                _closure1_slot28 = var6;
                var _closure1_slot31 = var4;
                var _closure1_slot30 = var4;
                var4 = _closure1_slot43;
                _closure1_slot44 = var4;
                var4 = _closure1_slot45;
                _closure1_slot46 = var4;
                var4 = _closure1_slot16;
                var4 = var4.OPEN;
                _closure1_slot39 = var4;
                var4 = {};
                _closure1_slot40 = var4;
                _closure1_slot41 = var2;
                var6 = _closure1_slot1;
                var4 = 17;
                var4 = var8[var4];
                var6 = var6.bind(var1)(var4);
                var4 = var6.castGuildIdAsEveryoneGuildRoleId;
                var4 = var4.bind(var6)(var7);
                var _closure1_slot32 = var4;
                var4 = _closure1_slot29;
                var4 = var4.mfaLevel;
                _closure1_slot49 = var4;
                var4 = _closure1_slot53;
                _closure1_slot54 = var4;
                var _closure1_slot34 = var2;
                _closure1_slot50 = var3;
                if (!(var2 != var5)) {
                    _fun65958_ip = 314;
                    continue _fun65958
                }
            case 247:
                var2 = {};
                var3 = 'stack';
                var2.type = var3;
                var4 = {};
                var3 = 'landing';
                var4.key = var3;
                var3 = _closure1_slot18;
                var3 = var3.LANDING;
                var4.name = var3;
                var3 = new Array(2);
                var3[0] = var4;
                var4 = {};
                var4.key = var5;
                var4.name = var5;
                var3[1] = var4;
                var2.routes = var3;
                var _closure1_slot33 = var2;
            case 314:
                return var1;
            case 316:
                var1 = _closure1_slot63;
                var0 = undefined;
                var1 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot62 = var13;
    var12 = function() {
        var2 = false;
        _closure1_slot38 = var2;
        var0 = _closure1_slot16;
        var0 = var0.CLOSED;
        _closure1_slot39 = var0;
        var0 = null;
        _closure1_slot29 = var0;
        _closure1_slot28 = var0;
        _closure1_slot42 = var2;
        _closure1_slot44 = var2;
        _closure1_slot46 = var0;
        _closure1_slot47 = var0;
        var2 = 0;
        _closure1_slot48 = var2;
        _closure1_slot55 = var0;
        _closure1_slot58 = var0;
        _closure1_slot59 = var0;
        var _closure1_slot25 = var0;
        var _closure1_slot26 = var0;
        var _closure1_slot27 = var0;
        var0 = _closure1_slot17;
        var0 = var0.NONE;
        _closure1_slot49 = var0;
        var0 = undefined;
        _closure1_slot33 = var0;
        return var0;
    };
    var _closure1_slot63 = var12;
    var0 = function arg0() {
        _fun65960: for (var _fun65960_ip = 0;;) switch (_fun65960_ip) {
            case 0:
                var1 = arg0;
                var2 = _closure1_slot12;
                var0 = {};
                var3 = var1.code;
                var0.code = var3;
                var3 = var1.temporary;
                var0.temporary = var3;
                var3 = var1.revoked;
                var0.revoked = var3;
                var5 = var1.inviter;
                var3 = null;
                var6 = var3 != var5;
                var5 = null;
                if (!var6) {
                    _fun65960_ip = 90;
                    continue _fun65960
                }
            case 60:
                var8 = _closure1_slot13;
                var10 = var1.inviter;
                var7 = var8.prototype;
                var7 = Object.create(var7, {
                    constructor: {
                        value: var8
                    }
                });
                var11 = var7;
                var6 = new var11[var8](var10, var9);
                var5 = var6 instanceof Object ? var6 : var7;
            case 90:
                var0.inviter = var5;
                var7 = _closure1_slot10;
                var6 = var1.channel;
                var5 = undefined;
                var6 = var7.bind(var5)(var6);
                var0.channel = var6;
                var6 = var1.guild;
                var7 = var3 != var6;
                var6 = null;
                if (!var7) {
                    _fun65960_ip = 165;
                    continue _fun65960
                }
            case 129:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var7 = 22;
                var7 = var9[var7];
                var9 = var8.bind(var5)(var7);
                var8 = var9.fromInviteGuild;
                var7 = var1.guild;
                var6 = var8.bind(var9)(var7);
            case 165:
                var0.guild = var6;
                var6 = var1.uses;
                var0.uses = var6;
                var6 = var1.max_uses;
                var0.maxUses = var6;
                var6 = var1.max_age;
                var0.maxAge = var6;
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var4 = 23;
                var4 = var7[var4];
                var4 = var6.bind(var5)(var4);
                var6 = var1.created_at;
                var7 = var3 != var6;
                var3 = undefined;
                if (!var7) {
                    _fun65960_ip = 240;
                    continue _fun65960
                }
            case 237:
                var3 = var6;
            case 240:
                var3 = var4.bind(var5)(var3);
                var0.createdAt = var3;
                var3 = var1.flags;
                var0.flags = var3;
                var1 = var1.roles;
                var0.roles = var1;
                var1 = var2.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var2
                    }
                });
                var11 = var1;
                var10 = var0;
                var0 = new var11[var2](var10, var9);
                var0 = var0 instanceof Object ? var0 : var1;
                return var0;
        }
    };
    var _closure1_slot64 = var0;
    var9 = function arg0() {
        _fun65961: for (var _fun65961_ip = 0;;) switch (_fun65961_ip) {
            case 0:
                var3 = arg0;
                var1 = _closure1_slot29;
                var0 = null;
                var0 = var0 != var1;
                if (!var0) {
                    _fun65961_ip = 37;
                    continue _fun65961
                }
            case 19:
                var4 = _closure1_slot39;
                var1 = _closure1_slot16;
                var1 = var1.OPEN;
                var0 = var4 === var1;
            case 37:
                if (!var0) {
                    _fun65961_ip = 126;
                    continue _fun65961
                }
            case 40:
                var4 = var3.type;
                var1 = 'GUILD_INTEGRATIONS_UPDATE';
                var1 = var1 !== var4;
                if (var1) {
                    _fun65961_ip = 76;
                    continue _fun65961
                }
            case 58:
                var4 = var3.guildId;
                var3 = _closure1_slot29;
                var3 = var3.id;
                var1 = var4 === var3;
            case 76:
                if (!var1) {
                    _fun65961_ip = 123;
                    continue _fun65961
                }
            case 79:
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var3 = 24;
                var4 = var4[var3];
                var3 = undefined;
                var4 = var5.bind(var3)(var4);
                var3 = var4.fetchGuildIntegrationsApplications;
                var2 = _closure1_slot29;
                var2 = var2.id;
                var2 = var3.bind(var4)(var2);
                var1 = undefined;
            case 123:
                var0 = var1;
            case 126:
                return var0;
        }
    };
    var _closure1_slot65 = var9;
    var11 = function arg0() {
        _fun65962: for (var _fun65962_ip = 0;;) switch (_fun65962_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.guildId;
                var2 = _closure1_slot29;
                var0 = null;
                if (!(var0 != var2)) {
                    _fun65962_ip = 42;
                    continue _fun65962
                }
            case 21:
                var2 = _closure1_slot29;
                var2 = var2.id;
                if (!(var2 === var3)) {
                    _fun65962_ip = 42;
                    continue _fun65962
                }
            case 34:
                _closure1_slot41 = var0;
                var0 = undefined;
                return var0;
            case 42:
                var0 = false;
                return var0;
        }
    };
    var10 = function arg0() {
        _fun65963: for (var _fun65963_ip = 0;;) switch (_fun65963_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.guildId;
                var1 = var0.error;
                var4 = _closure1_slot29;
                var2 = null;
                if (!(var2 != var4)) {
                    _fun65963_ip = 47;
                    continue _fun65963
                }
            case 26:
                var2 = _closure1_slot29;
                var2 = var2.id;
                if (!(var2 === var3)) {
                    _fun65963_ip = 47;
                    continue _fun65963
                }
            case 39:
                _closure1_slot41 = var1;
                var0 = undefined;
                return var0;
            case 47:
                var0 = false;
                return var0;
        }
    };
    var14 = global;
    var8 = var14.Object;
    var3 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var8)(var2, var0, var1);
    var8 = 0;
    var1 = var6[var8];
    var0 = undefined;
    var1 = var7.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 2;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 3;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 4;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 5;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.set;
    var _closure1_slot8 = var1;
    var1 = 6;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot9 = var1;
    var1 = 7;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.createChannelRecordFromInvite;
    var _closure1_slot10 = var1;
    var1 = 8;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.getGuildEveryoneRoleId;
    var _closure1_slot11 = var1;
    var1 = 9;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot12 = var1;
    var1 = 10;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot13 = var1;
    var1 = 11;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot14 = var1;
    var1 = 12;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot15 = var1;
    var1 = 13;
    var1 = var6[var1];
    var15 = var5.bind(var0)(var1);
    var3 = var15.FormStates;
    var _closure1_slot16 = var3;
    var1 = var15.MFALevels;
    var _closure1_slot17 = var1;
    var16 = var15.GuildSettingsSections;
    var _closure1_slot18 = var16;
    var16 = var15.GuildSettingsSubsections;
    var _closure1_slot19 = var16;
    var16 = var15.Endpoints;
    var _closure1_slot20 = var16;
    var15 = var15.GuildFeatures;
    var _closure1_slot21 = var15;
    var15 = 14;
    var15 = var6[var15];
    var15 = var5.bind(var0)(var15);
    var15 = var15.DEFAULT_DISCOVERY_CATEGORY_ID;
    var _closure1_slot22 = var15;
    var16 = 15;
    var16 = var6[var16];
    var16 = var5.bind(var0)(var16);
    var17 = var16.PUBLIC_SUCCESS_MODAL_SEEN_KEY;
    var _closure1_slot23 = var17;
    var16 = var16.CREATE_NEW_CHANNEL_VALUE;
    var _closure1_slot24 = var16;
    var16 = ['name', 'description', 'icon', 'splash', 'banner', 'homeHeader', 'afkChannelId', 'afkTimeout', 'systemChannelId', 'verificationLevel', 'defaultMessageNotifications', 'explicitContentFilter', 'features', 'systemChannelFlags', 'preferredLocale', 'rulesChannelId', 'safetyAlertsChannelId', 'ownerConfiguredContentLevel', 'discoverySplash', 'publicUpdatesChannelId', 'premiumProgressBarEnabled'];
    var _closure1_slot35 = var16;
    var16 = ['brandColorPrimary', 'description', 'icon', 'name', 'traits', 'visibility', 'gameApplicationIds', 'customBanner', 'tag', 'badge', 'badgeColorPrimary', 'badgeColorSecondary'];
    var _closure1_slot36 = var16;
    var17 = var14.Set;
    var14 = var17.prototype;
    var16 = Object.create(var14, {
        constructor: {
            value: var17
        }
    });
    var20 = ['icon', 'splash', 'banner', 'discoverySplash', 'homeHeader'];
    var21 = var16;
    var14 = new var21[var17](var20, var19);
    var14 = var14 instanceof Object ? var14 : var16;
    var _closure1_slot37 = var14;
    var14 = false;
    var _closure1_slot38 = var14;
    var3 = var3.CLOSED;
    var _closure1_slot39 = var3;
    var3 = {};
    var _closure1_slot40 = var3;
    var3 = null;
    var _closure1_slot41 = var3;
    var _closure1_slot42 = var14;
    var _closure1_slot43 = var14;
    var _closure1_slot44 = var14;
    var _closure1_slot45 = var3;
    var _closure1_slot46 = var3;
    var _closure1_slot47 = var3;
    var _closure1_slot48 = var8;
    var1 = var1.NONE;
    var _closure1_slot49 = var1;
    var _closure1_slot50 = var3;
    var1 = {
        'primaryCategoryId': null,
        'secondaryCategoryIds': null,
        'keywords': null,
        'emojiDiscoverabilityEnabled': true,
        'partnerActionedTimestamp': null,
        'partnerApplicationTimestamp': null,
        'isPublished': false
    };
    var1.primaryCategoryId = var15;
    var15 = new Array(0);
    var1.secondaryCategoryIds = var15;
    var15 = new Array(0);
    var1.keywords = var15;
    var15 = new Array(0);
    var1.reasonsToJoin = var15;
    var15 = new Array(0);
    var1.socialLinks = var15;
    var15 = '';
    var1.about = var15;
    var _closure1_slot51 = var1;
    var _closure1_slot52 = var14;
    var _closure1_slot53 = var1;
    var _closure1_slot54 = var1;
    var _closure1_slot55 = var3;
    var _closure1_slot56 = var8;
    var _closure1_slot57 = var3;
    var _closure1_slot58 = var3;
    var _closure1_slot59 = var3;
    var3 = 27;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var8 = var3.Store;
    var3 = function(arg0) { // Environment: var4
        var3 = function() {
            _fun65965: for (var _fun65965_ip = 0;;) switch (_fun65965_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot3;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot6;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot5;
                    var0 = _closure1_slot60;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun65965_ip = 69;
                        continue _fun65965
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun65965_ip = 105;
                    continue _fun65965;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot6;
                    var5 = var5.bind(var2)(var3);
                    var5 = var5.constructor;
                    var4 = arguments;
                    var0 = var6.bind(var7)(var8, var4, var5);
                case 105:
                    var0 = var1.bind(var2)(var3, var0);
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'initialize';
        var4.key = var0;
        var0 = function() {
            var4 = this;
            var3 = var4.waitFor;
            var2 = _closure1_slot14;
            var1 = _closure1_slot9;
            var0 = _closure1_slot15;
            var0 = var3.bind(var4)(var2, var1, var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(22);
        var0[0] = var4;
        var4 = {};
        var6 = 'getMetadata';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot54;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'widgetHasChanges';
        var4.key = var6;
        var6 = function() {
            _fun65968: for (var _fun65968_ip = 0;;) switch (_fun65968_ip) {
                case 0:
                    var1 = _closure1_slot42;
                    var0 = false;
                    var0 = var0 !== var1;
                    if (!var0) {
                        _fun65968_ip = 46;
                        continue _fun65968
                    }
                case 16:
                    var3 = _closure1_slot44;
                    var1 = _closure1_slot43;
                    var1 = var3 !== var1;
                    if (var1) {
                        _fun65968_ip = 43;
                        continue _fun65968
                    }
                case 31:
                    var3 = _closure1_slot46;
                    var2 = _closure1_slot45;
                    var1 = var3 !== var2;
                case 43:
                    var0 = var1;
                case 46:
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'hasChanges';
        var4.key = var6;
        var6 = function() {
            _fun65969: for (var _fun65969_ip = 0;;) switch (_fun65969_ip) {
                case 0:
                    var2 = this;
                    var3 = _closure1_slot1;
                    var0 = _closure1_slot2;
                    var6 = 25;
                    var0 = var0[var6];
                    var5 = undefined;
                    var7 = var3.bind(var5)(var0);
                    var4 = var7.isEqual;
                    var3 = _closure1_slot29;
                    var0 = _closure1_slot28;
                    var0 = var4.bind(var7)(var3, var0);
                    var0 = !var0;
                    if (var0) {
                        _fun65969_ip = 94;
                        continue _fun65969
                    }
                case 54:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var3 = var3[var6];
                    var8 = var4.bind(var5)(var3);
                    var7 = var8.isEqual;
                    var4 = _closure1_slot54;
                    var3 = _closure1_slot53;
                    var3 = var7.bind(var8)(var4, var3);
                    var0 = !var3;
                case 94:
                    if (var0) {
                        _fun65969_ip = 137;
                        continue _fun65969
                    }
                case 97:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var3 = var3[var6];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.isEqual;
                    var3 = _closure1_slot31;
                    var1 = _closure1_slot30;
                    var1 = var4.bind(var5)(var3, var1);
                    var0 = !var1;
                case 137:
                    if (var0) {
                        _fun65969_ip = 152;
                        continue _fun65969
                    }
                case 140:
                    var1 = var2.widgetHasChanges;
                    var0 = var1.bind(var2)();
                case 152:
                    return var0;
            }
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'isOpen';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot38;
            return var0;
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'getSavedRouteState';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot33;
            return var0;
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'getSection';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot25;
            return var0;
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'showNotice';
        var4.key = var6;
        var6 = function() {
            var1 = this;
            var0 = var1.hasChanges;
            var0 = var0.bind(var1)();
            return var0;
        };
        var4.value = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'getGuildId';
        var4.key = var6;
        var6 = function() {
            _fun65974: for (var _fun65974_ip = 0;;) switch (_fun65974_ip) {
                case 0:
                    var2 = _closure1_slot29;
                    var0 = null;
                    var2 = var0 != var2;
                    if (!var2) {
                        _fun65974_ip = 25;
                        continue _fun65974
                    }
                case 16:
                    var1 = _closure1_slot29;
                    var0 = var1.id;
                case 25:
                    return var0;
            }
        };
        var4.value = var6;
        var0[8] = var4;
        var4 = {};
        var6 = 'showPublicSuccessModal';
        var4.key = var6;
        var6 = function() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 26;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var2 = var1.Storage;
            var1 = var2.get;
            var0 = _closure1_slot23;
            var0 = var1.bind(var2)(var0);
            var0 = !var0;
            return var0;
        };
        var4.value = var6;
        var0[9] = var4;
        var4 = {};
        var6 = 'getGuild';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot29;
            return var0;
        };
        var4.value = var6;
        var0[10] = var4;
        var4 = {};
        var6 = 'getGuildProfile';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot31;
            return var0;
        };
        var4.value = var6;
        var0[11] = var4;
        var4 = {};
        var6 = 'getWidget';
        var4.key = var6;
        var6 = function() {
            var0 = {};
            var2 = _closure1_slot44;
            var0.enabled = var2;
            var1 = _closure1_slot46;
            var0.channelId = var1;
            return var0;
        };
        var4.value = var6;
        var0[12] = var4;
        var4 = {};
        var6 = 'isSubmitting';
        var4.key = var6;
        var6 = function() {
            var1 = _closure1_slot39;
            var0 = _closure1_slot16;
            var0 = var0.SUBMITTING;
            var0 = var1 === var0;
            return var0;
        };
        var4.value = var6;
        var0[13] = var4;
        var4 = {};
        var6 = 'isGuildMetadataLoaded';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot52;
            return var0;
        };
        var4.value = var6;
        var0[14] = var4;
        var4 = {};
        var6 = 'getErrors';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot40;
            return var0;
        };
        var4.value = var6;
        var0[15] = var4;
        var4 = {};
        var6 = 'getError';
        var4.key = var6;
        var6 = function arg0() {
            _fun65982: for (var _fun65982_ip = 0;;) switch (_fun65982_ip) {
                case 0:
                    var1 = _closure1_slot40;
                    var0 = arg0;
                    var1 = var1[var0];
                    var0 = null;
                    var2 = var0 != var1;
                    if (!var2) {
                        _fun65982_ip = 26;
                        continue _fun65982
                    }
                case 23:
                    var0 = var1;
                case 26:
                    return var0;
            }
        };
        var4.value = var6;
        var0[16] = var4;
        var4 = {};
        var6 = 'getProfileError';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot41;
            return var0;
        };
        var4.value = var6;
        var0[17] = var4;
        var4 = {};
        var6 = 'getSelectedRoleId';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot32;
            return var0;
        };
        var4.value = var6;
        var0[18] = var4;
        var4 = {};
        var6 = 'getSlug';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot34;
            return var0;
        };
        var4.value = var6;
        var0[19] = var4;
        var4 = {};
        var6 = 'getBans';
        var4.key = var6;
        var6 = function() {
            var2 = _closure1_slot55;
            var0 = new Array(2);
            var0[0] = var2;
            var1 = _closure1_slot56;
            var0[1] = var1;
            return var0;
        };
        var4.value = var6;
        var0[20] = var4;
        var4 = {};
        var6 = 'getProps';
        var4.key = var6;
        var5 = function() {
            var3 = this;
            var0 = {};
            var1 = var3.isSubmitting;
            var1 = var1.bind(var3)();
            var0.submitting = var1;
            var2 = _closure1_slot59;
            var0.integrations = var2;
            var2 = _closure1_slot25;
            var0.section = var2;
            var2 = _closure1_slot26;
            var0.subsection = var2;
            var2 = _closure1_slot40;
            var0.errors = var2;
            var2 = _closure1_slot29;
            var0.guild = var2;
            var2 = _closure1_slot55;
            var0.bans = var2;
            var2 = _closure1_slot56;
            var0.bansVersion = var2;
            var2 = _closure1_slot58;
            var0.invites = var2;
            var2 = _closure1_slot32;
            var0.selectedRoleId = var2;
            var2 = _closure1_slot42;
            var0.fetchedEmbed = var2;
            var2 = _closure1_slot44;
            var0.embedEnabled = var2;
            var2 = _closure1_slot46;
            var0.embedChannelId = var2;
            var2 = _closure1_slot49;
            var0.mfaLevel = var2;
            var2 = _closure1_slot27;
            var0.searchQuery = var2;
            var2 = _closure1_slot47;
            var0.vanityURLCode = var2;
            var2 = _closure1_slot48;
            var0.vanityURLUses = var2;
            var2 = _closure1_slot28;
            var0.originalGuild = var2;
            var2 = var3.hasChanges;
            var2 = var2.bind(var3)();
            var0.hasChanges = var2;
            var2 = _closure1_slot54;
            var0.guildMetadata = var2;
            var2 = _closure1_slot50;
            var0.analyticsLocation = var2;
            var2 = _closure1_slot52;
            var0.isGuildMetadataLoaded = var2;
            var2 = _closure1_slot30;
            var0.originalProfile = var2;
            var1 = _closure1_slot31;
            var0.profile = var1;
            return var0;
        };
        var4.value = var5;
        var0[21] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var8 = var3.bind(var0)(var8);
    var3 = 'GuildSettingsStore';
    var8.displayName = var3;
    var3 = 19;
    var3 = var6[var3];
    var20 = var7.bind(var0)(var3);
    var3 = {};
    var3.GUILD_SETTINGS_INIT = var13;
    var13 = function arg0() {
        var1 = true;
        _closure1_slot38 = var1;
        var2 = _closure1_slot62;
        var0 = undefined;
        var1 = arg0;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3.GUILD_SETTINGS_OPEN = var13;
    var3.GUILD_SETTINGS_CLOSE = var12;
    var12 = function arg0() {
        _fun65989: for (var _fun65989_ip = 0;;) switch (_fun65989_ip) {
            case 0:
                var1 = arg0;
                var _closure2_slot0 = var1;
                var3 = _closure1_slot29;
                var2 = null;
                if (!(var2 != var3)) {
                    _fun65989_ip = 58;
                    continue _fun65989
                }
            case 22:
                var3 = _closure1_slot35;
                var2 = var3.forEach;
                var1 = function(arg0) { // Environment: var0
                    _fun65990: for (var _fun65990_ip = 0;;) switch (_fun65990_ip) {
                        case 0:
                            var5 = arg0;
                            var0 = _closure1_slot29;
                            var4 = null;
                            var0 = var4 != var0;
                            if (!var0) {
                                _fun65990_ip = 37;
                                continue _fun65990
                            }
                        case 19:
                            var3 = _closure2_slot0;
                            var2 = var3.hasOwnProperty;
                            var0 = var2.bind(var3)(var5);
                        case 37:
                            if (!var0) {
                                _fun65990_ip = 84;
                                continue _fun65990
                            }
                        case 40:
                            var3 = _closure1_slot8;
                            var2 = _closure1_slot29;
                            var0 = _closure2_slot0;
                            var0 = var0[var5];
                            var6 = var4 != var0;
                            var4 = null;
                            if (!var6) {
                                _fun65990_ip = 71;
                                continue _fun65990
                            }
                        case 68:
                            var4 = var0;
                        case 71:
                            var0 = undefined;
                            var0 = var3.bind(var0)(var2, var5, var4);
                            _closure1_slot29 = var0;
                        case 84:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var2.bind(var3)(var1);
                var1 = function() {
                    _fun65991: for (var _fun65991_ip = 0;;) switch (_fun65991_ip) {
                        case 0:
                            var3 = _closure1_slot29;
                            var _closure3_slot0 = var3;
                            var2 = null;
                            if (!(var2 != var3)) {
                                _fun65991_ip = 56;
                                continue _fun65991
                            }
                        case 19:
                            var3 = _closure1_slot35;
                            var2 = var3.some;
                            var0 = function(arg0) { // Environment: var0
                                var2 = arg0;
                                var0 = _closure3_slot0;
                                var1 = var0[var2];
                                var0 = _closure1_slot28;
                                var0 = var0[var2];
                                var0 = var1 !== var0;
                                return var0;
                            };
                            var0 = var2.bind(var3)(var0);
                            if (var0) {
                                _fun65991_ip = 52;
                                continue _fun65991
                            }
                        case 44:
                            var0 = _closure1_slot28;
                            _closure1_slot29 = var0;
                        case 52:
                            var0 = undefined;
                            return var0;
                        case 56:
                            var0 = false;
                            return var0;
                    }
                };
                var0 = undefined;
                var1 = var1.bind(var0)();
                return var0;
            case 58:
                var0 = false;
                return var0;
        }
    };
    var3.GUILD_SETTINGS_UPDATE = var12;
    var12 = function arg0() {
        _fun65993: for (var _fun65993_ip = 0;;) switch (_fun65993_ip) {
            case 0:
                var1 = arg0;
                var _closure2_slot0 = var1;
                var3 = var1.guildId;
                var2 = _closure1_slot31;
                var4 = null;
                if (!(var4 != var2)) {
                    _fun65993_ip = 73;
                    continue _fun65993
                }
            case 27:
                var2 = _closure1_slot29;
                if (!(var4 != var2)) {
                    _fun65993_ip = 73;
                    continue _fun65993
                }
            case 35:
                var2 = _closure1_slot29;
                var2 = var2.id;
                if (!(var2 === var3)) {
                    _fun65993_ip = 73;
                    continue _fun65993
                }
            case 48:
                var2 = _closure1_slot36;
                var1 = var2.forEach;
                var0 = function(arg0) { // Environment: var0
                    _fun65994: for (var _fun65994_ip = 0;;) switch (_fun65994_ip) {
                        case 0:
                            var3 = arg0;
                            var2 = _closure1_slot31;
                            var0 = null;
                            if (!(var0 != var2)) {
                                _fun65994_ip = 73;
                                continue _fun65994
                            }
                        case 16:
                            var4 = _closure2_slot0;
                            var2 = var4.hasOwnProperty;
                            var2 = var2.bind(var4)(var3);
                            if (!var2) {
                                _fun65994_ip = 73;
                                continue _fun65994
                            }
                        case 37:
                            var0 = _closure2_slot0;
                            var2 = var0[var3];
                            var0 = undefined;
                            if (!(var0 !== var2)) {
                                _fun65994_ip = 73;
                                continue _fun65994
                            }
                        case 51:
                            var0 = {};
                            var5 = _closure1_slot31;
                            var6 = var0;
                            var4 = copyDataProperties(var6, var5);
                            var0[var3] = var2;
                            _closure1_slot31 = var0;
                        case 73:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var1.bind(var2)(var0);
                var0 = undefined;
                return var0;
            case 73:
                var0 = false;
                return var0;
        }
    };
    var3.GUILD_SETTINGS_PROFILE_UPDATE = var12;
    var12 = function arg0() {
        _fun65995: for (var _fun65995_ip = 0;;) switch (_fun65995_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.guildId;
                var0 = {};
                _closure1_slot40 = var0;
                var2 = _closure1_slot14;
                var0 = var2.getGuild;
                var5 = var0.bind(var2)(var3);
                var0 = null;
                if (!(var0 != var5)) {
                    _fun65995_ip = 106;
                    continue _fun65995
                }
            case 37:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 16;
                var0 = var3[var0];
                var4 = undefined;
                var3 = var2.bind(var4)(var0);
                var2 = var3.getIsBoostProgressBarEnabled;
                var0 = {};
                var6 = 'guild-settings';
                var0.location = var6;
                var3 = var2.bind(var3)(var5, var0);
                var2 = _closure1_slot8;
                var0 = 'premiumProgressBarEnabled';
                var0 = var2.bind(var4)(var5, var0, var3);
                _closure1_slot29 = var0;
                _closure1_slot28 = var0;
            case 106:
                var0 = undefined;
                return var0;
        }
    };
    var3.GUILD_SETTINGS_CANCEL_CHANGES = var12;
    var12 = function arg0() {
        var0 = arg0;
        var1 = var0.state;
        _closure1_slot33 = var1;
        var0 = false;
        return var0;
    };
    var3.GUILD_SETTINGS_SAVE_ROUTE_STACK = var12;
    var12 = function() {
        var0 = _closure1_slot16;
        var0 = var0.SUBMITTING;
        _closure1_slot39 = var0;
        var0 = {};
        _closure1_slot40 = var0;
        var0 = undefined;
        return var0;
    };
    var3.GUILD_SETTINGS_SUBMIT = var12;
    var12 = function() {
        var0 = _closure1_slot16;
        var0 = var0.OPEN;
        _closure1_slot39 = var0;
        var0 = undefined;
        return var0;
    };
    var3.GUILD_SETTINGS_SUBMIT_SUCCESS = var12;
    var12 = function arg0() {
        _fun65999: for (var _fun65999_ip = 0;;) switch (_fun65999_ip) {
            case 0:
                var0 = _closure1_slot16;
                var0 = var0.OPEN;
                _closure1_slot39 = var0;
                var0 = _closure1_slot25;
                var2 = null;
                if (!(var2 == var0)) {
                    _fun65999_ip = 61;
                    continue _fun65999
                }
            case 27:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 21;
                var3 = var3[var0];
                var0 = undefined;
                var3 = var4.bind(var0)(var3);
                var0 = var3.getDefaultGuildSettingsSection;
                var0 = var0.bind(var3)();
                _fun65999_ip = 65;
                continue _fun65999;
            case 61:
                var0 = _closure1_slot25;
            case 65:
                _closure1_slot25 = var0;
                _closure1_slot26 = var2;
                var0 = arg0;
                var0 = var0.errors;
                if (!(var2 == var0)) {
                    _fun65999_ip = 88;
                    continue _fun65999
                }
            case 86:
                var0 = {};
            case 88:
                _closure1_slot40 = var0;
                var0 = undefined;
                return var0;
        }
    };
    var3.GUILD_SETTINGS_SUBMIT_FAILURE = var12;
    var12 = function arg0() {
        _fun66000: for (var _fun66000_ip = 0;;) switch (_fun66000_ip) {
            case 0:
                var2 = arg0;
                var1 = _closure1_slot29;
                var0 = null;
                if (!(var0 != var1)) {
                    _fun66000_ip = 458;
                    continue _fun66000
                }
            case 19:
                var1 = _closure1_slot25;
                var4 = var2.section;
                _closure1_slot25 = var4;
                var4 = var2.subsection;
                _closure1_slot26 = var4;
                var5 = _closure1_slot25;
                var4 = _closure1_slot18;
                var4 = var4.INSTANT_INVITES;
                if (!(var5 !== var4)) {
                    _fun66000_ip = 358;
                    continue _fun66000
                }
            case 63:
                var5 = _closure1_slot25;
                var4 = _closure1_slot18;
                var4 = var4.INVITES;
                if (!(var5 !== var4)) {
                    _fun66000_ip = 358;
                    continue _fun66000
                }
            case 84:
                var5 = _closure1_slot25;
                var4 = _closure1_slot18;
                var4 = var4.INTEGRATIONS;
                if (!(var5 !== var4)) {
                    _fun66000_ip = 332;
                    continue _fun66000
                }
            case 105:
                var5 = _closure1_slot25;
                var4 = _closure1_slot18;
                var4 = var4.ROLES;
                if (!(var5 !== var4)) {
                    _fun66000_ip = 332;
                    continue _fun66000
                }
            case 126:
                var5 = _closure1_slot25;
                var4 = _closure1_slot18;
                var4 = var4.MEMBERS;
                if (!(var5 !== var4)) {
                    _fun66000_ip = 311;
                    continue _fun66000
                }
            case 147:
                var5 = _closure1_slot25;
                var4 = _closure1_slot18;
                var4 = var4.VANITY_URL;
                if (!(var5 !== var4)) {
                    _fun66000_ip = 264;
                    continue _fun66000
                }
            case 165:
                var5 = _closure1_slot25;
                var4 = _closure1_slot18;
                var4 = var4.SAFETY;
                if (!(var5 === var4)) {
                    _fun66000_ip = 454;
                    continue _fun66000
                }
            case 186:
                var6 = _closure1_slot1;
                var5 = _closure1_slot2;
                var4 = 19;
                var5 = var5[var4];
                var4 = undefined;
                var6 = var6.bind(var4)(var5);
                var5 = var6.dispatch;
                var4 = {};
                var7 = 'GUILD_SETTINGS_SAFETY_SET_SUBSECTION';
                var4.type = var7;
                var7 = _closure1_slot26;
                if (!(var0 != var7)) {
                    _fun66000_ip = 239;
                    continue _fun66000
                }
            case 233:
                var7 = _closure1_slot26;
                _fun66000_ip = 249;
                continue _fun66000;
            case 239:
                var8 = _closure1_slot19;
                var7 = var8.SAFETY_OVERVIEW;
            case 249:
                var4.subsection = var7;
                var4 = var5.bind(var6)(var4);
                _fun66000_ip = 454;
                continue _fun66000;
            case 264:
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var4 = 20;
                var5 = var5[var4];
                var4 = undefined;
                var6 = var6.bind(var4)(var5);
                var5 = var6.fetchVanityUrl;
                var4 = _closure1_slot29;
                var4 = var4.id;
                var4 = var5.bind(var6)(var4);
                _fun66000_ip = 454;
                continue _fun66000;
            case 311:
                var6 = _closure1_slot11;
                var5 = _closure1_slot29;
                var4 = undefined;
                var4 = var6.bind(var4)(var5);
                _closure1_slot32 = var4;
                _fun66000_ip = 454;
                continue _fun66000;
            case 332:
                _closure1_slot32 = var0;
                var0 = var2.section;
                if (!(var1 !== var0)) {
                    _fun66000_ip = 454;
                    continue _fun66000
                }
            case 345:
                var1 = _closure1_slot65;
                var0 = undefined;
                var0 = var1.bind(var0)(var2);
                return var0;
            case 358:
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 18;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var2 = var0.HTTP;
                var1 = var2.get;
                var0 = {
                    'url': null,
                    'oldFormErrors': true,
                    'rejectWithError': true
                };
                var5 = _closure1_slot20;
                var4 = var5.GUILD_INSTANT_INVITES;
                var3 = _closure1_slot29;
                var3 = var3.id;
                var3 = var4.bind(var5)(var3);
                var0.url = var3;
                var2 = var1.bind(var2)(var0);
                var1 = var2.then;
                var0 = function(arg0) { // Environment: var0
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 19;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.dispatch;
                    var1 = {};
                    var4 = 'GUILD_SETTINGS_LOADED_INVITES';
                    var1.type = var4;
                    var4 = arg0;
                    var4 = var4.body;
                    var1.invites = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
            case 454:
                var0 = undefined;
                return var0;
            case 458:
                var0 = false;
                return var0;
        }
    };
    var3.GUILD_SETTINGS_SET_SECTION = var12;
    var12 = function arg0() {
        var0 = arg0;
        var1 = var0.searchQuery;
        _closure1_slot27 = var1;
        var0 = undefined;
        return var0;
    };
    var3.GUILD_SETTINGS_SET_SEARCH_QUERY = var12;
    var12 = function arg0() {
        var0 = arg0;
        var3 = var0.bans;
        var2 = var3.reduce;
        var0 = global;
        var0 = var0.Map;
        var1 = var0.prototype;
        var1 = Object.create(var1, {
            constructor: {
                value: var0
            }
        });
        var6 = var1;
        var0 = new var6[var0](var5);
        var1 = var0 instanceof Object ? var0 : var1;
        var0 = function(arg0, arg1) { // Environment: var0
            _fun66004: for (var _fun66004_ip = 0;;) switch (_fun66004_ip) {
                case 0:
                    var0 = arg0;
                    var3 = arg1;
                    var1 = var3.user;
                    var4 = null;
                    var1 = var4 != var1;
                    if (!var1) {
                        _fun66004_ip = 34;
                        continue _fun66004
                    }
                case 20:
                    var2 = var3.user;
                    var2 = var2.id;
                    var1 = var4 != var2;
                case 34:
                    if (!var1) {
                        _fun66004_ip = 58;
                        continue _fun66004
                    }
                case 37:
                    var2 = var0.set;
                    var1 = var3.user;
                    var1 = var1.id;
                    var1 = var2.bind(var0)(var1, var3);
                case 58:
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        _closure1_slot55 = var0;
        var0 = _closure1_slot56;
        var0 = var0 + 1;
        _closure1_slot56 = var0;
        var0 = undefined;
        return var0;
    };
    var3.GUILD_SETTINGS_LOADED_BANS = var12;
    var12 = function arg0() {
        _fun66005: for (var _fun66005_ip = 0;;) switch (_fun66005_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.bans;
                var0 = var0.guildId;
                var2 = _closure1_slot57;
                var2 = var2 === var0;
                if (!var2) {
                    _fun66005_ip = 38;
                    continue _fun66005
                }
            case 28:
                var5 = _closure1_slot55;
                var3 = null;
                var2 = var3 != var5;
            case 38:
                if (var2) {
                    _fun66005_ip = 77;
                    continue _fun66005
                }
            case 41:
                _closure1_slot57 = var0;
                var0 = global;
                var0 = var0.Map;
                var2 = var0.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var0
                    }
                });
                var8 = var2;
                var0 = new var8[var0](var7);
                var0 = var0 instanceof Object ? var0 : var2;
                _closure1_slot55 = var0;
            case 77:
                var3 = var4.reduce;
                var2 = _closure1_slot55;
                var0 = function(arg0, arg1) { // Environment: var0
                    _fun66006: for (var _fun66006_ip = 0;;) switch (_fun66006_ip) {
                        case 0:
                            var0 = arg0;
                            var3 = arg1;
                            var1 = var3.user;
                            var4 = null;
                            var1 = var4 != var1;
                            if (!var1) {
                                _fun66006_ip = 34;
                                continue _fun66006
                            }
                        case 20:
                            var2 = var3.user;
                            var2 = var2.id;
                            var1 = var4 != var2;
                        case 34:
                            if (!var1) {
                                _fun66006_ip = 58;
                                continue _fun66006
                            }
                        case 37:
                            var2 = var0.set;
                            var1 = var3.user;
                            var1 = var1.id;
                            var1 = var2.bind(var0)(var1, var3);
                        case 58:
                            return var0;
                    }
                };
                var0 = var3.bind(var4)(var0, var2);
                _closure1_slot55 = var0;
                var0 = _closure1_slot56;
                var0 = var0 + 1;
                _closure1_slot56 = var0;
                var0 = undefined;
                return var0;
        }
    };
    var3.GUILD_SETTINGS_LOADED_BANS_BATCH = var12;
    var12 = function arg0() {
        var0 = arg0;
        var3 = var0.invites;
        var2 = var3.reduce;
        var1 = function(arg0, arg1) { // Environment: var0
            var0 = arg0;
            var4 = arg1;
            var2 = var4.code;
            var3 = _closure1_slot64;
            var1 = undefined;
            var1 = var3.bind(var1)(var4);
            var0[var2] = var1;
            return var0;
        };
        var0 = {};
        var1 = var2.bind(var3)(var1, var0);
        _closure1_slot58 = var1;
        var0 = undefined;
        return var0;
    };
    var3.GUILD_SETTINGS_LOADED_INVITES = var12;
    var12 = function arg0() {
        var0 = arg0;
        var2 = true;
        _closure1_slot42 = var2;
        var2 = var0.enabled;
        _closure1_slot44 = var2;
        _closure1_slot43 = var2;
        var0 = var0.channelId;
        _closure1_slot46 = var0;
        _closure1_slot45 = var0;
        var0 = undefined;
        return var0;
    };
    var3.GUILD_SETTINGS_SET_WIDGET = var12;
    var12 = function arg0() {
        _fun66010: for (var _fun66010_ip = 0;;) switch (_fun66010_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.code;
                var2 = null;
                var3 = var2 != var1;
                if (!var3) {
                    _fun66010_ip = 20;
                    continue _fun66010
                }
            case 17:
                var2 = var1;
            case 20:
                _closure1_slot47 = var2;
                var0 = var0.uses;
                _closure1_slot48 = var0;
                var0 = undefined;
                return var0;
        }
    };
    var3.GUILD_SETTINGS_SET_VANITY_URL = var12;
    var12 = function arg0() {
        var0 = arg0;
        var1 = var0.level;
        _closure1_slot49 = var1;
        var0 = undefined;
        return var0;
    };
    var3.GUILD_SETTINGS_SET_MFA_SUCCESS = var12;
    var12 = function arg0() {
        _fun66012: for (var _fun66012_ip = 0;;) switch (_fun66012_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.roleId;
                var1 = null;
                var2 = var1 != var0;
                if (!var2) {
                    _fun66012_ip = 21;
                    continue _fun66012
                }
            case 18:
                var1 = var0;
            case 21:
                _closure1_slot32 = var1;
                var0 = undefined;
                return var0;
        }
    };
    var3.GUILD_SETTINGS_ROLE_SELECT = var12;
    var12 = function arg0() {
        var0 = arg0;
        var1 = var0.integrations;
        _closure1_slot59 = var1;
        var0 = undefined;
        return var0;
    };
    var3.GUILD_SETTINGS_LOADED_INTEGRATIONS = var12;
    var12 = function arg0() {
        _fun66014: for (var _fun66014_ip = 0;;) switch (_fun66014_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.guildId;
                var3 = _closure1_slot29;
                var0 = null;
                if (!(var0 != var3)) {
                    _fun66014_ip = 137;
                    continue _fun66014
                }
            case 21:
                var0 = _closure1_slot29;
                var0 = var0.id;
                if (!(var1 === var0)) {
                    _fun66014_ip = 137;
                    continue _fun66014
                }
            case 34:
                var5 = _closure1_slot8;
                var4 = _closure1_slot29;
                var0 = global;
                var3 = var0.Set;
                var0 = _closure1_slot29;
                var8 = var0.features;
                var0 = new Array(1);
                var7 = 0;
                var9 = var0;
                var6 = arraySpread(var9, var8, var7);
                var1 = _closure1_slot21;
                var1 = var1.PIN_PERMISSION_MIGRATION_COMPLETE;
                var0[var6] = var1;
                var1 = 1;
                var1 = var6 + var1;
                var1 = var3.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var3
                    }
                });
                var10 = var1;
                var9 = var0;
                var0 = new var10[var3](var9, var8);
                var3 = var0 instanceof Object ? var0 : var1;
                var0 = undefined;
                var1 = 'features';
                var1 = var5.bind(var0)(var4, var1, var3);
                _closure1_slot29 = var1;
                return var0;
            case 137:
                var0 = false;
                return var0;
        }
    };
    var3.GUILD_SETTINGS_PIN_PERMISSION_MIGRATED = var12;
    var12 = function arg0() {
        _fun66015: for (var _fun66015_ip = 0;;) switch (_fun66015_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.guildId;
                var3 = _closure1_slot29;
                var0 = null;
                if (!(var0 != var3)) {
                    _fun66015_ip = 137;
                    continue _fun66015
                }
            case 21:
                var0 = _closure1_slot29;
                var0 = var0.id;
                if (!(var1 === var0)) {
                    _fun66015_ip = 137;
                    continue _fun66015
                }
            case 34:
                var5 = _closure1_slot8;
                var4 = _closure1_slot29;
                var0 = global;
                var3 = var0.Set;
                var0 = _closure1_slot29;
                var8 = var0.features;
                var0 = new Array(1);
                var7 = 0;
                var9 = var0;
                var6 = arraySpread(var9, var8, var7);
                var1 = _closure1_slot21;
                var1 = var1.BYPASS_SLOWMODE_PERMISSION_MIGRATION_COMPLETE;
                var0[var6] = var1;
                var1 = 1;
                var1 = var6 + var1;
                var1 = var3.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var3
                    }
                });
                var10 = var1;
                var9 = var0;
                var0 = new var10[var3](var9, var8);
                var3 = var0 instanceof Object ? var0 : var1;
                var0 = undefined;
                var1 = 'features';
                var1 = var5.bind(var0)(var4, var1, var3);
                _closure1_slot29 = var1;
                return var0;
            case 137:
                var0 = false;
                return var0;
        }
    };
    var3.GUILD_SETTINGS_SLOWMODE_PERMISSION_MIGRATED = var12;
    var12 = function arg0() {
        _fun66016: for (var _fun66016_ip = 0;;) switch (_fun66016_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.user;
                var3 = var0.guildId;
                var0 = _closure1_slot55;
                var7 = null;
                var0 = var7 != var0;
                if (!var0) {
                    _fun66016_ip = 106;
                    continue _fun66016
                }
            case 29:
                var1 = _closure1_slot29;
                var1 = var7 != var1;
                if (!var1) {
                    _fun66016_ip = 53;
                    continue _fun66016
                }
            case 40:
                var2 = _closure1_slot29;
                var2 = var2.id;
                var1 = var2 === var3;
            case 53:
                if (!var1) {
                    _fun66016_ip = 103;
                    continue _fun66016
                }
            case 56:
                var6 = _closure1_slot55;
                var5 = var6.set;
                var3 = var8.id;
                var2 = {};
                var2.user = var8;
                var2.reason = var7;
                var2 = var5.bind(var6)(var3, var2);
                var2 = _closure1_slot56;
                var2 = parseFloat(var2);
                var3 = var2 + 1;
                _closure1_slot56 = var3;
                var1 = undefined;
            case 103:
                var0 = var1;
            case 106:
                return var0;
        }
    };
    var3.GUILD_BAN_ADD = var12;
    var12 = function arg0() {
        _fun66017: for (var _fun66017_ip = 0;;) switch (_fun66017_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.user;
                var5 = var0.guildId;
                var0 = _closure1_slot55;
                var3 = null;
                var0 = var3 != var0;
                if (!var0) {
                    _fun66017_ip = 94;
                    continue _fun66017
                }
            case 29:
                var1 = _closure1_slot29;
                var1 = var3 != var1;
                if (!var1) {
                    _fun66017_ip = 53;
                    continue _fun66017
                }
            case 40:
                var3 = _closure1_slot29;
                var3 = var3.id;
                var1 = var3 === var5;
            case 53:
                if (!var1) {
                    _fun66017_ip = 91;
                    continue _fun66017
                }
            case 56:
                var5 = _closure1_slot55;
                var3 = var5.delete;
                var2 = var2.id;
                var2 = var3.bind(var5)(var2);
                var2 = _closure1_slot56;
                var2 = parseFloat(var2);
                var3 = var2 + 1;
                _closure1_slot56 = var3;
                var1 = undefined;
            case 91:
                var0 = var1;
            case 94:
                return var0;
        }
    };
    var3.GUILD_BAN_REMOVE = var12;
    var12 = function arg0() {
        _fun66018: for (var _fun66018_ip = 0;;) switch (_fun66018_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.guildId;
                var1 = _closure1_slot61;
                var0 = undefined;
                var1 = var1.bind(var0)(var2);
                if (var1) {
                    _fun66018_ip = 29;
                    continue _fun66018
                }
            case 25:
                var1 = false;
                return var1;
            case 29:
                return var0;
        }
    };
    var3.GUILD_ROLE_CREATE = var12;
    var12 = function arg0() {
        _fun66019: for (var _fun66019_ip = 0;;) switch (_fun66019_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.guildId;
                var1 = _closure1_slot61;
                var0 = undefined;
                var1 = var1.bind(var0)(var2);
                if (var1) {
                    _fun66019_ip = 29;
                    continue _fun66019
                }
            case 25:
                var1 = false;
                return var1;
            case 29:
                return var0;
        }
    };
    var3.GUILD_ROLE_UPDATE = var12;
    var12 = function arg0() {
        _fun66020: for (var _fun66020_ip = 0;;) switch (_fun66020_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.guildId;
                var3 = var0.roleId;
                var1 = _closure1_slot61;
                var0 = undefined;
                var1 = var1.bind(var0)(var4);
                if (var1) {
                    _fun66020_ip = 35;
                    continue _fun66020
                }
            case 31:
                var1 = false;
                return var1;
            case 35:
                var1 = _closure1_slot32;
                if (!(var1 === var3)) {
                    _fun66020_ip = 49;
                    continue _fun66020
                }
            case 43:
                var1 = null;
                _closure1_slot32 = var1;
            case 49:
                return var0;
        }
    };
    var3.GUILD_ROLE_DELETE = var12;
    var12 = function arg0() {
        _fun66021: for (var _fun66021_ip = 0;;) switch (_fun66021_ip) {
            case 0:
                var0 = _closure1_slot29;
                var3 = null;
                if (!(var3 != var0)) {
                    _fun66021_ip = 251;
                    continue _fun66021
                }
            case 18:
                var0 = _closure1_slot29;
                var4 = var0.id;
                var0 = arg0;
                var0 = var0.guild;
                var0 = var0.id;
                if (!(var4 === var0)) {
                    _fun66021_ip = 251;
                    continue _fun66021
                }
            case 47:
                var5 = _closure1_slot14;
                var4 = var5.getGuild;
                var0 = _closure1_slot29;
                var0 = var0.id;
                var0 = var4.bind(var5)(var0);
                var _closure2_slot0 = var0;
                if (!(var3 != var0)) {
                    _fun66021_ip = 247;
                    continue _fun66021
                }
            case 81:
                var5 = _closure1_slot9;
                var4 = var5.getProfile;
                var3 = _closure1_slot29;
                var3 = var3.id;
                var3 = var4.bind(var5)(var3);
                _closure1_slot30 = var3;
                var4 = _closure1_slot25;
                var3 = _closure1_slot18;
                var3 = var3.PROFILE;
                var3 = var4 !== var3;
                if (!var3) {
                    _fun66021_ip = 148;
                    continue _fun66021
                }
            case 130:
                var5 = _closure1_slot25;
                var4 = _closure1_slot18;
                var4 = var4.TAG;
                var3 = var5 !== var4;
            case 148:
                if (!var3) {
                    _fun66021_ip = 159;
                    continue _fun66021
                }
            case 151:
                var3 = _closure1_slot30;
                _closure1_slot31 = var3;
            case 159:
                var4 = _closure1_slot25;
                var3 = _closure1_slot18;
                var3 = var3.PROFILE;
                if (!(var4 !== var3)) {
                    _fun66021_ip = 235;
                    continue _fun66021
                }
            case 177:
                _closure1_slot28 = var0;
                var _closure2_slot1 = var0;
                var3 = {};
                var6 = _closure1_slot29;
                var7 = var3;
                var4 = copyDataProperties(var7, var6);
                var _closure2_slot2 = var3;
                var5 = _closure1_slot35;
                var4 = var5.forEach;
                var3 = function(arg0) { // Environment: var2
                    _fun66022: for (var _fun66022_ip = 0;;) switch (_fun66022_ip) {
                        case 0:
                            var5 = arg0;
                            var2 = _closure1_slot37;
                            var1 = var2.has;
                            var1 = var1.bind(var2)(var5);
                            if (var1) {
                                _fun66022_ip = 128;
                                continue _fun66022
                            }
                        case 23:
                            var1 = 'rulesChannelId';
                            var1 = var1 !== var5;
                            if (!var1) {
                                _fun66022_ip = 42;
                                continue _fun66022
                            }
                        case 34:
                            var2 = 'publicUpdatesChannelId';
                            var1 = var2 !== var5;
                        case 42:
                            if (var1) {
                                _fun66022_ip = 64;
                                continue _fun66022
                            }
                        case 45:
                            var2 = _closure2_slot2;
                            var3 = var2[var5];
                            var2 = _closure1_slot24;
                            var1 = var3 !== var2;
                        case 64:
                            if (!var1) {
                                _fun66022_ip = 75;
                                continue _fun66022
                            }
                        case 67:
                            var2 = 'features';
                            var1 = var2 !== var5;
                        case 75:
                            if (!var1) {
                                _fun66022_ip = 128;
                                continue _fun66022
                            }
                        case 78:
                            var4 = _closure1_slot8;
                            var3 = _closure2_slot1;
                            var0 = 'ownerConfiguredContentLevel';
                            if (!(var0 === var5)) {
                                _fun66022_ip = 107;
                                continue _fun66022
                            }
                        case 97:
                            var0 = _closure2_slot0;
                            var2 = var0[var5];
                            _fun66022_ip = 115;
                            continue _fun66022;
                        case 107:
                            var0 = _closure2_slot2;
                            var2 = var0[var5];
                        case 115:
                            var0 = undefined;
                            var0 = var4.bind(var0)(var3, var5, var2);
                            _closure2_slot1 = var0;
                        case 128:
                            var0 = undefined;
                            return var0;
                    }
                };
                var3 = var4.bind(var5)(var3);
                var2 = _closure2_slot1;
                _closure1_slot29 = var2;
                var2 = undefined;
                return var2;
            case 235:
                _closure1_slot28 = var0;
                _closure1_slot29 = var0;
                var0 = undefined;
                return var0;
            case 247:
                var0 = false;
                return var0;
            case 251:
                var0 = false;
                return var0;
        }
    };
    var3.GUILD_UPDATE = var12;
    var12 = function arg0() {
        _fun66023: for (var _fun66023_ip = 0;;) switch (_fun66023_ip) {
            case 0:
                var2 = _closure1_slot29;
                var1 = null;
                if (!(var1 != var2)) {
                    _fun66023_ip = 51;
                    continue _fun66023
                }
            case 13:
                var1 = _closure1_slot29;
                var2 = var1.id;
                var1 = arg0;
                var1 = var1.guild;
                var1 = var1.id;
                if (!(var2 === var1)) {
                    _fun66023_ip = 51;
                    continue _fun66023
                }
            case 39:
                var1 = _closure1_slot63;
                var0 = undefined;
                var1 = var1.bind(var0)();
                return var0;
            case 51:
                var0 = false;
                return var0;
        }
    };
    var3.GUILD_DELETE = var12;
    var12 = function arg0() {
        _fun66024: for (var _fun66024_ip = 0;;) switch (_fun66024_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.profile;
                var4 = var2.id;
                var5 = _closure1_slot29;
                var0 = null;
                var6 = var0 == var5;
                var0 = undefined;
                var3 = undefined;
                if (var6) {
                    _fun66024_ip = 39;
                    continue _fun66024
                }
            case 34:
                var3 = var5.id;
            case 39:
                if (!(var4 === var3)) {
                    _fun66024_ip = 51;
                    continue _fun66024
                }
            case 43:
                _closure1_slot31 = var2;
                _closure1_slot30 = var2;
            case 51:
                return var0;
        }
    };
    var3.GUILD_PROFILE_FETCH_SUCCESS = var12;
    var3.GUILD_PROFILE_UPDATE = var11;
    var12 = function arg0() {
        _fun66025: for (var _fun66025_ip = 0;;) switch (_fun66025_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.profile;
                var1 = _closure1_slot31;
                var3 = null;
                var6 = var3 == var1;
                var2 = undefined;
                var0 = undefined;
                if (var6) {
                    _fun66025_ip = 34;
                    continue _fun66025
                }
            case 29:
                var0 = var1.id;
            case 34:
                var0 = var3 != var0;
                if (!var0) {
                    _fun66025_ip = 117;
                    continue _fun66025
                }
            case 41:
                var6 = _closure1_slot61;
                var1 = _closure1_slot31;
                var1 = var1.id;
                var6 = var6.bind(var2)(var1);
                var1 = !var6;
                var1 = !var1;
                if (!var6) {
                    _fun66025_ip = 114;
                    continue _fun66025
                }
            case 68:
                var6 = var5.id;
                var7 = _closure1_slot29;
                var8 = var3 == var7;
                var2 = undefined;
                if (var8) {
                    _fun66025_ip = 91;
                    continue _fun66025
                }
            case 86:
                var2 = var7.id;
            case 91:
                var2 = var6 === var2;
                if (!var2) {
                    _fun66025_ip = 112;
                    continue _fun66025
                }
            case 98:
                _closure1_slot31 = var5;
                _closure1_slot30 = var5;
                _closure1_slot41 = var3;
                var2 = null;
            case 112:
                var1 = undefined;
            case 114:
                var0 = var1;
            case 117:
                return var0;
        }
    };
    var3.GUILD_PROFILE_UPDATE_SUCCESS = var12;
    var3.GUILD_PROFILE_UPDATE_FAILURE = var10;
    var3.GUILD_PROFILE_UPDATE_VISIBILITY = var11;
    var11 = function arg0() {
        _fun66026: for (var _fun66026_ip = 0;;) switch (_fun66026_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.guildId;
                var1 = _closure1_slot31;
                var3 = null;
                var5 = var3 == var1;
                var2 = undefined;
                var0 = undefined;
                if (var5) {
                    _fun66026_ip = 33;
                    continue _fun66026
                }
            case 28:
                var0 = var1.id;
            case 33:
                var0 = var3 != var0;
                if (!var0) {
                    _fun66026_ip = 126;
                    continue _fun66026
                }
            case 40:
                var5 = _closure1_slot61;
                var1 = _closure1_slot31;
                var1 = var1.id;
                var5 = var5.bind(var2)(var1);
                var1 = !var5;
                var1 = !var1;
                if (!var5) {
                    _fun66026_ip = 123;
                    continue _fun66026
                }
            case 67:
                var5 = _closure1_slot29;
                var6 = var3 == var5;
                var2 = undefined;
                if (var6) {
                    _fun66026_ip = 85;
                    continue _fun66026
                }
            case 80:
                var2 = var5.id;
            case 85:
                var2 = var7 === var2;
                if (!var2) {
                    _fun66026_ip = 121;
                    continue _fun66026
                }
            case 92:
                var6 = _closure1_slot9;
                var5 = var6.getProfile;
                var5 = var5.bind(var6)(var7);
                _closure1_slot31 = var5;
                _closure1_slot30 = var5;
                _closure1_slot41 = var3;
                var2 = null;
            case 121:
                var1 = undefined;
            case 123:
                var0 = var1;
            case 126:
                return var0;
        }
    };
    var3.GUILD_PROFILE_UPDATE_VISIBILITY_SUCCESS = var11;
    var3.GUILD_PROFILE_UPDATE_VISIBILITY_FAILURE = var10;
    var3.USER_CONNECTIONS_UPDATE = var9;
    var3.GUILD_INTEGRATIONS_UPDATE = var9;
    var9 = function arg0() {
        var1 = {};
        var3 = _closure1_slot58;
        var4 = var1;
        var2 = copyDataProperties(var4, var3);
        _closure1_slot58 = var1;
        var0 = arg0;
        var0 = var0.code;
        var0 = delete var1[var0];
        var0 = undefined;
        return var0;
    };
    var3.INSTANT_INVITE_REVOKE_SUCCESS = var9;
    var9 = function arg0() {
        var0 = arg0;
        var2 = {};
        var6 = _closure1_slot58;
        var7 = var2;
        var3 = copyDataProperties(var7, var6);
        var3 = var0.invite;
        var4 = var3.code;
        var5 = _closure1_slot64;
        var3 = var0.invite;
        var0 = undefined;
        var3 = var5.bind(var0)(var3);
        var2[var4] = var3;
        _closure1_slot58 = var2;
        return var0;
    };
    var3.INSTANT_INVITE_CREATE_SUCCESS = var9;
    var9 = function arg0() {
        _fun66029: for (var _fun66029_ip = 0;;) switch (_fun66029_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.guildId;
                var3 = var0.metadata;
                var0 = _closure1_slot29;
                var2 = null;
                var0 = var2 != var0;
                if (!var0) {
                    _fun66029_ip = 43;
                    continue _fun66029
                }
            case 30:
                var4 = _closure1_slot29;
                var4 = var4.id;
                var0 = var5 === var4;
            case 43:
                if (!var0) {
                    _fun66029_ip = 291;
                    continue _fun66029
                }
            case 49:
                var4 = _closure1_slot52;
                var0 = false;
                if (!(var0 === var4)) {
                    _fun66029_ip = 65;
                    continue _fun66029
                }
            case 59:
                var0 = true;
                _closure1_slot52 = var0;
            case 65:
                var0 = {};
                var4 = var3.primaryCategoryId;
                if (!(var2 == var4)) {
                    _fun66029_ip = 81;
                    continue _fun66029
                }
            case 77:
                var4 = _closure1_slot22;
            case 81:
                var0.primaryCategoryId = var4;
                var4 = var3.secondaryCategoryIds;
                if (!(var2 == var4)) {
                    _fun66029_ip = 100;
                    continue _fun66029
                }
            case 96:
                var4 = new Array(0);
            case 100:
                var0.secondaryCategoryIds = var4;
                var4 = var3.keywords;
                if (!(var2 == var4)) {
                    _fun66029_ip = 119;
                    continue _fun66029
                }
            case 115:
                var4 = new Array(0);
            case 119:
                var0.keywords = var4;
                var5 = var3.emojiDiscoverabilityEnabled;
                var6 = var2 != var5;
                var4 = true;
                if (!var6) {
                    _fun66029_ip = 142;
                    continue _fun66029
                }
            case 139:
                var4 = var5;
            case 142:
                var0.emojiDiscoverabilityEnabled = var4;
                var5 = var3.partnerActionedTimestamp;
                var6 = var2 != var5;
                var4 = null;
                if (!var6) {
                    _fun66029_ip = 165;
                    continue _fun66029
                }
            case 162:
                var4 = var5;
            case 165:
                var0.partnerActionedTimestamp = var4;
                var5 = var3.partnerApplicationTimestamp;
                var6 = var2 != var5;
                var4 = null;
                if (!var6) {
                    _fun66029_ip = 188;
                    continue _fun66029
                }
            case 185:
                var4 = var5;
            case 188:
                var0.partnerApplicationTimestamp = var4;
                var5 = var3.isPublished;
                var4 = var2 != var5;
                if (!var4) {
                    _fun66029_ip = 209;
                    continue _fun66029
                }
            case 206:
                var4 = var5;
            case 209:
                var0.isPublished = var4;
                var4 = var3.reasonsToJoin;
                if (!(var2 == var4)) {
                    _fun66029_ip = 228;
                    continue _fun66029
                }
            case 224:
                var4 = new Array(0);
            case 228:
                var0.reasonsToJoin = var4;
                var4 = var3.socialLinks;
                if (!(var2 == var4)) {
                    _fun66029_ip = 247;
                    continue _fun66029
                }
            case 243:
                var4 = new Array(0);
            case 247:
                var0.socialLinks = var4;
                var3 = var3.about;
                var4 = var2 != var3;
                var2 = '';
                if (!var4) {
                    _fun66029_ip = 272;
                    continue _fun66029
                }
            case 269:
                var2 = var3;
            case 272:
                var0.about = var2;
                _closure1_slot53 = var0;
                _closure1_slot54 = var0;
                var0 = {};
                _closure1_slot40 = var0;
            case 291:
                var0 = undefined;
                return var0;
        }
    };
    var3.GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER = var9;
    var9 = function() {
        var0 = _closure1_slot51;
        _closure1_slot54 = var0;
        _closure1_slot53 = var0;
        var0 = undefined;
        return var0;
    };
    var3.GUILD_DISCOVERY_METADATA_FETCH_FAIL = var9;
    var9 = function arg0() {
        _fun66031: for (var _fun66031_ip = 0;;) switch (_fun66031_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.guildId;
                var6 = var0.categoryId;
                var2 = _closure1_slot29;
                var0 = null;
                var0 = var0 != var2;
                if (!var0) {
                    _fun66031_ip = 43;
                    continue _fun66031
                }
            case 30:
                var2 = _closure1_slot29;
                var2 = var2.id;
                var0 = var3 === var2;
            case 43:
                if (!var0) {
                    _fun66031_ip = 159;
                    continue _fun66031
                }
            case 46:
                var0 = {};
                var9 = _closure1_slot54;
                var10 = var0;
                var2 = copyDataProperties(var10, var9);
                var2 = _closure1_slot54;
                var9 = var2.secondaryCategoryIds;
                var2 = new Array(1);
                var10 = var2;
                var8 = 0;
                var3 = arraySpread(var10, var9, var8);
                var2[var3] = var6;
                var5 = 1;
                var3 = var3 + var5;
                var3 = 'secondaryCategoryIds';
                var0[var3] = var2;
                _closure1_slot54 = var0;
                var0 = {};
                var9 = _closure1_slot53;
                var10 = var0;
                var2 = copyDataProperties(var10, var9);
                var2 = _closure1_slot53;
                var9 = var2.secondaryCategoryIds;
                var2 = new Array(1);
                var10 = var2;
                var4 = arraySpread(var10, var9, var8);
                var2[var4] = var6;
                var4 = var4 + var5;
                var0[var3] = var2;
                _closure1_slot53 = var0;
            case 159:
                var0 = undefined;
                return var0;
        }
    };
    var3.GUILD_DISCOVERY_CATEGORY_ADD = var9;
    var9 = function arg0() {
        _fun66032: for (var _fun66032_ip = 0;;) switch (_fun66032_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.guildId;
                var4 = var0.categoryId;
                var3 = _closure1_slot29;
                var0 = null;
                if (!(var0 != var3)) {
                    _fun66032_ip = 230;
                    continue _fun66032
                }
            case 30:
                var0 = _closure1_slot29;
                var0 = var0.id;
                if (!(var2 === var0)) {
                    _fun66032_ip = 230;
                    continue _fun66032
                }
            case 46:
                var0 = _closure1_slot54;
                var2 = var0.secondaryCategoryIds;
                var0 = var2.indexOf;
                var6 = var0.bind(var2)(var4);
                var0 = -1;
                if (!(var0 !== var6)) {
                    _fun66032_ip = 141;
                    continue _fun66032
                }
            case 77:
                var2 = _closure1_slot54;
                var8 = var2.secondaryCategoryIds;
                var5 = new Array(0);
                var7 = 0;
                var9 = var5;
                var2 = arraySpread(var9, var8, var7);
                var3 = var5.splice;
                var2 = 1;
                var2 = var3.bind(var5)(var6, var2);
                var2 = {};
                var8 = _closure1_slot54;
                var9 = var2;
                var3 = copyDataProperties(var9, var8);
                var3 = 'secondaryCategoryIds';
                var2[var3] = var5;
                _closure1_slot54 = var2;
            case 141:
                var2 = _closure1_slot53;
                var3 = var2.secondaryCategoryIds;
                var2 = var3.indexOf;
                var4 = var2.bind(var3)(var4);
                if (!(var0 !== var4)) {
                    _fun66032_ip = 230;
                    continue _fun66032
                }
            case 166:
                var0 = _closure1_slot53;
                var8 = var0.secondaryCategoryIds;
                var3 = new Array(0);
                var7 = 0;
                var9 = var3;
                var0 = arraySpread(var9, var8, var7);
                var2 = var3.splice;
                var0 = 1;
                var0 = var2.bind(var3)(var4, var0);
                var0 = {};
                var8 = _closure1_slot53;
                var9 = var0;
                var2 = copyDataProperties(var9, var8);
                var2 = 'secondaryCategoryIds';
                var0[var2] = var3;
                _closure1_slot53 = var0;
            case 230:
                var0 = undefined;
                return var0;
        }
    };
    var3.GUILD_DISCOVERY_CATEGORY_DELETE = var9;
    var9 = function arg0() {
        _fun66033: for (var _fun66033_ip = 0;;) switch (_fun66033_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.guildId;
                var1 = var0.errors;
                var3 = _closure1_slot29;
                var2 = null;
                var3 = var2 != var3;
                if (!var3) {
                    _fun66033_ip = 43;
                    continue _fun66033
                }
            case 30:
                var4 = _closure1_slot29;
                var4 = var4.id;
                var3 = var5 === var4;
            case 43:
                if (!var3) {
                    _fun66033_ip = 56;
                    continue _fun66033
                }
            case 46:
                if (!(var2 == var1)) {
                    _fun66033_ip = 52;
                    continue _fun66033
                }
            case 50:
                var1 = {};
            case 52:
                _closure1_slot40 = var1;
            case 56:
                var0 = undefined;
                return var0;
        }
    };
    var3.GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL = var9;
    var9 = function arg0() {
        _fun66034: for (var _fun66034_ip = 0;;) switch (_fun66034_ip) {
            case 0:
                var0 = arg0;
                var11 = var0.guildId;
                var10 = var0.primaryCategoryId;
                var9 = var0.keywords;
                var8 = var0.emojiDiscoverabilityEnabled;
                var7 = var0.isPublished;
                var6 = var0.reasonsToJoin;
                var5 = var0.socialLinks;
                var3 = var0.about;
                var0 = _closure1_slot29;
                var2 = null;
                var0 = var2 != var0;
                if (!var0) {
                    _fun66034_ip = 79;
                    continue _fun66034
                }
            case 66:
                var4 = _closure1_slot29;
                var4 = var4.id;
                var0 = var11 === var4;
            case 79:
                if (!var0) {
                    _fun66034_ip = 263;
                    continue _fun66034
                }
            case 85:
                var0 = {};
                var12 = _closure1_slot54;
                var13 = var0;
                var4 = copyDataProperties(var13, var12);
                if (!(var2 == var10)) {
                    _fun66034_ip = 112;
                    continue _fun66034
                }
            case 102:
                var4 = _closure1_slot54;
                var10 = var4.primaryCategoryId;
            case 112:
                var4 = 'primaryCategoryId';
                var0[var4] = var10;
                if (!(var2 == var9)) {
                    _fun66034_ip = 135;
                    continue _fun66034
                }
            case 125:
                var4 = _closure1_slot54;
                var9 = var4.keywords;
            case 135:
                var4 = 'keywords';
                var0[var4] = var9;
                if (!(var2 == var8)) {
                    _fun66034_ip = 158;
                    continue _fun66034
                }
            case 148:
                var4 = _closure1_slot54;
                var8 = var4.emojiDiscoverabilityEnabled;
            case 158:
                var4 = 'emojiDiscoverabilityEnabled';
                var0[var4] = var8;
                if (!(var2 == var7)) {
                    _fun66034_ip = 181;
                    continue _fun66034
                }
            case 171:
                var4 = _closure1_slot54;
                var7 = var4.isPublished;
            case 181:
                var4 = 'isPublished';
                var0[var4] = var7;
                if (!(var2 == var6)) {
                    _fun66034_ip = 204;
                    continue _fun66034
                }
            case 194:
                var4 = _closure1_slot54;
                var6 = var4.reasonsToJoin;
            case 204:
                var4 = 'reasonsToJoin';
                var0[var4] = var6;
                if (!(var2 == var5)) {
                    _fun66034_ip = 227;
                    continue _fun66034
                }
            case 217:
                var4 = _closure1_slot54;
                var5 = var4.socialLinks;
            case 227:
                var4 = 'socialLinks';
                var0[var4] = var5;
                if (!(var2 == var3)) {
                    _fun66034_ip = 250;
                    continue _fun66034
                }
            case 240:
                var2 = _closure1_slot54;
                var3 = var2.about;
            case 250:
                var2 = 'about';
                var0[var2] = var3;
                _closure1_slot54 = var0;
            case 263:
                var0 = undefined;
                return var0;
        }
    };
    var3.GUILD_UPDATE_DISCOVERY_METADATA = var9;
    var9 = function arg0() {
        _fun66035: for (var _fun66035_ip = 0;;) switch (_fun66035_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.guildId;
                var1 = var0.errors;
                var3 = _closure1_slot29;
                var2 = null;
                var3 = var2 != var3;
                if (!var3) {
                    _fun66035_ip = 43;
                    continue _fun66035
                }
            case 30:
                var4 = _closure1_slot29;
                var4 = var4.id;
                var3 = var5 === var4;
            case 43:
                if (!var3) {
                    _fun66035_ip = 56;
                    continue _fun66035
                }
            case 46:
                if (!(var2 == var1)) {
                    _fun66035_ip = 52;
                    continue _fun66035
                }
            case 50:
                var1 = {};
            case 52:
                _closure1_slot40 = var1;
            case 56:
                var0 = undefined;
                return var0;
        }
    };
    var3.GUILD_UPDATE_DISCOVERY_METADATA_FAIL = var9;
    var9 = function arg0() {
        var0 = arg0;
        var1 = var0.slug;
        _closure1_slot34 = var1;
        var0 = undefined;
        return var0;
    };
    var3.GUILD_DISCOVERY_SLUG_FETCH_SUCCESS = var9;
    var9 = function arg0() {
        _fun66037: for (var _fun66037_ip = 0;;) switch (_fun66037_ip) {
            case 0:
                var1 = arg0;
                var2 = null;
                if (!(var1 != var2)) {
                    _fun66037_ip = 20;
                    continue _fun66037
                }
            case 9:
                _closure1_slot34 = var2;
                var0 = undefined;
                return var0;
            case 20:
                var3 = "Cannot destructure 'undefined' or 'null'.";
                var4 = var1;
                var0 = throwTypeError(var4, var3);
                var0 = undefined;
                throw var0;
        }
    };
    var3.GUILD_DISCOVERY_SLUG_FETCH_FAIL = var9;
    var4 = function arg0() {
        _fun66038: for (var _fun66038_ip = 0;;) switch (_fun66038_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.guildId;
                var2 = var0.enabled;
                var1 = var0.channelId;
                var5 = _closure1_slot29;
                var3 = null;
                if (!(var3 != var5)) {
                    _fun66038_ip = 56;
                    continue _fun66038
                }
            case 31:
                var3 = _closure1_slot29;
                var3 = var3.id;
                if (!(var3 === var4)) {
                    _fun66038_ip = 56;
                    continue _fun66038
                }
            case 44:
                _closure1_slot44 = var2;
                _closure1_slot46 = var1;
                var0 = undefined;
                return var0;
            case 56:
                var0 = false;
                return var0;
        }
    };
    var3.GUILD_SETTINGS_WIDGET_UPDATE = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var8
        }
    });
    var21 = var4;
    var19 = var3;
    var3 = new var21[var8](var20, var19, var18);
    var3 = var3 instanceof Object ? var3 : var4;
    var4 = 28;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_settings/GuildSettingsStore.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.EMPTY_METADATA = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1411, 7381, 1376, 1416, 5900, 1628, 1410, 1621, 660, 8157, 6752, 8158, 21, 507, 806, 8159, 8160, 1598, 3045, 8161, 22, 587, 566, 2]);