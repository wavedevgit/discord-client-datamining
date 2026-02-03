// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = require;
    var _closure1_slot0 = var2;
    var2 = dependencyMap;
    var _closure1_slot1 = var2;
    var3 = function arg0() {
        _fun94773: for (var _fun94773_ip = 0;;) switch (_fun94773_ip) {
            case 0:
                var3 = arg0;
                var5 = this;
                var1 = _closure1_slot3;
                var1 = var5 instanceof var1;
                if (var1) {
                    _fun94773_ip = 49;
                    continue _fun94773
                }
            case 20:
                var1 = _closure1_slot3;
                var2 = var1.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var1
                    }
                });
                var20 = var2;
                var19 = var3;
                var1 = new var20[var1](var19, var18);
                var1 = var1 instanceof Object ? var1 : var2;
                return var1;
            case 49:
                var6 = _closure1_slot0;
                var1 = _closure1_slot1;
                var2 = 0;
                var1 = var1[var2];
                var4 = undefined;
                var8 = var6.bind(var4)(var1);
                var7 = var8.assign;
                var1 = '';
                var6 = var3;
                if (var6) {
                    _fun94773_ip = 87;
                    continue _fun94773
                }
            case 85:
                var6 = {};
            case 87:
                var3 = {
                    'level': 4294967295,
                    'method': 8,
                    'chunkSize': 16384,
                    'windowBits': 15,
                    'memLevel': 8,
                    'strategy': 0,
                    'to': ''
                };
                var3 = var7.bind(var8)(var3, var6);
                var5.options = var3;
                var3 = var5.options;
                var6 = var3.raw;
                if (!var6) {
                    _fun94773_ip = 136;
                    continue _fun94773
                }
            case 126:
                var6 = var3.windowBits;
                if (!(!(var6 > var2))) {
                    _fun94773_ip = 195;
                    continue _fun94773
                }
            case 136:
                var6 = var3.gzip;
                if (!var6) {
                    _fun94773_ip = 155;
                    continue _fun94773
                }
            case 145:
                var7 = var3.windowBits;
                var6 = var7 > var2;
            case 155:
                if (!var6) {
                    _fun94773_ip = 171;
                    continue _fun94773
                }
            case 158:
                var8 = var3.windowBits;
                var7 = 16;
                var6 = var8 < var7;
            case 171:
                if (!var6) {
                    _fun94773_ip = 210;
                    continue _fun94773
                }
            case 174:
                var7 = var3.windowBits;
                var6 = 16;
                var6 = var7 + var6;
                var3.windowBits = var6;
                _fun94773_ip = 210;
                continue _fun94773;
            case 195:
                var6 = var3.windowBits;
                var6 = -var6;
                var3.windowBits = var6;
            case 210:
                var5.err = var2;
                var5.msg = var1;
                var1 = false;
                var5.ended = var1;
                var1 = new Array(0);
                var5.chunks = var1;
                var6 = _closure1_slot0;
                var1 = _closure1_slot1;
                var7 = 1;
                var7 = var1[var7];
                var7 = var6.bind(var4)(var7);
                var8 = var7.prototype;
                var8 = Object.create(var8, {
                    constructor: {
                        value: var7
                    }
                });
                var20 = var8;
                var7 = new var20[var7](var19);
                var7 = var7 instanceof Object ? var7 : var8;
                var5.strm = var7;
                var7 = var5.strm;
                var7.avail_out = var2;
                var7 = 2;
                var1 = var1[var7];
                var13 = var6.bind(var4)(var1);
                var12 = var13.deflateInit2;
                var19 = var5.strm;
                var18 = var3.level;
                var17 = var3.method;
                var16 = var3.windowBits;
                var15 = var3.memLevel;
                var14 = var3.strategy;
                var20 = var13;
                var1 = var20[var12](var19, var18, var17, var16, var15, var14, var13);
                if (!(var2 === var1)) {
                    _fun94773_ip = 657;
                    continue _fun94773
                }
            case 366:
                var6 = var3.header;
                if (!var6) {
                    _fun94773_ip = 414;
                    continue _fun94773
                }
            case 374:
                var8 = _closure1_slot0;
                var6 = _closure1_slot1;
                var6 = var6[var7];
                var10 = var8.bind(var4)(var6);
                var9 = var10.deflateSetHeader;
                var8 = var5.strm;
                var6 = var3.header;
                var6 = var9.bind(var10)(var8, var6);
            case 414:
                var6 = var3.dictionary;
                if (!var6) {
                    _fun94773_ip = 601;
                    continue _fun94773
                }
            case 426:
                var6 = var3.dictionary;
                var8 = 'string';
                var6 = typeof var6;
                if (!(var8 !== var6)) {
                    _fun94773_ip = 515;
                    continue _fun94773
                }
            case 443:
                var9 = _closure1_slot2;
                var8 = var9.call;
                var6 = var3.dictionary;
                var8 = var8.bind(var9)(var6);
                var6 = '[object ArrayBuffer]';
                if (!(var6 !== var8)) {
                    _fun94773_ip = 479;
                    continue _fun94773
                }
            case 471:
                var8 = var3.dictionary;
                _fun94773_ip = 513;
                continue _fun94773;
            case 479:
                var6 = global;
                var10 = var6.Uint8Array;
                var19 = var3.dictionary;
                var9 = var10.prototype;
                var9 = Object.create(var9, {
                    constructor: {
                        value: var10
                    }
                });
                var20 = var9;
                var6 = new var20[var10](var19, var18);
                var8 = var6 instanceof Object ? var6 : var9;
            case 513:
                _fun94773_ip = 552;
                continue _fun94773;
            case 515:
                var9 = _closure1_slot0;
                var10 = _closure1_slot1;
                var6 = 4;
                var6 = var10[var6];
                var9 = var9.bind(var4)(var6);
                var6 = var9.string2buf;
                var3 = var3.dictionary;
                var8 = var6.bind(var9)(var3);
            case 552:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var7];
                var7 = var6.bind(var4)(var3);
                var6 = var7.deflateSetDictionary;
                var3 = var5.strm;
                var3 = var6.bind(var7)(var3, var8);
                if (!(var2 === var3)) {
                    _fun94773_ip = 603;
                    continue _fun94773
                }
            case 591:
                var2 = true;
                var5._dict_set = var2;
            case 601:
                return var4;
            case 603:
                var2 = global;
                var5 = var2.Error;
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var2 = 3;
                var2 = var7[var2];
                var2 = var6.bind(var4)(var2);
                var19 = var2[var3];
                var3 = var5.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var5
                    }
                });
                var20 = var3;
                var2 = new var20[var5](var19, var18);
                var2 = var2 instanceof Object ? var2 : var3;
                throw var2;
            case 657:
                var2 = global;
                var2 = var2.Error;
                var3 = _closure1_slot0;
                var5 = _closure1_slot1;
                var0 = 3;
                var0 = var5[var0];
                var0 = var3.bind(var4)(var0);
                var19 = var0[var1];
                var1 = var2.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var2
                    }
                });
                var20 = var1;
                var0 = new var20[var2](var19, var18);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var _closure1_slot3 = var3;
    var2 = function arg0, arg1() {
        _fun94774: for (var _fun94774_ip = 0;;) switch (_fun94774_ip) {
            case 0:
                var3 = _closure1_slot3;
                var0 = var3.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var3
                    }
                });
                var6 = arg1;
                var7 = var1;
                var0 = new var7[var3](var6, var5);
                var1 = var0 instanceof Object ? var0 : var1;
                var4 = var1.push;
                var3 = arg0;
                var0 = true;
                var0 = var4.bind(var1)(var3, var0);
                var0 = var1.err;
                if (var0) {
                    _fun94774_ip = 63;
                    continue _fun94774
                }
            case 55:
                var0 = var1.result;
                return var0;
            case 63:
                var0 = var1.msg;
                if (var0) {
                    _fun94774_ip = 104;
                    continue _fun94774
                }
            case 72:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 3;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
                var1 = var1.err;
                var0 = var2[var1];
            case 104:
                throw var0;
        }
    };
    var _closure1_slot4 = var2;
    var4 = global;
    var4 = var4.Object;
    var4 = var4.prototype;
    var4 = var4.toString;
    var _closure1_slot2 = var4;
    var5 = var3.prototype;
    var4 = function(arg0, arg1) { // Environment: var0
        _fun94775: for (var _fun94775_ip = 0;;) switch (_fun94775_ip) {
            case 0:
                var3 = arg0;
                var4 = arg1;
                var1 = this;
                var5 = var1.strm;
                var0 = var1.options;
                var14 = var0.chunkSize;
                var0 = var1.ended;
                if (var0) {
                    _fun94775_ip = 677;
                    continue _fun94775
                }
            case 38:
                var0 = ~var4;
                var0 = ~var0;
                var9 = var4;
                if (!(var9 !== var0)) {
                    _fun94775_ip = 65;
                    continue _fun94775
                }
            case 51:
                var2 = true;
                var0 = 0;
                if (!(var2 === var4)) {
                    _fun94775_ip = 62;
                    continue _fun94775
                }
            case 59:
                var0 = 4;
            case 62:
                var9 = var0;
            case 65:
                var13 = 'string';
                var0 = typeof var3;
                if (!(var13 !== var0)) {
                    _fun94775_ip = 148;
                    continue _fun94775
                }
            case 76:
                var2 = _closure1_slot2;
                var0 = var2.call;
                var2 = var0.bind(var2)(var3);
                var0 = '[object ArrayBuffer]';
                if (!(var0 !== var2)) {
                    _fun94775_ip = 109;
                    continue _fun94775
                }
            case 101:
                var5.input = var3;
                _fun94775_ip = 190;
                continue _fun94775;
            case 109:
                var0 = global;
                var0 = var0.Uint8Array;
                var2 = var0.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var0
                    }
                });
                var24 = var2;
                var23 = var3;
                var0 = new var24[var0](var23, var22);
                var0 = var0 instanceof Object ? var0 : var2;
                var5.input = var0;
                _fun94775_ip = 190;
                continue _fun94775;
            case 148:
                var4 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 4;
                var2 = var2[var0];
                var0 = undefined;
                var2 = var4.bind(var0)(var2);
                var0 = var2.string2buf;
                var0 = var0.bind(var2)(var3);
                var5.input = var0;
            case 190:
                var4 = 0;
                var5.next_in = var4;
                var0 = var5.input;
                var0 = var0.length;
                var5.avail_in = var0;
                var8 = 4;
                var6 = undefined;
                var7 = 2;
                var0 = var7 !== var9;
                var12 = var8 !== var9;
                var11 = 1;
            case 237:
                var2 = var5.avail_out;
                if (!(var4 === var2)) {
                    _fun94775_ip = 311;
                    continue _fun94775
                }
            case 247:
                var10 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var4];
                var2 = var10.bind(var6)(var2);
                var2 = var2.Buf8;
                var10 = var2.prototype;
                var10 = Object.create(var10, {
                    constructor: {
                        value: var2
                    }
                });
                var24 = var10;
                var23 = var14;
                var2 = new var24[var2](var23, var22);
                var2 = var2 instanceof Object ? var2 : var10;
                var5.output = var2;
                var5.next_out = var4;
                var5.avail_out = var14;
            case 311:
                var10 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var10 = var10.bind(var6)(var2);
                var2 = var10.deflate;
                var2 = var2.bind(var10)(var5, var9);
                var10 = var11 !== var2;
                if (!var10) {
                    _fun94775_ip = 354;
                    continue _fun94775
                }
            case 347:
                if (!(var4 === var2)) {
                    _fun94775_ip = 654;
                    continue _fun94775
                }
            case 354:
                var15 = var5.avail_out;
                var15 = var4 !== var15;
                if (!var15) {
                    _fun94775_ip = 395;
                    continue _fun94775
                }
            case 367:
                var16 = var5.avail_in;
                var16 = var4 !== var16;
                if (var16) {
                    _fun94775_ip = 392;
                    continue _fun94775
                }
            case 380:
                var17 = var12;
                if (!var17) {
                    _fun94775_ip = 389;
                    continue _fun94775
                }
            case 386:
                var17 = var0;
            case 389:
                var16 = var17;
            case 392:
                var15 = var16;
            case 395:
                if (var15) {
                    _fun94775_ip = 541;
                    continue _fun94775
                }
            case 401:
                var15 = var1.options;
                var15 = var15.to;
                if (!(var13 !== var15)) {
                    _fun94775_ip = 469;
                    continue _fun94775
                }
            case 415:
                var16 = var1.onData;
                var17 = _closure1_slot0;
                var15 = _closure1_slot1;
                var15 = var15[var4];
                var19 = var17.bind(var6)(var15);
                var18 = var19.shrinkBuf;
                var17 = var5.output;
                var15 = var5.next_out;
                var15 = var18.bind(var19)(var17, var15);
                var15 = var16.bind(var1)(var15);
                _fun94775_ip = 541;
                continue _fun94775;
            case 469:
                var16 = var1.onData;
                var19 = _closure1_slot0;
                var15 = _closure1_slot1;
                var17 = var15[var8];
                var18 = var19.bind(var6)(var17);
                var17 = var18.buf2binstring;
                var15 = var15[var4];
                var21 = var19.bind(var6)(var15);
                var20 = var21.shrinkBuf;
                var19 = var5.output;
                var15 = var5.next_out;
                var15 = var20.bind(var21)(var19, var15);
                var15 = var17.bind(var18)(var15);
                var15 = var16.bind(var1)(var15);
            case 541:
                var15 = var5.avail_in;
                if (!(!(var15 > var4))) {
                    _fun94775_ip = 561;
                    continue _fun94775
                }
            case 551:
                var15 = var5.avail_out;
                if (!(var4 === var15)) {
                    _fun94775_ip = 567;
                    continue _fun94775
                }
            case 561:
                if (var10) {
                    _fun94775_ip = 237;
                    continue _fun94775
                }
            case 567:
                if (!(var8 !== var9)) {
                    _fun94775_ip = 595;
                    continue _fun94775
                }
            case 571:
                if (var0) {
                    _fun94775_ip = 593;
                    continue _fun94775
                }
            case 574:
                var8 = var1.onEnd;
                var8 = var8.bind(var1)(var4);
                var5.avail_out = var4;
                var0 = true;
            case 593:
                _fun94775_ip = 652;
                continue _fun94775;
            case 595:
                var5 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var7];
                var6 = var5.bind(var6)(var3);
                var5 = var6.deflateEnd;
                var3 = var1.strm;
                var3 = var5.bind(var6)(var3);
                var5 = var1.onEnd;
                var5 = var5.bind(var1)(var3);
                var5 = true;
                var1.ended = var5;
                var0 = var4 === var3;
            case 652:
                return var0;
            case 654:
                var0 = var1.onEnd;
                var0 = var0.bind(var1)(var2);
                var0 = true;
                var1.ended = var0;
                var0 = false;
                return var0;
            case 677:
                var0 = false;
                return var0;
        }
    };
    var5.push = var4;
    var5 = var3.prototype;
    var4 = function(arg0) { // Environment: var0
        var0 = this;
        var2 = var0.chunks;
        var1 = var2.push;
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var5.onData = var4;
    var5 = var3.prototype;
    var4 = function(arg0) { // Environment: var0
        _fun94777: for (var _fun94777_ip = 0;;) switch (_fun94777_ip) {
            case 0:
                var0 = arg0;
                var1 = this;
                var3 = 0;
                if (!(var3 === var0)) {
                    _fun94777_ip = 103;
                    continue _fun94777
                }
            case 12:
                var2 = var1.options;
                var4 = var2.to;
                var2 = 'string';
                if (!(var2 !== var4)) {
                    _fun94777_ip = 77;
                    continue _fun94777
                }
            case 30:
                var4 = _closure1_slot0;
                var2 = _closure1_slot1;
                var3 = var2[var3];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.flattenChunks;
                var2 = var1.chunks;
                var2 = var3.bind(var4)(var2);
                var1.result = var2;
                _fun94777_ip = 103;
                continue _fun94777;
            case 77:
                var4 = var1.chunks;
                var3 = var4.join;
                var2 = '';
                var2 = var3.bind(var4)(var2);
                var1.result = var2;
            case 103:
                var2 = new Array(0);
                var1.chunks = var2;
                var1.err = var0;
                var0 = var1.strm;
                var0 = var0.msg;
                var1.msg = var0;
                var0 = undefined;
                return var0;
        }
    };
    var5.onEnd = var4;
    var1.Deflate = var3;
    var1.deflate = var2;
    var2 = function arg0, arg1() {
        _fun94778: for (var _fun94778_ip = 0;;) switch (_fun94778_ip) {
            case 0:
                var3 = arg1;
                if (var3) {
                    _fun94778_ip = 8;
                    continue _fun94778
                }
            case 6:
                var3 = {};
            case 8:
                var0 = true;
                var3.raw = var0;
                var2 = _closure1_slot4;
                var1 = undefined;
                var0 = arg0;
                var0 = var2.bind(var1)(var0, var3);
                return var0;
        }
    };
    var1.deflateRaw = var2;
    var0 = function arg0, arg1() {
        _fun94779: for (var _fun94779_ip = 0;;) switch (_fun94779_ip) {
            case 0:
                var3 = arg1;
                if (var3) {
                    _fun94779_ip = 8;
                    continue _fun94779
                }
            case 6:
                var3 = {};
            case 8:
                var0 = true;
                var3.gzip = var0;
                var2 = _closure1_slot4;
                var1 = undefined;
                var0 = arg0;
                var0 = var2.bind(var1)(var0, var3);
                return var0;
        }
    };
    var1.gzip = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [12414, 12416, 12417, 12418, 12422]);