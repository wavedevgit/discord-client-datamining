// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun66650: for (var _fun66650_ip = 0;;) switch (_fun66650_ip) {
        case 0:
            var2 = exports;
            var0 = function(arg0) { // Original name: getLens, environment: var1
                _fun66651: for (var _fun66651_ip = 0;;) switch (_fun66651_ip) {
                    case 0:
                        var5 = arg0;
                        var4 = var5.length;
                        var3 = 4;
                        var0 = var4 % var3;
                        var1 = 0;
                        if (!(!(var0 > var1))) {
                            _fun66651_ip = 77;
                            continue _fun66651
                        }
                    case 21:
                        var2 = var5.indexOf;
                        var0 = '=';
                        var2 = var2.bind(var5)(var0);
                        var0 = -1;
                        if (!(var0 === var2)) {
                            _fun66651_ip = 49;
                            continue _fun66651
                        }
                    case 46:
                        var2 = var4;
                    case 49:
                        var0 = new Array(2);
                        var0[0] = var2;
                        var1 = 0;
                        if (!(var2 !== var4)) {
                            _fun66651_ip = 71;
                            continue _fun66651
                        }
                    case 63:
                        var2 = var2 % var3;
                        var1 = var3 - var2;
                    case 71:
                        var0[1] = var1;
                        return var0;
                    case 77:
                        var0 = global;
                        var2 = var0.Error;
                        var0 = var2.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var2
                            }
                        });
                        var6 = 'Invalid string. Length must be a multiple of 4';
                        var7 = var1;
                        var0 = new var7[var2](var6, var5);
                        var0 = var0 instanceof Object ? var0 : var1;
                        throw var0;
                }
            };
            var _closure1_slot3 = var0;
            var0 = function(arg0, arg1, arg2) { // Original name: encodeChunk, environment: var1
                _fun66652: for (var _fun66652_ip = 0;;) switch (_fun66652_ip) {
                    case 0:
                        var16 = arg0;
                        var15 = arg1;
                        var14 = arg2;
                        var2 = new Array(0);
                        var13 = 16;
                        var12 = 1;
                        var11 = 8;
                        var10 = 2;
                        var9 = 255;
                        var8 = 16711680;
                        var7 = 65280;
                        var5 = 18;
                        var4 = 63;
                        var3 = 12;
                        var1 = 6;
                        var0 = 3;
                        if (!(var15 < var14)) {
                            _fun66652_ip = 206;
                            continue _fun66652
                        }
                    case 65:
                        var17 = var16[var15];
                        var19 = var17 << var13;
                        var17 = var15 + var12;
                        var17 = var16[var17];
                        var17 = var17 << var11;
                        var18 = var15 + var10;
                        var18 = var16[var18];
                        var18 = var9 & var18;
                        var19 = var19 & var8;
                        var17 = var17 & var7;
                        var17 = var19 + var17;
                        var17 = var17 + var18;
                        var18 = var2.push;
                        var20 = _closure1_slot0;
                        var19 = var17 >> var5;
                        var19 = var19 & var4;
                        var20 = var20[var19];
                        var21 = _closure1_slot0;
                        var19 = var17 >> var3;
                        var19 = var19 & var4;
                        var19 = var21[var19];
                        var20 = var20 + var19;
                        var21 = _closure1_slot0;
                        var19 = var17 >> var1;
                        var19 = var19 & var4;
                        var19 = var21[var19];
                        var19 = var20 + var19;
                        var20 = _closure1_slot0;
                        var17 = var4 & var17;
                        var17 = var20[var17];
                        var17 = var19 + var17;
                        var17 = var18.bind(var2)(var17);
                        var15 = var15 + var0;
                        if (var15 < var14) {
                            _fun66652_ip = 65;
                            continue _fun66652
                        }
                    case 206:
                        var1 = var2.join;
                        var0 = '';
                        var0 = var1.bind(var2)(var0);
                        return var0;
                }
            };
            var _closure1_slot4 = var0;
            var0 = function(arg0) { // Original name: byteLength, environment: var1
                var2 = _closure1_slot3;
                var1 = undefined;
                var0 = arg0;
                var2 = var2.bind(var1)(var0);
                var0 = 0;
                var0 = var2[var0];
                var1 = 1;
                var1 = var2[var1];
                var2 = var0 + var1;
                var0 = 3;
                var2 = var0 * var2;
                var0 = 4;
                var0 = var2 / var0;
                var0 = var0 - var1;
                return var0;
            };
            var2.byteLength = var0;
            var0 = function(arg0) { // Original name: toByteArray, environment: var1
                _fun66654: for (var _fun66654_ip = 0;;) switch (_fun66654_ip) {
                    case 0:
                        var10 = arg0;
                        var1 = _closure1_slot3;
                        var0 = undefined;
                        var0 = var1.bind(var0)(var10);
                        var11 = 0;
                        var2 = var0[var11];
                        var1 = 1;
                        var6 = var0[var1];
                        var4 = _closure1_slot2;
                        var0 = var2 + var6;
                        var18 = 3;
                        var0 = var18 * var0;
                        var9 = 4;
                        var0 = var0 / var9;
                        var25 = var0 - var6;
                        var3 = var4.prototype;
                        var3 = Object.create(var3, {
                            constructor: {
                                value: var4
                            }
                        });
                        var26 = var3;
                        var0 = new var26[var4](var25, var24);
                        var0 = var0 instanceof Object ? var0 : var3;
                        var17 = var2;
                        if (!(var6 > var11)) {
                            _fun66654_ip = 87;
                            continue _fun66654
                        }
                    case 83:
                        var17 = var2 - var9;
                    case 87:
                        var19 = var11 < var17;
                        var16 = 18;
                        var15 = 12;
                        var7 = 2;
                        var14 = 6;
                        var13 = 16;
                        var3 = 255;
                        var4 = 8;
                        var12 = 0;
                        var2 = 0;
                        var5 = 0;
                        var11 = 0;
                        if (!var19) {
                            _fun66654_ip = 305;
                            continue _fun66654
                        }
                    case 126:
                        var20 = _closure1_slot1;
                        var19 = var10.charCodeAt;
                        var19 = var19.bind(var10)(var12);
                        var19 = var20[var19];
                        var22 = var19 << var16;
                        var20 = _closure1_slot1;
                        var21 = var10.charCodeAt;
                        var19 = var12 + var1;
                        var19 = var21.bind(var10)(var19);
                        var19 = var20[var19];
                        var19 = var19 << var15;
                        var21 = _closure1_slot1;
                        var23 = var10.charCodeAt;
                        var20 = var12 + var7;
                        var20 = var23.bind(var10)(var20);
                        var20 = var21[var20];
                        var21 = var20 << var14;
                        var23 = _closure1_slot1;
                        var24 = var10.charCodeAt;
                        var20 = var12 + var18;
                        var20 = var24.bind(var10)(var20);
                        var20 = var23[var20];
                        var19 = var22 | var19;
                        var19 = var19 | var21;
                        var19 = var19 | var20;
                        var20 = parseFloat(var2);
                        var21 = var19 >> var13;
                        var21 = var21 & var3;
                        var0[var20] = var21;
                        var20 = var20 + 1;
                        var20 = parseFloat(var20);
                        var21 = var19 >> var4;
                        var21 = var21 & var3;
                        var0[var20] = var21;
                        var20 = var20 + 1;
                        var21 = parseFloat(var20);
                        var2 = var21 + 1;
                        var19 = var3 & var19;
                        var0[var21] = var19;
                        var12 = var12 + var9;
                        var11 = var2;
                        var5 = var12;
                        if (var5 < var17) {
                            _fun66654_ip = 126;
                            continue _fun66654
                        }
                    case 305:
                        var2 = var11;
                        if (!(var7 === var6)) {
                            _fun66654_ip = 380;
                            continue _fun66654
                        }
                    case 312:
                        var13 = _closure1_slot1;
                        var12 = var10.charCodeAt;
                        var12 = var12.bind(var10)(var5);
                        var12 = var13[var12];
                        var14 = var12 << var7;
                        var13 = _closure1_slot1;
                        var15 = var10.charCodeAt;
                        var12 = var5 + var1;
                        var12 = var15.bind(var10)(var12);
                        var12 = var13[var12];
                        var12 = var12 >> var9;
                        var13 = parseFloat(var11);
                        var2 = var13 + 1;
                        var12 = var14 | var12;
                        var12 = var3 & var12;
                        var0[var13] = var12;
                    case 380:
                        if (!(var1 === var6)) {
                            _fun66654_ip = 501;
                            continue _fun66654
                        }
                    case 384:
                        var11 = _closure1_slot1;
                        var6 = var10.charCodeAt;
                        var6 = var6.bind(var10)(var5);
                        var11 = var11[var6];
                        var6 = 10;
                        var6 = var11 << var6;
                        var11 = _closure1_slot1;
                        var12 = var10.charCodeAt;
                        var1 = var5 + var1;
                        var1 = var12.bind(var10)(var1);
                        var1 = var11[var1];
                        var1 = var1 << var9;
                        var8 = _closure1_slot1;
                        var9 = var10.charCodeAt;
                        var5 = var5 + var7;
                        var5 = var9.bind(var10)(var5);
                        var5 = var8[var5];
                        var5 = var5 >> var7;
                        var1 = var6 | var1;
                        var1 = var1 | var5;
                        var2 = parseFloat(var2);
                        var4 = var1 >> var4;
                        var4 = var4 & var3;
                        var0[var2] = var4;
                        var2 = var2 + 1;
                        var2 = parseFloat(var2);
                        var1 = var3 & var1;
                        var0[var2] = var1;
                    case 501:
                        return var0;
                }
            };
            var2.toByteArray = var0;
            var0 = function(arg0) { // Original name: fromByteArray, environment: var1
                _fun66655: for (var _fun66655_ip = 0;;) switch (_fun66655_ip) {
                    case 0:
                        var3 = arg0;
                        var4 = var3.length;
                        var0 = 3;
                        var5 = var4 % var0;
                        var2 = new Array(0);
                        var9 = var4 - var5;
                        var7 = undefined;
                        var6 = 16383;
                        var8 = 0;
                        if (!(var8 < var9)) {
                            _fun66655_ip = 82;
                            continue _fun66655
                        }
                    case 40:
                        var11 = var2.push;
                        var12 = _closure1_slot4;
                        var1 = var8 + var6;
                        var10 = var1;
                        if (!(var10 > var9)) {
                            _fun66655_ip = 63;
                            continue _fun66655
                        }
                    case 60:
                        var10 = var9;
                    case 63:
                        var10 = var12.bind(var7)(var3, var8, var10);
                        var10 = var11.bind(var2)(var10);
                        var8 = var1;
                        if (var1 < var9) {
                            _fun66655_ip = 40;
                            continue _fun66655
                        }
                    case 82:
                        var1 = 1;
                        if (!(var1 !== var5)) {
                            _fun66655_ip = 207;
                            continue _fun66655
                        }
                    case 89:
                        var10 = 2;
                        if (!(var10 === var5)) {
                            _fun66655_ip = 276;
                            continue _fun66655
                        }
                    case 99:
                        var5 = var4 - var10;
                        var6 = var3[var5];
                        var5 = 8;
                        var6 = var6 << var5;
                        var5 = var4 - var1;
                        var5 = var3[var5];
                        var5 = var6 + var5;
                        var6 = var2.push;
                        var8 = _closure1_slot0;
                        var7 = 10;
                        var7 = var5 >> var7;
                        var8 = var8[var7];
                        var11 = _closure1_slot0;
                        var7 = 4;
                        var7 = var5 >> var7;
                        var9 = 63;
                        var7 = var7 & var9;
                        var7 = var11[var7];
                        var7 = var8 + var7;
                        var8 = _closure1_slot0;
                        var5 = var5 << var10;
                        var5 = var5 & var9;
                        var5 = var8[var5];
                        var7 = var7 + var5;
                        var5 = '=';
                        var5 = var7 + var5;
                        var5 = var6.bind(var2)(var5);
                        _fun66655_ip = 276;
                        continue _fun66655;
                    case 207:
                        var1 = var4 - var1;
                        var5 = var3[var1];
                        var1 = var2.push;
                        var4 = _closure1_slot0;
                        var3 = 2;
                        var3 = var5 >> var3;
                        var3 = var4[var3];
                        var4 = _closure1_slot0;
                        var0 = 4;
                        var5 = var5 << var0;
                        var0 = 63;
                        var0 = var5 & var0;
                        var0 = var4[var0];
                        var3 = var3 + var0;
                        var0 = '==';
                        var0 = var3 + var0;
                        var0 = var1.bind(var2)(var0);
                    case 276:
                        var1 = var2.join;
                        var0 = '';
                        var0 = var1.bind(var2)(var0);
                        return var0;
                }
            };
            var2.fromByteArray = var0;
            var5 = new Array(0);
            var _closure1_slot0 = var5;
            var2 = new Array(0);
            var _closure1_slot1 = var2;
            var3 = global;
            var0 = var3.Uint8Array;
            var4 = 'undefined';
            var0 = typeof var0;
            if (!(var4 === var0)) {
                _fun66650_ip = 109;
                continue _fun66650
            }
        case 101:
            var0 = var3.Array;
            _fun66650_ip = 115;
            continue _fun66650;
        case 109:
            var0 = var3.Uint8Array;
        case 115:
            var _closure1_slot2 = var0;
            var3 = 0;
            var4 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
            var1 = 64;
            var0 = 0;
        case 132:
            var6 = var4[var0];
            var5[var0] = var6;
            var6 = var4.charCodeAt;
            var6 = var6.bind(var4)(var0);
            var2[var6] = var0;
            var0 = var0 + 1;
            if (var0 < var1) {
                _fun66650_ip = 132;
                continue _fun66650
            }
        case 162:
            var1 = '-';
            var0 = var1.charCodeAt;
            var1 = var0.bind(var1)(var3);
            var0 = 62;
            var2[var1] = var0;
            var1 = '_';
            var0 = var1.charCodeAt;
            var1 = var0.bind(var1)(var3);
            var0 = 63;
            var2[var1] = var0;
            var0 = undefined;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, []);