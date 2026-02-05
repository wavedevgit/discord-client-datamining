// modules/voice_panel/native/VoicePanelAccessibilityView.tsx
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
    var7 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.VoicePanelPIPModes;
    var _closure1_slot2 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot3 = var3;
    var6 = var7.memo;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AccessibilityViewAnimated;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot4 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/voice_panel/native/VoicePanelAccessibilityView.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun110979: for (var _fun110979_ip = 0;;) switch (_fun110979_ip) {
            case 0:
                var2 = arg0;
                var11 = var2.style;
                var10 = var2.pointerEvents;
                var3 = undefined;
                if (!(var10 === var3)) {
                    _fun110979_ip = 26;
                    continue _fun110979
                }
            case 20:
                var10 = 'box-none';
            case 26:
                var9 = var2.nativeID;
                var6 = var2.accessibilityViewIsModal;
                var5 = var2.onAccessibilityEscape;
                var1 = {
                    'style': 0,
                    'pointerEvents': 0,
                    'nativeID': 0,
                    'accessibilityViewIsModal': 0,
                    'onAccessibilityEscape': 0
                };
                var13 = null;
                var14 = var1;
                var0 = silentSetPrototypeOf(var14, var13);
                var14 = {};
                var13 = var2;
                var12 = var1;
                var4 = copyDataProperties(var14, var13, var12);
                var1 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 4;
                var0 = var2[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.usePIPState;
                var8 = var0.bind(var1)();
                var2 = _closure1_slot3;
                var1 = _closure1_slot4;
                var0 = {};
                var0.style = var11;
                var0.pointerEvents = var10;
                var0.nativeID = var9;
                if (!var6) {
                    _fun110979_ip = 158;
                    continue _fun110979
                }
            case 139:
                var8 = var8.mode;
                var7 = _closure1_slot2;
                var7 = var7.IN_APP;
                var6 = var8 !== var7;
            case 158:
                var0.accessibilityViewIsModal = var6;
                var0.onAccessibilityEscape = var5;
                var14 = var0;
                var13 = var4;
                var4 = copyDataProperties(var14, var13);
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 14279, 33, 4066, 14283, 2]);