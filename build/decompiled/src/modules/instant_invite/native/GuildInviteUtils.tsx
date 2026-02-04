// modules/instant_invite/native/GuildInviteUtils.tsx
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
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0, arg1, arg2) { // Environment: var2
            var0 = function*(arg0, arg1, arg2) { // Original name: ?anon_0_, environment: var0
                _fun92125: for (var _fun92125_ip = 0;;) switch (_fun92125_ip) {
                    case 0:
                        StartGenerator();
                        var2 = arg0;
                        var1 = arg1;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 7);
                        if (var7) {
                            _fun92125_ip = 571;
                            continue _fun92125
                        }
                    case 18:
                        var4 = var2;
                        var _closure4_slot0 = var2;
                        var3 = var1;
                        var _closure4_slot1 = var1;
                        var9 = arg2;
                        var1 = undefined;
                        var6 = undefined;
                    case 39: // try_start_0
                        var8 = _closure1_slot12;
                        var7 = var4;
                        var12 = var3;
                        var2 = _closure1_slot13;
                        var2 = var2.SENDING;
                        var2 = var8.bind(var1)(var7, var12, var2);
                        var14 = _closure1_slot0;
                        var15 = _closure1_slot2;
                        var2 = 18;
                        var2 = var15[var2];
                        var2 = var14.bind(var1)(var2);
                        var8 = var2.AccessibilityAnnouncer;
                        var7 = var8.announce;
                        var2 = 19;
                        var11 = var15[var2];
                        var11 = var14.bind(var1)(var11);
                        var13 = var11.intl;
                        var11 = var13.string;
                        var2 = var15[var2];
                        var2 = var14.bind(var1)(var2);
                        var2 = var2.t;
                        var2 = var2.kC3ZRG;
                        var2 = var11.bind(var13)(var2);
                        var2 = var7.bind(var8)(var2);
                        var11 = _closure1_slot5;
                        var8 = var11.getDefaultChannel;
                        var2 = _closure1_slot14;
                        var7 = var2.CREATE_INSTANT_INVITE;
                        var2 = true;
                        var8 = var8.bind(var11)(var12, var2, var7);
                        var6 = var8;
                        var7 = null;
                        if (!(var7 != var8)) {
                            _fun92125_ip = 438;
                            continue _fun92125
                        }
                    case 196:
                        var13 = _closure1_slot1;
                        var14 = _closure1_slot2;
                        var7 = 20;
                        var7 = var14[var7];
                        var11 = var13.bind(var1)(var7);
                        var8 = var11.createInvite;
                        var7 = var6.id;
                        var6 = {};
                        var12 = 21;
                        var15 = var14[var12];
                        var15 = var13.bind(var1)(var15);
                        var15 = var15.INVITE_OPTIONS_ONCE;
                        var15 = var15.value;
                        var6.max_uses = var15;
                        var12 = var14[var12];
                        var12 = var13.bind(var1)(var12);
                        var12 = var12.INVITE_OPTIONS_7_DAYS;
                        var12 = var12.value;
                        var6.max_age = var12;
                        var6.unique = var2;
                        var2 = var9;
                        var2 = var8.bind(var11)(var7, var6, var2);
                        SaveGenerator(address = 301);
                    case 299:
                        return var2;
                    case 301:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 6);
                        if (var6) {
                            _fun92125_ip = 435;
                            continue _fun92125
                        }
                    case 310:
                        var7 = _closure1_slot1;
                        var13 = _closure1_slot2;
                        var11 = 22;
                        var6 = var13[var11];
                        var8 = var7.bind(var1)(var6);
                        var7 = var8.enqueue;
                        var6 = {};
                        var12 = var2.code;
                        var6.inviteKey = var12;
                        var12 = _closure1_slot0;
                        var11 = var13[var11];
                        var11 = var12.bind(var1)(var11);
                        var11 = var11.InvitePropertiesType;
                        var11 = var11.USER;
                        var6.type = var11;
                        var12 = _closure1_slot11;
                        var11 = var12.getUser;
                        var10 = var4;
                        var10 = var11.bind(var12)(var10);
                        var6.user = var10;
                        var10 = var9;
                        var6.location = var10;
                        var9 = {};
                        var9.source = var10;
                        var6.inviteAnalyticsMetadata = var9;
                        var5 = function() { // Environment: var5
                            var5 = _closure1_slot12;
                            var4 = _closure4_slot0;
                            var3 = _closure4_slot1;
                            var0 = _closure1_slot13;
                            var2 = var0.SENT;
                            var0 = undefined;
                            var2 = var5.bind(var0)(var4, var3, var2);
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var1 = 18;
                            var1 = var7[var1];
                            var1 = var6.bind(var0)(var1);
                            var3 = var1.AccessibilityAnnouncer;
                            var2 = var3.announce;
                            var1 = 19;
                            var4 = var7[var1];
                            var4 = var6.bind(var0)(var4);
                            var5 = var4.intl;
                            var4 = var5.string;
                            var1 = var7[var1];
                            var1 = var6.bind(var0)(var1);
                            var1 = var1.t;
                            var1 = var1.PuLLzP;
                            var1 = var4.bind(var5)(var1);
                            var1 = var2.bind(var3)(var1);
                            return var0;
                        };
                        var5 = var7.bind(var8)(var6, var5);
                    case 430: // try_end0
                        _fun92125_ip = 568;
                        continue _fun92125;
                    case 435:
                        return var2;
                    case 438: // try_start_1
                        var2 = global;
                        var2 = var2.Error;
                        var2 = var2.bind(var1)();
                        throw var2;
                    case 452: // try_end1 // catch_target0 // catch_target1
                        CatchBlockStart(arg_register = 2);
                        var6 = _closure1_slot12;
                        var5 = var4;
                        var4 = var3;
                        var3 = _closure1_slot13;
                        var3 = var3.ERROR;
                        var3 = var6.bind(var1)(var5, var4, var3);
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var2 = 18;
                        var2 = var8[var2];
                        var2 = var7.bind(var1)(var2);
                        var4 = var2.AccessibilityAnnouncer;
                        var3 = var4.announce;
                        var2 = 19;
                        var5 = var8[var2];
                        var5 = var7.bind(var1)(var5);
                        var6 = var5.intl;
                        var5 = var6.string;
                        var2 = var8[var2];
                        var2 = var7.bind(var1)(var2);
                        var2 = var2.t;
                        var2 = var2.fEptJP;
                        var2 = var5.bind(var6)(var2);
                        var2 = var3.bind(var4)(var2);
                    case 568:
                        return var1;
                    case 571:
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
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var7 = var5[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.setSendState;
    var _closure1_slot12 = var3;
    var3 = 10;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.InviteSendStates;
    var _closure1_slot13 = var3;
    var3 = 11;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.Permissions;
    var _closure1_slot14 = var6;
    var3 = var3.AnalyticEvents;
    var _closure1_slot15 = var3;
    var3 = 23;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/instant_invite/native/GuildInviteUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function(arg0, arg1) { // Environment: var1
        var7 = arg0;
        var6 = arg1;
        var4 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 12;
        var3 = var1[var0];
        var0 = undefined;
        var9 = var4.bind(var0)(var3);
        var8 = var9.track;
        var3 = _closure1_slot15;
        var5 = var3.OPEN_POPOUT;
        var3 = {};
        var10 = 'Invite to Guilds';
        var3.type = var10;
        var3.source = var6;
        var3 = var8.bind(var9)(var5, var3);
        var3 = 13;
        var3 = var1[var3];
        var5 = var4.bind(var0)(var3);
        var4 = var5.openLazy;
        var3 = _closure1_slot0;
        var2 = 15;
        var2 = var1[var2];
        var3 = var3.bind(var0)(var2);
        var2 = 14;
        var2 = var1[var2];
        var1 = var1.paths;
        var3 = var3.bind(var0)(var2, var1);
        var1 = global;
        var1 = var1.HermesInternal;
        var2 = var1.concat;
        var1 = 'invite-to-guilds-';
        var2 = var2.bind(var1)(var7);
        var1 = {};
        var1.recipientId = var7;
        var1.source = var6;
        var1 = var4.bind(var5)(var3, var2, var1);
        return var0;
    };
    var2.showGuildInviteActionSheet = var3;
    var3 = function(arg0, arg1) { // Environment: var1
        var4 = arg0;
        var5 = arg1;
        var _closure2_slot0 = var4;
        var _closure2_slot1 = var5;
        var6 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 17;
        var3 = var3[var2];
        var2 = undefined;
        var7 = var6.bind(var2)(var3);
        var6 = var7.useStateFromStoresArray;
        var2 = _closure1_slot10;
        var3 = new Array(2);
        var3[0] = var2;
        var2 = _closure1_slot8;
        var3[1] = var2;
        var2 = function() { // Environment: var0
            var2 = _closure1_slot10;
            var0 = var2.getFlattenedGuildIds;
            var3 = var0.bind(var2)();
            var0 = new Array(0);
            var _closure3_slot0 = var0;
            var2 = var3.forEach;
            var1 = function(arg0) { // Environment: var1
                _fun92130: for (var _fun92130_ip = 0;;) switch (_fun92130_ip) {
                    case 0:
                        var2 = _closure1_slot8;
                        var1 = var2.getGuild;
                        var0 = arg0;
                        var2 = var1.bind(var2)(var0);
                        var0 = null;
                        if (!(var0 != var2)) {
                            _fun92130_ip = 43;
                            continue _fun92130
                        }
                    case 26:
                        var1 = _closure3_slot0;
                        var0 = var1.push;
                        var0 = var0.bind(var1)(var2);
                    case 43:
                        var0 = undefined;
                        return var0;
                }
            };
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var6 = var6.bind(var7)(var3, var2);
        var _closure2_slot2 = var6;
        var3 = _closure1_slot4;
        var2 = var3.useMemo;
        var1 = new Array(3);
        var1[0] = var6;
        var1[1] = var5;
        var1[2] = var4;
        var0 = function() { // Environment: var0
            _fun92131: for (var _fun92131_ip = 0;;) switch (_fun92131_ip) {
                case 0:
                    var2 = _closure2_slot0;
                    var1 = null;
                    if (!(var1 != var2)) {
                        _fun92131_ip = 87;
                        continue _fun92131
                    }
                case 15:
                    var2 = _closure1_slot6;
                    var1 = var2.getMemberCounts;
                    var1 = var1.bind(var2)();
                    var _closure3_slot0 = var1;
                    var2 = new Array(0);
                    var _closure3_slot1 = var2;
                    var1 = new Array(0);
                    var _closure3_slot2 = var1;
                    var4 = _closure2_slot2;
                    var3 = var4.forEach;
                    var0 = function(arg0) { // Environment: var0
                        _fun92132: for (var _fun92132_ip = 0;;) switch (_fun92132_ip) {
                            case 0:
                                var3 = arg0;
                                var2 = _closure1_slot9;
                                var1 = var2.can;
                                var0 = _closure1_slot14;
                                var0 = var0.CREATE_INSTANT_INVITE;
                                var0 = var1.bind(var2)(var0, var3);
                                if (var0) {
                                    _fun92132_ip = 47;
                                    continue _fun92132
                                }
                            case 35:
                                var2 = var3.vanityURLCode;
                                var1 = null;
                                var0 = var1 != var2;
                            case 47:
                                if (!var0) {
                                    _fun92132_ip = 262;
                                    continue _fun92132
                                }
                            case 53:
                                var9 = var3.name;
                                var6 = _closure2_slot1;
                                var1 = null;
                                var2 = var1 == var6;
                                if (var2) {
                                    _fun92132_ip = 122;
                                    continue _fun92132
                                }
                            case 74:
                                var7 = _closure1_slot1;
                                var8 = _closure1_slot2;
                                var5 = 16;
                                var5 = var8[var5];
                                var8 = undefined;
                                var7 = var7.bind(var8)(var5);
                                var5 = var6.toLowerCase;
                                var6 = var5.bind(var6)();
                                var5 = var9.toLowerCase;
                                var5 = var5.bind(var9)();
                                var2 = var7.bind(var8)(var6, var5);
                            case 122:
                                if (!var2) {
                                    _fun92132_ip = 262;
                                    continue _fun92132
                                }
                            case 128:
                                var6 = _closure2_slot0;
                                var5 = _closure1_slot7;
                                var2 = var5.isMember;
                                var0 = var3.id;
                                var0 = var2.bind(var5)(var0, var6);
                                if (var0) {
                                    _fun92132_ip = 262;
                                    continue _fun92132
                                }
                            case 156:
                                var2 = {};
                                var2.guild = var3;
                                var6 = _closure3_slot0;
                                var5 = var3.id;
                                var6 = var6[var5];
                                var7 = var1 != var6;
                                var5 = 0;
                                if (!var7) {
                                    _fun92132_ip = 190;
                                    continue _fun92132
                                }
                            case 187:
                                var5 = var6;
                            case 190:
                                var2.memberCount = var5;
                                var3 = var3.ownerId;
                                var5 = _closure1_slot11;
                                var4 = var5.getCurrentUser;
                                var4 = var4.bind(var5)();
                                var5 = var1 == var4;
                                var1 = undefined;
                                if (var5) {
                                    _fun92132_ip = 228;
                                    continue _fun92132
                                }
                            case 223:
                                var1 = var4.id;
                            case 228:
                                if (!(var3 !== var1)) {
                                    _fun92132_ip = 248;
                                    continue _fun92132
                                }
                            case 232:
                                var3 = _closure3_slot2;
                                var1 = var3.push;
                                var1 = var1.bind(var3)(var2);
                                _fun92132_ip = 262;
                                continue _fun92132;
                            case 248:
                                var1 = _closure3_slot1;
                                var0 = var1.push;
                                var0 = var0.bind(var1)(var2);
                            case 262:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0 = var3.bind(var4)(var0);
                    var0 = new Array(2);
                    var0[0] = var2;
                    var0[1] = var1;
                    return var0;
                case 87:
                    var0 = new Array(2);
                    var1 = new Array(0);
                    var0[0] = var1;
                    var1 = new Array(0);
                    var0[1] = var1;
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.useServerInviteRows = var3;
    var1 = function() {
        var0 = undefined;
        var3 = _closure1_slot16;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.sendGuildInvite = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 31, 1671, 1599, 1681, 1410, 3091, 4376, 1621, 11986, 3335, 660, 795, 3278, 11987, 1307, 5602, 566, 3160, 1234, 5898, 8333, 8399, 2]);