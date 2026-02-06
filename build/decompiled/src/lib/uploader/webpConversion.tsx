// lib/uploader/webpConversion.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var7;
    var3 = function() {
        var0 = undefined;
        var3 = _closure1_slot7;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot6 = var3;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun37802: for (var _fun37802_ip = 0;;) switch (_fun37802_ip) {
                    case 0:
                        StartGenerator();
                        var5 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 6);
                        if (var6) {
                            _fun37802_ip = 692;
                            continue _fun37802
                        }
                    case 15:
                        var1 = var5;
                        var _closure4_slot0 = var5;
                        var7 = undefined;
                        var4 = undefined;
                        var3 = undefined;
                        var6 = var5.type;
                        var5 = 'image/webp';
                        if (!(var5 !== var6)) {
                            _fun37802_ip = 655;
                            continue _fun37802
                        }
                    case 46:
                        var8 = ['image/png'];
                        var6 = var8.includes;
                        var5 = var1;
                        var5 = var5.type;
                        var5 = var6.bind(var8)(var5);
                        if (var5) {
                            _fun37802_ip = 140;
                            continue _fun37802
                        }
                    case 77:
                        var9 = _closure1_slot4;
                        var8 = var9.verbose;
                        var6 = var1;
                        var11 = var6.type;
                        var6 = global;
                        var6 = var6.HermesInternal;
                        var10 = var6.concat;
                        var6 = '[WebP] Unsupported format: ';
                        var6 = var10.bind(var6)(var11);
                        var6 = var8.bind(var9)(var6);
                        var5 = _closure1_slot5;
                        var5 = var5.UNSUPPORTED_FORMAT;
                        return var5;
                    case 140: // try_start_0
                        var5 = var1;
                        var5 = var5.arrayBuffer;
                        var6 = 'function';
                        var5 = typeof var5;
                        if (!(var6 !== var5)) {
                            _fun37802_ip = 212;
                            continue _fun37802
                        }
                    case 160:
                        var5 = global;
                        var6 = var5.Promise;
                        var5 = var6.prototype;
                        var5 = Object.create(var5, {
                            constructor: {
                                value: var6
                            }
                        });
                        var13 = function(arg0, arg1) { // Environment: var2
                            var1 = arg0;
                            var _closure5_slot0 = var1;
                            var1 = arg1;
                            var _closure5_slot1 = var1;
                            var1 = global;
                            var1 = var1.FileReader;
                            var2 = var1.prototype;
                            var2 = Object.create(var2, {
                                constructor: {
                                    value: var1
                                }
                            });
                            var4 = var2;
                            var1 = new var4[var1](var3);
                            var2 = var1 instanceof Object ? var1 : var2;
                            var _closure5_slot2 = var2;
                            var1 = function() { // Environment: var0
                                var2 = _closure5_slot0;
                                var0 = _closure5_slot2;
                                var1 = var0.result;
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var2.onload = var1;
                            var0 = function() { // Environment: var0
                                var2 = _closure5_slot1;
                                var0 = global;
                                var3 = var0.Error;
                                var0 = var3.prototype;
                                var1 = Object.create(var0, {
                                    constructor: {
                                        value: var3
                                    }
                                });
                                var4 = 'Failed to read file as ArrayBuffer';
                                var5 = var1;
                                var0 = new var5[var3](var4, var3);
                                var1 = var0 instanceof Object ? var0 : var1;
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var2.onerror = var0;
                            var1 = var2.readAsArrayBuffer;
                            var0 = _closure4_slot0;
                            var0 = var1.bind(var2)(var0);
                            var0 = undefined;
                            return var0;
                        };
                        var14 = var5;
                        var2 = new var14[var6](var13, var12);
                        var5 = var2 instanceof Object ? var2 : var5;
                        SaveGenerator(address = 197);
                    case 195:
                        return var5;
                    case 197:
                        ResumeGenerator(result_out_reg = 5, return_bool_out_reg = 2);
                        var6 = var2;
                        var2 = var5;
                        if (!var6) {
                            _fun37802_ip = 241;
                            continue _fun37802
                        }
                    case 209: // try_end0
                        return var5;
                    case 212: // try_start_1
                        var5 = var1;
                        var1 = var5.arrayBuffer;
                        var1 = var1.bind(var5)();
                        SaveGenerator(address = 229);
                    case 227:
                        return var1;
                    case 229:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 5);
                        var2 = var1;
                        if (var5) {
                            _fun37802_ip = 613;
                            continue _fun37802
                        }
                    case 241:
                        var4 = var2;
                    case 244: // try_start_2 // try_end1
                        var6 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var5 = 2;
                        var5 = var8[var5];
                        var5 = var6.bind(var7)(var5);
                        var6 = var5.DiscordImageFactory;
                        var5 = var6.create;
                        var5 = var5.bind(var6)(var4);
                        var3 = var5;
                        var4 = null;
                        if (!(var4 != var5)) {
                            _fun37802_ip = 538;
                            continue _fun37802
                        }
                    case 295:
                        var6 = var3;
                        var5 = var6.hasTransparency;
                        var5 = var5.bind(var6)();
                        if (var5) {
                            _fun37802_ip = 504;
                            continue _fun37802
                        }
                    case 316:
                        var6 = var3;
                        var5 = var6.isAnimated;
                        var5 = var5.bind(var6)();
                        if (var5) {
                            _fun37802_ip = 470;
                            continue _fun37802
                        }
                    case 335:
                        var6 = var3;
                        var5 = var6.isPng8;
                        var5 = var5.bind(var6)();
                        if (var5) {
                            _fun37802_ip = 436;
                            continue _fun37802
                        }
                    case 353: // try_start_3 // try_end2
                        var5 = var3;
                        var3 = var5.hasSrgbIccProfile;
                        var3 = var3.bind(var5)();
                        SaveGenerator(address = 372);
                    case 370:
                        return var3;
                    case 372:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 5);
                        if (var5) {
                            _fun37802_ip = 397;
                            continue _fun37802
                        }
                    case 378:
                        if (var3) {
                            _fun37802_ip = 394;
                            continue _fun37802
                        }
                    case 381:
                        var5 = _closure1_slot5;
                        var5 = var5.ICC_NON_SRGB_PROFILE;
                    case 391: // try_end3
                        return var5;
                    case 394:
                        return var4;
                    case 397:
                        return var3;
                    case 400: // catch_target3
                        CatchBlockStart(arg_register = 6);
                        var5 = _closure1_slot4;
                        var4 = var5.warn;
                        var3 = '[WebP] ICC profile detection failed:';
                        var3 = var4.bind(var5)(var3, var6);
                        var3 = _closure1_slot5;
                        var3 = var3.ICC_DETECTION_FAILED;
                        return var3;
                    case 436: // try_start_4
                        var5 = _closure1_slot4;
                        var4 = var5.verbose;
                        var3 = '[webp] png is PNG8 format (indexed color) - skipping conversion';
                        var3 = var4.bind(var5)(var3);
                        var3 = _closure1_slot5;
                        var3 = var3.PNG8_FORMAT;
                    case 467: // try_end4
                        return var3;
                    case 470: // try_start_5
                        var5 = _closure1_slot4;
                        var4 = var5.verbose;
                        var3 = '[webp] png is animated (apng) - skipping conversion';
                        var3 = var4.bind(var5)(var3);
                        var3 = _closure1_slot5;
                        var3 = var3.ANIMATED_IMAGE;
                    case 501: // try_end5
                        return var3;
                    case 504: // try_start_6
                        var5 = _closure1_slot4;
                        var4 = var5.verbose;
                        var3 = '[webp] png uses actual transparency - skipping conversion';
                        var3 = var4.bind(var5)(var3);
                        var2 = _closure1_slot5;
                        var2 = var2.HAS_TRANSPARENCY;
                    case 535: // try_end6
                        return var2;
                    case 538: // try_start_7
                        var2 = global;
                        var4 = var2.Error;
                        var2 = var4.prototype;
                        var3 = Object.create(var2, {
                            constructor: {
                                value: var4
                            }
                        });
                        var13 = 'DiscordImage.create returned null';
                        var14 = var3;
                        var2 = new var14[var4](var13, var12);
                        var2 = var2 instanceof Object ? var2 : var3;
                        throw var2;
                    case 574: // try_end7 // catch_target2 // catch_target4 // catch_target5 // catch_target6 // catch_target7
                        CatchBlockStart(arg_register = 6);
                        var5 = _closure1_slot4;
                        var4 = var5.warn;
                        var3 = '[WebP] PNG analysis failed:';
                        var3 = var4.bind(var5)(var3, var6);
                        var2 = _closure1_slot5;
                        var2 = var2.CORRUPTED_FILE;
                        return var2;
                    case 613:
                        return var1;
                    case 616: // catch_target0 // catch_target1
                        CatchBlockStart(arg_register = 5);
                        var4 = _closure1_slot4;
                        var3 = var4.warn;
                        var2 = '[WebP] Failed to read file data:';
                        var2 = var3.bind(var4)(var2, var5);
                        var1 = _closure1_slot5;
                        var1 = var1.CONVERSION_FAILED;
                        return var1;
                    case 655:
                        var4 = _closure1_slot4;
                        var3 = var4.verbose;
                        var2 = '[WebP] File already WebP format';
                        var2 = var3.bind(var4)(var2);
                        var1 = _closure1_slot5;
                        var1 = var1.ALREADY_WEBP;
                        return var1;
                    case 692:
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
    var0 = function arg0() {
        var0 = global;
        var2 = var0.Uint8Array;
        var0 = arg0;
        var0 = var0.data;
        var4 = var0.buffer;
        var1 = var2.prototype;
        var1 = Object.create(var1, {
            constructor: {
                value: var2
            }
        });
        var5 = var1;
        var0 = new var5[var2](var4, var3);
        var2 = var0 instanceof Object ? var0 : var1;
        var3 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 3;
        var0 = var1[var0];
        var1 = undefined;
        var0 = var3.bind(var1)(var0);
        var2 = var0.bind(var1)(var2);
        var1 = var2.toString;
        var0 = 16;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot8 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun37809: for (var _fun37809_ip = 0;;) switch (_fun37809_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun37809_ip = 1034;
                            continue _fun37809
                        }
                    case 12:
                        var16 = arg0;
                        var15 = undefined;
                        var8 = undefined;
                        var _closure4_slot0 = var15;
                        var9 = undefined;
                        var4 = undefined;
                        var _closure4_slot1 = var15;
                        var3 = undefined;
                        var _closure4_slot2 = var15;
                        var12 = undefined;
                        var14 = undefined;
                        var17 = undefined;
                        var10 = undefined;
                        var _closure4_slot3 = var15;
                        var7 = undefined;
                        var _closure4_slot4 = var15;
                        var11 = undefined;
                        var1 = global;
                        var13 = var1.document;
                        var5 = var13.createElement;
                        var2 = 'canvas';
                        var13 = var5.bind(var13)(var2);
                        var8 = var13;
                        _closure4_slot0 = var13;
                        var5 = var13.getContext;
                        var2 = '2d';
                        var2 = var5.bind(var13)(var2);
                        var9 = var2;
                        var5 = null;
                        if (!(var5 != var2)) {
                            _fun37809_ip = 1000;
                            continue _fun37809
                        }
                    case 116:
                        var2 = var1.Image;
                        var13 = var2.prototype;
                        var13 = Object.create(var13, {
                            constructor: {
                                value: var2
                            }
                        });
                        var50 = var13;
                        var2 = new var50[var2](var49);
                        var2 = var2 instanceof Object ? var2 : var13;
                        var4 = var2;
                        _closure4_slot1 = var2;
                        var18 = var1.URL;
                        var13 = var18.createObjectURL;
                        var2 = var16;
                        var2 = var13.bind(var18)(var2);
                        var3 = var2;
                        _closure4_slot2 = var2;
                    case 176: // try_start_0
                        var18 = var1.Promise;
                        var2 = var18.prototype;
                        var13 = Object.create(var2, {
                            constructor: {
                                value: var18
                            }
                        });
                        var49 = function(arg0, arg1) { // Environment: var6
                            var0 = arg0;
                            var _closure5_slot0 = var0;
                            var0 = arg1;
                            var _closure5_slot1 = var0;
                            var3 = _closure4_slot1;
                            var2 = function() { // Environment: var1
                                var1 = _closure5_slot0;
                                var0 = undefined;
                                var0 = var1.bind(var0)();
                                return var0;
                            };
                            var3.onload = var2;
                            var2 = _closure4_slot1;
                            var1 = function() { // Environment: var1
                                var2 = _closure5_slot1;
                                var0 = global;
                                var3 = var0.Error;
                                var0 = var3.prototype;
                                var1 = Object.create(var0, {
                                    constructor: {
                                        value: var3
                                    }
                                });
                                var4 = 'failed to load image';
                                var5 = var1;
                                var0 = new var5[var3](var4, var3);
                                var1 = var0 instanceof Object ? var0 : var1;
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var2.onerror = var1;
                            var1 = _closure4_slot1;
                            var0 = _closure4_slot2;
                            var1.src = var0;
                            var0 = undefined;
                            return var0;
                        };
                        var50 = var13;
                        var2 = new var50[var18](var49, var48);
                        var2 = var2 instanceof Object ? var2 : var13;
                        SaveGenerator(address = 211);
                    case 209:
                        return var2;
                    case 211:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 13);
                        if (var13) {
                            _fun37809_ip = 956;
                            continue _fun37809
                        }
                    case 220:
                        var13 = var8;
                        var18 = var4;
                        var4 = var18.width;
                        var13.width = var4;
                        var4 = var18.height;
                        var13.height = var4;
                        var13 = var9;
                        var4 = var13.drawImage;
                        var19 = 0;
                        var4 = var4.bind(var13)(var18, var19, var19);
                    case 266: // try_end0
                        var18 = var1.URL;
                        var13 = var18.revokeObjectURL;
                        var4 = var3;
                        var4 = var13.bind(var18)(var4);
                        var18 = var1.Promise;
                        var4 = var18.prototype;
                        var13 = Object.create(var4, {
                            constructor: {
                                value: var18
                            }
                        });
                        var49 = function(arg0) { // Environment: var6
                            var4 = _closure4_slot0;
                            var3 = var4.toBlob;
                            var2 = arg0;
                            var1 = 'image/webp';
                            var0 = 1;
                            var0 = var3.bind(var4)(var2, var1, var0);
                            var0 = undefined;
                            return var0;
                        };
                        var50 = var13;
                        var4 = new var50[var18](var49, var48);
                        var4 = var4 instanceof Object ? var4 : var13;
                        SaveGenerator(address = 321);
                    case 319:
                        return var4;
                    case 321:
                        ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 13);
                        if (var13) {
                            _fun37809_ip = 953;
                            continue _fun37809
                        }
                    case 330:
                        var12 = var4;
                        if (!(var5 != var4)) {
                            _fun37809_ip = 919;
                            continue _fun37809
                        }
                    case 340:
                        var13 = var1.performance;
                        var5 = var13.now;
                        var14 = var5.bind(var13)();
                        var20 = var9;
                        var18 = var20.getImageData;
                        var5 = var8;
                        var47 = var5.width;
                        var46 = var5.height;
                        var50 = var20;
                        var49 = 0;
                        var48 = 0;
                        var5 = var50[var18](var49, var48, var47, var46, var45);
                        SaveGenerator(address = 392);
                    case 390:
                        return var5;
                    case 392:
                        ResumeGenerator(result_out_reg = 5, return_bool_out_reg = 13);
                        if (var13) {
                            _fun37809_ip = 916;
                            continue _fun37809
                        }
                    case 401:
                        var17 = var5;
                        var21 = var9;
                        var20 = var21.clearRect;
                        var13 = var8;
                        var47 = var13.width;
                        var46 = var13.height;
                        var50 = var21;
                        var49 = 0;
                        var48 = 0;
                        var13 = var50[var20](var49, var48, var47, var46, var45);
                        var13 = var1.Image;
                        var18 = var13.prototype;
                        var18 = Object.create(var18, {
                            constructor: {
                                value: var13
                            }
                        });
                        var50 = var18;
                        var13 = new var50[var13](var49);
                        var13 = var13 instanceof Object ? var13 : var18;
                        var10 = var13;
                        _closure4_slot3 = var13;
                        var20 = var1.URL;
                        var18 = var20.createObjectURL;
                        var13 = var12;
                        var13 = var18.bind(var20)(var13);
                        var7 = var13;
                        _closure4_slot4 = var13;
                    case 497: // try_start_1
                        var18 = var1.Promise;
                        var13 = var18.prototype;
                        var13 = Object.create(var13, {
                            constructor: {
                                value: var18
                            }
                        });
                        var49 = function(arg0, arg1) { // Environment: var6
                            var0 = arg0;
                            var _closure5_slot0 = var0;
                            var0 = arg1;
                            var _closure5_slot1 = var0;
                            var3 = _closure4_slot3;
                            var2 = function() { // Environment: var1
                                var1 = _closure5_slot0;
                                var0 = undefined;
                                var0 = var1.bind(var0)();
                                return var0;
                            };
                            var3.onload = var2;
                            var2 = _closure4_slot3;
                            var1 = function() { // Environment: var1
                                var2 = _closure5_slot1;
                                var0 = global;
                                var3 = var0.Error;
                                var0 = var3.prototype;
                                var1 = Object.create(var0, {
                                    constructor: {
                                        value: var3
                                    }
                                });
                                var4 = 'failed to load image';
                                var5 = var1;
                                var0 = new var5[var3](var4, var3);
                                var1 = var0 instanceof Object ? var0 : var1;
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var2.onerror = var1;
                            var1 = _closure4_slot3;
                            var0 = _closure4_slot4;
                            var1.src = var0;
                            var0 = undefined;
                            return var0;
                        };
                        var50 = var13;
                        var6 = new var50[var18](var49, var48);
                        var6 = var6 instanceof Object ? var6 : var13;
                        SaveGenerator(address = 532);
                    case 530:
                        return var6;
                    case 532:
                        ResumeGenerator(result_out_reg = 6, return_bool_out_reg = 13);
                        if (var13) {
                            _fun37809_ip = 872;
                            continue _fun37809
                        }
                    case 541:
                        var20 = var9;
                        var18 = var20.drawImage;
                        var13 = var10;
                        var13 = var18.bind(var20)(var13, var19, var19);
                    case 560: // try_end1
                        var20 = var1.URL;
                        var18 = var20.revokeObjectURL;
                        var13 = var7;
                        var13 = var18.bind(var20)(var13);
                        var18 = var9;
                        var13 = var18.getImageData;
                        var47 = var8.width;
                        var46 = var8.height;
                        var50 = var18;
                        var49 = 0;
                        var48 = 0;
                        var8 = var50[var13](var49, var48, var47, var46, var45);
                        SaveGenerator(address = 614);
                    case 612:
                        return var8;
                    case 614:
                        ResumeGenerator(result_out_reg = 8, return_bool_out_reg = 9);
                        if (var9) {
                            _fun37809_ip = 869;
                            continue _fun37809
                        }
                    case 623:
                        var13 = _closure1_slot8;
                        var32 = var13.bind(var15)(var17);
                        var31 = var13.bind(var15)(var8);
                        var13 = var32 === var31;
                        var17 = var1.performance;
                        var15 = var17.now;
                        var15 = var15.bind(var17)();
                        var17 = var15 - var14;
                        var11 = var17;
                        var15 = _closure1_slot4;
                        var14 = var15.verbose;
                        var30 = var16.name;
                        var47 = var16.size;
                        var45 = var10.width;
                        var43 = var10.height;
                        var10 = var12;
                        var39 = var10.size;
                        var16 = var1.Math;
                        var10 = var16.round;
                        var33 = var10.bind(var16)(var17);
                        var10 = var1.HermesInternal;
                        var24 = var10.concat;
                        var50 = '[WebP] Pixel hash results: fileName=';
                        var48 = ' fileLength={';
                        var46 = '} width=';
                        var44 = ' height=';
                        var42 = ' pixelHash=';
                        var40 = ' mezzanineFileLength={';
                        var38 = '} mezzaninePixelHash=';
                        var36 = ' match=';
                        var34 = ' elapsed_ms=';
                        var49 = var30;
                        var41 = var32;
                        var37 = var31;
                        var35 = var13;
                        var10 = var50[var24](var49, var48, var47, var46, var45, var44, var43, var42, var41, var40, var39, var38, var37, var36, var35, var34, var33, var32);
                        var10 = var14.bind(var15)(var10);
                        var10 = {};
                        if (var13) {
                            _fun37809_ip = 846;
                            continue _fun37809
                        }
                    case 811:
                        var13 = false;
                        var10.success = var13;
                        var9 = _closure1_slot5;
                        var9 = var9.PIXEL_HASH_MISMATCH;
                        var10.reason = var9;
                        var9 = var11;
                        var10.pixelHashTimeMs = var9;
                        var9 = var10;
                        _fun37809_ip = 866;
                        continue _fun37809;
                    case 846:
                        var13 = true;
                        var10.success = var13;
                        var10.webpBlob = var12;
                        var10.pixelHashTimeMs = var11;
                        var9 = var10;
                    case 866:
                        return var9;
                    case 869:
                        return var8;
                    case 872:
                        var10 = var1.URL;
                        var9 = var10.revokeObjectURL;
                        var8 = var7;
                        var8 = var9.bind(var10)(var8);
                        return var6;
                    case 895: // catch_target1
                        CatchBlockStart(arg_register = 6);
                        var9 = var1.URL;
                        var8 = var9.revokeObjectURL;
                        var7 = var8.bind(var9)(var7);
                        throw var6;
                    case 916:
                        return var5;
                    case 919:
                        var7 = var1.Error;
                        var5 = var7.prototype;
                        var6 = Object.create(var5, {
                            constructor: {
                                value: var7
                            }
                        });
                        var49 = 'failed to convert to webp';
                        var50 = var6;
                        var5 = new var50[var7](var49, var48);
                        var5 = var5 instanceof Object ? var5 : var6;
                        throw var5;
                    case 953:
                        return var4;
                    case 956:
                        var6 = var1.URL;
                        var5 = var6.revokeObjectURL;
                        var4 = var3;
                        var4 = var5.bind(var6)(var4);
                        return var2;
                    case 979: // catch_target0
                        CatchBlockStart(arg_register = 2);
                        var5 = var1.URL;
                        var4 = var5.revokeObjectURL;
                        var3 = var4.bind(var5)(var3);
                        throw var2;
                    case 1000:
                        var3 = var1.Error;
                        var1 = var3.prototype;
                        var2 = Object.create(var1, {
                            constructor: {
                                value: var3
                            }
                        });
                        var49 = 'could not get canvas context';
                        var50 = var2;
                        var1 = new var50[var3](var49, var48);
                        var1 = var1 instanceof Object ? var1 : var2;
                        throw var1;
                    case 1034:
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
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun37819: for (var _fun37819_ip = 0;;) switch (_fun37819_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 3);
                        if (var3) {
                            _fun37819_ip = 786;
                            continue _fun37819
                        }
                    case 15:
                        var8 = var1;
                        var _closure4_slot0 = var1;
                        var3 = undefined;
                        var10 = undefined;
                        var _closure4_slot1 = var3;
                        var2 = undefined;
                        var6 = undefined;
                        var11 = undefined;
                        var9 = undefined;
                        var13 = undefined;
                        var15 = undefined;
                        var14 = undefined;
                        var12 = null;
                        if (!(var12 != var1)) {
                            _fun37819_ip = 750;
                            continue _fun37819
                        }
                    case 53:
                        var17 = _closure1_slot4;
                        var16 = var17.verbose;
                        var4 = var8;
                        var19 = var4.name;
                        var4 = global;
                        var5 = var4.HermesInternal;
                        var18 = var5.concat;
                        var5 = '[WebP] Starting conversion for: ';
                        var5 = var18.bind(var5)(var19);
                        var5 = var16.bind(var17)(var5);
                        var16 = var4.performance;
                        var5 = var16.now;
                        var5 = var5.bind(var16)();
                        var10 = var5;
                        _closure4_slot1 = var5;
                        var2 = function arg0() {
                            _fun37820: for (var _fun37820_ip = 0;;) switch (_fun37820_ip) {
                                case 0:
                                    var4 = arguments[1];
                                    var0 = undefined;
                                    if (!(var4 === var0)) {
                                        _fun37820_ip = 21;
                                        continue _fun37820
                                    }
                                case 9:
                                    var0 = _closure4_slot0;
                                    var4 = var0.size;
                                case 21:
                                    var0 = {};
                                    var1 = false;
                                    var0.success = var1;
                                    var2 = _closure4_slot0;
                                    var0.originalFile = var2;
                                    var3 = var2.size;
                                    var0.sizeBefore = var3;
                                    var0.sizeAfter = var4;
                                    var3 = var2.size;
                                    var2 = 0;
                                    var3 = var3 > var2;
                                    var2 = 1;
                                    if (!var3) {
                                        _fun37820_ip = 87;
                                        continue _fun37820
                                    }
                                case 74:
                                    var3 = _closure4_slot0;
                                    var3 = var3.size;
                                    var2 = var4 / var3;
                                case 87:
                                    var0.compressionRatio = var2;
                                    var2 = arg0;
                                    var0.reason = var2;
                                    var4 = global;
                                    var3 = var4.Math;
                                    var2 = var3.round;
                                    var5 = var4.performance;
                                    var4 = var5.now;
                                    var4 = var4.bind(var5)();
                                    var1 = _closure4_slot1;
                                    var1 = var4 - var1;
                                    var1 = var2.bind(var3)(var1);
                                    var0.compressTimeMs = var1;
                                    return var0;
                            }
                        };
                    case 130: // try_start_0
                        var16 = _closure1_slot6;
                        var5 = var8;
                        var5 = var16.bind(var3)(var5);
                        SaveGenerator(address = 146);
                    case 144:
                        return var5;
                    case 146:
                        ResumeGenerator(result_out_reg = 5, return_bool_out_reg = 16);
                        if (var16) {
                            _fun37819_ip = 680;
                            continue _fun37819
                        }
                    case 155:
                        var6 = var5;
                        if (!(var12 == var5)) {
                            _fun37819_ip = 629;
                            continue _fun37819
                        }
                    case 165:
                        var16 = var8;
                        var7 = function() {
                            var0 = undefined;
                            var3 = _closure1_slot9;
                            var2 = var3.apply;
                            var0 = arguments;
                            var1 = var0;
                            var0 = this;
                            var0 = var2.bind(var3)(var0, var1);
                            return var0;
                        };
                        var7 = var7.bind(var3)(var16);
                        SaveGenerator(address = 182);
                    case 180:
                        return var7;
                    case 182:
                        ResumeGenerator(result_out_reg = 7, return_bool_out_reg = 16);
                        if (var16) {
                            _fun37819_ip = 626;
                            continue _fun37819
                        }
                    case 191:
                        var9 = var7;
                        var16 = var7.success;
                        if (!var16) {
                            _fun37819_ip = 587;
                            continue _fun37819
                        }
                    case 206:
                        var16 = var9;
                        var16 = var16.webpBlob;
                        if (!(var12 != var16)) {
                            _fun37819_ip = 587;
                            continue _fun37819
                        }
                    case 222:
                        var16 = var9;
                        var13 = var16.webpBlob;
                        var16 = var8;
                        var16 = var16.size;
                        var17 = 0;
                        var19 = var16 > var17;
                        var18 = 1;
                        var16 = var18;
                        if (!var19) {
                            _fun37819_ip = 274;
                            continue _fun37819
                        }
                    case 254:
                        var19 = var13;
                        var20 = var19.size;
                        var19 = var8;
                        var19 = var19.size;
                        var16 = var20 / var19;
                    case 274:
                        var15 = var16;
                        var16 = var18 - var16;
                        var14 = var16;
                        if (!(!(var16 < var17))) {
                            _fun37819_ip = 467;
                            continue _fun37819
                        }
                    case 291:
                        var17 = var4.performance;
                        var16 = var17.now;
                        var16 = var16.bind(var17)();
                        var17 = var16 - var10;
                        var19 = _closure1_slot4;
                        var16 = var19.verbose;
                        var18 = var8;
                        var24 = var18.name;
                        var20 = var4.Math;
                        var10 = var20.round;
                        var28 = var10.bind(var20)(var17);
                        var10 = var4.HermesInternal;
                        var22 = var10.concat;
                        var31 = '[WebP] Conversion successful: ';
                        var29 = ' to WebP in ';
                        var27 = 'ms';
                        var30 = var24;
                        var10 = var31[var22](var30, var29, var28, var27, var26);
                        var10 = var16.bind(var19)(var10);
                        var10 = {};
                        var16 = true;
                        var10.success = var16;
                        var10.originalFile = var18;
                        var16 = var13;
                        var10.convertedBlob = var16;
                        var18 = var18.size;
                        var10.sizeBefore = var18;
                        var16 = var16.size;
                        var10.sizeAfter = var16;
                        var10.compressionRatio = var15;
                        var15 = var9;
                        var15 = var15.pixelHashTimeMs;
                        var10.hashTimeMs = var15;
                        var16 = var4.Math;
                        var15 = var16.round;
                        var15 = var15.bind(var16)(var17);
                        var10.compressTimeMs = var15;
                        _fun37819_ip = 584;
                        continue _fun37819;
                    case 467:
                        var16 = _closure1_slot4;
                        var15 = var16.verbose;
                        var18 = var4.Math;
                        var17 = var18.round;
                        var19 = var14;
                        var14 = 100;
                        var14 = var14 * var19;
                        var30 = var17.bind(var18)(var14);
                        var14 = var8;
                        var28 = var14.size;
                        var26 = var13.size;
                        var14 = var4.HermesInternal;
                        var20 = var14.concat;
                        var31 = '[WebP] Insufficient savings: ';
                        var29 = '% < 0% (';
                        var27 = ' -> ';
                        var25 = ' bytes)';
                        var14 = var31[var20](var30, var29, var28, var27, var26, var25, var24);
                        var14 = var15.bind(var16)(var14);
                        var15 = var2;
                        var14 = _closure1_slot5;
                        var14 = var14.INSUFFICIENT_SAVINGS;
                        var13 = var13.size;
                        var10 = var15.bind(var3)(var14, var13);
                    case 584: // try_end0
                        return var10;
                    case 587: // try_start_1
                        var10 = var2;
                        var9 = var9.reason;
                        var11 = var9;
                        if (!(var12 == var9)) {
                            _fun37819_ip = 615;
                            continue _fun37819
                        }
                    case 603:
                        var9 = _closure1_slot5;
                        var9 = var9.UNKNOWN_ERROR;
                        _fun37819_ip = 618;
                        continue _fun37819;
                    case 615:
                        var9 = var11;
                    case 618:
                        var9 = var10.bind(var3)(var9);
                    case 623: // try_end1
                        return var9;
                    case 626:
                        return var7;
                    case 629: // try_start_2
                        var10 = _closure1_slot4;
                        var9 = var10.verbose;
                        var7 = var6;
                        var6 = var4.HermesInternal;
                        var11 = var6.concat;
                        var6 = '[WebP] Conversion rejected: ';
                        var6 = var11.bind(var6)(var7);
                        var6 = var9.bind(var10)(var6);
                        var6 = var2;
                        var6 = var6.bind(var3)(var7);
                    case 677: // try_end2
                        return var6;
                    case 680:
                        return var5;
                    case 683: // catch_target0 // catch_target1 // catch_target2
                        CatchBlockStart(arg_register = 7);
                        var6 = _closure1_slot4;
                        var5 = var6.error;
                        var10 = var8.name;
                        var4 = var4.HermesInternal;
                        var9 = var4.concat;
                        var8 = '[WebP] Conversion failed for ';
                        var4 = ':';
                        var4 = var9.bind(var8)(var10, var4);
                        var4 = var5.bind(var6)(var4, var7);
                        var1 = _closure1_slot5;
                        var1 = var1.CONVERSION_FAILED;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    case 750:
                        var1 = global;
                        var3 = var1.Error;
                        var1 = var3.prototype;
                        var2 = Object.create(var1, {
                            constructor: {
                                value: var3
                            }
                        });
                        var30 = 'file is null or undefined';
                        var31 = var2;
                        var1 = new var31[var3](var30, var29);
                        var1 = var1 instanceof Object ? var1 : var2;
                        throw var1;
                    case 786:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot10 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot10 = var0;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var0 = 0;
    var4 = var7[var0];
    var0 = undefined;
    var4 = var5.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var7[var4];
    var8 = var5.bind(var0)(var4);
    var4 = var8.prototype;
    var5 = Object.create(var4, {
        constructor: {
            value: var8
        }
    });
    var12 = 'WebP';
    var13 = var5;
    var4 = new var13[var8](var12, var11);
    var4 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot4 = var4;
    var4 = {};
    var5 = 'already_webp';
    var4.ALREADY_WEBP = var5;
    var5 = 'unsupported_format';
    var4.UNSUPPORTED_FORMAT = var5;
    var5 = 'animated_image';
    var4.ANIMATED_IMAGE = var5;
    var5 = 'has_transparency';
    var4.HAS_TRANSPARENCY = var5;
    var5 = 'png8_format';
    var4.PNG8_FORMAT = var5;
    var5 = 'insufficient_savings';
    var4.INSUFFICIENT_SAVINGS = var5;
    var5 = 'conversion_failed';
    var4.CONVERSION_FAILED = var5;
    var5 = 'corrupted_file';
    var4.CORRUPTED_FILE = var5;
    var5 = 'pixel_hash_mismatch';
    var4.PIXEL_HASH_MISMATCH = var5;
    var5 = 'icc_non_srgb_profile';
    var4.ICC_NON_SRGB_PROFILE = var5;
    var5 = 'icc_detection_failed';
    var4.ICC_DETECTION_FAILED = var5;
    var5 = 'unknown_error';
    var4.UNKNOWN_ERROR = var5;
    var _closure1_slot5 = var4;
    var5 = 4;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'lib/uploader/webpConversion.tsx';
    var5 = var6.bind(var7)(var5);
    var2.ConversionFailureReason = var4;
    var2._shouldConvertToWebP = var3;
    var1 = function() {
        var0 = undefined;
        var3 = _closure1_slot10;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.maybeConvertToWebP = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 3, 4135, 1215, 2]);