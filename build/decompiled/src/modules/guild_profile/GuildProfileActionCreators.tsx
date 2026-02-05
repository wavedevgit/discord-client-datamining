// modules/guild_profile/GuildProfileActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun59849: for (var _fun59849_ip = 0;;) switch (_fun59849_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun59849_ip = 140;
                            continue _fun59849
                        }
                    case 10:
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 6;
                        var1 = var4[var1];
                        var4 = undefined;
                        var1 = var3.bind(var4)(var1);
                        var5 = var1.HTTP;
                        var3 = var5.get;
                        var1 = {};
                        var8 = _closure1_slot9;
                        var7 = var8.GUILD_TOP_GAMES;
                        var6 = arg0;
                        var6 = var7.bind(var8)(var6);
                        var1.url = var6;
                        var6 = false;
                        var1.rejectWithError = var6;
                        var1 = var3.bind(var5)(var1);
                        SaveGenerator(address = 84);
                    case 82:
                        return var1;
                    case 84:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun59849_ip = 137;
                            continue _fun59849
                        }
                    case 90:
                        var3 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var2 = 7;
                        var2 = var5[var2];
                        var4 = var3.bind(var4)(var2);
                        var3 = var4.buildTopGamesFromServer;
                        var2 = var1.body;
                        var2 = var2.top_games;
                        var2 = var3.bind(var4)(var2);
                        return var2;
                    case 137:
                        return var1;
                    case 140:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot10 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot10 = var0;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var7.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var6 = var5[var3];
    var6 = var7.bind(var0)(var6);
    var _closure1_slot6 = var6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.GuildProfileFetchStatus;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.AnalyticEvents;
    var _closure1_slot8 = var6;
    var3 = var3.Endpoints;
    var _closure1_slot9 = var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_profile/GuildProfileActionCreators.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0, arg1() {
        _fun59850: for (var _fun59850_ip = 0;;) switch (_fun59850_ip) {
            case 0:
                var9 = arg0;
                var4 = arg1;
                var _closure2_slot0 = var9;
                var2 = null;
                if (!(var2 != var9)) {
                    _fun59850_ip = 316;
                    continue _fun59850
                }
            case 21:
                var5 = _closure1_slot6;
                var0 = var5.getFetchStatus;
                var6 = var0.bind(var5)(var9);
                var0 = _closure1_slot7;
                var0 = var0.FETCHING;
                var1 = var5.getLastSyncTimestamp;
                var11 = var1.bind(var5)(var9);
                var1 = var5.getProfile;
                var5 = var1.bind(var5)(var9);
                var1 = global;
                var10 = var1.Date;
                var8 = var10.now;
                var10 = var8.bind(var10)();
                var12 = var2 != var11;
                var8 = 0;
                if (!var12) {
                    _fun59850_ip = 102;
                    continue _fun59850
                }
            case 99:
                var8 = var11;
            case 102:
                var8 = var10 - var8;
                if (!(var6 === var0)) {
                    _fun59850_ip = 135;
                    continue _fun59850
                }
            case 110:
                if (var4) {
                    _fun59850_ip = 135;
                    continue _fun59850
                }
            case 113:
                var6 = var1.Promise;
                var0 = var6.resolve;
                var0 = var0.bind(var6)(var2);
                _fun59850_ip = 314;
                continue _fun59850;
            case 135:
                if (!(var2 != var5)) {
                    _fun59850_ip = 174;
                    continue _fun59850
                }
            case 139:
                var6 = 60000;
                if (!(!(var8 > var6))) {
                    _fun59850_ip = 174;
                    continue _fun59850
                }
            case 149:
                if (var4) {
                    _fun59850_ip = 174;
                    continue _fun59850
                }
            case 152:
                var4 = var1.Promise;
                var1 = var4.resolve;
                var1 = var1.bind(var4)(var5);
                _fun59850_ip = 311;
                continue _fun59850;
            case 174:
                var5 = _closure1_slot1;
                var8 = _closure1_slot2;
                var4 = 5;
                var4 = var8[var4];
                var6 = undefined;
                var10 = var5.bind(var6)(var4);
                var5 = var10.dispatch;
                var4 = {};
                var11 = 'GUILD_PROFILE_FETCH';
                var4.type = var11;
                var4.guildId = var9;
                var4 = var5.bind(var10)(var4);
                var5 = _closure1_slot0;
                var4 = 6;
                var4 = var8[var4];
                var4 = var5.bind(var6)(var4);
                var6 = var4.HTTP;
                var5 = var6.get;
                var4 = {};
                var8 = _closure1_slot9;
                var7 = var8.GUILD_PROFILE;
                var7 = var7.bind(var8)(var9);
                var4.url = var7;
                var7 = false;
                var4.rejectWithError = var7;
                var6 = var5.bind(var6)(var4);
                var5 = var6.then;
                var4 = function(arg0) { // Environment: var3
                    var2 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var0 = 7;
                    var0 = var4[var0];
                    var3 = undefined;
                    var5 = var2.bind(var3)(var0);
                    var2 = var5.buildGuildProfileFromServer;
                    var0 = arg0;
                    var0 = var0.body;
                    var0 = var2.bind(var5)(var0);
                    var2 = _closure1_slot1;
                    var1 = 5;
                    var1 = var4[var1];
                    var3 = var2.bind(var3)(var1);
                    var2 = var3.dispatch;
                    var1 = {};
                    var4 = 'GUILD_PROFILE_FETCH_SUCCESS';
                    var1.type = var4;
                    var4 = _closure2_slot0;
                    var1.guildId = var4;
                    var1.profile = var0;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var5 = var5.bind(var6)(var4);
                var4 = var5.catch;
                var3 = function(arg0) { // Environment: var3
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 8;
                    var1 = var4[var1];
                    var2 = undefined;
                    var1 = var3.bind(var2)(var1);
                    var5 = var1.APIError;
                    var1 = var5.prototype;
                    var3 = Object.create(var1, {
                        constructor: {
                            value: var5
                        }
                    });
                    var6 = arg0;
                    var7 = var3;
                    var1 = new var7[var5](var6, var5);
                    var3 = var1 instanceof Object ? var1 : var3;
                    var1 = _closure1_slot1;
                    var0 = 5;
                    var0 = var4[var0];
                    var2 = var1.bind(var2)(var0);
                    var1 = var2.dispatch;
                    var0 = {};
                    var4 = 'GUILD_PROFILE_FETCH_FAILURE';
                    var0.type = var4;
                    var4 = _closure2_slot0;
                    var0.guildId = var4;
                    var0.error = var3;
                    var0 = var1.bind(var2)(var0);
                    var0 = null;
                    return var0;
                };
                var1 = var4.bind(var5)(var3);
            case 311:
                var0 = var1;
            case 314:
                return var0;
            case 316:
                var0 = global;
                var1 = var0.Promise;
                var0 = var1.resolve;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var2.getGuildProfile = var3;
    var3 = function arg0, arg1() {
        _fun59853: for (var _fun59853_ip = 0;;) switch (_fun59853_ip) {
            case 0:
                var10 = arg0;
                var6 = arg1;
                var _closure2_slot0 = var10;
                var2 = _closure1_slot6;
                var1 = var2.getIsUpdating;
                var1 = var1.bind(var2)(var10);
                if (var1) {
                    _fun59853_ip = 206;
                    continue _fun59853
                }
            case 36:
                var2 = _closure1_slot1;
                var8 = _closure1_slot2;
                var1 = 5;
                var1 = var8[var1];
                var7 = undefined;
                var3 = var2.bind(var7)(var1);
                var2 = var3.dispatch;
                var1 = {};
                var5 = 'GUILD_PROFILE_UPDATE';
                var1.type = var5;
                var1.guildId = var10;
                var1.updates = var6;
                var1 = var2.bind(var3)(var1);
                var5 = _closure1_slot0;
                var1 = 6;
                var1 = var8[var1];
                var1 = var5.bind(var7)(var1);
                var3 = var1.HTTP;
                var2 = var3.patch;
                var1 = {};
                var9 = _closure1_slot9;
                var4 = var9.GUILD_PROFILE;
                var4 = var4.bind(var9)(var10);
                var1.url = var4;
                var4 = 7;
                var4 = var8[var4];
                var5 = var5.bind(var7)(var4);
                var4 = var5.buildGuildProfileUpdateForServer;
                var4 = var4.bind(var5)(var6);
                var1.body = var4;
                var4 = false;
                var1.rejectWithError = var4;
                var3 = var2.bind(var3)(var1);
                var2 = var3.then;
                var1 = function(arg0) { // Environment: var0
                    var2 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var0 = 7;
                    var0 = var4[var0];
                    var3 = undefined;
                    var5 = var2.bind(var3)(var0);
                    var2 = var5.buildGuildProfileFromServer;
                    var0 = arg0;
                    var0 = var0.body;
                    var0 = var2.bind(var5)(var0);
                    var2 = _closure1_slot1;
                    var1 = 5;
                    var1 = var4[var1];
                    var3 = var2.bind(var3)(var1);
                    var2 = var3.dispatch;
                    var1 = {};
                    var4 = 'GUILD_PROFILE_UPDATE_SUCCESS';
                    var1.type = var4;
                    var4 = _closure2_slot0;
                    var1.guildId = var4;
                    var1.profile = var0;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var2 = var2.bind(var3)(var1);
                var1 = var2.catch;
                var0 = function(arg0) { // Environment: var0
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 8;
                    var1 = var4[var1];
                    var2 = undefined;
                    var1 = var3.bind(var2)(var1);
                    var5 = var1.APIError;
                    var1 = var5.prototype;
                    var3 = Object.create(var1, {
                        constructor: {
                            value: var5
                        }
                    });
                    var6 = arg0;
                    var7 = var3;
                    var1 = new var7[var5](var6, var5);
                    var3 = var1 instanceof Object ? var1 : var3;
                    var1 = _closure1_slot1;
                    var0 = 5;
                    var0 = var4[var0];
                    var2 = var1.bind(var2)(var0);
                    var1 = var2.dispatch;
                    var0 = {};
                    var4 = 'GUILD_PROFILE_UPDATE_FAILURE';
                    var0.type = var4;
                    var4 = _closure2_slot0;
                    var0.guildId = var4;
                    var0.error = var3;
                    var0 = var1.bind(var2)(var0);
                    var0 = null;
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
                _fun59853_ip = 227;
                continue _fun59853;
            case 206:
                var1 = global;
                var3 = var1.Promise;
                var2 = var3.resolve;
                var1 = null;
                var0 = var2.bind(var3)(var1);
            case 227:
                return var0;
        }
    };
    var2.saveGuildProfile = var3;
    var3 = function arg0, arg1() {
        _fun59856: for (var _fun59856_ip = 0;;) switch (_fun59856_ip) {
            case 0:
                var7 = arg0;
                var5 = arg1;
                var _closure2_slot0 = var7;
                var2 = _closure1_slot6;
                var1 = var2.getIsUpdating;
                var1 = var1.bind(var2)(var7);
                if (var1) {
                    _fun59856_ip = 190;
                    continue _fun59856
                }
            case 36:
                var2 = _closure1_slot1;
                var6 = _closure1_slot2;
                var1 = 5;
                var1 = var6[var1];
                var3 = undefined;
                var8 = var2.bind(var3)(var1);
                var2 = var8.dispatch;
                var1 = {};
                var9 = 'GUILD_PROFILE_UPDATE_VISIBILITY';
                var1.type = var9;
                var1.guildId = var7;
                var1.visibility = var5;
                var1 = var2.bind(var8)(var1);
                var2 = _closure1_slot0;
                var1 = 6;
                var1 = var6[var1];
                var1 = var2.bind(var3)(var1);
                var3 = var1.HTTP;
                var2 = var3.put;
                var1 = {};
                var6 = _closure1_slot9;
                var4 = var6.GUILD_PROFILE_VISIBILITY;
                var4 = var4.bind(var6)(var7);
                var1.url = var4;
                var4 = {};
                var4.visibility = var5;
                var1.body = var4;
                var4 = false;
                var1.rejectWithError = var4;
                var3 = var2.bind(var3)(var1);
                var2 = var3.then;
                var1 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var0 = var0.body;
                    var0 = var0.visibility;
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 5;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.dispatch;
                    var1 = {};
                    var4 = 'GUILD_PROFILE_UPDATE_VISIBILITY_SUCCESS';
                    var1.type = var4;
                    var4 = _closure2_slot0;
                    var1.guildId = var4;
                    var1.visibility = var0;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var2 = var2.bind(var3)(var1);
                var1 = var2.catch;
                var0 = function(arg0) { // Environment: var0
                    var2 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var0 = 8;
                    var0 = var4[var0];
                    var3 = undefined;
                    var0 = var2.bind(var3)(var0);
                    var5 = var0.APIError;
                    var0 = var5.prototype;
                    var2 = Object.create(var0, {
                        constructor: {
                            value: var5
                        }
                    });
                    var6 = arg0;
                    var7 = var2;
                    var0 = new var7[var5](var6, var5);
                    var0 = var0 instanceof Object ? var0 : var2;
                    var2 = _closure1_slot1;
                    var1 = 5;
                    var1 = var4[var1];
                    var3 = var2.bind(var3)(var1);
                    var2 = var3.dispatch;
                    var1 = {};
                    var4 = 'GUILD_PROFILE_UPDATE_VISIBILITY_FAILURE';
                    var1.type = var4;
                    var4 = _closure2_slot0;
                    var1.guildId = var4;
                    var1.error = var0;
                    var1 = var2.bind(var3)(var1);
                    throw var0;
                };
                var0 = var1.bind(var2)(var0);
                _fun59856_ip = 211;
                continue _fun59856;
            case 190:
                var1 = global;
                var3 = var1.Promise;
                var2 = var3.resolve;
                var1 = null;
                var0 = var2.bind(var3)(var1);
            case 211:
                return var0;
        }
    };
    var2.setGuildProfileVisibility = var3;
    var3 = function() {
        var0 = undefined;
        var3 = _closure1_slot10;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.fetchGuildTopGames = var3;
    var1 = function arg0, arg1() {
        var7 = arg0;
        var2 = _closure1_slot5;
        var0 = var2.getSelfMember;
        var0 = var0.bind(var2)(var7);
        var2 = null;
        var6 = var2 != var0;
        var3 = _closure1_slot4;
        var0 = var3.getRequest;
        var0 = var0.bind(var3)(var7);
        var5 = var2 != var0;
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 9;
        var2 = var2[var0];
        var0 = undefined;
        var4 = var3.bind(var0)(var2);
        var3 = var4.track;
        var1 = _closure1_slot8;
        var2 = var1.GUILD_PROFILE_VIEWED;
        var1 = {};
        var1.guild_id = var7;
        var7 = arg1;
        var1.location_stack = var7;
        var1.is_member = var6;
        var1.has_join_request = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var2.trackGuildProfileViewed = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 3214, 1681, 7400, 660, 806, 507, 7401, 3350, 795, 2]);