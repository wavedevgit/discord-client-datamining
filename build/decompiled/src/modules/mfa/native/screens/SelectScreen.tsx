// modules/mfa/native/screens/SelectScreen.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
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
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot2 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.SELECT_NAMES;
    var _closure1_slot3 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var9 = var3.Fonts;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot4 = var6;
    var3 = var3.jsxs;
    var _closure1_slot5 = var3;
    var3 = 5;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'marginLeft': 16,
        'marginRight': 16
    };
    var3.container = var8;
    var8 = {
        'height': 48,
        'width': 48
    };
    var3.icon = var8;
    var8 = {
        'marginTop': null,
        'marginLeft': 16,
        'marginRight': 16,
        'display': 'flex',
        'alignItems': 'center'
    };
    var10 = 6;
    var11 = var5[var10];
    var11 = var4.bind(var0)(var11);
    var11 = var11.NAV_BAR_HEIGHT;
    var10 = var5[var10];
    var10 = var4.bind(var0)(var10);
    var10 = var10.STATUS_BAR_HEIGHT;
    var10 = var11 - var10;
    var8.marginTop = var10;
    var3.selectContainer = var8;
    var8 = {};
    var9 = var9.PRIMARY_BOLD;
    var8.fontFamily = var9;
    var3.title = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot6 = var3;
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/mfa/native/screens/SelectScreen.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var9 = arg0;
        var _closure2_slot0 = var9;
        var0 = _closure1_slot6;
        var3 = undefined;
        var6 = var0.bind(var3)();
        var15 = _closure1_slot0;
        var16 = _closure1_slot1;
        var0 = 8;
        var0 = var16[var0];
        var1 = var15.bind(var3)(var0);
        var0 = var1.useNavigation;
        var0 = var0.bind(var1)();
        var _closure2_slot1 = var0;
        var2 = _closure1_slot5;
        var0 = 9;
        var0 = var16[var0];
        var0 = var15.bind(var3)(var0);
        var1 = var0.SafeAreaPaddingView;
        var0 = {};
        var4 = true;
        var0.top = var4;
        var4 = var6.container;
        var0.style = var4;
        var7 = _closure1_slot2;
        var4 = {};
        var6 = var6.selectContainer;
        var4.style = var6;
        var6 = _closure1_slot4;
        var10 = 10;
        var5 = var16[var10];
        var5 = var15.bind(var3)(var5);
        var11 = var5.Text;
        var5 = {};
        var12 = 'heading-xl/extrabold';
        var5.variant = var12;
        var12 = 11;
        var13 = var16[var12];
        var13 = var15.bind(var3)(var13);
        var17 = var13.intl;
        var14 = var17.string;
        var13 = var16[var12];
        var13 = var15.bind(var3)(var13);
        var13 = var13.t;
        var13 = var13.S9b9bX;
        var13 = var14.bind(var17)(var13);
        var5.children = var13;
        var11 = var6.bind(var3)(var11, var5);
        var5 = new Array(2);
        var5[0] = var11;
        var10 = var16[var10];
        var10 = var15.bind(var3)(var10);
        var11 = var10.Text;
        var10 = {};
        var13 = 'text-sm/medium';
        var10.variant = var13;
        var13 = var16[var12];
        var13 = var15.bind(var3)(var13);
        var14 = var13.intl;
        var13 = var14.string;
        var12 = var16[var12];
        var12 = var15.bind(var3)(var12);
        var12 = var12.t;
        var12 = var12.Jz1lXO;
        var12 = var13.bind(var14)(var12);
        var10.children = var12;
        var10 = var6.bind(var3)(var11, var10);
        var5[1] = var10;
        var4.children = var5;
        var5 = var2.bind(var3)(var7, var4);
        var4 = new Array(2);
        var4[0] = var5;
        var5 = {};
        var10 = {
            'marginTop': 16,
            'gap': 8
        };
        var5.style = var10;
        var9 = var9.mfaChallenge;
        var10 = var9.methods;
        var9 = var10.map;
        var8 = function(arg0) { // Environment: var8
            var4 = _closure2_slot0;
            var3 = _closure2_slot1;
            var2 = function arg0, arg1, arg2() {
                var0 = arg1;
                var1 = arg0;
                var _closure4_slot0 = var1;
                var _closure4_slot1 = var0;
                var1 = arg2;
                var _closure4_slot2 = var1;
                var4 = _closure1_slot4;
                var2 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 7;
                var1 = var3[var1];
                var3 = undefined;
                var1 = var2.bind(var3)(var1);
                var2 = var1.RowButton;
                var1 = {};
                var7 = _closure1_slot3;
                var6 = var0.type;
                var6 = var7[var6];
                var1.label = var6;
                var5 = function() {
                    var3 = _closure4_slot2;
                    var2 = var3.push;
                    var1 = _closure4_slot1;
                    var1 = var1.type;
                    var0 = _closure4_slot0;
                    var0 = var2.bind(var3)(var1, var0);
                    var0 = undefined;
                    return var0;
                };
                var1.onPress = var5;
                var0 = var0.type;
                var0 = var4.bind(var3)(var2, var1, var0);
                return var0;
            };
            var1 = undefined;
            var0 = arg0;
            var0 = var2.bind(var1)(var4, var0, var3);
            return var0;
        };
        var8 = var9.bind(var10)(var8);
        var5.children = var8;
        var5 = var6.bind(var3)(var7, var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 11237, 483, 33, 1297, 4704, 5385, 1469, 4737, 3943, 1234, 2]);