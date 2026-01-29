// modules/guild_onboarding_home/GuildOnboardingHomeActionCreators.tsx
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
    var3 = var8[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var8[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var8[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var8[var3];
    var3 = var7.bind(var0)(var3);
    var4 = var3.AnalyticEvents;
    var _closure1_slot8 = var4;
    var3 = var3.Endpoints;
    var _closure1_slot9 = var3;
    var3 = function() { // Environment: var1
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function*(arg0) { // Environment: var0
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun90056: for (var _fun90056_ip = 0;;) switch (_fun90056_ip) {
                    case 0:
                        StartGenerator();
                        var8 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun90056_ip = 283;
                            continue _fun90056
                        }
                    case 13:
                        var5 = var8;
                        var6 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var4 = 6;
                        var3 = var1[var4];
                        var1 = undefined;
                        var7 = var6.bind(var1)(var3);
                        var6 = var7.dispatch;
                        var3 = {};
                        var9 = 'GUILD_HOME_SETTINGS_FETCH_START';
                        var3.type = var9;
                        var3.guildId = var8;
                        var3 = var6.bind(var7)(var3);
                    case 67: // try_start_0
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var3 = 7;
                        var3 = var7[var3];
                        var3 = var6.bind(var1)(var3);
                        var7 = var3.HTTP;
                        var6 = var7.get;
                        var3 = {
                            'url': null,
                            'oldFormErrors': true,
                            'rejectWithError': true
                        };
                        var10 = _closure1_slot9;
                        var9 = var10.GUILD_HOME_SETTINGS;
                        var8 = var5;
                        var8 = var9.bind(var10)(var8);
                        var3.url = var8;
                        var3 = var6.bind(var7)(var3);
                        SaveGenerator(address = 140);
                    case 138:
                        return var3;
                    case 140:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 6);
                        if (var6) {
                            _fun90056_ip = 232;
                            continue _fun90056
                        }
                    case 146:
                        var8 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var6 = 8;
                        var6 = var7[var6];
                        var9 = var8.bind(var1)(var6);
                        var8 = var9.settingsFromServer;
                        var6 = var3.body;
                        var6 = var8.bind(var9)(var6);
                        var8 = _closure1_slot1;
                        var7 = var7[var4];
                        var9 = var8.bind(var1)(var7);
                        var8 = var9.dispatch;
                        var7 = {};
                        var10 = 'GUILD_HOME_SETTINGS_FETCH_SUCCESS';
                        var7.type = var10;
                        var10 = var5;
                        var7.guildId = var10;
                        var7.homeSettings = var6;
                        var7 = var8.bind(var9)(var7);
                    case 229: // try_end0
                        return var6;
                    case 232:
                        return var3;
                    case 235: // catch_target0
                        CatchBlockStart(arg_register = 3);
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var2 = var2[var4];
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var6 = 'GUILD_HOME_SETTINGS_FETCH_FAIL';
                        var2.type = var6;
                        var2.guildId = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    case 283:
                        return var0;
                }
            };
            return var0;
        };
        var1 = var3.bind(var2)(var1);
        var _closure2_slot0 = var1;
        var0 = function() { // Environment: var0
            var0 = undefined;
            var3 = _closure2_slot0;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        return var0;
    };
    var5 = var3.bind(var0)();
    var3 = function() { // Environment: var1
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function*(arg0) { // Environment: var0
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun90060: for (var _fun90060_ip = 0;;) switch (_fun90060_ip) {
                    case 0:
                        StartGenerator();
                        var5 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun90060_ip = 309;
                            continue _fun90060
                        }
                    case 13:
                        var4 = var5;
                        var3 = _closure1_slot4;
                        var2 = var3.isFullServerPreview;
                        var2 = var2.bind(var3)(var5);
                        if (var2) {
                            _fun90060_ip = 304;
                            continue _fun90060
                        }
                    case 40:
                        var6 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var5 = 6;
                        var2 = var2[var5];
                        var3 = undefined;
                        var7 = var6.bind(var3)(var2);
                        var6 = var7.dispatch;
                        var2 = {};
                        var8 = 'GUILD_NEW_MEMBER_ACTIONS_FETCH_START';
                        var2.type = var8;
                        var8 = var4;
                        var2.guildId = var8;
                        var2 = var6.bind(var7)(var2);
                    case 91: // try_start_0
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var2 = 7;
                        var2 = var7[var2];
                        var2 = var6.bind(var3)(var2);
                        var7 = var2.HTTP;
                        var6 = var7.get;
                        var2 = {
                            'url': null,
                            'oldFormErrors': true,
                            'rejectWithError': true
                        };
                        var10 = _closure1_slot9;
                        var9 = var10.GUILD_MEMBER_ACTIONS;
                        var8 = var4;
                        var8 = var9.bind(var10)(var8);
                        var2.url = var8;
                        var2 = var6.bind(var7)(var2);
                        SaveGenerator(address = 164);
                    case 162:
                        return var2;
                    case 164:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 6);
                        if (var6) {
                            _fun90060_ip = 256;
                            continue _fun90060
                        }
                    case 170:
                        var8 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var6 = 8;
                        var6 = var7[var6];
                        var9 = var8.bind(var3)(var6);
                        var8 = var9.actionsFromServer;
                        var6 = var2.body;
                        var6 = var8.bind(var9)(var6);
                        var8 = _closure1_slot1;
                        var7 = var7[var5];
                        var9 = var8.bind(var3)(var7);
                        var8 = var9.dispatch;
                        var7 = {};
                        var10 = 'GUILD_NEW_MEMBER_ACTIONS_FETCH_SUCCESS';
                        var7.type = var10;
                        var10 = var4;
                        var7.guildId = var10;
                        var7.memberActions = var6;
                        var7 = var8.bind(var9)(var7);
                    case 253: // try_end0
                        return var6;
                    case 256:
                        return var2;
                    case 259: // catch_target0
                        CatchBlockStart(arg_register = 2);
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var1 = var1[var5];
                        var3 = var2.bind(var3)(var1);
                        var2 = var3.dispatch;
                        var1 = {};
                        var5 = 'GUILD_NEW_MEMBER_ACTIONS_FETCH_FAIL';
                        var1.type = var5;
                        var1.guildId = var4;
                        var1 = var2.bind(var3)(var1);
                    case 304:
                        var1 = undefined;
                        return var1;
                    case 309:
                        return var0;
                }
            };
            return var0;
        };
        var1 = var3.bind(var2)(var1);
        var _closure2_slot0 = var1;
        var0 = function() { // Environment: var0
            var0 = undefined;
            var3 = _closure2_slot0;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        return var0;
    };
    var4 = var3.bind(var0)();
    var3 = function() { // Environment: var1
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function*(arg0) { // Environment: var0
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun90064: for (var _fun90064_ip = 0;;) switch (_fun90064_ip) {
                    case 0:
                        StartGenerator();
                        var8 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun90064_ip = 246;
                            continue _fun90064
                        }
                    case 13:
                        var5 = var8;
                        var6 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var4 = 6;
                        var3 = var1[var4];
                        var1 = undefined;
                        var7 = var6.bind(var1)(var3);
                        var6 = var7.dispatch;
                        var3 = {};
                        var9 = 'GUILD_NEW_MEMBER_ACTIONS_DELETE_START';
                        var3.type = var9;
                        var3.guildId = var8;
                        var3 = var6.bind(var7)(var3);
                    case 67: // try_start_0
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var3 = 7;
                        var3 = var7[var3];
                        var3 = var6.bind(var1)(var3);
                        var7 = var3.HTTP;
                        var6 = var7.del;
                        var3 = {
                            'url': null,
                            'oldFormErrors': true,
                            'rejectWithError': true
                        };
                        var10 = _closure1_slot9;
                        var9 = var10.GUILD_MEMBER_ACTIONS;
                        var8 = var5;
                        var8 = var9.bind(var10)(var8);
                        var3.url = var8;
                        var3 = var6.bind(var7)(var3);
                        SaveGenerator(address = 141);
                    case 139:
                        return var3;
                    case 141:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 6);
                        if (var6) {
                            _fun90064_ip = 195;
                            continue _fun90064
                        }
                    case 147:
                        var7 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var6 = var6[var4];
                        var8 = var7.bind(var1)(var6);
                        var7 = var8.dispatch;
                        var6 = {};
                        var9 = 'GUILD_NEW_MEMBER_ACTIONS_DELETE_SUCCESS';
                        var6.type = var9;
                        var9 = var5;
                        var6.guildId = var9;
                        var6 = var7.bind(var8)(var6);
                    case 193: // try_end0
                        _fun90064_ip = 243;
                        continue _fun90064;
                    case 195:
                        return var3;
                    case 198: // catch_target0
                        CatchBlockStart(arg_register = 3);
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var2 = var2[var4];
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var6 = 'GUILD_NEW_MEMBER_ACTIONS_DELETE_FAIL';
                        var2.type = var6;
                        var2.guildId = var5;
                        var2 = var3.bind(var4)(var2);
                    case 243:
                        return var1;
                    case 246:
                        return var0;
                }
            };
            return var0;
        };
        var1 = var3.bind(var2)(var1);
        var _closure2_slot0 = var1;
        var0 = function() { // Environment: var0
            var0 = undefined;
            var3 = _closure2_slot0;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        return var0;
    };
    var3 = var3.bind(var0)();
    var6 = 12;
    var6 = var8[var6];
    var8 = var7.bind(var0)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/guild_onboarding_home/GuildOnboardingHomeActionCreators.tsx';
    var6 = var7.bind(var8)(var6);
    var2.fetchGuildHomeSettings = var5;
    var2.fetchNewMemberActions = var4;
    var2.clearNewMemberActions = var3;
    var3 = function(arg0, arg1) { // Environment: var1
        _fun90066: for (var _fun90066_ip = 0;;) switch (_fun90066_ip) {
            case 0:
                var9 = arg0;
                var4 = arg1;
                var2 = arguments[2];
                var0 = undefined;
                if (!(var2 === var0)) {
                    _fun90066_ip = 17;
                    continue _fun90066
                }
            case 15:
                var2 = true;
            case 17:
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var3 = 6;
                var3 = var6[var3];
                var6 = var5.bind(var0)(var3);
                var5 = var6.dispatch;
                var3 = {};
                var7 = 'SELECT_HOME_RESOURCE_CHANNEL';
                var3.type = var7;
                var3.guildId = var9;
                var3.channelId = var4;
                var3 = var5.bind(var6)(var3);
                var6 = null;
                if (!(var6 != var4)) {
                    _fun90066_ip = 270;
                    continue _fun90066
                }
            case 79:
                var5 = _closure1_slot5;
                var3 = var5.getChannel;
                var8 = var3.bind(var5)(var4);
                var5 = _closure1_slot6;
                var3 = var5.getResourceForChannel;
                var5 = var3.bind(var5)(var9, var4);
                var3 = var6 == var9;
                if (var3) {
                    _fun90066_ip = 133;
                    continue _fun90066
                }
            case 118:
                var10 = _closure1_slot4;
                var7 = var10.isFullServerPreview;
                var3 = var7.bind(var10)(var9);
            case 133:
                if (var3) {
                    _fun90066_ip = 140;
                    continue _fun90066
                }
            case 136:
                var3 = var6 == var8;
            case 140:
                if (var3) {
                    _fun90066_ip = 147;
                    continue _fun90066
                }
            case 143:
                var3 = var6 == var5;
            case 147:
                if (var3) {
                    _fun90066_ip = 226;
                    continue _fun90066
                }
            case 150:
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var3 = 9;
                var3 = var6[var3];
                var7 = var5.bind(var0)(var3);
                var6 = var7.track;
                var3 = _closure1_slot8;
                var5 = var3.SERVER_GUIDE_CHANNEL_SELECTED;
                var3 = {};
                var3.guild_id = var9;
                var8 = var8.id;
                var3.channel_id = var8;
                var8 = 'resource';
                var3.server_guide_channel_type = var8;
                var8 = -1;
                var3.channel_action_type = var8;
                var3 = var6.bind(var7)(var5, var3);
            case 226:
                if (!var2) {
                    _fun90066_ip = 270;
                    continue _fun90066
                }
            case 229:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 10;
                var1 = var3[var1];
                var3 = var2.bind(var0)(var1);
                var2 = var3.transitionToChannel;
                var1 = {};
                var5 = false;
                var1.navigationReplace = var5;
                var1 = var2.bind(var3)(var4, var1);
            case 270:
                return var0;
        }
    };
    var2.selectHomeResourceChannel = var3;
    var3 = function(arg0, arg1) { // Environment: var1
        _fun90067: for (var _fun90067_ip = 0;;) switch (_fun90067_ip) {
            case 0:
                var9 = arg0;
                var3 = arg1;
                var4 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 6;
                var2 = var2[var0];
                var0 = undefined;
                var5 = var4.bind(var0)(var2);
                var4 = var5.dispatch;
                var2 = {};
                var6 = 'SELECT_NEW_MEMBER_ACTION_CHANNEL';
                var2.type = var6;
                var2.guildId = var9;
                var2.channelId = var3;
                var2 = var4.bind(var5)(var2);
                var4 = _closure1_slot5;
                var2 = var4.getChannel;
                var8 = var2.bind(var4)(var3);
                var4 = _closure1_slot6;
                var2 = var4.getActionForChannel;
                var7 = var2.bind(var4)(var9, var3);
                var4 = null;
                var2 = var4 == var9;
                if (var2) {
                    _fun90067_ip = 115;
                    continue _fun90067
                }
            case 100:
                var6 = _closure1_slot4;
                var5 = var6.isFullServerPreview;
                var2 = var5.bind(var6)(var9);
            case 115:
                if (var2) {
                    _fun90067_ip = 122;
                    continue _fun90067
                }
            case 118:
                var2 = var4 == var8;
            case 122:
                if (var2) {
                    _fun90067_ip = 129;
                    continue _fun90067
                }
            case 125:
                var2 = var4 == var7;
            case 129:
                if (var2) {
                    _fun90067_ip = 210;
                    continue _fun90067
                }
            case 132:
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 9;
                var2 = var5[var2];
                var6 = var4.bind(var0)(var2);
                var5 = var6.track;
                var2 = _closure1_slot8;
                var4 = var2.SERVER_GUIDE_CHANNEL_SELECTED;
                var2 = {};
                var2.guild_id = var9;
                var8 = var8.id;
                var2.channel_id = var8;
                var8 = 'member action';
                var2.server_guide_channel_type = var8;
                var7 = var7.actionType;
                var2.channel_action_type = var7;
                var2 = var5.bind(var6)(var4, var2);
            case 210:
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 10;
                var1 = var4[var1];
                var2 = var2.bind(var0)(var1);
                var1 = var2.transitionToChannel;
                var1 = var1.bind(var2)(var3);
                return var0;
        }
    };
    var2.selectNewMemberActionChannel = var3;
    var1 = function(arg0, arg1) { // Environment: var1
        _fun90068: for (var _fun90068_ip = 0;;) switch (_fun90068_ip) {
            case 0:
                var7 = arg0;
                var6 = arg1;
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 6;
                var1 = var1[var0];
                var0 = undefined;
                var3 = var2.bind(var0)(var1);
                var2 = var3.dispatch;
                var1 = {};
                var5 = 'COMPLETE_NEW_MEMBER_ACTION';
                var1.type = var5;
                var1.guildId = var7;
                var1.channelId = var6;
                var1 = var2.bind(var3)(var1);
                var2 = _closure1_slot4;
                var1 = var2.isFullServerPreview;
                var1 = var1.bind(var2)(var7);
                if (var1) {
                    _fun90068_ip = 372;
                    continue _fun90068
                }
            case 84:
                var2 = _closure1_slot5;
                var1 = var2.getChannel;
                var10 = var1.bind(var2)(var6);
                var2 = _closure1_slot6;
                var1 = var2.getActionForChannel;
                var9 = var1.bind(var2)(var7, var6);
                var1 = null;
                if (!(var1 != var10)) {
                    _fun90068_ip = 308;
                    continue _fun90068
                }
            case 123:
                if (!(var1 != var9)) {
                    _fun90068_ip = 308;
                    continue _fun90068
                }
            case 130:
                var3 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 11;
                var2 = var5[var2];
                var5 = var3.bind(var0)(var2);
                var3 = var5.keys;
                var11 = _closure1_slot7;
                var2 = var11.getCompletedActions;
                var2 = var2.bind(var11)(var7);
                if (!(var1 == var2)) {
                    _fun90068_ip = 176;
                    continue _fun90068
                }
            case 174:
                var2 = {};
            case 176:
                var2 = var3.bind(var5)(var2);
                var _closure2_slot0 = var2;
                var3 = _closure1_slot6;
                var2 = var3.getNewMemberActions;
                var11 = var2.bind(var3)(var7);
                if (!(var1 == var11)) {
                    _fun90068_ip = 208;
                    continue _fun90068
                }
            case 204:
                var11 = new Array(0);
            case 208:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 9;
                var1 = var3[var1];
                var5 = var2.bind(var0)(var1);
                var3 = var5.track;
                var1 = _closure1_slot8;
                var2 = var1.SERVER_GUIDE_ACTION_COMPLETED;
                var1 = {};
                var12 = var10.guild_id;
                var1.guild_id = var12;
                var10 = var10.id;
                var1.channel_id = var10;
                var9 = var9.actionType;
                var1.channel_action_type = var9;
                var10 = var11.reduce;
                var9 = function(arg0, arg1) { // Environment: var8
                    _fun90069: for (var _fun90069_ip = 0;;) switch (_fun90069_ip) {
                        case 0:
                            var0 = arg0;
                            if (!var0) {
                                _fun90069_ip = 31;
                                continue _fun90069
                            }
                        case 6:
                            var3 = _closure2_slot0;
                            var2 = var3.includes;
                            var1 = arg1;
                            var1 = var1.channelId;
                            var0 = var2.bind(var3)(var1);
                        case 31:
                            return var0;
                    }
                };
                var8 = true;
                var8 = var10.bind(var11)(var9, var8);
                var1.has_completed_all = var8;
                var1 = var3.bind(var5)(var2, var1);
            case 308:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 7;
                var1 = var3[var1];
                var1 = var2.bind(var0)(var1);
                var3 = var1.HTTP;
                var2 = var3.post;
                var1 = {};
                var5 = _closure1_slot9;
                var4 = var5.GUILD_MEMBER_ACTION_UPDATE;
                var4 = var4.bind(var5)(var7, var6);
                var1.url = var4;
                var4 = true;
                var1.rejectWithError = var4;
                var1 = var2.bind(var3)(var1);
            case 372:
                return var0;
        }
    };
    var2.completeNewMemberAction = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 1664, 1372, 4265, 4266, 660, 806, 507, 11655, 795, 3897, 21, 2]);