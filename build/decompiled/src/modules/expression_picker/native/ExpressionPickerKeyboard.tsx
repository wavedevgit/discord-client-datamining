// modules/expression_picker/native/ExpressionPickerKeyboard.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportAll;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.KEYBOARD_ANIMATION_CONFIG;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot6 = var3;
    var3 = {};
    var7 = 'function ExpressionPickerKeyboardTsx1(){const{bottomSheetIndex}=this.__closure;return Math.max(bottomSheetIndex.get(),0)>0;}';
    var3.code = var7;
    var _closure1_slot7 = var3;
    var3 = {};
    var7 = 'function ExpressionPickerKeyboardTsx2(){const{bottomSheetExpandingOrExpanded,maximum,minimum}=this.__closure;return{height:bottomSheetExpandingOrExpanded.get()?maximum:minimum};}';
    var3.code = var7;
    var _closure1_slot8 = var3;
    var3 = var6.memo;
    var1 = function arg0() {
        var0 = arg0;
        var10 = var0.channel;
        var20 = var0.chatInputRef;
        var _closure2_slot0 = var20;
        var23 = var0.onClose;
        var _closure2_slot1 = var23;
        var5 = var0.transitionState;
        var _closure2_slot2 = var5;
        var3 = _closure1_slot0;
        var17 = _closure1_slot2;
        var0 = 4;
        var2 = var17[var0];
        var4 = undefined;
        var7 = var3.bind(var4)(var2);
        var6 = var7.useSharedValue;
        var2 = -1;
        var15 = var6.bind(var7)(var2);
        var _closure2_slot3 = var15;
        var2 = var17[var0];
        var7 = var3.bind(var4)(var2);
        var6 = var7.useSharedValue;
        var2 = 0;
        var21 = var6.bind(var7)(var2);
        var22 = _closure1_slot4;
        var7 = var22.useRef;
        var6 = null;
        var16 = var7.bind(var22)(var6);
        var _closure2_slot4 = var16;
        var6 = 5;
        var6 = var17[var6];
        var7 = var3.bind(var4)(var6);
        var6 = var7.useIsScreenReaderEnabled;
        var6 = var6.bind(var7)();
        var _closure2_slot5 = var6;
        var8 = var22.useState;
        var7 = false;
        var9 = var8.bind(var22)(var7);
        var8 = _closure1_slot3;
        var7 = 2;
        var7 = var8.bind(var4)(var9, var7);
        var24 = var7[var2];
        var _closure2_slot6 = var24;
        var2 = 1;
        var2 = var7[var2];
        var _closure2_slot7 = var2;
        var8 = var22.useCallback;
        var7 = new Array(1);
        var7[0] = var20;
        var2 = function(arg0) { // Environment: var1
            _fun109072: for (var _fun109072_ip = 0;;) switch (_fun109072_ip) {
                case 0:
                    var3 = _closure2_slot0;
                    var9 = var3.current;
                    var7 = var9.insertText;
                    var5 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var0 = 6;
                    var1 = var8[var0];
                    var0 = undefined;
                    var5 = var5.bind(var0)(var1);
                    var1 = arg0;
                    var6 = var5.bind(var0)(var1);
                    var1 = null;
                    var5 = true;
                    var5 = var7.bind(var9)(var6, var1, var5);
                    var7 = _closure1_slot0;
                    var4 = 7;
                    var4 = var8[var4];
                    var5 = var7.bind(var0)(var4);
                    var4 = var5.dismissGlobalKeyboard;
                    var4 = var4.bind(var5)();
                    var5 = var3.current;
                    var4 = var5.openCustomKeyboard;
                    var3 = {};
                    var6 = 8;
                    var6 = var8[var6];
                    var6 = var7.bind(var0)(var6);
                    var6 = var6.KeyboardTypes;
                    var6 = var6.EXPRESSION;
                    var3.type = var6;
                    var3 = var4.bind(var5)(var3);
                    var2 = _closure2_slot4;
                    var3 = var2.current;
                    if (!(var1 != var3)) {
                        _fun109072_ip = 160;
                        continue _fun109072
                    }
                case 147:
                    var2 = var3.snapToIndex;
                    var1 = 0;
                    var1 = var2.bind(var3)(var1);
                case 160:
                    return var0;
            }
        };
        var13 = var8.bind(var22)(var2, var7);
        var8 = var22.useCallback;
        var7 = new Array(1);
        var7[0] = var20;
        var2 = function(arg0) { // Environment: var1
            var0 = _closure2_slot0;
            var3 = var0.current;
            var2 = var3.handleSelectGIF;
            var1 = arg0;
            var1 = var2.bind(var3)(var1);
            var1 = var0.current;
            var0 = var1.openSystemKeyboard;
            var0 = var0.bind(var1)();
            var0 = undefined;
            return var0;
        };
        var12 = var8.bind(var22)(var2, var7);
        var8 = var22.useCallback;
        var7 = new Array(1);
        var7[0] = var20;
        var2 = function(arg0) { // Environment: var1
            var0 = _closure2_slot0;
            var3 = var0.current;
            var2 = var3.handleSelectSticker;
            var1 = arg0;
            var1 = var2.bind(var3)(var1);
            var2 = var0.current;
            var1 = var2.openSystemKeyboard;
            var1 = var1.bind(var2)();
            var2 = var0.current;
            var1 = var2.setText;
            var0 = '';
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var11 = var8.bind(var22)(var2, var7);
        var8 = var22.useCallback;
        var7 = new Array(1);
        var7[0] = var20;
        var2 = function() { // Environment: var1
            var0 = _closure2_slot0;
            var1 = var0.current;
            var0 = var1.backspace;
            var0 = var0.bind(var1)();
            var0 = undefined;
            return var0;
        };
        var14 = var8.bind(var22)(var2, var7);
        var2 = 9;
        var2 = var17[var2];
        var8 = var3.bind(var4)(var2);
        var7 = var8.useKeyboardContextForType;
        var2 = 8;
        var2 = var17[var2];
        var2 = var3.bind(var4)(var2);
        var2 = var2.KeyboardTypes;
        var2 = var2.EXPRESSION;
        var9 = var7.bind(var8)(var2);
        var8 = _closure1_slot1;
        var2 = 10;
        var2 = var17[var2];
        var2 = var8.bind(var4)(var2);
        var2 = var2.bind(var4)();
        var25 = var2.minimum;
        var _closure2_slot8 = var25;
        var26 = var2.maximum;
        var _closure2_slot9 = var26;
        var2 = var17[var0];
        var18 = var3.bind(var4)(var2);
        var7 = var18.useDerivedValue;
        var2 = function() {
            var0 = global;
            var3 = var0.Math;
            var2 = var3.max;
            var1 = _closure2_slot3;
            var0 = var1.get;
            var0 = var0.bind(var1)();
            var1 = 0;
            var0 = var2.bind(var3)(var0, var1);
            var0 = var0 > var1;
            return var0;
        };
        var27 = {};
        var27.bottomSheetIndex = var15;
        var2.__closure = var27;
        var27 = 1982988107352.0;
        var2.__workletHash = var27;
        var27 = _closure1_slot7;
        var2.__initData = var27;
        var27 = var7.bind(var18)(var2);
        var _closure2_slot10 = var27;
        var2 = var17[var0];
        var7 = var3.bind(var4)(var2);
        var3 = var7.useAnimatedStyle;
        var2 = function() {
            _fun109077: for (var _fun109077_ip = 0;;) switch (_fun109077_ip) {
                case 0:
                    var0 = {};
                    var3 = _closure2_slot10;
                    var1 = var3.get;
                    var1 = var1.bind(var3)();
                    if (var1) {
                        _fun109077_ip = 27;
                        continue _fun109077
                    }
                case 21:
                    var1 = _closure2_slot8;
                    _fun109077_ip = 31;
                    continue _fun109077;
                case 27:
                    var1 = _closure2_slot9;
                case 31:
                    var0.height = var1;
                    return var0;
            }
        };
        var18 = {};
        var18.bottomSheetExpandingOrExpanded = var27;
        var18.maximum = var26;
        var18.minimum = var25;
        var2.__closure = var18;
        var18 = 13253776832356.0;
        var2.__workletHash = var18;
        var18 = _closure1_slot8;
        var2.__initData = var18;
        var7 = var3.bind(var7)(var2);
        var18 = var22.useCallback;
        var3 = new Array(2);
        var3[0] = var6;
        var3[1] = var20;
        var2 = function() { // Environment: var1
            _fun109078: for (var _fun109078_ip = 0;;) switch (_fun109078_ip) {
                case 0:
                    var3 = _closure2_slot7;
                    var0 = undefined;
                    var2 = true;
                    var2 = var3.bind(var0)(var2);
                    var2 = _closure2_slot5;
                    if (!var2) {
                        _fun109078_ip = 42;
                        continue _fun109078
                    }
                case 23:
                    var1 = _closure2_slot0;
                    var2 = var1.current;
                    var1 = var2.openSystemKeyboard;
                    var1 = var1.bind(var2)();
                case 42:
                    return var0;
            }
        };
        var18 = var18.bind(var22)(var2, var3);
        var3 = var22.useEffect;
        var2 = new Array(3);
        var2[0] = var24;
        var2[1] = var23;
        var2[2] = var5;
        var1 = function() { // Environment: var1
            _fun109079: for (var _fun109079_ip = 0;;) switch (_fun109079_ip) {
                case 0:
                    var1 = _closure2_slot6;
                    if (!var1) {
                        _fun109079_ip = 55;
                        continue _fun109079
                    }
                case 10:
                    var3 = _closure2_slot2;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 11;
                    var4 = var4[var2];
                    var2 = undefined;
                    var2 = var5.bind(var2)(var4);
                    var2 = var2.TransitionStates;
                    var2 = var2.YEETED;
                    var1 = var3 === var2;
                case 55:
                    if (!var1) {
                        _fun109079_ip = 78;
                        continue _fun109079
                    }
                case 58:
                    var2 = _closure2_slot1;
                    var1 = null;
                    if (!(var1 != var2)) {
                        _fun109079_ip = 78;
                        continue _fun109079
                    }
                case 68:
                    var1 = _closure2_slot1;
                    var0 = undefined;
                    var0 = var1.bind(var0)();
                case 78:
                    var0 = undefined;
                    return var0;
            }
        };
        var1 = var3.bind(var22)(var1, var2);
        var3 = _closure1_slot6;
        var1 = 12;
        var1 = var17[var1];
        var2 = var8.bind(var4)(var1);
        var1 = {};
        var1.ref = var16;
        var1.animatedIndex = var15;
        var1.animatedPosition = var21;
        var1.forceMaxHeight = var6;
        var1.chatInputRef = var20;
        var19 = _closure1_slot5;
        var1.animationConfigs = var19;
        var1.onClose = var18;
        var1.transitionState = var5;
        var0 = var17[var0];
        var0 = var8.bind(var4)(var0);
        var5 = var0.View;
        var0 = {};
        var18 = 'expression-picker-sheet';
        var0.nativeID = var18;
        var0.style = var7;
        var7 = 13;
        var7 = var17[var7];
        var8 = var8.bind(var4)(var7);
        var7 = {};
        var7.bottomSheetRef = var16;
        var7.bottomSheetIndex = var15;
        var7.onBackspace = var14;
        var7.onPressEmoji = var13;
        var7.onPressGIF = var12;
        var7.onPressSticker = var11;
        var7.channel = var10;
        var7.expressionType = var9;
        var9 = true;
        var7.inPortalKeyboard = var9;
        var7 = var3.bind(var4)(var8, var7);
        var0.children = var7;
        var0 = var3.bind(var4)(var5, var0);
        var1.children = var0;
        var0 = global;
        var0 = var0.HermesInternal;
        var5 = var0.concat;
        var0 = 'expression-picker-';
        var0 = var5.bind(var0)(var6);
        var0 = var3.bind(var4)(var2, var1, var0);
        return var0;
    };
    var1 = var3.bind(var6)(var1);
    var3 = 14;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/expression_picker/native/ExpressionPickerKeyboard.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 13921, 33, 3721, 4070, 14074, 1582, 1567, 3915, 11422, 4027, 13952, 9362, 2]);