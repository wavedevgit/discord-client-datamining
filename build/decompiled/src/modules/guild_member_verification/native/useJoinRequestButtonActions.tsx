// modules/guild_member_verification/native/useJoinRequestButtonActions.tsx
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
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var7 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Routes;
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot8 = var3;
    var3 = 16;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_member_verification/native/useJoinRequestButtonActions.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1, arg2() {
        _fun90787: for (var _fun90787_ip = 0;;) switch (_fun90787_ip) {
            case 0:
                var10 = arg0;
                var13 = arg1;
                var9 = arg2;
                var _closure2_slot0 = var10;
                var _closure2_slot1 = var13;
                var _closure2_slot2 = var9;
                var1 = null;
                var0 = var10;
                if (!(var1 == var0)) {
                    _fun90787_ip = 34;
                    continue _fun90787
                }
            case 32:
                var0 = {};
            case 34:
                var12 = var0.guildId;
                var _closure2_slot3 = var12;
                var7 = var0.userId;
                var _closure2_slot4 = var7;
                var11 = var0.joinRequestId;
                var _closure2_slot5 = var11;
                var6 = _closure1_slot5;
                var2 = var6.useState;
                var1 = false;
                var4 = var2.bind(var6)(var1);
                var2 = _closure1_slot4;
                var14 = undefined;
                var1 = 2;
                var4 = var2.bind(var14)(var4, var1);
                var1 = 0;
                var2 = var4[var1];
                var _closure2_slot6 = var2;
                var1 = 1;
                var1 = var4[var1];
                var _closure2_slot7 = var1;
                var5 = var6.useCallback;
                var4 = function() { // Environment: var3
                    var2 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var0 = 6;
                    var1 = var8[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.open;
                    var1 = {};
                    var5 = 'JOIN_REQUEST_ERROR';
                    var1.key = var5;
                    var7 = _closure1_slot0;
                    var4 = 7;
                    var5 = var8[var4];
                    var5 = var7.bind(var0)(var5);
                    var6 = var5.intl;
                    var5 = var6.string;
                    var4 = var8[var4];
                    var4 = var7.bind(var0)(var4);
                    var4 = var4.t;
                    var4 = var4.R0RpRX;
                    var4 = var5.bind(var6)(var4);
                    var1.content = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var1 = new Array(0);
                var8 = var5.bind(var6)(var4, var1);
                var _closure2_slot8 = var8;
                var4 = var6.useCallback;
                var5 = _closure1_slot3;
                var0 = function*() { // Environment: var3
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun90790: for (var _fun90790_ip = 0;;) switch (_fun90790_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun90790_ip = 531;
                                    continue _fun90790
                                }
                            case 10:
                                var1 = undefined;
                                var6 = undefined;
                                var2 = _closure2_slot6;
                                if (var2) {
                                    _fun90790_ip = 528;
                                    continue _fun90790
                                }
                            case 27:
                                var2 = _closure2_slot3;
                                var7 = null;
                                if (!(var7 != var2)) {
                                    _fun90790_ip = 528;
                                    continue _fun90790
                                }
                            case 40:
                                var2 = _closure2_slot4;
                                if (!(var7 != var2)) {
                                    _fun90790_ip = 528;
                                    continue _fun90790
                                }
                            case 51:
                                var2 = _closure2_slot5;
                                if (!(var7 != var2)) {
                                    _fun90790_ip = 528;
                                    continue _fun90790
                                }
                            case 62:
                                var8 = _closure1_slot6;
                                var4 = var8.getChannel;
                                var2 = _closure2_slot1;
                                var2 = var4.bind(var8)(var2);
                                if (!(var7 == var2)) {
                                    _fun90790_ip = 419;
                                    continue _fun90790
                                }
                            case 90:
                                var4 = _closure2_slot6;
                                if (var4) {
                                    _fun90790_ip = 528;
                                    continue _fun90790
                                }
                            case 100:
                                var8 = _closure2_slot7;
                                var4 = true;
                                var4 = var8.bind(var1)(var4);
                            case 111: // try_start_0 // try_start_1
                                var8 = _closure1_slot1;
                                var9 = _closure1_slot2;
                                var4 = 10;
                                var4 = var9[var4];
                                var10 = var8.bind(var1)(var4);
                                var9 = var10.createOrEnterJoinRequestInterview;
                                var4 = _closure2_slot5;
                                var8 = false;
                                var4 = var9.bind(var10)(var4, var8);
                                SaveGenerator(address = 153);
                            case 151:
                                return var4;
                            case 153:
                                ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 9);
                                if (var9) {
                                    _fun90790_ip = 276;
                                    continue _fun90790
                                }
                            case 159:
                                var6 = var4;
                                if (!(var7 != var4)) {
                                    _fun90790_ip = 232;
                                    continue _fun90790
                                }
                            case 166:
                                var10 = _closure1_slot1;
                                var11 = _closure1_slot2;
                                var9 = 8;
                                var9 = var11[var9];
                                var10 = var10.bind(var1)(var9);
                                var11 = _closure1_slot7;
                                var9 = var11.CHANNEL;
                                var9 = var9.bind(var11)(var7, var6);
                                var6 = {
                                    'openChannel': true,
                                    'navigationReplace': false
                                };
                                var6 = var10.bind(var1)(var9, var6);
                                SaveGenerator(address = 226);
                            case 224:
                                return var6;
                            case 226:
                                ResumeGenerator(result_out_reg = 6, return_bool_out_reg = 9);
                                if (var9) {
                                    _fun90790_ip = 234;
                                    continue _fun90790
                                }
                            case 232: // try_end0
                                _fun90790_ip = 328;
                                continue _fun90790;
                            case 234: // try_end1
                                var9 = _closure2_slot7;
                                var9 = var9.bind(var1)(var8);
                                var10 = _closure1_slot1;
                                var11 = _closure1_slot2;
                                var9 = 9;
                                var9 = var11[var9];
                                var10 = var10.bind(var1)(var9);
                                var9 = var10.hideActionSheet;
                                var9 = var9.bind(var10)();
                                return var6;
                            case 276:
                                var6 = _closure2_slot7;
                                var6 = var6.bind(var1)(var8);
                                var8 = _closure1_slot1;
                                var9 = _closure1_slot2;
                                var6 = 9;
                                var6 = var9[var6];
                                var8 = var8.bind(var1)(var6);
                                var6 = var8.hideActionSheet;
                                var6 = var6.bind(var8)();
                                return var4;
                            case 318: // try_start_2 // catch_target0
                                CatchBlockStart(arg_register = 4);
                                var4 = _closure2_slot8;
                                var4 = var4.bind(var1)();
                            case 328: // try_end2
                                var6 = _closure2_slot7;
                                var4 = false;
                                var4 = var6.bind(var1)(var4);
                                var6 = _closure1_slot1;
                                var8 = _closure1_slot2;
                                var4 = 9;
                                var4 = var8[var4];
                                var6 = var6.bind(var1)(var4);
                                var4 = var6.hideActionSheet;
                                var4 = var4.bind(var6)();
                                _fun90790_ip = 528;
                                continue _fun90790;
                            case 374: // catch_target1 // catch_target2
                                CatchBlockStart(arg_register = 4);
                                var6 = _closure2_slot7;
                                var5 = false;
                                var5 = var6.bind(var1)(var5);
                                var6 = _closure1_slot1;
                                var8 = _closure1_slot2;
                                var5 = 9;
                                var5 = var8[var5];
                                var6 = var6.bind(var1)(var5);
                                var5 = var6.hideActionSheet;
                                var5 = var5.bind(var6)();
                                throw var4;
                            case 419:
                                var5 = _closure1_slot1;
                                var6 = _closure1_slot2;
                                var4 = 8;
                                var4 = var6[var4];
                                var5 = var5.bind(var1)(var4);
                                var6 = _closure1_slot7;
                                var4 = var6.CHANNEL;
                                var2 = var2.id;
                                var4 = var4.bind(var6)(var7, var2);
                                var2 = {
                                    'openChannel': true,
                                    'navigationReplace': false
                                };
                                var2 = var5.bind(var1)(var4, var2);
                                SaveGenerator(address = 484);
                            case 482:
                                return var2;
                            case 484:
                                ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 4);
                                if (var4) {
                                    _fun90790_ip = 525;
                                    continue _fun90790
                                }
                            case 490:
                                var4 = _closure1_slot1;
                                var5 = _closure1_slot2;
                                var3 = 9;
                                var3 = var5[var3];
                                var4 = var4.bind(var1)(var3);
                                var3 = var4.hideActionSheet;
                                var3 = var3.bind(var4)();
                                var3 = undefined;
                                return var3;
                            case 525:
                                return var2;
                            case 528:
                                return var1;
                            case 531:
                                return var0;
                        }
                    };
                    return var0;
                };
                var1 = var5.bind(var14)(var0);
                var0 = new Array(6);
                var0[0] = var12;
                var0[1] = var11;
                var0[2] = var13;
                var0[3] = var8;
                var0[4] = var2;
                var0[5] = var7;
                var1 = var4.bind(var6)(var1, var0);
                var0 = {};
                var13 = var6.useCallback;
                var4 = function*() { // Environment: var3
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun90792: for (var _fun90792_ip = 0;;) switch (_fun90792_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun90792_ip = 428;
                                    continue _fun90792
                                }
                            case 10:
                                var1 = _closure2_slot6;
                                if (var1) {
                                    _fun90792_ip = 423;
                                    continue _fun90792
                                }
                            case 23:
                                var1 = _closure2_slot3;
                                var3 = null;
                                if (!(var3 != var1)) {
                                    _fun90792_ip = 423;
                                    continue _fun90792
                                }
                            case 36:
                                var1 = _closure2_slot4;
                                if (!(var3 != var1)) {
                                    _fun90792_ip = 423;
                                    continue _fun90792
                                }
                            case 47:
                                var1 = _closure2_slot5;
                                if (!(var3 != var1)) {
                                    _fun90792_ip = 423;
                                    continue _fun90792
                                }
                            case 58:
                                var3 = _closure2_slot7;
                                var4 = undefined;
                                var1 = true;
                                var1 = var3.bind(var4)(var1);
                            case 71: // try_start_0 // try_start_1
                                var5 = _closure1_slot1;
                                var11 = _closure1_slot2;
                                var1 = 10;
                                var1 = var11[var1];
                                var9 = var5.bind(var4)(var1);
                                var8 = var9.updateGuildJoinRequest;
                                var7 = _closure2_slot3;
                                var15 = _closure2_slot4;
                                var14 = _closure2_slot5;
                                var10 = _closure1_slot0;
                                var1 = 11;
                                var1 = var11[var1];
                                var1 = var10.bind(var4)(var1);
                                var1 = var1.GuildJoinRequestApplicationStatuses;
                                var13 = var1.APPROVED;
                                var17 = var9;
                                var16 = var7;
                                var1 = var17[var8](var16, var15, var14, var13, var12);
                                SaveGenerator(address = 154);
                            case 152:
                                return var1;
                            case 154:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 5);
                                if (var5) {
                                    _fun90792_ip = 275;
                                    continue _fun90792
                                }
                            case 160:
                                var6 = _closure1_slot1;
                                var12 = _closure1_slot2;
                                var5 = 6;
                                var5 = var12[var5];
                                var7 = var6.bind(var4)(var5);
                                var6 = var7.open;
                                var5 = {};
                                var8 = 'JOIN_REQUEST_APPROVE';
                                var5.key = var8;
                                var11 = _closure1_slot0;
                                var8 = 7;
                                var9 = var12[var8];
                                var9 = var11.bind(var4)(var9);
                                var10 = var9.intl;
                                var9 = var10.string;
                                var8 = var12[var8];
                                var8 = var11.bind(var4)(var8);
                                var8 = var8.t;
                                var8 = var8.WXHcq5;
                                var8 = var9.bind(var10)(var8);
                                var5.content = var8;
                                var8 = function() {
                                    var3 = _closure1_slot8;
                                    var1 = _closure1_slot0;
                                    var6 = _closure1_slot2;
                                    var0 = 12;
                                    var0 = var6[var0];
                                    var2 = undefined;
                                    var0 = var1.bind(var2)(var0);
                                    var1 = var0.CircleCheckIcon;
                                    var0 = {};
                                    var5 = _closure1_slot1;
                                    var4 = 13;
                                    var7 = var6[var4];
                                    var7 = var5.bind(var2)(var7);
                                    var7 = var7.colors;
                                    var7 = var7.STATUS_POSITIVE_BACKGROUND;
                                    var0.color = var7;
                                    var4 = var6[var4];
                                    var4 = var5.bind(var2)(var4);
                                    var4 = var4.colors;
                                    var4 = var4.STATUS_POSITIVE_TEXT;
                                    var0.secondaryColor = var4;
                                    var0 = var3.bind(var2)(var1, var0);
                                    return var0;
                                };
                                var5.icon = var8;
                                var5 = var6.bind(var7)(var5);
                            case 273: // try_end0
                                _fun90792_ip = 329;
                                continue _fun90792;
                            case 275: // try_end1
                                var6 = _closure2_slot7;
                                var5 = false;
                                var5 = var6.bind(var4)(var5);
                                var5 = _closure1_slot1;
                                var6 = _closure1_slot2;
                                var3 = 9;
                                var3 = var6[var3];
                                var5 = var5.bind(var4)(var3);
                                var3 = var5.hideActionSheet;
                                var3 = var3.bind(var5)();
                                return var1;
                            case 319: // try_start_2 // catch_target0
                                CatchBlockStart(arg_register = 1);
                                var1 = _closure2_slot8;
                                var1 = var1.bind(var4)();
                            case 329: // try_end2
                                var3 = _closure2_slot7;
                                var1 = false;
                                var1 = var3.bind(var4)(var1);
                                var3 = _closure1_slot1;
                                var5 = _closure1_slot2;
                                var1 = 9;
                                var1 = var5[var1];
                                var3 = var3.bind(var4)(var1);
                                var1 = var3.hideActionSheet;
                                var1 = var1.bind(var3)();
                                _fun90792_ip = 423;
                                continue _fun90792;
                            case 375: // catch_target1 // catch_target2
                                CatchBlockStart(arg_register = 1);
                                var3 = _closure2_slot7;
                                var2 = false;
                                var2 = var3.bind(var4)(var2);
                                var3 = _closure1_slot1;
                                var5 = _closure1_slot2;
                                var2 = 9;
                                var2 = var5[var2];
                                var3 = var3.bind(var4)(var2);
                                var2 = var3.hideActionSheet;
                                var2 = var2.bind(var3)();
                                throw var1;
                            case 423:
                                var1 = undefined;
                                return var1;
                            case 428:
                                return var0;
                        }
                    };
                    return var0;
                };
                var5 = var5.bind(var14)(var4);
                var4 = new Array(5);
                var4[0] = var12;
                var4[1] = var11;
                var4[2] = var8;
                var4[3] = var2;
                var4[4] = var7;
                var4 = var13.bind(var6)(var5, var4);
                var0.approveRequest = var4;
                var5 = var6.useCallback;
                var4 = new Array(6);
                var4[0] = var12;
                var4[1] = var11;
                var4[2] = var10;
                var4[3] = var9;
                var4[4] = var8;
                var4[5] = var7;
                var3 = function() { // Environment: var3
                    _fun90794: for (var _fun90794_ip = 0;;) switch (_fun90794_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            var2 = null;
                            var0 = var2 != var0;
                            if (!var0) {
                                _fun90794_ip = 24;
                                continue _fun90794
                            }
                        case 16:
                            var1 = _closure2_slot3;
                            var0 = var2 != var1;
                        case 24:
                            if (!var0) {
                                _fun90794_ip = 35;
                                continue _fun90794
                            }
                        case 27:
                            var1 = _closure2_slot4;
                            var0 = var2 != var1;
                        case 35:
                            if (!var0) {
                                _fun90794_ip = 46;
                                continue _fun90794
                            }
                        case 38:
                            var1 = _closure2_slot5;
                            var0 = var2 != var1;
                        case 46:
                            if (!var0) {
                                _fun90794_ip = 181;
                                continue _fun90794
                            }
                        case 52:
                            var3 = _closure1_slot1;
                            var0 = _closure1_slot2;
                            var2 = 9;
                            var2 = var0[var2];
                            var6 = undefined;
                            var4 = var3.bind(var6)(var2);
                            var3 = var4.openLazy;
                            var2 = _closure1_slot0;
                            var1 = 15;
                            var1 = var0[var1];
                            var2 = var2.bind(var6)(var1);
                            var1 = 14;
                            var1 = var0[var1];
                            var0 = var0.paths;
                            var2 = var2.bind(var6)(var1, var0);
                            var6 = _closure2_slot5;
                            var0 = global;
                            var0 = var0.HermesInternal;
                            var1 = var0.concat;
                            var0 = 'RejectionReason-';
                            var1 = var1.bind(var0)(var6);
                            var0 = {};
                            var6 = _closure2_slot0;
                            var0.joinRequest = var6;
                            var6 = _closure2_slot8;
                            var0.onError = var6;
                            var5 = _closure2_slot2;
                            var0.onDismiss = var5;
                            var0 = var3.bind(var4)(var2, var1, var0);
                        case 181:
                            var0 = undefined;
                            return var0;
                    }
                };
                var3 = var5.bind(var6)(var3, var4);
                var0.rejectRequest = var3;
                var0.submitting = var2;
                var0.handleOpenInterview = var1;
                return var0;
        }
    };
    var2.useJoinRequestButtonActions = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 1372, 660, 33, 3139, 1234, 5612, 3269, 7414, 3207, 3262, 671, 11797, 1307, 2]);