// modules/icymi/native/media/ICYMIMediaMosaic.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var0 = function arg0() {
        _fun104047: for (var _fun104047_ip = 0;;) switch (_fun104047_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.isGIFV;
                if (var0) {
                    _fun104047_ip = 73;
                    continue _fun104047
                }
            case 12:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 10;
                var2 = var7[var2];
                var5 = undefined;
                var4 = var6.bind(var5)(var2);
                var3 = var4.urlMatchesFileExtension;
                var2 = var1.sourceURI;
                var1 = 11;
                var1 = var7[var1];
                var1 = var6.bind(var5)(var1);
                var1 = var1.GIF_RE_IOS;
                var0 = var3.bind(var4)(var2, var1);
            case 73:
                return var0;
        }
    };
    var _closure1_slot18 = var0;
    var0 = function arg0() {
        _fun104048: for (var _fun104048_ip = 0;;) switch (_fun104048_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.source;
                var10 = var0.height;
                var9 = var0.width;
                var7 = var0.autoplay;
                var8 = var0.style;
                var1 = _closure1_slot16;
                var3 = undefined;
                var6 = var1.bind(var3)();
                var2 = _closure1_slot0;
                var11 = _closure1_slot2;
                var1 = 12;
                var1 = var11[var1];
                var12 = var2.bind(var3)(var1);
                var4 = var12.useStateFromStores;
                var1 = _closure1_slot9;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var1
                    var1 = _closure1_slot9;
                    var0 = var1.videosMuted;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var4 = var4.bind(var12)(var2, var1);
                var2 = _closure1_slot13;
                var1 = _closure1_slot1;
                var0 = 13;
                var0 = var11[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var11 = {};
                var12 = var5.videoURI;
                var13 = null;
                if (!(var13 == var12)) {
                    _fun104048_ip = 136;
                    continue _fun104048
                }
            case 130:
                var12 = var5.sourceURI;
            case 136:
                if (!(var13 == var12)) {
                    _fun104048_ip = 145;
                    continue _fun104048
                }
            case 140:
                var12 = var5.uri;
            case 145:
                var11.videoURI = var12;
                var0.src = var11;
                var0.height = var10;
                var0.width = var9;
                var9 = false;
                var0.postponeRender = var9;
                var7 = !var7;
                var0.paused = var7;
                var0.muted = var4;
                var7 = 'cover';
                var0.resizeMode = var7;
                var9 = var6.media;
                var7 = new Array(2);
                var7[0] = var9;
                var7[1] = var8;
                var0.style = var7;
                var6 = var6.video;
                var0.videoStyle = var6;
                if (var4) {
                    _fun104048_ip = 233;
                    continue _fun104048
                }
            case 227:
                var4 = var5.isGIFV;
            case 233:
                var0.disableFocus = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot19 = var0;
    var0 = function arg0() {
        _fun104050: for (var _fun104050_ip = 0;;) switch (_fun104050_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.source;
                var _closure2_slot0 = var5;
                var13 = var0.dimensions;
                var14 = var0.style;
                var10 = var0.isSpoiler;
                var0 = _closure1_slot16;
                var3 = undefined;
                var12 = var0.bind(var3)();
                var2 = _closure1_slot4;
                var1 = var2.useState;
                var0 = false;
                var2 = var1.bind(var2)(var0);
                var1 = _closure1_slot3;
                var0 = 2;
                var1 = var1.bind(var3)(var2, var0);
                var9 = 0;
                var7 = var1[var9];
                var _closure2_slot1 = var7;
                var0 = 1;
                var0 = var1[var0];
                var _closure2_slot2 = var0;
                var17 = _closure1_slot0;
                var15 = _closure1_slot2;
                var6 = 14;
                var0 = var15[var6];
                var2 = var17.bind(var3)(var0);
                var1 = var2.useAnimatedStyle;
                var0 = function() {
                    _fun104051: for (var _fun104051_ip = 0;;) switch (_fun104051_ip) {
                        case 0:
                            var0 = {};
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 15;
                            var2 = var2[var1];
                            var1 = undefined;
                            var4 = var3.bind(var1)(var2);
                            var3 = var4.withTiming;
                            var1 = _closure2_slot1;
                            var2 = 1;
                            if (!var1) {
                                _fun104051_ip = 47;
                                continue _fun104051
                            }
                        case 45:
                            var2 = 0;
                        case 47:
                            var1 = {};
                            var5 = 150;
                            var1.duration = var5;
                            var1 = var3.bind(var4)(var2, var1);
                            var0.opacity = var1;
                            return var0;
                    }
                };
                var4 = {};
                var16 = 15;
                var16 = var15[var16];
                var16 = var17.bind(var3)(var16);
                var16 = var16.withTiming;
                var4.withTiming = var16;
                var4.imageFinishedLoading = var7;
                var0.__closure = var4;
                var4 = 7803531897566.0;
                var0.__workletHash = var4;
                var4 = _closure1_slot17;
                var0.__initData = var4;
                var19 = var1.bind(var2)(var0);
                var4 = _closure1_slot4;
                var2 = var4.useMemo;
                var0 = var5.height;
                var1 = new Array(3);
                var1[0] = var0;
                var0 = var5.placeholder;
                var1[1] = var0;
                var0 = var5.width;
                var1[2] = var0;
                var0 = function() { // Environment: var11
                    _fun104052: for (var _fun104052_ip = 0;;) switch (_fun104052_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            var2 = var0.placeholder;
                            var0 = null;
                            if (!(var0 == var2)) {
                                _fun104052_ip = 23;
                                continue _fun104052
                            }
                        case 19:
                            var0 = undefined;
                            return var0;
                        case 23:
                            var0 = {};
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var2 = 16;
                            var3 = var3[var2];
                            var2 = undefined;
                            var4 = var4.bind(var2)(var3);
                            var3 = var4.createThumbhashImageFromPlaceholder;
                            var1 = _closure2_slot0;
                            var2 = var1.placeholder;
                            var2 = var3.bind(var4)(var2);
                            var0.uri = var2;
                            var2 = var1.width;
                            var0.width = var2;
                            var1 = var1.height;
                            var0.height = var1;
                            return var0;
                    }
                };
                var21 = var2.bind(var4)(var0, var1);
                var2 = _closure1_slot15;
                var1 = _closure1_slot14;
                var0 = {};
                var17 = _closure1_slot13;
                var7 = _closure1_slot1;
                var4 = var15[var6];
                var4 = var7.bind(var3)(var4);
                var16 = var4.View;
                var4 = {};
                var18 = new Array(2);
                var18[0] = var19;
                var19 = var12.thumbhashMedia;
                var18[1] = var19;
                var4.style = var18;
                var20 = _closure1_slot13;
                var18 = 17;
                var18 = var15[var18];
                var19 = var7.bind(var3)(var18);
                var18 = {};
                var18.source = var21;
                var21 = new Array(3);
                var21[0] = var14;
                var22 = var12.media;
                var21[1] = var22;
                var21[2] = var13;
                var18.style = var21;
                var18 = var20.bind(var3)(var19, var18);
                var4.children = var18;
                var16 = var17.bind(var3)(var16, var4);
                var4 = new Array(2);
                var4[0] = var16;
                var8 = _closure1_slot13;
                var6 = var15[var6];
                var6 = var7.bind(var3)(var6);
                var7 = var6.Image;
                var6 = {};
                var6.source = var5;
                var15 = var12.media;
                var12 = new Array(3);
                var12[0] = var15;
                var12[1] = var14;
                var12[2] = var13;
                var6.style = var12;
                var11 = function() {
                    var2 = _closure2_slot2;
                    var1 = undefined;
                    var0 = true;
                    var0 = var2.bind(var1)(var0);
                    return var0;
                };
                var6.onLoadEnd = var11;
                if (!var10) {
                    _fun104050_ip = 445;
                    continue _fun104050
                }
            case 442:
                var9 = 100;
            case 445:
                var6.blurRadius = var9;
                var5 = var5.uri;
                var5 = var8.bind(var3)(var7, var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot20 = var0;
    var0 = function arg0() {
        _fun104054: for (var _fun104054_ip = 0;;) switch (_fun104054_ip) {
            case 0:
                var1 = arg0;
                var12 = var1.source;
                var11 = var1.dimensions;
                var0 = var1.initialIndex;
                var _closure2_slot0 = var0;
                var8 = var1.handlePressMedia;
                var _closure2_slot1 = var8;
                var10 = var1.style;
                var9 = var1.visible;
                var3 = undefined;
                var _closure2_slot3 = var3;
                var _closure2_slot4 = var3;
                var _closure2_slot5 = var3;
                var1 = _closure1_slot16;
                var24 = var1.bind(var3)();
                var2 = _closure1_slot4;
                var1 = var2.useRef;
                var7 = null;
                var5 = var1.bind(var2)(var7);
                var _closure2_slot2 = var5;
                var4 = _closure1_slot4;
                var2 = var4.useState;
                var13 = var12.spoiler;
                var1 = var7 != var13;
                if (!var1) {
                    _fun104054_ip = 117;
                    continue _fun104054
                }
            case 114:
                var1 = var13;
            case 117:
                var4 = var2.bind(var4)(var1);
                var2 = _closure1_slot3;
                var1 = 2;
                var2 = var2.bind(var3)(var4, var1);
                var1 = 0;
                var13 = var2[var1];
                _closure2_slot3 = var13;
                var1 = 1;
                var1 = var2[var1];
                _closure2_slot4 = var1;
                var4 = _closure1_slot4;
                var2 = var4.useCallback;
                var1 = new Array(3);
                var1[0] = var8;
                var1[1] = var0;
                var1[2] = var13;
                var0 = function() { // Environment: var21
                    _fun104055: for (var _fun104055_ip = 0;;) switch (_fun104055_ip) {
                        case 0:
                            var1 = _closure2_slot3;
                            if (var1) {
                                _fun104055_ip = 42;
                                continue _fun104055
                            }
                        case 10:
                            var3 = _closure2_slot1;
                            var2 = {};
                            var1 = _closure2_slot2;
                            var2.ref = var1;
                            var1 = _closure2_slot0;
                            var2.initialIndex = var1;
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
                            _fun104055_ip = 55;
                            continue _fun104055;
                        case 42:
                            var2 = _closure2_slot4;
                            var1 = undefined;
                            var0 = false;
                            var0 = var2.bind(var1)(var0);
                        case 55:
                            var0 = undefined;
                            return var0;
                    }
                };
                var4 = var2.bind(var4)(var0, var1);
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 12;
                var8 = var2[var0];
                var16 = var1.bind(var3)(var8);
                var15 = var16.useStateFromStores;
                var8 = _closure1_slot9;
                var14 = new Array(1);
                var14[0] = var8;
                var8 = function() { // Environment: var21
                    var1 = _closure1_slot9;
                    var0 = var1.videosMuted;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var20 = var15.bind(var16)(var14, var8);
                _closure2_slot5 = var20;
                var0 = var2[var0];
                var8 = var1.bind(var3)(var0);
                var2 = var8.useStateFromStores;
                var0 = _closure1_slot7;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var21
                    var0 = _closure1_slot7;
                    var0 = var0.useReducedMotion;
                    return var0;
                };
                var8 = var2.bind(var8)(var1, var0);
                var2 = _closure1_slot15;
                var1 = _closure1_slot5;
                var0 = {};
                var0.ref = var5;
                var0.onPress = var4;
                var0.style = var11;
                var5 = var13;
                if (!var5) {
                    _fun104054_ip = 488;
                    continue _fun104054
                }
            case 318:
                var15 = _closure1_slot13;
                var14 = _closure1_slot6;
                var4 = {};
                var16 = var24.centerContainer;
                var4.style = var16;
                var18 = _closure1_slot13;
                var17 = _closure1_slot6;
                var16 = {};
                var19 = var24.spoilerText;
                var16.style = var19;
                var23 = _closure1_slot13;
                var28 = _closure1_slot0;
                var29 = _closure1_slot2;
                var19 = 18;
                var19 = var29[var19];
                var19 = var28.bind(var3)(var19);
                var22 = var19.Text;
                var19 = {
                    'maxFontSizeMultiplier': 1,
                    'variant': 'heading-md/semibold',
                    'color': 'mobile-text-heading-primary'
                };
                var25 = 19;
                var26 = var29[var25];
                var26 = var28.bind(var3)(var26);
                var27 = var26.intl;
                var26 = var27.string;
                var25 = var29[var25];
                var25 = var28.bind(var3)(var25);
                var25 = var25.t;
                var25 = var25["F+x38C"];
                var26 = var26.bind(var27)(var25);
                var25 = var26.toUpperCase;
                var25 = var25.bind(var26)();
                var19.children = var25;
                var19 = var23.bind(var3)(var22, var19);
                var16.children = var19;
                var16 = var18.bind(var3)(var17, var16);
                var4.children = var16;
                var5 = var15.bind(var3)(var14, var4);
            case 488:
                var4 = new Array(4);
                var4[0] = var5;
                var5 = var12.videoURI;
                var5 = var7 != var5;
                if (!var5) {
                    _fun104054_ip = 512;
                    continue _fun104054
                }
            case 509:
                var5 = !var13;
            case 512:
                if (!var5) {
                    _fun104054_ip = 527;
                    continue _fun104054
                }
            case 515:
                var14 = _closure1_slot18;
                var14 = var14.bind(var3)(var12);
                var5 = !var14;
            case 527:
                if (!var5) {
                    _fun104054_ip = 533;
                    continue _fun104054
                }
            case 530:
                var5 = var8;
            case 533:
                if (!var5) {
                    _fun104054_ip = 676;
                    continue _fun104054
                }
            case 539:
                var15 = _closure1_slot13;
                var14 = _closure1_slot6;
                var8 = {};
                var16 = var24.centerContainer;
                var8.style = var16;
                var18 = _closure1_slot13;
                var17 = _closure1_slot6;
                var16 = {};
                var19 = var24.videoIcon;
                var16.style = var19;
                var23 = _closure1_slot13;
                var22 = _closure1_slot0;
                var27 = _closure1_slot2;
                var19 = 20;
                var19 = var27[var19];
                var19 = var22.bind(var3)(var19);
                var22 = var19.PlayIcon;
                var19 = {};
                var26 = _closure1_slot1;
                var25 = 9;
                var25 = var27[var25];
                var25 = var26.bind(var3)(var25);
                var25 = var25.colors;
                var25 = var25.REDESIGN_BUTTON_TERTIARY_TEXT;
                var19.color = var25;
                var25 = 'lg';
                var19.size = var25;
                var19 = var23.bind(var3)(var22, var19);
                var16.children = var19;
                var16 = var18.bind(var3)(var17, var16);
                var8.children = var16;
                var5 = var15.bind(var3)(var14, var8);
            case 676:
                var4[1] = var5;
                var8 = _closure1_slot0;
                var5 = _closure1_slot2;
                var14 = 21;
                var5 = var5[var14];
                var15 = var8.bind(var3)(var5);
                var8 = var15.isVideo;
                var5 = var12.uri;
                var8 = var8.bind(var15)(var5);
                var5 = null;
                if (!var8) {
                    _fun104054_ip = 1025;
                    continue _fun104054
                }
            case 724:
                var8 = _closure1_slot18;
                var8 = var8.bind(var3)(var12);
                var5 = null;
                if (var8) {
                    _fun104054_ip = 1025;
                    continue _fun104054
                }
            case 741:
                var16 = _closure1_slot13;
                var15 = _closure1_slot6;
                var8 = {};
                var17 = var24.absoluteContainer;
                var8.style = var17;
                var19 = _closure1_slot13;
                var18 = _closure1_slot0;
                var22 = _closure1_slot2;
                var17 = 22;
                var17 = var22[var17];
                var17 = var18.bind(var3)(var17);
                var18 = var17.PressableOpacity;
                var17 = {};
                var23 = var24.muteIcon;
                var22 = new Array(2);
                var22[0] = var23;
                if (var20) {
                    _fun104054_ip = 818;
                    continue _fun104054
                }
            case 810:
                var23 = var24.iconBgSelected;
                _fun104054_ip = 824;
                continue _fun104054;
            case 818:
                var23 = var24.iconBg;
            case 824:
                var22[1] = var23;
                var17.style = var22;
                var21 = function() {
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 23;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.setVideosMuted;
                    var0 = _closure2_slot5;
                    var0 = !var0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var17.onPress = var21;
                var21 = 0.8;
                var17.activeOpacity = var21;
                var23 = _closure1_slot13;
                var22 = _closure1_slot0;
                var26 = _closure1_slot2;
                if (var20) {
                    _fun104054_ip = 940;
                    continue _fun104054
                }
            case 873:
                var20 = 25;
                var20 = var26[var20];
                var20 = var22.bind(var3)(var20);
                var21 = var20.VoiceNormalIcon;
                var20 = {};
                var25 = _closure1_slot1;
                var24 = 9;
                var24 = var26[var24];
                var24 = var25.bind(var3)(var24);
                var24 = var24.colors;
                var24 = var24.BLACK;
                var20.color = var24;
                var24 = 'sm';
                var20.size = var24;
                var20 = var23.bind(var3)(var21, var20);
                _fun104054_ip = 1005;
                continue _fun104054;
            case 940:
                var21 = 24;
                var21 = var26[var21];
                var21 = var22.bind(var3)(var21);
                var22 = var21.VoiceXIcon;
                var21 = {};
                var25 = _closure1_slot1;
                var24 = 9;
                var24 = var26[var24];
                var24 = var25.bind(var3)(var24);
                var24 = var24.colors;
                var24 = var24.INTERACTIVE_TEXT_DEFAULT;
                var21.color = var24;
                var24 = 'sm';
                var21.size = var24;
                var20 = var23.bind(var3)(var22, var21);
            case 1005:
                var17.children = var20;
                var17 = var19.bind(var3)(var18, var17);
                var8.children = var17;
                var5 = var16.bind(var3)(var15, var8);
            case 1025:
                var4[2] = var5;
                var8 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var14];
                var14 = var8.bind(var3)(var5);
                var8 = var14.isVideo;
                var5 = var12.uri;
                var5 = var8.bind(var14)(var5);
                if (var5) {
                    _fun104054_ip = 1077;
                    continue _fun104054
                }
            case 1065:
                var5 = _closure1_slot18;
                var5 = var5.bind(var3)(var12);
                if (!var5) {
                    _fun104054_ip = 1087;
                    continue _fun104054
                }
            case 1077:
                var5 = var12.videoURI;
                if (!(var7 == var5)) {
                    _fun104054_ip = 1123;
                    continue _fun104054
                }
            case 1087:
                var8 = _closure1_slot13;
                var7 = _closure1_slot20;
                var5 = {};
                var5.source = var12;
                var5.style = var10;
                var5.dimensions = var11;
                var5.isSpoiler = var13;
                var5 = var8.bind(var3)(var7, var5);
                _fun104054_ip = 1176;
                continue _fun104054;
            case 1123:
                var8 = _closure1_slot13;
                var7 = _closure1_slot19;
                var6 = {};
                var6.source = var12;
                var12 = var11.height;
                var6.height = var12;
                var11 = var11.width;
                var6.width = var11;
                var6.style = var10;
                var9 = !var9;
                var9 = !var9;
                var6.autoplay = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 1176:
                var4[3] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot21 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var7 = var0.source;
        var8 = var0.handlePressMedia;
        var1 = var0.widthOverride;
        var0 = _closure1_slot16;
        var3 = undefined;
        var6 = var0.bind(var3)();
        var0 = _closure1_slot29;
        var9 = var0.bind(var3)(var1);
        var2 = _closure1_slot13;
        var1 = _closure1_slot6;
        var0 = {};
        var10 = var6.imageRow;
        var5 = new Array(2);
        var5[0] = var10;
        var6 = var6.topRow;
        var5[1] = var6;
        var0.style = var5;
        var6 = _closure1_slot13;
        var5 = _closure1_slot21;
        var4 = {};
        var4.handlePressMedia = var8;
        var8 = 0;
        var4.initialIndex = var8;
        var4.source = var7;
        var7 = {};
        var7.width = var9;
        var8 = 1.5;
        var8 = var9 / var8;
        var7.height = var8;
        var4.dimensions = var7;
        var4 = var6.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot22 = var0;
    var0 = function arg0() {
        _fun104060: for (var _fun104060_ip = 0;;) switch (_fun104060_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.sources;
                var9 = var0.start;
                var7 = var0.end;
                var1 = var0.offset;
                var _closure2_slot0 = var1;
                var1 = var0.handlePressMedia;
                var _closure2_slot1 = var1;
                var2 = var0.widthOverride;
                var1 = _closure1_slot16;
                var3 = undefined;
                var8 = var1.bind(var3)();
                var1 = _closure1_slot29;
                var1 = var1.bind(var3)(var2);
                var _closure2_slot2 = var1;
                var2 = _closure1_slot13;
                var1 = _closure1_slot6;
                var0 = {};
                var10 = var8.imageRow;
                var5 = new Array(3);
                var5[0] = var10;
                if (!var9) {
                    _fun104060_ip = 106;
                    continue _fun104060
                }
            case 100:
                var9 = var8.topRow;
            case 106:
                var5[1] = var9;
                if (!var7) {
                    _fun104060_ip = 119;
                    continue _fun104060
                }
            case 113:
                var7 = var8.bottomRow;
            case 119:
                var5[2] = var7;
                var0.style = var5;
                var5 = var6.map;
                var4 = function(arg0, arg1) { // Environment: var4
                    var1 = arg1;
                    var4 = _closure1_slot13;
                    var3 = _closure1_slot21;
                    var2 = {};
                    var0 = _closure2_slot1;
                    var2.handlePressMedia = var0;
                    var0 = _closure2_slot0;
                    var5 = var0 + var1;
                    var2.initialIndex = var5;
                    var5 = arg0;
                    var2.source = var5;
                    var5 = {};
                    var8 = _closure2_slot2;
                    var6 = 8;
                    var9 = var8 - var6;
                    var7 = 3;
                    var9 = var9 / var7;
                    var5.width = var9;
                    var6 = var8 - var6;
                    var6 = var6 / var7;
                    var5.height = var6;
                    var2.dimensions = var5;
                    var1 = var0 + var1;
                    var0 = undefined;
                    var0 = var4.bind(var0)(var3, var2, var1);
                    return var0;
                };
                var4 = var5.bind(var6)(var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot23 = var0;
    var0 = function arg0() {
        _fun104062: for (var _fun104062_ip = 0;;) switch (_fun104062_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.sources;
                var1 = var0.handlePressMedia;
                var _closure2_slot0 = var1;
                var7 = var0.end;
                var2 = var0.widthOverride;
                var1 = _closure1_slot16;
                var3 = undefined;
                var8 = var1.bind(var3)();
                var1 = _closure1_slot29;
                var9 = var1.bind(var3)(var2);
                var1 = {};
                var2 = 4;
                var10 = var9 - var2;
                var5 = 2;
                var10 = var10 / var5;
                var1.width = var10;
                var2 = var9 - var2;
                var5 = var2 / var5;
                var2 = 0.75;
                var2 = var5 / var2;
                var1.height = var2;
                var _closure2_slot1 = var1;
                var2 = _closure1_slot13;
                var1 = _closure1_slot6;
                var0 = {};
                var9 = var8.imageRow;
                var5 = new Array(3);
                var5[0] = var9;
                var9 = var8.topRow;
                var5[1] = var9;
                if (!var7) {
                    _fun104062_ip = 147;
                    continue _fun104062
                }
            case 141:
                var7 = var8.bottomRow;
            case 147:
                var5[2] = var7;
                var0.style = var5;
                var5 = var6.map;
                var4 = function(arg0, arg1) { // Environment: var4
                    var4 = arg1;
                    var3 = _closure1_slot13;
                    var2 = _closure1_slot21;
                    var1 = {};
                    var5 = _closure2_slot0;
                    var1.handlePressMedia = var5;
                    var1.initialIndex = var4;
                    var5 = arg0;
                    var1.source = var5;
                    var0 = _closure2_slot1;
                    var1.dimensions = var0;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2, var1, var4);
                    return var0;
                };
                var4 = var5.bind(var6)(var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot24 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var15 = var0.sources;
        var16 = var0.handlePressMedia;
        var1 = var0.widthOverride;
        var0 = _closure1_slot16;
        var3 = undefined;
        var8 = var0.bind(var3)();
        var0 = _closure1_slot29;
        var14 = var0.bind(var3)(var1);
        var2 = _closure1_slot15;
        var1 = _closure1_slot6;
        var0 = {};
        var5 = var8.imagesContainer;
        var4 = new Array(2);
        var4[0] = var5;
        var5 = var8.imageRow;
        var4[1] = var5;
        var0.style = var4;
        var6 = _closure1_slot13;
        var5 = _closure1_slot6;
        var4 = {};
        var7 = var8.leftColumn;
        var4.style = var7;
        var10 = _closure1_slot13;
        var11 = _closure1_slot21;
        var7 = {};
        var7.handlePressMedia = var16;
        var12 = 0;
        var7.initialIndex = var12;
        var12 = var15[var12];
        var7.source = var12;
        var17 = {};
        var12 = 2;
        var18 = var12 * var14;
        var13 = 3;
        var19 = var18 / var13;
        var18 = 4;
        var18 = var19 - var18;
        var17.width = var18;
        var18 = var12 * var14;
        var18 = var18 / var13;
        var17.height = var18;
        var7.dimensions = var17;
        var7 = var10.bind(var3)(var11, var7);
        var4.children = var7;
        var5 = var6.bind(var3)(var5, var4);
        var4 = new Array(2);
        var4[0] = var5;
        var7 = _closure1_slot15;
        var6 = _closure1_slot6;
        var5 = {};
        var8 = var8.rightColumn;
        var5.style = var8;
        var10 = _closure1_slot13;
        var8 = {};
        var8.handlePressMedia = var16;
        var17 = 1;
        var8.initialIndex = var17;
        var17 = var15[var17];
        var8.source = var17;
        var17 = {};
        var18 = var14 / var13;
        var17.width = var18;
        var18 = var14 / var13;
        var17.height = var18;
        var8.dimensions = var17;
        var10 = var10.bind(var3)(var11, var8);
        var8 = new Array(2);
        var8[0] = var10;
        var10 = _closure1_slot13;
        var9 = {};
        var9.handlePressMedia = var16;
        var9.initialIndex = var12;
        var12 = var15[var12];
        var9.source = var12;
        var12 = {};
        var15 = var14 / var13;
        var12.width = var15;
        var13 = var14 / var13;
        var12.height = var13;
        var9.dimensions = var12;
        var9 = var10.bind(var3)(var11, var9);
        var8[1] = var9;
        var5.children = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot25 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var14 = var0.sources;
        var13 = var0.handlePressMedia;
        var1 = var0.widthOverride;
        var0 = _closure1_slot16;
        var3 = undefined;
        var10 = var0.bind(var3)();
        var0 = _closure1_slot29;
        var0 = var0.bind(var3)(var1);
        var12 = {};
        var15 = 2;
        var2 = var0 / var15;
        var1 = 4;
        var2 = var2 - var1;
        var12.width = var2;
        var0 = var0 / var15;
        var1 = var0 - var1;
        var0 = 1.5;
        var0 = var1 / var0;
        var12.height = var0;
        var2 = _closure1_slot15;
        var1 = _closure1_slot6;
        var0 = {};
        var4 = var10.imagesContainer;
        var0.style = var4;
        var6 = _closure1_slot15;
        var5 = _closure1_slot6;
        var4 = {};
        var8 = var10.imageRow;
        var7 = new Array(2);
        var7[0] = var8;
        var8 = var10.topRow;
        var7[1] = var8;
        var4.style = var7;
        var8 = _closure1_slot13;
        var11 = _closure1_slot21;
        var7 = {};
        var7.handlePressMedia = var13;
        var16 = 0;
        var7.initialIndex = var16;
        var16 = var14[var16];
        var7.source = var16;
        var7.dimensions = var12;
        var8 = var8.bind(var3)(var11, var7);
        var7 = new Array(2);
        var7[0] = var8;
        var16 = _closure1_slot13;
        var8 = {};
        var8.handlePressMedia = var13;
        var17 = 1;
        var8.initialIndex = var17;
        var17 = var14[var17];
        var8.source = var17;
        var8.dimensions = var12;
        var8 = var16.bind(var3)(var11, var8);
        var7[1] = var8;
        var4.children = var7;
        var5 = var6.bind(var3)(var5, var4);
        var4 = new Array(2);
        var4[0] = var5;
        var7 = _closure1_slot15;
        var6 = _closure1_slot6;
        var5 = {};
        var16 = var10.imageRow;
        var8 = new Array(2);
        var8[0] = var16;
        var10 = var10.bottomRow;
        var8[1] = var10;
        var5.style = var8;
        var10 = _closure1_slot13;
        var8 = {};
        var8.handlePressMedia = var13;
        var8.initialIndex = var15;
        var15 = var14[var15];
        var8.source = var15;
        var8.dimensions = var12;
        var10 = var10.bind(var3)(var11, var8);
        var8 = new Array(2);
        var8[0] = var10;
        var10 = _closure1_slot13;
        var9 = {};
        var9.handlePressMedia = var13;
        var13 = 3;
        var9.initialIndex = var13;
        var13 = var14[var13];
        var9.source = var13;
        var9.dimensions = var12;
        var9 = var10.bind(var3)(var11, var9);
        var8[1] = var9;
        var5.children = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot26 = var0;
    var0 = function arg0() {
        var1 = arg0;
        var10 = var1.source;
        var _closure2_slot0 = var10;
        var11 = var1.initialIndex;
        var12 = var1.handlePressMedia;
        var7 = var1.visible;
        var2 = var1.widthOverride;
        var1 = _closure1_slot16;
        var3 = undefined;
        var8 = var1.bind(var3)();
        var1 = _closure1_slot29;
        var6 = var1.bind(var3)(var2);
        var _closure2_slot1 = var6;
        var5 = _closure1_slot4;
        var2 = var5.useMemo;
        var9 = var10.width;
        var1 = new Array(3);
        var1[0] = var9;
        var9 = var10.height;
        var1[1] = var9;
        var1[2] = var6;
        var0 = function() { // Environment: var0
            _fun104067: for (var _fun104067_ip = 0;;) switch (_fun104067_ip) {
                case 0:
                    var1 = _closure2_slot0;
                    var2 = var1.width;
                    var1 = var1.height;
                    var2 = var2 / var1;
                    var1 = 1;
                    if (!(!(var2 >= var1))) {
                        _fun104067_ip = 109;
                        continue _fun104067
                    }
                case 28:
                    var1 = global;
                    var5 = var1.Math;
                    var4 = var5.min;
                    var1 = _closure2_slot0;
                    var3 = var1.height;
                    var1 = 330;
                    var3 = var4.bind(var5)(var3, var1);
                    var4 = var3 * var2;
                    var1 = _closure2_slot1;
                    if (!(!(var4 > var1))) {
                        _fun104067_ip = 86;
                        continue _fun104067
                    }
                case 74:
                    var1 = {};
                    var1.width = var4;
                    var1.height = var3;
                    _fun104067_ip = 107;
                    continue _fun104067;
                case 86:
                    var3 = {};
                    var4 = _closure2_slot1;
                    var3.width = var4;
                    var4 = var4 / var2;
                    var3.height = var4;
                    var1 = var3;
                case 107:
                    return var1;
                case 109:
                    var1 = global;
                    var4 = var1.Math;
                    var3 = var4.min;
                    var1 = _closure2_slot0;
                    var1 = var1.width;
                    var0 = _closure2_slot1;
                    var1 = var3.bind(var4)(var1, var0);
                    var0 = {};
                    var2 = var1 / var2;
                    var0.height = var2;
                    var0.width = var1;
                    return var0;
            }
        };
        var9 = var2.bind(var5)(var0, var1);
        var2 = _closure1_slot13;
        var1 = _closure1_slot6;
        var0 = {};
        var5 = var8.imagesContainer;
        var0.style = var5;
        var6 = _closure1_slot13;
        var5 = _closure1_slot21;
        var4 = {};
        var4.handlePressMedia = var12;
        var4.initialIndex = var11;
        var4.source = var10;
        var4.dimensions = var9;
        var8 = var8.singleImage;
        var4.style = var8;
        var4.visible = var7;
        var4 = var6.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot27 = var0;
    var1 = function arg0() {
        _fun104068: for (var _fun104068_ip = 0;;) switch (_fun104068_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.sources;
                var _closure2_slot0 = var8;
                var9 = var0.handlePressMedia;
                var _closure2_slot1 = var9;
                var6 = var0.visible;
                var10 = var0.widthOverride;
                var _closure2_slot2 = var10;
                var3 = var8.length;
                var _closure2_slot3 = var3;
                var0 = _closure1_slot16;
                var5 = undefined;
                var12 = var0.bind(var5)();
                var7 = _closure1_slot4;
                var4 = var7.useMemo;
                var1 = new Array(2);
                var1[0] = var3;
                var1[1] = var8;
                var0 = function() { // Environment: var11
                    _fun104069: for (var _fun104069_ip = 0;;) switch (_fun104069_ip) {
                        case 0:
                            var0 = new Array(0);
                            var1 = _closure2_slot3;
                            var3 = 3;
                            var1 = var1 % var3;
                            var7 = 0;
                            var2 = var3;
                            if (!(var7 !== var1)) {
                                _fun104069_ip = 30;
                                continue _fun104069
                            }
                        case 27:
                            var2 = var1;
                        case 30:
                            var5 = var0.push;
                            var6 = _closure2_slot0;
                            var1 = var6.slice;
                            var1 = var1.bind(var6)(var7, var2);
                            var1 = var5.bind(var0)(var1);
                            var1 = _closure2_slot3;
                            if (!(var2 < var1)) {
                                _fun104069_ip = 103;
                                continue _fun104069
                            }
                        case 63:
                            var6 = var0.push;
                            var7 = _closure2_slot0;
                            var1 = var7.slice;
                            var5 = var2 + var3;
                            var1 = var1.bind(var7)(var2, var5);
                            var1 = var6.bind(var0)(var1);
                            var1 = _closure2_slot3;
                            var2 = var5;
                            if (var2 < var1) {
                                _fun104069_ip = 63;
                                continue _fun104069
                            }
                        case 103:
                            return var0;
                    }
                };
                var13 = var4.bind(var7)(var0, var1);
                var _closure2_slot4 = var13;
                var7 = 0;
                var0 = null;
                if (!(var7 !== var3)) {
                    _fun104068_ip = 298;
                    continue _fun104068
                }
            case 112:
                var1 = 1;
                if (!(var1 !== var3)) {
                    _fun104068_ip = 251;
                    continue _fun104068
                }
            case 122:
                var1 = 3;
                if (!(var1 !== var3)) {
                    _fun104068_ip = 218;
                    continue _fun104068
                }
            case 129:
                var1 = 4;
                if (!(var1 !== var3)) {
                    _fun104068_ip = 185;
                    continue _fun104068
                }
            case 136:
                var4 = _closure1_slot13;
                var3 = _closure1_slot6;
                var1 = {};
                var12 = var12.imagesContainer;
                var1.style = var12;
                var12 = var13.map;
                var11 = function(arg0, arg1) { // Environment: var11
                    _fun104070: for (var _fun104070_ip = 0;;) switch (_fun104070_ip) {
                        case 0:
                            var5 = arg0;
                            var4 = arg1;
                            var0 = var5.length;
                            var6 = 1;
                            if (!(var6 !== var0)) {
                                _fun104070_ip = 229;
                                continue _fun104070
                            }
                        case 21:
                            var1 = var5.length;
                            var0 = 2;
                            if (!(var0 !== var1)) {
                                _fun104070_ip = 158;
                                continue _fun104070
                            }
                        case 36:
                            var1 = 0;
                            var7 = var1 === var4;
                            var8 = 0;
                            if (var7) {
                                _fun104070_ip = 78;
                                continue _fun104070
                            }
                        case 47:
                            var0 = _closure2_slot4;
                            var0 = var0[var1];
                            var1 = var0.length;
                            var2 = var4 - var6;
                            var0 = 3;
                            var0 = var0 * var2;
                            var8 = var1 + var0;
                        case 78:
                            var3 = _closure1_slot13;
                            var2 = _closure1_slot23;
                            var1 = {};
                            var9 = _closure2_slot2;
                            var1.widthOverride = var9;
                            var9 = _closure2_slot1;
                            var1.handlePressMedia = var9;
                            var1.offset = var8;
                            var1.sources = var5;
                            var1.start = var7;
                            var0 = _closure2_slot4;
                            var0 = var0.length;
                            var0 = var0 - var6;
                            var0 = var4 === var0;
                            var1.end = var0;
                            var0 = undefined;
                            var0 = var3.bind(var0)(var2, var1, var4);
                            return var0;
                        case 158:
                            var3 = _closure1_slot13;
                            var2 = _closure1_slot24;
                            var1 = {};
                            var7 = _closure2_slot2;
                            var1.widthOverride = var7;
                            var1.sources = var5;
                            var7 = _closure2_slot1;
                            var1.handlePressMedia = var7;
                            var0 = _closure2_slot4;
                            var0 = var0.length;
                            var0 = var0 - var6;
                            var0 = var4 === var0;
                            var1.end = var0;
                            var0 = undefined;
                            var0 = var3.bind(var0)(var2, var1, var4);
                            return var0;
                        case 229:
                            var3 = _closure1_slot13;
                            var2 = _closure1_slot22;
                            var1 = {};
                            var0 = _closure2_slot1;
                            var1.handlePressMedia = var0;
                            var0 = 0;
                            var0 = var5[var0];
                            var1.source = var0;
                            var0 = undefined;
                            var0 = var3.bind(var0)(var2, var1, var4);
                            return var0;
                    }
                };
                var11 = var12.bind(var13)(var11);
                var1.children = var11;
                var1 = var4.bind(var5)(var3, var1);
                _fun104068_ip = 216;
                continue _fun104068;
            case 185:
                var11 = _closure1_slot13;
                var4 = _closure1_slot26;
                var3 = {};
                var3.widthOverride = var10;
                var3.handlePressMedia = var9;
                var3.sources = var8;
                var1 = var11.bind(var5)(var4, var3);
            case 216:
                _fun104068_ip = 249;
                continue _fun104068;
            case 218:
                var11 = _closure1_slot13;
                var4 = _closure1_slot25;
                var3 = {};
                var3.widthOverride = var10;
                var3.handlePressMedia = var9;
                var3.sources = var8;
                var1 = var11.bind(var5)(var4, var3);
            case 249:
                _fun104068_ip = 295;
                continue _fun104068;
            case 251:
                var4 = _closure1_slot13;
                var3 = _closure1_slot27;
                var2 = {};
                var2.widthOverride = var10;
                var2.initialIndex = var7;
                var2.handlePressMedia = var9;
                var7 = var8[var7];
                var2.source = var7;
                var2.visible = var6;
                var1 = var4.bind(var5)(var3, var2);
            case 295:
                var0 = var1;
            case 298:
                return var0;
        }
    };
    var _closure1_slot28 = var1;
    var0 = function arg0() {
        _fun104071: for (var _fun104071_ip = 0;;) switch (_fun104071_ip) {
            case 0:
                var0 = arg0;
                var4 = _closure1_slot4;
                var2 = var4.useContext;
                var5 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 26;
                var1 = var3[var1];
                var3 = undefined;
                var1 = var5.bind(var3)(var1);
                var1 = var1.ICYMIContext;
                var1 = var2.bind(var4)(var1);
                var2 = null;
                if (!(var2 == var0)) {
                    _fun104071_ip = 96;
                    continue _fun104071
                }
            case 55:
                var2 = var2 == var1;
                var3 = undefined;
                if (var2) {
                    _fun104071_ip = 69;
                    continue _fun104071
                }
            case 64:
                var3 = var1.width;
            case 69:
                var2 = var1.inset;
                var2 = var3 - var2;
                var3 = var1.margin;
                var1 = 2;
                var1 = var1 * var3;
                var0 = var2 - var1;
            case 96:
                return var0;
        }
    };
    var _closure1_slot29 = var0;
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
    var8 = var6[var4];
    var4 = arg3;
    var4 = var4.bind(var0)(var8);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var8 = var4.Pressable;
    var _closure1_slot5 = var8;
    var4 = var4.View;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.AnalyticsObjectTypes;
    var _closure1_slot10 = var7;
    var7 = var4.AnalyticsObjects;
    var _closure1_slot11 = var7;
    var4 = var4.AnalyticsPages;
    var _closure1_slot12 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.jsx;
    var _closure1_slot13 = var7;
    var7 = var4.Fragment;
    var _closure1_slot14 = var7;
    var4 = var4.jsxs;
    var _closure1_slot15 = var4;
    var4 = 8;
    var4 = var6[var4];
    var8 = var5.bind(var0)(var4);
    var7 = var8.createStyles;
    var4 = function() { // Environment: var3
        var0 = {};
        var1 = {};
        var4 = _closure1_slot1;
        var5 = _closure1_slot2;
        var2 = 9;
        var6 = var5[var2];
        var3 = undefined;
        var6 = var4.bind(var3)(var6);
        var6 = var6.radii;
        var6 = var6.xs;
        var1.borderRadius = var6;
        var0.media = var1;
        var1 = {};
        var6 = var5[var2];
        var6 = var4.bind(var3)(var6);
        var6 = var6.colors;
        var6 = var6.BACKGROUND_SURFACE_HIGH;
        var1.backgroundColor = var6;
        var0.video = var1;
        var1 = {
            'position': 'absolute',
            'top': 0,
            'left': 0,
            'zIndex': 1
        };
        var0.thumbhashMedia = var1;
        var1 = {};
        var7 = 4;
        var1.gap = var7;
        var0.container = var1;
        var1 = {
            'justifyContent': 'center',
            'gap': 4,
            'width': '100%'
        };
        var0.imagesContainer = var1;
        var1 = {
            'flexDirection': 'row',
            'gap': 4
        };
        var0.imageRow = var1;
        var1 = {};
        var6 = 'hidden';
        var1.overflow = var6;
        var8 = var5[var2];
        var8 = var4.bind(var3)(var8);
        var8 = var8.radii;
        var8 = var8.lg;
        var1.borderTopEndRadius = var8;
        var8 = var5[var2];
        var8 = var4.bind(var3)(var8);
        var8 = var8.radii;
        var8 = var8.lg;
        var1.borderTopStartRadius = var8;
        var0.topRow = var1;
        var1 = {};
        var1.overflow = var6;
        var8 = var5[var2];
        var8 = var4.bind(var3)(var8);
        var8 = var8.radii;
        var8 = var8.lg;
        var1.borderBottomEndRadius = var8;
        var8 = var5[var2];
        var8 = var4.bind(var3)(var8);
        var8 = var8.radii;
        var8 = var8.lg;
        var1.borderBottomStartRadius = var8;
        var0.bottomRow = var1;
        var1 = {};
        var8 = var5[var2];
        var8 = var4.bind(var3)(var8);
        var8 = var8.colors;
        var8 = var8.BACKGROUND_BASE_LOW;
        var1.backgroundColor = var8;
        var8 = var5[var2];
        var8 = var4.bind(var3)(var8);
        var8 = var8.radii;
        var8 = var8.round;
        var1.borderRadius = var8;
        var8 = 16;
        var1.padding = var8;
        var0.videoIcon = var1;
        var1 = {
            'position': 'absolute',
            'borderRadius': null,
            'padding': null,
            'bottom': 8,
            'right': 8
        };
        var8 = var5[var2];
        var8 = var4.bind(var3)(var8);
        var8 = var8.radii;
        var8 = var8.round;
        var1.borderRadius = var8;
        var8 = var5[var2];
        var8 = var4.bind(var3)(var8);
        var8 = var8.spacing;
        var8 = var8.PX_4;
        var1.padding = var8;
        var0.muteIcon = var1;
        var1 = {};
        var8 = var5[var2];
        var8 = var4.bind(var3)(var8);
        var8 = var8.colors;
        var8 = var8.INTERACTIVE_TEXT_ACTIVE;
        var1.backgroundColor = var8;
        var0.muteIconActive = var1;
        var1 = {};
        var8 = var5[var2];
        var8 = var4.bind(var3)(var8);
        var8 = var8.colors;
        var8 = var8.SPOILER_HIDDEN_BACKGROUND;
        var1.backgroundColor = var8;
        var8 = var5[var2];
        var8 = var4.bind(var3)(var8);
        var8 = var8.radii;
        var8 = var8.lg;
        var1.borderRadius = var8;
        var8 = var5[var2];
        var8 = var4.bind(var3)(var8);
        var8 = var8.spacing;
        var8 = var8.PX_12;
        var1.paddingHorizontal = var8;
        var8 = 6;
        var1.paddingVertical = var8;
        var0.spoilerText = var1;
        var1 = {};
        var1.overflow = var6;
        var8 = var5[var2];
        var8 = var4.bind(var3)(var8);
        var8 = var8.radii;
        var8 = var8.lg;
        var1.borderTopStartRadius = var8;
        var8 = var5[var2];
        var8 = var4.bind(var3)(var8);
        var8 = var8.radii;
        var8 = var8.lg;
        var1.borderBottomStartRadius = var8;
        var0.leftColumn = var1;
        var1 = {};
        var1.overflow = var6;
        var8 = var5[var2];
        var8 = var4.bind(var3)(var8);
        var8 = var8.radii;
        var8 = var8.lg;
        var1.borderTopEndRadius = var8;
        var8 = var5[var2];
        var8 = var4.bind(var3)(var8);
        var8 = var8.radii;
        var8 = var8.lg;
        var1.borderBottomEndRadius = var8;
        var1.gap = var7;
        var0.rightColumn = var1;
        var1 = {};
        var1.overflow = var6;
        var6 = var5[var2];
        var6 = var4.bind(var3)(var6);
        var6 = var6.radii;
        var6 = var6.lg;
        var1.borderRadius = var6;
        var0.singleImage = var1;
        var1 = {
            'position': 'absolute',
            'width': '100%',
            'height': '100%',
            'alignItems': 'center',
            'justifyContent': 'center',
            'zIndex': 2
        };
        var0.centerContainer = var1;
        var1 = {
            'position': 'absolute',
            'width': '100%',
            'height': '100%',
            'zIndex': 2
        };
        var0.absoluteContainer = var1;
        var1 = {};
        var6 = var5[var2];
        var6 = var4.bind(var3)(var6);
        var6 = var6.colors;
        var6 = var6.BACKGROUND_BASE_LOWER;
        var1.backgroundColor = var6;
        var0.iconBg = var1;
        var1 = {};
        var2 = var5[var2];
        var2 = var4.bind(var3)(var2);
        var2 = var2.colors;
        var2 = var2.WHITE;
        var1.backgroundColor = var2;
        var0.iconBgSelected = var1;
        return var0;
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot16 = var4;
    var4 = {};
    var7 = 'function ICYMIMediaMosaicTsx1(){const{withTiming,imageFinishedLoading}=this.__closure;return{opacity:withTiming(imageFinishedLoading?0:1,{duration:150})};}';
    var4.code = var7;
    var _closure1_slot17 = var4;
    var4 = 33;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/icymi/native/media/ICYMIMediaMosaic.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function arg0() {
        _fun104073: for (var _fun104073_ip = 0;;) switch (_fun104073_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.message;
                var _closure2_slot0 = var1;
                var15 = var0.widthOverride;
                var _closure2_slot1 = var15;
                var12 = var0.visible;
                var _closure2_slot2 = var12;
                var0 = var0.itemType;
                var _closure2_slot3 = var0;
                var5 = undefined;
                var _closure2_slot7 = var5;
                var2 = _closure1_slot16;
                var9 = var2.bind(var5)();
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 12;
                var2 = var4[var2];
                var7 = var3.bind(var5)(var2);
                var4 = var7.useStateFromStores;
                var2 = _closure1_slot8;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = function() { // Environment: var8
                    var2 = _closure1_slot8;
                    var1 = var2.getChannel;
                    var3 = _closure2_slot0;
                    var0 = var3.getChannelId;
                    var0 = var0.bind(var3)();
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var13 = var4.bind(var7)(var3, var2);
                var _closure2_slot4 = var13;
                var7 = _closure1_slot4;
                var4 = var7.useMemo;
                var3 = new Array(1);
                var3[0] = var1;
                var2 = function() { // Environment: var8
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var2 = 27;
                    var2 = var6[var2];
                    var4 = undefined;
                    var8 = var5.bind(var4)(var2);
                    var7 = var8.extractMediaSourcesFromMessage;
                    var3 = _closure2_slot0;
                    var2 = 28;
                    var2 = var6[var2];
                    var2 = var5.bind(var4)(var2);
                    var9 = var2.GRAVITY_VALID_EMBED_TYPES;
                    var13 = var8;
                    var12 = var3;
                    var11 = var3;
                    var10 = undefined;
                    var7 = var13[var7](var12, var11, var10, var9, var8);
                    var3 = var7.map;
                    var2 = function(arg0) { // Environment: var1
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 27;
                        var1 = var1[var0];
                        var0 = undefined;
                        var2 = var2.bind(var0)(var1);
                        var1 = var2.flattenSource;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var7 = var3.bind(var7)(var2);
                    var3 = var7.filter;
                    var2 = 29;
                    var2 = var6[var2];
                    var2 = var5.bind(var4)(var2);
                    var2 = var2.isNotNullish;
                    var2 = var3.bind(var7)(var2);
                    var3 = 30;
                    var3 = var6[var3];
                    var5 = var5.bind(var4)(var3);
                    var3 = var5.partition;
                    var1 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var1 = var0.accessoryType;
                        var0 = 'embed';
                        var0 = var0 === var1;
                        return var0;
                    };
                    var3 = var3.bind(var5)(var2, var1);
                    var1 = _closure1_slot3;
                    var0 = 2;
                    var3 = var1.bind(var4)(var3, var0);
                    var0 = 0;
                    var1 = var3[var0];
                    var0 = {};
                    var0.allMediaSources = var2;
                    var2 = 1;
                    var2 = var3[var2];
                    var0.nonEmbedSources = var2;
                    var0.embedSources = var1;
                    return var0;
                };
                var2 = var4.bind(var7)(var2, var3);
                var7 = var2.allMediaSources;
                var _closure2_slot5 = var7;
                var14 = var2.nonEmbedSources;
                var _closure2_slot6 = var14;
                var10 = var2.embedSources;
                var4 = _closure1_slot4;
                var3 = var4.useCallback;
                var11 = var1.channel_id;
                var2 = new Array(5);
                var2[0] = var11;
                var11 = var1.id;
                var2[1] = var11;
                var2[2] = var7;
                var7 = null;
                var16 = var7 == var13;
                var11 = undefined;
                if (var16) {
                    _fun104073_ip = 222;
                    continue _fun104073
                }
            case 217:
                var11 = var13.name;
            case 222:
                var2[3] = var11;
                var2[4] = var0;
                var0 = function(arg0) { // Environment: var8
                    _fun104078: for (var _fun104078_ip = 0;;) switch (_fun104078_ip) {
                        case 0:
                            var0 = arg0;
                            var4 = var0.ref;
                            var8 = var0.initialIndex;
                            var7 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var2 = 23;
                            var5 = var3[var2];
                            var0 = undefined;
                            var14 = var7.bind(var0)(var5);
                            var13 = var14.itemInteracted;
                            var5 = _closure2_slot0;
                            var12 = var5.id;
                            var11 = 'message';
                            var10 = 'press_media';
                            var10 = var13.bind(var14)(var12, var11, var10);
                            var2 = var3[var2];
                            var11 = var7.bind(var0)(var2);
                            var10 = var11.feedItemActioned;
                            var2 = {};
                            var7 = var5.id;
                            var2.itemId = var7;
                            var7 = _closure2_slot3;
                            var2.itemType = var7;
                            var7 = null;
                            var12 = {
                                'actionGestureType': 'press',
                                'actionTargetElement': 'media_mosaic',
                                'actionIntentType': 'open',
                                'actionDestinationType': null
                            };
                            var2.actionParameters = var12;
                            var2 = var10.bind(var11)(var2);
                            var2 = _closure1_slot0;
                            var10 = 31;
                            var10 = var3[var10];
                            var14 = var2.bind(var0)(var10);
                            var13 = var14.ack;
                            var19 = var5.channel_id;
                            var11 = {};
                            var10 = _closure1_slot12;
                            var10 = var10.ICYMI;
                            var11.page = var10;
                            var10 = _closure1_slot11;
                            var10 = var10.ACK_MEDIA_VIEWED;
                            var11.object = var10;
                            var9 = _closure1_slot10;
                            var9 = var9.ACK_SEMI_AUTOMATIC;
                            var11.objectType = var9;
                            var15 = var5.id;
                            var20 = var14;
                            var18 = var11;
                            var17 = true;
                            var16 = true;
                            var9 = var20[var13](var19, var18, var17, var16, var15, var14);
                            var9 = new Array(0);
                            var _closure3_slot0 = var9;
                            var11 = _closure2_slot5;
                            var10 = var11.forEach;
                            var1 = function(arg0) { // Environment: var1
                                var3 = _closure3_slot0;
                                var2 = var3.push;
                                var1 = {};
                                var5 = arg0;
                                var6 = var1;
                                var0 = copyDataProperties(var6, var5);
                                var0 = undefined;
                                var4 = 'embedURI';
                                var1[var4] = var0;
                                var1 = var2.bind(var3)(var1);
                                return var0;
                            };
                            var1 = var10.bind(var11)(var1);
                            var1 = 32;
                            var1 = var3[var1];
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.openMediaModal;
                            var1 = {};
                            var10 = false;
                            var1.disableDownload = var10;
                            var1.initialSources = var9;
                            var1.initialIndex = var8;
                            var8 = 'Channel';
                            var1.analyticsSource = var8;
                            var5 = var5.channel_id;
                            var1.channelId = var5;
                            var5 = _closure2_slot4;
                            var7 = var7 == var5;
                            var5 = undefined;
                            if (var7) {
                                _fun104078_ip = 337;
                                continue _fun104078
                            }
                        case 328:
                            var6 = _closure2_slot4;
                            var5 = var6.name;
                        case 337:
                            var1.contextName = var5;
                            var1.contextIcon = var0;
                            var4 = var4.current;
                            var1.originViewOrOriginLayout = var4;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                    }
                };
                var13 = var3.bind(var4)(var0, var2);
                _closure2_slot7 = var13;
                var0 = var14.length;
                var3 = 0;
                if (!(var3 === var0)) {
                    _fun104073_ip = 272;
                    continue _fun104073
                }
            case 258:
                var2 = var10.length;
                var0 = null;
                if (!(var3 !== var2)) {
                    _fun104073_ip = 405;
                    continue _fun104073
                }
            case 272:
                var4 = _closure1_slot15;
                var3 = _closure1_slot6;
                var2 = {};
                var9 = var9.container;
                var2.style = var9;
                var11 = _closure1_slot13;
                var9 = _closure1_slot28;
                var6 = {};
                var6.widthOverride = var15;
                var6.sources = var14;
                var6.handlePressMedia = var13;
                var6.visible = var12;
                var9 = var11.bind(var5)(var9, var6);
                var6 = new Array(2);
                var6[0] = var9;
                var9 = var7 == var10;
                var7 = undefined;
                if (var9) {
                    _fun104073_ip = 361;
                    continue _fun104073
                }
            case 344:
                var9 = var10.map;
                var8 = function(arg0, arg1) { // Environment: var8
                    var5 = arg1;
                    var4 = _closure1_slot13;
                    var3 = _closure1_slot27;
                    var2 = {};
                    var1 = _closure2_slot1;
                    var2.widthOverride = var1;
                    var1 = _closure2_slot7;
                    var2.handlePressMedia = var1;
                    var1 = _closure2_slot6;
                    var1 = var1.length;
                    var1 = var5 + var1;
                    var2.initialIndex = var1;
                    var1 = arg0;
                    var2.source = var1;
                    var0 = _closure2_slot2;
                    var2.visible = var0;
                    var0 = global;
                    var0 = var0.HermesInternal;
                    var1 = var0.concat;
                    var0 = 'gif-';
                    var1 = var1.bind(var0)(var5);
                    var0 = undefined;
                    var0 = var4.bind(var0)(var3, var2, var1);
                    return var0;
                };
                var7 = var9.bind(var10)(var8);
            case 361:
                var6[1] = var7;
                var2.children = var6;
                var7 = var1.id;
                var1 = global;
                var1 = var1.HermesInternal;
                var6 = var1.concat;
                var1 = 'message-image-';
                var1 = var6.bind(var1)(var7);
                var0 = var4.bind(var5)(var3, var2, var1);
            case 405:
                return var0;
        }
    };
    var2.default = var3;
    var2.GravityAttachmentMediaMosaic = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1298, 1372, 8875, 660, 33, 1297, 671, 3980, 670, 566, 8853, 3720, 4097, 13574, 4704, 3941, 1234, 5871, 4013, 4902, 8885, 8472, 4863, 13529, 8856, 6621, 1304, 22, 4574, 8854, 2]);