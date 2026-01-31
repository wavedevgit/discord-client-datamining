// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun51304: for (var _fun51304_ip = 0;;) switch (_fun51304_ip) {
        case 0:
            var11 = require;
            var10 = dependencyMap;
            var _closure1_slot0 = var11;
            var _closure1_slot1 = var10;
            var0 = function arg0, arg1, arg2() {
                var0 = global;
                var3 = var0.Math;
                var2 = var3.min;
                var5 = var0.Math;
                var4 = var5.max;
                var1 = arg1;
                var0 = arg0;
                var1 = var4.bind(var5)(var1, var0);
                var0 = arg2;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var _closure1_slot5 = var0;
            var0 = function arg0() {
                _fun51306: for (var _fun51306_ip = 0;;) switch (_fun51306_ip) {
                    case 0:
                        var0 = global;
                        var2 = var0.Math;
                        var1 = var2.round;
                        var0 = arg0;
                        var2 = var1.bind(var2)(var0);
                        var1 = var2.toString;
                        var0 = 16;
                        var1 = var1.bind(var2)(var0);
                        var0 = var1.toUpperCase;
                        var2 = var0.bind(var1)();
                        var3 = var2.length;
                        var1 = 2;
                        var0 = var2;
                        if (!(var3 < var1)) {
                            _fun51306_ip = 69;
                            continue _fun51306
                        }
                    case 59:
                        var1 = '0';
                        var0 = var1 + var2;
                    case 69:
                        return var0;
                }
            };
            var _closure1_slot6 = var0;
            var0 = global;
            var2 = var0.Object;
            var9 = var2.hasOwnProperty;
            var _closure1_slot2 = var9;
            var3 = var0.Object;
            var2 = var3.create;
            var0 = null;
            var8 = var2.bind(var3)(var0);
            var _closure1_slot3 = var8;
            var3 = 0;
            var2 = var10[var3];
            var0 = undefined;
            var6 = var11.bind(var0)(var2);
            for (var2 in var6)
                case 95: {
                    case 104: var13 = var2;
                    var14 = var9.call;
                    var12 = var10[var3];
                    var12 = var11.bind(var0)(var12);
                    var12 = var14.bind(var9)(var12, var13);
                    if (!var12) {
                        _fun51304_ip = 95;
                        continue _fun51304
                    }
                    case 130: var12 = var10[var3];
                    var12 = var11.bind(var0)(var12);
                    var12 = var12[var13];
                    var8[var12] = var13;
                    _fun51304_ip = 95;
                    continue _fun51304;
                }
        case 149:
            var2 = {};
            var3 = {};
            var2.to = var3;
            var3 = {};
            var2.get = var3;
            var3 = arg4;
            var3.exports = var2;
            var _closure1_slot4 = var2;
            var3 = function(arg0) { // Environment: var1
                _fun51307: for (var _fun51307_ip = 0;;) switch (_fun51307_ip) {
                    case 0:
                        var5 = arg0;
                        var2 = var5.substring;
                        var1 = 0;
                        var0 = 3;
                        var1 = var2.bind(var5)(var1, var0);
                        var0 = var1.toLowerCase;
                        var2 = var0.bind(var1)();
                        var0 = 'hsl';
                        if (!(var0 !== var2)) {
                            _fun51307_ip = 103;
                            continue _fun51307
                        }
                    case 38:
                        var1 = 'hwb';
                        if (!(var1 !== var2)) {
                            _fun51307_ip = 75;
                            continue _fun51307
                        }
                    case 46:
                        var2 = _closure1_slot4;
                        var3 = var2.get;
                        var2 = var3.rgb;
                        var2 = var2.bind(var3)(var5);
                        var3 = 'rgb';
                        _fun51307_ip = 129;
                        continue _fun51307;
                    case 75:
                        var4 = _closure1_slot4;
                        var6 = var4.get;
                        var4 = var6.hwb;
                        var2 = var4.bind(var6)(var5);
                        var3 = var1;
                        _fun51307_ip = 129;
                        continue _fun51307;
                    case 103:
                        var1 = _closure1_slot4;
                        var4 = var1.get;
                        var1 = var4.hsl;
                        var2 = var1.bind(var4)(var5);
                        var3 = var0;
                    case 129:
                        var0 = null;
                        if (!var2) {
                            _fun51307_ip = 148;
                            continue _fun51307
                        }
                    case 134:
                        var1 = {};
                        var1.model = var3;
                        var1.value = var2;
                        var0 = var1;
                    case 148:
                        return var0;
                }
            };
            var2.get = var3;
            var4 = var2.get;
            var3 = function(arg0) { // Environment: var1
                _fun51308: for (var _fun51308_ip = 0;;) switch (_fun51308_ip) {
                    case 0:
                        var15 = arg0;
                        if (var15) {
                            _fun51308_ip = 10;
                            continue _fun51308
                        }
                    case 6:
                        var0 = null;
                        return var0;
                    case 10:
                        var0 = [0, 0, 0, 1];
                        var2 = var15.match;
                        var1 = /^#([a-f0-9]{6})([a-f0-9]{2})?$/i;
                        var2 = var2.bind(var15)(var1);
                        if (var2) {
                            _fun51308_ip = 635;
                            continue _fun51308
                        }
                    case 51:
                        var3 = var15.match;
                        var1 = /^#([a-f0-9]{3,4})$/i;
                        var4 = var3.bind(var15)(var1);
                        if (var4) {
                            _fun51308_ip = 538;
                            continue _fun51308
                        }
                    case 82:
                        var3 = var15.match;
                        var1 = /^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|\\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/;
                        var10 = var3.bind(var15)(var1);
                        var1 = 0;
                        var8 = global;
                        var7 = 1;
                        var9 = undefined;
                        var6 = 3;
                        var5 = 0;
                        if (var10) {
                            _fun51308_ip = 431;
                            continue _fun51308
                        }
                    case 127:
                        var11 = var15.match;
                        var3 = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*(?:[,|\\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/;
                        var14 = var11.bind(var15)(var3);
                        var11 = 2.55;
                        var3 = 0;
                        if (var14) {
                            _fun51308_ip = 305;
                            continue _fun51308
                        }
                    case 170:
                        var13 = var15.match;
                        var12 = /^(\w+)$/;
                        var15 = var13.bind(var15)(var12);
                        var12 = null;
                        if (!var15) {
                            _fun51308_ip = 303;
                            continue _fun51308
                        }
                    case 200:
                        var17 = var15[var7];
                        var16 = 'transparent';
                        if (!(var16 !== var17)) {
                            _fun51308_ip = 290;
                            continue _fun51308
                        }
                    case 212:
                        var20 = _closure1_slot2;
                        var19 = var20.call;
                        var18 = _closure1_slot0;
                        var17 = _closure1_slot1;
                        var17 = var17[var1];
                        var18 = var18.bind(var9)(var17);
                        var17 = var15[var7];
                        var17 = var19.bind(var20)(var18, var17);
                        var13 = null;
                        if (!var17) {
                            _fun51308_ip = 288;
                            continue _fun51308
                        }
                    case 256:
                        var17 = _closure1_slot0;
                        var16 = _closure1_slot1;
                        var16 = var16[var1];
                        var16 = var17.bind(var9)(var16);
                        var15 = var15[var7];
                        var15 = var16[var15];
                        var15[var6] = var7;
                        var13 = var15;
                    case 288:
                        _fun51308_ip = 300;
                        continue _fun51308;
                    case 290:
                        var13 = [0, 0, 0, 0];
                    case 300:
                        var12 = var13;
                    case 303:
                        return var12;
                    case 305:
                        var15 = var8.Math;
                        var13 = var15.round;
                        var16 = var8.parseFloat;
                        var12 = var3 + var7;
                        var12 = var14[var12];
                        var12 = var16.bind(var9)(var12);
                        var12 = var11 * var12;
                        var12 = var13.bind(var15)(var12);
                        var0[var3] = var12;
                        var3 = var3 + 1;
                        if (var3 < var6) {
                            _fun51308_ip = 305;
                            continue _fun51308
                        }
                    case 355:
                        var12 = 4;
                        var11 = var14[var12];
                        var3 = 0;
                        if (!var11) {
                            _fun51308_ip = 733;
                            continue _fun51308
                        }
                    case 370:
                        var11 = 5;
                        var11 = var14[var11];
                        var13 = var8.parseFloat;
                        var12 = var14[var12];
                        var12 = var13.bind(var9)(var12);
                        if (var11) {
                            _fun51308_ip = 406;
                            continue _fun51308
                        }
                    case 395:
                        var0[var6] = var12;
                        var3 = 0;
                        _fun51308_ip = 733;
                        continue _fun51308;
                    case 406:
                        var11 = 0.01;
                        var11 = var11 * var12;
                        var0[var6] = var11;
                        var3 = 0;
                        _fun51308_ip = 733;
                        continue _fun51308;
                    case 431:
                        var12 = var8.parseInt;
                        var11 = var5 + var7;
                        var11 = var10[var11];
                        var11 = var12.bind(var9)(var11, var1);
                        var0[var5] = var11;
                        var5 = var5 + 1;
                        if (var5 < var6) {
                            _fun51308_ip = 431;
                            continue _fun51308
                        }
                    case 462:
                        var7 = 4;
                        var5 = var10[var7];
                        var3 = 0;
                        if (!var5) {
                            _fun51308_ip = 733;
                            continue _fun51308
                        }
                    case 477:
                        var5 = 5;
                        var5 = var10[var5];
                        var8 = var8.parseFloat;
                        var7 = var10[var7];
                        var7 = var8.bind(var9)(var7);
                        if (var5) {
                            _fun51308_ip = 513;
                            continue _fun51308
                        }
                    case 502:
                        var0[var6] = var7;
                        var3 = 0;
                        _fun51308_ip = 733;
                        continue _fun51308;
                    case 513:
                        var5 = 0.01;
                        var5 = var5 * var7;
                        var0[var6] = var5;
                        var3 = 0;
                        _fun51308_ip = 733;
                        continue _fun51308;
                    case 538:
                        var1 = 1;
                        var10 = var4[var1];
                        var5 = 3;
                        var4 = var10[var5];
                        var6 = global;
                        var8 = undefined;
                        var7 = 16;
                        var9 = 0;
                    case 561:
                        var12 = var6.parseInt;
                        var13 = var10[var9];
                        var11 = var10[var9];
                        var11 = var13 + var11;
                        var11 = var12.bind(var8)(var11, var7);
                        var0[var9] = var11;
                        var9 = var9 + 1;
                        if (var9 < var5) {
                            _fun51308_ip = 561;
                            continue _fun51308
                        }
                    case 596:
                        var3 = 0;
                        if (!var4) {
                            _fun51308_ip = 733;
                            continue _fun51308
                        }
                    case 604:
                        var6 = var6.parseInt;
                        var4 = var4 + var4;
                        var6 = var6.bind(var8)(var4, var7);
                        var4 = 255;
                        var4 = var6 / var4;
                        var0[var5] = var4;
                        var3 = 0;
                        _fun51308_ip = 733;
                        continue _fun51308;
                    case 635:
                        var10 = 2;
                        var7 = var2[var10];
                        var1 = 1;
                        var9 = var2[var1];
                        var2 = global;
                        var6 = undefined;
                        var5 = 16;
                        var4 = 3;
                        var8 = 0;
                    case 661:
                        var14 = var10 * var8;
                        var12 = var2.parseInt;
                        var13 = var9.slice;
                        var11 = var14 + var10;
                        var11 = var13.bind(var9)(var14, var11);
                        var11 = var12.bind(var6)(var11, var5);
                        var0[var8] = var11;
                        var8 = var8 + 1;
                        if (var8 < var4) {
                            _fun51308_ip = 661;
                            continue _fun51308
                        }
                    case 703:
                        var3 = 0;
                        if (!var7) {
                            _fun51308_ip = 733;
                            continue _fun51308
                        }
                    case 708:
                        var2 = var2.parseInt;
                        var5 = var2.bind(var6)(var7, var5);
                        var2 = 255;
                        var2 = var5 / var2;
                        var0[var4] = var2;
                        var3 = 0;
                    case 733:
                        var7 = _closure1_slot5;
                        var4 = var0[var3];
                        var6 = undefined;
                        var5 = 0;
                        var2 = 255;
                        var2 = var7.bind(var6)(var4, var5, var2);
                        var0[var3] = var2;
                        var3 = var3 + 1;
                        var2 = 3;
                        if (var3 < var2) {
                            _fun51308_ip = 733;
                            continue _fun51308
                        }
                    case 772:
                        var4 = _closure1_slot5;
                        var3 = var0[var2];
                        var1 = 1;
                        var1 = var4.bind(var6)(var3, var5, var1);
                        var0[var2] = var1;
                        return var0;
                }
            };
            var4.rgb = var3;
            var4 = var2.get;
            var3 = function(arg0) { // Environment: var1
                _fun51309: for (var _fun51309_ip = 0;;) switch (_fun51309_ip) {
                    case 0:
                        var2 = arg0;
                        if (var2) {
                            _fun51309_ip = 10;
                            continue _fun51309
                        }
                    case 6:
                        var0 = null;
                        return var0;
                    case 10:
                        var1 = var2.match;
                        var0 = /^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*(?:[,|\\/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/;
                        var10 = var1.bind(var2)(var0);
                        if (var10) {
                            _fun51309_ip = 42;
                            continue _fun51309
                        }
                    case 38:
                        var0 = null;
                        return var0;
                    case 42:
                        var1 = global;
                        var2 = var1.parseFloat;
                        var0 = 4;
                        var0 = var10[var0];
                        var5 = undefined;
                        var6 = var2.bind(var5)(var0);
                        var2 = var1.parseFloat;
                        var4 = 1;
                        var0 = var10[var4];
                        var0 = var2.bind(var5)(var0);
                        var3 = 360;
                        var2 = var0 % var3;
                        var0 = new Array(4);
                        var2 = var2 + var3;
                        var2 = var2 % var3;
                        var0[0] = var2;
                        var3 = _closure1_slot5;
                        var7 = var1.parseFloat;
                        var2 = 2;
                        var2 = var10[var2];
                        var7 = var7.bind(var5)(var2);
                        var2 = 0;
                        var8 = 100;
                        var7 = var3.bind(var5)(var7, var2, var8);
                        var0[1] = var7;
                        var9 = var1.parseFloat;
                        var7 = 3;
                        var7 = var10[var7];
                        var7 = var9.bind(var5)(var7);
                        var7 = var3.bind(var5)(var7, var2, var8);
                        var0[2] = var7;
                        var1 = var1.isNaN;
                        var7 = var1.bind(var5)(var6);
                        var1 = var4;
                        if (var7) {
                            _fun51309_ip = 198;
                            continue _fun51309
                        }
                    case 195:
                        var1 = var6;
                    case 198:
                        var1 = var3.bind(var5)(var1, var2, var4);
                        var0[3] = var1;
                        return var0;
                }
            };
            var4.hsl = var3;
            var4 = var2.get;
            var3 = function(arg0) { // Environment: var1
                _fun51310: for (var _fun51310_ip = 0;;) switch (_fun51310_ip) {
                    case 0:
                        var2 = arg0;
                        if (var2) {
                            _fun51310_ip = 10;
                            continue _fun51310
                        }
                    case 6:
                        var0 = null;
                        return var0;
                    case 10:
                        var1 = var2.match;
                        var0 = /^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/;
                        var10 = var1.bind(var2)(var0);
                        if (var10) {
                            _fun51310_ip = 42;
                            continue _fun51310
                        }
                    case 38:
                        var0 = null;
                        return var0;
                    case 42:
                        var1 = global;
                        var2 = var1.parseFloat;
                        var0 = 4;
                        var0 = var10[var0];
                        var5 = undefined;
                        var6 = var2.bind(var5)(var0);
                        var2 = var1.parseFloat;
                        var4 = 1;
                        var0 = var10[var4];
                        var0 = var2.bind(var5)(var0);
                        var3 = 360;
                        var2 = var0 % var3;
                        var0 = new Array(4);
                        var2 = var2 + var3;
                        var2 = var2 % var3;
                        var0[0] = var2;
                        var3 = _closure1_slot5;
                        var7 = var1.parseFloat;
                        var2 = 2;
                        var2 = var10[var2];
                        var7 = var7.bind(var5)(var2);
                        var2 = 0;
                        var8 = 100;
                        var7 = var3.bind(var5)(var7, var2, var8);
                        var0[1] = var7;
                        var9 = var1.parseFloat;
                        var7 = 3;
                        var7 = var10[var7];
                        var7 = var9.bind(var5)(var7);
                        var7 = var3.bind(var5)(var7, var2, var8);
                        var0[2] = var7;
                        var1 = var1.isNaN;
                        var7 = var1.bind(var5)(var6);
                        var1 = var4;
                        if (var7) {
                            _fun51310_ip = 198;
                            continue _fun51310
                        }
                    case 195:
                        var1 = var6;
                    case 198:
                        var1 = var3.bind(var5)(var1, var2, var4);
                        var0[3] = var1;
                        return var0;
                }
            };
            var4.hwb = var3;
            var4 = var2.to;
            var3 = function() { // Environment: var1
                _fun51311: for (var _fun51311_ip = 0;;) switch (_fun51311_ip) {
                    case 0:
                        var4 = undefined;
                        var0 = undefined;
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot1;
                        var5 = 1;
                        var1 = var1[var5];
                        var1 = var2.bind(var4)(var1);
                        var0 = arguments;
                        var7 = var1.bind(var4)(var0);
                        var2 = _closure1_slot6;
                        var0 = 0;
                        var0 = var7[var0];
                        var1 = var2.bind(var4)(var0);
                        var0 = '#';
                        var1 = var0 + var1;
                        var0 = var7[var5];
                        var0 = var2.bind(var4)(var0);
                        var1 = var1 + var0;
                        var0 = 2;
                        var0 = var7[var0];
                        var0 = var2.bind(var4)(var0);
                        var1 = var1 + var0;
                        var2 = 3;
                        var0 = var7[var2];
                        var5 = var0 < var5;
                        var0 = '';
                        if (!var5) {
                            _fun51311_ip = 142;
                            continue _fun51311
                        }
                    case 104:
                        var3 = _closure1_slot6;
                        var5 = global;
                        var6 = var5.Math;
                        var5 = var6.round;
                        var7 = var7[var2];
                        var2 = 255;
                        var2 = var2 * var7;
                        var2 = var5.bind(var6)(var2);
                        var0 = var3.bind(var4)(var2);
                    case 142:
                        var0 = var1 + var0;
                        return var0;
                }
            };
            var4.hex = var3;
            var4 = var2.to;
            var3 = function() { // Environment: var1
                _fun51312: for (var _fun51312_ip = 0;;) switch (_fun51312_ip) {
                    case 0:
                        var2 = undefined;
                        var0 = undefined;
                        var4 = _closure1_slot0;
                        var1 = _closure1_slot1;
                        var3 = 1;
                        var1 = var1[var3];
                        var1 = var4.bind(var2)(var1);
                        var0 = arguments;
                        var6 = var1.bind(var2)(var0);
                        var1 = var6.length;
                        var0 = 4;
                        if (!(!(var1 < var0))) {
                            _fun51312_ip = 184;
                            continue _fun51312
                        }
                    case 49:
                        var1 = 3;
                        var0 = var6[var1];
                        if (!(var3 !== var0)) {
                            _fun51312_ip = 184;
                            continue _fun51312
                        }
                    case 63:
                        var4 = global;
                        var5 = var4.Math;
                        var2 = var5.round;
                        var0 = 0;
                        var0 = var6[var0];
                        var2 = var2.bind(var5)(var0);
                        var0 = 'rgba(';
                        var0 = var0 + var2;
                        var7 = var4.Math;
                        var5 = var7.round;
                        var2 = var6[var3];
                        var5 = var5.bind(var7)(var2);
                        var2 = ', ';
                        var0 = var0 + var2;
                        var0 = var0 + var5;
                        var7 = var4.Math;
                        var5 = var7.round;
                        var4 = 2;
                        var4 = var6[var4];
                        var4 = var5.bind(var7)(var4);
                        var0 = var0 + var2;
                        var0 = var0 + var4;
                        var1 = var6[var1];
                        var0 = var0 + var2;
                        var1 = var0 + var1;
                        var0 = ')';
                        var0 = var1 + var0;
                        _fun51312_ip = 291;
                        continue _fun51312;
                    case 184:
                        var2 = global;
                        var5 = var2.Math;
                        var4 = var5.round;
                        var1 = 0;
                        var1 = var6[var1];
                        var4 = var4.bind(var5)(var1);
                        var1 = 'rgb(';
                        var1 = var1 + var4;
                        var5 = var2.Math;
                        var4 = var5.round;
                        var3 = var6[var3];
                        var4 = var4.bind(var5)(var3);
                        var3 = ', ';
                        var1 = var1 + var3;
                        var1 = var1 + var4;
                        var5 = var2.Math;
                        var4 = var5.round;
                        var2 = 2;
                        var2 = var6[var2];
                        var2 = var4.bind(var5)(var2);
                        var1 = var1 + var3;
                        var2 = var1 + var2;
                        var1 = ')';
                        var0 = var2 + var1;
                    case 291:
                        return var0;
                }
            };
            var4.rgb = var3;
            var3 = var2.to;
            var4 = var3.rgb;
            var3 = function() { // Environment: var1
                _fun51313: for (var _fun51313_ip = 0;;) switch (_fun51313_ip) {
                    case 0:
                        var2 = undefined;
                        var0 = undefined;
                        var3 = _closure1_slot0;
                        var1 = _closure1_slot1;
                        var5 = 1;
                        var1 = var1[var5];
                        var1 = var3.bind(var2)(var1);
                        var0 = arguments;
                        var6 = var1.bind(var2)(var0);
                        var0 = global;
                        var3 = var0.Math;
                        var2 = var3.round;
                        var1 = 0;
                        var1 = var6[var1];
                        var8 = 255;
                        var1 = var1 / var8;
                        var7 = 100;
                        var1 = var1 * var7;
                        var3 = var2.bind(var3)(var1);
                        var4 = var0.Math;
                        var2 = var4.round;
                        var1 = var6[var5];
                        var1 = var1 / var8;
                        var1 = var1 * var7;
                        var4 = var2.bind(var4)(var1);
                        var2 = var0.Math;
                        var1 = var2.round;
                        var0 = 2;
                        var0 = var6[var0];
                        var0 = var0 / var8;
                        var0 = var0 * var7;
                        var2 = var1.bind(var2)(var0);
                        var1 = var6.length;
                        var0 = 4;
                        if (!(!(var1 < var0))) {
                            _fun51313_ip = 208;
                            continue _fun51313
                        }
                    case 143:
                        var1 = 3;
                        var0 = var6[var1];
                        if (!(var5 !== var0)) {
                            _fun51313_ip = 208;
                            continue _fun51313
                        }
                    case 154:
                        var0 = 'rgba(';
                        var0 = var0 + var3;
                        var5 = '%, ';
                        var0 = var0 + var5;
                        var0 = var0 + var4;
                        var0 = var0 + var5;
                        var0 = var0 + var2;
                        var1 = var6[var1];
                        var0 = var0 + var5;
                        var1 = var0 + var1;
                        var0 = ')';
                        var0 = var1 + var0;
                        _fun51313_ip = 250;
                        continue _fun51313;
                    case 208:
                        var1 = 'rgb(';
                        var1 = var1 + var3;
                        var3 = '%, ';
                        var1 = var1 + var3;
                        var1 = var1 + var4;
                        var1 = var1 + var3;
                        var2 = var1 + var2;
                        var1 = '%)';
                        var0 = var2 + var1;
                    case 250:
                        return var0;
                }
            };
            var4.percent = var3;
            var4 = var2.to;
            var3 = function() { // Environment: var1
                _fun51314: for (var _fun51314_ip = 0;;) switch (_fun51314_ip) {
                    case 0:
                        var3 = undefined;
                        var0 = undefined;
                        var4 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var1 = 1;
                        var2 = var2[var1];
                        var2 = var4.bind(var3)(var2);
                        var0 = arguments;
                        var2 = var2.bind(var3)(var0);
                        var3 = var2.length;
                        var0 = 4;
                        if (!(!(var3 < var0))) {
                            _fun51314_ip = 134;
                            continue _fun51314
                        }
                    case 46:
                        var3 = 3;
                        var0 = var2[var3];
                        if (!(var1 !== var0)) {
                            _fun51314_ip = 134;
                            continue _fun51314
                        }
                    case 57:
                        var0 = 0;
                        var4 = var2[var0];
                        var0 = 'hsla(';
                        var5 = var0 + var4;
                        var4 = var2[var1];
                        var0 = ', ';
                        var0 = var5 + var0;
                        var0 = var0 + var4;
                        var4 = 2;
                        var5 = var2[var4];
                        var4 = '%, ';
                        var0 = var0 + var4;
                        var0 = var0 + var5;
                        var3 = var2[var3];
                        var0 = var0 + var4;
                        var3 = var0 + var3;
                        var0 = ')';
                        var0 = var3 + var0;
                        _fun51314_ip = 199;
                        continue _fun51314;
                    case 134:
                        var3 = 0;
                        var4 = var2[var3];
                        var3 = 'hsl(';
                        var4 = var3 + var4;
                        var3 = var2[var1];
                        var1 = ', ';
                        var1 = var4 + var1;
                        var3 = var1 + var3;
                        var1 = 2;
                        var2 = var2[var1];
                        var1 = '%, ';
                        var1 = var3 + var1;
                        var2 = var1 + var2;
                        var1 = '%)';
                        var0 = var2 + var1;
                    case 199:
                        return var0;
                }
            };
            var4.hsl = var3;
            var4 = var2.to;
            var3 = function() { // Environment: var1
                _fun51315: for (var _fun51315_ip = 0;;) switch (_fun51315_ip) {
                    case 0:
                        var3 = undefined;
                        var1 = undefined;
                        var4 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var0 = 1;
                        var2 = var2[var0];
                        var2 = var4.bind(var3)(var2);
                        var1 = arguments;
                        var2 = var2.bind(var3)(var1);
                        var3 = var2.length;
                        var1 = 4;
                        var3 = var3 >= var1;
                        if (!var3) {
                            _fun51315_ip = 60;
                            continue _fun51315
                        }
                    case 49:
                        var1 = 3;
                        var1 = var2[var1];
                        var3 = var0 !== var1;
                    case 60:
                        var1 = '';
                        if (!var3) {
                            _fun51315_ip = 84;
                            continue _fun51315
                        }
                    case 67:
                        var3 = 3;
                        var4 = var2[var3];
                        var3 = ', ';
                        var1 = var3 + var4;
                    case 84:
                        var3 = 0;
                        var4 = var2[var3];
                        var3 = 'hwb(';
                        var4 = var3 + var4;
                        var3 = var2[var0];
                        var0 = ', ';
                        var0 = var4 + var0;
                        var3 = var0 + var3;
                        var0 = 2;
                        var2 = var2[var0];
                        var0 = '%, ';
                        var0 = var3 + var0;
                        var2 = var0 + var2;
                        var0 = '%';
                        var0 = var2 + var0;
                        var1 = var0 + var1;
                        var0 = ')';
                        var0 = var1 + var0;
                        return var0;
                }
            };
            var4.hwb = var3;
            var2 = var2.to;
            var1 = function(arg0) { // Environment: var1
                var4 = arg0;
                var1 = _closure1_slot3;
                var3 = var4.slice;
                var2 = 0;
                var0 = 3;
                var0 = var3.bind(var4)(var2, var0);
                var0 = var1[var0];
                return var0;
            };
            var2.keyword = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [5793, 5796]);