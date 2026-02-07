// modules/content_inventory/memberlist/useHeroColors.tsx
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
    var7 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/content_inventory/memberlist/useHeroColors.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        var3 = _closure1_slot0;
        var4 = _closure1_slot2;
        var2 = 9;
        var6 = var4[var2];
        var5 = undefined;
        var9 = var3.bind(var5)(var6);
        var8 = var9.useStateFromStores;
        var6 = _closure1_slot5;
        var7 = new Array(1);
        var7[0] = var6;
        var6 = function() { // Environment: var0
            var0 = _closure1_slot5;
            var0 = var0.saturation;
            return var0;
        };
        var8 = var8.bind(var9)(var7, var6);
        var2 = var4[var2];
        var9 = var3.bind(var5)(var2);
        var7 = var9.useStateFromStores;
        var2 = _closure1_slot6;
        var6 = new Array(1);
        var6[0] = var2;
        var2 = function() { // Environment: var0
            var0 = _closure1_slot6;
            var0 = var0.theme;
            return var0;
        };
        var7 = var7.bind(var9)(var6, var2);
        var2 = 6;
        var2 = var4[var2];
        var6 = var3.bind(var5)(var2);
        var2 = var6.getFallbackHeroColor;
        var6 = var2.bind(var6)(var7, var8);
        var2 = 4;
        var2 = var4[var2];
        var4 = var3.bind(var5)(var2);
        var3 = var4.useAvatarColors;
        var2 = arg0;
        var4 = var3.bind(var4)(var2, var6);
        var3 = _closure1_slot3;
        var2 = 2;
        var3 = var3.bind(var5)(var4, var2);
        var2 = 0;
        var5 = var3[var2];
        var _closure2_slot0 = var5;
        var2 = 1;
        var4 = var3[var2];
        var _closure2_slot1 = var4;
        var3 = _closure1_slot4;
        var2 = var3.useMemo;
        var1 = new Array(2);
        var1[0] = var5;
        var1[1] = var4;
        var0 = function() { // Environment: var0
            _fun57014: for (var _fun57014_ip = 0;;) switch (_fun57014_ip) {
                case 0:
                    var2 = _closure1_slot0;
                    var0 = _closure1_slot2;
                    var5 = 7;
                    var3 = var0[var5];
                    var4 = undefined;
                    var8 = var2.bind(var4)(var3);
                    var7 = var8.hex2int;
                    var6 = _closure2_slot0;
                    var8 = var7.bind(var8)(var6);
                    var6 = var0[var5];
                    var7 = var2.bind(var4)(var6);
                    var6 = var7.hex2int;
                    var3 = _closure2_slot1;
                    var3 = var6.bind(var7)(var3);
                    var0 = var0[var5];
                    var2 = var2.bind(var4)(var0);
                    var0 = var2.getDarkness;
                    var0 = var0.bind(var2)(var8);
                    var10 = 0.725;
                    var0 = var0 >= var10;
                    var9 = 1;
                    var7 = 8;
                    var6 = 0.5;
                    var11 = var8;
                    var2 = var9;
                    var8 = var11;
                    if (var0) {
                        _fun57014_ip = 220;
                        continue _fun57014
                    }
                case 129:
                    var12 = _closure1_slot1;
                    var0 = _closure1_slot2;
                    var0 = var0[var7];
                    var0 = var12.bind(var4)(var0);
                    var12 = var0.bind(var4)(var11);
                    var0 = var12.darken;
                    var12 = var0.bind(var12)(var6);
                    var0 = var12.num;
                    var12 = var0.bind(var12)();
                    var2 = var2 + 1;
                    var8 = var12;
                    if (!(var2 < var7)) {
                        _fun57014_ip = 220;
                        continue _fun57014
                    }
                case 182:
                    var13 = _closure1_slot0;
                    var0 = _closure1_slot2;
                    var0 = var0[var5];
                    var13 = var13.bind(var4)(var0);
                    var0 = var13.getDarkness;
                    var0 = var0.bind(var13)(var12);
                    var11 = var12;
                    var8 = var11;
                    if (!(var0 >= var10)) {
                        _fun57014_ip = 129;
                        continue _fun57014
                    }
                case 220:
                    var2 = _closure1_slot0;
                    var0 = _closure1_slot2;
                    var0 = var0[var5];
                    var2 = var2.bind(var4)(var0);
                    var0 = var2.getDarkness;
                    var0 = var0.bind(var2)(var3);
                    var0 = var0 >= var10;
                    var2 = var3;
                    var3 = var2;
                    if (var0) {
                        _fun57014_ip = 352;
                        continue _fun57014
                    }
                case 261:
                    var11 = _closure1_slot1;
                    var0 = _closure1_slot2;
                    var0 = var0[var7];
                    var0 = var11.bind(var4)(var0);
                    var11 = var0.bind(var4)(var2);
                    var0 = var11.darken;
                    var11 = var0.bind(var11)(var6);
                    var0 = var11.num;
                    var11 = var0.bind(var11)();
                    var9 = var9 + 1;
                    var3 = var11;
                    if (!(var9 < var7)) {
                        _fun57014_ip = 352;
                        continue _fun57014
                    }
                case 314:
                    var12 = _closure1_slot0;
                    var0 = _closure1_slot2;
                    var0 = var0[var5];
                    var12 = var12.bind(var4)(var0);
                    var0 = var12.getDarkness;
                    var0 = var0.bind(var12)(var11);
                    var2 = var11;
                    var3 = var2;
                    if (!(var0 >= var10)) {
                        _fun57014_ip = 261;
                        continue _fun57014
                    }
                case 352:
                    var0 = {};
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var6 = var1[var5];
                    var7 = var2.bind(var4)(var6);
                    var6 = var7.int2hex;
                    var6 = var6.bind(var7)(var8);
                    var0.primaryColor = var6;
                    var1 = var1[var5];
                    var2 = var2.bind(var4)(var1);
                    var1 = var2.int2hex;
                    var1 = var1.bind(var2)(var3);
                    var0.secondaryColor = var1;
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.default = var3;
    var1 = function(arg0) { // Environment: var1
        _fun57015: for (var _fun57015_ip = 0;;) switch (_fun57015_ip) {
            case 0:
                var0 = _closure1_slot5;
                var7 = var0.saturation;
                var0 = _closure1_slot6;
                var6 = var0.theme;
                var2 = _closure1_slot0;
                var0 = _closure1_slot2;
                var3 = 6;
                var3 = var0[var3];
                var4 = undefined;
                var5 = var2.bind(var4)(var3);
                var3 = var5.getFallbackHeroColor;
                var6 = var3.bind(var5)(var6, var7);
                var5 = function(arg0, arg1) { // Environment: var3
                    _fun57016: for (var _fun57016_ip = 0;;) switch (_fun57016_ip) {
                        case 0:
                            var2 = arg1;
                            var1 = _closure1_slot5;
                            var4 = var1.desaturateUserColors;
                            var1 = 1;
                            if (!var4) {
                                _fun57016_ip = 34;
                                continue _fun57016
                            }
                        case 24:
                            var4 = _closure1_slot5;
                            var1 = var4.saturation;
                        case 34:
                            var _closure3_slot0 = var1;
                            var4 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 4;
                            var1 = var1[var0];
                            var0 = undefined;
                            var1 = var4.bind(var0)(var1);
                            var4 = var1.useColorStore;
                            var1 = var4.getState;
                            var1 = var1.bind(var4)();
                            var4 = var1.palette;
                            var1 = arg0;
                            var5 = var4[var1];
                            var1 = null;
                            var4 = var1 == var5;
                            if (var4) {
                                _fun57016_ip = 113;
                                continue _fun57016
                            }
                        case 98:
                            var4 = var5.map;
                            var3 = function(arg0) { // Environment: var3
                                _fun57017: for (var _fun57017_ip = 0;;) switch (_fun57017_ip) {
                                    case 0:
                                        var3 = arg0;
                                        var0 = var3[Symbol.iterator];
                                        var3 = var0().next;
                                        var4 = var3().value;
                                        var1 = var0;
                                        var2 = undefined;
                                        var1 = var1 === var2;
                                        var8 = undefined;
                                        if (var1) {
                                            _fun57017_ip = 27;
                                            continue _fun57017
                                        }
                                    case 24:
                                        var8 = var4;
                                    case 27:
                                        var7 = undefined;
                                        if (var1) {
                                            _fun57017_ip = 57;
                                            continue _fun57017
                                        }
                                    case 32:
                                        var5 = var3().value;
                                        var4 = var0;
                                        var4 = var4 === var2;
                                        var7 = undefined;
                                        var1 = var4;
                                        if (var4) {
                                            _fun57017_ip = 57;
                                            continue _fun57017
                                        }
                                    case 51:
                                        var7 = var5;
                                        var1 = var4;
                                    case 57:
                                        var5 = undefined;
                                        if (var1) {
                                            _fun57017_ip = 87;
                                            continue _fun57017
                                        }
                                    case 62:
                                        var4 = var3().value;
                                        var3 = var0;
                                        var3 = var3 === var2;
                                        var5 = undefined;
                                        var1 = var3;
                                        if (var3) {
                                            _fun57017_ip = 87;
                                            continue _fun57017
                                        }
                                    case 81:
                                        var5 = var4;
                                        var1 = var3;
                                    case 87:
                                        if (var1) {
                                            _fun57017_ip = 93;
                                            continue _fun57017
                                        }
                                    case 90:
                                        var0.return();
                                    case 93:
                                        var1 = _closure1_slot1;
                                        var6 = _closure1_slot2;
                                        var0 = 5;
                                        var3 = var6[var0];
                                        var4 = var1.bind(var2)(var3);
                                        var3 = {};
                                        var3.r = var8;
                                        var3.g = var7;
                                        var3.b = var5;
                                        var4 = var4.bind(var2)(var3);
                                        var3 = var4.toHsl;
                                        var3 = var3.bind(var4)();
                                        var4 = var3.h;
                                        var5 = var3.s;
                                        var3 = var3.l;
                                        var0 = var6[var0];
                                        var1 = var1.bind(var2)(var0);
                                        var0 = {};
                                        var0.h = var4;
                                        var4 = _closure3_slot0;
                                        var4 = var5 * var4;
                                        var0.s = var4;
                                        var0.l = var3;
                                        var1 = var1.bind(var2)(var0);
                                        var0 = var1.toHexString;
                                        var0 = var0.bind(var1)();
                                        return var0;
                                }
                            };
                            var0 = var4.bind(var5)(var3);
                        case 113:
                            if (!(var1 == var0)) {
                                _fun57016_ip = 132;
                                continue _fun57016
                            }
                        case 117:
                            var1 = new Array(2);
                            var1[0] = var2;
                            var1[1] = var2;
                            var0 = var1;
                        case 132:
                            return var0;
                    }
                };
                var3 = arg0;
                var6 = var5.bind(var4)(var3, var6);
                var5 = _closure1_slot3;
                var3 = 2;
                var3 = var5.bind(var4)(var6, var3);
                var5 = 0;
                var8 = var3[var5];
                var10 = 1;
                var7 = var3[var10];
                var5 = 7;
                var3 = var0[var5];
                var6 = var2.bind(var4)(var3);
                var3 = var6.hex2int;
                var8 = var3.bind(var6)(var8);
                var3 = var0[var5];
                var6 = var2.bind(var4)(var3);
                var3 = var6.hex2int;
                var3 = var3.bind(var6)(var7);
                var0 = var0[var5];
                var2 = var2.bind(var4)(var0);
                var0 = var2.getDarkness;
                var0 = var0.bind(var2)(var8);
                var9 = 0.725;
                var0 = var0 >= var9;
                var7 = 8;
                var6 = 0.5;
                var11 = var8;
                var2 = var10;
                var8 = var11;
                if (var0) {
                    _fun57015_ip = 292;
                    continue _fun57015
                }
            case 201:
                var12 = _closure1_slot1;
                var0 = _closure1_slot2;
                var0 = var0[var7];
                var0 = var12.bind(var4)(var0);
                var12 = var0.bind(var4)(var11);
                var0 = var12.darken;
                var12 = var0.bind(var12)(var6);
                var0 = var12.num;
                var12 = var0.bind(var12)();
                var2 = var2 + 1;
                var8 = var12;
                if (!(var2 < var7)) {
                    _fun57015_ip = 292;
                    continue _fun57015
                }
            case 254:
                var13 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var5];
                var13 = var13.bind(var4)(var0);
                var0 = var13.getDarkness;
                var0 = var0.bind(var13)(var12);
                var11 = var12;
                var8 = var11;
                if (!(var0 >= var9)) {
                    _fun57015_ip = 201;
                    continue _fun57015
                }
            case 292:
                var2 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var5];
                var2 = var2.bind(var4)(var0);
                var0 = var2.getDarkness;
                var0 = var0.bind(var2)(var3);
                var0 = var0 >= var9;
                var2 = var3;
                var3 = var2;
                if (var0) {
                    _fun57015_ip = 424;
                    continue _fun57015
                }
            case 333:
                var11 = _closure1_slot1;
                var0 = _closure1_slot2;
                var0 = var0[var7];
                var0 = var11.bind(var4)(var0);
                var11 = var0.bind(var4)(var2);
                var0 = var11.darken;
                var11 = var0.bind(var11)(var6);
                var0 = var11.num;
                var11 = var0.bind(var11)();
                var10 = var10 + 1;
                var3 = var11;
                if (!(var10 < var7)) {
                    _fun57015_ip = 424;
                    continue _fun57015
                }
            case 386:
                var12 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var5];
                var12 = var12.bind(var4)(var0);
                var0 = var12.getDarkness;
                var0 = var0.bind(var12)(var11);
                var2 = var11;
                var3 = var2;
                if (!(var0 >= var9)) {
                    _fun57015_ip = 333;
                    continue _fun57015
                }
            case 424:
                var0 = {};
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var6 = var1[var5];
                var7 = var2.bind(var4)(var6);
                var6 = var7.int2hex;
                var6 = var6.bind(var7)(var8);
                var0.primaryColor = var6;
                var1 = var1[var5];
                var2 = var2.bind(var4)(var1);
                var1 = var2.int2hex;
                var1 = var1.bind(var2)(var3);
                var0.secondaryColor = var1;
                return var0;
        }
    };
    var2.getHeroColors = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 1298, 3198, 6911, 4624, 6913, 668, 669, 566, 2]);