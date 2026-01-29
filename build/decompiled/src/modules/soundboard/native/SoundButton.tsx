// modules/soundboard/native/SoundButton.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun68373: for (var _fun68373_ip = 0;;) switch (_fun68373_ip) {
        case 0:
            var4 = require;
            var8 = metroImportDefault;
            var2 = exports;
            var5 = dependencyMap;
            var _closure1_slot0 = var4;
            var _closure1_slot1 = var8;
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
            var7 = var3.bind(var0)(var6);
            var _closure1_slot3 = var7;
            var3 = 1;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var10 = var3.View;
            var _closure1_slot4 = var10;
            var3 = 2;
            var3 = var5[var3];
            var3 = var8.bind(var0)(var3);
            var _closure1_slot5 = var3;
            var3 = 3;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var12 = var3.SOUND_BUTTON_HEIGHT;
            var3 = 4;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var6 = var3.jsx;
            var _closure1_slot6 = var6;
            var3 = var3.jsxs;
            var _closure1_slot7 = var3;
            var6 = 5;
            var3 = var5[var6];
            var9 = var8.bind(var0)(var3);
            var3 = var9.createAnimatedComponent;
            var3 = var3.bind(var9)(var10);
            var _closure1_slot8 = var3;
            var3 = {
                'damping': 10,
                'stiffness': 300,
                'mass': 1
            };
            var _closure1_slot9 = var3;
            var14 = 6;
            var3 = var5[var14];
            var11 = var4.bind(var0)(var3);
            var10 = var11.createStyles;
            var9 = {};
            var3 = {
                'marginTop': 4,
                'height': null,
                'backgroundColor': null,
                'display': 'flex',
                'flexDirection': 'column',
                'justifyContent': 'center',
                'alignItems': 'center',
                'borderRadius': null,
                'borderWidth': 1
            };
            var3.height = var12;
            var13 = 7;
            var12 = var5[var13];
            var12 = var8.bind(var0)(var12);
            var12 = var12.colors;
            var12 = var12.CARD_BACKGROUND_DEFAULT;
            var3.backgroundColor = var12;
            var12 = var5[var13];
            var12 = var8.bind(var0)(var12);
            var12 = var12.radii;
            var12 = var12.lg;
            var3.borderRadius = var12;
            var12 = var5[var13];
            var12 = var8.bind(var0)(var12);
            var12 = var12.colors;
            var12 = var12.BORDER_MUTED;
            var3.borderColor = var12;
            var12 = var5[var13];
            var12 = var8.bind(var0)(var12);
            var12 = var12.shadows;
            var19 = var12.SHADOW_LOW;
            var20 = var3;
            var12 = copyDataProperties(var20, var19);
            var9.button = var3;
            var3 = {};
            var12 = var5[var13];
            var12 = var8.bind(var0)(var12);
            var12 = var12.colors;
            var12 = var12.CARD_PRIMARY_PRESSED_BG;
            var3.backgroundColor = var12;
            var9.buttonPressed = var3;
            var3 = {};
            var12 = 0.5;
            var3.opacity = var12;
            var9.buttonDisabled = var3;
            var3 = {
                'borderStyle': 'solid',
                'borderWidth': 2
            };
            var12 = var5[var13];
            var12 = var8.bind(var0)(var12);
            var12 = var12.colors;
            var12 = var12.STATUS_SPEAKING;
            var3.borderColor = var12;
            var12 = var5[var13];
            var12 = var8.bind(var0)(var12);
            var12 = var12.colors;
            var12 = var12.CARD_SECONDARY_BG;
            var3.backgroundColor = var12;
            var9.buttonPlaying = var3;
            var12 = {
                'height': 24,
                'width': 24,
                'fontSize': null,
                'lineHeight': 28
            };
            var16 = 24;
            var15 = 8;
            var3 = var5[var15];
            var17 = var4.bind(var0)(var3);
            var3 = var17.isIOS;
            var17 = var3.bind(var17)();
            var3 = undefined;
            if (!var17) {
                _fun68373_ip = 527;
                continue _fun68373
            }
        case 524:
            var3 = var16;
        case 527:
            var12.fontSize = var3;
            var3 = 28;
            var9.emoji = var12;
            var12 = {
                'display': 'flex',
                'alignItems': 'center',
                'justifyContent': 'center',
                'height': 40,
                'width': 40,
                'backgroundColor': null,
                'backgroundSize': 32,
                'borderRadius': null,
                'marginBottom': 8
            };
            var16 = var5[var13];
            var16 = var8.bind(var0)(var16);
            var16 = var16.colors;
            var16 = var16.BACKGROUND_MOD_MUTED;
            var12.backgroundColor = var16;
            var16 = var5[var13];
            var16 = var8.bind(var0)(var16);
            var16 = var16.radii;
            var16 = var16.round;
            var12.borderRadius = var16;
            var9.emojiWrapper = var12;
            var12 = {
                'width': '100%',
                'height': '100%'
            };
            var16 = var5[var13];
            var16 = var8.bind(var0)(var16);
            var16 = var16.radii;
            var16 = var16.round;
            var12.borderRadius = var16;
            var9.emojiBackground = var12;
            var12 = {};
            var16 = var5[var13];
            var16 = var8.bind(var0)(var16);
            var16 = var16.colors;
            var16 = var16.CHANNEL_ICON;
            var12.color = var16;
            var9.defaultSoundboardIcon = var12;
            var12 = {};
            var12.marginHorizontal = var15;
            var9.text = var12;
            var12 = {};
            var12.marginHorizontal = var14;
            var9.textPlaying = var12;
            var12 = {
                'position': 'absolute',
                'top': null,
                'end': null,
                'width': 12,
                'height': 12
            };
            var14 = var5[var13];
            var14 = var8.bind(var0)(var14);
            var14 = var14.spacing;
            var14 = var14.PX_12;
            var12.top = var14;
            var14 = var5[var13];
            var14 = var8.bind(var0)(var14);
            var14 = var14.spacing;
            var14 = var14.PX_12;
            var12.end = var14;
            var13 = var5[var13];
            var13 = var8.bind(var0)(var13);
            var13 = var13.colors;
            var13 = var13.WHITE;
            var12.tintColor = var13;
            var9.lock = var12;
            var9 = var10.bind(var11)(var9);
            var _closure1_slot10 = var9;
            var6 = var5[var6];
            var9 = var8.bind(var0)(var6);
            var8 = var9.createAnimatedComponent;
            var6 = 9;
            var6 = var5[var6];
            var6 = var4.bind(var0)(var6);
            var6 = var6.PressableOpacity;
            var6 = var8.bind(var9)(var6);
            var _closure1_slot11 = var6;
            var6 = {};
            var8 = 'function SoundButtonTsx1(){const{animationConfig,withDelay,withSpring,interpolate,SPRING_CONFIG}=this.__closure;var _animationConfig$play,_animationConfig$pres,_animationConfig;const isNotPressed=animationConfig.sharedValues.pressed.get()===0;const isPlaying=animationConfig.sharedValues.playing.get()>0;const shouldDoPlayingAnimation=isNotPressed&&isPlaying;const playingAnimationScaleValue=withDelay((_animationConfig$play=animationConfig.playingAnimationDelay)!==null&&_animationConfig$play!==void 0?_animationConfig$play:0,withSpring(interpolate(animationConfig.sharedValues.playing.get(),[0,1],[1,animationConfig.scaleFactors.playing]),SPRING_CONFIG));const pressedAnimationScaleValue=withSpring(interpolate(animationConfig.sharedValues.pressed.get(),[0,1],[1,animationConfig.scaleFactors.pressed]),SPRING_CONFIG);const rotationScaleValue=interpolate(animationConfig.sharedValues.pressed.get(),[0,1],[0,(_animationConfig$pres=(_animationConfig=animationConfig)===null||_animationConfig===void 0?void 0:_animationConfig.pressedRotationDegrees)!==null&&_animationConfig$pres!==void 0?_animationConfig$pres:0]);return{transform:[{scale:shouldDoPlayingAnimation?playingAnimationScaleValue:pressedAnimationScaleValue},{rotate:rotationScaleValue+"deg"}]};}';
            var6.code = var8;
            var _closure1_slot12 = var6;
            var6 = function(arg0) { // Original name: useAnimation, environment: var1
                var9 = arg0;
                var _closure2_slot0 = var9;
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var5 = 5;
                var1 = var8[var5];
                var6 = undefined;
                var2 = var7.bind(var6)(var1);
                var1 = var2.useAnimatedStyle;
                var0 = function() { // Original name: t, environment: var0
                    _fun68375: for (var _fun68375_ip = 0;;) switch (_fun68375_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            var1 = var0.sharedValues;
                            var2 = var1.pressed;
                            var1 = var2.get;
                            var12 = var1.bind(var2)();
                            var1 = var0.sharedValues;
                            var2 = var1.playing;
                            var1 = var2.get;
                            var1 = var1.bind(var2)();
                            var3 = 0;
                            var10 = var1 > var3;
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var7 = 5;
                            var1 = var1[var7];
                            var4 = undefined;
                            var16 = var2.bind(var4)(var1);
                            var15 = var16.withDelay;
                            var0 = var0.playingAnimationDelay;
                            var8 = null;
                            var1 = var8 != var0;
                            var6 = 0;
                            if (!var1) {
                                _fun68375_ip = 106;
                                continue _fun68375
                            }
                        case 103:
                            var6 = var0;
                        case 106:
                            var14 = _closure1_slot0;
                            var13 = _closure1_slot2;
                            var1 = 10;
                            var0 = var13[var1];
                            var18 = var14.bind(var4)(var0);
                            var17 = var18.withSpring;
                            var0 = var13[var7];
                            var21 = var14.bind(var4)(var0);
                            var20 = var21.interpolate;
                            var0 = _closure2_slot0;
                            var2 = var0.sharedValues;
                            var11 = var2.playing;
                            var2 = var11.get;
                            var19 = var2.bind(var11)();
                            var2 = var0.scaleFactors;
                            var2 = var2.playing;
                            var11 = [1];
                            var11[1] = var2;
                            var2 = [0, 1];
                            var2 = var20.bind(var21)(var19, var2, var11);
                            var11 = _closure1_slot9;
                            var2 = var17.bind(var18)(var2, var11);
                            var6 = var15.bind(var16)(var6, var2);
                            var1 = var13[var1];
                            var2 = var14.bind(var4)(var1);
                            var1 = var2.withSpring;
                            var13 = var13[var7];
                            var16 = var14.bind(var4)(var13);
                            var15 = var16.interpolate;
                            var13 = var0.sharedValues;
                            var14 = var13.pressed;
                            var13 = var14.get;
                            var14 = var13.bind(var14)();
                            var0 = var0.scaleFactors;
                            var0 = var0.pressed;
                            var13 = [1];
                            var13[1] = var0;
                            var0 = [0, 1];
                            var0 = var15.bind(var16)(var14, var0, var13);
                            var11 = var1.bind(var2)(var0, var11);
                            var0 = {};
                            var2 = {};
                            var1 = var11;
                            if (!(var3 === var12)) {
                                _fun68375_ip = 349;
                                continue _fun68375
                            }
                        case 340:
                            var1 = var11;
                            if (!var10) {
                                _fun68375_ip = 349;
                                continue _fun68375
                            }
                        case 346:
                            var1 = var6;
                        case 349:
                            var2.scale = var1;
                            var1 = new Array(2);
                            var1[0] = var2;
                            var2 = {};
                            var6 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var5 = var5[var7];
                            var7 = var6.bind(var4)(var5);
                            var6 = var7.interpolate;
                            var10 = _closure2_slot0;
                            var5 = var10.sharedValues;
                            var11 = var5.pressed;
                            var5 = var11.get;
                            var5 = var5.bind(var11)();
                            var10 = var8 == var10;
                            var4 = undefined;
                            if (var10) {
                                _fun68375_ip = 431;
                                continue _fun68375
                            }
                        case 421:
                            var9 = _closure2_slot0;
                            var4 = var9.pressedRotationDegrees;
                        case 431:
                            var8 = var8 != var4;
                            var3 = 0;
                            if (!var8) {
                                _fun68375_ip = 443;
                                continue _fun68375
                            }
                        case 440:
                            var3 = var4;
                        case 443:
                            var4 = [0];
                            var4[1] = var3;
                            var3 = [0, 1];
                            var6 = var6.bind(var7)(var5, var3, var4);
                            var3 = global;
                            var3 = var3.HermesInternal;
                            var5 = var3.concat;
                            var4 = '';
                            var3 = 'deg';
                            var3 = var5.bind(var4)(var6, var3);
                            var2.rotate = var3;
                            var1[1] = var2;
                            var0.transform = var1;
                            return var0;
                    }
                };
                var4 = {};
                var4.animationConfig = var9;
                var9 = var8[var5];
                var9 = var7.bind(var6)(var9);
                var9 = var9.withDelay;
                var4.withDelay = var9;
                var9 = 10;
                var9 = var8[var9];
                var9 = var7.bind(var6)(var9);
                var9 = var9.withSpring;
                var4.withSpring = var9;
                var5 = var8[var5];
                var5 = var7.bind(var6)(var5);
                var5 = var5.interpolate;
                var4.interpolate = var5;
                var5 = _closure1_slot9;
                var4.SPRING_CONFIG = var5;
                var0.__closure = var4;
                var4 = 13932429225740.0;
                var0.__workletHash = var4;
                var3 = _closure1_slot12;
                var0.__initData = var3;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var _closure1_slot13 = var6;
            var6 = function(arg0) { // Original name: SoundButtonEmoji, environment: var1
                _fun68376: for (var _fun68376_ip = 0;;) switch (_fun68376_ip) {
                    case 0:
                        var0 = arg0;
                        var7 = var0.sound;
                        var2 = var0.sharedValues;
                        var0 = _closure1_slot10;
                        var3 = undefined;
                        var8 = var0.bind(var3)();
                        var1 = _closure1_slot13;
                        var0 = {};
                        var0.sharedValues = var2;
                        var4 = {
                            'pressed': 0.8,
                            'playing': 1.2
                        };
                        var0.scaleFactors = var4;
                        var9 = var1.bind(var3)(var0);
                        var1 = _closure1_slot13;
                        var0 = {};
                        var0.sharedValues = var2;
                        var2 = {
                            'pressed': 0.7200000000000001,
                            'playing': 1.08
                        };
                        var0.scaleFactors = var2;
                        var2 = 100;
                        var0.playingAnimationDelay = var2;
                        var2 = -15;
                        var0.pressedRotationDegrees = var2;
                        var6 = var1.bind(var3)(var0);
                        var2 = _closure1_slot6;
                        var1 = _closure1_slot8;
                        var0 = {};
                        var10 = var8.emojiWrapper;
                        var4 = new Array(2);
                        var4[0] = var10;
                        var4[1] = var9;
                        var0.style = var4;
                        var4 = {};
                        var4.style = var6;
                        var9 = _closure1_slot1;
                        var10 = _closure1_slot2;
                        var5 = 11;
                        var5 = var10[var5];
                        var6 = var9.bind(var3)(var5);
                        var5 = {};
                        var11 = var8.emoji;
                        var5.fastImageStyle = var11;
                        var8 = var8.emoji;
                        var5.textEmojiStyle = var8;
                        var8 = 12;
                        var8 = var10[var8];
                        var9 = var9.bind(var3)(var8);
                        var8 = 24;
                        var8 = var9.bind(var3)(var7, var8);
                        var5.src = var8;
                        var8 = var7.emojiName;
                        var7 = null;
                        var9 = var7 != var8;
                        var7 = '';
                        if (!var9) {
                            _fun68376_ip = 247;
                            continue _fun68376
                        }
                    case 244:
                        var7 = var8;
                    case 247:
                        var5.name = var7;
                        var5 = var2.bind(var3)(var6, var5);
                        var4.children = var5;
                        var4 = var2.bind(var3)(var1, var4);
                        var0.children = var4;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                }
            };
            var _closure1_slot14 = var6;
            var6 = var7.memo;
            var1 = function(arg0) { // Environment: var1
                _fun68377: for (var _fun68377_ip = 0;;) switch (_fun68377_ip) {
                    case 0:
                        var2 = arg0;
                        var14 = var2.sound;
                        var _closure2_slot0 = var14;
                        var1 = var2.channel;
                        var _closure2_slot1 = var1;
                        var18 = var2.style;
                        var7 = var2.isSectionLocked;
                        var3 = undefined;
                        if (!(var7 === var3)) {
                            _fun68377_ip = 43;
                            continue _fun68377
                        }
                    case 41:
                        var7 = false;
                    case 43:
                        var _closure2_slot2 = var3;
                        var _closure2_slot3 = var3;
                        var _closure2_slot4 = var3;
                        var _closure2_slot5 = var3;
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var2 = 13;
                        var2 = var5[var2];
                        var4 = var4.bind(var3)(var2);
                        var2 = var4.useSoundButtonStyleConfig;
                        var2 = var2.bind(var4)();
                        var22 = var2.buttonWidth;
                        var2 = var14.emojiId;
                        var16 = null;
                        var11 = var16 != var2;
                        if (var11) {
                            _fun68377_ip = 123;
                            continue _fun68377
                        }
                    case 113:
                        var2 = var14.emojiName;
                        var11 = var16 != var2;
                    case 123:
                        var2 = _closure1_slot10;
                        var9 = var2.bind(var3)();
                        var5 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var2 = 14;
                        var2 = var8[var2];
                        var12 = var5.bind(var3)(var2);
                        var10 = var12.useStateFromStores;
                        var2 = _closure1_slot5;
                        var4 = new Array(1);
                        var4[0] = var2;
                        var2 = function() { // Environment: var0
                            var1 = _closure1_slot5;
                            var0 = var1.getCurrentUser;
                            var0 = var0.bind(var1)();
                            return var0;
                        };
                        var12 = var10.bind(var12)(var4, var2);
                        _closure2_slot2 = var12;
                        var13 = _closure1_slot1;
                        var2 = 15;
                        var2 = var8[var2];
                        var4 = var13.bind(var3)(var2);
                        var2 = var1.id;
                        var4 = var4.bind(var3)(var14, var2);
                        var2 = var4.playSoundboardSound;
                        _closure2_slot3 = var2;
                        var17 = var4.isPlayingSound;
                        var4 = 16;
                        var4 = var8[var4];
                        var10 = var13.bind(var3)(var4);
                        var4 = 17;
                        var4 = var8[var4];
                        var4 = var13.bind(var3)(var4);
                        var4 = var4.SOUNDBOARD_BUTTON;
                        var4 = var10.bind(var3)(var4);
                        var13 = var4.analyticsLocations;
                        _closure2_slot4 = var13;
                        var4 = 18;
                        var4 = var8[var4];
                        var5 = var5.bind(var3)(var4);
                        var4 = var5.canUseSoundboardSound;
                        var4 = var4.bind(var5)(var12, var14, var1);
                        var5 = !var4;
                        _closure2_slot5 = var5;
                        var4 = _closure1_slot3;
                        var10 = var4.useCallback;
                        var8 = new Array(6);
                        var8[0] = var13;
                        var13 = var1.guild_id;
                        var8[1] = var13;
                        var8[2] = var12;
                        var8[3] = var2;
                        var8[4] = var14;
                        var8[5] = var5;
                        var2 = function() { // Environment: var0
                            _fun68379: for (var _fun68379_ip = 0;;) switch (_fun68379_ip) {
                                case 0:
                                    var1 = _closure2_slot5;
                                    if (var1) {
                                        _fun68379_ip = 30;
                                        continue _fun68379
                                    }
                                case 10:
                                    var3 = _closure2_slot3;
                                    var2 = _closure2_slot4;
                                    var1 = undefined;
                                    var1 = var3.bind(var1)(var2);
                                    _fun68379_ip = 296;
                                    continue _fun68379;
                                case 30:
                                    var2 = _closure1_slot1;
                                    var4 = _closure1_slot2;
                                    var1 = 19;
                                    var1 = var4[var1];
                                    var7 = undefined;
                                    var4 = var2.bind(var7)(var1);
                                    var2 = var4.canUseSoundboardEverywhere;
                                    var1 = _closure2_slot2;
                                    var1 = var2.bind(var4)(var1);
                                    if (var1) {
                                        _fun68379_ip = 153;
                                        continue _fun68379
                                    }
                                case 73:
                                    var1 = _closure2_slot0;
                                    var2 = var1.guildId;
                                    var1 = _closure2_slot1;
                                    var1 = var1.guild_id;
                                    if (!(var2 !== var1)) {
                                        _fun68379_ip = 153;
                                        continue _fun68379
                                    }
                                case 95:
                                    var2 = _closure1_slot1;
                                    var5 = _closure1_slot2;
                                    var1 = 20;
                                    var1 = var5[var1];
                                    var2 = var2.bind(var7)(var1);
                                    var4 = _closure1_slot0;
                                    var1 = 21;
                                    var1 = var5[var1];
                                    var1 = var4.bind(var7)(var1);
                                    var1 = var1.EntitlementFeatureNames;
                                    var1 = var1.SOUNDBOARD_EVERYWHERE;
                                    var1 = var2.bind(var7)(var1);
                                    _fun68379_ip = 296;
                                    continue _fun68379;
                                case 153:
                                    var0 = _closure2_slot0;
                                    var0 = var0.available;
                                    if (var0) {
                                        _fun68379_ip = 296;
                                        continue _fun68379
                                    }
                                case 169:
                                    var5 = _closure1_slot1;
                                    var8 = _closure1_slot2;
                                    var0 = 22;
                                    var0 = var8[var0];
                                    var2 = var5.bind(var7)(var0);
                                    var1 = var2.open;
                                    var0 = {};
                                    var4 = 'DISABLED_SOUND_PRESSED';
                                    var0.key = var4;
                                    var4 = 23;
                                    var4 = var8[var4];
                                    var4 = var5.bind(var7)(var4);
                                    var0.icon = var4;
                                    var6 = _closure1_slot0;
                                    var3 = 24;
                                    var4 = var8[var3];
                                    var4 = var6.bind(var7)(var4);
                                    var5 = var4.intl;
                                    var4 = var5.string;
                                    var3 = var8[var3];
                                    var3 = var6.bind(var7)(var3);
                                    var3 = var3.t;
                                    var3 = var3.MDOXJR;
                                    var3 = var4.bind(var5)(var3);
                                    var0.content = var3;
                                    var3 = 3000;
                                    var0.toastDurationMs = var3;
                                    var0 = var1.bind(var2)(var0);
                                case 296:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var12 = var10.bind(var4)(var2, var8);
                        var2 = function(arg0) { // Environment: var0
                            var8 = arg0;
                            var _closure3_slot0 = var8;
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var2 = 5;
                            var3 = var7[var2];
                            var4 = undefined;
                            var9 = var6.bind(var4)(var3);
                            var3 = var9.useSharedValue;
                            var5 = 0;
                            var3 = var3.bind(var9)(var5);
                            var _closure3_slot1 = var3;
                            var2 = var7[var2];
                            var4 = var6.bind(var4)(var2);
                            var2 = var4.useSharedValue;
                            var2 = var2.bind(var4)(var5);
                            var _closure3_slot2 = var2;
                            var7 = _closure1_slot3;
                            var5 = var7.useCallback;
                            var4 = new Array(1);
                            var4[0] = var3;
                            var1 = function() { // Environment: var0
                                var2 = _closure3_slot1;
                                var1 = var2.set;
                                var0 = 1;
                                var0 = var1.bind(var2)(var0);
                                var0 = undefined;
                                return var0;
                            };
                            var5 = var5.bind(var7)(var1, var4);
                            var6 = var7.useCallback;
                            var4 = new Array(1);
                            var4[0] = var3;
                            var1 = function() { // Environment: var0
                                var2 = _closure3_slot1;
                                var1 = var2.set;
                                var0 = 0;
                                var0 = var1.bind(var2)(var0);
                                var0 = undefined;
                                return var0;
                            };
                            var4 = var6.bind(var7)(var1, var4);
                            var6 = var7.useEffect;
                            var1 = new Array(3);
                            var1[0] = var8;
                            var1[1] = var2;
                            var1[2] = var3;
                            var0 = function() { // Environment: var0
                                _fun68383: for (var _fun68383_ip = 0;;) switch (_fun68383_ip) {
                                    case 0:
                                        var2 = _closure3_slot2;
                                        var1 = var2.set;
                                        var3 = _closure3_slot0;
                                        var0 = 0;
                                        if (!var3) {
                                            _fun68383_ip = 24;
                                            continue _fun68383
                                        }
                                    case 21:
                                        var0 = 1;
                                    case 24:
                                        var0 = var1.bind(var2)(var0);
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var0 = var6.bind(var7)(var0, var1);
                            var0 = {};
                            var1 = {};
                            var1.pressIn = var5;
                            var1.pressOut = var4;
                            var0.handlers = var1;
                            var1 = {};
                            var1.pressed = var3;
                            var1.playing = var2;
                            var0.sharedValues = var1;
                            return var0;
                        };
                        var15 = var2.bind(var3)(var17);
                        var8 = _closure1_slot13;
                        var2 = {};
                        var10 = var15.sharedValues;
                        var2.sharedValues = var10;
                        var10 = {
                            'pressed': 0.95,
                            'playing': 1.05
                        };
                        var2.scaleFactors = var10;
                        var19 = var8.bind(var3)(var2);
                        var2 = var15.sharedValues;
                        var8 = var2.pressed;
                        var2 = var8.get;
                        var8 = var2.bind(var8)();
                        var2 = 0;
                        var21 = var8 > var2;
                        var2 = var4.useCallback;
                        var8 = var1.id;
                        var1 = new Array(2);
                        var1[0] = var8;
                        var1[1] = var14;
                        var0 = function() { // Environment: var0
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 25;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = _closure2_slot1;
                            var2 = var2.id;
                            var1 = _closure2_slot0;
                            var1 = var3.bind(var0)(var2, var1);
                            return var0;
                        };
                        var10 = var2.bind(var4)(var0, var1);
                        var2 = _closure1_slot7;
                        var1 = _closure1_slot4;
                        var0 = {};
                        var8 = _closure1_slot11;
                        var4 = {};
                        var20 = var9.button;
                        var13 = new Array(7);
                        var13[0] = var20;
                        var20 = {};
                        var20.width = var22;
                        var13[1] = var20;
                        var20 = null;
                        if (!var21) {
                            _fun68377_ip = 526;
                            continue _fun68377
                        }
                    case 520:
                        var20 = var9.buttonPressed;
                    case 526:
                        var13[2] = var20;
                        var13[3] = var19;
                        var19 = null;
                        if (!var17) {
                            _fun68377_ip = 545;
                            continue _fun68377
                        }
                    case 539:
                        var19 = var9.buttonPlaying;
                    case 545:
                        var13[4] = var19;
                        var19 = null;
                        if (!var5) {
                            _fun68377_ip = 565;
                            continue _fun68377
                        }
                    case 554:
                        var19 = null;
                        if (var7) {
                            _fun68377_ip = 565;
                            continue _fun68377
                        }
                    case 559:
                        var19 = var9.buttonDisabled;
                    case 565:
                        var13[5] = var19;
                        var13[6] = var18;
                        var4.style = var13;
                        var13 = 'button';
                        var4.accessibilityRole = var13;
                        var13 = var14.name;
                        var4.accessibilityLabel = var13;
                        var13 = var15.handlers;
                        var13 = var13.pressIn;
                        var4.onPressIn = var13;
                        var13 = var15.handlers;
                        var13 = var13.pressOut;
                        var4.onPressOut = var13;
                        var4.onPress = var12;
                        var4.onLongPress = var10;
                        if (!var11) {
                            _fun68377_ip = 672;
                            continue _fun68377
                        }
                    case 640:
                        var13 = _closure1_slot6;
                        var12 = _closure1_slot14;
                        var10 = {};
                        var15 = var15.sharedValues;
                        var10.sharedValues = var15;
                        var10.sound = var14;
                        var11 = var13.bind(var3)(var12, var10);
                    case 672:
                        var10 = new Array(2);
                        var10[0] = var11;
                        var13 = _closure1_slot6;
                        var12 = _closure1_slot0;
                        var15 = _closure1_slot2;
                        var11 = 26;
                        var11 = var15[var11];
                        var11 = var12.bind(var3)(var11);
                        var12 = var11.Text;
                        var11 = {
                            'lineClamp': 1,
                            'style': null,
                            'variant': 'text-sm/semibold'
                        };
                        var18 = var9.text;
                        var15 = new Array(2);
                        var15[0] = var18;
                        var16 = null;
                        if (!var17) {
                            _fun68377_ip = 747;
                            continue _fun68377
                        }
                    case 741:
                        var16 = var9.textPlaying;
                    case 747:
                        var15[1] = var16;
                        var11.style = var15;
                        var14 = var14.name;
                        var11.children = var14;
                        var11 = var13.bind(var3)(var12, var11);
                        var10[1] = var11;
                        var4.children = var10;
                        var8 = var2.bind(var3)(var8, var4);
                        var4 = new Array(2);
                        var4[0] = var8;
                        if (!var5) {
                            _fun68377_ip = 800;
                            continue _fun68377
                        }
                    case 797:
                        var5 = !var7;
                    case 800:
                        if (!var5) {
                            _fun68377_ip = 851;
                            continue _fun68377
                        }
                    case 803:
                        var8 = _closure1_slot6;
                        var7 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var6 = 27;
                        var6 = var10[var6];
                        var6 = var7.bind(var3)(var6);
                        var7 = var6.LockIcon;
                        var6 = {};
                        var9 = var9.lock;
                        var6.style = var9;
                        var5 = var8.bind(var3)(var7, var6);
                    case 851:
                        var4[1] = var5;
                        var0.children = var4;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                }
            };
            var1 = var6.bind(var7)(var1);
            var3 = var5[var3];
            var5 = var4.bind(var0)(var3);
            var4 = var5.fileFinishedImporting;
            var3 = 'modules/soundboard/native/SoundButton.tsx';
            var3 = var4.bind(var5)(var3);
            var2.SoundButton = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1613, 8466, 33, 3677, 1297, 671, 478, 4858, 4034, 5727, 8512, 8513, 566, 8514, 5684, 5536, 5647, 3068, 7578, 7580, 3107, 8516, 1234, 8517, 3895, 4814, 2]);