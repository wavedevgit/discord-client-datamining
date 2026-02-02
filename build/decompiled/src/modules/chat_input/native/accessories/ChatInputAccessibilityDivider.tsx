// modules/chat_input/native/accessories/ChatInputAccessibilityDivider.tsx
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
    var6 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.StyleSheet;
    var _closure1_slot2 = var7;
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot4 = var3;
    var3 = var6.memo;
    var1 = function() { // Environment: var1
        _fun89597: for (var _fun89597_ip = 0;;) switch (_fun89597_ip) {
            case 0:
                var1 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 3;
                var0 = var2[var0];
                var4 = undefined;
                var1 = var1.bind(var4)(var0);
                var0 = var1.useIsScreenReaderEnabled;
                var1 = var0.bind(var1)();
                var0 = null;
                if (!var1) {
                    _fun89597_ip = 207;
                    continue _fun89597
                }
            case 43:
                var3 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = 4;
                var1 = var6[var1];
                var3 = var3.bind(var4)(var1);
                var1 = var3.isAndroid;
                var1 = var1.bind(var3)();
                var0 = null;
                if (var1) {
                    _fun89597_ip = 207;
                    continue _fun89597
                }
            case 81:
                var3 = _closure1_slot4;
                var2 = _closure1_slot3;
                var1 = {
                    'nativeID': 'chat-input-accessibility-divider',
                    'accessible': true,
                    'accessibilityLabel': null,
                    'accessibilityRole': 'header'
                };
                var9 = _closure1_slot0;
                var10 = _closure1_slot1;
                var6 = 5;
                var7 = var10[var6];
                var7 = var9.bind(var4)(var7);
                var8 = var7.intl;
                var7 = var8.string;
                var6 = var10[var6];
                var6 = var9.bind(var4)(var6);
                var6 = var6.t;
                var6 = var6["uKZtC/"];
                var6 = var7.bind(var8)(var6);
                var1.accessibilityLabel = var6;
                var5 = _closure1_slot2;
                var6 = var5.absoluteFill;
                var5 = new Array(2);
                var5[0] = var6;
                var6 = {};
                var7 = 1;
                var6.height = var7;
                var5[1] = var6;
                var1.style = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 207:
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/chat_input/native/accessories/ChatInputAccessibilityDivider.tsx';
    var3 = var4.bind(var5)(var3);
    var2.ChatInputAccessibilityDivider = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 4031, 478, 1234, 2]);