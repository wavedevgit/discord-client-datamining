// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var0 = global;
    var8 = var0.Object;
    var4 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var8)(var2, var0, var3);
    var4 = 0;
    var3 = var6[var4];
    var0 = undefined;
    var8 = var5.bind(var0)(var3);
    var3 = var8.memo;
    var8 = var8.useMemo;
    var _closure1_slot3 = var8;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.Platform;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.jsx;
    var _closure1_slot5 = var4;
    var4 = {};
    var5 = "function pnpm_BottomSheetBodyTsx1(){const{Platform,animatedIndex,animatedPosition}=this.__closure;return{opacity:Platform.OS==='android'&&animatedIndex.get()===-1?0:1,transform:[{translateY:animatedPosition.get()}]};}";
    var4.code = var5;
    var _closure1_slot6 = var4;
    var1 = function arg0() {
        _fun45462: for (var _fun45462_ip = 0;;) switch (_fun45462_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.style;
                var _closure2_slot0 = var8;
                var4 = var0.children;
                var3 = var0.BodyComponent;
                var2 = undefined;
                if (!(var2 === var3)) {
                    _fun45462_ip = 59;
                    continue _fun45462
                }
            case 31:
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var0 = 3;
                var0 = var6[var0];
                var0 = var5.bind(var2)(var0);
                var3 = var0.View;
            case 59:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var5 = 4;
                var5 = var7[var5];
                var9 = var6.bind(var2)(var5);
                var5 = var9.useBottomSheetInternal;
                var5 = var5.bind(var9)();
                var10 = var5.animatedIndex;
                var _closure2_slot1 = var10;
                var11 = var5.animatedPosition;
                var _closure2_slot2 = var11;
                var5 = 3;
                var5 = var7[var5];
                var9 = var6.bind(var2)(var5);
                var7 = var9.useAnimatedStyle;
                var6 = function() {
                    _fun45463: for (var _fun45463_ip = 0;;) switch (_fun45463_ip) {
                        case 0:
                            var0 = {};
                            var3 = _closure2_slot1;
                            var2 = var3.get;
                            var4 = var2.bind(var3)();
                            var2 = 1;
                            var3 = -1;
                            if (!(var3 === var4)) {
                                _fun45463_ip = 33;
                                continue _fun45463
                            }
                        case 31:
                            var2 = 0;
                        case 33:
                            var0.opacity = var2;
                            var2 = {};
                            var3 = _closure2_slot2;
                            var1 = var3.get;
                            var1 = var1.bind(var3)();
                            var2.translateY = var1;
                            var1 = new Array(1);
                            var1[0] = var2;
                            var0.transform = var1;
                            return var0;
                    }
                };
                var5 = {};
                var12 = _closure1_slot4;
                var5.Platform = var12;
                var5.animatedIndex = var10;
                var5.animatedPosition = var11;
                var6.__closure = var5;
                var5 = 5915282482182.0;
                var6.__workletHash = var5;
                var5 = _closure1_slot6;
                var6.__initData = var5;
                var5 = new Array(2);
                var5[0] = var11;
                var5[1] = var10;
                var7 = var7.bind(var9)(var6, var5);
                var _closure2_slot3 = var7;
                var6 = _closure1_slot3;
                var5 = new Array(2);
                var5[0] = var8;
                var5[1] = var7;
                var1 = function() { // Environment: var1
                    var2 = _closure2_slot0;
                    var0 = new Array(3);
                    var0[0] = var2;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 5;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var2 = var2.styles;
                    var2 = var2.container;
                    var0[1] = var2;
                    var1 = _closure2_slot3;
                    var0[2] = var1;
                    return var0;
                };
                var5 = var6.bind(var2)(var1, var5);
                var1 = _closure1_slot5;
                var0 = {};
                var0.style = var5;
                var5 = true;
                var0.collapsable = var5;
                var0.children = var4;
                var0 = var1.bind(var2)(var3, var0);
                return var0;
        }
    };
    var1 = var3.bind(var0)(var1);
    var3 = 'BottomSheetBody';
    var1.displayName = var3;
    var2.BottomSheetBody = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 3721, 4938, 5060]);