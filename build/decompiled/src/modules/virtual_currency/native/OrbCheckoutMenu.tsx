// modules/virtual_currency/native/OrbCheckoutMenu.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot5 = var6;
    var3 = var3.jsxs;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 16;
    var8.marginBottom = var9;
    var3.textInput = var8;
    var8 = {};
    var9 = 8;
    var8.marginBottom = var9;
    var3.title = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot7 = var3;
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/virtual_currency/native/OrbCheckoutMenu.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        var0 = _closure1_slot7;
        var3 = undefined;
        var12 = var0.bind(var3)();
        var5 = _closure1_slot4;
        var1 = var5.useState;
        var0 = '1409898407849365565';
        var2 = var1.bind(var5)(var0);
        var1 = _closure1_slot3;
        var0 = 2;
        var1 = var1.bind(var3)(var2, var0);
        var0 = 0;
        var9 = var1[var0];
        var _closure2_slot0 = var9;
        var0 = 1;
        var0 = var1[var0];
        var _closure2_slot1 = var0;
        var2 = var5.useCallback;
        var1 = new Array(1);
        var1[0] = var9;
        var0 = function() { // Environment: var14
            _fun87055: for (var _fun87055_ip = 0;;) switch (_fun87055_ip) {
                case 0:
                    var1 = _closure2_slot0;
                    var0 = null;
                    if (!(var0 != var1)) {
                        _fun87055_ip = 118;
                        continue _fun87055
                    }
                case 13:
                    var3 = _closure1_slot1;
                    var0 = _closure1_slot2;
                    var2 = 4;
                    var2 = var0[var2];
                    var6 = undefined;
                    var3 = var3.bind(var6)(var2);
                    var2 = var3.pushLazy;
                    var5 = _closure1_slot0;
                    var1 = 6;
                    var1 = var0[var1];
                    var5 = var5.bind(var6)(var1);
                    var1 = 5;
                    var1 = var0[var1];
                    var0 = var0.paths;
                    var1 = var5.bind(var6)(var1, var0);
                    var0 = {};
                    var4 = _closure2_slot0;
                    var0.skuId = var4;
                    var4 = new Array(0);
                    var0.analyticsLocations = var4;
                    var4 = function() {
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var0 = 7;
                        var1 = var1[var0];
                        var0 = undefined;
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.open;
                        var1 = {
                            'key': 'ORB_CHECKOUT_SUCCESS',
                            'content': 'Successfully redeemed item with Orbs'
                        };
                        var1 = var2.bind(var3)(var1);
                        return var0;
                    };
                    var0.onCheckoutSuccess = var4;
                    var0 = var2.bind(var3)(var1, var0);
                case 118:
                    var0 = undefined;
                    return var0;
            }
        };
        var8 = var2.bind(var5)(var0, var1);
        var2 = _closure1_slot6;
        var6 = _closure1_slot0;
        var10 = _closure1_slot2;
        var0 = 8;
        var0 = var10[var0];
        var0 = var6.bind(var3)(var0);
        var1 = var0.Card;
        var0 = {};
        var7 = _closure1_slot5;
        var5 = 9;
        var4 = var10[var5];
        var4 = var6.bind(var3)(var4);
        var11 = var4.Text;
        var4 = {
            'style': null,
            'variant': 'text-md/bold',
            'children': 'Redeem SKU for Orbs'
        };
        var13 = var12.title;
        var4.style = var13;
        var11 = var7.bind(var3)(var11, var4);
        var4 = new Array(4);
        var4[0] = var11;
        var11 = 10;
        var11 = var10[var11];
        var11 = var6.bind(var3)(var11);
        var13 = var11.TextInput;
        var11 = {};
        var15 = var12.textInput;
        var11.containerStyle = var15;
        var15 = 'SKU ID';
        var11.label = var15;
        var11.value = var9;
        var14 = function arg0() {
            var2 = _closure2_slot1;
            var1 = undefined;
            var0 = arg0;
            var0 = var2.bind(var1)(var0);
            return var0;
        };
        var11.onChange = var14;
        var14 = true;
        var11.isClearable = var14;
        var11 = var7.bind(var3)(var13, var11);
        var4[1] = var11;
        var5 = var10[var5];
        var5 = var6.bind(var3)(var5);
        var11 = var5.Text;
        var5 = {
            'style': null,
            'variant': 'text-md/bold',
            'children': 'Checkout will open with the orb price of the product, if it exists'
        };
        var12 = var12.title;
        var5.style = var12;
        var5 = var7.bind(var3)(var11, var5);
        var4[2] = var5;
        var5 = 11;
        var5 = var10[var5];
        var5 = var6.bind(var3)(var5);
        var6 = var5.Button;
        var5 = {
            'text': 'Open Orbs Checkout',
            'variant': 'primary'
        };
        var5.onPress = var8;
        var8 = null;
        var8 = var8 == var9;
        var5.disabled = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[3] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 33, 1297, 4561, 11257, 1307, 3148, 4900, 3941, 5401, 4084, 2]);