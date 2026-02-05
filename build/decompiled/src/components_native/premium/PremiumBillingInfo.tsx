// components_native/premium/PremiumBillingInfo.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var13 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var6;
    var1 = function arg0() {
        _fun59517: for (var _fun59517_ip = 0;;) switch (_fun59517_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.style;
                var9 = var0.subscription;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 7;
                var0 = var3[var0];
                var4 = undefined;
                var2 = var2.bind(var4)(var0);
                var0 = var2.isAndroid;
                var2 = var0.bind(var2)();
                var0 = null;
                if (!var2) {
                    _fun59517_ip = 230;
                    continue _fun59517
                }
            case 57:
                var2 = var9.isPurchasedViaGoogle;
                var0 = null;
                if (!var2) {
                    _fun59517_ip = 230;
                    continue _fun59517
                }
            case 71:
                var3 = _closure1_slot6;
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var1 = 8;
                var1 = var12[var1];
                var1 = var11.bind(var4)(var1);
                var2 = var1.TextWithIOSLinkWorkaround;
                var1 = {
                    'style': null,
                    'variant': 'text-sm/medium',
                    'color': 'text-link'
                };
                var5 = new Array(1);
                var5[0] = var6;
                var1.style = var5;
                var5 = 9;
                var6 = var12[var5];
                var6 = var11.bind(var4)(var6);
                var8 = var6.intl;
                var7 = var8.format;
                var5 = var12[var5];
                var5 = var11.bind(var4)(var5);
                var5 = var5.t;
                var6 = var5["9NPc+O"];
                var5 = {};
                var10 = 10;
                var10 = var12[var10];
                var12 = var11.bind(var4)(var10);
                var11 = var12.getExternalSubscriptionMethodUrl;
                var10 = var9.paymentGateway;
                var9 = 'SUBSCRIPTION_MANAGEMENT';
                var9 = var11.bind(var12)(var10, var9);
                var5.onClick = var9;
                var5 = var7.bind(var8)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 230:
                return var0;
        }
    };
    var _closure1_slot9 = var1;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var13.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = arg3;
    var4 = var4.bind(var0)(var7);
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.SubscriptionStatusTypes;
    var _closure1_slot5 = var7;
    var10 = var4.USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING;
    var12 = 4;
    var4 = var6[var12];
    var4 = var5.bind(var0)(var4);
    var7 = var4.jsx;
    var _closure1_slot6 = var7;
    var4 = var4.jsxs;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var9 = var5.bind(var0)(var4);
    var8 = var9.createStyles;
    var7 = {};
    var4 = {};
    var4.paddingHorizontal = var10;
    var7.title = var4;
    var4 = {};
    var11 = 8;
    var4.marginTop = var11;
    var4.paddingHorizontal = var10;
    var7.externalSubtext = var4;
    var10 = {
        'backgroundColor': null,
        'padding': 16,
        'marginTop': 8
    };
    var4 = 6;
    var4 = var6[var4];
    var4 = var13.bind(var0)(var4);
    var4 = var4.colors;
    var4 = var4.BACKGROUND_SURFACE_HIGH;
    var10.backgroundColor = var4;
    var4 = 16;
    var7.billingContainer = var10;
    var10 = {};
    var10.marginTop = var12;
    var7.billingRenewalInfo = var10;
    var10 = {};
    var10.marginTop = var11;
    var7.billingManageGoogle = var10;
    var7 = var8.bind(var9)(var7);
    var _closure1_slot8 = var7;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'components_native/premium/PremiumBillingInfo.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function arg0() {
        _fun59518: for (var _fun59518_ip = 0;;) switch (_fun59518_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.style;
                var16 = var0.subscription;
                var0 = _closure1_slot8;
                var4 = undefined;
                var12 = var0.bind(var4)();
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var0 = 11;
                var1 = var9[var0];
                var3 = var8.bind(var4)(var1);
                var2 = var3.useSubscriptionInvoicePreview;
                var1 = {
                    'subscriptionId': null,
                    'renewal': true,
                    'applyEntitlements': true
                };
                var6 = var16.id;
                var1.subscriptionId = var6;
                var6 = true;
                var11 = _closure1_slot1;
                var10 = 12;
                var10 = var9[var10];
                var10 = var11.bind(var4)(var10);
                var10 = var10.bind(var4)();
                var1.analyticsLocations = var10;
                var10 = 13;
                var10 = var9[var10];
                var10 = var11.bind(var4)(var10);
                var10 = var10.PREMIUM_BILLING_INFO;
                var1.analyticsLocation = var10;
                var1 = var2.bind(var3)(var1);
                var3 = _closure1_slot3;
                var2 = 1;
                var10 = var3.bind(var4)(var1, var2);
                var1 = 0;
                var20 = var10[var1];
                var0 = var9[var0];
                var9 = var8.bind(var4)(var0);
                var8 = var9.useGetSubscriptionInvoice;
                var0 = {};
                var10 = var16.id;
                var0.subscriptionId = var10;
                var11 = var16.status;
                var10 = _closure1_slot5;
                var10 = var10.PAST_DUE;
                var10 = var11 !== var10;
                var0.preventFetch = var10;
                var0 = var8.bind(var9)(var0);
                var0 = var3.bind(var4)(var0, var2);
                var19 = var0[var1];
                var0 = null;
                if (!(var0 != var20)) {
                    _fun59518_ip = 696;
                    continue _fun59518
                }
            case 227:
                var18 = _closure1_slot0;
                var21 = _closure1_slot2;
                var1 = 14;
                var1 = var21[var1];
                var3 = var18.bind(var4)(var1);
                var2 = var3.getExternalManagementMessage;
                var1 = {};
                var1.shouldAllowExternalManagement = var6;
                var10 = var2.bind(var3)(var16, var1);
                var3 = _closure1_slot7;
                var2 = _closure1_slot4;
                var1 = {};
                var1.style = var5;
                var8 = _closure1_slot6;
                var13 = 15;
                var5 = var21[var13];
                var5 = var18.bind(var4)(var5);
                var6 = var5.Text;
                var5 = {
                    'style': null,
                    'accessibilityRole': 'header',
                    'variant': 'eyebrow',
                    'color': 'text-default'
                };
                var9 = var12.title;
                var5.style = var9;
                var14 = 9;
                var9 = var21[var14];
                var9 = var18.bind(var4)(var9);
                var15 = var9.intl;
                var11 = var15.string;
                var9 = var21[var14];
                var9 = var18.bind(var4)(var9);
                var9 = var9.t;
                var9 = var9.Sb6wI1;
                var9 = var11.bind(var15)(var9);
                var5.children = var9;
                var6 = var8.bind(var4)(var6, var5);
                var5 = new Array(3);
                var5[0] = var6;
                var6 = {};
                var8 = var12.billingContainer;
                var6.style = var8;
                var11 = _closure1_slot6;
                var8 = var21[var13];
                var8 = var18.bind(var4)(var8);
                var9 = var8.Text;
                var8 = {};
                var15 = 'text-md/semibold';
                var8.variant = var15;
                var15 = var21[var14];
                var15 = var18.bind(var4)(var15);
                var17 = var15.intl;
                var15 = var17.string;
                var14 = var21[var14];
                var14 = var18.bind(var4)(var14);
                var14 = var14.t;
                var14 = var14.KXQjfc;
                var14 = var15.bind(var17)(var14);
                var8.children = var14;
                var9 = var11.bind(var4)(var9, var8);
                var8 = new Array(3);
                var8[0] = var9;
                var15 = _closure1_slot6;
                var9 = var21[var13];
                var9 = var18.bind(var4)(var9);
                var14 = var9.Text;
                var9 = {};
                var11 = var12.billingRenewalInfo;
                var9.style = var11;
                var11 = 'text-sm/medium';
                var9.variant = var11;
                var17 = 10;
                var17 = var21[var17];
                var18 = var18.bind(var4)(var17);
                var17 = var18.getBillingInformationString;
                var17 = var17.bind(var18)(var16, var20, var19);
                var9.children = var17;
                var9 = var15.bind(var4)(var14, var9);
                var8[1] = var9;
                var15 = _closure1_slot6;
                var14 = _closure1_slot9;
                var9 = {};
                var17 = var12.billingManageGoogle;
                var9.style = var17;
                var9.subscription = var16;
                var9 = var15.bind(var4)(var14, var9);
                var8[2] = var9;
                var6.children = var8;
                var6 = var3.bind(var4)(var2, var6);
                var5[1] = var6;
                var8 = var0 != var10;
                var6 = null;
                if (!var8) {
                    _fun59518_ip = 680;
                    continue _fun59518
                }
            case 628:
                var9 = _closure1_slot6;
                var8 = _closure1_slot0;
                var7 = _closure1_slot2;
                var7 = var7[var13];
                var7 = var8.bind(var4)(var7);
                var8 = var7.Text;
                var7 = {};
                var12 = var12.externalSubtext;
                var7.style = var12;
                var7.variant = var11;
                var7.children = var10;
                var6 = var9.bind(var4)(var8, var7);
            case 680:
                var5[2] = var6;
                var1.children = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 696:
                return var0;
        }
    };
    var2.default = var3;
    var2.GoogleManagementLink = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 660, 33, 1297, 671, 478, 5336, 1234, 3109, 7310, 5730, 5583, 7315, 3941, 2]);