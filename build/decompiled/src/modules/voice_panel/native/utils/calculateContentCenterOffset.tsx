// modules/voice_panel/native/utils/calculateContentCenterOffset.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var8;
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var7 = var3.EDGE_GUTTER;
    var _closure1_slot2 = var7;
    var3 = {};
    var6 = 'function calculateContentCenterOffset_calculateContentCenterOffsetTsx1({contentHeight:contentHeight,windowHeight:windowHeight,safeArea:safeArea}){const{EDGE_GUTTER,roundToNearestPixel}=this.__closure;const safeAreaTop=Math.max(safeArea.top,EDGE_GUTTER);const safeAreaBottom=Math.max(safeArea.bottom,EDGE_GUTTER);if(windowHeight<=contentHeight){return safeAreaTop;}return Math.max(safeAreaTop,safeAreaTop+roundToNearestPixel((windowHeight-safeAreaTop-safeAreaBottom-contentHeight)/2));}';
    var3.code = var6;
    var1 = function arg0() {
        _fun111880: for (var _fun111880_ip = 0;;) switch (_fun111880_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.contentHeight;
                var1 = var0.windowHeight;
                var0 = var0.safeArea;
                var2 = global;
                var6 = var2.Math;
                var4 = var6.max;
                var3 = var0.top;
                var8 = _closure1_slot2;
                var4 = var4.bind(var6)(var3, var8);
                var6 = var2.Math;
                var3 = var6.max;
                var0 = var0.bottom;
                var8 = var3.bind(var6)(var0, var8);
                var0 = var4;
                if (!(!(var1 <= var7))) {
                    _fun111880_ip = 148;
                    continue _fun111880
                }
            case 81:
                var3 = var2.Math;
                var2 = var3.max;
                var9 = _closure1_slot0;
                var6 = _closure1_slot1;
                var5 = 1;
                var5 = var6[var5];
                var6 = undefined;
                var5 = var9.bind(var6)(var5);
                var1 = var1 - var4;
                var1 = var1 - var8;
                var7 = var1 - var7;
                var1 = 2;
                var1 = var7 / var1;
                var1 = var5.bind(var6)(var1);
                var1 = var4 + var1;
                var0 = var2.bind(var3)(var4, var1);
            case 148:
                return var0;
        }
    };
    var6 = {};
    var6.EDGE_GUTTER = var7;
    var7 = 1;
    var7 = var5[var7];
    var7 = var8.bind(var0)(var7);
    var6.roundToNearestPixel = var7;
    var1.__closure = var6;
    var6 = 9988657249690.0;
    var1.__workletHash = var6;
    var1.__initData = var3;
    var3 = 2;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/voice_panel/native/utils/calculateContentCenterOffset.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [11889, 13199, 2]);