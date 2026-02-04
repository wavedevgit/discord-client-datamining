// modules/chat/native/ChatViewWrapperAnimatedKeyboard.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var10 = 0;
    var6 = var5[var10];
    var3 = metroImportAll;
    var0 = undefined;
    var7 = var3.bind(var0)(var6);
    var _closure1_slot3 = var7;
    var9 = 1;
    var3 = var5[var9];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot5 = var6;
    var3 = var3.jsxs;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var8 = var3.Easing;
    var6 = var8.bezier;
    var14 = 0.2;
    var15 = var8;
    var13 = 0;
    var12 = 0;
    var11 = var9;
    var6 = var15[var6](var14, var13, var12, var11, var10);
    var3 = {};
    var8 = 4;
    var8 = var5[var8];
    var8 = var4.bind(var0)(var8);
    var8 = var8.timingStandardDuration;
    var3.duration = var8;
    var3.easing = var6;
    var _closure1_slot7 = var3;
    var3 = {};
    var6 = 'function ChatViewWrapperAnimatedKeyboardTsx1(){const{animatedHeight}=this.__closure;return animatedHeight.get();}';
    var3.code = var6;
    var _closure1_slot8 = var3;
    var3 = {};
    var6 = 'function ChatViewWrapperAnimatedKeyboardTsx2(height,heightPrev){const{animatedAdjustedMargin,animatedAdjustedMarginPending}=this.__closure;if(heightPrev==null){return;}if(height<heightPrev){animatedAdjustedMargin.set(height);animatedAdjustedMarginPending.set(-1);}else{animatedAdjustedMarginPending.set(height);}}';
    var3.code = var6;
    var _closure1_slot9 = var3;
    var3 = {};
    var6 = "function ChatViewWrapperAnimatedKeyboardTsx3(){const{animatedAdjustedMargin,withTiming,animatedHeight,INSET_ANIMATION_CONFIG2,animatedAdjustedMarginPending}=this.__closure;return{flex:1,marginTop:animatedAdjustedMargin.get(),transform:[{translateY:withTiming(-animatedHeight.get(),INSET_ANIMATION_CONFIG2,'respect-motion-settings',function(finished){if(!finished){return;}if(animatedAdjustedMarginPending.get()!==-1){animatedAdjustedMargin.set(animatedAdjustedMarginPending.get());animatedAdjustedMarginPending.set(-1);}})}]};}";
    var3.code = var6;
    var _closure1_slot10 = var3;
    var3 = {};
    var6 = 'function ChatViewWrapperAnimatedKeyboardTsx4(finished){const{animatedAdjustedMarginPending,animatedAdjustedMargin}=this.__closure;if(!finished){return;}if(animatedAdjustedMarginPending.get()!==-1){animatedAdjustedMargin.set(animatedAdjustedMarginPending.get());animatedAdjustedMarginPending.set(-1);}}';
    var3.code = var6;
    var _closure1_slot11 = var3;
    var6 = var7.memo;
    var3 = function(arg0) { // Environment: var1
        var0 = arg0;
        var4 = var0.channelId;
        var5 = _closure1_slot1;
        var6 = _closure1_slot2;
        var2 = 7;
        var2 = var6[var2];
        var3 = undefined;
        var2 = var5.bind(var3)(var2);
        var7 = var2.bind(var3)();
        var _closure2_slot0 = var7;
        var2 = 8;
        var2 = var6[var2];
        var2 = var5.bind(var3)(var2);
        var6 = var2.bind(var3)(var4);
        var5 = _closure1_slot3;
        var4 = var5.useMemo;
        var2 = new Array(1);
        var2[0] = var7;
        var1 = function() { // Environment: var1
            var0 = {
                'position': 'absolute',
                'bottom': null,
                'height': null,
                'right': 0,
                'left': 0
            };
            var1 = _closure2_slot0;
            var2 = -var1;
            var0.bottom = var2;
            var0.height = var1;
            return var0;
        };
        var5 = var4.bind(var5)(var1, var2);
        var2 = _closure1_slot5;
        var1 = _closure1_slot4;
        var0 = {};
        var4 = new Array(2);
        var4[0] = var6;
        var4[1] = var5;
        var0.style = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var3 = var6.bind(var7)(var3);
    var _closure1_slot12 = var3;
    var3 = 13;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/chat/native/ChatViewWrapperAnimatedKeyboard.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var0 = arg0;
        var13 = var0.channelId;
        var14 = var0.children;
        var16 = var0.stickyHeader;
        var15 = var0.style;
        var9 = _closure1_slot1;
        var12 = _closure1_slot2;
        var0 = 9;
        var0 = var12[var0];
        var3 = undefined;
        var0 = var9.bind(var3)(var0);
        var7 = var0.bind(var3)(var13);
        var0 = function() {
            var2 = _closure1_slot1;
            var10 = _closure1_slot2;
            var1 = 5;
            var1 = var10[var1];
            var9 = undefined;
            var1 = var2.bind(var9)(var1);
            var6 = var1.bind(var9)();
            var _closure3_slot0 = var6;
            var8 = _closure1_slot0;
            var1 = 3;
            var2 = var10[var1];
            var5 = var8.bind(var9)(var2);
            var4 = var5.useSharedValue;
            var2 = var6.get;
            var2 = var2.bind(var6)();
            var7 = var4.bind(var5)(var2);
            var _closure3_slot1 = var7;
            var2 = var10[var1];
            var5 = var8.bind(var9)(var2);
            var4 = var5.useSharedValue;
            var2 = -1;
            var5 = var4.bind(var5)(var2);
            var _closure3_slot2 = var5;
            var2 = var10[var1];
            var12 = var8.bind(var9)(var2);
            var11 = var12.useAnimatedReaction;
            var4 = function() {
                var1 = _closure3_slot0;
                var0 = var1.get;
                var0 = var0.bind(var1)();
                return var0;
            };
            var2 = {};
            var2.animatedHeight = var6;
            var4.__closure = var2;
            var2 = 9219066704490.0;
            var4.__workletHash = var2;
            var2 = _closure1_slot8;
            var4.__initData = var2;
            var2 = function arg0, arg1() {
                _fun76960: for (var _fun76960_ip = 0;;) switch (_fun76960_ip) {
                    case 0:
                        var3 = arg0;
                        var0 = arg1;
                        var1 = null;
                        if (!(var1 != var0)) {
                            _fun76960_ip = 72;
                            continue _fun76960
                        }
                    case 12:
                        if (!(!(var3 < var0))) {
                            _fun76960_ip = 35;
                            continue _fun76960
                        }
                    case 16:
                        var1 = _closure3_slot2;
                        var0 = var1.set;
                        var0 = var0.bind(var1)(var3);
                        _fun76960_ip = 72;
                        continue _fun76960;
                    case 35:
                        var2 = _closure3_slot1;
                        var1 = var2.set;
                        var1 = var1.bind(var2)(var3);
                        var2 = _closure3_slot2;
                        var1 = var2.set;
                        var0 = -1;
                        var0 = var1.bind(var2)(var0);
                    case 72:
                        var0 = undefined;
                        return var0;
                }
            };
            var13 = {};
            var13.animatedAdjustedMargin = var7;
            var13.animatedAdjustedMarginPending = var5;
            var2.__closure = var13;
            var13 = 15141457454312.0;
            var2.__workletHash = var13;
            var13 = _closure1_slot9;
            var2.__initData = var13;
            var2 = var11.bind(var12)(var4, var2);
            var1 = var10[var1];
            var2 = var8.bind(var9)(var1);
            var1 = var2.useAnimatedStyle;
            var0 = function() {
                var0 = {};
                var1 = 1;
                var0.flex = var1;
                var9 = _closure3_slot1;
                var1 = var9.get;
                var1 = var1.bind(var9)();
                var0.marginTop = var1;
                var2 = {};
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var3 = 6;
                var4 = var4[var3];
                var3 = undefined;
                var7 = var5.bind(var3)(var4);
                var6 = var7.withTiming;
                var4 = _closure3_slot0;
                var3 = var4.get;
                var3 = var3.bind(var4)();
                var14 = -var3;
                var13 = _closure1_slot7;
                var3 = function arg0() {
                    _fun76962: for (var _fun76962_ip = 0;;) switch (_fun76962_ip) {
                        case 0:
                            var0 = arg0;
                            if (!var0) {
                                _fun76962_ip = 32;
                                continue _fun76962
                            }
                        case 6:
                            var2 = _closure3_slot2;
                            var1 = var2.get;
                            var2 = var1.bind(var2)();
                            var1 = -1;
                            var0 = var1 !== var2;
                        case 32:
                            if (!var0) {
                                _fun76962_ip = 81;
                                continue _fun76962
                            }
                        case 35:
                            var3 = _closure3_slot1;
                            var1 = var3.set;
                            var2 = _closure3_slot2;
                            var0 = var2.get;
                            var0 = var0.bind(var2)();
                            var0 = var1.bind(var3)(var0);
                            var1 = var2.set;
                            var0 = -1;
                            var0 = var1.bind(var2)(var0);
                        case 81:
                            var0 = undefined;
                            return var0;
                    }
                };
                var8 = {};
                var10 = _closure3_slot2;
                var8.animatedAdjustedMarginPending = var10;
                var8.animatedAdjustedMargin = var9;
                var3.__closure = var8;
                var8 = 16224255032954.0;
                var3.__workletHash = var8;
                var1 = _closure1_slot11;
                var3.__initData = var1;
                var12 = 'respect-motion-settings';
                var15 = var7;
                var11 = var3;
                var1 = var15[var6](var14, var13, var12, var11, var10);
                var2.translateY = var1;
                var1 = new Array(1);
                var1[0] = var2;
                var0.transform = var1;
                return var0;
            };
            var4 = {};
            var4.animatedAdjustedMargin = var7;
            var7 = 6;
            var7 = var10[var7];
            var7 = var8.bind(var9)(var7);
            var7 = var7.withTiming;
            var4.withTiming = var7;
            var4.animatedHeight = var6;
            var6 = _closure1_slot7;
            var4.INSET_ANIMATION_CONFIG2 = var6;
            var4.animatedAdjustedMarginPending = var5;
            var0.__closure = var4;
            var4 = 7205645695043.0;
            var0.__workletHash = var4;
            var3 = _closure1_slot10;
            var0.__initData = var3;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var10 = var0.bind(var3)();
        var2 = _closure1_slot5;
        var8 = _closure1_slot0;
        var0 = 10;
        var0 = var12[var0];
        var0 = var8.bind(var3)(var0);
        var1 = var0.LayerScope;
        var0 = {};
        var6 = _closure1_slot6;
        var4 = 11;
        var4 = var12[var4];
        var4 = var8.bind(var3)(var4);
        var5 = var4.StickyWrapper;
        var4 = {};
        var17 = true;
        var4.initiallyShowHeader = var17;
        var4.style = var15;
        var4.pointerEvents = var7;
        var7 = 12;
        var7 = var12[var7];
        var7 = var8.bind(var3)(var7);
        var8 = var7.StickyHeader;
        var7 = {};
        var7.show = var17;
        var7.children = var16;
        var8 = var2.bind(var3)(var8, var7);
        var7 = new Array(2);
        var7[0] = var8;
        var8 = 3;
        var8 = var12[var8];
        var8 = var9.bind(var3)(var8);
        var9 = var8.View;
        var8 = {};
        var8.style = var10;
        var12 = _closure1_slot4;
        var10 = {};
        var10.style = var15;
        var10.children = var14;
        var12 = var2.bind(var3)(var12, var10);
        var10 = new Array(2);
        var10[0] = var12;
        var12 = _closure1_slot12;
        var11 = {};
        var11.channelId = var13;
        var11 = var2.bind(var3)(var12, var11);
        var10[1] = var11;
        var8.children = var10;
        var8 = var6.bind(var3)(var9, var8);
        var7[1] = var8;
        var4.children = var7;
        var4 = var6.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 3720, 4881, 9805, 4097, 4896, 9807, 9809, 5205, 9810, 9811, 2]);