// modules/voice_panel/native/controls/buttons/VoicePanelRiveMicButton.tsx
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
    var3 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot2 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot3 = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/voice_panel/native/controls/buttons/VoicePanelRiveMicButton.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun68742: for (var _fun68742_ip = 0;;) switch (_fun68742_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.color;
                var7 = var0.muted;
                var3 = _closure1_slot3;
                var2 = _closure1_slot2;
                var1 = {};
                var4 = {
                    'width': 24,
                    'height': 24,
                    'pointerEvents': 'none'
                };
                var1.style = var4;
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var0 = 3;
                var4 = var4[var0];
                var0 = undefined;
                var4 = var5.bind(var0)(var4);
                var5 = var4.MicrophoneRive;
                var4 = {};
                var6 = {};
                var6.fill = var8;
                var8 = !var7;
                var6.on = var8;
                var4.dataBinding = var6;
                var6 = 'On';
                if (!var7) {
                    _fun68742_ip = 110;
                    continue _fun68742
                }
            case 104:
                var6 = 'Off';
            case 110:
                var4.defaultViewModelInstance = var6;
                var4 = var3.bind(var0)(var5, var4);
                var1.children = var4;
                var0 = var3.bind(var0)(var2, var1);
                return var0;
        }
    };
    var2.VoicePanelRiveMicButton = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 3161, 2]);