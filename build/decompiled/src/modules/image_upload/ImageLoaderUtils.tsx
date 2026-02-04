// modules/image_upload/ImageLoaderUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = require;
    var5 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var6;
    var0 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var0 = global;
        var0 = var0.Image;
        var2 = var0.prototype;
        var2 = Object.create(var2, {
            constructor: {
                value: var0
            }
        });
        var7 = var2;
        var0 = new var7[var0](var6);
        var2 = var0 instanceof Object ? var0 : var2;
        var _closure2_slot1 = var2;
        var4 = function arg0, arg1() {
            _fun16673: for (var _fun16673_ip = 0;;) switch (_fun16673_ip) {
                case 0:
                    var1 = arg0;
                    var _closure3_slot0 = var1;
                    var2 = arg1;
                    var _closure3_slot1 = var2;
                    var3 = var1.backoff;
                    var2 = null;
                    if (!(var2 == var3)) {
                        _fun16673_ip = 79;
                        continue _fun16673
                    }
                case 28:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 4;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var3 = var2.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var2
                        }
                    });
                    var6 = var3;
                    var2 = new var6[var2](var5);
                    var2 = var2 instanceof Object ? var2 : var3;
                    var1.backoff = var2;
                case 79:
                    var1 = var1.backoff;
                    var _closure3_slot2 = var1;
                    var2 = _closure1_slot4;
                    var1 = undefined;
                    var0 = function*() { // Environment: var0
                        var0 = function*() { // Original name: ?anon_0_, environment: var0
                            _fun16675: for (var _fun16675_ip = 0;;) switch (_fun16675_ip) {
                                case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                    if (var1) {
                                        _fun16675_ip = 120;
                                        continue _fun16675
                                    }
                                case 7:
                                    var3 = _closure1_slot1;
                                    var1 = _closure1_slot2;
                                    var6 = 5;
                                    var1 = var1[var6];
                                    var2 = undefined;
                                    var3 = var3.bind(var2)(var1);
                                    var1 = var3.isOnline;
                                    var1 = var1.bind(var3)();
                                    SaveGenerator(address = 46);
                                case 44:
                                    return var1;
                                case 46:
                                    ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                    if (var3) {
                                        _fun16675_ip = 117;
                                        continue _fun16675
                                    }
                                case 52:
                                    var5 = _closure3_slot2;
                                    var5 = var5.fails;
                                    if (!(!(var5 < var6))) {
                                        _fun16675_ip = 92;
                                        continue _fun16675
                                    }
                                case 69:
                                    var7 = _closure1_slot12;
                                    var6 = _closure3_slot0;
                                    var5 = _closure3_slot1;
                                    var4 = true;
                                    var4 = var7.bind(var2)(var4, var6, var5);
                                    _fun16675_ip = 114;
                                    continue _fun16675;
                                case 92:
                                    var5 = _closure3_slot2;
                                    var4 = var5.fail;
                                    var3 = function() { // Environment: var3
                                        var2 = _closure1_slot11;
                                        var1 = _closure3_slot0;
                                        var0 = undefined;
                                        var1 = var2.bind(var0)(var1);
                                        return var0;
                                    };
                                    var3 = var4.bind(var5)(var3);
                                case 114:
                                    return var2;
                                case 117:
                                    return var1;
                                case 120:
                                    return var0;
                            }
                        };
                        return var0;
                    };
                    var0 = var2.bind(var1)(var0);
                    return var0;
            }
        };
        var0 = undefined;
        var4 = var4.bind(var0)(var1, var2);
        var2.onerror = var4;
        var3 = function() { // Environment: var3
            _fun16677: for (var _fun16677_ip = 0;;) switch (_fun16677_ip) {
                case 0:
                    var1 = _closure2_slot0;
                    var2 = var1.backoff;
                    var1 = null;
                    if (!(var1 != var2)) {
                        _fun16677_ip = 29;
                        continue _fun16677
                    }
                case 19:
                    var1 = var2.succeed;
                    var1 = var1.bind(var2)();
                case 29:
                    var4 = _closure1_slot12;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var0 = undefined;
                    var1 = false;
                    var1 = var4.bind(var0)(var1, var3, var2);
                    return var0;
            }
        };
        var2.onload = var3;
        var1 = var1.url;
        var2.src = var1;
        return var0;
    };
    var _closure1_slot11 = var0;
    var0 = function arg0, arg1, arg2() {
        _fun16678: for (var _fun16678_ip = 0;;) switch (_fun16678_ip) {
            case 0:
                var3 = arg0;
                var4 = arg1;
                var1 = arg2;
                var _closure2_slot0 = var3;
                var _closure2_slot1 = var4;
                var2 = var4.callbacks;
                var4 = var4.url;
                if (var3) {
                    _fun16678_ip = 88;
                    continue _fun16678
                }
            case 33:
                var3 = var1.width;
                var1 = var1.height;
                var5 = {};
                var5.url = var4;
                var6 = true;
                var5.loaded = var6;
                var5.width = var3;
                var5.height = var1;
                _closure2_slot1 = var5;
                var3 = _closure1_slot10;
                var1 = var3.set;
                var1 = var1.bind(var3)(var4, var5);
                _fun16678_ip = 106;
                continue _fun16678;
            case 88:
                var3 = _closure1_slot10;
                var1 = var3.del;
                var1 = var1.bind(var3)(var4);
            case 106:
                var1 = null;
                if (!(var1 != var2)) {
                    _fun16678_ip = 127;
                    continue _fun16678
                }
            case 112:
                var1 = var2.forEach;
                var0 = function(arg0) { // Environment: var0
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var1 = arg0;
                    var0 = undefined;
                    var0 = var1.bind(var0)(var3, var2);
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
            case 127:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var0 = function arg0() {
        var2 = arg0;
        var1 = var2.split;
        var0 = '?';
        var3 = var1.bind(var2)(var0);
        var2 = _closure1_slot3;
        var4 = undefined;
        var0 = 2;
        var3 = var2.bind(var4)(var3, var0);
        var0 = 0;
        var2 = var3[var0];
        var0 = 1;
        var3 = var3[var0];
        var0 = new Array(2);
        var0[0] = var2;
        var2 = _closure1_slot1;
        var5 = _closure1_slot2;
        var1 = 6;
        var1 = var5[var1];
        var2 = var2.bind(var4)(var1);
        var1 = var2.parse;
        var1 = var1.bind(var2)(var3);
        var0[1] = var1;
        return var0;
    };
    var _closure1_slot13 = var0;
    var3 = function arg0() {
        _fun16681: for (var _fun16681_ip = 0;;) switch (_fun16681_ip) {
            case 0:
                var2 = arg0;
                var0 = var2.src;
                var7 = var2.sourceWidth;
                var8 = var2.sourceHeight;
                var11 = var2.targetWidth;
                var10 = var2.targetHeight;
                var13 = var2.format;
                var6 = undefined;
                if (!(var13 === var6)) {
                    _fun16681_ip = 46;
                    continue _fun16681
                }
            case 44:
                var13 = null;
            case 46:
                var9 = var2.quality;
                if (!(var9 === var6)) {
                    _fun16681_ip = 58;
                    continue _fun16681
                }
            case 56:
                var9 = null;
            case 58:
                var1 = var2.animated;
                if (!(var1 === var6)) {
                    _fun16681_ip = 70;
                    continue _fun16681
                }
            case 68:
                var1 = false;
            case 70:
                var4 = var2.srcIsAnimated;
                if (!(var4 === var6)) {
                    _fun16681_ip = 82;
                    continue _fun16681
                }
            case 80:
                var4 = false;
            case 82:
                var3 = var0.startsWith;
                var2 = 'data:image';
                var2 = var3.bind(var0)(var2);
                if (var2) {
                    _fun16681_ip = 468;
                    continue _fun16681
                }
            case 105:
                var5 = _closure1_slot1;
                var12 = _closure1_slot2;
                var3 = 7;
                var3 = var12[var3];
                var5 = var5.bind(var6)(var3);
                var3 = var5.isDiscordCdnUrl;
                var3 = var3.bind(var5)(var0);
                if (var3) {
                    _fun16681_ip = 468;
                    continue _fun16681
                }
            case 145:
                var3 = _closure1_slot13;
                var12 = var3.bind(var6)(var0);
                var5 = _closure1_slot3;
                var3 = 2;
                var12 = var5.bind(var6)(var12, var3);
                var3 = 0;
                var3 = var12[var3];
                var5 = 1;
                var5 = var12[var5];
                var12 = null;
                if (!(var12 != var13)) {
                    _fun16681_ip = 192;
                    continue _fun16681
                }
            case 186:
                var5.format = var13;
            case 192:
                if (!(var12 != var9)) {
                    _fun16681_ip = 202;
                    continue _fun16681
                }
            case 196:
                var5.quality = var9;
            case 202:
                if (!var1) {
                    _fun16681_ip = 208;
                    continue _fun16681
                }
            case 205:
                var1 = var4;
            case 208:
                if (!var1) {
                    _fun16681_ip = 245;
                    continue _fun16681
                }
            case 211:
                var9 = _closure1_slot7;
                var4 = var9.test;
                var4 = var4.bind(var9)(var0);
                if (var4) {
                    _fun16681_ip = 242;
                    continue _fun16681
                }
            case 228:
                var12 = _closure1_slot8;
                var9 = var12.test;
                var4 = var9.bind(var12)(var0);
            case 242:
                var1 = var4;
            case 245:
                if (!var1) {
                    _fun16681_ip = 256;
                    continue _fun16681
                }
            case 248:
                var1 = true;
                var5.animated = var1;
            case 256:
                var4 = _closure1_slot8;
                var1 = var4.test;
                var1 = var1.bind(var4)(var0);
                if (!var1) {
                    _fun16681_ip = 285;
                    continue _fun16681
                }
            case 273:
                var1 = 'webp';
                var5.format = var1;
            case 285:
                var4 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 8;
                var1 = var9[var1];
                var9 = var4.bind(var6)(var1);
                var4 = var9.fit;
                var1 = {};
                var1.width = var11;
                var1.height = var10;
                var10 = _closure1_slot6;
                var1.maxWidth = var10;
                var10 = _closure1_slot6;
                var1.maxHeight = var10;
                var1 = var4.bind(var9)(var1);
                var4 = var1.width;
                var1 = var1.height;
                var7 = var4 === var7;
                if (!var7) {
                    _fun16681_ip = 365;
                    continue _fun16681
                }
            case 361:
                var7 = var1 === var8;
            case 365:
                if (var7) {
                    _fun16681_ip = 386;
                    continue _fun16681
                }
            case 368:
                var4 = var4 | 0;
                var5.width = var4;
                var1 = var1 | 0;
                var5.height = var1;
            case 386:
                var4 = _closure1_slot1;
                var7 = _closure1_slot2;
                var1 = 9;
                var1 = var7[var1];
                var4 = var4.bind(var6)(var1);
                var1 = var4.isEmpty;
                var4 = var1.bind(var4)(var5);
                var1 = var3;
                if (var4) {
                    _fun16681_ip = 466;
                    continue _fun16681
                }
            case 423:
                var4 = _closure1_slot1;
                var7 = _closure1_slot2;
                var2 = 6;
                var2 = var7[var2];
                var4 = var4.bind(var6)(var2);
                var2 = var4.stringify;
                var4 = var2.bind(var4)(var5);
                var2 = '?';
                var2 = var2 + var4;
                var1 = var3 + var2;
            case 466:
                return var1;
            case 468:
                return var0;
        }
    };
    var _closure1_slot14 = var3;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var5.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var8 = var4.NOOP;
    var _closure1_slot5 = var8;
    var4 = var4.MEDIA_PROXY_MAX_TARGET_RESOLUTION;
    var _closure1_slot6 = var4;
    var4 = /\.webp($|\?|#)/i;
    var _closure1_slot7 = var4;
    var4 = /\.avif($|\?|#)/i;
    var _closure1_slot8 = var4;
    var4 = [16, 20, 22, 24, 28, 32, 40, 44, 48, 56, 60, 64, 80, 96, 100, 128, 160, 240, 256, 300, 320, 480, 512, 600, 640, 1024, 1280, 1536, 2048, 3072, 4096];
    var _closure1_slot9 = var4;
    var4 = 3;
    var4 = var6[var4];
    var9 = var5.bind(var0)(var4);
    var4 = {};
    var8 = 1000;
    var4.max = var8;
    var8 = var9.prototype;
    var8 = Object.create(var8, {
        constructor: {
            value: var9
        }
    });
    var13 = var8;
    var12 = var4;
    var4 = new var13[var9](var12, var11);
    var4 = var4 instanceof Object ? var4 : var8;
    var _closure1_slot10 = var4;
    var4 = 11;
    var4 = var6[var4];
    var8 = var7.bind(var0)(var4);
    var7 = var8.fileFinishedImporting;
    var4 = 'modules/image_upload/ImageLoaderUtils.tsx';
    var4 = var7.bind(var8)(var4);
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var2.getDevicePixelRatio = var4;
    var4 = function arg0() {
        _fun16682: for (var _fun16682_ip = 0;;) switch (_fun16682_ip) {
            case 0:
                var2 = _closure1_slot10;
                var1 = var2.get;
                var0 = arg0;
                var1 = var1.bind(var2)(var0);
                var0 = null;
                var0 = var0 != var1;
                if (!var0) {
                    _fun16682_ip = 35;
                    continue _fun16682
                }
            case 29:
                var0 = var1.loaded;
            case 35:
                return var0;
        }
    };
    var2.isImageLoaded = var4;
    var4 = function arg0, arg1() {
        _fun16683: for (var _fun16683_ip = 0;;) switch (_fun16683_ip) {
            case 0:
                var8 = arg0;
                var4 = arg1;
                var _closure2_slot0 = var8;
                var3 = _closure1_slot10;
                var0 = var3.get;
                var0 = var0.bind(var3)(var8);
                var _closure2_slot2 = var0;
                var3 = null;
                if (!(var3 != var0)) {
                    _fun16683_ip = 51;
                    continue _fun16683
                }
            case 39:
                var5 = var0.loaded;
                if (var5) {
                    _fun16683_ip = 186;
                    continue _fun16683
                }
            case 51:
                if (!(var3 == var0)) {
                    _fun16683_ip = 101;
                    continue _fun16683
                }
            case 55:
                var5 = {};
                var5.url = var8;
                var6 = false;
                var5.loaded = var6;
                _closure2_slot2 = var5;
                var7 = _closure1_slot10;
                var6 = var7.set;
                var6 = var6.bind(var7)(var8, var5);
                var7 = _closure1_slot11;
                var6 = undefined;
                var6 = var7.bind(var6)(var5);
                var0 = var5;
            case 101:
                if (!(var3 != var4)) {
                    _fun16683_ip = 179;
                    continue _fun16683
                }
            case 105:
                var5 = var4.bind;
                var6 = var5.bind(var4)(var3);
                var _closure2_slot1 = var6;
                var5 = var0.callbacks;
                if (!(var3 == var5)) {
                    _fun16683_ip = 163;
                    continue _fun16683
                }
            case 129:
                var5 = global;
                var5 = var5.Set;
                var7 = var5.prototype;
                var7 = Object.create(var7, {
                    constructor: {
                        value: var5
                    }
                });
                var11 = var7;
                var5 = new var11[var5](var10);
                var5 = var5 instanceof Object ? var5 : var7;
                var0.callbacks = var5;
            case 163:
                var5 = var0.callbacks;
                var0 = var5.add;
                var0 = var0.bind(var5)(var6);
            case 179:
                var0 = function() { // Environment: var2
                    _fun16686: for (var _fun16686_ip = 0;;) switch (_fun16686_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var2 = null;
                            var1 = var2 != var1;
                            if (!var1) {
                                _fun16686_ip = 24;
                                continue _fun16686
                            }
                        case 16:
                            var3 = _closure2_slot2;
                            var1 = var2 != var3;
                        case 24:
                            if (!var1) {
                                _fun16686_ip = 99;
                                continue _fun16686
                            }
                        case 27:
                            var1 = _closure2_slot2;
                            var1 = var1.callbacks;
                            if (!(var2 != var1)) {
                                _fun16686_ip = 65;
                                continue _fun16686
                            }
                        case 41:
                            var1 = _closure2_slot2;
                            var4 = var1.callbacks;
                            var3 = var4.delete;
                            var1 = _closure2_slot1;
                            var1 = var3.bind(var4)(var1);
                        case 65:
                            var1 = _closure2_slot2;
                            var1 = var1.backoff;
                            if (!(var2 != var1)) {
                                _fun16686_ip = 99;
                                continue _fun16686
                            }
                        case 79:
                            var0 = _closure2_slot2;
                            var1 = var0.backoff;
                            var0 = var1.cancel;
                            var0 = var0.bind(var1)();
                        case 99:
                            var0 = undefined;
                            return var0;
                    }
                };
                _fun16683_ip = 241;
                continue _fun16683;
            case 186:
                if (!(var3 != var4)) {
                    _fun16683_ip = 237;
                    continue _fun16683
                }
            case 190:
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var3 = 5;
                var4 = var4[var3];
                var3 = undefined;
                var4 = var5.bind(var3)(var4);
                var3 = var4.awaitOnline;
                var4 = var3.bind(var4)();
                var3 = var4.then;
                var2 = function() { // Environment: var2
                    _fun16684: for (var _fun16684_ip = 0;;) switch (_fun16684_ip) {
                        case 0:
                            var1 = _closure2_slot2;
                            var3 = null;
                            var1 = var3 != var1;
                            if (!var1) {
                                _fun16684_ip = 30;
                                continue _fun16684
                            }
                        case 16:
                            var2 = _closure2_slot2;
                            var2 = var2.callbacks;
                            var1 = var3 != var2;
                        case 30:
                            if (!var1) {
                                _fun16684_ip = 60;
                                continue _fun16684
                            }
                        case 33:
                            var0 = _closure2_slot2;
                            var2 = var0.callbacks;
                            var1 = var2.forEach;
                            var0 = function(arg0) { // Environment: var0
                                _fun16685: for (var _fun16685_ip = 0;;) switch (_fun16685_ip) {
                                    case 0:
                                        var3 = arg0;
                                        var2 = _closure2_slot2;
                                        var1 = null;
                                        if (!(var1 == var2)) {
                                            _fun16685_ip = 43;
                                            continue _fun16685
                                        }
                                    case 16:
                                        var4 = {};
                                        var1 = _closure2_slot0;
                                        var4.url = var1;
                                        var2 = true;
                                        var4.loaded = var2;
                                        var1 = undefined;
                                        var1 = var3.bind(var1)(var2, var4);
                                        _fun16685_ip = 57;
                                        continue _fun16685;
                                    case 43:
                                        var2 = _closure2_slot2;
                                        var1 = undefined;
                                        var0 = false;
                                        var0 = var3.bind(var1)(var0, var2);
                                    case 57:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var0 = var1.bind(var2)(var0);
                        case 60:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = var3.bind(var4)(var2);
            case 237:
                var0 = _closure1_slot5;
            case 241:
                return var0;
        }
    };
    var2.loadImage = var4;
    var4 = function arg0() {
        _fun16687: for (var _fun16687_ip = 0;;) switch (_fun16687_ip) {
            case 0:
                var2 = arg0;
                var0 = arguments[1];
                var _closure2_slot0 = var2;
                var3 = undefined;
                if (!(var0 === var3)) {
                    _fun16687_ip = 20;
                    continue _fun16687
                }
            case 18:
                var0 = false;
            case 20:
                if (!var0) {
                    _fun16687_ip = 79;
                    continue _fun16687
                }
            case 23:
                var4 = _closure1_slot9;
                var3 = var4.filter;
                var0 = function(arg0) { // Environment: var1
                    var1 = _closure2_slot0;
                    var0 = arg0;
                    var0 = var0 <= var1;
                    return var0;
                };
                var3 = var3.bind(var4)(var0);
                var0 = var3.pop;
                var0 = var0.bind(var3)();
                var3 = null;
                if (!(var3 != var0)) {
                    _fun16687_ip = 79;
                    continue _fun16687
                }
            case 61:
                var3 = var2 / var0;
                var2 = 1.25;
                if (!(!(var3 <= var2))) {
                    _fun16687_ip = 129;
                    continue _fun16687
                }
            case 79:
                var4 = _closure1_slot9;
                var3 = var4.find;
                var1 = function(arg0) { // Environment: var1
                    var1 = _closure2_slot0;
                    var0 = arg0;
                    var0 = var1 <= var0;
                    return var0;
                };
                var1 = var3.bind(var4)(var1);
                var3 = null;
                if (!(var3 == var1)) {
                    _fun16687_ip = 127;
                    continue _fun16687
                }
            case 107:
                var3 = _closure1_slot9;
                var4 = var3.length;
                var2 = 1;
                var2 = var4 - var2;
                var1 = var3[var2];
            case 127:
                return var1;
            case 129:
                return var0;
        }
    };
    var2.getBestMediaProxySize = var4;
    var2.getSrcWithWidthAndHeight = var3;
    var3 = function arg0, arg1, arg2() {
        _fun16690: for (var _fun16690_ip = 0;;) switch (_fun16690_ip) {
            case 0:
                var6 = arguments[3];
                var3 = undefined;
                if (!(var6 === var3)) {
                    _fun16690_ip = 15;
                    continue _fun16690
                }
            case 9:
                var6 = 'webp';
            case 15:
                var2 = _closure1_slot1;
                var9 = _closure1_slot2;
                var0 = 10;
                var0 = var9[var0];
                var0 = var2.bind(var3)(var0);
                var10 = var0.bind(var3)();
                var0 = global;
                var7 = var0.Math;
                var5 = var7.ceil;
                var4 = arg1;
                var4 = var4 * var10;
                var7 = var5.bind(var7)(var4);
                var8 = var0.Math;
                var5 = var8.ceil;
                var4 = arg2;
                var4 = var4 * var10;
                var5 = var5.bind(var8)(var4);
                var8 = _closure1_slot13;
                var4 = arg0;
                var8 = var8.bind(var3)(var4);
                var4 = _closure1_slot3;
                var1 = 2;
                var8 = var4.bind(var3)(var8, var1);
                var1 = 0;
                var4 = var8[var1];
                var1 = 1;
                var12 = var8[var1];
                var1 = 6;
                var1 = var9[var1];
                var3 = var2.bind(var3)(var1);
                var2 = var3.stringify;
                var1 = {};
                var13 = var1;
                var8 = copyDataProperties(var13, var12);
                var8 = var7 | 0;
                var7 = 'width';
                var1[var7] = var8;
                var7 = var5 | 0;
                var5 = 'height';
                var1[var5] = var7;
                var5 = 'format';
                var1[var5] = var6;
                var3 = var2.bind(var3)(var1);
                var0 = var0.HermesInternal;
                var2 = var0.concat;
                var1 = '';
                var0 = '?';
                var0 = var2.bind(var1)(var4, var0, var3);
                return var0;
        }
    };
    var2.getSizedImageSrc = var3;
    var1 = function arg0() {
        _fun16691: for (var _fun16691_ip = 0;;) switch (_fun16691_ip) {
            case 0:
                var1 = arg0;
                var12 = var1.src;
                var11 = var1.width;
                var10 = var1.height;
                var15 = var1.maxWidth;
                var13 = var1.maxHeight;
                var0 = var1.ratio;
                var2 = undefined;
                if (!(var0 === var2)) {
                    _fun16691_ip = 46;
                    continue _fun16691
                }
            case 43:
                var0 = 1;
            case 46:
                var6 = var1.format;
                if (!(var6 === var2)) {
                    _fun16691_ip = 57;
                    continue _fun16691
                }
            case 55:
                var6 = null;
            case 57:
                var5 = var1.quality;
                if (!(var5 === var2)) {
                    _fun16691_ip = 69;
                    continue _fun16691
                }
            case 67:
                var5 = null;
            case 69:
                var4 = var1.animated;
                if (!(var4 === var2)) {
                    _fun16691_ip = 81;
                    continue _fun16691
                }
            case 79:
                var4 = false;
            case 81:
                var3 = var1.srcIsAnimated;
                if (!(var3 === var2)) {
                    _fun16691_ip = 93;
                    continue _fun16691
                }
            case 91:
                var3 = false;
            case 93:
                var1 = 1;
                var14 = var11;
                var7 = var10;
                if (!(var0 < var1)) {
                    _fun16691_ip = 148;
                    continue _fun16691
                }
            case 106:
                var8 = global;
                var16 = var8.Math;
                var9 = var16.round;
                var1 = var11 * var0;
                var14 = var9.bind(var16)(var1);
                var9 = var8.Math;
                var8 = var9.round;
                var0 = var10 * var0;
                var7 = var8.bind(var9)(var0);
            case 148:
                var0 = null;
                var9 = var14;
                if (!(var0 != var15)) {
                    _fun16691_ip = 176;
                    continue _fun16691
                }
            case 157:
                var1 = global;
                var8 = var1.Math;
                var1 = var8.min;
                var9 = var1.bind(var8)(var14, var15);
            case 176:
                var8 = var7;
                if (!(var0 != var13)) {
                    _fun16691_ip = 202;
                    continue _fun16691
                }
            case 183:
                var0 = global;
                var1 = var0.Math;
                var0 = var1.min;
                var8 = var0.bind(var1)(var7, var13);
            case 202:
                var7 = _closure1_slot1;
                var13 = _closure1_slot2;
                var1 = 10;
                var1 = var13[var1];
                var1 = var7.bind(var2)(var1);
                var7 = var1.bind(var2)();
                var1 = _closure1_slot14;
                var0 = {};
                var0.src = var12;
                var0.sourceWidth = var11;
                var0.sourceHeight = var10;
                var9 = var9 * var7;
                var0.targetWidth = var9;
                var7 = var8 * var7;
                var0.targetHeight = var7;
                var0.format = var6;
                var0.quality = var5;
                var0.animated = var4;
                var0.srcIsAnimated = var3;
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var2.getImageSrc = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 5, 660, 1386, 561, 1444, 1454, 1457, 1461, 22, 1586, 2]);