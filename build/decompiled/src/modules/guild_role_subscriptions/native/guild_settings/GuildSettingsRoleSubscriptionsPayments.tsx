// modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionsPayments.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var6 = metroImportAll;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var _closure1_slot3 = var5;
    var0 = function arg0() {
        _fun117181: for (var _fun117181_ip = 0;;) switch (_fun117181_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.guild;
                var4 = undefined;
                var _closure2_slot0 = var4;
                var2 = _closure1_slot11;
                var5 = var2.bind(var4)();
                var3 = _closure1_slot0;
                var7 = _closure1_slot3;
                var2 = 8;
                var2 = var7[var2];
                var3 = var3.bind(var4)(var2);
                var2 = var3.useNavigation;
                var2 = var2.bind(var3)();
                var6 = _closure1_slot1;
                var3 = 9;
                var3 = var7[var3];
                var7 = var6.bind(var4)(var3);
                var6 = null;
                var9 = var6 == var0;
                var3 = undefined;
                if (var9) {
                    _fun117181_ip = 89;
                    continue _fun117181
                }
            case 84:
                var3 = var0.id;
            case 89:
                var0 = _closure1_slot9;
                var0 = var0.GUILD_ROLE_SUBSCRIPTIONS;
                var0 = var7.bind(var4)(var3, var0);
                var3 = var0.application;
                _closure2_slot0 = var3;
                var7 = var0.loading;
                var0 = var0.error;
                var11 = _closure1_slot5;
                var10 = var11.useCallback;
                var9 = _closure1_slot4;
                var8 = function*() { // Environment: var8
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun117183: for (var _fun117183_ip = 0;;) switch (_fun117183_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun117183_ip = 244;
                                    continue _fun117183
                                }
                            case 10:
                                var1 = undefined;
                                var3 = undefined;
                                var5 = undefined;
                            case 16: // try_start_0
                                var2 = _closure2_slot0;
                                var7 = null;
                                var4 = var7 == var2;
                                var2 = undefined;
                                if (var4) {
                                    _fun117183_ip = 61;
                                    continue _fun117183
                                }
                            case 34:
                                var4 = _closure2_slot0;
                                var4 = var4.team;
                                var3 = var4;
                                var4 = var7 == var4;
                                var2 = undefined;
                                if (var4) {
                                    _fun117183_ip = 61;
                                    continue _fun117183
                                }
                            case 56:
                                var2 = var3.id;
                            case 61:
                                if (!(var7 != var2)) {
                                    _fun117183_ip = 149;
                                    continue _fun117183
                                }
                            case 65:
                                var3 = _closure1_slot1;
                                var4 = _closure1_slot3;
                                var2 = 10;
                                var2 = var4[var2];
                                var4 = var3.bind(var1)(var2);
                                var3 = var4.performRoleSubscriptionEditPayoutRedirect;
                                var2 = _closure2_slot0;
                                var8 = var7 == var2;
                                var2 = undefined;
                                if (var8) {
                                    _fun117183_ip = 134;
                                    continue _fun117183
                                }
                            case 107:
                                var6 = _closure2_slot0;
                                var6 = var6.team;
                                var5 = var6;
                                var6 = var7 == var6;
                                var2 = undefined;
                                if (var6) {
                                    _fun117183_ip = 134;
                                    continue _fun117183
                                }
                            case 129:
                                var2 = var5.id;
                            case 134:
                                var2 = var3.bind(var4)(var2);
                                SaveGenerator(address = 143);
                            case 141:
                                return var2;
                            case 143:
                                ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                                if (var3) {
                                    _fun117183_ip = 151;
                                    continue _fun117183
                                }
                            case 149: // try_end0
                                _fun117183_ip = 241;
                                continue _fun117183;
                            case 151:
                                return var2;
                            case 154: // catch_target0
                                CatchBlockStart(arg_register = 2);
                                var4 = _closure1_slot2;
                                var8 = _closure1_slot3;
                                var3 = 11;
                                var3 = var8[var3];
                                var4 = var4.bind(var1)(var3);
                                var3 = var4.presentFailedToast;
                                var7 = _closure1_slot0;
                                var2 = 12;
                                var5 = var8[var2];
                                var5 = var7.bind(var1)(var5);
                                var6 = var5.intl;
                                var5 = var6.string;
                                var2 = var8[var2];
                                var2 = var7.bind(var1)(var2);
                                var2 = var2.t;
                                var2 = var2.R0RpRX;
                                var2 = var5.bind(var6)(var2);
                                var2 = var3.bind(var4)(var2);
                            case 241:
                                return var1;
                            case 244:
                                return var0;
                        }
                    };
                    return var0;
                };
                var9 = var9.bind(var4)(var8);
                var8 = var6 == var3;
                var12 = undefined;
                if (var8) {
                    _fun117181_ip = 165;
                    continue _fun117181
                }
            case 159:
                var12 = var3.team;
            case 165:
                var8 = new Array(1);
                var8[0] = var12;
                var11 = var10.bind(var11)(var9, var8);
                if (var7) {
                    _fun117181_ip = 497;
                    continue _fun117181
                }
            case 185:
                var0 = var6 == var0;
                if (!var0) {
                    _fun117181_ip = 196;
                    continue _fun117181
                }
            case 192:
                var0 = var6 != var3;
            case 196:
                if (var0) {
                    _fun117181_ip = 291;
                    continue _fun117181
                }
            case 199:
                var3 = _closure1_slot2;
                var10 = _closure1_slot3;
                var0 = 11;
                var0 = var10[var0];
                var6 = var3.bind(var4)(var0);
                var3 = var6.presentFailedToast;
                var9 = _closure1_slot0;
                var0 = 12;
                var7 = var10[var0];
                var7 = var9.bind(var4)(var7);
                var8 = var7.intl;
                var7 = var8.string;
                var0 = var10[var0];
                var0 = var9.bind(var4)(var0);
                var0 = var0.t;
                var0 = var0.R0RpRX;
                var0 = var7.bind(var8)(var0);
                var0 = var3.bind(var6)(var0);
                var0 = var2.pop;
                var0 = var0.bind(var2)();
            case 291:
                var3 = _closure1_slot10;
                var13 = _closure1_slot0;
                var15 = _closure1_slot3;
                var12 = 14;
                var0 = var15[var12];
                var0 = var13.bind(var4)(var0);
                var2 = var0.Form;
                var0 = {};
                var5 = var5.container;
                var0.style = var5;
                var7 = _closure1_slot10;
                var5 = var15[var12];
                var5 = var13.bind(var4)(var5);
                var6 = var5.FormSection;
                var5 = {};
                var10 = _closure1_slot10;
                var8 = var15[var12];
                var8 = var13.bind(var4)(var8);
                var9 = var8.FormRow;
                var8 = {};
                var14 = 12;
                var16 = var15[var14];
                var16 = var13.bind(var4)(var16);
                var17 = var16.intl;
                var16 = var17.string;
                var14 = var15[var14];
                var14 = var13.bind(var4)(var14);
                var14 = var14.t;
                var14 = var14.Lg8WE2;
                var14 = var16.bind(var17)(var14);
                var8.label = var14;
                var14 = _closure1_slot10;
                var12 = var15[var12];
                var12 = var13.bind(var4)(var12);
                var12 = var12.FormRow;
                var13 = var12.Arrow;
                var12 = {};
                var12 = var14.bind(var4)(var13, var12);
                var8.trailing = var12;
                var8.onPress = var11;
                var8 = var10.bind(var4)(var9, var8);
                var5.children = var8;
                var5 = var7.bind(var4)(var6, var5);
                var0.children = var5;
                var0 = var3.bind(var4)(var2, var0);
                _fun117181_ip = 529;
                continue _fun117181;
            case 497:
                var3 = _closure1_slot10;
                var2 = _closure1_slot1;
                var5 = _closure1_slot3;
                var1 = 13;
                var1 = var5[var1];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var0 = var3.bind(var4)(var2, var1);
            case 529:
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var7.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var10 = 1;
    var3 = var5[var10];
    var6 = var6.bind(var0)(var3);
    var _closure1_slot5 = var6;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.isGuildOwner;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ApplicationTypes;
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot10 = var3;
    var3 = 7;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {};
    var9.flex = var10;
    var3.container = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot11 = var3;
    var3 = var6.forwardRef;
    var1 = function(arg0) { // Environment: var1
        _fun117184: for (var _fun117184_ip = 0;;) switch (_fun117184_ip) {
            case 0:
                var1 = arg0;
                var1 = var1.guildId;
                var _closure2_slot0 = var1;
                var3 = _closure1_slot0;
                var6 = _closure1_slot3;
                var2 = 15;
                var5 = var6[var2];
                var4 = undefined;
                var9 = var3.bind(var4)(var5);
                var8 = var9.useStateFromStores;
                var5 = _closure1_slot7;
                var7 = new Array(1);
                var7[0] = var5;
                var5 = function() { // Environment: var0
                    var2 = _closure1_slot7;
                    var1 = var2.getGuild;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var5 = var8.bind(var9)(var7, var5);
                var2 = var6[var2];
                var6 = var3.bind(var4)(var2);
                var3 = var6.useStateFromStores;
                var7 = _closure1_slot8;
                var2 = new Array(1);
                var2[0] = var7;
                var0 = function() { // Environment: var0
                    var1 = _closure1_slot8;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var3 = var3.bind(var6)(var2, var0);
                var0 = null;
                var2 = var0 != var5;
                if (!var2) {
                    _fun117184_ip = 127;
                    continue _fun117184
                }
            case 117:
                var0 = _closure1_slot6;
                var2 = var0.bind(var4)(var5, var3);
            case 127:
                var3 = _closure1_slot0;
                var6 = _closure1_slot3;
                var0 = 16;
                var0 = var6[var0];
                var3 = var3.bind(var4)(var0);
                var0 = var3.useGuildEligibleForRoleSubscriptionsMobileTeamSetup;
                var0 = var0.bind(var3)(var5);
                if (!var2) {
                    _fun117184_ip = 167;
                    continue _fun117184
                }
            case 161:
                if (var0) {
                    _fun117184_ip = 315;
                    continue _fun117184
                }
            case 167:
                var3 = _closure1_slot10;
                var2 = _closure1_slot1;
                var10 = _closure1_slot3;
                var0 = 17;
                var0 = var10[var0];
                var2 = var2.bind(var4)(var0);
                var0 = {};
                var9 = _closure1_slot0;
                var6 = 12;
                var7 = var10[var6];
                var7 = var9.bind(var4)(var7);
                var11 = var7.intl;
                var8 = var11.string;
                var7 = var10[var6];
                var7 = var9.bind(var4)(var7);
                var7 = var7.t;
                var7 = var7.qAMb9K;
                var7 = var8.bind(var11)(var7);
                var0.title = var7;
                var7 = var10[var6];
                var7 = var9.bind(var4)(var7);
                var8 = var7.intl;
                var7 = var8.string;
                var6 = var10[var6];
                var6 = var9.bind(var4)(var6);
                var6 = var6.t;
                var6 = var6.pRuzXJ;
                var6 = var7.bind(var8)(var6);
                var0.description = var6;
                var6 = true;
                var0.brightTitle = var6;
                var0 = var3.bind(var4)(var2, var0);
                _fun117184_ip = 335;
                continue _fun117184;
            case 315:
                var3 = _closure1_slot10;
                var2 = _closure1_slot12;
                var1 = {};
                var1.guild = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 335:
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 18;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionsPayments.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 31, 1416, 1410, 1621, 3487, 33, 1297, 1469, 14874, 5688, 3149, 1234, 14875, 5383, 566, 5637, 13672, 2]);