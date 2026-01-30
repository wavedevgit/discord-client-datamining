// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var0 = require;
    var _closure1_slot0 = var0;
    var0 = dependencyMap;
    var _closure1_slot1 = var0;
    var0 = function(arg0, arg1) { // Original name: hasTagsData, environment: var4
        var0 = arg0;
        var1 = var0.length;
        var2 = _closure1_slot8;
        var0 = arg1;
        var0 = var0 + var2;
        var0 = var1 < var0;
        return var0;
    };
    var _closure1_slot9 = var0;
    var0 = function(arg0) { // Original name: parseTags, environment: var4
        _fun38261: for (var _fun38261_ip = 0;;) switch (_fun38261_ip) {
            case 0:
                var27 = arg0;
                var26 = var27.buffer;
                var0 = var27.getUint32;
                var1 = var0.bind(var27)();
                var0 = var27.byteLength;
                if (!(var0 === var1)) {
                    _fun38261_ip = 1272;
                    continue _fun38261
                }
            case 32:
                var1 = var27.byteLength;
                var0 = _closure1_slot2;
                if (!(!(var1 < var0))) {
                    _fun38261_ip = 1236;
                    continue _fun38261
                }
            case 52:
                var1 = {};
                var0 = global;
                var4 = var0.Object;
                var3 = var4.keys;
                var5 = _closure1_slot0;
                var2 = _closure1_slot1;
                var24 = 1;
                var2 = var2[var24];
                var23 = undefined;
                var2 = var5.bind(var23)(var2);
                var2 = var2.iccProfile;
                var5 = var3.bind(var4)(var2);
                var2 = var5.length;
                var22 = 0;
                var2 = var22 < var2;
                var4 = 10;
                var3 = 0;
                if (!var2) {
                    _fun38261_ip = 225;
                    continue _fun38261
                }
            case 119:
                var8 = var5[var3];
                var6 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var24];
                var2 = var6.bind(var23)(var2);
                var2 = var2.iccProfile;
                var2 = var2[var8];
                var7 = var2.value;
                var6 = var0.parseInt;
                var6 = var6.bind(var23)(var8, var4);
                var8 = var7.bind(var2)(var27, var6);
                var6 = var2.description;
                var7 = var8;
                if (!var6) {
                    _fun38261_ip = 194;
                    continue _fun38261
                }
            case 184:
                var6 = var2.description;
                var7 = var6.bind(var2)(var8);
            case 194:
                var6 = var2.name;
                var2 = {};
                var2.value = var8;
                var2.description = var7;
                var1[var6] = var2;
                var3 = var3 + 1;
                var2 = var5.length;
                if (var3 < var2) {
                    _fun38261_ip = 119;
                    continue _fun38261
                }
            case 225:
                var3 = _closure1_slot11;
                var5 = var26.slice;
                var4 = 36;
                var2 = 40;
                var2 = var5.bind(var26)(var4, var2);
                var3 = var3.bind(var23)(var2);
                var2 = _closure1_slot3;
                if (!(var3 === var2)) {
                    _fun38261_ip = 1202;
                    continue _fun38261
                }
            case 262:
                var2 = var26.length;
                var21 = 132;
                if (!(!(var2 < var21))) {
                    _fun38261_ip = 1200;
                    continue _fun38261
                }
            case 277:
                var3 = var27.getUint32;
                var2 = 128;
                var20 = var3.bind(var27)(var2);
                var28 = var22 < var20;
                var19 = 12;
                var18 = 11;
                var17 = 8;
                var16 = '';
                var15 = '-';
                var14 = 16;
                var13 = 2;
                var12 = 4;
                var11 = 7;
                var10 = 0;
                var9 = undefined;
                var8 = undefined;
                var7 = undefined;
                var6 = undefined;
                var5 = undefined;
                var4 = undefined;
                var3 = undefined;
                var2 = undefined;
                if (!var28) {
                    _fun38261_ip = 1192;
                    continue _fun38261
                }
            case 348:
                var28 = _closure1_slot9;
                var28 = var28.bind(var23)(var26, var21);
                var36 = var21;
                if (var28) {
                    _fun38261_ip = 1198;
                    continue _fun38261
                }
            case 367:
                var29 = _closure1_slot0;
                var28 = _closure1_slot1;
                var28 = var28[var22];
                var29 = var29.bind(var23)(var28);
                var28 = var29.getStringFromDataView;
                var40 = var28.bind(var29)(var27, var36, var12);
                var29 = var27.getUint32;
                var28 = var36 + var12;
                var38 = var29.bind(var27)(var28);
                var29 = var27.getUint32;
                var28 = var36 + var17;
                var39 = var29.bind(var27)(var28);
                var28 = var26.length;
                if (!(!(var38 > var28))) {
                    _fun38261_ip = 1196;
                    continue _fun38261
                }
            case 439:
                var29 = _closure1_slot0;
                var28 = _closure1_slot1;
                var28 = var28[var22];
                var29 = var29.bind(var23)(var28);
                var28 = var29.getStringFromDataView;
                var41 = var28.bind(var29)(var27, var38, var12);
                var28 = _closure1_slot4;
                if (!(var41 !== var28)) {
                    _fun38261_ip = 1068;
                    continue _fun38261
                }
            case 480:
                var28 = _closure1_slot5;
                if (!(var41 !== var28)) {
                    _fun38261_ip = 674;
                    continue _fun38261
                }
            case 491:
                var28 = _closure1_slot6;
                if (!(var41 !== var28)) {
                    _fun38261_ip = 602;
                    continue _fun38261
                }
            case 499:
                var37 = _closure1_slot7;
                var35 = var9;
                var34 = var8;
                var33 = var7;
                var32 = var6;
                var31 = var5;
                var30 = var4;
                var29 = var3;
                var28 = var2;
                if (!(var41 === var37)) {
                    _fun38261_ip = 1154;
                    continue _fun38261
                }
            case 534:
                var41 = _closure1_slot12;
                var42 = _closure1_slot11;
                var44 = var26.slice;
                var43 = var38 + var17;
                var37 = var38 + var19;
                var37 = var44.bind(var26)(var43, var37);
                var37 = var42.bind(var23)(var37);
                var37 = var41.bind(var23)(var1, var40, var37);
                var35 = var9;
                var34 = var8;
                var33 = var7;
                var32 = var6;
                var31 = var5;
                var30 = var4;
                var29 = var3;
                var28 = var2;
                _fun38261_ip = 1154;
                continue _fun38261;
            case 602:
                var41 = _closure1_slot12;
                var42 = _closure1_slot11;
                var44 = var26.slice;
                var43 = var38 + var17;
                var37 = var38 + var39;
                var37 = var37 - var11;
                var37 = var44.bind(var26)(var43, var37);
                var37 = var42.bind(var23)(var37);
                var37 = var41.bind(var23)(var1, var40, var37);
                var35 = var9;
                var34 = var8;
                var33 = var7;
                var32 = var6;
                var31 = var5;
                var30 = var4;
                var29 = var3;
                var28 = var2;
                _fun38261_ip = 1154;
                continue _fun38261;
            case 674:
                var41 = var27.getUint32;
                var37 = var38 + var17;
                var44 = var41.bind(var27)(var37);
                var41 = var27.getUint32;
                var37 = var38 + var19;
                var43 = var41.bind(var27)(var37);
                var46 = var38 + var14;
                var41 = new Array(0);
                var47 = var22 < var44;
                var45 = 0;
                var42 = var46;
                var37 = 0;
                if (!var47) {
                    _fun38261_ip = 891;
                    continue _fun38261
                }
            case 729:
                var49 = _closure1_slot0;
                var48 = _closure1_slot1;
                var47 = var48[var22];
                var51 = var49.bind(var23)(var47);
                var50 = var51.getStringFromDataView;
                var47 = var46 + var22;
                var51 = var50.bind(var51)(var27, var47, var13);
                var47 = var48[var22];
                var52 = var49.bind(var23)(var47);
                var50 = var52.getStringFromDataView;
                var47 = var46 + var13;
                var50 = var50.bind(var52)(var27, var47, var13);
                var52 = var27.getUint32;
                var47 = var46 + var12;
                var52 = var52.bind(var27)(var47);
                var53 = var27.getUint32;
                var47 = var46 + var17;
                var47 = var53.bind(var27)(var47);
                var48 = var48[var22];
                var49 = var49.bind(var23)(var48);
                var48 = var49.getUnicodeStringFromDataView;
                var47 = var38 + var47;
                var49 = var48.bind(var49)(var27, var47, var52);
                var48 = var41.push;
                var47 = {};
                var47.languageCode = var51;
                var47.countryCode = var50;
                var47.text = var49;
                var47 = var48.bind(var41)(var47);
                var46 = var46 + var43;
                var45 = var45 + 1;
                var42 = var46;
                var37 = var45;
                if (var37 < var44) {
                    _fun38261_ip = 729;
                    continue _fun38261
                }
            case 891:
                if (!(var24 !== var44)) {
                    _fun38261_ip = 1022;
                    continue _fun38261
                }
            case 898:
                var46 = {};
                var45 = var41.length;
                var47 = var22 < var45;
                var48 = 0;
                var45 = 0;
                if (!var47) {
                    _fun38261_ip = 982;
                    continue _fun38261
                }
            case 916:
                var47 = var41[var48];
                var50 = var47.languageCode;
                var47 = var41[var48];
                var49 = var47.countryCode;
                var47 = var0.HermesInternal;
                var47 = var47.concat;
                var49 = var47.bind(var16)(var50, var15, var49);
                var47 = var41[var48];
                var47 = var47.text;
                var46[var49] = var47;
                var48 = var48 + 1;
                var47 = var41.length;
                var45 = var48;
                if (var45 < var47) {
                    _fun38261_ip = 916;
                    continue _fun38261
                }
            case 982:
                var47 = _closure1_slot12;
                var47 = var47.bind(var23)(var1, var40, var46);
                var28 = var45;
                var35 = var9;
                var34 = var44;
                var33 = var43;
                var32 = var42;
                var31 = var41;
                var30 = var37;
                var29 = var46;
                _fun38261_ip = 1154;
                continue _fun38261;
            case 1022:
                var46 = _closure1_slot12;
                var45 = var41[var22];
                var45 = var45.text;
                var45 = var46.bind(var23)(var1, var40, var45);
                var35 = var9;
                var34 = var44;
                var33 = var43;
                var32 = var42;
                var31 = var41;
                var30 = var37;
                var29 = var3;
                var28 = var2;
                _fun38261_ip = 1154;
                continue _fun38261;
            case 1068:
                var41 = var27.getUint32;
                var37 = var38 + var17;
                var37 = var41.bind(var27)(var37);
                if (!(!(var37 > var39))) {
                    _fun38261_ip = 1194;
                    continue _fun38261
                }
            case 1087:
                var39 = _closure1_slot12;
                var41 = _closure1_slot11;
                var43 = var26.slice;
                var42 = var38 + var19;
                var38 = var38 + var37;
                var38 = var38 + var18;
                var38 = var43.bind(var26)(var42, var38);
                var38 = var41.bind(var23)(var38);
                var38 = var39.bind(var23)(var1, var40, var38);
                var35 = var37;
                var34 = var8;
                var33 = var7;
                var32 = var6;
                var31 = var5;
                var30 = var4;
                var29 = var3;
                var28 = var2;
            case 1154:
                var21 = var36 + var19;
                var10 = var10 + 1;
                var9 = var35;
                var8 = var34;
                var7 = var33;
                var6 = var32;
                var5 = var31;
                var4 = var30;
                var3 = var29;
                var2 = var28;
                if (var10 < var20) {
                    _fun38261_ip = 348;
                    continue _fun38261
                }
            case 1192:
                return var1;
            case 1194:
                return var1;
            case 1196:
                return var1;
            case 1198:
                return var1;
            case 1200:
                return var1;
            case 1202:
                var2 = var0.Error;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var56 = 'ICC profile: missing signature';
                var57 = var1;
                var0 = new var57[var2](var56, var55);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
            case 1236:
                var0 = global;
                var2 = var0.Error;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var56 = 'ICC profile too short';
                var57 = var1;
                var0 = new var57[var2](var56, var55);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
            case 1272:
                var0 = global;
                var2 = var0.Error;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var56 = 'ICC profile length not matching';
                var57 = var1;
                var0 = new var57[var2](var56, var55);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var _closure1_slot10 = var0;
    var2 = function(arg0) { // Original name: sliceToString, environment: var4
        var0 = global;
        var1 = var0.String;
        var3 = var1.fromCharCode;
        var2 = var3.apply;
        var4 = var0.Uint8Array;
        var0 = var4.prototype;
        var1 = Object.create(var0, {
            constructor: {
                value: var4
            }
        });
        var6 = arg0;
        var7 = var1;
        var0 = new var7[var4](var6, var5);
        var1 = var0 instanceof Object ? var0 : var1;
        var0 = null;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot11 = var2;
    var2 = function(arg0, arg1, arg2) { // Original name: addTag, environment: var4
        _fun38263: for (var _fun38263_ip = 0;;) switch (_fun38263_ip) {
            case 0:
                var3 = arg0;
                var2 = arg1;
                var4 = arg2;
                var7 = _closure1_slot0;
                var0 = _closure1_slot1;
                var6 = 1;
                var5 = var0[var6];
                var0 = undefined;
                var5 = var7.bind(var0)(var5);
                var5 = var5.iccTags;
                var5 = var5[var2];
                if (var5) {
                    _fun38263_ip = 63;
                    continue _fun38263
                }
            case 47:
                var5 = {};
                var5.value = var4;
                var5.description = var4;
                var3[var2] = var5;
                _fun38263_ip = 109;
                continue _fun38263;
            case 63:
                var5 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var6];
                var1 = var5.bind(var0)(var1);
                var1 = var1.iccTags;
                var1 = var1[var2];
                var2 = var1.name;
                var1 = {};
                var1.value = var4;
                var1.description = var4;
                var3[var2] = var1;
            case 109:
                return var0;
        }
    };
    var _closure1_slot12 = var2;
    var2 = global;
    var6 = var2.Object;
    var5 = var6.defineProperty;
    var3 = {};
    var2 = true;
    var3.value = var2;
    var2 = '__esModule';
    var2 = var5.bind(var6)(var1, var2, var3);
    var2 = {};
    var3 = function(arg0, arg1, arg2) { // Original name: read, environment: var4
        _fun38264: for (var _fun38264_ip = 0;;) switch (_fun38264_ip) {
            case 0:
                var3 = arg0;
                var2 = arg1;
                var1 = arg2;
                if (!var1) {
                    _fun38264_ip = 58;
                    continue _fun38264
                }
            case 14:
                var4 = 0;
                var1 = var2[var4];
                var5 = var1.compressionMethod;
                var6 = _closure1_slot0;
                var1 = _closure1_slot1;
                var4 = var1[var4];
                var1 = undefined;
                var4 = var6.bind(var1)(var4);
                var4 = var4.COMPRESSION_METHOD_NONE;
                if (!(var5 === var4)) {
                    _fun38264_ip = 73;
                    continue _fun38264
                }
            case 58:
                var5 = function(arg0, arg1) { // Original name: readIcc, environment: var0
                    _fun38267: for (var _fun38267_ip = 0;;) switch (_fun38267_ip) {
                        case 0:
                            var1 = arg1;
                            var8 = arg0;
                            var5 = var1;
                            var _closure3_slot0 = var1;
                            var2 = undefined;
                            var0 = undefined;
                            var6 = undefined;
                            var7 = undefined;
                        case 23: // try_start_0
                            var1 = var5;
                            var10 = var1.reduce;
                            var3 = function(arg0, arg1) { // Environment: var4
                                var0 = arg1;
                                var1 = var0.length;
                                var0 = arg0;
                                var0 = var0 + var1;
                                return var0;
                            };
                            var9 = 0;
                            var14 = var10.bind(var1)(var3, var9);
                            var3 = global;
                            var10 = var3.Uint8Array;
                            var11 = var10.prototype;
                            var11 = Object.create(var11, {
                                constructor: {
                                    value: var10
                                }
                            });
                            var15 = var11;
                            var10 = new var15[var10](var14, var13);
                            var10 = var10 instanceof Object ? var10 : var11;
                            var0 = var10;
                            var _closure3_slot1 = var10;
                            var _closure3_slot2 = var9;
                            var12 = var8;
                            var9 = var3.Array;
                            var8 = var9.isArray;
                            var8 = var8.bind(var9)(var12);
                            if (var8) {
                                _fun38267_ip = 114;
                                continue _fun38267
                            }
                        case 106:
                            var8 = var12.buffer;
                            _fun38267_ip = 168;
                            continue _fun38267;
                        case 114:
                            var11 = var3.DataView;
                            var10 = var3.Uint8Array;
                            var9 = var10.from;
                            var9 = var9.bind(var10)(var12);
                            var14 = var9.buffer;
                            var10 = var11.prototype;
                            var10 = Object.create(var10, {
                                constructor: {
                                    value: var11
                                }
                            });
                            var15 = var10;
                            var9 = new var15[var11](var14, var13);
                            var9 = var9 instanceof Object ? var9 : var10;
                            var8 = var9.buffer;
                        case 168:
                            var _closure3_slot3 = var8;
                            var6 = function(arg0) { // Original name: _loop, environment: var4
                                _fun38269: for (var _fun38269_ip = 0;;) switch (_fun38269_ip) {
                                    case 0:
                                        var6 = arg0;
                                        var _closure4_slot0 = var6;
                                        var3 = _closure3_slot0;
                                        var2 = var3.find;
                                        var0 = function(arg0) { // Environment: var0
                                            var0 = arg0;
                                            var1 = var0.chunkNumber;
                                            var0 = _closure4_slot0;
                                            var0 = var1 === var0;
                                            return var0;
                                        };
                                        var0 = var2.bind(var3)(var0);
                                        if (var0) {
                                            _fun38269_ip = 93;
                                            continue _fun38269
                                        }
                                    case 34:
                                        var2 = global;
                                        var4 = var2.Error;
                                        var2 = var2.HermesInternal;
                                        var5 = var2.concat;
                                        var3 = 'ICC chunk ';
                                        var2 = ' not found';
                                        var8 = var5.bind(var3)(var6, var2);
                                        var3 = var4.prototype;
                                        var3 = Object.create(var3, {
                                            constructor: {
                                                value: var4
                                            }
                                        });
                                        var9 = var3;
                                        var2 = new var9[var4](var8, var7);
                                        var2 = var2 instanceof Object ? var2 : var3;
                                        throw var2;
                                    case 93:
                                        var4 = _closure3_slot3;
                                        var3 = var4.slice;
                                        var2 = var0.offset;
                                        var5 = var0.offset;
                                        var0 = var0.length;
                                        var0 = var5 + var0;
                                        var8 = var3.bind(var4)(var2, var0);
                                        var0 = global;
                                        var0 = var0.Uint8Array;
                                        var2 = var0.prototype;
                                        var2 = Object.create(var2, {
                                            constructor: {
                                                value: var0
                                            }
                                        });
                                        var9 = var2;
                                        var0 = new var9[var0](var8, var7);
                                        var0 = var0 instanceof Object ? var0 : var2;
                                        var4 = _closure3_slot1;
                                        var3 = var4.set;
                                        var2 = _closure3_slot2;
                                        var2 = var3.bind(var4)(var0, var2);
                                        var2 = _closure3_slot2;
                                        var0 = var0.length;
                                        var0 = var2 + var0;
                                        _closure3_slot2 = var0;
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var4 = 1;
                            var7 = var4;
                            var1 = var1.length;
                            if (!(var4 <= var1)) {
                                _fun38267_ip = 221;
                                continue _fun38267
                            }
                        case 192:
                            var4 = var6;
                            var1 = var7;
                            var4 = var4.bind(var2)(var1);
                            var4 = var1 + 1;
                            var7 = var4;
                            var1 = var5;
                            var1 = var1.length;
                            if (var4 <= var1) {
                                _fun38267_ip = 192;
                                continue _fun38267
                            }
                        case 221:
                            var1 = _closure1_slot10;
                            var4 = var3.DataView;
                            var14 = var0.buffer;
                            var3 = var4.prototype;
                            var3 = Object.create(var3, {
                                constructor: {
                                    value: var4
                                }
                            });
                            var15 = var3;
                            var0 = new var15[var4](var14, var13);
                            var0 = var0 instanceof Object ? var0 : var3;
                            var0 = var1.bind(var2)(var0);
                        case 265: // try_end0
                            return var0;
                        case 267: // catch_target0
                            CatchBlockStart(arg_register = 0);
                            var0 = {};
                            return var0;
                    }
                };
                var4 = undefined;
                var4 = var5.bind(var4)(var3, var2);
                return var4;
            case 73:
                var0 = function(arg0, arg1) { // Original name: readCompressedIcc, environment: var0
                    _fun38265: for (var _fun38265_ip = 0;;) switch (_fun38265_ip) {
                        case 0:
                            var2 = arg1;
                            var1 = 0;
                            var0 = var2[var1];
                            var4 = var0.compressionMethod;
                            var6 = _closure1_slot0;
                            var3 = _closure1_slot1;
                            var3 = var3[var1];
                            var5 = undefined;
                            var3 = var6.bind(var5)(var3);
                            var3 = var3.COMPRESSION_METHOD_DEFLATE;
                            if (!(var4 !== var3)) {
                                _fun38265_ip = 51;
                                continue _fun38265
                            }
                        case 47:
                            var3 = {};
                            return var3;
                        case 51:
                            var3 = global;
                            var6 = var3.DataView;
                            var3 = arg0;
                            var8 = var3.buffer;
                            var7 = var8.slice;
                            var3 = var2[var1];
                            var4 = var3.offset;
                            var3 = var2[var1];
                            var9 = var3.offset;
                            var3 = var2[var1];
                            var3 = var3.length;
                            var3 = var9 + var3;
                            var13 = var7.bind(var8)(var4, var3);
                            var4 = var6.prototype;
                            var4 = Object.create(var4, {
                                constructor: {
                                    value: var6
                                }
                            });
                            var14 = var4;
                            var3 = new var14[var6](var13, var12);
                            var6 = var3 instanceof Object ? var3 : var4;
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot1;
                            var3 = var3[var1];
                            var5 = var4.bind(var5)(var3);
                            var4 = var5.decompress;
                            var1 = var2[var1];
                            var12 = var1.compressionMethod;
                            var11 = 'utf-8';
                            var10 = 'dataview';
                            var14 = var5;
                            var13 = var6;
                            var2 = var14[var4](var13, var12, var11, var10, var9);
                            var1 = var2.then;
                            var0 = _closure1_slot10;
                            var2 = var1.bind(var2)(var0);
                            var1 = var2.catch;
                            var0 = function() { // Environment: var0
                                var0 = {};
                                return var0;
                            };
                            var0 = var1.bind(var2)(var0);
                            return var0;
                    }
                };
                var0 = var0.bind(var1)(var3, var2);
                return var0;
        }
    };
    var2.read = var3;
    var3 = 84;
    var _closure1_slot2 = var3;
    var3 = 'acsp';
    var _closure1_slot3 = var3;
    var3 = 'desc';
    var _closure1_slot4 = var3;
    var3 = 'mluc';
    var _closure1_slot5 = var3;
    var3 = 'text';
    var _closure1_slot6 = var3;
    var3 = 'sig ';
    var _closure1_slot7 = var3;
    var3 = 12;
    var _closure1_slot8 = var3;
    var1.default = var2;
    var1.parseTags = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4129, 4171]);