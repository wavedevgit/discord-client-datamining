// utils/UserSettingsUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var7;
    var0 = global;
    var9 = var0.Object;
    var5 = var9.defineProperty;
    var3 = {};
    var8 = true;
    var3.value = var8;
    var0 = '__esModule';
    var0 = var5.bind(var9)(var2, var0, var3);
    var10 = 0;
    var3 = var7[var10];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var9 = 1;
    var3 = var7[var9];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var5 = 2;
    var3 = var7[var5];
    var3 = var6.bind(var0)(var3);
    var4 = var3.REQUEST_DATA_LIMIT_DAYS;
    var11 = var3.AnalyticEvents;
    var _closure1_slot5 = var11;
    var11 = var3.FriendSourceFlags;
    var _closure1_slot6 = var11;
    var11 = var3.AllFriendSourceFlags;
    var _closure1_slot7 = var11;
    var3 = var3.ComponentActions;
    var _closure1_slot8 = var3;
    var3 = 86400000;
    var3 = var3 * var4;
    var _closure1_slot9 = var3;
    var4 = {};
    var4.UNDECIDED = var10;
    var3 = 'UNDECIDED';
    var4[var10] = var3;
    var4.OPTIN = var9;
    var3 = 'OPTIN';
    var4[var9] = var3;
    var4.OPTOUT = var5;
    var3 = 'OPTOUT';
    var4[var5] = var3;
    var _closure1_slot10 = var4;
    var3 = {};
    var5 = var4.UNDECIDED;
    var3[var5] = var0;
    var5 = var4.OPTIN;
    var3[var5] = var8;
    var8 = var4.OPTOUT;
    var5 = false;
    var3[var8] = var5;
    var5 = 7;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'utils/UserSettingsUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function() {
        _fun59123: for (var _fun59123_ip = 0;;) switch (_fun59123_ip) {
            case 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 3;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var2 = var1.RestrictedGuildIds;
                var1 = var2.getSetting;
                var3 = var1.bind(var2)();
                var0 = _closure1_slot3;
                var1 = var0.totalUnavailableGuilds;
                var0 = 0;
                var2 = var3;
                if (!(var0 === var1)) {
                    _fun59123_ip = 77;
                    continue _fun59123
                }
            case 60:
                var1 = var3.filter;
                var0 = function(arg0) { // Environment: var0
                    var2 = _closure1_slot4;
                    var1 = var2.getGuild;
                    var0 = arg0;
                    var1 = var1.bind(var2)(var0);
                    var0 = null;
                    var0 = var0 != var1;
                    return var0;
                };
                var2 = var1.bind(var3)(var0);
            case 77:
                var0 = global;
                var0 = var0.Set;
                var1 = var0.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var0
                    }
                });
                var5 = var1;
                var4 = var2;
                var0 = new var5[var0](var4, var3);
                var0 = var0 instanceof Object ? var0 : var1;
                return var0;
        }
    };
    var2.getSanitizedRestrictedGuilds = var5;
    var5 = function() {
        _fun59125: for (var _fun59125_ip = 0;;) switch (_fun59125_ip) {
            case 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 3;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var2 = var1.MessageRequestRestrictedGuildIds;
                var1 = var2.getSetting;
                var3 = var1.bind(var2)();
                var0 = _closure1_slot3;
                var1 = var0.totalUnavailableGuilds;
                var0 = 0;
                var2 = var3;
                if (!(var0 === var1)) {
                    _fun59125_ip = 77;
                    continue _fun59125
                }
            case 60:
                var1 = var3.filter;
                var0 = function(arg0) { // Environment: var0
                    var2 = _closure1_slot4;
                    var1 = var2.getGuild;
                    var0 = arg0;
                    var1 = var1.bind(var2)(var0);
                    var0 = null;
                    var0 = var0 != var1;
                    return var0;
                };
                var2 = var1.bind(var3)(var0);
            case 77:
                var0 = global;
                var0 = var0.Set;
                var1 = var0.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var0
                    }
                });
                var5 = var1;
                var4 = var2;
                var0 = new var5[var0](var4, var3);
                var0 = var0 instanceof Object ? var0 : var1;
                return var0;
        }
    };
    var2.getSanitizedMessageRequestRestrictedGuilds = var5;
    var5 = function() {
        _fun59127: for (var _fun59127_ip = 0;;) switch (_fun59127_ip) {
            case 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 3;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var2 = var1.ActivityRestrictedGuilds;
                var1 = var2.getSetting;
                var3 = var1.bind(var2)();
                var0 = _closure1_slot3;
                var1 = var0.totalUnavailableGuilds;
                var0 = 0;
                var2 = var3;
                if (!(var0 === var1)) {
                    _fun59127_ip = 77;
                    continue _fun59127
                }
            case 60:
                var1 = var3.filter;
                var0 = function(arg0) { // Environment: var0
                    var2 = _closure1_slot4;
                    var1 = var2.getGuild;
                    var0 = arg0;
                    var1 = var1.bind(var2)(var0);
                    var0 = null;
                    var0 = var0 != var1;
                    return var0;
                };
                var2 = var1.bind(var3)(var0);
            case 77:
                var0 = global;
                var0 = var0.Set;
                var1 = var0.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var0
                    }
                });
                var5 = var1;
                var4 = var2;
                var0 = new var5[var0](var4, var3);
                var0 = var0 instanceof Object ? var0 : var1;
                return var0;
        }
    };
    var2.getSanitizedActivityRestrictedGuilds = var5;
    var5 = function() {
        _fun59129: for (var _fun59129_ip = 0;;) switch (_fun59129_ip) {
            case 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 3;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var2 = var1.ActivityJoiningRestrictedGuilds;
                var1 = var2.getSetting;
                var3 = var1.bind(var2)();
                var0 = _closure1_slot3;
                var1 = var0.totalUnavailableGuilds;
                var0 = 0;
                var2 = var3;
                if (!(var0 === var1)) {
                    _fun59129_ip = 77;
                    continue _fun59129
                }
            case 60:
                var1 = var3.filter;
                var0 = function(arg0) { // Environment: var0
                    var2 = _closure1_slot4;
                    var1 = var2.getGuild;
                    var0 = arg0;
                    var1 = var1.bind(var2)(var0);
                    var0 = null;
                    var0 = var0 != var1;
                    return var0;
                };
                var2 = var1.bind(var3)(var0);
            case 77:
                var0 = global;
                var0 = var0.Set;
                var1 = var0.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var0
                    }
                });
                var5 = var1;
                var4 = var2;
                var0 = new var5[var0](var4, var3);
                var0 = var0 instanceof Object ? var0 : var1;
                return var0;
        }
    };
    var2.getSanitizedActivityJoiningRestrictedGuilds = var5;
    var5 = function arg0() {
        _fun59131: for (var _fun59131_ip = 0;;) switch (_fun59131_ip) {
            case 0:
                var3 = arg0;
                var2 = _closure1_slot7;
                var0 = var3 & var2;
                if (!(var0 !== var2)) {
                    _fun59131_ip = 83;
                    continue _fun59131
                }
            case 18:
                var0 = {};
                var2 = false;
                var0.all = var2;
                var1 = _closure1_slot6;
                var2 = var1.MUTUAL_FRIENDS;
                var4 = var3 & var2;
                var2 = var1.MUTUAL_FRIENDS;
                var2 = var4 === var2;
                var0.mutualFriends = var2;
                var2 = var1.MUTUAL_GUILDS;
                var2 = var3 & var2;
                var1 = var1.MUTUAL_GUILDS;
                var1 = var2 === var1;
                var0.mutualGuilds = var1;
                _fun59131_ip = 97;
                continue _fun59131;
            case 83:
                var0 = {
                    'all': true,
                    'mutualFriends': true,
                    'mutualGuilds': true
                };
            case 97:
                return var0;
        }
    };
    var2.computeFlags = var5;
    var5 = function arg0, arg1() {
        _fun59132: for (var _fun59132_ip = 0;;) switch (_fun59132_ip) {
            case 0:
                var3 = arg0;
                var2 = arg1;
                var0 = var2.verified;
                var0 = !var0;
                if (var0) {
                    _fun59132_ip = 126;
                    continue _fun59132
                }
            case 18:
                var1 = var2.isStaff;
                var1 = var1.bind(var2)();
                var2 = !var1;
                var1 = !var2;
                if (!var2) {
                    _fun59132_ip = 123;
                    continue _fun59132
                }
            case 37:
                var2 = null;
                var2 = var2 != var3;
                if (!var2) {
                    _fun59132_ip = 120;
                    continue _fun59132
                }
            case 46:
                var4 = _closure1_slot9;
                var6 = global;
                var7 = var6.Date;
                var5 = var7.now;
                var5 = var5.bind(var7)();
                var7 = var6.Date;
                var8 = var3.created_at;
                var6 = var7.prototype;
                var6 = Object.create(var6, {
                    constructor: {
                        value: var7
                    }
                });
                var9 = var6;
                var3 = new var9[var7](var8, var7);
                var6 = var3 instanceof Object ? var3 : var6;
                var3 = var6.getTime;
                var3 = var3.bind(var6)();
                var3 = var5 - var3;
                var2 = var4 > var3;
            case 120:
                var1 = var2;
            case 123:
                var0 = var1;
            case 126:
                return var0;
        }
    };
    var2.harvestDisabled = var5;
    var5 = function arg0() {
        var0 = arg0;
        var9 = var0.destinationPane;
        var10 = var0.originPane;
        var7 = var0.source;
        var6 = var0.subsection;
        var8 = var0.locationStack;
        var5 = var0.applicationId;
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 4;
        var2 = var2[var0];
        var0 = undefined;
        var4 = var3.bind(var0)(var2);
        var3 = var4.trackWithMetadata;
        var1 = _closure1_slot5;
        var2 = var1.SETTINGS_PANE_VIEWED;
        var1 = {};
        var11 = 'user';
        var1.settings_type = var11;
        var1.origin_pane = var10;
        var1.destination_pane = var9;
        var1.location_stack = var8;
        var1.source = var7;
        var1.subsection = var6;
        var1.application_id = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var2.trackUserSettingsPaneViewed = var5;
    var2.NonSpamRetrainingOptInOptions = var4;
    var2.NonSpamRetrainingOptInOptionsToValue = var3;
    var3 = function() {
        var1 = {};
        var7 = _closure1_slot0;
        var8 = _closure1_slot2;
        var3 = 5;
        var2 = var8[var3];
        var6 = undefined;
        var2 = var7.bind(var6)(var2);
        var5 = var2.intl;
        var4 = var5.string;
        var2 = var8[var3];
        var2 = var7.bind(var6)(var2);
        var2 = var2.t;
        var2 = var2["/yLMRQ"];
        var2 = var4.bind(var5)(var2);
        var1.name = var2;
        var2 = var8[var3];
        var2 = var7.bind(var6)(var2);
        var5 = var2.intl;
        var4 = var5.string;
        var2 = var8[var3];
        var2 = var7.bind(var6)(var2);
        var2 = var2.t;
        var2 = var2["3fzkPq"];
        var2 = var4.bind(var5)(var2);
        var1.desc = var2;
        var2 = _closure1_slot10;
        var0 = var2.OPTIN;
        var1.value = var0;
        var0 = new Array(3);
        var0[0] = var1;
        var1 = {};
        var4 = var8[var3];
        var4 = var7.bind(var6)(var4);
        var9 = var4.intl;
        var5 = var9.string;
        var4 = var8[var3];
        var4 = var7.bind(var6)(var4);
        var4 = var4.t;
        var4 = var4["21fP2b"];
        var4 = var5.bind(var9)(var4);
        var1.name = var4;
        var4 = var8[var3];
        var4 = var7.bind(var6)(var4);
        var9 = var4.intl;
        var5 = var9.string;
        var4 = var8[var3];
        var4 = var7.bind(var6)(var4);
        var4 = var4.t;
        var4 = var4.ggJ9jR;
        var4 = var5.bind(var9)(var4);
        var1.desc = var4;
        var4 = var2.OPTOUT;
        var1.value = var4;
        var0[1] = var1;
        var1 = {};
        var4 = var8[var3];
        var4 = var7.bind(var6)(var4);
        var9 = var4.intl;
        var5 = var9.string;
        var4 = var8[var3];
        var4 = var7.bind(var6)(var4);
        var4 = var4.t;
        var4 = var4.OWIo8w;
        var4 = var5.bind(var9)(var4);
        var1.name = var4;
        var4 = var8[var3];
        var4 = var7.bind(var6)(var4);
        var5 = var4.intl;
        var4 = var5.string;
        var3 = var8[var3];
        var3 = var7.bind(var6)(var3);
        var3 = var3.t;
        var3 = var3.HqYXpw;
        var3 = var4.bind(var5)(var3);
        var1.desc = var3;
        var2 = var2.UNDECIDED;
        var1.value = var2;
        var0[2] = var1;
        return var0;
    };
    var2.generateNonSpamRetrainingOptInSettingOptions = var3;
    var1 = function arg0() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var0 = 6;
        var2 = var2[var0];
        var0 = undefined;
        var2 = var3.bind(var0)(var2);
        var4 = var2.ComponentDispatch;
        var3 = var4.dispatch;
        var1 = _closure1_slot8;
        var2 = var1.SHAKE_SETTINGS_MODAL;
        var1 = arg0;
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var2.shakeUserSettings = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3993, 1410, 660, 1348, 4298, 1234, 1229, 2]);