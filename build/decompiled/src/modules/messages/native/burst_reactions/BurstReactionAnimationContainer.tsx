// modules/messages/native/burst_reactions/BurstReactionAnimationContainer.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var5;
    var0 = function() {
        _fun109685: for (var _fun109685_ip = 0;;) switch (_fun109685_ip) {
            case 0:
                var9 = function() {
                    var2 = _closure2_slot2;
                    var0 = undefined;
                    var1 = null;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var _closure2_slot6 = var9;
                var0 = function arg0() {
                    _fun109687: for (var _fun109687_ip = 0;;) switch (_fun109687_ip) {
                        case 0:
                            var1 = arg0;
                            var3 = _closure2_slot4;
                            var0 = undefined;
                            var2 = false;
                            var2 = var3.bind(var0)(var2);
                            var2 = null;
                            if (!(var2 != var1)) {
                                _fun109687_ip = 29;
                                continue _fun109687
                            }
                        case 25:
                            var1 = var1.bind(var0)();
                        case 29:
                            return var0;
                    }
                };
                var _closure2_slot7 = var0;
                var0 = _closure1_slot11;
                var4 = undefined;
                var0 = var0.bind(var4)();
                var _closure2_slot0 = var0;
                var2 = _closure1_slot4;
                var1 = var2.useState;
                var0 = null;
                var2 = var1.bind(var2)(var0);
                var1 = _closure1_slot3;
                var10 = 2;
                var2 = var1.bind(var4)(var2, var10);
                var7 = 0;
                var1 = var2[var7];
                var _closure2_slot1 = var1;
                var3 = 1;
                var2 = var2[var3];
                var _closure2_slot2 = var2;
                var11 = _closure1_slot4;
                var8 = var11.useState;
                var2 = false;
                var8 = var8.bind(var11)(var2);
                var2 = _closure1_slot3;
                var2 = var2.bind(var4)(var8, var10);
                var13 = var2[var7];
                var _closure2_slot3 = var13;
                var2 = var2[var3];
                var _closure2_slot4 = var2;
                var8 = _closure1_slot4;
                var7 = var8.useEffect;
                var3 = function() { // Environment: var5
                    var4 = function arg0() {
                        var0 = arg0;
                        var5 = var0.channelId;
                        var4 = var0.emoji;
                        var0 = var0.messageId;
                        var3 = _closure2_slot2;
                        var2 = {};
                        var2.channelId = var5;
                        var2.emoji = var4;
                        var2.messageId = var0;
                        var0 = undefined;
                        var2 = var3.bind(var0)(var2);
                        var2 = _closure2_slot4;
                        var1 = true;
                        var1 = var2.bind(var0)(var1);
                        var3 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var2 = 8;
                        var2 = var5[var2];
                        var3 = var3.bind(var0)(var2);
                        var2 = var3.triggerHapticFeedback;
                        var4 = _closure1_slot1;
                        var1 = 9;
                        var1 = var5[var1];
                        var1 = var4.bind(var0)(var1);
                        var1 = var1.IMPACT_HEAVY;
                        var1 = var2.bind(var3)(var1);
                        return var0;
                    };
                    var _closure3_slot0 = var4;
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 10;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.subscribe;
                    var1 = 'BURST_REACTION_EFFECT_SEND';
                    var1 = var2.bind(var3)(var1, var4);
                    var0 = function() { // Environment: var0
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var0 = 10;
                        var1 = var1[var0];
                        var0 = undefined;
                        var4 = var2.bind(var0)(var1);
                        var3 = var4.unsubscribe;
                        var2 = _closure3_slot0;
                        var1 = 'BURST_REACTION_EFFECT_SEND';
                        var1 = var3.bind(var4)(var1, var2);
                        return var0;
                    };
                    return var0;
                };
                var2 = new Array(0);
                var2 = var7.bind(var8)(var3, var2);
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var10 = 11;
                var2 = var12[var10];
                var7 = var11.bind(var4)(var2);
                var3 = var7.useAnimatedStyle;
                var2 = function() {
                    _fun109691: for (var _fun109691_ip = 0;;) switch (_fun109691_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = null;
                            if (!(var0 != var1)) {
                                _fun109691_ip = 188;
                                continue _fun109691
                            }
                        case 16:
                            var2 = _closure2_slot3;
                            var1 = {};
                            var10 = _closure1_slot0;
                            var11 = _closure1_slot2;
                            var3 = 12;
                            var3 = var11[var3];
                            var9 = undefined;
                            var5 = var10.bind(var9)(var3);
                            var4 = var5.withTiming;
                            var3 = {};
                            var6 = 300;
                            var3.duration = var6;
                            if (var2) {
                                _fun109691_ip = 170;
                                continue _fun109691
                            }
                        case 67:
                            var6 = function arg0() {
                                _fun109692: for (var _fun109692_ip = 0;;) switch (_fun109692_ip) {
                                    case 0:
                                        var0 = arg0;
                                        if (!var0) {
                                            _fun109692_ip = 52;
                                            continue _fun109692
                                        }
                                    case 6:
                                        var2 = _closure1_slot0;
                                        var1 = _closure1_slot2;
                                        var0 = 11;
                                        var0 = var1[var0];
                                        var1 = undefined;
                                        var3 = var2.bind(var1)(var0);
                                        var2 = var3.runOnJS;
                                        var0 = _closure2_slot6;
                                        var0 = var2.bind(var3)(var0);
                                        var0 = var0.bind(var1)();
                                    case 52:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var2 = {};
                            var8 = 11;
                            var8 = var11[var8];
                            var8 = var10.bind(var9)(var8);
                            var8 = var8.runOnJS;
                            var2.runOnJS = var8;
                            var7 = _closure2_slot6;
                            var2.handleComponentFinish = var7;
                            var6.__closure = var2;
                            var2 = 9326347209552.0;
                            var6.__workletHash = var2;
                            var0 = _closure1_slot13;
                            var6.__initData = var0;
                            var15 = 0;
                            var13 = 'respect-motion-settings';
                            var16 = var5;
                            var14 = var3;
                            var12 = var6;
                            var0 = var16[var4](var15, var14, var13, var12, var11);
                            var1.opacity = var0;
                            var0 = var1;
                            _fun109691_ip = 186;
                            continue _fun109691;
                        case 170:
                            var2 = 1;
                            var2 = var4.bind(var5)(var2, var3);
                            var1.opacity = var2;
                            var0 = var1;
                        case 186:
                            _fun109691_ip = 199;
                            continue _fun109691;
                        case 188:
                            var1 = {};
                            var2 = 0;
                            var1.opacity = var2;
                            var0 = var1;
                        case 199:
                            return var0;
                    }
                };
                var8 = {};
                var8.animationData = var1;
                var8.showAnimation = var13;
                var13 = 12;
                var13 = var12[var13];
                var13 = var11.bind(var4)(var13);
                var13 = var13.withTiming;
                var8.withTiming = var13;
                var10 = var12[var10];
                var10 = var11.bind(var4)(var10);
                var10 = var10.runOnJS;
                var8.runOnJS = var10;
                var8.handleComponentFinish = var9;
                var2.__closure = var8;
                var8 = 12044515783370.0;
                var2.__workletHash = var8;
                var8 = _closure1_slot12;
                var2.__initData = var8;
                var2 = var3.bind(var7)(var2);
                var _closure2_slot5 = var2;
                var1 = var0 == var1;
                if (var1) {
                    _fun109685_ip = 384;
                    continue _fun109685
                }
            case 300:
                var3 = _closure1_slot8;
                var2 = _closure1_slot1;
                var8 = _closure1_slot2;
                var1 = 13;
                var1 = var8[var1];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var7 = _closure1_slot0;
                var6 = 14;
                var6 = var8[var6];
                var6 = var7.bind(var4)(var6);
                var6 = var6.DismissibleContent;
                var7 = var6.SUPER_REACTIONS_MOBILE_FULLSCREEN_TAP_TO_DISMISS;
                var6 = new Array(1);
                var6[0] = var7;
                var1.contentTypes = var6;
                var5 = function arg0() {
                    _fun109693: for (var _fun109693_ip = 0;;) switch (_fun109693_ip) {
                        case 0:
                            var0 = arg0;
                            var12 = var0.visibleContent;
                            var0 = var0.markAsDismissed;
                            var _closure3_slot0 = var0;
                            var3 = _closure1_slot8;
                            var5 = _closure1_slot1;
                            var13 = _closure1_slot2;
                            var0 = 15;
                            var0 = var13[var0];
                            var2 = undefined;
                            var1 = var5.bind(var2)(var0);
                            var0 = {};
                            var15 = _closure2_slot0;
                            var4 = var15.fill;
                            var0.style = var4;
                            var6 = _closure1_slot8;
                            var4 = 11;
                            var4 = var13[var4];
                            var4 = var5.bind(var2)(var4);
                            var5 = var4.View;
                            var4 = {};
                            var8 = var15.fill;
                            var7 = new Array(2);
                            var7[0] = var8;
                            var8 = _closure2_slot5;
                            var7[1] = var8;
                            var4.style = var7;
                            var9 = _closure1_slot10;
                            var8 = _closure1_slot5;
                            var7 = {};
                            var11 = _closure1_slot0;
                            var10 = 7;
                            var10 = var13[var10];
                            var10 = var11.bind(var2)(var10);
                            var10 = var10.BACKDROP_OPACITY;
                            var7.activeOpacity = var10;
                            var10 = function() {
                                var2 = _closure2_slot7;
                                var0 = undefined;
                                var1 = function() { // Environment: var1
                                    var2 = _closure3_slot0;
                                    var0 = _closure1_slot7;
                                    var1 = var0.UNKNOWN;
                                    var0 = undefined;
                                    var0 = var2.bind(var0)(var1);
                                    return var0;
                                };
                                var1 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var7.onPress = var10;
                            var10 = var15.fill;
                            var7.style = var10;
                            var13 = _closure1_slot8;
                            var11 = _closure1_slot6;
                            var10 = {};
                            var14 = var15.background;
                            var10.style = var14;
                            var11 = var13.bind(var2)(var11, var10);
                            var10 = new Array(3);
                            var10[0] = var11;
                            var14 = _closure1_slot8;
                            var13 = _closure1_slot6;
                            var11 = {};
                            var15 = var15.fill;
                            var11.style = var15;
                            var17 = _closure2_slot3;
                            var15 = null;
                            if (!var17) {
                                _fun109693_ip = 333;
                                continue _fun109693
                            }
                        case 239:
                            var20 = _closure1_slot8;
                            var18 = _closure1_slot1;
                            var22 = _closure1_slot2;
                            var17 = 16;
                            var17 = var22[var17];
                            var18 = var18.bind(var2)(var17);
                            var17 = {
                                'isFullscreen': true,
                                'channelId': null,
                                'messageId': null,
                                'emoji': null,
                                'loop': false,
                                'withFadeOut': false
                            };
                            var22 = _closure2_slot1;
                            var23 = var22.channelId;
                            var17.channelId = var23;
                            var23 = var22.messageId;
                            var17.messageId = var23;
                            var22 = var22.emoji;
                            var17.emoji = var22;
                            var21 = function() {
                                var1 = _closure2_slot7;
                                var0 = undefined;
                                var1 = var1.bind(var0)();
                                return var0;
                            };
                            var17.onComplete = var21;
                            var15 = var20.bind(var2)(var18, var17);
                        case 333:
                            var11.children = var15;
                            var11 = var14.bind(var2)(var13, var11);
                            var10[1] = var11;
                            var13 = _closure1_slot0;
                            var14 = _closure1_slot2;
                            var11 = 14;
                            var11 = var14[var11];
                            var11 = var13.bind(var2)(var11);
                            var11 = var11.DismissibleContent;
                            var11 = var11.SUPER_REACTIONS_MOBILE_FULLSCREEN_TAP_TO_DISMISS;
                            var11 = var12 === var11;
                            if (!var11) {
                                _fun109693_ip = 559;
                                continue _fun109693
                            }
                        case 389:
                            var14 = _closure1_slot10;
                            var13 = _closure1_slot9;
                            var12 = {};
                            var18 = _closure1_slot8;
                            var23 = _closure1_slot0;
                            var24 = _closure1_slot2;
                            var15 = 17;
                            var15 = var24[var15];
                            var15 = var23.bind(var2)(var15);
                            var17 = var15.Text;
                            var15 = {};
                            var19 = _closure2_slot0;
                            var20 = var19.dismissTextContainer;
                            var15.style = var20;
                            var20 = 'text-sm/medium';
                            var15.variant = var20;
                            var20 = 18;
                            var21 = var24[var20];
                            var21 = var23.bind(var2)(var21);
                            var22 = var21.intl;
                            var21 = var22.string;
                            var20 = var24[var20];
                            var20 = var23.bind(var2)(var20);
                            var20 = var20.t;
                            var20 = var20.QpPMih;
                            var20 = var21.bind(var22)(var20);
                            var15.children = var20;
                            var17 = var18.bind(var2)(var17, var15);
                            var15 = new Array(2);
                            var15[0] = var17;
                            var18 = _closure1_slot8;
                            var17 = _closure1_slot6;
                            var16 = {};
                            var19 = var19.dismissTextBackground;
                            var16.style = var19;
                            var16 = var18.bind(var2)(var17, var16);
                            var15[1] = var16;
                            var12.children = var15;
                            var11 = var14.bind(var2)(var13, var12);
                        case 559:
                            var10[2] = var11;
                            var7.children = var10;
                            var7 = var9.bind(var2)(var8, var7);
                            var4.children = var7;
                            var4 = var6.bind(var2)(var5, var4);
                            var0.children = var4;
                            var0 = var3.bind(var2)(var1, var0);
                            return var0;
                    }
                };
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 384:
                return var0;
        }
    };
    var _closure1_slot14 = var0;
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
    var3 = var10.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var12 = 1;
    var6 = var5[var12];
    var3 = arg3;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.TouchableOpacity;
    var _closure1_slot5 = var6;
    var6 = var3.View;
    var _closure1_slot6 = var6;
    var11 = var3.StyleSheet;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ContentDismissActionType;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot8 = var6;
    var6 = var3.Fragment;
    var _closure1_slot9 = var6;
    var3 = var3.jsxs;
    var _closure1_slot10 = var3;
    var3 = 5;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var16 = var11.absoluteFillObject;
    var17 = var8;
    var9 = copyDataProperties(var17, var16);
    var9 = 6;
    var13 = var5[var9];
    var13 = var10.bind(var0)(var13);
    var13 = var13.colors;
    var14 = var13.BLACK;
    var13 = 'backgroundColor';
    var8[var13] = var14;
    var13 = 7;
    var13 = var5[var13];
    var13 = var4.bind(var0)(var13);
    var14 = var13.BACKDROP_OPACITY;
    var13 = 'opacity';
    var8[var13] = var14;
    var3.background = var8;
    var8 = {};
    var16 = var11.absoluteFillObject;
    var17 = var8;
    var11 = copyDataProperties(var17, var16);
    var11 = 'flex';
    var8[var11] = var12;
    var12 = 'center';
    var11 = 'alignItems';
    var8[var11] = var12;
    var11 = 'justifyContent';
    var8[var11] = var12;
    var3.fill = var8;
    var8 = {
        'position': 'absolute',
        'bottom': 48,
        'zIndex': 1
    };
    var3.dismissTextContainer = var8;
    var8 = {
        'backgroundColor': null,
        'borderRadius': null,
        'position': 'absolute',
        'bottom': 4294966696,
        'height': 700,
        'width': 700
    };
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_SURFACE_HIGHEST;
    var8.backgroundColor = var11;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.radii;
    var9 = var9.round;
    var8.borderRadius = var9;
    var3.dismissTextBackground = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot11 = var3;
    var3 = {};
    var6 = "function BurstReactionAnimationContainerTsx1(){const{animationData,showAnimation,withTiming,runOnJS,handleComponentFinish}=this.__closure;if(animationData==null){return{opacity:0};}if(!showAnimation){return{opacity:withTiming(0,{duration:300},'respect-motion-settings',function(finished){if(finished)runOnJS(handleComponentFinish)();})};}return{opacity:withTiming(1,{duration:300})};}";
    var3.code = var6;
    var _closure1_slot12 = var3;
    var3 = {};
    var6 = 'function BurstReactionAnimationContainerTsx2(finished){const{runOnJS,handleComponentFinish}=this.__closure;if(finished)runOnJS(handleComponentFinish)();}';
    var3.code = var6;
    var _closure1_slot13 = var3;
    var3 = 20;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/messages/native/burst_reactions/BurstReactionAnimationContainer.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        var3 = _closure1_slot8;
        var1 = _closure1_slot0;
        var7 = _closure1_slot2;
        var0 = 19;
        var0 = var7[var0];
        var2 = undefined;
        var0 = var1.bind(var2)(var0);
        var1 = var0.ThemeContextProvider;
        var0 = {};
        var6 = _closure1_slot1;
        var5 = 6;
        var5 = var7[var5];
        var5 = var6.bind(var2)(var5);
        var5 = var5.themes;
        var5 = var5.DARKER;
        var0.theme = var5;
        var6 = _closure1_slot8;
        var5 = _closure1_slot14;
        var4 = {};
        var4 = var6.bind(var2)(var5, var4);
        var0.children = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1369, 33, 1297, 671, 6576, 3279, 3280, 806, 3720, 4097, 5961, 1358, 4029, 6617, 3941, 1234, 3159, 2]);