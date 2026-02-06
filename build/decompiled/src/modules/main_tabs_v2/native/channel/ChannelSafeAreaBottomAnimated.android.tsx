// modules/main_tabs_v2/native/channel/ChannelSafeAreaBottomAnimated.android.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportAll;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot5 = var3;
    var3 = {};
    var7 = 'function ChannelSafeAreaBottomAnimatedAndroidTsx1(){const{heightSharedValue}=this.__closure;return heightSharedValue.get().toFixed(2);}';
    var3.code = var7;
    var _closure1_slot6 = var3;
    var3 = {};
    var7 = 'function ChannelSafeAreaBottomAnimatedAndroidTsx2(height,lastHeight){const{runOnJS,handleCheckTimer}=this.__closure;if(height===lastHeight)return;runOnJS(handleCheckTimer)();}';
    var3.code = var7;
    var _closure1_slot7 = var3;
    var3 = {};
    var7 = 'function ChannelSafeAreaBottomAnimatedAndroidTsx3(){const{heightSharedValue}=this.__closure;return{height:heightSharedValue.get()};}';
    var3.code = var7;
    var _closure1_slot8 = var3;
    var3 = var6.memo;
    var1 = function arg0() {
        var0 = arg0;
        var7 = var0.channelId;
        var1 = _closure1_slot1;
        var6 = _closure1_slot2;
        var0 = 5;
        var0 = var6[var0];
        var4 = undefined;
        var0 = var1.bind(var4)(var0);
        var5 = var0.bind(var4)();
        var _closure2_slot0 = var5;
        var0 = 6;
        var0 = var6[var0];
        var0 = var1.bind(var4)(var0);
        var8 = var0.bind(var4)(var7);
        var9 = _closure1_slot0;
        var0 = 3;
        var7 = var6[var0];
        var10 = var9.bind(var4)(var7);
        var9 = var10.useAnimatedStyle;
        var7 = function() {
            var0 = {};
            var2 = _closure2_slot0;
            var1 = var2.get;
            var1 = var1.bind(var2)();
            var0.height = var1;
            return var0;
        };
        var11 = {};
        var11.heightSharedValue = var5;
        var7.__closure = var11;
        var11 = 15841472600439.0;
        var7.__workletHash = var11;
        var11 = _closure1_slot8;
        var7.__initData = var11;
        var7 = var9.bind(var10)(var7);
        var3 = function arg0() {
            var13 = arg0;
            var _closure3_slot0 = var13;
            var7 = _closure1_slot4;
            var1 = var7.useState;
            var4 = 0;
            var3 = var1.bind(var7)(var4);
            var2 = _closure1_slot3;
            var11 = undefined;
            var1 = 2;
            var3 = var2.bind(var11)(var3, var1);
            var2 = var3[var4];
            var1 = 1;
            var1 = var3[var1];
            var _closure3_slot1 = var1;
            var10 = _closure1_slot0;
            var12 = _closure1_slot2;
            var9 = 3;
            var1 = var12[var9];
            var3 = var10.bind(var11)(var1);
            var1 = var3.useSharedValue;
            var3 = var1.bind(var3)(var4);
            var _closure3_slot2 = var3;
            var4 = var7.useRef;
            var1 = null;
            var1 = var4.bind(var7)(var1);
            var _closure3_slot3 = var1;
            var5 = var7.useCallback;
            var4 = new Array(2);
            var4[0] = var13;
            var4[1] = var3;
            var1 = function(arg0) { // Environment: var0
                _fun91075: for (var _fun91075_ip = 0;;) switch (_fun91075_ip) {
                    case 0:
                        var0 = arg0;
                        var0 = var0.nativeEvent;
                        var0 = var0.layout;
                        var2 = var0.height;
                        var3 = _closure3_slot2;
                        var1 = var3.set;
                        var1 = var1.bind(var3)(var2);
                        var1 = var2.toFixed;
                        var4 = 2;
                        var2 = var1.bind(var2)(var4);
                        var3 = _closure3_slot0;
                        var1 = var3.get;
                        var3 = var1.bind(var3)();
                        var1 = var3.toFixed;
                        var1 = var1.bind(var3)(var4);
                        if (!(var2 !== var1)) {
                            _fun91075_ip = 99;
                            continue _fun91075
                        }
                    case 79:
                        var2 = _closure3_slot1;
                        var1 = undefined;
                        var0 = function(arg0) { // Environment: var0
                            var1 = arg0;
                            var0 = 1;
                            var0 = var1 + var0;
                            return var0;
                        };
                        var0 = var2.bind(var1)(var0);
                    case 99:
                        var0 = undefined;
                        return var0;
                }
            };
            var1 = var5.bind(var7)(var1, var4);
            var5 = var7.useCallback;
            var4 = new Array(2);
            var4[0] = var13;
            var4[1] = var3;
            var3 = function() { // Environment: var0
                _fun91077: for (var _fun91077_ip = 0;;) switch (_fun91077_ip) {
                    case 0:
                        var1 = _closure3_slot3;
                        var2 = var1.current;
                        var1 = null;
                        if (!(var1 !== var2)) {
                            _fun91077_ip = 42;
                            continue _fun91077
                        }
                    case 18:
                        var1 = global;
                        var3 = var1.clearTimeout;
                        var1 = _closure3_slot3;
                        var2 = var1.current;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                    case 42:
                        var2 = _closure3_slot3;
                        var0 = global;
                        var4 = var0.setTimeout;
                        var0 = undefined;
                        var3 = function() { // Environment: var1
                            _fun91078: for (var _fun91078_ip = 0;;) switch (_fun91078_ip) {
                                case 0:
                                    var2 = _closure3_slot2;
                                    var1 = var2.get;
                                    var3 = var1.bind(var2)();
                                    var1 = var3.toFixed;
                                    var5 = 2;
                                    var2 = var1.bind(var3)(var5);
                                    var4 = _closure3_slot0;
                                    var1 = var4.get;
                                    var4 = var1.bind(var4)();
                                    var1 = var4.toFixed;
                                    var1 = var1.bind(var4)(var5);
                                    if (!(var2 === var1)) {
                                        _fun91078_ip = 96;
                                        continue _fun91078
                                    }
                                case 58:
                                    var4 = _closure1_slot1;
                                    var2 = _closure1_slot2;
                                    var1 = 4;
                                    var2 = var2[var1];
                                    var1 = undefined;
                                    var2 = var4.bind(var1)(var2);
                                    var1 = var2.channelSafeAreaBottomLayoutHeightChanged;
                                    var1 = var1.bind(var2)(var3);
                                    _fun91078_ip = 177;
                                    continue _fun91078;
                                case 96:
                                    var3 = _closure1_slot1;
                                    var2 = _closure1_slot2;
                                    var1 = 4;
                                    var1 = var2[var1];
                                    var2 = undefined;
                                    var5 = var3.bind(var2)(var1);
                                    var4 = var5.channelSafeAreaBottomLayoutHeightMismatch;
                                    var3 = _closure3_slot2;
                                    var1 = var3.get;
                                    var3 = var1.bind(var3)();
                                    var6 = _closure3_slot0;
                                    var1 = var6.get;
                                    var1 = var1.bind(var6)();
                                    var1 = var4.bind(var5)(var3, var1);
                                    var1 = _closure3_slot1;
                                    var0 = function(arg0) { // Environment: var0
                                        var1 = arg0;
                                        var0 = 1;
                                        var0 = var1 + var0;
                                        return var0;
                                    };
                                    var0 = var1.bind(var2)(var0);
                                case 177:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var1 = 200;
                        var1 = var4.bind(var0)(var3, var1);
                        var2.current = var1;
                        return var0;
                }
            };
            var8 = var5.bind(var7)(var3, var4);
            var _closure3_slot4 = var8;
            var5 = var7.useEffect;
            var4 = function() { // Environment: var0
                var0 = function() { // Environment: var0
                    var0 = global;
                    var2 = var0.clearTimeout;
                    var0 = _closure3_slot3;
                    var1 = var0.current;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                return var0;
            };
            var3 = new Array(0);
            var3 = var5.bind(var7)(var4, var3);
            var3 = var12[var9];
            var5 = var10.bind(var11)(var3);
            var4 = var5.useAnimatedReaction;
            var3 = function() {
                var1 = _closure3_slot0;
                var0 = var1.get;
                var2 = var0.bind(var1)();
                var1 = var2.toFixed;
                var0 = 2;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var7 = {};
            var7.heightSharedValue = var13;
            var3.__closure = var7;
            var7 = 7538286970630.0;
            var3.__workletHash = var7;
            var7 = _closure1_slot6;
            var3.__initData = var7;
            var0 = function arg0, arg1() {
                _fun91083: for (var _fun91083_ip = 0;;) switch (_fun91083_ip) {
                    case 0:
                        var1 = arg0;
                        var0 = arg1;
                        if (!(var1 !== var0)) {
                            _fun91083_ip = 56;
                            continue _fun91083
                        }
                    case 10:
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 3;
                        var0 = var1[var0];
                        var1 = undefined;
                        var3 = var2.bind(var1)(var0);
                        var2 = var3.runOnJS;
                        var0 = _closure3_slot4;
                        var0 = var2.bind(var3)(var0);
                        var0 = var0.bind(var1)();
                    case 56:
                        var0 = undefined;
                        return var0;
                }
            };
            var7 = {};
            var9 = var12[var9];
            var9 = var10.bind(var11)(var9);
            var9 = var9.runOnJS;
            var7.runOnJS = var9;
            var7.handleCheckTimer = var8;
            var0.__closure = var7;
            var7 = 5948315632356.0;
            var0.__workletHash = var7;
            var6 = _closure1_slot7;
            var0.__initData = var6;
            var0 = var4.bind(var5)(var3, var0);
            var0 = {};
            var0.layoutKey = var2;
            var0.handleLayout = var1;
            return var0;
        };
        var5 = var3.bind(var4)(var5);
        var3 = var5.layoutKey;
        var5 = var5.handleLayout;
        var2 = _closure1_slot5;
        var0 = var6[var0];
        var0 = var1.bind(var4)(var0);
        var1 = var0.View;
        var0 = {};
        var6 = new Array(2);
        var6[0] = var8;
        var6[1] = var7;
        var0.style = var6;
        var0.onLayout = var5;
        var0 = var2.bind(var4)(var1, var0, var3);
        return var0;
    };
    var1 = var3.bind(var6)(var1);
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/main_tabs_v2/native/channel/ChannelSafeAreaBottomAnimated.android.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 33, 3722, 1581, 9830, 9832, 2]);