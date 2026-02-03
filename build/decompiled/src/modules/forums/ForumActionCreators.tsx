// modules/forums/ForumActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() {
        var0 = undefined;
        var3 = _closure1_slot7;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot6 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0, arg1, arg2) { // Environment: var2
            var0 = function*(arg0, arg1, arg2) { // Original name: ?anon_0_, environment: var0
                _fun71231: for (var _fun71231_ip = 0;;) switch (_fun71231_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun71231_ip = 358;
                            continue _fun71231
                        }
                    case 10:
                        var8 = arg0;
                        var6 = arg1;
                        var5 = arg2;
                        var1 = undefined;
                        var2 = undefined;
                        var3 = undefined;
                        var4 = undefined;
                    case 27: // try_start_0
                        var8 = var8.bind(var1)();
                        SaveGenerator(address = 35);
                    case 33:
                        return var8;
                    case 35:
                        ResumeGenerator(result_out_reg = 8, return_bool_out_reg = 9);
                        if (var9) {
                            _fun71231_ip = 44;
                            continue _fun71231
                        }
                    case 41: // try_end0
                        return var8;
                    case 44:
                        return var8;
                    case 47: // catch_target0
                        CatchBlockStart(arg_register = 8);
                        var7 = var8;
                        var9 = var8.body;
                        var2 = var9;
                        var8 = null;
                        var9 = var8 == var9;
                        var10 = undefined;
                        if (var9) {
                            _fun71231_ip = 76;
                            continue _fun71231
                        }
                    case 71:
                        var10 = var2.code;
                    case 76:
                        var9 = _closure1_slot4;
                        var9 = var9.NON_MODERATED_TAG_REQUIRED;
                        if (!(var10 !== var9)) {
                            _fun71231_ip = 314;
                            continue _fun71231
                        }
                    case 96:
                        var9 = var7;
                        var9 = var9.body;
                        var3 = var9;
                        var10 = var8 == var9;
                        var9 = undefined;
                        if (var10) {
                            _fun71231_ip = 121;
                            continue _fun71231
                        }
                    case 116:
                        var9 = var3.code;
                    case 121:
                        var3 = _closure1_slot4;
                        var3 = var3.INVALID_FORM_BODY;
                        if (!(var9 === var3)) {
                            _fun71231_ip = 355;
                            continue _fun71231
                        }
                    case 138:
                        var7 = var7.body;
                        var4 = var7;
                        var7 = var8 != var7;
                        var3 = var7;
                        if (!var7) {
                            _fun71231_ip = 168;
                            continue _fun71231
                        }
                    case 156:
                        var4 = var4.errors;
                        var3 = var4.emoji;
                    case 168:
                        if (!var3) {
                            _fun71231_ip = 355;
                            continue _fun71231
                        }
                    case 174:
                        var4 = _closure1_slot1;
                        var12 = _closure1_slot2;
                        var3 = 2;
                        var3 = var12[var3];
                        var7 = var4.bind(var1)(var3);
                        var4 = var7.show;
                        var3 = {};
                        var11 = _closure1_slot0;
                        var8 = 3;
                        var9 = var12[var8];
                        var9 = var11.bind(var1)(var9);
                        var13 = var9.intl;
                        var10 = var13.string;
                        var9 = var12[var8];
                        var9 = var11.bind(var1)(var9);
                        var9 = var9.t;
                        var9 = var9.T8sBLJ;
                        var9 = var10.bind(var13)(var9);
                        var3.title = var9;
                        var9 = var12[var8];
                        var9 = var11.bind(var1)(var9);
                        var10 = var9.intl;
                        var9 = var10.string;
                        var8 = var12[var8];
                        var8 = var11.bind(var1)(var8);
                        var8 = var8.t;
                        var8 = var8.aHt1Bd;
                        var8 = var9.bind(var10)(var8);
                        var3.body = var8;
                        var3 = var4.bind(var7)(var3);
                        _fun71231_ip = 355;
                        continue _fun71231;
                    case 314:
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var2 = 2;
                        var2 = var4[var2];
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.show;
                        var2 = {};
                        var2.title = var6;
                        var2.body = var5;
                        var2 = var3.bind(var4)(var2);
                    case 355:
                        return var1;
                    case 358:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot7 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot7 = var0;
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
    var6 = var1.AbortCodes;
    var _closure1_slot4 = var6;
    var1 = var1.Endpoints;
    var _closure1_slot5 = var1;
    var1 = {};
    var6 = function arg0() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 4;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'RESORT_THREADS';
        var1.type = var4;
        var4 = arg0;
        var1.channelId = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.resort = var6;
    var6 = function arg0, arg1() {
        _fun71233: for (var _fun71233_ip = 0;;) switch (_fun71233_ip) {
            case 0:
                var4 = arg0;
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 5;
                var0 = var2[var0];
                var5 = undefined;
                var0 = var1.bind(var5)(var0);
                var2 = var0.HTTP;
                var1 = var2.post;
                var0 = {};
                var7 = _closure1_slot5;
                var6 = var7.FORUM_TAGS;
                var3 = arg1;
                var3 = var6.bind(var7)(var3);
                var0.url = var3;
                var3 = {};
                var6 = var4.name;
                var3.name = var6;
                var6 = var4.emojiId;
                var3.emoji_id = var6;
                var7 = var4.emojiId;
                var6 = null;
                var6 = var6 != var7;
                if (var6) {
                    _fun71233_ip = 106;
                    continue _fun71233
                }
            case 100:
                var5 = var4.emojiName;
            case 106:
                var3.emoji_name = var5;
                var4 = var4.moderated;
                var3.moderated = var4;
                var0.body = var3;
                var3 = false;
                var0.rejectWithError = var3;
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var1.createForumTag = var6;
    var6 = function arg0, arg1() {
        _fun71234: for (var _fun71234_ip = 0;;) switch (_fun71234_ip) {
            case 0:
                var7 = arg0;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 5;
                var3 = var3[var0];
                var0 = undefined;
                var3 = var4.bind(var0)(var3);
                var5 = var3.HTTP;
                var4 = var5.put;
                var3 = {};
                var10 = _closure1_slot5;
                var9 = var10.FORUM_TAG;
                var8 = var7.id;
                var6 = arg1;
                var6 = var9.bind(var10)(var6, var8);
                var3.url = var6;
                var6 = {};
                var8 = var7.name;
                var6.name = var8;
                var8 = var7.emojiId;
                var6.emoji_id = var8;
                var9 = var7.emojiId;
                var8 = null;
                var9 = var8 == var9;
                var8 = undefined;
                if (!var9) {
                    _fun71234_ip = 116;
                    continue _fun71234
                }
            case 110:
                var8 = var7.emojiName;
            case 116:
                var6.emoji_name = var8;
                var7 = var7.moderated;
                var6.moderated = var7;
                var3.body = var6;
                var6 = false;
                var3.rejectWithError = var6;
                var3 = var4.bind(var5)(var3);
                var _closure2_slot0 = var3;
                var4 = _closure1_slot6;
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 3;
                var3 = var8[var2];
                var3 = var7.bind(var0)(var3);
                var6 = var3.intl;
                var5 = var6.string;
                var3 = var8[var2];
                var3 = var7.bind(var0)(var3);
                var3 = var3.t;
                var3 = var3.T8sBLJ;
                var3 = var5.bind(var6)(var3);
                var5 = var8[var2];
                var5 = var7.bind(var0)(var5);
                var6 = var5.intl;
                var5 = var6.string;
                var2 = var8[var2];
                var2 = var7.bind(var0)(var2);
                var2 = var2.t;
                var2 = var2.imcb5u;
                var2 = var5.bind(var6)(var2);
                var1 = function() { // Environment: var1
                    var0 = _closure2_slot0;
                    return var0;
                };
                var1 = var4.bind(var0)(var1, var3, var2);
                return var0;
        }
    };
    var1.updateForumTag = var6;
    var6 = function arg0, arg1() {
        var7 = _closure1_slot0;
        var8 = _closure1_slot2;
        var0 = 5;
        var3 = var8[var0];
        var0 = undefined;
        var3 = var7.bind(var0)(var3);
        var5 = var3.HTTP;
        var4 = var5.del;
        var3 = {};
        var11 = _closure1_slot5;
        var10 = var11.FORUM_TAG;
        var9 = arg0;
        var6 = arg1;
        var6 = var10.bind(var11)(var9, var6);
        var3.url = var6;
        var6 = false;
        var3.rejectWithError = var6;
        var3 = var4.bind(var5)(var3);
        var _closure2_slot0 = var3;
        var4 = _closure1_slot6;
        var2 = 3;
        var3 = var8[var2];
        var3 = var7.bind(var0)(var3);
        var6 = var3.intl;
        var5 = var6.string;
        var3 = var8[var2];
        var3 = var7.bind(var0)(var3);
        var3 = var3.t;
        var3 = var3["0ZkNDU"];
        var3 = var5.bind(var6)(var3);
        var5 = var8[var2];
        var5 = var7.bind(var0)(var5);
        var6 = var5.intl;
        var5 = var6.string;
        var2 = var8[var2];
        var2 = var7.bind(var0)(var2);
        var2 = var2.t;
        var2 = var2.imcb5u;
        var2 = var5.bind(var6)(var2);
        var1 = function() { // Environment: var1
            var0 = _closure2_slot0;
            return var0;
        };
        var1 = var4.bind(var0)(var1, var3, var2);
        return var0;
    };
    var1.deleteForumTag = var6;
    var6 = function arg0, arg1() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = arg1;
        var _closure2_slot1 = var1;
        var2 = _closure1_slot3;
        var1 = undefined;
        var0 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun71240: for (var _fun71240_ip = 0;;) switch (_fun71240_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun71240_ip = 151;
                            continue _fun71240
                        }
                    case 10:
                        var2 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 6;
                        var1 = var3[var1];
                        var4 = undefined;
                        var3 = var2.bind(var4)(var1);
                        var2 = var3.unarchiveThreadIfNecessary;
                        var1 = _closure2_slot0;
                        var1 = var2.bind(var3)(var1);
                        SaveGenerator(address = 57);
                    case 55:
                        return var1;
                    case 57:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun71240_ip = 148;
                            continue _fun71240
                        }
                    case 63:
                        var3 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var2 = 5;
                        var2 = var7[var2];
                        var2 = var3.bind(var4)(var2);
                        var4 = var2.HTTP;
                        var3 = var4.patch;
                        var2 = {};
                        var8 = _closure1_slot5;
                        var7 = var8.CHANNEL;
                        var5 = _closure2_slot0;
                        var5 = var7.bind(var8)(var5);
                        var2.url = var5;
                        var5 = {};
                        var6 = _closure2_slot1;
                        var5.applied_tags = var6;
                        var2.body = var5;
                        var5 = false;
                        var2.rejectWithError = var5;
                        var2 = var3.bind(var4)(var2);
                        return var2;
                    case 148:
                        return var1;
                    case 151:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        var0 = var0.bind(var1)();
        return var0;
    };
    var1.updateForumPostTags = var6;
    var6 = function arg0, arg1() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 4;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'ADMIN_ONBOARDING_GUIDE_HIDE';
        var1.type = var4;
        var4 = arg0;
        var1.channelId = var4;
        var4 = arg1;
        var1.hide = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.hideAdminOnboarding = var6;
    var6 = function arg0, arg1, arg2() {
        var2 = _closure1_slot0;
        var3 = _closure1_slot2;
        var0 = 7;
        var1 = var3[var0];
        var0 = undefined;
        var5 = var2.bind(var0)(var1);
        var4 = var5.markAnalyticsFeedItemSeen;
        var1 = 8;
        var1 = var3[var1];
        var3 = var2.bind(var0)(var1);
        var2 = var3.getForumPostSeenManagerId;
        var1 = arg0;
        var3 = var2.bind(var3)(var1);
        var2 = arg1;
        var1 = arg2;
        var1 = var4.bind(var5)(var3, var2, var1);
        return var0;
    };
    var1.markPostAsSeen = var6;
    var6 = function arg0, arg1, arg2() {
        var2 = _closure1_slot0;
        var3 = _closure1_slot2;
        var0 = 7;
        var1 = var3[var0];
        var0 = undefined;
        var5 = var2.bind(var0)(var1);
        var4 = var5.markAnalyticsFeedItemUnseen;
        var1 = 8;
        var1 = var3[var1];
        var3 = var2.bind(var0)(var1);
        var2 = var3.getForumPostSeenManagerId;
        var1 = arg0;
        var3 = var2.bind(var3)(var1);
        var2 = arg1;
        var1 = arg2;
        var1 = var4.bind(var5)(var3, var2, var1);
        return var0;
    };
    var1.markPostAsUnseen = var6;
    var6 = function arg0() {
        _fun71244: for (var _fun71244_ip = 0;;) switch (_fun71244_ip) {
            case 0:
                var4 = arguments[1];
                var0 = undefined;
                if (!(var4 === var0)) {
                    _fun71244_ip = 44;
                    continue _fun71244
                }
            case 9:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 9;
                var1 = var3[var1];
                var1 = var2.bind(var0)(var1);
                var1 = var1.ForceFlushType;
                var4 = var1.IMMEDIATE_WITH_COOLDOWN;
            case 44:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 7;
                var1 = var6[var1];
                var3 = var5.bind(var0)(var1);
                var2 = var3.flushAnalyticsFeedItems;
                var1 = 8;
                var1 = var6[var1];
                var6 = var5.bind(var0)(var1);
                var5 = var6.getForumPostSeenManagerId;
                var1 = arg0;
                var1 = var5.bind(var6)(var1);
                var1 = var2.bind(var3)(var1, var4);
                return var0;
        }
    };
    var1.flushSeenItems = var6;
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
                _fun71247: for (var _fun71247_ip = 0;;) switch (_fun71247_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun71247_ip = 291;
                            continue _fun71247
                        }
                    case 10:
                        var5 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var4 = 4;
                        var3 = var1[var4];
                        var1 = undefined;
                        var7 = var5.bind(var1)(var3);
                        var6 = var7.dispatch;
                        var3 = {};
                        var5 = 'FORUM_SEARCH_START';
                        var3.type = var5;
                        var8 = _closure2_slot1;
                        var3.channelId = var8;
                        var3 = var6.bind(var7)(var3);
                    case 68: // try_start_0
                        var6 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var3 = 6;
                        var3 = var7[var3];
                        var11 = var6.bind(var1)(var3);
                        var10 = var11.searchThreads;
                        var16 = _closure2_slot0;
                        var15 = _closure2_slot1;
                        var14 = _closure2_slot2;
                        var13 = _closure2_slot3;
                        var12 = _closure2_slot4;
                        var17 = var11;
                        var3 = var17[var10](var16, var15, var14, var13, var12, var11);
                        SaveGenerator(address = 125);
                    case 123:
                        return var3;
                    case 125:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 6);
                        if (var6) {
                            _fun71247_ip = 236;
                            continue _fun71247
                        }
                    case 131:
                        var8 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var7 = 10;
                        var7 = var6[var7];
                        var10 = var8.bind(var1)(var7);
                        var8 = var10.trackForumSearched;
                        var7 = {};
                        var9 = _closure2_slot0;
                        var7.guildId = var9;
                        var9 = _closure2_slot1;
                        var7.channelId = var9;
                        var11 = var3.length;
                        var7.numSearchResults = var11;
                        var7 = var8.bind(var10)(var7);
                        var7 = _closure1_slot1;
                        var6 = var6[var4];
                        var8 = var7.bind(var1)(var6);
                        var7 = var8.dispatch;
                        var6 = {};
                        var10 = 'FORUM_SEARCH_SUCCESS';
                        var6.type = var10;
                        var6.channelId = var9;
                        var6.threadIds = var3;
                        var6 = var7.bind(var8)(var6);
                    case 234: // try_end0
                        _fun71247_ip = 288;
                        continue _fun71247;
                    case 236:
                        return var3;
                    case 239: // catch_target0
                        CatchBlockStart(arg_register = 3);
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var2 = var2[var4];
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var6 = 'FORUM_SEARCH_FAILURE';
                        var2.type = var6;
                        var5 = _closure2_slot1;
                        var2.channelId = var5;
                        var2 = var3.bind(var4)(var2);
                    case 288:
                        return var1;
                    case 291:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        var0 = var0.bind(var1)();
        return var0;
    };
    var1.searchForumPosts = var6;
    var6 = function arg0, arg1() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 4;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'FORUM_SEARCH_QUERY_UPDATED';
        var1.type = var4;
        var4 = arg0;
        var1.channelId = var4;
        var4 = arg1;
        var1.query = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.updateForumSearchQuery = var6;
    var3 = function arg0() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 4;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'FORUM_SEARCH_CLEAR';
        var1.type = var4;
        var4 = arg0;
        var1.channelId = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.clearForumSearch = var3;
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/forums/ForumActionCreators.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 660, 3994, 1234, 806, 507, 6462, 8900, 8901, 8902, 6464, 2]);