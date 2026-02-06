// modules/video_backgrounds/applyBackgroundOption.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun66561: for (var _fun66561_ip = 0;;) switch (_fun66561_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun66561_ip = 116;
                            continue _fun66561
                        }
                    case 7:
                        var3 = global;
                        var4 = var3.fetch;
                        var2 = undefined;
                        var1 = arg0;
                        var1 = var4.bind(var2)(var1);
                        SaveGenerator(address = 29);
                    case 27:
                        return var1;
                    case 29:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun66561_ip = 113;
                            continue _fun66561
                        }
                    case 35:
                        var2 = var1.blob;
                        var2 = var2.bind(var1)();
                        SaveGenerator(address = 49);
                    case 47:
                        return var2;
                    case 49:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 4);
                        if (var4) {
                            _fun66561_ip = 110;
                            continue _fun66561
                        }
                    case 55:
                        var4 = var3.Uint8ClampedArray;
                        var3 = var2.arrayBuffer;
                        var3 = var3.bind(var2)();
                        SaveGenerator(address = 75);
                    case 73:
                        return var3;
                    case 75:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 5);
                        if (var5) {
                            _fun66561_ip = 107;
                            continue _fun66561
                        }
                    case 81:
                        var5 = var4.prototype;
                        var5 = Object.create(var5, {
                            constructor: {
                                value: var4
                            }
                        });
                        var7 = var5;
                        var6 = var3;
                        var4 = new var7[var4](var6, var5);
                        var4 = var4 instanceof Object ? var4 : var5;
                        return var4;
                    case 107:
                        return var3;
                    case 110:
                        return var2;
                    case 113:
                        return var1;
                    case 116:
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
    var0 = function arg0, arg1, arg2, arg3, arg4() {
        _fun66562: for (var _fun66562_ip = 0;;) switch (_fun66562_ip) {
            case 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 6;
                var2 = var2[var0];
                var0 = undefined;
                var3 = var3.bind(var0)(var2);
                var2 = var3.isWindows;
                var4 = var2.bind(var3)();
                if (!var4) {
                    _fun66562_ip = 86;
                    continue _fun66562
                }
            case 38:
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 7;
                var2 = var5[var2];
                var5 = var3.bind(var0)(var2);
                var3 = var5.getH264MFVoiceExperimentConfig;
                var2 = {};
                var6 = 'applyBackgroundMediaFilterSettings';
                var2.location = var6;
                var2 = var3.bind(var5)(var2);
                var4 = var2.enabled;
            case 86:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 8;
                var1 = var3[var1];
                var3 = var2.bind(var0)(var1);
                var2 = var3.applyMediaFilterSettings;
                var1 = {};
                var5 = {};
                var6 = arg2;
                var5.graph = var6;
                var6 = arg1;
                var5.target = var6;
                var6 = arg3;
                var5.image = var6;
                var6 = arg4;
                var5.blob = var6;
                var5.useH264MFDecoder = var4;
                var4 = arg0;
                var1[var4] = var5;
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var _closure1_slot10 = var0;
    var0 = function() {
        var0 = undefined;
        var3 = _closure1_slot12;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot11 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0, arg1, arg2) { // Environment: var2
            var0 = function*(arg0, arg1, arg2) { // Original name: ?anon_0_, environment: var0
                _fun66566: for (var _fun66566_ip = 0;;) switch (_fun66566_ip) {
                    case 0:
                        StartGenerator();
                        var11 = arg2;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun66566_ip = 550;
                            continue _fun66566
                        }
                    case 15:
                        var4 = arg0;
                        var3 = arg1;
                        var1 = undefined;
                        var7 = undefined;
                        var6 = undefined;
                        var8 = false;
                        var10 = null;
                        if (!(var10 != var11)) {
                            _fun66566_ip = 501;
                            continue _fun66566
                        }
                    case 38:
                        var9 = _closure1_slot7;
                        if (!(var11 !== var9)) {
                            _fun66566_ip = 449;
                            continue _fun66566
                        }
                    case 52:
                        var12 = typeof var11;
                        var9 = 'string';
                        if (!(var9 !== var12)) {
                            _fun66566_ip = 218;
                            continue _fun66566
                        }
                    case 66:
                        var9 = 'number';
                        if (!(var9 !== var12)) {
                            _fun66566_ip = 218;
                            continue _fun66566
                        }
                    case 77:
                        var14 = var11.asset;
                        var12 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var13 = 11;
                        var9 = var9[var13];
                        var12 = var12.bind(var1)(var9);
                        var9 = var12.isAnimatedIconHash;
                        var9 = var9.bind(var12)(var14);
                        if (var9) {
                            _fun66566_ip = 145;
                            continue _fun66566
                        }
                    case 117:
                        var15 = _closure1_slot0;
                        var12 = _closure1_slot2;
                        var12 = var12[var13];
                        var15 = var15.bind(var1)(var12);
                        var12 = var15.isVideoAssetHash;
                        var9 = var12.bind(var15)(var14);
                    case 145:
                        var8 = var9;
                        var12 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var9 = var9[var13];
                        var13 = var12.bind(var1)(var9);
                        var12 = var13.getVideoFilterAssetURL;
                        var9 = {};
                        var15 = var11.user_id;
                        var9.userId = var15;
                        var15 = var11.id;
                        var9.assetId = var15;
                        var9.assetHash = var14;
                        var14 = _closure1_slot6;
                        var14 = var14.width;
                        var9.size = var14;
                        var7 = var12.bind(var13)(var9);
                        _fun66566_ip = 270;
                        continue _fun66566;
                    case 218:
                        var12 = _closure1_slot1;
                        var13 = _closure1_slot2;
                        var9 = 10;
                        var9 = var13[var9];
                        var9 = var12.bind(var1)(var9);
                        var9 = var9.bind(var1)();
                        var9 = var9[var11];
                        var12 = var9.isVideo;
                        var11 = var10 != var12;
                        if (!var11) {
                            _fun66566_ip = 262;
                            continue _fun66566
                        }
                    case 259:
                        var11 = var12;
                    case 262:
                        var8 = var11;
                        var7 = var9.source;
                    case 270:
                        var9 = var7;
                        if (!(var10 != var9)) {
                            _fun66566_ip = 446;
                            continue _fun66566
                        }
                    case 280: // try_start_0
                        var10 = var8;
                        var9 = undefined;
                        if (var10) {
                            _fun66566_ip = 319;
                            continue _fun66566
                        }
                    case 288:
                        var11 = var7;
                        var10 = function arg0() {
                            var1 = arg0;
                            var _closure5_slot0 = var1;
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
                                var _closure6_slot0 = var1;
                                var1 = arg1;
                                var _closure6_slot1 = var1;
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
                                var1 = var1 instanceof Object ? var1 : var2;
                                var _closure6_slot2 = var1;
                                var2 = 'anonymous';
                                var1.crossOrigin = var2;
                                var2 = function() { // Environment: var0
                                    var0 = global;
                                    var2 = var0.document;
                                    var1 = var2.createElement;
                                    var0 = 'canvas';
                                    var2 = var1.bind(var2)(var0);
                                    var0 = _closure1_slot6;
                                    var0 = var0.width;
                                    var2.width = var0;
                                    var0 = _closure1_slot6;
                                    var0 = var0.height;
                                    var2.height = var0;
                                    var1 = var2.getContext;
                                    var0 = '2d';
                                    var6 = var1.bind(var2)(var0);
                                    var4 = _closure1_slot1;
                                    var1 = _closure1_slot2;
                                    var0 = 5;
                                    var1 = var1[var0];
                                    var0 = undefined;
                                    var5 = var4.bind(var0)(var1);
                                    var1 = null;
                                    var4 = var1 != var6;
                                    var1 = 'Canvas context is missing';
                                    var1 = var5.bind(var0)(var4, var1);
                                    var9 = _closure6_slot2;
                                    var5 = var9.height;
                                    var4 = var9.width;
                                    var4 = var5 / var4;
                                    var5 = _closure1_slot6;
                                    var8 = var5.height;
                                    var3 = _closure1_slot6;
                                    var3 = var3.height;
                                    var7 = var3 / var4;
                                    var3 = var2.width;
                                    var3 = var3 - var7;
                                    var4 = 2;
                                    var13 = var3 / var4;
                                    var3 = var2.height;
                                    var3 = var3 - var8;
                                    var12 = var3 / var4;
                                    var3 = var6.drawImage;
                                    var15 = var6;
                                    var14 = var9;
                                    var11 = var7;
                                    var10 = var8;
                                    var3 = var15[var3](var14, var13, var12, var11, var10, var9);
                                    var5 = var6.getImageData;
                                    var12 = var2.width;
                                    var11 = var2.height;
                                    var15 = var6;
                                    var14 = 0;
                                    var13 = 0;
                                    var3 = var15[var5](var14, var13, var12, var11, var10);
                                    var2 = _closure6_slot0;
                                    var1 = {};
                                    var4 = var3.data;
                                    var1.data = var4;
                                    var4 = var3.width;
                                    var1.width = var4;
                                    var3 = var3.height;
                                    var1.height = var3;
                                    var3 = 'rgba';
                                    var1.pixelFormat = var3;
                                    var1 = var2.bind(var0)(var1);
                                    return var0;
                                };
                                var1.onload = var2;
                                var0 = function(arg0) { // Environment: var0
                                    var2 = _closure6_slot1;
                                    var1 = undefined;
                                    var0 = arg0;
                                    var0 = var2.bind(var1)(var0);
                                    return var0;
                                };
                                var1.onerror = var0;
                                var0 = _closure5_slot0;
                                var1.src = var0;
                                var0 = undefined;
                                return var0;
                            };
                            var4 = var1;
                            var0 = new var4[var2](var3, var2);
                            var0 = var0 instanceof Object ? var0 : var1;
                            return var0;
                        };
                        var10 = var10.bind(var1)(var11);
                        SaveGenerator(address = 307);
                    case 305:
                        return var10;
                    case 307:
                        ResumeGenerator(result_out_reg = 10, return_bool_out_reg = 11);
                        var9 = var10;
                        if (!var11) {
                            _fun66566_ip = 319;
                            continue _fun66566
                        }
                    case 316: // try_end0
                        return var10;
                    case 319: // try_start_1
                        var6 = var9;
                        var11 = undefined;
                        if (!var8) {
                            _fun66566_ip = 352;
                            continue _fun66566
                        }
                    case 327:
                        var5 = function() {
                            var0 = undefined;
                            var3 = _closure1_slot9;
                            var2 = var3.apply;
                            var0 = arguments;
                            var1 = var0;
                            var0 = this;
                            var0 = var2.bind(var3)(var0, var1);
                            return var0;
                        };
                        var5 = var5.bind(var1)(var7);
                        SaveGenerator(address = 343);
                    case 341:
                        return var5;
                    case 343:
                        ResumeGenerator(result_out_reg = 5, return_bool_out_reg = 7);
                        var11 = var5;
                        if (var7) {
                            _fun66566_ip = 411;
                            continue _fun66566
                        }
                    case 352:
                        var10 = _closure1_slot10;
                        var9 = var4;
                        var19 = var3;
                        var12 = _closure1_slot0;
                        var13 = _closure1_slot2;
                        var7 = 9;
                        var7 = var13[var7];
                        var7 = var12.bind(var1)(var7);
                        var7 = var7.FilterSettingsGraph;
                        var18 = var7.BACKGROUND_REPLACEMENT;
                        var17 = var6;
                        var21 = undefined;
                        var20 = var9;
                        var16 = var11;
                        var6 = var21[var10](var20, var19, var18, var17, var16, var15);
                    case 409: // try_end1
                        _fun66566_ip = 446;
                        continue _fun66566;
                    case 411:
                        return var5;
                    case 414: // catch_target0 // catch_target1
                        CatchBlockStart(arg_register = 5);
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var5 = 8;
                        var5 = var7[var5];
                        var6 = var6.bind(var1)(var5);
                        var5 = var6.errorApplyingMediaFilterSettings;
                        var5 = var5.bind(var6)();
                    case 446:
                        return var1;
                    case 449:
                        var7 = _closure1_slot10;
                        var6 = var4;
                        var5 = var3;
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var2 = 9;
                        var2 = var9[var2];
                        var2 = var8.bind(var1)(var2);
                        var2 = var2.FilterSettingsGraph;
                        var2 = var2.BACKGROUND_BLUR;
                        var2 = var7.bind(var1)(var6, var5, var2);
                        return var1;
                    case 501:
                        var5 = _closure1_slot10;
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var2 = 9;
                        var2 = var7[var2];
                        var2 = var6.bind(var1)(var2);
                        var2 = var2.FilterSettingsGraph;
                        var2 = var2.NONE;
                        var2 = var5.bind(var1)(var4, var3, var2);
                        return var1;
                    case 550:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot12 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot12 = var0;
    var3 = function() {
        var0 = undefined;
        var3 = _closure1_slot14;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot13 = var3;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0, arg1) { // Environment: var2
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun66575: for (var _fun66575_ip = 0;;) switch (_fun66575_ip) {
                    case 0:
                        StartGenerator();
                        var8 = arg0;
                        var1 = arg1;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun66575_ip = 179;
                            continue _fun66575
                        }
                    case 16:
                        var5 = var1.track;
                        var3 = undefined;
                        if (!(var5 === var3)) {
                            _fun66575_ip = 29;
                            continue _fun66575
                        }
                    case 27:
                        var5 = true;
                    case 29:
                        var7 = var1.location;
                        SaveGenerator(address = 38);
                    case 36:
                        return var3;
                    case 38:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun66575_ip = 176;
                            continue _fun66575
                        }
                    case 47:
                        var9 = _closure1_slot11;
                        var11 = _closure1_slot0;
                        var12 = _closure1_slot2;
                        var10 = 9;
                        var2 = var12[var10];
                        var2 = var11.bind(var3)(var2);
                        var2 = var2.FilterSettingsKey;
                        var6 = var2.CAMERA_BACKGROUND_LIVE;
                        var2 = {};
                        var10 = var12[var10];
                        var10 = var11.bind(var3)(var10);
                        var10 = var10.FilterTargetType;
                        var10 = var10.INPUT_DEVICE;
                        var2.type = var10;
                        var2 = var9.bind(var3)(var6, var2, var8);
                        SaveGenerator(address = 124);
                    case 122:
                        return var2;
                    case 124:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 6);
                        if (var6) {
                            _fun66575_ip = 173;
                            continue _fun66575
                        }
                    case 130:
                        if (!var5) {
                            _fun66575_ip = 170;
                            continue _fun66575
                        }
                    case 133:
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var4 = 12;
                        var4 = var6[var4];
                        var6 = var5.bind(var3)(var4);
                        var5 = var6.trackBackgroundOptionUpdated;
                        var4 = 'Enabled';
                        var4 = var5.bind(var6)(var8, var7, var4);
                    case 170:
                        return var3;
                    case 173:
                        return var2;
                    case 176:
                        return var1;
                    case 179:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot14 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot14 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0, arg1, arg2) { // Environment: var2
            var0 = function*(arg0, arg1, arg2) { // Original name: ?anon_0_, environment: var0
                _fun66578: for (var _fun66578_ip = 0;;) switch (_fun66578_ip) {
                    case 0:
                        StartGenerator();
                        var8 = arg0;
                        var1 = arg2;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun66578_ip = 209;
                            continue _fun66578
                        }
                    case 16:
                        var5 = var1.track;
                        var3 = undefined;
                        if (!(var5 === var3)) {
                            _fun66578_ip = 29;
                            continue _fun66578
                        }
                    case 27:
                        var5 = true;
                    case 29:
                        var7 = var1.location;
                        SaveGenerator(address = 38);
                    case 36:
                        return var3;
                    case 38:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun66578_ip = 206;
                            continue _fun66578
                        }
                    case 47:
                        var11 = _closure1_slot0;
                        var12 = _closure1_slot2;
                        var2 = 8;
                        var2 = var12[var2];
                        var6 = var11.bind(var3)(var2);
                        var2 = var6.startApplyMediaFilterSettings;
                        var2 = var2.bind(var6)();
                        var9 = _closure1_slot11;
                        var10 = 9;
                        var2 = var12[var10];
                        var2 = var11.bind(var3)(var2);
                        var2 = var2.FilterSettingsKey;
                        var6 = var2.CAMERA_BACKGROUND_PREVIEW;
                        var2 = {};
                        var10 = var12[var10];
                        var10 = var11.bind(var3)(var10);
                        var10 = var10.FilterTargetType;
                        var10 = var10.STREAM;
                        var2.type = var10;
                        var10 = arg1;
                        var2.streamId = var10;
                        var2 = var9.bind(var3)(var6, var2, var8);
                        SaveGenerator(address = 154);
                    case 152:
                        return var2;
                    case 154:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 6);
                        if (var6) {
                            _fun66578_ip = 203;
                            continue _fun66578
                        }
                    case 160:
                        if (!var5) {
                            _fun66578_ip = 200;
                            continue _fun66578
                        }
                    case 163:
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var4 = 12;
                        var4 = var6[var4];
                        var6 = var5.bind(var3)(var4);
                        var5 = var6.trackBackgroundOptionUpdated;
                        var4 = 'Preview';
                        var4 = var5.bind(var6)(var8, var7, var4);
                    case 200:
                        return var3;
                    case 203:
                        return var2;
                    case 206:
                        return var1;
                    case 209:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot15 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot15 = var0;
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
    var4 = var7.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.BACKGROUND_REPLACEMENT_SIZE;
    var _closure1_slot6 = var7;
    var4 = var4.BLUR_BACKGROUND_OPTION;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.NOOP;
    var _closure1_slot8 = var4;
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/video_backgrounds/applyBackgroundOption.tsx';
    var4 = var5.bind(var6)(var4);
    var2.applyBackgroundOptionLive = var3;
    var3 = function() {
        var0 = undefined;
        var3 = _closure1_slot15;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.applyBackgroundOptionPreview = var3;
    var1 = function() {
        _fun66580: for (var _fun66580_ip = 0;;) switch (_fun66580_ip) {
            case 0:
                var2 = _closure1_slot4;
                var1 = var2.getCurrentUser;
                var5 = var1.bind(var2)();
                var2 = null;
                if (!(var2 != var5)) {
                    _fun66580_ip = 136;
                    continue _fun66580
                }
            case 22:
                var3 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 13;
                var1 = var6[var1];
                var4 = undefined;
                var3 = var3.bind(var4)(var1);
                var1 = var3.getLastUsedVideoBackgroundOption;
                var3 = var1.bind(var3)(var5);
                var5 = _closure1_slot1;
                var1 = 14;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.bind(var4)();
                if (!var1) {
                    _fun66580_ip = 93;
                    continue _fun66580
                }
            case 78:
                var5 = _closure1_slot5;
                var5 = var5.hasBeenApplied;
                var1 = !var5;
            case 93:
                if (!var1) {
                    _fun66580_ip = 100;
                    continue _fun66580
                }
            case 96:
                var1 = var2 != var3;
            case 100:
                if (!var1) {
                    _fun66580_ip = 136;
                    continue _fun66580
                }
            case 103:
                var2 = _closure1_slot13;
                var1 = {};
                var5 = false;
                var1.track = var5;
                var2 = var2.bind(var4)(var3, var1);
                var1 = var2.catch;
                var0 = _closure1_slot8;
                var0 = var1.bind(var2)(var0);
            case 136:
                var0 = undefined;
                return var0;
        }
    };
    var2.applyInitialVideoBackgroundOption = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 1621, 8242, 8244, 660, 44, 478, 8245, 8246, 3635, 8249, 1417, 8243, 8248, 8250, 2]);