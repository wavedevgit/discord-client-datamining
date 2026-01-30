// modules/activities/panel/native/pip/usePIPAvoidanceSpecs.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var3;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var5);
    var0 = {};
    var5 = 'function usePIPAvoidanceSpecsTsx1(){const{keyboardHeight,safeArea,screenName}=this.__closure;return{keyboardHeight:keyboardHeight.get(),safeAreaBottom:safeArea.bottom,screenName:screenName.get()};}';
    var0.code = var5;
    var _closure1_slot3 = var0;
    var0 = {};
    var5 = 'function usePIPAvoidanceSpecsTsx2(props,previous){const{cheapWorkletShallowEqual,getPIPBottomOffsetForPIPMode,getAdjustedBottomOffsets,updateSharedValueIfChanged,pipAvoidanceSpecs}=this.__closure;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const{keyboardHeight:keyboardHeight,safeAreaBottom:safeAreaBottom,screenName:screenName}=props;const screenBottomOffset=getPIPBottomOffsetForPIPMode(screenName);const{bottomOffset:bottomOffset}=getAdjustedBottomOffsets({screenBottomOffset:screenBottomOffset,safeAreaBottom:safeAreaBottom,keyboardHeight:keyboardHeight});updateSharedValueIfChanged(pipAvoidanceSpecs,{top:0,bottom:bottomOffset});}';
    var0.code = var5;
    var _closure1_slot4 = var0;
    var0 = 7;
    var3 = var3[var0];
    var0 = undefined;
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/activities/panel/native/pip/usePIPAvoidanceSpecs.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: usePIPAvoidanceSpecs, environment: var1
        var12 = arg0;
        var _closure2_slot0 = var12;
        var11 = _closure1_slot0;
        var10 = _closure1_slot2;
        var2 = 0;
        var0 = var10[var2];
        var9 = undefined;
        var4 = var11.bind(var9)(var0);
        var3 = var4.useSharedValue;
        var0 = {
            'top': 0,
            'bottom': 0
        };
        var0 = var3.bind(var4)(var0);
        var _closure2_slot1 = var0;
        var8 = _closure1_slot1;
        var3 = 1;
        var3 = var10[var3];
        var3 = var8.bind(var9)(var3);
        var13 = var3.bind(var9)();
        var _closure2_slot2 = var13;
        var3 = 2;
        var3 = var10[var3];
        var3 = var8.bind(var9)(var3);
        var7 = var3.bind(var9)();
        var _closure2_slot3 = var7;
        var2 = var10[var2];
        var4 = var11.bind(var9)(var2);
        var3 = var4.useAnimatedReaction;
        var2 = function() { // Original name: f, environment: var1
            var0 = {};
            var3 = _closure2_slot2;
            var2 = var3.get;
            var2 = var2.bind(var3)();
            var0.keyboardHeight = var2;
            var2 = _closure2_slot0;
            var2 = var2.bottom;
            var0.safeAreaBottom = var2;
            var2 = _closure2_slot3;
            var1 = var2.get;
            var1 = var1.bind(var2)();
            var0.screenName = var1;
            return var0;
        };
        var6 = {};
        var6.keyboardHeight = var13;
        var6.safeArea = var12;
        var6.screenName = var7;
        var2.__closure = var6;
        var6 = 9790941132204.0;
        var2.__workletHash = var6;
        var6 = _closure1_slot3;
        var2.__initData = var6;
        var1 = function(arg0, arg1) { // Original name: n, environment: var1
            _fun110938: for (var _fun110938_ip = 0;;) switch (_fun110938_ip) {
                case 0:
                    var2 = arg0;
                    var6 = arg1;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var0 = 3;
                    var3 = var3[var0];
                    var0 = undefined;
                    var5 = var4.bind(var0)(var3);
                    var4 = var5.cheapWorkletShallowEqual;
                    var3 = null;
                    var7 = var3 != var6;
                    var3 = undefined;
                    if (!var7) {
                        _fun110938_ip = 51;
                        continue _fun110938
                    }
                case 48:
                    var3 = var6;
                case 51:
                    var3 = var4.bind(var5)(var2, var3);
                    if (var3) {
                        _fun110938_ip = 180;
                        continue _fun110938
                    }
                case 60:
                    var5 = var2.keyboardHeight;
                    var6 = var2.safeAreaBottom;
                    var4 = var2.screenName;
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 4;
                    var1 = var3[var1];
                    var1 = var2.bind(var0)(var1);
                    var7 = var1.bind(var0)(var4);
                    var1 = 5;
                    var1 = var3[var1];
                    var4 = var2.bind(var0)(var1);
                    var1 = {};
                    var1.screenBottomOffset = var7;
                    var1.safeAreaBottom = var6;
                    var1.keyboardHeight = var5;
                    var1 = var4.bind(var0)(var1);
                    var4 = var1.bottomOffset;
                    var1 = 6;
                    var1 = var3[var1];
                    var3 = var2.bind(var0)(var1);
                    var2 = _closure2_slot1;
                    var1 = {};
                    var5 = 0;
                    var1.top = var5;
                    var1.bottom = var4;
                    var1 = var3.bind(var0)(var2, var1);
                case 180:
                    return var0;
            }
        };
        var6 = {};
        var7 = 3;
        var7 = var10[var7];
        var7 = var11.bind(var9)(var7);
        var7 = var7.cheapWorkletShallowEqual;
        var6.cheapWorkletShallowEqual = var7;
        var7 = 4;
        var7 = var10[var7];
        var7 = var8.bind(var9)(var7);
        var6.getPIPBottomOffsetForPIPMode = var7;
        var7 = 5;
        var7 = var10[var7];
        var7 = var8.bind(var9)(var7);
        var6.getAdjustedBottomOffsets = var7;
        var7 = 6;
        var7 = var10[var7];
        var7 = var8.bind(var9)(var7);
        var6.updateSharedValueIfChanged = var7;
        var6.pipAvoidanceSpecs = var0;
        var1.__closure = var6;
        var6 = 643938425459.0;
        var1.__workletHash = var6;
        var5 = _closure1_slot4;
        var1.__initData = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3679, 14180, 14228, 5263, 14133, 14229, 5262, 2]);