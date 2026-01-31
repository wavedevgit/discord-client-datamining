// modules/panels/morphable/native/getAdjustedBottomOffsets.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var6 = var4.bind(var0)(var3);
    var3 = var6.isAndroid;
    var7 = var3.bind(var6)();
    var _closure1_slot0 = var7;
    var3 = {};
    var6 = 'function getAdjustedBottomOffsets_getAdjustedBottomOffsetsTsx1({screenBottomOffset:screenBottomOffset,safeAreaBottom:safeAreaBottom,keyboardHeight:keyboardHeight}){const{IS_ANDROID}=this.__closure;let bottomOffset=screenBottomOffset;if(keyboardHeight>0){bottomOffset+=(IS_ANDROID?0:keyboardHeight)-safeAreaBottom;}return{bottomOffset:bottomOffset};}';
    var3.code = var6;
    var1 = function arg0() {
        _fun110295: for (var _fun110295_ip = 0;;) switch (_fun110295_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.screenBottomOffset;
                var3 = var0.safeAreaBottom;
                var4 = var0.keyboardHeight;
                var0 = 0;
                var1 = var2;
                if (!(var4 > var0)) {
                    _fun110295_ip = 53;
                    continue _fun110295
                }
            case 30:
                var5 = _closure1_slot0;
                var0 = 0;
                if (var5) {
                    _fun110295_ip = 45;
                    continue _fun110295
                }
            case 42:
                var0 = var4;
            case 45:
                var0 = var0 - var3;
                var1 = var2 + var0;
            case 53:
                var0 = {};
                var0.bottomOffset = var1;
                return var0;
        }
    };
    var6 = {};
    var6.IS_ANDROID = var7;
    var1.__closure = var6;
    var6 = 9166664651792.0;
    var1.__workletHash = var6;
    var1.__initData = var3;
    var3 = 1;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/panels/morphable/native/getAdjustedBottomOffsets.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [478, 2]);