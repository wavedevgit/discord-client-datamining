// modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionsEnableMonetization.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var7 = metroImportAll;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var7;
    var _closure1_slot3 = var5;
    var0 = function arg0() {
        var0 = arg0;
        var6 = var0.handleCreateTeamClick;
        var12 = var0.isGuildOwner;
        var0 = _closure1_slot20;
        var3 = undefined;
        var10 = var0.bind(var3)();
        var2 = _closure1_slot17;
        var1 = _closure1_slot7;
        var0 = {};
        var9 = _closure1_slot1;
        var11 = _closure1_slot3;
        var8 = 13;
        var4 = var11[var8];
        var5 = var9.bind(var3)(var4);
        var4 = {};
        var12 = !var12;
        var4.disabled = var12;
        var10 = var10.button;
        var4.style = var10;
        var8 = var11[var8];
        var8 = var9.bind(var3)(var8);
        var8 = var8.Colors;
        var8 = var8.BRAND;
        var4.color = var8;
        var10 = _closure1_slot0;
        var7 = 14;
        var8 = var11[var7];
        var8 = var10.bind(var3)(var8);
        var9 = var8.intl;
        var8 = var9.string;
        var7 = var11[var7];
        var7 = var10.bind(var3)(var7);
        var7 = var7.t;
        var7 = var7["5k6FfR"];
        var7 = var8.bind(var9)(var7);
        var4.text = var7;
        var4.onPress = var6;
        var4 = var2.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot21 = var0;
    var0 = function arg0() {
        _fun116699: for (var _fun116699_ip = 0;;) switch (_fun116699_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.guild;
                var _closure2_slot0 = var1;
                var7 = var0.teams;
                var _closure2_slot1 = var7;
                var17 = var0.isGuildOwner;
                var0 = _closure1_slot20;
                var3 = undefined;
                var11 = var0.bind(var3)();
                var1 = _closure1_slot0;
                var13 = _closure1_slot3;
                var0 = 15;
                var0 = var13[var0];
                var2 = var1.bind(var3)(var0);
                var0 = var2.useNavigation;
                var0 = var0.bind(var2)();
                var _closure2_slot2 = var0;
                var2 = _closure1_slot6;
                var0 = var2.useState;
                var4 = var0.bind(var2)();
                var2 = _closure1_slot5;
                var0 = 2;
                var2 = var2.bind(var3)(var4, var0);
                var8 = 0;
                var19 = var2[var8];
                var _closure2_slot3 = var19;
                var0 = 1;
                var0 = var2[var0];
                var _closure2_slot4 = var0;
                var5 = _closure1_slot1;
                var0 = 16;
                var0 = var13[var0];
                var0 = var5.bind(var3)(var0);
                var0 = var0.bind(var3)();
                var2 = var0.enableGuildMonetizationForTeam;
                var _closure2_slot5 = var2;
                var14 = var0.submitting;
                var0 = 17;
                var0 = var13[var0];
                var2 = var1.bind(var3)(var0);
                var0 = var2.useFetchSubscriptionsSettings;
                var0 = var0.bind(var2)();
                var0 = var0.fetchSubscriptionsSettings;
                var _closure2_slot6 = var0;
                var0 = 18;
                var0 = var13[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.useRoleSubscriptionSettingsDisabled;
                var18 = var0.bind(var1)();
                var0 = function() { // Environment: var9
                    var3 = _closure1_slot4;
                    var2 = undefined;
                    var1 = function*() { // Environment: var0
                        var0 = function*() { // Original name: ?anon_0_, environment: var0
                            _fun116702: for (var _fun116702_ip = 0;;) switch (_fun116702_ip) {
                                case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                    if (var1) {
                                        _fun116702_ip = 164;
                                        continue _fun116702
                                    }
                                case 10:
                                    var2 = _closure1_slot1;
                                    var3 = _closure1_slot3;
                                    var1 = 19;
                                    var1 = var3[var1];
                                    var3 = undefined;
                                    var7 = var2.bind(var3)(var1);
                                    var1 = _closure2_slot3;
                                    var2 = null;
                                    var6 = var2 != var1;
                                    var2 = 'handleEnableMonetization must only be called if the selectedTeam != null ';
                                    var2 = var7.bind(var3)(var6, var2);
                                    var7 = _closure2_slot5;
                                    var6 = _closure2_slot0;
                                    var2 = var1.id;
                                    var1 = _closure1_slot15;
                                    var1 = var1.GUILD_ROLE_SUBSCRIPTIONS;
                                    var1 = var7.bind(var3)(var6, var2, var1);
                                    SaveGenerator(address = 94);
                                case 92:
                                    return var1;
                                case 94:
                                    ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                                    if (var2) {
                                        _fun116702_ip = 161;
                                        continue _fun116702
                                    }
                                case 100:
                                    if (!var1) {
                                        _fun116702_ip = 155;
                                        continue _fun116702
                                    }
                                case 103:
                                    var6 = _closure2_slot6;
                                    var2 = _closure2_slot0;
                                    var2 = var2.id;
                                    var2 = var6.bind(var3)(var2);
                                    SaveGenerator(address = 125);
                                case 123:
                                    return var2;
                                case 125:
                                    ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 6);
                                    if (var6) {
                                        _fun116702_ip = 158;
                                        continue _fun116702
                                    }
                                case 131:
                                    var6 = _closure2_slot2;
                                    var5 = var6.replace;
                                    var4 = _closure1_slot12;
                                    var4 = var4.ROLE_SUBSCRIPTIONS_TIERS;
                                    var4 = var5.bind(var6)(var4);
                                case 155:
                                    return var3;
                                case 158:
                                    return var2;
                                case 161:
                                    return var1;
                                case 164:
                                    return var0;
                            }
                        };
                        return var0;
                    };
                    var1 = var3.bind(var2)(var1);
                    var _closure3_slot0 = var1;
                    var0 = function() { // Environment: var0
                        var0 = undefined;
                        var3 = _closure3_slot0;
                        var2 = var3.apply;
                        var0 = arguments;
                        var1 = var0;
                        var0 = this;
                        var0 = var2.bind(var3)(var0, var1);
                        return var0;
                    };
                    return var0;
                };
                var10 = var0.bind(var3)();
                var2 = _closure1_slot19;
                var1 = _closure1_slot18;
                var0 = {};
                var6 = _closure1_slot17;
                var4 = 20;
                var4 = var13[var4];
                var5 = var5.bind(var3)(var4);
                var4 = {};
                var9 = function() {
                    var3 = _closure1_slot1;
                    var10 = _closure1_slot3;
                    var0 = 21;
                    var2 = var10[var0];
                    var0 = undefined;
                    var5 = var3.bind(var0)(var2);
                    var4 = var5.openLazy;
                    var9 = _closure1_slot0;
                    var1 = 23;
                    var1 = var10[var1];
                    var3 = var9.bind(var0)(var1);
                    var1 = 22;
                    var2 = var10[var1];
                    var1 = var10.paths;
                    var3 = var3.bind(var0)(var2, var1);
                    var2 = {};
                    var1 = 14;
                    var7 = var10[var1];
                    var7 = var9.bind(var0)(var7);
                    var8 = var7.intl;
                    var7 = var8.string;
                    var1 = var10[var1];
                    var1 = var9.bind(var0)(var1);
                    var1 = var1.t;
                    var1 = var1.QXf93A;
                    var1 = var7.bind(var8)(var1);
                    var2.title = var1;
                    var9 = _closure2_slot1;
                    var8 = var9.map;
                    var7 = function(arg0) { // Environment: var6
                        var1 = arg0;
                        var0 = {};
                        var2 = var1.name;
                        var0.label = var2;
                        var0.value = var1;
                        return var0;
                    };
                    var7 = var8.bind(var9)(var7);
                    var2.items = var7;
                    var6 = function arg0() {
                        var2 = _closure2_slot4;
                        var0 = undefined;
                        var1 = arg0;
                        var1 = var2.bind(var0)(var1);
                        var2 = _closure1_slot1;
                        var3 = _closure1_slot3;
                        var1 = 21;
                        var1 = var3[var1];
                        var2 = var2.bind(var0)(var1);
                        var1 = var2.hideActionSheet;
                        var1 = var1.bind(var2)();
                        return var0;
                    };
                    var2.onItemSelect = var6;
                    var1 = _closure2_slot3;
                    var2.selectedItem = var1;
                    var1 = 'GuildRoleSubscriptionTeamSelect';
                    var1 = var4.bind(var5)(var3, var1, var2);
                    return var0;
                };
                var4.onPress = var9;
                var7 = var7.length;
                var7 = var8 === var7;
                if (var7) {
                    _fun116699_ip = 279;
                    continue _fun116699
                }
            case 276:
                var7 = var18;
            case 279:
                if (var7) {
                    _fun116699_ip = 285;
                    continue _fun116699
                }
            case 282:
                var7 = !var17;
            case 285:
                var4.disabled = var7;
                var13 = _closure1_slot0;
                var7 = _closure1_slot3;
                var15 = 14;
                var8 = var7[var15];
                var8 = var13.bind(var3)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var7 = var7[var15];
                var7 = var13.bind(var3)(var7);
                var7 = var7.t;
                var7 = var7.QXf93A;
                var7 = var8.bind(var9)(var7);
                var4.placeholder = var7;
                var16 = null;
                var8 = var16 == var19;
                var7 = undefined;
                if (var8) {
                    _fun116699_ip = 365;
                    continue _fun116699
                }
            case 360:
                var7 = var19.name;
            case 365:
                var4.label = var7;
                var5 = var6.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var7 = _closure1_slot17;
                var6 = _closure1_slot7;
                var5 = {};
                var9 = _closure1_slot1;
                var8 = _closure1_slot3;
                var13 = 13;
                var8 = var8[var13];
                var9 = var9.bind(var3)(var8);
                var8 = {};
                var16 = var16 == var19;
                if (var16) {
                    _fun116699_ip = 425;
                    continue _fun116699
                }
            case 422:
                var16 = var18;
            case 425:
                if (var16) {
                    _fun116699_ip = 431;
                    continue _fun116699
                }
            case 428:
                var16 = !var17;
            case 431:
                var8.disabled = var16;
                var8.loading = var14;
                var11 = var11.button;
                var8.style = var11;
                var14 = _closure1_slot1;
                var11 = _closure1_slot3;
                var13 = var11[var13];
                var13 = var14.bind(var3)(var13);
                var13 = var13.Colors;
                var13 = var13.BRAND;
                var8.color = var13;
                var14 = _closure1_slot0;
                var12 = var11[var15];
                var12 = var14.bind(var3)(var12);
                var13 = var12.intl;
                var12 = var13.string;
                var11 = var11[var15];
                var11 = var14.bind(var3)(var11);
                var11 = var11.t;
                var11 = var11["9HU3ZV"];
                var11 = var12.bind(var13)(var11);
                var8.text = var11;
                var8.onPress = var10;
                var8 = var7.bind(var3)(var9, var8);
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot22 = var0;
    var0 = function arg0() {
        _fun116707: for (var _fun116707_ip = 0;;) switch (_fun116707_ip) {
            case 0:
                var0 = arg0;
                var12 = var0.guild;
                var _closure2_slot0 = var12;
                var4 = undefined;
                var _closure2_slot2 = var4;
                var _closure2_slot3 = var4;
                var0 = _closure1_slot20;
                var16 = var0.bind(var4)();
                var3 = _closure1_slot1;
                var7 = _closure1_slot3;
                var0 = 24;
                var0 = var7[var0];
                var0 = var3.bind(var4)(var0);
                var14 = var0.bind(var4)();
                var5 = _closure1_slot0;
                var0 = 25;
                var6 = var7[var0];
                var10 = var5.bind(var4)(var6);
                var9 = var10.useStateFromStores;
                var6 = _closure1_slot11;
                var8 = new Array(1);
                var8[0] = var6;
                var6 = function() { // Environment: var2
                    var1 = _closure1_slot11;
                    var0 = var1.getState;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var8 = var9.bind(var10)(var8, var6);
                var6 = _closure1_slot13;
                var6 = var6.ACTIVE;
                var6 = var8 === var6;
                var0 = var7[var0];
                var10 = var5.bind(var4)(var0);
                var9 = var10.useStateFromStores;
                var0 = _closure1_slot10;
                var8 = new Array(1);
                var8[0] = var0;
                var0 = function() { // Environment: var2
                    var1 = _closure1_slot10;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var8 = var9.bind(var10)(var8, var0);
                var0 = _closure1_slot8;
                var10 = var0.bind(var4)(var12, var8);
                var _closure2_slot1 = var10;
                var0 = 26;
                var0 = var7[var0];
                var5 = var5.bind(var4)(var0);
                var0 = var5.useIsFocused;
                var5 = var0.bind(var5)();
                var0 = 27;
                var0 = var7[var0];
                var3 = var3.bind(var4)(var0);
                var0 = {};
                if (!var5) {
                    _fun116707_ip = 214;
                    continue _fun116707
                }
            case 211:
                var5 = var6;
            case 214:
                var0.refreshOnDepChange = var5;
                var3 = var3.bind(var4)(var0);
                var0 = var3.loading;
                var6 = var3.teams;
                var5 = var6.filter;
                var3 = function(arg0) { // Environment: var2
                    var0 = arg0;
                    var1 = var0.payout_account_status;
                    var0 = _closure1_slot16;
                    var0 = var0.BLOCKED;
                    var0 = var1 !== var0;
                    return var0;
                };
                var11 = var5.bind(var6)(var3);
                var5 = var11.length;
                var3 = 0;
                var6 = var5 > var3;
                _closure2_slot2 = var6;
                var8 = _closure1_slot6;
                var7 = var8.useCallback;
                var5 = _closure1_slot4;
                var3 = function*() { // Environment: var2
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun116712: for (var _fun116712_ip = 0;;) switch (_fun116712_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun116712_ip = 247;
                                    continue _fun116712
                                }
                            case 10:
                                var1 = _closure2_slot1;
                                if (!var1) {
                                    _fun116712_ip = 242;
                                    continue _fun116712
                                }
                            case 23:
                                var3 = _closure1_slot1;
                                var4 = _closure1_slot3;
                                var2 = 28;
                                var2 = var4[var2];
                                var7 = undefined;
                                var5 = var3.bind(var7)(var2);
                                var4 = var5.track;
                                var2 = _closure1_slot14;
                                var3 = var2.GUILD_ROLE_SUBSCRIPTION_TEAM_SETUP_CLICKED;
                                var2 = {};
                                var8 = true;
                                var2.is_onboarding_v2 = var8;
                                var8 = _closure2_slot2;
                                var2.has_eligible_team = var8;
                                var8 = _closure2_slot0;
                                var8 = var8.id;
                                var2.guild_id = var8;
                                var6 = _closure2_slot1;
                                var2.is_owner = var6;
                                var2 = var4.bind(var5)(var3, var2);
                            case 113: // try_start_0
                                var3 = _closure1_slot1;
                                var4 = _closure1_slot3;
                                var2 = 29;
                                var2 = var4[var2];
                                var3 = var3.bind(var7)(var2);
                                var2 = var3.performRoleSubscriptionTeamCreationRedirect;
                                var2 = var2.bind(var3)();
                                SaveGenerator(address = 147);
                            case 145:
                                return var2;
                            case 147:
                                ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                                if (var3) {
                                    _fun116712_ip = 155;
                                    continue _fun116712
                                }
                            case 153: // try_end0
                                _fun116712_ip = 242;
                                continue _fun116712;
                            case 155:
                                return var2;
                            case 158: // catch_target0
                                CatchBlockStart(arg_register = 2);
                                var3 = _closure1_slot2;
                                var8 = _closure1_slot3;
                                var2 = 30;
                                var2 = var8[var2];
                                var3 = var3.bind(var7)(var2);
                                var2 = var3.presentFailedToast;
                                var6 = _closure1_slot0;
                                var1 = 14;
                                var4 = var8[var1];
                                var4 = var6.bind(var7)(var4);
                                var5 = var4.intl;
                                var4 = var5.string;
                                var1 = var8[var1];
                                var1 = var6.bind(var7)(var1);
                                var1 = var1.t;
                                var1 = var1.R0RpRX;
                                var1 = var4.bind(var5)(var1);
                                var1 = var2.bind(var3)(var1);
                            case 242:
                                var1 = undefined;
                                return var1;
                            case 247:
                                return var0;
                        }
                    };
                    return var0;
                };
                var5 = var5.bind(var4)(var3);
                var3 = new Array(3);
                var3[0] = var12;
                var3[1] = var6;
                var3[2] = var10;
                var8 = var7.bind(var8)(var5, var3);
                _closure2_slot3 = var8;
                var7 = _closure1_slot6;
                var5 = var7.useCallback;
                var3 = new Array(2);
                var3[0] = var8;
                var3[1] = var10;
                var2 = function(arg0) { // Environment: var2
                    _fun116713: for (var _fun116713_ip = 0;;) switch (_fun116713_ip) {
                        case 0:
                            var5 = arg0;
                            var1 = _closure2_slot1;
                            var0 = var5;
                            if (!var1) {
                                _fun116713_ip = 82;
                                continue _fun116713
                            }
                        case 16:
                            var4 = _closure1_slot17;
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot3;
                            var1 = 31;
                            var1 = var3[var1];
                            var3 = undefined;
                            var1 = var2.bind(var3)(var1);
                            var2 = var1.Text;
                            var1 = {
                                'variant': 'text-sm/medium',
                                'color': 'text-link'
                            };
                            var6 = _closure2_slot3;
                            var1.onPress = var6;
                            var1.children = var5;
                            var0 = var4.bind(var3)(var2, var1);
                        case 82:
                            return var0;
                    }
                };
                var18 = var5.bind(var7)(var2, var3);
                if (var0) {
                    _fun116707_ip = 783;
                    continue _fun116707
                }
            case 359:
                var3 = _closure1_slot19;
                var2 = _closure1_slot7;
                var0 = {};
                var5 = var16.container;
                var0.style = var5;
                var7 = !var10;
                if (!var7) {
                    _fun116707_ip = 484;
                    continue _fun116707
                }
            case 384:
                var13 = _closure1_slot17;
                var9 = _closure1_slot1;
                var21 = _closure1_slot3;
                var5 = 33;
                var5 = var21[var5];
                var9 = var9.bind(var4)(var5);
                var5 = {};
                var15 = var16.nonOwnerNotice;
                var5.style = var15;
                var20 = _closure1_slot0;
                var15 = 14;
                var17 = var21[var15];
                var17 = var20.bind(var4)(var17);
                var19 = var17.intl;
                var17 = var19.string;
                var15 = var21[var15];
                var15 = var20.bind(var4)(var15);
                var15 = var15.t;
                var15 = var15.t56qWO;
                var15 = var17.bind(var19)(var15);
                var5.notice = var15;
                var7 = var13.bind(var4)(var9, var5);
            case 484:
                var5 = new Array(4);
                var5[0] = var7;
                var13 = _closure1_slot17;
                var9 = _closure1_slot1;
                var19 = _closure1_slot3;
                var7 = 34;
                var7 = var19[var7];
                var9 = var9.bind(var4)(var7);
                var7 = {};
                var14 = var14.header;
                var7.style = var14;
                var15 = _closure1_slot0;
                var14 = 14;
                var17 = var19[var14];
                var17 = var15.bind(var4)(var17);
                var21 = var17.intl;
                var20 = var21.string;
                var17 = var19[var14];
                var17 = var15.bind(var4)(var17);
                var17 = var17.t;
                var17 = var17["sYLCY/"];
                var17 = var20.bind(var21)(var17);
                var7.children = var17;
                var7 = var13.bind(var4)(var9, var7);
                var5[1] = var7;
                var13 = _closure1_slot17;
                var7 = 31;
                var7 = var19[var7];
                var7 = var15.bind(var4)(var7);
                var9 = var7.Text;
                var7 = {
                    'style': null,
                    'variant': 'text-sm/medium',
                    'color': 'text-default'
                };
                var16 = var16.description;
                var7.style = var16;
                var16 = var19[var14];
                var16 = var15.bind(var4)(var16);
                var17 = var16.intl;
                var16 = var17.format;
                var14 = var19[var14];
                var14 = var15.bind(var4)(var14);
                var14 = var14.t;
                var15 = var14["5mfqpW"];
                var14 = {};
                var14.onCreateTeamHook = var18;
                var14 = var16.bind(var17)(var15, var14);
                var7.children = var14;
                var7 = var13.bind(var4)(var9, var7);
                var5[2] = var7;
                var9 = _closure1_slot17;
                if (var6) {
                    _fun116707_ip = 741;
                    continue _fun116707
                }
            case 717:
                var7 = _closure1_slot21;
                var6 = {};
                var6.handleCreateTeamClick = var8;
                var6.isGuildOwner = var10;
                var6 = var9.bind(var4)(var7, var6);
                _fun116707_ip = 767;
                continue _fun116707;
            case 741:
                var8 = _closure1_slot22;
                var7 = {};
                var7.guild = var12;
                var7.teams = var11;
                var7.isGuildOwner = var10;
                var6 = var9.bind(var4)(var8, var7);
            case 767:
                var5[3] = var6;
                var0.children = var5;
                var0 = var3.bind(var4)(var2, var0);
                _fun116707_ip = 815;
                continue _fun116707;
            case 783:
                var3 = _closure1_slot17;
                var2 = _closure1_slot1;
                var5 = _closure1_slot3;
                var1 = 32;
                var1 = var5[var1];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var0 = var3.bind(var4)(var2, var1);
            case 815:
                return var0;
        }
    };
    var _closure1_slot23 = var0;
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var9 = 1;
    var3 = var5[var9];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.isGuildOwner;
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.GuildSettingsSections;
    var _closure1_slot12 = var6;
    var6 = var3.AppStates;
    var _closure1_slot13 = var6;
    var3 = var3.AnalyticEvents;
    var _closure1_slot14 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ApplicationTypes;
    var _closure1_slot15 = var3;
    var3 = 10;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.PayoutAccountStatuses;
    var _closure1_slot16 = var3;
    var3 = 11;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot17 = var6;
    var6 = var3.Fragment;
    var _closure1_slot18 = var6;
    var3 = var3.jsxs;
    var _closure1_slot19 = var3;
    var3 = 12;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var8.flex = var9;
    var3.container = var8;
    var8 = {};
    var9 = 16;
    var8.margin = var9;
    var3.button = var8;
    var8 = {
        'paddingHorizontal': 16,
        'marginBottom': 16
    };
    var3.description = var8;
    var8 = {};
    var8.marginTop = var9;
    var3.teamDropdown = var8;
    var8 = {
        'marginTop': 16,
        'marginHorizontal': 16
    };
    var3.nonOwnerNotice = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot20 = var3;
    var3 = 37;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionsEnableMonetization.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun116714: for (var _fun116714_ip = 0;;) switch (_fun116714_ip) {
            case 0:
                var1 = arg0;
                var6 = var1.guildId;
                var _closure2_slot0 = var6;
                var3 = _closure1_slot0;
                var5 = _closure1_slot3;
                var2 = 25;
                var7 = var5[var2];
                var4 = undefined;
                var10 = var3.bind(var4)(var7);
                var9 = var10.useStateFromStores;
                var7 = _closure1_slot9;
                var8 = new Array(1);
                var8[0] = var7;
                var7 = function() { // Environment: var0
                    var2 = _closure1_slot9;
                    var1 = var2.getGuild;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var9 = var9.bind(var10)(var8, var7);
                var2 = var5[var2];
                var5 = var3.bind(var4)(var2);
                var3 = var5.useStateFromStores;
                var7 = _closure1_slot10;
                var2 = new Array(1);
                var2[0] = var7;
                var0 = function() { // Environment: var0
                    var1 = _closure1_slot10;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var5 = var3.bind(var5)(var2, var0);
                var3 = null;
                var2 = var3 != var9;
                if (!var2) {
                    _fun116714_ip = 127;
                    continue _fun116714
                }
            case 117:
                var0 = _closure1_slot8;
                var2 = var0.bind(var4)(var9, var5);
            case 127:
                var5 = _closure1_slot0;
                var7 = _closure1_slot3;
                var0 = 35;
                var0 = var7[var0];
                var5 = var5.bind(var4)(var0);
                var0 = var5.useGuildEligibleForRoleSubscriptionsMobileTeamSetup;
                var0 = var0.bind(var5)(var9);
                if (!(var3 != var9)) {
                    _fun116714_ip = 472;
                    continue _fun116714
                }
            case 165:
                if (!var0) {
                    _fun116714_ip = 174;
                    continue _fun116714
                }
            case 168:
                if (var2) {
                    _fun116714_ip = 404;
                    continue _fun116714
                }
            case 174:
                var3 = _closure1_slot17;
                var5 = _closure1_slot1;
                var7 = _closure1_slot3;
                var2 = 36;
                var2 = var7[var2];
                var2 = var5.bind(var4)(var2);
                var5 = {};
                var7 = true;
                var5.brightTitle = var7;
                var11 = _closure1_slot0;
                var12 = _closure1_slot3;
                var7 = 14;
                var8 = var12[var7];
                var8 = var11.bind(var4)(var8);
                var13 = var8.intl;
                var10 = var13.string;
                var8 = var12[var7];
                var8 = var11.bind(var4)(var8);
                var8 = var8.t;
                if (var0) {
                    _fun116714_ip = 326;
                    continue _fun116714
                }
            case 254:
                var0 = var8.KeeWp0;
                var0 = var10.bind(var13)(var0);
                var5.title = var0;
                var0 = var12[var7];
                var0 = var11.bind(var4)(var0);
                var15 = var0.intl;
                var14 = var15.string;
                var0 = var12[var7];
                var0 = var11.bind(var4)(var0);
                var0 = var0.t;
                var0 = var0["tJLG+L"];
                var0 = var14.bind(var15)(var0);
                var5.description = var0;
                var0 = var5;
                _fun116714_ip = 396;
                continue _fun116714;
            case 326:
                var8 = var8["AY/rYq"];
                var8 = var10.bind(var13)(var8);
                var5.title = var8;
                var8 = var12[var7];
                var8 = var11.bind(var4)(var8);
                var10 = var8.intl;
                var8 = var10.string;
                var7 = var12[var7];
                var7 = var11.bind(var4)(var7);
                var7 = var7.t;
                var7 = var7.A65Cab;
                var7 = var8.bind(var10)(var7);
                var5.description = var7;
                var0 = var5;
            case 396:
                var0 = var3.bind(var4)(var2, var0);
                _fun116714_ip = 470;
                continue _fun116714;
            case 404:
                var5 = _closure1_slot17;
                var3 = _closure1_slot0;
                var7 = _closure1_slot3;
                var2 = 18;
                var2 = var7[var2];
                var2 = var3.bind(var4)(var2);
                var3 = var2.RoleSubscriptionSettingsDisabledContextProvider;
                var2 = {};
                var2.guildId = var6;
                var8 = _closure1_slot17;
                var7 = _closure1_slot23;
                var6 = {};
                var6.guild = var9;
                var6 = var8.bind(var4)(var7, var6);
                var2.children = var6;
                var0 = var5.bind(var4)(var3, var2);
            case 470:
                _fun116714_ip = 504;
                continue _fun116714;
            case 472:
                var3 = _closure1_slot17;
                var2 = _closure1_slot1;
                var5 = _closure1_slot3;
                var1 = 32;
                var1 = var5[var1];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var0 = var3.bind(var4)(var2, var1);
            case 504:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 27, 1416, 1410, 1621, 5288, 660, 3485, 14910, 33, 1297, 4875, 1234, 1469, 14911, 10826, 14913, 44, 12580, 3278, 5381, 1307, 12582, 566, 1470, 14915, 795, 5684, 3147, 3941, 14869, 14872, 5934, 5637, 13668, 2]);