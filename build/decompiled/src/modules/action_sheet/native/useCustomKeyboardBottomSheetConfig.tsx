// modules/action_sheet/native/useCustomKeyboardBottomSheetConfig.tsx
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
    var7 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/action_sheet/native/useCustomKeyboardBottomSheetConfig.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun107634: for (var _fun107634_ip = 0;;) switch (_fun107634_ip) {
            case 0:
                var1 = arg0;
                var12 = var1.forceMaxHeight;
                var6 = undefined;
                if (!(var12 === var6)) {
                    _fun107634_ip = 19;
                    continue _fun107634
                }
            case 17:
                var12 = false;
            case 19:
                var _closure2_slot0 = var12;
                var _closure2_slot1 = var6;
                var _closure2_slot2 = var6;
                var _closure2_slot3 = var6;
                var2 = _closure1_slot1;
                var8 = _closure1_slot2;
                var1 = 6;
                var1 = var8[var1];
                var3 = var2.bind(var6)(var1);
                var1 = {};
                var4 = true;
                var1.ignoreKeyboard = var4;
                var3 = var3.bind(var6)(var1);
                _closure2_slot1 = var3;
                var1 = 7;
                var1 = var8[var1];
                var1 = var2.bind(var6)(var1);
                var1 = var1.bind(var6)();
                var11 = var1.minimum;
                _closure2_slot2 = var11;
                var4 = var1.maximum;
                _closure2_slot3 = var4;
                var1 = 8;
                var1 = var8[var1];
                var2 = var2.bind(var6)(var1);
                var1 = function() { // Environment: var0
                    _fun107635: for (var _fun107635_ip = 0;;) switch (_fun107635_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var1 = var1.height;
                            var0 = _closure2_slot2;
                            var0 = var1 - var0;
                            var4 = {};
                            var4.initialPosition = var0;
                            var0 = false;
                            var4.animateOnMount = var0;
                            var1 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var0 = 2;
                            var0 = var3[var0];
                            var6 = undefined;
                            var1 = var1.bind(var6)(var0);
                            var0 = var1.isAndroid;
                            var1 = var0.bind(var1)();
                            var0 = var4;
                            if (var1) {
                                _fun107635_ip = 209;
                                continue _fun107635
                            }
                        case 78:
                            var1 = _closure1_slot4;
                            var1 = var1.useReducedMotion;
                            var0 = var4;
                            if (var1) {
                                _fun107635_ip = 209;
                                continue _fun107635
                            }
                        case 94:
                            var3 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var1 = 3;
                            var1 = var5[var1];
                            var3 = var3.bind(var6)(var1);
                            var1 = var3.getSystemKeyboardHeight;
                            var5 = var1.bind(var3)();
                            var3 = 0;
                            var1 = var4;
                            if (!(var3 === var5)) {
                                _fun107635_ip = 206;
                                continue _fun107635
                            }
                        case 133:
                            var5 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var2 = 4;
                            var2 = var7[var2];
                            var3 = var5.bind(var6)(var2);
                            var2 = var3.getKeyboardTypePrevious;
                            var3 = var2.bind(var3)();
                            var2 = 5;
                            var2 = var7[var2];
                            var2 = var5.bind(var6)(var2);
                            var2 = var2.KeyboardTypes;
                            var2 = var2.SYSTEM;
                            var1 = var4;
                            if (!(var3 === var2)) {
                                _fun107635_ip = 206;
                                continue _fun107635
                            }
                        case 194:
                            var2 = {};
                            var3 = true;
                            var2.animateOnMount = var3;
                            var1 = var2;
                        case 206:
                            var0 = var1;
                        case 209:
                            return var0;
                    }
                };
                var1 = var2.bind(var6)(var1);
                var2 = var1.initialPosition;
                var7 = var1.animateOnMount;
                var10 = _closure1_slot3;
                var9 = var10.useMemo;
                var1 = new Array(3);
                var1[0] = var12;
                var1[1] = var4;
                var1[2] = var11;
                var0 = function() { // Environment: var0
                    _fun107636: for (var _fun107636_ip = 0;;) switch (_fun107636_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            if (var0) {
                                _fun107636_ip = 32;
                                continue _fun107636
                            }
                        case 10:
                            var1 = _closure2_slot2;
                            var0 = new Array(2);
                            var0[0] = var1;
                            var1 = _closure2_slot3;
                            var0[1] = var1;
                            _fun107636_ip = 55;
                            continue _fun107636;
                        case 32:
                            var3 = _closure2_slot3;
                            var1 = new Array(2);
                            var1[0] = var3;
                            var2 = _closure2_slot3;
                            var1[1] = var2;
                            var0 = var1;
                        case 55:
                            return var0;
                    }
                };
                var1 = var9.bind(var10)(var0, var1);
                var0 = {};
                var0.animateOnMount = var7;
                var7 = _closure1_slot0;
                var5 = 2;
                var5 = var8[var5];
                var7 = var7.bind(var6)(var5);
                var5 = var7.isAndroid;
                var5 = var5.bind(var7)();
                var7 = !var5;
                var5 = !var7;
                if (var7) {
                    _fun107634_ip = 230;
                    continue _fun107634
                }
            case 228:
                var5 = undefined;
            case 230:
                var0.accessible = var5;
                var0.contentHeight = var4;
                var3 = var3.height;
                var0.containerHeight = var3;
                var3 = false;
                var0.enableDynamicSizing = var3;
                var0.initialPosition = var2;
                var2 = 'extend';
                var0.keyboardBehavior = var2;
                var0.snapPoints = var1;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1298, 478, 1585, 3914, 1567, 1464, 11374, 4930, 2]);