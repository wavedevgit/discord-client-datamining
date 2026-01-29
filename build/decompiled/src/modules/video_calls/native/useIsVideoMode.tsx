// modules/video_calls/native/useIsVideoMode.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function() { // Original name: isVideoMode, environment: var3
        _fun66908: for (var _fun66908_ip = 0;;) switch (_fun66908_ip) {
            case 0:
                var2 = arguments[0];
                var6 = arguments[1];
                var4 = arguments[2];
                var5 = arguments[3];
                var3 = arguments[4];
                var0 = undefined;
                if (!(var2 === var0)) {
                    _fun66908_ip = 28;
                    continue _fun66908
                }
            case 21:
                var2 = _closure1_slot3;
            case 28:
                if (!(var6 === var0)) {
                    _fun66908_ip = 39;
                    continue _fun66908
                }
            case 32:
                var6 = _closure1_slot5;
            case 39:
                if (!(var4 === var0)) {
                    _fun66908_ip = 50;
                    continue _fun66908
                }
            case 43:
                var4 = _closure1_slot2;
            case 50:
                if (!(var5 === var0)) {
                    _fun66908_ip = 61;
                    continue _fun66908
                }
            case 54:
                var5 = _closure1_slot6;
            case 61:
                if (!(var3 === var0)) {
                    _fun66908_ip = 72;
                    continue _fun66908
                }
            case 65:
                var3 = _closure1_slot4;
            case 72:
                var1 = var2.getChannel;
                var0 = var6.getVoiceChannelId;
                var0 = var0.bind(var6)();
                var2 = var1.bind(var2)(var0);
                var0 = null;
                var0 = var0 != var2;
                if (!var0) {
                    _fun66908_ip = 157;
                    continue _fun66908
                }
            case 101:
                var1 = var4.getAllActiveStreams;
                var1 = var1.bind(var4)();
                var4 = var1.length;
                var1 = 0;
                var1 = var4 > var1;
                if (var1) {
                    _fun66908_ip = 141;
                    continue _fun66908
                }
            case 125:
                var4 = var5.hasVideo;
                var2 = var2.id;
                var1 = var4.bind(var5)(var2);
            case 141:
                if (var1) {
                    _fun66908_ip = 154;
                    continue _fun66908
                }
            case 144:
                var2 = var3.isVideoEnabled;
                var1 = var2.bind(var3)();
            case 154:
                var0 = var1;
            case 157:
                return var0;
        }
    };
    var _closure1_slot7 = var1;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var7.bind(var0)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot6 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/video_calls/native/useIsVideoMode.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function() { // Original name: _default, environment: var3
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 5;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.useStateFromStores;
        var4 = _closure1_slot3;
        var1 = new Array(5);
        var1[0] = var4;
        var4 = _closure1_slot5;
        var1[1] = var4;
        var4 = _closure1_slot4;
        var1[2] = var4;
        var4 = _closure1_slot6;
        var1[3] = var4;
        var0 = _closure1_slot2;
        var1[4] = var0;
        var0 = function() { // Environment: var0
            var6 = _closure1_slot7;
            var11 = _closure1_slot3;
            var10 = _closure1_slot5;
            var9 = _closure1_slot2;
            var8 = _closure1_slot6;
            var7 = _closure1_slot4;
            var12 = undefined;
            var0 = var12[var6](var11, var10, var9, var8, var7, var6);
            return var0;
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var3;
    var2.isVideoMode = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3671, 1372, 3435, 1661, 3480, 566, 2]);