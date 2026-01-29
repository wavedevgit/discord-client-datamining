// modules/quests/QuestActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var0 = function() { // Original name: _manuallyStartConsoleQuest, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot4;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun46681: for (var _fun46681_ip = 0;;) switch (_fun46681_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arguments[1];
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 3);
                        if (var3) {
                            _fun46681_ip = 660;
                            continue _fun46681
                        }
                    case 13:
                        var10 = arg0;
                        var8 = undefined;
                        if (!(var1 === var8)) {
                            _fun46681_ip = 24;
                            continue _fun46681
                        }
                    case 22:
                        var1 = false;
                    case 24:
                        var12 = var1;
                        var9 = undefined;
                        var2 = undefined;
                        var4 = undefined;
                        SaveGenerator(address = 37);
                    case 35:
                        return var8;
                    case 37:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun46681_ip = 657;
                            continue _fun46681
                        }
                    case 46: // try_start_0
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var3 = 7;
                        var3 = var7[var3];
                        var3 = var6.bind(var8)(var3);
                        var7 = var3.HTTP;
                        var6 = var7.post;
                        var3 = {};
                        var13 = _closure1_slot11;
                        var11 = var13.QUEST_ON_CONSOLE_START;
                        var10 = var11.bind(var13)(var10);
                        var3.url = var10;
                        var11 = var12;
                        var10 = undefined;
                        if (!var11) {
                            _fun46681_ip = 119;
                            continue _fun46681
                        }
                    case 109:
                        var11 = {};
                        var11.preview = var12;
                        var10 = var11;
                    case 119:
                        var3.query = var10;
                        var10 = true;
                        var3.failImmediatelyWhenRateLimited = var10;
                        var10 = false;
                        var3.rejectWithError = var10;
                        var3 = var6.bind(var7)(var3);
                        SaveGenerator(address = 146);
                    case 144:
                        return var3;
                    case 146:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 6);
                        if (var6) {
                            _fun46681_ip = 308;
                            continue _fun46681
                        }
                    case 155:
                        var6 = var3.body;
                        var9 = var6;
                        var6 = var6.quest_user_status;
                        var7 = null;
                        if (!(var7 == var6)) {
                            _fun46681_ip = 241;
                            continue _fun46681
                        }
                    case 175:
                        var6 = var9;
                        var6 = var6.error_hints_v2;
                        if (!(var7 != var6)) {
                            _fun46681_ip = 294;
                            continue _fun46681
                        }
                    case 188:
                        var6 = var9;
                        var6 = var6.error_hints_v2;
                        var6 = var6.length;
                        var12 = 0;
                        if (!(var6 > var12)) {
                            _fun46681_ip = 294;
                            continue _fun46681
                        }
                    case 208:
                        var6 = {};
                        var7 = var9;
                        var11 = var7.error_hints_v2;
                        var10 = var11.slice;
                        var7 = 5;
                        var7 = var10.bind(var11)(var12, var7);
                        var6.errorHints = var7;
                    case 238: // try_end0
                        return var6;
                    case 241: // try_start_1
                        var6 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var5 = 8;
                        var5 = var7[var5];
                        var7 = var6.bind(var8)(var5);
                        var6 = var7.dispatch;
                        var5 = {};
                        var10 = 'QUESTS_USER_STATUS_UPDATE';
                        var5.type = var10;
                        var9 = var9.quest_user_status;
                        var5.user_status = var9;
                        var5 = var6.bind(var7)(var5);
                    case 294: // try_end1
                        var5 = {};
                        var6 = new Array(0);
                        var5.errorHints = var6;
                        return var5;
                    case 308:
                        return var3;
                    case 311: // catch_target0 // catch_target1
                        CatchBlockStart(arg_register = 7);
                        var6 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var5 = 9;
                        var5 = var9[var5];
                        var5 = var6.bind(var8)(var5);
                        var6 = var5.prototype;
                        var6 = Object.create(var6, {
                            constructor: {
                                value: var5
                            }
                        });
                        var16 = var6;
                        var15 = var7;
                        var5 = new var16[var5](var15, var14);
                        var5 = var5 instanceof Object ? var5 : var6;
                        var4 = var5;
                        var6 = var5.status;
                        var5 = 429;
                        if (!(var5 !== var6)) {
                            _fun46681_ip = 536;
                            continue _fun46681
                        }
                    case 380:
                        var5 = var4;
                        var4 = var5.getAnyErrorMessage;
                        var5 = var4.bind(var5)();
                        var2 = var5;
                        var4 = null;
                        if (!(var4 == var5)) {
                            _fun46681_ip = 459;
                            continue _fun46681
                        }
                    case 402:
                        var7 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var4 = 11;
                        var5 = var9[var4];
                        var5 = var7.bind(var8)(var5);
                        var6 = var5.intl;
                        var5 = var6.string;
                        var4 = var9[var4];
                        var4 = var7.bind(var8)(var4);
                        var4 = var4.t;
                        var4 = var4.xSCvBf;
                        var4 = var5.bind(var6)(var4);
                        _fun46681_ip = 462;
                        continue _fun46681;
                    case 459:
                        var4 = var2;
                    case 462:
                        var2 = {};
                        var5 = {};
                        var7 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var6 = 10;
                        var6 = var9[var6];
                        var6 = var7.bind(var8)(var6);
                        var6 = var6.QuestConsoleStartErrorLocal;
                        var6 = var6.GENERIC;
                        var5.type = var6;
                        var5.message = var4;
                        var4 = '';
                        var5.connected_account_id = var4;
                        var5.connected_account_type = var4;
                        var4 = new Array(1);
                        var4[0] = var5;
                        var2.errorHints = var4;
                        return var2;
                    case 536:
                        var2 = {};
                        var4 = {};
                        var7 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var3 = 10;
                        var3 = var9[var3];
                        var3 = var7.bind(var8)(var3);
                        var3 = var3.QuestConsoleStartErrorLocal;
                        var3 = var3.RATE_LIMITED;
                        var4.type = var3;
                        var3 = 11;
                        var5 = var9[var3];
                        var5 = var7.bind(var8)(var5);
                        var6 = var5.intl;
                        var5 = var6.string;
                        var3 = var9[var3];
                        var3 = var7.bind(var8)(var3);
                        var3 = var3.t;
                        var3 = var3.Whhv4w;
                        var3 = var5.bind(var6)(var3);
                        var4.message = var3;
                        var3 = '';
                        var4.connected_account_id = var3;
                        var4.connected_account_type = var3;
                        var3 = new Array(1);
                        var3[0] = var4;
                        var2.errorHints = var3;
                        return var2;
                    case 657:
                        return var1;
                    case 660:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot14 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot14 = var0;
    var0 = function() { // Original name: _manualStopConsoleQuest, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot4;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun46684: for (var _fun46684_ip = 0;;) switch (_fun46684_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun46684_ip = 94;
                            continue _fun46684
                        }
                    case 7:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 7;
                        var1 = var2[var1];
                        var2 = undefined;
                        var1 = var3.bind(var2)(var1);
                        var4 = var1.HTTP;
                        var3 = var4.post;
                        var1 = {};
                        var7 = _closure1_slot11;
                        var6 = var7.QUEST_ON_CONSOLE_STOP;
                        var5 = arg0;
                        var5 = var6.bind(var7)(var5);
                        var1.url = var5;
                        var5 = false;
                        var1.rejectWithError = var5;
                        var1 = var3.bind(var4)(var1);
                        SaveGenerator(address = 82);
                    case 80:
                        return var1;
                    case 82:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun46684_ip = 91;
                            continue _fun46684
                        }
                    case 88:
                        return var2;
                    case 91:
                        return var1;
                    case 94:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot15 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot15 = var0;
    var0 = function() { // Original name: _resetRecentQuestCompletions, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot4;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun46687: for (var _fun46687_ip = 0;;) switch (_fun46687_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun46687_ip = 86;
                            continue _fun46687
                        }
                    case 7:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 7;
                        var1 = var2[var1];
                        var2 = undefined;
                        var1 = var3.bind(var2)(var1);
                        var4 = var1.HTTP;
                        var3 = var4.del;
                        var1 = {};
                        var5 = _closure1_slot11;
                        var5 = var5.QUESTS_RESET_RECENT_QUEST_COMPLETIONS;
                        var1.url = var5;
                        var5 = false;
                        var1.rejectWithError = var5;
                        var1 = var3.bind(var4)(var1);
                        SaveGenerator(address = 74);
                    case 72:
                        return var1;
                    case 74:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun46687_ip = 83;
                            continue _fun46687
                        }
                    case 80:
                        return var2;
                    case 83:
                        return var1;
                    case 86:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot16 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot16 = var0;
    var0 = function() { // Original name: _fetchCurrentQuests, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot4;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun46690: for (var _fun46690_ip = 0;;) switch (_fun46690_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun46690_ip = 382;
                            continue _fun46690
                        }
                    case 12:
                        var1 = _closure1_slot6;
                        var1 = var1.isFetchingCurrentQuests;
                        if (var1) {
                            _fun46690_ip = 377;
                            continue _fun46690
                        }
                    case 31:
                        var5 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 8;
                        var3 = var3[var1];
                        var7 = undefined;
                        var6 = var5.bind(var7)(var3);
                        var5 = var6.dispatch;
                        var3 = {};
                        var8 = 'QUESTS_FETCH_CURRENT_QUESTS_BEGIN';
                        var3.type = var8;
                        var3 = var5.bind(var6)(var3);
                    case 73: // try_start_0
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var3 = 7;
                        var3 = var6[var3];
                        var3 = var5.bind(var7)(var3);
                        var6 = var3.HTTP;
                        var5 = var6.get;
                        var3 = {};
                        var8 = _closure1_slot11;
                        var8 = var8.QUESTS_CURRENT_QUESTS;
                        var3.url = var8;
                        var8 = false;
                        var3.rejectWithError = var8;
                        var3 = var5.bind(var6)(var3);
                        SaveGenerator(address = 134);
                    case 132:
                        return var3;
                    case 134:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 5);
                        if (var5) {
                            _fun46690_ip = 294;
                            continue _fun46690
                        }
                    case 143:
                        var5 = var3.body;
                        var8 = var5.quests;
                        var6 = var8.filter;
                        var5 = function(arg0) { // Environment: var4
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 12;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.isQuestWithKnownConfigVersion;
                            var0 = arg0;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        };
                        var8 = var6.bind(var8)(var5);
                        var6 = var8.map;
                        var5 = function(arg0) { // Environment: var4
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 12;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.questWithUserStatusFromServer;
                            var0 = arg0;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        };
                        var9 = var6.bind(var8)(var5);
                        var5 = var3.body;
                        var8 = var5.quest_enrollment_blocked_until;
                        var6 = var9.filter;
                        var5 = function(arg0) { // Environment: var4
                            _fun46693: for (var _fun46693_ip = 0;;) switch (_fun46693_ip) {
                                case 0:
                                    var1 = arg0;
                                    var3 = var1.userStatus;
                                    var2 = null;
                                    var4 = var2 == var3;
                                    var0 = undefined;
                                    if (var4) {
                                        _fun46693_ip = 26;
                                        continue _fun46693
                                    }
                                case 20:
                                    var0 = var3.claimedAt;
                                case 26:
                                    var0 = var2 != var0;
                                    if (var0) {
                                        _fun46693_ip = 61;
                                        continue _fun46693
                                    }
                                case 33:
                                    var1 = var1.config;
                                    var1 = var1.rewardsConfig;
                                    var1 = var1.platforms;
                                    var2 = var1.length;
                                    var1 = 0;
                                    var0 = var2 > var1;
                                case 61:
                                    return var0;
                            }
                        };
                        var10 = var6.bind(var9)(var5);
                        var5 = var3.body;
                        var6 = var5.excluded_quests;
                        var5 = var6.map;
                        var4 = function(arg0) { // Environment: var4
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 12;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.excludedQuestFromServer;
                            var0 = arg0;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        };
                        var9 = var5.bind(var6)(var4);
                        var5 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var4 = var4[var1];
                        var6 = var5.bind(var7)(var4);
                        var5 = var6.dispatch;
                        var4 = {};
                        var11 = 'QUESTS_FETCH_CURRENT_QUESTS_SUCCESS';
                        var4.type = var11;
                        var4.quests = var10;
                        var4.excludedQuests = var9;
                        var4.questEnrollmentBlockedUntil = var8;
                        var4 = var5.bind(var6)(var4);
                    case 292: // try_end0
                        _fun46690_ip = 377;
                        continue _fun46690;
                    case 294:
                        return var3;
                    case 297: // catch_target0
                        CatchBlockStart(arg_register = 6);
                        var5 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var1 = var8[var1];
                        var3 = var5.bind(var7)(var1);
                        var2 = var3.dispatch;
                        var1 = {};
                        var4 = 'QUESTS_FETCH_CURRENT_QUESTS_FAILURE';
                        var1.type = var4;
                        var4 = 9;
                        var4 = var8[var4];
                        var4 = var5.bind(var7)(var4);
                        var5 = var4.prototype;
                        var5 = Object.create(var5, {
                            constructor: {
                                value: var4
                            }
                        });
                        var13 = var5;
                        var12 = var6;
                        var4 = new var13[var4](var12, var11);
                        var4 = var4 instanceof Object ? var4 : var5;
                        var1.error = var4;
                        var1 = var2.bind(var3)(var1);
                    case 377:
                        var1 = undefined;
                        return var1;
                    case 382:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot17 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot17 = var0;
    var0 = function() { // Original name: _sendHeartbeat, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot4;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun46697: for (var _fun46697_ip = 0;;) switch (_fun46697_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun46697_ip = 501;
                            continue _fun46697
                        }
                    case 13:
                        var7 = var1.questId;
                        var6 = var1.streamKey;
                        var11 = var1.applicationId;
                        var1 = var1.terminal;
                        var2 = undefined;
                        if (!(var1 === var2)) {
                            _fun46697_ip = 44;
                            continue _fun46697
                        }
                    case 42:
                        var1 = false;
                    case 44:
                        var8 = var1;
                        var13 = undefined;
                        SaveGenerator(address = 53);
                    case 51:
                        return var2;
                    case 53:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun46697_ip = 498;
                            continue _fun46697
                        }
                    case 62: // try_start_0
                        var4 = _closure1_slot1;
                        var16 = _closure1_slot2;
                        var3 = 13;
                        var3 = var16[var3];
                        var5 = var4.bind(var2)(var3);
                        var4 = var5.post;
                        var3 = {};
                        var12 = _closure1_slot11;
                        var10 = var12.QUESTS_HEARTBEAT;
                        var14 = var7;
                        var10 = var10.bind(var12)(var14);
                        var3.url = var10;
                        var10 = {};
                        var12 = var6;
                        var10.stream_key = var12;
                        var12 = var11;
                        var10.application_id = var12;
                        var10.terminal = var8;
                        var3.body = var10;
                        var10 = {};
                        var15 = _closure1_slot0;
                        var11 = 14;
                        var11 = var16[var11];
                        var11 = var15.bind(var2)(var11);
                        var11 = var11.NetworkActionNames;
                        var11 = var11.QUEST_HEARTBEAT;
                        var10.event = var11;
                        var11 = {};
                        var11.quest_id = var14;
                        var11.application_id = var12;
                        var11.terminal = var8;
                        var8 = false;
                        var11.is_overlay = var8;
                        var12 = global;
                        var12 = var12.Error;
                        var14 = var12.prototype;
                        var14 = Object.create(var14, {
                            constructor: {
                                value: var12
                            }
                        });
                        var18 = var14;
                        var12 = new var18[var12](var17);
                        var12 = var12 instanceof Object ? var12 : var14;
                        var14 = var12.stack;
                        var13 = var14;
                        var12 = null;
                        var14 = var12 != var14;
                        var12 = '';
                        if (!var14) {
                            _fun46697_ip = 256;
                            continue _fun46697
                        }
                    case 253:
                        var12 = var13;
                    case 256:
                        var11.stack_trace = var12;
                        var12 = true;
                        var11.is_playtime_eligible = var12;
                        var10.properties = var11;
                        var3.trackedActionData = var10;
                        var3.rejectWithError = var8;
                        var3 = var4.bind(var5)(var3);
                        SaveGenerator(address = 293);
                    case 291:
                        return var3;
                    case 293:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 4);
                        if (var4) {
                            _fun46697_ip = 396;
                            continue _fun46697
                        }
                    case 299:
                        var5 = _closure1_slot1;
                        var11 = _closure1_slot2;
                        var4 = 8;
                        var4 = var11[var4];
                        var8 = var5.bind(var2)(var4);
                        var5 = var8.dispatch;
                        var4 = {};
                        var10 = 'QUESTS_SEND_HEARTBEAT_SUCCESS';
                        var4.type = var10;
                        var10 = _closure1_slot0;
                        var9 = 12;
                        var9 = var11[var9];
                        var11 = var10.bind(var2)(var9);
                        var10 = var11.questUserStatusFromServer;
                        var9 = var3.body;
                        var9 = var10.bind(var11)(var9);
                        var4.userStatus = var9;
                        var9 = var7;
                        var4.questId = var9;
                        var9 = var6;
                        var4.streamKey = var9;
                        var4 = var5.bind(var8)(var4);
                    case 394: // try_end0
                        _fun46697_ip = 495;
                        continue _fun46697;
                    case 396:
                        return var3;
                    case 399: // catch_target0
                        CatchBlockStart(arg_register = 10);
                        var9 = _closure1_slot1;
                        var11 = _closure1_slot2;
                        var3 = 8;
                        var3 = var11[var3];
                        var5 = var9.bind(var2)(var3);
                        var4 = var5.dispatch;
                        var3 = {};
                        var8 = 'QUESTS_SEND_HEARTBEAT_FAILURE';
                        var3.type = var8;
                        var8 = 9;
                        var8 = var11[var8];
                        var8 = var9.bind(var2)(var8);
                        var9 = var8.prototype;
                        var9 = Object.create(var9, {
                            constructor: {
                                value: var8
                            }
                        });
                        var18 = var9;
                        var17 = var10;
                        var8 = new var18[var8](var17, var16);
                        var8 = var8 instanceof Object ? var8 : var9;
                        var3.error = var8;
                        var3.questId = var7;
                        var3.streamKey = var6;
                        var3 = var4.bind(var5)(var3);
                    case 495:
                        return var2;
                    case 498:
                        return var1;
                    case 501:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot18 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot18 = var0;
    var0 = function() { // Original name: _enrollInQuest, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot4;
        var2 = function*(arg0, arg1) { // Environment: var2
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun46700: for (var _fun46700_ip = 0;;) switch (_fun46700_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg1;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun46700_ip = 878;
                            continue _fun46700
                        }
                    case 13:
                        var9 = arg0;
                        var3 = var1;
                        var5 = undefined;
                        var11 = undefined;
                        var10 = undefined;
                        var1 = var1.questContentCTA;
                        var6 = null;
                        if (!(var6 != var1)) {
                            _fun46700_ip = 139;
                            continue _fun46700
                        }
                    case 37:
                        var2 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 16;
                        var1 = var4[var1];
                        var4 = var2.bind(var5)(var1);
                        var2 = var4.trackQuestContentClicked;
                        var1 = {};
                        var7 = var9;
                        var1.questId = var7;
                        var7 = var3;
                        var8 = var7.questContent;
                        var1.questContent = var8;
                        var8 = var7.questContentCTA;
                        var1.questContentCTA = var8;
                        var8 = var7.questContentPosition;
                        var1.questContentPosition = var8;
                        var8 = var7.questContentRowIndex;
                        var1.questContentRowIndex = var8;
                        var7 = var7.sourceQuestContent;
                        var1.sourceQuestContent = var7;
                        var1 = var2.bind(var4)(var1);
                    case 139:
                        var4 = var9;
                        var1 = _closure1_slot9;
                        if (!(var4 === var1)) {
                            _fun46700_ip = 183;
                            continue _fun46700
                        }
                    case 153:
                        var4 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var1 = 17;
                        var1 = var7[var1];
                        var4 = var4.bind(var5)(var1);
                        var1 = var4.dismissOrbsOnboardingExperience;
                        var1 = var1.bind(var4)();
                    case 183:
                        var7 = _closure1_slot6;
                        var4 = var7.isEnrolling;
                        var1 = var9;
                        var1 = var4.bind(var7)(var1);
                        if (var1) {
                            _fun46700_ip = 859;
                            continue _fun46700
                        }
                    case 207:
                        var7 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var1 = 8;
                        var4 = var4[var1];
                        var8 = var7.bind(var5)(var4);
                        var7 = var8.dispatch;
                        var4 = {};
                        var12 = 'QUESTS_ENROLL_BEGIN';
                        var4.type = var12;
                        var12 = var9;
                        var4.questId = var12;
                        var4 = var7.bind(var8)(var4);
                    case 257: // try_start_0
                        var15 = _closure1_slot0;
                        var17 = _closure1_slot2;
                        var14 = 18;
                        var4 = var17[var14];
                        var7 = var15.bind(var5)(var4);
                        var4 = var7.getAdMetadataRaw;
                        var13 = var3;
                        var3 = var13.questContent;
                        var12 = var4.bind(var7)(var3);
                        var11 = var12;
                        var3 = var17[var14];
                        var7 = var15.bind(var5)(var3);
                        var4 = var7.getAdMetadataSealed;
                        var3 = var13.questContent;
                        var10 = var4.bind(var7)(var3);
                        var3 = 7;
                        var3 = var17[var3];
                        var3 = var15.bind(var5)(var3);
                        var7 = var3.HTTP;
                        var4 = var7.post;
                        var3 = {};
                        var18 = _closure1_slot11;
                        var8 = var18.QUESTS_ENROLL;
                        var16 = var9;
                        var8 = var8.bind(var18)(var16);
                        var3.url = var8;
                        var8 = {};
                        var18 = var13.questContent;
                        var8.location = var18;
                        var14 = var17[var14];
                        var15 = var15.bind(var5)(var14);
                        var14 = var15.getAdDecisionData;
                        var13 = var13.questContent;
                        var19 = var14.bind(var15)(var16, var13);
                        var20 = var8;
                        var13 = copyDataProperties(var20, var19);
                        var13 = var6 != var12;
                        var12 = null;
                        if (!var13) {
                            _fun46700_ip = 431;
                            continue _fun46700
                        }
                    case 428:
                        var12 = var11;
                    case 431:
                        var11 = 'metadata_raw';
                        var8[var11] = var12;
                        var11 = var10;
                        var12 = var6 != var11;
                        var11 = null;
                        if (!var12) {
                            _fun46700_ip = 455;
                            continue _fun46700
                        }
                    case 452:
                        var11 = var10;
                    case 455:
                        var10 = 'metadata_sealed';
                        var8[var10] = var11;
                        var3.body = var8;
                        var8 = true;
                        var3.rejectWithError = var8;
                        var3 = var4.bind(var7)(var3);
                        SaveGenerator(address = 483);
                    case 481:
                        return var3;
                    case 483:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 4);
                        if (var4) {
                            _fun46700_ip = 584;
                            continue _fun46700
                        }
                    case 489:
                        var7 = _closure1_slot1;
                        var12 = _closure1_slot2;
                        var4 = var12[var1];
                        var8 = var7.bind(var5)(var4);
                        var7 = var8.dispatch;
                        var4 = {};
                        var10 = 'QUESTS_ENROLL_SUCCESS';
                        var4.type = var10;
                        var11 = _closure1_slot0;
                        var10 = 12;
                        var10 = var12[var10];
                        var12 = var11.bind(var5)(var10);
                        var11 = var12.questUserStatusFromServer;
                        var10 = var3.body;
                        var10 = var11.bind(var12)(var10);
                        var4.enrolledQuestUserStatus = var10;
                        var4 = var7.bind(var8)(var4);
                        var4 = {};
                        var7 = _closure1_slot12;
                        var7 = var7.SUCCESS;
                        var4.type = var7;
                    case 581: // try_end0
                        return var4;
                    case 584:
                        return var3;
                    case 587: // catch_target0
                        CatchBlockStart(arg_register = 7);
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var1 = var4[var1];
                        var8 = var3.bind(var5)(var1);
                        var3 = var8.dispatch;
                        var1 = {};
                        var10 = 'QUESTS_ENROLL_FAILURE';
                        var1.type = var10;
                        var1.questId = var9;
                        var1 = var3.bind(var8)(var1);
                        var3 = _closure1_slot0;
                        var1 = 15;
                        var1 = var4[var1];
                        var1 = var3.bind(var5)(var1);
                        var1 = var1.CaptchaCancelError;
                        var1 = var7 instanceof var1;
                        if (var1) {
                            _fun46700_ip = 819;
                            continue _fun46700
                        }
                    case 665:
                        var3 = var6 != var7;
                        if (!var3) {
                            _fun46700_ip = 683;
                            continue _fun46700
                        }
                    case 672:
                        var8 = 'object';
                        var4 = typeof var7;
                        var3 = var8 === var4;
                    case 683:
                        if (!var3) {
                            _fun46700_ip = 816;
                            continue _fun46700
                        }
                    case 689:
                        var8 = var7.status;
                        var4 = 400;
                        var4 = var4 === var8;
                        if (!var4) {
                            _fun46700_ip = 731;
                            continue _fun46700
                        }
                    case 707:
                        var9 = var7.body;
                        var10 = var6 == var9;
                        var8 = undefined;
                        if (var10) {
                            _fun46700_ip = 727;
                            continue _fun46700
                        }
                    case 721:
                        var8 = var9.captcha_key;
                    case 727:
                        var4 = var6 != var8;
                    case 731:
                        if (var4) {
                            _fun46700_ip = 785;
                            continue _fun46700
                        }
                    case 734:
                        var8 = var7.captchaFields;
                        var8 = var6 != var8;
                        if (!var8) {
                            _fun46700_ip = 782;
                            continue _fun46700
                        }
                    case 747:
                        var9 = global;
                        var11 = var9.Object;
                        var10 = var11.keys;
                        var9 = var7.captchaFields;
                        var9 = var10.bind(var11)(var9);
                        var10 = var9.length;
                        var9 = 0;
                        var8 = var10 > var9;
                    case 782:
                        var4 = var8;
                    case 785:
                        if (var4) {
                            _fun46700_ip = 813;
                            continue _fun46700
                        }
                    case 788:
                        var7 = var7.fields;
                        var8 = var6 == var7;
                        var5 = undefined;
                        if (var8) {
                            _fun46700_ip = 809;
                            continue _fun46700
                        }
                    case 803:
                        var5 = var7.captcha_key;
                    case 809:
                        var4 = var6 != var5;
                    case 813:
                        var3 = var4;
                    case 816:
                        var1 = var3;
                    case 819:
                        var3 = {};
                        var4 = _closure1_slot12;
                        if (var1) {
                            _fun46700_ip = 843;
                            continue _fun46700
                        }
                    case 828:
                        var1 = var4.UNKNOWN_ERROR;
                        var3.type = var1;
                        var1 = var3;
                        _fun46700_ip = 856;
                        continue _fun46700;
                    case 843:
                        var4 = var4.CAPTCHA_FAILED;
                        var3.type = var4;
                        var1 = var3;
                    case 856:
                        return var1;
                    case 859:
                        var1 = {};
                        var2 = _closure1_slot12;
                        var2 = var2.PREVIOUS_IN_FLIGHT_REQUEST;
                        var1.type = var2;
                        return var1;
                    case 878:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot19 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot19 = var0;
    var0 = function() { // Original name: _claimQuestReward, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot4;
        var2 = function*(arg0, arg1, arg2) { // Environment: var2
            var0 = function*(arg0, arg1, arg2) { // Original name: ?anon_0_, environment: var0
                _fun46703: for (var _fun46703_ip = 0;;) switch (_fun46703_ip) {
                    case 0:
                        StartGenerator();
                        var7 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun46703_ip = 591;
                            continue _fun46703
                        }
                    case 13:
                        var6 = var7;
                        var18 = arg1;
                        var8 = arg2;
                        var1 = undefined;
                        var12 = undefined;
                        var10 = undefined;
                        var5 = undefined;
                        var3 = _closure1_slot6;
                        var2 = var3.isClaimingReward;
                        var2 = var2.bind(var3)(var7);
                        if (var2) {
                            _fun46703_ip = 588;
                            continue _fun46703
                        }
                    case 54:
                        var7 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var3 = 8;
                        var2 = var2[var3];
                        var9 = var7.bind(var1)(var2);
                        var7 = var9.dispatch;
                        var2 = {};
                        var11 = 'QUESTS_CLAIM_REWARD_BEGIN';
                        var2.type = var11;
                        var11 = var6;
                        var2.questId = var11;
                        var2 = var7.bind(var9)(var2);
                    case 104: // try_start_0
                        var14 = _closure1_slot0;
                        var17 = _closure1_slot2;
                        var11 = 18;
                        var2 = var17[var11];
                        var7 = var14.bind(var1)(var2);
                        var2 = var7.getAdMetadataRaw;
                        var16 = var8;
                        var13 = var2.bind(var7)(var16);
                        var12 = var13;
                        var2 = var17[var11];
                        var7 = var14.bind(var1)(var2);
                        var2 = var7.getAdMetadataSealed;
                        var10 = var2.bind(var7)(var16);
                        var2 = 7;
                        var2 = var17[var2];
                        var2 = var14.bind(var1)(var2);
                        var8 = var2.HTTP;
                        var7 = var8.post;
                        var2 = {};
                        var19 = _closure1_slot11;
                        var9 = var19.QUESTS_CLAIM_REWARD;
                        var15 = var6;
                        var9 = var9.bind(var19)(var15);
                        var2.url = var9;
                        var9 = {};
                        var9.platform = var18;
                        var9.location = var16;
                        var11 = var17[var11];
                        var14 = var14.bind(var1)(var11);
                        var11 = var14.getAdDecisionData;
                        var20 = var11.bind(var14)(var15, var16);
                        var21 = var9;
                        var11 = copyDataProperties(var21, var20);
                        var11 = null;
                        var14 = var11 != var13;
                        var13 = null;
                        if (!var14) {
                            _fun46703_ip = 261;
                            continue _fun46703
                        }
                    case 258:
                        var13 = var12;
                    case 261:
                        var12 = 'metadata_raw';
                        var9[var12] = var13;
                        var12 = var10;
                        var12 = var11 != var12;
                        var11 = null;
                        if (!var12) {
                            _fun46703_ip = 285;
                            continue _fun46703
                        }
                    case 282:
                        var11 = var10;
                    case 285:
                        var10 = 'metadata_sealed';
                        var9[var10] = var11;
                        var2.body = var9;
                        var9 = false;
                        var2.rejectWithError = var9;
                        var2 = var7.bind(var8)(var2);
                        SaveGenerator(address = 313);
                    case 311:
                        return var2;
                    case 313:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 7);
                        if (var7) {
                            _fun46703_ip = 498;
                            continue _fun46703
                        }
                    case 322:
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var7 = 12;
                        var7 = var9[var7];
                        var9 = var8.bind(var1)(var7);
                        var8 = var9.questsEntitlementsFromServer;
                        var7 = var2.body;
                        var7 = var8.bind(var9)(var7);
                        var5 = var7;
                        var7 = var7.errors;
                        var8 = var7.length;
                        var7 = 0;
                        if (!(var7 !== var8)) {
                            _fun46703_ip = 440;
                            continue _fun46703
                        }
                    case 378:
                        var8 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var7 = var7[var3];
                        var9 = var8.bind(var1)(var7);
                        var8 = var9.dispatch;
                        var7 = {};
                        var10 = 'QUESTS_CLAIM_REWARD_FAILURE';
                        var7.type = var10;
                        var10 = var5;
                        var10 = var10.errors;
                        var7.error = var10;
                        var10 = var6;
                        var7.questId = var10;
                        var7 = var8.bind(var9)(var7);
                        _fun46703_ip = 495;
                        continue _fun46703;
                    case 440:
                        var8 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var7 = var7[var3];
                        var9 = var8.bind(var1)(var7);
                        var8 = var9.dispatch;
                        var7 = {};
                        var10 = 'QUESTS_CLAIM_REWARD_SUCCESS';
                        var7.type = var10;
                        var10 = var6;
                        var7.questId = var10;
                        var10 = var5;
                        var7.entitlements = var10;
                        var7 = var8.bind(var9)(var7);
                    case 495: // try_end0
                        return var5;
                    case 498:
                        return var2;
                    case 501: // catch_target0
                        CatchBlockStart(arg_register = 2);
                        var8 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var3 = var9[var3];
                        var5 = var8.bind(var1)(var3);
                        var4 = var5.dispatch;
                        var3 = {};
                        var7 = 'QUESTS_CLAIM_REWARD_FAILURE';
                        var3.type = var7;
                        var7 = 9;
                        var7 = var9[var7];
                        var7 = var8.bind(var1)(var7);
                        var8 = var7.prototype;
                        var8 = Object.create(var8, {
                            constructor: {
                                value: var7
                            }
                        });
                        var22 = var8;
                        var21 = var2;
                        var7 = new var22[var7](var21, var20);
                        var7 = var7 instanceof Object ? var7 : var8;
                        var3.error = var7;
                        var3.questId = var6;
                        var3 = var4.bind(var5)(var3);
                        throw var2;
                    case 588:
                        return var1;
                    case 591:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot20 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot20 = var0;
    var0 = function() { // Original name: _fetchQuestRewardCode, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot4;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun46706: for (var _fun46706_ip = 0;;) switch (_fun46706_ip) {
                    case 0:
                        StartGenerator();
                        var4 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun46706_ip = 348;
                            continue _fun46706
                        }
                    case 13:
                        var5 = var4;
                        var2 = _closure1_slot6;
                        var1 = var2.isFetchingRewardCode;
                        var1 = var1.bind(var2)(var4);
                        if (var1) {
                            _fun46706_ip = 343;
                            continue _fun46706
                        }
                    case 40:
                        var4 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var2 = 8;
                        var1 = var1[var2];
                        var8 = undefined;
                        var6 = var4.bind(var8)(var1);
                        var4 = var6.dispatch;
                        var1 = {};
                        var7 = 'QUESTS_FETCH_REWARD_CODE_BEGIN';
                        var1.type = var7;
                        var7 = var5;
                        var1.questId = var7;
                        var1 = var4.bind(var6)(var1);
                    case 92: // try_start_0
                        var4 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var1 = 7;
                        var1 = var6[var1];
                        var1 = var4.bind(var8)(var1);
                        var6 = var1.HTTP;
                        var4 = var6.get;
                        var1 = {};
                        var10 = _closure1_slot11;
                        var9 = var10.QUESTS_REWARD_CODE;
                        var7 = var5;
                        var7 = var9.bind(var10)(var7);
                        var1.url = var7;
                        var7 = false;
                        var1.rejectWithError = var7;
                        var1 = var4.bind(var6)(var1);
                        SaveGenerator(address = 161);
                    case 159:
                        return var1;
                    case 161:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                        if (var4) {
                            _fun46706_ip = 253;
                            continue _fun46706
                        }
                    case 167:
                        var6 = _closure1_slot1;
                        var11 = _closure1_slot2;
                        var4 = var11[var2];
                        var7 = var6.bind(var8)(var4);
                        var6 = var7.dispatch;
                        var4 = {};
                        var9 = 'QUESTS_FETCH_REWARD_CODE_SUCCESS';
                        var4.type = var9;
                        var9 = var5;
                        var4.questId = var9;
                        var10 = _closure1_slot0;
                        var9 = 12;
                        var9 = var11[var9];
                        var11 = var10.bind(var8)(var9);
                        var10 = var11.questsRewardCodeFromServer;
                        var9 = var1.body;
                        var9 = var10.bind(var11)(var9);
                        var4.rewardCode = var9;
                        var4 = var6.bind(var7)(var4);
                    case 251: // try_end0
                        _fun46706_ip = 343;
                        continue _fun46706;
                    case 253:
                        return var1;
                    case 256: // catch_target0
                        CatchBlockStart(arg_register = 1);
                        var7 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var2 = var9[var2];
                        var4 = var7.bind(var8)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var6 = 'QUESTS_FETCH_REWARD_CODE_FAILURE';
                        var2.type = var6;
                        var6 = 9;
                        var6 = var9[var6];
                        var6 = var7.bind(var8)(var6);
                        var7 = var6.prototype;
                        var7 = Object.create(var7, {
                            constructor: {
                                value: var6
                            }
                        });
                        var13 = var7;
                        var12 = var1;
                        var6 = new var13[var6](var12, var11);
                        var6 = var6 instanceof Object ? var6 : var7;
                        var2.error = var6;
                        var2.questId = var5;
                        var2 = var3.bind(var4)(var2);
                        throw var1;
                    case 343:
                        var1 = undefined;
                        return var1;
                    case 348:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot21 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot21 = var0;
    var0 = function() { // Original name: _dismissQuestContent, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot4;
        var2 = function*(arg0, arg1) { // Environment: var2
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun46709: for (var _fun46709_ip = 0;;) switch (_fun46709_ip) {
                    case 0:
                        StartGenerator();
                        var4 = arg0;
                        var7 = arg1;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun46709_ip = 424;
                            continue _fun46709
                        }
                    case 16:
                        var5 = var4;
                        var11 = var7;
                        var2 = _closure1_slot6;
                        var1 = var2.isDismissingContent;
                        var4 = var1.bind(var2)(var4);
                        var6 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var13 = 18;
                        var2 = var1[var13];
                        var1 = undefined;
                        var6 = var6.bind(var1)(var2);
                        var2 = var6.isDismissible;
                        var2 = var2.bind(var6)(var7);
                        if (var4) {
                            _fun46709_ip = 421;
                            continue _fun46709
                        }
                    case 81:
                        if (!var2) {
                            _fun46709_ip = 421;
                            continue _fun46709
                        }
                    case 87:
                        var6 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var2 = 8;
                        var4 = var4[var2];
                        var7 = var6.bind(var1)(var4);
                        var6 = var7.dispatch;
                        var4 = {};
                        var8 = 'QUESTS_DISMISS_CONTENT_BEGIN';
                        var4.type = var8;
                        var8 = var5;
                        var4.questId = var8;
                        var8 = var11;
                        var4.content = var8;
                        var4 = var6.bind(var7)(var4);
                    case 144: // try_start_0
                        var10 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var4 = 7;
                        var4 = var9[var4];
                        var4 = var10.bind(var1)(var4);
                        var7 = var4.HTTP;
                        var6 = var7.post;
                        var4 = {};
                        var14 = _closure1_slot11;
                        var8 = var14.QUESTS_DISMISS_CONTENT;
                        var12 = var5;
                        var8 = var8.bind(var14)(var12, var11);
                        var4.url = var8;
                        var8 = {};
                        var9 = var9[var13];
                        var10 = var10.bind(var1)(var9);
                        var9 = var10.getAdDecisionData;
                        var15 = var9.bind(var10)(var12, var11);
                        var16 = var8;
                        var9 = copyDataProperties(var16, var15);
                        var4.body = var8;
                        var8 = false;
                        var4.rejectWithError = var8;
                        var4 = var6.bind(var7)(var4);
                        SaveGenerator(address = 249);
                    case 247:
                        return var4;
                    case 249:
                        ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 6);
                        if (var6) {
                            _fun46709_ip = 333;
                            continue _fun46709
                        }
                    case 255:
                        var7 = _closure1_slot1;
                        var11 = _closure1_slot2;
                        var6 = var11[var2];
                        var8 = var7.bind(var1)(var6);
                        var7 = var8.dispatch;
                        var6 = {};
                        var9 = 'QUESTS_DISMISS_CONTENT_SUCCESS';
                        var6.type = var9;
                        var10 = _closure1_slot0;
                        var9 = 12;
                        var9 = var11[var9];
                        var11 = var10.bind(var1)(var9);
                        var10 = var11.questUserStatusFromServer;
                        var9 = var4.body;
                        var9 = var10.bind(var11)(var9);
                        var6.dismissedQuestUserStatus = var9;
                        var6 = var7.bind(var8)(var6);
                    case 331: // try_end0
                        _fun46709_ip = 421;
                        continue _fun46709;
                    case 333:
                        return var4;
                    case 336: // catch_target0
                        CatchBlockStart(arg_register = 8);
                        var7 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var2 = var9[var2];
                        var4 = var7.bind(var1)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var6 = 'QUESTS_DISMISS_CONTENT_FAILURE';
                        var2.type = var6;
                        var6 = 9;
                        var6 = var9[var6];
                        var6 = var7.bind(var1)(var6);
                        var7 = var6.prototype;
                        var7 = Object.create(var7, {
                            constructor: {
                                value: var6
                            }
                        });
                        var17 = var7;
                        var16 = var8;
                        var6 = new var17[var6](var16, var15);
                        var6 = var6 instanceof Object ? var6 : var7;
                        var2.error = var6;
                        var2.questId = var5;
                        var2 = var3.bind(var4)(var2);
                    case 421:
                        return var1;
                    case 424:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot22 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot22 = var0;
    var0 = function() { // Original name: _completeQuestPreview, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot4;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun46712: for (var _fun46712_ip = 0;;) switch (_fun46712_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arguments[1];
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun46712_ip = 312;
                            continue _fun46712
                        }
                    case 13:
                        var6 = arg0;
                        var2 = undefined;
                        if (!(var1 === var2)) {
                            _fun46712_ip = 25;
                            continue _fun46712
                        }
                    case 22:
                        var1 = 1;
                    case 25:
                        var9 = var1;
                        SaveGenerator(address = 32);
                    case 30:
                        return var2;
                    case 32:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun46712_ip = 309;
                            continue _fun46712
                        }
                    case 41: // try_start_0
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var3 = 7;
                        var3 = var5[var3];
                        var3 = var4.bind(var2)(var3);
                        var5 = var3.HTTP;
                        var4 = var5.post;
                        var3 = {};
                        var11 = _closure1_slot11;
                        var10 = var11.QUESTS_PREVIEW_COMPLETE;
                        var7 = var6;
                        var7 = var10.bind(var11)(var7);
                        var3.url = var7;
                        var7 = {};
                        var7.percent = var9;
                        var3.body = var7;
                        var7 = false;
                        var3.rejectWithError = var7;
                        var3 = var4.bind(var5)(var3);
                        SaveGenerator(address = 125);
                    case 123:
                        return var3;
                    case 125:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 4);
                        if (var4) {
                            _fun46712_ip = 212;
                            continue _fun46712
                        }
                    case 131:
                        var5 = _closure1_slot1;
                        var10 = _closure1_slot2;
                        var4 = 8;
                        var4 = var10[var4];
                        var7 = var5.bind(var2)(var4);
                        var5 = var7.dispatch;
                        var4 = {};
                        var9 = 'QUESTS_PREVIEW_UPDATE_SUCCESS';
                        var4.type = var9;
                        var9 = _closure1_slot0;
                        var8 = 12;
                        var8 = var10[var8];
                        var10 = var9.bind(var2)(var8);
                        var9 = var10.questUserStatusFromServer;
                        var8 = var3.body;
                        var8 = var9.bind(var10)(var8);
                        var4.previewQuestUserStatus = var8;
                        var4 = var5.bind(var7)(var4);
                    case 210: // try_end0
                        _fun46712_ip = 306;
                        continue _fun46712;
                    case 212:
                        return var3;
                    case 215: // catch_target0
                        CatchBlockStart(arg_register = 9);
                        var8 = _closure1_slot1;
                        var10 = _closure1_slot2;
                        var3 = 8;
                        var3 = var10[var3];
                        var5 = var8.bind(var2)(var3);
                        var4 = var5.dispatch;
                        var3 = {};
                        var7 = 'QUESTS_PREVIEW_UPDATE_FAILURE';
                        var3.type = var7;
                        var7 = 9;
                        var7 = var10[var7];
                        var7 = var8.bind(var2)(var7);
                        var8 = var7.prototype;
                        var8 = Object.create(var8, {
                            constructor: {
                                value: var7
                            }
                        });
                        var13 = var8;
                        var12 = var9;
                        var7 = new var13[var7](var12, var11);
                        var7 = var7 instanceof Object ? var7 : var8;
                        var3.error = var7;
                        var3.questId = var6;
                        var3 = var4.bind(var5)(var3);
                    case 306:
                        return var2;
                    case 309:
                        return var1;
                    case 312:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot23 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot23 = var0;
    var0 = function() { // Original name: _resetQuestPreviewStatus, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot4;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun46715: for (var _fun46715_ip = 0;;) switch (_fun46715_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun46715_ip = 282;
                            continue _fun46715
                        }
                    case 10:
                        var4 = arg0;
                    case 13: // try_start_0
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 7;
                        var1 = var3[var1];
                        var8 = undefined;
                        var1 = var2.bind(var8)(var1);
                        var3 = var1.HTTP;
                        var2 = var3.del;
                        var1 = {};
                        var9 = _closure1_slot11;
                        var7 = var9.QUESTS_PREVIEW_STATUS;
                        var5 = var4;
                        var5 = var7.bind(var9)(var5);
                        var1.url = var5;
                        var5 = {};
                        var1.body = var5;
                        var5 = false;
                        var1.rejectWithError = var5;
                        var1 = var2.bind(var3)(var1);
                        SaveGenerator(address = 94);
                    case 92:
                        return var1;
                    case 94:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun46715_ip = 181;
                            continue _fun46715
                        }
                    case 100:
                        var3 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var2 = 8;
                        var2 = var9[var2];
                        var5 = var3.bind(var8)(var2);
                        var3 = var5.dispatch;
                        var2 = {};
                        var7 = 'QUESTS_PREVIEW_UPDATE_SUCCESS';
                        var2.type = var7;
                        var7 = _closure1_slot0;
                        var6 = 12;
                        var6 = var9[var6];
                        var8 = var7.bind(var8)(var6);
                        var7 = var8.questUserStatusFromServer;
                        var6 = var1.body;
                        var6 = var7.bind(var8)(var6);
                        var2.previewQuestUserStatus = var6;
                        var2 = var3.bind(var5)(var2);
                    case 179: // try_end0
                        _fun46715_ip = 277;
                        continue _fun46715;
                    case 181:
                        return var1;
                    case 184: // catch_target0
                        CatchBlockStart(arg_register = 7);
                        var8 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var1 = 8;
                        var1 = var9[var1];
                        var6 = undefined;
                        var3 = var8.bind(var6)(var1);
                        var2 = var3.dispatch;
                        var1 = {};
                        var5 = 'QUESTS_PREVIEW_UPDATE_FAILURE';
                        var1.type = var5;
                        var5 = 9;
                        var5 = var9[var5];
                        var5 = var8.bind(var6)(var5);
                        var6 = var5.prototype;
                        var6 = Object.create(var6, {
                            constructor: {
                                value: var5
                            }
                        });
                        var11 = var6;
                        var10 = var7;
                        var5 = new var11[var5](var10, var9);
                        var5 = var5 instanceof Object ? var5 : var6;
                        var1.error = var5;
                        var1.questId = var4;
                        var1 = var2.bind(var3)(var1);
                    case 277:
                        var1 = undefined;
                        return var1;
                    case 282:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot24 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot24 = var0;
    var0 = function() { // Original name: _resetQuestDismissibilityStatus, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot4;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun46718: for (var _fun46718_ip = 0;;) switch (_fun46718_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun46718_ip = 317;
                            continue _fun46718
                        }
                    case 10:
                        var4 = arg0;
                    case 13: // try_start_0
                        var3 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var2 = 8;
                        var1 = var5[var2];
                        var8 = undefined;
                        var7 = var3.bind(var8)(var1);
                        var3 = var7.dispatch;
                        var1 = {};
                        var9 = 'QUESTS_DOCK_RESET_SOFT_DISMISSAL';
                        var1.type = var9;
                        var1 = var3.bind(var7)(var1);
                        var3 = _closure1_slot0;
                        var1 = 7;
                        var1 = var5[var1];
                        var1 = var3.bind(var8)(var1);
                        var5 = var1.HTTP;
                        var3 = var5.del;
                        var1 = {};
                        var10 = _closure1_slot11;
                        var9 = var10.QUESTS_PREVIEW_DISMISSIBILITY;
                        var7 = var4;
                        var7 = var9.bind(var10)(var7);
                        var1.url = var7;
                        var7 = {};
                        var1.body = var7;
                        var7 = false;
                        var1.rejectWithError = var7;
                        var1 = var3.bind(var5)(var1);
                        SaveGenerator(address = 132);
                    case 130:
                        return var1;
                    case 132:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun46718_ip = 216;
                            continue _fun46718
                        }
                    case 138:
                        var3 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var2 = var9[var2];
                        var5 = var3.bind(var8)(var2);
                        var3 = var5.dispatch;
                        var2 = {};
                        var7 = 'QUESTS_PREVIEW_UPDATE_SUCCESS';
                        var2.type = var7;
                        var7 = _closure1_slot0;
                        var6 = 12;
                        var6 = var9[var6];
                        var8 = var7.bind(var8)(var6);
                        var7 = var8.questUserStatusFromServer;
                        var6 = var1.body;
                        var6 = var7.bind(var8)(var6);
                        var2.previewQuestUserStatus = var6;
                        var2 = var3.bind(var5)(var2);
                    case 214: // try_end0
                        _fun46718_ip = 312;
                        continue _fun46718;
                    case 216:
                        return var1;
                    case 219: // catch_target0
                        CatchBlockStart(arg_register = 7);
                        var8 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var1 = 8;
                        var1 = var9[var1];
                        var6 = undefined;
                        var3 = var8.bind(var6)(var1);
                        var2 = var3.dispatch;
                        var1 = {};
                        var5 = 'QUESTS_PREVIEW_UPDATE_FAILURE';
                        var1.type = var5;
                        var5 = 9;
                        var5 = var9[var5];
                        var5 = var8.bind(var6)(var5);
                        var6 = var5.prototype;
                        var6 = Object.create(var6, {
                            constructor: {
                                value: var5
                            }
                        });
                        var12 = var6;
                        var11 = var7;
                        var5 = new var12[var5](var11, var10);
                        var5 = var5 instanceof Object ? var5 : var6;
                        var1.error = var5;
                        var1.questId = var4;
                        var1 = var2.bind(var3)(var1);
                    case 312:
                        var1 = undefined;
                        return var1;
                    case 317:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot25 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot25 = var0;
    var0 = function() { // Original name: _fetchClaimedQuests, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot4;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun46721: for (var _fun46721_ip = 0;;) switch (_fun46721_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun46721_ip = 302;
                            continue _fun46721
                        }
                    case 10:
                        var1 = _closure1_slot6;
                        var1 = var1.isFetchingClaimedQuests;
                        if (var1) {
                            _fun46721_ip = 297;
                            continue _fun46721
                        }
                    case 29:
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 8;
                        var3 = var3[var1];
                        var7 = undefined;
                        var5 = var4.bind(var7)(var3);
                        var4 = var5.dispatch;
                        var3 = {};
                        var6 = 'QUESTS_FETCH_CLAIMED_QUESTS_BEGIN';
                        var3.type = var6;
                        var3 = var4.bind(var5)(var3);
                    case 73: // try_start_0
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var3 = 7;
                        var3 = var5[var3];
                        var3 = var4.bind(var7)(var3);
                        var5 = var3.HTTP;
                        var4 = var5.get;
                        var3 = {};
                        var6 = _closure1_slot11;
                        var6 = var6.QUESTS_CLAIMED_QUESTS;
                        var3.url = var6;
                        var6 = false;
                        var3.rejectWithError = var6;
                        var3 = var4.bind(var5)(var3);
                        SaveGenerator(address = 134);
                    case 132:
                        return var3;
                    case 134:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 4);
                        if (var4) {
                            _fun46721_ip = 214;
                            continue _fun46721
                        }
                    case 140:
                        var4 = var3.body;
                        var6 = var4.quests;
                        var5 = var6.map;
                        var4 = function(arg0) { // Environment: var4
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 12;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.getClaimedQuestWithUserStatusFromServer;
                            var0 = arg0;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        };
                        var8 = var5.bind(var6)(var4);
                        var5 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var4 = var4[var1];
                        var6 = var5.bind(var7)(var4);
                        var5 = var6.dispatch;
                        var4 = {};
                        var9 = 'QUESTS_FETCH_CLAIMED_QUESTS_SUCCESS';
                        var4.type = var9;
                        var4.quests = var8;
                        var4 = var5.bind(var6)(var4);
                    case 212: // try_end0
                        _fun46721_ip = 297;
                        continue _fun46721;
                    case 214:
                        return var3;
                    case 217: // catch_target0
                        CatchBlockStart(arg_register = 6);
                        var5 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var1 = var8[var1];
                        var3 = var5.bind(var7)(var1);
                        var2 = var3.dispatch;
                        var1 = {};
                        var4 = 'QUESTS_FETCH_CLAIMED_QUESTS_FAILURE';
                        var1.type = var4;
                        var4 = 9;
                        var4 = var8[var4];
                        var4 = var5.bind(var7)(var4);
                        var5 = var4.prototype;
                        var5 = Object.create(var5, {
                            constructor: {
                                value: var4
                            }
                        });
                        var11 = var5;
                        var10 = var6;
                        var4 = new var11[var4](var10, var9);
                        var4 = var4 instanceof Object ? var4 : var5;
                        var1.error = var4;
                        var1 = var2.bind(var3)(var1);
                    case 297:
                        var1 = undefined;
                        return var1;
                    case 302:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot26 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot26 = var0;
    var0 = function() { // Original name: _fetchQuestToDeliver, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot4;
        var2 = function*(arg0, arg1) { // Environment: var2
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun46725: for (var _fun46725_ip = 0;;) switch (_fun46725_ip) {
                    case 0:
                        StartGenerator();
                        var31 = arg0;
                        var32 = arg1;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun46725_ip = 1708;
                            continue _fun46725
                        }
                    case 16:
                        var5 = var31;
                        var12 = var32;
                        var1 = undefined;
                        var11 = undefined;
                        var29 = undefined;
                        var28 = undefined;
                        var27 = undefined;
                        var26 = undefined;
                        var25 = undefined;
                        var24 = undefined;
                        var22 = undefined;
                        var17 = undefined;
                        var16 = undefined;
                        var30 = undefined;
                        var23 = undefined;
                        var13 = undefined;
                        var21 = undefined;
                        var18 = undefined;
                        var14 = undefined;
                        var20 = undefined;
                        var7 = undefined;
                        var19 = global;
                        var3 = var19.Date;
                        var2 = var3.now;
                        var11 = var2.bind(var3)();
                        var9 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var3 = 19;
                        var2 = var4[var3];
                        var15 = var9.bind(var1)(var2);
                        var2 = var15.recordQuestRequestAttempt;
                        var10 = '/quests/decision';
                        var2 = var2.bind(var15)(var10, var32, var31);
                        var2 = 8;
                        var4 = var4[var2];
                        var15 = var9.bind(var1)(var4);
                        var9 = var15.dispatch;
                        var4 = {};
                        var32 = 'QUESTS_FETCH_QUEST_TO_DELIVER_BEGIN';
                        var4.type = var32;
                        var4.placement = var31;
                        var4 = var9.bind(var15)(var4);
                    case 160: // try_start_0
                        var9 = _closure1_slot0;
                        var15 = _closure1_slot2;
                        var4 = 20;
                        var4 = var15[var4];
                        var9 = var9.bind(var1)(var4);
                        var4 = var9.getSession;
                        var4 = var4.bind(var9)();
                        SaveGenerator(address = 194);
                    case 192:
                        return var4;
                    case 194:
                        ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 9);
                        if (var9) {
                            _fun46725_ip = 1403;
                            continue _fun46725
                        }
                    case 203:
                        var17 = var4;
                        var15 = _closure1_slot0;
                        var31 = _closure1_slot2;
                        var9 = 21;
                        var9 = var31[var9];
                        var15 = var15.bind(var1)(var9);
                        var9 = var15.getOrRefreshAdSession;
                        var9 = var9.bind(var15)();
                        SaveGenerator(address = 240);
                    case 238:
                        return var9;
                    case 240:
                        ResumeGenerator(result_out_reg = 9, return_bool_out_reg = 15);
                        if (var15) {
                            _fun46725_ip = 1400;
                            continue _fun46725
                        }
                    case 249:
                        var16 = var9;
                        var32 = _closure1_slot0;
                        var33 = _closure1_slot2;
                        var15 = 22;
                        var15 = var33[var15];
                        var15 = var32.bind(var1)(var15);
                        var34 = var15.LessPersonalizedAdsExperiment;
                        var31 = var34.getConfig;
                        var15 = {};
                        var35 = 'QuestActionCreators.fetchQuestToDeliver';
                        var15.location = var35;
                        var15 = var31.bind(var34)(var15);
                        var31 = 23;
                        var31 = var33[var31];
                        var31 = var32.bind(var1)(var31);
                        var32 = var31.DropsOptedOut;
                        var31 = var32.getSetting;
                        var30 = var31.bind(var32)();
                        var32 = _closure1_slot5;
                        var31 = var32.getGuildId;
                        var23 = var31.bind(var32)();
                        var31 = var15.enabled;
                        var15 = undefined;
                        if (!var31) {
                            _fun46725_ip = 375;
                            continue _fun46725
                        }
                    case 353:
                        var15 = undefined;
                        if (!var30) {
                            _fun46725_ip = 375;
                            continue _fun46725
                        }
                    case 358:
                        var31 = var23;
                        var30 = null;
                        var30 = var30 != var31;
                        var15 = undefined;
                        if (!var30) {
                            _fun46725_ip = 375;
                            continue _fun46725
                        }
                    case 372:
                        var15 = var23;
                    case 375:
                        var13 = var15;
                        var30 = var19.URLSearchParams;
                        var15 = {};
                        var31 = var19.String;
                        var23 = var5;
                        var23 = var31.bind(var1)(var23);
                        var15.placement = var23;
                        var23 = var30.prototype;
                        var23 = Object.create(var23, {
                            constructor: {
                                value: var30
                            }
                        });
                        var39 = var23;
                        var38 = var15;
                        var15 = new var39[var30](var38, var37);
                        var21 = var15 instanceof Object ? var15 : var23;
                        var23 = var17;
                        var15 = null;
                        var30 = var15 == var23;
                        var23 = undefined;
                        if (var30) {
                            _fun46725_ip = 451;
                            continue _fun46725
                        }
                    case 442:
                        var30 = var17;
                        var23 = var30.uuid;
                    case 451:
                        if (!(var15 != var23)) {
                            _fun46725_ip = 480;
                            continue _fun46725
                        }
                    case 455:
                        var31 = var21;
                        var30 = var31.append;
                        var23 = var17.uuid;
                        var17 = 'client_heartbeat_session_id';
                        var17 = var30.bind(var31)(var17, var23);
                    case 480:
                        var17 = var16;
                        var17 = var17.uuid;
                        if (!(var15 != var17)) {
                            _fun46725_ip = 518;
                            continue _fun46725
                        }
                    case 493:
                        var30 = var21;
                        var23 = var30.append;
                        var17 = var16.uuid;
                        var16 = 'client_ad_session_id';
                        var16 = var23.bind(var30)(var16, var17);
                    case 518:
                        var16 = var13;
                        if (!(var15 != var16)) {
                            _fun46725_ip = 547;
                            continue _fun46725
                        }
                    case 525:
                        var23 = var21;
                        var17 = var23.append;
                        var16 = var13;
                        var13 = 'guild_id';
                        var13 = var17.bind(var23)(var13, var16);
                    case 547:
                        var16 = _closure1_slot0;
                        var17 = _closure1_slot2;
                        var13 = 7;
                        var13 = var17[var13];
                        var13 = var16.bind(var1)(var13);
                        var17 = var13.HTTP;
                        var16 = var17.get;
                        var13 = {};
                        var23 = _closure1_slot11;
                        var32 = var23.QUEST_FETCH_QUEST_TO_DELIVER;
                        var23 = var21;
                        var21 = var23.toString;
                        var31 = var21.bind(var23)();
                        var21 = var19.HermesInternal;
                        var30 = var21.concat;
                        var23 = '';
                        var21 = '?';
                        var21 = var30.bind(var23)(var32, var21, var31);
                        var13.url = var21;
                        var21 = false;
                        var13.rejectWithError = var21;
                        var13 = var16.bind(var17)(var13);
                        SaveGenerator(address = 646);
                    case 644:
                        return var13;
                    case 646:
                        ResumeGenerator(result_out_reg = 13, return_bool_out_reg = 16);
                        if (var16) {
                            _fun46725_ip = 1397;
                            continue _fun46725
                        }
                    case 655:
                        var16 = var13.body;
                        var18 = var16;
                        var16 = var16.quest;
                        var14 = var16;
                        var16 = var15 != var16;
                        var21 = undefined;
                        if (!var16) {
                            _fun46725_ip = 712;
                            continue _fun46725
                        }
                    case 681:
                        var17 = _closure1_slot0;
                        var23 = _closure1_slot2;
                        var16 = 12;
                        var16 = var23[var16];
                        var17 = var17.bind(var1)(var16);
                        var16 = var17.questConfigFromServer;
                        var21 = var16.bind(var17)(var14);
                    case 712:
                        var20 = var21;
                        var16 = _closure1_slot1;
                        var14 = _closure1_slot2;
                        var14 = var14[var2];
                        var17 = var16.bind(var1)(var14);
                        var16 = var17.dispatch;
                        var14 = {};
                        var23 = 'QUESTS_FETCH_QUEST_TO_DELIVER_SUCCESS';
                        var14.type = var23;
                        var14.quest = var21;
                        var23 = {};
                        var21 = var18;
                        var21 = var21.ad_identifiers;
                        var29 = var21;
                        var30 = var15 == var21;
                        var21 = undefined;
                        if (var30) {
                            _fun46725_ip = 783;
                            continue _fun46725
                        }
                    case 777:
                        var21 = var29.ad_id;
                    case 783:
                        var23.ad_id = var21;
                        var21 = var18;
                        var21 = var21.ad_identifiers;
                        var28 = var21;
                        var29 = var15 == var21;
                        var21 = undefined;
                        if (var29) {
                            _fun46725_ip = 815;
                            continue _fun46725
                        }
                    case 809:
                        var21 = var28.adset_id;
                    case 815:
                        var23.adset_id = var21;
                        var21 = var18;
                        var21 = var21.ad_identifiers;
                        var27 = var21;
                        var28 = var15 == var21;
                        var21 = undefined;
                        if (var28) {
                            _fun46725_ip = 847;
                            continue _fun46725
                        }
                    case 841:
                        var21 = var27.ad_set_id;
                    case 847:
                        var23.ad_set_id = var21;
                        var21 = var18;
                        var21 = var21.ad_identifiers;
                        var26 = var21;
                        var27 = var15 == var21;
                        var21 = undefined;
                        if (var27) {
                            _fun46725_ip = 879;
                            continue _fun46725
                        }
                    case 873:
                        var21 = var26.campaign_id;
                    case 879:
                        var23.campaign_id = var21;
                        var21 = var18;
                        var21 = var21.ad_identifiers;
                        var25 = var21;
                        var26 = var15 == var21;
                        var21 = undefined;
                        if (var26) {
                            _fun46725_ip = 911;
                            continue _fun46725
                        }
                    case 905:
                        var21 = var25.creative_id;
                    case 911:
                        var23.creative_id = var21;
                        var21 = var18;
                        var21 = var21.ad_identifiers;
                        var24 = var21;
                        var25 = var15 == var21;
                        var21 = undefined;
                        if (var25) {
                            _fun46725_ip = 943;
                            continue _fun46725
                        }
                    case 937:
                        var21 = var24.creative_type;
                    case 943:
                        var23.creative_type = var21;
                        var21 = var18;
                        var24 = var21.request_id;
                        var23.decision_id = var24;
                        var24 = var21.ad_identifiers;
                        var24 = var15 != var24;
                        var23.is_targeted = var24;
                        var14.adDecisionData = var23;
                        var23 = var21.metadata_raw;
                        var14.metadataRaw = var23;
                        var23 = var21.metadata_sealed;
                        var14.metadataSealed = var23;
                        var23 = var21.traffic_metadata_raw;
                        var14.trafficMetadataRaw = var23;
                        var23 = var21.traffic_metadata_sealed;
                        var14.trafficMetadataSealed = var23;
                        var23 = var21.ad_context;
                        var14.adContext = var23;
                        var23 = var21.response_ttl_seconds;
                        var14.responseTtlSeconds = var23;
                        var23 = var5;
                        var14.placement = var23;
                        var23 = var11;
                        var14.fetchedAt = var23;
                        var14 = var16.bind(var17)(var14);
                        var16 = _closure1_slot1;
                        var14 = _closure1_slot2;
                        var14 = var14[var3];
                        var17 = var16.bind(var1)(var14);
                        var16 = var17.recordQuestRequestApiResponse;
                        var14 = {};
                        var23 = true;
                        var14.wasSuccessful = var23;
                        var23 = var19.String;
                        var21 = var21.request_id;
                        var21 = var23.bind(var1)(var21);
                        var14.adRequestId = var21;
                        var21 = var20;
                        var23 = var15 == var21;
                        var21 = undefined;
                        if (var23) {
                            _fun46725_ip = 1147;
                            continue _fun46725
                        }
                    case 1139:
                        var23 = var20;
                        var21 = var23.id;
                    case 1147:
                        var22 = var21;
                        var23 = var15 != var21;
                        var21 = null;
                        if (!var23) {
                            _fun46725_ip = 1162;
                            continue _fun46725
                        }
                    case 1159:
                        var21 = var22;
                    case 1162:
                        var14.currentQuestId = var21;
                        var21 = var11;
                        var14.currentFetchedAt = var21;
                        var14 = var16.bind(var17)(var10, var14);
                        var14 = var20;
                        if (!(var15 != var14)) {
                            _fun46725_ip = 1394;
                            continue _fun46725
                        }
                    case 1191:
                        var15 = var5;
                        var16 = _closure1_slot0;
                        var17 = _closure1_slot2;
                        var14 = 10;
                        var14 = var17[var14];
                        var14 = var16.bind(var1)(var14);
                        var14 = var14.QuestPlacement;
                        var14 = var14.DESKTOP_ACCOUNT_PANEL_AREA;
                        if (!(var15 === var14)) {
                            _fun46725_ip = 1269;
                            continue _fun46725
                        }
                    case 1230:
                        var15 = _closure1_slot1;
                        var16 = _closure1_slot2;
                        var14 = 24;
                        var14 = var16[var14];
                        var16 = var15.bind(var1)(var14);
                        var15 = var16.startTracking;
                        var14 = var20;
                        var14 = var14.id;
                        var14 = var15.bind(var16)(var14);
                    case 1269:
                        var22 = _closure1_slot1;
                        var23 = _closure1_slot2;
                        var14 = 25;
                        var14 = var23[var14];
                        var17 = var22.bind(var1)(var14);
                        var16 = var17.track;
                        var14 = _closure1_slot10;
                        var15 = var14.QUEST_DECISION_RECEIVED;
                        var14 = {};
                        var21 = 26;
                        var21 = var23[var21];
                        var21 = var22.bind(var1)(var21);
                        var37 = var21.bind(var1)();
                        var38 = var14;
                        var21 = copyDataProperties(var38, var37);
                        var21 = var20.id;
                        var20 = 'quest_id';
                        var14[var20] = var21;
                        var21 = var12;
                        var20 = 'caller_source';
                        var14[var20] = var21;
                        var19 = var19.String;
                        var18 = var18.request_id;
                        var19 = var19.bind(var1)(var18);
                        var18 = 'ad_request_id';
                        var14[var18] = var19;
                        var14 = var16.bind(var17)(var15, var14);
                    case 1389: // try_end0
                        _fun46725_ip = 1705;
                        continue _fun46725;
                    case 1394:
                        return var1;
                    case 1397:
                        return var13;
                    case 1400:
                        return var9;
                    case 1403:
                        return var4;
                    case 1406: // catch_target0
                        CatchBlockStart(arg_register = 13);
                        var8 = var13;
                        var14 = _closure1_slot1;
                        var15 = _closure1_slot2;
                        var3 = var15[var3];
                        var9 = var14.bind(var1)(var3);
                        var4 = var9.recordQuestRequestApiResponse;
                        var3 = {};
                        var16 = false;
                        var3.wasSuccessful = var16;
                        var3.currentFetchedAt = var11;
                        var3 = var4.bind(var9)(var10, var3);
                        var3 = 25;
                        var3 = var15[var3];
                        var11 = var14.bind(var1)(var3);
                        var10 = var11.track;
                        var3 = _closure1_slot10;
                        var4 = var3.QUEST_DECISION_ROUNDTRIP_ERROR;
                        var3 = {};
                        var9 = 26;
                        var9 = var15[var9];
                        var9 = var14.bind(var1)(var9);
                        var37 = var9.bind(var1)();
                        var38 = var3;
                        var9 = copyDataProperties(var38, var37);
                        var9 = null;
                        var14 = var9 == var13;
                        var13 = undefined;
                        if (var14) {
                            _fun46725_ip = 1525;
                            continue _fun46725
                        }
                    case 1517:
                        var14 = var8;
                        var13 = var14.message;
                    case 1525:
                        var7 = var13;
                        var13 = var9 != var13;
                        var9 = null;
                        if (!var13) {
                            _fun46725_ip = 1540;
                            continue _fun46725
                        }
                    case 1537:
                        var9 = var7;
                    case 1540:
                        var7 = 'reason';
                        var3[var7] = var9;
                        var7 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var6 = 9;
                        var13 = var9[var6];
                        var13 = var7.bind(var1)(var13);
                        var14 = var13.prototype;
                        var14 = Object.create(var14, {
                            constructor: {
                                value: var13
                            }
                        });
                        var39 = var14;
                        var38 = var8;
                        var13 = new var39[var13](var38, var37);
                        var14 = var13 instanceof Object ? var13 : var14;
                        var13 = var14.getAnyErrorMessage;
                        var14 = var13.bind(var14)();
                        var13 = 'api_error';
                        var3[var13] = var14;
                        var13 = var12;
                        var12 = 'caller_source';
                        var3[var12] = var13;
                        var3 = var10.bind(var11)(var4, var3);
                        var2 = var9[var2];
                        var4 = var7.bind(var1)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var10 = 'QUESTS_FETCH_QUEST_TO_DELIVER_FAILURE';
                        var2.type = var10;
                        var6 = var9[var6];
                        var6 = var7.bind(var1)(var6);
                        var7 = var6.prototype;
                        var7 = Object.create(var7, {
                            constructor: {
                                value: var6
                            }
                        });
                        var39 = var7;
                        var38 = var8;
                        var6 = new var39[var6](var38, var37);
                        var6 = var6 instanceof Object ? var6 : var7;
                        var2.error = var6;
                        var2.placement = var5;
                        var2 = var3.bind(var4)(var2);
                    case 1705:
                        return var1;
                    case 1708:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot27 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot27 = var0;
    var0 = function() { // Original name: _fetchEarnedQuestToDeliver, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot4;
        var2 = function*(arg0, arg1, arg2) { // Environment: var2
            var0 = function*(arg0, arg1, arg2) { // Original name: ?anon_0_, environment: var0
                _fun46728: for (var _fun46728_ip = 0;;) switch (_fun46728_ip) {
                    case 0:
                        StartGenerator();
                        var17 = arg1;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun46728_ip = 815;
                            continue _fun46728
                        }
                    case 13:
                        var7 = arg0;
                        var3 = var17;
                        var1 = undefined;
                        var10 = undefined;
                        var16 = undefined;
                        var27 = undefined;
                        var8 = undefined;
                        var12 = undefined;
                        var11 = undefined;
                        var20 = undefined;
                        var21 = undefined;
                        var22 = undefined;
                        var23 = undefined;
                        var9 = undefined;
                        var13 = global;
                        var4 = var13.Date;
                        var2 = var4.now;
                        var10 = var2.bind(var4)();
                        var14 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var4 = 27;
                        var2 = var6[var4];
                        var18 = var14.bind(var1)(var2);
                        var15 = var18.recordEarnedRequestAttempt;
                        var2 = arg2;
                        var2 = var15.bind(var18)(var17, var2);
                        var2 = 8;
                        var6 = var6[var2];
                        var15 = var14.bind(var1)(var6);
                        var14 = var15.dispatch;
                        var6 = {};
                        var18 = 'QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_BEGIN';
                        var6.type = var18;
                        var6.content = var17;
                        var6 = var14.bind(var15)(var6);
                    case 138: // try_start_0
                        var14 = _closure1_slot0;
                        var15 = _closure1_slot2;
                        var6 = 20;
                        var6 = var15[var6];
                        var14 = var14.bind(var1)(var6);
                        var6 = var14.getSession;
                        var6 = var6.bind(var14)();
                        SaveGenerator(address = 172);
                    case 170:
                        return var6;
                    case 172:
                        ResumeGenerator(result_out_reg = 6, return_bool_out_reg = 14);
                        if (var14) {
                            _fun46728_ip = 687;
                            continue _fun46728
                        }
                    case 181:
                        var27 = var6;
                        var15 = var7;
                        var14 = var15.join;
                        var7 = ',';
                        var26 = var14.bind(var15)(var7);
                        var14 = _closure1_slot0;
                        var15 = _closure1_slot2;
                        var7 = 7;
                        var7 = var15[var7];
                        var7 = var14.bind(var1)(var7);
                        var17 = var7.HTTP;
                        var14 = var17.get;
                        var7 = {};
                        var25 = _closure1_slot11;
                        var24 = var25.QUEST_EARNED_DECISION;
                        var19 = var3;
                        var15 = null;
                        var28 = var15 == var6;
                        var18 = undefined;
                        if (var28) {
                            _fun46728_ip = 263;
                            continue _fun46728
                        }
                    case 257:
                        var18 = var27.uuid;
                    case 263:
                        var18 = var24.bind(var25)(var26, var19, var18);
                        var7.url = var18;
                        var18 = false;
                        var7.rejectWithError = var18;
                        var7 = var14.bind(var17)(var7);
                        SaveGenerator(address = 289);
                    case 287:
                        return var7;
                    case 289:
                        ResumeGenerator(result_out_reg = 7, return_bool_out_reg = 14);
                        if (var14) {
                            _fun46728_ip = 684;
                            continue _fun46728
                        }
                    case 298:
                        var8 = var7;
                        var14 = var7.body;
                        var14 = var14.quests;
                        var12 = var14;
                        var17 = var13.Map;
                        var18 = var17.prototype;
                        var18 = Object.create(var18, {
                            constructor: {
                                value: var17
                            }
                        });
                        var32 = var18;
                        var17 = new var32[var17](var31);
                        var11 = var17 instanceof Object ? var17 : var18;
                        if (!(var15 != var14)) {
                            _fun46728_ip = 524;
                            continue _fun46728
                        }
                    case 348:
                        var19 = 0;
                        var20 = 0;
                        var14 = var13.Object;
                        var13 = var14.entries;
                        var12 = var13.bind(var14)(var12);
                        var21 = var12;
                        var12 = var12.length;
                        var18 = 12;
                        var17 = 2;
                        var14 = 1;
                        if (!(var19 < var12)) {
                            _fun46728_ip = 524;
                            continue _fun46728
                        }
                    case 393:
                        var13 = var21;
                        var12 = var20;
                        var13 = var13[var12];
                        var12 = _closure1_slot3;
                        var12 = var12.bind(var1)(var13, var17);
                        var22 = var12[var19];
                        var24 = var12[var14];
                        var23 = var24;
                        var13 = _closure1_slot0;
                        var12 = _closure1_slot2;
                        var12 = var12[var18];
                        var13 = var13.bind(var1)(var12);
                        var12 = var13.isQuestWithKnownConfigVersion;
                        var12 = var12.bind(var13)(var24);
                        if (!var12) {
                            _fun46728_ip = 503;
                            continue _fun46728
                        }
                    case 455:
                        var25 = var11;
                        var24 = var25.set;
                        var13 = var22;
                        var26 = _closure1_slot0;
                        var12 = _closure1_slot2;
                        var12 = var12[var18];
                        var27 = var26.bind(var1)(var12);
                        var26 = var27.questWithUserStatusFromServer;
                        var12 = var23;
                        var12 = var26.bind(var27)(var12);
                        var12 = var24.bind(var25)(var13, var12);
                    case 503:
                        var12 = var20;
                        var13 = var12 + 1;
                        var20 = var13;
                        var12 = var21;
                        var12 = var12.length;
                        if (var13 < var12) {
                            _fun46728_ip = 393;
                            continue _fun46728
                        }
                    case 524:
                        var17 = var8;
                        var8 = var17.body;
                        var14 = var8.metadata_raw;
                        var9 = var14;
                        var12 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var13 = var8[var2];
                        var19 = var12.bind(var1)(var13);
                        var18 = var19.dispatch;
                        var13 = {};
                        var20 = 'QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_SUCCESS';
                        var13.type = var20;
                        var20 = var11;
                        var13.quests = var20;
                        var13.metadataRaw = var14;
                        var14 = var3;
                        var13.content = var14;
                        var13 = var18.bind(var19)(var13);
                        var8 = var8[var4];
                        var13 = var12.bind(var1)(var8);
                        var12 = var13.recordEarnedRequestApiResponse;
                        var8 = {};
                        var18 = true;
                        var8.wasSuccessful = var18;
                        var17 = var17.body;
                        var17 = var17.request_id;
                        var16 = var17;
                        var17 = var15 != var17;
                        var15 = null;
                        if (!var17) {
                            _fun46728_ip = 650;
                            continue _fun46728
                        }
                    case 647:
                        var15 = var16;
                    case 650:
                        var8.requestId = var15;
                        var15 = var10;
                        var8.fetchedAt = var15;
                        var8 = var12.bind(var13)(var14, var8);
                        var8 = {};
                        var8.quests = var11;
                        var8.metadataRaw = var9;
                    case 681: // try_end0
                        return var8;
                    case 684:
                        return var7;
                    case 687:
                        return var6;
                    case 690: // catch_target0
                        CatchBlockStart(arg_register = 8);
                        var7 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var4 = var9[var4];
                        var6 = var7.bind(var1)(var4);
                        var4 = var6.recordEarnedRequestApiResponse;
                        var5 = var3;
                        var3 = {};
                        var11 = false;
                        var3.wasSuccessful = var11;
                        var3.fetchedAt = var10;
                        var3 = var4.bind(var6)(var5, var3);
                        var2 = var9[var2];
                        var4 = var7.bind(var1)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var6 = 'QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_FAILURE';
                        var2.type = var6;
                        var6 = 9;
                        var6 = var9[var6];
                        var6 = var7.bind(var1)(var6);
                        var7 = var6.prototype;
                        var7 = Object.create(var7, {
                            constructor: {
                                value: var6
                            }
                        });
                        var32 = var7;
                        var31 = var8;
                        var6 = new var32[var6](var31, var30);
                        var6 = var6 instanceof Object ? var6 : var7;
                        var2.error = var6;
                        var2.content = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    case 815:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot28 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot28 = var0;
    var0 = function() { // Original name: _updateVideoProgress, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot4;
        var2 = function*(arg0, arg1) { // Environment: var2
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun46731: for (var _fun46731_ip = 0;;) switch (_fun46731_ip) {
                    case 0:
                        StartGenerator();
                        var7 = arg0;
                        var8 = arg1;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun46731_ip = 229;
                            continue _fun46731
                        }
                    case 16:
                        var3 = _closure1_slot1;
                        var10 = _closure1_slot2;
                        var1 = 13;
                        var1 = var10[var1];
                        var2 = undefined;
                        var4 = var3.bind(var2)(var1);
                        var3 = var4.post;
                        var1 = {};
                        var9 = _closure1_slot11;
                        var5 = var9.QUESTS_VIDEO_PROGRESS;
                        var5 = var5.bind(var9)(var7);
                        var1.url = var5;
                        var5 = {};
                        var5.timestamp = var8;
                        var1.body = var5;
                        var5 = {};
                        var9 = _closure1_slot0;
                        var6 = 14;
                        var6 = var10[var6];
                        var6 = var9.bind(var2)(var6);
                        var6 = var6.NetworkActionNames;
                        var6 = var6.QUEST_VIDEO_PROGRESS;
                        var5.event = var6;
                        var6 = {};
                        var6.quest_id = var7;
                        var7 = var8.toString;
                        var7 = var7.bind(var8)();
                        var6.timestamp_sec = var7;
                        var7 = global;
                        var7 = var7.Error;
                        var8 = var7.prototype;
                        var8 = Object.create(var8, {
                            constructor: {
                                value: var7
                            }
                        });
                        var12 = var8;
                        var7 = new var12[var7](var11);
                        var7 = var7 instanceof Object ? var7 : var8;
                        var8 = var7.stack;
                        var7 = null;
                        var9 = var7 != var8;
                        var7 = '';
                        if (!var9) {
                            _fun46731_ip = 187;
                            continue _fun46731
                        }
                    case 184:
                        var7 = var8;
                    case 187:
                        var6.stack_trace = var7;
                        var5.properties = var6;
                        var1.trackedActionData = var5;
                        var5 = false;
                        var1.rejectWithError = var5;
                        var1 = var3.bind(var4)(var1);
                        SaveGenerator(address = 217);
                    case 215:
                        return var1;
                    case 217:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun46731_ip = 226;
                            continue _fun46731
                        }
                    case 223:
                        return var2;
                    case 226:
                        return var1;
                    case 229:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot29 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot29 = var0;
    var0 = function() { // Original name: _fetchVideoTranscript, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot4;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun46734: for (var _fun46734_ip = 0;;) switch (_fun46734_ip) {
                    case 0:
                        StartGenerator();
                        var10 = arguments[1];
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun46734_ip = 434;
                            continue _fun46734
                        }
                    case 13:
                        var7 = arg0;
                        var2 = undefined;
                        if (!(var10 === var2)) {
                            _fun46734_ip = 24;
                            continue _fun46734
                        }
                    case 22:
                        var10 = false;
                    case 24:
                        var9 = undefined;
                        SaveGenerator(address = 30);
                    case 28:
                        return var2;
                    case 30:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun46734_ip = 431;
                            continue _fun46734
                        }
                    case 39:
                        var11 = _closure1_slot0;
                        var12 = _closure1_slot2;
                        var3 = 28;
                        var4 = var12[var3];
                        var8 = var11.bind(var2)(var4);
                        var5 = var8.getQuestAsset;
                        var4 = var7;
                        var3 = var12[var3];
                        var3 = var11.bind(var2)(var3);
                        var3 = var3.QuestAssetType;
                        var15 = var3.VIDEO_PLAYER_TRANSCRIPT;
                        var17 = var8;
                        var16 = var4;
                        var14 = undefined;
                        var13 = var10;
                        var4 = var17[var5](var16, var15, var14, var13, var12);
                        var9 = var4;
                        var3 = null;
                        if (!(var3 == var4)) {
                            _fun46734_ip = 176;
                            continue _fun46734
                        }
                    case 116:
                        var4 = _closure1_slot7;
                        var3 = var4.getState;
                        var5 = var3.bind(var4)();
                        var4 = var5.setTranscriptAsset;
                        var3 = {};
                        var8 = var7;
                        var8 = var8.id;
                        var3.questId = var8;
                        var8 = _closure1_slot8;
                        var8 = var8.FAILURE;
                        var3.fetchStatus = var8;
                        var3 = var4.bind(var5)(var3);
                        _fun46734_ip = 428;
                        continue _fun46734;
                    case 176:
                        var4 = _closure1_slot7;
                        var3 = var4.getState;
                        var5 = var3.bind(var4)();
                        var4 = var5.setTranscriptAsset;
                        var3 = {};
                        var8 = var7;
                        var8 = var8.id;
                        var3.questId = var8;
                        var8 = _closure1_slot8;
                        var8 = var8.FETCHING;
                        var3.fetchStatus = var8;
                        var3 = var4.bind(var5)(var3);
                    case 231: // try_start_0
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var3 = 7;
                        var3 = var5[var3];
                        var3 = var4.bind(var2)(var3);
                        var5 = var3.HTTP;
                        var4 = var5.get;
                        var3 = {};
                        var8 = var9;
                        var8 = var8.url;
                        var3.url = var8;
                        var8 = true;
                        var3.rejectWithError = var8;
                        var3 = var4.bind(var5)(var3);
                        SaveGenerator(address = 290);
                    case 288:
                        return var3;
                    case 290:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 4);
                        if (var4) {
                            _fun46734_ip = 371;
                            continue _fun46734
                        }
                    case 296:
                        var5 = _closure1_slot7;
                        var4 = var5.getState;
                        var8 = var4.bind(var5)();
                        var5 = var8.setTranscriptAsset;
                        var4 = {};
                        var10 = var7;
                        var10 = var10.id;
                        var4.questId = var10;
                        var10 = _closure1_slot8;
                        var10 = var10.SUCCESS;
                        var4.fetchStatus = var10;
                        var10 = var3.text;
                        var4.text = var10;
                        var9 = var9.url;
                        var4.url = var9;
                        var4 = var5.bind(var8)(var4);
                    case 369: // try_end0
                        _fun46734_ip = 428;
                        continue _fun46734;
                    case 371:
                        return var3;
                    case 374: // catch_target0
                        CatchBlockStart(arg_register = 3);
                        var4 = _closure1_slot7;
                        var3 = var4.getState;
                        var5 = var3.bind(var4)();
                        var4 = var5.setTranscriptAsset;
                        var3 = {};
                        var7 = var7.id;
                        var3.questId = var7;
                        var6 = _closure1_slot8;
                        var6 = var6.FAILURE;
                        var3.fetchStatus = var6;
                        var3 = var4.bind(var5)(var3);
                    case 428:
                        return var2;
                    case 431:
                        return var1;
                    case 434:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot30 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot30 = var0;
    var0 = function() { // Original name: _fetchQuest, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot4;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun46737: for (var _fun46737_ip = 0;;) switch (_fun46737_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun46737_ip = 132;
                            continue _fun46737
                        }
                    case 10:
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 7;
                        var1 = var4[var1];
                        var4 = undefined;
                        var1 = var3.bind(var4)(var1);
                        var5 = var1.HTTP;
                        var3 = var5.get;
                        var1 = {};
                        var8 = _closure1_slot11;
                        var7 = var8.QUEST;
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
                            _fun46737_ip = 129;
                            continue _fun46737
                        }
                    case 90:
                        var3 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var2 = 12;
                        var2 = var5[var2];
                        var4 = var3.bind(var4)(var2);
                        var3 = var4.questConfigFromServer;
                        var2 = var1.body;
                        var2 = var3.bind(var4)(var2);
                        return var2;
                    case 129:
                        return var1;
                    case 132:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot31 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot31 = var0;
    var0 = function() { // Original name: _fetchQuestPreview, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot4;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun46740: for (var _fun46740_ip = 0;;) switch (_fun46740_ip) {
                    case 0:
                        StartGenerator();
                        var4 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun46740_ip = 348;
                            continue _fun46740
                        }
                    case 13:
                        var5 = var4;
                        var2 = _closure1_slot6;
                        var1 = var2.isFetchingQuestPreview;
                        var1 = var1.bind(var2)(var4);
                        if (var1) {
                            _fun46740_ip = 343;
                            continue _fun46740
                        }
                    case 40:
                        var4 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var2 = 8;
                        var1 = var1[var2];
                        var8 = undefined;
                        var6 = var4.bind(var8)(var1);
                        var4 = var6.dispatch;
                        var1 = {};
                        var7 = 'QUESTS_FETCH_PREVIEW_BEGIN';
                        var1.type = var7;
                        var7 = var5;
                        var1.questId = var7;
                        var1 = var4.bind(var6)(var1);
                    case 92: // try_start_0
                        var4 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var1 = 7;
                        var1 = var6[var1];
                        var1 = var4.bind(var8)(var1);
                        var6 = var1.HTTP;
                        var4 = var6.get;
                        var1 = {};
                        var10 = _closure1_slot11;
                        var9 = var10.QUEST_PREVIEW;
                        var7 = var5;
                        var7 = var9.bind(var10)(var7);
                        var1.url = var7;
                        var7 = false;
                        var1.rejectWithError = var7;
                        var1 = var4.bind(var6)(var1);
                        SaveGenerator(address = 161);
                    case 159:
                        return var1;
                    case 161:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                        if (var4) {
                            _fun46740_ip = 253;
                            continue _fun46740
                        }
                    case 167:
                        var6 = _closure1_slot1;
                        var11 = _closure1_slot2;
                        var4 = var11[var2];
                        var7 = var6.bind(var8)(var4);
                        var6 = var7.dispatch;
                        var4 = {};
                        var9 = 'QUESTS_FETCH_PREVIEW_SUCCESS';
                        var4.type = var9;
                        var9 = var5;
                        var4.questId = var9;
                        var10 = _closure1_slot0;
                        var9 = 12;
                        var9 = var11[var9];
                        var11 = var10.bind(var8)(var9);
                        var10 = var11.questWithUserStatusFromServer;
                        var9 = var1.body;
                        var9 = var10.bind(var11)(var9);
                        var4.quest = var9;
                        var4 = var6.bind(var7)(var4);
                    case 251: // try_end0
                        _fun46740_ip = 343;
                        continue _fun46740;
                    case 253:
                        return var1;
                    case 256: // catch_target0
                        CatchBlockStart(arg_register = 1);
                        var7 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var2 = var9[var2];
                        var4 = var7.bind(var8)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var6 = 'QUESTS_FETCH_PREVIEW_FAILURE';
                        var2.type = var6;
                        var6 = 9;
                        var6 = var9[var6];
                        var6 = var7.bind(var8)(var6);
                        var7 = var6.prototype;
                        var7 = Object.create(var7, {
                            constructor: {
                                value: var6
                            }
                        });
                        var13 = var7;
                        var12 = var1;
                        var6 = new var13[var6](var12, var11);
                        var6 = var6 instanceof Object ? var6 : var7;
                        var2.error = var6;
                        var2.questId = var5;
                        var2 = var3.bind(var4)(var2);
                        throw var1;
                    case 343:
                        var1 = undefined;
                        return var1;
                    case 348:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot32 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot32 = var0;
    var0 = function() { // Original name: _fetchQuestHomeTakeover, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot4;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun46743: for (var _fun46743_ip = 0;;) switch (_fun46743_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun46743_ip = 436;
                            continue _fun46743
                        }
                    case 10:
                        var2 = _closure1_slot6;
                        var1 = var2.isFetchingQuestHomeTakeover;
                        var1 = var1.bind(var2)();
                        if (var1) {
                            _fun46743_ip = 431;
                            continue _fun46743
                        }
                    case 33:
                        var2 = _closure1_slot6;
                        var1 = var2.getLastFetchedQuestHomeTakeover;
                        var2 = var1.bind(var2)();
                        var1 = null;
                        if (!(var1 != var2)) {
                            _fun46743_ip = 87;
                            continue _fun46743
                        }
                    case 55:
                        var1 = global;
                        var4 = var1.Date;
                        var1 = var4.now;
                        var1 = var1.bind(var4)();
                        var2 = var1 - var2;
                        var1 = _closure1_slot13;
                        if (!(!(var2 <= var1))) {
                            _fun46743_ip = 431;
                            continue _fun46743
                        }
                    case 87:
                        var4 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var2 = 8;
                        var1 = var1[var2];
                        var7 = undefined;
                        var5 = var4.bind(var7)(var1);
                        var4 = var5.dispatch;
                        var1 = {};
                        var6 = 'QUESTS_FETCH_QUEST_HOME_TAKEOVER_BEGIN';
                        var1.type = var6;
                        var1 = var4.bind(var5)(var1);
                    case 131: // try_start_0
                        var9 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var8 = 10;
                        var1 = var10[var8];
                        var1 = var9.bind(var7)(var1);
                        var1 = var1.QuestPlacementType;
                        var1 = var1.QUEST_HOME_BANNER;
                        var11 = new Array(1);
                        var11[0] = var1;
                        var1 = 7;
                        var1 = var10[var1];
                        var1 = var9.bind(var7)(var1);
                        var5 = var1.HTTP;
                        var4 = var5.get;
                        var1 = {};
                        var6 = _closure1_slot11;
                        var6 = var6.QUEST_PLACEMENT;
                        var1.url = var6;
                        var6 = {};
                        var6.placements = var11;
                        var8 = var10[var8];
                        var8 = var9.bind(var7)(var8);
                        var8 = var8.QuestPlacementPlatform;
                        var8 = var8.WEB;
                        var6.platform = var8;
                        var1.query = var6;
                        var6 = false;
                        var1.rejectWithError = var6;
                        var1 = var4.bind(var5)(var1);
                        SaveGenerator(address = 262);
                    case 260:
                        return var1;
                    case 262:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                        if (var4) {
                            _fun46743_ip = 346;
                            continue _fun46743
                        }
                    case 268:
                        var5 = _closure1_slot1;
                        var10 = _closure1_slot2;
                        var4 = var10[var2];
                        var6 = var5.bind(var7)(var4);
                        var5 = var6.dispatch;
                        var4 = {};
                        var8 = 'QUESTS_FETCH_QUEST_HOME_TAKEOVER_SUCCESS';
                        var4.type = var8;
                        var9 = _closure1_slot0;
                        var8 = 12;
                        var8 = var10[var8];
                        var10 = var9.bind(var7)(var8);
                        var9 = var10.questHomeTakeoverConfigFromServer;
                        var8 = var1.body;
                        var8 = var9.bind(var10)(var8);
                        var4.takeover = var8;
                        var4 = var5.bind(var6)(var4);
                    case 344: // try_end0
                        _fun46743_ip = 431;
                        continue _fun46743;
                    case 346:
                        return var1;
                    case 349: // catch_target0
                        CatchBlockStart(arg_register = 1);
                        var6 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var2 = var8[var2];
                        var4 = var6.bind(var7)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var5 = 'QUESTS_FETCH_QUEST_HOME_TAKEOVER_FAILURE';
                        var2.type = var5;
                        var5 = 9;
                        var5 = var8[var5];
                        var5 = var6.bind(var7)(var5);
                        var6 = var5.prototype;
                        var6 = Object.create(var6, {
                            constructor: {
                                value: var5
                            }
                        });
                        var13 = var6;
                        var12 = var1;
                        var5 = new var13[var5](var12, var11);
                        var5 = var5 instanceof Object ? var5 : var6;
                        var2.error = var5;
                        var2 = var3.bind(var4)(var2);
                        throw var1;
                    case 431:
                        var1 = undefined;
                        return var1;
                    case 436:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot33 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot33 = var0;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var3 = var8.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var6[var3];
    var3 = var8.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var6[var3];
    var3 = var8.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var6[var3];
    var3 = var8.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var4 = var6[var3];
    var4 = var8.bind(var0)(var4);
    var _closure1_slot7 = var4;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.FetchStatus;
    var _closure1_slot8 = var3;
    var7 = 5;
    var3 = var6[var7];
    var3 = var5.bind(var0)(var3);
    var3 = var3.ORBS_INTRO_QUEST_ID;
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var4 = var3.AnalyticEvents;
    var _closure1_slot10 = var4;
    var3 = var3.Endpoints;
    var _closure1_slot11 = var3;
    var3 = {};
    var4 = 'success';
    var3.SUCCESS = var4;
    var4 = 'captcha_failed';
    var3.CAPTCHA_FAILED = var4;
    var4 = 'unknown_error';
    var3.UNKNOWN_ERROR = var4;
    var4 = 'previous_in_flight_request';
    var3.PREVIOUS_IN_FLIGHT_REQUEST = var4;
    var _closure1_slot12 = var3;
    var4 = 29;
    var4 = var6[var4];
    var4 = var8.bind(var0)(var4);
    var4 = var4.Millis;
    var4 = var4.MINUTE;
    var4 = var7 * var4;
    var _closure1_slot13 = var4;
    var4 = 30;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/quests/QuestActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function() { // Original name: manuallyStartConsoleQuest, environment: var1
        var0 = undefined;
        var3 = _closure1_slot14;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.manuallyStartConsoleQuest = var4;
    var4 = function() { // Original name: manualStopConsoleQuest, environment: var1
        var0 = undefined;
        var3 = _closure1_slot15;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.manualStopConsoleQuest = var4;
    var4 = function() { // Original name: resetRecentQuestCompletions, environment: var1
        var0 = undefined;
        var3 = _closure1_slot16;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.resetRecentQuestCompletions = var4;
    var4 = function() { // Original name: fetchCurrentQuests, environment: var1
        var0 = undefined;
        var3 = _closure1_slot17;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.fetchCurrentQuests = var4;
    var4 = function() { // Original name: sendHeartbeat, environment: var1
        var0 = undefined;
        var3 = _closure1_slot18;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.sendHeartbeat = var4;
    var2.QuestEnrollmentResultType = var3;
    var3 = function() { // Original name: enrollInQuest, environment: var1
        var0 = undefined;
        var3 = _closure1_slot19;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.enrollInQuest = var3;
    var3 = function() { // Original name: claimQuestReward, environment: var1
        var0 = undefined;
        var3 = _closure1_slot20;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.claimQuestReward = var3;
    var3 = function() { // Original name: fetchQuestRewardCode, environment: var1
        var0 = undefined;
        var3 = _closure1_slot21;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.fetchQuestRewardCode = var3;
    var3 = function() { // Original name: dismissQuestContent, environment: var1
        var0 = undefined;
        var3 = _closure1_slot22;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.dismissQuestContent = var3;
    var3 = function(arg0) { // Original name: dismissProgressTrackingFailureNotice, environment: var1
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 8;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'QUESTS_DISMISS_PROGRESS_TRACKING_FAILURE_NOTICE';
        var1.type = var4;
        var4 = arg0;
        var1.streamKey = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.dismissProgressTrackingFailureNotice = var3;
    var3 = function() { // Original name: completeQuestPreview, environment: var1
        var0 = undefined;
        var3 = _closure1_slot23;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.completeQuestPreview = var3;
    var3 = function() { // Original name: resetQuestPreviewStatus, environment: var1
        var0 = undefined;
        var3 = _closure1_slot24;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.resetQuestPreviewStatus = var3;
    var3 = function() { // Original name: resetQuestDismissibilityStatus, environment: var1
        var0 = undefined;
        var3 = _closure1_slot25;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.resetQuestDismissibilityStatus = var3;
    var3 = function(arg0) { // Original name: overrideQuestDelivery, environment: var1
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 8;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'QUESTS_DELIVERY_OVERRIDE';
        var1.type = var4;
        var4 = arg0;
        var1.questId = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.overrideQuestDelivery = var3;
    var3 = function(arg0, arg1) { // Original name: selectTaskPlatform, environment: var1
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 8;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'QUESTS_SELECT_TASK_PLATFORM';
        var1.type = var4;
        var4 = arg0;
        var1.questId = var4;
        var4 = arg1;
        var1.platform = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.selectTaskPlatform = var3;
    var3 = function(arg0) { // Original name: questsVisibleMobileMessagesChanged, environment: var1
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 8;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'QUESTS_VISIBLE_MOBILE_MESSAGES_CHANGED';
        var1.type = var4;
        var4 = arg0;
        var1.payload = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.questsVisibleMobileMessagesChanged = var3;
    var3 = function() { // Original name: fetchClaimedQuests, environment: var1
        var0 = undefined;
        var3 = _closure1_slot26;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.fetchClaimedQuests = var3;
    var3 = function(arg0, arg1, arg2) { // Original name: updateOptimisticProgress, environment: var1
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 8;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'QUESTS_UPDATE_OPTIMISTIC_PROGRESS';
        var1.type = var4;
        var4 = arg0;
        var1.questId = var4;
        var4 = arg1;
        var1.taskEventName = var4;
        var4 = arg2;
        var1.progress = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.updateOptimisticProgress = var3;
    var3 = function(arg0) { // Original name: resetOptimisticProgress, environment: var1
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 8;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'QUESTS_RESET_OPTIMISTIC_PROGRESS';
        var1.type = var4;
        var4 = arg0;
        var1.questId = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.resetOptimisticProgress = var3;
    var3 = function() { // Original name: fetchQuestToDeliver, environment: var1
        var0 = undefined;
        var3 = _closure1_slot27;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.fetchQuestToDeliver = var3;
    var3 = function(arg0, arg1) { // Original name: clearQuestAdDecision, environment: var1
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 8;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'QUESTS_FETCH_QUEST_TO_DELIVER_SUCCESS';
        var1.type = var4;
        var1.quest = var0;
        var4 = arg0;
        var1.placement = var4;
        var4 = global;
        var5 = var4.Date;
        var4 = var5.now;
        var4 = var4.bind(var5)();
        var1.fetchedAt = var4;
        var5 = arg1;
        var4 = 1000;
        var4 = var5 / var4;
        var1.responseTtlSeconds = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.clearQuestAdDecision = var3;
    var3 = function() { // Original name: fetchEarnedQuestToDeliver, environment: var1
        var0 = undefined;
        var3 = _closure1_slot28;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.fetchEarnedQuestToDeliver = var3;
    var3 = function(arg0) { // Original name: updatePrevRestingQuestDockMode, environment: var1
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 8;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'QUESTS_PREV_RESTING_QUEST_DOCK_MODE_UPDATE';
        var1.type = var4;
        var4 = arg0;
        var1.mode = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.updatePrevRestingQuestDockMode = var3;
    var3 = function() { // Original name: updateVideoProgress, environment: var1
        var0 = undefined;
        var3 = _closure1_slot29;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.updateVideoProgress = var3;
    var3 = function() { // Original name: fetchVideoTranscript, environment: var1
        var0 = undefined;
        var3 = _closure1_slot30;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.fetchVideoTranscript = var3;
    var3 = function(arg0) { // Original name: updateQuestDockVisibilityOverride, environment: var1
        var0 = arg0;
        var4 = var0.isVisible;
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 8;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var5 = 'QUESTS_DOCK_OVERRIDE_VISIBILITY_UPDATE';
        var1.type = var5;
        var1.isVisible = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.updateQuestDockVisibilityOverride = var3;
    var3 = function() { // Original name: fetchQuest, environment: var1
        var0 = undefined;
        var3 = _closure1_slot31;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.fetchQuest = var3;
    var3 = function() { // Original name: fetchQuestPreview, environment: var1
        var0 = undefined;
        var3 = _closure1_slot32;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.fetchQuestPreview = var3;
    var1 = function() { // Original name: fetchQuestHomeTakeover, environment: var1
        var0 = undefined;
        var3 = _closure1_slot33;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.fetchQuestHomeTakeover = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 5, 3172, 5182, 5183, 5184, 660, 507, 806, 3311, 5186, 1234, 5197, 4482, 481, 5215, 5217, 5234, 5194, 5235, 4271, 5220, 5236, 1348, 5237, 795, 5233, 5240, 5241, 667, 2]);