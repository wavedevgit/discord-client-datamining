// modules/virtual_currency/checkout/native/OrbCheckoutModalComponents.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.View;
    var _closure1_slot4 = var6;
    var7 = var3.ActivityIndicator;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot5 = var6;
    var3 = var3.jsxs;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var9 = var4.bind(var0)(var3);
    var8 = var9.createStyles;
    var3 = {};
    var10 = {
        'width': '100%',
        'marginBottom': 10
    };
    var3.topRowWrapper = var10;
    var10 = {
        'width': '100%',
        'marginVertical': 10
    };
    var3.rowWrapper = var10;
    var10 = {};
    var11 = 4;
    var13 = var5[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.lg;
    var10.borderRadius = var13;
    var13 = var5[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_MOD_SUBTLE;
    var10.backgroundColor = var13;
    var13 = var5[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_16;
    var10.padding = var13;
    var3.rowDetailsContainer = var10;
    var13 = 'center';
    var10 = {
        'flexDirection': 'row',
        'justifyContent': 'space-between',
        'alignItems': 'center'
    };
    var3.orbPaymentSourceDetails = var10;
    var10 = {};
    var14 = var5[var11];
    var14 = var12.bind(var0)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_8;
    var10.marginBottom = var14;
    var3.sectionTitle = var10;
    var10 = {};
    var14 = var5[var11];
    var14 = var12.bind(var0)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_16;
    var10.paddingVertical = var14;
    var10.alignItems = var13;
    var3.spinner = var10;
    var10 = {};
    var13 = 0.5;
    var10.opacity = var13;
    var3.disclaimer = var10;
    var10 = {};
    var13 = var5[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.sm;
    var10.borderRadius = var13;
    var13 = var5[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_12;
    var10.padding = var13;
    var11 = var5[var11];
    var11 = var12.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_FEEDBACK_CRITICAL;
    var10.backgroundColor = var11;
    var3.errorCard = var10;
    var3 = var8.bind(var9)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var8 = var3.CircleErrorIcon;
    var3 = {
        'size': 'sm',
        'color': 'mobile-text-heading-primary'
    };
    var3 = var6.bind(var0)(var8, var3);
    var _closure1_slot8 = var3;
    var3 = {};
    var8 = 'small';
    var3.size = var8;
    var3 = var6.bind(var0)(var7, var3);
    var _closure1_slot9 = var3;
    var3 = 19;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/virtual_currency/checkout/native/OrbCheckoutModalComponents.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function(arg0) { // Environment: var1
        var0 = arg0;
        var10 = var0.error;
        var0 = _closure1_slot7;
        var3 = undefined;
        var4 = var0.bind(var3)();
        var2 = _closure1_slot5;
        var1 = _closure1_slot4;
        var0 = {};
        var4 = var4.errorCard;
        var0.style = var4;
        var6 = _closure1_slot6;
        var9 = _closure1_slot0;
        var11 = _closure1_slot2;
        var4 = 6;
        var4 = var11[var4];
        var4 = var9.bind(var3)(var4);
        var5 = var4.Stack;
        var4 = {
            'direction': 'horizontal',
            'spacing': 8,
            'align': 'flex-start'
        };
        var8 = _closure1_slot8;
        var7 = new Array(2);
        var7[0] = var8;
        var8 = 7;
        var8 = var11[var8];
        var8 = var9.bind(var3)(var8);
        var9 = var8.Text;
        var8 = {
            'variant': 'text-sm/medium',
            'color': 'mobile-text-heading-primary'
        };
        var8.children = var10;
        var8 = var2.bind(var3)(var9, var8);
        var7[1] = var8;
        var4.children = var7;
        var4 = var6.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.OrbCheckoutErrorCard = var3;
    var3 = function(arg0) { // Environment: var1
        _fun86554: for (var _fun86554_ip = 0;;) switch (_fun86554_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.product;
                var0 = _closure1_slot7;
                var3 = undefined;
                var8 = var0.bind(var3)();
                var0 = null;
                if (!(var0 != var5)) {
                    _fun86554_ip = 74;
                    continue _fun86554
                }
            case 28:
                var2 = _closure1_slot5;
                var1 = _closure1_slot1;
                var6 = _closure1_slot2;
                var0 = 8;
                var0 = var6[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var0.product = var5;
                var5 = true;
                var0.useOrbPrice = var5;
                var5 = var2.bind(var3)(var1, var0);
                _fun86554_ip = 126;
                continue _fun86554;
            case 74:
                var2 = _closure1_slot5;
                var1 = _closure1_slot4;
                var0 = {};
                var7 = var8.rowDetailsContainer;
                var6 = new Array(2);
                var6[0] = var7;
                var7 = var8.spinner;
                var6[1] = var7;
                var0.style = var6;
                var6 = _closure1_slot9;
                var0.children = var6;
                var5 = var2.bind(var3)(var1, var0);
            case 126:
                var2 = _closure1_slot6;
                var1 = _closure1_slot4;
                var0 = {};
                var6 = var8.topRowWrapper;
                var0.style = var6;
                var7 = _closure1_slot5;
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var4 = 7;
                var4 = var12[var4];
                var4 = var11.bind(var3)(var4);
                var6 = var4.Text;
                var4 = {
                    'variant': 'heading-sm/bold',
                    'color': 'mobile-text-heading-primary'
                };
                var8 = var8.sectionTitle;
                var4.style = var8;
                var8 = 9;
                var9 = var12[var8];
                var9 = var11.bind(var3)(var9);
                var10 = var9.intl;
                var9 = var10.string;
                var8 = var12[var8];
                var8 = var11.bind(var3)(var8);
                var8 = var8.t;
                var8 = var8.hws7bC;
                var8 = var9.bind(var10)(var8);
                var4.children = var8;
                var6 = var7.bind(var3)(var6, var4);
                var4 = new Array(2);
                var4[0] = var6;
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.OrbCheckoutOrderSummary = var3;
    var3 = function(arg0) { // Environment: var1
        var0 = arg0;
        var10 = var0.orbBalance;
        var0 = _closure1_slot7;
        var3 = undefined;
        var13 = var0.bind(var3)();
        var2 = _closure1_slot6;
        var1 = _closure1_slot4;
        var0 = {};
        var4 = var13.rowWrapper;
        var0.style = var4;
        var9 = _closure1_slot5;
        var15 = _closure1_slot0;
        var11 = _closure1_slot2;
        var6 = 7;
        var4 = var11[var6];
        var4 = var15.bind(var3)(var4);
        var5 = var4.Text;
        var4 = {
            'variant': 'heading-sm/bold',
            'color': 'mobile-text-heading-primary'
        };
        var8 = var13.sectionTitle;
        var4.style = var8;
        var12 = 9;
        var8 = var11[var12];
        var8 = var15.bind(var3)(var8);
        var16 = var8.intl;
        var14 = var16.string;
        var8 = var11[var12];
        var8 = var15.bind(var3)(var8);
        var8 = var8.t;
        var8 = var8["zLch/S"];
        var8 = var14.bind(var16)(var8);
        var4.children = var8;
        var5 = var9.bind(var3)(var5, var4);
        var4 = new Array(2);
        var4[0] = var5;
        var5 = {};
        var14 = var13.rowDetailsContainer;
        var8 = new Array(2);
        var8[0] = var14;
        var13 = var13.orbPaymentSourceDetails;
        var8[1] = var13;
        var5.style = var8;
        var6 = var11[var6];
        var6 = var15.bind(var3)(var6);
        var8 = var6.Text;
        var6 = {
            'variant': 'text-md/medium',
            'color': 'mobile-text-heading-primary'
        };
        var13 = var11[var12];
        var13 = var15.bind(var3)(var13);
        var14 = var13.intl;
        var13 = var14.string;
        var12 = var11[var12];
        var12 = var15.bind(var3)(var12);
        var12 = var12.t;
        var12 = var12.y0WGqP;
        var12 = var13.bind(var14)(var12);
        var6.children = var12;
        var8 = var9.bind(var3)(var8, var6);
        var6 = new Array(2);
        var6[0] = var8;
        var8 = _closure1_slot1;
        var7 = 10;
        var7 = var11[var7];
        var8 = var8.bind(var3)(var7);
        var7 = {};
        var7.orbAmount = var10;
        var7 = var9.bind(var3)(var8, var7);
        var6[1] = var7;
        var5.children = var6;
        var5 = var2.bind(var3)(var1, var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.OrbCheckoutPaymentSourceDetails = var3;
    var3 = function() { // Environment: var1
        var1 = _closure1_slot7;
        var3 = undefined;
        var5 = var1.bind(var3)();
        var1 = _closure1_slot0;
        var6 = _closure1_slot2;
        var4 = 11;
        var4 = var6[var4];
        var7 = var1.bind(var3)(var4);
        var4 = var7.useOrbCheckoutModalContext;
        var4 = var4.bind(var7)();
        var9 = var4.skuId;
        var _closure2_slot0 = var9;
        var8 = _closure1_slot3;
        var7 = var8.useMemo;
        var4 = new Array(1);
        var4[0] = var9;
        var2 = function() { // Environment: var2
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 12;
            var1 = var1[var0];
            var0 = undefined;
            var2 = var2.bind(var0)(var1);
            var1 = var2.getOrbCheckoutDisclaimerMessage;
            var0 = _closure2_slot0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4 = var7.bind(var8)(var2, var4);
        var2 = _closure1_slot5;
        var0 = 13;
        var0 = var6[var0];
        var0 = var1.bind(var3)(var0);
        var1 = var0.TextWithIOSLinkWorkaround;
        var0 = {
            'style': null,
            'variant': 'text-xxs/normal',
            'color': 'interactive-text-active'
        };
        var5 = var5.disclaimer;
        var0.style = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.OrbCheckoutLegalFinePrint = var3;
    var1 = function(arg0) { // Environment: var1
        _fun86558: for (var _fun86558_ip = 0;;) switch (_fun86558_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.onPress;
                var1 = _closure1_slot1;
                var5 = _closure1_slot2;
                var0 = 14;
                var0 = var5[var0];
                var3 = undefined;
                var0 = var1.bind(var3)(var0);
                var14 = var0.bind(var3)();
                var2 = _closure1_slot0;
                var0 = 11;
                var0 = var5[var0];
                var1 = var2.bind(var3)(var0);
                var0 = var1.useOrbCheckoutModalContext;
                var0 = var0.bind(var1)();
                var4 = var0.isRedeeming;
                var0 = var0.orbProductContext;
                var1 = 15;
                var1 = var5[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.useVirtualCurrencyBalance;
                var6 = var1.bind(var2)();
                var7 = null;
                var1 = var7 == var0;
                var5 = undefined;
                if (var1) {
                    _fun86558_ip = 114;
                    continue _fun86558
                }
            case 108:
                var5 = var0.orbPriceAmount;
            case 114:
                var2 = _closure1_slot5;
                var11 = _closure1_slot0;
                var10 = _closure1_slot2;
                var0 = 16;
                var0 = var10[var0];
                var0 = var11.bind(var3)(var0);
                var1 = var0.Button;
                var0 = {};
                var15 = 17;
                var10 = var10[var15];
                var11 = var11.bind(var3)(var10);
                var10 = var11.isThemeDark;
                var11 = var10.bind(var11)(var14);
                var10 = 'primary';
                if (!var11) {
                    _fun86558_ip = 182;
                    continue _fun86558
                }
            case 176:
                var10 = 'primary-overlay';
            case 182:
                var0.variant = var10;
                var10 = 'lg';
                var0.size = var10;
                var13 = _closure1_slot0;
                var12 = _closure1_slot2;
                var10 = 9;
                var11 = var12[var10];
                var11 = var13.bind(var3)(var11);
                var16 = var11.intl;
                var11 = var16.string;
                var10 = var12[var10];
                var10 = var13.bind(var3)(var10);
                var10 = var10.t;
                var10 = var10["zLch/S"];
                var10 = var11.bind(var16)(var10);
                var0.text = var10;
                var11 = _closure1_slot5;
                var9 = 18;
                var9 = var12[var9];
                var9 = var13.bind(var3)(var9);
                var10 = var9.OrbsIcon;
                var9 = {};
                var16 = 'md';
                var9.size = var16;
                var12 = var12[var15];
                var13 = var13.bind(var3)(var12);
                var12 = var13.isThemeDark;
                var13 = var12.bind(var13)(var14);
                var12 = 'control-primary-text-default';
                if (!var13) {
                    _fun86558_ip = 320;
                    continue _fun86558
                }
            case 314:
                var12 = 'control-overlay-primary-text-default';
            case 320:
                var9.color = var12;
                var9 = var11.bind(var3)(var10, var9);
                var0.icon = var9;
                var9 = 'start';
                var0.iconPosition = var9;
                var0.loading = var4;
                var0.onPress = var8;
                if (var4) {
                    _fun86558_ip = 359;
                    continue _fun86558
                }
            case 355:
                var4 = var7 == var5;
            case 359:
                if (var4) {
                    _fun86558_ip = 366;
                    continue _fun86558
                }
            case 362:
                var4 = var7 == var6;
            case 366:
                if (var4) {
                    _fun86558_ip = 373;
                    continue _fun86558
                }
            case 369:
                var4 = var6 < var5;
            case 373:
                var0.disabled = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.OrbCheckoutPurchaseButton = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 5454, 4086, 3938, 8891, 1234, 8893, 11134, 11136, 5384, 3247, 11137, 4090, 3207, 8856, 2]);