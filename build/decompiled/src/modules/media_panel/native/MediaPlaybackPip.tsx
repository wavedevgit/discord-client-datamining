// modules/media_panel/native/MediaPlaybackPip.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var13 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var13;
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var13.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.Easing;
    var _closure1_slot5 = var6;
    var10 = var3.StyleSheet;
    var6 = var3.TouchableOpacity;
    var _closure1_slot6 = var6;
    var3 = var3.View;
    var _closure1_slot7 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var13.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var13.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var14 = 5;
    var3 = var5[var14];
    var3 = var13.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var13.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.AnalyticEvents;
    var _closure1_slot12 = var6;
    var6 = var3.MessageFlags;
    var _closure1_slot13 = var6;
    var3 = var3.Routes;
    var _closure1_slot14 = var3;
    var9 = 8;
    var3 = var5[var9];
    var3 = var4.bind(var0)(var3);
    var12 = var3.SquarePIPReferenceDimensions;
    var3 = 9;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot15 = var6;
    var3 = var3.jsxs;
    var _closure1_slot16 = var3;
    var3 = 10;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var6 = {};
    var3 = {
        'justifyContent': 'center',
        'alignItems': 'center'
    };
    var11 = 'center';
    var15 = var12.height;
    var3.height = var15;
    var12 = var12.width;
    var3.width = var12;
    var6.container = var3;
    var3 = {};
    var17 = var10.absoluteFillObject;
    var18 = var3;
    var12 = copyDataProperties(var18, var17);
    var12 = 'zIndex';
    var3[var12] = var14;
    var6.pipControls = var3;
    var3 = {
        'position': 'absolute',
        'top': 8,
        'padding': 8,
        'borderRadius': null,
        'borderWidth': 1
    };
    var12 = 11;
    var14 = var5[var12];
    var14 = var13.bind(var0)(var14);
    var14 = var14.radii;
    var14 = var14.round;
    var3.borderRadius = var14;
    var14 = var5[var12];
    var14 = var13.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.CONTROL_SECONDARY_BORDER_DEFAULT;
    var3.borderColor = var14;
    var14 = var5[var12];
    var14 = var13.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.CONTROL_SECONDARY_TEXT_DEFAULT;
    var3.tintColor = var14;
    var14 = var5[var12];
    var14 = var13.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.CONTROL_SECONDARY_BACKGROUND_DEFAULT;
    var3.backgroundColor = var14;
    var14 = var5[var12];
    var14 = var13.bind(var0)(var14);
    var14 = var14.shadows;
    var17 = var14.SHADOW_LOW_HOVER;
    var18 = var3;
    var14 = copyDataProperties(var18, var17);
    var6.pipButton = var3;
    var3 = {};
    var3.right = var9;
    var6.dismissButton = var3;
    var3 = {};
    var3.left = var9;
    var6.backButton = var3;
    var3 = 34;
    var9 = {
        'justifyContent': 'center',
        'alignItems': 'center',
        'marginBottom': 8,
        'height': 34
    };
    var6.infoContainer = var9;
    var9 = {};
    var17 = var10.absoluteFillObject;
    var18 = var9;
    var14 = copyDataProperties(var18, var17);
    var6.infoContainerGradient = var9;
    var9 = {
        'justifyContent': 'center',
        'alignItems': 'center',
        'alignSelf': 'stretch',
        'marginHorizontal': 4
    };
    var6.infoContent = var9;
    var9 = {
        'justifyContent': 'center',
        'alignItems': 'center',
        'width': 48,
        'height': 48,
        'zIndex': 100
    };
    var6.actionContainer = var9;
    var9 = {
        'justifyContent': 'center',
        'alignItems': 'center',
        'width': 32,
        'height': 32,
        'zIndex': 100
    };
    var14 = var5[var12];
    var14 = var13.bind(var0)(var14);
    var14 = var14.radii;
    var14 = var14.round;
    var9.borderRadius = var14;
    var12 = var5[var12];
    var12 = var13.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_BRAND;
    var9.backgroundColor = var12;
    var6.playPauseButton = var9;
    var9 = {};
    var17 = var10.absoluteFillObject;
    var18 = var9;
    var10 = copyDataProperties(var18, var17);
    var10 = 'justifyContent';
    var9[var10] = var11;
    var10 = 'alignItems';
    var9[var10] = var11;
    var6.progressBar = var9;
    var6 = var7.bind(var8)(var6);
    var _closure1_slot17 = var6;
    var6 = function arg0() {
        _fun111805: for (var _fun111805_ip = 0;;) switch (_fun111805_ip) {
            case 0:
                var2 = arg0;
                var0 = null;
                var1 = var0 != var2;
                var0 = undefined;
                if (!var1) {
                    _fun111805_ip = 24;
                    continue _fun111805
                }
            case 14:
                var1 = 1000;
                var0 = var2 / var1;
            case 24:
                return var0;
        }
    };
    var _closure1_slot18 = var6;
    var6 = function arg0() {
        _fun111806: for (var _fun111806_ip = 0;;) switch (_fun111806_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.message;
                var _closure2_slot0 = var1;
                var2 = var0.activeMediaPlayerSource;
                var6 = var0.isVoiceMessage;
                var0 = _closure1_slot17;
                var4 = undefined;
                var18 = var0.bind(var4)();
                var3 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 12;
                var0 = var7[var0];
                var10 = var3.bind(var4)(var0);
                var8 = var10.useToken;
                var11 = _closure1_slot1;
                var0 = 11;
                var0 = var7[var0];
                var0 = var11.bind(var4)(var0);
                var0 = var0.colors;
                var0 = var0.BACKGROUND_SURFACE_HIGH;
                var20 = var8.bind(var10)(var0);
                var0 = 13;
                var0 = var7[var0];
                var10 = var3.bind(var4)(var0);
                var8 = var10.useStateFromStores;
                var0 = _closure1_slot8;
                var7 = new Array(3);
                var7[0] = var0;
                var0 = _closure1_slot11;
                var7[1] = var0;
                var0 = _closure1_slot10;
                var7[2] = var0;
                var3 = new Array(1);
                var3[0] = var1;
                var0 = function() { // Environment: var5
                    _fun111807: for (var _fun111807_ip = 0;;) switch (_fun111807_ip) {
                        case 0:
                            var5 = _closure1_slot8;
                            var3 = var5.getChannel;
                            var2 = _closure2_slot0;
                            var0 = null;
                            var7 = var0 == var2;
                            var4 = undefined;
                            var2 = undefined;
                            if (var7) {
                                _fun111807_ip = 41;
                                continue _fun111807
                            }
                        case 32:
                            var6 = _closure2_slot0;
                            var2 = var6.channel_id;
                        case 41:
                            var6 = var3.bind(var5)(var2);
                            var2 = var0 != var6;
                            var0 = null;
                            if (!var2) {
                                _fun111807_ip = 103;
                                continue _fun111807
                            }
                        case 55:
                            var3 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var2 = 14;
                            var2 = var5[var2];
                            var5 = var3.bind(var4)(var2);
                            var4 = var5.computeChannelName;
                            var11 = _closure1_slot11;
                            var10 = _closure1_slot10;
                            var13 = var5;
                            var12 = var6;
                            var9 = true;
                            var8 = true;
                            var0 = var13[var4](var12, var11, var10, var9, var8, var7);
                        case 103:
                            return var0;
                    }
                };
                var12 = var8.bind(var10)(var7, var0, var3);
                var10 = _closure1_slot4;
                var0 = var10.useState;
                var8 = 0;
                var0 = var0.bind(var10)(var8);
                var11 = _closure1_slot3;
                var7 = 2;
                var3 = var11.bind(var4)(var0, var7);
                var0 = var3[var8];
                var _closure2_slot1 = var0;
                var15 = 1;
                var3 = var3[var15];
                var _closure2_slot2 = var3;
                var3 = var10.useState;
                var3 = var3.bind(var10)(var8);
                var3 = var11.bind(var4)(var3, var7);
                var11 = var3[var8];
                var _closure2_slot3 = var11;
                var3 = var3[var15];
                var _closure2_slot4 = var3;
                var7 = var10.useMemo;
                var3 = new Array(2);
                var3[0] = var11;
                var3[1] = var0;
                var0 = function() { // Environment: var5
                    var1 = _closure2_slot3;
                    var0 = _closure2_slot1;
                    var0 = var1 >= var0;
                    return var0;
                };
                var7 = var7.bind(var10)(var0, var3);
                var0 = null;
                var10 = var0 == var1;
                var3 = undefined;
                if (var10) {
                    _fun111806_ip = 295;
                    continue _fun111806
                }
            case 285:
                var10 = var1.getContentMessage;
                var3 = var10.bind(var1)();
            case 295:
                if (!(var0 != var1)) {
                    _fun111806_ip = 852;
                    continue _fun111806
                }
            case 302:
                if (!(var0 != var3)) {
                    _fun111806_ip = 852;
                    continue _fun111806
                }
            case 309:
                if (!(var0 != var2)) {
                    _fun111806_ip = 852;
                    continue _fun111806
                }
            case 316:
                if (var6) {
                    _fun111806_ip = 403;
                    continue _fun111806
                }
            case 319:
                var6 = var3.attachments;
                var6 = var6.length;
                var8 = var6 > var8;
                var10 = '';
                var6 = var10;
                if (!var8) {
                    _fun111806_ip = 414;
                    continue _fun111806
                }
            case 344:
                var8 = var2.attachmentIndex;
                var8 = var0 != var8;
                var6 = var10;
                if (!var8) {
                    _fun111806_ip = 414;
                    continue _fun111806
                }
            case 360:
                var3 = var3.attachments;
                var2 = var2.attachmentIndex;
                var3 = var3[var2];
                var8 = _closure1_slot1;
                var10 = _closure1_slot2;
                var2 = 15;
                var2 = var10[var2];
                var2 = var8.bind(var4)(var2);
                var6 = var2.bind(var4)(var3);
                _fun111806_ip = 414;
                continue _fun111806;
            case 403:
                var1 = var1.author;
                var6 = var1.username;
            case 414:
                var3 = _closure1_slot15;
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var13 = 16;
                var1 = var1[var13];
                var1 = var2.bind(var4)(var1);
                var2 = var1.Text;
                var1 = {
                    'variant': 'text-md/semibold',
                    'lineClamp': 1,
                    'ellipsizeMode': 'clip'
                };
                var8 = function arg0() {
                    var2 = _closure2_slot4;
                    var0 = arg0;
                    var0 = var0.nativeEvent;
                    var0 = var0.layout;
                    var1 = var0.width;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var1.onLayout = var8;
                var1.children = var6;
                var16 = var3.bind(var4)(var2, var1);
                var2 = _closure1_slot7;
                var1 = {};
                var6 = var18.infoContent;
                var1.style = var6;
                var5 = function arg0() {
                    var2 = _closure2_slot2;
                    var0 = arg0;
                    var0 = var0.nativeEvent;
                    var0 = var0.layout;
                    var1 = var0.width;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var1.onLayout = var5;
                var6 = _closure1_slot16;
                var5 = {};
                var8 = var18.infoContainer;
                var5.style = var8;
                var8 = var16;
                if (!var7) {
                    _fun111806_ip = 761;
                    continue _fun111806
                }
            case 532:
                var11 = _closure1_slot16;
                var10 = _closure1_slot7;
                var7 = {};
                var14 = {};
                var14.flex = var15;
                var7.style = var14;
                var17 = _closure1_slot15;
                var15 = _closure1_slot0;
                var19 = _closure1_slot2;
                var14 = 17;
                var14 = var19[var14];
                var14 = var15.bind(var4)(var14);
                var15 = var14.Marquee;
                var14 = {
                    'spacing': 20,
                    'speed': 0.2
                };
                var14.children = var16;
                var15 = var17.bind(var4)(var15, var14);
                var14 = new Array(2);
                var14[0] = var15;
                var16 = _closure1_slot1;
                var15 = 18;
                var15 = var19[var15];
                var16 = var16.bind(var4)(var15);
                var15 = {};
                var19 = {
                    'x': 0,
                    'y': 0
                };
                var15.start = var19;
                var19 = {
                    'x': 1,
                    'y': 0
                };
                var15.end = var19;
                var19 = [0, 0.1, 0.2, 0.8, 0.9, 1];
                var15.locations = var19;
                var19 = new Array(6);
                var19[0] = var20;
                var21 = 'CC';
                var22 = var20 + var21;
                var19[1] = var22;
                var22 = '00';
                var23 = var20 + var22;
                var19[2] = var23;
                var22 = var20 + var22;
                var19[3] = var22;
                var21 = var20 + var21;
                var19[4] = var21;
                var19[5] = var20;
                var15.colors = var19;
                var18 = var18.infoContainerGradient;
                var15.style = var18;
                var15 = var17.bind(var4)(var16, var15);
                var14[1] = var15;
                var7.children = var14;
                var8 = var11.bind(var4)(var10, var7);
            case 761:
                var7 = new Array(2);
                var7[0] = var8;
                var8 = var0 != var12;
                if (!var8) {
                    _fun111806_ip = 826;
                    continue _fun111806
                }
            case 776:
                var11 = _closure1_slot15;
                var10 = _closure1_slot0;
                var9 = _closure1_slot2;
                var9 = var9[var13];
                var9 = var10.bind(var4)(var9);
                var10 = var9.Text;
                var9 = {
                    'variant': 'text-xs/medium',
                    'color': 'text-subtle',
                    'lineClamp': 1
                };
                var9.children = var12;
                var8 = var11.bind(var4)(var10, var9);
            case 826:
                var7[1] = var8;
                var5.children = var7;
                var5 = var6.bind(var4)(var2, var5);
                var1.children = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 852:
                return var0;
        }
    };
    var _closure1_slot19 = var6;
    var6 = {};
    var7 = 'function MediaPlaybackPipTsx1(){const{withTiming,visible}=this.__closure;return{opacity:withTiming(visible?1:0,{duration:200})};}';
    var6.code = var7;
    var _closure1_slot20 = var6;
    var6 = function arg0() {
        _fun111811: for (var _fun111811_ip = 0;;) switch (_fun111811_ip) {
            case 0:
                var2 = arg0;
                var0 = var2.message;
                var _closure2_slot0 = var0;
                var14 = var2.handleClosePip;
                var15 = var2.visible;
                var _closure2_slot1 = var15;
                var7 = var2.isVoiceMessage;
                var2 = _closure1_slot17;
                var3 = undefined;
                var16 = var2.bind(var3)();
                var6 = _closure1_slot4;
                var4 = var6.useCallback;
                var2 = new Array(1);
                var2[0] = var0;
                var0 = function() { // Environment: var1
                    _fun111812: for (var _fun111812_ip = 0;;) switch (_fun111812_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            var2 = null;
                            if (!(var2 != var1)) {
                                _fun111812_ip = 217;
                                continue _fun111812
                            }
                        case 16:
                            var1 = _closure2_slot0;
                            var1 = var1.channel_id;
                            if (!(var2 != var1)) {
                                _fun111812_ip = 217;
                                continue _fun111812
                            }
                        case 32:
                            var1 = _closure2_slot0;
                            var1 = var1.id;
                            if (!(var2 != var1)) {
                                _fun111812_ip = 217;
                                continue _fun111812
                            }
                        case 48:
                            var5 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var3 = 19;
                            var4 = var4[var3];
                            var3 = undefined;
                            var10 = var5.bind(var3)(var4);
                            var9 = var10.trackJump;
                            var4 = _closure2_slot0;
                            var14 = var4.channel_id;
                            var13 = var4.id;
                            var12 = 'Media PIP';
                            var11 = {};
                            var15 = var10;
                            var5 = var15[var9](var14, var13, var12, var11, var10);
                            var6 = _closure1_slot8;
                            var5 = var6.getChannel;
                            var4 = var4.channel_id;
                            var4 = var5.bind(var6)(var4);
                            var2 = var2 == var4;
                            var6 = undefined;
                            if (var2) {
                                _fun111812_ip = 146;
                                continue _fun111812
                            }
                        case 136:
                            var2 = var4.getGuildId;
                            var6 = var2.bind(var4)();
                        case 146:
                            var4 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var2 = 20;
                            var2 = var5[var2];
                            var2 = var4.bind(var3)(var2);
                            var5 = _closure1_slot14;
                            var4 = var5.CHANNEL;
                            var0 = _closure2_slot0;
                            var1 = var0.channel_id;
                            var0 = var0.id;
                            var1 = var4.bind(var5)(var6, var1, var0);
                            var0 = {
                                'navigationReplace': true,
                                'openChannel': true
                            };
                            var0 = var2.bind(var3)(var1, var0);
                        case 217:
                            var0 = undefined;
                            return var0;
                    }
                };
                var12 = var4.bind(var6)(var0, var2);
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var0 = 21;
                var2 = var10[var0];
                var4 = var9.bind(var3)(var2);
                var2 = var4.useAnimatedStyle;
                var1 = function() {
                    _fun111813: for (var _fun111813_ip = 0;;) switch (_fun111813_ip) {
                        case 0:
                            var0 = {};
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 22;
                            var2 = var2[var1];
                            var1 = undefined;
                            var4 = var3.bind(var1)(var2);
                            var3 = var4.withTiming;
                            var1 = _closure2_slot1;
                            var2 = 0;
                            if (!var1) {
                                _fun111813_ip = 47;
                                continue _fun111813
                            }
                        case 44:
                            var2 = 1;
                        case 47:
                            var1 = {};
                            var5 = 200;
                            var1.duration = var5;
                            var1 = var3.bind(var4)(var2, var1);
                            var0.opacity = var1;
                            return var0;
                    }
                };
                var6 = {};
                var8 = 22;
                var8 = var10[var8];
                var8 = var9.bind(var3)(var8);
                var8 = var8.withTiming;
                var6.withTiming = var8;
                var6.visible = var15;
                var1.__closure = var6;
                var6 = 3641278982291.0;
                var1.__workletHash = var6;
                var6 = _closure1_slot20;
                var1.__initData = var6;
                var6 = var2.bind(var4)(var1);
                var8 = _closure1_slot0;
                var1 = _closure1_slot2;
                var9 = 23;
                var2 = var1[var9];
                var2 = var8.bind(var3)(var2);
                var4 = var2.intl;
                var2 = var4.string;
                var1 = var1[var9];
                var1 = var8.bind(var3)(var1);
                var1 = var1.t;
                if (var7) {
                    _fun111811_ip = 237;
                    continue _fun111811
                }
            case 224:
                var8 = var1["13/7kX"];
                var10 = var2.bind(var4)(var8);
                _fun111811_ip = 250;
                continue _fun111811;
            case 237:
                var1 = var1.KTonHP;
                var10 = var2.bind(var4)(var1);
            case 250:
                var8 = _closure1_slot0;
                var1 = _closure1_slot2;
                var2 = var1[var9];
                var2 = var8.bind(var3)(var2);
                var4 = var2.intl;
                var2 = var4.string;
                var1 = var1[var9];
                var1 = var8.bind(var3)(var1);
                var1 = var1.t;
                if (var7) {
                    _fun111811_ip = 307;
                    continue _fun111811
                }
            case 294:
                var7 = var1.WAI6xu;
                var8 = var2.bind(var4)(var7);
                _fun111811_ip = 320;
                continue _fun111811;
            case 307:
                var1 = var1["6rhrVG"];
                var8 = var2.bind(var4)(var1);
            case 320:
                var2 = _closure1_slot16;
                var1 = _closure1_slot1;
                var11 = _closure1_slot2;
                var0 = var11[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.View;
                var0 = {};
                var7 = var16.pipControls;
                var4 = new Array(2);
                var4[0] = var7;
                var4[1] = var6;
                var0.style = var4;
                var7 = _closure1_slot15;
                var9 = _closure1_slot0;
                var4 = 24;
                var4 = var11[var4];
                var4 = var9.bind(var3)(var4);
                var6 = var4.BackgroundBlurFill;
                var4 = {};
                var13 = 0.05;
                var4.blurAmount = var13;
                var6 = var7.bind(var3)(var6, var4);
                var4 = new Array(3);
                var4[0] = var6;
                var6 = _closure1_slot6;
                var5 = {};
                var13 = !var15;
                var5.disabled = var13;
                var17 = var16.pipButton;
                var13 = new Array(2);
                var13[0] = var17;
                var17 = var16.backButton;
                var13[1] = var17;
                var5.style = var13;
                var5.onPress = var12;
                var13 = true;
                var5.accessible = var13;
                var12 = 'button';
                var5.accessibilityRole = var12;
                var5.accessibilityLabel = var10;
                var10 = 25;
                var10 = var11[var10];
                var10 = var9.bind(var3)(var10);
                var18 = var10.ArrowLargeLeftIcon;
                var17 = {};
                var10 = 'sm';
                var17.size = var10;
                var17 = var7.bind(var3)(var18, var17);
                var5.children = var17;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var5 = {};
                var15 = !var15;
                var5.disabled = var15;
                var17 = var16.pipButton;
                var15 = new Array(2);
                var15[0] = var17;
                var16 = var16.dismissButton;
                var15[1] = var16;
                var5.style = var15;
                var5.onPress = var14;
                var5.accessible = var13;
                var5.accessibilityRole = var12;
                var5.accessibilityLabel = var8;
                var8 = 26;
                var8 = var11[var8];
                var8 = var9.bind(var3)(var8);
                var9 = var8.XLargeIcon;
                var8 = {};
                var8.size = var10;
                var8 = var7.bind(var3)(var9, var8);
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot21 = var6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/media_panel/native/MediaPlaybackPip.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        _fun111814: for (var _fun111814_ip = 0;;) switch (_fun111814_ip) {
            case 0:
                var0 = _closure1_slot17;
                var3 = undefined;
                var16 = var0.bind(var3)();
                var1 = _closure1_slot4;
                var0 = var1.useRef;
                var19 = null;
                var17 = var0.bind(var1)(var19);
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 28;
                var0 = var5[var0];
                var2 = var4.bind(var3)(var0);
                var1 = var2.useMediaPlayerManagerStore;
                var0 = 29;
                var0 = var5[var0];
                var9 = var4.bind(var3)(var0);
                var6 = var9.useShallow;
                var0 = function(arg0) { // Environment: var7
                    var1 = arg0;
                    var0 = {};
                    var2 = var1.isPlaying;
                    var0.isPlaying = var2;
                    var2 = var1.progress;
                    var0.progress = var2;
                    var2 = var1.activeMediaPlayerSource;
                    var0.activeMediaPlayerSource = var2;
                    var2 = var1.mediaSourceMessage;
                    var0.mediaSourceMessage = var2;
                    var1 = var1.closePip;
                    var0.closePip = var1;
                    return var0;
                };
                var0 = var6.bind(var9)(var0);
                var0 = var1.bind(var2)(var0);
                var14 = var0.isPlaying;
                var _closure2_slot0 = var14;
                var20 = var0.progress;
                var1 = var0.activeMediaPlayerSource;
                var _closure2_slot1 = var1;
                var21 = var0.mediaSourceMessage;
                var2 = var0.closePip;
                var _closure2_slot2 = var2;
                var0 = 13;
                var0 = var5[var0];
                var9 = var4.bind(var3)(var0);
                var6 = var9.useStateFromStores;
                var0 = _closure1_slot9;
                var5 = new Array(1);
                var5[0] = var0;
                var4 = new Array(1);
                var4[0] = var1;
                var0 = function() { // Environment: var7
                    _fun111816: for (var _fun111816_ip = 0;;) switch (_fun111816_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var2 = null;
                            var1 = var2 == var1;
                            var3 = undefined;
                            if (var1) {
                                _fun111816_ip = 27;
                                continue _fun111816
                            }
                        case 18:
                            var1 = _closure2_slot1;
                            var3 = var1.channelId;
                        case 27:
                            var1 = _closure2_slot1;
                            var1 = var2 == var1;
                            var4 = undefined;
                            if (var1) {
                                _fun111816_ip = 49;
                                continue _fun111816
                            }
                        case 40:
                            var0 = _closure2_slot1;
                            var4 = var0.messageId;
                        case 49:
                            var1 = var2 == var3;
                            var0 = null;
                            if (var1) {
                                _fun111816_ip = 86;
                                continue _fun111816
                            }
                        case 58:
                            var1 = var2 == var4;
                            var0 = null;
                            if (var1) {
                                _fun111816_ip = 86;
                                continue _fun111816
                            }
                        case 67:
                            var2 = _closure1_slot9;
                            var1 = var2.getMessage;
                            var0 = var1.bind(var2)(var3, var4);
                        case 86:
                            return var0;
                    }
                };
                var0 = var6.bind(var9)(var5, var0, var4);
                if (!(var19 != var0)) {
                    _fun111814_ip = 192;
                    continue _fun111814
                }
            case 189:
                var21 = var0;
            case 192:
                var _closure2_slot3 = var21;
                var10 = var19 == var21;
                var5 = undefined;
                if (var10) {
                    _fun111814_ip = 222;
                    continue _fun111814
                }
            case 205:
                var0 = var21.getContentMessage;
                var0 = var0.bind(var21)();
                var10 = var19 == var0;
                var5 = var0;
            case 222:
                if (var10) {
                    _fun111814_ip = 249;
                    continue _fun111814
                }
            case 225:
                var4 = var5.hasFlag;
                var0 = _closure1_slot13;
                var0 = var0.IS_VOICE_MESSAGE;
                var0 = var4.bind(var5)(var0);
                var10 = !var0;
            case 249:
                var0 = !var10;
                var _closure2_slot4 = var0;
                var4 = function arg0, arg1, arg2() {
                    var5 = arg0;
                    var6 = arg1;
                    var1 = arg2;
                    var _closure3_slot0 = var5;
                    var _closure3_slot1 = var6;
                    var _closure3_slot2 = var1;
                    var3 = _closure1_slot4;
                    var4 = var3.useRef;
                    var2 = null;
                    var2 = var4.bind(var3)(var2);
                    var _closure3_slot3 = var2;
                    var4 = var3.useEffect;
                    var2 = new Array(3);
                    var2[0] = var6;
                    var2[1] = var5;
                    var2[2] = var1;
                    var1 = function() { // Environment: var0
                        _fun111818: for (var _fun111818_ip = 0;;) switch (_fun111818_ip) {
                            case 0:
                                var1 = _closure3_slot3;
                                var1 = var1.current;
                                var3 = null;
                                var1 = var3 == var1;
                                if (!var1) {
                                    _fun111818_ip = 29;
                                    continue _fun111818
                                }
                            case 21:
                                var2 = _closure3_slot0;
                                var1 = var3 != var2;
                            case 29:
                                if (!var1) {
                                    _fun111818_ip = 40;
                                    continue _fun111818
                                }
                            case 32:
                                var2 = _closure3_slot1;
                                var1 = var3 != var2;
                            case 40:
                                if (!var1) {
                                    _fun111818_ip = 51;
                                    continue _fun111818
                                }
                            case 43:
                                var2 = _closure3_slot2;
                                var1 = var3 != var2;
                            case 51:
                                if (!var1) {
                                    _fun111818_ip = 92;
                                    continue _fun111818
                                }
                            case 54:
                                var2 = _closure3_slot3;
                                var1 = {};
                                var4 = _closure3_slot1;
                                var1.initialProgress = var4;
                                var4 = _closure3_slot0;
                                var1.activeMediaPlayerSource = var4;
                                var4 = _closure3_slot2;
                                var1.message = var4;
                                var2.current = var1;
                            case 92:
                                var1 = _closure3_slot3;
                                var1 = var1.current;
                                var1 = var3 != var1;
                                if (!var1) {
                                    _fun111818_ip = 116;
                                    continue _fun111818
                                }
                            case 108:
                                var2 = _closure3_slot1;
                                var1 = var3 != var2;
                            case 116:
                                if (!var1) {
                                    _fun111818_ip = 138;
                                    continue _fun111818
                                }
                            case 119:
                                var1 = _closure3_slot3;
                                var1 = var1.current;
                                var0 = _closure3_slot1;
                                var1.finalProgress = var0;
                            case 138:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var1 = var4.bind(var3)(var1, var2);
                    var2 = var3.useEffect;
                    var1 = function() { // Environment: var0
                        var1 = global;
                        var1 = var1.Date;
                        var2 = var1.prototype;
                        var2 = Object.create(var2, {
                            constructor: {
                                value: var1
                            }
                        });
                        var3 = var2;
                        var1 = new var3[var1](var2);
                        var1 = var1 instanceof Object ? var1 : var2;
                        var _closure4_slot0 = var1;
                        var0 = function() { // Environment: var0
                            _fun111820: for (var _fun111820_ip = 0;;) switch (_fun111820_ip) {
                                case 0:
                                    var0 = _closure3_slot3;
                                    var0 = var0.current;
                                    var2 = null;
                                    if (!(var2 == var0)) {
                                        _fun111820_ip = 20;
                                        continue _fun111820
                                    }
                                case 18:
                                    var0 = {};
                                case 20:
                                    var8 = var0.activeMediaPlayerSource;
                                    var6 = var0.message;
                                    var7 = var0.initialProgress;
                                    var5 = var0.finalProgress;
                                    var3 = var2 == var8;
                                    var0 = undefined;
                                    var1 = undefined;
                                    if (var3) {
                                        _fun111820_ip = 60;
                                        continue _fun111820
                                    }
                                case 54:
                                    var1 = var8.attachmentIndex;
                                case 60:
                                    var1 = var2 != var1;
                                    var3 = null;
                                    if (!var1) {
                                        _fun111820_ip = 116;
                                        continue _fun111820
                                    }
                                case 69:
                                    var4 = var2 == var6;
                                    var1 = undefined;
                                    if (var4) {
                                        _fun111820_ip = 113;
                                        continue _fun111820
                                    }
                                case 78:
                                    var4 = var6.getContentMessage;
                                    var4 = var4.bind(var6)();
                                    var9 = var2 == var4;
                                    var1 = undefined;
                                    if (var9) {
                                        _fun111820_ip = 113;
                                        continue _fun111820
                                    }
                                case 97:
                                    var9 = var4.attachments;
                                    var4 = var8.attachmentIndex;
                                    var1 = var9[var4];
                                case 113:
                                    var3 = var1;
                                case 116:
                                    var4 = {};
                                    var9 = var2 == var8;
                                    var1 = undefined;
                                    if (var9) {
                                        _fun111820_ip = 132;
                                        continue _fun111820
                                    }
                                case 127:
                                    var1 = var8.messageId;
                                case 132:
                                    var4.message_id = var1;
                                    var8 = var2 == var6;
                                    var1 = undefined;
                                    if (var8) {
                                        _fun111820_ip = 157;
                                        continue _fun111820
                                    }
                                case 146:
                                    var8 = var6.author;
                                    var1 = var8.id;
                                case 157:
                                    var4.sender_user_id = var1;
                                    var8 = var2 == var3;
                                    var1 = undefined;
                                    if (var8) {
                                        _fun111820_ip = 177;
                                        continue _fun111820
                                    }
                                case 171:
                                    var1 = var3.content_type;
                                case 177:
                                    var4.type = var1;
                                    var3 = var2 == var6;
                                    var1 = undefined;
                                    if (var3) {
                                        _fun111820_ip = 233;
                                        continue _fun111820
                                    }
                                case 190:
                                    var3 = var6.getContentMessage;
                                    var8 = var3.bind(var6)();
                                    var3 = var2 == var8;
                                    var1 = undefined;
                                    if (var3) {
                                        _fun111820_ip = 233;
                                        continue _fun111820
                                    }
                                case 209:
                                    var6 = var8.hasFlag;
                                    var3 = _closure1_slot13;
                                    var3 = var3.IS_VOICE_MESSAGE;
                                    var1 = var6.bind(var8)(var3);
                                case 233:
                                    var4.is_voice_message = var1;
                                    var6 = _closure1_slot18;
                                    var8 = var2 == var5;
                                    var3 = undefined;
                                    if (var8) {
                                        _fun111820_ip = 261;
                                        continue _fun111820
                                    }
                                case 256:
                                    var3 = var5.duration;
                                case 261:
                                    var3 = var6.bind(var0)(var3);
                                    var4.total_duration_secs = var3;
                                    var6 = _closure1_slot18;
                                    var8 = var2 == var7;
                                    var3 = undefined;
                                    if (var8) {
                                        _fun111820_ip = 290;
                                        continue _fun111820
                                    }
                                case 284:
                                    var3 = var7.time;
                                case 290:
                                    var3 = var6.bind(var0)(var3);
                                    var4.pip_playback_start_time_secs = var3;
                                    var3 = _closure1_slot18;
                                    var6 = var2 == var5;
                                    var2 = undefined;
                                    if (var6) {
                                        _fun111820_ip = 321;
                                        continue _fun111820
                                    }
                                case 315:
                                    var2 = var5.time;
                                case 321:
                                    var2 = var3.bind(var0)(var2);
                                    var4.pip_playback_end_time_secs = var2;
                                    var3 = _closure4_slot0;
                                    var2 = var3.toISOString;
                                    var2 = var2.bind(var3)();
                                    var4.pip_opened_timestamp = var2;
                                    var2 = global;
                                    var2 = var2.Date;
                                    var3 = var2.prototype;
                                    var3 = Object.create(var3, {
                                        constructor: {
                                            value: var2
                                        }
                                    });
                                    var12 = var3;
                                    var2 = new var12[var2](var11);
                                    var3 = var2 instanceof Object ? var2 : var3;
                                    var2 = var3.toISOString;
                                    var2 = var2.bind(var3)();
                                    var4.pip_closed_timestamp = var2;
                                    var3 = _closure1_slot1;
                                    var5 = _closure1_slot2;
                                    var2 = 27;
                                    var2 = var5[var2];
                                    var3 = var3.bind(var0)(var2);
                                    var2 = var3.track;
                                    var1 = _closure1_slot12;
                                    var1 = var1.MEDIA_PIP_ENDED;
                                    var1 = var2.bind(var3)(var1, var4);
                                    return var0;
                            }
                        };
                        return var0;
                    };
                    var0 = new Array(0);
                    var0 = var2.bind(var3)(var1, var0);
                    var0 = undefined;
                    return var0;
                };
                var4 = var4.bind(var3)(var1, var20, var21);
                var6 = _closure1_slot4;
                var5 = var6.useState;
                var4 = false;
                var11 = var5.bind(var6)(var4);
                var9 = _closure1_slot3;
                var5 = 2;
                var5 = var9.bind(var3)(var11, var5);
                var18 = 0;
                var12 = var5[var18];
                var _closure2_slot5 = var12;
                var9 = 1;
                var5 = var5[var9];
                var _closure2_slot6 = var5;
                var13 = var6.useEffect;
                var11 = new Array(3);
                var11[0] = var12;
                var11[1] = var5;
                var11[2] = var14;
                var5 = function() { // Environment: var7
                    _fun111821: for (var _fun111821_ip = 0;;) switch (_fun111821_ip) {
                        case 0:
                            var1 = _closure2_slot5;
                            if (!var1) {
                                _fun111821_ip = 45;
                                continue _fun111821
                            }
                        case 12:
                            var1 = global;
                            var4 = var1.setTimeout;
                            var3 = undefined;
                            var2 = function() { // Environment: var0
                                _fun111822: for (var _fun111822_ip = 0;;) switch (_fun111822_ip) {
                                    case 0:
                                        var1 = _closure2_slot0;
                                        if (!var1) {
                                            _fun111822_ip = 23;
                                            continue _fun111822
                                        }
                                    case 10:
                                        var2 = _closure2_slot6;
                                        var1 = undefined;
                                        var0 = false;
                                        var0 = var2.bind(var1)(var0);
                                    case 23:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var1 = 3000;
                            var1 = var4.bind(var3)(var2, var1);
                            var _closure3_slot0 = var1;
                        case 45:
                            var0 = function() { // Environment: var0
                                var0 = global;
                                var2 = var0.clearTimeout;
                                var1 = _closure3_slot0;
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                                return var0;
                            };
                            return var0;
                    }
                };
                var5 = var13.bind(var6)(var5, var11);
                var11 = var6.useContext;
                var13 = _closure1_slot1;
                var15 = _closure1_slot2;
                var5 = 30;
                var5 = var15[var5];
                var5 = var13.bind(var3)(var5);
                var5 = var11.bind(var6)(var5);
                var13 = var5.dismissPanel;
                var _closure2_slot7 = var13;
                var11 = var6.useCallback;
                var5 = new Array(2);
                var5[0] = var13;
                var5[1] = var2;
                var2 = function() { // Environment: var7
                    var2 = _closure2_slot7;
                    var0 = undefined;
                    var2 = var2.bind(var0)();
                    var1 = _closure2_slot2;
                    var1 = var1.bind(var0)();
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 28;
                    var1 = var3[var1];
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.pauseCurrentPlayer;
                    var1 = var1.bind(var2)();
                    return var0;
                };
                var13 = var11.bind(var6)(var2, var5);
                var _closure2_slot8 = var13;
                var2 = function arg0, arg1() {
                    _fun111825: for (var _fun111825_ip = 0;;) switch (_fun111825_ip) {
                        case 0:
                            var2 = arg0;
                            var5 = arg1;
                            var _closure3_slot0 = var2;
                            var _closure3_slot1 = var5;
                            var4 = _closure1_slot4;
                            var3 = var4.useEffect;
                            var0 = null;
                            var7 = var0 == var2;
                            var0 = undefined;
                            var6 = undefined;
                            if (var7) {
                                _fun111825_ip = 47;
                                continue _fun111825
                            }
                        case 41:
                            var6 = var2.isCompleted;
                        case 47:
                            var2 = new Array(2);
                            var2[0] = var6;
                            var2[1] = var5;
                            var1 = function() { // Environment: var1
                                _fun111826: for (var _fun111826_ip = 0;;) switch (_fun111826_ip) {
                                    case 0:
                                        var3 = _closure3_slot0;
                                        var1 = null;
                                        var1 = var1 != var3;
                                        if (!var1) {
                                            _fun111826_ip = 28;
                                            continue _fun111826
                                        }
                                    case 18:
                                        var2 = _closure3_slot0;
                                        var1 = var2.isCompleted;
                                    case 28:
                                        if (!var1) {
                                            _fun111826_ip = 64;
                                            continue _fun111826
                                        }
                                    case 31:
                                        var1 = global;
                                        var4 = var1.setTimeout;
                                        var3 = undefined;
                                        var2 = function() { // Environment: var0
                                            var1 = _closure3_slot1;
                                            var0 = undefined;
                                            var1 = var1.bind(var0)();
                                            return var0;
                                        };
                                        var1 = 2000;
                                        var1 = var4.bind(var3)(var2, var1);
                                        var _closure4_slot0 = var1;
                                    case 64:
                                        var0 = function() { // Environment: var0
                                            var0 = global;
                                            var2 = var0.clearTimeout;
                                            var1 = _closure4_slot0;
                                            var0 = undefined;
                                            var1 = var2.bind(var0)(var1);
                                            return var0;
                                        };
                                        return var0;
                                }
                            };
                            var1 = var3.bind(var4)(var1, var2);
                            return var0;
                    }
                };
                var2 = var2.bind(var3)(var20, var13);
                var11 = var6.useCallback;
                var5 = new Array(1);
                var5[0] = var14;
                var2 = function() { // Environment: var7
                    _fun111829: for (var _fun111829_ip = 0;;) switch (_fun111829_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var0 = 28;
                            var3 = var3[var0];
                            var0 = undefined;
                            var3 = var4.bind(var0)(var3);
                            if (var2) {
                                _fun111829_ip = 47;
                                continue _fun111829
                            }
                        case 35:
                            var2 = var3.playCurrentPlayer;
                            var2 = var2.bind(var3)();
                            _fun111829_ip = 68;
                            continue _fun111829;
                        case 47:
                            var2 = var3.pauseCurrentPlayer;
                            var2 = var2.bind(var3)();
                            var2 = _closure2_slot6;
                            var1 = true;
                            var1 = var2.bind(var0)(var1);
                        case 68:
                            return var0;
                    }
                };
                var15 = var11.bind(var6)(var2, var5);
                var11 = var6.useMemo;
                var5 = new Array(1);
                var5[0] = var14;
                var2 = function() { // Environment: var7
                    _fun111830: for (var _fun111830_ip = 0;;) switch (_fun111830_ip) {
                        case 0:
                            var3 = _closure1_slot15;
                            var1 = _closure2_slot0;
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            if (var1) {
                                _fun111830_ip = 47;
                                continue _fun111830
                            }
                        case 25:
                            var1 = 32;
                            var2 = var4[var1];
                            var1 = undefined;
                            var1 = var5.bind(var1)(var2);
                            var2 = var1.PlayIcon;
                            _fun111830_ip = 67;
                            continue _fun111830;
                        case 47:
                            var1 = 31;
                            var4 = var4[var1];
                            var1 = undefined;
                            var1 = var5.bind(var1)(var4);
                            var2 = var1.PauseIcon;
                        case 67:
                            var1 = {};
                            var5 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var0 = 11;
                            var4 = var4[var0];
                            var0 = undefined;
                            var4 = var5.bind(var0)(var4);
                            var4 = var4.colors;
                            var4 = var4.WHITE;
                            var1.color = var4;
                            var4 = 'md';
                            var1.size = var4;
                            var0 = var3.bind(var0)(var2, var1);
                            return var0;
                    }
                };
                var11 = var11.bind(var6)(var2, var5);
                var5 = var6.useMemo;
                var2 = new Array(3);
                var2[0] = var21;
                var2[1] = var1;
                var2[2] = var0;
                var1 = function() { // Environment: var7
                    var3 = _closure1_slot15;
                    var2 = _closure1_slot19;
                    var1 = {};
                    var4 = _closure2_slot3;
                    var1.message = var4;
                    var4 = _closure2_slot1;
                    var1.activeMediaPlayerSource = var4;
                    var0 = _closure2_slot4;
                    var1.isVoiceMessage = var0;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var5 = var5.bind(var6)(var1, var2);
                var2 = var6.useMemo;
                var1 = new Array(4);
                var1[0] = var21;
                var1[1] = var13;
                var1[2] = var12;
                var1[3] = var0;
                var0 = function() { // Environment: var7
                    var3 = _closure1_slot15;
                    var2 = _closure1_slot21;
                    var1 = {};
                    var4 = _closure2_slot3;
                    var1.message = var4;
                    var4 = _closure2_slot8;
                    var1.handleClosePip = var4;
                    var4 = _closure2_slot5;
                    var1.visible = var4;
                    var0 = _closure2_slot4;
                    var1.isVoiceMessage = var0;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var6 = var2.bind(var6)(var0, var1);
                var12 = _closure1_slot0;
                var0 = _closure1_slot2;
                var21 = 23;
                var1 = var0[var21];
                var1 = var12.bind(var3)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var0[var21];
                var0 = var12.bind(var3)(var0);
                var0 = var0.t;
                if (var10) {
                    _fun111814_ip = 628;
                    continue _fun111814
                }
            case 613:
                var12 = var0.AlHqHT;
                var12 = var1.bind(var2)(var12);
                _fun111814_ip = 639;
                continue _fun111814;
            case 628:
                var0 = var0.RscU7I;
                var12 = var1.bind(var2)(var0);
            case 639:
                var13 = _closure1_slot0;
                var0 = _closure1_slot2;
                var1 = var0[var21];
                var1 = var13.bind(var3)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var0[var21];
                var0 = var13.bind(var3)(var0);
                var0 = var0.t;
                if (var10) {
                    _fun111814_ip = 698;
                    continue _fun111814
                }
            case 683:
                var10 = var0["3XohGn"];
                var13 = var1.bind(var2)(var10);
                _fun111814_ip = 709;
                continue _fun111814;
            case 698:
                var0 = var0.ZcgDJX;
                var13 = var1.bind(var2)(var0);
            case 709:
                var2 = _closure1_slot16;
                var1 = _closure1_slot6;
                var0 = {};
                var10 = var16.container;
                var0.style = var10;
                var0.activeOpacity = var9;
                var7 = function() {
                    _fun111833: for (var _fun111833_ip = 0;;) switch (_fun111833_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            if (!var1) {
                                _fun111833_ip = 28;
                                continue _fun111833
                            }
                        case 10:
                            var2 = _closure2_slot6;
                            var0 = _closure2_slot5;
                            var1 = !var0;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                        case 28:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0.onPress = var7;
                var0.accessible = var4;
                var4 = new Array(3);
                var4[0] = var6;
                var4[1] = var5;
                var6 = _closure1_slot7;
                var5 = {};
                var7 = var16.actionContainer;
                var5.style = var7;
                var10 = _closure1_slot15;
                var9 = _closure1_slot0;
                var21 = _closure1_slot2;
                var7 = 33;
                var7 = var21[var7];
                var7 = var9.bind(var3)(var7);
                var9 = var7.AnimatedCircularProgress;
                var7 = {
                    'style': null,
                    'size': 48,
                    'width': 2
                };
                var21 = var16.progressBar;
                var7.style = var21;
                var22 = var19 == var20;
                var21 = 0;
                if (var22) {
                    _fun111814_ip = 863;
                    continue _fun111814
                }
            case 841:
                var23 = var20.time;
                var22 = var20.duration;
                var23 = var23 / var22;
                var22 = 100;
                var21 = var23 * var22;
            case 863:
                var7.prefill = var21;
                var23 = _closure1_slot5;
                var22 = var23.out;
                var21 = var23.linear;
                var21 = var22.bind(var23)(var21);
                var7.easing = var21;
                var21 = var19 == var20;
                var19 = 0;
                if (var21) {
                    _fun111814_ip = 918;
                    continue _fun111814
                }
            case 903:
                var21 = var20.duration;
                var20 = var20.time;
                var19 = var21 - var20;
            case 918:
                var7.duration = var19;
                var19 = 100;
                var7.fill = var19;
                var7.rotation = var18;
                var18 = 'round';
                var7.lineCap = var18;
                var7.ref = var17;
                var19 = _closure1_slot0;
                var21 = _closure1_slot2;
                var18 = 12;
                var17 = var21[var18];
                var24 = var19.bind(var3)(var17);
                var23 = var24.useToken;
                var20 = _closure1_slot1;
                var17 = 11;
                var22 = var21[var17];
                var22 = var20.bind(var3)(var22);
                var22 = var22.colors;
                var22 = var22.CONTROL_PRIMARY_BACKGROUND_DEFAULT;
                var22 = var23.bind(var24)(var22);
                var7.tintColor = var22;
                var18 = var21[var18];
                var19 = var19.bind(var3)(var18);
                var18 = var19.useToken;
                var17 = var21[var17];
                var17 = var20.bind(var3)(var17);
                var17 = var17.colors;
                var17 = var17.BACKGROUND_MOD_MUTED;
                var17 = var18.bind(var19)(var17);
                var7.backgroundColor = var17;
                var9 = var10.bind(var3)(var9, var7);
                var7 = new Array(2);
                var7[0] = var9;
                var10 = _closure1_slot15;
                var9 = _closure1_slot6;
                var8 = {};
                var16 = var16.playPauseButton;
                var8.style = var16;
                var8.onPress = var15;
                var15 = 'button';
                var8.accessibilityRole = var15;
                if (!var14) {
                    _fun111814_ip = 1107;
                    continue _fun111814
                }
            case 1104:
                var12 = var13;
            case 1107:
                var8.accessibilityLabel = var12;
                var8.children = var11;
                var8 = var10.bind(var3)(var9, var8);
                var7[1] = var8;
                var5.children = var7;
                var5 = var2.bind(var3)(var6, var5);
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1372, 4245, 3091, 1613, 660, 14244, 33, 1297, 671, 3142, 566, 4787, 6794, 3932, 14368, 4089, 6521, 5612, 3711, 4088, 1234, 7020, 4701, 3255, 795, 12837, 3069, 14365, 8845, 5866, 14369, 2]);