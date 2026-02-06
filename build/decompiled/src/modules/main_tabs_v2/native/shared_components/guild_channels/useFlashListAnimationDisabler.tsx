// modules/main_tabs_v2/native/shared_components/guild_channels/useFlashListAnimationDisabler.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
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
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var3 = {};
    var6 = 'function useFlashListAnimationDisablerTsx1(){const{lastId}=this.__closure;return lastId.get();}';
    var3.code = var6;
    var _closure1_slot3 = var3;
    var3 = {};
    var6 = 'function useFlashListAnimationDisablerTsx2(current,prev){const{enableAnimation}=this.__closure;if(current!==prev){enableAnimation.set(false);}}';
    var3.code = var6;
    var _closure1_slot4 = var3;
    var3 = {};
    var6 = 'function useFlashListAnimationDisablerTsx3(finished){const{enableAnimation}=this.__closure;if(finished&&!enableAnimation.get()){enableAnimation.set(true);}}';
    var3.code = var6;
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/main_tabs_v2/native/shared_components/guild_channels/useFlashListAnimationDisabler.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var9 = arg0;
        var _closure2_slot0 = var9;
        var6 = _closure1_slot0;
        var7 = _closure1_slot1;
        var3 = 1;
        var2 = var7[var3];
        var5 = undefined;
        var8 = var6.bind(var5)(var2);
        var4 = var8.useSharedValue;
        var2 = false;
        var2 = var4.bind(var8)(var2);
        var _closure2_slot1 = var2;
        var4 = var7[var3];
        var8 = var6.bind(var5)(var4);
        var4 = var8.useSharedValue;
        var8 = var4.bind(var8)(var9);
        var _closure2_slot2 = var8;
        var4 = _closure1_slot2;
        var11 = var4.useEffect;
        var10 = new Array(2);
        var10[0] = var8;
        var10[1] = var9;
        var9 = function() { // Environment: var1
            var2 = _closure2_slot2;
            var1 = var2.set;
            var0 = _closure2_slot0;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var9 = var11.bind(var4)(var9, var10);
        var3 = var7[var3];
        var7 = var6.bind(var5)(var3);
        var6 = var7.useAnimatedReaction;
        var5 = function() {
            var1 = _closure2_slot2;
            var0 = var1.get;
            var0 = var0.bind(var1)();
            return var0;
        };
        var3 = {};
        var3.lastId = var8;
        var5.__closure = var3;
        var3 = 9889142626009.0;
        var5.__workletHash = var3;
        var3 = _closure1_slot3;
        var5.__initData = var3;
        var3 = function arg0, arg1() {
            _fun51104: for (var _fun51104_ip = 0;;) switch (_fun51104_ip) {
                case 0:
                    var1 = arg0;
                    var0 = arg1;
                    if (!(var1 !== var0)) {
                        _fun51104_ip = 29;
                        continue _fun51104
                    }
                case 10:
                    var2 = _closure2_slot1;
                    var1 = var2.set;
                    var0 = false;
                    var0 = var1.bind(var2)(var0);
                case 29:
                    var0 = undefined;
                    return var0;
            }
        };
        var8 = {};
        var8.enableAnimation = var2;
        var3.__closure = var8;
        var8 = 6114249067388.0;
        var3.__workletHash = var8;
        var8 = _closure1_slot4;
        var3.__initData = var8;
        var3 = var6.bind(var7)(var5, var3);
        var3 = var4.useCallback;
        var1 = function arg0() {
            _fun51105: for (var _fun51105_ip = 0;;) switch (_fun51105_ip) {
                case 0:
                    var0 = arg0;
                    if (!var0) {
                        _fun51105_ip = 25;
                        continue _fun51105
                    }
                case 6:
                    var2 = _closure2_slot1;
                    var1 = var2.get;
                    var1 = var1.bind(var2)();
                    var0 = !var1;
                case 25:
                    if (!var0) {
                        _fun51105_ip = 47;
                        continue _fun51105
                    }
                case 28:
                    var2 = _closure2_slot1;
                    var1 = var2.set;
                    var0 = true;
                    var0 = var1.bind(var2)(var0);
                case 47:
                    var0 = undefined;
                    return var0;
            }
        };
        var5 = {};
        var5.enableAnimation = var2;
        var1.__closure = var5;
        var5 = 5697261629076.0;
        var1.__workletHash = var5;
        var0 = _closure1_slot5;
        var1.__initData = var0;
        var0 = new Array(1);
        var0[0] = var2;
        var1 = var3.bind(var4)(var1, var0);
        var0 = new Array(2);
        var0[0] = var2;
        var0[1] = var1;
        return var0;
    };
    var2.useFlashListAnimationDisabler = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 3722, 2]);