// modules/video_calls/useDeafStates.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function arg0() {
        _fun68788: for (var _fun68788_ip = 0;;) switch (_fun68788_ip) {
            case 0:
                var4 = arg0;
                var7 = arguments[1];
                var5 = arguments[2];
                var8 = arguments[3];
                var2 = undefined;
                if (!(var7 === var2)) {
                    _fun68788_ip = 25;
                    continue _fun68788
                }
            case 18:
                var7 = _closure1_slot4;
            case 25:
                if (!(var5 === var2)) {
                    _fun68788_ip = 36;
                    continue _fun68788
                }
            case 29:
                var5 = _closure1_slot3;
            case 36:
                if (!(var8 === var2)) {
                    _fun68788_ip = 47;
                    continue _fun68788
                }
            case 40:
                var8 = _closure1_slot2;
            case 47:
                var1 = null;
                var0 = var1 != var4;
                var3 = null;
                if (!var0) {
                    _fun68788_ip = 90;
                    continue _fun68788
                }
            case 58:
                var6 = var7.getVoiceState;
                var0 = var4.getGuildId;
                var4 = var0.bind(var4)();
                var0 = var8.getId;
                var0 = var0.bind(var8)();
                var3 = var6.bind(var7)(var4, var0);
            case 90:
                var0 = {};
                var4 = var5.isSelfDeaf;
                var4 = var4.bind(var5)();
                var0.selfDeaf = var4;
                var4 = var1 == var3;
                var2 = undefined;
                if (var4) {
                    _fun68788_ip = 122;
                    continue _fun68788
                }
            case 116:
                var2 = var3.deaf;
            case 122:
                var1 = var1 != var2;
                if (!var1) {
                    _fun68788_ip = 132;
                    continue _fun68788
                }
            case 129:
                var1 = var2;
            case 132:
                var0.deaf = var1;
                return var0;
        }
    };
    var _closure1_slot5 = var1;
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
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/video_calls/useDeafStates.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function arg0() {
        var5 = arg0;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 3;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStoresObject;
        var6 = _closure1_slot4;
        var2 = new Array(3);
        var2[0] = var6;
        var6 = _closure1_slot3;
        var2[1] = var6;
        var1 = _closure1_slot2;
        var2[2] = var1;
        var1 = new Array(1);
        var1[0] = var5;
        var0 = function() { // Environment: var0
            var5 = _closure1_slot5;
            var9 = _closure2_slot0;
            var8 = _closure1_slot4;
            var7 = _closure1_slot3;
            var6 = _closure1_slot2;
            var10 = undefined;
            var0 = var10[var5](var9, var8, var7, var6, var5);
            return var0;
        };
        var0 = var3.bind(var4)(var2, var0, var1);
        return var0;
    };
    var2.default = var3;
    var2.getDeafStates = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1216, 3476, 3521, 566, 2]);