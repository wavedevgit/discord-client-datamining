// modules/voice_panel/native/card/DominantColorUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var9 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var7;
    var4 = function arg0() {
        _fun56747: for (var _fun56747_ip = 0;;) switch (_fun56747_ip) {
            case 0:
                var3 = arg0;
                var2 = _closure1_slot8;
                var0 = var2.get;
                var0 = var0.bind(var2)(var3);
                var7 = null;
                if (!(var7 == var0)) {
                    _fun56747_ip = 84;
                    continue _fun56747
                }
            case 26:
                var5 = 'number';
                var4 = typeof var3;
                var2 = var3;
                if (!(var5 !== var4)) {
                    _fun56747_ip = 81;
                    continue _fun56747
                }
            case 40:
                var5 = var7 == var3;
                var4 = null;
                if (var5) {
                    _fun56747_ip = 78;
                    continue _fun56747
                }
            case 49:
                var5 = var3.trim;
                var6 = var5.bind(var3)();
                var5 = '';
                var4 = null;
                if (!(var5 !== var6)) {
                    _fun56747_ip = 78;
                    continue _fun56747
                }
            case 69:
                var5 = {};
                var5.uri = var3;
                var4 = var5;
            case 78:
                var2 = var4;
            case 81:
                var0 = var2;
            case 84:
                var2 = _closure1_slot8;
                var1 = var2.set;
                var1 = var1.bind(var2)(var3, var0);
                return var0;
        }
    };
    var _closure1_slot9 = var4;
    var3 = function arg0() {
        _fun56748: for (var _fun56748_ip = 0;;) switch (_fun56748_ip) {
            case 0:
                var5 = arg0;
                var _closure2_slot0 = var5;
                var4 = _closure1_slot4;
                var3 = var4.useRef;
                var0 = true;
                var0 = var3.bind(var4)(var0);
                var _closure2_slot1 = var0;
                var6 = _closure1_slot4;
                var4 = var6.useEffect;
                var3 = function() { // Environment: var1
                    var0 = function() { // Environment: var0
                        var1 = _closure2_slot1;
                        var0 = false;
                        var1.current = var0;
                        var0 = undefined;
                        return var0;
                    };
                    return var0;
                };
                var0 = new Array(0);
                var0 = var4.bind(var6)(var3, var0);
                var4 = _closure1_slot4;
                var3 = var4.useState;
                var7 = null;
                var8 = var7 != var5;
                var6 = undefined;
                var0 = undefined;
                if (!var8) {
                    _fun56748_ip = 92;
                    continue _fun56748
                }
            case 78:
                var9 = _closure1_slot7;
                var8 = var9.get;
                var0 = var8.bind(var9)(var5);
            case 92:
                if (!(var7 == var0)) {
                    _fun56748_ip = 154;
                    continue _fun56748
                }
            case 96:
                var8 = _closure1_slot0;
                var11 = _closure1_slot2;
                var7 = 4;
                var7 = var11[var7];
                var9 = var8.bind(var6)(var7);
                var8 = var9.hexToRgb;
                var10 = _closure1_slot1;
                var7 = 5;
                var7 = var11[var7];
                var7 = var10.bind(var6)(var7);
                var7 = var7.unsafe_rawColors;
                var7 = var7.PRIMARY_800;
                var0 = var8.bind(var9)(var7);
            case 154:
                var4 = var3.bind(var4)(var0);
                var3 = _closure1_slot3;
                var0 = 2;
                var4 = var3.bind(var6)(var4, var0);
                var0 = 0;
                var0 = var4[var0];
                var3 = 1;
                var3 = var4[var3];
                var _closure2_slot2 = var3;
                var4 = _closure1_slot4;
                var3 = var4.useEffect;
                var2 = new Array(1);
                var2[0] = var5;
                var1 = function() { // Environment: var1
                    _fun56751: for (var _fun56751_ip = 0;;) switch (_fun56751_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            var3 = null;
                            var5 = var3 != var0;
                            var0 = undefined;
                            var2 = undefined;
                            if (!var5) {
                                _fun56751_ip = 43;
                                continue _fun56751
                            }
                        case 22:
                            var7 = _closure1_slot7;
                            var6 = var7.get;
                            var5 = _closure2_slot0;
                            var2 = var6.bind(var7)(var5);
                        case 43:
                            var _closure3_slot0 = var2;
                            var5 = _closure2_slot0;
                            if (!(var3 != var5)) {
                                _fun56751_ip = 217;
                                continue _fun56751
                            }
                        case 58:
                            if (!(var3 != var2)) {
                                _fun56751_ip = 81;
                                continue _fun56751
                            }
                        case 62:
                            var5 = _closure2_slot2;
                            var2 = function(arg0) { // Environment: var1
                                _fun56754: for (var _fun56754_ip = 0;;) switch (_fun56754_ip) {
                                    case 0:
                                        var3 = arg0;
                                        var2 = _closure3_slot0;
                                        var0 = var3;
                                        if (!(var2 !== var3)) {
                                            _fun56754_ip = 62;
                                            continue _fun56754
                                        }
                                    case 17:
                                        var4 = _closure1_slot1;
                                        var5 = _closure1_slot2;
                                        var2 = 6;
                                        var2 = var5[var2];
                                        var5 = undefined;
                                        var4 = var4.bind(var5)(var2);
                                        var2 = _closure3_slot0;
                                        var2 = var4.bind(var5)(var2, var3);
                                        var0 = var3;
                                        if (var2) {
                                            _fun56754_ip = 62;
                                            continue _fun56754
                                        }
                                    case 58:
                                        var0 = _closure3_slot0;
                                    case 62:
                                        return var0;
                                }
                            };
                            var2 = var5.bind(var0)(var2);
                            _fun56751_ip = 217;
                            continue _fun56751;
                        case 81:
                            var5 = _closure1_slot9;
                            var4 = _closure2_slot0;
                            var7 = var5.bind(var0)(var4);
                            if (!(var3 != var7)) {
                                _fun56751_ip = 217;
                                continue _fun56751
                            }
                        case 101:
                            var4 = 'number';
                            var3 = typeof var7;
                            if (!(var4 !== var3)) {
                                _fun56751_ip = 150;
                                continue _fun56751
                            }
                        case 112:
                            var3 = _closure1_slot5;
                            var5 = var3.ImageManager;
                            var4 = var5.getDominantColors;
                            var6 = _closure1_slot6;
                            var3 = var6.resolveAssetSource;
                            var3 = var3.bind(var6)(var7);
                            var4 = var4.bind(var5)(var3);
                            _fun56751_ip = 186;
                            continue _fun56751;
                        case 150:
                            var3 = _closure1_slot5;
                            var5 = var3.ImageManager;
                            var3 = var5.getDominantColorsLocalAsset;
                            var6 = _closure1_slot6;
                            var2 = var6.resolveAssetSource;
                            var2 = var2.bind(var6)(var7);
                            var4 = var3.bind(var5)(var2);
                        case 186:
                            var3 = var4.then;
                            var2 = function(arg0) { // Environment: var1
                                _fun56752: for (var _fun56752_ip = 0;;) switch (_fun56752_ip) {
                                    case 0:
                                        var5 = _closure1_slot3;
                                        var0 = arg0;
                                        var3 = 0;
                                        var4 = var0[var3];
                                        var0 = undefined;
                                        var2 = 3;
                                        var4 = var5.bind(var0)(var4, var2);
                                        var2 = {};
                                        var3 = var4[var3];
                                        var2.r = var3;
                                        var3 = 1;
                                        var3 = var4[var3];
                                        var2.g = var3;
                                        var3 = 2;
                                        var3 = var4[var3];
                                        var2.b = var3;
                                        var5 = _closure1_slot7;
                                        var4 = var5.set;
                                        var3 = _closure2_slot0;
                                        var3 = var4.bind(var5)(var3, var2);
                                        var3 = _closure2_slot1;
                                        var3 = var3.current;
                                        if (!var3) {
                                            _fun56752_ip = 103;
                                            continue _fun56752
                                        }
                                    case 94:
                                        var1 = _closure2_slot2;
                                        var1 = var1.bind(var0)(var2);
                                    case 103:
                                        return var0;
                                }
                            };
                            var3 = var3.bind(var4)(var2);
                            var2 = var3.catch;
                            var1 = function() { // Environment: var1
                                var0 = undefined;
                                return var0;
                            };
                            var1 = var2.bind(var3)(var1);
                        case 217:
                            return var0;
                    }
                };
                var1 = var3.bind(var4)(var1, var2);
                return var0;
        }
    };
    var _closure1_slot10 = var3;
    var0 = global;
    var10 = var0.Object;
    var8 = var10.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var10)(var2, var0, var5);
    var0 = 0;
    var5 = var7[var0];
    var0 = undefined;
    var5 = var9.bind(var0)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var8 = var7[var5];
    var5 = arg3;
    var5 = var5.bind(var0)(var8);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var8 = var5.NativeModules;
    var _closure1_slot5 = var8;
    var5 = var5.Image;
    var _closure1_slot6 = var5;
    var5 = 3;
    var8 = var7[var5];
    var12 = var9.bind(var0)(var8);
    var10 = {};
    var8 = 1000;
    var10.max = var8;
    var11 = var12.prototype;
    var11 = Object.create(var11, {
        constructor: {
            value: var12
        }
    });
    var16 = var11;
    var15 = var10;
    var10 = new var16[var12](var15, var14);
    var10 = var10 instanceof Object ? var10 : var11;
    var _closure1_slot7 = var10;
    var5 = var7[var5];
    var9 = var9.bind(var0)(var5);
    var5 = {};
    var5.max = var8;
    var8 = var9.prototype;
    var8 = Object.create(var8, {
        constructor: {
            value: var9
        }
    });
    var16 = var8;
    var15 = var5;
    var5 = new var16[var9](var15, var14);
    var5 = var5 instanceof Object ? var5 : var8;
    var _closure1_slot8 = var5;
    var5 = 7;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/voice_panel/native/card/DominantColorUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var2.getCachedSourceFromURI = var4;
    var2.useDominantRGBFromImage = var3;
    var1 = function arg0() {
        var2 = _closure1_slot10;
        var1 = undefined;
        var0 = arg0;
        var0 = var2.bind(var1)(var0);
        var12 = var0.r;
        var10 = var0.g;
        var8 = var0.b;
        var0 = global;
        var0 = var0.HermesInternal;
        var3 = var0.concat;
        var13 = 'rgb(';
        var1 = ', ';
        var7 = ')';
        var11 = var1;
        var9 = var1;
        var0 = var13[var3](var12, var11, var10, var9, var8, var7, var6);
        return var0;
    };
    var2.useDominantColorFromImage = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1386, 3231, 671, 628, 2]);