// modules/voice_channel_effects/native/AnimatedEffectEmoji.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var6 = 2;
    var3 = var5[var6];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot6 = var3;
    var3 = 4;
    var7 = var5[var3];
    var7 = var10.bind(var0)(var7);
    var7 = var7.Millis;
    var7 = var7.SECOND;
    var9 = 6;
    var7 = var9 * var7;
    var _closure1_slot7 = var7;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var3 = var3.Millis;
    var3 = var3.SECOND;
    var3 = var6 * var3;
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'backgroundColor': null,
        'borderRadius': null,
        'position': 'absolute',
        'right': 16,
        'top': 16
    };
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_SURFACE_HIGH;
    var8.backgroundColor = var11;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.radii;
    var9 = var9.round;
    var8.borderRadius = var9;
    var3.voiceChannelEffectEmojiContainer = var8;
    var8 = {
        'right': 'auto',
        'left': 16
    };
    var3.voiceChannelEffectEmojiContainerTileNotch = var8;
    var8 = {};
    var9 = 12;
    var8.padding = var9;
    var3.voiceChannelEffectEmoji = var8;
    var8 = {
        'fontSize': 32,
        'lineHeight': 38,
        'alignContent': 'center',
        'justifyContent': 'center',
        'display': 'flex',
        'width': 32,
        'height': 32
    };
    var3.textEmoji = var8;
    var8 = {
        'width': 32,
        'height': 32
    };
    var3.imageEmoji = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot9 = var3;
    var3 = function arg0() {
        _fun64815: for (var _fun64815_ip = 0;;) switch (_fun64815_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.url;
                var7 = var0.surrogates;
                var0 = _closure1_slot9;
                var4 = undefined;
                var5 = var0.bind(var4)();
                var0 = '';
                if (!(var0 === var6)) {
                    _fun64815_ip = 103;
                    continue _fun64815
                }
            case 34:
                var3 = _closure1_slot6;
                var2 = _closure1_slot0;
                var8 = _closure1_slot2;
                var0 = 8;
                var0 = var8[var0];
                var0 = var2.bind(var4)(var0);
                var2 = var0.LegacyText;
                var0 = {};
                var9 = var5.textEmoji;
                var8 = new Array(1);
                var8[0] = var9;
                var0.style = var8;
                var8 = false;
                var0.allowFontScaling = var8;
                var0.children = var7;
                var0 = var3.bind(var4)(var2, var0);
                _fun64815_ip = 171;
                continue _fun64815;
            case 103:
                var3 = _closure1_slot6;
                var2 = _closure1_slot1;
                var7 = _closure1_slot2;
                var1 = 7;
                var1 = var7[var1];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var7 = 'contain';
                var1.resizeMode = var7;
                var7 = var5.imageEmoji;
                var5 = new Array(1);
                var5[0] = var7;
                var1.style = var5;
                var5 = {};
                var5.uri = var6;
                var1.source = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 171:
                return var0;
        }
    };
    var _closure1_slot10 = var3;
    var3 = {};
    var6 = 'function AnimatedEffectEmojiTsx1(){const{withSequence,withTiming,ANIMATION_ROTATION_DEG,withDelay,useReducedMotion,STANDARD_EASING}=this.__closure;const rotate=withSequence(withTiming(ANIMATION_ROTATION_DEG+"deg",{duration:0}),withDelay(100,withTiming(\'0deg\',{duration:useReducedMotion?0:300,easing:STANDARD_EASING})));const scale=withSequence(withTiming(0,{duration:0}),withDelay(100,withTiming(1,{duration:useReducedMotion?0:300,easing:STANDARD_EASING})));return{transform:[{scale:scale},{rotate:rotate}]};}';
    var3.code = var6;
    var _closure1_slot11 = var3;
    var3 = 15;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/voice_channel_effects/native/AnimatedEffectEmoji.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun64816: for (var _fun64816_ip = 0;;) switch (_fun64816_ip) {
            case 0:
                var1 = arg0;
                var13 = var1.userId;
                var2 = var1.voiceChannelEffect;
                var6 = var1.hasNotch;
                var4 = undefined;
                if (!(var6 === var4)) {
                    _fun64816_ip = 30;
                    continue _fun64816
                }
            case 28:
                var6 = false;
            case 30:
                var1 = var1.onComplete;
                var _closure2_slot0 = var1;
                var _closure2_slot1 = var4;
                var _closure2_slot2 = var4;
                var3 = _closure1_slot9;
                var8 = var3.bind(var4)();
                var10 = var2.emoji;
                var14 = var2.sentAt;
                _closure2_slot1 = var14;
                var9 = _closure1_slot0;
                var12 = _closure1_slot2;
                var2 = 9;
                var2 = var12[var2];
                var7 = var9.bind(var4)(var2);
                var5 = var7.useStateFromStores;
                var2 = _closure1_slot5;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = function() { // Environment: var0
                    var0 = _closure1_slot5;
                    var0 = var0.useReducedMotion;
                    return var0;
                };
                var7 = var5.bind(var7)(var3, var2);
                _closure2_slot2 = var7;
                var5 = _closure1_slot3;
                var3 = var5.useEffect;
                var2 = new Array(3);
                var2[0] = var14;
                var2[1] = var13;
                var2[2] = var1;
                var1 = function() { // Environment: var0
                    _fun64818: for (var _fun64818_ip = 0;;) switch (_fun64818_ip) {
                        case 0:
                            var3 = global;
                            var2 = var3.Date;
                            var1 = var2.now;
                            var4 = var1.bind(var2)();
                            var2 = _closure2_slot1;
                            var5 = var4 - var2;
                            var4 = _closure1_slot8;
                            if (!(!(var5 >= var4))) {
                                _fun64818_ip = 70;
                                continue _fun64818
                            }
                        case 41:
                            var5 = var3.setTimeout;
                            var4 = _closure1_slot7;
                            var3 = undefined;
                            var2 = function() { // Environment: var0
                                _fun64819: for (var _fun64819_ip = 0;;) switch (_fun64819_ip) {
                                    case 0:
                                        var2 = _closure2_slot0;
                                        var1 = null;
                                        if (!(var1 != var2)) {
                                            _fun64819_ip = 23;
                                            continue _fun64819
                                        }
                                    case 13:
                                        var1 = _closure2_slot0;
                                        var0 = undefined;
                                        var0 = var1.bind(var0)();
                                    case 23:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var2 = var5.bind(var3)(var2, var4);
                            var _closure3_slot0 = var2;
                            _fun64818_ip = 90;
                            continue _fun64818;
                        case 70:
                            var3 = _closure2_slot0;
                            var2 = null;
                            if (!(var2 != var3)) {
                                _fun64818_ip = 90;
                                continue _fun64818
                            }
                        case 80:
                            var2 = _closure2_slot0;
                            var1 = undefined;
                            var1 = var2.bind(var1)();
                        case 90:
                            var0 = function() { // Environment: var0
                                _fun64820: for (var _fun64820_ip = 0;;) switch (_fun64820_ip) {
                                    case 0:
                                        var2 = _closure3_slot0;
                                        var1 = null;
                                        if (!(var1 != var2)) {
                                            _fun64820_ip = 32;
                                            continue _fun64820
                                        }
                                    case 13:
                                        var1 = global;
                                        var2 = var1.clearTimeout;
                                        var1 = _closure3_slot0;
                                        var0 = undefined;
                                        var0 = var2.bind(var0)(var1);
                                    case 32:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            return var0;
                    }
                };
                var1 = var3.bind(var5)(var1, var2);
                var1 = 10;
                var2 = var12[var1];
                var3 = var9.bind(var4)(var2);
                var2 = var3.useAnimatedStyle;
                var0 = function() {
                    _fun64821: for (var _fun64821_ip = 0;;) switch (_fun64821_ip) {
                        case 0:
                            var8 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var7 = 10;
                            var2 = var0[var7];
                            var14 = undefined;
                            var4 = var8.bind(var14)(var2);
                            var3 = var4.withSequence;
                            var12 = 11;
                            var2 = var0[var12];
                            var9 = var8.bind(var14)(var2);
                            var6 = var9.withTiming;
                            var5 = {};
                            var16 = 0;
                            var5.duration = var16;
                            var2 = '-120deg';
                            var2 = var6.bind(var9)(var2, var5);
                            var5 = var0[var7];
                            var6 = var8.bind(var14)(var5);
                            var5 = var6.withDelay;
                            var0 = var0[var12];
                            var18 = var8.bind(var14)(var0);
                            var9 = var18.withTiming;
                            var8 = {};
                            var10 = _closure2_slot2;
                            var13 = 300;
                            var0 = var13;
                            if (!var10) {
                                _fun64821_ip = 120;
                                continue _fun64821
                            }
                        case 118:
                            var0 = 0;
                        case 120:
                            var8.duration = var0;
                            var11 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var15 = 12;
                            var0 = var10[var15];
                            var0 = var11.bind(var14)(var0);
                            var0 = var0.STANDARD_EASING;
                            var8.easing = var0;
                            var0 = '0deg';
                            var0 = var9.bind(var18)(var0, var8);
                            var9 = 100;
                            var0 = var5.bind(var6)(var9, var0);
                            var3 = var3.bind(var4)(var2, var0);
                            var0 = {};
                            var2 = {};
                            var4 = var10[var7];
                            var6 = var11.bind(var14)(var4);
                            var5 = var6.withSequence;
                            var4 = var10[var12];
                            var18 = var11.bind(var14)(var4);
                            var8 = var18.withTiming;
                            var4 = {};
                            var4.duration = var16;
                            var4 = var8.bind(var18)(var16, var4);
                            var7 = var10[var7];
                            var8 = var11.bind(var14)(var7);
                            var7 = var8.withDelay;
                            var10 = var10[var12];
                            var12 = var11.bind(var14)(var10);
                            var11 = var12.withTiming;
                            var10 = {};
                            var17 = _closure2_slot2;
                            if (!var17) {
                                _fun64821_ip = 267;
                                continue _fun64821
                            }
                        case 265:
                            var13 = 0;
                        case 267:
                            var10.duration = var13;
                            var13 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var1 = var1[var15];
                            var1 = var13.bind(var14)(var1);
                            var1 = var1.STANDARD_EASING;
                            var10.easing = var1;
                            var1 = 1;
                            var1 = var11.bind(var12)(var1, var10);
                            var1 = var7.bind(var8)(var9, var1);
                            var1 = var5.bind(var6)(var4, var1);
                            var2.scale = var1;
                            var1 = new Array(2);
                            var1[0] = var2;
                            var2 = {};
                            var2.rotate = var3;
                            var1[1] = var2;
                            var0.transform = var1;
                            return var0;
                    }
                };
                var5 = {};
                var13 = var12[var1];
                var13 = var9.bind(var4)(var13);
                var13 = var13.withSequence;
                var5.withSequence = var13;
                var13 = 11;
                var13 = var12[var13];
                var13 = var9.bind(var4)(var13);
                var13 = var13.withTiming;
                var5.withTiming = var13;
                var13 = -120;
                var5.ANIMATION_ROTATION_DEG = var13;
                var13 = var12[var1];
                var13 = var9.bind(var4)(var13);
                var13 = var13.withDelay;
                var5.withDelay = var13;
                var5.useReducedMotion = var7;
                var7 = 12;
                var7 = var12[var7];
                var7 = var9.bind(var4)(var7);
                var7 = var7.STANDARD_EASING;
                var5.STANDARD_EASING = var7;
                var0.__closure = var5;
                var5 = 75069010226.0;
                var0.__workletHash = var5;
                var5 = _closure1_slot11;
                var0.__initData = var5;
                var7 = var2.bind(var3)(var0);
                var0 = null;
                var2 = var0 != var10;
                if (!var2) {
                    _fun64816_ip = 544;
                    continue _fun64816
                }
            case 339:
                var3 = _closure1_slot6;
                var2 = _closure1_slot1;
                var15 = _closure1_slot2;
                var1 = var15[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.View;
                var1 = {};
                var9 = var8.voiceChannelEffectEmojiContainer;
                var5 = new Array(4);
                var5[0] = var9;
                var14 = _closure1_slot0;
                var9 = 13;
                var12 = var15[var9];
                var13 = var14.bind(var4)(var12);
                var12 = var13.generateBoxShadowStyle;
                var9 = var15[var9];
                var9 = var14.bind(var4)(var9);
                var9 = var9.EIGHT_DP_ELEVATION_SHADOW_PARAMS;
                var9 = var12.bind(var13)(var9);
                var5[1] = var9;
                var5[2] = var7;
                if (!var6) {
                    _fun64816_ip = 440;
                    continue _fun64816
                }
            case 434:
                var6 = var8.voiceChannelEffectEmojiContainerTileNotch;
            case 440:
                var5[3] = var6;
                var1.style = var5;
                var7 = _closure1_slot6;
                var6 = _closure1_slot4;
                var5 = {};
                var8 = var8.voiceChannelEffectEmoji;
                var5.style = var8;
                var9 = _closure1_slot10;
                var8 = {};
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var11 = 14;
                var11 = var13[var11];
                var12 = var12.bind(var4)(var11);
                var11 = var12.getEffectUrl;
                var11 = var11.bind(var12)(var10);
                var8.url = var11;
                var10 = var10.name;
                var8.surrogates = var10;
                var8 = var7.bind(var4)(var9, var8);
                var5.children = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 544:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1298, 33, 667, 1297, 671, 4705, 4879, 566, 3722, 4098, 4887, 4889, 5702, 2]);