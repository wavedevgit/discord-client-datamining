// modules/guild_automod/AutomodQuarantineUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var7 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.Permissions;
    var _closure1_slot8 = var6;
    var3 = var3.UserSettingsSections;
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.GuildMemberFlags;
    var _closure1_slot10 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ProfileCustomizationSubsection;
    var _closure1_slot11 = var3;
    var3 = 14;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_automod/AutomodQuarantineUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function(arg0) { // Original name: useCurrentUserHasAutomodQuarantinedProfile, environment: var1
        var5 = arg0;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 9;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var6 = _closure1_slot3;
        var2 = new Array(2);
        var2[0] = var6;
        var1 = _closure1_slot4;
        var2[1] = var1;
        var1 = new Array(1);
        var1[0] = var5;
        var0 = function() { // Environment: var0
            _fun79217: for (var _fun79217_ip = 0;;) switch (_fun79217_ip) {
                case 0:
                    var2 = _closure2_slot0;
                    var1 = null;
                    if (!(var1 != var2)) {
                        _fun79217_ip = 85;
                        continue _fun79217
                    }
                case 13:
                    var2 = _closure1_slot3;
                    var1 = var2.getId;
                    var5 = var1.bind(var2)();
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 10;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var4.bind(var1)(var2);
                    var1 = var2.hasAutomodQuarantinedProfile;
                    var4 = _closure1_slot4;
                    var3 = var4.getMember;
                    var0 = _closure2_slot0;
                    var0 = var3.bind(var4)(var0, var5);
                    var0 = var1.bind(var2)(var0);
                    return var0;
                case 85:
                    var0 = false;
                    return var0;
            }
        };
        var0 = var3.bind(var4)(var2, var0, var1);
        return var0;
    };
    var2.useCurrentUserHasAutomodQuarantinedProfile = var3;
    var3 = function(arg0) { // Original name: useGuildAutomodProfileQuarantineErrors, environment: var1
        var5 = arg0;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 9;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStoresObject;
        var6 = _closure1_slot3;
        var2 = new Array(4);
        var2[0] = var6;
        var6 = _closure1_slot4;
        var2[1] = var6;
        var6 = _closure1_slot7;
        var2[2] = var6;
        var1 = _closure1_slot5;
        var2[3] = var1;
        var1 = new Array(1);
        var1[0] = var5;
        var0 = function() { // Environment: var0
            _fun79219: for (var _fun79219_ip = 0;;) switch (_fun79219_ip) {
                case 0:
                    var0 = {};
                    var5 = undefined;
                    var0.nick = var5;
                    var0.bio = var5;
                    var3 = _closure1_slot7;
                    var2 = var3.getGuildId;
                    var3 = var2.bind(var3)();
                    var4 = _closure2_slot0;
                    var9 = null;
                    if (!(var9 != var4)) {
                        _fun79219_ip = 48;
                        continue _fun79219
                    }
                case 44:
                    var3 = _closure2_slot0;
                case 48:
                    var6 = _closure1_slot5;
                    var4 = var6.getGuild;
                    var10 = var4.bind(var6)(var3);
                    var7 = var3;
                    if (!(var9 != var10)) {
                        _fun79219_ip = 468;
                        continue _fun79219
                    }
                case 72:
                    if (!(var9 != var7)) {
                        _fun79219_ip = 468;
                        continue _fun79219
                    }
                case 79:
                    var4 = _closure1_slot3;
                    var3 = var4.getId;
                    var6 = var3.bind(var4)();
                    var4 = _closure1_slot4;
                    var3 = var4.getMember;
                    var7 = var3.bind(var4)(var7, var6);
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var3 = 10;
                    var3 = var6[var3];
                    var6 = var4.bind(var5)(var3);
                    var4 = var6.getAutomodQuarantinedProfileFlags;
                    var8 = var9 == var7;
                    var3 = undefined;
                    if (var8) {
                        _fun79219_ip = 149;
                        continue _fun79219
                    }
                case 144:
                    var3 = var7.flags;
                case 149:
                    var4 = var4.bind(var6)(var3);
                    var6 = var4.size;
                    var3 = 0;
                    if (!(var3 !== var6)) {
                        _fun79219_ip = 466;
                        continue _fun79219
                    }
                case 168:
                    var6 = var4.has;
                    var3 = _closure1_slot10;
                    var3 = var3.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME;
                    var3 = var6.bind(var4)(var3);
                    if (!var3) {
                        _fun79219_ip = 370;
                        continue _fun79219
                    }
                case 194:
                    var2 = _closure2_slot0;
                    if (!(var9 != var2)) {
                        _fun79219_ip = 269;
                        continue _fun79219
                    }
                case 202:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var2 = 11;
                    var3 = var8[var2];
                    var3 = var7.bind(var5)(var3);
                    var6 = var3.intl;
                    var3 = var6.string;
                    var2 = var8[var2];
                    var2 = var7.bind(var5)(var2);
                    var2 = var2.t;
                    var2 = var2.EPZCrM;
                    var3 = var3.bind(var6)(var2);
                    var2 = new Array(1);
                    var2[0] = var3;
                    _fun79219_ip = 364;
                    continue _fun79219;
                case 269:
                    var6 = _closure1_slot0;
                    var11 = _closure1_slot1;
                    var3 = 11;
                    var7 = var11[var3];
                    var7 = var6.bind(var5)(var7);
                    var8 = var7.intl;
                    var7 = var8.formatToPlainString;
                    var3 = var11[var3];
                    var3 = var6.bind(var5)(var3);
                    var3 = var3.t;
                    var6 = var3.WBUh3O;
                    var3 = {};
                    var10 = var10.name;
                    var11 = var9 != var10;
                    var9 = '';
                    if (!var11) {
                        _fun79219_ip = 342;
                        continue _fun79219
                    }
                case 339:
                    var9 = var10;
                case 342:
                    var3.guildName = var9;
                    var6 = var7.bind(var8)(var6, var3);
                    var3 = new Array(1);
                    var3[0] = var6;
                    var2 = var3;
                case 364:
                    var0.nick = var2;
                case 370:
                    var3 = var4.has;
                    var2 = _closure1_slot10;
                    var2 = var2.AUTOMOD_QUARANTINED_BIO;
                    var2 = var3.bind(var4)(var2);
                    if (!var2) {
                        _fun79219_ip = 464;
                        continue _fun79219
                    }
                case 393:
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var1 = 11;
                    var2 = var6[var1];
                    var2 = var4.bind(var5)(var2);
                    var3 = var2.intl;
                    var2 = var3.string;
                    var1 = var6[var1];
                    var1 = var4.bind(var5)(var1);
                    var1 = var1.t;
                    var1 = var1.dZh1vz;
                    var2 = var2.bind(var3)(var1);
                    var1 = new Array(1);
                    var1[0] = var2;
                    var0.bio = var1;
                case 464:
                    return var0;
                case 466:
                    return var0;
                case 468:
                    return var0;
            }
        };
        var0 = var3.bind(var4)(var2, var0, var1);
        return var0;
    };
    var2.useGuildAutomodProfileQuarantineErrors = var3;
    var1 = function(arg0) { // Original name: useOpenFixQuarantinedProfileModal, environment: var1
        var1 = arg0;
        var5 = var1.guildId;
        var _closure2_slot0 = var5;
        var7 = var1.scrollPosition;
        var6 = var1.analyticsLocations;
        var4 = _closure1_slot0;
        var8 = _closure1_slot1;
        var1 = 9;
        var9 = var8[var1];
        var3 = undefined;
        var12 = var4.bind(var3)(var9);
        var11 = var12.useStateFromStores;
        var9 = _closure1_slot5;
        var10 = new Array(1);
        var10[0] = var9;
        var9 = new Array(1);
        var9[0] = var5;
        var5 = function() { // Environment: var0
            var2 = _closure1_slot5;
            var1 = var2.getGuild;
            var0 = _closure2_slot0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var5 = var11.bind(var12)(var10, var5, var9);
        var _closure2_slot1 = var5;
        var1 = var8[var1];
        var9 = var4.bind(var3)(var1);
        var8 = var9.useStateFromStores;
        var1 = _closure1_slot6;
        var4 = new Array(1);
        var4[0] = var1;
        var3 = new Array(1);
        var3[0] = var5;
        var1 = function() { // Environment: var0
            _fun79222: for (var _fun79222_ip = 0;;) switch (_fun79222_ip) {
                case 0:
                    var2 = _closure2_slot1;
                    var0 = null;
                    var0 = var0 != var2;
                    if (!var0) {
                        _fun79222_ip = 49;
                        continue _fun79222
                    }
                case 16:
                    var4 = _closure1_slot6;
                    var3 = var4.can;
                    var2 = _closure1_slot8;
                    var2 = var2.CHANGE_NICKNAME;
                    var1 = _closure2_slot1;
                    var0 = var3.bind(var4)(var2, var1);
                case 49:
                    return var0;
            }
        };
        var1 = var8.bind(var9)(var4, var1, var3);
        var _closure2_slot2 = var1;
        var4 = _closure1_slot2;
        var3 = var4.useCallback;
        var2 = new Array(4);
        var2[0] = var1;
        var2[1] = var7;
        var2[2] = var6;
        var2[3] = var5;
        var0 = function() { // Environment: var0
            _fun79223: for (var _fun79223_ip = 0;;) switch (_fun79223_ip) {
                case 0:
                    var1 = _closure2_slot1;
                    var0 = null;
                    if (!(var0 != var1)) {
                        _fun79223_ip = 143;
                        continue _fun79223
                    }
                case 16:
                    var1 = _closure1_slot9;
                    var4 = var1.PROFILE_CUSTOMIZATION;
                    var1 = _closure1_slot11;
                    var1 = var1.GUILD;
                    var3 = _closure2_slot2;
                    if (var3) {
                        _fun79223_ip = 58;
                        continue _fun79223
                    }
                case 46:
                    var3 = _closure1_slot11;
                    var3 = var3.USER_PROFILE;
                    _fun79223_ip = 98;
                    continue _fun79223;
                case 58:
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var5 = 12;
                    var6 = var6[var5];
                    var5 = undefined;
                    var6 = var7.bind(var5)(var6);
                    var5 = var6.initGuildIdentitySettings;
                    var2 = _closure2_slot1;
                    var2 = var5.bind(var6)(var2);
                    var3 = var1;
                case 98:
                    var1 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var0 = 13;
                    var0 = var2[var0];
                    var2 = undefined;
                    var0 = var1.bind(var2)(var0);
                    var1 = var0.openUserSettings;
                    var0 = {};
                    var0.screen = var4;
                    var0.subsection = var3;
                    var0 = var1.bind(var2)(var0);
                case 143:
                    var0 = undefined;
                    return var0;
            }
        };
        var2 = var3.bind(var4)(var0, var2);
        var0 = new Array(2);
        var0[0] = var2;
        var0[1] = var1;
        return var0;
    };
    var2.useOpenFixQuarantinedProfileModal = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1216, 1672, 1410, 3050, 3172, 660, 3038, 665, 632, 3056, 1234, 5684, 5884, 2]);