// modules/icymi/ICYMIActionCreators.tsx
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
    var1 = var4.bind(var0)(var1);
    var1 = var1.Endpoints;
    var _closure1_slot4 = var1;
    var1 = {};
    var6 = function arg0, arg1() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = arg1;
        var _closure2_slot1 = var1;
        var2 = _closure1_slot3;
        var1 = undefined;
        var0 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun71023: for (var _fun71023_ip = 0;;) switch (_fun71023_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun71023_ip = 237;
                            continue _fun71023
                        }
                    case 10: // try_start_0
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 2;
                        var1 = var4[var1];
                        var4 = undefined;
                        var1 = var3.bind(var4)(var1);
                        var6 = var1.HTTP;
                        var3 = var6.post;
                        var1 = {};
                        var5 = _closure1_slot4;
                        var5 = var5.GRAVITY_TOPIC_GUILDS;
                        var1.url = var5;
                        var7 = {};
                        var8 = _closure2_slot0;
                        var7.category_ids = var8;
                        var8 = _closure2_slot1;
                        var7.offset = var8;
                        var1.body = var7;
                        var7 = false;
                        var1.rejectWithError = var7;
                        var1 = var3.bind(var6)(var1);
                        SaveGenerator(address = 104);
                    case 102:
                        return var1;
                    case 104:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun71023_ip = 191;
                            continue _fun71023
                        }
                    case 110:
                        var3 = var1.body;
                        var6 = var3.guilds;
                        var3 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var2 = 3;
                        var2 = var7[var2];
                        var4 = var3.bind(var4)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var7 = 'LOAD_ICYMI_POPULAR_GUILDS';
                        var2.type = var7;
                        var7 = _closure2_slot0;
                        var2.categoryIds = var7;
                        var2.guilds = var6;
                        var5 = _closure2_slot1;
                        var2.offset = var5;
                        var2 = var3.bind(var4)(var2);
                    case 186: // try_end0
                        var2 = true;
                        return var2;
                    case 191:
                        return var1;
                    case 194: // catch_target0
                        CatchBlockStart(arg_register = 3);
                        var4 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 4;
                        var2 = var2[var1];
                        var1 = undefined;
                        var2 = var4.bind(var1)(var2);
                        var1 = var2.captureException;
                        var1 = var1.bind(var2)(var3);
                        var1 = false;
                        return var1;
                    case 237:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        var0 = var0.bind(var1)();
        return var0;
    };
    var1.fetchPopularGuildsFromCategories = var6;
    var6 = function() {
        _fun71024: for (var _fun71024_ip = 0;;) switch (_fun71024_ip) {
            case 0:
                var2 = arguments[0];
                var1 = undefined;
                if (!(var2 === var1)) {
                    _fun71024_ip = 13;
                    continue _fun71024
                }
            case 11:
                var2 = {};
            case 13:
                var3 = var2.isInitialLoad;
                var _closure2_slot0 = var3;
                var3 = var2.isReloading;
                var _closure2_slot1 = var3;
                var2 = var2.forceRefresh;
                var _closure2_slot2 = var2;
                var2 = _closure1_slot3;
                var0 = function*() { // Environment: var0
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun71026: for (var _fun71026_ip = 0;;) switch (_fun71026_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun71026_ip = 359;
                                    continue _fun71026
                                }
                            case 10:
                                var1 = undefined;
                                var8 = undefined;
                                var4 = _closure1_slot0;
                                var5 = _closure1_slot2;
                                var3 = 5;
                                var3 = var5[var3];
                                var5 = var4.bind(var1)(var3);
                                var4 = var5.icymiEnabled;
                                var3 = 'fetchDehydrated';
                                var3 = var4.bind(var5)(var3);
                                if (!var3) {
                                    _fun71026_ip = 356;
                                    continue _fun71026
                                }
                            case 58:
                                var3 = _closure2_slot1;
                                if (!var3) {
                                    _fun71026_ip = 112;
                                    continue _fun71026
                                }
                            case 68:
                                var4 = _closure1_slot1;
                                var5 = _closure1_slot2;
                                var3 = 3;
                                var3 = var5[var3];
                                var5 = var4.bind(var1)(var3);
                                var4 = var5.dispatch;
                                var3 = {
                                    'type': 'ICYMI_SET_REFRESHING',
                                    'refreshing': true
                                };
                                var3 = var4.bind(var5)(var3);
                            case 112: // try_start_0
                                var3 = global;
                                var4 = var3.Date;
                                var3 = var4.now;
                                var8 = var3.bind(var4)();
                                var4 = _closure1_slot0;
                                var5 = _closure1_slot2;
                                var3 = 2;
                                var3 = var5[var3];
                                var3 = var4.bind(var1)(var3);
                                var5 = var3.HTTP;
                                var4 = var5.get;
                                var3 = {};
                                var6 = _closure1_slot4;
                                var6 = var6.GRAVITY_ITEMS_DEHYDRATED;
                                var3.url = var6;
                                var6 = {};
                                var9 = _closure2_slot2;
                                var6.refresh = var9;
                                var3.query = var6;
                                var6 = false;
                                var3.rejectWithError = var6;
                                var3 = var4.bind(var5)(var3);
                                SaveGenerator(address = 206);
                            case 204:
                                return var3;
                            case 206:
                                ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 4);
                                if (var4) {
                                    _fun71026_ip = 320;
                                    continue _fun71026
                                }
                            case 212:
                                var5 = _closure1_slot1;
                                var6 = _closure1_slot2;
                                var4 = 3;
                                var4 = var6[var4];
                                var6 = var5.bind(var1)(var4);
                                var5 = var6.dispatch;
                                var4 = {};
                                var9 = 'LOAD_ICYMI_DEHYDRATED';
                                var4.type = var9;
                                var9 = var3.body;
                                var9 = var9.items;
                                var4.items = var9;
                                var9 = var3.body;
                                var9 = var9.load_id;
                                var4.loadId = var9;
                                var4.startTime = var8;
                                var8 = _closure2_slot1;
                                var4.isReloading = var8;
                                var7 = _closure2_slot0;
                                var4.isInitialLoad = var7;
                                var4 = var5.bind(var6)(var4);
                                SaveGenerator(address = 309);
                            case 307:
                                return var4;
                            case 309:
                                ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 5);
                                if (var5) {
                                    _fun71026_ip = 317;
                                    continue _fun71026
                                }
                            case 315: // try_end0
                                _fun71026_ip = 356;
                                continue _fun71026;
                            case 317:
                                return var4;
                            case 320:
                                return var3;
                            case 323: // catch_target0
                                CatchBlockStart(arg_register = 4);
                                var3 = _closure1_slot1;
                                var5 = _closure1_slot2;
                                var2 = 4;
                                var2 = var5[var2];
                                var3 = var3.bind(var1)(var2);
                                var2 = var3.captureException;
                                var2 = var2.bind(var3)(var4);
                            case 356:
                                return var1;
                            case 359:
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
    var1.fetchDehydrated = var6;
    var6 = function arg0, arg1() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = arg1;
        var _closure2_slot1 = var1;
        var2 = _closure1_slot3;
        var1 = undefined;
        var0 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun71029: for (var _fun71029_ip = 0;;) switch (_fun71029_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun71029_ip = 211;
                            continue _fun71029
                        }
                    case 10:
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var2 = 5;
                        var2 = var4[var2];
                        var4 = undefined;
                        var5 = var3.bind(var4)(var2);
                        var3 = var5.icymiEnabled;
                        var2 = 'gravityJoinGuild';
                        var2 = var3.bind(var5)(var2);
                        if (!var2) {
                            _fun71029_ip = 71;
                            continue _fun71029
                        }
                    case 53:
                        var2 = _closure2_slot0;
                        var3 = var2.length;
                        var2 = 0;
                        if (!(var2 === var3)) {
                            _fun71029_ip = 74;
                            continue _fun71029
                        }
                    case 71:
                        return var4;
                    case 74: // try_start_0
                        var3 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var2 = 2;
                        var2 = var5[var2];
                        var2 = var3.bind(var4)(var2);
                        var5 = var2.HTTP;
                        var3 = var5.post;
                        var2 = {};
                        var6 = _closure1_slot4;
                        var6 = var6.GRAVITY_JOIN_GUILD;
                        var2.url = var6;
                        var6 = {};
                        var8 = _closure2_slot0;
                        var6.guild_ids = var8;
                        var7 = _closure2_slot1;
                        var6.location = var7;
                        var2.body = var6;
                        var6 = false;
                        var2.rejectWithError = var6;
                        var2 = var3.bind(var5)(var2);
                        SaveGenerator(address = 159);
                    case 157:
                        return var2;
                    case 159:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                        if (var3) {
                            _fun71029_ip = 170;
                            continue _fun71029
                        }
                    case 165: // try_end0
                        var3 = true;
                        return var3;
                    case 170:
                        return var2;
                    case 173: // catch_target0
                        CatchBlockStart(arg_register = 3);
                        var2 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var1 = 4;
                        var1 = var5[var1];
                        var2 = var2.bind(var4)(var1);
                        var1 = var2.captureException;
                        var1 = var1.bind(var2)(var3);
                        var1 = false;
                        return var1;
                    case 211:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        var0 = var0.bind(var1)();
        return var0;
    };
    var1.gravityJoinGuild = var6;
    var6 = function arg0, arg1() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = arg1;
        var _closure2_slot1 = var1;
        var2 = _closure1_slot3;
        var1 = undefined;
        var0 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun71032: for (var _fun71032_ip = 0;;) switch (_fun71032_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun71032_ip = 318;
                            continue _fun71032
                        }
                    case 10:
                        var1 = undefined;
                        var7 = undefined;
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var3 = 5;
                        var3 = var5[var3];
                        var5 = var4.bind(var1)(var3);
                        var4 = var5.icymiEnabled;
                        var3 = 'fetchInitial';
                        var3 = var4.bind(var5)(var3);
                        if (!var3) {
                            _fun71032_ip = 315;
                            continue _fun71032
                        }
                    case 60: // try_start_0
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var3 = 2;
                        var3 = var5[var3];
                        var3 = var4.bind(var1)(var3);
                        var5 = var3.HTTP;
                        var4 = var5.post;
                        var3 = {};
                        var6 = _closure1_slot4;
                        var6 = var6.GRAVITY_ITEMS_HYDRATE;
                        var3.url = var6;
                        var6 = {};
                        var9 = {};
                        var10 = _closure2_slot0;
                        var9.channel_id = var10;
                        var8 = _closure2_slot1;
                        var9.message_id = var8;
                        var8 = new Array(1);
                        var8[0] = var9;
                        var6.message_items = var8;
                        var8 = new Array(0);
                        var6.activity_items = var8;
                        var8 = new Array(0);
                        var6.generated_candidate_items = var8;
                        var3.body = var6;
                        var6 = false;
                        var3.rejectWithError = var6;
                        var3 = var4.bind(var5)(var3);
                        SaveGenerator(address = 181);
                    case 179:
                        return var3;
                    case 181:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 4);
                        if (var4) {
                            _fun71032_ip = 279;
                            continue _fun71032
                        }
                    case 187:
                        var7 = var3;
                        var4 = var3.body;
                        var4 = var4.message_items;
                        var4 = var4.length;
                        var8 = 0;
                        if (!(var8 !== var4)) {
                            _fun71032_ip = 276;
                            continue _fun71032
                        }
                    case 212:
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var4 = 3;
                        var4 = var6[var4];
                        var6 = var5.bind(var1)(var4);
                        var5 = var6.dispatch;
                        var4 = {};
                        var9 = 'LOAD_ICYMI_FROM_NOTIFICATION';
                        var4.type = var9;
                        var7 = var7.body;
                        var7 = var7.message_items;
                        var7 = var7[var8];
                        var4.messageItem = var7;
                        var4 = var5.bind(var6)(var4);
                    case 274: // try_end0
                        _fun71032_ip = 315;
                        continue _fun71032;
                    case 276:
                        return var1;
                    case 279:
                        return var3;
                    case 282: // catch_target0
                        CatchBlockStart(arg_register = 4);
                        var3 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var2 = 4;
                        var2 = var5[var2];
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.captureException;
                        var2 = var2.bind(var3)(var4);
                    case 315:
                        return var1;
                    case 318:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        var0 = var0.bind(var1)();
        return var0;
    };
    var1.fetchForNotification = var6;
    var6 = function arg0() {
        _fun71033: for (var _fun71033_ip = 0;;) switch (_fun71033_ip) {
            case 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 5;
                var2 = var2[var0];
                var0 = undefined;
                var4 = var3.bind(var0)(var2);
                var3 = var4.icymiEnabled;
                var2 = 'fetchInitialStatus';
                var2 = var3.bind(var4)(var2);
                if (!var2) {
                    _fun71033_ip = 95;
                    continue _fun71033
                }
            case 45:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 3;
                var1 = var3[var1];
                var3 = var2.bind(var0)(var1);
                var2 = var3.dispatch;
                var1 = {};
                var4 = 'LOAD_ICYMI_FROM_NOTIFICATION';
                var1.type = var4;
                var4 = arg0;
                var1.customStatusItem = var4;
                var1 = var2.bind(var3)(var1);
            case 95:
                return var0;
        }
    };
    var1.fetchForStatusNotification = var6;
    var6 = function arg0, arg1, arg2() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = arg1;
        var _closure2_slot1 = var1;
        var1 = arg2;
        var _closure2_slot2 = var1;
        var2 = _closure1_slot3;
        var1 = undefined;
        var0 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun71036: for (var _fun71036_ip = 0;;) switch (_fun71036_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun71036_ip = 637;
                            continue _fun71036
                        }
                    case 10:
                        var1 = undefined;
                        var9 = undefined;
                        var13 = undefined;
                        var12 = undefined;
                        var11 = undefined;
                        var10 = undefined;
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var5 = 5;
                        var2 = var2[var5];
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.icymiEnabled;
                        var4 = 'fetchHydrated';
                        var2 = var2.bind(var3)(var4);
                        if (!var2) {
                            _fun71036_ip = 634;
                            continue _fun71036
                        }
                    case 66:
                        var3 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var2 = 6;
                        var2 = var7[var2];
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.getICYMINewConversationSummaryExperiment;
                        var8 = false;
                        var2 = var2.bind(var3)(var4, var8);
                        var9 = var2.contentGenerationEnabled;
                        var4 = _closure2_slot2;
                        var3 = var4.messageItems;
                        var13 = var3;
                        var12 = var4.activityItems;
                        var11 = var4.generatedCandidateItems;
                        var3 = var3.length;
                        var4 = 0;
                        if (!(var4 === var3)) {
                            _fun71036_ip = 292;
                            continue _fun71036
                        }
                    case 148:
                        var3 = var12;
                        var3 = var3.length;
                        if (!(var4 === var3)) {
                            _fun71036_ip = 292;
                            continue _fun71036
                        }
                    case 163:
                        var3 = var11;
                        var3 = var3.length;
                        if (!(var4 === var3)) {
                            _fun71036_ip = 292;
                            continue _fun71036
                        }
                    case 175:
                        var4 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var3 = 3;
                        var3 = var7[var3];
                        var7 = var4.bind(var1)(var3);
                        var4 = var7.dispatch;
                        var3 = {};
                        var14 = 'LOAD_ICYMI_HYDRATED';
                        var3.type = var14;
                        var14 = new Array(0);
                        var3.requestMessageItems = var14;
                        var14 = new Array(0);
                        var3.requestActivityItems = var14;
                        var14 = new Array(0);
                        var3.requestGeneratedCandidateItems = var14;
                        var14 = new Array(0);
                        var3.messageItems = var14;
                        var14 = new Array(0);
                        var3.activityItems = var14;
                        var14 = new Array(0);
                        var3.generatedCandidateItems = var14;
                        var14 = _closure2_slot0;
                        var3.startingIndex = var14;
                        var14 = _closure2_slot1;
                        var3.endingIndex = var14;
                        var3 = var4.bind(var7)(var3);
                        _fun71036_ip = 634;
                        continue _fun71036;
                    case 292: // try_start_0
                        var4 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var3 = 2;
                        var3 = var7[var3];
                        var3 = var4.bind(var1)(var3);
                        var7 = var3.HTTP;
                        var4 = var7.post;
                        var3 = {};
                        var14 = _closure1_slot4;
                        var14 = var14.GRAVITY_ITEMS_HYDRATE;
                        var3.url = var14;
                        var14 = {};
                        var15 = var13;
                        var14.message_items = var15;
                        var15 = var12;
                        var14.activity_items = var15;
                        var15 = var11;
                        var14.generated_candidate_items = var15;
                        var3.body = var14;
                        var3.rejectWithError = var8;
                        var3 = var4.bind(var7)(var3);
                        SaveGenerator(address = 382);
                    case 380:
                        return var3;
                    case 382:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 4);
                        if (var4) {
                            _fun71036_ip = 526;
                            continue _fun71036
                        }
                    case 391:
                        var10 = var3;
                        var7 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var4 = 3;
                        var4 = var8[var4];
                        var8 = var7.bind(var1)(var4);
                        var7 = var8.dispatch;
                        var4 = {};
                        var14 = 'LOAD_ICYMI_HYDRATED';
                        var4.type = var14;
                        var4.requestMessageItems = var13;
                        var4.requestActivityItems = var12;
                        var4.requestGeneratedCandidateItems = var11;
                        var11 = var3.body;
                        var11 = var11.message_items;
                        var4.messageItems = var11;
                        var11 = var3.body;
                        var11 = var11.activity_items;
                        var4.activityItems = var11;
                        if (var9) {
                            _fun71036_ip = 485;
                            continue _fun71036
                        }
                    case 479:
                        var9 = new Array(0);
                        _fun71036_ip = 496;
                        continue _fun71036;
                    case 485:
                        var10 = var10.body;
                        var9 = var10.generated_candidate_items;
                    case 496:
                        var4.generatedCandidateItems = var9;
                        var9 = _closure2_slot0;
                        var4.startingIndex = var9;
                        var9 = _closure2_slot1;
                        var4.endingIndex = var9;
                        var4 = var7.bind(var8)(var4);
                    case 524: // try_end0
                        _fun71036_ip = 634;
                        continue _fun71036;
                    case 526:
                        return var3;
                    case 529: // catch_target0
                        CatchBlockStart(arg_register = 9);
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var7 = 4;
                        var7 = var4[var7];
                        var8 = var3.bind(var1)(var7);
                        var7 = var8.captureException;
                        var7 = var7.bind(var8)(var9);
                        var6 = _closure1_slot0;
                        var5 = var4[var5];
                        var7 = var6.bind(var1)(var5);
                        var6 = var7.generateHydrationId;
                        var5 = _closure2_slot0;
                        var2 = _closure2_slot1;
                        var5 = var6.bind(var7)(var5, var2);
                        var2 = 3;
                        var2 = var4[var2];
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var6 = 'LOAD_ICYMI_HYDRATED_FAILED';
                        var2.type = var6;
                        var2.hydrationId = var5;
                        var2 = var3.bind(var4)(var2);
                    case 634:
                        return var1;
                    case 637:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        var0 = var0.bind(var1)();
        return var0;
    };
    var1.fetchHydrated = var6;
    var6 = function() {
        var2 = _closure1_slot3;
        var1 = undefined;
        var0 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun71039: for (var _fun71039_ip = 0;;) switch (_fun71039_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun71039_ip = 218;
                            continue _fun71039
                        }
                    case 10:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 5;
                        var3 = var3[var1];
                        var1 = undefined;
                        var5 = var4.bind(var1)(var3);
                        var4 = var5.icymiEnabled;
                        var3 = 'guildChannelScores';
                        var3 = var4.bind(var5)(var3);
                        if (!var3) {
                            _fun71039_ip = 215;
                            continue _fun71039
                        }
                    case 58: // try_start_0
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var3 = 2;
                        var3 = var5[var3];
                        var3 = var4.bind(var1)(var3);
                        var5 = var3.HTTP;
                        var4 = var5.get;
                        var3 = {};
                        var6 = _closure1_slot4;
                        var6 = var6.GRAVITY_CUSTOM_SCORES;
                        var3.url = var6;
                        var6 = false;
                        var3.rejectWithError = var6;
                        var3 = var4.bind(var5)(var3);
                        SaveGenerator(address = 119);
                    case 117:
                        return var3;
                    case 119:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 4);
                        if (var4) {
                            _fun71039_ip = 179;
                            continue _fun71039
                        }
                    case 125:
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var4 = 3;
                        var4 = var6[var4];
                        var6 = var5.bind(var1)(var4);
                        var5 = var6.dispatch;
                        var4 = {};
                        var7 = 'LOAD_ICYMI_CUSTOM_SCORES';
                        var4.type = var7;
                        var7 = var3.body;
                        var4.scores = var7;
                        var4 = var5.bind(var6)(var4);
                    case 177: // try_end0
                        _fun71039_ip = 215;
                        continue _fun71039;
                    case 179:
                        return var3;
                    case 182: // catch_target0
                        CatchBlockStart(arg_register = 4);
                        var3 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var2 = 4;
                        var2 = var5[var2];
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.captureException;
                        var2 = var2.bind(var3)(var4);
                    case 215:
                        return var1;
                    case 218:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        var0 = var0.bind(var1)();
        return var0;
    };
    var1.getGuildChannelScores = var6;
    var6 = function() {
        var2 = _closure1_slot3;
        var1 = undefined;
        var0 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun71042: for (var _fun71042_ip = 0;;) switch (_fun71042_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun71042_ip = 224;
                            continue _fun71042
                        }
                    case 10:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 5;
                        var3 = var3[var1];
                        var1 = undefined;
                        var5 = var4.bind(var1)(var3);
                        var4 = var5.icymiEnabled;
                        var3 = 'recommendedGuilds';
                        var3 = var4.bind(var5)(var3);
                        if (!var3) {
                            _fun71042_ip = 221;
                            continue _fun71042
                        }
                    case 58: // try_start_0
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var3 = 2;
                        var3 = var5[var3];
                        var3 = var4.bind(var1)(var3);
                        var5 = var3.HTTP;
                        var4 = var5.get;
                        var3 = {};
                        var6 = _closure1_slot4;
                        var6 = var6.GRAVITY_RECOMMENDED_GUILDS;
                        var3.url = var6;
                        var6 = false;
                        var3.rejectWithError = var6;
                        var3 = var4.bind(var5)(var3);
                        SaveGenerator(address = 119);
                    case 117:
                        return var3;
                    case 119:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 4);
                        if (var4) {
                            _fun71042_ip = 185;
                            continue _fun71042
                        }
                    case 125:
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var4 = 3;
                        var4 = var6[var4];
                        var6 = var5.bind(var1)(var4);
                        var5 = var6.dispatch;
                        var4 = {};
                        var7 = 'LOAD_ICYMI_RECOMMENDED_GUILDS';
                        var4.type = var7;
                        var7 = var3.body;
                        var7 = var7.guilds;
                        var4.guilds = var7;
                        var4 = var5.bind(var6)(var4);
                    case 183: // try_end0
                        _fun71042_ip = 221;
                        continue _fun71042;
                    case 185:
                        return var3;
                    case 188: // catch_target0
                        CatchBlockStart(arg_register = 4);
                        var3 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var2 = 4;
                        var2 = var5[var2];
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.captureException;
                        var2 = var2.bind(var3)(var4);
                    case 221:
                        return var1;
                    case 224:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        var0 = var0.bind(var1)();
        return var0;
    };
    var1.getRecommendedGuilds = var6;
    var6 = function() {
        var2 = _closure1_slot3;
        var1 = undefined;
        var0 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun71045: for (var _fun71045_ip = 0;;) switch (_fun71045_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun71045_ip = 314;
                            continue _fun71045
                        }
                    case 10:
                        var1 = undefined;
                        var7 = undefined;
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var3 = 5;
                        var3 = var5[var3];
                        var5 = var4.bind(var1)(var3);
                        var4 = var5.icymiEnabled;
                        var3 = 'mediaForCurrentStatus';
                        var3 = var4.bind(var5)(var3);
                        if (!var3) {
                            _fun71045_ip = 311;
                            continue _fun71045
                        }
                    case 60:
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var3 = 7;
                        var3 = var5[var3];
                        var3 = var4.bind(var1)(var3);
                        var4 = var3.CustomStatusSetting;
                        var3 = var4.getSetting;
                        var3 = var3.bind(var4)();
                        var7 = var3;
                        var4 = null;
                        if (!(var4 != var3)) {
                            _fun71045_ip = 311;
                            continue _fun71045
                        }
                    case 108:
                        var3 = var7;
                        var3 = var3.createdAtMs;
                        if (!(var4 != var3)) {
                            _fun71045_ip = 311;
                            continue _fun71045
                        }
                    case 124: // try_start_0
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var3 = 2;
                        var3 = var5[var3];
                        var3 = var4.bind(var1)(var3);
                        var5 = var3.HTTP;
                        var4 = var5.get;
                        var3 = {};
                        var6 = _closure1_slot4;
                        var6 = var6.GRAVITY_ATTACHMENTS;
                        var3.url = var6;
                        var6 = false;
                        var3.rejectWithError = var6;
                        var3 = var4.bind(var5)(var3);
                        SaveGenerator(address = 185);
                    case 183:
                        return var3;
                    case 185:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 4);
                        if (var4) {
                            _fun71045_ip = 275;
                            continue _fun71045
                        }
                    case 191:
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var4 = 3;
                        var4 = var6[var4];
                        var6 = var5.bind(var1)(var4);
                        var5 = var6.dispatch;
                        var4 = {};
                        var8 = 'LOAD_ICYMI_CURRENT_STATUS_MEDIA';
                        var4.type = var8;
                        var8 = var3.body;
                        var8 = var8.attachments;
                        var4.attachments = var8;
                        var8 = global;
                        var8 = var8.Number;
                        var7 = var7.createdAtMs;
                        var7 = var8.bind(var1)(var7);
                        var4.createdAtMs = var7;
                        var4 = var5.bind(var6)(var4);
                    case 273: // try_end0
                        _fun71045_ip = 311;
                        continue _fun71045;
                    case 275:
                        return var3;
                    case 278: // catch_target0
                        CatchBlockStart(arg_register = 4);
                        var3 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var2 = 4;
                        var2 = var5[var2];
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.captureException;
                        var2 = var2.bind(var3)(var4);
                    case 311:
                        return var1;
                    case 314:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        var0 = var0.bind(var1)();
        return var0;
    };
    var1.getMediaForCurrentStatus = var6;
    var6 = function() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 3;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'RELOAD_ICYMI';
        var1.type = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.reloadICYMITab = var6;
    var6 = function arg0() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 3;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'LOAD_ICYMI_HYDRATED_ATTEMPT';
        var1.type = var4;
        var4 = arg0;
        var1.hydrationId = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.loadHydratedAttempt = var6;
    var6 = function() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 3;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'ICYMI_TAB_OPENED';
        var1.type = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.openICYMITab = var6;
    var6 = function() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 3;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'ICYMI_TAB_CLOSED';
        var1.type = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.closeICYMITab = var6;
    var6 = function arg0() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 3;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'ICYMI_ITEMS_DWELL_START';
        var1.type = var4;
        var4 = arg0;
        var1.items = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.startItemsDwell = var6;
    var6 = function arg0() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 3;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'ICYMI_ITEMS_LONG_IMPRESSION';
        var1.type = var4;
        var4 = arg0;
        var1.items = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.triggerItemsLongImpression = var6;
    var6 = function arg0, arg1() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 3;
        var1 = var1[var0];
        var0 = undefined;
        var2 = var2.bind(var0)(var1);
        var1 = var2.dispatch;
        var0 = {};
        var3 = 'ICYMI_ACK_ITEMS';
        var0.type = var3;
        var3 = arg0;
        var0.items = var3;
        var3 = arg1;
        var0.override = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.ackGravityItems = var6;
    var6 = function arg0() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 3;
        var1 = var1[var0];
        var0 = undefined;
        var2 = var2.bind(var0)(var1);
        var1 = var2.dispatch;
        var0 = {};
        var3 = 'ICYMI_SCROLL_EVENT';
        var0.type = var3;
        var3 = arg0;
        var0.timestamp = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.gravityScrollEvent = var6;
    var6 = function arg0() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 3;
        var1 = var1[var0];
        var0 = undefined;
        var2 = var2.bind(var0)(var1);
        var1 = var2.dispatch;
        var0 = {};
        var3 = 'SET_ICYMI_FILTERS';
        var0.type = var3;
        var3 = arg0;
        var0.filters = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.setFilters = var6;
    var6 = function() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 3;
        var1 = var1[var0];
        var0 = undefined;
        var2 = var2.bind(var0)(var1);
        var1 = var2.dispatch;
        var0 = {};
        var3 = 'ICYMI_FEEDBACK_GIVEN';
        var0.type = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.giveFeedback = var6;
    var6 = function() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 3;
        var1 = var1[var0];
        var0 = undefined;
        var2 = var2.bind(var0)(var1);
        var1 = var2.dispatch;
        var0 = {};
        var3 = 'CLEAR_ICYMI_READ_STATES';
        var0.type = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.clearReadStates = var6;
    var6 = function() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 3;
        var1 = var1[var0];
        var0 = undefined;
        var2 = var2.bind(var0)(var1);
        var1 = var2.dispatch;
        var0 = {};
        var3 = 'ICYMI_JOINED_RECOMMENDED_GUILD';
        var0.type = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.addedRecommendedGuild = var6;
    var6 = function arg0() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 3;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'ICYMI_SET_VIDEOS_MUTED';
        var1.type = var4;
        var4 = arg0;
        var1.muted = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.setVideosMuted = var6;
    var6 = function arg0() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 3;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'ICYMI_SET_FOCUSED_TAB';
        var1.type = var4;
        var4 = arg0;
        var1.focused = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.setTabFocused = var6;
    var6 = function arg0, arg1() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 3;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'ICYMI_SET_CARD_HEIGHT';
        var1.type = var4;
        var4 = arg0;
        var1.itemId = var4;
        var4 = arg1;
        var1.height = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.setCardHeight = var6;
    var6 = function() {
        _fun71061: for (var _fun71061_ip = 0;;) switch (_fun71061_ip) {
            case 0:
                var4 = arguments[0];
                var0 = undefined;
                if (!(var4 === var0)) {
                    _fun71061_ip = 26;
                    continue _fun71061
                }
            case 9:
                var1 = global;
                var2 = var1.Date;
                var1 = var2.now;
                var4 = var1.bind(var2)();
            case 26:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 3;
                var1 = var3[var1];
                var3 = var2.bind(var0)(var1);
                var2 = var3.dispatch;
                var1 = {};
                var5 = 'ICYMI_TAKE_SURVEY';
                var1.type = var5;
                var1.takenAt = var4;
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var1.takeSurvey = var6;
    var6 = function arg0, arg1, arg2() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 3;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'ICYMI_ITEM_INTERACTED';
        var1.type = var4;
        var4 = arg0;
        var1.itemId = var4;
        var4 = arg1;
        var1.itemType = var4;
        var4 = arg2;
        var1.actionType = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.itemInteracted = var6;
    var6 = function arg0() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 3;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'ICYMI_FEED_ITEM_ACTIONED';
        var1.type = var4;
        var5 = arg0;
        var6 = var1;
        var4 = copyDataProperties(var6, var5);
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.feedItemActioned = var6;
    var6 = function arg0() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 3;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'ICYMI_FEED_FILTER_ACTIONED';
        var1.type = var4;
        var5 = arg0;
        var6 = var1;
        var4 = copyDataProperties(var6, var5);
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.feedFilterActioned = var6;
    var3 = function arg0() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 3;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'ICYMI_FEED_PAGE_ACTIONED';
        var1.type = var4;
        var5 = arg0;
        var6 = var1;
        var4 = copyDataProperties(var6, var5);
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.feedPageActioned = var3;
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/icymi/ICYMIActionCreators.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 660, 507, 806, 1207, 8911, 8906, 1348, 2]);