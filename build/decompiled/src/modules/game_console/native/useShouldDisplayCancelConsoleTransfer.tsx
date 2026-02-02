// modules/game_console/native/useShouldDisplayCancelConsoleTransfer.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var4 = dependencyMap;
    var0 = function arg0() {
        _fun69412: for (var _fun69412_ip = 0;;) switch (_fun69412_ip) {
            case 0:
                var1 = arg0;
                var0 = null;
                var0 = var0 != var1;
                if (!var0) {
                    _fun69412_ip = 49;
                    continue _fun69412
                }
            case 12:
                var2 = global;
                var3 = var2.Date;
                var2 = var3.now;
                var2 = var2.bind(var3)();
                var1 = var1.startedAt;
                var2 = var2 - var1;
                var1 = 6000;
                var0 = var2 > var1;
            case 49:
                return var0;
        }
    };
    var _closure1_slot2 = var0;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var3);
    var0 = 0;
    var5 = var4[var0];
    var3 = arg2;
    var0 = undefined;
    var3 = var3.bind(var0)(var5);
    var _closure1_slot0 = var3;
    var3 = 1;
    var5 = var4[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var5);
    var _closure1_slot1 = var3;
    var3 = 2;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/game_console/native/useShouldDisplayCancelConsoleTransfer.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var5 = arg0;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot1;
        var3 = var4.useState;
        var2 = function() { // Environment: var1
            var2 = _closure1_slot2;
            var1 = _closure2_slot0;
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            return var0;
        };
        var6 = var3.bind(var4)(var2);
        var3 = _closure1_slot0;
        var2 = undefined;
        var0 = 2;
        var3 = var3.bind(var2)(var6, var0);
        var0 = 0;
        var0 = var3[var0];
        var2 = 1;
        var2 = var3[var2];
        var _closure2_slot1 = var2;
        var3 = var4.useEffect;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() { // Environment: var1
            _fun69415: for (var _fun69415_ip = 0;;) switch (_fun69415_ip) {
                case 0:
                    var3 = _closure1_slot2;
                    var5 = _closure2_slot0;
                    var0 = undefined;
                    var3 = var3.bind(var0)(var5);
                    var4 = _closure2_slot1;
                    var4 = var4.bind(var0)(var3);
                    var4 = null;
                    if (!(var4 != var5)) {
                        _fun69415_ip = 114;
                        continue _fun69415
                    }
                case 38:
                    if (var3) {
                        _fun69415_ip = 114;
                        continue _fun69415
                    }
                case 41:
                    var3 = global;
                    var4 = var3.setTimeout;
                    var5 = var3.Date;
                    var3 = var5.now;
                    var3 = var3.bind(var5)();
                    var2 = _closure2_slot0;
                    var2 = var2.startedAt;
                    var3 = var3 - var2;
                    var2 = 6000;
                    var3 = var2 - var3;
                    var2 = function() { // Environment: var1
                        var2 = _closure2_slot1;
                        var3 = _closure1_slot2;
                        var0 = _closure2_slot0;
                        var1 = undefined;
                        var0 = var3.bind(var1)(var0);
                        var0 = var2.bind(var1)(var0);
                        return var0;
                    };
                    var2 = var4.bind(var0)(var2, var3);
                    var _closure3_slot0 = var2;
                    var1 = function() { // Environment: var1
                        var0 = global;
                        var2 = var0.clearTimeout;
                        var1 = _closure3_slot0;
                        var0 = undefined;
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    return var1;
                case 114:
                    return var0;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 2]);