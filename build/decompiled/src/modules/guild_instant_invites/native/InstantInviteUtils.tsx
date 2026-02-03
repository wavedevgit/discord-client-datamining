// modules/guild_instant_invites/native/InstantInviteUtils.tsx
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
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.InstantInviteSources;
    var _closure1_slot6 = var3;
    var3 = 14;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_instant_invites/native/InstantInviteUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Environment: var1
        _fun73031: for (var _fun73031_ip = 0;;) switch (_fun73031_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.invite;
                var _closure2_slot0 = var0;
                var1 = var1.onInviteRevoked;
                var _closure2_slot1 = var1;
                var5 = undefined;
                var _closure2_slot2 = var5;
                var _closure2_slot3 = var5;
                var4 = _closure1_slot4;
                var1 = var4.getChannel;
                var0 = var0.channel;
                var0 = var0.id;
                var4 = var1.bind(var4)(var0);
                var0 = null;
                var1 = var0 == var4;
                var0 = undefined;
                if (var1) {
                    _fun73031_ip = 83;
                    continue _fun73031
                }
            case 73:
                var1 = var4.isPrivate;
                var0 = var1.bind(var4)();
            case 83:
                _closure2_slot3 = var0;
                var1 = {};
                var11 = _closure1_slot0;
                var7 = _closure1_slot2;
                var8 = 4;
                var0 = var7[var8];
                var0 = var11.bind(var5)(var0);
                var6 = var0.intl;
                var4 = var6.string;
                var0 = var7[var8];
                var0 = var11.bind(var5)(var0);
                var0 = var0.t;
                var0 = var0.RDE0Sc;
                var0 = var4.bind(var6)(var0);
                var1.label = var0;
                var6 = _closure1_slot1;
                var4 = 5;
                var0 = var7[var4];
                var0 = var6.bind(var5)(var0);
                var0 = var0.share;
                var1.iconSource = var0;
                var0 = function() {
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 6;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = function() { // Environment: var1
                        _fun73033: for (var _fun73033_ip = 0;;) switch (_fun73033_ip) {
                            case 0:
                                var1 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var0 = 7;
                                var0 = var2[var0];
                                var12 = undefined;
                                var3 = var1.bind(var12)(var0);
                                var2 = var3.showShareActionSheet;
                                var1 = {};
                                var6 = _closure2_slot3;
                                var5 = undefined;
                                if (var6) {
                                    _fun73033_ip = 79;
                                    continue _fun73033
                                }
                            case 45:
                                var7 = _closure1_slot1;
                                var8 = _closure1_slot2;
                                var6 = 8;
                                var6 = var8[var6];
                                var7 = var7.bind(var12)(var6);
                                var6 = _closure2_slot0;
                                var6 = var6.code;
                                var5 = var7.bind(var12)(var6);
                            case 79:
                                var1.url = var5;
                                var6 = _closure2_slot3;
                                var5 = undefined;
                                if (!var6) {
                                    _fun73033_ip = 239;
                                    continue _fun73033
                                }
                            case 95:
                                var7 = _closure1_slot0;
                                var10 = _closure1_slot2;
                                var6 = 4;
                                var8 = var10[var6];
                                var8 = var7.bind(var12)(var8);
                                var9 = var8.intl;
                                var8 = var9.formatToPlainString;
                                var6 = var10[var6];
                                var6 = var7.bind(var12)(var6);
                                var6 = var6.t;
                                var7 = var6["+zWvOQ"];
                                var6 = {};
                                var11 = _closure1_slot5;
                                var10 = var11.getCurrentUser;
                                var13 = var10.bind(var11)();
                                var10 = null;
                                var14 = var10 == var13;
                                var11 = undefined;
                                if (var14) {
                                    _fun73033_ip = 176;
                                    continue _fun73033
                                }
                            case 171:
                                var11 = var13.username;
                            case 176:
                                var13 = var10 != var11;
                                var10 = '';
                                if (!var13) {
                                    _fun73033_ip = 190;
                                    continue _fun73033
                                }
                            case 187:
                                var10 = var11;
                            case 190:
                                var6.username = var10;
                                var11 = _closure1_slot1;
                                var13 = _closure1_slot2;
                                var10 = 8;
                                var10 = var13[var10];
                                var11 = var11.bind(var12)(var10);
                                var10 = _closure2_slot0;
                                var10 = var10.code;
                                var10 = var11.bind(var12)(var10);
                                var6.link = var10;
                                var5 = var8.bind(var9)(var7, var6);
                            case 239:
                                var1.message = var5;
                                var5 = _closure2_slot3;
                                var0 = 'Guild Instant Invite';
                                if (!var5) {
                                    _fun73033_ip = 266;
                                    continue _fun73033
                                }
                            case 256:
                                var4 = _closure1_slot6;
                                var0 = var4.GROUP_DM;
                            case 266:
                                var0 = var2.bind(var3)(var1, var0);
                                return var0;
                        }
                    };
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var1.action = var0;
                var0 = new Array(3);
                var0[0] = var1;
                var1 = {};
                var9 = var7[var8];
                var9 = var11.bind(var5)(var9);
                var12 = var9.intl;
                var10 = var12.string;
                var9 = var7[var8];
                var9 = var11.bind(var5)(var9);
                var9 = var9.t;
                var9 = var9.OpuAlK;
                var9 = var10.bind(var12)(var9);
                var1.label = var9;
                var9 = var7[var4];
                var9 = var6.bind(var5)(var9);
                var9 = var9.copy;
                var1.iconSource = var9;
                var9 = function() {
                    _fun73034: for (var _fun73034_ip = 0;;) switch (_fun73034_ip) {
                        case 0:
                            var2 = _closure2_slot3;
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            if (var2) {
                                _fun73034_ip = 100;
                                continue _fun73034
                            }
                        case 21:
                            var2 = 9;
                            var2 = var3[var2];
                            var5 = undefined;
                            var7 = var4.bind(var5)(var2);
                            var6 = var7.copy;
                            var8 = _closure1_slot1;
                            var2 = 8;
                            var2 = var3[var2];
                            var8 = var8.bind(var5)(var2);
                            var2 = _closure2_slot0;
                            var2 = var2.code;
                            var2 = var8.bind(var5)(var2);
                            var2 = var6.bind(var7)(var2);
                            var2 = 10;
                            var2 = var3[var2];
                            var5 = var4.bind(var5)(var2);
                            var2 = var5.presentCopiedToClipboard;
                            var2 = var2.bind(var5)();
                            _fun73034_ip = 153;
                            continue _fun73034;
                        case 100:
                            var2 = 11;
                            var3 = var3[var2];
                            var2 = undefined;
                            var5 = var4.bind(var2)(var3);
                            var4 = var5.handleCopy;
                            var1 = _closure2_slot0;
                            var12 = var1.code;
                            var11 = var1.channel;
                            var0 = _closure1_slot6;
                            var10 = var0.GROUP_DM;
                            var9 = false;
                            var13 = var5;
                            var0 = var13[var4](var12, var11, var10, var9, var8);
                        case 153:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1.action = var9;
                var0[1] = var1;
                var1 = {};
                var9 = var7[var8];
                var9 = var11.bind(var5)(var9);
                var10 = var9.intl;
                var9 = var10.string;
                var8 = var7[var8];
                var8 = var11.bind(var5)(var8);
                var8 = var8.t;
                var8 = var8.v6Yazx;
                var8 = var9.bind(var10)(var8);
                var1.label = var8;
                var4 = var7[var4];
                var4 = var6.bind(var5)(var4);
                var4 = var4.revoke;
                var1.iconSource = var4;
                var4 = 'destructive';
                var1.variant = var4;
                var4 = _closure1_slot3;
                var3 = function*() { // Environment: var2
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun73036: for (var _fun73036_ip = 0;;) switch (_fun73036_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun73036_ip = 201;
                                    continue _fun73036
                                }
                            case 10: // try_start_0
                                var2 = _closure1_slot1;
                                var3 = _closure1_slot2;
                                var1 = 12;
                                var1 = var3[var1];
                                var4 = undefined;
                                var5 = var2.bind(var4)(var1);
                                var3 = var5.revokeInvite;
                                var1 = _closure2_slot0;
                                var1 = var3.bind(var5)(var1);
                                SaveGenerator(address = 57);
                            case 55:
                                return var1;
                            case 57:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                if (var3) {
                                    _fun73036_ip = 88;
                                    continue _fun73036
                                }
                            case 63:
                                var5 = _closure2_slot1;
                                var3 = null;
                                if (!(var3 != var5)) {
                                    _fun73036_ip = 86;
                                    continue _fun73036
                                }
                            case 73:
                                var3 = _closure2_slot1;
                                var2 = _closure2_slot0;
                                var2 = var3.bind(var4)(var2);
                            case 86: // try_end0
                                _fun73036_ip = 196;
                                continue _fun73036;
                            case 88:
                                return var1;
                            case 91: // catch_target0
                                CatchBlockStart(arg_register = 1);
                                var2 = _closure1_slot1;
                                var9 = _closure1_slot2;
                                var1 = 13;
                                var1 = var9[var1];
                                var8 = undefined;
                                var3 = var2.bind(var8)(var1);
                                var2 = var3.open;
                                var1 = {};
                                var5 = 'ERROR_ANOTHER_TRY';
                                var1.key = var5;
                                var7 = _closure1_slot0;
                                var4 = 4;
                                var5 = var9[var4];
                                var5 = var7.bind(var8)(var5);
                                var6 = var5.intl;
                                var5 = var6.string;
                                var4 = var9[var4];
                                var4 = var7.bind(var8)(var4);
                                var4 = var4.t;
                                var4 = var4.CKsXk3;
                                var4 = var5.bind(var6)(var4);
                                var1.content = var4;
                                var1 = var2.bind(var3)(var1);
                            case 196:
                                var1 = undefined;
                                return var1;
                            case 201:
                                return var0;
                        }
                    };
                    return var0;
                };
                var3 = var4.bind(var5)(var3);
                _closure2_slot2 = var3;
                var2 = function() { // Environment: var2
                    var0 = undefined;
                    var3 = _closure2_slot2;
                    var2 = var3.apply;
                    var0 = arguments;
                    var1 = var0;
                    var0 = this;
                    var0 = var2.bind(var3)(var0, var1);
                    return var0;
                };
                var1.action = var2;
                var0[2] = var1;
                return var0;
        }
    };
    var2.useInviteActions = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 1372, 1621, 660, 1234, 9140, 9148, 8271, 6549, 5291, 3147, 8328, 5898, 3148, 2]);