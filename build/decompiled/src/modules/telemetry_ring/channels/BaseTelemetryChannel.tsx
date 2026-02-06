// modules/telemetry_ring/channels/BaseTelemetryChannel.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var4[var0];
    var0 = undefined;
    var3 = var5.bind(var0)(var3);
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot1 = var3;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot1;
        var2 = function arg0, arg1() {
            var2 = this;
            var3 = _closure1_slot0;
            var1 = _closure2_slot0;
            var0 = undefined;
            var1 = var3.bind(var0)(var2, var1);
            var1 = arg0;
            var2.native = var1;
            var1 = arg1;
            var2.channels = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'append';
        var0.key = var1;
        var1 = function arg0, arg1, arg2, arg3() {
            _fun96834: for (var _fun96834_ip = 0;;) switch (_fun96834_ip) {
                case 0:
                    var1 = arg1;
                    var2 = arg2;
                    var6 = arg3;
                    var0 = this;
                    var5 = null;
                    if (!(var5 == var6)) {
                        _fun96834_ip = 35;
                        continue _fun96834
                    }
                case 18:
                    var3 = global;
                    var4 = var3.Date;
                    var3 = var4.now;
                    var6 = var3.bind(var4)();
                case 35:
                    var3 = var5 != var2;
                    var4 = null;
                    if (!var3) {
                        _fun96834_ip = 47;
                        continue _fun96834
                    }
                case 44:
                    var4 = var2;
                case 47:
                    var2 = var5 != var1;
                    var5 = null;
                    if (!var2) {
                        _fun96834_ip = 59;
                        continue _fun96834
                    }
                case 56:
                    var5 = var1;
                case 59:
                    var3 = var0.native;
                    var2 = var3.append;
                    var7 = var0.channels;
                    var11 = arg0;
                    var12 = var3;
                    var10 = var6;
                    var9 = var4;
                    var8 = var5;
                    var0 = var12[var2](var11, var10, var9, var8, var7, var6);
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var1;
        var1 = new Array(3);
        var1[0] = var0;
        var0 = {};
        var5 = 'snapshot';
        var0.key = var5;
        var5 = function arg0, arg1, arg2() {
            var0 = this;
            var5 = var0.native;
            var4 = var5.snapshot;
            var9 = var0.channels;
            var8 = arg0;
            var7 = arg1;
            var6 = arg2;
            var10 = var5;
            var0 = var10[var4](var9, var8, var7, var6, var5);
            return var0;
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'clearAll';
        var0.key = var5;
        var4 = function() {
            var0 = this;
            var1 = var0.native;
            var0 = var1.clear;
            var0 = var0.bind(var1)();
            var0 = undefined;
            return var0;
        };
        var0.value = var4;
        var1[2] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var3 = 2;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/telemetry_ring/channels/BaseTelemetryChannel.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 2]);