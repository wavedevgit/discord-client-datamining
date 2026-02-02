// modules/premium/fractional/native/BoostingCountDownPill.tsx
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
        var3 = _closure1_slot1;
        var9 = _closure1_slot2;
        var0 = 4;
        var2 = var9[var0];
        var0 = undefined;
        var5 = var3.bind(var0)(var2);
        var4 = var5.openLazy;
        var8 = _closure1_slot0;
        var1 = 6;
        var1 = var9[var1];
        var3 = var8.bind(var0)(var1);
        var1 = 5;
        var2 = var9[var1];
        var1 = var9.paths;
        var3 = var3.bind(var0)(var2, var1);
        var2 = {};
        var1 = 7;
        var6 = var9[var1];
        var6 = var8.bind(var0)(var6);
        var7 = var6.intl;
        var6 = var7.string;
        var1 = var9[var1];
        var1 = var8.bind(var0)(var1);
        var1 = var1.t;
        var1 = var1["07lzz7"];
        var1 = var6.bind(var7)(var1);
        var2.aboutText = var1;
        var1 = 'NitroCreditEducationActionSheet';
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
    var6 = var3.jsx;
    var _closure1_slot5 = var6;
    var3 = var3.jsxs;
    var _closure1_slot6 = var3;
    var3 = 2;
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
    var10 = 3;
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
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.lg;
    var8.borderRadius = var12;
    var3.fractionalPremiumBanner = var8;
    var8 = {
        'flex': 1,
        'paddingVertical': 12,
        'paddingHorizontal': 27,
        'backgroundColor': null,
        'borderRadius': null,
        'justifyContent': 'center'
    };
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_MOD_STRONG;
    var8.backgroundColor = var12;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.radii;
    var10 = var10.xxl;
    var8.borderRadius = var10;
    var3.fpDurationPill = var8;
    var8 = {
        'textAlign': 'center',
        'color': '#FFEAA0'
    };
    var3.fpDurationText = var8;
    var8 = {
        'flex': 1,
        'justifyContent': 'center'
    };
    var3.fpUnavailable = var8;
    var8 = {};
    var8.textAlign = var9;
    var3.fpUnavailableTextNoCountdown = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot7 = var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/fractional/native/BoostingCountDownPill.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun78041: for (var _fun78041_ip = 0;;) switch (_fun78041_ip) {
            case 0:
                var0 = arg0;
                var17 = var0.fpDurationText;
                var16 = var0.isInReverseTrial;
                var8 = var0.style;
                var0 = _closure1_slot7;
                var3 = undefined;
                var15 = var0.bind(var3)();
                var2 = _closure1_slot5;
                var1 = _closure1_slot3;
                var0 = {};
                var4 = 0.7;
                var0.activeOpacity = var4;
                var4 = undefined;
                if (var16) {
                    _fun78041_ip = 67;
                    continue _fun78041
                }
            case 63:
                var4 = _closure1_slot8;
            case 67:
                var0.onPress = var4;
                var6 = _closure1_slot6;
                var5 = _closure1_slot4;
                var4 = {};
                var9 = var15.fractionalPremiumBanner;
                var7 = new Array(2);
                var7[0] = var9;
                var7[1] = var8;
                var4.style = var7;
                var8 = !var16;
                if (!var8) {
                    _fun78041_ip = 206;
                    continue _fun78041
                }
            case 109:
                var10 = _closure1_slot5;
                var9 = _closure1_slot4;
                var7 = {};
                var11 = var15.fpDurationPill;
                var7.style = var11;
                var12 = _closure1_slot0;
                var14 = _closure1_slot2;
                var11 = 8;
                var11 = var14[var11];
                var11 = var12.bind(var3)(var11);
                var12 = var11.Text;
                var11 = {};
                var14 = 'text-sm/bold';
                var11.variant = var14;
                var14 = var15.fpDurationText;
                var11.style = var14;
                var14 = var17.toUpperCase;
                var14 = var14.bind(var17)();
                var11.children = var14;
                var11 = var10.bind(var3)(var12, var11);
                var7.children = var11;
                var8 = var10.bind(var3)(var9, var7);
            case 206:
                var7 = new Array(2);
                var7[0] = var8;
                var10 = _closure1_slot5;
                var9 = _closure1_slot4;
                var8 = {};
                var11 = var15.fpUnavailable;
                var8.style = var11;
                var12 = _closure1_slot0;
                var14 = _closure1_slot2;
                var11 = 8;
                var11 = var14[var11];
                var11 = var12.bind(var3)(var11);
                var12 = var11.Text;
                var11 = {
                    'variant': 'text-md/normal',
                    'color': 'interactive-text-active'
                };
                var14 = undefined;
                if (!var16) {
                    _fun78041_ip = 284;
                    continue _fun78041
                }
            case 278:
                var14 = var15.fpUnavailableTextNoCountdown;
            case 284:
                var11.style = var14;
                var16 = _closure1_slot0;
                var17 = _closure1_slot2;
                var13 = 7;
                var14 = var17[var13];
                var14 = var16.bind(var3)(var14);
                var15 = var14.intl;
                var14 = var15.string;
                var13 = var17[var13];
                var13 = var16.bind(var3)(var13);
                var13 = var13.t;
                var13 = var13["5nrJDO"];
                var13 = var14.bind(var15)(var13);
                var11.children = var13;
                var11 = var10.bind(var3)(var12, var11);
                var8.children = var11;
                var8 = var10.bind(var3)(var9, var8);
                var7[1] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 33, 1297, 671, 3239, 9871, 1307, 1234, 3902, 2]);