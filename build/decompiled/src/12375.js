// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun94793: for (var _fun94793_ip = 0;;) switch (_fun94793_ip) {
        case 0:
            var6 = require;
            var0 = dependencyMap;
            var5 = var6;
            var _closure1_slot0 = var6;
            var2 = exports;
            var4 = var0;
            var _closure1_slot1 = var0;
            var0 = undefined;
            var3 = undefined;
            var17 = undefined;
            var6 = function(arg0, arg1) { // Original name: buf2binstring, environment: var1
                _fun94794: for (var _fun94794_ip = 0;;) switch (_fun94794_ip) {
                    case 0:
                        var5 = arg0;
                        var4 = arg1;
                        var0 = 65534;
                        if (!(var4 < var0)) {
                            _fun94794_ip = 54;
                            continue _fun94794
                        }
                    case 16:
                        var0 = var5.subarray;
                        if (!var0) {
                            _fun94794_ip = 35;
                            continue _fun94794
                        }
                    case 25:
                        var0 = _closure1_slot3;
                        if (var0) {
                            _fun94794_ip = 109;
                            continue _fun94794
                        }
                    case 35:
                        var0 = var5.subarray;
                        if (var0) {
                            _fun94794_ip = 54;
                            continue _fun94794
                        }
                    case 44:
                        var0 = _closure1_slot2;
                        if (var0) {
                            _fun94794_ip = 109;
                            continue _fun94794
                        }
                    case 54:
                        var3 = 0;
                        var6 = var3 < var4;
                        var1 = '';
                        var2 = global;
                        var0 = var1;
                        if (!var6) {
                            _fun94794_ip = 107;
                            continue _fun94794
                        }
                    case 72:
                        var8 = var2.String;
                        var7 = var8.fromCharCode;
                        var6 = var5[var3];
                        var6 = var7.bind(var8)(var6);
                        var1 = var1 + var6;
                        var3 = var3 + 1;
                        var0 = var1;
                        if (var3 < var4) {
                            _fun94794_ip = 72;
                            continue _fun94794
                        }
                    case 107:
                        return var0;
                    case 109:
                        var0 = global;
                        var0 = var0.String;
                        var3 = var0.fromCharCode;
                        var2 = var3.apply;
                        var6 = _closure1_slot0;
                        var1 = _closure1_slot1;
                        var0 = 0;
                        var1 = var1[var0];
                        var0 = undefined;
                        var1 = var6.bind(var0)(var1);
                        var0 = var1.shrinkBuf;
                        var1 = var0.bind(var1)(var5, var4);
                        var0 = null;
                        var0 = var2.bind(var3)(var0, var1);
                        return var0;
                }
            };
            var _closure1_slot5 = var6;
            var6 = true;
            var _closure1_slot2 = var6;
            var _closure1_slot3 = var6;
        case 52: // try_start_0
            var6 = global;
            var6 = var6.String;
            var9 = var6.fromCharCode;
            var8 = var9.apply;
            var7 = null;
            var6 = [0];
            var6 = var8.bind(var9)(var7, var6);
        case 89: // try_end0
            _fun94793_ip = 99;
            continue _fun94793;
        case 91: // catch_target0
            CatchBlockStart(arg_register = 6);
            var6 = false;
            _closure1_slot2 = var6;
        case 99: // try_start_1
            var6 = global;
            var7 = var6.String;
            var9 = var7.fromCharCode;
            var8 = var9.apply;
            var10 = var6.Uint8Array;
            var6 = var10.prototype;
            var7 = Object.create(var6, {
                constructor: {
                    value: var10
                }
            });
            var26 = 1;
            var27 = var7;
            var6 = new var27[var10](var26, var25);
            var7 = var6 instanceof Object ? var6 : var7;
            var6 = null;
            var6 = var8.bind(var9)(var6, var7);
        case 155: // try_end1
            _fun94793_ip = 165;
            continue _fun94793;
        case 157: // catch_target1
            CatchBlockStart(arg_register = 6);
            var6 = false;
            _closure1_slot3 = var6;
        case 165:
            var6 = var5;
            var5 = var4;
            var4 = 0;
            var5 = var5[var4];
            var5 = var6.bind(var0)(var5);
            var5 = var5.Buf8;
            var6 = var5.prototype;
            var6 = Object.create(var6, {
                constructor: {
                    value: var5
                }
            });
            var16 = 256;
            var27 = var6;
            var26 = var16;
            var5 = new var27[var5](var26, var25);
            var5 = var5 instanceof Object ? var5 : var6;
            var3 = var5;
            var _closure1_slot4 = var5;
            var17 = 0;
            var15 = 2;
            var5 = 1;
            var14 = 192;
            var13 = 3;
            var12 = 224;
            var11 = 4;
            var10 = 240;
            var9 = 5;
            var8 = 248;
            var7 = 6;
            var6 = 252;
        case 259:
            var19 = var3;
            var18 = var17;
            var4 = var7;
            if (!(!(var18 >= var6))) {
                _fun94793_ip = 327;
                continue _fun94793
            }
        case 272:
            var21 = var17;
            var20 = var9;
            if (!(!(var21 >= var8))) {
                _fun94793_ip = 324;
                continue _fun94793
            }
        case 282:
            var22 = var17;
            var21 = var11;
            if (!(!(var22 >= var10))) {
                _fun94793_ip = 321;
                continue _fun94793
            }
        case 292:
            var23 = var17;
            var22 = var13;
            if (!(!(var23 >= var12))) {
                _fun94793_ip = 318;
                continue _fun94793
            }
        case 302:
            var24 = var17;
            var23 = var5;
            if (!(var24 >= var14)) {
                _fun94793_ip = 315;
                continue _fun94793
            }
        case 312:
            var23 = var15;
        case 315:
            var22 = var23;
        case 318:
            var21 = var22;
        case 321:
            var20 = var21;
        case 324:
            var4 = var20;
        case 327:
            var19[var18] = var4;
            var4 = var17;
            var4 = var4 + 1;
            var17 = var4;
            if (var4 < var16) {
                _fun94793_ip = 259;
                continue _fun94793
            }
        case 344:
            var4 = var3;
            var3 = 254;
            var4[var3] = var5;
            var4[var3] = var5;
            var3 = function(arg0) { // Environment: var1
                _fun94795: for (var _fun94795_ip = 0;;) switch (_fun94795_ip) {
                    case 0:
                        var21 = arg0;
                        var20 = var21.length;
                        var1 = 0;
                        var9 = var1 < var20;
                        var4 = undefined;
                        var8 = 3;
                        var19 = 65536;
                        var7 = 4;
                        var18 = 2048;
                        var6 = 2;
                        var17 = 128;
                        var16 = 1;
                        var15 = 55296;
                        var14 = 56320;
                        var13 = 10;
                        var12 = 64512;
                        var5 = undefined;
                        var3 = 0;
                        var0 = 0;
                        var11 = undefined;
                        var2 = 0;
                        if (!var9) {
                            _fun94795_ip = 239;
                            continue _fun94795
                        }
                    case 80:
                        var9 = var21.charCodeAt;
                        var23 = var9.bind(var21)(var3);
                        var9 = var12 & var23;
                        var25 = var15 === var9;
                        var9 = var3;
                        if (!var25) {
                            _fun94795_ip = 113;
                            continue _fun94795
                        }
                    case 105:
                        var10 = var9 + var16;
                        var25 = var10 < var20;
                    case 113:
                        if (!var25) {
                            _fun94795_ip = 142;
                            continue _fun94795
                        }
                    case 116:
                        var22 = var21.charCodeAt;
                        var10 = var9 + var16;
                        var10 = var22.bind(var21)(var10);
                        var22 = var12 & var10;
                        var25 = var14 === var22;
                        var5 = var10;
                    case 142:
                        var10 = var5;
                        var24 = var23;
                        var22 = var9;
                        if (!var25) {
                            _fun94795_ip = 177;
                            continue _fun94795
                        }
                    case 154:
                        var23 = var23 - var15;
                        var25 = var10 - var14;
                        var23 = var23 << var13;
                        var23 = var19 + var23;
                        var24 = var23 + var25;
                        var22 = var9 + 1;
                    case 177:
                        var23 = var24 < var17;
                        var9 = var16;
                        if (var23) {
                            _fun94795_ip = 216;
                            continue _fun94795
                        }
                    case 187:
                        var25 = var24 < var18;
                        var23 = var6;
                        if (var25) {
                            _fun94795_ip = 213;
                            continue _fun94795
                        }
                    case 197:
                        var25 = var24 < var19;
                        var24 = var7;
                        if (!var25) {
                            _fun94795_ip = 210;
                            continue _fun94795
                        }
                    case 207:
                        var24 = var8;
                    case 210:
                        var23 = var24;
                    case 213:
                        var9 = var23;
                    case 216:
                        var0 = var0 + var9;
                        var3 = var22 + 1;
                        var5 = var10;
                        var11 = var5;
                        var2 = var0;
                        if (var3 < var20) {
                            _fun94795_ip = 80;
                            continue _fun94795
                        }
                    case 239:
                        var3 = _closure1_slot0;
                        var0 = _closure1_slot1;
                        var0 = var0[var1];
                        var0 = var3.bind(var4)(var0);
                        var0 = var0.Buf8;
                        var3 = var0.prototype;
                        var3 = Object.create(var3, {
                            constructor: {
                                value: var0
                            }
                        });
                        var29 = var3;
                        var28 = var2;
                        var0 = new var29[var0](var28, var27);
                        var0 = var0 instanceof Object ? var0 : var3;
                        var10 = 6;
                        var9 = 192;
                        var8 = 63;
                        var7 = 12;
                        var6 = 224;
                        var5 = 18;
                        var4 = 240;
                        var3 = var2;
                        var2 = 0;
                        var1 = 0;
                        if (!(var1 < var3)) {
                            _fun94795_ip = 638;
                            continue _fun94795
                        }
                    case 323:
                        var22 = var21.charCodeAt;
                        var24 = var22.bind(var21)(var2);
                        var22 = var12 & var24;
                        var25 = var15 === var22;
                        var22 = var2;
                        if (!var25) {
                            _fun94795_ip = 356;
                            continue _fun94795
                        }
                    case 348:
                        var23 = var22 + var16;
                        var25 = var23 < var20;
                    case 356:
                        if (!var25) {
                            _fun94795_ip = 385;
                            continue _fun94795
                        }
                    case 359:
                        var26 = var21.charCodeAt;
                        var23 = var22 + var16;
                        var23 = var26.bind(var21)(var23);
                        var26 = var12 & var23;
                        var25 = var14 === var26;
                        var11 = var23;
                    case 385:
                        var26 = var24;
                        var23 = var22;
                        if (!var25) {
                            _fun94795_ip = 417;
                            continue _fun94795
                        }
                    case 394:
                        var24 = var24 - var15;
                        var25 = var11 - var14;
                        var24 = var24 << var13;
                        var24 = var19 + var24;
                        var26 = var24 + var25;
                        var23 = var22 + 1;
                    case 417:
                        if (!(!(var26 < var17))) {
                            _fun94795_ip = 615;
                            continue _fun94795
                        }
                    case 424:
                        if (!(!(var26 < var18))) {
                            _fun94795_ip = 577;
                            continue _fun94795
                        }
                    case 431:
                        if (!(!(var26 < var19))) {
                            _fun94795_ip = 517;
                            continue _fun94795
                        }
                    case 435:
                        var22 = parseFloat(var1);
                        var24 = var26 >>> var5;
                        var24 = var4 | var24;
                        var0[var22] = var24;
                        var22 = var22 + 1;
                        var22 = parseFloat(var22);
                        var24 = var26 >>> var7;
                        var24 = var24 & var8;
                        var24 = var17 | var24;
                        var0[var22] = var24;
                        var22 = var22 + 1;
                        var22 = parseFloat(var22);
                        var24 = var26 >>> var10;
                        var24 = var24 & var8;
                        var24 = var17 | var24;
                        var0[var22] = var24;
                        var22 = var22 + 1;
                        var25 = parseFloat(var22);
                        var22 = var25 + 1;
                        var24 = var8 & var26;
                        var24 = var17 | var24;
                        var0[var25] = var24;
                        _fun94795_ip = 625;
                        continue _fun94795;
                    case 517:
                        var24 = parseFloat(var1);
                        var25 = var26 >>> var7;
                        var25 = var6 | var25;
                        var0[var24] = var25;
                        var24 = var24 + 1;
                        var24 = parseFloat(var24);
                        var25 = var26 >>> var10;
                        var25 = var25 & var8;
                        var25 = var17 | var25;
                        var0[var24] = var25;
                        var24 = var24 + 1;
                        var27 = parseFloat(var24);
                        var22 = var27 + 1;
                        var25 = var8 & var26;
                        var25 = var17 | var25;
                        var0[var27] = var25;
                        _fun94795_ip = 625;
                        continue _fun94795;
                    case 577:
                        var24 = parseFloat(var1);
                        var25 = var26 >>> var10;
                        var25 = var9 | var25;
                        var0[var24] = var25;
                        var24 = var24 + 1;
                        var27 = parseFloat(var24);
                        var22 = var27 + 1;
                        var25 = var8 & var26;
                        var25 = var17 | var25;
                        var0[var27] = var25;
                        _fun94795_ip = 625;
                        continue _fun94795;
                    case 615:
                        var25 = parseFloat(var1);
                        var22 = var25 + 1;
                        var0[var25] = var26;
                    case 625:
                        var2 = var23 + 1;
                        var1 = var22;
                        if (var1 < var3) {
                            _fun94795_ip = 323;
                            continue _fun94795
                        }
                    case 638:
                        return var0;
                }
            };
            var2.string2buf = var3;
            var3 = function(arg0) { // Environment: var1
                var3 = arg0;
                var2 = _closure1_slot5;
                var1 = var3.length;
                var0 = undefined;
                var0 = var2.bind(var0)(var3, var1);
                return var0;
            };
            var2.buf2binstring = var3;
            var3 = function(arg0) { // Environment: var1
                _fun94797: for (var _fun94797_ip = 0;;) switch (_fun94797_ip) {
                    case 0:
                        var3 = arg0;
                        var4 = _closure1_slot0;
                        var0 = _closure1_slot1;
                        var2 = 0;
                        var1 = var0[var2];
                        var0 = undefined;
                        var0 = var4.bind(var0)(var1);
                        var4 = var0.Buf8;
                        var5 = var3.length;
                        var1 = var4.prototype;
                        var1 = Object.create(var1, {
                            constructor: {
                                value: var4
                            }
                        });
                        var6 = var1;
                        var0 = new var6[var4](var5, var4);
                        var0 = var0 instanceof Object ? var0 : var1;
                        var1 = var0.length;
                        var4 = var2 < var1;
                        if (!var4) {
                            _fun94797_ip = 92;
                            continue _fun94797
                        }
                    case 70:
                        var4 = var3.charCodeAt;
                        var4 = var4.bind(var3)(var2);
                        var0[var2] = var4;
                        var2 = var2 + 1;
                        if (var2 < var1) {
                            _fun94797_ip = 70;
                            continue _fun94797
                        }
                    case 92:
                        return var0;
                }
            };
            var2.binstring2buf = var3;
            var3 = function(arg0, arg1) { // Environment: var1
                _fun94798: for (var _fun94798_ip = 0;;) switch (_fun94798_ip) {
                    case 0:
                        var24 = arg0;
                        var23 = arg1;
                        if (var23) {
                            _fun94798_ip = 14;
                            continue _fun94798
                        }
                    case 9:
                        var23 = var24.length;
                    case 14:
                        var0 = global;
                        var2 = var0.Array;
                        var22 = 2;
                        var39 = var22 * var23;
                        var1 = var2.prototype;
                        var1 = Object.create(var1, {
                            constructor: {
                                value: var2
                            }
                        });
                        var40 = var1;
                        var0 = new var40[var2](var39, var38);
                        var3 = var0 instanceof Object ? var0 : var1;
                        var1 = 0;
                        var25 = var1 < var23;
                        var2 = undefined;
                        var21 = 65533;
                        var20 = 1;
                        var19 = 65536;
                        var18 = 55296;
                        var17 = 10;
                        var16 = 1023;
                        var15 = 56320;
                        var14 = 63;
                        var13 = 6;
                        var12 = 15;
                        var11 = 7;
                        var10 = 3;
                        var9 = 31;
                        var8 = 4;
                        var7 = 128;
                        var6 = 0;
                        var5 = 0;
                        var4 = undefined;
                        if (!var25) {
                            _fun94798_ip = 434;
                            continue _fun94798
                        }
                    case 132:
                        var25 = parseFloat(var6);
                        var28 = var25 + 1;
                        var30 = var24[var25];
                        if (!(!(var30 < var7))) {
                            _fun94798_ip = 402;
                            continue _fun94798
                        }
                    case 149:
                        var25 = _closure1_slot4;
                        var27 = var25[var30];
                        if (!(!(var27 > var8))) {
                            _fun94798_ip = 379;
                            continue _fun94798
                        }
                    case 164:
                        var25 = var9;
                        if (!(var22 !== var27)) {
                            _fun94798_ip = 184;
                            continue _fun94798
                        }
                    case 171:
                        var26 = var11;
                        if (!(var10 === var27)) {
                            _fun94798_ip = 181;
                            continue _fun94798
                        }
                    case 178:
                        var26 = var12;
                    case 181:
                        var25 = var26;
                    case 184:
                        var33 = var30 & var25;
                        var32 = var28;
                        var34 = var33;
                        var29 = var27;
                        if (!(var27 > var20)) {
                            _fun94798_ip = 283;
                            continue _fun94798
                        }
                    case 201:
                        var31 = var28;
                        var26 = var33;
                        var25 = var27;
                        var32 = var31;
                        var34 = var26;
                        var29 = var25;
                        if (!(var28 < var23)) {
                            _fun94798_ip = 283;
                            continue _fun94798
                        }
                    case 223:
                        var35 = parseFloat(var31);
                        var33 = var35 + 1;
                        var35 = var24[var35];
                        var36 = var14 & var35;
                        var35 = var26 << var13;
                        var36 = var35 | var36;
                        var35 = var25 - 1;
                        var32 = var33;
                        var34 = var36;
                        var29 = var35;
                        if (!(var35 > var20)) {
                            _fun94798_ip = 283;
                            continue _fun94798
                        }
                    case 261:
                        var31 = var33;
                        var26 = var36;
                        var25 = var35;
                        var34 = var26;
                        var29 = var25;
                        var32 = var31;
                        if (var32 < var23) {
                            _fun94798_ip = 223;
                            continue _fun94798
                        }
                    case 283:
                        if (!(!(var29 > var20))) {
                            _fun94798_ip = 361;
                            continue _fun94798
                        }
                    case 287:
                        if (!(!(var34 < var19))) {
                            _fun94798_ip = 343;
                            continue _fun94798
                        }
                    case 291:
                        var26 = var34 - var19;
                        var25 = parseFloat(var5);
                        var31 = var26 >> var17;
                        var31 = var31 & var16;
                        var31 = var18 | var31;
                        var3[var25] = var31;
                        var25 = var25 + 1;
                        var31 = parseFloat(var25);
                        var25 = var31 + 1;
                        var26 = var16 & var26;
                        var26 = var15 | var26;
                        var3[var31] = var26;
                        var6 = var32;
                        var26 = var29;
                        _fun94798_ip = 418;
                        continue _fun94798;
                    case 343:
                        var33 = parseFloat(var5);
                        var25 = var33 + 1;
                        var3[var33] = var34;
                        var6 = var32;
                        var26 = var29;
                        _fun94798_ip = 418;
                        continue _fun94798;
                    case 361:
                        var33 = parseFloat(var5);
                        var25 = var33 + 1;
                        var3[var33] = var21;
                        var6 = var32;
                        var26 = var29;
                        _fun94798_ip = 418;
                        continue _fun94798;
                    case 379:
                        var31 = parseFloat(var5);
                        var25 = var31 + 1;
                        var3[var31] = var21;
                        var31 = var27 - var20;
                        var6 = var28 + var31;
                        var26 = var27;
                        _fun94798_ip = 418;
                        continue _fun94798;
                    case 402:
                        var29 = parseFloat(var5);
                        var25 = var29 + 1;
                        var3[var29] = var30;
                        var6 = var28;
                        var26 = var4;
                    case 418:
                        var5 = var25;
                        var4 = var26;
                        var1 = var5;
                        if (var6 < var23) {
                            _fun94798_ip = 132;
                            continue _fun94798
                        }
                    case 434:
                        var0 = _closure1_slot5;
                        var0 = var0.bind(var2)(var3, var1);
                        return var0;
                }
            };
            var2.buf2string = var3;
            var1 = function(arg0, arg1) { // Environment: var1
                _fun94799: for (var _fun94799_ip = 0;;) switch (_fun94799_ip) {
                    case 0:
                        var1 = arg0;
                        var4 = arg1;
                        if (var4) {
                            _fun94799_ip = 14;
                            continue _fun94799
                        }
                    case 9:
                        var4 = var1.length;
                    case 14:
                        var0 = var1.length;
                        if (!(var4 > var0)) {
                            _fun94799_ip = 28;
                            continue _fun94799
                        }
                    case 23:
                        var4 = var1.length;
                    case 28:
                        var0 = 1;
                        var8 = var4 - var0;
                        var3 = 0;
                        var2 = var8;
                        if (!(var8 >= var3)) {
                            _fun94799_ip = 96;
                            continue _fun94799
                        }
                    case 44:
                        var0 = var1[var8];
                        var7 = 192;
                        var0 = var7 & var0;
                        var6 = 128;
                        var5 = var8;
                        var2 = var5;
                        if (!(var6 === var0)) {
                            _fun94799_ip = 96;
                            continue _fun94799
                        }
                    case 68:
                        var8 = var5 - 1;
                        var2 = var8;
                        if (!(var8 >= var3)) {
                            _fun94799_ip = 96;
                            continue _fun94799
                        }
                    case 78:
                        var0 = var1[var8];
                        var0 = var7 & var0;
                        var5 = var8;
                        var2 = var5;
                        if (var6 === var0) {
                            _fun94799_ip = 68;
                            continue _fun94799
                        }
                    case 96:
                        var0 = var4;
                        if (!(!(var2 < var3))) {
                            _fun94799_ip = 142;
                            continue _fun94799
                        }
                    case 103:
                        var0 = var4;
                        if (!(var3 !== var2)) {
                            _fun94799_ip = 142;
                            continue _fun94799
                        }
                    case 110:
                        var3 = _closure1_slot4;
                        var1 = var1[var2];
                        var1 = var3[var1];
                        var3 = var2 + var1;
                        var1 = var4;
                        if (!(var3 > var4)) {
                            _fun94799_ip = 139;
                            continue _fun94799
                        }
                    case 136:
                        var1 = var2;
                    case 139:
                        var0 = var1;
                    case 142:
                        return var0;
                }
            };
            var2.utf8border = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [12367]);