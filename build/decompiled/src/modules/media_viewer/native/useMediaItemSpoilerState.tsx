// modules/media_viewer/native/useMediaItemSpoilerState.tsx
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
    var3 = metroImportDefault;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = {};
    var6 = 'function useMediaItemSpoilerStateTsx1(){const{runOnJS,setSpoilerActive,hasSpoiler}=this.__closure;runOnJS(setSpoilerActive)(hasSpoiler);}';
    var3.code = var6;
    var _closure1_slot4 = var3;
    var3 = {};
    var6 = 'function useMediaItemSpoilerStateTsx2(){const{spoilerOpacity}=this.__closure;return{opacity:spoilerOpacity.get()};}';
    var3.code = var6;
    var _closure1_slot5 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/media_viewer/native/useMediaItemSpoilerState.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun73014: for (var _fun73014_ip = 0;;) switch (_fun73014_ip) {
            case 0:
                var0 = arg0;
                var _closure2_slot0 = var0;
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var8 = 2;
                var0 = var3[var8];
                var5 = undefined;
                var0 = var6.bind(var5)(var0);
                var7 = var0.MediaViewerSourcesStore;
                var2 = var7.useState;
                var0 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var2 = var0.spoilerIndexes;
                    var1 = var2.has;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0 = var2.bind(var7)(var0);
                var _closure2_slot1 = var0;
                var7 = _closure1_slot3;
                var2 = var7.useState;
                var7 = var2.bind(var7)(var0);
                var2 = _closure1_slot2;
                var7 = var2.bind(var5)(var7, var8);
                var8 = 0;
                var2 = var7[var8];
                var9 = 1;
                var7 = var7[var9];
                var _closure2_slot2 = var7;
                var7 = 3;
                var3 = var3[var7];
                var6 = var6.bind(var5)(var3);
                var3 = var6.useSharedValue;
                if (!var0) {
                    _fun73014_ip = 126;
                    continue _fun73014
                }
            case 123:
                var8 = var9;
            case 126:
                var6 = var3.bind(var6)(var8);
                var _closure2_slot3 = var6;
                var9 = _closure1_slot3;
                var8 = var9.useEffect;
                var3 = new Array(2);
                var3[0] = var0;
                var3[1] = var6;
                var0 = function() { // Environment: var1
                    _fun73016: for (var _fun73016_ip = 0;;) switch (_fun73016_ip) {
                        case 0:
                            var3 = _closure2_slot3;
                            var2 = var3.set;
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot1;
                            var0 = 4;
                            var4 = var4[var0];
                            var0 = undefined;
                            var8 = var5.bind(var0)(var4);
                            var7 = var8.withTiming;
                            var4 = _closure2_slot1;
                            var6 = 0;
                            if (!var4) {
                                _fun73016_ip = 54;
                                continue _fun73016
                            }
                        case 51:
                            var6 = 1;
                        case 54:
                            var5 = {};
                            var4 = 200;
                            var5.duration = var4;
                            var12 = _closure1_slot0;
                            var13 = _closure1_slot1;
                            var4 = 5;
                            var4 = var13[var4];
                            var4 = var12.bind(var0)(var4);
                            var4 = var4.STANDARD_EASING;
                            var5.easing = var4;
                            var4 = function() {
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot1;
                                var0 = 3;
                                var1 = var1[var0];
                                var0 = undefined;
                                var4 = var2.bind(var0)(var1);
                                var3 = var4.runOnJS;
                                var2 = _closure2_slot2;
                                var2 = var3.bind(var4)(var2);
                                var1 = _closure2_slot1;
                                var1 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var9 = {};
                            var11 = 3;
                            var11 = var13[var11];
                            var11 = var12.bind(var0)(var11);
                            var11 = var11.runOnJS;
                            var9.runOnJS = var11;
                            var11 = _closure2_slot2;
                            var9.setSpoilerActive = var11;
                            var10 = _closure2_slot1;
                            var9.hasSpoiler = var10;
                            var4.__closure = var9;
                            var9 = 15930548853488.0;
                            var4.__workletHash = var9;
                            var1 = _closure1_slot4;
                            var4.__initData = var1;
                            var15 = 'respect-motion-settings';
                            var18 = var8;
                            var17 = var6;
                            var16 = var5;
                            var14 = var4;
                            var1 = var18[var7](var17, var16, var15, var14, var13);
                            var1 = var2.bind(var3)(var1);
                            return var0;
                    }
                };
                var0 = var8.bind(var9)(var0, var3);
                var0 = new Array(2);
                var0[0] = var2;
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var5)(var2);
                var2 = var3.useAnimatedStyle;
                var1 = function() {
                    var0 = {};
                    var2 = _closure2_slot3;
                    var1 = var2.get;
                    var1 = var1.bind(var2)();
                    var0.opacity = var1;
                    return var0;
                };
                var5 = {};
                var5.spoilerOpacity = var6;
                var1.__closure = var5;
                var5 = 8496335051493.0;
                var1.__workletHash = var5;
                var4 = _closure1_slot5;
                var1.__initData = var4;
                var1 = var2.bind(var3)(var1);
                var0[1] = var1;
                return var0;
        }
    };
    var2.useMediaItemSpoilerState = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 8804, 3681, 4058, 4849, 2]);