// modules/premium/native/PremiumPlanWhatYouLoseActionSheet.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var14 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var14;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var4);
    var8 = 0;
    var7 = var6[var8];
    var4 = metroImportAll;
    var0 = undefined;
    var4 = var4.bind(var0)(var7);
    var _closure1_slot3 = var4;
    var7 = 1;
    var4 = var6[var7];
    var4 = var5.bind(var0)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.PremiumTypes;
    var _closure1_slot5 = var4;
    var9 = 3;
    var9 = var6[var9];
    var9 = var5.bind(var0)(var9);
    var9 = var9.SubscriptionStatusTypes;
    var _closure1_slot6 = var9;
    var9 = 4;
    var9 = var6[var9];
    var9 = var5.bind(var0)(var9);
    var10 = var9.jsx;
    var _closure1_slot7 = var10;
    var9 = var9.jsxs;
    var _closure1_slot8 = var9;
    var9 = 5;
    var9 = var6[var9];
    var11 = var5.bind(var0)(var9);
    var10 = var11.createStyles;
    var9 = {};
    var12 = {
        'paddingTop': 24,
        'paddingHorizontal': 24
    };
    var9.body = var12;
    var12 = {};
    var15 = 8;
    var12.marginBottom = var15;
    var13 = 6;
    var16 = var6[var13];
    var16 = var14.bind(var0)(var16);
    var16 = var16.colors;
    var16 = var16.MOBILE_TEXT_HEADING_PRIMARY;
    var12.color = var16;
    var9.title = var12;
    var12 = {};
    var16 = 16;
    var12.marginBottom = var16;
    var17 = var6[var13];
    var17 = var14.bind(var0)(var17);
    var17 = var17.colors;
    var17 = var17.MOBILE_TEXT_HEADING_PRIMARY;
    var12.color = var17;
    var9.subtitle = var12;
    var12 = {
        'marginBottom': 16,
        'borderRadius': null,
        'display': 'flex',
        'flexDirection': 'column',
        'justifyContent': 'center',
        'alignItems': 'center',
        'backgroundColor': null,
        'padding': 16
    };
    var17 = var6[var13];
    var17 = var14.bind(var0)(var17);
    var17 = var17.radii;
    var17 = var17.sm;
    var12.borderRadius = var17;
    var17 = var6[var13];
    var17 = var14.bind(var0)(var17);
    var17 = var17.colors;
    var17 = var17.BACKGROUND_BASE_LOWEST;
    var12.backgroundColor = var17;
    var9.item = var12;
    var12 = {};
    var12.marginTop = var15;
    var9.itemLabel = var12;
    var12 = {};
    var12.paddingHorizontal = var16;
    var9.footer = var12;
    var12 = {};
    var12.marginBottom = var15;
    var9.button = var12;
    var12 = {};
    var15 = var6[var13];
    var15 = var14.bind(var0)(var15);
    var15 = var15.radii;
    var15 = var15.round;
    var12.borderRadius = var15;
    var9.roundedButton = var12;
    var12 = {};
    var15 = var6[var13];
    var15 = var14.bind(var0)(var15);
    var15 = var15.colors;
    var15 = var15.BACKGROUND_MOD_SUBTLE;
    var12.backgroundColor = var15;
    var9.keepButton = var12;
    var12 = {
        'textAlign': 'center',
        'paddingVertical': 8
    };
    var13 = var6[var13];
    var13 = var14.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.TEXT_SUBTLE;
    var12.color = var13;
    var9.keepText = var12;
    var9 = var10.bind(var11)(var9);
    var _closure1_slot9 = var9;
    var9 = var1.Set;
    var10 = var4.TIER_1;
    var1 = new Array(2);
    var1[0] = var10;
    var4 = var4.TIER_2;
    var1[1] = var4;
    var4 = var9.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var9
        }
    });
    var21 = var4;
    var20 = var1;
    var1 = new var21[var9](var20, var19);
    var1 = var1 instanceof Object ? var1 : var4;
    var _closure1_slot10 = var1;
    var1 = function arg0() {
        var0 = arg0;
        var11 = var0.imageSource;
        var8 = var0.text;
        var0 = _closure1_slot9;
        var3 = undefined;
        var9 = var0.bind(var3)();
        var2 = _closure1_slot8;
        var1 = _closure1_slot4;
        var0 = {};
        var4 = var9.item;
        var0.style = var4;
        var7 = _closure1_slot7;
        var6 = _closure1_slot1;
        var10 = _closure1_slot2;
        var4 = 7;
        var4 = var10[var4];
        var6 = var6.bind(var3)(var4);
        var4 = {};
        var4.source = var11;
        var6 = var7.bind(var3)(var6, var4);
        var4 = new Array(2);
        var4[0] = var6;
        var6 = _closure1_slot0;
        var5 = 8;
        var5 = var10[var5];
        var5 = var6.bind(var3)(var5);
        var6 = var5.Text;
        var5 = {};
        var10 = 'text-md/medium';
        var5.variant = var10;
        var9 = var9.itemLabel;
        var5.style = var9;
        var5.children = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot11 = var1;
    var1 = {};
    var1.DOWNGRADE = var8;
    var4 = 'DOWNGRADE';
    var1[var8] = var4;
    var1.CANCEL = var7;
    var4 = 'CANCEL';
    var1[var7] = var4;
    var _closure1_slot12 = var1;
    var4 = 28;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/native/PremiumPlanWhatYouLoseActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function arg0() {
        _fun59286: for (var _fun59286_ip = 0;;) switch (_fun59286_ip) {
            case 0:
                var0 = arg0;
                var17 = var0.mode;
                var1 = var0.onContinue;
                var _closure2_slot0 = var1;
                var5 = var0.subscription;
                var _closure2_slot1 = var5;
                var3 = undefined;
                var _closure2_slot5 = var3;
                var0 = function() {
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 19;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.hideActionSheet;
                    var1 = var1.bind(var2)();
                    return var0;
                };
                var _closure2_slot6 = var0;
                var0 = function arg0() {
                    var3 = _closure2_slot0;
                    var0 = undefined;
                    var2 = arg0;
                    var2 = var3.bind(var0)(var2);
                    var1 = _closure2_slot6;
                    var1 = var1.bind(var0)();
                    return var0;
                };
                var _closure2_slot7 = var0;
                var0 = _closure1_slot9;
                var14 = var0.bind(var3)();
                var1 = _closure1_slot0;
                var4 = _closure1_slot2;
                var23 = 9;
                var0 = var4[var23];
                var2 = var1.bind(var3)(var0);
                var0 = var2.getPremiumTypeFromSubscription;
                var24 = var0.bind(var2)(var5);
                var _closure2_slot2 = var24;
                var2 = _closure1_slot1;
                var0 = 10;
                var0 = var4[var0];
                var0 = var2.bind(var3)(var0);
                var0 = var0.bind(var3)();
                var0 = var0.analyticsLocations;
                var _closure2_slot3 = var0;
                var0 = 11;
                var0 = var4[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.useWhatYouLoseProfileTier1Source;
                var0 = var0.bind(var1)();
                var _closure2_slot4 = var0;
                var1 = 12;
                var1 = var4[var1];
                var6 = var2.bind(var3)(var1);
                var2 = null;
                var4 = var2 != var24;
                var1 = 'Expected premium type';
                var1 = var6.bind(var3)(var4, var1);
                var1 = var5.renewalMutations;
                var2 = var2 != var1;
                if (!var2) {
                    _fun59286_ip = 218;
                    continue _fun59286
                }
            case 199:
                var4 = var5.status;
                var1 = _closure1_slot6;
                var1 = var1.CANCELED;
                var2 = var4 !== var1;
            case 218:
                if (!var2) {
                    _fun59286_ip = 263;
                    continue _fun59286
                }
            case 221:
                var4 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var23];
                var4 = var4.bind(var3)(var1);
                var1 = var4.getPremiumTypeFromSubscriptionRenewalMutations;
                var4 = var1.bind(var4)(var5);
                var1 = _closure1_slot5;
                var1 = var1.TIER_0;
                var2 = var4 === var1;
            case 263:
                var1 = _closure1_slot12;
                var1 = var1.CANCEL;
                var1 = var17 === var1;
                if (!var1) {
                    _fun59286_ip = 294;
                    continue _fun59286
                }
            case 280:
                var5 = _closure1_slot10;
                var4 = var5.has;
                var1 = var4.bind(var5)(var24);
            case 294:
                if (!var1) {
                    _fun59286_ip = 300;
                    continue _fun59286
                }
            case 297:
                var1 = !var2;
            case 300:
                _closure2_slot5 = var1;
                var4 = _closure1_slot3;
                var2 = var4.useMemo;
                var1 = new Array(2);
                var1[0] = var24;
                var1[1] = var0;
                var0 = function() { // Environment: var13
                    _fun59289: for (var _fun59289_ip = 0;;) switch (_fun59289_ip) {
                        case 0:
                            var3 = _closure2_slot2;
                            var2 = _closure1_slot5;
                            var2 = var2.TIER_0;
                            if (!(var2 !== var3)) {
                                _fun59289_ip = 558;
                                continue _fun59289
                            }
                        case 27:
                            var2 = _closure1_slot5;
                            var2 = var2.TIER_1;
                            if (!(var2 !== var3)) {
                                _fun59289_ip = 315;
                                continue _fun59289
                            }
                        case 44:
                            var2 = _closure1_slot5;
                            var2 = var2.TIER_2;
                            if (!(var2 !== var3)) {
                                _fun59289_ip = 64;
                                continue _fun59289
                            }
                        case 58:
                            var2 = new Array(0);
                            return var2;
                        case 64:
                            var3 = {};
                            var7 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var2 = 18;
                            var2 = var9[var2];
                            var8 = undefined;
                            var2 = var7.bind(var8)(var2);
                            var3.imageSource = var2;
                            var5 = _closure1_slot0;
                            var4 = 14;
                            var2 = var9[var4];
                            var2 = var5.bind(var8)(var2);
                            var11 = var2.intl;
                            var10 = var11.format;
                            var2 = var9[var4];
                            var2 = var5.bind(var8)(var2);
                            var2 = var2.t;
                            var6 = var2["gpqr+n"];
                            var2 = {};
                            var2 = var10.bind(var11)(var6, var2);
                            var3.text = var2;
                            var2 = new Array(3);
                            var2[0] = var3;
                            var3 = {};
                            var6 = 17;
                            var6 = var9[var6];
                            var6 = var7.bind(var8)(var6);
                            var3.imageSource = var6;
                            var6 = var9[var4];
                            var6 = var5.bind(var8)(var6);
                            var12 = var6.intl;
                            var11 = var12.format;
                            var6 = var9[var4];
                            var6 = var5.bind(var8)(var6);
                            var6 = var6.t;
                            var10 = var6.wRxEDW;
                            var6 = {};
                            var6 = var11.bind(var12)(var10, var6);
                            var3.text = var6;
                            var2[1] = var3;
                            var3 = {};
                            var6 = 16;
                            var6 = var9[var6];
                            var6 = var7.bind(var8)(var6);
                            var3.imageSource = var6;
                            var6 = var9[var4];
                            var6 = var5.bind(var8)(var6);
                            var7 = var6.intl;
                            var6 = var7.format;
                            var4 = var9[var4];
                            var4 = var5.bind(var8)(var4);
                            var4 = var4.t;
                            var5 = var4["4WZ7T2"];
                            var4 = {};
                            var4 = var6.bind(var7)(var5, var4);
                            var3.text = var4;
                            var2[2] = var3;
                            return var2;
                        case 315:
                            var2 = {};
                            var1 = _closure2_slot4;
                            var2.imageSource = var1;
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var3 = 14;
                            var1 = var8[var3];
                            var4 = undefined;
                            var1 = var7.bind(var4)(var1);
                            var9 = var1.intl;
                            var6 = var9.format;
                            var1 = var8[var3];
                            var1 = var7.bind(var4)(var1);
                            var1 = var1.t;
                            var5 = var1.xCaYwE;
                            var1 = {};
                            var1 = var6.bind(var9)(var5, var1);
                            var2.text = var1;
                            var1 = new Array(3);
                            var1[0] = var2;
                            var2 = {};
                            var6 = _closure1_slot1;
                            var5 = 16;
                            var5 = var8[var5];
                            var5 = var6.bind(var4)(var5);
                            var2.imageSource = var5;
                            var5 = var8[var3];
                            var5 = var7.bind(var4)(var5);
                            var11 = var5.intl;
                            var10 = var11.format;
                            var5 = var8[var3];
                            var5 = var7.bind(var4)(var5);
                            var5 = var5.t;
                            var9 = var5.wK04T1;
                            var5 = {};
                            var5 = var10.bind(var11)(var9, var5);
                            var2.text = var5;
                            var1[1] = var2;
                            var2 = {};
                            var5 = 17;
                            var5 = var8[var5];
                            var5 = var6.bind(var4)(var5);
                            var2.imageSource = var5;
                            var5 = var8[var3];
                            var5 = var7.bind(var4)(var5);
                            var6 = var5.intl;
                            var5 = var6.format;
                            var3 = var8[var3];
                            var3 = var7.bind(var4)(var3);
                            var3 = var3.t;
                            var4 = var3.K4Hv69;
                            var3 = {};
                            var3 = var5.bind(var6)(var4, var3);
                            var2.text = var3;
                            var1[2] = var2;
                            return var1;
                        case 558:
                            var1 = {};
                            var5 = _closure1_slot1;
                            var7 = _closure1_slot2;
                            var2 = 13;
                            var2 = var7[var2];
                            var6 = undefined;
                            var2 = var5.bind(var6)(var2);
                            var1.imageSource = var2;
                            var3 = _closure1_slot0;
                            var2 = 14;
                            var0 = var7[var2];
                            var0 = var3.bind(var6)(var0);
                            var9 = var0.intl;
                            var8 = var9.format;
                            var0 = var7[var2];
                            var0 = var3.bind(var6)(var0);
                            var0 = var0.t;
                            var4 = var0["0hUHi6"];
                            var0 = {};
                            var0 = var8.bind(var9)(var4, var0);
                            var1.text = var0;
                            var0 = new Array(2);
                            var0[0] = var1;
                            var1 = {};
                            var4 = 15;
                            var4 = var7[var4];
                            var4 = var5.bind(var6)(var4);
                            var1.imageSource = var4;
                            var4 = var7[var2];
                            var4 = var3.bind(var6)(var4);
                            var5 = var4.intl;
                            var4 = var5.format;
                            var2 = var7[var2];
                            var2 = var3.bind(var6)(var2);
                            var2 = var2.t;
                            var3 = var2.wFWO6D;
                            var2 = {};
                            var2 = var4.bind(var5)(var3, var2);
                            var1.text = var2;
                            var0[1] = var1;
                            return var0;
                    }
                };
                var11 = var2.bind(var4)(var0, var1);
                var2 = _closure1_slot8;
                var8 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 24;
                var0 = var7[var0];
                var0 = var8.bind(var3)(var0);
                var1 = var0.BottomSheet;
                var0 = {};
                var10 = _closure1_slot7;
                var5 = _closure1_slot1;
                var4 = 25;
                var4 = var7[var4];
                var5 = var5.bind(var3)(var4);
                var4 = {};
                var4.premiumType = var24;
                var5 = var10.bind(var3)(var5, var4);
                var4 = new Array(3);
                var4[0] = var5;
                var6 = _closure1_slot4;
                var5 = {};
                var9 = var14.body;
                var5.style = var9;
                var9 = 8;
                var7 = var7[var9];
                var7 = var8.bind(var3)(var7);
                var8 = var7.Text;
                var7 = {};
                var15 = 'heading-xl/extrabold';
                var7.variant = var15;
                var15 = var14.title;
                var7.style = var15;
                var15 = _closure1_slot12;
                var15 = var15.CANCEL;
                if (!(var17 !== var15)) {
                    _fun59286_ip = 535;
                    continue _fun59286
                }
            case 476:
                var19 = _closure1_slot0;
                var20 = _closure1_slot2;
                var15 = 14;
                var16 = var20[var15];
                var16 = var19.bind(var3)(var16);
                var18 = var16.intl;
                var16 = var18.string;
                var15 = var20[var15];
                var15 = var19.bind(var3)(var15);
                var15 = var15.t;
                var15 = var15["7VcWW0"];
                var15 = var16.bind(var18)(var15);
                _fun59286_ip = 592;
                continue _fun59286;
            case 535:
                var20 = _closure1_slot0;
                var21 = _closure1_slot2;
                var16 = 14;
                var18 = var21[var16];
                var18 = var20.bind(var3)(var18);
                var19 = var18.intl;
                var18 = var19.string;
                var16 = var21[var16];
                var16 = var20.bind(var3)(var16);
                var16 = var16.t;
                var16 = var16.PWq8TL;
                var15 = var18.bind(var19)(var16);
            case 592:
                var7.children = var15;
                var8 = var10.bind(var3)(var8, var7);
                var7 = new Array(3);
                var7[0] = var8;
                var15 = _closure1_slot7;
                var10 = _closure1_slot0;
                var8 = _closure1_slot2;
                var8 = var8[var9];
                var8 = var10.bind(var3)(var8);
                var10 = var8.Text;
                var8 = {};
                var16 = 'text-md/medium';
                var8.variant = var16;
                var16 = var14.subtitle;
                var8.style = var16;
                var16 = _closure1_slot12;
                var16 = var16.CANCEL;
                if (!(var17 !== var16)) {
                    _fun59286_ip = 760;
                    continue _fun59286
                }
            case 670:
                var21 = _closure1_slot0;
                var20 = _closure1_slot2;
                var16 = 14;
                var17 = var20[var16];
                var17 = var21.bind(var3)(var17);
                var19 = var17.intl;
                var18 = var19.format;
                var16 = var20[var16];
                var16 = var21.bind(var3)(var16);
                var16 = var16.t;
                var17 = var16.Qk34Ik;
                var16 = {};
                var20 = var20[var23];
                var22 = var21.bind(var3)(var20);
                var21 = var22.getPremiumTypeDisplayName;
                var20 = true;
                var20 = var21.bind(var22)(var24, var20);
                var16.subscriptionName = var20;
                var16 = var18.bind(var19)(var17, var16);
                _fun59286_ip = 848;
                continue _fun59286;
            case 760:
                var22 = _closure1_slot0;
                var21 = _closure1_slot2;
                var17 = 14;
                var18 = var21[var17];
                var18 = var22.bind(var3)(var18);
                var20 = var18.intl;
                var19 = var20.format;
                var17 = var21[var17];
                var17 = var22.bind(var3)(var17);
                var17 = var17.t;
                var18 = var17.jh5mUz;
                var17 = {};
                var21 = var21[var23];
                var23 = var22.bind(var3)(var21);
                var22 = var23.getPremiumTypeDisplayName;
                var21 = true;
                var21 = var22.bind(var23)(var24, var21);
                var17.subscriptionName = var21;
                var16 = var19.bind(var20)(var18, var17);
            case 848:
                var8.children = var16;
                var8 = var15.bind(var3)(var10, var8);
                var7[1] = var8;
                var10 = var11.map;
                var8 = function(arg0, arg1) { // Environment: var13
                    var4 = _closure1_slot7;
                    var3 = _closure1_slot11;
                    var2 = {};
                    var6 = arg0;
                    var7 = var2;
                    var0 = copyDataProperties(var7, var6);
                    var1 = undefined;
                    var0 = arg1;
                    var0 = var4.bind(var1)(var3, var2, var0);
                    return var0;
                };
                var8 = var10.bind(var11)(var8);
                var7[2] = var8;
                var5.children = var7;
                var5 = var2.bind(var3)(var6, var5);
                var4[1] = var5;
                var7 = _closure1_slot8;
                var6 = _closure1_slot4;
                var5 = {};
                var8 = var14.footer;
                var5.style = var8;
                var11 = _closure1_slot7;
                var18 = _closure1_slot1;
                var16 = _closure1_slot2;
                var17 = 26;
                var8 = var16[var17];
                var10 = var18.bind(var3)(var8);
                var8 = {};
                var15 = var14.button;
                var8.style = var15;
                var15 = _closure1_slot0;
                var12 = 14;
                var19 = var16[var12];
                var19 = var15.bind(var3)(var19);
                var21 = var19.intl;
                var20 = var21.string;
                var19 = var16[var12];
                var19 = var15.bind(var3)(var19);
                var19 = var19.t;
                var19 = var19["3PatSz"];
                var19 = var20.bind(var21)(var19);
                var8.text = var19;
                var17 = var16[var17];
                var17 = var18.bind(var3)(var17);
                var17 = var17.Colors;
                var17 = var17.BRAND;
                var8.color = var17;
                var17 = function() {
                    _fun59291: for (var _fun59291_ip = 0;;) switch (_fun59291_ip) {
                        case 0:
                            var3 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 27;
                            var1 = var1[var0];
                            var0 = undefined;
                            var1 = var3.bind(var0)(var1);
                            var6 = var1.NitroDowngradeModalExperiment;
                            var5 = var6.getCurrentConfig;
                            var4 = {};
                            var1 = 'c41775_1';
                            var4.location = var1;
                            var3 = {};
                            var7 = _closure2_slot5;
                            var3.autoTrackExposure = var7;
                            var3 = var5.bind(var6)(var4, var3);
                            var3 = var3.enabled;
                            var4 = _closure2_slot5;
                            if (!var4) {
                                _fun59291_ip = 84;
                                continue _fun59291
                            }
                        case 81:
                            if (var3) {
                                _fun59291_ip = 146;
                                continue _fun59291
                            }
                        case 84:
                            var3 = _closure2_slot7;
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var2 = 20;
                            var4 = var6[var2];
                            var4 = var5.bind(var0)(var4);
                            var4 = var4.STEP_ANALYTICS_NAMES;
                            var2 = var6[var2];
                            var2 = var5.bind(var0)(var2);
                            var2 = var2.CancellationFlowSteps;
                            var2 = var2.WHAT_YOU_LOSE;
                            var2 = var4[var2];
                            var2 = var3.bind(var0)(var2);
                            _fun59291_ip = 162;
                            continue _fun59291;
                        case 146:
                            var2 = _closure2_slot2;
                            var1 = function arg0() {
                                var7 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var9 = 20;
                                var3 = var1[var9];
                                var0 = undefined;
                                var8 = var7.bind(var0)(var3);
                                var4 = var8.trackPremiumSubscriptionCancellationFlowStep;
                                var3 = {};
                                var6 = _closure2_slot1;
                                var3.subscription = var6;
                                var5 = _closure2_slot3;
                                var3.analyticsLocations = var5;
                                var10 = var1[var9];
                                var10 = var7.bind(var0)(var10);
                                var11 = var10.STEP_ANALYTICS_NAMES;
                                var10 = var1[var9];
                                var10 = var7.bind(var0)(var10);
                                var10 = var10.CancellationFlowSteps;
                                var10 = var10.WHAT_YOU_LOSE;
                                var10 = var11[var10];
                                var3.fromStep = var10;
                                var10 = var1[var9];
                                var10 = var7.bind(var0)(var10);
                                var10 = var10.STEP_ANALYTICS_NAMES;
                                var9 = var1[var9];
                                var9 = var7.bind(var0)(var9);
                                var9 = var9.CancellationFlowSteps;
                                var9 = var9.DOWNGRADE_TO_TIER_0;
                                var9 = var10[var9];
                                var3.toStep = var9;
                                var3 = var4.bind(var8)(var3);
                                var3 = _closure1_slot1;
                                var2 = 19;
                                var2 = var1[var2];
                                var4 = var3.bind(var0)(var2);
                                var2 = var4.hideActionSheet;
                                var2 = var2.bind(var4)();
                                var2 = 21;
                                var2 = var1[var2];
                                var4 = var3.bind(var0)(var2);
                                var3 = var4.pushLazy;
                                var2 = 23;
                                var2 = var1[var2];
                                var7 = var7.bind(var0)(var2);
                                var2 = 22;
                                var2 = var1[var2];
                                var1 = var1.paths;
                                var2 = var7.bind(var0)(var2, var1);
                                var1 = {};
                                var1.subscription = var6;
                                var1.analyticsLocations = var5;
                                var5 = arg0;
                                var1.currentPremiumType = var5;
                                var5 = function() {
                                    var3 = _closure1_slot1;
                                    var5 = _closure1_slot2;
                                    var0 = 21;
                                    var2 = var5[var0];
                                    var0 = undefined;
                                    var3 = var3.bind(var0)(var2);
                                    var2 = var3.pop;
                                    var2 = var2.bind(var3)();
                                    var2 = _closure2_slot7;
                                    var4 = _closure1_slot0;
                                    var1 = 20;
                                    var3 = var5[var1];
                                    var3 = var4.bind(var0)(var3);
                                    var3 = var3.STEP_ANALYTICS_NAMES;
                                    var1 = var5[var1];
                                    var1 = var4.bind(var0)(var1);
                                    var1 = var1.CancellationFlowSteps;
                                    var1 = var1.DOWNGRADE_TO_TIER_0;
                                    var1 = var3[var1];
                                    var1 = var2.bind(var0)(var1);
                                    return var0;
                                };
                                var1.continueToCancel = var5;
                                var1 = var3.bind(var4)(var2, var1);
                                return var0;
                            };
                            var1 = var1.bind(var0)(var2);
                        case 162:
                            return var0;
                    }
                };
                var8.onPress = var17;
                var10 = var11.bind(var3)(var10, var8);
                var8 = new Array(2);
                var8[0] = var10;
                var9 = var16[var9];
                var9 = var15.bind(var3)(var9);
                var10 = var9.Text;
                var9 = {};
                var17 = 'text-sm/medium';
                var9.variant = var17;
                var14 = var14.keepText;
                var9.style = var14;
                var13 = function() {
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var5 = 20;
                    var1 = var8[var5];
                    var0 = undefined;
                    var4 = var7.bind(var0)(var1);
                    var3 = var4.trackPremiumSubscriptionCancellationFlowStep;
                    var2 = {};
                    var6 = _closure2_slot1;
                    var2.subscription = var6;
                    var6 = _closure2_slot3;
                    var2.analyticsLocations = var6;
                    var6 = var8[var5];
                    var6 = var7.bind(var0)(var6);
                    var6 = var6.STEP_ANALYTICS_NAMES;
                    var5 = var8[var5];
                    var5 = var7.bind(var0)(var5);
                    var5 = var5.CancellationFlowSteps;
                    var5 = var5.WHAT_YOU_LOSE;
                    var5 = var6[var5];
                    var2.fromStep = var5;
                    var5 = null;
                    var2.toStep = var5;
                    var2 = var3.bind(var4)(var2);
                    var1 = _closure2_slot6;
                    var1 = var1.bind(var0)();
                    return var0;
                };
                var9.onPress = var13;
                var13 = var16[var12];
                var13 = var15.bind(var3)(var13);
                var14 = var13.intl;
                var13 = var14.string;
                var12 = var16[var12];
                var12 = var15.bind(var3)(var12);
                var12 = var12.t;
                var12 = var12.rzVN6j;
                var12 = var13.bind(var14)(var12);
                var9.children = var12;
                var9 = var11.bind(var3)(var10, var9);
                var8[1] = var9;
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var3;
    var2.WhatYouLoseMode = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1623, 660, 33, 1297, 671, 4704, 3941, 3109, 5730, 7274, 44, 7279, 1234, 7280, 7281, 7282, 7283, 3278, 7124, 4561, 7284, 1307, 4933, 7075, 4875, 7308, 2]);