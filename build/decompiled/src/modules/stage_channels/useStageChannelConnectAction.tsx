// modules/stage_channels/useStageChannelConnectAction.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var4 = dependencyMap;
    var0 = metroImportDefault;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var4;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var3);
    var3 = {};
    var5 = 0;
    var3.NORMAL = var5;
    var0 = 'NORMAL';
    var3[var5] = var0;
    var5 = 1;
    var3.START_EVENT = var5;
    var0 = 'START_EVENT';
    var3[var5] = var0;
    var _closure1_slot2 = var3;
    var0 = 2;
    var5 = var4[var0];
    var4 = require;
    var0 = undefined;
    var6 = var4.bind(var0)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/stage_channels/useStageChannelConnectAction.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function arg0() {
        _fun65204: for (var _fun65204_ip = 0;;) switch (_fun65204_ip) {
            case 0:
                var5 = arg0;
                var3 = _closure1_slot0;
                var6 = _closure1_slot1;
                var0 = 0;
                var0 = var6[var0];
                var4 = undefined;
                var0 = var3.bind(var4)(var0);
                var2 = var0.bind(var4)(var5);
                var0 = 1;
                var0 = var6[var0];
                var3 = var3.bind(var4)(var0);
                var0 = true;
                var0 = var3.bind(var4)(var5, var0);
                var0 = var0.moderator;
                if (var2) {
                    _fun65204_ip = 76;
                    continue _fun65204
                }
            case 61:
                if (!var0) {
                    _fun65204_ip = 76;
                    continue _fun65204
                }
            case 64:
                var0 = _closure1_slot2;
                var0 = var0.START_EVENT;
                _fun65204_ip = 86;
                continue _fun65204;
            case 76:
                var1 = _closure1_slot2;
                var0 = var1.NORMAL;
            case 86:
                return var0;
        }
    };
    var2.default = var4;
    var2.ChannelConnectAction = var3;
    var1 = function arg0() {
        var4 = arg0;
        var0 = {};
        var2 = _closure1_slot0;
        var5 = _closure1_slot1;
        var1 = 0;
        var1 = var5[var1];
        var3 = undefined;
        var1 = var2.bind(var3)(var1);
        var1 = var1.bind(var3)(var4);
        var0.isLive = var1;
        var1 = 1;
        var1 = var5[var1];
        var2 = var2.bind(var3)(var1);
        var1 = true;
        var1 = var2.bind(var3)(var4, var1);
        var1 = var1.moderator;
        var0.isModerator = var1;
        return var0;
    };
    var2.useStageChannelStartEvent = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5878, 8052, 2]);