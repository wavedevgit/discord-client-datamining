// components_native/common/Video.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var0 = function() {
        _fun70727: for (var _fun70727_ip = 0;;) switch (_fun70727_ip) {
            case 0:
            case 2: // try_start_0
                var1 = global;
                var2 = var1.Boolean;
                var2 = var2.prototype;
                var3 = var2.valueOf;
                var2 = var3.call;
                var7 = var1.Reflect;
                var6 = var7.construct;
                var5 = var1.Boolean;
                var4 = new Array(0);
                var1 = function() { // Environment: var0
                    var0 = undefined;
                    return var0;
                };
                var1 = var6.bind(var7)(var5, var4, var1);
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                var _closure2_slot0 = var1;
            case 72: // try_end0
                _fun70727_ip = 76;
                continue _fun70727;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot16 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot16 = var0;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var1);
    var0 = 0;
    var1 = var7[var0];
    var0 = undefined;
    var1 = var12.bind(var0)(var1);
    var _closure1_slot2 = var1;
    var13 = 1;
    var1 = var7[var13];
    var1 = var12.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 2;
    var1 = var7[var1];
    var1 = var12.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 3;
    var1 = var7[var1];
    var1 = var12.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 4;
    var1 = var7[var1];
    var1 = var12.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 5;
    var1 = var7[var1];
    var1 = var12.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 6;
    var4 = var7[var1];
    var1 = arg3;
    var4 = var1.bind(var0)(var4);
    var _closure1_slot8 = var4;
    var1 = 7;
    var1 = var7[var1];
    var1 = var6.bind(var0)(var1);
    var5 = var1.TouchableWithoutFeedback;
    var _closure1_slot9 = var5;
    var5 = var1.View;
    var _closure1_slot10 = var5;
    var5 = var1.Image;
    var _closure1_slot11 = var5;
    var1 = var1.AppState;
    var _closure1_slot12 = var1;
    var1 = 8;
    var1 = var7[var1];
    var1 = var6.bind(var0)(var1);
    var1 = var1.jsx;
    var _closure1_slot13 = var1;
    var1 = 9;
    var1 = var7[var1];
    var9 = var6.bind(var0)(var1);
    var8 = var9.createLegacyClassComponentStyles;
    var1 = {};
    var10 = {
        'flex': 1,
        'shadowColor': null,
        'shadowOpacity': 0.5,
        'shadowOffset': null,
        'shadowRadius': 16
    };
    var11 = 10;
    var5 = var7[var11];
    var5 = var12.bind(var0)(var5);
    var5 = var5.unsafe_rawColors;
    var5 = var5.BLACK;
    var10.shadowColor = var5;
    var5 = {
        'height': 1,
        'width': 0
    };
    var10.shadowOffset = var5;
    var5 = 16;
    var14 = var7[var11];
    var14 = var12.bind(var0)(var14);
    var14 = var14.unsafe_rawColors;
    var14 = var14.BRAND_500;
    var10.backgroundColor = var14;
    var1.container = var10;
    var10 = {};
    var10.flex = var13;
    var11 = var7[var11];
    var11 = var12.bind(var0)(var11);
    var11 = var11.unsafe_rawColors;
    var11 = var11.BRAND_500;
    var10.backgroundColor = var11;
    var1.video = var10;
    var1 = var8.bind(var9)(var1);
    var _closure1_slot14 = var1;
    var1 = function arg0() {
        _fun70730: for (var _fun70730_ip = 0;;) switch (_fun70730_ip) {
            case 0:
                var0 = arg0;
                var23 = var0.style;
                var22 = var0.source;
                var20 = var0.poster;
                var12 = var0.onLoadStart;
                var11 = var0.onLoad;
                var10 = var0.onError;
                var9 = var0.onEnd;
                var16 = var0.paused;
                var3 = undefined;
                if (!(var16 === var3)) {
                    _fun70730_ip = 59;
                    continue _fun70730
                }
            case 57:
                var16 = false;
            case 59:
                var19 = var0.muted;
                if (!(var19 === var3)) {
                    _fun70730_ip = 71;
                    continue _fun70730
                }
            case 69:
                var19 = true;
            case 71:
                var15 = var0.posterResizeMode;
                if (!(var15 === var3)) {
                    _fun70730_ip = 85;
                    continue _fun70730
                }
            case 81:
                var15 = 'contain';
            case 85:
                var14 = var0.resizeMode;
                if (!(var14 === var3)) {
                    _fun70730_ip = 98;
                    continue _fun70730
                }
            case 94:
                var14 = 'contain';
            case 98:
                var8 = var0.disableFocus;
                var5 = var0.controls;
                var7 = var0.ariaHidden;
                var6 = var0.mixWithOthers;
                var21 = var0.importantForAccessibility;
                var17 = var0.pauseWhileAppInactive;
                if (!(var17 === var3)) {
                    _fun70730_ip = 140;
                    continue _fun70730
                }
            case 138:
                var17 = true;
            case 140:
                var _closure2_slot0 = var17;
                var13 = var0.playInBackground;
                if (!(var13 === var3)) {
                    _fun70730_ip = 156;
                    continue _fun70730
                }
            case 154:
                var13 = false;
            case 156:
                var4 = var0.preventsDisplaySleepDuringVideoPlayback;
                if (!(var4 === var3)) {
                    _fun70730_ip = 168;
                    continue _fun70730
                }
            case 166:
                var4 = true;
            case 168:
                var _closure2_slot1 = var3;
                var18 = _closure1_slot0;
                var24 = _closure1_slot1;
                var2 = 11;
                var2 = var24[var2];
                var2 = var18.bind(var3)(var2);
                var2 = var2.default;
                var26 = _closure1_slot8;
                var24 = var26.useState;
                var18 = _closure1_slot12;
                var25 = var18.currentState;
                var18 = 'active';
                var18 = var18 === var25;
                var25 = var24.bind(var26)(var18);
                var24 = _closure1_slot7;
                var18 = 2;
                var25 = var24.bind(var3)(var25, var18);
                var18 = 0;
                var18 = var25[var18];
                var24 = 1;
                var24 = var25[var24];
                _closure2_slot1 = var24;
                var25 = var26.useEffect;
                var24 = new Array(1);
                var24[0] = var17;
                var1 = function() { // Environment: var1
                    _fun70731: for (var _fun70731_ip = 0;;) switch (_fun70731_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            if (var1) {
                                _fun70731_ip = 16;
                                continue _fun70731
                            }
                        case 12:
                            var1 = undefined;
                            return var1;
                        case 16:
                            var4 = _closure1_slot12;
                            var3 = var4.addEventListener;
                            var2 = 'change';
                            var1 = function(arg0) { // Environment: var0
                                var2 = _closure2_slot1;
                                var0 = undefined;
                                var3 = 'active';
                                var1 = arg0;
                                var1 = var3 === var1;
                                var1 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var1 = var3.bind(var4)(var2, var1);
                            var _closure3_slot0 = var1;
                            var0 = function() { // Environment: var0
                                var1 = _closure3_slot0;
                                var0 = var1.remove;
                                var0 = var0.bind(var1)();
                                var0 = undefined;
                                return var0;
                            };
                            return var0;
                    }
                };
                var1 = var25.bind(var26)(var1, var24);
                var1 = _closure1_slot13;
                var0 = {};
                var0.style = var23;
                var0.source = var22;
                var0.importantForAccessibility = var21;
                var0.poster = var20;
                var0.muted = var19;
                if (var16) {
                    _fun70730_ip = 329;
                    continue _fun70730
                }
            case 320:
                if (!var17) {
                    _fun70730_ip = 326;
                    continue _fun70730
                }
            case 323:
                var17 = !var18;
            case 326:
                var16 = var17;
            case 329:
                var0.paused = var16;
                var0.posterResizeMode = var15;
                var0.resizeMode = var14;
                var14 = true;
                var0.repeat = var14;
                var0.playInBackground = var13;
                var13 = false;
                var0.pictureInPicture = var13;
                var0.playWhenInactive = var13;
                var0.onLoadStart = var12;
                var0.onLoad = var11;
                var0.onError = var10;
                var0.onEnd = var9;
                var0.disableFocus = var8;
                var0['aria-hidden'] = var7;
                var0.mixWithOthers = var6;
                var0.preventsDisplaySleepDuringVideoPlayback = var4;
                var4 = null;
                var7 = var4 == var5;
                var6 = undefined;
                if (var7) {
                    _fun70730_ip = 437;
                    continue _fun70730
                }
            case 418:
                var7 = var5.props;
                var8 = var4 == var7;
                var6 = undefined;
                if (var8) {
                    _fun70730_ip = 437;
                    continue _fun70730
                }
            case 432:
                var6 = var7.ref;
            case 437:
                var0.ref = var6;
                var6 = var4 == var5;
                var4 = undefined;
                if (var6) {
                    _fun70730_ip = 455;
                    continue _fun70730
                }
            case 450:
                var4 = var5.props;
            case 455:
                var29 = var0;
                var28 = var4;
                var4 = copyDataProperties(var29, var28);
                var0 = var1.bind(var3)(var2, var0);
                return var0;
        }
    };
    var _closure1_slot15 = var1;
    var8 = var4.PureComponent;
    var4 = function(arg0) { // Environment: var3
        var3 = function arg0() {
            _fun70735: for (var _fun70735_ip = 0;;) switch (_fun70735_ip) {
                case 0:
                    var5 = this;
                    var13 = 0;
                    var0 = copyRestArgs(var13);
                    var7 = _closure1_slot2;
                    var3 = _closure2_slot0;
                    var4 = undefined;
                    var7 = var7.bind(var4)(var5, var3);
                    var10 = new Array(0);
                    var13 = var10;
                    var12 = var0;
                    var11 = 0;
                    var0 = arraySpread(var13, var12, var11);
                    var0 = _closure1_slot5;
                    var9 = var0.bind(var4)(var3);
                    var3 = _closure1_slot4;
                    var0 = _closure1_slot16;
                    var0 = var0.bind(var4)();
                    if (var0) {
                        _fun70735_ip = 86;
                        continue _fun70735
                    }
                case 73:
                    var0 = var9.apply;
                    var0 = var0.bind(var9)(var5, var10);
                    _fun70735_ip = 120;
                    continue _fun70735;
                case 86:
                    var6 = global;
                    var8 = var6.Reflect;
                    var7 = var8.construct;
                    var6 = _closure1_slot5;
                    var6 = var6.bind(var4)(var5);
                    var6 = var6.constructor;
                    var0 = var7.bind(var8)(var9, var10, var6);
                case 120:
                    var0 = var3.bind(var4)(var5, var0);
                    var _closure3_slot0 = var0;
                    var3 = {};
                    var4 = true;
                    var3.postponeRender = var4;
                    var0.state = var3;
                    var3 = _closure1_slot8;
                    var2 = var3.createRef;
                    var2 = var2.bind(var3)();
                    var0.ref = var2;
                    var2 = function() { // Environment: var1
                        _fun70736: for (var _fun70736_ip = 0;;) switch (_fun70736_ip) {
                            case 0:
                                var0 = _closure3_slot0;
                                var0 = var0.props;
                                var1 = var0.src;
                                var2 = null;
                                var0 = var2 != var1;
                                if (!var0) {
                                    _fun70736_ip = 35;
                                    continue _fun70736
                                }
                            case 27:
                                var3 = 'videoURI';
                                var0 = var3 in var1;
                            case 35:
                                if (!var0) {
                                    _fun70736_ip = 48;
                                    continue _fun70736
                                }
                            case 38:
                                var1 = var1.videoURI;
                                var0 = var2 != var1;
                            case 48:
                                return var0;
                        }
                    };
                    var0.isVideo = var2;
                    var1 = function() { // Environment: var1
                        _fun70737: for (var _fun70737_ip = 0;;) switch (_fun70737_ip) {
                            case 0:
                                var0 = _closure3_slot0;
                                var0 = var0.props;
                                var4 = var0.src;
                                var3 = var0.onPress;
                                var7 = var0.width;
                                var6 = var0.height;
                                var0 = null;
                                if (!(var0 != var3)) {
                                    _fun70737_ip = 45;
                                    continue _fun70737
                                }
                            case 39:
                                var2 = undefined;
                                var2 = var3.bind(var2)();
                            case 45:
                                var1 = _closure3_slot0;
                                var1 = var1.ref;
                                var3 = var1.current;
                                if (!(var0 != var3)) {
                                    _fun70737_ip = 149;
                                    continue _fun70737
                                }
                            case 63:
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot1;
                                var0 = 12;
                                var1 = var1[var0];
                                var0 = undefined;
                                var2 = var2.bind(var0)(var1);
                                var1 = var2.openMediaModal;
                                var0 = {};
                                var5 = {};
                                var9 = var5;
                                var8 = var4;
                                var4 = copyDataProperties(var9, var8);
                                var4 = 'width';
                                var5[var4] = var7;
                                var4 = 'height';
                                var5[var4] = var6;
                                var4 = new Array(1);
                                var4[0] = var5;
                                var0.initialSources = var4;
                                var0.originViewOrOriginLayout = var3;
                                var0 = var1.bind(var2)(var0);
                            case 149:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.handleOpenFullScreen = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot6;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot3;
        var4 = {};
        var0 = 'componentDidMount';
        var4.key = var0;
        var0 = function() {
            var2 = this;
            var _closure3_slot0 = var2;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var0 = 13;
            var3 = var3[var0];
            var0 = undefined;
            var4 = var4.bind(var0)(var3);
            var3 = var4.runAfterInteractions;
            var1 = function() { // Environment: var1
                var2 = _closure3_slot0;
                var1 = var2.setState;
                var0 = {};
                var3 = false;
                var0.postponeRender = var3;
                var0 = var1.bind(var2)(var0);
                var0 = undefined;
                return var0;
            };
            var1 = var3.bind(var4)(var1);
            var2._renderTask = var1;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(5);
        var0[0] = var4;
        var4 = {};
        var6 = 'componentWillUnmount';
        var4.key = var6;
        var6 = function() {
            _fun70740: for (var _fun70740_ip = 0;;) switch (_fun70740_ip) {
                case 0:
                    var0 = this;
                    var2 = var0._renderTask;
                    var1 = null;
                    if (!(var1 != var2)) {
                        _fun70740_ip = 31;
                        continue _fun70740
                    }
                case 15:
                    var1 = var0._renderTask;
                    var0 = var1.cancel;
                    var0 = var0.bind(var1)();
                case 31:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'renderVideo';
        var4.key = var6;
        var6 = function() {
            _fun70741: for (var _fun70741_ip = 0;;) switch (_fun70741_ip) {
                case 0:
                    var0 = this;
                    var3 = _closure1_slot14;
                    var2 = var0.context;
                    var4 = undefined;
                    var11 = var3.bind(var4)(var2);
                    var2 = var0.props;
                    var0 = var2.src;
                    var10 = var2.poster;
                    var16 = var2.width;
                    var15 = var2.height;
                    var9 = var2.muted;
                    var8 = var2.paused;
                    var7 = var2.resizeMode;
                    var13 = var2.videoStyle;
                    var6 = var2.ariaHidden;
                    var5 = var2.disableFocus;
                    var2 = 'videoURI';
                    var2 = var2 in var0;
                    if (!var2) {
                        _fun70741_ip = 227;
                        continue _fun70741
                    }
                case 98:
                    var3 = var0.videoURI;
                    var2 = '';
                    if (!(var2 !== var3)) {
                        _fun70741_ip = 227;
                        continue _fun70741
                    }
                case 112:
                    var12 = var0.videoURI;
                    var0 = null;
                    var2 = var0 != var12;
                    var0 = undefined;
                    if (!var2) {
                        _fun70741_ip = 225;
                        continue _fun70741
                    }
                case 129:
                    var3 = _closure1_slot13;
                    var2 = _closure1_slot15;
                    var1 = {};
                    var14 = var11.video;
                    var11 = new Array(3);
                    var11[0] = var14;
                    var14 = {};
                    var14.width = var16;
                    var14.height = var15;
                    var11[1] = var14;
                    var11[2] = var13;
                    var1.style = var11;
                    var11 = {};
                    var11.uri = var12;
                    var1.source = var11;
                    var1.poster = var10;
                    var1.muted = var9;
                    var1.paused = var8;
                    var1.resizeMode = var7;
                    var1.posterResizeMode = var7;
                    var1.ariaHidden = var6;
                    var1.disableFocus = var5;
                    var0 = var3.bind(var4)(var2, var1);
                case 225:
                    return var0;
                case 227:
                    var0 = null;
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'renderImage';
        var4.key = var6;
        var6 = function() {
            _fun70742: for (var _fun70742_ip = 0;;) switch (_fun70742_ip) {
                case 0:
                    var0 = this;
                    var0 = var0.props;
                    var7 = var0.src;
                    var6 = var0.width;
                    var5 = var0.height;
                    var0 = var0.ariaHidden;
                    var1 = 'uri';
                    var1 = var1 in var7;
                    if (!var1) {
                        _fun70742_ip = 54;
                        continue _fun70742
                    }
                case 41:
                    var2 = var7.uri;
                    var1 = '';
                    if (!(var1 === var2)) {
                        _fun70742_ip = 58;
                        continue _fun70742
                    }
                case 54:
                    var1 = undefined;
                    return var1;
                case 58:
                    var3 = _closure1_slot13;
                    var2 = _closure1_slot11;
                    var1 = {};
                    var4 = {};
                    var7 = var7.uri;
                    var4.uri = var7;
                    var1.source = var4;
                    var4 = {};
                    var4.width = var6;
                    var4.height = var5;
                    var1.style = var4;
                    var1['aria-hidden'] = var0;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2, var1);
                    return var0;
            }
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'render';
        var4.key = var6;
        var5 = function() {
            _fun70743: for (var _fun70743_ip = 0;;) switch (_fun70743_ip) {
                case 0:
                    var6 = this;
                    var1 = _closure1_slot14;
                    var0 = var6.context;
                    var4 = undefined;
                    var5 = var1.bind(var4)(var0);
                    var0 = var6.props;
                    var8 = var0.style;
                    var12 = var0.width;
                    var11 = var0.height;
                    var1 = var0.canOpenFullscreen;
                    var9 = var0.postponeRender;
                    var3 = _closure1_slot13;
                    var2 = _closure1_slot10;
                    var0 = {};
                    var10 = var6.ref;
                    var0.ref = var10;
                    var10 = var5.container;
                    var5 = new Array(3);
                    var5[0] = var10;
                    var10 = {};
                    var10.width = var12;
                    var10.height = var11;
                    var5[1] = var10;
                    var5[2] = var8;
                    var0.style = var5;
                    var5 = var6.state;
                    var5 = var5.postponeRender;
                    if (!var5) {
                        _fun70743_ip = 130;
                        continue _fun70743
                    }
                case 122:
                    var8 = false;
                    var5 = null;
                    if (!(var8 === var9)) {
                        _fun70743_ip = 168;
                        continue _fun70743
                    }
                case 130:
                    var8 = var6.isVideo;
                    var8 = var8.bind(var6)();
                    if (var8) {
                        _fun70743_ip = 155;
                        continue _fun70743
                    }
                case 143:
                    var8 = var6.renderImage;
                    var8 = var8.bind(var6)();
                    _fun70743_ip = 165;
                    continue _fun70743;
                case 155:
                    var9 = var6.renderVideo;
                    var8 = var9.bind(var6)();
                case 165:
                    var5 = var8;
                case 168:
                    var0.children = var5;
                    var5 = var3.bind(var4)(var2, var0);
                    var0 = var5;
                    if (!var1) {
                        _fun70743_ip = 283;
                        continue _fun70743
                    }
                case 184:
                    var3 = _closure1_slot13;
                    var2 = _closure1_slot9;
                    var1 = {};
                    var8 = 'button';
                    var1.accessibilityRole = var8;
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot1;
                    var7 = 14;
                    var8 = var11[var7];
                    var8 = var10.bind(var4)(var8);
                    var9 = var8.intl;
                    var8 = var9.string;
                    var7 = var11[var7];
                    var7 = var10.bind(var4)(var7);
                    var7 = var7.t;
                    var7 = var7.OIDkcp;
                    var7 = var8.bind(var9)(var7);
                    var1.accessibilityLabel = var7;
                    var6 = var6.handleOpenFullScreen;
                    var1.onPress = var6;
                    var1.children = var5;
                    var0 = var3.bind(var4)(var2, var1);
                case 283:
                    return var0;
            }
        };
        var4.value = var5;
        var0[4] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var4 = var4.bind(var0)(var8);
    var8 = 15;
    var8 = var7[var8];
    var8 = var6.bind(var0)(var8);
    var8 = var8.ThemeContext;
    var4.contextType = var8;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'components_native/common/Video.tsx';
    var5 = var6.bind(var7)(var5);
    var2.default = var4;
    var3 = function arg0() {
        var0 = arg0;
        var _closure2_slot0 = var0;
        var1 = _closure1_slot8;
        var0 = var1.createRef;
        var3 = var0.bind(var1)();
        var _closure2_slot4 = var3;
        var0 = 0;
        var _closure2_slot5 = var0;
        var _closure2_slot6 = var0;
        var _closure2_slot7 = var0;
        var0 = false;
        var _closure2_slot8 = var0;
        var0 = {};
        var1 = function arg0() {
            _fun70745: for (var _fun70745_ip = 0;;) switch (_fun70745_ip) {
                case 0:
                    var0 = _closure2_slot4;
                    var2 = var0.current;
                    var3 = null;
                    var0 = var3 == var2;
                    if (var0) {
                        _fun70745_ip = 31;
                        continue _fun70745
                    }
                case 21:
                    var1 = var2.seek;
                    var0 = var3 == var1;
                case 31:
                    if (var0) {
                        _fun70745_ip = 48;
                        continue _fun70745
                    }
                case 34:
                    var1 = var2.seek;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                case 48:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.seek = var1;
        var1 = function arg0() {
            _fun70746: for (var _fun70746_ip = 0;;) switch (_fun70746_ip) {
                case 0:
                    var2 = arg0;
                    var3 = _closure2_slot0;
                    var0 = undefined;
                    var3 = var3.bind(var0)(var2);
                    var3 = _closure2_slot8;
                    if (!(var3 !== var2)) {
                        _fun70746_ip = 52;
                        continue _fun70746
                    }
                case 25:
                    _closure2_slot8 = var2;
                    var3 = _closure2_slot2;
                    var2 = null;
                    if (!(var2 != var3)) {
                        _fun70746_ip = 52;
                        continue _fun70746
                    }
                case 39:
                    var2 = _closure2_slot2;
                    var1 = _closure2_slot8;
                    var1 = var2.bind(var0)(var1);
                case 52:
                    return var0;
            }
        };
        var0.pause = var1;
        var1 = function arg0, arg1, arg2() {
            var0 = arg0;
            var _closure2_slot1 = var0;
            var0 = arg1;
            var _closure2_slot2 = var0;
            var0 = arg2;
            var _closure2_slot3 = var0;
            var3 = _closure1_slot8;
            var2 = var3.useLayoutEffect;
            var1 = function() { // Environment: var0
                _fun70748: for (var _fun70748_ip = 0;;) switch (_fun70748_ip) {
                    case 0:
                        var1 = _closure2_slot1;
                        var2 = null;
                        if (!(var2 != var1)) {
                            _fun70748_ip = 33;
                            continue _fun70748
                        }
                    case 13:
                        var5 = _closure2_slot1;
                        var4 = _closure2_slot5;
                        var3 = _closure2_slot6;
                        var1 = undefined;
                        var1 = var5.bind(var1)(var4, var3);
                    case 33:
                        var1 = _closure2_slot2;
                        if (!(var2 != var1)) {
                            _fun70748_ip = 56;
                            continue _fun70748
                        }
                    case 41:
                        var4 = _closure2_slot2;
                        var3 = _closure2_slot8;
                        var1 = undefined;
                        var1 = var4.bind(var1)(var3);
                    case 56:
                        var1 = _closure2_slot3;
                        if (!(var2 != var1)) {
                            _fun70748_ip = 79;
                            continue _fun70748
                        }
                    case 64:
                        var2 = _closure2_slot3;
                        var1 = _closure2_slot7;
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                    case 79:
                        var0 = undefined;
                        return var0;
                }
            };
            var0 = new Array(0);
            var0 = var2.bind(var3)(var1, var0);
            var0 = undefined;
            return var0;
        };
        var0.useSubscribe = var1;
        var1 = {};
        var1.ref = var3;
        var3 = function arg0() {
            _fun70749: for (var _fun70749_ip = 0;;) switch (_fun70749_ip) {
                case 0:
                    var0 = arg0;
                    var1 = var0.playbackRate;
                    var0 = 0;
                    var1 = var0 === var1;
                    var2 = _closure2_slot8;
                    if (!(var2 !== var1)) {
                        _fun70749_ip = 55;
                        continue _fun70749
                    }
                case 26:
                    _closure2_slot8 = var1;
                    var2 = _closure2_slot2;
                    var1 = null;
                    if (!(var1 != var2)) {
                        _fun70749_ip = 55;
                        continue _fun70749
                    }
                case 40:
                    var2 = _closure2_slot2;
                    var1 = _closure2_slot8;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                case 55:
                    var0 = undefined;
                    return var0;
            }
        };
        var1.onPlaybackRateChange = var3;
        var3 = function arg0() {
            _fun70750: for (var _fun70750_ip = 0;;) switch (_fun70750_ip) {
                case 0:
                    var1 = arg0;
                    var2 = var1.currentTime;
                    _closure2_slot5 = var2;
                    var1 = var1.seekableDuration;
                    _closure2_slot6 = var1;
                    var2 = _closure2_slot1;
                    var1 = null;
                    if (!(var1 != var2)) {
                        _fun70750_ip = 56;
                        continue _fun70750
                    }
                case 36:
                    var3 = _closure2_slot1;
                    var2 = _closure2_slot5;
                    var1 = _closure2_slot6;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2, var1);
                case 56:
                    var0 = undefined;
                    return var0;
            }
        };
        var1.onProgress = var3;
        var2 = function arg0() {
            _fun70751: for (var _fun70751_ip = 0;;) switch (_fun70751_ip) {
                case 0:
                    var0 = arg0;
                    var1 = var0.progressPercent;
                    _closure2_slot7 = var1;
                    var2 = _closure2_slot3;
                    var1 = null;
                    if (!(var1 != var2)) {
                        _fun70751_ip = 41;
                        continue _fun70751
                    }
                case 26:
                    var2 = _closure2_slot3;
                    var1 = _closure2_slot7;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                case 41:
                    var0 = undefined;
                    return var0;
            }
        };
        var1.onDownloadProgress = var2;
        var0.props = var1;
        return var0;
    };
    var2.createVideoControls = var3;
    var2.VideoComponent = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 57, 31, 27, 33, 1297, 671, 7727, 8888, 5912, 1235, 3166, 2]);