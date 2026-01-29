// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = require;
    var _closure1_slot0 = var2;
    var2 = metroImportDefault;
    var _closure1_slot1 = var2;
    var2 = dependencyMap;
    var _closure1_slot2 = var2;
    var2 = global;
    var5 = var2.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var2 = true;
    var3.value = var2;
    var2 = '__esModule';
    var2 = var4.bind(var5)(var1, var2, var3);
    var2 = 0;
    var _closure1_slot5 = var2;
    var _closure1_slot6 = var2;
    var0 = function(arg0, arg1, arg2) { // Original name: v1, environment: var0
        _fun6409: for (var _fun6409_ip = 0;;) switch (_fun6409_ip) {
            case 0:
                var11 = arg0;
                var0 = arg1;
                var1 = arg2;
                var2 = var0;
                if (!var0) {
                    _fun6409_ip = 18;
                    continue _fun6409
                }
            case 15:
                var2 = var1;
            case 18:
                if (var2) {
                    _fun6409_ip = 23;
                    continue _fun6409
                }
            case 21:
                var2 = 0;
            case 23:
                var3 = var0;
                if (var0) {
                    _fun6409_ip = 60;
                    continue _fun6409
                }
            case 29:
                var1 = global;
                var5 = var1.Array;
                var1 = var5.prototype;
                var4 = Object.create(var1, {
                    constructor: {
                        value: var5
                    }
                });
                var18 = 16;
                var19 = var4;
                var1 = new var19[var5](var18, var17);
                var3 = var1 instanceof Object ? var1 : var4;
            case 60:
                if (var11) {
                    _fun6409_ip = 65;
                    continue _fun6409
                }
            case 63:
                var11 = {};
            case 65:
                var9 = var11.node;
                if (var9) {
                    _fun6409_ip = 81;
                    continue _fun6409
                }
            case 74:
                var9 = _closure1_slot3;
            case 81:
                var1 = var11.clockseq;
                var4 = undefined;
                if (!(var4 === var1)) {
                    _fun6409_ip = 102;
                    continue _fun6409
                }
            case 93:
                var6 = _closure1_slot4;
                _fun6409_ip = 108;
                continue _fun6409;
            case 102:
                var6 = var11.clockseq;
            case 108:
                var1 = null;
                if (!(var1 != var9)) {
                    _fun6409_ip = 127;
                    continue _fun6409
                }
            case 114:
                var7 = var9;
                var13 = var6;
                if (!(var1 == var13)) {
                    _fun6409_ip = 319;
                    continue _fun6409
                }
            case 127:
                var8 = var11.random;
                if (var8) {
                    _fun6409_ip = 171;
                    continue _fun6409
                }
            case 136:
                var5 = var11.rng;
                if (var5) {
                    _fun6409_ip = 167;
                    continue _fun6409
                }
            case 145:
                var12 = _closure1_slot1;
                var14 = _closure1_slot2;
                var10 = 0;
                var10 = var14[var10];
                var5 = var12.bind(var4)(var10);
            case 167:
                var8 = var5.bind(var4)();
            case 171:
                var5 = var9;
                if (!(var1 == var9)) {
                    _fun6409_ip = 261;
                    continue _fun6409
                }
            case 178:
                var9 = 0;
                var9 = var8[var9];
                var10 = 1;
                var12 = var10 | var9;
                var9 = new Array(6);
                var9[0] = var12;
                var10 = var8[var10];
                var9[1] = var10;
                var10 = 2;
                var10 = var8[var10];
                var9[2] = var10;
                var10 = 3;
                var10 = var8[var10];
                var9[3] = var10;
                var10 = 4;
                var10 = var8[var10];
                var9[4] = var10;
                var10 = 5;
                var10 = var8[var10];
                var9[5] = var10;
                var _closure1_slot3 = var9;
                var5 = var9;
            case 261:
                var7 = var5;
                var13 = var6;
                if (!(var1 == var6)) {
                    _fun6409_ip = 319;
                    continue _fun6409
                }
            case 271:
                var1 = 6;
                var6 = var8[var1];
                var1 = 8;
                var6 = var6 << var1;
                var1 = 7;
                var1 = var8[var1];
                var6 = var6 | var1;
                var1 = 16383;
                var1 = var1 & var6;
                var _closure1_slot4 = var1;
                var7 = var5;
                var13 = var1;
            case 319:
                var1 = var11.msecs;
                if (!(var4 === var1)) {
                    _fun6409_ip = 348;
                    continue _fun6409
                }
            case 329:
                var1 = global;
                var5 = var1.Date;
                var1 = var5.now;
                var10 = var1.bind(var5)();
                _fun6409_ip = 354;
                continue _fun6409;
            case 348:
                var10 = var11.msecs;
            case 354:
                var1 = var11.nsecs;
                if (!(var4 === var1)) {
                    _fun6409_ip = 380;
                    continue _fun6409
                }
            case 364:
                var5 = _closure1_slot6;
                var1 = 1;
                var8 = var5 + var1;
                _fun6409_ip = 386;
                continue _fun6409;
            case 380:
                var8 = var11.nsecs;
            case 386:
                var5 = _closure1_slot5;
                var6 = var10 - var5;
                var5 = _closure1_slot6;
                var5 = var8 - var5;
                var14 = 10000;
                var5 = var5 / var14;
                var5 = var6 + var5;
                var6 = 0;
                var5 = var5 < var6;
                var12 = var5;
                if (!var5) {
                    _fun6409_ip = 441;
                    continue _fun6409
                }
            case 431:
                var9 = var11.clockseq;
                var12 = var4 === var9;
            case 441:
                var9 = var13;
                if (!var12) {
                    _fun6409_ip = 464;
                    continue _fun6409
                }
            case 447:
                var12 = 1;
                var13 = var13 + var12;
                var12 = 16383;
                var9 = var13 & var12;
            case 464:
                if (var5) {
                    _fun6409_ip = 475;
                    continue _fun6409
                }
            case 467:
                var12 = _closure1_slot5;
                var5 = var10 > var12;
            case 475:
                if (!var5) {
                    _fun6409_ip = 488;
                    continue _fun6409
                }
            case 478:
                var11 = var11.nsecs;
                var5 = var4 === var11;
            case 488:
                if (!var5) {
                    _fun6409_ip = 493;
                    continue _fun6409
                }
            case 491:
                var8 = 0;
            case 493:
                if (!(!(var8 >= var14))) {
                    _fun6409_ip = 820;
                    continue _fun6409
                }
            case 500:
                _closure1_slot5 = var10;
                _closure1_slot6 = var8;
                _closure1_slot4 = var9;
                var5 = 12219292800000.0;
                var15 = var10 + var5;
                var13 = 268435455;
                var5 = var13 & var15;
                var5 = var14 * var5;
                var5 = var5 + var8;
                var10 = 4294967296.0;
                var16 = var5 % var10;
                var5 = parseFloat(var2);
                var12 = 24;
                var8 = var16 >>> var12;
                var2 = 255;
                var8 = var8 & var2;
                var3[var5] = var8;
                var5 = var5 + 1;
                var5 = parseFloat(var5);
                var11 = 16;
                var8 = var16 >>> var11;
                var8 = var8 & var2;
                var3[var5] = var8;
                var5 = var5 + 1;
                var5 = parseFloat(var5);
                var8 = 8;
                var17 = var16 >>> var8;
                var17 = var17 & var2;
                var3[var5] = var17;
                var5 = var5 + 1;
                var5 = parseFloat(var5);
                var16 = var2 & var16;
                var3[var5] = var16;
                var10 = var15 / var10;
                var10 = var10 * var14;
                var10 = var10 & var13;
                var5 = var5 + 1;
                var5 = parseFloat(var5);
                var13 = var10 >>> var8;
                var13 = var13 & var2;
                var3[var5] = var13;
                var5 = var5 + 1;
                var5 = parseFloat(var5);
                var13 = var2 & var10;
                var3[var5] = var13;
                var5 = var5 + 1;
                var5 = parseFloat(var5);
                var13 = var10 >>> var12;
                var12 = 15;
                var12 = var13 & var12;
                var12 = var12 | var11;
                var3[var5] = var12;
                var5 = var5 + 1;
                var5 = parseFloat(var5);
                var10 = var10 >>> var11;
                var10 = var10 & var2;
                var3[var5] = var10;
                var5 = var5 + 1;
                var5 = parseFloat(var5);
                var10 = var9 >>> var8;
                var8 = 128;
                var8 = var10 | var8;
                var3[var5] = var8;
                var5 = var5 + 1;
                var8 = parseFloat(var5);
                var5 = var8 + 1;
                var2 = var2 & var9;
                var3[var8] = var2;
                var2 = 6;
                var6 = 0;
            case 765:
                var9 = var5 + var6;
                var8 = var7[var6];
                var3[var9] = var8;
                var6 = var6 + 1;
                if (var6 < var2) {
                    _fun6409_ip = 765;
                    continue _fun6409
                }
            case 784:
                if (var0) {
                    _fun6409_ip = 818;
                    continue _fun6409
                }
            case 787:
                var2 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 1;
                var1 = var5[var1];
                var2 = var2.bind(var4)(var1);
                var1 = var2.unsafeStringify;
                var0 = var1.bind(var2)(var3);
            case 818:
                return var0;
            case 820:
                var0 = global;
                var2 = var0.Error;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var18 = "uuid.v1(): Can't create more than 10M uuids/sec";
                var19 = var1;
                var0 = new var19[var2](var18, var17);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var1.default = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [493, 494]);