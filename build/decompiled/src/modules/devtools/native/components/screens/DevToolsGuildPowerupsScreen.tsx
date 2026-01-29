// modules/devtools/native/components/screens/DevToolsGuildPowerupsScreen.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var5;
    var0 = function() { // Original name: setWarningBoosts, environment: var1
        var0 = undefined;
        var3 = _closure1_slot22;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot21 = var0;
    var0 = function() { // Original name: _setWarningBoosts, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0, arg1, arg2) { // Environment: var2
            var0 = function*(arg0, arg1, arg2) { // Original name: ?anon_0_, environment: var0
                _fun87344: for (var _fun87344_ip = 0;;) switch (_fun87344_ip) {
                    case 0:
                        StartGenerator();
                        var6 = arg0;
                        var10 = arg1;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun87344_ip = 237;
                            continue _fun87344
                        }
                    case 16:
                        var4 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 12;
                        var1 = var2[var1];
                        var2 = undefined;
                        var1 = var4.bind(var2)(var1);
                        var7 = var1.HTTP;
                        var4 = var7.patch;
                        var1 = {};
                        var5 = _closure1_slot17;
                        var5 = var5.APPLIED_BOOST_MODIFY_END_DATE;
                        var1.url = var5;
                        var5 = {};
                        var9 = var10.map;
                        var8 = function(arg0) { // Environment: var8
                            var0 = arg0;
                            var0 = var0.id;
                            return var0;
                        };
                        var8 = var9.bind(var10)(var8);
                        var5.applied_boost_ids = var8;
                        var9 = arg2;
                        var8 = null;
                        if (var9) {
                            _fun87344_ip = 146;
                            continue _fun87344
                        }
                    case 104:
                        var10 = _closure1_slot1;
                        var11 = _closure1_slot2;
                        var9 = 13;
                        var9 = var11[var9];
                        var9 = var10.bind(var2)(var9);
                        var12 = var9.bind(var2)();
                        var11 = var12.add;
                        var10 = 1;
                        var9 = 'day';
                        var8 = var11.bind(var12)(var10, var9);
                    case 146:
                        var5.ends_at = var8;
                        var1.body = var5;
                        var5 = true;
                        var1.rejectWithError = var5;
                        var1 = var4.bind(var7)(var1);
                        SaveGenerator(address = 170);
                    case 168:
                        return var1;
                    case 170:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                        if (var4) {
                            _fun87344_ip = 234;
                            continue _fun87344
                        }
                    case 176:
                        var4 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var3 = 14;
                        var3 = var7[var3];
                        var8 = var4.bind(var2)(var3);
                        var3 = var8.fetchAppliedGuildBoostsForGuild;
                        var3 = var3.bind(var8)(var6);
                        var3 = 15;
                        var3 = var7[var3];
                        var4 = var4.bind(var2)(var3);
                        var3 = var4.fetchGuildBoostEntitlements;
                        var3 = var3.bind(var4)(var6, var5);
                        return var2;
                    case 234:
                        return var1;
                    case 237:
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
    var0 = function() { // Original name: _sendPowerupsSystemMessage, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun87348: for (var _fun87348_ip = 0;;) switch (_fun87348_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun87348_ip = 94;
                            continue _fun87348
                        }
                    case 7:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 12;
                        var1 = var2[var1];
                        var2 = undefined;
                        var1 = var3.bind(var2)(var1);
                        var4 = var1.HTTP;
                        var3 = var4.post;
                        var1 = {};
                        var7 = _closure1_slot17;
                        var6 = var7.SEND_POWERUPS_SYSTEM_MESSAGE;
                        var5 = arg0;
                        var5 = var6.bind(var7)(var5);
                        var1.url = var5;
                        var5 = true;
                        var1.rejectWithError = var5;
                        var1 = var3.bind(var4)(var1);
                        SaveGenerator(address = 82);
                    case 80:
                        return var1;
                    case 82:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun87348_ip = 91;
                            continue _fun87348
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
        _closure1_slot23 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot23 = var0;
    var0 = function(arg0) { // Original name: UserDCSwitchRow, environment: var1
        var0 = arg0;
        var7 = var0.dc;
        var1 = _closure1_slot1;
        var8 = _closure1_slot2;
        var0 = 16;
        var0 = var8[var0];
        var3 = undefined;
        var0 = var1.bind(var3)(var0);
        var0 = var0.bind(var3)(var7);
        var5 = var0.isDismissed;
        var4 = var0.handleToggleDismissState;
        var2 = _closure1_slot18;
        var1 = _closure1_slot0;
        var0 = 17;
        var0 = var8[var0];
        var0 = var1.bind(var3)(var0);
        var1 = var0.TableSwitchRow;
        var0 = {};
        var6 = _closure1_slot16;
        var6 = var6.bind(var3)(var7);
        var0.label = var6;
        var0.value = var5;
        var0.onValueChange = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot24 = var0;
    var0 = function(arg0) { // Original name: GuildDCSwitchRow, environment: var1
        var1 = arg0;
        var7 = var1.dc;
        var _closure2_slot0 = var7;
        var4 = var1.guildId;
        var _closure2_slot1 = var4;
        var5 = var1.isDismissed;
        var3 = _closure1_slot4;
        var2 = var3.useCallback;
        var1 = new Array(2);
        var1[0] = var7;
        var1[1] = var4;
        var0 = function(arg0) { // Environment: var0
            _fun87351: for (var _fun87351_ip = 0;;) switch (_fun87351_ip) {
                case 0:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = arg0;
                    if (var0) {
                        _fun87351_ip = 103;
                        continue _fun87351
                    }
                case 17:
                    var0 = 19;
                    var0 = var1[var0];
                    var3 = undefined;
                    var5 = var2.bind(var3)(var0);
                    var4 = var5.removeDismissedRecurringContent;
                    var0 = 20;
                    var0 = var1[var0];
                    var0 = var2.bind(var3)(var0);
                    var0 = var0.DismissibleContent;
                    var0 = var0.GUILD_POWERUP_NOTIFICATION;
                    var0 = var4.bind(var5)(var0);
                    var0 = 18;
                    var0 = var1[var0];
                    var5 = var2.bind(var3)(var0);
                    var4 = var5.unmarkContentAsDismissed;
                    var3 = _closure2_slot0;
                    var0 = _closure2_slot1;
                    var0 = var4.bind(var5)(var3, var0);
                    _fun87351_ip = 143;
                    continue _fun87351;
                case 103:
                    var0 = 18;
                    var1 = var1[var0];
                    var0 = undefined;
                    var4 = var2.bind(var0)(var1);
                    var3 = var4.markContentAsDismissed;
                    var2 = _closure2_slot0;
                    var1 = _closure2_slot1;
                    var0 = false;
                    var0 = var3.bind(var4)(var2, var1, var0);
                case 143:
                    var0 = undefined;
                    return var0;
            }
        };
        var4 = var2.bind(var3)(var0, var1);
        var3 = _closure1_slot18;
        var1 = _closure1_slot0;
        var2 = _closure1_slot2;
        var0 = 17;
        var0 = var2[var0];
        var2 = undefined;
        var0 = var1.bind(var2)(var0);
        var1 = var0.TableSwitchRow;
        var0 = {};
        var6 = _closure1_slot15;
        var6 = var6.bind(var2)(var7);
        var0.label = var6;
        var0.value = var5;
        var0.onValueChange = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var _closure1_slot25 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var10.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var11 = 1;
    var6 = var5[var11];
    var3 = arg3;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.ScrollView;
    var _closure1_slot5 = var6;
    var3 = var3.View;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.GUILD_DCS;
    var _closure1_slot11 = var6;
    var6 = var3.SERVER_TAG_GUILD_DCS;
    var _closure1_slot12 = var6;
    var6 = var3.USER_DCS;
    var _closure1_slot13 = var6;
    var6 = var3.VANITY_URL_POWERUP_DCS;
    var _closure1_slot14 = var6;
    var6 = var3.getGuildDCString;
    var _closure1_slot15 = var6;
    var3 = var3.getUserDCString;
    var _closure1_slot16 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Endpoints;
    var _closure1_slot17 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot18 = var6;
    var3 = var3.jsxs;
    var _closure1_slot19 = var3;
    var3 = 10;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 11;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_BASE_LOW;
    var8.backgroundColor = var12;
    var8.flex = var11;
    var3.container = var8;
    var8 = {};
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_16;
    var8.padding = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_16;
    var8.gap = var11;
    var3.scrollContainer = var8;
    var8 = {
        'flex': 1,
        'justifyContent': 'center',
        'alignItems': 'center'
    };
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.spacing;
    var9 = var9.PX_32;
    var8.padding = var9;
    var3.noGuildContainer = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot20 = var3;
    var3 = 26;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/devtools/native/components/screens/DevToolsGuildPowerupsScreen.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() { // Original name: DevToolsGuildPowerupsScreen, environment: var1
        _fun87352: for (var _fun87352_ip = 0;;) switch (_fun87352_ip) {
            case 0:
                var0 = _closure1_slot20;
                var4 = undefined;
                var7 = var0.bind(var4)();
                var1 = _closure1_slot1;
                var6 = _closure1_slot2;
                var0 = 21;
                var0 = var6[var0];
                var0 = var1.bind(var4)(var0);
                var3 = var0.bind(var4)();
                var2 = _closure1_slot0;
                var1 = 22;
                var0 = var6[var1];
                var10 = var2.bind(var4)(var0);
                var9 = var10.useStateFromStores;
                var0 = _closure1_slot10;
                var8 = new Array(1);
                var8[0] = var0;
                var0 = function() { // Environment: var13
                    var1 = _closure1_slot10;
                    var0 = var1.getGuildId;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var0 = var9.bind(var10)(var8, var0);
                var _closure2_slot0 = var0;
                var8 = var6[var1];
                var11 = var2.bind(var4)(var8);
                var10 = var11.useStateFromStores;
                var8 = _closure1_slot9;
                var9 = new Array(1);
                var9[0] = var8;
                var8 = function() { // Environment: var13
                    _fun87354: for (var _fun87354_ip = 0;;) switch (_fun87354_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            var1 = null;
                            var3 = var1 != var0;
                            var0 = null;
                            if (!var3) {
                                _fun87354_ip = 56;
                                continue _fun87354
                            }
                        case 18:
                            var4 = _closure1_slot9;
                            var3 = var4.getGuild;
                            var2 = _closure2_slot0;
                            var2 = var3.bind(var4)(var2);
                            var3 = var1 == var2;
                            var1 = undefined;
                            if (var3) {
                                _fun87354_ip = 53;
                                continue _fun87354
                            }
                        case 48:
                            var1 = var2.name;
                        case 53:
                            var0 = var1;
                        case 56:
                            return var0;
                    }
                };
                var10 = var10.bind(var11)(var9, var8);
                var8 = var6[var1];
                var12 = var2.bind(var4)(var8);
                var11 = var12.useStateFromStoresArray;
                var8 = _closure1_slot7;
                var9 = new Array(1);
                var9[0] = var8;
                var8 = function() { // Environment: var13
                    var5 = _closure1_slot11;
                    var2 = new Array(0);
                    var4 = 0;
                    var6 = var2;
                    var4 = arraySpread(var6, var5, var4);
                    var5 = _closure1_slot12;
                    var6 = var2;
                    var0 = arraySpread(var6, var5, var4);
                    var1 = var2.filter;
                    var0 = function(arg0) { // Environment: var0
                        _fun87356: for (var _fun87356_ip = 0;;) switch (_fun87356_ip) {
                            case 0:
                                var2 = _closure2_slot0;
                                var0 = null;
                                var0 = var0 != var2;
                                if (!var0) {
                                    _fun87356_ip = 60;
                                    continue _fun87356
                                }
                            case 16:
                                var4 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var2 = 18;
                                var3 = var3[var2];
                                var2 = undefined;
                                var4 = var4.bind(var2)(var3);
                                var3 = var4.isContentDismissed;
                                var2 = _closure2_slot0;
                                var1 = arg0;
                                var0 = var3.bind(var4)(var1, var2);
                            case 60:
                                return var0;
                        }
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var8 = var11.bind(var12)(var9, var8);
                var _closure2_slot1 = var8;
                var1 = var6[var1];
                var8 = var2.bind(var4)(var1);
                var6 = var8.useStateFromStoresArray;
                var1 = _closure1_slot8;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var13
                    _fun87357: for (var _fun87357_ip = 0;;) switch (_fun87357_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun87357_ip = 39;
                                continue _fun87357
                            }
                        case 13:
                            var3 = _closure1_slot8;
                            var2 = var3.getAppliedGuildBoostsForGuild;
                            var0 = _closure2_slot0;
                            var0 = var2.bind(var3)(var0);
                            if (!(var1 == var0)) {
                                _fun87357_ip = 43;
                                continue _fun87357
                            }
                        case 39:
                            var0 = new Array(0);
                        case 43:
                            return var0;
                    }
                };
                var1 = var6.bind(var8)(var2, var1);
                var _closure2_slot2 = var1;
                var11 = null;
                if (!(var11 != var0)) {
                    _fun87352_ip = 982;
                    continue _fun87352
                }
            case 225:
                var2 = _closure1_slot19;
                var1 = _closure1_slot5;
                var0 = {};
                var6 = var7.container;
                var0.style = var6;
                var8 = var7.scrollContainer;
                var6 = new Array(2);
                var6[0] = var8;
                var8 = {};
                var12 = var3.bottom;
                var14 = _closure1_slot1;
                var3 = _closure1_slot2;
                var9 = 11;
                var9 = var3[var9];
                var9 = var14.bind(var4)(var9);
                var9 = var9.spacing;
                var9 = var9.PX_16;
                var9 = var12 + var9;
                var8.paddingBottom = var9;
                var6[1] = var8;
                var0.contentContainerStyle = var6;
                var9 = _closure1_slot18;
                var8 = _closure1_slot0;
                var6 = 24;
                var3 = var3[var6];
                var3 = var8.bind(var4)(var3);
                var8 = var3.TableRowGroup;
                var3 = {};
                var11 = var11 != var10;
                var12 = 'Unknown';
                if (!var11) {
                    _fun87352_ip = 355;
                    continue _fun87352
                }
            case 352:
                var12 = var10;
            case 355:
                var10 = global;
                var10 = var10.HermesInternal;
                var11 = var10.concat;
                var10 = 'Current Guild: ';
                var10 = var11.bind(var10)(var12);
                var3.title = var10;
                var16 = _closure1_slot18;
                var11 = _closure1_slot0;
                var14 = _closure1_slot2;
                var10 = 25;
                var12 = var14[var10];
                var12 = var11.bind(var4)(var12);
                var15 = var12.TableRow;
                var12 = {};
                var17 = 'Reset Notification Indicators';
                var12.label = var17;
                var17 = function() { // Original name: onPress, environment: var13
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 15;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var0 = var1.guildPowerupsResetNotifications;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var12.onPress = var17;
                var12 = var16.bind(var4)(var15, var12);
                var3.children = var12;
                var8 = var9.bind(var4)(var8, var3);
                var3 = new Array(7);
                var3[0] = var8;
                var12 = _closure1_slot19;
                var8 = var14[var6];
                var8 = var11.bind(var4)(var8);
                var9 = var8.TableRowGroup;
                var8 = {};
                var15 = 'Warning State';
                var8.title = var15;
                var17 = _closure1_slot18;
                var15 = var14[var10];
                var15 = var11.bind(var4)(var15);
                var16 = var15.TableRow;
                var15 = {};
                var18 = 'Set Half Boosts expiring in 1 day';
                var15.label = var18;
                var18 = function() { // Original name: onPress, environment: var13
                    var4 = _closure1_slot21;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot2;
                    var1 = var2.slice;
                    var0 = global;
                    var6 = var0.Math;
                    var5 = var6.floor;
                    var7 = var2.length;
                    var0 = 2;
                    var0 = var7 / var0;
                    var0 = var5.bind(var6)(var0);
                    var2 = var1.bind(var2)(var0);
                    var1 = undefined;
                    var0 = false;
                    var0 = var4.bind(var1)(var3, var2, var0);
                    return var0;
                };
                var15.onPress = var18;
                var16 = var17.bind(var4)(var16, var15);
                var15 = new Array(2);
                var15[0] = var16;
                var18 = _closure1_slot18;
                var16 = var14[var10];
                var16 = var11.bind(var4)(var16);
                var17 = var16.TableRow;
                var16 = {};
                var19 = 'Reset End Date';
                var16.label = var19;
                var19 = function() { // Original name: onPress, environment: var13
                    var4 = _closure1_slot21;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot2;
                    var1 = undefined;
                    var0 = true;
                    var0 = var4.bind(var1)(var3, var2, var0);
                    return var0;
                };
                var16.onPress = var19;
                var16 = var18.bind(var4)(var17, var16);
                var15[1] = var16;
                var8.children = var15;
                var8 = var12.bind(var4)(var9, var8);
                var3[1] = var8;
                var12 = _closure1_slot18;
                var8 = var14[var6];
                var8 = var11.bind(var4)(var8);
                var9 = var8.TableRowGroup;
                var8 = {};
                var15 = 'User Level DCs';
                var8.title = var15;
                var17 = _closure1_slot13;
                var16 = var17.map;
                var15 = function(arg0) { // Environment: var13
                    var4 = arg0;
                    var3 = _closure1_slot18;
                    var2 = _closure1_slot24;
                    var1 = {};
                    var1.dc = var4;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2, var1, var4);
                    return var0;
                };
                var15 = var16.bind(var17)(var15);
                var8.children = var15;
                var8 = var12.bind(var4)(var9, var8);
                var3[2] = var8;
                var12 = _closure1_slot18;
                var8 = var14[var6];
                var8 = var11.bind(var4)(var8);
                var9 = var8.TableRowGroup;
                var8 = {};
                var15 = 'Guild Level DCs';
                var8.title = var15;
                var17 = _closure1_slot11;
                var16 = var17.map;
                var15 = function(arg0) { // Environment: var13
                    var4 = arg0;
                    var3 = _closure1_slot18;
                    var2 = _closure1_slot25;
                    var1 = {};
                    var1.dc = var4;
                    var5 = _closure2_slot0;
                    var1.guildId = var5;
                    var5 = _closure2_slot1;
                    var0 = var5.includes;
                    var0 = var0.bind(var5)(var4);
                    var1.isDismissed = var0;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2, var1, var4);
                    return var0;
                };
                var15 = var16.bind(var17)(var15);
                var8.children = var15;
                var8 = var12.bind(var4)(var9, var8);
                var3[3] = var8;
                var12 = _closure1_slot18;
                var8 = var14[var6];
                var8 = var11.bind(var4)(var8);
                var9 = var8.TableRowGroup;
                var8 = {};
                var15 = 'Server Tag Guild Level DCs';
                var8.title = var15;
                var17 = _closure1_slot12;
                var16 = var17.map;
                var15 = function(arg0) { // Environment: var13
                    var4 = arg0;
                    var3 = _closure1_slot18;
                    var2 = _closure1_slot25;
                    var1 = {};
                    var1.dc = var4;
                    var5 = _closure2_slot0;
                    var1.guildId = var5;
                    var5 = _closure2_slot1;
                    var0 = var5.includes;
                    var0 = var0.bind(var5)(var4);
                    var1.isDismissed = var0;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2, var1, var4);
                    return var0;
                };
                var15 = var16.bind(var17)(var15);
                var8.children = var15;
                var8 = var12.bind(var4)(var9, var8);
                var3[4] = var8;
                var12 = _closure1_slot18;
                var8 = var14[var6];
                var8 = var11.bind(var4)(var8);
                var9 = var8.TableRowGroup;
                var8 = {};
                var15 = 'Powerup Rollback DCs';
                var8.title = var15;
                var17 = _closure1_slot14;
                var16 = var17.map;
                var15 = function(arg0) { // Environment: var13
                    var4 = arg0;
                    var3 = _closure1_slot18;
                    var2 = _closure1_slot24;
                    var1 = {};
                    var1.dc = var4;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2, var1, var4);
                    return var0;
                };
                var15 = var16.bind(var17)(var15);
                var8.children = var15;
                var8 = var12.bind(var4)(var9, var8);
                var3[5] = var8;
                var9 = _closure1_slot18;
                var6 = var14[var6];
                var6 = var11.bind(var4)(var6);
                var8 = var6.TableRowGroup;
                var6 = {};
                var12 = 'System Messages';
                var6.title = var12;
                var12 = _closure1_slot18;
                var10 = var14[var10];
                var10 = var11.bind(var4)(var10);
                var11 = var10.TableRow;
                var10 = {};
                var14 = 'Send Powerups System Message';
                var10.label = var14;
                var13 = function() { // Original name: onPress, environment: var13
                    var2 = _closure2_slot0;
                    var1 = function() { // Original name: sendPowerupsSystemMessage, environment: var0
                        var0 = undefined;
                        var3 = _closure1_slot23;
                        var2 = var3.apply;
                        var0 = arguments;
                        var1 = var0;
                        var0 = this;
                        var0 = var2.bind(var3)(var0, var1);
                        return var0;
                    };
                    var0 = undefined;
                    var0 = var1.bind(var0)(var2);
                    return var0;
                };
                var10.onPress = var13;
                var10 = var12.bind(var4)(var11, var10);
                var6.children = var10;
                var6 = var9.bind(var4)(var8, var6);
                var3[6] = var6;
                var0.children = var3;
                var0 = var2.bind(var4)(var1, var0);
                _fun87352_ip = 1078;
                continue _fun87352;
            case 982:
                var3 = _closure1_slot18;
                var2 = _closure1_slot6;
                var1 = {};
                var8 = var7.container;
                var6 = new Array(2);
                var6[0] = var8;
                var7 = var7.noGuildContainer;
                var6[1] = var7;
                var1.style = var6;
                var7 = _closure1_slot18;
                var6 = _closure1_slot0;
                var8 = _closure1_slot2;
                var5 = 23;
                var5 = var8[var5];
                var5 = var6.bind(var4)(var5);
                var6 = var5.Text;
                var5 = {
                    'variant': 'heading-md/semibold',
                    'color': 'text-muted',
                    'children': 'No guild selected'
                };
                var5 = var7.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 1078:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 31, 27, 1310, 9910, 1410, 3172, 11237, 660, 33, 1297, 671, 507, 3004, 6668, 9870, 11053, 5373, 11238, 1355, 1358, 1568, 566, 3895, 5320, 4854, 2]);