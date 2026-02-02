// modules/keyboard/native/PortalKeyboardFooterIOS.ios.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
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
    var3 = var3.jsx;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'position': 'absolute',
        'bottom': 0,
        'left': 0,
        'right': 0,
        'zIndex': 1,
        'flex': 1
    };
    var9 = 3;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BACKGROUND_BASE_LOWER;
    var8.backgroundColor = var9;
    var3.keyboardStickyFooter = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot5 = var3;
    var3 = {};
    var6 = "function PortalKeyboardFooterIOSIosTsx1(){const{interpolate,progress,bottom,animatedSheetIndex,height,EXPRESSION_FOOTER_HEIGHT}=this.__closure;const offset=interpolate(progress.get(),[0,1],[0,bottom]);if(animatedSheetIndex.get()>=0){return{transform:[{translateY:height.get()+offset}]};}return{transform:[{translateY:interpolate(animatedSheetIndex.get(),[-1,0],[EXPRESSION_FOOTER_HEIGHT+bottom,0],'clamp')}]};}";
    var3.code = var6;
    var _closure1_slot6 = var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/keyboard/native/PortalKeyboardFooterIOS.ios.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun68238: for (var _fun68238_ip = 0;;) switch (_fun68238_ip) {
            case 0:
                var0 = arg0;
                var14 = var0.animatedSheetIndex;
                var _closure2_slot0 = var14;
                var6 = var0.portalHostName;
                var3 = undefined;
                if (!(var6 === var3)) {
                    _fun68238_ip = 33;
                    continue _fun68238
                }
            case 27:
                var6 = 'expression-footer';
            case 33:
                var _closure2_slot1 = var3;
                var _closure2_slot2 = var3;
                var _closure2_slot3 = var3;
                var _closure2_slot4 = var3;
                var _closure2_slot5 = var3;
                var0 = _closure1_slot5;
                var11 = var0.bind(var3)();
                _closure2_slot1 = var11;
                var1 = _closure1_slot1;
                var7 = _closure1_slot2;
                var0 = 4;
                var0 = var7[var0];
                var0 = var1.bind(var3)(var0);
                var0 = var0.bind(var3)();
                var15 = var0.bottom;
                _closure2_slot2 = var15;
                var5 = _closure1_slot0;
                var0 = 5;
                var0 = var7[var0];
                var8 = var5.bind(var3)(var0);
                var0 = var8.useReanimatedKeyboardAnimation;
                var0 = var0.bind(var8)();
                var13 = var0.height;
                _closure2_slot3 = var13;
                var16 = var0.progress;
                _closure2_slot4 = var16;
                var0 = 6;
                var8 = var7[var0];
                var10 = var5.bind(var3)(var8);
                var9 = var10.useAnimatedStyle;
                var8 = function() {
                    _fun68239: for (var _fun68239_ip = 0;;) switch (_fun68239_ip) {
                        case 0:
                            var1 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var5 = 6;
                            var0 = var0[var5];
                            var11 = undefined;
                            var7 = var1.bind(var11)(var0);
                            var4 = var7.interpolate;
                            var1 = _closure2_slot4;
                            var0 = var1.get;
                            var3 = var0.bind(var1)();
                            var0 = _closure2_slot2;
                            var1 = [0];
                            var1[1] = var0;
                            var0 = [0, 1];
                            var4 = var4.bind(var7)(var3, var0, var1);
                            var1 = _closure2_slot0;
                            var0 = var1.get;
                            var0 = var0.bind(var1)();
                            var1 = 0;
                            if (!(!(var0 >= var1))) {
                                _fun68239_ip = 239;
                                continue _fun68239
                            }
                        case 104:
                            var0 = {};
                            var3 = {};
                            var10 = _closure1_slot0;
                            var12 = _closure1_slot2;
                            var5 = var12[var5];
                            var9 = var10.bind(var11)(var5);
                            var8 = var9.interpolate;
                            var6 = _closure2_slot0;
                            var5 = var6.get;
                            var7 = var5.bind(var6)();
                            var6 = new Array(2);
                            var5 = -1;
                            var6[0] = var5;
                            var6[1] = var1;
                            var5 = 7;
                            var5 = var12[var5];
                            var5 = var10.bind(var11)(var5);
                            var10 = var5.EXPRESSION_FOOTER_HEIGHT;
                            var5 = _closure2_slot2;
                            var10 = var10 + var5;
                            var5 = new Array(2);
                            var5[0] = var10;
                            var5[1] = var1;
                            var13 = 'clamp';
                            var17 = var9;
                            var16 = var7;
                            var15 = var6;
                            var14 = var5;
                            var1 = var17[var8](var16, var15, var14, var13, var12);
                            var3.translateY = var1;
                            var1 = new Array(1);
                            var1[0] = var3;
                            var0.transform = var1;
                            _fun68239_ip = 280;
                            continue _fun68239;
                        case 239:
                            var1 = {};
                            var3 = {};
                            var5 = _closure2_slot3;
                            var2 = var5.get;
                            var2 = var2.bind(var5)();
                            var2 = var2 + var4;
                            var3.translateY = var2;
                            var2 = new Array(1);
                            var2[0] = var3;
                            var1.transform = var2;
                            var0 = var1;
                        case 280:
                            return var0;
                    }
                };
                var12 = {};
                var17 = var7[var0];
                var17 = var5.bind(var3)(var17);
                var17 = var17.interpolate;
                var12.interpolate = var17;
                var12.progress = var16;
                var12.bottom = var15;
                var12.animatedSheetIndex = var14;
                var12.height = var13;
                var13 = 7;
                var13 = var7[var13];
                var13 = var5.bind(var3)(var13);
                var13 = var13.EXPRESSION_FOOTER_HEIGHT;
                var12.EXPRESSION_FOOTER_HEIGHT = var13;
                var8.__closure = var12;
                var12 = 5681202963788.0;
                var8.__workletHash = var12;
                var12 = _closure1_slot6;
                var8.__initData = var12;
                var12 = var9.bind(var10)(var8);
                _closure2_slot5 = var12;
                var10 = _closure1_slot3;
                var9 = var10.useMemo;
                var8 = new Array(2);
                var8[0] = var12;
                var8[1] = var11;
                var4 = function() { // Environment: var4
                    var0 = _closure2_slot1;
                    var2 = var0.keyboardStickyFooter;
                    var0 = new Array(2);
                    var0[0] = var2;
                    var1 = _closure2_slot5;
                    var0[1] = var1;
                    return var0;
                };
                var4 = var9.bind(var10)(var4, var8);
                var2 = _closure1_slot4;
                var0 = var7[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.View;
                var0 = {};
                var0.style = var4;
                var4 = 8;
                var4 = var7[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.PortalHost;
                var4 = {};
                var4.name = var6;
                var4 = var2.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 33, 1297, 671, 1568, 8478, 3681, 670, 3887, 2]);