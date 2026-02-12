// modules/guild_role_subscriptions/native/manage_subscriptions/UserSettingsGuildRoleSubscriptionsCancel.tsx
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
        var10 = var0.listingId;
        var24 = var0.guild;
        var0 = var0.subscription;
        var1 = _closure1_slot14;
        var3 = undefined;
        var8 = var1.bind(var3)();
        var4 = _closure1_slot2;
        var11 = _closure1_slot3;
        var1 = 9;
        var2 = var11[var1];
        var7 = var4.bind(var3)(var2);
        var6 = var7.useTierEmojiIds;
        var2 = var24.id;
        var6 = var6.bind(var7)(var10, var2);
        var2 = _closure1_slot5;
        var7 = 1;
        var6 = var2.bind(var3)(var6, var7);
        var2 = 0;
        var12 = var6[var2];
        var6 = var11[var1];
        var9 = var4.bind(var3)(var6);
        var6 = var9.useChannelBenefits;
        var9 = var6.bind(var9)(var10);
        var6 = _closure1_slot5;
        var6 = var6.bind(var3)(var9, var7);
        var9 = var6[var2];
        var6 = var11[var1];
        var13 = var4.bind(var3)(var6);
        var6 = var13.useIntangibleBenefits;
        var13 = var6.bind(var13)(var10);
        var6 = _closure1_slot5;
        var6 = var6.bind(var3)(var13, var7);
        var6 = var6[var2];
        var1 = var11[var1];
        var4 = var4.bind(var3)(var1);
        var1 = var4.useName;
        var4 = var1.bind(var4)(var10);
        var1 = _closure1_slot5;
        var1 = var1.bind(var3)(var4, var7);
        var23 = var1[var2];
        var10 = _closure1_slot1;
        var1 = 10;
        var1 = var11[var1];
        var1 = var10.bind(var3)(var1);
        var0 = var0.currentPeriodEnd;
        var2 = var1.bind(var3)(var0);
        var1 = var2.format;
        var0 = _closure1_slot12;
        var13 = var1.bind(var2)(var0);
        var7 = _closure1_slot0;
        var16 = 11;
        var0 = var11[var16];
        var0 = var7.bind(var3)(var0);
        var4 = var0.intl;
        var2 = var4.format;
        var0 = var11[var16];
        var0 = var7.bind(var3)(var0);
        var0 = var0.t;
        var1 = var0.EtAXzC;
        var0 = {};
        var0.subscriptionEndDate = var13;
        var17 = var2.bind(var4)(var1, var0);
        var0 = var11[var16];
        var0 = var7.bind(var3)(var0);
        var4 = var0.intl;
        var2 = var4.formatToPlainString;
        var0 = var11[var16];
        var0 = var7.bind(var3)(var0);
        var0 = var0.t;
        var1 = var0.OVlNGT;
        var0 = {};
        var12 = var12.size;
        var0.numEmojis = var12;
        var9 = var9.length;
        var0.numChannels = var9;
        var6 = var6.length;
        var0.numIntangibles = var6;
        var13 = var2.bind(var4)(var1, var0);
        var2 = _closure1_slot11;
        var1 = _closure1_slot7;
        var0 = {};
        var4 = var8.container;
        var0.style = var4;
        var12 = _closure1_slot11;
        var9 = _closure1_slot7;
        var4 = {};
        var6 = var8.header;
        var4.style = var6;
        var15 = _closure1_slot10;
        var6 = 12;
        var6 = var11[var6];
        var14 = var10.bind(var3)(var6);
        var6 = {};
        var6.guild = var24;
        var6 = var15.bind(var3)(var14, var6);
        var14 = new Array(3);
        var14[0] = var6;
        var6 = _closure1_slot15;
        var14[1] = var6;
        var19 = _closure1_slot11;
        var18 = _closure1_slot7;
        var15 = {};
        var22 = _closure1_slot10;
        var6 = 13;
        var20 = var11[var6];
        var20 = var7.bind(var3)(var20);
        var21 = var20.Text;
        var20 = {
            'variant': 'text-md/semibold',
            'color': 'interactive-text-active'
        };
        var20.children = var23;
        var21 = var22.bind(var3)(var21, var20);
        var20 = new Array(3);
        var20[0] = var21;
        var21 = _closure1_slot16;
        var20[1] = var21;
        var23 = _closure1_slot10;
        var21 = var11[var6];
        var21 = var7.bind(var3)(var21);
        var22 = var21.Text;
        var21 = {
            'variant': 'text-sm/medium',
            'color': 'interactive-text-default'
        };
        var24 = var24.name;
        var21.children = var24;
        var21 = var23.bind(var3)(var22, var21);
        var20[2] = var21;
        var15.children = var20;
        var15 = var19.bind(var3)(var18, var15);
        var14[2] = var15;
        var4.children = var14;
        var9 = var12.bind(var3)(var9, var4);
        var4 = new Array(7);
        var4[0] = var9;
        var15 = _closure1_slot10;
        var9 = 14;
        var9 = var11[var9];
        var14 = var10.bind(var3)(var9);
        var12 = {};
        var18 = {};
        var9 = 16;
        var18.marginVertical = var9;
        var12.style = var18;
        var12 = var15.bind(var3)(var14, var12);
        var4[1] = var12;
        var15 = _closure1_slot10;
        var12 = var11[var6];
        var12 = var7.bind(var3)(var12);
        var14 = var12.Text;
        var12 = {
            'variant': 'text-md/semibold',
            'color': 'interactive-text-active'
        };
        var18 = var11[var16];
        var18 = var7.bind(var3)(var18);
        var19 = var18.intl;
        var18 = var19.string;
        var16 = var11[var16];
        var16 = var7.bind(var3)(var16);
        var16 = var16.t;
        var16 = var16["9SgXmT"];
        var16 = var18.bind(var19)(var16);
        var12.children = var16;
        var12 = var15.bind(var3)(var14, var12);
        var4[2] = var12;
        var12 = _closure1_slot17;
        var4[3] = var12;
        var15 = _closure1_slot11;
        var12 = var11[var6];
        var12 = var7.bind(var3)(var12);
        var14 = var12.Text;
        var12 = {
            'variant': 'text-sm/normal',
            'color': 'text-default'
        };
        var16 = new Array(2);
        var16[0] = var17;
        var17 = '\n';
        var16[1] = var17;
        var12.children = var16;
        var12 = var15.bind(var3)(var14, var12);
        var4[4] = var12;
        var12 = _closure1_slot10;
        var6 = var11[var6];
        var6 = var7.bind(var3)(var6);
        var7 = var6.Text;
        var6 = {
            'variant': 'text-sm/medium',
            'color': 'text-default'
        };
        var6.children = var13;
        var6 = var12.bind(var3)(var7, var6);
        var4[5] = var6;
        var7 = _closure1_slot10;
        var5 = 15;
        var5 = var11[var5];
        var6 = var10.bind(var3)(var5);
        var5 = {};
        var9 = var11[var9];
        var9 = var10.bind(var3)(var9);
        var5.source = var9;
        var8 = var8.cactus;
        var5.style = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[6] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot20 = var0;
    var0 = function arg0() {
        _fun83854: for (var _fun83854_ip = 0;;) switch (_fun83854_ip) {
            case 0:
                var2 = arg0;
                var0 = var2.guild;
                var _closure2_slot0 = var0;
                var15 = var2.subscription;
                var _closure2_slot1 = var15;
                var12 = var2.onClose;
                var _closure2_slot2 = var12;
                var2 = _closure1_slot13;
                var3 = undefined;
                var4 = var2.bind(var3)();
                var6 = _closure1_slot6;
                var5 = var6.useState;
                var2 = false;
                var6 = var5.bind(var6)(var2);
                var5 = _closure1_slot5;
                var2 = 2;
                var5 = var5.bind(var3)(var6, var2);
                var2 = 0;
                var9 = var5[var2];
                var2 = 1;
                var2 = var5[var2];
                var _closure2_slot3 = var2;
                var13 = _closure1_slot1;
                var14 = _closure1_slot3;
                var2 = 17;
                var2 = var14[var2];
                var5 = var13.bind(var3)(var2);
                var2 = 18;
                var2 = var14[var2];
                var2 = var13.bind(var3)(var2);
                var2 = var2.GUILD_ROLE_SUBSCRIPTION_CANCELLATION_MODAL;
                var2 = var5.bind(var3)(var2);
                var6 = var2.analyticsLocations;
                var _closure2_slot4 = var6;
                var2 = 19;
                var2 = var14[var2];
                var10 = var13.bind(var3)(var2);
                var7 = var10.useCancelSubscription;
                var5 = var15.id;
                var2 = var15.isACOM;
                var2 = var7.bind(var10)(var5, var2);
                var7 = var2.cancelSubscription;
                var _closure2_slot5 = var7;
                var11 = var2.nativePaymentsConnected;
                var10 = var15.isPurchasedViaAppleGeneric;
                var _closure2_slot6 = var10;
                var5 = _closure1_slot6;
                var2 = var5.useCallback;
                var16 = _closure1_slot4;
                var1 = function*() { // Environment: var1
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun83856: for (var _fun83856_ip = 0;;) switch (_fun83856_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun83856_ip = 753;
                                    continue _fun83856
                                }
                            case 10:
                                var2 = undefined;
                                var7 = undefined;
                                var11 = _closure1_slot1;
                                var12 = _closure1_slot3;
                                var1 = 20;
                                var1 = var12[var1];
                                var9 = var11.bind(var2)(var1);
                                var8 = var9.confirm;
                                var1 = {};
                                var16 = _closure1_slot0;
                                var13 = 11;
                                var3 = var12[var13];
                                var3 = var16.bind(var2)(var3);
                                var15 = var3.intl;
                                var14 = var15.formatToPlainString;
                                var3 = var12[var13];
                                var3 = var16.bind(var2)(var3);
                                var3 = var3.t;
                                var10 = var3.sBs7sh;
                                var4 = {};
                                var17 = _closure2_slot0;
                                var17 = var17.name;
                                var4.guildName = var17;
                                var4 = var14.bind(var15)(var10, var4);
                                var1.title = var4;
                                var4 = 10;
                                var4 = var12[var4];
                                var10 = var11.bind(var2)(var4);
                                var4 = _closure2_slot1;
                                var4 = var4.currentPeriodEnd;
                                var14 = var10.bind(var2)(var4);
                                var10 = var14.format;
                                var4 = _closure1_slot12;
                                var17 = var10.bind(var14)(var4);
                                var4 = global;
                                var10 = var4.HermesInternal;
                                var15 = var10.concat;
                                var14 = 'You can resubscribe any time before ';
                                var10 = '.';
                                var10 = var15.bind(var14)(var17, var10);
                                var1.body = var10;
                                var10 = var12[var13];
                                var10 = var16.bind(var2)(var10);
                                var15 = var10.intl;
                                var14 = var15.string;
                                var10 = var12[var13];
                                var10 = var16.bind(var2)(var10);
                                var10 = var10.t;
                                var10 = var10["3KZjFH"];
                                var10 = var14.bind(var15)(var10);
                                var1.confirmText = var10;
                                var10 = 21;
                                var10 = var12[var10];
                                var10 = var11.bind(var2)(var10);
                                var10 = var10.Colors;
                                var10 = var10.RED;
                                var1.confirmColor = var10;
                                var1 = var8.bind(var9)(var1);
                                SaveGenerator(address = 285);
                            case 283:
                                return var1;
                            case 285:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 8);
                                if (var8) {
                                    _fun83856_ip = 750;
                                    continue _fun83856
                                }
                            case 294:
                                if (!var1) {
                                    _fun83856_ip = 747;
                                    continue _fun83856
                                }
                            case 300:
                                var8 = _closure2_slot3;
                                var10 = true;
                                var8 = var8.bind(var2)(var10);
                            case 311: // try_start_0
                                var9 = false;
                                var7 = false;
                                var8 = _closure2_slot6;
                                if (var8) {
                                    _fun83856_ip = 474;
                                    continue _fun83856
                                }
                            case 325:
                                var8 = _closure2_slot1;
                                var8 = var8.isPurchasedViaDesktop;
                                if (var8) {
                                    _fun83856_ip = 372;
                                    continue _fun83856
                                }
                            case 338:
                                var11 = var4.Error;
                                var4 = var11.prototype;
                                var8 = Object.create(var4, {
                                    constructor: {
                                        value: var11
                                    }
                                });
                                var19 = 'Cancellation not supported for subscription';
                                var20 = var8;
                                var4 = new var20[var11](var19, var18);
                                var4 = var4 instanceof Object ? var4 : var8;
                                throw var4;
                            case 372:
                                var8 = _closure1_slot2;
                                var4 = _closure1_slot3;
                                var12 = 22;
                                var4 = var4[var12];
                                var14 = var8.bind(var2)(var4);
                                var11 = var14.cancelSubscription;
                                var4 = _closure2_slot1;
                                var8 = var4.id;
                                var4 = _closure2_slot4;
                                var4 = var11.bind(var14)(var8, var4);
                                SaveGenerator(address = 421);
                            case 419:
                                return var4;
                            case 421:
                                ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 8);
                                if (var8) {
                                    _fun83856_ip = 471;
                                    continue _fun83856
                                }
                            case 427:
                                var11 = _closure1_slot2;
                                var8 = _closure1_slot3;
                                var8 = var8[var12];
                                var11 = var11.bind(var2)(var8);
                                var8 = var11.fetchSubscriptions;
                                var8 = var8.bind(var11)();
                                SaveGenerator(address = 458);
                            case 456:
                                return var8;
                            case 458:
                                ResumeGenerator(result_out_reg = 8, return_bool_out_reg = 11);
                                if (var11) {
                                    _fun83856_ip = 468;
                                    continue _fun83856
                                }
                            case 464:
                                var7 = true;
                                _fun83856_ip = 495;
                                continue _fun83856;
                            case 468: // try_end0
                                return var8;
                            case 471:
                                return var4;
                            case 474: // try_start_1
                                var4 = _closure2_slot5;
                                var4 = var4.bind(var2)();
                                SaveGenerator(address = 486);
                            case 484:
                                return var4;
                            case 486:
                                ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 8);
                                if (var8) {
                                    _fun83856_ip = 607;
                                    continue _fun83856
                                }
                            case 492:
                                var7 = var4;
                            case 495:
                                var8 = _closure2_slot3;
                                var8 = var8.bind(var2)(var9);
                                if (var7) {
                                    _fun83856_ip = 584;
                                    continue _fun83856
                                }
                            case 507:
                                var12 = _closure1_slot0;
                                var7 = _closure1_slot3;
                                var8 = 23;
                                var8 = var7[var8];
                                var9 = var12.bind(var2)(var8);
                                var8 = var9.presentFailedToast;
                                var10 = var7[var13];
                                var10 = var12.bind(var2)(var10);
                                var11 = var10.intl;
                                var10 = var11.string;
                                var7 = var7[var13];
                                var7 = var12.bind(var2)(var7);
                                var7 = var7.t;
                                var7 = var7.R0RpRX;
                                var7 = var10.bind(var11)(var7);
                                var7 = var8.bind(var9)(var7);
                                _fun83856_ip = 602;
                                continue _fun83856;
                            case 584:
                                var8 = _closure2_slot2;
                                var7 = null;
                                if (!(var7 != var8)) {
                                    _fun83856_ip = 602;
                                    continue _fun83856
                                }
                            case 594:
                                var7 = _closure2_slot2;
                                var7 = var7.bind(var2)();
                            case 602: // try_end1
                                _fun83856_ip = 747;
                                continue _fun83856;
                            case 607:
                                return var4;
                            case 610: // catch_target0 // catch_target1
                                CatchBlockStart(arg_register = 9);
                                var6 = var9;
                                var7 = _closure2_slot3;
                                var4 = false;
                                var4 = var7.bind(var2)(var4);
                                var8 = _closure1_slot0;
                                var7 = _closure1_slot3;
                                var4 = 23;
                                var4 = var7[var4];
                                var10 = var8.bind(var2)(var4);
                                var8 = var10.presentFailedToast;
                                var4 = var9.message;
                                var4 = var8.bind(var10)(var4);
                                var10 = _closure1_slot1;
                                var8 = 24;
                                var7 = var7[var8];
                                var7 = var10.bind(var2)(var7);
                                var7 = var9 instanceof var7;
                                var4 = var7;
                                if (!var7) {
                                    _fun83856_ip = 726;
                                    continue _fun83856
                                }
                            case 688:
                                var6 = var6.code;
                                var7 = _closure1_slot0;
                                var5 = _closure1_slot3;
                                var5 = var5[var8];
                                var5 = var7.bind(var2)(var5);
                                var5 = var5.ErrorCodes;
                                var5 = var5.ALREADY_CANCELED;
                                var4 = var6 === var5;
                            case 726:
                                if (!var4) {
                                    _fun83856_ip = 747;
                                    continue _fun83856
                                }
                            case 729:
                                var5 = _closure2_slot2;
                                var4 = null;
                                if (!(var4 != var5)) {
                                    _fun83856_ip = 747;
                                    continue _fun83856
                                }
                            case 739:
                                var3 = _closure2_slot2;
                                var3 = var3.bind(var2)();
                            case 747:
                                return var2;
                            case 750:
                                return var1;
                            case 753:
                                return var0;
                        }
                    };
                    return var0;
                };
                var1 = var16.bind(var3)(var1);
                var16 = var0.name;
                var0 = new Array(8);
                var0[0] = var16;
                var16 = var15.currentPeriodEnd;
                var0[1] = var16;
                var16 = var15.id;
                var0[2] = var16;
                var15 = var15.isPurchasedViaDesktop;
                var0[3] = var15;
                var0[4] = var10;
                var0[5] = var12;
                var0[6] = var7;
                var0[7] = var6;
                var7 = var2.bind(var5)(var1, var0);
                var2 = _closure1_slot10;
                var1 = _closure1_slot7;
                var0 = {};
                var4 = var4.footer;
                var0.style = var4;
                var6 = _closure1_slot10;
                var12 = 21;
                var4 = var14[var12];
                var5 = var13.bind(var3)(var4);
                var4 = {};
                var12 = var14[var12];
                var12 = var13.bind(var3)(var12);
                var12 = var12.Colors;
                var12 = var12.RED;
                var4.color = var12;
                if (var9) {
                    _fun83854_ip = 371;
                    continue _fun83854
                }
            case 362:
                if (!var10) {
                    _fun83854_ip = 368;
                    continue _fun83854
                }
            case 365:
                var10 = !var11;
            case 368:
                var9 = var10;
            case 371:
                var4.loading = var9;
                var11 = _closure1_slot0;
                var12 = _closure1_slot3;
                var8 = 11;
                var9 = var12[var8];
                var9 = var11.bind(var3)(var9);
                var10 = var9.intl;
                var9 = var10.string;
                var8 = var12[var8];
                var8 = var11.bind(var3)(var8);
                var8 = var8.t;
                var8 = var8.cM1H0K;
                var8 = var9.bind(var10)(var8);
                var4.text = var8;
                var4.onPress = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot21 = var0;
    var0 = function arg0() {
        _fun83857: for (var _fun83857_ip = 0;;) switch (_fun83857_ip) {
            case 0:
                var0 = arg0;
                var10 = var0.subscription;
                var9 = var0.onClose;
                var0 = _closure1_slot13;
                var4 = undefined;
                var16 = var0.bind(var4)();
                var1 = _closure1_slot1;
                var2 = _closure1_slot3;
                var0 = 25;
                var0 = var2[var0];
                var0 = var1.bind(var4)(var0);
                var0 = var0.bind(var4)(var10);
                var20 = var0.listing;
                var11 = var0.guild;
                var1 = _closure1_slot0;
                var0 = 26;
                var0 = var2[var0];
                var3 = var1.bind(var4)(var0);
                var1 = var3.useSubscriptionsSettings;
                var2 = null;
                var5 = var2 == var11;
                var0 = undefined;
                if (var5) {
                    _fun83857_ip = 102;
                    continue _fun83857
                }
            case 97:
                var0 = var11.id;
            case 102:
                var1 = var1.bind(var3)(var0);
                var3 = var2 == var1;
                var0 = undefined;
                if (var3) {
                    _fun83857_ip = 122;
                    continue _fun83857
                }
            case 116:
                var0 = var1.cover_image_asset;
            case 122:
                var1 = var2 != var0;
                var15 = undefined;
                if (!var1) {
                    _fun83857_ip = 134;
                    continue _fun83857
                }
            case 131:
                var15 = var0;
            case 134:
                var1 = var2 == var20;
                var0 = null;
                if (var1) {
                    _fun83857_ip = 570;
                    continue _fun83857
                }
            case 146:
                var1 = var2 == var11;
                var0 = null;
                if (var1) {
                    _fun83857_ip = 570;
                    continue _fun83857
                }
            case 158:
                var3 = _closure1_slot11;
                var2 = _closure1_slot7;
                var1 = {};
                var5 = var16.container;
                var1.style = var5;
                var8 = _closure1_slot11;
                var7 = _closure1_slot8;
                var5 = {};
                var14 = _closure1_slot10;
                var13 = _closure1_slot1;
                var21 = _closure1_slot3;
                var12 = 27;
                var12 = var21[var12];
                var13 = var13.bind(var4)(var12);
                var12 = {};
                var17 = var16.heroImage;
                var12.style = var17;
                var12.asset = var15;
                var13 = var14.bind(var4)(var13, var12);
                var12 = new Array(2);
                var12[0] = var13;
                var15 = _closure1_slot11;
                var14 = _closure1_slot7;
                var13 = {};
                var16 = var16.body;
                var13.style = var16;
                var18 = _closure1_slot10;
                var17 = _closure1_slot20;
                var16 = {};
                var16.guild = var11;
                var19 = var20.id;
                var16.listingId = var19;
                var16.subscription = var10;
                var17 = var18.bind(var4)(var17, var16);
                var16 = new Array(5);
                var16[0] = var17;
                var17 = _closure1_slot18;
                var16[1] = var17;
                var19 = _closure1_slot10;
                var25 = _closure1_slot0;
                var17 = 13;
                var17 = var21[var17];
                var17 = var25.bind(var4)(var17);
                var18 = var17.Text;
                var17 = {
                    'variant': 'text-sm/bold',
                    'color': 'text-default'
                };
                var22 = {};
                var23 = 'uppercase';
                var22.textTransform = var23;
                var17.style = var22;
                var22 = 11;
                var23 = var21[var22];
                var23 = var25.bind(var4)(var23);
                var24 = var23.intl;
                var23 = var24.string;
                var22 = var21[var22];
                var22 = var25.bind(var4)(var22);
                var22 = var22.t;
                var22 = var22.xyvN8p;
                var22 = var23.bind(var24)(var22);
                var17.children = var22;
                var17 = var19.bind(var4)(var18, var17);
                var16[2] = var17;
                var17 = _closure1_slot19;
                var16[3] = var17;
                var19 = _closure1_slot10;
                var18 = _closure1_slot2;
                var17 = 28;
                var17 = var21[var17];
                var17 = var18.bind(var4)(var17);
                var18 = var17.Content;
                var17 = {};
                var20 = var20.id;
                var17.listingId = var20;
                var20 = var11.id;
                var17.guildId = var20;
                var17 = var19.bind(var4)(var18, var17);
                var16[4] = var17;
                var13.children = var16;
                var13 = var15.bind(var4)(var14, var13);
                var12[1] = var13;
                var5.children = var12;
                var7 = var8.bind(var4)(var7, var5);
                var5 = new Array(2);
                var5[0] = var7;
                var8 = _closure1_slot10;
                var7 = _closure1_slot21;
                var6 = {};
                var6.guild = var11;
                var6.subscription = var10;
                var6.onClose = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[1] = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 570:
                return var0;
        }
    };
    var _closure1_slot22 = var0;
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
    var11 = 1;
    var3 = var5[var11];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var13 = 2;
    var3 = var5[var13];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.View;
    var _closure1_slot7 = var7;
    var3 = var3.ScrollView;
    var _closure1_slot8 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot10 = var7;
    var3 = var3.jsxs;
    var _closure1_slot11 = var3;
    var3 = 'M/DD/YY';
    var _closure1_slot12 = var3;
    var3 = 6;
    var8 = var5[var3];
    var14 = var4.bind(var0)(var8);
    var10 = var14.createStyles;
    var9 = {};
    var8 = {};
    var8.flex = var11;
    var9.container = var8;
    var11 = 24;
    var8 = 16;
    var12 = {
        'marginVertical': 24,
        'marginHorizontal': 16
    };
    var9.body = var12;
    var12 = {
        'width': '100%',
        'height': null,
        'aspectRatio': 2.5684931506849313
    };
    var12.height = var0;
    var9.heroImage = var12;
    var15 = {
        'borderTopColor': null,
        'borderTopWidth': 1,
        'padding': 16
    };
    var12 = 7;
    var16 = var5[var12];
    var16 = var6.bind(var0)(var16);
    var16 = var16.colors;
    var16 = var16.INTERACTIVE_BACKGROUND_HOVER;
    var15.borderTopColor = var16;
    var9.footer = var15;
    var9 = var10.bind(var14)(var9);
    var _closure1_slot13 = var9;
    var3 = var5[var3];
    var10 = var4.bind(var0)(var3);
    var9 = var10.createStyles;
    var3 = {};
    var14 = {};
    var15 = var5[var12];
    var15 = var6.bind(var0)(var15);
    var15 = var15.colors;
    var15 = var15.BACKGROUND_SURFACE_HIGH;
    var14.backgroundColor = var15;
    var12 = var5[var12];
    var12 = var6.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.md;
    var14.borderRadius = var12;
    var12 = 12;
    var14.paddingVertical = var12;
    var14.paddingHorizontal = var8;
    var3.container = var14;
    var14 = {
        'flex': 1,
        'flexDirection': 'row'
    };
    var3.header = var14;
    var14 = {
        'width': 99,
        'position': 'absolute',
        'right': 16,
        'bottom': 12
    };
    var3.cactus = var14;
    var3 = var9.bind(var10)(var3);
    var _closure1_slot14 = var3;
    var3 = 8;
    var9 = var5[var3];
    var10 = var6.bind(var0)(var9);
    var9 = {};
    var9.size = var8;
    var9 = var7.bind(var0)(var10, var9);
    var _closure1_slot15 = var9;
    var9 = var5[var3];
    var10 = var6.bind(var0)(var9);
    var9 = {};
    var9.size = var13;
    var9 = var7.bind(var0)(var10, var9);
    var _closure1_slot16 = var9;
    var9 = var5[var3];
    var10 = var6.bind(var0)(var9);
    var9 = {};
    var9.size = var12;
    var9 = var7.bind(var0)(var10, var9);
    var _closure1_slot17 = var9;
    var9 = var5[var3];
    var10 = var6.bind(var0)(var9);
    var9 = {};
    var9.size = var11;
    var9 = var7.bind(var0)(var10, var9);
    var _closure1_slot18 = var9;
    var3 = var5[var3];
    var6 = var6.bind(var0)(var3);
    var3 = {};
    var3.size = var8;
    var3 = var7.bind(var0)(var6, var3);
    var _closure1_slot19 = var3;
    var3 = 30;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_role_subscriptions/native/manage_subscriptions/UserSettingsGuildRoleSubscriptionsCancel.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun83858: for (var _fun83858_ip = 0;;) switch (_fun83858_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.subscriptionId;
                var _closure2_slot0 = var2;
                var5 = var1.onClose;
                var3 = _closure1_slot0;
                var4 = _closure1_slot3;
                var2 = 29;
                var2 = var4[var2];
                var4 = undefined;
                var6 = var3.bind(var4)(var2);
                var3 = var6.useStateFromStores;
                var7 = _closure1_slot9;
                var2 = new Array(1);
                var2[0] = var7;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot9;
                    var1 = var2.getSubscriptionById;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var6 = var3.bind(var6)(var2, var0);
                var0 = null;
                var2 = var0 == var6;
                if (var2) {
                    _fun83858_ip = 111;
                    continue _fun83858
                }
            case 85:
                var3 = _closure1_slot10;
                var2 = _closure1_slot22;
                var1 = {};
                var1.subscription = var6;
                var1.onClose = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 111:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 27, 3119, 33, 1297, 671, 8880, 10678, 3047, 1234, 7356, 3938, 10668, 5426, 10686, 5785, 5639, 8882, 3933, 4849, 3440, 3149, 3350, 10674, 10663, 10687, 10688, 566, 2]);