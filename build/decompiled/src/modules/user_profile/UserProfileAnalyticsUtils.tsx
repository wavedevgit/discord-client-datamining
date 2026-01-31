// modules/user_profile/UserProfileAnalyticsUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var8;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var3);
    var0 = 0;
    var3 = var8[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var8[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var5 = var8[var3];
    var5 = var4.bind(var0)(var5);
    var _closure1_slot5 = var5;
    var3 = var8[var3];
    var3 = var7.bind(var0)(var3);
    var3 = var3.FetchState;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var8[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var8[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var8[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var8[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 7;
    var3 = var8[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var3 = 8;
    var3 = var8[var3];
    var3 = var7.bind(var0)(var3);
    var3 = var3.TrackUserProfileProperties;
    var _closure1_slot12 = var3;
    var3 = 9;
    var3 = var8[var3];
    var3 = var7.bind(var0)(var3);
    var4 = var3.ActivityTypes;
    var _closure1_slot13 = var4;
    var3 = var3.AnalyticEvents;
    var _closure1_slot14 = var3;
    var3 = 10;
    var3 = var8[var3];
    var3 = var7.bind(var0)(var3);
    var3 = var3.StatusTypes;
    var _closure1_slot15 = var3;
    var3 = function arg0() {
        _fun57020: for (var _fun57020_ip = 0;;) switch (_fun57020_ip) {
            case 0:
                var1 = arg0;
                var5 = var1.user;
                var0 = var1.userProfile;
                var8 = var1.guildMember;
                var3 = var1.guildMemberProfile;
                var2 = null;
                if (!(var2 != var0)) {
                    _fun57020_ip = 35;
                    continue _fun57020
                }
            case 32:
                var3 = var0;
            case 35:
                var0 = new Array(0);
                var4 = global;
                var7 = var4.Boolean;
                var9 = var2 == var8;
                var1 = undefined;
                var6 = undefined;
                if (var9) {
                    _fun57020_ip = 64;
                    continue _fun57020
                }
            case 58:
                var6 = var8.nick;
            case 64:
                var6 = var7.bind(var1)(var6);
                if (!var6) {
                    _fun57020_ip = 95;
                    continue _fun57020
                }
            case 72:
                var7 = var0.push;
                var6 = _closure1_slot12;
                var6 = var6.NICKNAME;
                var6 = var7.bind(var0)(var6);
            case 95:
                var7 = var4.Boolean;
                var8 = var2 == var3;
                var6 = undefined;
                if (var8) {
                    _fun57020_ip = 116;
                    continue _fun57020
                }
            case 110:
                var6 = var3.pronouns;
            case 116:
                var6 = var7.bind(var1)(var6);
                if (!var6) {
                    _fun57020_ip = 147;
                    continue _fun57020
                }
            case 124:
                var7 = var0.push;
                var6 = _closure1_slot12;
                var6 = var6.PRONOUNS;
                var6 = var7.bind(var0)(var6);
            case 147:
                var7 = var4.Boolean;
                var8 = var2 == var5;
                var6 = undefined;
                if (var8) {
                    _fun57020_ip = 168;
                    continue _fun57020
                }
            case 162:
                var6 = var5.avatar;
            case 168:
                var6 = var7.bind(var1)(var6);
                if (!var6) {
                    _fun57020_ip = 256;
                    continue _fun57020
                }
            case 176:
                var7 = _closure1_slot0;
                var9 = _closure1_slot2;
                var6 = 11;
                var6 = var9[var6];
                var9 = var7.bind(var1)(var6);
                var7 = var9.isAnimatedIconHash;
                var10 = var2 == var5;
                var6 = undefined;
                if (var10) {
                    _fun57020_ip = 220;
                    continue _fun57020
                }
            case 214:
                var6 = var5.avatar;
            case 220:
                var6 = var7.bind(var9)(var6);
                var7 = var0.push;
                var8 = _closure1_slot12;
                if (var6) {
                    _fun57020_ip = 245;
                    continue _fun57020
                }
            case 237:
                var6 = var8.AVATAR;
                _fun57020_ip = 251;
                continue _fun57020;
            case 245:
                var6 = var8.ANIMATED_AVATAR;
            case 251:
                var6 = var7.bind(var0)(var6);
            case 256:
                var7 = var4.Boolean;
                var8 = var2 == var3;
                var6 = undefined;
                if (var8) {
                    _fun57020_ip = 277;
                    continue _fun57020
                }
            case 271:
                var6 = var3.banner;
            case 277:
                var6 = var7.bind(var1)(var6);
                if (!var6) {
                    _fun57020_ip = 365;
                    continue _fun57020
                }
            case 285:
                var7 = _closure1_slot0;
                var9 = _closure1_slot2;
                var6 = 11;
                var6 = var9[var6];
                var9 = var7.bind(var1)(var6);
                var7 = var9.isAnimatedIconHash;
                var10 = var2 == var3;
                var6 = undefined;
                if (var10) {
                    _fun57020_ip = 329;
                    continue _fun57020
                }
            case 323:
                var6 = var3.banner;
            case 329:
                var6 = var7.bind(var9)(var6);
                var7 = var0.push;
                var8 = _closure1_slot12;
                if (var6) {
                    _fun57020_ip = 354;
                    continue _fun57020
                }
            case 346:
                var6 = var8.BANNER;
                _fun57020_ip = 360;
                continue _fun57020;
            case 354:
                var6 = var8.ANIMATED_BANNER;
            case 360:
                var6 = var7.bind(var0)(var6);
            case 365:
                var6 = var4.Boolean;
                var7 = var2 == var3;
                var4 = undefined;
                if (var7) {
                    _fun57020_ip = 386;
                    continue _fun57020
                }
            case 380:
                var4 = var3.bio;
            case 386:
                var4 = var6.bind(var1)(var4);
                if (!var4) {
                    _fun57020_ip = 417;
                    continue _fun57020
                }
            case 394:
                var6 = var0.push;
                var4 = _closure1_slot12;
                var4 = var4.BIO;
                var4 = var6.bind(var0)(var4);
            case 417:
                var6 = var2 == var3;
                var4 = undefined;
                if (var6) {
                    _fun57020_ip = 432;
                    continue _fun57020
                }
            case 426:
                var4 = var3.themeColors;
            case 432:
                var4 = var2 != var4;
                if (!var4) {
                    _fun57020_ip = 466;
                    continue _fun57020
                }
            case 439:
                var8 = var3.themeColors;
                var7 = var8.find;
                var6 = function(arg0) { // Environment: var6
                    var1 = null;
                    var0 = arg0;
                    var0 = var1 !== var0;
                    return var0;
                };
                var6 = var7.bind(var8)(var6);
                var4 = var1 !== var6;
            case 466:
                if (!var4) {
                    _fun57020_ip = 492;
                    continue _fun57020
                }
            case 469:
                var6 = var0.push;
                var4 = _closure1_slot12;
                var4 = var4.THEME;
                var4 = var6.bind(var0)(var4);
            case 492:
                var6 = var2 == var5;
                var4 = undefined;
                if (var6) {
                    _fun57020_ip = 507;
                    continue _fun57020
                }
            case 501:
                var4 = var5.avatarDecoration;
            case 507:
                if (!(var2 != var4)) {
                    _fun57020_ip = 534;
                    continue _fun57020
                }
            case 511:
                var5 = var0.push;
                var4 = _closure1_slot12;
                var4 = var4.AVATAR_DECORATION;
                var4 = var5.bind(var0)(var4);
            case 534:
                var4 = var2 == var3;
                var1 = undefined;
                if (var4) {
                    _fun57020_ip = 549;
                    continue _fun57020
                }
            case 543:
                var1 = var3.profileEffect;
            case 549:
                if (!(var2 != var1)) {
                    _fun57020_ip = 576;
                    continue _fun57020
                }
            case 553:
                var2 = var0.push;
                var1 = _closure1_slot12;
                var1 = var1.PROFILE_EFFECT;
                var1 = var2.bind(var0)(var1);
            case 576:
                return var0;
        }
    };
    var _closure1_slot16 = var3;
    var3 = function arg0() {
        _fun57022: for (var _fun57022_ip = 0;;) switch (_fun57022_ip) {
            case 0:
                var3 = arg0;
                var2 = _closure1_slot8;
                var1 = var2.getStatus;
                var4 = var1.bind(var2)(var3);
                var1 = var2.isMobileOnline;
                var1 = var1.bind(var2)(var3);
                var2 = _closure1_slot15;
                var2 = var2.ONLINE;
                if (!(var4 === var2)) {
                    _fun57022_ip = 49;
                    continue _fun57022
                }
            case 46:
                if (var1) {
                    _fun57022_ip = 97;
                    continue _fun57022
                }
            case 49:
                var0 = _closure1_slot15;
                var1 = var0.ONLINE;
                var0 = var4;
                if (!(var0 === var1)) {
                    _fun57022_ip = 95;
                    continue _fun57022
                }
            case 66:
                var1 = global;
                var1 = var1.HermesInternal;
                var3 = var1.concat;
                var2 = '';
                var1 = '-desktop';
                var0 = var3.bind(var2)(var4, var1);
            case 95:
                _fun57022_ip = 126;
                continue _fun57022;
            case 97:
                var1 = global;
                var1 = var1.HermesInternal;
                var3 = var1.concat;
                var2 = '';
                var1 = '-mobile';
                var0 = var3.bind(var2)(var4, var1);
            case 126:
                return var0;
        }
    };
    var _closure1_slot17 = var3;
    var5 = function arg0() {
        _fun57023: for (var _fun57023_ip = 0;;) switch (_fun57023_ip) {
            case 0:
                var5 = arg0;
                var1 = null;
                var0 = var5;
                if (!(var1 != var0)) {
                    _fun57023_ip = 79;
                    continue _fun57023
                }
            case 12:
                var1 = 'VOICE';
                if (!(var1 !== var5)) {
                    _fun57023_ip = 76;
                    continue _fun57023
                }
            case 20:
                var2 = global;
                var4 = var2.Object;
                var3 = var4.keys;
                var6 = _closure1_slot13;
                var3 = var3.bind(var4)(var6);
                var4 = var2.Object;
                var2 = var4.values;
                var4 = var2.bind(var4)(var6);
                var2 = var4.indexOf;
                var2 = var2.bind(var4)(var5);
                var1 = var3[var2];
            case 76:
                var0 = var1;
            case 79:
                return var0;
        }
    };
    var _closure1_slot18 = var5;
    var3 = function arg0() {
        _fun57024: for (var _fun57024_ip = 0;;) switch (_fun57024_ip) {
            case 0:
                var0 = arg0;
                var10 = var0.layout;
                var4 = var0.userId;
                var13 = var0.guildId;
                var8 = var0.sessionId;
                var6 = var0.sourceSessionId;
                var0 = var0.showGuildProfile;
                var2 = undefined;
                if (!(var0 === var2)) {
                    _fun57024_ip = 47;
                    continue _fun57024
                }
            case 45:
                var0 = true;
            case 47:
                var3 = _closure1_slot10;
                var1 = var3.getUser;
                var1 = var1.bind(var3)(var4);
                var3 = null;
                if (!(var3 != var1)) {
                    _fun57024_ip = 507;
                    continue _fun57024
                }
            case 74:
                var9 = _closure1_slot0;
                var11 = _closure1_slot2;
                var4 = 12;
                var4 = var11[var4];
                var12 = var9.bind(var2)(var4);
                var11 = var12.getDisplayProfile;
                var4 = var3 == var1;
                var9 = undefined;
                if (var4) {
                    _fun57024_ip = 114;
                    continue _fun57024
                }
            case 109:
                var9 = var1.id;
            case 114:
                var4 = undefined;
                if (!var0) {
                    _fun57024_ip = 122;
                    continue _fun57024
                }
            case 119:
                var4 = var13;
            case 122:
                var4 = var11.bind(var12)(var9, var4);
                var9 = null;
                if (!var0) {
                    _fun57024_ip = 172;
                    continue _fun57024
                }
            case 133:
                var0 = var3 != var13;
                var9 = null;
                if (!var0) {
                    _fun57024_ip = 172;
                    continue _fun57024
                }
            case 142:
                var12 = _closure1_slot7;
                var11 = var12.getMember;
                var14 = var3 == var1;
                var0 = undefined;
                if (var14) {
                    _fun57024_ip = 166;
                    continue _fun57024
                }
            case 161:
                var0 = var1.id;
            case 166:
                var9 = var11.bind(var12)(var13, var0);
            case 172:
                var0 = {};
                var0.profile_layout = var10;
                var0.profile_session_id = var8;
                var0.source_profile_session_id = var6;
                var8 = _closure1_slot16;
                var6 = {};
                var6.user = var1;
                var11 = var3 == var4;
                var10 = undefined;
                if (var11) {
                    _fun57024_ip = 220;
                    continue _fun57024
                }
            case 214:
                var10 = var4._userProfile;
            case 220:
                var6.userProfile = var10;
                var6 = var8.bind(var2)(var6);
                var0.profile_properties = var6;
                var8 = _closure1_slot16;
                var6 = {};
                var6.guildMember = var9;
                var10 = var3 == var4;
                var9 = undefined;
                if (var10) {
                    _fun57024_ip = 263;
                    continue _fun57024
                }
            case 257:
                var9 = var4._guildMemberProfile;
            case 263:
                var6.guildMemberProfile = var9;
                var6 = var8.bind(var2)(var6);
                var0.guild_profile_properties = var6;
                var9 = _closure1_slot8;
                var8 = var9.getActivities;
                var6 = var1.id;
                var9 = var8.bind(var9)(var6);
                var8 = var9.map;
                var6 = function(arg0) { // Environment: var7
                    var0 = arg0;
                    var0 = var0.type;
                    return var0;
                };
                var9 = var8.bind(var9)(var6);
                var8 = var9.filter;
                var6 = function(arg0) { // Environment: var7
                    var1 = undefined;
                    var0 = arg0;
                    var0 = var1 !== var0;
                    return var0;
                };
                var6 = var8.bind(var9)(var6);
                var0.profile_activity_types = var6;
                var8 = var3 == var4;
                var6 = undefined;
                if (var8) {
                    _fun57024_ip = 380;
                    continue _fun57024
                }
            case 346:
                var8 = var4.getBadges;
                var9 = var8.bind(var4)();
                var8 = var3 == var9;
                var6 = undefined;
                if (var8) {
                    _fun57024_ip = 380;
                    continue _fun57024
                }
            case 365:
                var8 = var9.map;
                var7 = function(arg0) { // Environment: var7
                    var0 = arg0;
                    var0 = var0.id;
                    return var0;
                };
                var6 = var8.bind(var9)(var7);
            case 380:
                var0.profile_badges = var6;
                var7 = var1.avatarDecoration;
                var8 = var3 == var7;
                var6 = undefined;
                if (var8) {
                    _fun57024_ip = 408;
                    continue _fun57024
                }
            case 402:
                var6 = var7.skuId;
            case 408:
                var0.avatar_decoration_sku_id = var6;
                var7 = var3 == var4;
                var6 = undefined;
                if (var7) {
                    _fun57024_ip = 443;
                    continue _fun57024
                }
            case 422:
                var7 = var4.profileEffect;
                var8 = var3 == var7;
                var6 = undefined;
                if (var8) {
                    _fun57024_ip = 443;
                    continue _fun57024
                }
            case 437:
                var6 = var7.skuId;
            case 443:
                var0.profile_effect_sku_id = var6;
                var6 = _closure1_slot17;
                var5 = var1.id;
                var5 = var6.bind(var2)(var5);
                var0.user_status = var5;
                var5 = var3 == var4;
                var2 = undefined;
                if (var5) {
                    _fun57024_ip = 483;
                    continue _fun57024
                }
            case 478:
                var2 = var4.guildId;
            case 483:
                var2 = var3 != var2;
                var0.is_guild_profile = var2;
                var1 = var1.bot;
                var0.is_bot_profile = var1;
                return var0;
            case 507:
                var0 = {};
                return var0;
        }
    };
    var _closure1_slot19 = var3;
    var4 = function arg0() {
        _fun57028: for (var _fun57028_ip = 0;;) switch (_fun57028_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.userId;
                var3 = null;
                if (!(var3 != var5)) {
                    _fun57028_ip = 178;
                    continue _fun57028
                }
            case 17:
                var2 = _closure1_slot3;
                var0 = var2.getUserAffinity;
                var2 = var0.bind(var2)(var5);
                var0 = {};
                var0.related_user_id = var5;
                var6 = _closure1_slot9;
                var4 = var6.getRelationshipType;
                var4 = var4.bind(var6)(var5);
                var0.relationship_type = var4;
                var4 = var6.getSince;
                var4 = var4.bind(var6)(var5);
                var0.related_since = var4;
                var4 = _closure1_slot11;
                var1 = var4.getMutualFriendsCount;
                var1 = var1.bind(var4)(var5);
                var0.num_mutual_friends = var1;
                var1 = var4.getMutualGuilds;
                var5 = var1.bind(var4)(var5);
                var6 = var3 == var5;
                var4 = undefined;
                if (var6) {
                    _fun57028_ip = 129;
                    continue _fun57028
                }
            case 124:
                var4 = var5.length;
            case 129:
                var0.num_mutual_guilds = var4;
                var5 = var3 == var2;
                var4 = undefined;
                if (var5) {
                    _fun57028_ip = 151;
                    continue _fun57028
                }
            case 145:
                var4 = var2.communicationProbability;
            case 151:
                var0.communication_probability = var4;
                var3 = var3 == var2;
                var1 = undefined;
                if (var3) {
                    _fun57028_ip = 171;
                    continue _fun57028
                }
            case 165:
                var1 = var2.communicationRank;
            case 171:
                var0.communication_rank = var1;
                return var0;
            case 178:
                var0 = {};
                return var0;
        }
    };
    var _closure1_slot20 = var4;
    var3 = function arg0() {
        _fun57029: for (var _fun57029_ip = 0;;) switch (_fun57029_ip) {
            case 0:
                var5 = arg0;
                var0 = {};
                var0.application_id = var5;
                var3 = null;
                var2 = var3 != var5;
                var1 = null;
                if (!var2) {
                    _fun57029_ip = 74;
                    continue _fun57029
                }
            case 21:
                var6 = _closure1_slot5;
                var4 = var6.getFetchStateForApplication;
                var6 = var4.bind(var6)(var5);
                var4 = _closure1_slot6;
                var4 = var4.FETCHED;
                var1 = null;
                if (!(var6 === var4)) {
                    _fun57029_ip = 74;
                    continue _fun57029
                }
            case 55:
                var4 = _closure1_slot5;
                var2 = var4.getNewestTokenForApplication;
                var2 = var2.bind(var4)(var5);
                var1 = var3 != var2;
            case 74:
                var0.application_linked = var1;
                return var0;
        }
    };
    var _closure1_slot21 = var3;
    var3 = function arg0() {
        var14 = arg0;
        var20 = var14.guildId;
        var16 = var14.channelId;
        var8 = var14.messageId;
        var7 = var14.roleId;
        var6 = var14.widgetType;
        var11 = var14.analyticsLocations;
        var10 = var14.action;
        var9 = var14.section;
        var12 = var14.applicationId;
        var2 = _closure1_slot1;
        var17 = _closure1_slot2;
        var0 = 13;
        var1 = var17[var0];
        var0 = undefined;
        var4 = var2.bind(var0)(var1);
        var3 = var4.track;
        var1 = _closure1_slot14;
        var2 = var1.USER_PROFILE_ACTION;
        var1 = {};
        var15 = _closure1_slot0;
        var13 = 14;
        var18 = var17[var13];
        var19 = var15.bind(var0)(var18);
        var18 = var19.collectGuildAnalyticsMetadata;
        var21 = var18.bind(var19)(var20);
        var22 = var1;
        var18 = copyDataProperties(var22, var21);
        var13 = var17[var13];
        var15 = var15.bind(var0)(var13);
        var13 = var15.collectChannelAnalyticsMetadataFromId;
        var21 = var13.bind(var15)(var16);
        var22 = var1;
        var13 = copyDataProperties(var22, var21);
        var13 = _closure1_slot19;
        var21 = var13.bind(var0)(var14);
        var22 = var1;
        var13 = copyDataProperties(var22, var21);
        var13 = _closure1_slot20;
        var21 = var13.bind(var0)(var14);
        var22 = var1;
        var13 = copyDataProperties(var22, var21);
        var5 = _closure1_slot21;
        var21 = var5.bind(var0)(var12);
        var22 = var1;
        var5 = copyDataProperties(var22, var21);
        var5 = 'location_stack';
        var1[var5] = var11;
        var5 = 'profile_action';
        var1[var5] = var10;
        var5 = 'profile_section';
        var1[var5] = var9;
        var5 = 'source_message_id';
        var1[var5] = var8;
        var5 = 'source_role_id';
        var1[var5] = var7;
        var5 = 'widget_type';
        var1[var5] = var6;
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var _closure1_slot22 = var3;
    var6 = 16;
    var6 = var8[var6];
    var8 = var7.bind(var0)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/user_profile/UserProfileAnalyticsUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var2.getActivityType = var5;
    var2.getTrackUserRelationshipProperties = var4;
    var2.trackUserProfileAction = var3;
    var3 = function(arg0) { // Environment: var1
        _fun57031: for (var _fun57031_ip = 0;;) switch (_fun57031_ip) {
            case 0:
                var13 = arg0;
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 15;
                var1 = var1[var0];
                var0 = undefined;
                var3 = var2.bind(var0)(var1);
                var2 = var3.isUserProfilePerformanceAnalyticsEnabled;
                var1 = {};
                var4 = 'UserProfileAnalyticsUtils';
                var1.location = var4;
                var1 = var2.bind(var3)(var1);
                if (!var1) {
                    _fun57031_ip = 384;
                    continue _fun57031
                }
            case 57:
                var20 = var13.guildId;
                var16 = var13.channelId;
                var12 = var13.analyticsLocations;
                var11 = var13.profileUi;
                var10 = var13.viewStartedAt;
                var9 = var13.fetchStartedAt;
                var8 = var13.timeToInteractiveMs;
                var7 = var13.timeToLoadMs;
                var6 = var13.timeToFetchMs;
                var2 = null;
                var4 = var2 != var8;
                var3 = 0;
                var1 = 0;
                if (!var4) {
                    _fun57031_ip = 125;
                    continue _fun57031
                }
            case 122:
                var1 = var8;
            case 125:
                var1 = var1 <= var3;
                if (var1) {
                    _fun57031_ip = 148;
                    continue _fun57031
                }
            case 132:
                var14 = var2 != var7;
                var4 = 0;
                if (!var14) {
                    _fun57031_ip = 144;
                    continue _fun57031
                }
            case 141:
                var4 = var7;
            case 144:
                var1 = var4 <= var3;
            case 148:
                if (var1) {
                    _fun57031_ip = 167;
                    continue _fun57031
                }
            case 151:
                var4 = var2 != var6;
                var2 = 0;
                if (!var4) {
                    _fun57031_ip = 163;
                    continue _fun57031
                }
            case 160:
                var2 = var6;
            case 163:
                var1 = var2 <= var3;
            case 167:
                if (var1) {
                    _fun57031_ip = 384;
                    continue _fun57031
                }
            case 173:
                var2 = _closure1_slot1;
                var17 = _closure1_slot2;
                var1 = 13;
                var1 = var17[var1];
                var4 = var2.bind(var0)(var1);
                var3 = var4.track;
                var1 = _closure1_slot14;
                var2 = var1.USER_PROFILE_UI_VIEWED;
                var1 = {};
                var15 = _closure1_slot0;
                var14 = 14;
                var18 = var17[var14];
                var19 = var15.bind(var0)(var18);
                var18 = var19.collectGuildAnalyticsMetadata;
                var21 = var18.bind(var19)(var20);
                var22 = var1;
                var18 = copyDataProperties(var22, var21);
                var14 = var17[var14];
                var15 = var15.bind(var0)(var14);
                var14 = var15.collectChannelAnalyticsMetadataFromId;
                var21 = var14.bind(var15)(var16);
                var22 = var1;
                var14 = copyDataProperties(var22, var21);
                var14 = _closure1_slot19;
                var21 = var14.bind(var0)(var13);
                var22 = var1;
                var14 = copyDataProperties(var22, var21);
                var5 = _closure1_slot20;
                var21 = var5.bind(var0)(var13);
                var22 = var1;
                var5 = copyDataProperties(var22, var21);
                var5 = 'location_stack';
                var1[var5] = var12;
                var5 = 'profile_ui';
                var1[var5] = var11;
                var5 = 'view_started_at';
                var1[var5] = var10;
                var5 = 'fetch_started_at';
                var1[var5] = var9;
                var5 = 'time_to_interactive_ms';
                var1[var5] = var8;
                var5 = 'time_to_load_ms';
                var1[var5] = var7;
                var5 = 'time_to_fetch_ms';
                var1[var5] = var6;
                var1 = var3.bind(var4)(var2, var1);
            case 384:
                return var0;
        }
    };
    var2.maybeTrackUserProfileUiViewed = var3;
    var3 = function(arg0) { // Environment: var1
        _fun57032: for (var _fun57032_ip = 0;;) switch (_fun57032_ip) {
            case 0:
                var14 = arg0;
                var20 = var14.guildId;
                var16 = var14.channelId;
                var13 = var14.analyticsLocations;
                var12 = var14.activityType;
                var10 = var14.activityName;
                var9 = var14.activityPlatform;
                var8 = var14.activitySessionId;
                var7 = var14.applicationId;
                var6 = var14.voiceChannelId;
                var2 = _closure1_slot1;
                var17 = _closure1_slot2;
                var0 = 13;
                var1 = var17[var0];
                var0 = undefined;
                var4 = var2.bind(var0)(var1);
                var3 = var4.track;
                var1 = _closure1_slot14;
                var2 = var1.USER_PROFILE_ACTIVITY_JOINED;
                var1 = {};
                var15 = _closure1_slot0;
                var11 = 14;
                var18 = var17[var11];
                var19 = var15.bind(var0)(var18);
                var18 = var19.collectGuildAnalyticsMetadata;
                var21 = var18.bind(var19)(var20);
                var22 = var1;
                var18 = copyDataProperties(var22, var21);
                var11 = var17[var11];
                var15 = var15.bind(var0)(var11);
                var11 = var15.collectChannelAnalyticsMetadataFromId;
                var21 = var11.bind(var15)(var16);
                var22 = var1;
                var11 = copyDataProperties(var22, var21);
                var11 = _closure1_slot19;
                var21 = var11.bind(var0)(var14);
                var22 = var1;
                var11 = copyDataProperties(var22, var21);
                var11 = _closure1_slot20;
                var21 = var11.bind(var0)(var14);
                var22 = var1;
                var11 = copyDataProperties(var22, var21);
                var11 = 'location_stack';
                var1[var11] = var13;
                var11 = null;
                var13 = var11 != var6;
                var11 = 'VOICE';
                if (var13) {
                    _fun57032_ip = 222;
                    continue _fun57032
                }
            case 213:
                var5 = _closure1_slot18;
                var11 = var5.bind(var0)(var12);
            case 222:
                var5 = 'activity_type';
                var1[var5] = var11;
                var5 = 'activity_name';
                var1[var5] = var10;
                var5 = 'activity_platform';
                var1[var5] = var9;
                var5 = 'activity_session_id';
                var1[var5] = var8;
                var5 = 'application_id';
                var1[var5] = var7;
                var5 = 'voice_channel_id';
                var1[var5] = var6;
                var1 = var3.bind(var4)(var2, var1);
                return var0;
        }
    };
    var2.trackUserProfileActivityJoined = var3;
    var3 = function(arg0) { // Environment: var1
        _fun57033: for (var _fun57033_ip = 0;;) switch (_fun57033_ip) {
            case 0:
                var16 = arg0;
                var22 = var16.guildId;
                var18 = var16.channelId;
                var15 = var16.analyticsLocations;
                var14 = var16.action;
                var12 = var16.display;
                var10 = var16.activity;
                var11 = var16.stream;
                var9 = var16.entry;
                var8 = var16.outbox;
                var6 = var16.voiceChannelId;
                var2 = _closure1_slot1;
                var19 = _closure1_slot2;
                var0 = 13;
                var1 = var19[var0];
                var0 = undefined;
                var4 = var2.bind(var0)(var1);
                var3 = var4.track;
                var1 = _closure1_slot14;
                var2 = var1.USER_PROFILE_ACTIVITY_ACTION;
                var1 = {};
                var17 = _closure1_slot0;
                var7 = 14;
                var20 = var19[var7];
                var21 = var17.bind(var0)(var20);
                var20 = var21.collectGuildAnalyticsMetadata;
                var23 = var20.bind(var21)(var22);
                var24 = var1;
                var20 = copyDataProperties(var24, var23);
                var7 = var19[var7];
                var17 = var17.bind(var0)(var7);
                var7 = var17.collectChannelAnalyticsMetadataFromId;
                var23 = var7.bind(var17)(var18);
                var24 = var1;
                var7 = copyDataProperties(var24, var23);
                var7 = _closure1_slot19;
                var23 = var7.bind(var0)(var16);
                var24 = var1;
                var7 = copyDataProperties(var24, var23);
                var7 = _closure1_slot20;
                var23 = var7.bind(var0)(var16);
                var24 = var1;
                var7 = copyDataProperties(var24, var23);
                var7 = 'location_stack';
                var1[var7] = var15;
                var7 = 'activity_action';
                var1[var7] = var14;
                var7 = 'activity_display';
                var1[var7] = var12;
                var12 = _closure1_slot18;
                var7 = null;
                if (!(var7 == var11)) {
                    _fun57033_ip = 253;
                    continue _fun57033
                }
            case 237:
                var14 = var7 == var10;
                var11 = undefined;
                if (var14) {
                    _fun57033_ip = 251;
                    continue _fun57033
                }
            case 246:
                var11 = var10.type;
            case 251:
                _fun57033_ip = 263;
                continue _fun57033;
            case 253:
                var13 = _closure1_slot13;
                var11 = var13.STREAMING;
            case 263:
                var12 = var12.bind(var0)(var11);
                var11 = 'activity_type';
                var1[var11] = var12;
                var11 = var7 == var10;
                var12 = undefined;
                if (var11) {
                    _fun57033_ip = 293;
                    continue _fun57033
                }
            case 288:
                var12 = var10.name;
            case 293:
                var11 = 'activity_name';
                var1[var11] = var12;
                var11 = var7 == var10;
                var12 = undefined;
                if (var11) {
                    _fun57033_ip = 317;
                    continue _fun57033
                }
            case 311:
                var12 = var10.platform;
            case 317:
                var11 = 'activity_platform';
                var1[var11] = var12;
                var11 = var7 == var10;
                var12 = undefined;
                if (var11) {
                    _fun57033_ip = 343;
                    continue _fun57033
                }
            case 337:
                var12 = var10.session_id;
            case 343:
                var11 = 'activity_session_id';
                var1[var11] = var12;
                var12 = var7 == var10;
                var11 = undefined;
                if (var12) {
                    _fun57033_ip = 367;
                    continue _fun57033
                }
            case 361:
                var11 = var10.application_id;
            case 367:
                var10 = 'activity_application_id';
                var1[var10] = var11;
                var10 = var7 == var9;
                var11 = undefined;
                if (var10) {
                    _fun57033_ip = 392;
                    continue _fun57033
                }
            case 387:
                var11 = var9.id;
            case 392:
                var10 = 'item_id';
                var1[var10] = var11;
                var11 = var7 == var9;
                var10 = undefined;
                if (var11) {
                    _fun57033_ip = 416;
                    continue _fun57033
                }
            case 410:
                var10 = var9.author_id;
            case 416:
                var9 = 'author_id_v2';
                var1[var9] = var10;
                var9 = var7 == var8;
                var10 = undefined;
                if (var9) {
                    _fun57033_ip = 457;
                    continue _fun57033
                }
            case 436:
                var12 = var8.entries;
                var11 = var12.map;
                var9 = function(arg0) { // Environment: var5
                    var0 = arg0;
                    var0 = var0.id;
                    return var0;
                };
                var10 = var11.bind(var12)(var9);
            case 457:
                var9 = 'item_ids';
                var1[var9] = var10;
                var9 = var7 == var8;
                var7 = undefined;
                if (var9) {
                    _fun57033_ip = 498;
                    continue _fun57033
                }
            case 477:
                var9 = var8.entries;
                var8 = var9.map;
                var5 = function(arg0) { // Environment: var5
                    var0 = arg0;
                    var0 = var0.author_id;
                    return var0;
                };
                var7 = var8.bind(var9)(var5);
            case 498:
                var5 = 'author_ids_v2';
                var1[var5] = var7;
                var5 = 'voice_channel_id';
                var1[var5] = var6;
                var1 = var3.bind(var4)(var2, var1);
                return var0;
        }
    };
    var2.trackUserProfileActivityAction = var3;
    var3 = function(arg0) { // Environment: var1
        var8 = arg0;
        var15 = var8.guildId;
        var11 = var8.channelId;
        var7 = var8.analyticsLocations;
        var6 = var8.badge;
        var2 = _closure1_slot1;
        var12 = _closure1_slot2;
        var0 = 13;
        var1 = var12[var0];
        var0 = undefined;
        var4 = var2.bind(var0)(var1);
        var3 = var4.track;
        var1 = _closure1_slot14;
        var2 = var1.USER_PROFILE_BADGE_PRESSED;
        var1 = {};
        var10 = _closure1_slot0;
        var9 = 14;
        var13 = var12[var9];
        var14 = var10.bind(var0)(var13);
        var13 = var14.collectGuildAnalyticsMetadata;
        var16 = var13.bind(var14)(var15);
        var17 = var1;
        var13 = copyDataProperties(var17, var16);
        var9 = var12[var9];
        var10 = var10.bind(var0)(var9);
        var9 = var10.collectChannelAnalyticsMetadataFromId;
        var16 = var9.bind(var10)(var11);
        var17 = var1;
        var9 = copyDataProperties(var17, var16);
        var9 = _closure1_slot19;
        var16 = var9.bind(var0)(var8);
        var17 = var1;
        var9 = copyDataProperties(var17, var16);
        var5 = _closure1_slot20;
        var16 = var5.bind(var0)(var8);
        var17 = var1;
        var5 = copyDataProperties(var17, var16);
        var5 = 'location_stack';
        var1[var5] = var7;
        var5 = 'badge';
        var1[var5] = var6;
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var2.trackUserProfileBadgePressed = var3;
    var3 = function(arg0) { // Environment: var1
        var8 = arg0;
        var15 = var8.guildId;
        var11 = var8.channelId;
        var7 = var8.analyticsLocations;
        var6 = var8.badge;
        var2 = _closure1_slot1;
        var12 = _closure1_slot2;
        var0 = 13;
        var1 = var12[var0];
        var0 = undefined;
        var4 = var2.bind(var0)(var1);
        var3 = var4.track;
        var1 = _closure1_slot14;
        var2 = var1.USER_PROFILE_BADGE_HOVERED;
        var1 = {};
        var10 = _closure1_slot0;
        var9 = 14;
        var13 = var12[var9];
        var14 = var10.bind(var0)(var13);
        var13 = var14.collectGuildAnalyticsMetadata;
        var16 = var13.bind(var14)(var15);
        var17 = var1;
        var13 = copyDataProperties(var17, var16);
        var9 = var12[var9];
        var10 = var10.bind(var0)(var9);
        var9 = var10.collectChannelAnalyticsMetadataFromId;
        var16 = var9.bind(var10)(var11);
        var17 = var1;
        var9 = copyDataProperties(var17, var16);
        var9 = _closure1_slot19;
        var16 = var9.bind(var0)(var8);
        var17 = var1;
        var9 = copyDataProperties(var17, var16);
        var5 = _closure1_slot20;
        var16 = var5.bind(var0)(var8);
        var17 = var1;
        var5 = copyDataProperties(var17, var16);
        var5 = 'location_stack';
        var1[var5] = var7;
        var5 = 'badge';
        var1[var5] = var6;
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var2.trackUserProfileBadgeHovered = var3;
    var3 = function(arg0) { // Environment: var1
        _fun57038: for (var _fun57038_ip = 0;;) switch (_fun57038_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.displayProfile;
                var9 = var0.isProfileOpen;
                var0 = undefined;
                var _closure2_slot0 = var0;
                var6 = null;
                var2 = var6 == var7;
                var5 = undefined;
                if (var2) {
                    _fun57038_ip = 39;
                    continue _fun57038
                }
            case 34:
                var5 = var7.userId;
            case 39:
                _closure2_slot0 = var5;
                var2 = var6 != var5;
                var12 = null;
                if (!var2) {
                    _fun57038_ip = 76;
                    continue _fun57038
                }
            case 52:
                var3 = _closure1_slot8;
                var2 = var3.findActivity;
                var1 = function(arg0) { // Environment: var1
                    _fun57039: for (var _fun57039_ip = 0;;) switch (_fun57039_ip) {
                        case 0:
                            var0 = arg0;
                            var2 = var0.type;
                            var4 = _closure1_slot4;
                            var3 = var4.getAnyStreamForUser;
                            var0 = _closure2_slot0;
                            var3 = var3.bind(var4)(var0);
                            var0 = null;
                            if (!(var0 == var3)) {
                                _fun57039_ip = 57;
                                continue _fun57039
                            }
                        case 41:
                            var0 = _closure1_slot13;
                            var0 = var0.CUSTOM_STATUS;
                            var0 = var2 !== var0;
                            _fun57039_ip = 71;
                            continue _fun57039;
                        case 57:
                            var1 = _closure1_slot13;
                            var1 = var1.PLAYING;
                            var0 = var2 === var1;
                        case 71:
                            return var0;
                    }
                };
                var12 = var2.bind(var3)(var5, var1);
            case 76:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 13;
                var1 = var3[var1];
                var4 = var2.bind(var0)(var1);
                var3 = var4.track;
                var1 = _closure1_slot14;
                var2 = var1.DM_PROFILE_TOGGLED;
                var1 = {};
                var1.is_profile_open = var9;
                var9 = global;
                var10 = var9.Boolean;
                var11 = var6 == var12;
                var9 = undefined;
                if (var11) {
                    _fun57038_ip = 161;
                    continue _fun57038
                }
            case 140:
                var11 = var12.assets;
                var13 = var6 == var11;
                var9 = undefined;
                if (var13) {
                    _fun57038_ip = 161;
                    continue _fun57038
                }
            case 155:
                var9 = var11.large_image;
            case 161:
                if (!(var6 == var9)) {
                    _fun57038_ip = 198;
                    continue _fun57038
                }
            case 165:
                var13 = var6 == var12;
                var11 = undefined;
                if (var13) {
                    _fun57038_ip = 195;
                    continue _fun57038
                }
            case 174:
                var12 = var12.assets;
                var13 = var6 == var12;
                var11 = undefined;
                if (var13) {
                    _fun57038_ip = 195;
                    continue _fun57038
                }
            case 189:
                var11 = var12.small_image;
            case 195:
                var9 = var11;
            case 198:
                var9 = var10.bind(var0)(var9);
                var1.has_images = var9;
                var9 = _closure1_slot9;
                var8 = var9.isFriend;
                var8 = var8.bind(var9)(var5);
                var1.is_friend = var8;
                var1.viewed_profile_user_id = var5;
                var8 = var6 == var7;
                var5 = undefined;
                if (var8) {
                    _fun57038_ip = 254;
                    continue _fun57038
                }
            case 244:
                var8 = var7.hasPremiumCustomization;
                var5 = var8.bind(var7)();
            case 254:
                var1.profile_has_nitro_customization = var5;
                var8 = var6 == var7;
                var5 = undefined;
                if (var8) {
                    _fun57038_ip = 278;
                    continue _fun57038
                }
            case 268:
                var8 = var7.hasThemeColors;
                var5 = var8.bind(var7)();
            case 278:
                var1.profile_has_theme_color_customized = var5;
                var8 = var6 == var7;
                var5 = undefined;
                if (var8) {
                    _fun57038_ip = 298;
                    continue _fun57038
                }
            case 292:
                var5 = var7.popoutAnimationParticleType;
            case 298:
                var5 = var6 != var5;
                var1.profile_has_theme_animation = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var0;
        }
    };
    var2.trackDmProfileToggled = var3;
    var3 = function(arg0) { // Environment: var1
        var14 = arg0;
        var20 = var14.guildId;
        var16 = var14.channelId;
        var12 = var14.analyticsLocations;
        var11 = var14.action;
        var10 = var14.widgetEdited;
        var9 = var14.gameId;
        var8 = var14.numResults;
        var7 = var14.numCharacters;
        var6 = var14.applicationId;
        var2 = _closure1_slot22;
        var1 = {};
        var22 = var1;
        var21 = var14;
        var0 = copyDataProperties(var22, var21);
        var0 = 'action';
        var1[var0] = var11;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        var2 = _closure1_slot1;
        var17 = _closure1_slot2;
        var1 = 13;
        var1 = var17[var1];
        var4 = var2.bind(var0)(var1);
        var3 = var4.track;
        var1 = _closure1_slot14;
        var2 = var1.USER_PROFILE_EDIT_ACTION;
        var1 = {};
        var15 = _closure1_slot0;
        var13 = 14;
        var18 = var17[var13];
        var19 = var15.bind(var0)(var18);
        var18 = var19.collectGuildAnalyticsMetadata;
        var21 = var18.bind(var19)(var20);
        var22 = var1;
        var18 = copyDataProperties(var22, var21);
        var13 = var17[var13];
        var15 = var15.bind(var0)(var13);
        var13 = var15.collectChannelAnalyticsMetadataFromId;
        var21 = var13.bind(var15)(var16);
        var22 = var1;
        var13 = copyDataProperties(var22, var21);
        var13 = _closure1_slot19;
        var21 = var13.bind(var0)(var14);
        var22 = var1;
        var13 = copyDataProperties(var22, var21);
        var5 = _closure1_slot21;
        var21 = var5.bind(var0)(var6);
        var22 = var1;
        var5 = copyDataProperties(var22, var21);
        var5 = 'location_stack';
        var1[var5] = var12;
        var5 = 'edit_action';
        var1[var5] = var11;
        var5 = 'widget_edited';
        var1[var5] = var10;
        var5 = 'game_id';
        var1[var5] = var9;
        var5 = 'num_results';
        var1[var5] = var8;
        var5 = 'num_characters';
        var1[var5] = var7;
        var5 = 'application_id';
        var1[var5] = var6;
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var2.trackUserProfileEditAction = var3;
    var3 = function(arg0) { // Environment: var1
        var12 = arg0;
        var19 = var12.guildId;
        var15 = var12.channelId;
        var11 = var12.analyticsLocations;
        var10 = var12.widgetEdited;
        var9 = var12.gameIds;
        var8 = var12.tags;
        var7 = var12.numCharactersCommentary;
        var6 = var12.isWidgetRemoved;
        var2 = _closure1_slot22;
        var1 = {};
        var21 = var1;
        var20 = var12;
        var0 = copyDataProperties(var21, var20);
        var3 = 'EDIT_SAVED';
        var0 = 'action';
        var1[var0] = var3;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        var2 = _closure1_slot1;
        var16 = _closure1_slot2;
        var1 = 13;
        var1 = var16[var1];
        var4 = var2.bind(var0)(var1);
        var3 = var4.track;
        var1 = _closure1_slot14;
        var2 = var1.USER_PROFILE_EDIT_SAVED;
        var1 = {};
        var14 = _closure1_slot0;
        var13 = 14;
        var17 = var16[var13];
        var18 = var14.bind(var0)(var17);
        var17 = var18.collectGuildAnalyticsMetadata;
        var20 = var17.bind(var18)(var19);
        var21 = var1;
        var17 = copyDataProperties(var21, var20);
        var13 = var16[var13];
        var14 = var14.bind(var0)(var13);
        var13 = var14.collectChannelAnalyticsMetadataFromId;
        var20 = var13.bind(var14)(var15);
        var21 = var1;
        var13 = copyDataProperties(var21, var20);
        var5 = _closure1_slot19;
        var20 = var5.bind(var0)(var12);
        var21 = var1;
        var5 = copyDataProperties(var21, var20);
        var5 = 'location_stack';
        var1[var5] = var11;
        var5 = 'widget_edited';
        var1[var5] = var10;
        var5 = 'game_ids';
        var1[var5] = var9;
        var5 = 'tags';
        var1[var5] = var8;
        var5 = 'num_characters_commentary';
        var1[var5] = var7;
        var5 = 'is_widget_removed';
        var1[var5] = var6;
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var2.trackUserProfileEditSaved = var3;
    var1 = function(arg0) { // Environment: var1
        _fun57042: for (var _fun57042_ip = 0;;) switch (_fun57042_ip) {
            case 0:
                var11 = arg0;
                var18 = var11.guildId;
                var14 = var11.channelId;
                var10 = var11.analyticsLocations;
                var9 = var11.action;
                var7 = var11.wishlistId;
                var6 = var11.skuId;
                var8 = var11.productLines;
                var2 = _closure1_slot22;
                var1 = {};
                var20 = var1;
                var19 = var11;
                var0 = copyDataProperties(var20, var19);
                var0 = 'action';
                var1[var0] = var9;
                var0 = undefined;
                var1 = var2.bind(var0)(var1);
                var2 = _closure1_slot1;
                var15 = _closure1_slot2;
                var1 = 13;
                var1 = var15[var1];
                var4 = var2.bind(var0)(var1);
                var3 = var4.track;
                var1 = _closure1_slot14;
                var2 = var1.USER_PROFILE_WISHLIST_ACTION;
                var1 = {};
                var13 = _closure1_slot0;
                var12 = 14;
                var16 = var15[var12];
                var17 = var13.bind(var0)(var16);
                var16 = var17.collectGuildAnalyticsMetadata;
                var19 = var16.bind(var17)(var18);
                var20 = var1;
                var16 = copyDataProperties(var20, var19);
                var12 = var15[var12];
                var13 = var13.bind(var0)(var12);
                var12 = var13.collectChannelAnalyticsMetadataFromId;
                var19 = var12.bind(var13)(var14);
                var20 = var1;
                var12 = copyDataProperties(var20, var19);
                var5 = _closure1_slot19;
                var19 = var5.bind(var0)(var11);
                var20 = var1;
                var5 = copyDataProperties(var20, var19);
                var5 = 'location_stack';
                var1[var5] = var10;
                var5 = 'action_type';
                var1[var5] = var9;
                var5 = 'wishlist_id';
                var1[var5] = var7;
                var5 = 'sku_id';
                var1[var5] = var6;
                var5 = null;
                if (!(var5 == var8)) {
                    _fun57042_ip = 241;
                    continue _fun57042
                }
            case 235:
                var6 = new Array(0);
                _fun57042_ip = 259;
                continue _fun57042;
            case 241:
                var5 = global;
                var7 = var5.Array;
                var5 = var7.from;
                var6 = var5.bind(var7)(var8);
            case 259:
                var5 = 'product_lines';
                var1[var5] = var6;
                var1 = var3.bind(var4)(var2, var1);
                return var0;
        }
    };
    var2.trackUserProfileWishlistAction = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6935, 3673, 4550, 1672, 3569, 3059, 1613, 4623, 6937, 660, 483, 1417, 6913, 795, 4266, 6938, 2]);