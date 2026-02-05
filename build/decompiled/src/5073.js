// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var5);
    var0 = 0;
    var3 = var3[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var3 = var3.memo;
    var4 = {};
    var5 = 'function pnpm_BottomSheetFooterContainerTsx1(){const{animatedHandleHeight,INITIAL_HANDLE_HEIGHT,animatedKeyboardHeightInContainer,animatedContainerHeight,animatedPosition,animatedKeyboardState,animatedFooterHeight,KEYBOARD_STATE}=this.__closure;const handleHeight=animatedHandleHeight.get();if(handleHeight===INITIAL_HANDLE_HEIGHT){return 0;}const keyboardHeight=animatedKeyboardHeightInContainer.get();const containerHeight=animatedContainerHeight.get();const position=animatedPosition.get();const keyboardState=animatedKeyboardState.get();const footerHeight=animatedFooterHeight.get();let footerTranslateY=Math.max(0,containerHeight-position);if(keyboardState===KEYBOARD_STATE.SHOWN){footerTranslateY=footerTranslateY-keyboardHeight;}footerTranslateY=footerTranslateY-footerHeight-handleHeight;return footerTranslateY;}';
    var4.code = var5;
    var _closure1_slot2 = var4;
    var1 = function arg0() {
        var0 = arg0;
        var2 = var0.renderFooter;
        var15 = _closure1_slot0;
        var16 = _closure1_slot1;
        var0 = 1;
        var0 = var16[var0];
        var1 = undefined;
        var5 = var15.bind(var1)(var0);
        var0 = var5.useBottomSheetInternal;
        var0 = var0.bind(var5)();
        var11 = var0.animatedContainerHeight;
        var _closure2_slot0 = var11;
        var7 = var0.animatedHandleHeight;
        var _closure2_slot1 = var7;
        var8 = var0.animatedFooterHeight;
        var _closure2_slot2 = var8;
        var10 = var0.animatedPosition;
        var _closure2_slot3 = var10;
        var9 = var0.animatedKeyboardState;
        var _closure2_slot4 = var9;
        var12 = var0.animatedKeyboardHeightInContainer;
        var _closure2_slot5 = var12;
        var0 = {};
        var5 = 2;
        var5 = var16[var5];
        var6 = var15.bind(var1)(var5);
        var5 = var6.useDerivedValue;
        var4 = function() {
            _fun45497: for (var _fun45497_ip = 0;;) switch (_fun45497_ip) {
                case 0:
                    var1 = _closure2_slot1;
                    var0 = var1.get;
                    var1 = var0.bind(var1)();
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var3 = 3;
                    var3 = var5[var3];
                    var7 = undefined;
                    var3 = var4.bind(var7)(var3);
                    var3 = var3.INITIAL_HANDLE_HEIGHT;
                    if (!(var1 !== var3)) {
                        _fun45497_ip = 197;
                        continue _fun45497
                    }
                case 54:
                    var4 = _closure2_slot5;
                    var3 = var4.get;
                    var4 = var3.bind(var4)();
                    var5 = _closure2_slot0;
                    var3 = var5.get;
                    var5 = var3.bind(var5)();
                    var6 = _closure2_slot3;
                    var3 = var6.get;
                    var3 = var3.bind(var6)();
                    var8 = _closure2_slot4;
                    var6 = var8.get;
                    var6 = var6.bind(var8)();
                    var8 = _closure2_slot2;
                    var2 = var8.get;
                    var2 = var2.bind(var8)();
                    var8 = global;
                    var9 = var8.Math;
                    var8 = var9.max;
                    var5 = var5 - var3;
                    var3 = 0;
                    var3 = var8.bind(var9)(var3, var5);
                    var5 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var0 = 4;
                    var0 = var8[var0];
                    var0 = var5.bind(var7)(var0);
                    var0 = var0.KEYBOARD_STATE;
                    var5 = var0.SHOWN;
                    var0 = var3;
                    if (!(var6 === var5)) {
                        _fun45497_ip = 187;
                        continue _fun45497
                    }
                case 183:
                    var0 = var3 - var4;
                case 187:
                    var0 = var0 - var2;
                    var0 = var0 - var1;
                    return var0;
                case 197:
                    var0 = 0;
                    return var0;
            }
        };
        var13 = {};
        var13.animatedHandleHeight = var7;
        var14 = 3;
        var14 = var16[var14];
        var14 = var15.bind(var1)(var14);
        var14 = var14.INITIAL_HANDLE_HEIGHT;
        var13.INITIAL_HANDLE_HEIGHT = var14;
        var13.animatedKeyboardHeightInContainer = var12;
        var13.animatedContainerHeight = var11;
        var13.animatedPosition = var10;
        var13.animatedKeyboardState = var9;
        var13.animatedFooterHeight = var8;
        var14 = 4;
        var14 = var16[var14];
        var14 = var15.bind(var1)(var14);
        var14 = var14.KEYBOARD_STATE;
        var13.KEYBOARD_STATE = var14;
        var4.__closure = var13;
        var13 = 8297656659240.0;
        var4.__workletHash = var13;
        var3 = _closure1_slot2;
        var4.__initData = var3;
        var3 = new Array(6);
        var3[0] = var12;
        var3[1] = var11;
        var3[2] = var10;
        var3[3] = var9;
        var3[4] = var8;
        var3[5] = var7;
        var3 = var5.bind(var6)(var4, var3);
        var0.animatedFooterPosition = var3;
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var1 = var3.bind(var0)(var1);
    var3 = 'BottomSheetFooterContainer';
    var1.displayName = var3;
    var2.BottomSheetFooterContainer = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 4940, 3721, 4939, 4936]);