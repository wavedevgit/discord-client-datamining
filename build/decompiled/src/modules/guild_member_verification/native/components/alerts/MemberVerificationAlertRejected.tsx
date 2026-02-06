// modules/guild_member_verification/native/components/alerts/MemberVerificationAlertRejected.tsx
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
    var7 = var5[var3];
    var3 = metroImportAll;
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
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot8 = var6;
    var6 = var3.Fragment;
    var _closure1_slot9 = var6;
    var3 = var3.jsxs;
    var _closure1_slot10 = var3;
    var3 = 15;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_member_verification/native/components/alerts/MemberVerificationAlertRejected.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun60132: for (var _fun60132_ip = 0;;) switch (_fun60132_ip) {
            case 0:
                var3 = arg0;
                var12 = var3.guildId;
                var _closure2_slot0 = var12;
                var8 = var3.secondaryButton;
                var6 = var3.onClose;
                var _closure2_slot1 = var6;
                var2 = {
                    'guildId': 0,
                    'secondaryButton': 0,
                    'onClose': 0
                };
                var9 = null;
                var22 = var2;
                var21 = null;
                var1 = silentSetPrototypeOf(var22, var21);
                var22 = {};
                var21 = var3;
                var20 = var2;
                var4 = copyDataProperties(var22, var21, var20);
                var3 = undefined;
                var _closure2_slot2 = var3;
                var _closure2_slot3 = var3;
                var2 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 6;
                var1 = var5[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.useCurrentUserGuildJoinRequest;
                var1 = var1.bind(var2)(var12);
                var2 = var9 == var1;
                var14 = undefined;
                if (var2) {
                    _fun60132_ip = 126;
                    continue _fun60132
                }
            case 120:
                var14 = var1.rejectionReason;
            case 126:
                var5 = _closure1_slot0;
                var15 = _closure1_slot2;
                var2 = 7;
                var1 = var15[var2];
                var13 = var5.bind(var3)(var1);
                var11 = var13.useStateFromStores;
                var1 = _closure1_slot6;
                var10 = new Array(1);
                var10[0] = var1;
                var1 = function() { // Environment: var0
                    _fun60133: for (var _fun60133_ip = 0;;) switch (_fun60133_ip) {
                        case 0:
                            var1 = _closure1_slot6;
                            var0 = var1.getCurrentUser;
                            var1 = var0.bind(var1)();
                            var0 = null;
                            var2 = var0 == var1;
                            var0 = undefined;
                            if (var2) {
                                _fun60133_ip = 32;
                                continue _fun60133
                            }
                        case 27:
                            var0 = var1.id;
                        case 32:
                            return var0;
                    }
                };
                var1 = var11.bind(var13)(var10, var1);
                _closure2_slot2 = var1;
                var10 = 8;
                var10 = var15[var10];
                var11 = var5.bind(var3)(var10);
                var10 = var11.useCanReapplyToRejectedMemberVerificationApplication;
                var11 = var10.bind(var11)(var12);
                var10 = var11.canReapply;
                var13 = var11.isLoading;
                var11 = var15[var2];
                var19 = var5.bind(var3)(var11);
                var18 = var19.useStateFromStores;
                var11 = _closure1_slot7;
                var17 = new Array(1);
                var17[0] = var11;
                var16 = new Array(1);
                var16[0] = var12;
                var11 = function() { // Environment: var0
                    var2 = _closure1_slot7;
                    var1 = var2.getJoinRequestGuild;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var11 = var18.bind(var19)(var17, var11, var16);
                var2 = var15[var2];
                var16 = var5.bind(var3)(var2);
                var15 = var16.useStateFromStores;
                var2 = _closure1_slot5;
                var5 = new Array(1);
                var5[0] = var2;
                var2 = new Array(2);
                var2[0] = var1;
                var2[1] = var12;
                var1 = function() { // Environment: var0
                    _fun60135: for (var _fun60135_ip = 0;;) switch (_fun60135_ip) {
                        case 0:
                            var2 = _closure2_slot2;
                            var0 = null;
                            var2 = var0 != var2;
                            if (!var2) {
                                _fun60135_ip = 43;
                                continue _fun60135
                            }
                        case 16:
                            var4 = _closure1_slot5;
                            var3 = var4.getMember;
                            var2 = _closure2_slot0;
                            var1 = _closure2_slot2;
                            var0 = var3.bind(var4)(var2, var1);
                        case 43:
                            return var0;
                    }
                };
                var15 = var15.bind(var16)(var5, var1, var2);
                _closure2_slot3 = var15;
                var5 = _closure1_slot4;
                var2 = var5.useCallback;
                var1 = _closure1_slot3;
                var0 = function*() { // Environment: var0
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun60137: for (var _fun60137_ip = 0;;) switch (_fun60137_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun60137_ip = 203;
                                    continue _fun60137
                                }
                            case 10:
                                var1 = _closure2_slot3;
                                var4 = null;
                                if (!(var4 != var1)) {
                                    _fun60137_ip = 36;
                                    continue _fun60137
                                }
                            case 23:
                                var1 = _closure2_slot3;
                                var1 = var1.isPending;
                                if (var1) {
                                    _fun60137_ip = 89;
                                    continue _fun60137
                                }
                            case 36:
                                var5 = _closure1_slot1;
                                var2 = _closure1_slot2;
                                var1 = 9;
                                var2 = var2[var1];
                                var1 = undefined;
                                var5 = var5.bind(var1)(var2);
                                var2 = var5.resetGuildJoinRequest;
                                var1 = _closure2_slot0;
                                var1 = var2.bind(var5)(var1);
                                SaveGenerator(address = 80);
                            case 78:
                                return var1;
                            case 80:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                                if (!var2) {
                                    _fun60137_ip = 139;
                                    continue _fun60137
                                }
                            case 86:
                                return var1;
                            case 89:
                                var5 = _closure1_slot1;
                                var2 = _closure1_slot2;
                                var1 = 9;
                                var2 = var2[var1];
                                var1 = undefined;
                                var5 = var5.bind(var1)(var2);
                                var2 = var5.removeGuildJoinRequest;
                                var1 = _closure2_slot0;
                                var1 = var2.bind(var5)(var1);
                                SaveGenerator(address = 133);
                            case 131:
                                return var1;
                            case 133:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                                if (var2) {
                                    _fun60137_ip = 200;
                                    continue _fun60137
                                }
                            case 139:
                                var2 = _closure2_slot1;
                                if (!(var4 != var2)) {
                                    _fun60137_ip = 157;
                                    continue _fun60137
                                }
                            case 147:
                                var4 = _closure2_slot1;
                                var2 = undefined;
                                var2 = var4.bind(var2)();
                            case 157:
                                var5 = _closure1_slot0;
                                var4 = _closure1_slot2;
                                var2 = 10;
                                var4 = var4[var2];
                                var2 = undefined;
                                var5 = var5.bind(var2)(var4);
                                var4 = var5.openMemberVerificationModal;
                                var3 = _closure2_slot0;
                                var3 = var4.bind(var5)(var3);
                                return var2;
                            case 200:
                                return var1;
                            case 203:
                                return var0;
                        }
                    };
                    return var0;
                };
                var1 = var1.bind(var3)(var0);
                var0 = new Array(3);
                var0[0] = var12;
                var16 = var9 == var15;
                var12 = undefined;
                if (var16) {
                    _fun60132_ip = 359;
                    continue _fun60132
                }
            case 353:
                var12 = var15.isPending;
            case 359:
                var0[1] = var12;
                var0[2] = var6;
                var12 = var2.bind(var5)(var1, var0);
                var1 = var9 == var11;
                var0 = undefined;
                if (var1) {
                    _fun60132_ip = 387;
                    continue _fun60132
                }
            case 382:
                var0 = var11.name;
            case 387:
                if (!(var9 == var0)) {
                    _fun60132_ip = 450;
                    continue _fun60132
                }
            case 391:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 11;
                var1 = var6[var0];
                var1 = var5.bind(var3)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var6[var0];
                var0 = var5.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0.gBPcuP;
                var6 = var1.bind(var2)(var0);
                _fun60132_ip = 520;
                continue _fun60132;
            case 450:
                var1 = _closure1_slot0;
                var15 = _closure1_slot2;
                var0 = 11;
                var2 = var15[var0];
                var2 = var1.bind(var3)(var2);
                var5 = var2.intl;
                var2 = var5.formatToPlainString;
                var0 = var15[var0];
                var0 = var1.bind(var3)(var0);
                var0 = var0.t;
                var1 = var0["P+/gzA"];
                var0 = {};
                var11 = var11.name;
                var0.guildName = var11;
                var6 = var2.bind(var5)(var1, var0);
            case 520:
                var0 = var9 != var14;
                var5 = undefined;
                if (!var0) {
                    _fun60132_ip = 602;
                    continue _fun60132
                }
            case 529:
                var0 = '';
                var5 = undefined;
                if (!(var0 !== var14)) {
                    _fun60132_ip = 602;
                    continue _fun60132
                }
            case 539:
                var1 = _closure1_slot0;
                var15 = _closure1_slot2;
                var0 = 11;
                var2 = var15[var0];
                var2 = var1.bind(var3)(var2);
                var11 = var2.intl;
                var2 = var11.formatToPlainString;
                var0 = var15[var0];
                var0 = var1.bind(var3)(var0);
                var0 = var0.t;
                var1 = var0.fU5PPM;
                var0 = {};
                var0.rejectionReason = var14;
                var5 = var2.bind(var11)(var1, var0);
            case 602:
                var2 = _closure1_slot8;
                var1 = _closure1_slot1;
                var14 = _closure1_slot2;
                var0 = 12;
                var0 = var14[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var22 = var0;
                var21 = var4;
                var4 = copyDataProperties(var22, var21);
                var11 = _closure1_slot0;
                var4 = 13;
                var4 = var14[var4];
                var4 = var11.bind(var3)(var4);
                var11 = var4.XSmallIcon;
                var4 = 'icon';
                var0[var4] = var11;
                var4 = 'header';
                var0[var4] = var6;
                var4 = 'subtitle';
                var0[var4] = var5;
                var6 = _closure1_slot10;
                var5 = _closure1_slot9;
                var4 = {};
                if (var10) {
                    _fun60132_ip = 705;
                    continue _fun60132
                }
            case 700:
                var9 = null;
                if (!var13) {
                    _fun60132_ip = 817;
                    continue _fun60132
                }
            case 705:
                var11 = _closure1_slot8;
                var16 = _closure1_slot0;
                var17 = _closure1_slot2;
                var7 = 14;
                var7 = var17[var7];
                var7 = var16.bind(var3)(var7);
                var10 = var7.Button;
                var7 = {};
                var7.loading = var13;
                var7.disabled = var13;
                var13 = 'secondary';
                var7.variant = var13;
                var13 = 11;
                var14 = var17[var13];
                var14 = var16.bind(var3)(var14);
                var15 = var14.intl;
                var14 = var15.string;
                var13 = var17[var13];
                var13 = var16.bind(var3)(var13);
                var13 = var13.t;
                var13 = var13.rpFCLs;
                var13 = var14.bind(var15)(var13);
                var7.text = var13;
                var7.onPress = var12;
                var9 = var11.bind(var3)(var10, var7);
            case 817:
                var7 = new Array(2);
                var7[0] = var9;
                var7[1] = var8;
                var4.children = var7;
                var5 = var6.bind(var3)(var5, var4);
                var4 = 'buttons';
                var0[var4] = var5;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 31, 1681, 1621, 3216, 33, 7456, 566, 7457, 7446, 7470, 1234, 7451, 4735, 4085, 2]);