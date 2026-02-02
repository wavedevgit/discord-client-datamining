// modules/forums/native/posts/ForumPostMedia.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var13 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var7;
    var0 = function arg0() {
        _fun89489: for (var _fun89489_ip = 0;;) switch (_fun89489_ip) {
            case 0:
                var1 = arg0;
                var7 = var1.shouldSpoiler;
                var0 = var1.blurTheme;
                var5 = var1.source;
                var6 = var1.androidStyle;
                var3 = _closure1_slot10;
                var2 = _closure1_slot7;
                var1 = {};
                var1.style = var6;
                var1.source = var5;
                var5 = 0;
                if (!var7) {
                    _fun89489_ip = 55;
                    continue _fun89489
                }
            case 52:
                var5 = 10;
            case 55:
                var1.blurRadius = var5;
                var5 = 'cover';
                var1.resizeMode = var5;
                var6 = _closure1_slot10;
                var5 = _closure1_slot16;
                var4 = {};
                var4.shouldSpoiler = var7;
                var4.blurTheme = var0;
                var0 = undefined;
                var4 = var6.bind(var0)(var5, var4);
                var1.children = var4;
                var0 = var3.bind(var0)(var2, var1);
                return var0;
        }
    };
    var _closure1_slot14 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var9 = var0.shouldSpoiler;
        var8 = var0.blurTheme;
        var10 = var0.source;
        var11 = var0.iosStyle;
        var3 = _closure1_slot12;
        var2 = _closure1_slot11;
        var1 = {};
        var7 = _closure1_slot10;
        var6 = _closure1_slot1;
        var4 = _closure1_slot2;
        var0 = 8;
        var4 = var4[var0];
        var0 = undefined;
        var6 = var6.bind(var0)(var4);
        var4 = {};
        var4.style = var11;
        var4.source = var10;
        var10 = 'cover';
        var4.resizeMode = var10;
        var6 = var7.bind(var0)(var6, var4);
        var4 = new Array(2);
        var4[0] = var6;
        var7 = _closure1_slot10;
        var6 = _closure1_slot16;
        var5 = {};
        var5.shouldSpoiler = var9;
        var5.blurTheme = var8;
        var5 = var7.bind(var0)(var6, var5);
        var4[1] = var5;
        var1.children = var4;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var _closure1_slot15 = var0;
    var4 = function arg0() {
        _fun89491: for (var _fun89491_ip = 0;;) switch (_fun89491_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.shouldSpoiler;
                var8 = var0.blurTheme;
                var0 = _closure1_slot13;
                var4 = undefined;
                var12 = var0.bind(var4)();
                var0 = null;
                if (!var1) {
                    _fun89491_ip = 197;
                    continue _fun89491
                }
            case 36:
                var3 = _closure1_slot12;
                var2 = _closure1_slot11;
                var1 = {};
                var7 = _closure1_slot10;
                var10 = _closure1_slot1;
                var13 = _closure1_slot2;
                var5 = 9;
                var5 = var13[var5];
                var6 = var10.bind(var4)(var5);
                var5 = {};
                var5.blurTheme = var8;
                var8 = _closure1_slot6;
                var8 = var8.absoluteFill;
                var5.style = var8;
                var6 = var7.bind(var4)(var6, var5);
                var5 = new Array(2);
                var5[0] = var6;
                var8 = _closure1_slot10;
                var7 = _closure1_slot5;
                var6 = {};
                var11 = var12.spoilerIconContainer;
                var6.style = var11;
                var11 = _closure1_slot10;
                var9 = 10;
                var9 = var13[var9];
                var10 = var10.bind(var4)(var9);
                var9 = {
                    'style': null,
                    'height': 30,
                    'width': 30
                };
                var12 = var12.spoilerIcon;
                var9.style = var12;
                var9 = var11.bind(var4)(var10, var9);
                var6.children = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[1] = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 197:
                return var0;
        }
    };
    var _closure1_slot16 = var4;
    var0 = function arg0() {
        _fun89492: for (var _fun89492_ip = 0;;) switch (_fun89492_ip) {
            case 0:
                var7 = arg0;
                var _closure2_slot0 = var7;
                var0 = _closure1_slot13;
                var4 = undefined;
                var6 = var0.bind(var4)();
                var2 = _closure1_slot4;
                var0 = var2.useRef;
                var1 = null;
                var5 = var0.bind(var2)(var1);
                var _closure2_slot1 = var5;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 11;
                var0 = var3[var0];
                var3 = var2.bind(var4)(var0);
                var2 = var3.useShouldAgeVerifyForReason;
                var0 = var7.obscureReason;
                var0 = var2.bind(var3)(var0);
                var2 = var7.isMediaPost;
                if (var2) {
                    _fun89492_ip = 173;
                    continue _fun89492
                }
            case 88:
                var3 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 13;
                var2 = var8[var2];
                var3 = var3.bind(var4)(var2);
                var2 = var3.isAndroid;
                var2 = var2.bind(var3)();
                var11 = _closure1_slot10;
                if (var2) {
                    _fun89492_ip = 149;
                    continue _fun89492
                }
            case 125:
                var3 = _closure1_slot15;
                var2 = {};
                var16 = var2;
                var15 = var7;
                var8 = copyDataProperties(var16, var15);
                var8 = var11.bind(var4)(var3, var2);
                _fun89492_ip = 171;
                continue _fun89492;
            case 149:
                var3 = _closure1_slot14;
                var2 = {};
                var16 = var2;
                var15 = var7;
                var12 = copyDataProperties(var16, var15);
                var8 = var11.bind(var4)(var3, var2);
            case 171:
                _fun89492_ip = 215;
                continue _fun89492;
            case 173:
                var11 = _closure1_slot10;
                var3 = _closure1_slot1;
                var12 = _closure1_slot2;
                var2 = 12;
                var2 = var12[var2];
                var3 = var3.bind(var4)(var2);
                var2 = {};
                var16 = var2;
                var15 = var7;
                var12 = copyDataProperties(var16, var15);
                var8 = var11.bind(var4)(var3, var2);
            case 215:
                var2 = var7.obscureReason;
                if (!(var1 != var2)) {
                    _fun89492_ip = 276;
                    continue _fun89492
                }
            case 225:
                var3 = _closure1_slot0;
                var11 = _closure1_slot2;
                var2 = 14;
                var2 = var11[var2];
                var2 = var3.bind(var4)(var2);
                var11 = var2.AGE_VERIFICATION_OBSCURABLE_REASONS;
                var3 = var11.has;
                var2 = var7.obscureReason;
                var2 = var3.bind(var11)(var2);
                if (!var2) {
                    _fun89492_ip = 276;
                    continue _fun89492
                }
            case 270:
                if (var0) {
                    _fun89492_ip = 473;
                    continue _fun89492
                }
            case 276:
                var0 = var7.onPress;
                if (!(var1 == var0)) {
                    _fun89492_ip = 342;
                    continue _fun89492
                }
            case 285:
                var2 = _closure1_slot10;
                var1 = _closure1_slot5;
                var0 = {};
                var11 = var6.mediaContainer;
                var3 = new Array(2);
                var3[0] = var11;
                var11 = var7.containerStyle;
                var3[1] = var11;
                var0.style = var3;
                var0.ref = var5;
                var0.children = var8;
                var0 = var2.bind(var4)(var1, var0);
                _fun89492_ip = 471;
                continue _fun89492;
            case 342:
                var3 = _closure1_slot10;
                var2 = _closure1_slot5;
                var1 = {};
                var12 = var6.mediaContainer;
                var11 = new Array(2);
                var11[0] = var12;
                var12 = var7.containerStyle;
                var11[1] = var12;
                var1.style = var11;
                var1.ref = var5;
                var13 = _closure1_slot10;
                var12 = _closure1_slot0;
                var14 = _closure1_slot2;
                var11 = 15;
                var11 = var14[var11];
                var11 = var12.bind(var4)(var11);
                var12 = var11.PressableOpacity;
                var11 = {};
                var14 = _closure1_slot9;
                var11.androidRippleConfig = var14;
                var14 = 0.8;
                var11.activeOpacity = var14;
                var14 = function() {
                    _fun89494: for (var _fun89494_ip = 0;;) switch (_fun89494_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            var2 = var0.onPress;
                            var0 = null;
                            var2 = var0 == var2;
                            var0 = undefined;
                            if (var2) {
                                _fun89494_ip = 41;
                                continue _fun89494
                            }
                        case 23:
                            var3 = _closure2_slot0;
                            var2 = var3.onPress;
                            var1 = _closure2_slot1;
                            var0 = var2.bind(var3)(var1);
                        case 41:
                            return var0;
                    }
                };
                var11.onPress = var14;
                var11.children = var8;
                var11 = var13.bind(var4)(var12, var11);
                var1.children = var11;
                var0 = var3.bind(var4)(var2, var1);
            case 471:
                _fun89492_ip = 594;
                continue _fun89492;
            case 473:
                var3 = _closure1_slot10;
                var2 = _closure1_slot5;
                var1 = {};
                var11 = var6.mediaContainer;
                var6 = new Array(2);
                var6[0] = var11;
                var7 = var7.containerStyle;
                var6[1] = var7;
                var1.style = var6;
                var1.ref = var5;
                var7 = _closure1_slot10;
                var6 = _closure1_slot0;
                var11 = _closure1_slot2;
                var5 = 15;
                var5 = var11[var5];
                var5 = var6.bind(var4)(var5);
                var6 = var5.PressableOpacity;
                var5 = {};
                var10 = _closure1_slot9;
                var5.androidRippleConfig = var10;
                var10 = 0;
                var5.activeOpacity = var10;
                var9 = function() {
                    var2 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var0 = 16;
                    var1 = var6[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.showAgeVerificationGetStartedModal;
                    var1 = {};
                    var5 = _closure1_slot0;
                    var4 = 17;
                    var4 = var6[var4];
                    var4 = var5.bind(var0)(var4);
                    var4 = var4.AgeVerificationModalEntryPoint;
                    var4 = var4.FORUM_POST_MEDIA_PREVIEW;
                    var1.entryPoint = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var5.onPress = var9;
                var5.children = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 594:
                return var0;
        }
    };
    var _closure1_slot17 = var0;
    var3 = function arg0() {
        _fun89495: for (var _fun89495_ip = 0;;) switch (_fun89495_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.channel;
                var8 = var0.media;
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 18;
                var0 = var5[var0];
                var3 = undefined;
                var6 = var4.bind(var3)(var0);
                var2 = var6.useShouldObscure;
                var0 = {};
                var0.media = var8;
                var0.channel = var7;
                var6 = var2.bind(var6)(var0);
                var2 = _closure1_slot3;
                var0 = 2;
                var6 = var2.bind(var3)(var6, var0);
                var0 = {};
                var2 = 0;
                var2 = var6[var2];
                var0.shouldObscure = var2;
                var2 = 1;
                var2 = var6[var2];
                var0.obscureReason = var2;
                var2 = 19;
                var2 = var5[var2];
                var5 = var4.bind(var3)(var2);
                var4 = var5.isThemeDark;
                var2 = _closure1_slot8;
                var2 = var2.theme;
                var4 = var4.bind(var5)(var2);
                var2 = 'light';
                if (!var4) {
                    _fun89495_ip = 143;
                    continue _fun89495
                }
            case 139:
                var2 = 'dark';
            case 143:
                var0.blurTheme = var2;
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 20;
                var1 = var4[var1];
                var1 = var2.bind(var3)(var1);
                var2 = var1.GifAutoPlay;
                var1 = var2.useSetting;
                var2 = var1.bind(var2)();
                var1 = 'png';
                if (!var2) {
                    _fun89495_ip = 193;
                    continue _fun89495
                }
            case 191:
                var1 = null;
            case 193:
                var0.format = var1;
                return var0;
        }
    };
    var _closure1_slot18 = var3;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var5);
    var0 = 0;
    var5 = var7[var0];
    var0 = undefined;
    var5 = var13.bind(var0)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var8 = var7[var5];
    var5 = arg3;
    var5 = var5.bind(var0)(var8);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var8 = var5.View;
    var _closure1_slot5 = var8;
    var8 = var5.StyleSheet;
    var _closure1_slot6 = var8;
    var5 = var5.ImageBackground;
    var _closure1_slot7 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var13.bind(var0)(var5);
    var _closure1_slot8 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var5 = var5.ANDROID_FOREGROUND_RIPPLE;
    var _closure1_slot9 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var8 = var5.jsx;
    var _closure1_slot10 = var8;
    var8 = var5.Fragment;
    var _closure1_slot11 = var8;
    var5 = var5.jsxs;
    var _closure1_slot12 = var5;
    var5 = 6;
    var5 = var7[var5];
    var9 = var6.bind(var0)(var5);
    var8 = var9.createStyles;
    var5 = {};
    var10 = {
        'position': 'relative',
        'overflow': 'hidden'
    };
    var5.mediaContainer = var10;
    var10 = {};
    var12 = 7;
    var11 = var7[var12];
    var11 = var13.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.sm;
    var10.borderRadius = var11;
    var5.thumbnailBorder = var10;
    var10 = {
        'height': 80,
        'width': 80
    };
    var5.thumbnail = var10;
    var11 = 'center';
    var10 = {
        'position': 'absolute',
        'top': 0,
        'left': 0,
        'right': 0,
        'bottom': 0,
        'justifyContent': 'center'
    };
    var5.spoilerIconContainer = var10;
    var10 = {};
    var12 = var7[var12];
    var12 = var13.bind(var0)(var12);
    var12 = var12.unsafe_rawColors;
    var12 = var12.PRIMARY_300;
    var10.color = var12;
    var10.alignSelf = var11;
    var5.spoilerIcon = var10;
    var10 = {
        'borderRadius': 2,
        'overflow': 'hidden'
    };
    var5.gridMediaContainer = var10;
    var5 = var8.bind(var9)(var5);
    var _closure1_slot13 = var5;
    var5 = 23;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/forums/native/posts/ForumPostMedia.tsx';
    var5 = var6.bind(var7)(var5);
    var2.ForumPostMediaSpoiler = var4;
    var2.useSharedMediaProps = var3;
    var3 = function arg0() {
        _fun89496: for (var _fun89496_ip = 0;;) switch (_fun89496_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.channel;
                var16 = var0.isLocalDeviceMedia;
                var _closure2_slot0 = var16;
                var8 = var0.firstMessageId;
                var _closure2_slot1 = var8;
                var15 = var0.media;
                var _closure2_slot2 = var15;
                var12 = var0.isEmbed;
                var14 = var0.embedLeftBorderColor;
                var11 = var0.containerStyle;
                var2 = _closure1_slot13;
                var3 = undefined;
                var10 = var2.bind(var3)();
                var4 = _closure1_slot1;
                var6 = _closure1_slot2;
                var2 = 21;
                var2 = var6[var2];
                var4 = var4.bind(var3)(var2);
                var2 = {};
                var6 = var5.id;
                var2.threadId = var6;
                var2 = var4.bind(var3)(var2);
                var2 = var2.onTapMedia;
                var _closure2_slot3 = var2;
                var7 = _closure1_slot4;
                var6 = var7.useCallback;
                var4 = new Array(3);
                var4[0] = var8;
                var4[1] = var15;
                var4[2] = var2;
                var2 = function(arg0) { // Environment: var1
                    var2 = _closure2_slot3;
                    var1 = {};
                    var3 = _closure2_slot1;
                    var1.messageId = var3;
                    var3 = _closure2_slot2;
                    var0 = new Array(1);
                    var0[0] = var3;
                    var1.mediaItems = var0;
                    var0 = arg0;
                    var1.containerRef = var0;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var4 = var6.bind(var7)(var2, var4);
                var6 = _closure1_slot18;
                var2 = {};
                var2.channel = var5;
                var2.media = var15;
                var2 = var6.bind(var3)(var2);
                var9 = var2.shouldObscure;
                var8 = var2.obscureReason;
                var7 = var2.blurTheme;
                var17 = var2.format;
                var _closure2_slot4 = var17;
                var13 = _closure1_slot4;
                var6 = var13.useMemo;
                var2 = new Array(6);
                var2[0] = var17;
                var2[1] = var16;
                var16 = var15.height;
                var2[2] = var16;
                var16 = var15.src;
                var2[3] = var16;
                var16 = var15.width;
                var2[4] = var16;
                var15 = var15.srcIsAnimated;
                var2[5] = var15;
                var1 = function() { // Environment: var1
                    _fun89498: for (var _fun89498_ip = 0;;) switch (_fun89498_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            var1 = {};
                            if (var0) {
                                _fun89498_ip = 129;
                                continue _fun89498
                            }
                        case 12:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var0 = 22;
                            var3 = var3[var0];
                            var0 = undefined;
                            var4 = var4.bind(var0)(var3);
                            var3 = var4.getSrcWithWidthAndHeight;
                            var0 = {};
                            var5 = _closure2_slot2;
                            var6 = var5.src;
                            var0.src = var6;
                            var6 = var5.width;
                            var0.sourceWidth = var6;
                            var6 = var5.height;
                            var0.sourceHeight = var6;
                            var6 = 320;
                            var0.targetWidth = var6;
                            var0.targetHeight = var6;
                            var6 = _closure2_slot4;
                            var0.format = var6;
                            var5 = var5.srcIsAnimated;
                            var0.animated = var5;
                            var0 = var3.bind(var4)(var0);
                            var1.uri = var0;
                            var0 = var1;
                            _fun89498_ip = 146;
                            continue _fun89498;
                        case 129:
                            var2 = _closure2_slot2;
                            var2 = var2.src;
                            var1.uri = var2;
                            var0 = var1;
                        case 146:
                            return var0;
                    }
                };
                var6 = var6.bind(var13)(var1, var2);
                var2 = _closure1_slot10;
                var1 = _closure1_slot17;
                var0 = {};
                var13 = var10.thumbnail;
                var0.iosStyle = var13;
                var13 = var10.thumbnail;
                var0.androidStyle = var13;
                var13 = var10.thumbnailBorder;
                var10 = new Array(3);
                var10[0] = var13;
                if (!var12) {
                    _fun89496_ip = 342;
                    continue _fun89496
                }
            case 324:
                var13 = {};
                var15 = 2;
                var13.borderLeftWidth = var15;
                var13.borderLeftColor = var14;
                var12 = var13;
            case 342:
                var10[1] = var12;
                var10[2] = var11;
                var0.containerStyle = var10;
                var0.obscureReason = var8;
                var8 = null;
                var8 = var8 != var9;
                if (!var8) {
                    _fun89496_ip = 372;
                    continue _fun89496
                }
            case 369:
                var8 = var9;
            case 372:
                var0.shouldSpoiler = var8;
                var0.blurTheme = var7;
                var0.source = var6;
                var0.onPress = var4;
                var4 = var5.isMediaPost;
                var4 = var4.bind(var5)();
                var0.isMediaPost = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.ForumPostMediaThumbnail = var3;
    var1 = function arg0() {
        _fun89499: for (var _fun89499_ip = 0;;) switch (_fun89499_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.channel;
                var5 = var0.media;
                var _closure2_slot0 = var5;
                var11 = var0.targetWidth;
                var _closure2_slot1 = var11;
                var12 = var0.targetHeight;
                var _closure2_slot2 = var12;
                var2 = _closure1_slot13;
                var3 = undefined;
                var9 = var2.bind(var3)();
                var6 = _closure1_slot18;
                var2 = {};
                var2.channel = var4;
                var2.media = var5;
                var2 = var6.bind(var3)(var2);
                var10 = var2.shouldObscure;
                var8 = var2.obscureReason;
                var7 = var2.blurTheme;
                var14 = var2.format;
                var _closure2_slot3 = var14;
                var2 = var4.isMediaPost;
                var4 = var2.bind(var4)();
                var _closure2_slot4 = var4;
                var13 = _closure1_slot4;
                var6 = var13.useMemo;
                var15 = var5.src;
                var2 = new Array(7);
                var2[0] = var15;
                var15 = var5.width;
                var2[1] = var15;
                var15 = var5.height;
                var2[2] = var15;
                var2[3] = var11;
                var2[4] = var12;
                var2[5] = var14;
                var2[6] = var4;
                var1 = function() { // Environment: var1
                    _fun89500: for (var _fun89500_ip = 0;;) switch (_fun89500_ip) {
                        case 0:
                            var0 = _closure2_slot4;
                            var1 = {};
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var2 = 22;
                            var3 = var3[var2];
                            var2 = undefined;
                            var4 = var4.bind(var2)(var3);
                            var3 = var4.getSrcWithWidthAndHeight;
                            var2 = {};
                            var6 = _closure2_slot0;
                            var7 = var6.src;
                            var2.src = var7;
                            var7 = var6.width;
                            var2.sourceWidth = var7;
                            var7 = var6.height;
                            var2.sourceHeight = var7;
                            if (var0) {
                                _fun89500_ip = 131;
                                continue _fun89500
                            }
                        case 80:
                            var0 = _closure2_slot1;
                            var7 = 4;
                            var0 = var7 * var0;
                            var2.targetWidth = var0;
                            var0 = _closure2_slot2;
                            var0 = var7 * var0;
                            var2.targetHeight = var0;
                            var0 = _closure2_slot3;
                            var2.format = var0;
                            var0 = var3.bind(var4)(var2);
                            var1.uri = var0;
                            var0 = var1;
                            _fun89500_ip = 171;
                            continue _fun89500;
                        case 131:
                            var7 = var6.width;
                            var2.targetWidth = var7;
                            var6 = var6.height;
                            var2.targetHeight = var6;
                            var5 = _closure2_slot3;
                            var2.format = var5;
                            var2 = var3.bind(var4)(var2);
                            var1.uri = var2;
                            var0 = var1;
                        case 171:
                            return var0;
                    }
                };
                var6 = var6.bind(var13)(var1, var2);
                var2 = _closure1_slot10;
                var1 = _closure1_slot17;
                var0 = {};
                var9 = var9.gridMediaContainer;
                var0.containerStyle = var9;
                var9 = {};
                var9.height = var12;
                var9.width = var11;
                var0.iosStyle = var9;
                var9 = {};
                var9.height = var12;
                var9.width = var11;
                var0.androidStyle = var9;
                var9 = null;
                var9 = var9 != var10;
                if (!var9) {
                    _fun89499_ip = 247;
                    continue _fun89499
                }
            case 244:
                var9 = var10;
            case 247:
                var0.shouldSpoiler = var9;
                var0.obscureReason = var8;
                var0.blurTheme = var7;
                var0.source = var6;
                var6 = var5.height;
                var5 = var5.width;
                var5 = var6 >= var5;
                var0.isPortrait = var5;
                var0.isMediaPost = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.ForumPostGridMedia = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 3157, 4839, 33, 1297, 671, 4669, 4034, 11583, 4222, 11584, 478, 4238, 4867, 5896, 4521, 11585, 3167, 1348, 9716, 1463, 2]);