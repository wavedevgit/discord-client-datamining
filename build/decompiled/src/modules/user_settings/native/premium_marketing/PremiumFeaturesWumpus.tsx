// modules/user_settings/native/premium_marketing/PremiumFeaturesWumpus.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var0 = metroImportDefault;
    var _closure1_slot0 = var0;
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
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.PremiumTypes;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot4 = var6;
    var6 = var3.Fragment;
    var _closure1_slot5 = var6;
    var3 = var3.jsxs;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'position': 'absolute',
        'top': 0,
        'right': 0
    };
    var3.clouds = var8;
    var8 = {
        'position': 'absolute',
        'top': 22,
        'right': 22,
        'height': 90
    };
    var3.wumpus = var8;
    var8 = {};
    var10 = {};
    var9 = -1;
    var10.scaleX = var9;
    var9 = new Array(1);
    var9[0] = var10;
    var8.transform = var9;
    var3.wumpusLeft = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot7 = var3;
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/premium_marketing/PremiumFeaturesWumpus.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun61804: for (var _fun61804_ip = 0;;) switch (_fun61804_ip) {
            case 0:
                var1 = arg0;
                var13 = var1.premiumType;
                var _closure2_slot0 = var13;
                var1 = _closure1_slot7;
                var3 = undefined;
                var12 = var1.bind(var3)();
                var6 = _closure1_slot0;
                var10 = _closure1_slot1;
                var1 = 4;
                var1 = var10[var1];
                var1 = var6.bind(var3)(var1);
                var5 = var1.bind(var3)();
                var _closure2_slot1 = var5;
                var4 = _closure1_slot2;
                var2 = var4.useMemo;
                var1 = new Array(2);
                var1[0] = var13;
                var1[1] = var5;
                var0 = function() { // Environment: var0
                    _fun61805: for (var _fun61805_ip = 0;;) switch (_fun61805_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            var0 = _closure1_slot3;
                            var0 = var0.TIER_0;
                            if (!(var1 !== var0)) {
                                _fun61805_ip = 96;
                                continue _fun61805
                            }
                        case 24:
                            var1 = _closure1_slot0;
                            var0 = _closure2_slot1;
                            var4 = _closure1_slot1;
                            if (var0) {
                                _fun61805_ip = 48;
                                continue _fun61805
                            }
                        case 39:
                            var0 = 9;
                            var0 = var4[var0];
                            _fun61805_ip = 55;
                            continue _fun61805;
                        case 48:
                            var3 = 8;
                            var0 = var4[var3];
                        case 55:
                            var6 = undefined;
                            var1 = var1.bind(var6)(var0);
                            var0 = {};
                            var4 = _closure1_slot0;
                            var7 = _closure1_slot1;
                            var3 = 10;
                            var3 = var7[var3];
                            var3 = var4.bind(var6)(var3);
                            var0.wumpusImageSource = var3;
                            var0.cloudsImageSource = var1;
                            _fun61805_ip = 165;
                            continue _fun61805;
                        case 96:
                            var1 = {};
                            var4 = _closure1_slot0;
                            var6 = _closure1_slot1;
                            var3 = 5;
                            var6 = var6[var3];
                            var3 = undefined;
                            var6 = var4.bind(var3)(var6);
                            var1.wumpusImageSource = var6;
                            var2 = _closure2_slot1;
                            var6 = _closure1_slot1;
                            if (var2) {
                                _fun61805_ip = 145;
                                continue _fun61805
                            }
                        case 136:
                            var2 = 7;
                            var2 = var6[var2];
                            _fun61805_ip = 152;
                            continue _fun61805;
                        case 145:
                            var5 = 6;
                            var2 = var6[var5];
                        case 152:
                            var2 = var4.bind(var3)(var2);
                            var1.cloudsImageSource = var2;
                            var0 = var1;
                        case 165:
                            return var0;
                    }
                };
                var0 = var2.bind(var4)(var0, var1);
                var8 = var0.wumpusImageSource;
                var15 = var0.cloudsImageSource;
                var2 = _closure1_slot6;
                var1 = _closure1_slot5;
                var0 = {};
                var7 = _closure1_slot4;
                var5 = 11;
                var4 = var10[var5];
                var14 = var6.bind(var3)(var4);
                var4 = {};
                var9 = var12.clouds;
                var4.style = var9;
                var9 = 'contain';
                var4.resizeMode = var9;
                var4.source = var15;
                var14 = var7.bind(var3)(var14, var4);
                var4 = new Array(2);
                var4[0] = var14;
                var5 = var10[var5];
                var6 = var6.bind(var3)(var5);
                var5 = {};
                var14 = var12.wumpus;
                var10 = new Array(2);
                var10[0] = var14;
                var11 = _closure1_slot3;
                var11 = var11.TIER_0;
                var11 = var13 === var11;
                if (!var11) {
                    _fun61804_ip = 212;
                    continue _fun61804
                }
            case 206:
                var11 = var12.wumpusLeft;
            case 212:
                var10[1] = var11;
                var5.style = var10;
                var5.resizeMode = var9;
                var5.source = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1623, 33, 1297, 7712, 7095, 7713, 7714, 7715, 7716, 7097, 4705, 2]);