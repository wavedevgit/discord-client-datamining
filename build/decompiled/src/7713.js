// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = require;
    var _closure1_slot0 = var1;
    var1 = dependencyMap;
    var _closure1_slot1 = var1;
    var1 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var4 = function arg0, arg1, arg2, arg3, arg4() {
            _fun61884: for (var _fun61884_ip = 0;;) switch (_fun61884_ip) {
                case 0:
                    var24 = arg1;
                    var23 = arg2;
                    var22 = arg3;
                    var21 = arg4;
                    var0 = undefined;
                    var5 = undefined;
                    var1 = var24[var23];
                    if (var1) {
                        _fun61884_ip = 108;
                        continue _fun61884
                    }
                case 23:
                    var1 = arg0;
                    if (!var1) {
                        _fun61884_ip = 672;
                        continue _fun61884
                    }
                case 32:
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var1 = 0;
                    var1 = var3[var1];
                    var3 = var2.bind(var0)(var1);
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var6 = var1.concat;
                    var42 = 'Required object `';
                    var40 = '` was not specified in `';
                    var38 = '`.';
                    var41 = var23;
                    var39 = var22;
                    var2 = var42[var6](var41, var40, var39, var38, var37);
                    var1 = false;
                    var1 = var3.bind(var0)(var1, var2);
                    _fun61884_ip = 672;
                    continue _fun61884;
                case 108:
                    var20 = var24[var23];
                    var10 = typeof var20;
                    var9 = var21;
                    if (var9) {
                        _fun61884_ip = 127;
                        continue _fun61884
                    }
                case 121:
                    var9 = '(unknown)';
                case 127:
                    var1 = 'object';
                    if (!(var1 !== var10)) {
                        _fun61884_ip = 224;
                        continue _fun61884
                    }
                case 135:
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var1 = 0;
                    var1 = var3[var1];
                    var3 = var2.bind(var0)(var1);
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var8 = var1.concat;
                    var42 = 'Invalid ';
                    var40 = ' `';
                    var38 = '` of type `';
                    var36 = '` supplied to `';
                    var34 = '`, expected `object`.';
                    var41 = var9;
                    var39 = var23;
                    var37 = var10;
                    var35 = var22;
                    var2 = var42[var8](var41, var40, var39, var38, var37, var36, var35, var34, var33);
                    var1 = false;
                    var1 = var3.bind(var0)(var1, var2);
                case 224:
                    var19 = global;
                    var6 = var19.Object;
                    var4 = var6.assign;
                    var3 = var24[var23];
                    var2 = _closure2_slot0;
                    var1 = {};
                    var1 = var4.bind(var6)(var1, var3, var2);
                    var4 = arguments.length;
                    var7 = var19.Array;
                    var3 = 5;
                    var6 = var4 > var3;
                    var17 = 0;
                    var2 = 0;
                    if (!var6) {
                        _fun61884_ip = 284;
                        continue _fun61884
                    }
                case 280:
                    var2 = var4 - var3;
                case 284:
                    var6 = var7.prototype;
                    var6 = Object.create(var6, {
                        constructor: {
                            value: var7
                        }
                    });
                    var42 = var6;
                    var41 = var2;
                    var2 = new var42[var7](var41, var40);
                    var16 = var2 instanceof Object ? var2 : var6;
                    var6 = var3 < var4;
                    var2 = var3;
                    if (!var6) {
                        _fun61884_ip = 336;
                        continue _fun61884
                    }
                case 317:
                    var7 = var2 - var3;
                    var6 = arguments[var2];
                    var16[var7] = var6;
                    var2 = var2 + 1;
                    if (var2 < var4) {
                        _fun61884_ip = 317;
                        continue _fun61884
                    }
                case 336:
                    var14 = var1;
                    var9 = '\nBad object: ';
                    var8 = null;
                    var7 = '  ';
                    var6 = false;
                    var5 = 'Invalid props.';
                    var4 = ' key `';
                    var3 = '` supplied to `';
                    var2 = '`.\nBad object: ';
                    var1 = '\nValid keys: ';
                    for (var11 in var14)
                        case 399: {
                            case 411: var25 = var11;
                            var26 = _closure2_slot0;
                            var27 = var26[var25];
                            if (var27) {
                                _fun61884_ip = 561;
                                continue _fun61884
                            }
                            case 428: var28 = _closure1_slot0;
                            var26 = _closure1_slot1;
                            var26 = var26[var17];
                            var28 = var28.bind(var0)(var26);
                            var26 = var19.HermesInternal;
                            var26 = var26.concat;
                            var42 = var5;
                            var41 = var23;
                            var40 = var4;
                            var39 = var25;
                            var38 = var3;
                            var37 = var22;
                            var36 = var2;
                            var29 = var42[var26](var41, var40, var39, var38, var37, var36, var35);
                            var31 = var19.JSON;
                            var30 = var31.stringify;
                            var26 = var24[var23];
                            var26 = var30.bind(var31)(var26, var8, var7);
                            var26 = var29 + var26;
                            var31 = var19.JSON;
                            var30 = var31.stringify;
                            var33 = var19.Object;
                            var32 = var33.keys;
                            var29 = _closure2_slot0;
                            var29 = var32.bind(var33)(var29);
                            var29 = var30.bind(var31)(var29, var8, var7);
                            var26 = var26 + var1;
                            var26 = var26 + var29;
                            var26 = var28.bind(var0)(var6, var26);
                            case 561: var26 = var27.apply;
                            var28 = new Array(4);
                            var28[0] = var20;
                            var28[1] = var25;
                            var28[2] = var22;
                            var28[3] = var21;
                            var25 = var28.concat;
                            var25 = var25.bind(var28)(var16);
                            var25 = var26.bind(var27)(var0, var25);
                            if (!var25) {
                                _fun61884_ip = 399;
                                continue _fun61884
                            }
                            case 608: var27 = _closure1_slot0;
                            var26 = _closure1_slot1;
                            var26 = var26[var17];
                            var26 = var27.bind(var0)(var26);
                            var25 = var25.message;
                            var27 = var25 + var9;
                            var29 = var19.JSON;
                            var28 = var29.stringify;
                            var25 = var24[var23];
                            var25 = var28.bind(var29)(var25, var8, var7);
                            var25 = var27 + var25;
                            var25 = var26.bind(var0)(var6, var25);
                            _fun61884_ip = 399;
                            continue _fun61884;
                        }
                case 672:
                    return var0;
            }
        };
        var _closure2_slot1 = var4;
        var0 = function arg0, arg1, arg2, arg3() {
            _fun61885: for (var _fun61885_ip = 0;;) switch (_fun61885_ip) {
                case 0:
                    var3 = undefined;
                    var4 = undefined;
                    var2 = arguments.length;
                    var0 = global;
                    var6 = var0.Array;
                    var1 = 4;
                    var5 = var2 > var1;
                    var0 = 0;
                    if (!var5) {
                        _fun61885_ip = 31;
                        continue _fun61885
                    }
                case 27:
                    var0 = var2 - var1;
                case 31:
                    var5 = var6.prototype;
                    var5 = Object.create(var5, {
                        constructor: {
                            value: var6
                        }
                    });
                    var10 = var5;
                    var9 = var0;
                    var0 = new var10[var6](var9, var8);
                    var5 = var0 instanceof Object ? var0 : var5;
                    var6 = var1 < var2;
                    var0 = var1;
                    if (!var6) {
                        _fun61885_ip = 83;
                        continue _fun61885
                    }
                case 64:
                    var7 = var0 - var1;
                    var6 = arguments[var0];
                    var5[var7] = var6;
                    var0 = var0 + 1;
                    if (var0 < var2) {
                        _fun61885_ip = 64;
                        continue _fun61885
                    }
                case 83:
                    var2 = _closure2_slot1;
                    var1 = var2.apply;
                    var4 = new Array(5);
                    var0 = false;
                    var4[0] = var0;
                    var0 = arg0;
                    var4[1] = var0;
                    var0 = arg1;
                    var4[2] = var0;
                    var0 = arg2;
                    var4[3] = var0;
                    var0 = arg3;
                    var4[4] = var0;
                    var0 = var4.concat;
                    var0 = var0.bind(var4)(var5);
                    var0 = var1.bind(var2)(var3, var0);
                    return var0;
            }
        };
        var3 = var4.bind;
        var2 = null;
        var1 = true;
        var1 = var3.bind(var4)(var2, var1);
        var0.isRequired = var1;
        return var0;
    };
    var0 = arg4;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [44]);