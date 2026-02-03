// modules/chat/native/TypingIndicator.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun89577: for (var _fun89577_ip = 0;;) switch (_fun89577_ip) {
            case 0:
                var0 = arg0;
                var15 = var0.channel;
                var6 = var0.typingUserIds;
                var10 = var0.transitionState;
                var _closure2_slot0 = var10;
                var9 = var0.cleanUp;
                var _closure2_slot1 = var9;
                var1 = _closure1_slot1;
                var5 = _closure1_slot2;
                var0 = 7;
                var0 = var5[var0];
                var3 = undefined;
                var4 = var1.bind(var3)(var0);
                var0 = {};
                var7 = var15.id;
                var0.channelId = var7;
                var7 = var15.getGuildId;
                var7 = var7.bind(var15)();
                var0.guildId = var7;
                var0.typingUserIds = var6;
                var14 = var4.bind(var3)(var0);
                var11 = _closure1_slot0;
                var0 = 8;
                var4 = var5[var0];
                var6 = var11.bind(var3)(var4);
                var4 = var6.useSharedValue;
                var13 = var4.bind(var6)(var3);
                var _closure2_slot2 = var13;
                var8 = _closure1_slot3;
                var7 = var8.useCallback;
                var6 = new Array(1);
                var6[0] = var13;
                var4 = function(arg0) { // Environment: var2
                    var0 = arg0;
                    var0 = var0.nativeEvent;
                    var2 = _closure2_slot2;
                    var1 = var2.set;
                    var0 = var0.layout;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var4 = var7.bind(var8)(var4, var6);
                var6 = _closure1_slot9;
                var18 = var6.bind(var3)();
                var6 = var5[var0];
                var7 = var11.bind(var3)(var6);
                var6 = var7.useAnimatedStyle;
                var2 = function() {
                    _fun89579: for (var _fun89579_ip = 0;;) switch (_fun89579_ip) {
                        case 0:
                            var1 = _closure2_slot2;
                            var0 = var1.get;
                            var3 = var0.bind(var1)();
                            var1 = null;
                            var4 = var1 != var3;
                            if (!var4) {
                                _fun89579_ip = 64;
                                continue _fun89579
                            }
                        case 25:
                            var2 = var3.y;
                            var0 = var2.toFixed;
                            var6 = 2;
                            var2 = var0.bind(var2)(var6);
                            var5 = var3.height;
                            var0 = var5.toFixed;
                            var0 = var0.bind(var5)(var6);
                            var4 = var2 === var0;
                        case 64:
                            if (!var4) {
                                _fun89579_ip = 112;
                                continue _fun89579
                            }
                        case 67:
                            var2 = _closure2_slot0;
                            var6 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var0 = 9;
                            var5 = var5[var0];
                            var0 = undefined;
                            var0 = var6.bind(var0)(var5);
                            var0 = var0.TransitionStates;
                            var0 = var0.YEETED;
                            var4 = var2 !== var0;
                        case 112:
                            var0 = {};
                            var2 = 0;
                            if (!var4) {
                                _fun89579_ip = 122;
                                continue _fun89579
                            }
                        case 119:
                            var2 = 1;
                        case 122:
                            var0.opacity = var2;
                            var2 = var1 == var3;
                            var12 = undefined;
                            var1 = undefined;
                            if (var2) {
                                _fun89579_ip = 142;
                                continue _fun89579
                            }
                        case 137:
                            var1 = var3.height;
                        case 142:
                            var0.top = var1;
                            var2 = {};
                            var6 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var5 = 10;
                            var5 = var8[var5];
                            var6 = var6.bind(var12)(var5);
                            var5 = var6.withSpring;
                            var7 = 0;
                            if (!var4) {
                                _fun89579_ip = 189;
                                continue _fun89579
                            }
                        case 181:
                            var3 = var3.height;
                            var7 = -var3;
                        case 189:
                            var11 = _closure1_slot0;
                            var13 = _closure1_slot2;
                            var3 = 11;
                            var3 = var13[var3];
                            var3 = var11.bind(var12)(var3);
                            var16 = var3.springStandard;
                            var3 = function arg0() {
                                _fun89580: for (var _fun89580_ip = 0;;) switch (_fun89580_ip) {
                                    case 0:
                                        var0 = arg0;
                                        if (!var0) {
                                            _fun89580_ip = 54;
                                            continue _fun89580
                                        }
                                    case 6:
                                        var2 = _closure2_slot0;
                                        var4 = _closure1_slot0;
                                        var3 = _closure1_slot2;
                                        var1 = 9;
                                        var3 = var3[var1];
                                        var1 = undefined;
                                        var1 = var4.bind(var1)(var3);
                                        var1 = var1.TransitionStates;
                                        var1 = var1.YEETED;
                                        var0 = var2 === var1;
                                    case 54:
                                        if (!var0) {
                                            _fun89580_ip = 103;
                                            continue _fun89580
                                        }
                                    case 57:
                                        var2 = _closure1_slot0;
                                        var1 = _closure1_slot2;
                                        var0 = 8;
                                        var0 = var1[var0];
                                        var1 = undefined;
                                        var3 = var2.bind(var1)(var0);
                                        var2 = var3.runOnJS;
                                        var0 = _closure2_slot1;
                                        var0 = var2.bind(var3)(var0);
                                        var0 = var0.bind(var1)();
                                    case 103:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var8 = {};
                            var10 = _closure2_slot0;
                            var8.transitionState = var10;
                            var10 = 9;
                            var10 = var13[var10];
                            var10 = var11.bind(var12)(var10);
                            var10 = var10.TransitionStates;
                            var8.TransitionStates = var10;
                            var10 = 8;
                            var10 = var13[var10];
                            var10 = var11.bind(var12)(var10);
                            var10 = var10.runOnJS;
                            var8.runOnJS = var10;
                            var9 = _closure2_slot1;
                            var8.cleanUp = var9;
                            var3.__closure = var8;
                            var8 = 10182848545071.0;
                            var3.__workletHash = var8;
                            var1 = _closure1_slot11;
                            var3.__initData = var1;
                            var15 = 'respect-motion-settings';
                            var18 = var6;
                            var17 = var7;
                            var14 = var3;
                            var1 = var18[var5](var17, var16, var15, var14, var13);
                            var2.translateY = var1;
                            var1 = new Array(1);
                            var1[0] = var2;
                            var0.transform = var1;
                            return var0;
                    }
                };
                var8 = {};
                var8.typingIndicatorLayout = var13;
                var8.transitionState = var10;
                var10 = 9;
                var10 = var5[var10];
                var10 = var11.bind(var3)(var10);
                var10 = var10.TransitionStates;
                var8.TransitionStates = var10;
                var10 = 10;
                var10 = var5[var10];
                var10 = var11.bind(var3)(var10);
                var10 = var10.withSpring;
                var8.withSpring = var10;
                var10 = 11;
                var10 = var5[var10];
                var10 = var11.bind(var3)(var10);
                var10 = var10.springStandard;
                var8.springStandard = var10;
                var10 = var5[var0];
                var10 = var11.bind(var3)(var10);
                var10 = var10.runOnJS;
                var8.runOnJS = var10;
                var8.cleanUp = var9;
                var2.__closure = var8;
                var8 = 8910299992702.0;
                var2.__workletHash = var8;
                var8 = _closure1_slot10;
                var2.__initData = var8;
                var6 = var6.bind(var7)(var2);
                var2 = _closure1_slot7;
                var0 = var5[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.View;
                var0 = {};
                var7 = var18.typingWrapper;
                var5 = new Array(2);
                var5[0] = var7;
                var5[1] = var6;
                var0.style = var5;
                var0.onLayout = var4;
                var6 = _closure1_slot8;
                var5 = _closure1_slot4;
                var4 = {};
                var7 = var18.wrapperHoriz;
                var4.style = var7;
                var9 = _closure1_slot8;
                var8 = _closure1_slot4;
                var7 = {};
                var10 = var18.horiz;
                var7.style = var10;
                var13 = null;
                var10 = var13 != var14;
                var11 = null;
                if (!var10) {
                    _fun89577_ip = 458;
                    continue _fun89577
                }
            case 426:
                var17 = _closure1_slot7;
                var16 = _closure1_slot1;
                var19 = _closure1_slot2;
                var10 = 12;
                var10 = var19[var10];
                var16 = var16.bind(var3)(var10);
                var10 = {};
                var11 = var17.bind(var3)(var16, var10);
            case 458:
                var10 = new Array(2);
                var10[0] = var11;
                var17 = _closure1_slot7;
                var16 = _closure1_slot0;
                var19 = _closure1_slot2;
                var11 = 13;
                var11 = var19[var11];
                var11 = var16.bind(var3)(var11);
                var16 = var11.Text;
                var11 = {
                    'style': null,
                    'lineClamp': 1,
                    'maxFontSizeMultiplier': 2,
                    'variant': 'text-xs/medium',
                    'color': 'interactive-text-default',
                    'ellipsizeMode': 'tail'
                };
                var18 = var18.text;
                var11.style = var18;
                var11.children = var14;
                var11 = var17.bind(var3)(var16, var11);
                var10[1] = var11;
                var7.children = var10;
                var8 = var9.bind(var3)(var8, var7);
                var7 = new Array(2);
                var7[0] = var8;
                var9 = var15.rateLimitPerUser;
                var8 = 0;
                var9 = var9 > var8;
                var8 = null;
                if (!var9) {
                    _fun89577_ip = 634;
                    continue _fun89577
                }
            case 569:
                var11 = _closure1_slot7;
                var10 = _closure1_slot1;
                var16 = _closure1_slot2;
                var9 = 14;
                var9 = var16[var9];
                var10 = var10.bind(var3)(var9);
                var9 = {};
                var15 = var15.id;
                var9.channelId = var15;
                var13 = var13 != var14;
                var9.hasTypingText = var13;
                var12 = _closure1_slot6;
                var12 = var12.SendMessage;
                var9.slowmodeType = var12;
                var8 = var11.bind(var3)(var10, var9);
            case 634:
                var7[1] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var0 = function arg0, arg1, arg2, arg3() {
        var4 = _closure1_slot7;
        var3 = _closure1_slot12;
        var2 = {};
        var6 = arg1;
        var7 = var2;
        var0 = copyDataProperties(var7, var6);
        var1 = arg2;
        var0 = 'transitionState';
        var2[var0] = var1;
        var1 = arg3;
        var0 = 'cleanUp';
        var2[var0] = var1;
        var1 = undefined;
        var0 = arg0;
        var0 = var4.bind(var1)(var3, var2, var0);
        return var0;
    };
    var _closure1_slot13 = var0;
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
    var3 = arg3;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var10 = 1;
    var3 = var5[var10];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.useChatShowingAutoComplete;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.SlowmodeType;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot7 = var6;
    var3 = var3.jsxs;
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var6 = {};
    var9 = {
        'paddingVertical': 4,
        'paddingHorizontal': 16,
        'alignSelf': 'stretch'
    };
    var3 = 16;
    var11 = 6;
    var13 = var5[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.MOBILE_TYPING_INDICATOR_BACKGROUND_DEFAULT;
    var9.backgroundColor = var13;
    var6.typingWrapper = var9;
    var9 = {
        'justifyContent': 'space-between',
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var6.wrapperHoriz = var9;
    var9 = {
        'marginRight': null,
        'alignItems': 'center',
        'flexDirection': 'row',
        'flex': 1
    };
    var11 = var5[var11];
    var11 = var12.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_8;
    var9.marginRight = var11;
    var6.horiz = var9;
    var9 = {};
    var9.flex = var10;
    var6.text = var9;
    var6 = var7.bind(var8)(var6);
    var _closure1_slot9 = var6;
    var6 = {};
    var7 = "function TypingIndicatorTsx1(){const{typingIndicatorLayout,transitionState,TransitionStates,withSpring,springStandard,runOnJS,cleanUp}=this.__closure;const layout=typingIndicatorLayout.get();const laidOutAndTransitioned=layout!=null&&layout.y.toFixed(2)===layout.height.toFixed(2)&&transitionState!==TransitionStates.YEETED;return{opacity:!laidOutAndTransitioned?0:1,top:layout===null||layout===void 0?void 0:layout.height,transform:[{translateY:withSpring(laidOutAndTransitioned?-layout.height:0,springStandard,'respect-motion-settings',function(finished){if(finished&&transitionState===TransitionStates.YEETED){runOnJS(cleanUp)();}})}]};}";
    var6.code = var7;
    var _closure1_slot10 = var6;
    var6 = {};
    var7 = 'function TypingIndicatorTsx2(finished){const{transitionState,TransitionStates,runOnJS,cleanUp}=this.__closure;if(finished&&transitionState===TransitionStates.YEETED){runOnJS(cleanUp)();}}';
    var6.code = var7;
    var _closure1_slot11 = var6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/chat/native/TypingIndicator.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var1 = arg0;
        var10 = var1.channel;
        var _closure2_slot0 = var10;
        var2 = var1.screenIndex;
        var1 = _closure1_slot5;
        var3 = undefined;
        var8 = var1.bind(var3)(var2);
        var _closure2_slot1 = var8;
        var1 = _closure1_slot0;
        var6 = _closure1_slot2;
        var2 = 15;
        var2 = var6[var2];
        var9 = var1.bind(var3)(var2);
        var7 = var9.useTypingUserIds;
        var5 = var10.id;
        var2 = 4;
        var9 = var7.bind(var9)(var5, var2);
        var _closure2_slot2 = var9;
        var7 = _closure1_slot3;
        var5 = var7.useMemo;
        var2 = new Array(3);
        var2[0] = var10;
        var2[1] = var9;
        var2[2] = var8;
        var0 = function() { // Environment: var0
            _fun89583: for (var _fun89583_ip = 0;;) switch (_fun89583_ip) {
                case 0:
                    var0 = _closure2_slot0;
                    var0 = var0.rateLimitPerUser;
                    var1 = 0;
                    if (!(!(var0 > var1))) {
                        _fun89583_ip = 37;
                        continue _fun89583
                    }
                case 19:
                    var0 = _closure2_slot2;
                    var0 = var0.length;
                    var1 = var0 > var1;
                    var0 = undefined;
                    if (!var1) {
                        _fun89583_ip = 68;
                        continue _fun89583
                    }
                case 37:
                    var1 = _closure2_slot1;
                    var0 = undefined;
                    if (var1) {
                        _fun89583_ip = 68;
                        continue _fun89583
                    }
                case 46:
                    var1 = {};
                    var3 = _closure2_slot0;
                    var1.channel = var3;
                    var2 = _closure2_slot2;
                    var1.typingUserIds = var2;
                    var0 = var1;
                case 68:
                    return var0;
            }
        };
        var5 = var5.bind(var7)(var0, var2);
        var2 = _closure1_slot7;
        var0 = 9;
        var0 = var6[var0];
        var0 = var1.bind(var3)(var0);
        var1 = var0.TransitionItem;
        var0 = {};
        var0.item = var5;
        var4 = _closure1_slot13;
        var0.renderItem = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 7889, 6530, 33, 1297, 671, 11625, 3711, 4019, 4072, 4078, 5759, 3932, 11640, 11621, 2]);