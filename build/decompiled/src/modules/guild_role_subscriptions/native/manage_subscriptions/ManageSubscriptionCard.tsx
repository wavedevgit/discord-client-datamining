// modules/guild_role_subscriptions/native/manage_subscriptions/ManageSubscriptionCard.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var6 = metroImportAll;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var6;
    var _closure1_slot3 = var5;
    var0 = function arg0() {
        _fun84399: for (var _fun84399_ip = 0;;) switch (_fun84399_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.isCancelled;
                var1 = var0.isTrial;
                var0 = var0.isPastDue;
                var3 = _closure1_slot14;
                var4 = undefined;
                var6 = var3.bind(var4)();
                if (var2) {
                    _fun84399_ip = 194;
                    continue _fun84399
                }
            case 40:
                if (var1) {
                    _fun84399_ip = 127;
                    continue _fun84399
                }
            case 43:
                var8 = '';
                var7 = undefined;
                var10 = true;
                if (!var0) {
                    _fun84399_ip = 259;
                    continue _fun84399
                }
            case 57:
                var3 = _closure1_slot0;
                var9 = _closure1_slot3;
                var0 = 9;
                var1 = var9[var0];
                var1 = var3.bind(var4)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var9[var0];
                var0 = var3.bind(var4)(var0);
                var0 = var0.t;
                var0 = var0.uENdgb;
                var8 = var1.bind(var2)(var0);
                var7 = var6.headerStatusPastDue;
                var10 = false;
                _fun84399_ip = 259;
                continue _fun84399;
            case 127:
                var3 = _closure1_slot0;
                var9 = _closure1_slot3;
                var0 = 9;
                var1 = var9[var0];
                var1 = var3.bind(var4)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var9[var0];
                var0 = var3.bind(var4)(var0);
                var0 = var0.t;
                var0 = var0["6anton"];
                var8 = var1.bind(var2)(var0);
                var7 = var6.headerStatusTrial;
                var10 = true;
                _fun84399_ip = 259;
                continue _fun84399;
            case 194:
                var3 = _closure1_slot0;
                var9 = _closure1_slot3;
                var0 = 9;
                var1 = var9[var0];
                var1 = var3.bind(var4)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var9[var0];
                var0 = var3.bind(var4)(var0);
                var0 = var0.t;
                var0 = var0["7uFZGt"];
                var8 = var1.bind(var2)(var0);
                var7 = var6.headerStatusCancel;
                var10 = true;
            case 259:
                var1 = '';
                var0 = null;
                if (!(var1 !== var8)) {
                    _fun84399_ip = 377;
                    continue _fun84399
                }
            case 269:
                var3 = _closure1_slot11;
                var2 = _closure1_slot7;
                var1 = {};
                var9 = var6.headerStatusContainer;
                var6 = new Array(2);
                var6[0] = var9;
                var6[1] = var7;
                var1.style = var6;
                var7 = _closure1_slot11;
                var6 = _closure1_slot0;
                var9 = _closure1_slot3;
                var5 = 10;
                var5 = var9[var5];
                var5 = var6.bind(var4)(var5);
                var6 = var5.Text;
                var5 = {};
                var9 = 'text-xs/semibold';
                var5.variant = var9;
                var9 = 'black';
                if (!var10) {
                    _fun84399_ip = 353;
                    continue _fun84399
                }
            case 349:
                var9 = 'white';
            case 353:
                var5.color = var9;
                var5.children = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 377:
                return var0;
        }
    };
    var _closure1_slot15 = var0;
    var0 = function arg0() {
        _fun84400: for (var _fun84400_ip = 0;;) switch (_fun84400_ip) {
            case 0:
                var0 = arg0;
                var15 = var0.expanded;
                var21 = var0.guild;
                var9 = var0.isCancelled;
                var8 = var0.isTrial;
                var7 = var0.isPastDue;
                var24 = var0.listing;
                var4 = var0.onToggleExpanded;
                var0 = _closure1_slot14;
                var3 = undefined;
                var16 = var0.bind(var3)();
                var2 = _closure1_slot12;
                var17 = _closure1_slot0;
                var19 = _closure1_slot3;
                var0 = 11;
                var0 = var19[var0];
                var0 = var17.bind(var3)(var0);
                var1 = var0.PressableHighlight;
                var0 = {};
                var5 = var16.header;
                var0.style = var5;
                var0.onPress = var4;
                var6 = _closure1_slot11;
                var5 = _closure1_slot15;
                var4 = {};
                var4.isCancelled = var9;
                var4.isTrial = var8;
                var4.isPastDue = var7;
                var5 = var6.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var7 = _closure1_slot12;
                var6 = _closure1_slot7;
                var5 = {};
                var8 = var16.headerContent;
                var5.style = var8;
                var10 = _closure1_slot11;
                var20 = _closure1_slot1;
                var8 = 12;
                var8 = var19[var8];
                var9 = var20.bind(var3)(var8);
                var8 = {};
                var8.guild = var21;
                var9 = var10.bind(var3)(var9, var8);
                var8 = new Array(3);
                var8[0] = var9;
                var11 = _closure1_slot12;
                var10 = _closure1_slot7;
                var9 = {};
                var12 = var16.headerTitlesContainer;
                var9.style = var12;
                var22 = _closure1_slot11;
                var13 = 10;
                var12 = var19[var13];
                var12 = var17.bind(var3)(var12);
                var18 = var12.Text;
                var12 = {
                    'ellipsizeMode': 'tail',
                    'lineClamp': 2,
                    'variant': 'text-md/semibold',
                    'color': 'interactive-text-active'
                };
                var23 = 2;
                var24 = var24.name;
                var12.children = var24;
                var18 = var22.bind(var3)(var18, var12);
                var12 = new Array(3);
                var12[0] = var18;
                var22 = _closure1_slot11;
                var18 = 13;
                var18 = var19[var18];
                var20 = var20.bind(var3)(var18);
                var18 = {};
                var18.size = var23;
                var18 = var22.bind(var3)(var20, var18);
                var12[1] = var18;
                var18 = _closure1_slot11;
                var13 = var19[var13];
                var13 = var17.bind(var3)(var13);
                var17 = var13.Text;
                var13 = {
                    'variant': 'text-sm/medium',
                    'color': 'interactive-text-default'
                };
                var20 = null;
                var22 = var20 == var21;
                var19 = undefined;
                if (var22) {
                    _fun84400_ip = 362;
                    continue _fun84400
                }
            case 357:
                var19 = var21.name;
            case 362:
                if (!(var20 == var19)) {
                    _fun84400_ip = 423;
                    continue _fun84400
                }
            case 366:
                var23 = _closure1_slot0;
                var24 = _closure1_slot3;
                var20 = 9;
                var21 = var24[var20];
                var21 = var23.bind(var3)(var21);
                var22 = var21.intl;
                var21 = var22.string;
                var20 = var24[var20];
                var20 = var23.bind(var3)(var20);
                var20 = var20.t;
                var20 = var20["He+cmd"];
                var19 = var21.bind(var22)(var20);
            case 423:
                var13.children = var19;
                var13 = var18.bind(var3)(var17, var13);
                var12[2] = var13;
                var9.children = var12;
                var9 = var11.bind(var3)(var10, var9);
                var8[1] = var9;
                var11 = _closure1_slot11;
                var10 = _closure1_slot1;
                var9 = _closure1_slot3;
                var12 = 14;
                var9 = var9[var12];
                var10 = var10.bind(var3)(var9);
                var9 = {};
                var17 = var16.expandIcon;
                var13 = new Array(2);
                var13[0] = var17;
                if (!var15) {
                    _fun84400_ip = 500;
                    continue _fun84400
                }
            case 494:
                var15 = var16.expandIconExpanded;
            case 500:
                var13[1] = var15;
                var9.style = var13;
                var13 = _closure1_slot1;
                var14 = _closure1_slot3;
                var12 = var14[var12];
                var12 = var13.bind(var3)(var12);
                var12 = var12.Sizes;
                var12 = var12.MEDIUM;
                var9.size = var12;
                var12 = 15;
                var12 = var14[var12];
                var12 = var13.bind(var3)(var12);
                var9.source = var12;
                var9 = var11.bind(var3)(var10, var9);
                var8[2] = var9;
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot16 = var0;
    var0 = function() {
        var1 = _closure1_slot14;
        var3 = undefined;
        var4 = var1.bind(var3)();
        var2 = _closure1_slot11;
        var1 = _closure1_slot1;
        var5 = _closure1_slot3;
        var0 = 16;
        var0 = var5[var0];
        var1 = var1.bind(var3)(var0);
        var0 = {};
        var4 = var4.separator;
        var0.style = var4;
        var4 = true;
        var0.withoutMargins = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot17 = var0;
    var0 = function arg0() {
        _fun84402: for (var _fun84402_ip = 0;;) switch (_fun84402_ip) {
            case 0:
                var1 = arg0;
                var16 = var1.isCancelled;
                var11 = var1.isTrial;
                var _closure2_slot0 = var11;
                var4 = var1.isPastDue;
                var12 = var1.memberSince;
                var14 = var1.nextRenewalDate;
                var15 = var1.nextRenewalLabel;
                var17 = var1.onCancelSubscription;
                var0 = var1.subscription;
                var _closure2_slot1 = var0;
                var8 = var1.subscriptionPrice;
                var1 = var1.guildId;
                var _closure2_slot2 = var1;
                var1 = _closure1_slot14;
                var3 = undefined;
                var19 = var1.bind(var3)();
                var _closure2_slot3 = var19;
                var1 = _closure1_slot1;
                var2 = _closure1_slot3;
                var5 = 20;
                var5 = var2[var5];
                var6 = var1.bind(var3)(var5);
                var5 = var6.useResubscribeSubscription;
                var0 = var0.id;
                var0 = var5.bind(var6)(var0);
                var5 = var0.resubscribeSubscription;
                var _closure2_slot4 = var5;
                var23 = var0.nativePaymentsConnected;
                var6 = _closure1_slot6;
                var5 = var6.useState;
                var0 = false;
                var6 = var5.bind(var6)(var0);
                var5 = _closure1_slot5;
                var0 = 2;
                var5 = var5.bind(var3)(var6, var0);
                var0 = 0;
                var22 = var5[var0];
                var0 = 1;
                var0 = var5[var0];
                var _closure2_slot5 = var0;
                var0 = 21;
                var0 = var2[var0];
                var0 = var1.bind(var3)(var0);
                var0 = var0.bind(var3)();
                var0 = var0.analyticsLocations;
                var _closure2_slot6 = var0;
                var0 = function() { // Environment: var25
                    var3 = _closure1_slot4;
                    var2 = undefined;
                    var1 = function*() { // Environment: var0
                        var0 = function*() { // Original name: ?anon_0_, environment: var0
                            _fun84405: for (var _fun84405_ip = 0;;) switch (_fun84405_ip) {
                                case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                    if (var1) {
                                        _fun84405_ip = 356;
                                        continue _fun84405
                                    }
                                case 10:
                                    var1 = undefined;
                                    var2 = undefined;
                                    var4 = undefined;
                                    var5 = _closure2_slot1;
                                    var2 = var5.isPurchasedViaAppleGeneric;
                                    var5 = _closure2_slot0;
                                    if (var5) {
                                        _fun84405_ip = 204;
                                        continue _fun84405
                                    }
                                case 39: // try_start_0
                                    var5 = _closure2_slot5;
                                    var6 = true;
                                    var5 = var5.bind(var1)(var6);
                                    var5 = false;
                                    var4 = false;
                                    if (var2) {
                                        _fun84405_ip = 126;
                                        continue _fun84405
                                    }
                                case 57:
                                    var7 = _closure1_slot2;
                                    var8 = _closure1_slot3;
                                    var2 = 22;
                                    var2 = var8[var2];
                                    var9 = var7.bind(var1)(var2);
                                    var8 = var9.resubscribeToSubscription;
                                    var7 = _closure2_slot1;
                                    var2 = _closure2_slot6;
                                    var2 = var8.bind(var9)(var7, var2);
                                    SaveGenerator(address = 104);
                                case 102:
                                    return var2;
                                case 104:
                                    ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 7);
                                    if (var7) {
                                        _fun84405_ip = 114;
                                        continue _fun84405
                                    }
                                case 110:
                                    var4 = true;
                                    _fun84405_ip = 147;
                                    continue _fun84405;
                                case 114: // try_end0
                                    var6 = _closure2_slot5;
                                    var6 = var6.bind(var1)(var5);
                                    return var2;
                                case 126: // try_start_1
                                    var2 = _closure2_slot4;
                                    var2 = var2.bind(var1)();
                                    SaveGenerator(address = 138);
                                case 136:
                                    return var2;
                                case 138:
                                    ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 6);
                                    if (var6) {
                                        _fun84405_ip = 177;
                                        continue _fun84405
                                    }
                                case 144:
                                    var4 = var2;
                                case 147:
                                    if (!var4) {
                                        _fun84405_ip = 163;
                                        continue _fun84405
                                    }
                                case 150:
                                    var4 = function() {
                                        var2 = _closure1_slot1;
                                        var1 = _closure1_slot3;
                                        var0 = 17;
                                        var1 = var1[var0];
                                        var0 = undefined;
                                        var3 = var2.bind(var0)(var1);
                                        var2 = var3.openLazy;
                                        var1 = {};
                                        var4 = function() {
                                            var2 = _closure1_slot0;
                                            var0 = _closure1_slot3;
                                            var1 = 19;
                                            var1 = var0[var1];
                                            var3 = undefined;
                                            var2 = var2.bind(var3)(var1);
                                            var1 = 18;
                                            var1 = var0[var1];
                                            var0 = var0.paths;
                                            var2 = var2.bind(var3)(var1, var0);
                                            var1 = var2.then;
                                            var0 = function(arg0) { // Environment: var0
                                                var1 = arg0;
                                                var1 = var1.default;
                                                var _closure8_slot0 = var1;
                                                var0 = function(arg0) { // Environment: var0
                                                    var3 = _closure1_slot11;
                                                    var2 = _closure8_slot0;
                                                    var1 = {};
                                                    var4 = arg0;
                                                    var5 = var1;
                                                    var0 = copyDataProperties(var5, var4);
                                                    var0 = undefined;
                                                    var0 = var3.bind(var0)(var2, var1);
                                                    return var0;
                                                };
                                                return var0;
                                            };
                                            var0 = var1.bind(var2)(var0);
                                            return var0;
                                        };
                                        var1.importer = var4;
                                        var1 = var2.bind(var3)(var1);
                                        return var0;
                                    };
                                    var4 = var4.bind(var1)();
                                case 163: // try_end1
                                    var4 = _closure2_slot5;
                                    var4 = var4.bind(var1)(var5);
                                    _fun84405_ip = 353;
                                    continue _fun84405;
                                case 177:
                                    var4 = _closure2_slot5;
                                    var4 = var4.bind(var1)(var5);
                                    return var2;
                                case 189: // catch_target0 // catch_target1
                                    CatchBlockStart(arg_register = 2);
                                    var4 = _closure2_slot5;
                                    var3 = false;
                                    var3 = var4.bind(var1)(var3);
                                    throw var2;
                                case 204:
                                    var3 = _closure1_slot1;
                                    var9 = _closure1_slot3;
                                    var2 = 17;
                                    var2 = var9[var2];
                                    var4 = var3.bind(var1)(var2);
                                    var3 = var4.show;
                                    var2 = {};
                                    var8 = _closure1_slot0;
                                    var5 = 9;
                                    var6 = var9[var5];
                                    var6 = var8.bind(var1)(var6);
                                    var10 = var6.intl;
                                    var7 = var10.string;
                                    var6 = var9[var5];
                                    var6 = var8.bind(var1)(var6);
                                    var6 = var6.t;
                                    var6 = var6.NL7DFi;
                                    var6 = var7.bind(var10)(var6);
                                    var2.body = var6;
                                    var6 = var9[var5];
                                    var6 = var8.bind(var1)(var6);
                                    var7 = var6.intl;
                                    var6 = var7.string;
                                    var5 = var9[var5];
                                    var5 = var8.bind(var1)(var5);
                                    var5 = var5.t;
                                    var5 = var5["NX+WJN"];
                                    var5 = var6.bind(var7)(var5);
                                    var2.confirmText = var5;
                                    var5 = true;
                                    var2.isDismissable = var5;
                                    var2 = var3.bind(var4)(var2);
                                case 353:
                                    return var1;
                                case 356:
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
                var24 = var0.bind(var3)();
                var2 = _closure1_slot12;
                var1 = _closure1_slot7;
                var0 = {};
                var5 = var19.cardContent;
                var0.style = var5;
                var5 = null;
                if (!var4) {
                    _fun84402_ip = 559;
                    continue _fun84402
                }
            case 258:
                var7 = _closure1_slot12;
                var6 = _closure1_slot13;
                var4 = {};
                var18 = _closure1_slot7;
                var9 = {};
                var10 = var19.paymentOverDueWarning;
                var9.style = var10;
                var27 = _closure1_slot11;
                var13 = _closure1_slot1;
                var20 = _closure1_slot3;
                var10 = 23;
                var10 = var20[var10];
                var21 = var13.bind(var3)(var10);
                var10 = {
                    'color': null,
                    'width': 16,
                    'height': 16
                };
                var30 = 8;
                var28 = var20[var30];
                var28 = var13.bind(var3)(var28);
                var28 = var28.unsafe_rawColors;
                var28 = var28.YELLOW_300;
                var10.color = var28;
                var10 = var27.bind(var3)(var21, var10);
                var21 = new Array(3);
                var21[0] = var10;
                var29 = _closure1_slot11;
                var10 = 13;
                var27 = var20[var10];
                var28 = var13.bind(var3)(var27);
                var27 = {};
                var27.size = var30;
                var27 = var29.bind(var3)(var28, var27);
                var21[1] = var27;
                var29 = _closure1_slot11;
                var33 = _closure1_slot0;
                var27 = 10;
                var27 = var20[var27];
                var27 = var33.bind(var3)(var27);
                var28 = var27.Text;
                var27 = {
                    'variant': 'text-sm/medium',
                    'color': 'interactive-text-active'
                };
                var30 = 9;
                var31 = var20[var30];
                var31 = var33.bind(var3)(var31);
                var32 = var31.intl;
                var31 = var32.string;
                var30 = var20[var30];
                var30 = var33.bind(var3)(var30);
                var30 = var30.t;
                var30 = var30.eaqlau;
                var30 = var31.bind(var32)(var30);
                var27.children = var30;
                var27 = var29.bind(var3)(var28, var27);
                var21[2] = var27;
                var9.children = var21;
                var18 = var7.bind(var3)(var18, var9);
                var9 = new Array(2);
                var9[0] = var18;
                var18 = _closure1_slot11;
                var10 = var20[var10];
                var13 = var13.bind(var3)(var10);
                var10 = {};
                var20 = 12;
                var10.size = var20;
                var10 = var18.bind(var3)(var13, var10);
                var9[1] = var10;
                var4.children = var9;
                var5 = var7.bind(var3)(var6, var4);
            case 559:
                var4 = new Array(5);
                var4[0] = var5;
                var7 = _closure1_slot11;
                var6 = _closure1_slot1;
                var10 = _closure1_slot3;
                var9 = 24;
                var5 = var10[var9];
                var6 = var6.bind(var3)(var5);
                var5 = {};
                var20 = _closure1_slot0;
                var29 = 9;
                var13 = var10[var29];
                var13 = var20.bind(var3)(var13);
                var18 = var13.intl;
                var13 = var18.string;
                var10 = var10[var29];
                var10 = var20.bind(var3)(var10);
                var10 = var10.t;
                var10 = var10.dltUMH;
                var10 = var13.bind(var18)(var10);
                var5.title = var10;
                var10 = undefined;
                if (!var11) {
                    _fun84402_ip = 675;
                    continue _fun84402
                }
            case 655:
                var18 = _closure1_slot1;
                var20 = _closure1_slot3;
                var13 = 25;
                var13 = var20[var13];
                var10 = var18.bind(var3)(var13);
            case 675:
                var5.icon = var10;
                var10 = undefined;
                if (!var11) {
                    _fun84402_ip = 710;
                    continue _fun84402
                }
            case 684:
                var13 = _closure1_slot0;
                var18 = _closure1_slot3;
                var11 = 26;
                var11 = var18[var11];
                var11 = var13.bind(var3)(var11);
                var10 = var11.presentGuildRoleSubscriptionTrialTierMonthCost;
            case 710:
                var5.onPressIcon = var10;
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var7 = _closure1_slot11;
                var20 = _closure1_slot1;
                var27 = _closure1_slot3;
                var10 = 13;
                var5 = var27[var10];
                var6 = var20.bind(var3)(var5);
                var5 = {};
                var8 = 16;
                var5.size = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[2] = var5;
                var7 = _closure1_slot12;
                var6 = _closure1_slot7;
                var5 = {};
                var8 = var19.cardRow;
                var5.style = var8;
                var13 = _closure1_slot11;
                var8 = var27[var9];
                var11 = var20.bind(var3)(var8);
                var8 = {};
                var8.title = var15;
                var8.children = var14;
                var11 = var13.bind(var3)(var11, var8);
                var8 = new Array(3);
                var8[0] = var11;
                var13 = _closure1_slot11;
                var10 = var27[var10];
                var11 = var20.bind(var3)(var10);
                var10 = {};
                var14 = 8;
                var10.size = var14;
                var10 = var13.bind(var3)(var11, var10);
                var8[1] = var10;
                var11 = _closure1_slot11;
                var9 = var27[var9];
                var10 = var20.bind(var3)(var9);
                var9 = {};
                var31 = _closure1_slot0;
                var13 = var27[var29];
                var13 = var31.bind(var3)(var13);
                var15 = var13.intl;
                var14 = var15.string;
                var13 = var27[var29];
                var13 = var31.bind(var3)(var13);
                var13 = var13.t;
                var13 = var13.AOcwWB;
                var13 = var14.bind(var15)(var13);
                var9.title = var13;
                var9.children = var12;
                var9 = var11.bind(var3)(var10, var9);
                var8[2] = var9;
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[3] = var5;
                var7 = _closure1_slot11;
                var5 = 27;
                var5 = var27[var5];
                var5 = var31.bind(var3)(var5);
                var6 = var5.FormSection;
                var5 = {};
                var8 = true;
                var5.inset = var8;
                var8 = var19.manageSection;
                var5.titleViewStyle = var8;
                var8 = var27[var29];
                var8 = var31.bind(var3)(var8);
                var10 = var8.intl;
                var9 = var10.string;
                var8 = var27[var29];
                var8 = var31.bind(var3)(var8);
                var8 = var8.t;
                var8 = var8["4neDM+"];
                var8 = var9.bind(var10)(var8);
                var5.title = var8;
                var10 = _closure1_slot11;
                var9 = _closure1_slot7;
                var8 = {};
                var11 = var19.buttonsContainer;
                var8.style = var11;
                var13 = _closure1_slot12;
                var11 = 28;
                var11 = var27[var11];
                var11 = var31.bind(var3)(var11);
                var12 = var11.GappedList;
                var11 = {};
                var14 = function() {
                    var3 = _closure1_slot11;
                    var2 = _closure1_slot7;
                    var1 = {};
                    var0 = _closure2_slot3;
                    var0 = var0.buttonDivider;
                    var1.style = var0;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var11.renderGap = var14;
                var21 = _closure1_slot11;
                var15 = 29;
                var14 = var27[var15];
                var18 = var20.bind(var3)(var14);
                var14 = {};
                var28 = var27[var29];
                var28 = var31.bind(var3)(var28);
                var32 = var28.intl;
                var30 = var32.string;
                var28 = var27[var29];
                var28 = var31.bind(var3)(var28);
                var28 = var28.t;
                var28 = var28["7spYft"];
                var28 = var30.bind(var32)(var28);
                var14.text = var28;
                var28 = function() {
                    _fun84412: for (var _fun84412_ip = 0;;) switch (_fun84412_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun84412_ip = 252;
                                continue _fun84412
                            }
                        case 16:
                            var1 = _closure2_slot1;
                            var1 = var1.isPurchasedViaAppleGeneric;
                            var2 = _closure1_slot1;
                            var6 = _closure1_slot3;
                            if (var1) {
                                _fun84412_ip = 185;
                                continue _fun84412
                            }
                        case 43:
                            var1 = 17;
                            var1 = var6[var1];
                            var11 = undefined;
                            var5 = var2.bind(var11)(var1);
                            var4 = var5.show;
                            var1 = {};
                            var10 = _closure1_slot0;
                            var7 = 9;
                            var8 = var6[var7];
                            var8 = var10.bind(var11)(var8);
                            var12 = var8.intl;
                            var9 = var12.string;
                            var8 = var6[var7];
                            var8 = var10.bind(var11)(var8);
                            var8 = var8.t;
                            var8 = var8.fmm9jo;
                            var8 = var9.bind(var12)(var8);
                            var1.body = var8;
                            var8 = var6[var7];
                            var8 = var10.bind(var11)(var8);
                            var9 = var8.intl;
                            var8 = var9.string;
                            var7 = var6[var7];
                            var7 = var10.bind(var11)(var7);
                            var7 = var7.t;
                            var7 = var7["NX+WJN"];
                            var7 = var8.bind(var9)(var7);
                            var1.confirmText = var7;
                            var7 = true;
                            var1.isDismissable = var7;
                            var1 = var4.bind(var5)(var1);
                            _fun84412_ip = 252;
                            continue _fun84412;
                        case 185:
                            var1 = 30;
                            var1 = var6[var1];
                            var5 = undefined;
                            var2 = var2.bind(var5)(var1);
                            var1 = var2.openURL;
                            var4 = _closure1_slot0;
                            var3 = 31;
                            var3 = var6[var3];
                            var5 = var4.bind(var5)(var3);
                            var4 = var5.getExternalSubscriptionMethodUrl;
                            var0 = _closure2_slot1;
                            var3 = var0.paymentGateway;
                            var0 = 'PAYMENT_SOURCE_MANAGEMENT';
                            var0 = var4.bind(var5)(var3, var0);
                            var0 = var1.bind(var2)(var0);
                        case 252:
                            var0 = undefined;
                            return var0;
                    }
                };
                var14.onPress = var28;
                var18 = var21.bind(var3)(var18, var14);
                var14 = new Array(3);
                var14[0] = var18;
                var21 = _closure1_slot11;
                var18 = var27[var15];
                var20 = var20.bind(var3)(var18);
                var18 = {};
                var28 = var27[var29];
                var28 = var31.bind(var3)(var28);
                var30 = var28.intl;
                var28 = var30.string;
                var27 = var27[var29];
                var27 = var31.bind(var3)(var27);
                var27 = var27.t;
                var27 = var27.FRbWR8;
                var27 = var28.bind(var30)(var27);
                var18.text = var27;
                var25 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var0 = 32;
                    var2 = var2[var0];
                    var0 = undefined;
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.transitionTo;
                    var6 = _closure1_slot8;
                    var5 = var6.CHANNEL;
                    var4 = _closure2_slot2;
                    var1 = _closure1_slot10;
                    var1 = var1.ROLE_SUBSCRIPTIONS;
                    var1 = var5.bind(var6)(var4, var1);
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var18.onPress = var25;
                var18 = var21.bind(var3)(var20, var18);
                var14[1] = var18;
                var18 = _closure1_slot11;
                if (var16) {
                    _fun84402_ip = 1380;
                    continue _fun84402
                }
            case 1292:
                var16 = _closure1_slot1;
                var20 = _closure1_slot3;
                var15 = var20[var15];
                var16 = var16.bind(var3)(var15);
                var15 = {};
                var27 = _closure1_slot0;
                var21 = var20[var29];
                var21 = var27.bind(var3)(var21);
                var25 = var21.intl;
                var21 = var25.string;
                var20 = var20[var29];
                var20 = var27.bind(var3)(var20);
                var20 = var20.t;
                var20 = var20.Dx0lF7;
                var20 = var21.bind(var25)(var20);
                var15.text = var20;
                var15.onPress = var17;
                var15 = var18.bind(var3)(var16, var15);
                _fun84402_ip = 1507;
                continue _fun84402;
            case 1380:
                var17 = _closure1_slot7;
                var16 = {};
                var19 = var19.resubscribeButtonContainer;
                var16.style = var19;
                var21 = _closure1_slot11;
                var20 = _closure1_slot1;
                var25 = _closure1_slot3;
                var19 = 33;
                var19 = var25[var19];
                var20 = var20.bind(var3)(var19);
                var19 = {};
                var28 = _closure1_slot0;
                var26 = var25[var29];
                var26 = var28.bind(var3)(var26);
                var27 = var26.intl;
                var26 = var27.string;
                var25 = var25[var29];
                var25 = var28.bind(var3)(var25);
                var25 = var25.t;
                var25 = var25.iIvF2z;
                var25 = var26.bind(var27)(var25);
                var19.text = var25;
                var19.onPress = var24;
                if (var22) {
                    _fun84402_ip = 1486;
                    continue _fun84402
                }
            case 1483:
                var22 = !var23;
            case 1486:
                var19.loading = var22;
                var19 = var21.bind(var3)(var20, var19);
                var16.children = var19;
                var15 = var18.bind(var3)(var17, var16);
            case 1507:
                var14[2] = var15;
                var11.children = var14;
                var11 = var13.bind(var3)(var12, var11);
                var8.children = var11;
                var8 = var10.bind(var3)(var9, var8);
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[4] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot18 = var0;
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
    var3 = var10.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.Routes;
    var _closure1_slot8 = var6;
    var3 = var3.UserSettingsSections;
    var _closure1_slot9 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.StaticChannelRoute;
    var _closure1_slot10 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot11 = var6;
    var6 = var3.jsxs;
    var _closure1_slot12 = var6;
    var3 = var3.Fragment;
    var _closure1_slot13 = var3;
    var3 = 7;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 8;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_SURFACE_HIGH;
    var8.backgroundColor = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.sm;
    var8.borderRadius = var11;
    var3.container = var8;
    var8 = {};
    var11 = 16;
    var8.padding = var11;
    var3.cardContent = var8;
    var8 = {};
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_MOD_NORMAL;
    var8.backgroundColor = var12;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.sm;
    var8.borderRadius = var12;
    var12 = 'hidden';
    var8.overflow = var12;
    var3.buttonsContainer = var8;
    var8 = {
        'width': '100%',
        'borderBottomWidth': 1,
        'borderColor': null,
        'marginLeft': 16,
        'marginTop': 4294967295
    };
    var13 = var5[var9];
    var13 = var10.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BORDER_SUBTLE;
    var8.borderColor = var13;
    var3.buttonDivider = var8;
    var8 = {};
    var8.padding = var11;
    var3.resubscribeButtonContainer = var8;
    var8 = {};
    var8.paddingHorizontal = var11;
    var3.separator = var8;
    var8 = {};
    var13 = var5[var9];
    var13 = var10.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.sm;
    var8.borderRadius = var13;
    var8.overflow = var12;
    var3.header = var8;
    var12 = 'row';
    var8 = {
        'padding': 16,
        'alignItems': 'center',
        'flexDirection': 'row'
    };
    var3.headerContent = var8;
    var8 = {
        'alignSelf': 'stretch',
        'flexGrow': 1,
        'flexShrink': 1,
        'paddingHorizontal': 16
    };
    var3.headerTitlesContainer = var8;
    var8 = {};
    var13 = var5[var9];
    var13 = var10.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.INTERACTIVE_TEXT_DEFAULT;
    var8.tintColor = var13;
    var3.expandIcon = var8;
    var8 = {};
    var14 = {};
    var13 = '180deg';
    var14.rotate = var13;
    var13 = new Array(1);
    var13[0] = var14;
    var8.transform = var13;
    var3.expandIconExpanded = var8;
    var8 = {};
    var8.flexDirection = var12;
    var3.cardRow = var8;
    var8 = {};
    var8.paddingTop = var11;
    var3.manageSection = var8;
    var8 = {
        'flexDirection': 'row',
        'width': '90%'
    };
    var3.paymentOverDueWarning = var8;
    var8 = {
        'paddingVertical': 4,
        'paddingHorizontal': 18,
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var3.headerStatusContainer = var8;
    var8 = {};
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_FEEDBACK_CRITICAL;
    var8.backgroundColor = var11;
    var3.headerStatusCancel = var8;
    var8 = {};
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_BRAND;
    var8.backgroundColor = var11;
    var3.headerStatusTrial = var8;
    var8 = {};
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.STATUS_WARNING;
    var8.backgroundColor = var9;
    var3.headerStatusPastDue = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot14 = var3;
    var3 = 36;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_role_subscriptions/native/manage_subscriptions/ManageSubscriptionCard.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun84414: for (var _fun84414_ip = 0;;) switch (_fun84414_ip) {
            case 0:
                var0 = arg0;
                var16 = var0.subscription;
                var _closure2_slot0 = var16;
                var0 = _closure1_slot14;
                var4 = undefined;
                var5 = var0.bind(var4)();
                var1 = _closure1_slot1;
                var3 = _closure1_slot3;
                var0 = 34;
                var0 = var3[var0];
                var0 = var1.bind(var4)(var0);
                var1 = var0.bind(var4)(var16);
                var10 = var1.listing;
                var0 = var1.groupListing;
                var15 = var1.guild;
                var6 = var1.expanded;
                var9 = var1.handleToggleExpanded;
                var18 = var1.subscriptionInfo;
                var2 = _closure1_slot0;
                var1 = 35;
                var1 = var3[var1];
                var2 = var2.bind(var4)(var1);
                var1 = var2.useNavigation;
                var1 = var1.bind(var2)();
                var _closure2_slot1 = var1;
                var17 = null;
                var1 = var17 == var0;
                var0 = null;
                if (var1) {
                    _fun84414_ip = 395;
                    continue _fun84414
                }
            case 132:
                var1 = var17 == var10;
                var0 = null;
                if (var1) {
                    _fun84414_ip = 395;
                    continue _fun84414
                }
            case 144:
                var1 = var17 == var18;
                var0 = null;
                if (var1) {
                    _fun84414_ip = 395;
                    continue _fun84414
                }
            case 156:
                var3 = _closure1_slot12;
                var2 = _closure1_slot7;
                var1 = {};
                var5 = var5.container;
                var1.style = var5;
                var8 = _closure1_slot11;
                var7 = _closure1_slot16;
                var5 = {};
                var5.expanded = var6;
                var5.guild = var15;
                var12 = var18.isCancelled;
                var5.isCancelled = var12;
                var12 = var18.isTrial;
                var5.isTrial = var12;
                var12 = var18.isPastDue;
                var5.isPastDue = var12;
                var5.listing = var10;
                var5.onToggleExpanded = var9;
                var7 = var8.bind(var4)(var7, var5);
                var5 = new Array(2);
                var5[0] = var7;
                if (!var6) {
                    _fun84414_ip = 381;
                    continue _fun84414
                }
            case 257:
                var9 = _closure1_slot12;
                var8 = _closure1_slot13;
                var7 = {};
                var13 = _closure1_slot11;
                var12 = _closure1_slot17;
                var10 = {};
                var12 = var13.bind(var4)(var12, var10);
                var10 = new Array(2);
                var10[0] = var12;
                var13 = _closure1_slot11;
                var12 = _closure1_slot18;
                var11 = {};
                var20 = var11;
                var19 = var18;
                var18 = copyDataProperties(var20, var19);
                var18 = var17 == var15;
                var17 = undefined;
                if (var18) {
                    _fun84414_ip = 325;
                    continue _fun84414
                }
            case 320:
                var17 = var15.id;
            case 325:
                var15 = 'guildId';
                var11[var15] = var17;
                var15 = 'subscription';
                var11[var15] = var16;
                var15 = function() {
                    var3 = _closure2_slot1;
                    var2 = var3.push;
                    var0 = _closure1_slot9;
                    var1 = var0.GUILD_ROLE_SUBSCRIPTIONS_CANCEL;
                    var0 = {};
                    var4 = _closure2_slot0;
                    var4 = var4.id;
                    var0.subscriptionId = var4;
                    var4 = function() {
                        var1 = _closure2_slot1;
                        var0 = var1.pop;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var0.onClose = var4;
                    var0 = var2.bind(var3)(var1, var0);
                    var0 = undefined;
                    return var0;
                };
                var14 = 'onCancelSubscription';
                var11[var14] = var15;
                var11 = var13.bind(var4)(var12, var11);
                var10[1] = var11;
                var7.children = var10;
                var6 = var9.bind(var4)(var8, var7);
            case 381:
                var5[1] = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 395:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 27, 660, 1379, 33, 1297, 671, 1234, 3932, 4897, 7388, 9260, 4077, 8103, 10792, 3927, 10793, 1307, 10795, 5721, 3434, 7133, 10796, 7286, 3138, 5373, 9322, 10797, 3135, 3100, 1220, 9283, 10799, 1469, 2]);