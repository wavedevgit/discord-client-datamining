// modules/media_keyboard/native/components/MediaKeyboardFloatingSend.tsx
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
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportAll;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var12 = var3.StyleSheet;
    var3 = 3;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot6 = var7;
    var3 = var3.jsxs;
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {};
    var15 = var12.absoluteFillObject;
    var16 = var9;
    var10 = copyDataProperties(var16, var15);
    var10 = 'top';
    var9[var10] = var0;
    var10 = 6;
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.shadows;
    var15 = var13.SHADOW_HIGH;
    var16 = var9;
    var13 = copyDataProperties(var16, var15);
    var3.sendContainer = var9;
    var9 = {};
    var15 = var12.absoluteFillObject;
    var16 = var9;
    var12 = copyDataProperties(var16, var15);
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var11 = var10.BACKGROUND_SURFACE_HIGH;
    var10 = 'color';
    var9[var10] = var11;
    var3.gradient = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot8 = var3;
    var3 = {};
    var7 = 'function MediaKeyboardFloatingSendTsx1(){const{animatedIndex,INDEX_HEADER_CHANGE_THRESHOLD,isLandscape,hasUploads}=this.__closure;const isSheetOpenOrLandscape=animatedIndex.get()>INDEX_HEADER_CHANGE_THRESHOLD||isLandscape;return isSheetOpenOrLandscape&&hasUploads;}';
    var3.code = var7;
    var _closure1_slot9 = var3;
    var3 = {};
    var7 = 'function MediaKeyboardFloatingSendTsx2(visible){const{isSendVisibleSharedValue}=this.__closure;isSendVisibleSharedValue.set(visible);}';
    var3.code = var7;
    var _closure1_slot10 = var3;
    var3 = {};
    var7 = 'function MediaKeyboardFloatingSendTsx3(){const{insetFab,tokens,withSpring,sendVisibleSharedValue}=this.__closure;return{height:insetFab+tokens.spacing.PX_64+tokens.spacing.PX_32,opacity:withSpring(sendVisibleSharedValue.get()?1:0)};}';
    var3.code = var7;
    var _closure1_slot11 = var3;
    var3 = {};
    var7 = "function MediaKeyboardFloatingSendTsx4(){const{sendVisibleSharedValue}=this.__closure;return{pointerEvents:sendVisibleSharedValue.get()?'box-none':'none'};}";
    var3.code = var7;
    var _closure1_slot12 = var3;
    var3 = var6.forwardRef;
    var1 = function(arg0, arg1) { // Original name: MediaKeyboardFloatingSendInner, environment: var1
        _fun108463: for (var _fun108463_ip = 0;;) switch (_fun108463_ip) {
            case 0:
                var1 = arg0;
                var10 = var1.animatedIndex;
                var7 = var1.channelId;
                var0 = var1.draftType;
                var9 = var1.onSend;
                var3 = undefined;
                var _closure2_slot2 = var3;
                var _closure2_slot3 = var3;
                var1 = _closure1_slot8;
                var12 = var1.bind(var3)();
                var _closure2_slot0 = var12;
                var4 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 10;
                var1 = var8[var1];
                var1 = var4.bind(var3)(var1);
                var6 = var1.ChatInputIaMobileExperiment;
                var4 = var6.useConfig;
                var1 = {};
                var11 = 'MediaKeyboardFloatingSendInner';
                var1.location = var11;
                var1 = var4.bind(var6)(var1);
                var4 = var1.iaUsesFloatingBarForOverflow;
                var6 = _closure1_slot1;
                var1 = 11;
                var1 = var8[var1];
                var1 = var6.bind(var3)(var1);
                var11 = var1.bind(var3)();
                var8 = _closure1_slot4;
                var1 = var8.useState;
                var6 = null;
                var13 = var1.bind(var8)(var6);
                var8 = _closure1_slot3;
                var1 = 2;
                var14 = var8.bind(var3)(var13, var1);
                var8 = 0;
                var1 = var14[var8];
                var13 = 1;
                var13 = var14[var13];
                var _closure2_slot1 = var13;
                if (!(var6 == var1)) {
                    _fun108463_ip = 183;
                    continue _fun108463
                }
            case 178:
                var1 = var11.bottom;
            case 183:
                var8 = 0;
                if (var4) {
                    _fun108463_ip = 218;
                    continue _fun108463
                }
            case 188:
                var13 = _closure1_slot1;
                var14 = _closure1_slot2;
                var11 = 6;
                var11 = var14[var11];
                var11 = var13.bind(var3)(var11);
                var11 = var11.spacing;
                var8 = var11.PX_16;
            case 218:
                var8 = var1 + var8;
                _closure2_slot2 = var8;
                var1 = {};
                var1.animatedIndex = var10;
                var1.channelId = var7;
                var1.draftType = var0;
                var0 = function(arg0) { // Original name: useSendVisibleSharedValue, environment: var2
                    var0 = arg0;
                    var9 = var0.animatedIndex;
                    var _closure3_slot0 = var9;
                    var11 = var0.channelId;
                    var _closure3_slot1 = var11;
                    var0 = var0.draftType;
                    var _closure3_slot2 = var0;
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var2 = 7;
                    var2 = var6[var2];
                    var3 = undefined;
                    var10 = var4.bind(var3)(var2);
                    var8 = var10.useStateFromStores;
                    var2 = _closure1_slot5;
                    var7 = new Array(1);
                    var7[0] = var2;
                    var2 = new Array(2);
                    var2[0] = var11;
                    var2[1] = var0;
                    var0 = function() { // Environment: var1
                        var3 = _closure1_slot5;
                        var2 = var3.getUploadCount;
                        var1 = _closure3_slot1;
                        var0 = _closure3_slot2;
                        var1 = var2.bind(var3)(var1, var0);
                        var0 = 0;
                        var0 = var1 > var0;
                        return var0;
                    };
                    var7 = var8.bind(var10)(var7, var0, var2);
                    var _closure3_slot3 = var7;
                    var2 = 8;
                    var0 = var6[var2];
                    var10 = var4.bind(var3)(var0);
                    var8 = var10.useSharedValue;
                    var0 = false;
                    var0 = var8.bind(var10)(var0);
                    var _closure3_slot4 = var0;
                    var8 = 9;
                    var10 = var6[var8];
                    var11 = var4.bind(var3)(var10);
                    var10 = var11.useOrientation;
                    var10 = var10.bind(var11)();
                    var8 = var6[var8];
                    var8 = var4.bind(var3)(var8);
                    var8 = var8.OrientationType;
                    var8 = var8.LANDSCAPE;
                    var8 = var10 === var8;
                    var _closure3_slot5 = var8;
                    var2 = var6[var2];
                    var4 = var4.bind(var3)(var2);
                    var3 = var4.useAnimatedReaction;
                    var2 = function() { // Original name: c, environment: var1
                        _fun108466: for (var _fun108466_ip = 0;;) switch (_fun108466_ip) {
                            case 0:
                                var2 = _closure3_slot0;
                                var0 = var2.get;
                                var2 = var0.bind(var2)();
                                var0 = 0.7;
                                var0 = var2 > var0;
                                if (var0) {
                                    _fun108466_ip = 37;
                                    continue _fun108466
                                }
                            case 33:
                                var0 = _closure3_slot5;
                            case 37:
                                if (!var0) {
                                    _fun108466_ip = 44;
                                    continue _fun108466
                                }
                            case 40:
                                var0 = _closure3_slot3;
                            case 44:
                                return var0;
                        }
                    };
                    var6 = {};
                    var6.animatedIndex = var9;
                    var9 = 0.7;
                    var6.INDEX_HEADER_CHANGE_THRESHOLD = var9;
                    var6.isLandscape = var8;
                    var6.hasUploads = var7;
                    var2.__closure = var6;
                    var6 = 15911908244940.0;
                    var2.__workletHash = var6;
                    var6 = _closure1_slot9;
                    var2.__initData = var6;
                    var1 = function(arg0) { // Original name: l, environment: var1
                        var2 = _closure3_slot4;
                        var1 = var2.set;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        var0 = undefined;
                        return var0;
                    };
                    var6 = {};
                    var6.isSendVisibleSharedValue = var0;
                    var1.__closure = var6;
                    var6 = 10753585819648.0;
                    var1.__workletHash = var6;
                    var5 = _closure1_slot10;
                    var1.__initData = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var16 = var0.bind(var3)(var1);
                _closure2_slot3 = var16;
                var11 = _closure1_slot0;
                var10 = _closure1_slot2;
                var0 = 8;
                var1 = var10[var0];
                var14 = var11.bind(var3)(var1);
                var13 = var14.useAnimatedStyle;
                var7 = function() { // Original name: I, environment: var2
                    _fun108468: for (var _fun108468_ip = 0;;) switch (_fun108468_ip) {
                        case 0:
                            var0 = {};
                            var8 = _closure2_slot2;
                            var7 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var3 = 6;
                            var6 = var5[var3];
                            var4 = undefined;
                            var6 = var7.bind(var4)(var6);
                            var6 = var6.spacing;
                            var6 = var6.PX_64;
                            var6 = var8 + var6;
                            var3 = var5[var3];
                            var3 = var7.bind(var4)(var3);
                            var3 = var3.spacing;
                            var3 = var3.PX_32;
                            var3 = var6 + var3;
                            var0.height = var3;
                            var3 = _closure1_slot0;
                            var2 = 12;
                            var2 = var5[var2];
                            var3 = var3.bind(var4)(var2);
                            var2 = var3.withSpring;
                            var4 = _closure2_slot3;
                            var1 = var4.get;
                            var4 = var1.bind(var4)();
                            var1 = 0;
                            if (!var4) {
                                _fun108468_ip = 119;
                                continue _fun108468
                            }
                        case 116:
                            var1 = 1;
                        case 119:
                            var1 = var2.bind(var3)(var1);
                            var0.opacity = var1;
                            return var0;
                    }
                };
                var15 = {};
                var15.insetFab = var8;
                var1 = _closure1_slot1;
                var17 = 6;
                var17 = var10[var17];
                var17 = var1.bind(var3)(var17);
                var15.tokens = var17;
                var17 = 12;
                var17 = var10[var17];
                var17 = var11.bind(var3)(var17);
                var17 = var17.withSpring;
                var15.withSpring = var17;
                var15.sendVisibleSharedValue = var16;
                var7.__closure = var15;
                var15 = 6460157053585.0;
                var7.__workletHash = var15;
                var15 = _closure1_slot11;
                var7.__initData = var15;
                var13 = var13.bind(var14)(var7);
                var7 = var10[var0];
                var14 = var11.bind(var3)(var7);
                var11 = var14.useAnimatedProps;
                var7 = function() { // Original name: V, environment: var2
                    _fun108469: for (var _fun108469_ip = 0;;) switch (_fun108469_ip) {
                        case 0:
                            var0 = {};
                            var2 = _closure2_slot3;
                            var1 = var2.get;
                            var2 = var1.bind(var2)();
                            var1 = 'none';
                            if (!var2) {
                                _fun108469_ip = 31;
                                continue _fun108469
                            }
                        case 25:
                            var1 = 'box-none';
                        case 31:
                            var0.pointerEvents = var1;
                            return var0;
                    }
                };
                var15 = {};
                var15.sendVisibleSharedValue = var16;
                var7.__closure = var15;
                var15 = 1097586248797.0;
                var7.__workletHash = var15;
                var15 = _closure1_slot12;
                var7.__initData = var15;
                var7 = var11.bind(var14)(var7);
                var16 = _closure1_slot4;
                var15 = var16.useMemo;
                var11 = var12.gradient;
                var11 = var11.color;
                var14 = new Array(1);
                var14[0] = var11;
                var11 = function() { // Environment: var2
                    var0 = {};
                    var8 = 0;
                    var1 = {
                        'x': 0,
                        'y': 0
                    };
                    var0.start = var1;
                    var1 = {
                        'x': 0,
                        'y': 1
                    };
                    var0.end = var1;
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var3 = 13;
                    var1 = var6[var3];
                    var4 = undefined;
                    var7 = var5.bind(var4)(var1);
                    var2 = _closure2_slot0;
                    var1 = var2.gradient;
                    var1 = var1.color;
                    var7 = var7.bind(var4)(var1);
                    var1 = var7.alpha;
                    var7 = var1.bind(var7)(var8);
                    var1 = var7.hex;
                    var7 = var1.bind(var7)();
                    var1 = new Array(2);
                    var1[0] = var7;
                    var3 = var6[var3];
                    var3 = var5.bind(var4)(var3);
                    var2 = var2.gradient;
                    var2 = var2.color;
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.hex;
                    var2 = var2.bind(var3)();
                    var1[1] = var2;
                    var0.colors = var1;
                    return var0;
                };
                var11 = var15.bind(var16)(var11, var14);
                var15 = var16.useImperativeHandle;
                var14 = arg1;
                var2 = function() { // Environment: var2
                    var0 = {};
                    var1 = _closure2_slot1;
                    var0.setInsetFab = var1;
                    return var0;
                };
                var2 = var15.bind(var16)(var14, var2);
                var2 = _closure1_slot7;
                var0 = var10[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.View;
                var0 = {};
                var10 = new Array(2);
                var10[0] = var13;
                var13 = var12.sendContainer;
                var10[1] = var13;
                var0.style = var10;
                var0.animatedProps = var7;
                var6 = null;
                if (!var4) {
                    _fun108463_ip = 630;
                    continue _fun108463
                }
            case 565:
                var10 = _closure1_slot6;
                var7 = _closure1_slot1;
                var13 = _closure1_slot2;
                var4 = 14;
                var4 = var13[var4];
                var7 = var7.bind(var3)(var4);
                var4 = {};
                var12 = var12.gradient;
                var4.style = var12;
                var19 = var4;
                var18 = var11;
                var11 = copyDataProperties(var19, var18);
                var12 = 'none';
                var11 = 'pointerEvents';
                var4[var11] = var12;
                var6 = var10.bind(var3)(var7, var4);
            case 630:
                var4 = new Array(2);
                var4[0] = var6;
                var7 = _closure1_slot6;
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var5 = 15;
                var5 = var12[var5];
                var5 = var11.bind(var3)(var5);
                var6 = var5.FloatingActionButton;
                var5 = {};
                var10 = 16;
                var13 = var12[var10];
                var13 = var11.bind(var3)(var13);
                var14 = var13.intl;
                var13 = var14.string;
                var10 = var12[var10];
                var10 = var11.bind(var3)(var10);
                var10 = var10.t;
                var10 = var10.TXNS7S;
                var10 = var13.bind(var14)(var10);
                var5.accessibilityLabel = var10;
                var10 = 17;
                var10 = var12[var10];
                var10 = var11.bind(var3)(var10);
                var11 = var10.SendMessageIcon;
                var10 = {};
                var10 = var7.bind(var3)(var11, var10);
                var5.icon = var10;
                var5.onPress = var9;
                var5.positionBottom = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var3 = var3.bind(var6)(var1);
    var1 = var6.memo;
    var1 = var1.bind(var6)(var3);
    var3 = 18;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/media_keyboard/native/components/MediaKeyboardFloatingSend.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 3959, 33, 1297, 671, 566, 3679, 7779, 9546, 1568, 4040, 669, 4057, 6994, 1234, 3215, 2]);