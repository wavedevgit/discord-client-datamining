// modules/double_tap_to_react/native/DoubleTapToReactActionSheet.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun89777: for (var _fun89777_ip = 0;;) switch (_fun89777_ip) {
        case 0:
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
            var3 = var5[var0];
            var0 = undefined;
            var3 = var10.bind(var0)(var3);
            var _closure1_slot3 = var3;
            var3 = 1;
            var3 = var5[var3];
            var3 = var10.bind(var0)(var3);
            var _closure1_slot4 = var3;
            var3 = 2;
            var6 = var5[var3];
            var3 = metroImportAll;
            var3 = var3.bind(var0)(var6);
            var _closure1_slot5 = var3;
            var3 = 3;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var3 = var3.View;
            var _closure1_slot6 = var3;
            var12 = 4;
            var3 = var5[var12];
            var3 = var10.bind(var0)(var3);
            var _closure1_slot7 = var3;
            var3 = 5;
            var3 = var5[var3];
            var3 = var10.bind(var0)(var3);
            var _closure1_slot8 = var3;
            var3 = 6;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var3 = var3.AnalyticEvents;
            var _closure1_slot9 = var3;
            var3 = 7;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var3 = var3.ContentDismissActionType;
            var _closure1_slot10 = var3;
            var3 = 8;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var3 = var3.EMOJI_URL_BASE_SIZE;
            var _closure1_slot11 = var3;
            var3 = 9;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var6 = var3.jsx;
            var _closure1_slot12 = var6;
            var3 = var3.jsxs;
            var _closure1_slot13 = var3;
            var3 = 10;
            var3 = var5[var3];
            var7 = var4.bind(var0)(var3);
            var6 = var7.createStyles;
            var3 = {};
            var11 = 48;
            var8 = {
                'width': 48,
                'height': 48,
                'zIndex': 2
            };
            var3.emoji = var8;
            var8 = {
                'width': 48,
                'height': 48
            };
            var3.selectedCustomEmoji = var8;
            var8 = {};
            var13 = 11;
            var9 = var5[var13];
            var14 = var4.bind(var0)(var9);
            var9 = var14.isIOS;
            var14 = var9.bind(var14)();
            var9 = 36;
            if (!var14) {
                _fun89777_ip = 351;
                continue _fun89777
            }
        case 348:
            var9 = var11;
        case 351:
            var8.fontSize = var9;
            var9 = var5[var13];
            var11 = var4.bind(var0)(var9);
            var9 = var11.isIOS;
            var11 = var9.bind(var11)();
            var9 = undefined;
            if (!var11) {
                _fun89777_ip = 383;
                continue _fun89777
            }
        case 380:
            var9 = 56;
        case 383:
            var8.lineHeight = var9;
            var11 = 'center';
            var8.textAlign = var11;
            var9 = 12;
            var14 = var5[var9];
            var14 = var10.bind(var0)(var14);
            var14 = var14.colors;
            var14 = var14.INTERACTIVE_TEXT_DEFAULT;
            var8.color = var14;
            var3.selectedTextEmoji = var8;
            var8 = {};
            var14 = var5[var9];
            var14 = var10.bind(var0)(var14);
            var14 = var14.spacing;
            var14 = var14.PX_16;
            var8.marginLeft = var14;
            var14 = 40;
            var8.fontSize = var14;
            var13 = var5[var13];
            var14 = var4.bind(var0)(var13);
            var13 = var14.isIOS;
            var14 = var13.bind(var14)();
            var13 = undefined;
            if (!var14) {
                _fun89777_ip = 489;
                continue _fun89777
            }
        case 486:
            var13 = 56;
        case 489:
            var8.lineHeight = var13;
            var3.selectedEmojiText = var8;
            var8 = {
                'flexDirection': 'column',
                'alignItems': 'center'
            };
            var13 = var5[var9];
            var13 = var10.bind(var0)(var13);
            var13 = var13.spacing;
            var13 = var13.PX_4;
            var8.paddingHorizontal = var13;
            var13 = var5[var9];
            var13 = var10.bind(var0)(var13);
            var13 = var13.spacing;
            var13 = var13.PX_32;
            var8.paddingTop = var13;
            var13 = var5[var9];
            var13 = var10.bind(var0)(var13);
            var13 = var13.spacing;
            var13 = var13.PX_12;
            var8.paddingBottom = var13;
            var3.content = var8;
            var8 = {};
            var13 = 'row';
            var8.flexDirection = var13;
            var13 = var5[var9];
            var13 = var10.bind(var0)(var13);
            var13 = var13.colors;
            var13 = var13.CARD_BACKGROUND_DEFAULT;
            var8.backgroundColor = var13;
            var13 = var5[var9];
            var13 = var10.bind(var0)(var13);
            var13 = var13.colors;
            var13 = var13.BORDER_STRONG;
            var8.borderColor = var13;
            var8.borderWidth = var12;
            var12 = var5[var9];
            var12 = var10.bind(var0)(var12);
            var12 = var12.spacing;
            var12 = var12.PX_8;
            var8.paddingVertical = var12;
            var12 = var5[var9];
            var12 = var10.bind(var0)(var12);
            var12 = var12.spacing;
            var12 = var12.PX_16;
            var8.paddingHorizontal = var12;
            var12 = var5[var9];
            var12 = var10.bind(var0)(var12);
            var12 = var12.radii;
            var12 = var12.xl;
            var8.borderRadius = var12;
            var8.justifyContent = var11;
            var8.alignItems = var11;
            var3.emojiContainer = var8;
            var8 = {};
            var8.textAlign = var11;
            var3.alignCenter = var8;
            var8 = {};
            var11 = var5[var9];
            var11 = var10.bind(var0)(var11);
            var11 = var11.spacing;
            var11 = var11.PX_24;
            var8.marginVertical = var11;
            var3.emojiSelectRow = var8;
            var8 = {
                'marginBottom': null,
                'flexDirection': 'row',
                'alignItems': 'center'
            };
            var11 = var5[var9];
            var11 = var10.bind(var0)(var11);
            var11 = var11.spacing;
            var11 = var11.PX_8;
            var8.marginBottom = var11;
            var11 = var5[var9];
            var11 = var10.bind(var0)(var11);
            var11 = var11.spacing;
            var11 = var11.PX_8;
            var8.gap = var11;
            var3.header = var8;
            var8 = {};
            var11 = var5[var9];
            var11 = var10.bind(var0)(var11);
            var11 = var11.spacing;
            var11 = var11.PX_8;
            var8.marginTop = var11;
            var9 = var5[var9];
            var9 = var10.bind(var0)(var9);
            var9 = var9.spacing;
            var9 = var9.PX_24;
            var8.marginBottom = var9;
            var3.emojiName = var8;
            var8 = {};
            var9 = 'relative';
            var8.position = var9;
            var3.emojiWrapper = var8;
            var8 = {
                'position': 'absolute',
                'top': 0,
                'bottom': 0,
                'left': 0,
                'right': 0,
                'zIndex': 0
            };
            var3.burstContainer = var8;
            var3 = var6.bind(var7)(var3);
            var _closure1_slot14 = var3;
            var3 = {};
            var6 = 'function DoubleTapToReactActionSheetTsx1(){const{sizeValue,left,rotationValue,top,positionValue,opacityValue}=this.__closure;return{position:\'absolute\',transform:[{scale:sizeValue.get()},{rotate:(left===true?-1:1)*rotationValue.get()+"deg"}],top:top===true?-positionValue.get():positionValue.get(),left:left===true?-positionValue.get()*1.5:positionValue.get()*1.5,opacity:opacityValue.get()};}';
            var3.code = var6;
            var _closure1_slot15 = var3;
            var3 = function arg0() {
                var0 = arg0;
                var4 = var0.emojiComponent;
                var11 = var0.top;
                var _closure2_slot0 = var11;
                var1 = var0.bottom;
                var13 = var0.left;
                var _closure2_slot1 = var13;
                var1 = var0.right;
                var0 = var0.leading;
                var _closure2_slot2 = var0;
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 13;
                var5 = var6[var0];
                var3 = undefined;
                var8 = var7.bind(var3)(var5);
                var5 = var8.useSharedValue;
                var9 = 0;
                var10 = var5.bind(var8)(var9);
                var _closure2_slot3 = var10;
                var5 = var6[var0];
                var8 = var7.bind(var3)(var5);
                var5 = var8.useSharedValue;
                var12 = var5.bind(var8)(var9);
                var _closure2_slot4 = var12;
                var5 = var6[var0];
                var14 = var7.bind(var3)(var5);
                var8 = var14.useSharedValue;
                var5 = 0.2;
                var14 = var8.bind(var14)(var5);
                var _closure2_slot5 = var14;
                var5 = var6[var0];
                var8 = var7.bind(var3)(var5);
                var5 = var8.useSharedValue;
                var9 = var5.bind(var8)(var9);
                var _closure2_slot6 = var9;
                var5 = 15;
                var5 = var6[var5];
                var15 = var7.bind(var3)(var5);
                var8 = var15.useMountLayoutEffect;
                var5 = function() { // Environment: var2
                    _fun89779: for (var _fun89779_ip = 0;;) switch (_fun89779_ip) {
                        case 0:
                            var0 = {};
                            var2 = _closure2_slot3;
                            var0.positionValue = var2;
                            var2 = _closure2_slot4;
                            var0.rotationValue = var2;
                            var2 = _closure2_slot5;
                            var0.sizeValue = var2;
                            var2 = _closure2_slot6;
                            var0.opacityValue = var2;
                            var1 = _closure2_slot2;
                            var0.leading = var1;
                            var13 = var0.positionValue;
                            var11 = var0.rotationValue;
                            var7 = var0.sizeValue;
                            var3 = var0.opacityValue;
                            var0 = var0.leading;
                            var10 = 0;
                            var14 = 0;
                            if (var0) {
                                _fun89779_ip = 119;
                                continue _fun89779
                            }
                        case 87:
                            var0 = global;
                            var1 = var0.Math;
                            var0 = var1.random;
                            var1 = var0.bind(var1)();
                            var0 = 150;
                            var1 = var0 * var1;
                            var0 = 50;
                            var14 = var0 + var1;
                        case 119:
                            var12 = var13.set;
                            var8 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var5 = 13;
                            var1 = var9[var5];
                            var0 = undefined;
                            var17 = var8.bind(var0)(var1);
                            var16 = var17.withSequence;
                            var1 = 14;
                            var2 = var9[var1];
                            var6 = var8.bind(var0)(var2);
                            var4 = var6.withTiming;
                            var2 = {};
                            var2.duration = var14;
                            var15 = var4.bind(var6)(var10, var2);
                            var2 = var9[var1];
                            var20 = var8.bind(var0)(var2);
                            var19 = var20.withTiming;
                            var2 = global;
                            var6 = var2.Math;
                            var4 = var6.random;
                            var6 = var4.bind(var6)();
                            var4 = 10;
                            var21 = var4 * var6;
                            var18 = {};
                            var4 = 600;
                            var18.duration = var4;
                            var6 = var9[var5];
                            var6 = var8.bind(var0)(var6);
                            var23 = var6.Easing;
                            var22 = var23.out;
                            var6 = var9[var5];
                            var6 = var8.bind(var0)(var6);
                            var6 = var6.Easing;
                            var6 = var6.ease;
                            var6 = var22.bind(var23)(var6);
                            var18.easing = var6;
                            var6 = 35;
                            var6 = var21 + var6;
                            var6 = var19.bind(var20)(var6, var18);
                            var6 = var16.bind(var17)(var15, var6);
                            var6 = var12.bind(var13)(var6);
                            var6 = var11.set;
                            var12 = var9[var5];
                            var15 = var8.bind(var0)(var12);
                            var13 = var15.withSequence;
                            var12 = var9[var1];
                            var17 = var8.bind(var0)(var12);
                            var16 = var17.withTiming;
                            var12 = {};
                            var12.duration = var14;
                            var12 = var16.bind(var17)(var10, var12);
                            var16 = var9[var1];
                            var18 = var8.bind(var0)(var16);
                            var17 = var18.withTiming;
                            var19 = var2.Math;
                            var16 = var19.random;
                            var19 = var16.bind(var19)();
                            var16 = 40;
                            var19 = var16 * var19;
                            var16 = {};
                            var16.duration = var4;
                            var4 = var9[var5];
                            var4 = var8.bind(var0)(var4);
                            var4 = var4.Easing;
                            var4 = var4.ease;
                            var16.easing = var4;
                            var4 = 20;
                            var4 = var19 + var4;
                            var4 = var17.bind(var18)(var4, var16);
                            var4 = var13.bind(var15)(var12, var4);
                            var4 = var6.bind(var11)(var4);
                            var6 = var7.set;
                            var4 = var9[var5];
                            var16 = var8.bind(var0)(var4);
                            var15 = var16.withSequence;
                            var4 = var9[var1];
                            var12 = var8.bind(var0)(var4);
                            var11 = var12.withTiming;
                            var4 = {};
                            var4.duration = var14;
                            var13 = var11.bind(var12)(var10, var4);
                            var4 = var9[var1];
                            var17 = var8.bind(var0)(var4);
                            var12 = var17.withTiming;
                            var4 = var2.Math;
                            var2 = var4.random;
                            var4 = var2.bind(var4)();
                            var2 = 0.3;
                            var2 = var2 * var4;
                            var4 = {};
                            var11 = 240;
                            var4.duration = var11;
                            var19 = 0.5;
                            var2 = var2 + var19;
                            var12 = var12.bind(var17)(var2, var4);
                            var2 = var9[var1];
                            var18 = var8.bind(var0)(var2);
                            var17 = var18.withTiming;
                            var2 = {};
                            var4 = 360;
                            var2.duration = var4;
                            var2 = var17.bind(var18)(var19, var2);
                            var2 = var15.bind(var16)(var13, var12, var2);
                            var2 = var6.bind(var7)(var2);
                            var2 = var3.set;
                            var5 = var9[var5];
                            var7 = var8.bind(var0)(var5);
                            var6 = var7.withSequence;
                            var5 = var9[var1];
                            var13 = var8.bind(var0)(var5);
                            var12 = var13.withTiming;
                            var5 = {};
                            var5.duration = var14;
                            var5 = var12.bind(var13)(var10, var5);
                            var12 = var9[var1];
                            var14 = var8.bind(var0)(var12);
                            var13 = var14.withTiming;
                            var12 = {};
                            var12.duration = var4;
                            var4 = 1;
                            var4 = var13.bind(var14)(var4, var12);
                            var1 = var9[var1];
                            var9 = var8.bind(var0)(var1);
                            var8 = var9.withTiming;
                            var1 = {};
                            var1.duration = var11;
                            var1 = var8.bind(var9)(var10, var1);
                            var1 = var6.bind(var7)(var5, var4, var1);
                            var1 = var2.bind(var3)(var1);
                            return var0;
                    }
                };
                var5 = var8.bind(var15)(var5);
                var5 = var6[var0];
                var7 = var7.bind(var3)(var5);
                var5 = var7.useAnimatedStyle;
                var2 = function() {
                    _fun89780: for (var _fun89780_ip = 0;;) switch (_fun89780_ip) {
                        case 0:
                            var0 = {};
                            var1 = 'absolute';
                            var0.position = var1;
                            var3 = {};
                            var4 = _closure2_slot5;
                            var2 = var4.get;
                            var2 = var2.bind(var4)();
                            var3.scale = var2;
                            var2 = new Array(2);
                            var2[0] = var3;
                            var4 = {};
                            var5 = _closure2_slot1;
                            var6 = 1;
                            var3 = true;
                            if (!(var3 === var5)) {
                                _fun89780_ip = 62;
                                continue _fun89780
                            }
                        case 56:
                            var6 = -1;
                        case 62:
                            var7 = _closure2_slot4;
                            var5 = var7.get;
                            var5 = var5.bind(var7)();
                            var6 = var6 * var5;
                            var5 = 'deg';
                            var5 = var6 + var5;
                            var4.rotate = var5;
                            var2[1] = var4;
                            var0.transform = var2;
                            var2 = _closure2_slot0;
                            if (!(var3 !== var2)) {
                                _fun89780_ip = 125;
                                continue _fun89780
                            }
                        case 110:
                            var4 = _closure2_slot3;
                            var2 = var4.get;
                            var2 = var2.bind(var4)();
                            _fun89780_ip = 141;
                            continue _fun89780;
                        case 125:
                            var5 = _closure2_slot3;
                            var4 = var5.get;
                            var4 = var4.bind(var5)();
                            var2 = -var4;
                        case 141:
                            var0.top = var2;
                            var2 = _closure2_slot1;
                            if (!(var3 !== var2)) {
                                _fun89780_ip = 182;
                                continue _fun89780
                            }
                        case 153:
                            var3 = _closure2_slot3;
                            var2 = var3.get;
                            var3 = var2.bind(var3)();
                            var2 = 1.5;
                            var2 = var2 * var3;
                            _fun89780_ip = 212;
                            continue _fun89780;
                        case 182:
                            var4 = _closure2_slot3;
                            var3 = var4.get;
                            var3 = var3.bind(var4)();
                            var4 = -var3;
                            var3 = 1.5;
                            var2 = var3 * var4;
                        case 212:
                            var0.left = var2;
                            var2 = _closure2_slot6;
                            var1 = var2.get;
                            var1 = var1.bind(var2)();
                            var0.opacity = var1;
                            return var0;
                    }
                };
                var8 = {};
                var8.sizeValue = var14;
                var8.left = var13;
                var8.rotationValue = var12;
                var8.top = var11;
                var8.positionValue = var10;
                var8.opacityValue = var9;
                var2.__closure = var8;
                var8 = 1455873119263.0;
                var2.__workletHash = var8;
                var8 = _closure1_slot15;
                var2.__initData = var8;
                var5 = var5.bind(var7)(var2);
                var2 = _closure1_slot12;
                var1 = _closure1_slot1;
                var0 = var6[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.View;
                var0 = {};
                var0.style = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var _closure1_slot16 = var3;
            var3 = function arg0() {
                var0 = arg0;
                var8 = var0.emojiComponent;
                var0 = _closure1_slot14;
                var3 = undefined;
                var4 = var0.bind(var3)();
                var2 = _closure1_slot13;
                var1 = _closure1_slot6;
                var0 = {};
                var4 = var4.burstContainer;
                var0.style = var4;
                var7 = _closure1_slot12;
                var6 = _closure1_slot16;
                var4 = {
                    'emojiComponent': null,
                    'top': true,
                    'left': true,
                    'leading': true
                };
                var4.emojiComponent = var8;
                var6 = var7.bind(var3)(var6, var4);
                var4 = new Array(4);
                var4[0] = var6;
                var9 = _closure1_slot16;
                var6 = {
                    'emojiComponent': null,
                    'top': true,
                    'right': true
                };
                var6.emojiComponent = var8;
                var6 = var7.bind(var3)(var9, var6);
                var4[1] = var6;
                var9 = _closure1_slot16;
                var6 = {
                    'emojiComponent': null,
                    'bottom': true,
                    'left': true
                };
                var6.emojiComponent = var8;
                var6 = var7.bind(var3)(var9, var6);
                var4[2] = var6;
                var6 = _closure1_slot16;
                var5 = {
                    'emojiComponent': null,
                    'bottom': true,
                    'right': true
                };
                var5.emojiComponent = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[3] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var _closure1_slot17 = var3;
            var3 = {};
            var6 = 'function DoubleTapToReactActionSheetTsx2(){const{interpolate,sharedSaveValue}=this.__closure;return{transform:[{scale:interpolate(sharedSaveValue.get(),[0,1],[1,1.3])},{translateY:interpolate(sharedSaveValue.get(),[0,1],[0,-20])}]};}';
            var3.code = var6;
            var _closure1_slot18 = var3;
            var3 = {};
            var6 = 'function DoubleTapToReactActionSheetTsx3(){const{scaleChangeValue,opacityChangeValue}=this.__closure;return{transform:[{scale:scaleChangeValue.get()}],opacity:opacityChangeValue.get()};}';
            var3.code = var6;
            var _closure1_slot19 = var3;
            var3 = {};
            var6 = 'function DoubleTapToReactActionSheetTsx4(){const{runOnJS,setAnimateConfetti}=this.__closure;return runOnJS(setAnimateConfetti)(true);}';
            var3.code = var6;
            var _closure1_slot20 = var3;
            var3 = 33;
            var3 = var5[var3];
            var5 = var4.bind(var0)(var3);
            var4 = var5.fileFinishedImporting;
            var3 = 'modules/double_tap_to_react/native/DoubleTapToReactActionSheet.tsx';
            var3 = var4.bind(var5)(var3);
            var1 = function arg0() {
                _fun89782: for (var _fun89782_ip = 0;;) switch (_fun89782_ip) {
                    case 0:
                        var1 = arg0;
                        var17 = var1.emoji;
                        var6 = var1.markAsDismissed;
                        var _closure2_slot0 = var6;
                        var3 = undefined;
                        var _closure2_slot13 = var3;
                        var1 = _closure1_slot14;
                        var20 = var1.bind(var3)();
                        var7 = _closure1_slot5;
                        var1 = var7.useState;
                        var10 = false;
                        var1 = var1.bind(var7)(var10);
                        var8 = _closure1_slot4;
                        var2 = 2;
                        var1 = var8.bind(var3)(var1, var2);
                        var4 = 0;
                        var18 = var1[var4];
                        var12 = 1;
                        var1 = var1[var12];
                        var _closure2_slot1 = var1;
                        var5 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var1 = 16;
                        var1 = var9[var1];
                        var15 = var5.bind(var3)(var1);
                        var13 = var15.useStateFromStores;
                        var1 = _closure1_slot7;
                        var11 = new Array(1);
                        var11[0] = var1;
                        var1 = function() { // Environment: var0
                            var0 = _closure1_slot7;
                            var0 = var0.useReducedMotion;
                            return var0;
                        };
                        var21 = var13.bind(var15)(var11, var1);
                        var _closure2_slot2 = var21;
                        var1 = var7.useState;
                        var1 = var1.bind(var7)(var17);
                        var1 = var8.bind(var3)(var1, var2);
                        var16 = var1[var4];
                        var _closure2_slot3 = var16;
                        var1 = var1[var12];
                        var _closure2_slot4 = var1;
                        var11 = var7.useRef;
                        var1 = true;
                        var1 = var11.bind(var7)(var1);
                        var _closure2_slot5 = var1;
                        var1 = var7.useState;
                        var1 = var1.bind(var7)(var10);
                        var1 = var8.bind(var3)(var1, var2);
                        var11 = var1[var4];
                        var _closure2_slot6 = var11;
                        var1 = var1[var12];
                        var _closure2_slot7 = var1;
                        var1 = var7.useRef;
                        var19 = null;
                        var1 = var1.bind(var7)(var19);
                        var _closure2_slot8 = var1;
                        var10 = 13;
                        var1 = var9[var10];
                        var2 = var5.bind(var3)(var1);
                        var1 = var2.useSharedValue;
                        var1 = var1.bind(var2)(var4);
                        var _closure2_slot9 = var1;
                        var2 = var9[var10];
                        var8 = var5.bind(var3)(var2);
                        var4 = var8.useAnimatedStyle;
                        var2 = function() {
                            var0 = {};
                            var2 = {};
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var3 = 13;
                            var1 = var7[var3];
                            var5 = undefined;
                            var11 = var6.bind(var5)(var1);
                            var10 = var11.interpolate;
                            var4 = _closure2_slot9;
                            var1 = var4.get;
                            var9 = var1.bind(var4)();
                            var8 = [0, 1];
                            var1 = [1, 1.3];
                            var1 = var10.bind(var11)(var9, var8, var1);
                            var2.scale = var1;
                            var1 = new Array(2);
                            var1[0] = var2;
                            var2 = {};
                            var3 = var7[var3];
                            var7 = var6.bind(var5)(var3);
                            var6 = var7.interpolate;
                            var3 = var4.get;
                            var5 = var3.bind(var4)();
                            var4 = [0];
                            var3 = -20;
                            var4[1] = var3;
                            var3 = [0, 1];
                            var3 = var6.bind(var7)(var5, var3, var4);
                            var2.translateY = var3;
                            var1[1] = var2;
                            var0.transform = var1;
                            return var0;
                        };
                        var13 = {};
                        var15 = var9[var10];
                        var15 = var5.bind(var3)(var15);
                        var15 = var15.interpolate;
                        var13.interpolate = var15;
                        var13.sharedSaveValue = var1;
                        var2.__closure = var13;
                        var13 = 14159749218638.0;
                        var2.__workletHash = var13;
                        var13 = _closure1_slot18;
                        var2.__initData = var13;
                        var23 = var4.bind(var8)(var2);
                        var2 = var9[var10];
                        var4 = var5.bind(var3)(var2);
                        var2 = var4.useSharedValue;
                        var8 = var2.bind(var4)(var12);
                        var _closure2_slot10 = var8;
                        var2 = var9[var10];
                        var4 = var5.bind(var3)(var2);
                        var2 = var4.useSharedValue;
                        var2 = var2.bind(var4)(var12);
                        var _closure2_slot11 = var2;
                        var4 = var9[var10];
                        var12 = var5.bind(var3)(var4);
                        var5 = var12.useAnimatedStyle;
                        var4 = function() {
                            var0 = {};
                            var3 = {};
                            var4 = _closure2_slot10;
                            var2 = var4.get;
                            var2 = var2.bind(var4)();
                            var3.scale = var2;
                            var2 = new Array(1);
                            var2[0] = var3;
                            var0.transform = var2;
                            var2 = _closure2_slot11;
                            var1 = var2.get;
                            var1 = var1.bind(var2)();
                            var0.opacity = var1;
                            return var0;
                        };
                        var13 = {};
                        var13.scaleChangeValue = var8;
                        var13.opacityChangeValue = var2;
                        var4.__closure = var13;
                        var13 = 17229591239241.0;
                        var4.__workletHash = var13;
                        var13 = _closure1_slot19;
                        var4.__initData = var13;
                        var15 = var5.bind(var12)(var4);
                        var5 = var7.useCallback;
                        var4 = new Array(4);
                        var4[0] = var8;
                        var4[1] = var2;
                        var4[2] = var21;
                        var4[3] = var11;
                        var2 = function(arg0, arg1) { // Environment: var0
                            _fun89786: for (var _fun89786_ip = 0;;) switch (_fun89786_ip) {
                                case 0:
                                    var1 = arg0;
                                    var _closure3_slot0 = var1;
                                    var1 = arg1;
                                    var _closure3_slot1 = var1;
                                    var2 = _closure2_slot6;
                                    if (var2) {
                                        _fun89786_ip = 325;
                                        continue _fun89786
                                    }
                                case 29:
                                    var3 = _closure2_slot2;
                                    var4 = _closure2_slot10;
                                    var2 = var4.set;
                                    if (var3) {
                                        _fun89786_ip = 278;
                                        continue _fun89786
                                    }
                                case 48:
                                    var11 = _closure1_slot0;
                                    var13 = _closure1_slot2;
                                    var8 = 13;
                                    var3 = var13[var8];
                                    var10 = undefined;
                                    var15 = var11.bind(var10)(var3);
                                    var9 = var15.withSequence;
                                    var14 = 14;
                                    var3 = var13[var14];
                                    var12 = var11.bind(var10)(var3);
                                    var6 = var12.withTiming;
                                    var5 = {};
                                    var7 = 0;
                                    var5.duration = var7;
                                    var3 = 0.7;
                                    var6 = var6.bind(var12)(var3, var5);
                                    var3 = 17;
                                    var5 = var13[var3];
                                    var17 = var11.bind(var10)(var5);
                                    var16 = var17.withSpring;
                                    var12 = 1;
                                    var5 = {
                                        'stiffness': 1500,
                                        'damping': 60,
                                        'mass': 3
                                    };
                                    var5 = var16.bind(var17)(var12, var5);
                                    var5 = var9.bind(var15)(var6, var5);
                                    var5 = var2.bind(var4)(var5);
                                    var6 = _closure2_slot11;
                                    var5 = var6.set;
                                    var8 = var13[var8];
                                    var9 = var11.bind(var10)(var8);
                                    var8 = var9.withSequence;
                                    var14 = var13[var14];
                                    var16 = var11.bind(var10)(var14);
                                    var15 = var16.withTiming;
                                    var14 = {};
                                    var14.duration = var7;
                                    var7 = 0.6;
                                    var7 = var15.bind(var16)(var7, var14);
                                    var3 = var13[var3];
                                    var11 = var11.bind(var10)(var3);
                                    var10 = var11.withSpring;
                                    var3 = {
                                        'duration': 200,
                                        'dampingRatio': 0.45,
                                        'mass': 10,
                                        'overshootClamping': true
                                    };
                                    var3 = var10.bind(var11)(var12, var3);
                                    var3 = var8.bind(var9)(var7, var3);
                                    var3 = var5.bind(var6)(var3);
                                    _fun89786_ip = 300;
                                    continue _fun89786;
                                case 278:
                                    var3 = 1;
                                    var2 = var2.bind(var4)(var3);
                                    var2 = _closure2_slot11;
                                    var1 = var2.set;
                                    var1 = var1.bind(var2)(var3);
                                case 300:
                                    var1 = global;
                                    var3 = var1.setTimeout;
                                    var2 = undefined;
                                    var1 = function() { // Environment: var0
                                        var4 = _closure2_slot4;
                                        var3 = _closure3_slot0;
                                        var0 = undefined;
                                        var3 = var4.bind(var0)(var3);
                                        var2 = _closure2_slot5;
                                        var1 = _closure3_slot1;
                                        var2.current = var1;
                                        return var0;
                                    };
                                    var0 = 0;
                                    var0 = var3.bind(var2)(var1, var0);
                                case 325:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var13 = var5.bind(var7)(var2, var4);
                        var5 = var7.useMemo;
                        var4 = new Array(1);
                        var4[0] = var16;
                        var2 = function() { // Environment: var0
                            _fun89788: for (var _fun89788_ip = 0;;) switch (_fun89788_ip) {
                                case 0:
                                    var2 = _closure1_slot0;
                                    var3 = _closure1_slot2;
                                    var0 = 18;
                                    var0 = var3[var0];
                                    var3 = undefined;
                                    var0 = var2.bind(var3)(var0);
                                    var2 = var0.DoubleTapReactionEmoji;
                                    var0 = var2.getSetting;
                                    var0 = var0.bind(var2)();
                                    var6 = var0.emojiId;
                                    var7 = var0.emojiName;
                                    var0 = null;
                                    if (!(var0 == var6)) {
                                        _fun89788_ip = 101;
                                        continue _fun89788
                                    }
                                case 59:
                                    var2 = var0 != var7;
                                    var4 = null;
                                    if (!var2) {
                                        _fun89788_ip = 99;
                                        continue _fun89788
                                    }
                                case 68:
                                    var5 = _closure1_slot1;
                                    var8 = _closure1_slot2;
                                    var2 = 19;
                                    var2 = var8[var2];
                                    var5 = var5.bind(var3)(var2);
                                    var2 = var5.getByName;
                                    var4 = var2.bind(var5)(var7);
                                case 99:
                                    _fun89788_ip = 116;
                                    continue _fun89788;
                                case 101:
                                    var5 = _closure1_slot8;
                                    var2 = var5.getCustomEmojiById;
                                    var4 = var2.bind(var5)(var6);
                                case 116:
                                    var0 = var0 == var4;
                                    if (var0) {
                                        _fun89788_ip = 165;
                                        continue _fun89788
                                    }
                                case 123:
                                    var2 = _closure1_slot0;
                                    var5 = _closure1_slot2;
                                    var1 = 20;
                                    var1 = var5[var1];
                                    var3 = var2.bind(var3)(var1);
                                    var2 = var3.areEmojisEqual;
                                    var1 = _closure2_slot3;
                                    var1 = var2.bind(var3)(var4, var1);
                                    var0 = !var1;
                                case 165:
                                    return var0;
                            }
                        };
                        var8 = var5.bind(var7)(var2, var4);
                        var _closure2_slot12 = var8;
                        var5 = var7.useMemo;
                        var4 = new Array(2);
                        var4[0] = var16;
                        var4[1] = var21;
                        var2 = function() { // Environment: var0
                            _fun89789: for (var _fun89789_ip = 0;;) switch (_fun89789_ip) {
                                case 0:
                                    var0 = _closure2_slot3;
                                    var1 = var0.id;
                                    var0 = null;
                                    if (!(var0 == var1)) {
                                        _fun89789_ip = 29;
                                        continue _fun89789
                                    }
                                case 18:
                                    var0 = _closure2_slot3;
                                    var0 = var0.url;
                                    _fun89789_ip = 113;
                                    continue _fun89789;
                                case 29:
                                    var3 = _closure1_slot1;
                                    var2 = _closure1_slot2;
                                    var1 = 21;
                                    var2 = var2[var1];
                                    var1 = undefined;
                                    var3 = var3.bind(var1)(var2);
                                    var2 = var3.getEmojiURL;
                                    var1 = {};
                                    var5 = _closure2_slot3;
                                    var5 = var5.id;
                                    var1.id = var5;
                                    var5 = _closure2_slot2;
                                    var5 = !var5;
                                    if (!var5) {
                                        _fun89789_ip = 95;
                                        continue _fun89789
                                    }
                                case 85:
                                    var6 = _closure2_slot3;
                                    var5 = var6.animated;
                                case 95:
                                    var1.animated = var5;
                                    var4 = _closure1_slot11;
                                    var1.size = var4;
                                    var0 = var2.bind(var3)(var1);
                                case 113:
                                    return var0;
                            }
                        };
                        var7 = var5.bind(var7)(var2, var4);
                        var5 = _closure1_slot12;
                        var4 = _closure1_slot1;
                        var2 = 22;
                        var2 = var9[var2];
                        var4 = var4.bind(var3)(var2);
                        var2 = {};
                        var9 = var20.emoji;
                        var2.style = var9;
                        var9 = var20.selectedCustomEmoji;
                        var2.fastImageStyle = var9;
                        var9 = var20.selectedTextEmoji;
                        var2.textEmojiStyle = var9;
                        var9 = var16.id;
                        var12 = var19 == var9;
                        var9 = '';
                        if (!var12) {
                            _fun89782_ip = 645;
                            continue _fun89782
                        }
                    case 640:
                        var9 = var16.surrogates;
                    case 645:
                        var2.name = var9;
                        var2.src = var7;
                        var22 = var5.bind(var3)(var4, var2);
                        var4 = _closure1_slot5;
                        var7 = var4.useCallback;
                        var5 = _closure1_slot3;
                        var2 = function*() { // Environment: var0
                            var0 = function*() { // Original name: ?anon_0_, environment: var0
                                _fun89791: for (var _fun89791_ip = 0;;) switch (_fun89791_ip) {
                                    case 0:
                                        StartGenerator();
                                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                        if (var1) {
                                            _fun89791_ip = 273;
                                            continue _fun89791
                                        }
                                    case 10:
                                        var1 = _closure2_slot12;
                                        if (!var1) {
                                            _fun89791_ip = 119;
                                            continue _fun89791
                                        }
                                    case 20:
                                        var3 = _closure1_slot0;
                                        var2 = _closure1_slot2;
                                        var1 = 18;
                                        var2 = var2[var1];
                                        var1 = undefined;
                                        var1 = var3.bind(var1)(var2);
                                        var3 = var1.DoubleTapReactionEmoji;
                                        var2 = var3.updateSetting;
                                        var1 = {};
                                        var4 = _closure2_slot3;
                                        var5 = var4.id;
                                        var1.emojiId = var5;
                                        var5 = var4.name;
                                        var1.emojiName = var5;
                                        var4 = var4.animated;
                                        var1.animated = var4;
                                        var4 = false;
                                        var1.disableDoubleTap = var4;
                                        var1 = var2.bind(var3)(var1);
                                        SaveGenerator(address = 110);
                                    case 108:
                                        return var1;
                                    case 110:
                                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                                        if (var2) {
                                            _fun89791_ip = 270;
                                            continue _fun89791
                                        }
                                    case 119:
                                        var8 = _closure1_slot1;
                                        var9 = _closure1_slot2;
                                        var2 = 23;
                                        var4 = var9[var2];
                                        var2 = undefined;
                                        var6 = var8.bind(var2)(var4);
                                        var5 = var6.track;
                                        var3 = _closure1_slot9;
                                        var4 = var3.DOUBLE_TAP_REACT_EMOJI_UPDATED;
                                        var3 = {};
                                        var10 = _closure2_slot3;
                                        var11 = var10.id;
                                        var3.emoji_id = var11;
                                        var11 = var10.name;
                                        var3.emoji_name = var11;
                                        var10 = var10.animated;
                                        var3.emoji_animated = var10;
                                        var7 = _closure2_slot5;
                                        var7 = var7.current;
                                        var3.recommended = var7;
                                        var7 = 24;
                                        var7 = var9[var7];
                                        var7 = var8.bind(var2)(var7);
                                        var7 = var7.DOUBLE_TAP_TO_REACT_ACTION_SHEET;
                                        var3.location = var7;
                                        var3 = var5.bind(var6)(var4, var3);
                                        var3 = global;
                                        var5 = var3.setTimeout;
                                        var4 = function() { // Environment: var3
                                            var2 = _closure1_slot0;
                                            var1 = _closure1_slot2;
                                            var0 = 25;
                                            var1 = var1[var0];
                                            var0 = undefined;
                                            var2 = var2.bind(var0)(var1);
                                            var1 = var2.showDoubleTapEmojiUpdatedToast;
                                            var0 = {};
                                            var3 = _closure2_slot3;
                                            var0.emoji = var3;
                                            var0 = var1.bind(var2)(var0);
                                            return var0;
                                        };
                                        var3 = 500;
                                        var3 = var5.bind(var2)(var4, var3);
                                        return var2;
                                    case 270:
                                        return var1;
                                    case 273:
                                        return var0;
                                }
                            };
                            return var0;
                        };
                        var5 = var5.bind(var3)(var2);
                        var2 = new Array(2);
                        var2[0] = var8;
                        var2[1] = var16;
                        var5 = var7.bind(var4)(var5, var2);
                        _closure2_slot13 = var5;
                        var7 = var4.useCallback;
                        var2 = new Array(4);
                        var2[0] = var21;
                        var2[1] = var1;
                        var2[2] = var5;
                        var2[3] = var6;
                        var1 = function() { // Environment: var0
                            _fun89793: for (var _fun89793_ip = 0;;) switch (_fun89793_ip) {
                                case 0:
                                    var4 = _closure2_slot7;
                                    var0 = undefined;
                                    var2 = true;
                                    var2 = var4.bind(var0)(var2);
                                    var2 = _closure2_slot2;
                                    var5 = _closure2_slot9;
                                    var4 = var5.set;
                                    if (var2) {
                                        _fun89793_ip = 346;
                                        continue _fun89793
                                    }
                                case 37:
                                    var11 = _closure1_slot0;
                                    var12 = _closure1_slot2;
                                    var19 = 13;
                                    var2 = var12[var19];
                                    var10 = var11.bind(var0)(var2);
                                    var9 = var10.withSequence;
                                    var6 = 14;
                                    var2 = var12[var6];
                                    var8 = var11.bind(var0)(var2);
                                    var7 = var8.withTiming;
                                    var2 = {};
                                    var13 = 0;
                                    var2.duration = var13;
                                    var8 = var7.bind(var8)(var13, var2);
                                    var2 = var12[var6];
                                    var15 = var11.bind(var0)(var2);
                                    var14 = var15.withTiming;
                                    var7 = {};
                                    var2 = 100;
                                    var7.duration = var2;
                                    var16 = var12[var19];
                                    var16 = var11.bind(var0)(var16);
                                    var20 = var16.Easing;
                                    var18 = var20.out;
                                    var16 = var12[var19];
                                    var16 = var11.bind(var0)(var16);
                                    var16 = var16.Easing;
                                    var16 = var16.quad;
                                    var16 = var18.bind(var20)(var16);
                                    var7.easing = var16;
                                    var16 = 1;
                                    var7 = var14.bind(var15)(var16, var7);
                                    var6 = var12[var6];
                                    var15 = var11.bind(var0)(var6);
                                    var14 = var15.withTiming;
                                    var6 = {};
                                    var6.duration = var2;
                                    var2 = function() {
                                        var1 = _closure1_slot0;
                                        var2 = _closure1_slot2;
                                        var0 = 13;
                                        var0 = var2[var0];
                                        var2 = undefined;
                                        var3 = var1.bind(var2)(var0);
                                        var1 = var3.runOnJS;
                                        var0 = _closure2_slot1;
                                        var1 = var1.bind(var3)(var0);
                                        var0 = true;
                                        var0 = var1.bind(var2)(var0);
                                        return var0;
                                    };
                                    var18 = {};
                                    var19 = var12[var19];
                                    var19 = var11.bind(var0)(var19);
                                    var19 = var19.runOnJS;
                                    var18.runOnJS = var19;
                                    var19 = _closure2_slot1;
                                    var18.setAnimateConfetti = var19;
                                    var2.__closure = var18;
                                    var18 = 13953384401061.0;
                                    var2.__workletHash = var18;
                                    var17 = _closure1_slot20;
                                    var2.__initData = var17;
                                    var25 = var15;
                                    var24 = var16;
                                    var23 = var6;
                                    var22 = undefined;
                                    var21 = var2;
                                    var22 = var25[var14](var24, var23, var22, var21, var20);
                                    var2 = 17;
                                    var2 = var12[var2];
                                    var12 = var11.bind(var0)(var2);
                                    var11 = var12.withSpring;
                                    var2 = {
                                        'stiffness': 2000,
                                        'damping': 70,
                                        'mass': 3
                                    };
                                    var21 = var11.bind(var12)(var13, var2);
                                    var25 = var10;
                                    var24 = var8;
                                    var23 = var7;
                                    var2 = var25[var9](var24, var23, var22, var21, var20);
                                    var2 = var4.bind(var5)(var2);
                                    _fun89793_ip = 353;
                                    continue _fun89793;
                                case 346:
                                    var2 = 0;
                                    var2 = var4.bind(var5)(var2);
                                case 353:
                                    var2 = _closure2_slot8;
                                    var4 = var2.current;
                                    var2 = null;
                                    if (!(var2 != var4)) {
                                        _fun89793_ip = 390;
                                        continue _fun89793
                                    }
                                case 368:
                                    var2 = global;
                                    var4 = var2.clearTimeout;
                                    var2 = _closure2_slot8;
                                    var2 = var2.current;
                                    var2 = var4.bind(var0)(var2);
                                case 390:
                                    var2 = _closure2_slot8;
                                    var4 = global;
                                    var4 = var4.setTimeout;
                                    var5 = _closure2_slot2;
                                    var3 = 900;
                                    if (!var5) {
                                        _fun89793_ip = 417;
                                        continue _fun89793
                                    }
                                case 415:
                                    var3 = 0;
                                case 417:
                                    var1 = function() { // Environment: var1
                                        var2 = _closure2_slot8;
                                        var0 = null;
                                        var2.current = var0;
                                        var2 = _closure2_slot13;
                                        var0 = undefined;
                                        var2 = var2.bind(var0)();
                                        var3 = _closure2_slot0;
                                        var2 = _closure1_slot10;
                                        var2 = var2.TAKE_ACTION;
                                        var2 = var3.bind(var0)(var2);
                                        var2 = _closure1_slot1;
                                        var3 = _closure1_slot2;
                                        var1 = 26;
                                        var1 = var3[var1];
                                        var2 = var2.bind(var0)(var1);
                                        var1 = var2.hideActionSheet;
                                        var1 = var1.bind(var2)();
                                        return var0;
                                    };
                                    var1 = var4.bind(var0)(var1, var3);
                                    var2.current = var1;
                                    return var0;
                            }
                        };
                        var12 = var7.bind(var4)(var1, var2);
                        var2 = var4.useCallback;
                        var1 = new Array(2);
                        var1[0] = var6;
                        var1[1] = var5;
                        var0 = function() { // Environment: var0
                            _fun89796: for (var _fun89796_ip = 0;;) switch (_fun89796_ip) {
                                case 0:
                                    var0 = _closure2_slot8;
                                    var0 = var0.current;
                                    var2 = null;
                                    if (!(var2 != var0)) {
                                        _fun89796_ip = 48;
                                        continue _fun89796
                                    }
                                case 18:
                                    var0 = global;
                                    var5 = var0.clearTimeout;
                                    var0 = _closure2_slot8;
                                    var4 = var0.current;
                                    var3 = undefined;
                                    var3 = var5.bind(var3)(var4);
                                    var0.current = var2;
                                case 48:
                                    var2 = _closure2_slot13;
                                    var0 = undefined;
                                    var2 = var2.bind(var0)();
                                    var2 = _closure2_slot0;
                                    var1 = _closure1_slot10;
                                    var1 = var1.USER_DISMISS;
                                    var1 = var2.bind(var0)(var1);
                                    return var0;
                            }
                        };
                        var4 = var2.bind(var4)(var0, var1);
                        var2 = _closure1_slot12;
                        var1 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var0 = 27;
                        var0 = var8[var0];
                        var0 = var1.bind(var3)(var0);
                        var1 = var0.ActionSheet;
                        var0 = {};
                        var0.onDismiss = var4;
                        var6 = _closure1_slot13;
                        var5 = _closure1_slot6;
                        var4 = {};
                        var7 = var20.content;
                        var4.style = var7;
                        var7 = {};
                        var9 = var20.emojiContainer;
                        var7.style = var9;
                        var9 = _closure1_slot1;
                        var8 = var8[var10];
                        var8 = var9.bind(var3)(var8);
                        var9 = var8.View;
                        var8 = {};
                        var10 = new Array(2);
                        var10[0] = var23;
                        var10[1] = var15;
                        var8.style = var10;
                        var10 = new Array(2);
                        var10[0] = var22;
                        var15 = null;
                        if (var21) {
                            _fun89782_ip = 918;
                            continue _fun89782
                        }
                    case 892:
                        var15 = null;
                        if (!var18) {
                            _fun89782_ip = 918;
                            continue _fun89782
                        }
                    case 897:
                        var21 = _closure1_slot12;
                        var19 = _closure1_slot17;
                        var18 = {};
                        var18.emojiComponent = var22;
                        var15 = var21.bind(var3)(var19, var18);
                    case 918:
                        var10[1] = var15;
                        var8.children = var10;
                        var8 = var6.bind(var3)(var9, var8);
                        var9 = new Array(2);
                        var9[0] = var8;
                        var10 = _closure1_slot12;
                        var15 = _closure1_slot0;
                        var19 = _closure1_slot2;
                        var8 = 28;
                        var18 = var19[var8];
                        var18 = var15.bind(var3)(var18);
                        var21 = var18.Text;
                        var18 = {
                            'variant': 'text-lg/semibold',
                            'style': null,
                            'color': 'interactive-text-default',
                            'children': '1'
                        };
                        var22 = var20.selectedEmojiText;
                        var18.style = var22;
                        var18 = var10.bind(var3)(var21, var18);
                        var9[1] = var18;
                        var7.children = var9;
                        var9 = var6.bind(var3)(var5, var7);
                        var7 = new Array(6);
                        var7[0] = var9;
                        var9 = var19[var8];
                        var9 = var15.bind(var3)(var9);
                        var18 = var9.Text;
                        var9 = {
                            'variant': 'text-sm/normal',
                            'color': 'text-subtle'
                        };
                        var21 = var20.emojiName;
                        var9.style = var21;
                        var23 = var16.name;
                        var21 = global;
                        var21 = var21.HermesInternal;
                        var22 = var21.concat;
                        var21 = ':';
                        var21 = var22.bind(var21)(var23, var21);
                        var9.children = var21;
                        var9 = var10.bind(var3)(var18, var9);
                        var7[1] = var9;
                        var22 = _closure1_slot13;
                        var21 = _closure1_slot6;
                        var9 = {};
                        var18 = var20.header;
                        var9.style = var18;
                        var18 = var19[var8];
                        var18 = var15.bind(var3)(var18);
                        var24 = var18.Text;
                        var23 = {
                            'style': null,
                            'variant': 'text-lg/bold',
                            'color': 'mobile-text-heading-primary'
                        };
                        var18 = var20.alignCenter;
                        var23.style = var18;
                        var18 = 29;
                        var25 = var19[var18];
                        var25 = var15.bind(var3)(var25);
                        var27 = var25.intl;
                        var26 = var27.string;
                        var25 = var19[var18];
                        var25 = var15.bind(var3)(var25);
                        var25 = var25.t;
                        var25 = var25.F6lRAI;
                        var25 = var26.bind(var27)(var25);
                        var23.children = var25;
                        var24 = var10.bind(var3)(var24, var23);
                        var23 = new Array(2);
                        var23[0] = var24;
                        var24 = 30;
                        var24 = var19[var24];
                        var24 = var15.bind(var3)(var24);
                        var25 = var24.NewBadge;
                        var24 = {};
                        var24 = var10.bind(var3)(var25, var24);
                        var23[1] = var24;
                        var9.children = var23;
                        var9 = var22.bind(var3)(var21, var9);
                        var7[2] = var9;
                        var8 = var19[var8];
                        var8 = var15.bind(var3)(var8);
                        var9 = var8.Text;
                        var8 = {
                            'style': null,
                            'variant': 'text-md/medium',
                            'color': 'text-default'
                        };
                        var21 = var20.alignCenter;
                        var8.style = var21;
                        var21 = var19[var18];
                        var21 = var15.bind(var3)(var21);
                        var23 = var21.intl;
                        var22 = var23.string;
                        var21 = var19[var18];
                        var21 = var15.bind(var3)(var21);
                        var21 = var21.t;
                        var21 = var21.yIax8g;
                        var21 = var22.bind(var23)(var21);
                        var8.children = var21;
                        var8 = var10.bind(var3)(var9, var8);
                        var7[3] = var8;
                        var9 = _closure1_slot1;
                        var8 = 31;
                        var8 = var19[var8];
                        var9 = var9.bind(var3)(var8);
                        var8 = {};
                        var20 = var20.emojiSelectRow;
                        var8.style = var20;
                        var8.selectedEmoji = var16;
                        var8.onPressEmoji = var13;
                        var8 = var10.bind(var3)(var9, var8);
                        var7[4] = var8;
                        var8 = 32;
                        var8 = var19[var8];
                        var8 = var15.bind(var3)(var8);
                        var9 = var8.Button;
                        var8 = {
                            'grow': true,
                            'size': 'lg',
                            'text': null,
                            'variant': 'primary'
                        };
                        var13 = 20;
                        var13 = var19[var13];
                        var15 = var15.bind(var3)(var13);
                        var13 = var15.areEmojisEqual;
                        var13 = var13.bind(var15)(var16, var17);
                        var17 = _closure1_slot0;
                        var14 = _closure1_slot2;
                        var15 = var14[var18];
                        var15 = var17.bind(var3)(var15);
                        var16 = var15.intl;
                        var15 = var16.string;
                        var14 = var14[var18];
                        var14 = var17.bind(var3)(var14);
                        var14 = var14.t;
                        if (var13) {
                            _fun89782_ip = 1536;
                            continue _fun89782
                        }
                    case 1521:
                        var13 = var14.tdsiO9;
                        var13 = var15.bind(var16)(var13);
                        _fun89782_ip = 1547;
                        continue _fun89782;
                    case 1536:
                        var14 = var14["NX+WJN"];
                        var13 = var15.bind(var16)(var14);
                    case 1547:
                        var8.text = var13;
                        var8.onPress = var12;
                        var8.disabled = var11;
                        var8 = var10.bind(var3)(var9, var8);
                        var7[5] = var8;
                        var4.children = var7;
                        var4 = var6.bind(var3)(var5, var4);
                        var0.children = var4;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                }
            };
            var2.default = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 27, 1298, 4737, 660, 1369, 1624, 33, 1297, 478, 671, 3720, 4097, 4103, 566, 4081, 1348, 3104, 6999, 1417, 5769, 795, 5579, 7008, 3278, 5208, 3941, 1234, 11665, 11695, 4084, 2]);