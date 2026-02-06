// modules/guild_onboarding/native/GuildOnboardingPromptOptionButton.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
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
    var3 = var11.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var12 = 1;
    var6 = var5[var12];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.EMOJI_URL_BASE_SIZE;
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot9 = var6;
    var3 = var3.jsxs;
    var _closure1_slot10 = var3;
    var3 = 7;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var6 = {};
    var3 = {
        'borderRadius': null,
        'borderWidth': 2,
        'borderStyle': 'solid',
        'borderColor': null,
        'marginBottom': 8
    };
    var10 = 8;
    var9 = var5[var10];
    var9 = var11.bind(var0)(var9);
    var9 = var9.radii;
    var9 = var9.md;
    var3.borderRadius = var9;
    var9 = var5[var10];
    var9 = var11.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BORDER_SUBTLE;
    var3.borderColor = var9;
    var6.container = var3;
    var3 = {};
    var9 = var5[var10];
    var9 = var11.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BACKGROUND_BASE_LOWEST;
    var3.backgroundColor = var9;
    var9 = 'transparent';
    var3.borderColor = var9;
    var6.selected = var3;
    var3 = {
        'paddingVertical': 12,
        'paddingHorizontal': 16,
        'display': 'flex',
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var6.optionButton = var3;
    var3 = 24;
    var9 = {
        'fontSize': 24,
        'lineHeight': 24,
        'marginRight': 12,
        'paddingTop': 5
    };
    var6.optionTextEmoji = var9;
    var9 = {
        'height': 24,
        'width': 24,
        'marginRight': 12
    };
    var6.optionImageEmoji = var9;
    var9 = {};
    var9.flexShrink = var12;
    var6.optionText = var9;
    var9 = {
        'position': 'absolute',
        'top': 4294967290,
        'right': 4294967290,
        'width': 20,
        'height': 20,
        'backgroundColor': null,
        'borderRadius': 10,
        'display': 'flex',
        'alignItems': 'center',
        'justifyContent': 'center'
    };
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_BRAND;
    var9.backgroundColor = var12;
    var6.checkIcon = var9;
    var9 = {
        'position': 'absolute',
        'top': 4294967290,
        'right': 4294967290
    };
    var6.newBadgeWrapper = var9;
    var9 = {};
    var12 = 'bold';
    var9.fontWeight = var12;
    var6.newBadge = var9;
    var9 = {
        'position': 'absolute',
        'top': 4294967290,
        'right': 24,
        'paddingVertical': 2,
        'paddingHorizontal': 6,
        'backgroundColor': null,
        'borderRadius': 10,
        'display': 'flex',
        'alignItems': 'center',
        'justifyContent': 'center'
    };
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_BRAND;
    var9.backgroundColor = var10;
    var6.roleCount = var9;
    var6 = var7.bind(var8)(var6);
    var _closure1_slot11 = var6;
    var6 = {};
    var7 = 'function GuildOnboardingPromptOptionButtonTsx1(){const{selected,withTiming,Easing,useReducedMotion,withSequence,withSpring}=this.__closure;const rawOpacity=selected?1:0;const opacity=withTiming(rawOpacity,{duration:150,easing:Easing.out(Easing.ease)});const rawScale=selected?1:0.7;const scale=useReducedMotion?rawScale:withSequence(withSpring(rawScale*1.2,{stiffness:80,damping:6,mass:0.3}),withSpring(rawScale,{stiffness:80,damping:6,mass:0.3}));return{opacity:opacity,transform:[{scale:scale}]};}';
    var6.code = var7;
    var _closure1_slot12 = var6;
    var6 = {};
    var7 = 'function GuildOnboardingPromptOptionButtonTsx2(){const{showMemberCount,withDelay,withTiming,Easing,useReducedMotion}=this.__closure;const rawOpacity=showMemberCount?1:0;const opacity=withDelay(showMemberCount?400:0,withTiming(rawOpacity,{duration:150,easing:Easing.out(Easing.ease)}));const rawTranslate=showMemberCount?0:16;const translateX=useReducedMotion?rawTranslate:withDelay(showMemberCount?400:0,withTiming(rawTranslate,{duration:200,easing:Easing.out(Easing.ease)}));return{opacity:opacity,transform:[{translateX:translateX}]};}';
    var6.code = var7;
    var _closure1_slot13 = var6;
    var6 = {};
    var7 = 'function GuildOnboardingPromptOptionButtonTsx3(){const{isNew,brandColor,defaultColor,isDarkTheme,withSequence,withTiming,Easing,withDelay}=this.__closure;const rawBorderColor=isNew?brandColor+"FF":""+defaultColor+(isDarkTheme?\'87\':\'3D\');const borderColor=withSequence(withTiming(rawBorderColor,{duration:1,easing:Easing.in(Easing.ease)}),withDelay(500,withTiming(""+defaultColor+(isDarkTheme?\'87\':\'3D\'),{duration:300,easing:Easing.out(Easing.ease)})));return{borderColor:borderColor};}';
    var6.code = var7;
    var _closure1_slot14 = var6;
    var6 = {};
    var7 = 'function GuildOnboardingPromptOptionButtonTsx4(){const{useReducedMotion,scale}=this.__closure;return useReducedMotion?{}:{transform:[{scale:scale.get()}]};}';
    var6.code = var7;
    var _closure1_slot15 = var6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_onboarding/native/GuildOnboardingPromptOptionButton.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun78098: for (var _fun78098_ip = 0;;) switch (_fun78098_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.guildId;
                var7 = var0.option;
                var _closure2_slot0 = var7;
                var8 = var0.selected;
                var _closure2_slot1 = var8;
                var2 = var0.onSelect;
                var _closure2_slot2 = var2;
                var2 = var0.suppressMemberCount;
                var _closure2_slot3 = var2;
                var5 = var0.canBeNew;
                var3 = undefined;
                var _closure2_slot7 = var3;
                var _closure2_slot8 = var3;
                var _closure2_slot9 = var3;
                var _closure2_slot10 = var3;
                var _closure2_slot11 = var3;
                var _closure2_slot12 = var3;
                var _closure2_slot13 = var3;
                var0 = _closure1_slot11;
                var9 = var0.bind(var3)();
                var15 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 9;
                var2 = var4[var0];
                var12 = var15.bind(var3)(var2);
                var11 = var12.useStateFromStores;
                var2 = _closure1_slot7;
                var10 = new Array(1);
                var10[0] = var2;
                var2 = function() { // Environment: var16
                    _fun78099: for (var _fun78099_ip = 0;;) switch (_fun78099_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            var5 = null;
                            var1 = var5 == var0;
                            var0 = undefined;
                            if (var1) {
                                _fun78099_ip = 42;
                                continue _fun78099
                            }
                        case 18:
                            var1 = _closure2_slot0;
                            var1 = var1.emoji;
                            var2 = var5 == var1;
                            var0 = undefined;
                            if (var2) {
                                _fun78099_ip = 42;
                                continue _fun78099
                            }
                        case 37:
                            var0 = var1.id;
                        case 42:
                            var1 = var5 != var0;
                            var0 = null;
                            if (!var1) {
                                _fun78099_ip = 106;
                                continue _fun78099
                            }
                        case 51:
                            var3 = _closure1_slot7;
                            var2 = var3.getUsableCustomEmojiById;
                            var1 = _closure2_slot0;
                            var7 = var5 == var1;
                            var1 = undefined;
                            if (var7) {
                                _fun78099_ip = 101;
                                continue _fun78099
                            }
                        case 77:
                            var4 = _closure2_slot0;
                            var4 = var4.emoji;
                            var5 = var5 == var4;
                            var1 = undefined;
                            if (var5) {
                                _fun78099_ip = 101;
                                continue _fun78099
                            }
                        case 96:
                            var1 = var4.id;
                        case 101:
                            var0 = var2.bind(var3)(var1);
                        case 106:
                            return var0;
                    }
                };
                var29 = var11.bind(var12)(var10, var2);
                var0 = var4[var0];
                var11 = var15.bind(var3)(var0);
                var10 = var11.useStateFromStores;
                var0 = _closure1_slot6;
                var2 = new Array(1);
                var2[0] = var0;
                var0 = function() { // Environment: var16
                    var0 = _closure1_slot6;
                    var0 = var0.useReducedMotion;
                    return var0;
                };
                var21 = var10.bind(var11)(var2, var0);
                var _closure2_slot4 = var21;
                var0 = 10;
                var0 = var4[var0];
                var11 = var15.bind(var3)(var0);
                var10 = var11.isThemeDark;
                var2 = _closure1_slot1;
                var0 = 11;
                var0 = var4[var0];
                var0 = var2.bind(var3)(var0);
                var0 = var0.bind(var3)();
                var24 = var10.bind(var11)(var0);
                var _closure2_slot5 = var24;
                var10 = 12;
                var0 = var4[var10];
                var12 = var15.bind(var3)(var0);
                var11 = var12.useAnimatedStyle;
                var0 = function() {
                    _fun78101: for (var _fun78101_ip = 0;;) switch (_fun78101_ip) {
                        case 0:
                            var0 = _closure2_slot1;
                            var6 = 0;
                            if (!var0) {
                                _fun78101_ip = 15;
                                continue _fun78101
                            }
                        case 12:
                            var6 = 1;
                        case 15:
                            var11 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var0 = 13;
                            var0 = var7[var0];
                            var8 = undefined;
                            var5 = var11.bind(var8)(var0);
                            var2 = var5.withTiming;
                            var0 = {};
                            var3 = 150;
                            var0.duration = var3;
                            var3 = 12;
                            var9 = var7[var3];
                            var9 = var11.bind(var8)(var9);
                            var10 = var9.Easing;
                            var9 = var10.out;
                            var7 = var7[var3];
                            var7 = var11.bind(var8)(var7);
                            var7 = var7.Easing;
                            var7 = var7.ease;
                            var7 = var9.bind(var10)(var7);
                            var0.easing = var7;
                            var2 = var2.bind(var5)(var6, var0);
                            var0 = _closure2_slot1;
                            var9 = 0.7;
                            if (!var0) {
                                _fun78101_ip = 135;
                                continue _fun78101
                            }
                        case 132:
                            var9 = 1;
                        case 135:
                            var0 = {};
                            var0.opacity = var2;
                            var2 = {};
                            var5 = _closure2_slot4;
                            var1 = var9;
                            if (var5) {
                                _fun78101_ip = 267;
                                continue _fun78101
                            }
                        case 153:
                            var7 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var3 = var10[var3];
                            var6 = var7.bind(var8)(var3);
                            var5 = var6.withSequence;
                            var3 = 14;
                            var4 = var10[var3];
                            var13 = var7.bind(var8)(var4);
                            var12 = var13.withSpring;
                            var4 = 1.2;
                            var11 = var4 * var9;
                            var4 = {
                                'stiffness': 80,
                                'damping': 6,
                                'mass': 0.3
                            };
                            var4 = var12.bind(var13)(var11, var4);
                            var3 = var10[var3];
                            var8 = var7.bind(var8)(var3);
                            var7 = var8.withSpring;
                            var3 = {
                                'stiffness': 80,
                                'damping': 6,
                                'mass': 0.3
                            };
                            var3 = var7.bind(var8)(var9, var3);
                            var1 = var5.bind(var6)(var4, var3);
                        case 267:
                            var2.scale = var1;
                            var1 = new Array(1);
                            var1[0] = var2;
                            var0.transform = var1;
                            return var0;
                    }
                };
                var13 = {};
                var13.selected = var8;
                var22 = 13;
                var14 = var4[var22];
                var14 = var15.bind(var3)(var14);
                var14 = var14.withTiming;
                var13.withTiming = var14;
                var14 = var4[var10];
                var14 = var15.bind(var3)(var14);
                var14 = var14.Easing;
                var13.Easing = var14;
                var13.useReducedMotion = var21;
                var14 = var4[var10];
                var14 = var15.bind(var3)(var14);
                var14 = var14.withSequence;
                var13.withSequence = var14;
                var14 = 14;
                var14 = var4[var14];
                var14 = var15.bind(var3)(var14);
                var14 = var14.withSpring;
                var13.withSpring = var14;
                var0.__closure = var13;
                var13 = 8281627194581.0;
                var0.__workletHash = var13;
                var13 = _closure1_slot12;
                var0.__initData = var13;
                var14 = var11.bind(var12)(var0);
                var0 = 15;
                var0 = var4[var0];
                var0 = var2.bind(var3)(var0);
                var0 = var0.bind(var3)(var1);
                var _closure2_slot6 = var0;
                var11 = null;
                var0 = var11 == var0;
                var12 = 0;
                var23 = 0;
                if (var0) {
                    _fun78098_ip = 504;
                    continue _fun78098
                }
            case 427:
                var0 = var7.roleIds;
                var0 = var11 == var0;
                var23 = 0;
                if (var0) {
                    _fun78098_ip = 504;
                    continue _fun78098
                }
            case 442:
                var0 = global;
                var2 = var0.Math;
                var1 = var2.max;
                var13 = var7.roleIds;
                var4 = var13.map;
                var0 = function(arg0) { // Environment: var16
                    var1 = _closure2_slot6;
                    var0 = arg0;
                    var0 = var1[var0];
                    return var0;
                };
                var32 = var4.bind(var13)(var0);
                var0 = new Array(0);
                var33 = var0;
                var31 = 0;
                var4 = arraySpread(var33, var32, var31);
                var33 = var1;
                var32 = var0;
                var31 = var2;
                var23 = apply(var33, var32, var31);
            case 504:
                var13 = _closure1_slot4;
                var1 = var13.useState;
                var0 = false;
                var2 = var1.bind(var13)(var0);
                var1 = _closure1_slot3;
                var0 = 2;
                var0 = var1.bind(var3)(var2, var0);
                var18 = var0[var12];
                _closure2_slot7 = var18;
                var2 = 1;
                var0 = var0[var2];
                _closure2_slot8 = var0;
                var0 = var13.useRef;
                var0 = var0.bind(var13)(var11);
                _closure2_slot9 = var0;
                var4 = var13.useEffect;
                var1 = new Array(1);
                var1[0] = var18;
                var0 = function() { // Environment: var16
                    _fun78103: for (var _fun78103_ip = 0;;) switch (_fun78103_ip) {
                        case 0:
                            var2 = _closure2_slot7;
                            if (var2) {
                                _fun78103_ip = 16;
                                continue _fun78103
                            }
                        case 12:
                            var2 = undefined;
                            return var2;
                        case 16:
                            var2 = _closure2_slot9;
                            var1 = global;
                            var5 = var1.setTimeout;
                            var4 = undefined;
                            var3 = function() { // Environment: var0
                                var3 = _closure2_slot8;
                                var0 = undefined;
                                var2 = false;
                                var2 = var3.bind(var0)(var2);
                                var2 = _closure2_slot9;
                                var1 = null;
                                var2.current = var1;
                                return var0;
                            };
                            var1 = 3000;
                            var1 = var5.bind(var4)(var3, var1);
                            var2.current = var1;
                            var0 = function() { // Environment: var0
                                _fun78105: for (var _fun78105_ip = 0;;) switch (_fun78105_ip) {
                                    case 0:
                                        var1 = _closure2_slot9;
                                        var2 = var1.current;
                                        var1 = null;
                                        if (!(var1 != var2)) {
                                            _fun78105_ip = 42;
                                            continue _fun78105
                                        }
                                    case 18:
                                        var1 = global;
                                        var2 = var1.clearTimeout;
                                        var0 = _closure2_slot9;
                                        var1 = var0.current;
                                        var0 = undefined;
                                        var0 = var2.bind(var0)(var1);
                                    case 42:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            return var0;
                    }
                };
                var0 = var4.bind(var13)(var0, var1);
                var1 = _closure1_slot0;
                var0 = _closure1_slot2;
                var4 = var0[var10];
                var15 = var1.bind(var3)(var4);
                var13 = var15.useAnimatedStyle;
                var4 = function() {
                    _fun78106: for (var _fun78106_ip = 0;;) switch (_fun78106_ip) {
                        case 0:
                            var0 = _closure2_slot7;
                            var10 = 0;
                            if (!var0) {
                                _fun78106_ip = 15;
                                continue _fun78106
                            }
                        case 12:
                            var10 = 1;
                        case 15:
                            var1 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var15 = 12;
                            var0 = var0[var15];
                            var14 = undefined;
                            var4 = var1.bind(var14)(var0);
                            var2 = var4.withDelay;
                            var0 = _closure2_slot7;
                            var1 = 0;
                            if (!var0) {
                                _fun78106_ip = 61;
                                continue _fun78106
                            }
                        case 55:
                            var1 = 400;
                        case 61:
                            var16 = _closure1_slot0;
                            var11 = _closure1_slot2;
                            var3 = 13;
                            var0 = var11[var3];
                            var9 = var16.bind(var14)(var0);
                            var5 = var9.withTiming;
                            var0 = {};
                            var12 = 150;
                            var0.duration = var12;
                            var12 = var11[var15];
                            var12 = var16.bind(var14)(var12);
                            var13 = var12.Easing;
                            var12 = var13.out;
                            var11 = var11[var15];
                            var11 = var16.bind(var14)(var11);
                            var11 = var11.Easing;
                            var11 = var11.ease;
                            var11 = var12.bind(var13)(var11);
                            var0.easing = var11;
                            var0 = var5.bind(var9)(var10, var0);
                            var1 = var2.bind(var4)(var1, var0);
                            var0 = _closure2_slot7;
                            var9 = 16;
                            if (!var0) {
                                _fun78106_ip = 171;
                                continue _fun78106
                            }
                        case 169:
                            var9 = 0;
                        case 171:
                            var0 = {};
                            var0.opacity = var1;
                            var2 = {};
                            var4 = _closure2_slot4;
                            var1 = var9;
                            if (var4) {
                                _fun78106_ip = 325;
                                continue _fun78106
                            }
                        case 192:
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var4 = var4[var15];
                            var5 = var5.bind(var14)(var4);
                            var4 = var5.withDelay;
                            var8 = _closure2_slot7;
                            var6 = 0;
                            if (!var8) {
                                _fun78106_ip = 230;
                                continue _fun78106
                            }
                        case 224:
                            var6 = 400;
                        case 230:
                            var13 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var3 = var10[var3];
                            var8 = var13.bind(var14)(var3);
                            var7 = var8.withTiming;
                            var3 = {};
                            var11 = 200;
                            var3.duration = var11;
                            var11 = var10[var15];
                            var11 = var13.bind(var14)(var11);
                            var12 = var11.Easing;
                            var11 = var12.out;
                            var10 = var10[var15];
                            var10 = var13.bind(var14)(var10);
                            var10 = var10.Easing;
                            var10 = var10.ease;
                            var10 = var11.bind(var12)(var10);
                            var3.easing = var10;
                            var3 = var7.bind(var8)(var9, var3);
                            var1 = var4.bind(var5)(var6, var3);
                        case 325:
                            var2.translateX = var1;
                            var1 = new Array(1);
                            var1[0] = var2;
                            var0.transform = var1;
                            return var0;
                    }
                };
                var17 = {};
                var17.showMemberCount = var18;
                var18 = var0[var10];
                var18 = var1.bind(var3)(var18);
                var18 = var18.withDelay;
                var17.withDelay = var18;
                var18 = var0[var22];
                var18 = var1.bind(var3)(var18);
                var18 = var18.withTiming;
                var17.withTiming = var18;
                var18 = var0[var10];
                var18 = var1.bind(var3)(var18);
                var18 = var18.Easing;
                var17.Easing = var18;
                var17.useReducedMotion = var21;
                var4.__closure = var17;
                var17 = 9518487706997.0;
                var4.__workletHash = var17;
                var17 = _closure1_slot13;
                var4.__initData = var17;
                var19 = var13.bind(var15)(var4);
                var0 = var0[var10];
                var1 = var1.bind(var3)(var0);
                var0 = var1.useSharedValue;
                var20 = var0.bind(var1)(var2);
                _closure2_slot10 = var20;
                var27 = var5;
                if (!var5) {
                    _fun78098_ip = 767;
                    continue _fun78098
                }
            case 761:
                var27 = var7.isUnseen;
            case 767:
                _closure2_slot11 = var27;
                var4 = _closure1_slot0;
                var0 = _closure1_slot2;
                var2 = 16;
                var1 = var0[var2];
                var18 = var4.bind(var3)(var1);
                var15 = var18.useToken;
                var1 = _closure1_slot1;
                var17 = 8;
                var13 = var0[var17];
                var13 = var1.bind(var3)(var13);
                var13 = var13.colors;
                var13 = var13.BORDER_SUBTLE;
                var25 = var15.bind(var18)(var13);
                _closure2_slot12 = var25;
                var2 = var0[var2];
                var15 = var4.bind(var3)(var2);
                var13 = var15.useToken;
                var2 = var0[var17];
                var2 = var1.bind(var3)(var2);
                var2 = var2.unsafe_rawColors;
                var2 = var2.BRAND_500;
                var26 = var13.bind(var15)(var2);
                _closure2_slot13 = var26;
                var2 = var0[var10];
                var15 = var4.bind(var3)(var2);
                var13 = var15.useAnimatedStyle;
                var2 = function() {
                    _fun78107: for (var _fun78107_ip = 0;;) switch (_fun78107_ip) {
                        case 0:
                            var0 = _closure2_slot11;
                            if (var0) {
                                _fun78107_ip = 58;
                                continue _fun78107
                            }
                        case 10:
                            var4 = _closure2_slot12;
                            var0 = _closure2_slot5;
                            var3 = '3D';
                            if (!var0) {
                                _fun78107_ip = 33;
                                continue _fun78107
                            }
                        case 27:
                            var3 = '87';
                        case 33:
                            var0 = global;
                            var0 = var0.HermesInternal;
                            var2 = var0.concat;
                            var0 = '';
                            var11 = var2.bind(var0)(var4, var3);
                            _fun78107_ip = 91;
                            continue _fun78107;
                        case 58:
                            var4 = _closure2_slot13;
                            var0 = global;
                            var0 = var0.HermesInternal;
                            var3 = var0.concat;
                            var2 = '';
                            var0 = 'FF';
                            var11 = var3.bind(var2)(var4, var0);
                        case 91:
                            var0 = {};
                            var8 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var15 = 12;
                            var2 = var9[var15];
                            var14 = undefined;
                            var4 = var8.bind(var14)(var2);
                            var3 = var4.withSequence;
                            var5 = 13;
                            var2 = var9[var5];
                            var7 = var8.bind(var14)(var2);
                            var6 = var7.withTiming;
                            var2 = {};
                            var12 = 1;
                            var2.duration = var12;
                            var12 = var9[var15];
                            var12 = var8.bind(var14)(var12);
                            var16 = var12.Easing;
                            var13 = var16.in;
                            var12 = var9[var15];
                            var12 = var8.bind(var14)(var12);
                            var12 = var12.Easing;
                            var12 = var12.ease;
                            var12 = var13.bind(var16)(var12);
                            var2.easing = var12;
                            var2 = var6.bind(var7)(var11, var2);
                            var6 = var9[var15];
                            var7 = var8.bind(var14)(var6);
                            var6 = var7.withDelay;
                            var5 = var9[var5];
                            var9 = var8.bind(var14)(var5);
                            var8 = var9.withTiming;
                            var12 = _closure2_slot12;
                            var1 = _closure2_slot5;
                            var11 = '3D';
                            if (!var1) {
                                _fun78107_ip = 260;
                                continue _fun78107
                            }
                        case 254:
                            var11 = '87';
                        case 260:
                            var1 = global;
                            var1 = var1.HermesInternal;
                            var5 = var1.concat;
                            var1 = '';
                            var5 = var5.bind(var1)(var12, var11);
                            var1 = {};
                            var11 = 300;
                            var1.duration = var11;
                            var13 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var11 = var10[var15];
                            var11 = var13.bind(var14)(var11);
                            var12 = var11.Easing;
                            var11 = var12.out;
                            var10 = var10[var15];
                            var10 = var13.bind(var14)(var10);
                            var10 = var10.Easing;
                            var10 = var10.ease;
                            var10 = var11.bind(var12)(var10);
                            var1.easing = var10;
                            var5 = var8.bind(var9)(var5, var1);
                            var1 = 500;
                            var1 = var6.bind(var7)(var1, var5);
                            var1 = var3.bind(var4)(var2, var1);
                            var0.borderColor = var1;
                            return var0;
                    }
                };
                var18 = {};
                var18.isNew = var27;
                var18.brandColor = var26;
                var18.defaultColor = var25;
                var18.isDarkTheme = var24;
                var24 = var0[var10];
                var24 = var4.bind(var3)(var24);
                var24 = var24.withSequence;
                var18.withSequence = var24;
                var22 = var0[var22];
                var22 = var4.bind(var3)(var22);
                var22 = var22.withTiming;
                var18.withTiming = var22;
                var22 = var0[var10];
                var22 = var4.bind(var3)(var22);
                var22 = var22.Easing;
                var18.Easing = var22;
                var22 = var0[var10];
                var22 = var4.bind(var3)(var22);
                var22 = var22.withDelay;
                var18.withDelay = var22;
                var2.__closure = var18;
                var18 = 12480765386895.0;
                var2.__workletHash = var18;
                var18 = _closure1_slot14;
                var2.__initData = var18;
                var13 = var13.bind(var15)(var2);
                var2 = var0[var10];
                var15 = var4.bind(var3)(var2);
                var4 = var15.useAnimatedStyle;
                var2 = function() {
                    _fun78108: for (var _fun78108_ip = 0;;) switch (_fun78108_ip) {
                        case 0:
                            var0 = _closure2_slot4;
                            if (var0) {
                                _fun78108_ip = 46;
                                continue _fun78108
                            }
                        case 10:
                            var0 = {};
                            var2 = {};
                            var3 = _closure2_slot10;
                            var1 = var3.get;
                            var1 = var1.bind(var3)();
                            var2.scale = var1;
                            var1 = new Array(1);
                            var1[0] = var2;
                            var0.transform = var1;
                            _fun78108_ip = 48;
                            continue _fun78108;
                        case 46:
                            var0 = {};
                        case 48:
                            return var0;
                    }
                };
                var18 = {};
                var18.useReducedMotion = var21;
                var18.scale = var20;
                var2.__closure = var18;
                var18 = 319662489785.0;
                var2.__workletHash = var18;
                var18 = _closure1_slot15;
                var2.__initData = var18;
                var15 = var4.bind(var15)(var2);
                var2 = _closure1_slot10;
                var0 = var0[var10];
                var0 = var1.bind(var3)(var0);
                var1 = var0.View;
                var0 = {};
                var4 = new Array(4);
                var4[0] = var15;
                var4[1] = var13;
                var13 = var9.container;
                var4[2] = var13;
                var13 = var8;
                if (!var13) {
                    _fun78098_ip = 1160;
                    continue _fun78098
                }
            case 1154:
                var13 = var9.selected;
            case 1160:
                var4[3] = var13;
                var0.style = var4;
                var15 = _closure1_slot10;
                var13 = _closure1_slot0;
                var18 = _closure1_slot2;
                var4 = 17;
                var4 = var18[var4];
                var4 = var13.bind(var3)(var4);
                var13 = var4.PressableOpacity;
                var4 = {};
                var18 = 0.6;
                var4.activeOpacity = var18;
                var20 = var9.optionButton;
                var18 = new Array(1);
                var18[0] = var20;
                var4.style = var18;
                var18 = function() {
                    _fun78109: for (var _fun78109_ip = 0;;) switch (_fun78109_ip) {
                        case 0:
                            var3 = _closure2_slot2;
                            var0 = _closure2_slot1;
                            var2 = !var0;
                            var0 = undefined;
                            var2 = var3.bind(var0)(var2);
                            var2 = _closure2_slot3;
                            if (var2) {
                                _fun78109_ip = 44;
                                continue _fun78109
                            }
                        case 28:
                            var2 = _closure2_slot8;
                            var1 = _closure2_slot1;
                            var1 = !var1;
                            var1 = var2.bind(var0)(var1);
                        case 44:
                            return var0;
                    }
                };
                var4.onPress = var18;
                var18 = function() {
                    var3 = _closure2_slot10;
                    var2 = var3.set;
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var1 = 12;
                    var4 = var13[var1];
                    var0 = undefined;
                    var6 = var12.bind(var0)(var4);
                    var5 = var6.withSequence;
                    var7 = 13;
                    var4 = var13[var7];
                    var10 = var12.bind(var0)(var4);
                    var9 = var10.withTiming;
                    var8 = {};
                    var4 = 0;
                    var8.duration = var4;
                    var4 = 1;
                    var4 = var9.bind(var10)(var4, var8);
                    var7 = var13[var7];
                    var9 = var12.bind(var0)(var7);
                    var8 = var9.withTiming;
                    var7 = {};
                    var10 = 200;
                    var7.duration = var10;
                    var10 = var13[var1];
                    var10 = var12.bind(var0)(var10);
                    var11 = var10.Easing;
                    var10 = var11.out;
                    var1 = var13[var1];
                    var1 = var12.bind(var0)(var1);
                    var1 = var1.Easing;
                    var1 = var1.ease;
                    var1 = var10.bind(var11)(var1);
                    var7.easing = var1;
                    var1 = 1.02;
                    var1 = var8.bind(var9)(var1, var7);
                    var1 = var5.bind(var6)(var4, var1);
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var4.onPressIn = var18;
                var16 = function() {
                    var3 = _closure2_slot10;
                    var2 = var3.set;
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var0 = 13;
                    var1 = var10[var0];
                    var0 = undefined;
                    var6 = var9.bind(var0)(var1);
                    var5 = var6.withTiming;
                    var4 = {};
                    var1 = 100;
                    var4.duration = var1;
                    var1 = 12;
                    var7 = var10[var1];
                    var7 = var9.bind(var0)(var7);
                    var8 = var7.Easing;
                    var7 = var8.out;
                    var1 = var10[var1];
                    var1 = var9.bind(var0)(var1);
                    var1 = var1.Easing;
                    var1 = var1.ease;
                    var1 = var7.bind(var8)(var1);
                    var4.easing = var1;
                    var1 = 1;
                    var1 = var5.bind(var6)(var1, var4);
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var4.onPressOut = var16;
                var18 = var11 == var7;
                var16 = undefined;
                if (var18) {
                    _fun78098_ip = 1297;
                    continue _fun78098
                }
            case 1277:
                var18 = var7.emoji;
                var20 = var11 == var18;
                var16 = undefined;
                if (var20) {
                    _fun78098_ip = 1297;
                    continue _fun78098
                }
            case 1292:
                var16 = var18.id;
            case 1297:
                var16 = var11 != var16;
                if (var16) {
                    _fun78098_ip = 1337;
                    continue _fun78098
                }
            case 1304:
                var20 = var11 == var7;
                var18 = undefined;
                if (var20) {
                    _fun78098_ip = 1333;
                    continue _fun78098
                }
            case 1313:
                var20 = var7.emoji;
                var21 = var11 == var20;
                var18 = undefined;
                if (var21) {
                    _fun78098_ip = 1333;
                    continue _fun78098
                }
            case 1328:
                var18 = var20.name;
            case 1333:
                var16 = var11 != var18;
            case 1337:
                if (!var16) {
                    _fun78098_ip = 1553;
                    continue _fun78098
                }
            case 1343:
                var21 = _closure1_slot9;
                var20 = _closure1_slot5;
                var18 = {};
                var22 = {
                    'display': 'flex',
                    'alignItems': 'center'
                };
                var18.style = var22;
                var24 = _closure1_slot1;
                var25 = _closure1_slot2;
                var22 = 18;
                var22 = var25[var22];
                var24 = var24.bind(var3)(var22);
                var22 = {};
                var25 = var9.optionTextEmoji;
                var22.textEmojiStyle = var25;
                var25 = var9.optionImageEmoji;
                var22.fastImageStyle = var25;
                var26 = var11 != var29;
                var25 = undefined;
                if (!var26) {
                    _fun78098_ip = 1485;
                    continue _fun78098
                }
            case 1424:
                var27 = _closure1_slot1;
                var28 = _closure1_slot2;
                var26 = 19;
                var26 = var28[var26];
                var28 = var27.bind(var3)(var26);
                var27 = var28.getEmojiURL;
                var26 = {};
                var30 = var29.id;
                var26.id = var30;
                var29 = var29.animated;
                var26.animated = var29;
                var29 = _closure1_slot8;
                var26.size = var29;
                var25 = var27.bind(var28)(var26);
            case 1485:
                var22.src = var25;
                var25 = var11 == var7;
                var26 = undefined;
                if (var25) {
                    _fun78098_ip = 1519;
                    continue _fun78098
                }
            case 1499:
                var25 = var7.emoji;
                var27 = var11 == var25;
                var26 = undefined;
                if (var27) {
                    _fun78098_ip = 1519;
                    continue _fun78098
                }
            case 1514:
                var26 = var25.name;
            case 1519:
                var27 = var11 != var26;
                var25 = '';
                if (!var27) {
                    _fun78098_ip = 1533;
                    continue _fun78098
                }
            case 1530:
                var25 = var26;
            case 1533:
                var22.name = var25;
                var22 = var21.bind(var3)(var24, var22);
                var18.children = var22;
                var16 = var21.bind(var3)(var20, var18);
            case 1553:
                var18 = new Array(2);
                var18[0] = var16;
                var22 = _closure1_slot10;
                var21 = _closure1_slot5;
                var20 = {};
                var16 = var9.optionText;
                var20.style = var16;
                var26 = _closure1_slot9;
                var25 = _closure1_slot0;
                var24 = _closure1_slot2;
                var16 = 20;
                var24 = var24[var16];
                var24 = var25.bind(var3)(var24);
                var25 = var24.Text;
                var24 = {
                    'variant': 'text-md/semibold',
                    'color': 'mobile-text-heading-primary'
                };
                var27 = var7.title;
                var24.children = var27;
                var25 = var26.bind(var3)(var25, var24);
                var24 = new Array(2);
                var24[0] = var25;
                var25 = var7.description;
                var25 = var11 != var25;
                if (!var25) {
                    _fun78098_ip = 1673;
                    continue _fun78098
                }
            case 1659:
                var26 = var7.description;
                var26 = var26.length;
                var25 = var26 > var12;
            case 1673:
                if (!var25) {
                    _fun78098_ip = 1731;
                    continue _fun78098
                }
            case 1676:
                var28 = _closure1_slot9;
                var27 = _closure1_slot0;
                var26 = _closure1_slot2;
                var26 = var26[var16];
                var26 = var27.bind(var3)(var26);
                var27 = var26.Text;
                var26 = {
                    'variant': 'text-xs/medium',
                    'color': 'text-default'
                };
                var29 = var7.description;
                var26.children = var29;
                var25 = var28.bind(var3)(var27, var26);
            case 1731:
                var24[1] = var25;
                var20.children = var24;
                var20 = var22.bind(var3)(var21, var20);
                var18[1] = var20;
                var4.children = var18;
                var13 = var15.bind(var3)(var13, var4);
                var4 = new Array(4);
                var4[0] = var13;
                var12 = var23 > var12;
                var11 = null;
                if (!var12) {
                    _fun78098_ip = 1938;
                    continue _fun78098
                }
            case 1779:
                var15 = _closure1_slot9;
                var13 = _closure1_slot1;
                var24 = _closure1_slot2;
                var12 = var24[var10];
                var12 = var13.bind(var3)(var12);
                var13 = var12.View;
                var12 = {};
                var20 = var9.roleCount;
                var18 = new Array(2);
                var18[0] = var20;
                var18[1] = var19;
                var12.style = var18;
                var20 = _closure1_slot0;
                var16 = var24[var16];
                var16 = var20.bind(var3)(var16);
                var18 = var16.Text;
                var16 = {
                    'variant': 'text-xs/semibold',
                    'color': 'always-white'
                };
                var19 = 21;
                var21 = var24[var19];
                var21 = var20.bind(var3)(var21);
                var22 = var21.intl;
                var21 = var22.format;
                var19 = var24[var19];
                var19 = var20.bind(var3)(var19);
                var19 = var19.t;
                var20 = var19.EgKsZA;
                var19 = {};
                var19.memberCount = var23;
                var19 = var21.bind(var22)(var20, var19);
                var16.children = var19;
                var16 = var15.bind(var3)(var18, var16);
                var12.children = var16;
                var11 = var15.bind(var3)(var13, var12);
            case 1938:
                var4[1] = var11;
                var12 = _closure1_slot9;
                var16 = _closure1_slot1;
                var15 = _closure1_slot2;
                var10 = var15[var10];
                var10 = var16.bind(var3)(var10);
                var11 = var10.View;
                var10 = {};
                var18 = var9.checkIcon;
                var13 = new Array(2);
                var13[0] = var18;
                var13[1] = var14;
                var10.style = var13;
                var14 = _closure1_slot0;
                var13 = 22;
                var13 = var15[var13];
                var13 = var14.bind(var3)(var13);
                var14 = var13.CheckmarkSmallIcon;
                var13 = {};
                var18 = 'xs';
                var13.size = var18;
                var15 = var15[var17];
                var15 = var16.bind(var3)(var15);
                var15 = var15.colors;
                var15 = var15.WHITE;
                var13.color = var15;
                var13 = var12.bind(var3)(var14, var13);
                var10.children = var13;
                var10 = var12.bind(var3)(var11, var10);
                var4[2] = var10;
                if (!var5) {
                    _fun78098_ip = 2074;
                    continue _fun78098
                }
            case 2071:
                var5 = !var8;
            case 2074:
                if (!var5) {
                    _fun78098_ip = 2083;
                    continue _fun78098
                }
            case 2077:
                var5 = var7.isUnseen;
            case 2083:
                if (!var5) {
                    _fun78098_ip = 2224;
                    continue _fun78098
                }
            case 2089:
                var8 = _closure1_slot9;
                var13 = _closure1_slot0;
                var14 = _closure1_slot2;
                var10 = 23;
                var6 = var14[var10];
                var6 = var13.bind(var3)(var6);
                var7 = var6.TextBadge;
                var6 = {};
                var10 = var14[var10];
                var10 = var13.bind(var3)(var10);
                var10 = var10.BadgeColors;
                var10 = var10.BRAND;
                var6.color = var10;
                var10 = 21;
                var11 = var14[var10];
                var11 = var13.bind(var3)(var11);
                var12 = var11.intl;
                var11 = var12.string;
                var10 = var14[var10];
                var10 = var13.bind(var3)(var10);
                var10 = var10.t;
                var10 = var10.y2b7CA;
                var10 = var11.bind(var12)(var10);
                var6.text = var10;
                var10 = var9.newBadgeWrapper;
                var6.style = var10;
                var9 = var9.newBadge;
                var6.textStyle = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 2224:
                var4[3] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1298, 4740, 1624, 33, 1297, 671, 566, 3208, 3248, 3722, 4098, 4082, 9925, 3153, 4905, 5777, 1417, 3943, 1234, 4925, 8302, 2]);