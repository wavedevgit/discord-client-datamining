// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var0 = require;
    var _closure1_slot0 = var0;
    var0 = dependencyMap;
    var _closure1_slot1 = var0;
    var2 = function arg0, arg1, arg2() {
        _fun94318: for (var _fun94318_ip = 0;;) switch (_fun94318_ip) {
            case 0:
                var0 = arg0;
                var4 = arg1;
                var3 = arg2;
                var2 = this;
                var1 = false;
                var1 = var1 === var0;
                var2.discrete = var1;
                if (var0) {
                    _fun94318_ip = 36;
                    continue _fun94318
                }
            case 26:
                var0 = 0.01;
            case 36:
                var2.delta = var0;
                var1 = 25;
                var0 = undefined;
                if (!(var0 !== var4)) {
                    _fun94318_ip = 54;
                    continue _fun94318
                }
            case 51:
                var1 = var4;
            case 54:
                var2.K = var1;
                var1 = 1.1;
                if (!(var0 !== var3)) {
                    _fun94318_ip = 77;
                    continue _fun94318
                }
            case 74:
                var1 = var3;
            case 77:
                var2.CX = var1;
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var1 = 0;
                var4 = var4[var1];
                var4 = var5.bind(var0)(var4);
                var5 = var4.RBTree;
                var6 = _closure1_slot3;
                var4 = var5.prototype;
                var4 = Object.create(var4, {
                    constructor: {
                        value: var5
                    }
                });
                var7 = var4;
                var3 = new var7[var5](var6, var5);
                var3 = var3 instanceof Object ? var3 : var4;
                var2.centroids = var3;
                var2.nreset = var1;
                var1 = var2.reset;
                var1 = var1.bind(var2)();
                return var0;
        }
    };
    var _closure1_slot2 = var2;
    var0 = function arg0, arg1() {
        _fun94319: for (var _fun94319_ip = 0;;) switch (_fun94319_ip) {
            case 0:
                var2 = arg0;
                var1 = arg1;
                var3 = var2.mean;
                var0 = var1.mean;
                var3 = var3 > var0;
                var0 = 1;
                if (var3) {
                    _fun94319_ip = 58;
                    continue _fun94319
                }
            case 28:
                var2 = var2.mean;
                var1 = var1.mean;
                var2 = var2 < var1;
                var1 = 0;
                if (!var2) {
                    _fun94319_ip = 55;
                    continue _fun94319
                }
            case 49:
                var1 = -1;
            case 55:
                var0 = var1;
            case 58:
                return var0;
        }
    };
    var _closure1_slot3 = var0;
    var0 = function arg0, arg1() {
        var0 = arg0;
        var1 = var0.mean_cumn;
        var0 = arg1;
        var0 = var0.mean_cumn;
        var0 = var1 - var0;
        return var0;
    };
    var _closure1_slot4 = var0;
    var0 = function arg0() {
        _fun94321: for (var _fun94321_ip = 0;;) switch (_fun94321_ip) {
            case 0:
                var4 = arg0;
                var1 = this;
                var0 = var4;
                if (var0) {
                    _fun94321_ip = 13;
                    continue _fun94321
                }
            case 11:
                var0 = {};
            case 13:
                var1.config = var0;
                var0 = var1.config;
                var0 = var0.mode;
                if (var0) {
                    _fun94321_ip = 36;
                    continue _fun94321
                }
            case 32:
                var0 = 'auto';
            case 36:
                var1.mode = var0;
                var3 = _closure1_slot2;
                var2 = var3.call;
                var5 = var1.mode;
                var0 = 'cont';
                var0 = var0 === var5;
                if (!var0) {
                    _fun94321_ip = 78;
                    continue _fun94321
                }
            case 72:
                var0 = var4.delta;
            case 78:
                var0 = var2.bind(var3)(var1, var0);
                var0 = var1.config;
                var0 = var0.ratio;
                if (var0) {
                    _fun94321_ip = 108;
                    continue _fun94321
                }
            case 98:
                var0 = 0.9;
            case 108:
                var1.digest_ratio = var0;
                var0 = var1.config;
                var0 = var0.thresh;
                if (var0) {
                    _fun94321_ip = 136;
                    continue _fun94321
                }
            case 130:
                var0 = 1000;
            case 136:
                var1.digest_thresh = var0;
                var0 = 0;
                var1.n_unique = var0;
                var0 = undefined;
                return var0;
        }
    };
    var4 = var2.prototype;
    var3 = function() { // Environment: var1
        var1 = this;
        var2 = var1.centroids;
        var0 = var2.clear;
        var0 = var0.bind(var2)();
        var0 = 0;
        var1.n = var0;
        var3 = var1.nreset;
        var2 = 1;
        var2 = var3 + var2;
        var1.nreset = var2;
        var1.last_cumulate = var0;
        var0 = undefined;
        return var0;
    };
    var4.reset = var3;
    var4 = var2.prototype;
    var3 = function() { // Environment: var1
        var0 = this;
        var0 = var0.centroids;
        var0 = var0.size;
        return var0;
    };
    var4.size = var3;
    var4 = var2.prototype;
    var3 = function(arg0) { // Environment: var1
        _fun94324: for (var _fun94324_ip = 0;;) switch (_fun94324_ip) {
            case 0:
                var2 = this;
                var0 = new Array(0);
                var _closure2_slot0 = var0;
                var3 = arg0;
                if (var3) {
                    _fun94324_ip = 44;
                    continue _fun94324
                }
            case 18:
                var5 = var2.centroids;
                var4 = var5.each;
                var3 = function(arg0) { // Environment: var1
                    var3 = arg0;
                    var2 = _closure2_slot0;
                    var1 = var2.push;
                    var0 = {};
                    var4 = var3.mean;
                    var0.mean = var4;
                    var3 = var3.n;
                    var0.n = var3;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var3 = var4.bind(var5)(var3);
                _fun94324_ip = 81;
                continue _fun94324;
            case 44:
                var4 = var2._cumulate;
                var3 = true;
                var3 = var4.bind(var2)(var3);
                var3 = var2.centroids;
                var2 = var3.each;
                var1 = function(arg0) { // Environment: var1
                    var2 = _closure2_slot0;
                    var1 = var2.push;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var1 = var2.bind(var3)(var1);
            case 81:
                return var0;
        }
    };
    var4.toArray = var3;
    var4 = var2.prototype;
    var3 = function() { // Environment: var1
        _fun94327: for (var _fun94327_ip = 0;;) switch (_fun94327_ip) {
            case 0:
                var3 = this;
                var0 = var3.discrete;
                var1 = 'approximating ';
                if (!var0) {
                    _fun94327_ip = 23;
                    continue _fun94327
                }
            case 17:
                var1 = 'exact ';
            case 23:
                var0 = var3.n;
                var2 = var1 + var0;
                var0 = var3.size;
                var1 = var0.bind(var3)();
                var0 = ' samples using ';
                var0 = var2 + var0;
                var1 = var0 + var1;
                var2 = new Array(6);
                var0 = ' centroids';
                var0 = var1 + var0;
                var2[0] = var0;
                var1 = var3.percentile;
                var0 = 0;
                var1 = var1.bind(var3)(var0);
                var0 = 'min = ';
                var0 = var0 + var1;
                var2[1] = var0;
                var1 = var3.percentile;
                var0 = 0.25;
                var1 = var1.bind(var3)(var0);
                var0 = 'Q1  = ';
                var0 = var0 + var1;
                var2[2] = var0;
                var1 = var3.percentile;
                var0 = 0.5;
                var1 = var1.bind(var3)(var0);
                var0 = 'Q2  = ';
                var0 = var0 + var1;
                var2[3] = var0;
                var1 = var3.percentile;
                var0 = 0.75;
                var1 = var1.bind(var3)(var0);
                var0 = 'Q3  = ';
                var0 = var0 + var1;
                var2[4] = var0;
                var1 = var3.percentile;
                var0 = 1;
                var1 = var1.bind(var3)(var0);
                var0 = 'max = ';
                var0 = var0 + var1;
                var2[5] = var0;
                var1 = var2.join;
                var0 = '\n';
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var4.summary = var3;
    var4 = var2.prototype;
    var3 = function(arg0, arg1) { // Environment: var1
        _fun94328: for (var _fun94328_ip = 0;;) switch (_fun94328_ip) {
            case 0:
                var1 = arg0;
                var4 = arg1;
                var3 = this;
                if (var4) {
                    _fun94328_ip = 14;
                    continue _fun94328
                }
            case 11:
                var4 = 1;
            case 14:
                var0 = global;
                var2 = var0.Array;
                var0 = var2.isArray;
                var0 = var0.bind(var2)(var1);
                var2 = var1;
                if (var0) {
                    _fun94328_ip = 49;
                    continue _fun94328
                }
            case 38:
                var0 = new Array(1);
                var0[0] = var1;
                var2 = var0;
            case 49:
                var0 = var2.length;
                var1 = 0;
                var0 = var1 < var0;
                if (!var0) {
                    _fun94328_ip = 91;
                    continue _fun94328
                }
            case 63:
                var5 = var3._digest;
                var0 = var2[var1];
                var0 = var5.bind(var3)(var0, var4);
                var1 = var1 + 1;
                var0 = var2.length;
                if (var1 < var0) {
                    _fun94328_ip = 63;
                    continue _fun94328
                }
            case 91:
                var0 = undefined;
                return var0;
        }
    };
    var4.push = var3;
    var4 = var2.prototype;
    var3 = function(arg0) { // Environment: var1
        _fun94329: for (var _fun94329_ip = 0;;) switch (_fun94329_ip) {
            case 0:
                var1 = arg0;
                var3 = this;
                var0 = global;
                var2 = var0.Array;
                var0 = var2.isArray;
                var0 = var0.bind(var2)(var1);
                var2 = var1;
                if (var0) {
                    _fun94329_ip = 40;
                    continue _fun94329
                }
            case 29:
                var0 = new Array(1);
                var0[0] = var1;
                var2 = var0;
            case 40:
                var0 = var2.length;
                var1 = 0;
                var0 = var1 < var0;
                if (!var0) {
                    _fun94329_ip = 98;
                    continue _fun94329
                }
            case 54:
                var5 = var3._digest;
                var0 = var2[var1];
                var4 = var0.mean;
                var0 = var2[var1];
                var0 = var0.n;
                var0 = var5.bind(var3)(var4, var0);
                var1 = var1 + 1;
                var0 = var2.length;
                if (var1 < var0) {
                    _fun94329_ip = 54;
                    continue _fun94329
                }
            case 98:
                var0 = undefined;
                return var0;
        }
    };
    var4.push_centroid = var3;
    var4 = var2.prototype;
    var3 = function(arg0) { // Environment: var1
        _fun94330: for (var _fun94330_ip = 0;;) switch (_fun94330_ip) {
            case 0:
                var1 = this;
                var3 = var1.n;
                var2 = var1.last_cumulate;
                if (!(var3 !== var2)) {
                    _fun94330_ip = 107;
                    continue _fun94330
                }
            case 20:
                var2 = arg0;
                if (var2) {
                    _fun94330_ip = 61;
                    continue _fun94330
                }
            case 26:
                var2 = var1.CX;
                if (!var2) {
                    _fun94330_ip = 61;
                    continue _fun94330
                }
            case 35:
                var3 = var1.CX;
                var4 = var1.n;
                var2 = var1.last_cumulate;
                var2 = var4 / var2;
                if (!(!(var3 > var2))) {
                    _fun94330_ip = 107;
                    continue _fun94330
                }
            case 61:
                var2 = 0;
                var _closure2_slot0 = var2;
                var4 = var1.centroids;
                var3 = var4.each;
                var2 = function(arg0) { // Environment: var0
                    var2 = arg0;
                    var3 = _closure2_slot0;
                    var4 = var2.n;
                    var0 = 2;
                    var0 = var4 / var0;
                    var0 = var3 + var0;
                    var2.mean_cumn = var0;
                    var3 = _closure2_slot0;
                    var0 = var2.n;
                    var0 = var3 + var0;
                    var2.cumn = var0;
                    _closure2_slot0 = var0;
                    var0 = undefined;
                    return var0;
                };
                var2 = var3.bind(var4)(var2);
                var0 = _closure2_slot0;
                var1.last_cumulate = var0;
                var1.n = var0;
            case 107:
                var0 = undefined;
                return var0;
        }
    };
    var4._cumulate = var3;
    var4 = var2.prototype;
    var3 = function(arg0) { // Environment: var1
        _fun94332: for (var _fun94332_ip = 0;;) switch (_fun94332_ip) {
            case 0:
                var7 = arg0;
                var1 = this;
                var0 = var1.size;
                var2 = var0.bind(var1)();
                var0 = 0;
                if (!(var0 !== var2)) {
                    _fun94332_ip = 188;
                    continue _fun94332
                }
            case 23:
                var3 = var1.centroids;
                var2 = var3.lowerBound;
                var0 = {};
                var0.mean = var7;
                var2 = var2.bind(var3)(var0);
                var0 = var2.data;
                var3 = var0.bind(var2)();
                var0 = null;
                if (!(var0 !== var3)) {
                    _fun94332_ip = 73;
                    continue _fun94332
                }
            case 62:
                var0 = var2.data;
                var0 = var0.bind(var2)();
                _fun94332_ip = 83;
                continue _fun94332;
            case 73:
                var3 = var2.prev;
                var0 = var3.bind(var2)();
            case 83:
                var3 = var0.mean;
                if (!(var3 !== var7)) {
                    _fun94332_ip = 186;
                    continue _fun94332
                }
            case 93:
                var1 = var1.discrete;
                if (var1) {
                    _fun94332_ip = 186;
                    continue _fun94332
                }
            case 102:
                var1 = var2.prev;
                var2 = var1.bind(var2)();
                var1 = var0;
                if (!var2) {
                    _fun94332_ip = 184;
                    continue _fun94332
                }
            case 118:
                var3 = global;
                var6 = var3.Math;
                var5 = var6.abs;
                var4 = var2.mean;
                var4 = var4 - var7;
                var4 = var5.bind(var6)(var4);
                var6 = var3.Math;
                var5 = var6.abs;
                var3 = var0.mean;
                var3 = var3 - var7;
                var3 = var5.bind(var6)(var3);
                var1 = var0;
                if (!(var4 < var3)) {
                    _fun94332_ip = 184;
                    continue _fun94332
                }
            case 181:
                var1 = var2;
            case 184:
                return var1;
            case 186:
                return var0;
            case 188:
                var0 = null;
                return var0;
        }
    };
    var4.find_nearest = var3;
    var4 = var2.prototype;
    var3 = function(arg0, arg1, arg2) { // Environment: var1
        var3 = arg1;
        var2 = this;
        var0 = {};
        var1 = arg0;
        var0.mean = var1;
        var0.n = var3;
        var1 = arg2;
        var0.cumn = var1;
        var4 = var2.centroids;
        var1 = var4.insert;
        var1 = var1.bind(var4)(var0);
        var1 = var2.n;
        var1 = var1 + var3;
        var2.n = var1;
        return var0;
    };
    var4._new_centroid = var3;
    var4 = var2.prototype;
    var3 = function(arg0, arg1, arg2) { // Environment: var1
        _fun94334: for (var _fun94334_ip = 0;;) switch (_fun94334_ip) {
            case 0:
                var3 = arg0;
                var5 = arg1;
                var2 = arg2;
                var1 = this;
                var0 = var3.mean;
                if (!(var5 !== var0)) {
                    _fun94334_ip = 65;
                    continue _fun94334
                }
            case 21:
                var4 = var3.mean;
                var0 = var3.mean;
                var0 = var5 - var0;
                var5 = var2 * var0;
                var0 = var3.n;
                var0 = var0 + var2;
                var0 = var5 / var0;
                var0 = var4 + var0;
                var3.mean = var0;
            case 65:
                var0 = var3.cumn;
                var0 = var0 + var2;
                var3.cumn = var0;
                var4 = var3.mean_cumn;
                var0 = 2;
                var0 = var2 / var0;
                var0 = var4 + var0;
                var3.mean_cumn = var0;
                var0 = var3.n;
                var0 = var0 + var2;
                var3.n = var0;
                var0 = var1.n;
                var0 = var0 + var2;
                var1.n = var0;
                var0 = undefined;
                return var0;
        }
    };
    var4._addweight = var3;
    var4 = var2.prototype;
    var3 = function(arg0, arg1) { // Environment: var1
        _fun94335: for (var _fun94335_ip = 0;;) switch (_fun94335_ip) {
            case 0:
                var4 = arg0;
                var3 = arg1;
                var1 = this;
                var2 = var1.centroids;
                var0 = var2.min;
                var5 = var0.bind(var2)();
                var2 = var1.centroids;
                var0 = var2.max;
                var0 = var0.bind(var2)();
                var2 = var1.find_nearest;
                var2 = var2.bind(var1)(var4);
                if (!var2) {
                    _fun94335_ip = 65;
                    continue _fun94335
                }
            case 52:
                var6 = var2.mean;
                if (!(var6 !== var4)) {
                    _fun94335_ip = 273;
                    continue _fun94335
                }
            case 65:
                if (!(var2 !== var5)) {
                    _fun94335_ip = 256;
                    continue _fun94335
                }
            case 72:
                if (!(var2 !== var0)) {
                    _fun94335_ip = 235;
                    continue _fun94335
                }
            case 79:
                var0 = var1.discrete;
                if (var0) {
                    _fun94335_ip = 214;
                    continue _fun94335
                }
            case 91:
                var5 = var2.mean_cumn;
                var0 = var1.n;
                var8 = var5 / var0;
                var0 = global;
                var6 = var0.Math;
                var5 = var6.floor;
                var7 = var1.n;
                var0 = 4;
                var7 = var0 * var7;
                var0 = var1.delta;
                var0 = var7 * var0;
                var7 = var0 * var8;
                var0 = 1;
                var0 = var0 - var8;
                var0 = var7 * var0;
                var5 = var5.bind(var6)(var0);
                var0 = var2.n;
                var0 = var5 - var0;
                if (!(!(var0 >= var3))) {
                    _fun94335_ip = 199;
                    continue _fun94335
                }
            case 178:
                var5 = var1._new_centroid;
                var0 = var2.cumn;
                var0 = var5.bind(var1)(var4, var3, var0);
                _fun94335_ip = 286;
                continue _fun94335;
            case 199:
                var0 = var1._addweight;
                var0 = var0.bind(var1)(var2, var4, var3);
                _fun94335_ip = 286;
                continue _fun94335;
            case 214:
                var5 = var1._new_centroid;
                var0 = var2.cumn;
                var0 = var5.bind(var1)(var4, var3, var0);
                _fun94335_ip = 286;
                continue _fun94335;
            case 235:
                var5 = var1._new_centroid;
                var0 = var1.n;
                var0 = var5.bind(var1)(var4, var3, var0);
                _fun94335_ip = 286;
                continue _fun94335;
            case 256:
                var5 = var1._new_centroid;
                var0 = 0;
                var0 = var5.bind(var1)(var4, var3, var0);
                _fun94335_ip = 286;
                continue _fun94335;
            case 273:
                var0 = var1._addweight;
                var0 = var0.bind(var1)(var2, var4, var3);
            case 286:
                var2 = var1._cumulate;
                var0 = false;
                var0 = var2.bind(var1)(var0);
                var0 = var1.discrete;
                var0 = !var0;
                if (!var0) {
                    _fun94335_ip = 317;
                    continue _fun94335
                }
            case 311:
                var0 = var1.K;
            case 317:
                if (!var0) {
                    _fun94335_ip = 349;
                    continue _fun94335
                }
            case 320:
                var2 = var1.size;
                var3 = var2.bind(var1)();
                var4 = var1.K;
                var2 = var1.delta;
                var2 = var4 / var2;
                var0 = var3 > var2;
            case 349:
                if (!var0) {
                    _fun94335_ip = 362;
                    continue _fun94335
                }
            case 352:
                var0 = var1.compress;
                var0 = var0.bind(var1)();
            case 362:
                var0 = undefined;
                return var0;
        }
    };
    var4._digest = var3;
    var4 = var2.prototype;
    var3 = function(arg0) { // Environment: var1
        _fun94336: for (var _fun94336_ip = 0;;) switch (_fun94336_ip) {
            case 0:
                var4 = arg0;
                var0 = this;
                var2 = var0.centroids;
                var1 = var2.upperBound;
                var0 = {};
                var0.mean = var4;
                var3 = var1.bind(var2)(var0);
                var0 = var3.prev;
                var1 = var0.bind(var3)();
                var0 = new Array(2);
                var0[0] = var1;
                var2 = var1.mean;
                if (!(var2 !== var4)) {
                    _fun94336_ip = 66;
                    continue _fun94336
                }
            case 57:
                var2 = var3.next;
                var1 = var2.bind(var3)();
            case 66:
                var0[1] = var1;
                return var0;
        }
    };
    var4.bound_mean = var3;
    var4 = var2.prototype;
    var3 = function(arg0) { // Environment: var1
        _fun94337: for (var _fun94337_ip = 0;;) switch (_fun94337_ip) {
            case 0:
                var3 = arg0;
                var5 = this;
                var0 = global;
                var2 = var0.Array;
                var1 = var2.isArray;
                var1 = var1.bind(var2)(var3);
                var4 = var3;
                if (var1) {
                    _fun94337_ip = 40;
                    continue _fun94337
                }
            case 29:
                var1 = new Array(1);
                var1[0] = var3;
                var4 = var1;
            case 40:
                var2 = var4.map;
                var1 = var5._p_rank;
                var2 = var2.bind(var4)(var1, var5);
                var1 = var0.Array;
                var0 = var1.isArray;
                var1 = var0.bind(var1)(var3);
                var0 = var2;
                if (var1) {
                    _fun94337_ip = 85;
                    continue _fun94337
                }
            case 79:
                var1 = 0;
                var0 = var2[var1];
            case 85:
                return var0;
        }
    };
    var4.p_rank = var3;
    var4 = var2.prototype;
    var3 = function(arg0) { // Environment: var1
        _fun94338: for (var _fun94338_ip = 0;;) switch (_fun94338_ip) {
            case 0:
                var7 = arg0;
                var1 = this;
                var0 = var1.size;
                var2 = var0.bind(var1)();
                var0 = 0;
                if (!(var0 === var2)) {
                    _fun94338_ip = 24;
                    continue _fun94338
                }
            case 20:
                var2 = undefined;
                return var2;
            case 24:
                var3 = var1.centroids;
                var2 = var3.min;
                var2 = var2.bind(var3)();
                var2 = var2.mean;
                if (!(!(var7 < var2))) {
                    _fun94338_ip = 226;
                    continue _fun94338
                }
            case 52:
                var3 = var1.centroids;
                var2 = var3.max;
                var2 = var2.bind(var3)();
                var2 = var2.mean;
                if (!(!(var7 > var2))) {
                    _fun94338_ip = 221;
                    continue _fun94338
                }
            case 80:
                var3 = var1._cumulate;
                var2 = true;
                var2 = var3.bind(var1)(var2);
                var2 = var1.bound_mean;
                var4 = var2.bind(var1)(var7);
                var2 = var4[var0];
                var3 = 1;
                var3 = var4[var3];
                var4 = var1.discrete;
                if (var4) {
                    _fun94338_ip = 203;
                    continue _fun94338
                }
            case 124:
                var5 = var2.mean_cumn;
                var4 = var5;
                if (!(var2 !== var3)) {
                    _fun94338_ip = 191;
                    continue _fun94338
                }
            case 137:
                var6 = var2.mean;
                var7 = var7 - var6;
                var8 = var3.mean_cumn;
                var6 = var2.mean_cumn;
                var6 = var8 - var6;
                var6 = var7 * var6;
                var7 = var3.mean;
                var3 = var2.mean;
                var3 = var7 - var3;
                var3 = var6 / var3;
                var4 = var5 + var3;
            case 191:
                var3 = var1.n;
                var3 = var4 / var3;
                return var3;
            case 203:
                var2 = var2.cumn;
                var1 = var1.n;
                var1 = var2 / var1;
                return var1;
            case 221:
                var1 = 1;
                return var1;
            case 226:
                return var0;
        }
    };
    var4._p_rank = var3;
    var4 = var2.prototype;
    var3 = function(arg0) { // Environment: var1
        _fun94339: for (var _fun94339_ip = 0;;) switch (_fun94339_ip) {
            case 0:
                var4 = arg0;
                var1 = this;
                var3 = var1.centroids;
                var2 = _closure1_slot4;
                var3._comparator = var2;
                var5 = var1.centroids;
                var3 = var5.upperBound;
                var2 = {};
                var2.mean_cumn = var4;
                var3 = var3.bind(var5)(var2);
                var1 = var1.centroids;
                var0 = _closure1_slot3;
                var1._comparator = var0;
                var0 = var3.prev;
                var1 = var0.bind(var3)();
                var0 = new Array(2);
                var0[0] = var1;
                if (!var1) {
                    _fun94339_ip = 95;
                    continue _fun94339
                }
            case 85:
                var2 = var1.mean_cumn;
                if (!(var2 !== var4)) {
                    _fun94339_ip = 104;
                    continue _fun94339
                }
            case 95:
                var2 = var3.next;
                var1 = var2.bind(var3)();
            case 104:
                var0[1] = var1;
                return var0;
        }
    };
    var4.bound_mean_cumn = var3;
    var4 = var2.prototype;
    var3 = function(arg0) { // Environment: var1
        _fun94340: for (var _fun94340_ip = 0;;) switch (_fun94340_ip) {
            case 0:
                var3 = arg0;
                var5 = this;
                var0 = global;
                var2 = var0.Array;
                var1 = var2.isArray;
                var1 = var1.bind(var2)(var3);
                var4 = var3;
                if (var1) {
                    _fun94340_ip = 40;
                    continue _fun94340
                }
            case 29:
                var1 = new Array(1);
                var1[0] = var3;
                var4 = var1;
            case 40:
                var2 = var4.map;
                var1 = var5._percentile;
                var2 = var2.bind(var4)(var1, var5);
                var1 = var0.Array;
                var0 = var1.isArray;
                var1 = var0.bind(var1)(var3);
                var0 = var2;
                if (var1) {
                    _fun94340_ip = 85;
                    continue _fun94340
                }
            case 79:
                var1 = 0;
                var0 = var2[var1];
            case 85:
                return var0;
        }
    };
    var4.percentile = var3;
    var4 = var2.prototype;
    var3 = function(arg0) { // Environment: var1
        _fun94341: for (var _fun94341_ip = 0;;) switch (_fun94341_ip) {
            case 0:
                var0 = this;
                var1 = var0.size;
                var2 = var1.bind(var0)();
                var1 = 0;
                if (!(var1 === var2)) {
                    _fun94341_ip = 21;
                    continue _fun94341
                }
            case 17:
                var2 = undefined;
                return var2;
            case 21:
                var3 = var0._cumulate;
                var2 = true;
                var2 = var3.bind(var0)(var2);
                var3 = var0.centroids;
                var2 = var3.min;
                var2 = var2.bind(var3)();
                var3 = var0.centroids;
                var2 = var3.max;
                var2 = var2.bind(var3)();
                var3 = var0.n;
                var2 = arg0;
                var4 = var3 * var2;
                var2 = var0.bound_mean_cumn;
                var3 = var2.bind(var0)(var4);
                var1 = var3[var1];
                var2 = 1;
                var2 = var3[var2];
                if (!(var2 !== var1)) {
                    _fun94341_ip = 213;
                    continue _fun94341
                }
            case 103:
                var3 = null;
                if (!(var3 !== var1)) {
                    _fun94341_ip = 213;
                    continue _fun94341
                }
            case 109:
                if (!(var3 !== var2)) {
                    _fun94341_ip = 213;
                    continue _fun94341
                }
            case 113:
                var0 = var0.discrete;
                if (var0) {
                    _fun94341_ip = 184;
                    continue _fun94341
                }
            case 122:
                var3 = var1.mean;
                var0 = var1.mean_cumn;
                var5 = var4 - var0;
                var6 = var2.mean;
                var0 = var1.mean;
                var0 = var6 - var0;
                var5 = var5 * var0;
                var6 = var2.mean_cumn;
                var0 = var1.mean_cumn;
                var0 = var6 - var0;
                var0 = var5 / var0;
                var0 = var3 + var0;
                _fun94341_ip = 211;
                continue _fun94341;
            case 184:
                var3 = var1.cumn;
                if (!(!(var4 <= var3))) {
                    _fun94341_ip = 202;
                    continue _fun94341
                }
            case 194:
                var3 = var2.mean;
                _fun94341_ip = 208;
                continue _fun94341;
            case 202:
                var3 = var1.mean;
            case 208:
                var0 = var3;
            case 211:
                _fun94341_ip = 225;
                continue _fun94341;
            case 213:
                if (var1) {
                    _fun94341_ip = 219;
                    continue _fun94341
                }
            case 216:
                var1 = var2;
            case 219:
                var0 = var1.mean;
            case 225:
                return var0;
        }
    };
    var4._percentile = var3;
    var4 = var2.prototype;
    var3 = function() { // Environment: var1
        _fun94342: for (var _fun94342_ip = 0;;) switch (_fun94342_ip) {
            case 0:
                var1 = this;
                var0 = var1.compressing;
                if (var0) {
                    _fun94342_ip = 155;
                    continue _fun94342
                }
            case 14:
                var0 = var1.toArray;
                var6 = var0.bind(var1)();
                var0 = var1.reset;
                var0 = var0.bind(var1)();
                var2 = true;
                var1.compressing = var2;
                var0 = var6.length;
                var5 = global;
                var4 = 1;
                var3 = 0;
                if (!(var0 > var3)) {
                    _fun94342_ip = 136;
                    continue _fun94342
                }
            case 58:
                var7 = var1.push_centroid;
                var9 = var5.Math;
                var8 = var9.floor;
                var10 = var5.Math;
                var0 = var10.random;
                var10 = var0.bind(var10)();
                var0 = var6.length;
                var0 = var10 * var0;
                var8 = var8.bind(var9)(var0);
                var0 = var6.splice;
                var0 = var0.bind(var6)(var8, var4);
                var0 = var0[var3];
                var0 = var7.bind(var1)(var0);
                var0 = var6.length;
                if (var0 > var3) {
                    _fun94342_ip = 58;
                    continue _fun94342
                }
            case 136:
                var0 = var1._cumulate;
                var0 = var0.bind(var1)(var2);
                var0 = false;
                var1.compressing = var0;
            case 155:
                var0 = undefined;
                return var0;
        }
    };
    var4.compress = var3;
    var3 = global;
    var5 = var3.Object;
    var4 = var5.create;
    var3 = var2.prototype;
    var3 = var4.bind(var5)(var3);
    var0.prototype = var3;
    var3 = var0.prototype;
    var3.constructor = var0;
    var4 = var0.prototype;
    var3 = function(arg0) { // Environment: var1
        var1 = this;
        var0 = _closure1_slot2;
        var0 = var0.prototype;
        var3 = var0.push;
        var2 = var3.call;
        var0 = arg0;
        var0 = var2.bind(var3)(var1, var0);
        var0 = var1.check_continuous;
        var0 = var0.bind(var1)();
        var0 = undefined;
        return var0;
    };
    var4.push = var3;
    var4 = var0.prototype;
    var3 = function(arg0, arg1, arg2) { // Environment: var1
        var5 = this;
        var1 = var5.n_unique;
        var0 = 1;
        var0 = var1 + var0;
        var5.n_unique = var0;
        var0 = _closure1_slot2;
        var0 = var0.prototype;
        var4 = var0._new_centroid;
        var3 = var4.call;
        var8 = arg0;
        var7 = arg1;
        var6 = arg2;
        var10 = var4;
        var9 = var5;
        var0 = var10[var3](var9, var8, var7, var6, var5);
        var0 = undefined;
        return var0;
    };
    var4._new_centroid = var3;
    var4 = var0.prototype;
    var3 = function(arg0, arg1, arg2) { // Environment: var1
        _fun94345: for (var _fun94345_ip = 0;;) switch (_fun94345_ip) {
            case 0:
                var5 = arg0;
                var4 = this;
                var0 = var5.n;
                var1 = 1;
                if (!(var1 === var0)) {
                    _fun94345_ip = 34;
                    continue _fun94345
                }
            case 18:
                var0 = var4.n_unique;
                var0 = var0 - var1;
                var4.n_unique = var0;
            case 34:
                var0 = _closure1_slot2;
                var0 = var0.prototype;
                var3 = var0._addweight;
                var2 = var3.call;
                var7 = arg1;
                var6 = arg2;
                var10 = var3;
                var9 = var4;
                var8 = var5;
                var0 = var10[var2](var9, var8, var7, var6, var5);
                var0 = undefined;
                return var0;
        }
    };
    var4._addweight = var3;
    var3 = var0.prototype;
    var1 = function() { // Environment: var1
        _fun94346: for (var _fun94346_ip = 0;;) switch (_fun94346_ip) {
            case 0:
                var3 = this;
                var1 = var3.mode;
                var0 = 'auto';
                var1 = var0 !== var1;
                if (var1) {
                    _fun94346_ip = 37;
                    continue _fun94346
                }
            case 18:
                var0 = var3.size;
                var2 = var0.bind(var3)();
                var0 = var3.digest_thresh;
                var1 = var2 < var0;
            case 37:
                var0 = !var1;
                if (var1) {
                    _fun94346_ip = 140;
                    continue _fun94346
                }
            case 43:
                var2 = var3.n_unique;
                var1 = var3.size;
                var1 = var1.bind(var3)();
                var2 = var2 / var1;
                var1 = var3.digest_ratio;
                var1 = var2 > var1;
                if (!var1) {
                    _fun94346_ip = 137;
                    continue _fun94346
                }
            case 75:
                var2 = 'cont';
                var3.mode = var2;
                var2 = false;
                var3.discrete = var2;
                var2 = var3.config;
                var2 = var2.delta;
                if (var2) {
                    _fun94346_ip = 119;
                    continue _fun94346
                }
            case 109:
                var2 = 0.01;
            case 119:
                var3.delta = var2;
                var2 = var3.compress;
                var2 = var2.bind(var3)();
                var1 = true;
            case 137:
                var0 = var1;
            case 140:
                return var0;
        }
    };
    var3.check_continuous = var1;
    var1 = {};
    var1.TDigest = var2;
    var1.Digest = var0;
    var0 = arg4;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [12331]);