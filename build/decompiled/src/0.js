// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
            var9 = require;
            var5 = metroImportDefault;
            var2 = exports;
            var10 = dependencyMap;
            var _closure1_slot0 = var9;
            var _closure1_slot1 = var5;
            var _closure1_slot2 = var10;
            var7 = function arg0() {
                _fun57669: for (var _fun57669_ip = 0;;) switch (_fun57669_ip) {
                    case 0:
                        var4 = arg0;
                        var0 = null;
                        var1 = var0 == var4;
                        if (var1) {
                            _fun57669_ip = 87;
                            continue _fun57669
                        }
                    case 12:
                        var5 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 2;
                        var3 = var3[var1];
                        var1 = undefined;
                        var3 = var5.bind(var1)(var3);
                        var1 = var3.getDarkness;
                        var3 = var1.bind(var3)(var4);
                        var1 = 0.5;
                        if (!(!(var3 > var1))) {
                            _fun57669_ip = 74;
                            continue _fun57669
                        }
                    case 62:
                        var1 = _closure1_slot4;
                        var1 = var1.LIGHT;
                        _fun57669_ip = 84;
                        continue _fun57669;
                    case 74:
                        var2 = _closure1_slot4;
                        var1 = var2.DARK;
                    case 84:
                        var0 = var1;
                    case 87:
                        return var0;
                }
            };
            var _closure1_slot5 = var7;
            var6 = function arg0, arg1, arg2() {
                var4 = arg0;
                var6 = arg1;
                var1 = arg2;
                var0 = 100;
                var5 = var1 / var0;
                var2 = 1;
                var7 = var2 - var5;
                var1 = global;
                var8 = var1.Math;
                var3 = var8.round;
                var0 = 0;
                var9 = var4[var0];
                var9 = var9 * var7;
                var0 = var6[var0];
                var0 = var0 * var5;
                var0 = var9 + var0;
                var3 = var3.bind(var8)(var0);
                var0 = new Array(3);
                var0[0] = var3;
                var8 = var1.Math;
                var3 = var8.round;
                var9 = var4[var2];
                var9 = var9 * var7;
                var2 = var6[var2];
                var2 = var2 * var5;
                var2 = var9 + var2;
                var2 = var3.bind(var8)(var2);
                var0[1] = var2;
                var3 = var1.Math;
                var2 = var3.round;
                var1 = 2;
                var4 = var4[var1];
                var4 = var4 * var7;
                var1 = var6[var1];
                var1 = var1 * var5;
                var1 = var4 + var1;
                var1 = var2.bind(var3)(var1);
                var0[2] = var1;
                return var0;
            };
            var _closure1_slot6 = var6;
            var3 = function arg0, arg1, arg2() {
                var4 = _closure1_slot6;
                var3 = undefined;
                var2 = arg0;
                var1 = arg1;
                var0 = arg2;
                var1 = var4.bind(var3)(var2, var1, var0);
                var0 = 0;
                var12 = var1[var0];
                var0 = 1;
                var10 = var1[var0];
                var0 = 2;
                var8 = var1[var0];
                var0 = global;
                var0 = var0.HermesInternal;
                var3 = var0.concat;
                var13 = 'rgba(';
                var1 = ', ';
                var7 = ', 1)';
                var11 = var1;
                var9 = var1;
                var0 = var13[var3](var12, var11, var10, var9, var8, var7, var6);
                return var0;
            };
            var _closure1_slot7 = var3;
            var0 = global;
            var11 = var0.Object;
            var8 = var11.defineProperty;
            var4 = {};
            var0 = true;
            var4.value = var0;
            var0 = '__esModule';
            var0 = var8.bind(var11)(var2, var0, var4);
            var0 = 0;
            var4 = var10[var0];
            var0 = undefined;
            var4 = var5.bind(var0)(var4);
            var _closure1_slot3 = var4;
            var4 = 1;
            var4 = var10[var4];
            var4 = var9.bind(var0)(var4);
            var4 = var4.ThemeTypes;
            var _closure1_slot4 = var4;
            var4 = 4;
            var5 = var10[var4];
            var12 = var9.bind(var0)(var5);
            var11 = var12.memoize;
            var8 = function(arg0) { // Environment: var1
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 5;
                var2 = var4[var0];
                var1 = undefined;
                var6 = var3.bind(var1)(var2);
                var5 = var6.getContrastingColor;
                var2 = {};
                var7 = '#ffffff';
                var2.base = var7;
                var0 = var4[var0];
                var0 = var3.bind(var1)(var0);
                var0 = var0.WCAGContrastRatios;
                var0 = var0.HighContrastText;
                var2.contrastRatio = var0;
                var0 = arg0;
                var2 = var5.bind(var6)(var0, var2);
                var0 = 2;
                var0 = var4[var0];
                var1 = var3.bind(var1)(var0);
                var0 = var1.hex2int;
                var0 = var0.bind(var1)(var2);
                return var0;
            };
            var5 = function(arg0) { // Environment: var1
                var0 = arg0;
                return var0;
            };
            var5 = var11.bind(var12)(var8, var5);
            var4 = var10[var4];
            var12 = var9.bind(var0)(var4);
            var11 = var12.memoize;
            var8 = function(arg0, arg1, arg2) { // Environment: var1
                _fun57674: for (var _fun57674_ip = 0;;) switch (_fun57674_ip) {
                    case 0:
                        var8 = arg0;
                        var5 = arg2;
                        var0 = null;
                        if (!(var0 == var5)) {
                            _fun57674_ip = 26;
                            continue _fun57674
                        }
                    case 12:
                        var1 = _closure1_slot5;
                        var0 = undefined;
                        var5 = var1.bind(var0)(var8);
                    case 26:
                        var1 = _closure1_slot4;
                        var2 = var1.LIGHT;
                        var3 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var6 = 6;
                        var7 = var1[var6];
                        var4 = undefined;
                        var10 = var3.bind(var4)(var7);
                        var9 = var10.mix;
                        var7 = var1[var6];
                        var7 = var3.bind(var4)(var7);
                        var8 = var7.bind(var4)(var8);
                        var1 = var1[var6];
                        var3 = var3.bind(var4)(var1);
                        var1 = arg1;
                        var13 = var3.bind(var4)(var1);
                        var12 = 0.5;
                        var11 = 'lab';
                        var15 = var10;
                        var14 = var8;
                        var1 = var15[var9](var14, var13, var12, var11, var10);
                        var3 = global;
                        var10 = var3.Math;
                        var9 = var10.round;
                        var7 = var1.get;
                        var3 = 'hsl.l';
                        var7 = var7.bind(var1)(var3);
                        var8 = 100;
                        var7 = var8 * var7;
                        var7 = var9.bind(var10)(var7);
                        var10 = var7 / var8;
                        if (!(var5 === var2)) {
                            _fun57674_ip = 219;
                            continue _fun57674
                        }
                    case 171:
                        var5 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var2 = 4;
                        var2 = var7[var2];
                        var8 = var5.bind(var4)(var2);
                        var7 = var8.clamp;
                        var5 = 0.8;
                        var2 = 1;
                        var2 = var7.bind(var8)(var10, var5, var2);
                        _fun57674_ip = 264;
                        continue _fun57674;
                    case 219:
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var5 = 4;
                        var5 = var8[var5];
                        var9 = var7.bind(var4)(var5);
                })(undefined, undefined, undefined, undefined, undefined, undefined, 0.1);