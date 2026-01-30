// utils/ImageUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = require;
    var9 = metroImportDefault;
    var2 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var8;
    var5 = function(arg0) { // Original name: fit, environment: var1
        _fun16836: for (var _fun16836_ip = 0;;) switch (_fun16836_ip) {
            case 0:
                var1 = arg0;
                var3 = var1.width;
                var13 = var1.height;
                var5 = var1.maxWidth;
                var4 = var1.maxHeight;
                var8 = var1.minWidth;
                var0 = undefined;
                if (!(var8 === var0)) {
                    _fun16836_ip = 39;
                    continue _fun16836
                }
            case 37:
                var8 = 0;
            case 39:
                var6 = var1.minHeight;
                if (!(var6 === var0)) {
                    _fun16836_ip = 51;
                    continue _fun16836
                }
            case 49:
                var6 = 0;
            case 51:
                if (!(var3 === var5)) {
                    _fun16836_ip = 68;
                    continue _fun16836
                }
            case 55:
                var2 = var3;
                var1 = var13;
                if (!(var1 !== var4)) {
                    _fun16836_ip = 246;
                    continue _fun16836
                }
            case 68:
                var7 = var3 > var5;
                var9 = 1;
                var0 = var9;
                if (!var7) {
                    _fun16836_ip = 85;
                    continue _fun16836
                }
            case 81:
                var0 = var5 / var3;
            case 85:
                var7 = global;
                var10 = var7.Math;
                var5 = var10.max;
                var12 = var7.Math;
                var11 = var12.round;
                var3 = var3 * var0;
                var3 = var11.bind(var12)(var3);
                var3 = var5.bind(var10)(var3, var8);
                var10 = var7.Math;
                var5 = var10.max;
                var12 = var7.Math;
                var11 = var12.round;
                var0 = var13 * var0;
                var0 = var11.bind(var12)(var0);
                var0 = var5.bind(var10)(var0, var6);
                var5 = var0 > var4;
                if (!var5) {
                    _fun16836_ip = 172;
                    continue _fun16836
                }
            case 168:
                var9 = var4 / var0;
            case 172:
                var5 = var7.Math;
                var4 = var5.max;
                var11 = var7.Math;
                var10 = var11.round;
                var3 = var3 * var9;
                var3 = var10.bind(var11)(var3);
                var2 = var4.bind(var5)(var3, var8);
                var5 = var7.Math;
                var4 = var5.max;
                var8 = var7.Math;
                var7 = var8.round;
                var0 = var0 * var9;
                var0 = var7.bind(var8)(var0);
                var1 = var4.bind(var5)(var0, var6);
            case 246:
                var0 = {};
                var0.width = var2;
                var0.height = var1;
                return var0;
        }
    };
    var _closure1_slot5 = var5;
    var4 = function(arg0, arg1, arg2) { // Original name: getPalette, environment: var1
        _fun16837: for (var _fun16837_ip = 0;;) switch (_fun16837_ip) {
            case 0:
                var4 = arg0;
                var12 = arg2;
                var0 = global;
                var2 = var0.document;
                var1 = var2.createElement;
                var0 = 'canvas';
                var2 = var1.bind(var2)(var0);
                var1 = var2.getContext;
                var0 = '2d';
                var3 = var1.bind(var2)(var0);
                var0 = null;
                if (!(var0 != var3)) {
                    _fun16837_ip = 352;
                    continue _fun16837
                }
            case 55:
                var5 = var4.width;
                var1 = 128;
                var11 = 0;
                var0 = var1;
                if (!(var11 !== var5)) {
                    _fun16837_ip = 77;
                    continue _fun16837
                }
            case 72:
                var0 = var4.width;
            case 77:
                var2.width = var0;
                var5 = var4.height;
                if (!(var11 !== var5)) {
                    _fun16837_ip = 97;
                    continue _fun16837
                }
            case 92:
                var1 = var4.height;
            case 97:
                var2.height = var1;
                var2 = var3.drawImage;
                var24 = var3;
                var23 = var4;
                var22 = 0;
                var21 = 0;
                var20 = var0;
                var19 = var1;
                var2 = var24[var2](var23, var22, var21, var20, var19, var18);
                var2 = var3.getImageData;
                var24 = var3;
                var23 = 0;
                var21 = var0;
                var20 = var1;
                var2 = var24[var2](var23, var22, var21, var20, var19);
                var10 = var2.data;
                var9 = var0 * var1;
                var4 = new Array(0);
                var8 = 250;
                var7 = 125;
                var6 = 4;
                var5 = 1;
                var2 = 2;
                var1 = 3;
                var3 = undefined;
                var0 = 0;
                if (!(var0 < var9)) {
                    _fun16837_ip = 294;
                    continue _fun16837
                }
            case 189:
                var13 = var6 * var0;
                var14 = var11 + var13;
                var17 = var10[var14];
                var14 = var13 + var5;
                var16 = var10[var14];
                var14 = var13 + var2;
                var15 = var10[var14];
                var13 = var13 + var1;
                var14 = var10[var13];
                var13 = var3 === var14;
                if (var13) {
                    _fun16837_ip = 236;
                    continue _fun16837
                }
            case 232:
                var13 = var14 >= var7;
            case 236:
                if (!var13) {
                    _fun16837_ip = 286;
                    continue _fun16837
                }
            case 239:
                var13 = var17 > var8;
                if (!var13) {
                    _fun16837_ip = 250;
                    continue _fun16837
                }
            case 246:
                var13 = var16 > var8;
            case 250:
                if (!var13) {
                    _fun16837_ip = 257;
                    continue _fun16837
                }
            case 253:
                var13 = var15 > var8;
            case 257:
                if (var13) {
                    _fun16837_ip = 286;
                    continue _fun16837
                }
            case 260:
                var14 = var4.push;
                var13 = new Array(3);
                var13[0] = var17;
                var13[1] = var16;
                var13[2] = var15;
                var13 = var14.bind(var4)(var13);
            case 286:
                var0 = var0 + var12;
                if (var0 < var9) {
                    _fun16837_ip = 189;
                    continue _fun16837
                }
            case 294:
                var2 = _closure1_slot1;
                var0 = _closure1_slot2;
                var0 = var0[var5];
                var2 = var2.bind(var3)(var0);
                var0 = arg1;
                var2 = var2.bind(var3)(var4, var0);
                var3 = 'boolean';
                var0 = typeof var2;
                if (!(var3 !== var0)) {
                    _fun16837_ip = 346;
                    continue _fun16837
                }
            case 334:
                var0 = var2.palette;
                var0 = var0.bind(var2)();
                _fun16837_ip = 350;
                continue _fun16837;
            case 346:
                var0 = _closure1_slot4;
            case 350:
                return var0;
            case 352:
                var0 = _closure1_slot4;
                return var0;
        }
    };
    var _closure1_slot6 = var4;
    var0 = function() { // Original name: _dataUrlToFile, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0, arg1, arg2) { // Environment: var2
            var0 = function*(arg0, arg1, arg2) { // Original name: ?anon_0_, environment: var0
                _fun16840: for (var _fun16840_ip = 0;;) switch (_fun16840_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun16840_ip = 104;
                            continue _fun16840
                        }
                    case 7:
                        var3 = _closure1_slot8;
                        var2 = undefined;
                        var1 = arg0;
                        var2 = var3.bind(var2)(var1);
                        var1 = var2.arrayBuffer;
                        var1 = var1.bind(var2)();
                        SaveGenerator(address = 38);
                    case 36:
                        return var1;
                    case 38:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun16840_ip = 101;
                            continue _fun16840
                        }
                    case 44:
                        var2 = global;
                        var6 = var2.File;
                        var5 = new Array(1);
                        var5[0] = var1;
                        var4 = {};
                        var2 = arg2;
                        var4.type = var2;
                        var2 = var6.prototype;
                        var3 = Object.create(var2, {
                            constructor: {
                                value: var6
                            }
                        });
                        var8 = arg1;
                        var10 = var3;
                        var9 = var5;
                        var7 = var4;
                        var2 = new var10[var6](var9, var8, var7, var6);
                        var2 = var2 instanceof Object ? var2 : var3;
                        return var2;
                    case 101:
                        return var1;
                    case 104:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot7 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot7 = var0;
    var3 = function(arg0) { // Original name: dataUrlToBlob, environment: var1
        _fun16841: for (var _fun16841_ip = 0;;) switch (_fun16841_ip) {
            case 0:
                var2 = arg0;
                var0 = var2.split;
                var1 = ',';
                var0 = var0.bind(var2)(var1);
                var5 = 0;
                var4 = var0[var5];
                var3 = var4.indexOf;
                var0 = 'base64';
                var0 = var3.bind(var4)(var0);
                if (!(!(var0 >= var5))) {
                    _fun16841_ip = 76;
                    continue _fun16841
                }
            case 42:
                var0 = global;
                var4 = var0.btoa;
                var0 = var2.split;
                var3 = var0.bind(var2)(var1);
                var0 = 1;
                var3 = var3[var0];
                var0 = undefined;
                var4 = var4.bind(var0)(var3);
                _fun16841_ip = 108;
                continue _fun16841;
            case 76:
                var0 = global;
                var6 = var0.atob;
                var0 = var2.split;
                var3 = var0.bind(var2)(var1);
                var0 = 1;
                var3 = var3[var0];
                var0 = undefined;
                var4 = var6.bind(var0)(var3);
            case 108:
                var0 = var2.split;
                var0 = var0.bind(var2)(var1);
                var2 = var0[var5];
                var1 = var2.split;
                var0 = ':';
                var1 = var1.bind(var2)(var0);
                var0 = 1;
                var2 = var1[var0];
                var1 = var2.split;
                var0 = ';';
                var0 = var1.bind(var2)(var0);
                var1 = var0[var5];
                var2 = global;
                var6 = var2.Uint8Array;
                var8 = var4.length;
                var3 = var6.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var6
                    }
                });
                var9 = var3;
                var0 = new var9[var6](var8, var7);
                var0 = var0 instanceof Object ? var0 : var3;
                var3 = var4.length;
                var3 = var5 < var3;
                var5 = 0;
                if (!var3) {
                    _fun16841_ip = 235;
                    continue _fun16841
                }
            case 208:
                var3 = var4.charCodeAt;
                var3 = var3.bind(var4)(var5);
                var0[var5] = var3;
                var5 = var5 + 1;
                var3 = var4.length;
                if (var5 < var3) {
                    _fun16841_ip = 208;
                    continue _fun16841
                }
            case 235:
                var3 = var2.Blob;
                var2 = new Array(1);
                var2[0] = var0;
                var0 = {};
                var0.type = var1;
                var1 = var3.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var3
                    }
                });
                var9 = var1;
                var8 = var2;
                var7 = var0;
                var0 = new var9[var3](var8, var7, var6);
                var0 = var0 instanceof Object ? var0 : var1;
                return var0;
        }
    };
    var _closure1_slot8 = var3;
    var0 = function() { // Original name: _isPNGAnimated, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun16844: for (var _fun16844_ip = 0;;) switch (_fun16844_ip) {
                    case 0:
                        StartGenerator();
                        var2 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun16844_ip = 183;
                            continue _fun16844
                        }
                    case 13:
                        var5 = var2.type;
                        var1 = null;
                        var1 = var1 == var5;
                        var3 = undefined;
                        if (var1) {
                            _fun16844_ip = 49;
                            continue _fun16844
                        }
                    case 29:
                        var4 = var5.split;
                        var1 = ';';
                        var4 = var4.bind(var5)(var1);
                        var1 = 0;
                        var3 = var4[var1];
                    case 49:
                        var1 = 'image/png';
                        if (!(var1 === var3)) {
                            _fun16844_ip = 147;
                            continue _fun16844
                        }
                    case 59:
                        var1 = var2.text;
                        var1 = var1.bind(var2)();
                        SaveGenerator(address = 72);
                    case 70:
                        return var1;
                    case 72:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun16844_ip = 144;
                            continue _fun16844
                        }
                    case 78:
                        var3 = var1.indexOf;
                        var2 = 'IDAT';
                        var5 = var3.bind(var1)(var2);
                        var4 = 0;
                        var2 = var5 > var4;
                        if (!var2) {
                            _fun16844_ip = 141;
                            continue _fun16844
                        }
                    case 104:
                        var3 = var1.substring;
                        var5 = var3.bind(var1)(var4, var5);
                        var4 = var5.indexOf;
                        var3 = 'acTL';
                        var4 = var4.bind(var5)(var3);
                        var3 = -1;
                        var2 = var3 !== var4;
                    case 141:
                        return var2;
                    case 144:
                        return var1;
                    case 147:
                        var1 = global;
                        var3 = var1.Error;
                        var1 = var3.prototype;
                        var2 = Object.create(var1, {
                            constructor: {
                                value: var3
                            }
                        });
                        var7 = 'File is not a PNG';
                        var8 = var2;
                        var1 = new var8[var3](var7, var6);
                        var1 = var1 instanceof Object ? var1 : var2;
                        throw var1;
                    case 183:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot9 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot9 = var0;
    var0 = global;
    var11 = var0.Object;
    var10 = var11.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var10.bind(var11)(var2, var0, var6);
    var0 = 0;
    var6 = var8[var0];
    var0 = undefined;
    var6 = var9.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var6 = new Array(1);
    var10 = [0, 0, 0];
    var6[0] = var10;
    var _closure1_slot4 = var6;
    var6 = 3;
    var6 = var8[var6];
    var10 = var9.bind(var0)(var6);
    var9 = var10.memoize;
    var6 = function(arg0) { // Environment: var1
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = global;
        var2 = var1.Promise;
        var1 = var2.prototype;
        var1 = Object.create(var1, {
            constructor: {
                value: var2
            }
        });
        var3 = function(arg0, arg1) { // Environment: var0
            var1 = arg0;
            var _closure3_slot0 = var1;
            var1 = arg1;
            var _closure3_slot1 = var1;
            var1 = global;
            var1 = var1.Image;
            var2 = var1.prototype;
            var2 = Object.create(var2, {
                constructor: {
                    value: var1
                }
            });
            var3 = var2;
            var1 = new var3[var1](var2);
            var2 = var1 instanceof Object ? var1 : var2;
            var _closure3_slot2 = var2;
            var1 = 'Anonymous';
            var2.crossOrigin = var1;
            var1 = function(arg0) { // Environment: var0
                var3 = _closure3_slot1;
                var0 = undefined;
                var1 = arg0;
                var1 = var3.bind(var0)(var1);
                var3 = _closure3_slot2;
                var1 = null;
                var3.onload = var1;
                var3.onerror = var1;
                _closure3_slot2 = var1;
                return var0;
            };
            var2.onerror = var1;
            var2 = _closure3_slot2;
            var1 = function() { // Environment: var0
                var3 = _closure3_slot0;
                var6 = _closure1_slot6;
                var5 = _closure3_slot2;
                var0 = undefined;
                var4 = 5;
                var1 = 10;
                var1 = var6.bind(var0)(var5, var4, var1);
                var1 = var3.bind(var0)(var1);
                var3 = _closure3_slot2;
                var1 = null;
                var3.onload = var1;
                var3.onerror = var1;
                _closure3_slot2 = var1;
                return var0;
            };
            var2.onload = var1;
            var1 = _closure3_slot2;
            var0 = _closure2_slot0;
            var1.src = var0;
            var0 = undefined;
            return var0;
        };
        var4 = var1;
        var0 = new var4[var2](var3, var2);
        var0 = var0 instanceof Object ? var0 : var1;
        return var0;
    };
    var6 = var9.bind(var10)(var6);
    var6 = 5;
    var6 = var8[var6];
    var8 = var7.bind(var0)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'utils/ImageUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var2.fit = var5;
    var5 = 2000;
    var2.IMAGE_MAX_ZOOM = var5;
    var5 = function(arg0, arg1) { // Original name: zoomFit, environment: var1
        var3 = global;
        var4 = var3.Math;
        var2 = var4.min;
        var5 = var3.Math;
        var1 = var5.round;
        var0 = var3.window;
        var6 = var0.innerHeight;
        var0 = 0.65;
        var0 = var0 * var6;
        var1 = var1.bind(var5)(var0);
        var6 = var3.Math;
        var5 = var6.round;
        var0 = var3.window;
        var0 = var0.innerHeight;
        var0 = var5.bind(var6)(var0);
        var2 = var2.bind(var4)(var1, var0);
        var5 = var3.Math;
        var4 = var5.min;
        var6 = var3.Math;
        var1 = var6.round;
        var0 = var3.window;
        var7 = var0.innerWidth;
        var0 = 0.75;
        var0 = var0 * var7;
        var1 = var1.bind(var6)(var0);
        var7 = var3.Math;
        var6 = var7.round;
        var0 = var3.window;
        var0 = var0.innerWidth;
        var0 = var6.bind(var7)(var0);
        var6 = var4.bind(var5)(var1, var0);
        var1 = var3.Math;
        var0 = var1.min;
        var5 = 2000;
        var0 = var0.bind(var1)(var2, var5);
        var2 = _closure1_slot5;
        var1 = {};
        var4 = arg0;
        var1.width = var4;
        var4 = arg1;
        var1.height = var4;
        var4 = var3.Math;
        var3 = var4.min;
        var3 = var3.bind(var4)(var6, var5);
        var1.maxWidth = var3;
        var1.maxHeight = var0;
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        return var0;
    };
    var2.zoomFit = var5;
    var5 = function(arg0, arg1, arg2, arg3) { // Original name: zoomScale, environment: var1
        _fun16850: for (var _fun16850_ip = 0;;) switch (_fun16850_ip) {
            case 0:
                var3 = arg0;
                var8 = arg1;
                var7 = arg2;
                var2 = arg3;
                var0 = global;
                var6 = var0.Math;
                var5 = var6.max;
                var1 = null;
                var10 = var1 != var3;
                var9 = 0;
                var4 = 0;
                if (!var10) {
                    _fun16850_ip = 63;
                    continue _fun16850
                }
            case 38:
                var4 = 0;
                if (!(var9 !== var3)) {
                    _fun16850_ip = 63;
                    continue _fun16850
                }
            case 44:
                var10 = var1 != var8;
                var4 = 0;
                if (!var10) {
                    _fun16850_ip = 63;
                    continue _fun16850
                }
            case 53:
                var4 = 0;
                if (!(var4 !== var8)) {
                    _fun16850_ip = 63;
                    continue _fun16850
                }
            case 59:
                var4 = var3 / var7;
            case 63:
                var3 = 2;
                var6 = var5.bind(var6)(var3, var4);
                var4 = var1 != var7;
                if (!var4) {
                    _fun16850_ip = 113;
                    continue _fun16850
                }
            case 79:
                var8 = var7 * var6;
                var5 = var0.window;
                var9 = var5.innerWidth;
                var5 = 1.6;
                var5 = var9 * var5;
                var4 = var8 > var5;
            case 113:
                var5 = var3;
                if (!var4) {
                    _fun16850_ip = 149;
                    continue _fun16850
                }
            case 119:
                var4 = var0.window;
                var8 = var4.innerWidth;
                var4 = 1.6;
                var4 = var8 * var4;
                var5 = var4 / var7;
            case 149:
                var1 = var1 != var2;
                if (!var1) {
                    _fun16850_ip = 190;
                    continue _fun16850
                }
            case 156:
                var7 = var2 * var6;
                var4 = var0.window;
                var8 = var4.innerHeight;
                var4 = 1.6;
                var4 = var8 * var4;
                var1 = var7 > var4;
            case 190:
                var4 = var3;
                if (!var1) {
                    _fun16850_ip = 226;
                    continue _fun16850
                }
            case 196:
                var1 = var0.window;
                var7 = var1.innerHeight;
                var1 = 1.6;
                var1 = var7 * var1;
                var4 = var1 / var2;
            case 226:
                var2 = var0.Math;
                var1 = var2.min;
                var1 = var1.bind(var2)(var6, var5, var4);
                var2 = var0.parseFloat;
                var0 = var1.toFixed;
                var1 = var0.bind(var1)(var3);
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                return var0;
        }
    };
    var2.zoomScale = var5;
    var5 = function(arg0) { // Original name: getRatio, environment: var1
        _fun16851: for (var _fun16851_ip = 0;;) switch (_fun16851_ip) {
            case 0:
                var3 = arg0;
                var2 = var3.width;
                var0 = var3.height;
                var1 = var3.maxWidth;
                var5 = var3.maxHeight;
                var6 = var2 > var1;
                var3 = 1;
                var4 = var3;
                if (!var6) {
                    _fun16851_ip = 42;
                    continue _fun16851
                }
            case 38:
                var4 = var1 / var2;
            case 42:
                var1 = global;
                var7 = var1.Math;
                var6 = var7.round;
                var2 = var2 * var4;
                var2 = var6.bind(var7)(var2);
                var6 = var1.Math;
                var2 = var6.round;
                var0 = var0 * var4;
                var2 = var2.bind(var6)(var0);
                var6 = var2 > var5;
                var0 = var3;
                if (!var6) {
                    _fun16851_ip = 98;
                    continue _fun16851
                }
            case 94:
                var0 = var5 / var2;
            case 98:
                var2 = var1.Math;
                var1 = var2.min;
                var0 = var4 * var0;
                var0 = var1.bind(var2)(var0, var3);
                return var0;
        }
    };
    var2.getRatio = var5;
    var5 = function(arg0) { // Original name: getCoverRatio, environment: var1
        _fun16852: for (var _fun16852_ip = 0;;) switch (_fun16852_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.width;
                var5 = var0.height;
                var2 = var0.maxWidth;
                var1 = var0.maxHeight;
                if (!(var6 !== var5)) {
                    _fun16852_ip = 78;
                    continue _fun16852
                }
            case 29:
                var0 = global;
                var4 = var0.Math;
                var3 = var4.max;
                var2 = var2 / var6;
                var1 = var1 / var5;
                var3 = var3.bind(var4)(var2, var1);
                var2 = var0.Math;
                var1 = var2.min;
                var0 = 1;
                var0 = var1.bind(var2)(var3, var0);
                return var0;
            case 78:
                var0 = 1;
                return var0;
        }
    };
    var2.getCoverRatio = var5;
    var5 = function(arg0) { // Original name: hasDimensions, environment: var1
        _fun16853: for (var _fun16853_ip = 0;;) switch (_fun16853_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.width;
                var2 = var0.height;
                var1 = null;
                var0 = var1 != var4;
                if (!var0) {
                    _fun16853_ip = 28;
                    continue _fun16853
                }
            case 22:
                var3 = 0;
                var0 = var3 !== var4;
            case 28:
                if (!var0) {
                    _fun16853_ip = 35;
                    continue _fun16853
                }
            case 31:
                var0 = var1 != var2;
            case 35:
                if (!var0) {
                    _fun16853_ip = 44;
                    continue _fun16853
                }
            case 38:
                var1 = 0;
                var0 = var1 !== var2;
            case 44:
                return var0;
        }
    };
    var2.hasDimensions = var5;
    var5 = function(arg0) { // Original name: makeCssUrlString, environment: var1
        _fun16854: for (var _fun16854_ip = 0;;) switch (_fun16854_ip) {
            case 0:
                var4 = arg0;
                var0 = null;
                var1 = var0 == var4;
                var2 = 'none';
                var0 = var2;
                if (var1) {
                    _fun16854_ip = 59;
                    continue _fun16854
                }
            case 19:
                var1 = '';
                var0 = var2;
                if (!(var1 !== var4)) {
                    _fun16854_ip = 59;
                    continue _fun16854
                }
            case 30:
                var1 = global;
                var1 = var1.HermesInternal;
                var3 = var1.concat;
                var2 = 'url(';
                var1 = ')';
                var0 = var3.bind(var2)(var4, var1);
            case 59:
                return var0;
        }
    };
    var2.makeCssUrlString = var5;
    var2.getPalette = var4;
    var4 = function(arg0) { // Environment: var1
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 2;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var2 = var0.default;
        var1 = var2.getPaletteForAvatarMobile;
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.getPaletteForAvatar = var4;
    var4 = function(arg0) { // Original name: readFileAsBase64, environment: var1
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = global;
        var2 = var1.Promise;
        var1 = var2.prototype;
        var1 = Object.create(var1, {
            constructor: {
                value: var2
            }
        });
        var3 = function(arg0, arg1) { // Environment: var0
            var1 = arg0;
            var _closure3_slot0 = var1;
            var1 = arg1;
            var _closure3_slot1 = var1;
            var1 = global;
            var1 = var1.FileReader;
            var2 = var1.prototype;
            var2 = Object.create(var2, {
                constructor: {
                    value: var1
                }
            });
            var5 = var2;
            var1 = new var5[var1](var4);
            var1 = var1 instanceof Object ? var1 : var2;
            var _closure3_slot2 = var1;
            var3 = var1.readAsDataURL;
            var2 = _closure2_slot0;
            var2 = var3.bind(var1)(var2);
            var2 = function() { // Environment: var0
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 4;
                var1 = var1[var0];
                var0 = undefined;
                var5 = var2.bind(var0)(var1);
                var1 = _closure3_slot2;
                var3 = var1.result;
                var4 = 'string';
                var3 = typeof var3;
                var4 = var4 === var3;
                var3 = 'Result must be a string';
                var3 = var5.bind(var0)(var4, var3);
                var2 = _closure3_slot0;
                var1 = var1.result;
                var1 = var2.bind(var0)(var1);
                return var0;
            };
            var1.onload = var2;
            var0 = function(arg0) { // Environment: var0
                var2 = _closure3_slot1;
                var1 = undefined;
                var0 = arg0;
                var0 = var2.bind(var1)(var0);
                return var0;
            };
            var1.onerror = var0;
            var0 = undefined;
            return var0;
        };
        var4 = var1;
        var0 = new var4[var2](var3, var2);
        var0 = var0 instanceof Object ? var0 : var1;
        return var0;
    };
    var2.readFileAsBase64 = var4;
    var4 = function(arg0) { // Original name: dataUriFileSize, environment: var1
        var2 = arg0;
        var1 = var2.split;
        var0 = ';base64,';
        var3 = var1.bind(var2)(var0);
        var1 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 4;
        var0 = var2[var0];
        var2 = undefined;
        var4 = var1.bind(var2)(var0);
        var1 = var3.length;
        var0 = 2;
        var1 = var0 === var1;
        var0 = 'Input data is not a valid image.';
        var0 = var4.bind(var2)(var1, var0);
        var0 = global;
        var1 = var0.atob;
        var0 = 1;
        var0 = var3[var0];
        var0 = var1.bind(var2)(var0);
        var0 = var0.length;
        return var0;
    };
    var2.dataUriFileSize = var4;
    var4 = function() { // Original name: dataUrlToFile, environment: var1
        var0 = undefined;
        var3 = _closure1_slot7;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.dataUrlToFile = var4;
    var2.dataUrlToBlob = var3;
    var3 = function() { // Original name: isPNGAnimated, environment: var1
        var0 = undefined;
        var3 = _closure1_slot9;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.isPNGAnimated = var3;
    var1 = function(arg0) { // Original name: preloadImage, environment: var1
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = global;
        var2 = var1.Promise;
        var1 = var2.prototype;
        var1 = Object.create(var1, {
            constructor: {
                value: var2
            }
        });
        var3 = function(arg0, arg1) { // Environment: var0
            var0 = global;
            var0 = var0.Image;
            var1 = var0.prototype;
            var1 = Object.create(var1, {
                constructor: {
                    value: var0
                }
            });
            var6 = var1;
            var0 = new var6[var0](var5);
            var1 = var0 instanceof Object ? var0 : var1;
            var3 = var1.addEventListener;
            var2 = 'load';
            var0 = arg0;
            var0 = var3.bind(var1)(var2, var0);
            var3 = var1.addEventListener;
            var2 = 'error';
            var0 = arg1;
            var0 = var3.bind(var1)(var2, var0);
            var0 = _closure2_slot0;
            var1.src = var0;
            var0 = undefined;
            return var0;
        };
        var4 = var1;
        var0 = new var4[var2](var3, var2);
        var0 = var0 instanceof Object ? var0 : var1;
        return var0;
    };
    var2.preloadImage = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 1462, 1463, 22, 44, 2]);