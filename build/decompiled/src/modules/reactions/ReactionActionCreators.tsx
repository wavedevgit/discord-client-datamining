// modules/reactions/ReactionActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var10 = require;
    var9 = metroImportDefault;
    var2 = exports;
    var11 = dependencyMap;
    var _closure1_slot0 = var10;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var11;
    var0 = function(arg0, arg1, arg2) { // Original name: checkReactionResponse, environment: var6
        _fun54302: for (var _fun54302_ip = 0;;) switch (_fun54302_ip) {
            case 0:
                var2 = arg0;
                var3 = arg1;
                var0 = arg2;
                var1 = var2.headers;
                var5 = var2.status;
                var2 = var2.body;
                var4 = 429;
                if (!(var4 !== var5)) {
                    _fun54302_ip = 378;
                    continue _fun54302
                }
            case 38:
                var4 = 403;
                if (!(var4 !== var5)) {
                    _fun54302_ip = 70;
                    continue _fun54302
                }
            case 48:
                var4 = var0.isRetry;
                if (var4) {
                    _fun54302_ip = 374;
                    continue _fun54302
                }
            case 60:
                var4 = undefined;
                var4 = var3.bind(var4)();
                var4 = false;
                return var4;
            case 70:
                var4 = var2;
                if (!var4) {
                    _fun54302_ip = 81;
                    continue _fun54302
                }
            case 76:
                var4 = var2.code;
            case 81:
                var2 = _closure1_slot7;
                var2 = var2.TOO_MANY_REACTIONS;
                if (!(var2 !== var4)) {
                    _fun54302_ip = 183;
                    continue _fun54302
                }
            case 98:
                var2 = _closure1_slot7;
                var2 = var2.REACTION_BLOCKED;
                if (!(var2 === var4)) {
                    _fun54302_ip = 374;
                    continue _fun54302
                }
            case 115:
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 8;
                var4 = var4[var2];
                var2 = undefined;
                var2 = var5.bind(var2)(var4);
                var7 = var2.ComponentDispatch;
                var5 = var7.dispatch;
                var2 = _closure1_slot9;
                var4 = var2.SHAKE_APP;
                var2 = {
                    'duration': 200,
                    'intensity': 2
                };
                var2 = var5.bind(var7)(var4, var2);
                _fun54302_ip = 374;
                continue _fun54302;
            case 183:
                var4 = _closure1_slot1;
                var11 = _closure1_slot2;
                var2 = 6;
                var2 = var11[var2];
                var10 = undefined;
                var5 = var4.bind(var10)(var2);
                var4 = var5.show;
                var2 = {};
                var9 = _closure1_slot0;
                var6 = 7;
                var7 = var11[var6];
                var7 = var9.bind(var10)(var7);
                var12 = var7.intl;
                var8 = var12.string;
                var7 = var11[var6];
                var7 = var9.bind(var10)(var7);
                var7 = var7.t;
                var7 = var7.lFddsR;
                var7 = var8.bind(var12)(var7);
                var2.title = var7;
                var7 = var11[var6];
                var7 = var9.bind(var10)(var7);
                var12 = var7.intl;
                var8 = var12.string;
                var7 = var11[var6];
                var7 = var9.bind(var10)(var7);
                var7 = var7.t;
                var7 = var7.h27eIm;
                var7 = var8.bind(var12)(var7);
                var2.body = var7;
                var7 = var11[var6];
                var7 = var9.bind(var10)(var7);
                var8 = var7.intl;
                var7 = var8.string;
                var6 = var11[var6];
                var6 = var9.bind(var10)(var6);
                var6 = var6.t;
                var6 = var6.BddRzS;
                var6 = var7.bind(var8)(var6);
                var2.confirmText = var6;
                var2 = var4.bind(var5)(var2);
            case 374:
                var2 = true;
                return var2;
            case 378:
                var0 = var0.isRetry;
                if (var0) {
                    _fun54302_ip = 477;
                    continue _fun54302
                }
            case 387:
                var0 = global;
                var4 = var0.parseInt;
                var1 = var1["retry-after"];
                var2 = undefined;
                var4 = var4.bind(var2)(var1);
                var1 = var0.isNaN;
                var1 = var1.bind(var2)(var4);
                if (var1) {
                    _fun54302_ip = 473;
                    continue _fun54302
                }
            case 422:
                var1 = var0.setTimeout;
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var0 = 5;
                var0 = var6[var0];
                var0 = var5.bind(var2)(var0);
                var0 = var0.Millis;
                var0 = var0.SECOND;
                var0 = var4 * var0;
                var0 = var1.bind(var2)(var3, var0);
            case 473:
                var0 = false;
                return var0;
            case 477:
                var0 = true;
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var0 = function(arg0, arg1, arg2, arg3, arg4) { // Original name: optimisticDispatch, environment: var6
        _fun54303: for (var _fun54303_ip = 0;;) switch (_fun54303_ip) {
            case 0:
                var4 = arg4;
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 9;
                var1 = var1[var0];
                var0 = undefined;
                var3 = var2.bind(var0)(var1);
                var2 = var3.dispatch;
                var1 = {};
                var6 = arg0;
                var1.type = var6;
                var6 = arg1;
                var1.channelId = var6;
                var6 = arg2;
                var1.messageId = var6;
                var6 = null;
                var8 = var6 == var4;
                var7 = undefined;
                if (var8) {
                    _fun54303_ip = 72;
                    continue _fun54303
                }
            case 67:
                var7 = var4.userId;
            case 72:
                if (!(var6 == var7)) {
                    _fun54303_ip = 90;
                    continue _fun54303
                }
            case 76:
                var9 = _closure1_slot4;
                var8 = var9.getId;
                var7 = var8.bind(var9)();
            case 90:
                var1.userId = var7;
                var7 = arg3;
                var1.emoji = var7;
                var7 = true;
                var1.optimistic = var7;
                var8 = var6 == var4;
                var7 = undefined;
                if (var8) {
                    _fun54303_ip = 123;
                    continue _fun54303
                }
            case 118:
                var7 = var4.colors;
            case 123:
                if (!(var6 == var7)) {
                    _fun54303_ip = 131;
                    continue _fun54303
                }
            case 127:
                var7 = new Array(0);
            case 131:
                var1.colors = var7;
                if (!(var6 != var4)) {
                    _fun54303_ip = 148;
                    continue _fun54303
                }
            case 139:
                var4 = var4.burst;
                if (var4) {
                    _fun54303_ip = 182;
                    continue _fun54303
                }
            case 148:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var4 = 10;
                var4 = var7[var4];
                var4 = var6.bind(var0)(var4);
                var4 = var4.ReactionTypes;
                var4 = var4.NORMAL;
                _fun54303_ip = 214;
                continue _fun54303;
            case 182:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var5 = 10;
                var5 = var7[var5];
                var5 = var6.bind(var0)(var5);
                var5 = var5.ReactionTypes;
                var4 = var5.BURST;
            case 214:
                var1.reactionType = var4;
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var _closure1_slot13 = var0;
    var0 = function(arg0) { // Original name: makeURL, environment: var6
        _fun54304: for (var _fun54304_ip = 0;;) switch (_fun54304_ip) {
            case 0:
                var1 = arg0;
                var5 = var1.channelId;
                var4 = var1.messageId;
                var2 = var1.emoji;
                var7 = var1.userId;
                var0 = var1.useTypeEndpoint;
                var8 = undefined;
                if (!(var0 === var8)) {
                    _fun54304_ip = 38;
                    continue _fun54304
                }
            case 36:
                var0 = false;
            case 38:
                var6 = var1.type;
                if (!(var6 === var8)) {
                    _fun54304_ip = 82;
                    continue _fun54304
                }
            case 47:
                var3 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 10;
                var1 = var9[var1];
                var1 = var3.bind(var8)(var1);
                var1 = var1.ReactionTypes;
                var6 = var1.NORMAL;
            case 82:
                var3 = var2.id;
                var1 = null;
                if (!(var1 == var3)) {
                    _fun54304_ip = 100;
                    continue _fun54304
                }
            case 93:
                var3 = var2.name;
                _fun54304_ip = 138;
                continue _fun54304;
            case 100:
                var11 = var2.name;
                var10 = var2.id;
                var2 = global;
                var2 = var2.HermesInternal;
                var9 = var2.concat;
                var8 = '';
                var2 = ':';
                var3 = var9.bind(var8)(var11, var2, var10);
            case 138:
                if (!(var1 != var7)) {
                    _fun54304_ip = 209;
                    continue _fun54304
                }
            case 142:
                var2 = _closure1_slot10;
                if (var0) {
                    _fun54304_ip = 179;
                    continue _fun54304
                }
            case 152:
                var0 = var2.REACTION;
                var17 = var2;
                var16 = var5;
                var15 = var4;
                var14 = var3;
                var13 = var7;
                var0 = var17[var0](var16, var15, var14, var13, var12);
                _fun54304_ip = 207;
                continue _fun54304;
            case 179:
                var1 = var2.REACTION_WITH_TYPE;
                var17 = var2;
                var16 = var5;
                var15 = var4;
                var14 = var3;
                var13 = var7;
                var12 = var6;
                var0 = var17[var1](var16, var15, var14, var13, var12, var11);
            case 207:
                _fun54304_ip = 229;
                continue _fun54304;
            case 209:
                var2 = _closure1_slot10;
                var1 = var2.REACTIONS;
                var0 = var1.bind(var2)(var5, var4, var3);
            case 229:
                return var0;
        }
    };
    var _closure1_slot14 = var0;
    var0 = function() { // Original name: _getReactors, environment: var6
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun54307: for (var _fun54307_ip = 0;;) switch (_fun54307_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun54307_ip = 367;
                            continue _fun54307
                        }
                    case 13:
                        var10 = var1.channelId;
                        var9 = var1.messageId;
                        var8 = var1.emoji;
                        var14 = var1.limit;
                        var13 = var1.after;
                        var7 = var1.type;
                        var6 = undefined;
                        SaveGenerator(address = 51);
                    case 49:
                        return var6;
                    case 51:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun54307_ip = 364;
                            continue _fun54307
                        }
                    case 60:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var11 = 10;
                        var2 = var2[var11];
                        var2 = var3.bind(var6)(var2);
                        var2 = var2.ReactionTypes;
                        var2 = var2.VOTE;
                        if (!(var7 !== var2)) {
                            _fun54307_ip = 125;
                            continue _fun54307
                        }
                    case 99:
                        var3 = _closure1_slot14;
                        var2 = {};
                        var2.channelId = var10;
                        var2.messageId = var9;
                        var2.emoji = var8;
                        var12 = var3.bind(var6)(var2);
                        _fun54307_ip = 158;
                        continue _fun54307;
                    case 125:
                        var5 = var8.id;
                        var2 = null;
                        if (!(var2 == var5)) {
                            _fun54307_ip = 141;
                            continue _fun54307
                        }
                    case 136:
                        var5 = var8.name;
                    case 141:
                        var3 = _closure1_slot10;
                        var2 = var3.POLL_ANSWER_VOTERS;
                        var12 = var2.bind(var3)(var10, var9, var5);
                    case 158:
                        var3 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var2 = 11;
                        var2 = var5[var2];
                        var2 = var3.bind(var6)(var2);
                        var5 = var2.HTTP;
                        var3 = var5.get;
                        var2 = {};
                        var2.url = var12;
                        var12 = {};
                        var12.limit = var14;
                        var12.after = var13;
                        var12.type = var7;
                        var2.query = var12;
                        var12 = true;
                        var2.oldFormErrors = var12;
                        var12 = false;
                        var2.rejectWithError = var12;
                        var2 = var3.bind(var5)(var2);
                        SaveGenerator(address = 236);
                    case 234:
                        return var2;
                    case 236:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                        if (var3) {
                            _fun54307_ip = 361;
                            continue _fun54307
                        }
                    case 242:
                        var5 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var3 = var3[var11];
                        var3 = var5.bind(var6)(var3);
                        var3 = var3.ReactionTypes;
                        var3 = var3.VOTE;
                        if (!(var7 !== var3)) {
                            _fun54307_ip = 282;
                            continue _fun54307
                        }
                    case 275:
                        var3 = var2.body;
                        _fun54307_ip = 293;
                        continue _fun54307;
                    case 282:
                        var5 = var2.body;
                        var3 = var5.users;
                    case 293:
                        var5 = _closure1_slot1;
                        var11 = _closure1_slot2;
                        var4 = 9;
                        var4 = var11[var4];
                        var6 = var5.bind(var6)(var4);
                        var5 = var6.dispatch;
                        var4 = {};
                        var11 = 'MESSAGE_REACTION_ADD_USERS';
                        var4.type = var11;
                        var4.channelId = var10;
                        var4.messageId = var9;
                        var4.users = var3;
                        var4.emoji = var8;
                        var4.reactionType = var7;
                        var4 = var5.bind(var6)(var4);
                        return var3;
                    case 361:
                        return var2;
                    case 364:
                        return var1;
                    case 367:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
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
    var7 = function() { // Original name: addReaction, environment: var6
        var0 = undefined;
        var3 = _closure1_slot17;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot16 = var7;
    var0 = function() { // Original name: _addReaction, environment: var6
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0, arg1, arg2) { // Environment: var2
            var0 = function*(arg0, arg1, arg2) { // Original name: ?anon_0_, environment: var0
                _fun54311: for (var _fun54311_ip = 0;;) switch (_fun54311_ip) {
                    case 0:
                        StartGenerator();
                        var16 = arg0;
                        var15 = arg1;
                        var14 = arg2;
                        var11 = arguments[3];
                        var3 = arguments[4];
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun54311_ip = 657;
                            continue _fun54311
                        }
                    case 27:
                        var _closure4_slot0 = var16;
                        var _closure4_slot1 = var15;
                        var _closure4_slot2 = var14;
                        var12 = undefined;
                        if (!(var11 === var12)) {
                            _fun54311_ip = 58;
                            continue _fun54311
                        }
                    case 45:
                        var1 = _closure1_slot11;
                        var11 = var1.MESSAGE;
                    case 58:
                        var _closure4_slot3 = var11;
                        var _closure4_slot4 = var12;
                        var _closure4_slot5 = var12;
                        SaveGenerator(address = 74);
                    case 72:
                        return var12;
                    case 74:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun54311_ip = 654;
                            continue _fun54311
                        }
                    case 83:
                        var2 = null;
                        var9 = var2 != var3;
                        if (!var9) {
                            _fun54311_ip = 104;
                            continue _fun54311
                        }
                    case 92:
                        var5 = var3.burst;
                        var5 = !var5;
                        var9 = !var5;
                    case 104:
                        _closure4_slot4 = var9;
                        var2 = var2 != var3;
                        if (!var2) {
                            _fun54311_ip = 127;
                            continue _fun54311
                        }
                    case 115:
                        var3 = var3.isRetry;
                        var3 = !var3;
                        var2 = !var3;
                    case 127:
                        _closure4_slot5 = var2;
                        if (var2) {
                            _fun54311_ip = 360;
                            continue _fun54311
                        }
                    case 137:
                        var2 = _closure1_slot26;
                        var23 = undefined;
                        var22 = var16;
                        var21 = var15;
                        var20 = var14;
                        var19 = var9;
                        var2 = var23[var2](var22, var21, var20, var19, var18);
                        if (!var2) {
                            _fun54311_ip = 360;
                            continue _fun54311
                        }
                    case 168:
                        var3 = _closure1_slot1;
                        var13 = _closure1_slot2;
                        var2 = 6;
                        var2 = var13[var2];
                        var5 = var3.bind(var12)(var2);
                        var3 = var5.show;
                        var2 = {};
                        var10 = _closure1_slot0;
                        var6 = 7;
                        var7 = var13[var6];
                        var7 = var10.bind(var12)(var7);
                        var17 = var7.intl;
                        var8 = var17.string;
                        var7 = var13[var6];
                        var7 = var10.bind(var12)(var7);
                        var7 = var7.t;
                        var7 = var7["uaUU/g"];
                        var7 = var8.bind(var17)(var7);
                        var2.title = var7;
                        var7 = var13[var6];
                        var7 = var10.bind(var12)(var7);
                        var17 = var7.intl;
                        var8 = var17.string;
                        var7 = var13[var6];
                        var7 = var10.bind(var12)(var7);
                        var7 = var7.t;
                        var7 = var7.psMorl;
                        var7 = var8.bind(var17)(var7);
                        var2.body = var7;
                        var7 = var13[var6];
                        var7 = var10.bind(var12)(var7);
                        var8 = var7.intl;
                        var7 = var8.string;
                        var6 = var13[var6];
                        var6 = var10.bind(var12)(var6);
                        var6 = var6.t;
                        var6 = var6["NX+WJN"];
                        var6 = var7.bind(var8)(var6);
                        var2.confirmText = var6;
                        var2 = var3.bind(var5)(var2);
                        return var12;
                    case 360:
                        var2 = _closure1_slot24;
                        var2 = var2.bind(var12)(var14, var9);
                        SaveGenerator(address = 377);
                    case 375:
                        return var2;
                    case 377:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                        if (var3) {
                            _fun54311_ip = 651;
                            continue _fun54311
                        }
                    case 386:
                        var6 = _closure1_slot13;
                        var5 = {};
                        var5.burst = var9;
                        var5.colors = var2;
                        var22 = 'MESSAGE_REACTION_ADD';
                        var23 = undefined;
                        var21 = var16;
                        var20 = var15;
                        var19 = var14;
                        var18 = var5;
                        var3 = var23[var6](var22, var21, var20, var19, var18, var17);
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var3 = 12;
                        var3 = var6[var3];
                        var5 = var5.bind(var12)(var3);
                        var3 = var5.unarchiveThreadIfNecessary;
                        var3 = var3.bind(var5)(var16);
                        SaveGenerator(address = 458);
                    case 456:
                        return var3;
                    case 458:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 5);
                        if (var5) {
                            _fun54311_ip = 648;
                            continue _fun54311
                        }
                    case 467:
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var5 = 11;
                        var5 = var7[var5];
                        var5 = var6.bind(var12)(var5);
                        var7 = var5.HTTP;
                        var6 = var7.put;
                        var5 = {};
                        var13 = _closure1_slot14;
                        var8 = {};
                        var8.channelId = var16;
                        var8.messageId = var15;
                        var8.emoji = var14;
                        var14 = '@me';
                        var8.userId = var14;
                        var8 = var13.bind(var12)(var8);
                        var5.url = var8;
                        var8 = {};
                        var8.location = var11;
                        var11 = _closure1_slot0;
                        var13 = _closure1_slot2;
                        var10 = 10;
                        var10 = var13[var10];
                        var10 = var11.bind(var12)(var10);
                        var10 = var10.ReactionTypes;
                        if (var9) {
                            _fun54311_ip = 581;
                            continue _fun54311
                        }
                    case 573:
                        var9 = var10.NORMAL;
                        _fun54311_ip = 587;
                        continue _fun54311;
                    case 581:
                        var9 = var10.BURST;
                    case 587:
                        var8.type = var9;
                        var5.query = var8;
                        var8 = true;
                        var5.oldFormErrors = var8;
                        var8 = false;
                        var5.rejectWithError = var8;
                        var7 = var6.bind(var7)(var5);
                        var6 = var7.then;
                        var5 = function() { // Environment: var4
                            _fun54312: for (var _fun54312_ip = 0;;) switch (_fun54312_ip) {
                                case 0:
                                    var1 = _closure4_slot3;
                                    var0 = 'Message Shortcut';
                                    if (!(var0 === var1)) {
                                        _fun54312_ip = 241;
                                        continue _fun54312
                                    }
                                case 20:
                                    var1 = _closure1_slot5;
                                    var0 = var1.getChannel;
                                    var6 = _closure4_slot0;
                                    var7 = var0.bind(var1)(var6);
                                    var1 = _closure1_slot1;
                                    var2 = _closure1_slot2;
                                    var0 = 13;
                                    var0 = var2[var0];
                                    var8 = undefined;
                                    var3 = var1.bind(var8)(var0);
                                    var2 = var3.track;
                                    var0 = _closure1_slot8;
                                    var1 = var0.MESSAGE_SHORTCUT_ACTION_SENT;
                                    var0 = {};
                                    var0.channel_id = var6;
                                    var6 = null;
                                    var10 = var6 == var7;
                                    var9 = undefined;
                                    if (var10) {
                                        _fun54312_ip = 100;
                                        continue _fun54312
                                    }
                                case 95:
                                    var9 = var7.guild_id;
                                case 100:
                                    var0.guild_id = var9;
                                    var9 = _closure4_slot1;
                                    var0.original_message_id = var9;
                                    var9 = _closure4_slot2;
                                    var9 = var9.id;
                                    if (!(var6 == var9)) {
                                        _fun54312_ip = 135;
                                        continue _fun54312
                                    }
                                case 126:
                                    var10 = _closure4_slot2;
                                    var9 = var10.name;
                                case 135:
                                    var0.emoji_id = var9;
                                    var9 = 'react';
                                    var0.action = var9;
                                    var11 = _closure1_slot0;
                                    var10 = _closure1_slot2;
                                    var9 = 14;
                                    var10 = var10[var9];
                                    var11 = var11.bind(var8)(var10);
                                    var10 = var11.collectGuildAnalyticsMetadata;
                                    var12 = var6 == var7;
                                    var6 = undefined;
                                    if (var12) {
                                        _fun54312_ip = 188;
                                        continue _fun54312
                                    }
                                case 183:
                                    var6 = var7.guild_id;
                                case 188:
                                    var13 = var10.bind(var11)(var6);
                                    var14 = var0;
                                    var6 = copyDataProperties(var14, var13);
                                    var6 = _closure1_slot0;
                                    var5 = _closure1_slot2;
                                    var5 = var5[var9];
                                    var6 = var6.bind(var8)(var5);
                                    var5 = var6.collectChannelAnalyticsMetadata;
                                    var13 = var5.bind(var6)(var7);
                                    var14 = var0;
                                    var5 = copyDataProperties(var14, var13);
                                    var0 = var2.bind(var3)(var1, var0);
                                case 241:
                                    var5 = _closure4_slot4;
                                    var8 = _closure1_slot0;
                                    var3 = _closure1_slot2;
                                    var0 = 15;
                                    var2 = var3[var0];
                                    var0 = undefined;
                                    var2 = var8.bind(var0)(var2);
                                    var7 = var2.AccessibilityAnnouncer;
                                    var6 = var7.announce;
                                    var2 = 7;
                                    var9 = var3[var2];
                                    var9 = var8.bind(var0)(var9);
                                    var10 = var9.intl;
                                    var9 = var10.formatToPlainString;
                                    var2 = var3[var2];
                                    var2 = var8.bind(var0)(var2);
                                    var2 = var2.t;
                                    if (var5) {
                                        _fun54312_ip = 357;
                                        continue _fun54312
                                    }
                                case 321:
                                    var8 = var2.ol4acF;
                                    var5 = {};
                                    var11 = _closure4_slot2;
                                    var11 = var11.name;
                                    var5.name = var11;
                                    var5 = var9.bind(var10)(var8, var5);
                                    var5 = var6.bind(var7)(var5);
                                    _fun54312_ip = 464;
                                    continue _fun54312;
                                case 357:
                                    var8 = var2["RJlG+R"];
                                    var2 = {};
                                    var5 = _closure4_slot2;
                                    var11 = var5.name;
                                    var2.name = var11;
                                    var2 = var9.bind(var10)(var8, var2);
                                    var2 = var6.bind(var7)(var2);
                                    var2 = _closure1_slot1;
                                    var1 = 16;
                                    var1 = var3[var1];
                                    var3 = var2.bind(var0)(var1);
                                    var2 = var3.triggerFullscreenAnimation;
                                    var1 = {};
                                    var6 = _closure4_slot0;
                                    var1.channelId = var6;
                                    var4 = _closure4_slot1;
                                    var1.messageId = var4;
                                    var4 = {};
                                    var14 = var4;
                                    var13 = var5;
                                    var5 = copyDataProperties(var14, var13);
                                    var6 = false;
                                    var5 = 'animated';
                                    var4[var5] = var6;
                                    var1.emoji = var4;
                                    var1 = var2.bind(var3)(var1);
                                case 464:
                                    return var0;
                            }
                        };
                        var6 = var6.bind(var7)(var5);
                        var5 = var6.catch;
                        var4 = function(arg0) { // Environment: var4
                            _fun54313: for (var _fun54313_ip = 0;;) switch (_fun54313_ip) {
                                case 0:
                                    var5 = _closure1_slot12;
                                    var4 = {};
                                    var0 = _closure4_slot5;
                                    var4.isRetry = var0;
                                    var0 = undefined;
                                    var3 = arg0;
                                    var2 = function() { // Environment: var2
                                        var6 = _closure1_slot16;
                                        var11 = _closure4_slot0;
                                        var10 = _closure4_slot1;
                                        var9 = _closure4_slot2;
                                        var8 = _closure4_slot3;
                                        var1 = {};
                                        var0 = _closure4_slot4;
                                        var1.burst = var0;
                                        var0 = true;
                                        var1.isRetry = var0;
                                        var12 = undefined;
                                        var7 = var1;
                                        var0 = var12[var6](var11, var10, var9, var8, var7, var6);
                                        return var0;
                                    };
                                    var2 = var5.bind(var0)(var3, var2, var4);
                                    if (!var2) {
                                        _fun54313_ip = 231;
                                        continue _fun54313
                                    }
                                case 46:
                                    var8 = _closure1_slot13;
                                    var13 = _closure4_slot0;
                                    var12 = _closure4_slot1;
                                    var11 = _closure4_slot2;
                                    var3 = {};
                                    var2 = _closure4_slot4;
                                    var3.burst = var2;
                                    var14 = 'MESSAGE_REACTION_REMOVE';
                                    var15 = undefined;
                                    var10 = var3;
                                    var2 = var15[var8](var14, var13, var12, var11, var10, var9);
                                    var4 = _closure4_slot4;
                                    var8 = _closure1_slot0;
                                    var9 = _closure1_slot2;
                                    var1 = 15;
                                    var1 = var9[var1];
                                    var1 = var8.bind(var0)(var1);
                                    var3 = var1.AccessibilityAnnouncer;
                                    var2 = var3.announce;
                                    var1 = 7;
                                    var5 = var9[var1];
                                    var5 = var8.bind(var0)(var5);
                                    var6 = var5.intl;
                                    var5 = var6.formatToPlainString;
                                    var1 = var9[var1];
                                    var1 = var8.bind(var0)(var1);
                                    var1 = var1.t;
                                    if (var4) {
                                        _fun54313_ip = 197;
                                        continue _fun54313
                                    }
                                case 161:
                                    var8 = var1["UUn5V+"];
                                    var4 = {};
                                    var9 = _closure4_slot2;
                                    var9 = var9.name;
                                    var4.name = var9;
                                    var4 = var5.bind(var6)(var8, var4);
                                    var4 = var2.bind(var3)(var4);
                                    _fun54313_ip = 231;
                                    continue _fun54313;
                                case 197:
                                    var4 = var1.fJeu87;
                                    var1 = {};
                                    var7 = _closure4_slot2;
                                    var7 = var7.name;
                                    var1.name = var7;
                                    var1 = var5.bind(var6)(var4, var1);
                                    var1 = var2.bind(var3)(var1);
                                case 231:
                                    return var0;
                            }
                        };
                        var4 = var5.bind(var6)(var4);
                        return var4;
                    case 648:
                        return var3;
                    case 651:
                        return var2;
                    case 654:
                        return var1;
                    case 657:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
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
    var5 = function() { // Original name: removeAllReactions, environment: var6
        var0 = undefined;
        var3 = _closure1_slot19;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot18 = var5;
    var0 = function() { // Original name: _removeAllReactions, environment: var6
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0, arg1, arg2) { // Environment: var2
            var0 = function*(arg0, arg1, arg2) { // Original name: ?anon_0_, environment: var0
                _fun54318: for (var _fun54318_ip = 0;;) switch (_fun54318_ip) {
                    case 0:
                        StartGenerator();
                        var10 = arg0;
                        var9 = arg1;
                        var4 = arg2;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun54318_ip = 194;
                            continue _fun54318
                        }
                    case 21:
                        var _closure4_slot0 = var10;
                        var _closure4_slot1 = var9;
                        var2 = undefined;
                        var _closure4_slot2 = var2;
                        var1 = null;
                        var1 = var1 != var4;
                        if (!var1) {
                            _fun54318_ip = 56;
                            continue _fun54318
                        }
                    case 44:
                        var4 = var4.isRetry;
                        var4 = !var4;
                        var1 = !var4;
                    case 56:
                        _closure4_slot2 = var1;
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var1 = 12;
                        var1 = var5[var1];
                        var4 = var4.bind(var2)(var1);
                        var1 = var4.unarchiveThreadIfNecessary;
                        var1 = var1.bind(var4)(var10);
                        SaveGenerator(address = 98);
                    case 96:
                        return var1;
                    case 98:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                        if (var4) {
                            _fun54318_ip = 191;
                            continue _fun54318
                        }
                    case 104:
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var4 = 11;
                        var4 = var6[var4];
                        var4 = var5.bind(var2)(var4);
                        var6 = var4.HTTP;
                        var5 = var6.del;
                        var4 = {
                            'url': null,
                            'oldFormErrors': true,
                            'rejectWithError': false
                        };
                        var8 = _closure1_slot10;
                        var7 = var8.REMOVE_REACTIONS;
                        var7 = var7.bind(var8)(var10, var9);
                        var4.url = var7;
                        var5 = var5.bind(var6)(var4);
                        var4 = var5.catch;
                        var3 = function(arg0) { // Environment: var3
                            var4 = _closure1_slot12;
                            var3 = {};
                            var0 = _closure4_slot2;
                            var3.isRetry = var0;
                            var0 = undefined;
                            var2 = arg0;
                            var1 = function() { // Environment: var1
                                var4 = _closure1_slot18;
                                var3 = _closure4_slot0;
                                var2 = _closure4_slot1;
                                var1 = {};
                                var0 = true;
                                var1.isRetry = var0;
                                var0 = undefined;
                                var0 = var4.bind(var0)(var3, var2, var1);
                                return var0;
                            };
                            var1 = var4.bind(var0)(var2, var1, var3);
                            return var0;
                        };
                        var3 = var4.bind(var5)(var3);
                        return var2;
                    case 191:
                        return var1;
                    case 194:
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
    var4 = function() { // Original name: removeEmojiReactions, environment: var6
        var0 = undefined;
        var3 = _closure1_slot21;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot20 = var4;
    var0 = function() { // Original name: _removeEmojiReactions, environment: var6
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0, arg1, arg2, arg3) { // Environment: var2
            var0 = function*(arg0, arg1, arg2, arg3) { // Original name: ?anon_0_, environment: var0
                _fun54324: for (var _fun54324_ip = 0;;) switch (_fun54324_ip) {
                    case 0:
                        StartGenerator();
                        var11 = arg0;
                        var10 = arg1;
                        var4 = arg2;
                        var5 = arg3;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun54324_ip = 259;
                            continue _fun54324
                        }
                    case 24:
                        var _closure4_slot0 = var11;
                        var _closure4_slot1 = var10;
                        var _closure4_slot2 = var4;
                        var2 = undefined;
                        var _closure4_slot3 = var2;
                        var6 = null;
                        var1 = var6 != var5;
                        if (!var1) {
                            _fun54324_ip = 63;
                            continue _fun54324
                        }
                    case 51:
                        var5 = var5.isRetry;
                        var5 = !var5;
                        var1 = !var5;
                    case 63:
                        _closure4_slot3 = var1;
                        var5 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var1 = 12;
                        var1 = var8[var1];
                        var5 = var5.bind(var2)(var1);
                        var1 = var5.unarchiveThreadIfNecessary;
                        var1 = var1.bind(var5)(var11);
                        SaveGenerator(address = 105);
                    case 103:
                        return var1;
                    case 105:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 5);
                        if (var5) {
                            _fun54324_ip = 256;
                            continue _fun54324
                        }
                    case 114:
                        var5 = var4.id;
                        if (!(var6 !== var5)) {
                            _fun54324_ip = 163;
                            continue _fun54324
                        }
                    case 123:
                        var12 = var4.name;
                        var9 = var4.id;
                        var5 = global;
                        var5 = var5.HermesInternal;
                        var8 = var5.concat;
                        var6 = '';
                        var5 = ':';
                        var9 = var8.bind(var6)(var12, var5, var9);
                        _fun54324_ip = 168;
                        continue _fun54324;
                    case 163:
                        var9 = var4.name;
                    case 168:
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var4 = 11;
                        var4 = var6[var4];
                        var4 = var5.bind(var2)(var4);
                        var6 = var4.HTTP;
                        var5 = var6.del;
                        var4 = {
                            'url': null,
                            'oldFormErrors': true,
                            'rejectWithError': false
                        };
                        var8 = _closure1_slot10;
                        var7 = var8.REMOVE_EMOJI_REACTIONS;
                        var7 = var7.bind(var8)(var11, var10, var9);
                        var4.url = var7;
                        var5 = var5.bind(var6)(var4);
                        var4 = var5.catch;
                        var3 = function(arg0) { // Environment: var3
                            var4 = _closure1_slot12;
                            var3 = {};
                            var0 = _closure4_slot3;
                            var3.isRetry = var0;
                            var0 = undefined;
                            var2 = arg0;
                            var1 = function() { // Environment: var1
                                var5 = _closure1_slot20;
                                var9 = _closure4_slot0;
                                var8 = _closure4_slot1;
                                var7 = _closure4_slot2;
                                var1 = {};
                                var0 = true;
                                var1.isRetry = var0;
                                var10 = undefined;
                                var6 = var1;
                                var0 = var10[var5](var9, var8, var7, var6, var5);
                                return var0;
                            };
                            var1 = var4.bind(var0)(var2, var1, var3);
                            return var0;
                        };
                        var3 = var4.bind(var5)(var3);
                        return var2;
                    case 256:
                        return var1;
                    case 259:
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
    var3 = function() { // Original name: removeReaction, environment: var6
        var0 = undefined;
        var3 = _closure1_slot23;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot22 = var3;
    var0 = function() { // Original name: _removeReaction, environment: var6
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun54330: for (var _fun54330_ip = 0;;) switch (_fun54330_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun54330_ip = 453;
                            continue _fun54330
                        }
                    case 15:
                        var17 = var1.channelId;
                        var _closure4_slot0 = var17;
                        var16 = var1.messageId;
                        var _closure4_slot1 = var16;
                        var15 = var1.emoji;
                        var _closure4_slot2 = var15;
                        var11 = var1.location;
                        var3 = undefined;
                        if (!(var11 === var3)) {
                            _fun54330_ip = 67;
                            continue _fun54330
                        }
                    case 54:
                        var5 = _closure1_slot11;
                        var11 = var5.MESSAGE;
                    case 67:
                        var _closure4_slot3 = var11;
                        var14 = var1.userId;
                        var _closure4_slot4 = var14;
                        var5 = var1.options;
                        var _closure4_slot5 = var5;
                        var _closure4_slot6 = var3;
                        var _closure4_slot7 = var3;
                        SaveGenerator(address = 101);
                    case 99:
                        return var3;
                    case 101:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun54330_ip = 450;
                            continue _fun54330
                        }
                    case 110:
                        var13 = null;
                        var10 = var13 != var5;
                        if (!var10) {
                            _fun54330_ip = 131;
                            continue _fun54330
                        }
                    case 119:
                        var2 = var5.burst;
                        var2 = !var2;
                        var10 = !var2;
                    case 131:
                        _closure4_slot6 = var10;
                        var2 = var13 != var5;
                        if (!var2) {
                            _fun54330_ip = 154;
                            continue _fun54330
                        }
                    case 142:
                        var5 = var5.isRetry;
                        var5 = !var5;
                        var2 = !var5;
                    case 154:
                        _closure4_slot7 = var2;
                        var6 = _closure1_slot13;
                        var5 = {};
                        var5.userId = var14;
                        var5.burst = var10;
                        var22 = 'MESSAGE_REACTION_REMOVE';
                        var23 = undefined;
                        var21 = var17;
                        var20 = var16;
                        var19 = var15;
                        var18 = var5;
                        var2 = var23[var6](var22, var21, var20, var19, var18, var17);
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var2 = 12;
                        var2 = var6[var2];
                        var5 = var5.bind(var3)(var2);
                        var2 = var5.unarchiveThreadIfNecessary;
                        var2 = var2.bind(var5)(var17);
                        SaveGenerator(address = 233);
                    case 231:
                        return var2;
                    case 233:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 5);
                        if (var5) {
                            _fun54330_ip = 447;
                            continue _fun54330
                        }
                    case 242:
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var5 = 11;
                        var5 = var7[var5];
                        var5 = var6.bind(var3)(var5);
                        var7 = var5.HTTP;
                        var6 = var7.del;
                        var5 = {};
                        var12 = _closure1_slot14;
                        var9 = {};
                        var9.channelId = var17;
                        var9.messageId = var16;
                        var9.emoji = var15;
                        var15 = var13 != var14;
                        var13 = '@me';
                        if (!var15) {
                            _fun54330_ip = 310;
                            continue _fun54330
                        }
                    case 307:
                        var13 = var14;
                    case 310:
                        var9.userId = var13;
                        var13 = _closure1_slot0;
                        var14 = _closure1_slot2;
                        var8 = 10;
                        var8 = var14[var8];
                        var8 = var13.bind(var3)(var8);
                        var13 = var8.ReactionTypes;
                        if (var10) {
                            _fun54330_ip = 351;
                            continue _fun54330
                        }
                    case 343:
                        var8 = var13.NORMAL;
                        _fun54330_ip = 357;
                        continue _fun54330;
                    case 351:
                        var8 = var13.BURST;
                    case 357:
                        var9.type = var8;
                        var8 = true;
                        var9.useTypeEndpoint = var8;
                        var9 = var12.bind(var3)(var9);
                        var5.url = var9;
                        var9 = {};
                        var9.location = var11;
                        var9.burst = var10;
                        var5.query = var9;
                        var5.oldFormErrors = var8;
                        var8 = false;
                        var5.rejectWithError = var8;
                        var7 = var6.bind(var7)(var5);
                        var6 = var7.then;
                        var5 = function() { // Environment: var4
                            _fun54331: for (var _fun54331_ip = 0;;) switch (_fun54331_ip) {
                                case 0:
                                    var1 = _closure4_slot5;
                                    var0 = null;
                                    if (!(var0 != var1)) {
                                        _fun54331_ip = 26;
                                        continue _fun54331
                                    }
                                case 13:
                                    var0 = _closure4_slot5;
                                    var0 = var0.burst;
                                    if (var0) {
                                        _fun54331_ip = 135;
                                        continue _fun54331
                                    }
                                case 26:
                                    var7 = _closure1_slot0;
                                    var8 = _closure1_slot2;
                                    var0 = 15;
                                    var0 = var8[var0];
                                    var3 = undefined;
                                    var0 = var7.bind(var3)(var0);
                                    var2 = var0.AccessibilityAnnouncer;
                                    var1 = var2.announce;
                                    var0 = 7;
                                    var4 = var8[var0];
                                    var4 = var7.bind(var3)(var4);
                                    var5 = var4.intl;
                                    var4 = var5.formatToPlainString;
                                    var0 = var8[var0];
                                    var0 = var7.bind(var3)(var0);
                                    var0 = var0.t;
                                    var3 = var0["DQxi+7"];
                                    var0 = {};
                                    var7 = _closure4_slot2;
                                    var7 = var7.name;
                                    var0.name = var7;
                                    var0 = var4.bind(var5)(var3, var0);
                                    var0 = var1.bind(var2)(var0);
                                    _fun54331_ip = 242;
                                    continue _fun54331;
                                case 135:
                                    var7 = _closure1_slot0;
                                    var8 = _closure1_slot2;
                                    var0 = 15;
                                    var0 = var8[var0];
                                    var3 = undefined;
                                    var0 = var7.bind(var3)(var0);
                                    var2 = var0.AccessibilityAnnouncer;
                                    var1 = var2.announce;
                                    var0 = 7;
                                    var4 = var8[var0];
                                    var4 = var7.bind(var3)(var4);
                                    var5 = var4.intl;
                                    var4 = var5.formatToPlainString;
                                    var0 = var8[var0];
                                    var0 = var7.bind(var3)(var0);
                                    var0 = var0.t;
                                    var3 = var0["3l9f6u"];
                                    var0 = {};
                                    var6 = _closure4_slot2;
                                    var6 = var6.name;
                                    var0.name = var6;
                                    var0 = var4.bind(var5)(var3, var0);
                                    var0 = var1.bind(var2)(var0);
                                case 242:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var6 = var6.bind(var7)(var5);
                        var5 = var6.catch;
                        var4 = function() { // Environment: var4
                            var3 = _closure1_slot3;
                            var2 = undefined;
                            var1 = function*(arg0) { // Environment: var0
                                var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                                    _fun54334: for (var _fun54334_ip = 0;;) switch (_fun54334_ip) {
                                        case 0:
                                            StartGenerator();
                                            ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                            if (var1) {
                                                _fun54334_ip = 374;
                                                continue _fun54334
                                            }
                                        case 10:
                                            var6 = _closure1_slot12;
                                            var5 = {};
                                            var1 = _closure4_slot7;
                                            var5.isRetry = var1;
                                            var2 = undefined;
                                            var4 = arg0;
                                            var1 = function() { // Environment: var1
                                                var2 = _closure1_slot22;
                                                var1 = {};
                                                var0 = _closure4_slot0;
                                                var1.channelId = var0;
                                                var0 = _closure4_slot1;
                                                var1.messageId = var0;
                                                var0 = _closure4_slot2;
                                                var1.emoji = var0;
                                                var0 = _closure4_slot3;
                                                var1.location = var0;
                                                var0 = _closure4_slot4;
                                                var1.userId = var0;
                                                var0 = {};
                                                var3 = _closure4_slot6;
                                                var0.burst = var3;
                                                var3 = true;
                                                var0.isRetry = var3;
                                                var1.options = var0;
                                                var0 = undefined;
                                                var0 = var2.bind(var0)(var1);
                                                return var0;
                                            };
                                            var1 = var6.bind(var2)(var4, var1, var5);
                                            if (!var1) {
                                                _fun54334_ip = 368;
                                                continue _fun54334
                                            }
                                        case 56:
                                            var5 = _closure1_slot24;
                                            var4 = _closure4_slot2;
                                            var1 = _closure4_slot6;
                                            var1 = var5.bind(var2)(var4, var1);
                                            SaveGenerator(address = 78);
                                        case 76:
                                            return var1;
                                        case 78:
                                            ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                                            if (var4) {
                                                _fun54334_ip = 371;
                                                continue _fun54334
                                            }
                                        case 87:
                                            var10 = _closure1_slot13;
                                            var15 = _closure4_slot0;
                                            var14 = _closure4_slot1;
                                            var13 = _closure4_slot2;
                                            var5 = {};
                                            var4 = _closure4_slot4;
                                            var5.userId = var4;
                                            var4 = _closure4_slot6;
                                            var5.burst = var4;
                                            var5.colors = var1;
                                            var16 = 'MESSAGE_REACTION_ADD';
                                            var17 = undefined;
                                            var12 = var5;
                                            var4 = var17[var10](var16, var15, var14, var13, var12, var11);
                                            var5 = _closure4_slot5;
                                            var4 = null;
                                            if (!(var4 != var5)) {
                                                _fun54334_ip = 162;
                                                continue _fun54334
                                            }
                                        case 149:
                                            var4 = _closure4_slot5;
                                            var4 = var4.burst;
                                            if (var4) {
                                                _fun54334_ip = 266;
                                                continue _fun54334
                                            }
                                        case 162:
                                            var7 = _closure1_slot0;
                                            var11 = _closure1_slot2;
                                            var4 = 15;
                                            var4 = var11[var4];
                                            var4 = var7.bind(var2)(var4);
                                            var6 = var4.AccessibilityAnnouncer;
                                            var5 = var6.announce;
                                            var4 = 7;
                                            var8 = var11[var4];
                                            var8 = var7.bind(var2)(var8);
                                            var10 = var8.intl;
                                            var8 = var10.formatToPlainString;
                                            var4 = var11[var4];
                                            var4 = var7.bind(var2)(var4);
                                            var4 = var4.t;
                                            var7 = var4["tD9+b+"];
                                            var4 = {};
                                            var11 = _closure4_slot2;
                                            var11 = var11.name;
                                            var4.name = var11;
                                            var4 = var8.bind(var10)(var7, var4);
                                            var4 = var5.bind(var6)(var4);
                                            _fun54334_ip = 368;
                                            continue _fun54334;
                                        case 266:
                                            var6 = _closure1_slot0;
                                            var10 = _closure1_slot2;
                                            var3 = 15;
                                            var3 = var10[var3];
                                            var3 = var6.bind(var2)(var3);
                                            var5 = var3.AccessibilityAnnouncer;
                                            var4 = var5.announce;
                                            var3 = 7;
                                            var7 = var10[var3];
                                            var7 = var6.bind(var2)(var7);
                                            var8 = var7.intl;
                                            var7 = var8.formatToPlainString;
                                            var3 = var10[var3];
                                            var3 = var6.bind(var2)(var3);
                                            var3 = var3.t;
                                            var6 = var3.OamVbV;
                                            var3 = {};
                                            var9 = _closure4_slot2;
                                            var9 = var9.name;
                                            var3.name = var9;
                                            var3 = var7.bind(var8)(var6, var3);
                                            var3 = var4.bind(var5)(var3);
                                        case 368:
                                            return var2;
                                        case 371:
                                            return var1;
                                        case 374:
                                            return var0;
                                    }
                                };
                                return var0;
                            };
                            var1 = var3.bind(var2)(var1);
                            var _closure5_slot0 = var1;
                            var0 = function() { // Environment: var0
                                var0 = undefined;
                                var3 = _closure5_slot0;
                                var2 = var3.apply;
                                var0 = arguments;
                                var1 = var0;
                                var0 = this;
                                var0 = var2.bind(var3)(var0, var1);
                                return var0;
                            };
                            return var0;
                        };
                        var4 = var4.bind(var3)();
                        var4 = var5.bind(var6)(var4);
                        return var3;
                    case 447:
                        return var2;
                    case 450:
                        return var1;
                    case 453:
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
    var0 = function() { // Original name: getOptimisticEmojiColors, environment: var6
        var0 = undefined;
        var3 = _closure1_slot25;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot24 = var0;
    var0 = function() { // Original name: _getOptimisticEmojiColors, environment: var6
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0, arg1) { // Environment: var2
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun54340: for (var _fun54340_ip = 0;;) switch (_fun54340_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 3);
                        if (var3) {
                            _fun54340_ip = 79;
                            continue _fun54340
                        }
                    case 7:
                        var2 = arg0;
                        var1 = new Array(0);
                        var3 = arg1;
                        if (!var3) {
                            _fun54340_ip = 76;
                            continue _fun54340
                        }
                    case 20: // try_start_0
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var3 = 17;
                        var4 = var4[var3];
                        var3 = undefined;
                        var4 = var5.bind(var3)(var4);
                        var3 = var4.getEmojiColors;
                        var2 = var3.bind(var4)(var2);
                        SaveGenerator(address = 60);
                    case 58:
                        return var2;
                    case 60:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                        if (var3) {
                            _fun54340_ip = 71;
                            continue _fun54340
                        }
                    case 66:
                        var1 = var2;
                    case 69: // try_end0
                        _fun54340_ip = 76;
                        continue _fun54340;
                    case 71:
                        return var2;
                    case 74: // catch_target0
                        CatchBlockStart(arg_register = 2);
                    case 76:
                        return var1;
                    case 79:
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
    var1 = function(arg0, arg1, arg2, arg3) { // Original name: hasUserAlreadyReacted, environment: var6
        _fun54341: for (var _fun54341_ip = 0;;) switch (_fun54341_ip) {
            case 0:
                var3 = _closure1_slot6;
                var2 = var3.getMessage;
                var1 = arg0;
                var0 = arg1;
                var4 = var2.bind(var3)(var1, var0);
                var0 = null;
                var0 = var0 != var4;
                if (!var0) {
                    _fun54341_ip = 54;
                    continue _fun54341
                }
            case 34:
                var3 = var4.userHasReactedWithEmoji;
                var2 = arg2;
                var1 = arg3;
                var0 = var3.bind(var4)(var2, var1);
            case 54:
                return var0;
        }
    };
    var _closure1_slot26 = var1;
    var0 = global;
    var13 = var0.Object;
    var12 = var13.defineProperty;
    var8 = {};
    var0 = true;
    var8.value = var0;
    var0 = '__esModule';
    var0 = var12.bind(var13)(var2, var0, var8);
    var0 = 0;
    var8 = var11[var0];
    var0 = undefined;
    var8 = var9.bind(var0)(var8);
    var _closure1_slot3 = var8;
    var8 = 1;
    var8 = var11[var8];
    var8 = var9.bind(var0)(var8);
    var _closure1_slot4 = var8;
    var8 = 2;
    var8 = var11[var8];
    var8 = var9.bind(var0)(var8);
    var _closure1_slot5 = var8;
    var8 = 3;
    var8 = var11[var8];
    var8 = var9.bind(var0)(var8);
    var _closure1_slot6 = var8;
    var8 = 4;
    var8 = var11[var8];
    var8 = var10.bind(var0)(var8);
    var9 = var8.AbortCodes;
    var _closure1_slot7 = var9;
    var9 = var8.AnalyticEvents;
    var _closure1_slot8 = var9;
    var9 = var8.ComponentActions;
    var _closure1_slot9 = var9;
    var8 = var8.Endpoints;
    var _closure1_slot10 = var8;
    var8 = {};
    var9 = 'Message';
    var8.MESSAGE = var9;
    var9 = 'Forum Toolbar';
    var8.FORUM_TOOLBAR = var9;
    var9 = 'Mobile Media Viewer';
    var8.MOBILE_MEDIA_VIEWER = var9;
    var9 = 'Message Hover Bar';
    var8.MESSAGE_HOVER_BAR = var9;
    var9 = 'Message Inline Button';
    var8.MESSAGE_INLINE_BUTTON = var9;
    var9 = 'Message Context Menu';
    var8.MESSAGE_CONTEXT_MENU = var9;
    var9 = 'Message Reaction Picker';
    var8.MESSAGE_REACTION_PICKER = var9;
    var9 = 'Message Shortcut';
    var8.MESSAGE_SHORTCUT = var9;
    var9 = 'Double Tap';
    var8.DOUBLE_TAP = var9;
    var _closure1_slot11 = var8;
    var9 = 18;
    var9 = var11[var9];
    var11 = var10.bind(var0)(var9);
    var10 = var11.fileFinishedImporting;
    var9 = 'modules/reactions/ReactionActionCreators.tsx';
    var9 = var10.bind(var11)(var9);
    var2.ReactionLocations = var8;
    var8 = function() { // Original name: getReactors, environment: var6
        var0 = undefined;
        var3 = _closure1_slot15;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.getReactors = var8;
    var2.addReaction = var7;
    var6 = function(arg0) { // Original name: playBurstReaction, environment: var6
        var0 = arg0;
        var7 = var0.channelId;
        var6 = var0.messageId;
        var5 = var0.emoji;
        var4 = var0.key;
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 9;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var8 = 'BURST_REACTION_EFFECT_PLAY';
        var1.type = var8;
        var1.channelId = var7;
        var1.messageId = var6;
        var1.emoji = var5;
        var1.key = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.playBurstReaction = var6;
    var2.removeAllReactions = var5;
    var2.removeEmojiReactions = var4;
    var2.removeReaction = var3;
    var2.hasUserAlreadyReacted = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 1216, 1372, 4213, 660, 667, 3962, 1234, 1229, 806, 6515, 507, 6428, 795, 4265, 3165, 6516, 3067, 2]);