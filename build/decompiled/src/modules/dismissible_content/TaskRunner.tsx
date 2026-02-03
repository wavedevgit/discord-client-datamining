// modules/dismissible_content/TaskRunner.tsx
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
        var2 = function() {
            var2 = this;
            var3 = _closure1_slot0;
            var1 = _closure2_slot0;
            var0 = undefined;
            var1 = var3.bind(var0)(var2, var1);
            var1 = null;
            var2.timeoutId = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'schedule';
        var0.key = var1;
        var1 = function arg0, arg1() {
            var2 = this;
            var _closure3_slot0 = var2;
            var0 = arg0;
            var _closure3_slot1 = var0;
            var0 = var2.unschedule;
            var0 = var0.bind(var2)();
            var0 = global;
            var4 = var0.setTimeout;
            var0 = undefined;
            var3 = function() { // Environment: var1
                var2 = _closure3_slot0;
                var1 = null;
                var2.timeoutId = var1;
                var1 = _closure3_slot1;
                var0 = undefined;
                var1 = var1.bind(var0)();
                return var0;
            };
            var1 = arg1;
            var1 = var4.bind(var0)(var3, var1);
            var2.timeoutId = var1;
            return var0;
        };
        var0.value = var1;
        var1 = new Array(3);
        var1[0] = var0;
        var0 = {};
        var5 = 'unschedule';
        var0.key = var5;
        var5 = function() {
            _fun15739: for (var _fun15739_ip = 0;;) switch (_fun15739_ip) {
                case 0:
                    var1 = this;
                    var0 = var1.scheduled;
                    var0 = var0.bind(var1)();
                    if (!var0) {
                        _fun15739_ip = 45;
                        continue _fun15739
                    }
                case 16:
                    var0 = global;
                    var3 = var0.clearTimeout;
                    var2 = var1.timeoutId;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2);
                    var0 = null;
                    var1.timeoutId = var0;
                case 45:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'scheduled';
        var0.key = var5;
        var4 = function() {
            var0 = this;
            var1 = var0.timeoutId;
            var0 = null;
            var0 = var0 !== var1;
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
    var3 = 'modules/dismissible_content/TaskRunner.tsx';
    var3 = var4.bind(var5)(var3);
    var2.TaskRunner = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 2]);