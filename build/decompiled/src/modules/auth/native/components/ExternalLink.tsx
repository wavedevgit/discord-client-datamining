// modules/auth/native/components/ExternalLink.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
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
    var6 = var3.Linking;
    var _closure1_slot4 = var6;
    var3 = var3.ScrollView;
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot6 = var6;
    var3 = var3.jsxs;
    var _closure1_slot7 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'height': '100%',
        'display': 'flex',
        'justifyContent': 'center',
        'paddingLeft': 16,
        'paddingRight': 16
    };
    var3.container = var8;
    var8 = {
        'textAlign': 'center',
        'marginTop': 8
    };
    var3.description = var8;
    var8 = {
        'width': '100%',
        'marginTop': 16
    };
    var3.button = var8;
    var8 = {};
    var3.continue = var8;
    var8 = {};
    var3.backToLogin = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot8 = var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/auth/native/components/ExternalLink.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var0 = arg0;
        var0 = var0.externalURL;
        var _closure2_slot0 = var0;
        var1 = _closure1_slot8;
        var3 = undefined;
        var15 = var1.bind(var3)();
        var12 = _closure1_slot0;
        var13 = _closure1_slot2;
        var1 = 4;
        var1 = var13[var1];
        var2 = var12.bind(var3)(var1);
        var1 = var2.useNavigation;
        var1 = var1.bind(var2)();
        var _closure2_slot1 = var1;
        var5 = _closure1_slot3;
        var2 = var5.useCallback;
        var1 = new Array(1);
        var1[0] = var0;
        var0 = function() { // Environment: var8
            var2 = _closure1_slot4;
            var1 = var2.openURL;
            var0 = _closure2_slot0;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var16 = var2.bind(var5)(var0, var1);
        var _closure2_slot2 = var16;
        var2 = var5.useEffect;
        var1 = new Array(1);
        var1[0] = var16;
        var0 = function() { // Environment: var8
            var1 = _closure2_slot2;
            var0 = undefined;
            var1 = var1.bind(var0)();
            return var0;
        };
        var0 = var2.bind(var5)(var0, var1);
        var2 = _closure1_slot7;
        var1 = _closure1_slot5;
        var0 = {
            'alwaysBounceVertical': false,
            'keyboardShouldPersistTaps': 'handled'
        };
        var5 = var15.container;
        var0.contentContainerStyle = var5;
        var7 = _closure1_slot6;
        var11 = _closure1_slot1;
        var4 = 5;
        var4 = var13[var4];
        var5 = var11.bind(var3)(var4);
        var4 = {};
        var9 = 6;
        var6 = var13[var9];
        var6 = var12.bind(var3)(var6);
        var14 = var6.intl;
        var10 = var14.string;
        var6 = var13[var9];
        var6 = var12.bind(var3)(var6);
        var6 = var6.t;
        var6 = var6["0Niu/F"];
        var6 = var10.bind(var14)(var6);
        var4.children = var6;
        var5 = var7.bind(var3)(var5, var4);
        var4 = new Array(4);
        var4[0] = var5;
        var5 = 7;
        var5 = var13[var5];
        var5 = var12.bind(var3)(var5);
        var6 = var5.Text;
        var5 = {
            'style': null,
            'variant': 'text-sm/medium',
            'color': 'text-default'
        };
        var10 = var15.description;
        var5.style = var10;
        var10 = var13[var9];
        var10 = var12.bind(var3)(var10);
        var17 = var10.intl;
        var14 = var17.string;
        var10 = var13[var9];
        var10 = var12.bind(var3)(var10);
        var10 = var10.t;
        var10 = var10.nToOEg;
        var10 = var14.bind(var17)(var10);
        var5.children = var10;
        var5 = var7.bind(var3)(var6, var5);
        var4[1] = var5;
        var10 = 8;
        var5 = var13[var10];
        var6 = var11.bind(var3)(var5);
        var5 = {};
        var14 = true;
        var5.shrink = var14;
        var17 = var15.button;
        var5.style = var17;
        var17 = var13[var9];
        var17 = var12.bind(var3)(var17);
        var19 = var17.intl;
        var18 = var19.string;
        var17 = var13[var9];
        var17 = var12.bind(var3)(var17);
        var17 = var17.t;
        var17 = var17["2ixEBi"];
        var17 = var18.bind(var19)(var17);
        var5.text = var17;
        var5.onPress = var16;
        var5 = var7.bind(var3)(var6, var5);
        var4[2] = var5;
        var5 = var13[var10];
        var6 = var11.bind(var3)(var5);
        var5 = {};
        var5.shrink = var14;
        var16 = var15.button;
        var14 = new Array(2);
        var14[0] = var16;
        var15 = var15.backToLogin;
        var14[1] = var15;
        var5.style = var14;
        var10 = var13[var10];
        var10 = var11.bind(var3)(var10);
        var10 = var10.Colors;
        var10 = var10.GREY;
        var5.color = var10;
        var10 = var13[var9];
        var10 = var12.bind(var3)(var10);
        var11 = var10.intl;
        var10 = var11.string;
        var9 = var13[var9];
        var9 = var12.bind(var3)(var9);
        var9 = var9.t;
        var9 = var9.j3cG2p;
        var9 = var10.bind(var11)(var9);
        var5.text = var9;
        var8 = function() {
            var1 = _closure2_slot1;
            var0 = var1.pop;
            var0 = var0.bind(var1)();
            return var0;
        };
        var5.onPress = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[3] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 1469, 7528, 1234, 3932, 4868, 2]);