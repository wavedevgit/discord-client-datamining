// modules/stage_channels/native/components/StageChannelAnimationUtils.tsx
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
    var3 = {};
    var0 = 250;
    var3.duration = var0;
    var11 = 0;
    var6 = var5[var11];
    var0 = undefined;
    var6 = var4.bind(var0)(var6);
    var10 = var6.Easing;
    var9 = var10.bezier;
    var15 = 0.66;
    var13 = 0.2;
    var12 = 1;
    var16 = var10;
    var14 = 0;
    var6 = var16[var9](var15, var14, var13, var12, var11);
    var3.easing = var6;
    var _closure1_slot3 = var3;
    var3 = {};
    var6 = 'function StageChannelAnimationUtilsTsx1(){const{isInvited,actionBarHeight,ACTION_BAR_SAFE_AREA_PADDING,safeAreaTop,controlPadding}=this.__closure;return isInvited?actionBarHeight+ACTION_BAR_SAFE_AREA_PADDING+safeAreaTop:controlPadding;}';
    var3.code = var6;
    var _closure1_slot4 = var3;
    var3 = {};
    var6 = 'function StageChannelAnimationUtilsTsx2(){const{withTiming,paddingTop,TIMING_CONFIG}=this.__closure;return{paddingTop:withTiming(paddingTop.get(),TIMING_CONFIG)};}';
    var3.code = var6;
    var _closure1_slot5 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/stage_channels/native/components/StageChannelAnimationUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1() {
        var10 = arg1;
        var _closure2_slot0 = var10;
        var2 = _closure1_slot1;
        var9 = _closure1_slot2;
        var1 = 1;
        var1 = var9[var1];
        var8 = undefined;
        var1 = var2.bind(var8)(var1);
        var13 = var1.bind(var8)();
        var _closure2_slot1 = var13;
        var7 = _closure1_slot0;
        var1 = 2;
        var1 = var9[var1];
        var5 = var7.bind(var8)(var1);
        var4 = var5.useGetActionBarHeight;
        var1 = arg0;
        var12 = var4.bind(var5)(var1);
        var _closure2_slot2 = var12;
        var1 = 3;
        var1 = var9[var1];
        var1 = var2.bind(var8)(var1);
        var1 = var1.bind(var8)();
        var11 = var1.top;
        var _closure2_slot3 = var11;
        var1 = 0;
        var2 = var9[var1];
        var5 = var7.bind(var8)(var2);
        var4 = var5.useDerivedValue;
        var2 = function() {
            _fun69403: for (var _fun69403_ip = 0;;) switch (_fun69403_ip) {
                case 0:
                    var0 = _closure2_slot1;
                    if (var0) {
                        _fun69403_ip = 16;
                        continue _fun69403
                    }
                case 10:
                    var0 = _closure2_slot0;
                    _fun69403_ip = 35;
                    continue _fun69403;
                case 16:
                    var3 = _closure2_slot2;
                    var2 = 10;
                    var2 = var3 + var2;
                    var1 = _closure2_slot3;
                    var0 = var2 + var1;
                case 35:
                    return var0;
            }
        };
        var6 = {};
        var6.isInvited = var13;
        var6.actionBarHeight = var12;
        var12 = 10;
        var6.ACTION_BAR_SAFE_AREA_PADDING = var12;
        var6.safeAreaTop = var11;
        var6.controlPadding = var10;
        var2.__closure = var6;
        var6 = 2568370943746.0;
        var2.__workletHash = var6;
        var6 = _closure1_slot4;
        var2.__initData = var6;
        var5 = var4.bind(var5)(var2);
        var _closure2_slot4 = var5;
        var1 = var9[var1];
        var2 = var7.bind(var8)(var1);
        var1 = var2.useAnimatedStyle;
        var0 = function() {
            var0 = {};
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 4;
            var3 = var3[var2];
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            var3 = var4.withTiming;
            var5 = _closure2_slot4;
            var2 = var5.get;
            var2 = var2.bind(var5)();
            var1 = _closure1_slot3;
            var1 = var3.bind(var4)(var2, var1);
            var0.paddingTop = var1;
            return var0;
        };
        var4 = {};
        var6 = 4;
        var6 = var9[var6];
        var6 = var7.bind(var8)(var6);
        var6 = var6.withTiming;
        var4.withTiming = var6;
        var4.paddingTop = var5;
        var5 = _closure1_slot3;
        var4.TIMING_CONFIG = var5;
        var0.__closure = var4;
        var4 = 16816216105718.0;
        var0.__workletHash = var4;
        var3 = _closure1_slot5;
        var0.__initData = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.useStageActionBarAnimation = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3720, 8620, 8502, 1568, 4097, 2]);