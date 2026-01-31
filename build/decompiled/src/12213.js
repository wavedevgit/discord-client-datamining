// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var0 = require;
    var _closure1_slot0 = var0;
    var0 = dependencyMap;
    var _closure1_slot1 = var0;
    var2 = function(arg0, arg1, arg2) { // Original name: TDigest, environment: var1
        _fun93708: for (var _fun93708_ip = 0;;) switch (_fun93708_ip) {
            case 0:
                var0 = arg0;
                var4 = arg1;
                var3 = arg2;
                var2 = this;
                var1 = false;
                var1 = var1 === var0;
                var2.discrete = var1;
                if (var0) {
                    _fun93708_ip = 36;
                    continue _fun93708
                }
            case 26:
                var0 = 0.01;
            case 36:
                var2.delta = var0;
                var1 = 25;
                var0 = undefined;
                if (!(var0 !== var4)) {
                    _fun93708_ip = 54;
                    continue _fun93708
                }
            case 51:
                var1 = var4;
            case 54:
                var2.K = var1;
                var1 = 1.1;
                if (!(var0 !== var3)) {
                    _fun93708_ip = 77;
                    continue _fun93708
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
    var0 = function(arg0, arg1) { // Original name: compare_centroid_means, environment: var1
        _fun93709: for (var _fun93709_ip = 0;;) switch (_fun93709_ip) {
            case 0:
                var2 = arg0;
                var1 = arg1;
                var3 = var2.mean;
                var0 = var1.mean;
                var3 = var3 > var0;
                var0 = 1;
                if (var3) {
                    _fun93709_ip = 58;
                    continue _fun93709
                }
            case 28:
                var2 = var2.mean;
                var1 = var1.mean;
                var2 = var2 < var1;
                var1 = 0;
                if (!var2) {
                    _fun93709_ip = 55;
                    continue _fun93709
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
    var0 = function(arg0, arg1) { // Original name: compare_centroid_mean_cumns, environment: var1
        var0 = arg0;
        var1 = var0.mean_cumn;
        var0 = arg1;
        var0 = var0.mean_cumn;
        var0 = var1 - var0;
        return var0;
    };
    var _closure1_slot4 = var0;
    var0 = function(arg0) { // Original name: Digest, environment: var1
        _fun93711: for (var _fun93711_ip = 0;;) switch (_fun93711_ip) {
            case 0:
                var4 = arg0;
                var1 = this;
                var0 = var4;
                if (var0) {
                    _fun93711_ip = 13;
                    continue _fun93711
                }
            case 11:
                var0 = {};
            case 13:
                var1.config = var0;
                var0 = var1.config;
                var0 = var0.mode;
                if (var0) {
                    _fun93711_ip = 36;
                    continue _fun93711
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
                    _fun93711_ip = 78;
                    continue _fun93711
                }
            case 72:
                var0 = var4.delta;
            case 78:
                var0 = var2.bind(var3)(var1, var0);
                var0 = var1.config;
                var0 = var0.ratio;
                if (var0) {
                    _fun93711_ip = 108;
                    continue _fun93711
                }
            case 98:
                var0 = 0.9;
            case 108:
                var1.digest_ratio = var0;
                var0 = var1.config;
                var0 = var0.thresh;
                if (var0) {
                    _fun93711_ip = 136;
                    continue _fun93711
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
        _fun93714: for (var _fun93714_ip = 0;;) switch (_fun93714_ip) {
            case 0:
                var2 = this;
                var0 = new Array(0);
                var _closure2_slot0 = var0;
                var3 = arg0;
                if (var3) {
                    _fun93714_ip = 44;
                    continue _fun93714
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
                _fun93714_ip = 81;
                continue _fun93714;
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
        _fun93717: for (var _fun93717_ip = 0;;) switch (_fun93717_ip) {
            case 0:
                var3 = this;
                var0 = var3.discrete;
                var1 = 'approximating ';
                if (!var0) {
                    _fun93717_ip = 23;
                    continue _fun93717
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
        _fun93718: for (var _fun93718_ip = 0;;) switch (_fun93718_ip) {
            case 0:
                var1 = arg0;
                var4 = arg1;
                var3 = this;
                if (var4) {
                    _fun93718_ip = 14;
                    continue _fun93718
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
                    _fun93718_ip = 49;
                    continue _fun93718
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
                    _fun93718_ip = 91;
                    continue _fun93718
                }
            case 63:
                var5 = var3._digest;
                var0 = var2[var1];
                var0 = var5.bind(var3)(var0, var4);
                var1 = var1 + 1;
                var0 = var2.length;
                if (var1 < var0) {
                    _fun93718_ip = 63;
                    continue _fun93718
                }
            case 91:
                var0 = undefined;
                return var0;
        }
    };
    var4.push = var3;
    var4 = var2.prototype;
    var3 = function(arg0) { // Environment: var1
        _fun93719: for (var _fun93719_ip = 0;;) switch (_fun93719_ip) {
            case 0:
                var1 = arg0;
                var3 = this;
                var0 = global;
                var2 = var0.Array;
                var0 = var2.isArray;
                var0 = var0.bind(var2)(var1);
                var2 = var1;
                if (var0) {
                    _fun93719_ip = 40;
                    continue _fun93719
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
                    _fun93719_ip = 98;
                    continue _fun93719
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
                    _fun93719_ip = 54;
                    continue _fun93719
                }
            case 98:
                var0 = undefined;
                return var0;
        }
    };
    var4.push_centroid = var3;
    var4 = var2.prototype;
    var3 = function(arg0) { // Environment: var1
        _fun93720: for (var _fun93720_ip = 0;;) switch (_fun93720_ip) {
            case 0:
                var1 = this;
                var3 = var1.n;
                var2 = var1.last_cumulate;
                if (!(var3 !== var2)) {
                    _fun93720_ip = 107;
                    continue _fun93720
                }
            case 20:
                var2 = arg0;
                if (var2) {
                    _fun93720_ip = 61;
                    continue _fun93720
                }
            case 26:
                var2 = var1.CX;
                if (!var2) {
                    _fun93720_ip = 61;
                    continue _fun93720
                }
            case 35:
                var3 = var1.CX;
                var4 = var1.n;
                var2 = var1.last_cumulate;
                var2 = var4 / var2;
                if (!(!(var3 > var2))) {
                    _fun93720_ip = 107;
                    continue _fun93720
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
        _fun93722: for (var _fun93722_ip = 0;;) switch (_fun93722_ip) {
            case 0:
                var7 = arg0;
                var1 = this;
                var0 = var1.size;
                var2 = var0.bind(var1)();
                var0 = 0;
                if (!(var0 !== var2)) {
                    _fun93722_ip = 188;
                    continue _fun93722
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
                    _fun93722_ip = 73;
                    continue _fun93722
                }
            case 62:
                var0 = var2.data;
                var0 = var0.bind(var2)();
                _fun93722_ip = 83;
                continue _fun93722;
            case 73:
                var3 = var2.prev;
                var0 = var3.bind(var2)();
            case 83:
                var3 = var0.mean;
                if (!(var3 !== var7)) {
                    _fun93722_ip = 186;
                    continue _fun93722
                }
            case 93:
                var1 = var1.discrete;
                if (var1) {
                    _fun93722_ip = 186;
                    continue _fun93722
                }
            case 102:
                var1 = var2.prev;
                var2 = var1.bind(var2)();
                var1 = var0;
                if (!var2) {
                    _fun93722_ip = 184;
                    continue _fun93722
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
                    _fun93722_ip = 184;
                    continue _fun93722
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
        _fun93724: for (var _fun93724_ip = 0;;) switch (_fun93724_ip) {
            case 0:
                var3 = arg0;
                var5 = arg1;
                var2 = arg2;
                var1 = this;
                var0 = var3.mean;
                if (!(var5 !== var0)) {
                    _fun93724_ip = 65;
                    continue _fun93724
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
        _fun93725: for (var _fun93725_ip = 0;;) switch (_fun93725_ip) {
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
                    _fun93725_ip = 65;
                    continue _fun93725
                }
            case 52:
                var6 = var2.mean;
                if (!(var6 !== var4)) {
                    _fun93725_ip = 273;
                    continue _fun93725
                }
            case 65:
                if (!(var2 !== var5)) {
                    _fun93725_ip = 256;
                    continue _fun93725
                }
            case 72:
                if (!(var2 !== var0)) {
                    _fun93725_ip = 235;
                    continue _fun93725
                }
            case 79:
                var0 = var1.discrete;
                if (var0) {
                    _fun93725_ip = 214;
                    continue _fun93725
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
                    _fun93725_ip = 199;
                    continue _fun93725
                }
            case 178:
                var5 = var1._new_centroid;
                var0 = var2.cumn;
                var0 = var5.bind(var1)(var4, var3, var0);
                _fun93725_ip = 286;
                continue _fun93725;
            case 199:
                var0 = var1._addweight;
                var0 = var0.bind(var1)(var2, var4, var3);
                _fun93725_ip = 286;
                continue _fun93725;
            case 214:
                var5 = var1._new_centroid;
                var0 = var2.cumn;
                var0 = var5.bind(var1)(var4, var3, var0);
                _fun93725_ip = 286;
                continue _fun93725;
            case 235:
                var5 = var1._new_centroid;
                var0 = var1.n;
                var0 = var5.bind(var1)(var4, var3, var0);
                _fun93725_ip = 286;
                continue _fun93725;
            case 256:
                var5 = var1._new_centroid;
                var0 = 0;
                var0 = var5.bind(var1)(var4, var3, var0);
                _fun93725_ip = 286;
                continue _fun93725;
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
                    _fun93725_ip = 317;
                    continue _fun93725
                }
            case 311:
                var0 = var1.K;
            case 317:
                if (!var0) {
                    _fun93725_ip = 349;
                    continue _fun93725
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
                    _fun93725_ip = 362;
                    continue _fun93725
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
        _fun93726: for (var _fun93726_ip = 0;;) switch (_fun93726_ip) {
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
                    _fun93726_ip = 66;
                    continue _fun93726
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
        _fun93727: for (var _fun93727_ip = 0;;) switch (_fun93727_ip) {
            case 0:
                var3 = arg0;
                var5 = this;
                var0 = global;
                var2 = var0.Array;
                var1 = var2.isArray;
                var1 = var1.bind(var2)(var3);
                var4 = var3;
                if (var1) {
                    _fun93727_ip = 40;
                    continue _fun93727
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
                    _fun93727_ip = 85;
                    continue _fun93727
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
        _fun93728: for (var _fun93728_ip = 0;;) switch (_fun93728_ip) {
            case 0:
                var7 = arg0;
                var1 = this;
                var0 = var1.size;
                var2 = var0.bind(var1)();
                var0 = 0;
                if (!(var0 === var2)) {
                    _fun93728_ip = 24;
                    continue _fun93728
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
                    _fun93728_ip = 226;
                    continue _fun93728
                }
            case 52:
                var3 = var1.centroids;
                var2 = var3.max;
                var2 = var2.bind(var3)();
                var2 = var2.mean;
                if (!(!(var7 > var2))) {
                    _fun93728_ip = 221;
                    continue _fun93728
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
                    _fun93728_ip = 203;
                    continue _fun93728
                }
            case 124:
                var5 = var2.mean_cumn;
                var4 = var5;
                if (!(var2 !== var3)) {
                    _fun93728_ip = 191;
                    continue _fun93728
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
        _fun93729: for (var _fun93729_ip = 0;;) switch (_fun93729_ip) {
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
                    _fun93729_ip = 95;
                    continue _fun93729
                }
            case 85:
                var2 = var1.mean_cumn;
                if (!(var2 !== var4)) {
                    _fun93729_ip = 104;
                    continue _fun93729
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
        _fun93730: for (var _fun93730_ip = 0;;) switch (_fun93730_ip) {
            case 0:
                var3 = arg0;
                var5 = this;
                var0 = global;
                var2 = var0.Array;
                var1 = var2.isArray;
                var1 = var1.bind(var2)(var3);
                var4 = var3;
                if (var1) {
                    _fun93730_ip = 40;
                    continue _fun93730
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
                    _fun93730_ip = 85;
                    continue _fun93730
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
        _fun93731: for (var _fun93731_ip = 0;;) switch (_fun93731_ip) {
            case 0:
                var0 = this;
                var1 = var0.size;
                var2 = var1.bind(var0)();
                var1 = 0;
                if (!(var1 === var2)) {
                    _fun93731_ip = 21;
                    continue _fun93731
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
                    _fun93731_ip = 213;
                    continue _fun93731
                }
            case 103:
                var3 = null;
                if (!(var3 !== var1)) {
                    _fun93731_ip = 213;
                    continue _fun93731
                }
            case 109:
                if (!(var3 !== var2)) {
                    _fun93731_ip = 213;
                    continue _fun93731
                }
            case 113:
                var0 = var0.discrete;
                if (var0) {
                    _fun93731_ip = 184;
                    continue _fun93731
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
                _fun93731_ip = 211;
                continue _fun93731;
            case 184:
                var3 = var1.cumn;
                if (!(!(var4 <= var3))) {
                    _fun93731_ip = 202;
                    continue _fun93731
                }
            case 194:
                var3 = var2.mean;
                _fun93731_ip = 208;
                continue _fun93731;
            case 202:
                var3 = var1.mean;
            case 208:
                var0 = var3;
            case 211:
                _fun93731_ip = 225;
                continue _fun93731;
            case 213:
                if (var1) {
                    _fun93731_ip = 219;
                    continue _fun93731
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
        _fun93732: for (var _fun93732_ip = 0;;) switch (_fun93732_ip) {
            case 0:
                var1 = this;
                var0 = var1.compressing;
                if (var0) {
                    _fun93732_ip = 155;
                    continue _fun93732
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
                    _fun93732_ip = 136;
                    continue _fun93732
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
                    _fun93732_ip = 58;
                    continue _fun93732
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
        _fun93735: for (var _fun93735_ip = 0;;) switch (_fun93735_ip) {
            case 0:
                var5 = arg0;
                var4 = this;
                var0 = var5.n;
                var1 = 1;
                if (!(var1 === var0)) {
                    _fun93735_ip = 34;
                    continue _fun93735
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
        _fun93736: for (var _fun93736_ip = 0;;) switch (_fun93736_ip) {
            case 0:
                var3 = this;
                var1 = var3.mode;
                var0 = 'auto';
                var1 = var0 !== var1;
                if (var1) {
                    _fun93736_ip = 37;
                    continue _fun93736
                }
            case 18:
                var0 = var3.size;
                var2 = var0.bind(var3)();
                var0 = var3.digest_thresh;
                var1 = var2 < var0;
            case 37:
                var0 = !var1;
                if (var1) {
                    _fun93736_ip = 140;
                    continue _fun93736
                }
            case 43:
                var2 = var3.n_unique;
                var1 = var3.size;
                var1 = var1.bind(var3)();
                var2 = var2 / var1;
                var1 = var3.digest_ratio;
                var1 = var2 > var1;
                if (!var1) {
                    _fun93736_ip = 137;
                    continue _fun93736
                }
            case 75:
                var2 = 'cont';
                var3.mode = var2;
                var2 = false;
                var3.discrete = var2;
                var2 = var3.config;
                var2 = var2.delta;
                if (var2) {
                    _fun93736_ip = 119;
                    continue _fun93736
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [12214]);