// modules/launchpad/native/LaunchPadPullTab.tsx
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
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var6 = var3.bind(var0)(var6);
    var10 = 1;
    var3 = var5[var10];
    var3 = var4.bind(var0)(var3);
    var7 = var3.Pressable;
    var _closure1_slot3 = var7;
    var12 = var3.StyleSheet;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.LAUNCH_PAD_MARGIN;
    var _closure1_slot4 = var7;
    var15 = var3.LAUNCH_PAD_PULL_TAB_BORDER_RADIUS;
    var _closure1_slot5 = var15;
    var14 = var3.LAUNCH_PAD_PULL_TAB_HEIGHT;
    var _closure1_slot6 = var14;
    var7 = var3.LAUNCH_PAD_PULL_TAB_HIT_SLOP;
    var _closure1_slot7 = var7;
    var7 = var3.LAUNCH_PAD_PULL_TAB_MINIMIZED_OFFSET;
    var _closure1_slot8 = var7;
    var7 = var3.LAUNCH_PAD_PULL_TAB_SCALE_FACTOR;
    var _closure1_slot9 = var7;
    var7 = var3.LAUNCH_PAD_PULL_TAB_SCALE_OFFSET;
    var _closure1_slot10 = var7;
    var13 = var3.LAUNCH_PAD_PULL_TAB_WIDTH;
    var3 = var3.LAUNCH_PAD_SPRING_CONFIG;
    var _closure1_slot11 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.CHAT_INPUT_HEIGHT;
    var _closure1_slot12 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot13 = var3;
    var3 = 5;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {
        'position': 'absolute',
        'right': 0
    };
    var9.width = var13;
    var9.height = var14;
    var9.borderTopLeftRadius = var15;
    var9.borderBottomLeftRadius = var15;
    var9.borderWidth = var10;
    var9.borderTopWidth = var10;
    var10 = 'rgba(0, 0, 0, 0.08)';
    var9.borderColor = var10;
    var10 = 6;
    var15 = var5[var10];
    var15 = var11.bind(var0)(var15);
    var15 = var15.shadows;
    var18 = var15.SHADOW_MOBILE_NAVIGATOR_X;
    var19 = var9;
    var15 = copyDataProperties(var19, var18);
    var3.pullTab = var9;
    var9 = {};
    var9.width = var13;
    var9.height = var14;
    var15 = 'center';
    var9.justifyContent = var15;
    var9.alignItems = var15;
    var3.pullTabButton = var9;
    var9 = {};
    var18 = var12.absoluteFillObject;
    var19 = var9;
    var14 = copyDataProperties(var19, var18);
    var14 = 'alignItems';
    var9[var14] = var15;
    var14 = 'justifyContent';
    var9[var14] = var15;
    var3.iconCrossfadeWrapper = var9;
    var9 = {};
    var14 = var5[var10];
    var14 = var11.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_BASE_LOW;
    var9.color = var14;
    var3.launchPad = var9;
    var9 = {};
    var18 = var12.absoluteFillObject;
    var19 = var9;
    var14 = copyDataProperties(var19, var18);
    var15 = '200%';
    var14 = 'width';
    var9[var14] = var15;
    var15 = var5[var10];
    var15 = var11.bind(var0)(var15);
    var15 = var15.colors;
    var16 = var15.BACKGROUND_SCRIM;
    var15 = 'backgroundColor';
    var9[var15] = var16;
    var3.nuxBackdrop = var9;
    var9 = {};
    var18 = var12.absoluteFillObject;
    var19 = var9;
    var15 = copyDataProperties(var19, var18);
    var3.nuxPressable = var9;
    var9 = {};
    var18 = var12.absoluteFillObject;
    var19 = var9;
    var12 = copyDataProperties(var19, var18);
    var12 = '100%';
    var9[var14] = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var13 = var13 + var12;
    var12 = 'paddingRight';
    var9[var12] = var13;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.spacing;
    var11 = var10.PX_16;
    var10 = 'paddingLeft';
    var9[var10] = var11;
    var3.nuxCopy = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot14 = var3;
    var3 = {};
    var7 = 'function LaunchPadPullTabTsx1(){const{keyboardHeight}=this.__closure;return keyboardHeight.get();}';
    var3.code = var7;
    var _closure1_slot15 = var3;
    var3 = {};
    var7 = 'function LaunchPadPullTabTsx2(keyboardHeight,keyboardHeightPrev){const{launchPadSharedState,updaters,keyboardHeightOpened,launchPadPullTabState,CHAT_INPUT_HEIGHT,LAUNCH_PAD_MARGIN,getWindowDimensionsWorklet,LAUNCH_PAD_PULL_TAB_HEIGHT,LAUNCH_PAD_PULL_TAB_SCALE_OFFSET}=this.__closure;if(launchPadSharedState.get()!==0){updaters.setLaunchPadPullTabMinimized(false);return;}if(keyboardHeightPrev==null||keyboardHeight===keyboardHeightPrev){return;}if(keyboardHeight<keyboardHeightPrev){var _keyboardHeightOpened;if(keyboardHeight===0){updaters.setLaunchPadPullTabMinimized(false);}if(keyboardHeightOpened.get()==null){keyboardHeightOpened.set(keyboardHeightPrev);}const keyboardClosePercent=1-keyboardHeight/((_keyboardHeightOpened=keyboardHeightOpened.get())!==null&&_keyboardHeightOpened!==void 0?_keyboardHeightOpened:keyboardHeightPrev);const keyboardOffsetRetractionAmount=launchPadPullTabState.get().offset*keyboardClosePercent;updaters.setLaunchPadPullTabPosition(launchPadPullTabState.get().position+keyboardOffsetRetractionAmount,launchPadPullTabState.get().offset-keyboardOffsetRetractionAmount);}else{updaters.setLaunchPadPullTabMinimized(true);if(keyboardHeightOpened.get()!=null){keyboardHeightOpened.set(undefined);}const keyboardWithChatInput=keyboardHeight+CHAT_INPUT_HEIGHT+LAUNCH_PAD_MARGIN*2;const spaceUnderPullTab=getWindowDimensionsWorklet({ignoreKeyboard:true}).height-(launchPadPullTabState.get().position+LAUNCH_PAD_PULL_TAB_HEIGHT+LAUNCH_PAD_PULL_TAB_SCALE_OFFSET);const offset=spaceUnderPullTab>keyboardWithChatInput?0:keyboardWithChatInput-spaceUnderPullTab;if(offset>0){updaters.setLaunchPadPullTabPosition(launchPadPullTabState.get().position-offset,launchPadPullTabState.get().offset+offset);}}}';
    var3.code = var7;
    var _closure1_slot16 = var3;
    var3 = {};
    var7 = 'function LaunchPadPullTabTsx3(){const{isMinimized,gestureState,LAUNCH_PAD_PULL_TAB_MINIMIZED_OFFSET,interpolate,launchPadSharedState,windowDimensions,launchPadPullTabState,LAUNCH_PAD_PULL_TAB_BORDER_RADIUS,interpolateColor,LAUNCH_PAD_MARGIN,backgroundColorTabBar,backgroundColorLaunchPad,withSpring,LAUNCH_PAD_SPRING_CONFIG}=this.__closure;let translateX=isMinimized.get()&&!gestureState.get().active?LAUNCH_PAD_PULL_TAB_MINIMIZED_OFFSET:interpolate(launchPadSharedState.get(),[0,1],[0,-(windowDimensions.get().width-16)]);if(launchPadSharedState.get()>0.9){translateX=-windowDimensions.get().width;}else if(gestureState.get().active){if(gestureState.get().requiresPop){translateX+=gestureState.get().positionOffsetX*0.3;}else{translateX-=4;}}const translateY=launchPadPullTabState.get().position;const borderRadius=launchPadSharedState.get()<=0&&!gestureState.get().active?0:LAUNCH_PAD_PULL_TAB_BORDER_RADIUS;const backgroundColor=interpolateColor(launchPadSharedState.get()*windowDimensions.get().width,[0,LAUNCH_PAD_MARGIN],[backgroundColorTabBar,backgroundColorLaunchPad]);return{transform:[{translateX:withSpring(translateX,LAUNCH_PAD_SPRING_CONFIG)},{translateY:withSpring(translateY,LAUNCH_PAD_SPRING_CONFIG)},{scale:withSpring(launchPadPullTabState.get().scale,LAUNCH_PAD_SPRING_CONFIG)}],borderTopRightRadius:withSpring(borderRadius,LAUNCH_PAD_SPRING_CONFIG),borderBottomRightRadius:withSpring(borderRadius,LAUNCH_PAD_SPRING_CONFIG),backgroundColor:backgroundColor};}';
    var3.code = var7;
    var _closure1_slot17 = var3;
    var3 = var6.memo;
    var1 = function arg0() {
        var0 = arg0;
        var12 = var0.launchPadSharedState;
        var _closure2_slot0 = var12;
        var4 = var0.launchPadPullTabState;
        var _closure2_slot1 = var4;
        var18 = var0.gestureState;
        var _closure2_slot2 = var18;
        var1 = var0.updaters;
        var _closure2_slot3 = var1;
        var0 = _closure1_slot14;
        var3 = undefined;
        var10 = var0.bind(var3)();
        var7 = _closure1_slot0;
        var8 = _closure1_slot2;
        var0 = 10;
        var0 = var8[var0];
        var2 = var7.bind(var3)(var0);
        var0 = var2.useTabBarStyles;
        var0 = var0.bind(var2)();
        var9 = _closure1_slot1;
        var2 = 9;
        var2 = var8[var2];
        var2 = var9.bind(var3)(var2);
        var17 = var2.bind(var3)();
        var _closure2_slot4 = var17;
        var2 = var10.launchPad;
        var15 = var2.color;
        var _closure2_slot5 = var15;
        var0 = var0.tabBar;
        var16 = var0.backgroundColor;
        var _closure2_slot6 = var16;
        var0 = 11;
        var0 = var8[var0];
        var2 = var9.bind(var3)(var0);
        var0 = {};
        var0.launchPadSharedState = var12;
        var0.launchPadPullTabState = var4;
        var19 = var2.bind(var3)(var0);
        var _closure2_slot7 = var19;
        var0 = 8;
        var2 = var8[var0];
        var13 = var7.bind(var3)(var2);
        var5 = var13.useAnimatedStyle;
        var2 = function() {
            _fun109936: for (var _fun109936_ip = 0;;) switch (_fun109936_ip) {
                case 0:
                    var1 = _closure2_slot7;
                    var0 = var1.get;
                    var0 = var0.bind(var1)();
                    if (!var0) {
                        _fun109936_ip = 50;
                        continue _fun109936
                    }
                case 19:
                    var1 = _closure2_slot2;
                    var0 = var1.get;
                    var0 = var0.bind(var1)();
                    var0 = var0.active;
                    if (var0) {
                        _fun109936_ip = 50;
                        continue _fun109936
                    }
                case 41:
                    var2 = _closure1_slot8;
                    _fun109936_ip = 153;
                    continue _fun109936;
                case 50:
                    var3 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 8;
                    var1 = var1[var0];
                    var0 = undefined;
                    var5 = var3.bind(var0)(var1);
                    var4 = var5.interpolate;
                    var1 = _closure2_slot0;
                    var0 = var1.get;
                    var3 = var0.bind(var1)();
                    var1 = _closure2_slot4;
                    var0 = var1.get;
                    var0 = var0.bind(var1)();
                    var1 = var0.width;
                    var0 = 16;
                    var0 = var1 - var0;
                    var1 = [0];
                    var0 = -var0;
                    var1[1] = var0;
                    var0 = [0, 1];
                    var2 = var4.bind(var5)(var3, var0, var1);
                case 153:
                    var1 = _closure2_slot0;
                    var0 = var1.get;
                    var1 = var0.bind(var1)();
                    var0 = 0.9;
                    if (!(!(var1 > var0))) {
                        _fun109936_ip = 278;
                        continue _fun109936
                    }
                case 180:
                    var1 = _closure2_slot2;
                    var0 = var1.get;
                    var0 = var0.bind(var1)();
                    var0 = var0.active;
                    var12 = var2;
                    if (!var0) {
                        _fun109936_ip = 299;
                        continue _fun109936
                    }
                case 205:
                    var1 = _closure2_slot2;
                    var0 = var1.get;
                    var0 = var0.bind(var1)();
                    var0 = var0.requiresPop;
                    if (var0) {
                        _fun109936_ip = 236;
                        continue _fun109936
                    }
                case 227:
                    var0 = 4;
                    var0 = var2 - var0;
                    _fun109936_ip = 273;
                    continue _fun109936;
                case 236:
                    var3 = _closure2_slot2;
                    var1 = var3.get;
                    var1 = var1.bind(var3)();
                    var3 = var1.positionOffsetX;
                    var1 = 0.3;
                    var1 = var1 * var3;
                    var0 = var2 + var1;
                case 273:
                    var12 = var0;
                    _fun109936_ip = 299;
                    continue _fun109936;
                case 278:
                    var1 = _closure2_slot4;
                    var0 = var1.get;
                    var0 = var0.bind(var1)();
                    var0 = var0.width;
                    var12 = -var0;
                case 299:
                    var1 = _closure2_slot1;
                    var0 = var1.get;
                    var0 = var0.bind(var1)();
                    var13 = var0.position;
                    var1 = _closure2_slot0;
                    var0 = var1.get;
                    var0 = var0.bind(var1)();
                    var5 = 0;
                    if (!(var0 <= var5)) {
                        _fun109936_ip = 360;
                        continue _fun109936
                    }
                case 336:
                    var1 = _closure2_slot2;
                    var0 = var1.get;
                    var0 = var0.bind(var1)();
                    var0 = var0.active;
                    var5 = 0;
                    if (!var0) {
                        _fun109936_ip = 367;
                        continue _fun109936
                    }
                case 360:
                    var5 = _closure1_slot5;
                case 367:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var0 = 8;
                    var0 = var7[var0];
                    var3 = undefined;
                    var9 = var6.bind(var3)(var0);
                    var8 = var9.interpolateColor;
                    var1 = _closure2_slot0;
                    var0 = var1.get;
                    var1 = var0.bind(var1)();
                    var2 = _closure2_slot4;
                    var0 = var2.get;
                    var0 = var0.bind(var2)();
                    var0 = var0.width;
                    var2 = var1 * var0;
                    var0 = _closure1_slot4;
                    var1 = [0];
                    var1[1] = var0;
                    var11 = _closure2_slot6;
                    var0 = new Array(2);
                    var0[0] = var11;
                    var11 = _closure2_slot5;
                    var0[1] = var11;
                    var1 = var8.bind(var9)(var2, var1, var0);
                    var0 = {};
                    var9 = {};
                    var2 = 12;
                    var8 = var7[var2];
                    var11 = var6.bind(var3)(var8);
                    var8 = var11.withSpring;
                    var4 = _closure1_slot11;
                    var8 = var8.bind(var11)(var12, var4);
                    var9.translateX = var8;
                    var8 = new Array(3);
                    var8[0] = var9;
                    var9 = {};
                    var11 = var7[var2];
                    var12 = var6.bind(var3)(var11);
                    var11 = var12.withSpring;
                    var11 = var11.bind(var12)(var13, var4);
                    var9.translateY = var11;
                    var8[1] = var9;
                    var9 = {};
                    var11 = var7[var2];
                    var12 = var6.bind(var3)(var11);
                    var11 = var12.withSpring;
                    var13 = _closure2_slot1;
                    var10 = var13.get;
                    var10 = var10.bind(var13)();
                    var10 = var10.scale;
                    var10 = var11.bind(var12)(var10, var4);
                    var9.scale = var10;
                    var8[2] = var9;
                    var0.transform = var8;
                    var8 = var7[var2];
                    var9 = var6.bind(var3)(var8);
                    var8 = var9.withSpring;
                    var8 = var8.bind(var9)(var5, var4);
                    var0.borderTopRightRadius = var8;
                    var2 = var7[var2];
                    var3 = var6.bind(var3)(var2);
                    var2 = var3.withSpring;
                    var2 = var2.bind(var3)(var5, var4);
                    var0.borderBottomRightRadius = var2;
                    var0.backgroundColor = var1;
                    return var0;
            }
        };
        var14 = {};
        var14.isMinimized = var19;
        var14.gestureState = var18;
        var18 = _closure1_slot8;
        var14.LAUNCH_PAD_PULL_TAB_MINIMIZED_OFFSET = var18;
        var18 = var8[var0];
        var18 = var7.bind(var3)(var18);
        var18 = var18.interpolate;
        var14.interpolate = var18;
        var14.launchPadSharedState = var12;
        var14.windowDimensions = var17;
        var14.launchPadPullTabState = var4;
        var17 = _closure1_slot5;
        var14.LAUNCH_PAD_PULL_TAB_BORDER_RADIUS = var17;
        var17 = var8[var0];
        var17 = var7.bind(var3)(var17);
        var17 = var17.interpolateColor;
        var14.interpolateColor = var17;
        var17 = _closure1_slot4;
        var14.LAUNCH_PAD_MARGIN = var17;
        var14.backgroundColorTabBar = var16;
        var14.backgroundColorLaunchPad = var15;
        var15 = 12;
        var15 = var8[var15];
        var15 = var7.bind(var3)(var15);
        var15 = var15.withSpring;
        var14.withSpring = var15;
        var15 = _closure1_slot11;
        var14.LAUNCH_PAD_SPRING_CONFIG = var15;
        var2.__closure = var14;
        var14 = 17461120174889.0;
        var2.__workletHash = var14;
        var14 = _closure1_slot17;
        var2.__initData = var14;
        var5 = var5.bind(var13)(var2);
        var2 = {};
        var2.launchPadSharedState = var12;
        var2.launchPadPullTabState = var4;
        var2.updaters = var1;
        var1 = function arg0() {
            var0 = arg0;
            var12 = var0.launchPadSharedState;
            var _closure3_slot0 = var12;
            var7 = var0.launchPadPullTabState;
            var _closure3_slot1 = var7;
            var11 = var0.updaters;
            var _closure3_slot2 = var11;
            var3 = _closure1_slot1;
            var9 = _closure1_slot2;
            var0 = 7;
            var2 = var9[var0];
            var0 = undefined;
            var2 = var3.bind(var0)(var2);
            var13 = var2.bind(var0)();
            var _closure3_slot3 = var13;
            var8 = _closure1_slot0;
            var2 = 8;
            var3 = var9[var2];
            var4 = var8.bind(var0)(var3);
            var3 = var4.useSharedValue;
            var10 = var3.bind(var4)(var0);
            var _closure3_slot4 = var10;
            var2 = var9[var2];
            var4 = var8.bind(var0)(var2);
            var3 = var4.useAnimatedReaction;
            var2 = function() {
                var1 = _closure3_slot3;
                var0 = var1.get;
                var0 = var0.bind(var1)();
                return var0;
            };
            var6 = {};
            var6.keyboardHeight = var13;
            var2.__closure = var6;
            var6 = 14545769097570.0;
            var2.__workletHash = var6;
            var6 = _closure1_slot15;
            var2.__initData = var6;
            var1 = function arg0, arg1() {
                _fun109939: for (var _fun109939_ip = 0;;) switch (_fun109939_ip) {
                    case 0:
                        var2 = arg0;
                        var1 = arg1;
                        var4 = _closure3_slot0;
                        var3 = var4.get;
                        var4 = var3.bind(var4)();
                        var3 = 0;
                        if (!(var3 !== var4)) {
                            _fun109939_ip = 50;
                            continue _fun109939
                        }
                    case 28:
                        var6 = _closure3_slot2;
                        var5 = var6.setLaunchPadPullTabMinimized;
                        var4 = false;
                        var4 = var5.bind(var6)(var4);
                        _fun109939_ip = 470;
                        continue _fun109939;
                    case 50:
                        var4 = null;
                        if (!(var4 != var1)) {
                            _fun109939_ip = 470;
                            continue _fun109939
                        }
                    case 59:
                        if (!(var2 !== var1)) {
                            _fun109939_ip = 470;
                            continue _fun109939
                        }
                    case 66:
                        if (!(!(var2 < var1))) {
                            _fun109939_ip = 311;
                            continue _fun109939
                        }
                    case 73:
                        var6 = _closure3_slot2;
                        var5 = var6.setLaunchPadPullTabMinimized;
                        var10 = true;
                        var5 = var5.bind(var6)(var10);
                        var6 = _closure3_slot4;
                        var5 = var6.get;
                        var5 = var5.bind(var6)();
                        if (!(var4 != var5)) {
                            _fun109939_ip = 123;
                            continue _fun109939
                        }
                    case 107:
                        var7 = _closure3_slot4;
                        var6 = var7.set;
                        var5 = undefined;
                        var5 = var6.bind(var7)(var5);
                    case 123:
                        var6 = _closure1_slot12;
                        var7 = var2 + var6;
                        var8 = _closure1_slot4;
                        var6 = 2;
                        var6 = var6 * var8;
                        var6 = var7 + var6;
                        var9 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var7 = 9;
                        var8 = var8[var7];
                        var7 = undefined;
                        var9 = var9.bind(var7)(var8);
                        var8 = var9.getWindowDimensionsWorklet;
                        var7 = {};
                        var7.ignoreKeyboard = var10;
                        var7 = var8.bind(var9)(var7);
                        var7 = var7.height;
                        var9 = _closure3_slot1;
                        var8 = var9.get;
                        var8 = var8.bind(var9)();
                        var9 = var8.position;
                        var8 = _closure1_slot6;
                        var8 = var9 + var8;
                        var5 = _closure1_slot10;
                        var5 = var8 + var5;
                        var5 = var7 - var5;
                        var9 = 0;
                        if (!(!(var5 > var6))) {
                            _fun109939_ip = 242;
                            continue _fun109939
                        }
                    case 238:
                        var9 = var6 - var5;
                    case 242:
                        if (!(var9 > var3)) {
                            _fun109939_ip = 470;
                            continue _fun109939
                        }
                    case 249:
                        var8 = _closure3_slot2;
                        var7 = var8.setLaunchPadPullTabPosition;
                        var10 = _closure3_slot1;
                        var5 = var10.get;
                        var5 = var5.bind(var10)();
                        var5 = var5.position;
                        var6 = var5 - var9;
                        var5 = var10.get;
                        var5 = var5.bind(var10)();
                        var5 = var5.offset;
                        var5 = var5 + var9;
                        var5 = var7.bind(var8)(var6, var5);
                        _fun109939_ip = 470;
                        continue _fun109939;
                    case 311:
                        if (!(var3 === var2)) {
                            _fun109939_ip = 332;
                            continue _fun109939
                        }
                    case 315:
                        var6 = _closure3_slot2;
                        var5 = var6.setLaunchPadPullTabMinimized;
                        var3 = false;
                        var3 = var5.bind(var6)(var3);
                    case 332:
                        var5 = _closure3_slot4;
                        var3 = var5.get;
                        var3 = var3.bind(var5)();
                        if (!(var4 == var3)) {
                            _fun109939_ip = 363;
                            continue _fun109939
                        }
                    case 349:
                        var5 = _closure3_slot4;
                        var3 = var5.set;
                        var3 = var3.bind(var5)(var1);
                    case 363:
                        var5 = _closure3_slot4;
                        var3 = var5.get;
                        var3 = var3.bind(var5)();
                        if (!(var4 != var3)) {
                            _fun109939_ip = 383;
                            continue _fun109939
                        }
                    case 380:
                        var1 = var3;
                    case 383:
                        var2 = var2 / var1;
                        var1 = 1;
                        var2 = var1 - var2;
                        var5 = _closure3_slot1;
                        var1 = var5.get;
                        var1 = var1.bind(var5)();
                        var1 = var1.offset;
                        var4 = var1 * var2;
                        var3 = _closure3_slot2;
                        var2 = var3.setLaunchPadPullTabPosition;
                        var0 = var5.get;
                        var0 = var0.bind(var5)();
                        var0 = var0.position;
                        var1 = var0 + var4;
                        var0 = var5.get;
                        var0 = var0.bind(var5)();
                        var0 = var0.offset;
                        var0 = var0 - var4;
                        var0 = var2.bind(var3)(var1, var0);
                    case 470:
                        var0 = undefined;
                        return var0;
                }
            };
            var6 = {};
            var6.launchPadSharedState = var12;
            var6.updaters = var11;
            var6.keyboardHeightOpened = var10;
            var6.launchPadPullTabState = var7;
            var7 = _closure1_slot12;
            var6.CHAT_INPUT_HEIGHT = var7;
            var7 = _closure1_slot4;
            var6.LAUNCH_PAD_MARGIN = var7;
            var7 = 9;
            var7 = var9[var7];
            var7 = var8.bind(var0)(var7);
            var7 = var7.getWindowDimensionsWorklet;
            var6.getWindowDimensionsWorklet = var7;
            var7 = _closure1_slot6;
            var6.LAUNCH_PAD_PULL_TAB_HEIGHT = var7;
            var7 = _closure1_slot10;
            var6.LAUNCH_PAD_PULL_TAB_SCALE_OFFSET = var7;
            var1.__closure = var6;
            var6 = 8060927175361.0;
            var1.__workletHash = var6;
            var5 = _closure1_slot16;
            var1.__initData = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var0;
        };
        var1 = var1.bind(var3)(var2);
        var2 = _closure1_slot13;
        var0 = var8[var0];
        var0 = var9.bind(var3)(var0);
        var1 = var0.View;
        var0 = {};
        var12 = var10.pullTab;
        var4 = new Array(2);
        var4[0] = var12;
        var4[1] = var5;
        var0.style = var4;
        var5 = _closure1_slot3;
        var4 = {};
        var12 = 'button';
        var4.accessibilityRole = var12;
        var12 = 13;
        var13 = var8[var12];
        var13 = var7.bind(var3)(var13);
        var14 = var13.intl;
        var13 = var14.string;
        var12 = var8[var12];
        var12 = var7.bind(var3)(var12);
        var12 = var12.t;
        var12 = var12.yTnIfb;
        var12 = var13.bind(var14)(var12);
        var4.accessibilityLabel = var12;
        var11 = _closure1_slot7;
        var4.hitSlop = var11;
        var10 = var10.pullTabButton;
        var4.style = var10;
        var6 = function() {
            var2 = _closure2_slot3;
            var1 = var2.setLaunchPadPullTabScale;
            var0 = _closure1_slot9;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var4.onTouchStart = var6;
        var6 = 14;
        var6 = var8[var6];
        var6 = var9.bind(var3)(var6);
        var4.onPress = var6;
        var6 = 15;
        var6 = var8[var6];
        var6 = var7.bind(var3)(var6);
        var7 = var6.ChannelListMagnifyingGlassIcon;
        var6 = {};
        var8 = 'xs';
        var6.size = var8;
        var6 = var2.bind(var3)(var7, var6);
        var4.children = var6;
        var4 = var2.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var1 = var3.bind(var6)(var1);
    var3 = 16;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/launchpad/native/LaunchPadPullTab.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 9844, 11604, 33, 1297, 671, 14152, 3720, 13028, 13618, 14154, 4081, 1234, 14107, 11103, 2]);