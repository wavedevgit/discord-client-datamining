// modules/voice_panel/native/hooks/useControlsTranslation.tsx
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
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.MODE_CHANGE_PHYSICS;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.CALL_TILE_GUTTER;
    var _closure1_slot5 = var3;
    var3 = {};
    var6 = 'function useControlsTranslationTsx1(){const{withSpring,wrapperSpecs,MODE_CHANGE_PHYSICS,useReducedMotion,CALL_TILE_GUTTER,viewHeight}=this.__closure;return{transform:[{translateX:withSpring(wrapperSpecs.get().x,MODE_CHANGE_PHYSICS)},{translateY:withSpring(!useReducedMotion.get()&&wrapperSpecs.get().hidden?wrapperSpecs.get().height+CALL_TILE_GUTTER+viewHeight.get():wrapperSpecs.get().y,MODE_CHANGE_PHYSICS)}]};}';
    var3.code = var6;
    var _closure1_slot6 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/voice_panel/native/hooks/useControlsTranslation.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1, arg2() {
        var7 = arg1;
        var5 = arg2;
        var _closure2_slot0 = var7;
        var _closure2_slot1 = var5;
        var4 = _closure1_slot3;
        var2 = var4.useContext;
        var6 = _closure1_slot1;
        var11 = _closure1_slot2;
        var1 = 3;
        var1 = var11[var1];
        var10 = undefined;
        var1 = var6.bind(var10)(var1);
        var1 = var2.bind(var4)(var1);
        var6 = var1.useReducedMotion;
        var _closure2_slot2 = var6;
        var9 = _closure1_slot0;
        var1 = 4;
        var1 = var11[var1];
        var2 = var9.bind(var10)(var1);
        var1 = var2.useAnimatedStyle;
        var0 = function() {
            _fun111529: for (var _fun111529_ip = 0;;) switch (_fun111529_ip) {
                case 0:
                    var0 = {};
                    var2 = {};
                    var6 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var4 = 5;
                    var1 = var8[var4];
                    var5 = undefined;
                    var11 = var6.bind(var5)(var1);
                    var10 = var11.withSpring;
                    var9 = _closure2_slot0;
                    var1 = var9.get;
                    var1 = var1.bind(var9)();
                    var9 = var1.x;
                    var1 = _closure1_slot4;
                    var1 = var10.bind(var11)(var9, var1);
                    var2.translateX = var1;
                    var1 = new Array(2);
                    var1[0] = var2;
                    var2 = {};
                    var4 = var8[var4];
                    var6 = var6.bind(var5)(var4);
                    var5 = var6.withSpring;
                    var8 = _closure2_slot2;
                    var4 = var8.get;
                    var4 = var4.bind(var8)();
                    if (var4) {
                        _fun111529_ip = 177;
                        continue _fun111529
                    }
                case 110:
                    var8 = _closure2_slot0;
                    var4 = var8.get;
                    var4 = var4.bind(var8)();
                    var4 = var4.hidden;
                    if (!var4) {
                        _fun111529_ip = 177;
                        continue _fun111529
                    }
                case 132:
                    var8 = _closure2_slot0;
                    var4 = var8.get;
                    var4 = var4.bind(var8)();
                    var8 = var4.height;
                    var4 = _closure1_slot5;
                    var8 = var8 + var4;
                    var9 = _closure2_slot1;
                    var4 = var9.get;
                    var4 = var4.bind(var9)();
                    var4 = var8 + var4;
                    _fun111529_ip = 195;
                    continue _fun111529;
                case 177:
                    var8 = _closure2_slot0;
                    var7 = var8.get;
                    var7 = var7.bind(var8)();
                    var4 = var7.y;
                case 195:
                    var3 = _closure1_slot4;
                    var3 = var5.bind(var6)(var4, var3);
                    var2.translateY = var3;
                    var1[1] = var2;
                    var0.transform = var1;
                    return var0;
            }
        };
        var4 = {};
        var8 = 5;
        var8 = var11[var8];
        var8 = var9.bind(var10)(var8);
        var8 = var8.withSpring;
        var4.withSpring = var8;
        var4.wrapperSpecs = var7;
        var7 = _closure1_slot4;
        var4.MODE_CHANGE_PHYSICS = var7;
        var4.useReducedMotion = var6;
        var6 = _closure1_slot5;
        var4.CALL_TILE_GUTTER = var6;
        var4.viewHeight = var5;
        var0.__closure = var4;
        var4 = 11281989557090.0;
        var0.__workletHash = var4;
        var3 = _closure1_slot6;
        var0.__initData = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 11819, 11822, 11818, 3720, 4081, 2]);