// modules/premium/premium_group/native/BoostingUnavailablePill.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var5;
    var0 = function() {
        var6 = _closure1_slot1;
        var10 = _closure1_slot2;
        var0 = 5;
        var1 = var10[var0];
        var0 = undefined;
        var5 = var6.bind(var0)(var1);
        var4 = var5.openLazy;
        var7 = _closure1_slot0;
        var1 = 7;
        var1 = var10[var1];
        var3 = var7.bind(var0)(var1);
        var1 = 6;
        var2 = var10[var1];
        var1 = var10.paths;
        var3 = var3.bind(var0)(var2, var1);
        var2 = {};
        var1 = 8;
        var1 = var10[var1];
        var1 = var7.bind(var0)(var1);
        var8 = var1.intl;
        var7 = var8.formatToPlainString;
        var1 = 9;
        var1 = var10[var1];
        var1 = var6.bind(var0)(var1);
        var6 = var1["5xN/C1"];
        var1 = {};
        var9 = _closure1_slot5;
        var9 = var9.bind(var0)();
        var1.premiumGroupProductName = var9;
        var1 = var7.bind(var8)(var6, var1);
        var2.aboutText = var1;
        var1 = 'PremiumGroupEducationActionSheet';
        var1 = var4.bind(var5)(var3, var1, var2);
        return var0;
    };
    var _closure1_slot8 = var0;
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
    var3 = var4.bind(var0)(var3);
    var6 = var3.TouchableOpacity;
    var _closure1_slot3 = var6;
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.getPremiumGroupProductName;
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'backgroundColor': null,
        'flexDirection': 'row',
        'gap': 12,
        'padding': 12,
        'justifyContent': 'center',
        'borderColor': null,
        'borderWidth': 1,
        'borderRadius': null,
        'marginBottom': 12
    };
    var10 = 4;
    var9 = var5[var10];
    var9 = var11.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BACKGROUND_SURFACE_HIGH;
    var8.backgroundColor = var9;
    var9 = 'center';
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.STATUS_WARNING;
    var8.borderColor = var12;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.radii;
    var10 = var10.lg;
    var8.borderRadius = var10;
    var3.premiumGroupBanner = var8;
    var8 = {
        'flex': 1,
        'justifyContent': 'center'
    };
    var3.pgUnavailable = var8;
    var8 = {};
    var8.textAlign = var9;
    var3.pgUnavailableText = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot7 = var3;
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/premium_group/native/BoostingUnavailablePill.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var0 = arg0;
        var8 = var0.style;
        var0 = _closure1_slot7;
        var3 = undefined;
        var9 = var0.bind(var3)();
        var2 = _closure1_slot6;
        var1 = _closure1_slot3;
        var0 = {};
        var4 = 0.7;
        var0.activeOpacity = var4;
        var4 = _closure1_slot8;
        var0.onPress = var4;
        var5 = _closure1_slot4;
        var4 = {};
        var10 = var9.premiumGroupBanner;
        var6 = new Array(2);
        var6[0] = var10;
        var6[1] = var8;
        var4.style = var6;
        var6 = {};
        var8 = var9.pgUnavailable;
        var6.style = var8;
        var12 = _closure1_slot0;
        var13 = _closure1_slot2;
        var7 = 10;
        var7 = var13[var7];
        var7 = var12.bind(var3)(var7);
        var8 = var7.Text;
        var7 = {
            'variant': 'text-md/normal',
            'color': 'interactive-text-active'
        };
        var9 = var9.pgUnavailableText;
        var7.style = var9;
        var9 = 8;
        var10 = var13[var9];
        var10 = var12.bind(var3)(var10);
        var11 = var10.intl;
        var10 = var11.string;
        var9 = var13[var9];
        var9 = var12.bind(var3)(var9);
        var9 = var9.t;
        var9 = var9["5nrJDO"];
        var9 = var10.bind(var11)(var9);
        var7.children = var9;
        var7 = var2.bind(var3)(var8, var7);
        var6.children = var7;
        var6 = var2.bind(var3)(var5, var6);
        var4.children = var6;
        var4 = var2.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 3124, 33, 1297, 671, 3278, 9965, 1307, 1234, 2436, 3941, 2]);