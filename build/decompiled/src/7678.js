// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var6 = dependencyMap;
    var4 = function arg0, arg1() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = 'Use the transform prop instead.';
        var _closure2_slot1 = var1;
        var0 = function arg0, arg1, arg2() {
            _fun61711: for (var _fun61711_ip = 0;;) switch (_fun61711_ip) {
                case 0:
                    var7 = arg0;
                    var6 = arg1;
                    var0 = arg2;
                    var3 = undefined;
                    var8 = undefined;
                    var1 = var7[var6];
                    if (!(var3 !== var1)) {
                        _fun61711_ip = 83;
                        continue _fun61711
                    }
                case 21:
                    var1 = global;
                    var4 = var1.console;
                    var2 = var4.warn;
                    var12 = _closure2_slot1;
                    var1 = var1.HermesInternal;
                    var10 = var1.concat;
                    var17 = '`';
                    var15 = '` supplied to `';
                    var13 = '` has been deprecated. ';
                    var16 = var6;
                    var14 = var0;
                    var1 = var17[var10](var16, var15, var14, var13, var12, var11);
                    var1 = var2.bind(var4)(var1);
                case 83:
                    var4 = arguments.length;
                    var1 = global;
                    var9 = var1.Array;
                    var2 = 3;
                    var5 = var4 > var2;
                    var1 = 0;
                    if (!var5) {
                        _fun61711_ip = 110;
                        continue _fun61711
                    }
                case 106:
                    var1 = var4 - var2;
                case 110:
                    var5 = var9.prototype;
                    var5 = Object.create(var5, {
                        constructor: {
                            value: var9
                        }
                    });
                    var17 = var5;
                    var16 = var1;
                    var1 = new var17[var9](var16, var15);
                    var5 = var1 instanceof Object ? var1 : var5;
                    var9 = var2 < var4;
                    var1 = var2;
                    if (!var9) {
                        _fun61711_ip = 162;
                        continue _fun61711
                    }
                case 143:
                    var10 = var1 - var2;
                    var9 = arguments[var1];
                    var5[var10] = var9;
                    var1 = var1 + 1;
                    if (var1 < var4) {
                        _fun61711_ip = 143;
                        continue _fun61711
                    }
                case 162:
                    var2 = _closure2_slot0;
                    var1 = var2.apply;
                    var4 = new Array(3);
                    var4[0] = var7;
                    var4[1] = var6;
                    var4[2] = var0;
                    var0 = var4.concat;
                    var0 = var0.bind(var4)(var5);
                    var0 = var1.bind(var2)(var3, var0);
                    return var0;
            }
        };
        return var0;
    };
    var2 = {};
    var1 = 0;
    var7 = var6[var1];
    var0 = undefined;
    var9 = var5.bind(var0)(var7);
    var8 = var9.arrayOf;
    var7 = var6[var1];
    var11 = var5.bind(var0)(var7);
    var10 = var11.oneOfType;
    var7 = var6[var1];
    var13 = var5.bind(var0)(var7);
    var12 = var13.shape;
    var7 = {};
    var14 = var6[var1];
    var14 = var5.bind(var0)(var14);
    var14 = var14.number;
    var7.perspective = var14;
    var12 = var12.bind(var13)(var7);
    var7 = new Array(12);
    var7[0] = var12;
    var12 = var6[var1];
    var14 = var5.bind(var0)(var12);
    var13 = var14.shape;
    var12 = {};
    var15 = var6[var1];
    var15 = var5.bind(var0)(var15);
    var15 = var15.string;
    var12.rotate = var15;
    var12 = var13.bind(var14)(var12);
    var7[1] = var12;
    var12 = var6[var1];
    var14 = var5.bind(var0)(var12);
    var13 = var14.shape;
    var12 = {};
    var15 = var6[var1];
    var15 = var5.bind(var0)(var15);
    var15 = var15.string;
    var12.rotateX = var15;
    var12 = var13.bind(var14)(var12);
    var7[2] = var12;
    var12 = var6[var1];
    var14 = var5.bind(var0)(var12);
    var13 = var14.shape;
    var12 = {};
    var15 = var6[var1];
    var15 = var5.bind(var0)(var15);
    var15 = var15.string;
    var12.rotateY = var15;
    var12 = var13.bind(var14)(var12);
    var7[3] = var12;
    var12 = var6[var1];
    var14 = var5.bind(var0)(var12);
    var13 = var14.shape;
    var12 = {};
    var15 = var6[var1];
    var15 = var5.bind(var0)(var15);
    var15 = var15.string;
    var12.rotateZ = var15;
    var12 = var13.bind(var14)(var12);
    var7[4] = var12;
    var12 = var6[var1];
    var14 = var5.bind(var0)(var12);
    var13 = var14.shape;
    var12 = {};
    var15 = var6[var1];
    var15 = var5.bind(var0)(var15);
    var15 = var15.number;
    var12.scale = var15;
    var12 = var13.bind(var14)(var12);
    var7[5] = var12;
    var12 = var6[var1];
    var14 = var5.bind(var0)(var12);
    var13 = var14.shape;
    var12 = {};
    var15 = var6[var1];
    var15 = var5.bind(var0)(var15);
    var15 = var15.number;
    var12.scaleX = var15;
    var12 = var13.bind(var14)(var12);
    var7[6] = var12;
    var12 = var6[var1];
    var14 = var5.bind(var0)(var12);
    var13 = var14.shape;
    var12 = {};
    var15 = var6[var1];
    var15 = var5.bind(var0)(var15);
    var15 = var15.number;
    var12.scaleY = var15;
    var12 = var13.bind(var14)(var12);
    var7[7] = var12;
    var12 = var6[var1];
    var14 = var5.bind(var0)(var12);
    var13 = var14.shape;
    var12 = {};
    var15 = var6[var1];
    var15 = var5.bind(var0)(var15);
    var15 = var15.number;
    var12.translateX = var15;
    var12 = var13.bind(var14)(var12);
    var7[8] = var12;
    var12 = var6[var1];
    var14 = var5.bind(var0)(var12);
    var13 = var14.shape;
    var12 = {};
    var15 = var6[var1];
    var15 = var5.bind(var0)(var15);
    var15 = var15.number;
    var12.translateY = var15;
    var12 = var13.bind(var14)(var12);
    var7[9] = var12;
    var12 = var6[var1];
    var14 = var5.bind(var0)(var12);
    var13 = var14.shape;
    var12 = {};
    var15 = var6[var1];
    var15 = var5.bind(var0)(var15);
    var15 = var15.string;
    var12.skewX = var15;
    var12 = var13.bind(var14)(var12);
    var7[10] = var12;
    var12 = var6[var1];
    var14 = var5.bind(var0)(var12);
    var13 = var14.shape;
    var12 = {};
    var15 = var6[var1];
    var15 = var5.bind(var0)(var15);
    var15 = var15.string;
    var12.skewY = var15;
    var12 = var13.bind(var14)(var12);
    var7[11] = var12;
    var7 = var10.bind(var11)(var7);
    var7 = var8.bind(var9)(var7);
    var2.transform = var7;
    var7 = function arg0, arg1, arg2() {
        _fun61712: for (var _fun61712_ip = 0;;) switch (_fun61712_ip) {
            case 0:
                var1 = arg0;
                var0 = arg1;
                var0 = var1[var0];
                if (var0) {
                    _fun61712_ip = 17;
                    continue _fun61712
                }
            case 13:
                var0 = undefined;
                return var0;
            case 17:
                var0 = global;
                var2 = var0.Error;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var3 = 'The transformMatrix style property is deprecated. Use `transform: [{ matrix: ... }]` instead.';
                var4 = var1;
                var0 = new var4[var2](var3, var2);
                var0 = var0 instanceof Object ? var0 : var1;
                return var0;
        }
    };
    var2.transformMatrix = var7;
    var3 = function arg0, arg1, arg2() {
        _fun61713: for (var _fun61713_ip = 0;;) switch (_fun61713_ip) {
            case 0:
                var1 = arg0;
                var0 = arg1;
                var0 = var1[var0];
                if (var0) {
                    _fun61713_ip = 17;
                    continue _fun61713
                }
            case 13:
                var0 = undefined;
                return var0;
            case 17:
                var0 = global;
                var2 = var0.Error;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var3 = 'The decomposedMatrix style property is deprecated. Use `transform: [...]` instead.';
                var4 = var1;
                var0 = new var4[var2](var3, var2);
                var0 = var0 instanceof Object ? var0 : var1;
                return var0;
        }
    };
    var2.decomposedMatrix = var3;
    var3 = var6[var1];
    var3 = var5.bind(var0)(var3);
    var7 = var3.number;
    var3 = 'Use the transform prop instead.';
    var7 = var4.bind(var0)(var7, var3);
    var2.scaleX = var7;
    var7 = var6[var1];
    var7 = var5.bind(var0)(var7);
    var7 = var7.number;
    var7 = var4.bind(var0)(var7, var3);
    var2.scaleY = var7;
    var7 = var6[var1];
    var7 = var5.bind(var0)(var7);
    var7 = var7.number;
    var7 = var4.bind(var0)(var7, var3);
    var2.rotation = var7;
    var7 = var6[var1];
    var7 = var5.bind(var0)(var7);
    var7 = var7.number;
    var7 = var4.bind(var0)(var7, var3);
    var2.translateX = var7;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.number;
    var1 = var4.bind(var0)(var1, var3);
    var2.translateY = var1;
    var1 = arg4;
    var1.exports = var2;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3181]);