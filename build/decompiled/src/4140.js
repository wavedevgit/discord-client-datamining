// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun37874: for (var _fun37874_ip = 0;;) switch (_fun37874_ip) {
        case 0:
            var5 = require;
            var2 = exports;
            var6 = dependencyMap;
            var3 = this;
            var _closure1_slot0 = var5;
            var _closure1_slot1 = var6;
            var0 = 0;
            var4 = var6[var0];
            var0 = undefined;
            var4 = var5.bind(var0)(var4);
            var _closure1_slot2 = var4;
            var4 = var3;
            if (!var3) {
                _fun37874_ip = 51;
                continue _fun37874
            }
        case 45:
            var4 = var3.__createBinding;
        case 51:
            if (var4) {
                _fun37874_ip = 85;
                continue _fun37874
            }
        case 54:
            var7 = global;
            var7 = var7.Object;
            var7 = var7.create;
            if (var7) {
                _fun37874_ip = 77;
                continue _fun37874
            }
        case 70:
            var7 = function(arg0, arg1, arg2, arg3) { // Environment: var1
                _fun37877: for (var _fun37877_ip = 0;;) switch (_fun37877_ip) {
                    case 0:
                        var2 = arg2;
                        var3 = arg3;
                        var0 = undefined;
                        if (!(var0 === var3)) {
                            _fun37877_ip = 15;
                            continue _fun37877
                        }
                    case 12:
                        var3 = var2;
                    case 15:
                        var1 = arg1;
                        var2 = var1[var2];
                        var1 = arg0;
                        var1[var3] = var2;
                        return var0;
                }
            };
            _fun37874_ip = 82;
            continue _fun37874;
        case 77:
            var7 = function(arg0, arg1, arg2, arg3) { // Environment: var1
                _fun37875: for (var _fun37875_ip = 0;;) switch (_fun37875_ip) {
                    case 0:
                        var7 = arg1;
                        var6 = arg2;
                        var5 = arg3;
                        var _closure2_slot0 = var7;
                        var _closure2_slot1 = var6;
                        var0 = undefined;
                        if (!(var0 === var5)) {
                            _fun37875_ip = 28;
                            continue _fun37875
                        }
                    case 25:
                        var5 = var6;
                    case 28:
                        var1 = global;
                        var4 = var1.Object;
                        var2 = var4.getOwnPropertyDescriptor;
                        var4 = var2.bind(var4)(var7, var6);
                        var2 = var4;
                        if (!var4) {
                            _fun37875_ip = 94;
                            continue _fun37875
                        }
                    case 54:
                        var6 = 'get';
                        var6 = var6 in var4;
                        if (var6) {
                            _fun37875_ip = 82;
                            continue _fun37875
                        }
                    case 65:
                        var6 = var4.writable;
                        if (var6) {
                            _fun37875_ip = 80;
                            continue _fun37875
                        }
                    case 74:
                        var6 = var4.configurable;
                    case 80:
                        _fun37875_ip = 91;
                        continue _fun37875;
                    case 82:
                        var7 = var7.__esModule;
                        var6 = !var7;
                    case 91:
                        var2 = !var6;
                    case 94:
                        if (var2) {
                            _fun37875_ip = 117;
                            continue _fun37875
                        }
                    case 97:
                        var2 = {};
                        var6 = true;
                        var2.enumerable = var6;
                        var3 = function() {
                            var1 = _closure2_slot0;
                            var0 = _closure2_slot1;
                            var0 = var1[var0];
                            return var0;
                        };
                        var2.get = var3;
                        var4 = var2;
                    case 117:
                        var3 = var1.Object;
                        var2 = var3.defineProperty;
                        var1 = arg0;
                        var1 = var2.bind(var3)(var1, var5, var4);
                        return var0;
                }
            };
        case 82:
            var4 = var7;
        case 85:
            var _closure1_slot3 = var4;
            var4 = var3;
            if (!var4) {
                _fun37874_ip = 101;
                continue _fun37874
            }
        case 95:
            var4 = var3.__exportStar;
        case 101:
            if (var4) {
                _fun37874_ip = 109;
                continue _fun37874
            }
        case 104:
            var4 = function(arg0, arg1) { // Environment: var1
                _fun37878: for (var _fun37878_ip = 0;;) switch (_fun37878_ip) {
                    case 0:
                        var10 = arg0;
                        var9 = arg1;
                        var7 = var10;
                        var0 = undefined;
                        var2 = global;
                        var1 = 'default';
                        for (var4 in var7)
                            case 28: {
                                case 37: var12 = var4;
                                var11 = var1 === var12;
                                if (var11) {
                                    _fun37878_ip = 75;
                                    continue _fun37878
                                }
                                case 47: var13 = var2.Object;
                                var13 = var13.prototype;
                                var14 = var13.hasOwnProperty;
                                var13 = var14.call;
                                var11 = var13.bind(var14)(var9, var12);
                                case 75: if (var11) {
                                    _fun37878_ip = 28;
                                    continue _fun37878
                                }
                                case 78: var11 = _closure1_slot3;
                                var11 = var11.bind(var0)(var9, var10, var12);
                                _fun37878_ip = 28;
                                continue _fun37878;
                            }
                    case 91:
                        return var0;
                }
            };
        case 109:
            var3 = global;
            var9 = var3.Object;
            var8 = var9.defineProperty;
            var7 = {};
            var3 = true;
            var7.value = var3;
            var3 = '__esModule';
            var3 = var8.bind(var9)(var2, var3, var7);
            var2.validateFileType = var0;
            var3 = 1;
            var3 = var6[var3];
            var3 = var5.bind(var0)(var3);
            var3 = var4.bind(var0)(var3, var2);
            var3 = 2;
            var3 = var6[var3];
            var3 = var5.bind(var0)(var3);
            var3 = var4.bind(var0)(var3, var2);
            var3 = 3;
            var3 = var6[var3];
            var3 = var5.bind(var0)(var3);
            var3 = var4.bind(var0)(var3, var2);
            var3 = 4;
            var3 = var6[var3];
            var3 = var5.bind(var0)(var3);
            var3 = var4.bind(var0)(var3, var2);
            var3 = 5;
            var3 = var6[var3];
            var3 = var5.bind(var0)(var3);
            var3 = var4.bind(var0)(var3, var2);
            var1 = function arg0, arg1, arg2() {
                _fun37879: for (var _fun37879_ip = 0;;) switch (_fun37879_ip) {
                    case 0:
                        var14 = arg1;
                        var6 = arg2;
                        var7 = undefined;
                        var12 = undefined;
                        var5 = undefined;
                        var4 = undefined;
                        var11 = undefined;
                        var3 = new Array(0);
                        var9 = _closure1_slot2;
                        var0 = global;
                        var13 = var0.Set;
                        var10 = var14.map;
                        var8 = function(arg0) { // Environment: var2
                            _fun37880: for (var _fun37880_ip = 0;;) switch (_fun37880_ip) {
                                case 0:
                                    var2 = arg0;
                                    var1 = var2.split;
                                    var0 = '.';
                                    var2 = var1.bind(var2)(var0);
                                    var1 = var2.join;
                                    var0 = '';
                                    var1 = var1.bind(var2)(var0);
                                    var0 = var1.toUpperCase;
                                    var3 = var0.bind(var1)();
                                    var1 = '7Z';
                                    var0 = var3;
                                    if (!(var1 === var0)) {
                                        _fun37880_ip = 76;
                                        continue _fun37880
                                    }
                                case 54:
                                    var1 = global;
                                    var1 = var1.HermesInternal;
                                    var2 = var1.concat;
                                    var1 = '_';
                                    var0 = var2.bind(var1)(var3);
                                case 76:
                                    return var0;
                            }
                        };
                        var19 = var10.bind(var14)(var8);
                        var10 = var13.prototype;
                        var10 = Object.create(var10, {
                            constructor: {
                                value: var13
                            }
                        });
                        var20 = var10;
                        var8 = new var20[var13](var19, var18);
                        var8 = var8 instanceof Object ? var8 : var10;
                        var8 = var9.bind(var7)(var8);
                        var9 = var8;
                        var10 = var9[Symbol.iterator];
                        var9 = var10().next;
                        var8 = 6;
                    case 86:
                        var16 = var9().value;
                        var13 = var10;
                        if (!(var13 !== var7)) {
                            _fun37879_ip = 255;
                            continue _fun37879
                        }
                    case 100: // try_start_0
                        var12 = var16;
                        var13 = var0.Object;
                        var13 = var13.prototype;
                        var15 = var13.hasOwnProperty;
                        var14 = var15.call;
                        var17 = _closure1_slot0;
                        var13 = _closure1_slot1;
                        var13 = var13[var8];
                        var13 = var17.bind(var7)(var13);
                        var13 = var13.FileTypes;
                        var13 = var14.bind(var15)(var13, var16);
                        if (var13) {
                            _fun37879_ip = 227;
                            continue _fun37879
                        }
                    case 157:
                        var15 = var0.TypeError;
                        var14 = var12;
                        var13 = var14.toLowerCase;
                        var17 = var13.bind(var14)();
                        var13 = var0.HermesInternal;
                        var16 = var13.concat;
                        var14 = 'Type `';
                        var13 = '` is not supported. Please make sure that `types` list conatins only supported files';
                        var19 = var16.bind(var14)(var17, var13);
                        var14 = var15.prototype;
                        var14 = Object.create(var14, {
                            constructor: {
                                value: var15
                            }
                        });
                        var20 = var14;
                        var13 = new var20[var15](var19, var18);
                        var13 = var13 instanceof Object ? var13 : var14;
                        throw var13;
                    case 227:
                        var15 = var3;
                        var14 = var15.push;
                        var13 = var12;
                        var13 = var14.bind(var15)(var13);
                    case 243: // try_end0
                        _fun37879_ip = 86;
                        continue _fun37879;
                    case 248: // catch_target0
                        CatchBlockStart(arg_register = 9);
                        var10.return();
                        throw var9;
                    case 255:
                        if (!var6) {
                            _fun37879_ip = 334;
                            continue _fun37879
                        }
                    case 258:
                        var9 = var0.Object;
                        var9 = var9.prototype;
                        var12 = var9.hasOwnProperty;
                        var10 = var12.call;
                        var9 = 'chunkSize';
                        var9 = var10.bind(var12)(var6, var9);
                        if (!var9) {
                            _fun37879_ip = 334;
                            continue _fun37879
                        }
                    case 293:
                        var13 = null;
                        var9 = var13 == var6;
                        var12 = undefined;
                        if (var9) {
                            _fun37879_ip = 310;
                            continue _fun37879
                        }
                    case 304:
                        var12 = var6.chunkSize;
                    case 310:
                        var10 = 0;
                        var9 = 0;
                        if (!(var13 !== var12)) {
                            _fun37879_ip = 327;
                            continue _fun37879
                        }
                    case 318:
                        var9 = 0;
                        if (!(var7 !== var12)) {
                            _fun37879_ip = 327;
                            continue _fun37879
                        }
                    case 324:
                        var9 = var12;
                    case 327:
                        if (!(!(var9 <= var10))) {
                            _fun37879_ip = 793;
                            continue _fun37879
                        }
                    case 334:
                        if (!var6) {
                            _fun37879_ip = 357;
                            continue _fun37879
                        }
                    case 337:
                        var9 = null;
                        var10 = var9 == var6;
                        var9 = undefined;
                        if (var10) {
                            _fun37879_ip = 354;
                            continue _fun37879
                        }
                    case 348:
                        var9 = var6.excludeSimilarTypes;
                    case 354:
                        if (var9) {
                            _fun37879_ip = 394;
                            continue _fun37879
                        }
                    case 357:
                        var10 = var3;
                        var9 = function arg0() {
                            _fun37881: for (var _fun37881_ip = 0;;) switch (_fun37881_ip) {
                                case 0:
                                    var2 = arg0;
                                    var3 = var2.some;
                                    var1 = function(arg0) { // Environment: var0
                                        var1 = 'MP4';
                                        var0 = arg0;
                                        var0 = var1 === var0;
                                        return var0;
                                    };
                                    var1 = var3.bind(var2)(var1);
                                    if (var1) {
                                        _fun37881_ip = 61;
                                        continue _fun37881
                                    }
                                case 24:
                                    var1 = var2.some;
                                    var0 = function(arg0) { // Environment: var0
                                        var1 = 'AAC';
                                        var0 = arg0;
                                        var0 = var1 === var0;
                                        return var0;
                                    };
                                    var0 = var1.bind(var2)(var0);
                                    if (var0) {
                                        _fun37881_ip = 49;
                                        continue _fun37881
                                    }
                                case 43:
                                    var0 = new Array(0);
                                    _fun37881_ip = 59;
                                    continue _fun37881;
                                case 49:
                                    var0 = ['M4A'];
                                case 59:
                                    _fun37881_ip = 71;
                                    continue _fun37881;
                                case 61:
                                    var0 = ['M4V'];
                                case 71:
                                    return var0;
                            }
                        };
                        var12 = var9.bind(var7)(var10);
                        var10 = var12.length;
                        var9 = 0;
                        if (!(var10 > var9)) {
                            _fun37879_ip = 394;
                            continue _fun37879
                        }
                    case 381:
                        var10 = var3;
                        var9 = var10.concat;
                        var3 = var9.bind(var10)(var12);
                    case 394:
                        var5 = new Array(0);
                        var4 = new Array(0);
                        var12 = var3;
                        var9 = var12;
                        var10 = var9[Symbol.iterator];
                        var9 = var10().next;
                    case 411:
                        var15 = var9().value;
                        var12 = var10;
                        if (!(var12 !== var7)) {
                            _fun37879_ip = 575;
                            continue _fun37879
                        }
                    case 425: // try_start_1
                        var11 = var15;
                        var13 = _closure1_slot0;
                        var12 = _closure1_slot1;
                        var14 = var12[var8];
                        var14 = var13.bind(var7)(var14);
                        var16 = var14.FileTypes;
                        var14 = var16.getSignaturesByName;
                        var17 = var14.bind(var16)(var15);
                        var16 = var5;
                        var14 = var16.concat;
                        var5 = var14.bind(var16)(var17);
                        var12 = var12[var8];
                        var12 = var13.bind(var7)(var12);
                        var14 = var12.FILE_TYPES_REQUIRED_ADDITIONAL_CHECK;
                        var13 = var14.includes;
                        var12 = var15.toLowerCase;
                        var12 = var12.bind(var15)();
                        var12 = var13.bind(var14)(var12);
                        if (!var12) {
                            _fun37879_ip = 563;
                            continue _fun37879
                        }
                    case 513:
                        var14 = var4;
                        var13 = var14.push;
                        var15 = _closure1_slot0;
                        var12 = _closure1_slot1;
                        var12 = var12[var8];
                        var12 = var15.bind(var7)(var12);
                        var16 = var12.FileTypes;
                        var15 = var16.getInfoByName;
                        var12 = var11;
                        var12 = var15.bind(var16)(var12);
                        var12 = var13.bind(var14)(var12);
                    case 563: // try_end1
                        _fun37879_ip = 411;
                        continue _fun37879;
                    case 568: // catch_target1
                        CatchBlockStart(arg_register = 9);
                        var10.return();
                        throw var9;
                    case 575:
                        var10 = _closure1_slot0;
                        var11 = _closure1_slot1;
                        var9 = 7;
                        var9 = var11[var9];
                        var9 = var10.bind(var7)(var9);
                        var10 = var9.getFileChunk;
                        var9 = null;
                        var11 = var9 == var6;
                        var9 = undefined;
                        if (var11) {
                            _fun37879_ip = 618;
                            continue _fun37879
                        }
                    case 612:
                        var9 = var6.chunkSize;
                    case 618:
                        if (var9) {
                            _fun37879_ip = 624;
                            continue _fun37879
                        }
                    case 621:
                        var9 = 64;
                    case 624:
                        var6 = arg0;
                        var6 = var10.bind(var7)(var6, var9);
                        var10 = _closure1_slot0;
                        var9 = _closure1_slot1;
                        var9 = var9[var8];
                        var9 = var10.bind(var7)(var9);
                        var10 = var9.FileTypes;
                        var9 = var10.detectSignature;
                        var5 = var9.bind(var10)(var6, var5);
                        var _closure2_slot0 = var5;
                        if (var5) {
                            _fun37879_ip = 679;
                            continue _fun37879
                        }
                    case 675:
                        var5 = false;
                        return var5;
                    case 679:
                        var5 = var4;
                        var5 = var5.length;
                        var9 = 0;
                        if (!(var5 > var9)) {
                            _fun37879_ip = 720;
                            continue _fun37879
                        }
                    case 693:
                        var10 = var4;
                        var5 = var10.filter;
                        var4 = function(arg0) { // Environment: var2
                            var0 = arg0;
                            var2 = var0.signatures;
                            var1 = var2.includes;
                            var0 = _closure2_slot0;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        };
                        var5 = var5.bind(var10)(var4);
                        var4 = var5.length;
                        if (!(!(var4 > var9))) {
                            _fun37879_ip = 724;
                            continue _fun37879
                        }
                    case 720:
                        var4 = true;
                        return var4;
                    case 724:
                        var4 = _closure1_slot0;
                        var1 = _closure1_slot1;
                        var1 = var1[var8];
                        var1 = var4.bind(var7)(var1);
                        var4 = var1.FileTypes;
                        var1 = var4.detectTypeByAdditionalCheck;
                        var1 = var1.bind(var4)(var6, var5);
                        var _closure2_slot1 = var1;
                        var4 = !var1;
                        var1 = !var4;
                        if (var4) {
                            _fun37879_ip = 791;
                            continue _fun37879
                        }
                    case 772:
                        var4 = var3;
                        var3 = var4.some;
                        var2 = function(arg0) { // Environment: var2
                            var1 = arg0;
                            var0 = var1.toLowerCase;
                            var1 = var0.bind(var1)();
                            var0 = _closure2_slot1;
                            var0 = var1 === var0;
                            return var0;
                        };
                        var1 = var3.bind(var4)(var2);
                    case 791:
                        return var1;
                    case 793:
                        var2 = var0.RangeError;
                        var0 = var2.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var2
                            }
                        });
                        var19 = 'chunkSize must be bigger than zero';
                        var20 = var1;
                        var0 = new var20[var2](var19, var18);
                        var0 = var0 instanceof Object ? var0 : var1;
                        throw var0;
                }
            };
            var2.validateFileType = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [65, 4141, 4142, 4143, 4144, 4145, 4138, 4137]);