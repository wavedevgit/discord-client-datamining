// components_native/premium/PremiumTierCard.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
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
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.View;
    var _closure1_slot3 = var6;
    var3 = var3.Image;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.PremiumTypes;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot6 = var6;
    var3 = var3.jsxs;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var6 = {};
    var3 = 16;
    var9 = {
        'marginTop': 24,
        'padding': 16
    };
    var6.header = var9;
    var9 = {
        'width': 158,
        'height': 32
    };
    var6.textLogoTier0 = var9;
    var9 = {
        'width': 185,
        'height': 32
    };
    var6.textLogoTier1 = var9;
    var9 = {
        'width': 80,
        'height': 32
    };
    var6.textLogoTier2 = var9;
    var9 = {
        'position': 'absolute',
        'top': 0,
        'right': 24,
        'zIndex': 1
    };
    var6.wumpusLogo = var9;
    var9 = {
        'width': 83,
        'height': 100
    };
    var6.wumpusLogoTier0 = var9;
    var9 = {
        'width': 86,
        'height': 100
    };
    var6.wumpusLogoTier1 = var9;
    var9 = {
        'width': 133,
        'height': 100
    };
    var6.wumpusLogoTier2 = var9;
    var9 = {};
    var9.padding = var3;
    var10 = 5;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.xs;
    var9.borderBottomRightRadius = var12;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.radii;
    var10 = var10.xs;
    var9.borderBottomLeftRadius = var10;
    var10 = 6;
    var10 = var5[var10];
    var10 = var4.bind(var0)(var10);
    var10 = var10.DARK_PRIMARY_630_LIGHT_PRIMARY_100;
    var9.backgroundColor = var10;
    var6.body = var9;
    var6 = var7.bind(var8)(var6);
    var _closure1_slot8 = var6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'components_native/premium/PremiumTierCard.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun82690: for (var _fun82690_ip = 0;;) switch (_fun82690_ip) {
            case 0:
                var0 = arg0;
                var13 = var0.premiumType;
                var7 = var0.children;
                var4 = var0.style;
                var0 = _closure1_slot8;
                var3 = undefined;
                var8 = var0.bind(var3)();
                var2 = _closure1_slot7;
                var1 = _closure1_slot3;
                var0 = {};
                var0.style = var4;
                var6 = _closure1_slot6;
                var5 = _closure1_slot1;
                var12 = _closure1_slot2;
                var4 = 7;
                var4 = var12[var4];
                var5 = var5.bind(var3)(var4);
                var4 = {};
                var9 = var8.header;
                var4.style = var9;
                var10 = _closure1_slot0;
                var9 = 8;
                var14 = var12[var9];
                var14 = var10.bind(var3)(var14);
                var14 = var14.HorizontalGradient;
                var14 = var14.START;
                var4.start = var14;
                var9 = var12[var9];
                var9 = var10.bind(var3)(var9);
                var9 = var9.HorizontalGradient;
                var9 = var9.END;
                var4.end = var9;
                var9 = 9;
                var9 = var12[var9];
                var10 = var10.bind(var3)(var9);
                var9 = var10.getPremiumGradientColor;
                var9 = var9.bind(var10)(var13);
                var4.colors = var9;
                var9 = _closure1_slot4;
                var10 = {};
                var12 = _closure1_slot5;
                var12 = var12.TIER_0;
                if (!(var12 !== var13)) {
                    _fun82690_ip = 231;
                    continue _fun82690
                }
            case 185:
                var12 = _closure1_slot5;
                var12 = var12.TIER_1;
                if (!(var12 !== var13)) {
                    _fun82690_ip = 223;
                    continue _fun82690
                }
            case 199:
                var12 = _closure1_slot5;
                var14 = var12.TIER_2;
                var12 = undefined;
                if (!(var14 === var13)) {
                    _fun82690_ip = 237;
                    continue _fun82690
                }
            case 215:
                var12 = var8.textLogoTier2;
                _fun82690_ip = 237;
                continue _fun82690;
            case 223:
                var12 = var8.textLogoTier1;
                _fun82690_ip = 237;
                continue _fun82690;
            case 231:
                var12 = var8.textLogoTier0;
            case 237:
                var10.style = var12;
                var12 = _closure1_slot5;
                var12 = var12.TIER_0;
                if (!(var12 !== var13)) {
                    _fun82690_ip = 329;
                    continue _fun82690
                }
            case 255:
                var12 = _closure1_slot5;
                var12 = var12.TIER_1;
                if (!(var12 !== var13)) {
                    _fun82690_ip = 307;
                    continue _fun82690
                }
            case 269:
                var12 = _closure1_slot5;
                var14 = var12.TIER_2;
                var12 = undefined;
                if (!(var14 === var13)) {
                    _fun82690_ip = 349;
                    continue _fun82690
                }
            case 285:
                var15 = _closure1_slot1;
                var16 = _closure1_slot2;
                var14 = 12;
                var14 = var16[var14];
                var12 = var15.bind(var3)(var14);
                _fun82690_ip = 349;
                continue _fun82690;
            case 307:
                var15 = _closure1_slot1;
                var16 = _closure1_slot2;
                var14 = 11;
                var14 = var16[var14];
                var12 = var15.bind(var3)(var14);
                _fun82690_ip = 349;
                continue _fun82690;
            case 329:
                var15 = _closure1_slot1;
                var16 = _closure1_slot2;
                var14 = 10;
                var14 = var16[var14];
                var12 = var15.bind(var3)(var14);
            case 349:
                var10.source = var12;
                var10 = var6.bind(var3)(var9, var10);
                var4.children = var10;
                var5 = var6.bind(var3)(var5, var4);
                var4 = new Array(3);
                var4[0] = var5;
                var5 = {};
                var12 = var8.wumpusLogo;
                var10 = new Array(2);
                var10[0] = var12;
                var12 = _closure1_slot5;
                var12 = var12.TIER_0;
                if (!(var12 !== var13)) {
                    _fun82690_ip = 453;
                    continue _fun82690
                }
            case 407:
                var12 = _closure1_slot5;
                var12 = var12.TIER_1;
                if (!(var12 !== var13)) {
                    _fun82690_ip = 445;
                    continue _fun82690
                }
            case 421:
                var12 = _closure1_slot5;
                var14 = var12.TIER_2;
                var12 = undefined;
                if (!(var14 === var13)) {
                    _fun82690_ip = 459;
                    continue _fun82690
                }
            case 437:
                var12 = var8.wumpusLogoTier2;
                _fun82690_ip = 459;
                continue _fun82690;
            case 445:
                var12 = var8.wumpusLogoTier1;
                _fun82690_ip = 459;
                continue _fun82690;
            case 453:
                var12 = var8.wumpusLogoTier0;
            case 459:
                var10[1] = var12;
                var5.style = var10;
                var10 = _closure1_slot5;
                var10 = var10.TIER_0;
                if (!(var10 !== var13)) {
                    _fun82690_ip = 555;
                    continue _fun82690
                }
            case 481:
                var10 = _closure1_slot5;
                var10 = var10.TIER_1;
                if (!(var10 !== var13)) {
                    _fun82690_ip = 533;
                    continue _fun82690
                }
            case 495:
                var10 = _closure1_slot5;
                var12 = var10.TIER_2;
                var10 = undefined;
                if (!(var12 === var13)) {
                    _fun82690_ip = 575;
                    continue _fun82690
                }
            case 511:
                var13 = _closure1_slot1;
                var14 = _closure1_slot2;
                var12 = 15;
                var12 = var14[var12];
                var10 = var13.bind(var3)(var12);
                _fun82690_ip = 575;
                continue _fun82690;
            case 533:
                var13 = _closure1_slot1;
                var14 = _closure1_slot2;
                var12 = 14;
                var12 = var14[var12];
                var10 = var13.bind(var3)(var12);
                _fun82690_ip = 575;
                continue _fun82690;
            case 555:
                var12 = _closure1_slot1;
                var13 = _closure1_slot2;
                var11 = 13;
                var11 = var13[var11];
                var10 = var12.bind(var3)(var11);
            case 575:
                var5.source = var10;
                var5 = var6.bind(var3)(var9, var5);
                var4[1] = var5;
                var5 = {};
                var8 = var8.body;
                var5.style = var8;
                var5.children = var7;
                var5 = var6.bind(var3)(var1, var5);
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1615, 33, 1297, 671, 4835, 4057, 670, 3068, 10599, 10600, 6608, 7029, 7030, 7076, 2]);