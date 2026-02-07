// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun13290: for (var _fun13290_ip = 0;;) switch (_fun13290_ip) {
        case 0:
            var1 = global;
            var2 = this;
            var0 = global;
            var3 = var0.window;
            var4 = 'undefined';
            var3 = typeof var3;
            if (!(var4 === var3)) {
                _fun13290_ip = 34;
                continue _fun13290
            }
        case 23:
            var3 = undefined;
            if (!(var3 !== var1)) {
                _fun13290_ip = 32;
                continue _fun13290
            }
        case 29:
            var2 = var1;
        case 32:
            _fun13290_ip = 40;
            continue _fun13290;
        case 34:
            var2 = var0.window;
        case 40:
            var1 = function(arg0) { // Environment: var0
                _fun13291: for (var _fun13291_ip = 0;;) switch (_fun13291_ip) {
                    case 0:
                        var1 = arg0;
                        var2 = function() {
                            var0 = undefined;
                            return var0;
                        };
                        var0 = function arg0, arg1() {
                            _fun13293: for (var _fun13293_ip = 0;;) switch (_fun13293_ip) {
                                case 0:
                                    var2 = arg0;
                                    var0 = arg1;
                                    var1 = 'utf-8';
                                    var3 = undefined;
                                    if (!(var3 !== var2)) {
                                        _fun13293_ip = 21;
                                        continue _fun13293
                                    }
                                case 18:
                                    var1 = var2;
                                case 21:
                                    if (!(var3 === var0)) {
                                        _fun13293_ip = 37;
                                        continue _fun13293
                                    }
                                case 25:
                                    var2 = {};
                                    var4 = false;
                                    var2.fatal = var4;
                                    var0 = var2;
                                case 37:
                                    var5 = _closure2_slot0;
                                    var4 = var5.indexOf;
                                    var2 = var1.toLowerCase;
                                    var2 = var2.bind(var1)();
                                    var4 = var4.bind(var5)(var2);
                                    var2 = -1;
                                    if (!(var2 !== var4)) {
                                        _fun13293_ip = 107;
                                        continue _fun13293
                                    }
                                case 75:
                                    var0 = var0.fatal;
                                    if (var0) {
                                        _fun13293_ip = 86;
                                        continue _fun13293
                                    }
                                case 84:
                                    return var3;
                                case 86:
                                    var0 = global;
                                    var2 = var0.Error;
                                    var0 = "Failed to construct 'TextDecoder': the 'fatal' option is unsupported.";
                                    var0 = var2.bind(var3)(var0);
                                    throw var0;
                                case 107:
                                    var0 = global;
                                    var2 = var0.RangeError;
                                    var0 = "Failed to construct 'TextDecoder': The encoding label provided ('";
                                    var3 = var0 + var1;
                                    var0 = var2.prototype;
                                    var1 = Object.create(var0, {
                                        constructor: {
                                            value: var2
                                        }
                                    });
                                    var0 = "') is invalid.";
                                    var6 = var3 + var0;
                                    var7 = var1;
                                    var0 = new var7[var2](var6, var5);
                                    var0 = var0 instanceof Object ? var0 : var1;
                                    throw var0;
                            }
                        };
                        var4 = function arg0() {
                            _fun13294: for (var _fun13294_ip = 0;;) switch (_fun13294_ip) {
                                case 0:
                                    var26 = arg0;
                                    var25 = global;
                                    var2 = var25.Math;
                                    var1 = var2.min;
                                    var0 = var26.length;
                                    var24 = 1;
                                    var0 = var0 + var24;
                                    var23 = 65536;
                                    var22 = var1.bind(var2)(var23, var0);
                                    var0 = var25.Uint16Array;
                                    var1 = var0.prototype;
                                    var1 = Object.create(var1, {
                                        constructor: {
                                            value: var0
                                        }
                                    });
                                    var39 = var1;
                                    var38 = var22;
                                    var0 = new var39[var0](var38, var37);
                                    var21 = var0 instanceof Object ? var0 : var1;
                                    var20 = new Array(0);
                                    var19 = 0;
                                    var18 = 63;
                                    var17 = 31;
                                    var16 = 6;
                                    var15 = 12;
                                    var14 = 10;
                                    var13 = 1023;
                                    var12 = 55296;
                                    var11 = 56320;
                                    var10 = 7;
                                    var9 = 18;
                                    var8 = 65535;
                                    var7 = 248;
                                    var6 = 240;
                                    var5 = 224;
                                    var4 = 192;
                                    var3 = 128;
                                    var2 = null;
                                    var1 = 0;
                                    var0 = 0;
                                case 141:
                                    var27 = var26.length;
                                    var30 = var1 < var27;
                                    if (!var30) {
                                        _fun13294_ip = 170;
                                        continue _fun13294
                                    }
                                case 153:
                                    var31 = var22 - var24;
                                    var27 = var26;
                                    var28 = var1;
                                    var29 = var0;
                                    if (!(var29 >= var31)) {
                                        _fun13294_ip = 249;
                                        continue _fun13294
                                    }
                                case 170:
                                    var32 = var20.push;
                                    var31 = var25.String;
                                    var34 = var31.fromCharCode;
                                    var33 = var34.apply;
                                    var31 = var21.subarray;
                                    var31 = var31.bind(var21)(var19, var0);
                                    var31 = var33.bind(var34)(var2, var31);
                                    var31 = var32.bind(var20)(var31);
                                    if (var30) {
                                        _fun13294_ip = 234;
                                        continue _fun13294
                                    }
                                case 218:
                                    var31 = var20.join;
                                    var30 = '';
                                    var30 = var31.bind(var20)(var30);
                                    return var30;
                                case 234:
                                    var30 = var26.subarray;
                                    var27 = var30.bind(var26)(var1);
                                    var28 = 0;
                                    var29 = 0;
                                case 249:
                                    var28 = parseFloat(var28);
                                    var30 = var28 + 1;
                                    var28 = var27[var28];
                                    var31 = var3 & var28;
                                    if (var31) {
                                        _fun13294_ip = 287;
                                        continue _fun13294
                                    }
                                case 266:
                                    var31 = parseFloat(var29);
                                    var0 = var31 + 1;
                                    var21[var31] = var28;
                                    var26 = var27;
                                    var1 = var30;
                                    _fun13294_ip = 141;
                                    continue _fun13294;
                                case 287:
                                    var31 = var5 & var28;
                                    if (!(var4 !== var31)) {
                                        _fun13294_ip = 527;
                                        continue _fun13294
                                    }
                                case 298:
                                    var31 = var6 & var28;
                                    if (!(var5 !== var31)) {
                                        _fun13294_ip = 461;
                                        continue _fun13294
                                    }
                                case 309:
                                    var31 = var7 & var28;
                                    var26 = var27;
                                    var1 = var30;
                                    var0 = var29;
                                    if (var6 !== var31) {
                                        _fun13294_ip = 141;
                                        continue _fun13294
                                    }
                                case 329:
                                    var34 = var10 & var28;
                                    var31 = parseFloat(var30);
                                    var32 = var27[var31];
                                    var33 = var18 & var32;
                                    var31 = var31 + 1;
                                    var32 = parseFloat(var31);
                                    var31 = var27[var32];
                                    var31 = var18 & var31;
                                    var32 = var32 + 1;
                                    var32 = parseFloat(var32);
                                    var1 = var32 + 1;
                                    var32 = var27[var32];
                                    var32 = var18 & var32;
                                    var34 = var34 << var9;
                                    var33 = var33 << var15;
                                    var33 = var34 | var33;
                                    var31 = var31 << var16;
                                    var31 = var33 | var31;
                                    var33 = var31 | var32;
                                    var31 = var29;
                                    var32 = var33;
                                    if (!(var8 < var32)) {
                                        _fun13294_ip = 443;
                                        continue _fun13294
                                    }
                                case 409:
                                    var33 = var33 - var23;
                                    var36 = parseFloat(var29);
                                    var31 = var36 + 1;
                                    var35 = var33 >>> var14;
                                    var35 = var35 & var13;
                                    var35 = var35 | var12;
                                    var21[var36] = var35;
                                    var33 = var13 & var33;
                                    var32 = var11 | var33;
                                case 443:
                                    var31 = parseFloat(var31);
                                    var0 = var31 + 1;
                                    var21[var31] = var32;
                                    var26 = var27;
                                    _fun13294_ip = 141;
                                    continue _fun13294;
                                case 461:
                                    var32 = parseFloat(var30);
                                    var31 = var27[var32];
                                    var31 = var18 & var31;
                                    var32 = var32 + 1;
                                    var32 = parseFloat(var32);
                                    var1 = var32 + 1;
                                    var32 = var27[var32];
                                    var33 = var18 & var32;
                                    var32 = parseFloat(var29);
                                    var0 = var32 + 1;
                                    var34 = var17 & var28;
                                    var34 = var34 << var15;
                                    var31 = var31 << var16;
                                    var31 = var34 | var31;
                                    var31 = var31 | var33;
                                    var21[var32] = var31;
                                    var26 = var27;
                                    _fun13294_ip = 141;
                                    continue _fun13294;
                                case 527:
                                    var30 = parseFloat(var30);
                                    var1 = var30 + 1;
                                    var30 = var27[var30];
                                    var30 = var18 & var30;
                                    var29 = parseFloat(var29);
                                    var0 = var29 + 1;
                                    var28 = var17 & var28;
                                    var28 = var28 << var16;
                                    var28 = var28 | var30;
                                    var21[var29] = var28;
                                    var26 = var27;
                                    _fun13294_ip = 141;
                                    continue _fun13294;
                            }
                        };
                        var _closure2_slot2 = var4;
                        var5 = var1.TextEncoder;
                        if (!var5) {
                            _fun13291_ip = 45;
                            continue _fun13291
                        }
                    case 33:
                        var5 = var1.TextDecoder;
                        if (var5) {
                            _fun13291_ip = 354;
                            continue _fun13291
                        }
                    case 45:
                        var5 = ['utf-8', 'utf8', 'unicode-1-1-utf-8'];
                        var _closure2_slot0 = var5;
                        var5 = global;
                        var9 = var5.Object;
                        var8 = var9.defineProperty;
                        var7 = var2.prototype;
                        var6 = {};
                        var11 = 'utf-8';
                        var6.value = var11;
                        var10 = 'encoding';
                        var6 = var8.bind(var9)(var7, var10, var6);
                        var7 = var2.prototype;
                        var6 = function(arg0, arg1) { // Environment: var3
                            _fun13295: for (var _fun13295_ip = 0;;) switch (_fun13295_ip) {
                                case 0:
                                    var38 = arg0;
                                    var0 = arg1;
                                    var2 = undefined;
                                    if (!(var2 === var0)) {
                                        _fun13295_ip = 24;
                                        continue _fun13295
                                    }
                                case 12:
                                    var1 = {};
                                    var3 = false;
                                    var1.stream = var3;
                                    var0 = var1;
                                case 24:
                                    var1 = var0.stream;
                                    var0 = global;
                                    if (var1) {
                                        _fun13295_ip = 812;
                                        continue _fun13295
                                    }
                                case 38:
                                    var37 = var38.length;
                                    var5 = var0.Math;
                                    var4 = var5.max;
                                    var36 = 1;
                                    var1 = var37 >>> var36;
                                    var1 = var37 + var1;
                                    var3 = 32;
                                    var35 = 7;
                                    var1 = var1 + var35;
                                    var1 = var4.bind(var5)(var3, var1);
                                    var5 = var0.Uint8Array;
                                    var34 = 3;
                                    var3 = var1 >>> var34;
                                    var4 = var5.prototype;
                                    var4 = Object.create(var4, {
                                        constructor: {
                                            value: var5
                                        }
                                    });
                                    var52 = var3 << var34;
                                    var53 = var4;
                                    var3 = new var53[var5](var52, var51);
                                    var3 = var3 instanceof Object ? var3 : var4;
                                    var6 = 0;
                                    var39 = var6 < var37;
                                    var33 = 63;
                                    var32 = 128;
                                    var31 = 18;
                                    var30 = 240;
                                    var29 = 12;
                                    var28 = 6;
                                    var27 = 4292870144.0;
                                    var26 = 15;
                                    var25 = 224;
                                    var24 = 4294901760.0;
                                    var23 = 31;
                                    var22 = 192;
                                    var21 = 4294965248.0;
                                    var20 = 4294967168.0;
                                    var19 = 8;
                                    var18 = 2;
                                    var17 = 4;
                                    var16 = 56319;
                                    var15 = 55296;
                                    var14 = 1023;
                                    var13 = 10;
                                    var12 = 65536;
                                    var11 = 64512;
                                    var10 = 56320;
                                    var9 = 0;
                                    var8 = 0;
                                    var7 = var1;
                                    var1 = undefined;
                                    var5 = 0;
                                    var4 = var3;
                                    if (!var39) {
                                        _fun13295_ip = 777;
                                        continue _fun13295
                                    }
                                case 262:
                                    var40 = var38.charCodeAt;
                                    var39 = parseFloat(var9);
                                    var44 = var39 + 1;
                                    var41 = var40.bind(var38)(var39);
                                    var46 = var44;
                                    var42 = var1;
                                    var47 = var41;
                                    if (!(var15 <= var47)) {
                                        _fun13295_ip = 416;
                                        continue _fun13295
                                    }
                                case 295:
                                    var46 = var44;
                                    var47 = var41;
                                    var42 = var1;
                                    if (!(var16 >= var41)) {
                                        _fun13295_ip = 416;
                                        continue _fun13295
                                    }
                                case 308:
                                    var39 = var44;
                                    var43 = var41;
                                    if (!(var44 < var37)) {
                                        _fun13295_ip = 372;
                                        continue _fun13295
                                    }
                                case 318:
                                    var40 = var38.charCodeAt;
                                    var40 = var40.bind(var38)(var44);
                                    var45 = var11 & var40;
                                    var39 = var44;
                                    var43 = var41;
                                    var1 = var40;
                                    if (!(var10 === var45)) {
                                        _fun13295_ip = 372;
                                        continue _fun13295
                                    }
                                case 346:
                                    var39 = var44 + 1;
                                    var41 = var14 & var41;
                                    var45 = var14 & var40;
                                    var41 = var41 << var13;
                                    var41 = var41 + var45;
                                    var43 = var41 + var12;
                                    var1 = var40;
                                case 372:
                                    var46 = var39;
                                    var42 = var1;
                                    var47 = var43;
                                    if (!(var15 <= var47)) {
                                        _fun13295_ip = 416;
                                        continue _fun13295
                                    }
                                case 385:
                                    var46 = var39;
                                    var47 = var43;
                                    var42 = var1;
                                    var9 = var46;
                                    var40 = var8;
                                    var41 = var7;
                                    var39 = var3;
                                    var1 = var42;
                                    if (!(!(var16 >= var43))) {
                                        _fun13295_ip = 755;
                                        continue _fun13295
                                    }
                                case 416:
                                    var48 = var8 + var17;
                                    var45 = var3.length;
                                    var44 = var7;
                                    var43 = var3;
                                    if (!(var48 > var45)) {
                                        _fun13295_ip = 516;
                                        continue _fun13295
                                    }
                                case 435:
                                    var48 = var7 + var19;
                                    var45 = var38.length;
                                    var45 = var46 / var45;
                                    var45 = var45 * var18;
                                    var45 = var36 + var45;
                                    var45 = var48 * var45;
                                    var45 = var45 >>> var34;
                                    var48 = var45 << var34;
                                    var45 = var0.Uint8Array;
                                    var49 = var45.prototype;
                                    var49 = Object.create(var49, {
                                        constructor: {
                                            value: var45
                                        }
                                    });
                                    var53 = var49;
                                    var52 = var48;
                                    var45 = new var53[var45](var52, var51);
                                    var45 = var45 instanceof Object ? var45 : var49;
                                    var49 = var45.set;
                                    var49 = var49.bind(var45)(var3);
                                    var44 = var48;
                                    var43 = var45;
                                    var42 = var43;
                                case 516:
                                    var45 = var20 & var47;
                                    if (var45) {
                                        _fun13295_ip = 550;
                                        continue _fun13295
                                    }
                                case 523:
                                    var48 = parseFloat(var8);
                                    var40 = var48 + 1;
                                    var43[var48] = var47;
                                    var9 = var46;
                                    var41 = var44;
                                    var39 = var43;
                                    var1 = var42;
                                    _fun13295_ip = 755;
                                    continue _fun13295;
                                case 550:
                                    var45 = var21 & var47;
                                    if (var45) {
                                        _fun13295_ip = 584;
                                        continue _fun13295
                                    }
                                case 557:
                                    var49 = parseFloat(var8);
                                    var45 = var49 + 1;
                                    var48 = var47 >>> var28;
                                    var48 = var48 & var23;
                                    var48 = var48 | var22;
                                    var43[var49] = var48;
                                    _fun13295_ip = 725;
                                    continue _fun13295;
                                case 584:
                                    var48 = var24 & var47;
                                    if (var48) {
                                        _fun13295_ip = 637;
                                        continue _fun13295
                                    }
                                case 591:
                                    var48 = parseFloat(var8);
                                    var49 = var47 >>> var29;
                                    var49 = var49 & var26;
                                    var49 = var49 | var25;
                                    var43[var48] = var49;
                                    var48 = var48 + 1;
                                    var50 = parseFloat(var48);
                                    var45 = var50 + 1;
                                    var49 = var47 >>> var28;
                                    var49 = var49 & var33;
                                    var49 = var49 | var32;
                                    var43[var50] = var49;
                                    _fun13295_ip = 725;
                                    continue _fun13295;
                                case 637:
                                    var48 = var27 & var47;
                                    var9 = var46;
                                    var40 = var8;
                                    var41 = var44;
                                    var39 = var43;
                                    var1 = var42;
                                    if (var48) {
                                        _fun13295_ip = 755;
                                        continue _fun13295
                                    }
                                case 659:
                                    var48 = parseFloat(var8);
                                    var49 = var47 >>> var31;
                                    var49 = var49 & var35;
                                    var49 = var49 | var30;
                                    var43[var48] = var49;
                                    var48 = var48 + 1;
                                    var48 = parseFloat(var48);
                                    var49 = var47 >>> var29;
                                    var49 = var49 & var33;
                                    var49 = var49 | var32;
                                    var43[var48] = var49;
                                    var48 = var48 + 1;
                                    var50 = parseFloat(var48);
                                    var45 = var50 + 1;
                                    var49 = var47 >>> var28;
                                    var49 = var49 & var33;
                                    var49 = var49 | var32;
                                    var43[var50] = var49;
                                case 725:
                                    var48 = parseFloat(var45);
                                    var40 = var48 + 1;
                                    var47 = var33 & var47;
                                    var47 = var47 | var32;
                                    var43[var48] = var47;
                                    var9 = var46;
                                    var41 = var44;
                                    var39 = var43;
                                    var1 = var42;
                                case 755:
                                    var8 = var40;
                                    var7 = var41;
                                    var3 = var39;
                                    var5 = var8;
                                    var4 = var3;
                                    if (var9 < var37) {
                                        _fun13295_ip = 262;
                                        continue _fun13295
                                    }
                                case 777:
                                    var1 = var4.slice;
                                    if (var1) {
                                        _fun13295_ip = 799;
                                        continue _fun13295
                                    }
                                case 785:
                                    var1 = var4.subarray;
                                    var1 = var1.bind(var4)(var6, var5);
                                    _fun13295_ip = 810;
                                    continue _fun13295;
                                case 799:
                                    var3 = var4.slice;
                                    var1 = var3.bind(var4)(var6, var5);
                                case 810:
                                    return var1;
                                case 812:
                                    var1 = var0.Error;
                                    var0 = "Failed to encode: the 'stream' option is unsupported.";
                                    var0 = var1.bind(var2)(var0);
                                    throw var0;
                            }
                        };
                        var7.encode = var6;
                        var9 = var5.Object;
                        var8 = var9.defineProperty;
                        var7 = var0.prototype;
                        var6 = {};
                        var6.value = var11;
                        var6 = var8.bind(var9)(var7, var10, var6);
                        var11 = var5.Object;
                        var10 = var11.defineProperty;
                        var9 = var0.prototype;
                        var8 = {};
                        var6 = false;
                        var8.value = var6;
                        var7 = 'fatal';
                        var7 = var10.bind(var11)(var9, var7, var8);
                        var10 = var5.Object;
                        var9 = var10.defineProperty;
                        var8 = var0.prototype;
                        var7 = {};
                        var7.value = var6;
                        var6 = 'ignoreBOM';
                        var6 = var9.bind(var10)(var8, var6, var7);
                        var _closure2_slot1 = var4;
                        var4 = var5.Buffer;
                        var6 = 'function';
                        var4 = typeof var4;
                        if (!(var6 === var4)) {
                            _fun13291_ip = 248;
                            continue _fun13291
                        }
                    case 234:
                        var4 = var5.Buffer;
                        var4 = var4.from;
                        if (var4) {
                            _fun13291_ip = 313;
                            continue _fun13291
                        }
                    case 248:
                        var4 = var5.Blob;
                        var4 = typeof var4;
                        var4 = var6 === var4;
                        if (!var4) {
                            _fun13291_ip = 277;
                            continue _fun13291
                        }
                    case 264:
                        var7 = var5.URL;
                        var7 = typeof var7;
                        var4 = var6 === var7;
                    case 277:
                        if (!var4) {
                            _fun13291_ip = 299;
                            continue _fun13291
                        }
                    case 280:
                        var5 = var5.URL;
                        var5 = var5.createObjectURL;
                        var5 = typeof var5;
                        var4 = var6 === var5;
                    case 299:
                        if (!var4) {
                            _fun13291_ip = 322;
                            continue _fun13291
                        }
                    case 302:
                        var4 = function arg0() {
                            _fun13297: for (var _fun13297_ip = 0;;) switch (_fun13297_ip) {
                                case 0:
                                    var4 = arg0;
                                    var0 = var4;
                                    var5 = undefined;
                                    var1 = undefined;
                                    var2 = global;
                                    var7 = var2.URL;
                                    var6 = var7.createObjectURL;
                                    var10 = var2.Blob;
                                    var9 = new Array(1);
                                    var9[0] = var4;
                                    var4 = {};
                                    var8 = 'text/plain;charset=UTF-8';
                                    var4.type = var8;
                                    var8 = var10.prototype;
                                    var8 = Object.create(var8, {
                                        constructor: {
                                            value: var10
                                        }
                                    });
                                    var14 = var8;
                                    var13 = var9;
                                    var12 = var4;
                                    var4 = new var14[var10](var13, var12, var11);
                                    var4 = var4 instanceof Object ? var4 : var8;
                                    var1 = var6.bind(var7)(var4);
                                case 81: // try_start_0 // try_start_1
                                    var4 = var2.XMLHttpRequest;
                                    var6 = var4.prototype;
                                    var6 = Object.create(var6, {
                                        constructor: {
                                            value: var4
                                        }
                                    });
                                    var14 = var6;
                                    var4 = new var14[var4](var13);
                                    var4 = var4 instanceof Object ? var4 : var6;
                                    var9 = var4.open;
                                    var8 = var1;
                                    var7 = 'GET';
                                    var6 = false;
                                    var6 = var9.bind(var4)(var7, var8, var6);
                                    var6 = var4.send;
                                    var6 = var6.bind(var4)();
                                    var4 = var4.responseText;
                                case 147: // try_end0 // try_end1
                                    var8 = var2.URL;
                                    var7 = var8.revokeObjectURL;
                                    var6 = var1;
                                    var6 = var7.bind(var8)(var6);
                                    return var4;
                                case 169: // try_start_2 // catch_target0
                                    CatchBlockStart(arg_register = 3);
                                    var4 = _closure2_slot2;
                                    var0 = var4.bind(var5)(var0);
                                case 183: // try_end2
                                    var5 = var2.URL;
                                    var4 = var5.revokeObjectURL;
                                    var3 = var4.bind(var5)(var3);
                                    return var0;
                                case 202: // catch_target1 // catch_target2
                                    CatchBlockStart(arg_register = 0);
                                    var3 = var2.URL;
                                    var2 = var3.revokeObjectURL;
                                    var1 = var2.bind(var3)(var1);
                                    throw var0;
                            }
                        };
                        _closure2_slot1 = var4;
                        _fun13291_ip = 322;
                        continue _fun13291;
                    case 313:
                        var4 = function arg0() {
                            var0 = arg0;
                            var1 = global;
                            var4 = var1.Buffer;
                            var3 = var4.from;
                            var2 = var0.buffer;
                            var1 = var0.byteOffset;
                            var0 = var0.byteLength;
                            var2 = var3.bind(var4)(var2, var1, var0);
                            var1 = var2.toString;
                            var0 = 'utf-8';
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        };
                        _closure2_slot1 = var4;
                    case 322:
                        var4 = var0.prototype;
                        var3 = function(arg0, arg1) { // Environment: var3
                            _fun13298: for (var _fun13298_ip = 0;;) switch (_fun13298_ip) {
                                case 0:
                                    var4 = arg0;
                                    var0 = arg1;
                                    var2 = undefined;
                                    if (!(var2 === var0)) {
                                        _fun13298_ip = 24;
                                        continue _fun13298
                                    }
                                case 12:
                                    var1 = {};
                                    var3 = false;
                                    var1.stream = var3;
                                    var0 = var1;
                                case 24:
                                    var1 = var0.stream;
                                    var0 = global;
                                    if (var1) {
                                        _fun13298_ip = 144;
                                        continue _fun13298
                                    }
                                case 35:
                                    var1 = var0.Uint8Array;
                                    var1 = var4 instanceof var1;
                                    var3 = var4;
                                    if (var1) {
                                        _fun13298_ip = 130;
                                        continue _fun13298
                                    }
                                case 51:
                                    var5 = var4.buffer;
                                    var1 = var0.ArrayBuffer;
                                    var1 = var5 instanceof var1;
                                    var6 = var0.Uint8Array;
                                    if (var1) {
                                        _fun13298_ip = 101;
                                        continue _fun13298
                                    }
                                case 76:
                                    var1 = var6.prototype;
                                    var5 = Object.create(var1, {
                                        constructor: {
                                            value: var6
                                        }
                                    });
                                    var8 = var5;
                                    var7 = var4;
                                    var1 = new var8[var6](var7, var6);
                                    var1 = var1 instanceof Object ? var1 : var5;
                                    _fun13298_ip = 127;
                                    continue _fun13298;
                                case 101:
                                    var7 = var4.buffer;
                                    var5 = var6.prototype;
                                    var5 = Object.create(var5, {
                                        constructor: {
                                            value: var6
                                        }
                                    });
                                    var8 = var5;
                                    var4 = new var8[var6](var7, var6);
                                    var1 = var4 instanceof Object ? var4 : var5;
                                case 127:
                                    var3 = var1;
                                case 130:
                                    var1 = _closure2_slot1;
                                    var1 = var1.bind(var2)(var3);
                                    return var1;
                                case 144:
                                    var1 = var0.Error;
                                    var0 = "Failed to decode: the 'stream' option is unsupported.";
                                    var0 = var1.bind(var2)(var0);
                                    throw var0;
                            }
                        };
                        var4.decode = var3;
                        var1.TextEncoder = var2;
                        var1.TextDecoder = var0;
                        var0 = undefined;
                        return var0;
                    case 354:
                        var0 = false;
                        return var0;
                }
            };
            var0 = undefined;
            var1 = var1.bind(var0)(var2);
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, []);