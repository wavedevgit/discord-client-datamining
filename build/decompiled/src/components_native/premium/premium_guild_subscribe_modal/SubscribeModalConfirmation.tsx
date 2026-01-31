// components_native/premium/premium_guild_subscribe_modal/SubscribeModalConfirmation.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun78230: for (var _fun78230_ip = 0;;) switch (_fun78230_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.slots;
                var1 = _closure1_slot21;
                var4 = undefined;
                var9 = var1.bind(var4)();
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 13;
                var1 = var5[var1];
                var7 = var3.bind(var4)(var1);
                var5 = var7.useStateFromStores;
                var1 = _closure1_slot12;
                var3 = new Array(1);
                var3[0] = var1;
                var1 = function() { // Environment: var0
                    var1 = _closure1_slot12;
                    var0 = var1.getPremiumTypeSubscription;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var14 = var5.bind(var7)(var3, var1);
                var1 = var2.filter;
                var0 = function(arg0) { // Environment: var0
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 14;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.isGuildBoostSlotCanceled;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var13 = var1.bind(var2)(var0);
                var3 = var13.length;
                var2 = null;
                var1 = 0;
                var0 = null;
                if (!(var1 !== var3)) {
                    _fun78230_ip = 343;
                    continue _fun78230
                }
            case 109:
                var1 = var2 == var14;
                var0 = null;
                if (var1) {
                    _fun78230_ip = 343;
                    continue _fun78230
                }
            case 121:
                var3 = _closure1_slot19;
                var2 = _closure1_slot7;
                var1 = {};
                var5 = var9.pendingCancellation;
                var1.style = var5;
                var8 = _closure1_slot18;
                var7 = _closure1_slot6;
                var5 = {};
                var10 = var9.pendingCancellationIcon;
                var5.style = var10;
                var11 = _closure1_slot1;
                var15 = _closure1_slot2;
                var10 = 15;
                var10 = var15[var10];
                var10 = var11.bind(var4)(var10);
                var5.source = var10;
                var7 = var8.bind(var4)(var7, var5);
                var5 = new Array(2);
                var5[0] = var7;
                var8 = _closure1_slot18;
                var10 = _closure1_slot0;
                var6 = 16;
                var6 = var15[var6];
                var6 = var10.bind(var4)(var6);
                var7 = var6.Text;
                var6 = {};
                var9 = var9.pendingCancellationMessage;
                var6.style = var9;
                var9 = 'text-sm/medium';
                var6.variant = var9;
                var9 = 17;
                var11 = var15[var9];
                var11 = var10.bind(var4)(var11);
                var12 = var11.intl;
                var11 = var12.format;
                var9 = var15[var9];
                var9 = var10.bind(var4)(var9);
                var9 = var9.t;
                var10 = var9.SFpsCH;
                var9 = {};
                var14 = var14.currentPeriodEnd;
                var9.date = var14;
                var13 = var13.length;
                var9.canceledCount = var13;
                var9 = var11.bind(var12)(var10, var9);
                var6.children = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[1] = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 343:
                return var0;
        }
    };
    var _closure1_slot22 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var15 = var0.guild;
        var11 = var0.isModifyingSubscription;
        var17 = var0.slots;
        var0 = var0.onPremiumGuildSubscribe;
        var _closure2_slot0 = var0;
        var0 = _closure1_slot21;
        var3 = undefined;
        var9 = var0.bind(var3)();
        var2 = _closure1_slot19;
        var1 = _closure1_slot20;
        var0 = {};
        var6 = _closure1_slot18;
        var5 = _closure1_slot6;
        var4 = {};
        var7 = var9.subscribeImage;
        var4.style = var7;
        var7 = _closure1_slot1;
        var18 = _closure1_slot2;
        var10 = 18;
        var10 = var18[var10];
        var10 = var7.bind(var3)(var10);
        var4.source = var10;
        var5 = var6.bind(var3)(var5, var4);
        var4 = new Array(6);
        var4[0] = var5;
        var16 = _closure1_slot18;
        var14 = _closure1_slot0;
        var5 = 16;
        var6 = var18[var5];
        var6 = var14.bind(var3)(var6);
        var10 = var6.Text;
        var6 = {
            'style': null,
            'variant': 'heading-lg/extrabold',
            'color': 'mobile-text-heading-primary'
        };
        var13 = var9.header;
        var6.style = var13;
        var13 = 17;
        var19 = var18[var13];
        var19 = var14.bind(var3)(var19);
        var21 = var19.intl;
        var20 = var21.string;
        var19 = var18[var13];
        var19 = var14.bind(var3)(var19);
        var19 = var19.t;
        var19 = var19.yTlZV0;
        var19 = var20.bind(var21)(var19);
        var6.children = var19;
        var6 = var16.bind(var3)(var10, var6);
        var4[1] = var6;
        var10 = _closure1_slot18;
        var6 = 19;
        var6 = var18[var6];
        var7 = var7.bind(var3)(var6);
        var6 = {};
        var16 = var9.guildPreview;
        var6.style = var16;
        var6.guild = var15;
        var6 = var10.bind(var3)(var7, var6);
        var4[2] = var6;
        var7 = _closure1_slot18;
        var5 = var18[var5];
        var5 = var14.bind(var3)(var5);
        var6 = var5.Text;
        var5 = {};
        var15 = var9.blurb;
        var10 = new Array(2);
        var10[0] = var15;
        var15 = var9.warning;
        var10[1] = var15;
        var5.style = var10;
        var10 = 'text-sm/medium';
        var5.variant = var10;
        var10 = var18[var13];
        var10 = var14.bind(var3)(var10);
        var19 = var10.intl;
        var16 = var19.format;
        var10 = var18[var13];
        var10 = var14.bind(var3)(var10);
        var10 = var10.t;
        var15 = var10.KPnDlu;
        var10 = {};
        var20 = _closure1_slot16;
        var10.days = var20;
        var20 = var17.length;
        var10.slotCount = var20;
        var10 = var16.bind(var19)(var15, var10);
        var5.children = var10;
        var5 = var7.bind(var3)(var6, var5);
        var4[3] = var5;
        var7 = _closure1_slot18;
        var6 = _closure1_slot22;
        var5 = {};
        var5.slots = var17;
        var5 = var7.bind(var3)(var6, var5);
        var4[4] = var5;
        var7 = _closure1_slot18;
        var6 = _closure1_slot7;
        var5 = {};
        var9 = var9.confirmButton;
        var5.style = var9;
        var10 = _closure1_slot18;
        var8 = 20;
        var8 = var18[var8];
        var8 = var14.bind(var3)(var8);
        var9 = var8.Button;
        var8 = {};
        var15 = 'primary';
        var8.variant = var15;
        var15 = var18[var13];
        var15 = var14.bind(var3)(var15);
        var16 = var15.intl;
        var15 = var16.formatToPlainString;
        var13 = var18[var13];
        var13 = var14.bind(var3)(var13);
        var13 = var13.t;
        var14 = var13.ZU5x5w;
        var13 = {};
        var17 = var17.length;
        var13.slotCount = var17;
        var13 = var15.bind(var16)(var14, var13);
        var8.text = var13;
        var12 = function() {
            var2 = _closure2_slot0;
            var0 = undefined;
            var1 = false;
            var1 = var2.bind(var0)(var1);
            return var0;
        };
        var8.onPress = var12;
        var8.loading = var11;
        var8 = var10.bind(var3)(var9, var8);
        var5.children = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[5] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot23 = var0;
    var0 = function arg0() {
        _fun78235: for (var _fun78235_ip = 0;;) switch (_fun78235_ip) {
            case 0:
                var0 = arg0;
                var23 = var0.guild;
                var13 = var0.isModifyingSubscription;
                var19 = var0.previousGuildSubscriptionSlots;
                var _closure2_slot0 = var19;
                var0 = var0.onPremiumGuildSubscribe;
                var _closure2_slot1 = var0;
                var0 = _closure1_slot21;
                var4 = undefined;
                var5 = var0.bind(var4)();
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 21;
                var0 = var3[var0];
                var6 = var2.bind(var4)(var0);
                var0 = var6.useGuildSubscriptionRemovalSource;
                var9 = var0.bind(var6)();
                var0 = 13;
                var0 = var3[var0];
                var6 = var2.bind(var4)(var0);
                var3 = var6.useStateFromStores;
                var0 = _closure1_slot10;
                var2 = new Array(1);
                var2[0] = var0;
                var0 = function() { // Environment: var14
                    _fun78236: for (var _fun78236_ip = 0;;) switch (_fun78236_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var1 = var2.find;
                            var0 = function(arg0) { // Environment: var0
                                var0 = arg0;
                                var1 = var0.premiumGuildSubscription;
                                var0 = null;
                                var0 = var0 != var1;
                                return var0;
                            };
                            var0 = var1.bind(var2)(var0);
                            var1 = null;
                            var4 = var1 == var0;
                            var2 = undefined;
                            if (var4) {
                                _fun78236_ip = 57;
                                continue _fun78236
                            }
                        case 37:
                            var0 = var0.premiumGuildSubscription;
                            var1 = var1 == var0;
                            var2 = undefined;
                            if (var1) {
                                _fun78236_ip = 57;
                                continue _fun78236
                            }
                        case 52:
                            var2 = var0.guildId;
                        case 57:
                            var1 = _closure1_slot10;
                            var0 = var1.getGuild;
                            var0 = var0.bind(var1)(var2);
                            return var0;
                    }
                };
                var24 = var3.bind(var6)(var2, var0);
                var0 = null;
                if (!(var0 != var24)) {
                    _fun78235_ip = 1078;
                    continue _fun78235
                }
            case 130:
                var3 = _closure1_slot19;
                var2 = _closure1_slot20;
                var0 = {};
                var8 = _closure1_slot18;
                var7 = _closure1_slot6;
                var6 = {};
                var10 = var5.transferImage;
                var6.style = var10;
                var6.source = var9;
                var7 = var8.bind(var4)(var7, var6);
                var6 = new Array(6);
                var6[0] = var7;
                var9 = _closure1_slot18;
                var16 = _closure1_slot0;
                var20 = _closure1_slot2;
                var11 = 16;
                var7 = var20[var11];
                var7 = var16.bind(var4)(var7);
                var8 = var7.Text;
                var7 = {
                    'style': null,
                    'variant': 'heading-lg/extrabold',
                    'color': 'mobile-text-heading-primary'
                };
                var10 = var5.header;
                var7.style = var10;
                var15 = 17;
                var10 = var20[var15];
                var10 = var16.bind(var4)(var10);
                var17 = var10.intl;
                var12 = var17.string;
                var10 = var20[var15];
                var10 = var16.bind(var4)(var10);
                var10 = var10.t;
                var10 = var10.h92jfS;
                var10 = var12.bind(var17)(var10);
                var7.children = var10;
                var7 = var9.bind(var4)(var8, var7);
                var6[1] = var7;
                var9 = _closure1_slot18;
                var7 = var20[var11];
                var7 = var16.bind(var4)(var7);
                var8 = var7.Text;
                var7 = {};
                var10 = var5.blurb;
                var7.style = var10;
                var10 = 'text-sm/medium';
                var7.variant = var10;
                var10 = var20[var15];
                var10 = var16.bind(var4)(var10);
                var18 = var10.intl;
                var17 = var18.format;
                var10 = var20[var15];
                var10 = var16.bind(var4)(var10);
                var10 = var10.t;
                var12 = var10.SSA2lu;
                var10 = {};
                var21 = var19.length;
                var10.slotCount = var21;
                var26 = 1;
                var10.guildCount = var26;
                var10 = var17.bind(var18)(var12, var10);
                var7.children = var10;
                var7 = var9.bind(var4)(var8, var7);
                var6[2] = var7;
                var9 = _closure1_slot19;
                var8 = _closure1_slot7;
                var7 = {};
                var10 = var5.transferPreviews;
                var7.style = var10;
                var17 = _closure1_slot18;
                var10 = var20[var11];
                var10 = var16.bind(var4)(var10);
                var12 = var10.Text;
                var10 = {
                    'style': null,
                    'variant': 'eyebrow',
                    'color': 'text-default'
                };
                var18 = var5.previewHeader;
                var10.style = var18;
                var18 = var20[var15];
                var18 = var16.bind(var4)(var18);
                var25 = var18.intl;
                var22 = var25.format;
                var18 = var20[var15];
                var18 = var16.bind(var4)(var18);
                var18 = var18.t;
                var21 = var18["5zQYEz"];
                var18 = {};
                var18.guildCount = var26;
                var18 = var22.bind(var25)(var21, var18);
                var10.children = var18;
                var12 = var17.bind(var4)(var12, var10);
                var10 = new Array(4);
                var10[0] = var12;
                var22 = _closure1_slot18;
                var21 = _closure1_slot1;
                var18 = 19;
                var12 = var20[var18];
                var17 = var21.bind(var4)(var12);
                var12 = {};
                var25 = var5.guildPreview;
                var12.style = var25;
                var12.guild = var24;
                var12 = var22.bind(var4)(var17, var12);
                var10[1] = var12;
                var17 = _closure1_slot18;
                var11 = var20[var11];
                var11 = var16.bind(var4)(var11);
                var12 = var11.Text;
                var11 = {
                    'style': null,
                    'variant': 'eyebrow',
                    'color': 'text-default'
                };
                var22 = var5.previewHeader;
                var11.style = var22;
                var22 = var20[var15];
                var22 = var16.bind(var4)(var22);
                var26 = var22.intl;
                var25 = var26.format;
                var22 = var20[var15];
                var22 = var16.bind(var4)(var22);
                var22 = var22.t;
                var24 = var22.ct6oxD;
                var22 = {};
                var27 = var19.length;
                var22.slotCount = var27;
                var22 = var25.bind(var26)(var24, var22);
                var11.children = var22;
                var11 = var17.bind(var4)(var12, var11);
                var10[2] = var11;
                var17 = _closure1_slot18;
                var11 = 22;
                var11 = var20[var11];
                var12 = var21.bind(var4)(var11);
                var11 = {};
                var24 = var5.guildPreview;
                var22 = new Array(2);
                var22[0] = var24;
                var24 = var5.activeTransferGuildCardBorder;
                var22[1] = var24;
                var11.style = var22;
                var22 = 23;
                var24 = var20[var22];
                var24 = var16.bind(var4)(var24);
                var24 = var24.HorizontalGradient;
                var24 = var24.START;
                var11.start = var24;
                var24 = var20[var22];
                var24 = var16.bind(var4)(var24);
                var24 = var24.HorizontalGradient;
                var24 = var24.END;
                var11.end = var24;
                var22 = var20[var22];
                var22 = var16.bind(var4)(var22);
                var22 = var22.Gradients;
                var22 = var22.PREMIUM_GUILD;
                var11.colors = var22;
                var22 = _closure1_slot18;
                var18 = var20[var18];
                var21 = var21.bind(var4)(var18);
                var18 = {};
                var18.guild = var23;
                var18 = var22.bind(var4)(var21, var18);
                var11.children = var18;
                var11 = var17.bind(var4)(var12, var11);
                var10[3] = var11;
                var7.children = var10;
                var7 = var9.bind(var4)(var8, var7);
                var6[3] = var7;
                var9 = _closure1_slot18;
                var8 = _closure1_slot22;
                var7 = {};
                var7.slots = var19;
                var7 = var9.bind(var4)(var8, var7);
                var6[4] = var7;
                var9 = _closure1_slot18;
                var8 = _closure1_slot7;
                var7 = {};
                var10 = var5.confirmButton;
                var7.style = var10;
                var12 = _closure1_slot18;
                var10 = 20;
                var10 = var20[var10];
                var10 = var16.bind(var4)(var10);
                var11 = var10.Button;
                var10 = {};
                var17 = 'primary';
                var10.variant = var17;
                var17 = var20[var15];
                var17 = var16.bind(var4)(var17);
                var18 = var17.intl;
                var17 = var18.formatToPlainString;
                var15 = var20[var15];
                var15 = var16.bind(var4)(var15);
                var15 = var15.t;
                var16 = var15.Oh6mxU;
                var15 = {};
                var19 = var19.length;
                var15.slotCount = var19;
                var15 = var17.bind(var18)(var16, var15);
                var10.text = var15;
                var14 = function() {
                    var2 = _closure2_slot1;
                    var1 = undefined;
                    var0 = true;
                    var0 = var2.bind(var1)(var0);
                    return var0;
                };
                var10.onPress = var14;
                var10.loading = var13;
                var10 = var12.bind(var4)(var11, var10);
                var7.children = var10;
                var7 = var9.bind(var4)(var8, var7);
                var6[5] = var7;
                var0.children = var6;
                var0 = var3.bind(var4)(var2, var0);
                _fun78235_ip = 1104;
                continue _fun78235;
            case 1078:
                var3 = _closure1_slot18;
                var2 = _closure1_slot5;
                var1 = {};
                var5 = var5.loading;
                var1.style = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 1104:
                return var0;
        }
    };
    var _closure1_slot24 = var0;
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
    var3 = 1;
    var6 = var5[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var11 = 2;
    var3 = var5[var11];
    var3 = var4.bind(var0)(var3);
    var6 = var3.ActivityIndicator;
    var _closure1_slot5 = var6;
    var6 = var3.Image;
    var _closure1_slot6 = var6;
    var14 = var3.StyleSheet;
    var6 = var3.View;
    var _closure1_slot7 = var6;
    var3 = var3.ScrollView;
    var _closure1_slot8 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot12 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.AnalyticEvents;
    var _closure1_slot13 = var6;
    var6 = var3.AnalyticsObjects;
    var _closure1_slot14 = var6;
    var6 = var3.AnalyticsSections;
    var _closure1_slot15 = var6;
    var3 = var3.GUILD_BOOST_APPLY_COOLDOWN_DAYS;
    var _closure1_slot16 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.BoostPurchaseIntent;
    var _closure1_slot17 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot18 = var6;
    var6 = var3.jsxs;
    var _closure1_slot19 = var6;
    var3 = var3.Fragment;
    var _closure1_slot20 = var3;
    var3 = 10;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'paddingHorizontal': 24,
        'marginBottom': 24
    };
    var3.content = var8;
    var13 = '100%';
    var8 = {
        'alignItems': 'center',
        'width': '100%'
    };
    var3.scrollableContent = var8;
    var8 = {
        'marginTop': 105,
        'alignSelf': 'center'
    };
    var3.subscribeImage = var8;
    var8 = {
        'marginTop': 65,
        'alignSelf': 'center'
    };
    var3.transferImage = var8;
    var12 = 32;
    var8 = {
        'marginTop': 32,
        'marginBottom': 8
    };
    var3.header = var8;
    var9 = 16;
    var8 = {
        'marginTop': 16,
        'width': '100%'
    };
    var3.transferPreviews = var8;
    var8 = {
        'lineHeight': 16,
        'marginTop': 16,
        'letterSpacing': 0.2
    };
    var3.previewHeader = var8;
    var8 = {
        'marginTop': 8,
        'width': '100%'
    };
    var3.guildPreview = var8;
    var8 = {
        'lineHeight': 18,
        'textAlign': 'center'
    };
    var3.blurb = var8;
    var8 = {};
    var8.marginTop = var9;
    var3.warning = var8;
    var8 = {
        'marginTop': 16,
        'padding': 16,
        'backgroundColor': null,
        'alignItems': 'center',
        'flexDirection': 'row'
    };
    var9 = 11;
    var9 = var5[var9];
    var18 = var4.bind(var0)(var9);
    var17 = var18.hexWithOpacity;
    var9 = 12;
    var15 = var5[var9];
    var15 = var10.bind(var0)(var15);
    var15 = var15.unsafe_rawColors;
    var16 = var15.YELLOW_300;
    var15 = 0.1;
    var15 = var17.bind(var18)(var16, var15);
    var8.backgroundColor = var15;
    var15 = var5[var9];
    var15 = var10.bind(var0)(var15);
    var15 = var15.radii;
    var15 = var15.xs;
    var8.borderRadius = var15;
    var15 = var5[var9];
    var15 = var10.bind(var0)(var15);
    var15 = var15.unsafe_rawColors;
    var15 = var15.YELLOW_300;
    var8.borderColor = var15;
    var14 = var14.hairlineWidth;
    var8.borderWidth = var14;
    var8.width = var13;
    var3.pendingCancellation = var8;
    var8 = {
        'marginLeft': 10,
        'flexShrink': 1
    };
    var3.pendingCancellationMessage = var8;
    var8 = {
        'flexShrink': 0,
        'width': 20,
        'height': 20
    };
    var3.pendingCancellationIcon = var8;
    var8 = {};
    var8.marginTop = var12;
    var3.loading = var8;
    var8 = {
        'marginTop': 32,
        'width': '100%'
    };
    var3.confirmButton = var8;
    var8 = {};
    var8.padding = var11;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.radii;
    var9 = var9.xs;
    var8.borderRadius = var9;
    var3.activeTransferGuildCardBorder = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot21 = var3;
    var3 = 31;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'components_native/premium/premium_guild_subscribe_modal/SubscribeModalConfirmation.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun78239: for (var _fun78239_ip = 0;;) switch (_fun78239_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.guildId;
                var _closure2_slot0 = var2;
                var2 = var1.guildBoostSlots;
                var _closure2_slot1 = var2;
                var2 = var1.location;
                var _closure2_slot2 = var2;
                var3 = var1.intent;
                var _closure2_slot3 = var3;
                var1 = var1.onResult;
                var _closure2_slot4 = var1;
                var3 = _closure1_slot21;
                var4 = undefined;
                var5 = var3.bind(var4)();
                var7 = _closure1_slot4;
                var3 = var7.useRef;
                var3 = var3.bind(var7)(var2);
                var _closure2_slot5 = var3;
                var6 = var7.useEffect;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = function() { // Environment: var0
                    var1 = _closure2_slot5;
                    var0 = _closure2_slot2;
                    var1.current = var0;
                    var0 = undefined;
                    return var0;
                };
                var2 = var6.bind(var7)(var2, var3);
                var6 = var7.useEffect;
                var3 = function() { // Environment: var0
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 24;
                    var1 = var1[var0];
                    var0 = undefined;
                    var4 = var2.bind(var0)(var1);
                    var3 = var4.track;
                    var1 = _closure1_slot13;
                    var2 = var1.OPEN_MODAL;
                    var1 = {};
                    var5 = _closure1_slot15;
                    var5 = var5.PREMIUM_GUILD_SUBSCRIBE_CONFIRMATION_MODAL;
                    var1.type = var5;
                    var5 = _closure2_slot5;
                    var5 = var5.current;
                    var1.location = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var2 = new Array(0);
                var2 = var6.bind(var7)(var3, var2);
                var3 = _closure1_slot1;
                var6 = _closure1_slot2;
                var2 = 25;
                var2 = var6[var2];
                var2 = var3.bind(var4)(var2);
                var2 = var2.bind(var4)();
                var3 = _closure1_slot0;
                var2 = 13;
                var7 = var6[var2];
                var10 = var3.bind(var4)(var7);
                var9 = var10.useStateFromStores;
                var7 = _closure1_slot10;
                var8 = new Array(1);
                var8[0] = var7;
                var7 = function() { // Environment: var0
                    var2 = _closure1_slot10;
                    var1 = var2.getGuild;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var15 = var9.bind(var10)(var8, var7);
                var _closure2_slot6 = var15;
                var7 = var6[var2];
                var10 = var3.bind(var4)(var7);
                var9 = var10.useStateFromStores;
                var7 = _closure1_slot9;
                var8 = new Array(1);
                var8[0] = var7;
                var7 = function() { // Environment: var0
                    var0 = _closure1_slot9;
                    var0 = var0.isModifyingAppliedBoost;
                    return var0;
                };
                var12 = var9.bind(var10)(var8, var7);
                var2 = var6[var2];
                var7 = var3.bind(var4)(var2);
                var6 = var7.useStateFromStoresArray;
                var2 = _closure1_slot11;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = function() { // Environment: var0
                    _fun78244: for (var _fun78244_ip = 0;;) switch (_fun78244_ip) {
                        case 0:
                            var3 = _closure2_slot1;
                            var2 = null;
                            if (!(var2 != var3)) {
                                _fun78244_ip = 30;
                                continue _fun78244
                            }
                        case 15:
                            var2 = _closure2_slot1;
                            var3 = var2.length;
                            var2 = 0;
                            if (!(!(var3 > var2))) {
                                _fun78244_ip = 149;
                                continue _fun78244
                            }
                        case 30:
                            var3 = _closure1_slot11;
                            var3 = var3.hasFetched;
                            if (var3) {
                                _fun78244_ip = 52;
                                continue _fun78244
                            }
                        case 46:
                            var3 = new Array(0);
                            _fun78244_ip = 115;
                            continue _fun78244;
                        case 52:
                            var4 = global;
                            var5 = var4.Object;
                            var4 = var5.values;
                            var2 = _closure1_slot11;
                            var2 = var2.boostSlots;
                            var5 = var4.bind(var5)(var2);
                            var4 = var5.filter;
                            var2 = function(arg0) { // Environment: var1
                                var1 = arg0;
                                var0 = var1.isAvailable;
                                var0 = var0.bind(var1)();
                                return var0;
                            };
                            var4 = var4.bind(var5)(var2);
                            var2 = var4.sort;
                            var1 = function(arg0) { // Environment: var1
                                _fun78246: for (var _fun78246_ip = 0;;) switch (_fun78246_ip) {
                                    case 0:
                                        var2 = _closure1_slot0;
                                        var1 = _closure1_slot2;
                                        var0 = 14;
                                        var1 = var1[var0];
                                        var0 = undefined;
                                        var2 = var2.bind(var0)(var1);
                                        var1 = var2.isGuildBoostSlotCanceled;
                                        var0 = arg0;
                                        var1 = var1.bind(var2)(var0);
                                        var0 = -1;
                                        if (!var1) {
                                            _fun78246_ip = 51;
                                            continue _fun78246
                                        }
                                    case 48:
                                        var0 = 1;
                                    case 51:
                                        return var0;
                                }
                            };
                            var3 = var2.bind(var4)(var1);
                        case 115:
                            var1 = var3.length;
                            var2 = 0;
                            if (!(!(var1 > var2))) {
                                _fun78244_ip = 132;
                                continue _fun78244
                            }
                        case 126:
                            var1 = new Array(0);
                            _fun78244_ip = 147;
                            continue _fun78244;
                        case 132:
                            var3 = var3[var2];
                            var2 = new Array(1);
                            var2[0] = var3;
                            var1 = var2;
                        case 147:
                            return var1;
                        case 149:
                            var0 = _closure2_slot1;
                            return var0;
                    }
                };
                var13 = var6.bind(var7)(var3, var2);
                var _closure2_slot7 = var13;
                var3 = var13.some;
                var2 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var1 = var0.premiumGuildSubscription;
                    var0 = null;
                    var0 = var0 != var1;
                    return var0;
                };
                var8 = var3.bind(var13)(var2);
                var0 = function() { // Environment: var0
                    var3 = _closure1_slot3;
                    var2 = undefined;
                    var1 = function*(arg0) { // Environment: var0
                        var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                            _fun78250: for (var _fun78250_ip = 0;;) switch (_fun78250_ip) {
                                case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                    if (var1) {
                                        _fun78250_ip = 558;
                                        continue _fun78250
                                    }
                                case 12:
                                    var3 = arg0;
                                    var4 = _closure1_slot1;
                                    var2 = _closure1_slot2;
                                    var1 = 26;
                                    var2 = var2[var1];
                                    var1 = undefined;
                                    var7 = var4.bind(var1)(var2);
                                    var6 = _closure2_slot7;
                                    var8 = var6.length;
                                    var6 = 0;
                                    var6 = var8 > var6;
                                    var4 = var6;
                                    if (!var6) {
                                        _fun78250_ip = 86;
                                        continue _fun78250
                                    }
                                case 64:
                                    var9 = _closure2_slot7;
                                    var8 = var9.every;
                                    var6 = function(arg0) { // Environment: var11
                                        _fun78251: for (var _fun78251_ip = 0;;) switch (_fun78251_ip) {
                                            case 0:
                                                var2 = arg0;
                                                var1 = var2.cooldownEndsAt;
                                                var0 = null;
                                                var0 = var0 == var1;
                                                if (var0) {
                                                    _fun78251_ip = 80;
                                                    continue _fun78251
                                                }
                                            case 18:
                                                var1 = global;
                                                var4 = var1.Date;
                                                var5 = var2.cooldownEndsAt;
                                                var3 = var4.prototype;
                                                var3 = Object.create(var3, {
                                                    constructor: {
                                                        value: var4
                                                    }
                                                });
                                                var6 = var3;
                                                var2 = new var6[var4](var5, var4);
                                                var3 = var2 instanceof Object ? var2 : var3;
                                                var2 = var3.valueOf;
                                                var2 = var2.bind(var3)();
                                                var3 = var1.Date;
                                                var1 = var3.now;
                                                var1 = var1.bind(var3)();
                                                var0 = var2 < var1;
                                            case 80:
                                                return var0;
                                        }
                                    };
                                    var4 = var8.bind(var9)(var6);
                                case 86:
                                    var6 = var4;
                                    var4 = 'Cannot use a premium guild subscription slot while on cooldown';
                                    var4 = var7.bind(var1)(var6, var4);
                                case 101: // try_start_0
                                    if (!var3) {
                                        _fun78250_ip = 157;
                                        continue _fun78250
                                    }
                                case 104:
                                    var3 = global;
                                    var6 = var3.Promise;
                                    var4 = var6.all;
                                    var8 = _closure2_slot7;
                                    var7 = var8.map;
                                    var3 = function(arg0) { // Environment: var11
                                        _fun78252: for (var _fun78252_ip = 0;;) switch (_fun78252_ip) {
                                            case 0:
                                                var0 = arg0;
                                                var1 = var0.premiumGuildSubscription;
                                                var0 = null;
                                                if (!(var0 == var1)) {
                                                    _fun78252_ip = 35;
                                                    continue _fun78252
                                                }
                                            case 15:
                                                var0 = global;
                                                var2 = var0.Promise;
                                                var0 = var2.resolve;
                                                var0 = var0.bind(var2)();
                                                _fun78252_ip = 82;
                                                continue _fun78252;
                                            case 35:
                                                var4 = _closure1_slot0;
                                                var3 = _closure1_slot2;
                                                var2 = 27;
                                                var3 = var3[var2];
                                                var2 = undefined;
                                                var4 = var4.bind(var2)(var3);
                                                var3 = var4.unapplyFromGuild;
                                                var2 = var1.guildId;
                                                var1 = var1.id;
                                                var0 = var3.bind(var4)(var2, var1);
                                            case 82:
                                                return var0;
                                        }
                                    };
                                    var3 = var7.bind(var8)(var3);
                                    var3 = var4.bind(var6)(var3);
                                    SaveGenerator(address = 148);
                                case 146:
                                    return var3;
                                case 148:
                                    ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 4);
                                    if (var4) {
                                        _fun78250_ip = 389;
                                        continue _fun78250
                                    }
                                case 157:
                                    var6 = _closure1_slot0;
                                    var7 = _closure1_slot2;
                                    var4 = 27;
                                    var4 = var7[var4];
                                    var9 = var6.bind(var1)(var4);
                                    var8 = var9.applyToGuild;
                                    var4 = _closure2_slot6;
                                    var7 = var4.id;
                                    var10 = _closure2_slot7;
                                    var6 = var10.map;
                                    var4 = function(arg0) { // Environment: var11
                                        var0 = arg0;
                                        var0 = var0.id;
                                        return var0;
                                    };
                                    var6 = var6.bind(var10)(var4);
                                    var10 = _closure2_slot3;
                                    var4 = _closure1_slot17;
                                    var4 = var4.PERK;
                                    var4 = var10 === var4;
                                    var4 = var8.bind(var9)(var7, var6, var4);
                                    SaveGenerator(address = 242);
                                case 240:
                                    return var4;
                                case 242:
                                    ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 6);
                                    if (var6) {
                                        _fun78250_ip = 386;
                                        continue _fun78250
                                    }
                                case 251:
                                    var7 = _closure2_slot4;
                                    var6 = null;
                                    if (!(var6 != var7)) {
                                        _fun78250_ip = 272;
                                        continue _fun78250
                                    }
                                case 261:
                                    var7 = _closure2_slot4;
                                    var6 = true;
                                    var6 = var7.bind(var1)(var6);
                                case 272:
                                    var7 = _closure1_slot1;
                                    var8 = _closure1_slot2;
                                    var6 = 28;
                                    var6 = var8[var6];
                                    var10 = var7.bind(var1)(var6);
                                    var9 = var10.openLazy;
                                    var6 = {};
                                    var11 = function() {
                                        var2 = _closure1_slot0;
                                        var0 = _closure1_slot2;
                                        var1 = 30;
                                        var1 = var0[var1];
                                        var3 = undefined;
                                        var2 = var2.bind(var3)(var1);
                                        var1 = 29;
                                        var1 = var0[var1];
                                        var0 = var0.paths;
                                        var2 = var2.bind(var3)(var1, var0);
                                        var1 = var2.then;
                                        var0 = function(arg0) { // Environment: var0
                                            var1 = arg0;
                                            var1 = var1.default;
                                            var _closure7_slot0 = var1;
                                            var0 = function(arg0) { // Environment: var0
                                                var3 = _closure1_slot18;
                                                var2 = _closure7_slot0;
                                                var1 = {};
                                                var6 = arg0;
                                                var7 = var1;
                                                var0 = copyDataProperties(var7, var6);
                                                var5 = _closure2_slot0;
                                                var4 = 'guildId';
                                                var1[var4] = var5;
                                                var4 = _closure2_slot1;
                                                var0 = 'guildBoostSlots';
                                                var1[var0] = var4;
                                                var0 = undefined;
                                                var0 = var3.bind(var0)(var2, var1);
                                                return var0;
                                            };
                                            return var0;
                                        };
                                        var0 = var1.bind(var2)(var0);
                                        return var0;
                                    };
                                    var6.importer = var11;
                                    var6 = var9.bind(var10)(var6);
                                    var6 = 24;
                                    var6 = var8[var6];
                                    var9 = var7.bind(var1)(var6);
                                    var8 = var9.track;
                                    var6 = _closure1_slot13;
                                    var7 = var6.MODAL_DISMISSED;
                                    var6 = {};
                                    var10 = _closure1_slot15;
                                    var10 = var10.PREMIUM_GUILD_SUBSCRIBE_CONFIRMATION_MODAL;
                                    var6.type = var10;
                                    var10 = _closure1_slot14;
                                    var10 = var10.BUTTON_CTA;
                                    var6.location_object = var10;
                                    var6 = var8.bind(var9)(var7, var6);
                                case 381: // try_end0
                                    _fun78250_ip = 555;
                                    continue _fun78250;
                                case 386:
                                    return var4;
                                case 389:
                                    return var3;
                                case 392: // catch_target0
                                    CatchBlockStart(arg_register = 3);
                                    var4 = _closure2_slot4;
                                    var3 = null;
                                    if (!(var3 != var4)) {
                                        _fun78250_ip = 415;
                                        continue _fun78250
                                    }
                                case 404:
                                    var3 = _closure2_slot4;
                                    var2 = false;
                                    var2 = var3.bind(var1)(var2);
                                case 415:
                                    var3 = _closure1_slot1;
                                    var9 = _closure1_slot2;
                                    var2 = 28;
                                    var2 = var9[var2];
                                    var4 = var3.bind(var1)(var2);
                                    var3 = var4.show;
                                    var2 = {};
                                    var8 = _closure1_slot0;
                                    var5 = 17;
                                    var6 = var9[var5];
                                    var6 = var8.bind(var1)(var6);
                                    var10 = var6.intl;
                                    var7 = var10.string;
                                    var6 = var9[var5];
                                    var6 = var8.bind(var1)(var6);
                                    var6 = var6.t;
                                    var6 = var6.Kx5W0V;
                                    var6 = var7.bind(var10)(var6);
                                    var2.title = var6;
                                    var6 = var9[var5];
                                    var6 = var8.bind(var1)(var6);
                                    var7 = var6.intl;
                                    var6 = var7.string;
                                    var5 = var9[var5];
                                    var5 = var8.bind(var1)(var5);
                                    var5 = var5.t;
                                    var5 = var5.XueBVY;
                                    var5 = var6.bind(var7)(var5);
                                    var2.body = var5;
                                    var2 = var3.bind(var4)(var2);
                                case 555:
                                    return var1;
                                case 558:
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
                var14 = var0.bind(var4)();
                var2 = var13.length;
                var0 = 0;
                if (!(var0 !== var2)) {
                    _fun78239_ip = 461;
                    continue _fun78239
                }
            case 332:
                var3 = _closure1_slot18;
                var2 = _closure1_slot7;
                var0 = {};
                var7 = _closure1_slot8;
                var6 = {};
                var9 = var5.scrollableContent;
                var6.contentContainerStyle = var9;
                var9 = var5.content;
                var6.style = var9;
                var11 = _closure1_slot18;
                if (var8) {
                    _fun78239_ip = 408;
                    continue _fun78239
                }
            case 375:
                var9 = _closure1_slot23;
                var8 = {};
                var8.guild = var15;
                var8.slots = var13;
                var8.isModifyingSubscription = var12;
                var8.onPremiumGuildSubscribe = var14;
                var8 = var11.bind(var4)(var9, var8);
                _fun78239_ip = 439;
                continue _fun78239;
            case 408:
                var10 = _closure1_slot24;
                var9 = {};
                var9.guild = var15;
                var9.onPremiumGuildSubscribe = var14;
                var9.previousGuildSubscriptionSlots = var13;
                var9.isModifyingSubscription = var12;
                var8 = var11.bind(var4)(var10, var9);
            case 439:
                var6.children = var8;
                var6 = var3.bind(var4)(var7, var6);
                var0.children = var6;
                var0 = var3.bind(var4)(var2, var0);
                _fun78239_ip = 487;
                continue _fun78239;
            case 461:
                var3 = _closure1_slot18;
                var2 = _closure1_slot5;
                var1 = {};
                var5 = var5.loading;
                var1.style = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 487:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 31, 27, 9917, 1410, 6670, 3076, 660, 6679, 33, 1297, 3199, 671, 566, 6669, 7419, 3900, 1234, 9918, 9919, 4043, 9928, 4057, 670, 795, 9862, 44, 6672, 3895, 9932, 1307, 2]);