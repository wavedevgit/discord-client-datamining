// modules/messages/native/burst_reactions/BurstReactionEffectUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var6 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.NativeModules;
    var _closure1_slot5 = var6;
    var3 = var3.Image;
    var _closure1_slot6 = var3;
    var3 = function() { // Environment: var1
        var3 = _closure1_slot2;
        var2 = undefined;
        var1 = function*(arg0, arg1, arg2, arg3) { // Environment: var0
            var0 = function*(arg0, arg1, arg2, arg3) { // Original name: ?anon_0_, environment: var0
                _fun54314: for (var _fun54314_ip = 0;;) switch (_fun54314_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 6);
                        if (var6) {
                            _fun54314_ip = 649;
                            continue _fun54314
                        }
                    case 10:
                        var12 = arg0;
                        var4 = arg1;
                        var7 = arg2;
                        var1 = arg3;
                        var8 = undefined;
                        var15 = undefined;
                        var3 = undefined;
                        var2 = undefined;
                        var10 = undefined;
                        var5 = undefined;
                    case 34: // try_start_0
                        var11 = _closure1_slot0;
                        var13 = _closure1_slot1;
                        var9 = 4;
                        var9 = var13[var9];
                        var14 = var11.bind(var8)(var9);
                        var11 = var14.getEmojiUrl;
                        var9 = {};
                        var19 = var7;
                        var20 = var9;
                        var13 = copyDataProperties(var20, var19);
                        var16 = false;
                        var13 = 'animated';
                        var9[var13] = var16;
                        var13 = 128;
                        var11 = var11.bind(var14)(var9, var13);
                        var15 = var11;
                        var9 = null;
                        var16 = var9 != var11;
                        var11 = '';
                        var14 = var11;
                        if (!var16) {
                            _fun54314_ip = 117;
                            continue _fun54314
                        }
                    case 114:
                        var14 = var15;
                    case 117:
                        var2 = var14;
                        var15 = _closure1_slot0;
                        var16 = _closure1_slot1;
                        var14 = 5;
                        var14 = var16[var14];
                        var16 = var15.bind(var8)(var14);
                        var15 = var16.getBurstAnimation;
                        var20 = var12;
                        var19 = var4;
                        var4 = var7;
                        var18 = var4.name;
                        var17 = var1;
                        var21 = var16;
                        var1 = var21[var15](var20, var19, var18, var17, var16);
                        SaveGenerator(address = 174);
                    case 172:
                        return var1;
                    case 174:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                        if (var4) {
                            _fun54314_ip = 639;
                            continue _fun54314
                        }
                    case 183:
                        var10 = var1;
                        var4 = var2;
                        if (!(var11 === var4)) {
                            _fun54314_ip = 317;
                            continue _fun54314
                        }
                    case 196:
                        var4 = _closure1_slot5;
                        var12 = var4.ImageManager;
                        var11 = var12.getEmojiBase64;
                        var4 = var7;
                        var4 = var4.name;
                        var4 = var11.bind(var12)(var4, var13);
                        SaveGenerator(address = 230);
                    case 228:
                        return var4;
                    case 230:
                        ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 11);
                        if (var11) {
                            _fun54314_ip = 314;
                            continue _fun54314
                        }
                    case 236:
                        var11 = global;
                        var11 = var11.HermesInternal;
                        var12 = var11.concat;
                        var11 = 'data:image/png;base64,';
                        var13 = var12.bind(var11)(var4);
                        var11 = var10;
                        var12 = var11.assets;
                        var11 = 0;
                        var11 = var12[var11];
                        var11.p = var13;
                        var12 = _closure1_slot0;
                        var14 = _closure1_slot1;
                        var11 = 6;
                        var11 = var14[var11];
                        var12 = var12.bind(var8)(var11);
                        var11 = var12.makeSource;
                        var3 = var11.bind(var12)(var13);
                        _fun54314_ip = 430;
                        continue _fun54314;
                    case 314: // try_end0
                        return var4;
                    case 317: // try_start_1
                        var11 = _closure1_slot0;
                        var12 = _closure1_slot1;
                        var4 = 6;
                        var4 = var12[var4];
                        var11 = var11.bind(var8)(var4);
                        var4 = var11.makeSource;
                        var11 = var4.bind(var11)(var2);
                        var3 = var11;
                        var2 = _closure1_slot5;
                        var4 = var2.ImageManager;
                        var2 = var4.getAvatarBase64;
                        var2 = var2.bind(var4)(var11);
                        SaveGenerator(address = 376);
                    case 374:
                        return var2;
                    case 376:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 4);
                        if (var4) {
                            _fun54314_ip = 636;
                            continue _fun54314
                        }
                    case 385:
                        var4 = var10;
                        var11 = var4.assets;
                        var4 = 0;
                        var11 = var11[var4];
                        var4 = global;
                        var4 = var4.HermesInternal;
                        var12 = var4.concat;
                        var4 = 'data:image/png;base64,';
                        var4 = var12.bind(var4)(var2);
                        var11.p = var4;
                    case 430:
                        var4 = global;
                        var12 = var4.JSON;
                        var11 = var12.stringify;
                        var5 = var11.bind(var12)(var10);
                        var7 = var7.id;
                        if (!(var9 == var7)) {
                            _fun54314_ip = 492;
                            continue _fun54314
                        }
                    case 458:
                        var11 = var5;
                        var10 = var11.replace;
                        var9 = /"a":{"a":0,"k":\[64,64/;
                        var7 = '"a":{"a":0,"k":[36,36';
                        var5 = var10.bind(var11)(var9, var7);
                    case 492:
                        var7 = _closure1_slot5;
                        var9 = var7.ImageManager;
                        var7 = var9.getDominantColors;
                        var3 = var7.bind(var9)(var3);
                        SaveGenerator(address = 517);
                    case 515:
                        return var3;
                    case 517:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 7);
                        if (var7) {
                            _fun54314_ip = 633;
                            continue _fun54314
                        }
                    case 523:
                        var11 = _closure1_slot3;
                        var7 = 0;
                        var10 = var3[var7];
                        var9 = 3;
                        var9 = var11.bind(var8)(var10, var9);
                        var12 = var9[var7];
                        var7 = 1;
                        var11 = var9[var7];
                        var7 = 2;
                        var10 = var9[var7];
                        var7 = _closure1_slot0;
                        var9 = _closure1_slot1;
                        var6 = 7;
                        var6 = var9[var6];
                        var9 = var7.bind(var8)(var6);
                        var8 = var9.replaceAnimationColors;
                        var7 = var5;
                        var6 = {};
                        var6.r = var12;
                        var6.g = var11;
                        var6.b = var10;
                        var6 = var8.bind(var9)(var7, var6);
                        var5 = var6;
                        var5 = var4.JSON;
                        var4 = var5.parse;
                        var4 = var4.bind(var5)(var6);
                    case 630: // try_end1
                        return var4;
                    case 633:
                        return var3;
                    case 636:
                        return var2;
                    case 639:
                        return var1;
                    case 642: // catch_target0 // catch_target1
                        CatchBlockStart(arg_register = 1);
                        var1 = null;
                        return var1;
                    case 649:
                        return var0;
                }
            };
            return var0;
        };
        var1 = var3.bind(var2)(var1);
        var _closure2_slot0 = var1;
        var0 = function(arg0, arg1, arg2, arg3) { // Original name: generateAnimationSource, environment: var0
            var0 = undefined;
            var3 = _closure2_slot0;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        return var0;
    };
    var3 = var3.bind(var0)();
    var _closure1_slot7 = var3;
    var3 = function() { // Environment: var1
        var3 = _closure1_slot2;
        var2 = undefined;
        var1 = function*(arg0) { // Environment: var0
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun54318: for (var _fun54318_ip = 0;;) switch (_fun54318_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 6);
                        if (var6) {
                            _fun54318_ip = 352;
                            continue _fun54318
                        }
                    case 13:
                        var4 = var1.animationSource;
                        var2 = var1.localImageSource;
                        var8 = undefined;
                        var3 = undefined;
                        var5 = undefined;
                        SaveGenerator(address = 35);
                    case 33:
                        return var8;
                    case 35:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 6);
                        if (var6) {
                            _fun54318_ip = 349;
                            continue _fun54318
                        }
                    case 44: // try_start_0
                        var9 = _closure1_slot6;
                        var7 = var9.resolveAssetSource;
                        var2 = var7.bind(var9)(var2);
                        var9 = var2.uri;
                        var7 = _closure1_slot0;
                        var10 = _closure1_slot1;
                        var2 = 6;
                        var2 = var10[var2];
                        var7 = var7.bind(var8)(var2);
                        var2 = var7.makeSource;
                        var9 = var2.bind(var7)(var9);
                        var3 = var9;
                        var2 = _closure1_slot5;
                        var7 = var2.ImageManager;
                        var2 = var7.getAvatarBase64;
                        var2 = var2.bind(var7)(var9);
                        SaveGenerator(address = 126);
                    case 124:
                        return var2;
                    case 126:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 7);
                        if (var7) {
                            _fun54318_ip = 339;
                            continue _fun54318
                        }
                    case 135:
                        var11 = var4;
                        var4 = var11.assets;
                        var7 = 0;
                        var10 = var4[var7];
                        var4 = global;
                        var9 = var4.HermesInternal;
                        var12 = var9.concat;
                        var9 = 'data:image/png;base64,';
                        var9 = var12.bind(var9)(var2);
                        var10.p = var9;
                        var10 = var4.JSON;
                        var9 = var10.stringify;
                        var5 = var9.bind(var10)(var11);
                        var9 = _closure1_slot5;
                        var10 = var9.ImageManager;
                        var9 = var10.getDominantColors;
                        var3 = var9.bind(var10)(var3);
                        SaveGenerator(address = 222);
                    case 220:
                        return var3;
                    case 222:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 9);
                        if (var9) {
                            _fun54318_ip = 336;
                            continue _fun54318
                        }
                    case 228:
                        var11 = _closure1_slot3;
                        var10 = var3[var7];
                        var9 = 3;
                        var9 = var11.bind(var8)(var10, var9);
                        var12 = var9[var7];
                        var7 = 1;
                        var11 = var9[var7];
                        var7 = 2;
                        var10 = var9[var7];
                        var7 = _closure1_slot0;
                        var9 = _closure1_slot1;
                        var6 = 7;
                        var6 = var9[var6];
                        var9 = var7.bind(var8)(var6);
                        var8 = var9.replaceAnimationColors;
                        var7 = var5;
                        var6 = {};
                        var6.r = var12;
                        var6.g = var11;
                        var6.b = var10;
                        var6 = var8.bind(var9)(var7, var6);
                        var5 = var6;
                        var5 = var4.JSON;
                        var4 = var5.parse;
                        var4 = var4.bind(var5)(var6);
                    case 333: // try_end0
                        return var4;
                    case 336:
                        return var3;
                    case 339:
                        return var2;
                    case 342: // catch_target0
                        CatchBlockStart(arg_register = 2);
                        var2 = null;
                        return var2;
                    case 349:
                        return var1;
                    case 352:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var1 = var3.bind(var2)(var1);
        var _closure2_slot0 = var1;
        var0 = function(arg0) { // Original name: generateAnimationSourceFromLocalImage, environment: var0
            var0 = undefined;
            var3 = _closure2_slot0;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        return var0;
    };
    var3 = var3.bind(var0)();
    var _closure1_slot8 = var3;
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/messages/native/burst_reactions/BurstReactionEffectUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function(arg0) { // Environment: var1
        var0 = arg0;
        var8 = var0.channelId;
        var _closure2_slot0 = var8;
        var7 = var0.messageId;
        var _closure2_slot1 = var7;
        var6 = var0.emoji;
        var _closure2_slot2 = var6;
        var5 = var0.isFullscreen;
        var _closure2_slot3 = var5;
        var4 = _closure1_slot4;
        var3 = var4.useState;
        var2 = null;
        var9 = var3.bind(var4)(var2);
        var3 = _closure1_slot3;
        var2 = undefined;
        var0 = 2;
        var3 = var3.bind(var2)(var9, var0);
        var0 = 0;
        var0 = var3[var0];
        var2 = 1;
        var2 = var3[var2];
        var _closure2_slot4 = var2;
        var3 = var4.useEffect;
        var2 = new Array(4);
        var2[0] = var8;
        var2[1] = var7;
        var2[2] = var6;
        var2[3] = var5;
        var1 = function() { // Environment: var1
            var1 = function() { // Original name: _getSource, environment: var0
                var3 = undefined;
                var0 = undefined;
                var2 = _closure1_slot2;
                var1 = function*() { // Environment: var1
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun54324: for (var _fun54324_ip = 0;;) switch (_fun54324_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun54324_ip = 78;
                                    continue _fun54324
                                }
                            case 7:
                                var3 = _closure2_slot2;
                                var1 = null;
                                if (!(var1 != var3)) {
                                    _fun54324_ip = 70;
                                    continue _fun54324
                                }
                            case 20:
                                var7 = _closure1_slot7;
                                var11 = _closure2_slot0;
                                var10 = _closure2_slot1;
                                var9 = _closure2_slot2;
                                var8 = _closure2_slot3;
                                var3 = undefined;
                                var12 = undefined;
                                var1 = var12[var7](var11, var10, var9, var8, var7);
                                SaveGenerator(address = 55);
                            case 53:
                                return var1;
                            case 55:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                                if (var4) {
                                    _fun54324_ip = 75;
                                    continue _fun54324
                                }
                            case 61:
                                var2 = _closure2_slot4;
                                var2 = var2.bind(var3)(var1);
                            case 70:
                                var2 = undefined;
                                return var2;
                            case 75:
                                return var1;
                            case 78:
                                return var0;
                        }
                    };
                    return var0;
                };
                var3 = var2.bind(var3)(var1);
                _closure3_slot0 = var3;
                var2 = var3.apply;
                var0 = arguments;
                var1 = var0;
                var0 = this;
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            var _closure3_slot0 = var1;
            var1 = function() { // Original name: getSource, environment: var0
                var0 = undefined;
                var3 = _closure3_slot0;
                var2 = var3.apply;
                var0 = arguments;
                var1 = var0;
                var0 = this;
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            var0 = undefined;
            var1 = var1.bind(var0)();
            var1 = !var1;
            return var0;
        };
        var1 = var3.bind(var4)(var1, var2);
        return var0;
    };
    var2.useBurstReactionAnimationSource = var3;
    var1 = function(arg0) { // Environment: var1
        var0 = arg0;
        var6 = var0.animationSource;
        var _closure2_slot0 = var6;
        var5 = var0.localImageSource;
        var _closure2_slot1 = var5;
        var4 = _closure1_slot4;
        var3 = var4.useState;
        var2 = null;
        var7 = var3.bind(var4)(var2);
        var3 = _closure1_slot3;
        var2 = undefined;
        var0 = 2;
        var3 = var3.bind(var2)(var7, var0);
        var0 = 0;
        var0 = var3[var0];
        var2 = 1;
        var2 = var3[var2];
        var _closure2_slot2 = var2;
        var3 = var4.useEffect;
        var2 = new Array(2);
        var2[0] = var6;
        var2[1] = var5;
        var1 = function() { // Environment: var1
            var1 = function() { // Original name: _getSource2, environment: var0
                var3 = undefined;
                var0 = undefined;
                var2 = _closure1_slot2;
                var1 = function*() { // Environment: var1
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun54330: for (var _fun54330_ip = 0;;) switch (_fun54330_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun54330_ip = 69;
                                    continue _fun54330
                                }
                            case 7:
                                var4 = _closure1_slot8;
                                var1 = {};
                                var2 = _closure2_slot0;
                                var1.animationSource = var2;
                                var2 = _closure2_slot1;
                                var1.localImageSource = var2;
                                var2 = undefined;
                                var1 = var4.bind(var2)(var1);
                                SaveGenerator(address = 48);
                            case 46:
                                return var1;
                            case 48:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                                if (var4) {
                                    _fun54330_ip = 66;
                                    continue _fun54330
                                }
                            case 54:
                                var3 = _closure2_slot2;
                                var3 = var3.bind(var2)(var1);
                                return var2;
                            case 66:
                                return var1;
                            case 69:
                                return var0;
                        }
                    };
                    return var0;
                };
                var3 = var2.bind(var3)(var1);
                _closure3_slot0 = var3;
                var2 = var3.apply;
                var0 = arguments;
                var1 = var0;
                var0 = this;
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            var _closure3_slot0 = var1;
            var1 = function() { // Original name: getSource, environment: var0
                var0 = undefined;
                var3 = _closure3_slot0;
                var2 = var3.apply;
                var0 = arguments;
                var1 = var0;
                var0 = this;
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            var0 = undefined;
            var1 = var1.bind(var0)();
            var1 = !var1;
            return var0;
        };
        var1 = var3.bind(var4)(var1, var2);
        return var0;
    };
    var2.useSuperReactionAnimationSourceFromLocalImage = var1;
    var1 = 128;
    var2.EMOJI_IN_ANIMATION_SIZE = var1;
    var1 = 0.8;
    var2.BACKDROP_OPACITY = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 27, 3067, 6515, 1417, 6552, 2]);