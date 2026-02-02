// modules/user_settings/native/payments/PaymentFlowTest.android.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var5;
    var0 = function() {
        _fun86491: for (var _fun86491_ip = 0;;) switch (_fun86491_ip) {
            case 0:
                var0 = _closure1_slot9;
                var3 = undefined;
                var21 = var0.bind(var3)();
                var2 = _closure1_slot4;
                var1 = var2.useState;
                var0 = '1341506443580276736';
                var1 = var1.bind(var2)(var0);
                var0 = _closure1_slot3;
                var5 = 2;
                var0 = var0.bind(var3)(var1, var5);
                var2 = 0;
                var13 = var0[var2];
                var _closure2_slot0 = var13;
                var1 = 1;
                var0 = var0[var1];
                var _closure2_slot1 = var0;
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 7;
                var0 = var6[var0];
                var7 = var4.bind(var3)(var0);
                var6 = var7.useStateFromStores;
                var0 = _closure1_slot6;
                var4 = new Array(1);
                var4[0] = var0;
                var0 = function() { // Environment: var12
                    var1 = _closure1_slot6;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var7 = var6.bind(var7)(var4, var0);
                var6 = _closure1_slot4;
                var4 = var6.useState;
                var15 = null;
                var8 = var15 == var7;
                var0 = undefined;
                if (var8) {
                    _fun86491_ip = 144;
                    continue _fun86491
                }
            case 139:
                var0 = var7.id;
            case 144:
                var4 = var4.bind(var6)(var0);
                var0 = _closure1_slot3;
                var0 = var0.bind(var3)(var4, var5);
                var14 = var0[var2];
                var _closure2_slot2 = var14;
                var23 = var0[var1];
                var4 = _closure1_slot4;
                var0 = var4.useState;
                var4 = var0.bind(var4)(var3);
                var0 = _closure1_slot3;
                var0 = var0.bind(var3)(var4, var5);
                var20 = var0[var2];
                var _closure2_slot3 = var20;
                var19 = var0[var1];
                var2 = _closure1_slot8;
                var10 = _closure1_slot0;
                var16 = _closure1_slot2;
                var0 = 8;
                var0 = var16[var0];
                var0 = var10.bind(var3)(var0);
                var1 = var0.Stack;
                var0 = {};
                var4 = 16;
                var0.spacing = var4;
                var4 = var21.container;
                var0.style = var4;
                var6 = _closure1_slot7;
                var8 = 9;
                var4 = var16[var8];
                var4 = var10.bind(var3)(var4);
                var5 = var4.Text;
                var4 = {
                    'variant': 'text-lg/bold',
                    'children': 'Android Payment Flow Test'
                };
                var5 = var6.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var7 = _closure1_slot8;
                var5 = 10;
                var5 = var16[var5];
                var5 = var10.bind(var3)(var5);
                var6 = var5.Card;
                var5 = {};
                var17 = _closure1_slot7;
                var8 = var16[var8];
                var8 = var10.bind(var3)(var8);
                var11 = var8.Text;
                var8 = {
                    'style': null,
                    'variant': 'text-md/bold',
                    'children': 'Gift Purchase SKU'
                };
                var18 = var21.title;
                var8.style = var18;
                var11 = var17.bind(var3)(var11, var8);
                var8 = new Array(5);
                var8[0] = var11;
                var22 = _closure1_slot7;
                var11 = 11;
                var17 = var16[var11];
                var17 = var10.bind(var3)(var17);
                var18 = var17.TextInput;
                var17 = {
                    'containerStyle': null,
                    'label': 'SKU ID',
                    'value': null,
                    'placeholder': 'Default: 1341506443580276736 (Anime Shy)',
                    'onChange': null,
                    'isClearable': true
                };
                var24 = var21.textInput;
                var17.containerStyle = var24;
                var17.value = var13;
                var24 = function arg0() {
                    var2 = _closure2_slot1;
                    var1 = undefined;
                    var0 = arg0;
                    var0 = var2.bind(var1)(var0);
                    return var0;
                };
                var17.onChange = var24;
                var17 = var22.bind(var3)(var18, var17);
                var8[1] = var17;
                var22 = _closure1_slot7;
                var17 = var16[var11];
                var17 = var10.bind(var3)(var17);
                var18 = var17.TextInput;
                var17 = {
                    'containerStyle': null,
                    'label': 'Gift Recipient ID',
                    'value': null,
                    'placeholder': 'Recipient User ID',
                    'onChange': null,
                    'isClearable': true
                };
                var24 = var21.textInput;
                var17.containerStyle = var24;
                var17.value = var14;
                var17.onChange = var23;
                var17 = var22.bind(var3)(var18, var17);
                var8[2] = var17;
                var18 = _closure1_slot7;
                var11 = var16[var11];
                var11 = var10.bind(var3)(var11);
                var17 = var11.TextInput;
                var11 = {
                    'containerStyle': null,
                    'label': 'Gift Message (Optional)',
                    'value': null,
                    'placeholder': "Here's a gift for you!",
                    'onChange': null,
                    'isClearable': true
                };
                var21 = var21.textInput;
                var11.containerStyle = var21;
                var11.value = var20;
                var11.onChange = var19;
                var11 = var18.bind(var3)(var17, var11);
                var8[3] = var11;
                var11 = _closure1_slot7;
                var9 = 12;
                var9 = var16[var9];
                var9 = var10.bind(var3)(var9);
                var10 = var9.Button;
                var9 = {};
                var13 = var15 === var13;
                if (var13) {
                    _fun86491_ip = 631;
                    continue _fun86491
                }
            case 627:
                var13 = var15 === var14;
            case 631:
                var9.disabled = var13;
                var13 = 'Send Gift';
                var9.text = var13;
                var12 = function() {
                    _fun86494: for (var _fun86494_ip = 0;;) switch (_fun86494_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            var3 = null;
                            var1 = var3 != var1;
                            if (!var1) {
                                _fun86494_ip = 24;
                                continue _fun86494
                            }
                        case 16:
                            var2 = _closure2_slot2;
                            var1 = var3 != var2;
                        case 24:
                            if (!var1) {
                                _fun86494_ip = 81;
                                continue _fun86494
                            }
                        case 27:
                            var2 = _closure1_slot10;
                            var1 = {};
                            var3 = _closure2_slot0;
                            var1.selectedSkuId = var3;
                            var3 = 'giftSku';
                            var1.requestType = var3;
                            var3 = _closure2_slot2;
                            var1.giftRecipientId = var3;
                            var0 = _closure2_slot3;
                            var1.giftMessage = var0;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                        case 81:
                            var0 = undefined;
                            return var0;
                    }
                };
                var9.onPress = var12;
                var9 = var11.bind(var3)(var10, var9);
                var8[4] = var9;
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot11 = var0;
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
    var3 = var12.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = arg3;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ScrollView;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot7 = var7;
    var3 = var3.jsxs;
    var _closure1_slot8 = var3;
    var10 = 5;
    var3 = var5[var10];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {};
    var11 = 6;
    var13 = var5[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BASE_LOW;
    var9.backgroundColor = var13;
    var3.wrap = var9;
    var9 = {};
    var11 = var5[var11];
    var11 = var12.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_16;
    var9.padding = var11;
    var3.container = var9;
    var9 = {};
    var9.height = var10;
    var3.divider = var9;
    var9 = {};
    var10 = 'row';
    var9.flexDirection = var10;
    var3.buttonContainer = var9;
    var9 = {
        'flex': 1,
        'justifyContent': 'space-around'
    };
    var3.button = var9;
    var9 = {
        'marginRight': 5,
        'marginVertical': 5
    };
    var3.clearButton = var9;
    var9 = {};
    var10 = '60%';
    var9.width = var10;
    var3.submitButton = var9;
    var9 = {};
    var10 = 12;
    var9.width = var10;
    var3.spacer = var9;
    var9 = {};
    var10 = 16;
    var9.marginBottom = var10;
    var3.textInput = var9;
    var9 = {};
    var10 = 8;
    var9.marginBottom = var10;
    var3.title = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot9 = var3;
    var3 = function arg0() {
        var4 = _closure1_slot1;
        var1 = _closure1_slot2;
        var3 = 13;
        var5 = var1[var3];
        var0 = undefined;
        var6 = var4.bind(var0)(var5);
        var5 = var6.hideActionSheet;
        var5 = var5.bind(var6)();
        var3 = var1[var3];
        var5 = var4.bind(var0)(var3);
        var4 = var5.openLazy;
        var3 = _closure1_slot0;
        var2 = 15;
        var2 = var1[var2];
        var3 = var3.bind(var0)(var2);
        var2 = 14;
        var2 = var1[var2];
        var1 = var1.paths;
        var3 = var3.bind(var0)(var2, var1);
        var2 = 'SimpleRequestOTPActionSheet';
        var1 = arg0;
        var1 = var4.bind(var5)(var3, var2, var1);
        return var0;
    };
    var _closure1_slot10 = var3;
    var3 = var6.memo;
    var1 = function() {
        var0 = _closure1_slot9;
        var3 = undefined;
        var8 = var0.bind(var3)();
        var1 = _closure1_slot1;
        var4 = _closure1_slot2;
        var0 = 16;
        var0 = var4[var0];
        var1 = var1.bind(var3)(var0);
        var0 = {};
        var2 = true;
        var0.includeKeyboardHeight = var2;
        var0 = var1.bind(var3)(var0);
        var9 = var0.insets;
        var2 = _closure1_slot7;
        var1 = _closure1_slot0;
        var0 = 17;
        var0 = var4[var0];
        var0 = var1.bind(var3)(var0);
        var1 = var0.NativePaymentContextProvider;
        var0 = {};
        var4 = new Array(0);
        var0.skuIDs = var4;
        var4 = null;
        var0.activeSubscription = var4;
        var6 = _closure1_slot7;
        var5 = _closure1_slot5;
        var4 = {};
        var8 = var8.wrap;
        var4.style = var8;
        var8 = {};
        var10 = var9.bottom;
        var8.paddingBottom = var10;
        var10 = var9.top;
        var8.paddingTop = var10;
        var10 = var9.left;
        var8.paddingLeft = var10;
        var9 = var9.right;
        var8.paddingRight = var9;
        var4.contentContainerStyle = var8;
        var9 = _closure1_slot7;
        var8 = _closure1_slot11;
        var7 = {};
        var7 = var9.bind(var3)(var8, var7);
        var4.children = var7;
        var4 = var6.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var1 = var3.bind(var6)(var1);
    var3 = 18;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/payments/PaymentFlowTest.android.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1613, 33, 1297, 671, 632, 4041, 3902, 4865, 5365, 4045, 3239, 11152, 1307, 4858, 11154, 2]);