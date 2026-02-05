// modules/video_calls/native/components/SingleScreenshare.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var10;
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
    var6 = var3.resetFocus;
    var _closure1_slot2 = var6;
    var3 = var3.toggleFocus;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 4;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BLACK;
    var8.backgroundColor = var9;
    var3.stageStreamContainer = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot5 = var3;
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/video_calls/native/components/SingleScreenshare.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun68870: for (var _fun68870_ip = 0;;) switch (_fun68870_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.participant;
                var6 = var0.channel;
                var _closure2_slot0 = var6;
                var1 = _closure1_slot5;
                var3 = undefined;
                var5 = var1.bind(var3)();
                var1 = _closure1_slot0;
                var8 = _closure1_slot1;
                var2 = 5;
                var2 = var8[var2];
                var9 = var1.bind(var3)(var2);
                var2 = function() { // Environment: var4
                    var1 = _closure1_slot2;
                    var0 = undefined;
                    var1 = var1.bind(var0)();
                    return var0;
                };
                var2 = var9.bind(var3)(var2);
                var2 = _closure1_slot4;
                var0 = 6;
                var0 = var8[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var0.participant = var7;
                var7 = function() {
                    var1 = _closure1_slot3;
                    var0 = undefined;
                    var1 = var1.bind(var0)();
                    return var0;
                };
                var0.onSingleTap = var7;
                var4 = function() {
                    var2 = _closure1_slot2;
                    var0 = undefined;
                    var2 = var2.bind(var0)();
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var1 = 7;
                    var1 = var3[var1];
                    var4 = var2.bind(var0)(var1);
                    var3 = var4.selectParticipant;
                    var1 = _closure2_slot0;
                    var2 = var1.id;
                    var1 = null;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var0.onDoubleTap = var4;
                var4 = var6.isGuildStageVoice;
                var6 = var4.bind(var6)();
                var4 = undefined;
                if (!var6) {
                    _fun68870_ip = 133;
                    continue _fun68870
                }
            case 127:
                var4 = var5.stageStreamContainer;
            case 133:
                var0.containerStyle = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 7904, 33, 1297, 671, 4103, 8634, 7900, 2]);