// ../discord_common/js/packages/media-engine/pollConnectionStats.tsx
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
    var3 = metroImportDefault;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = '../discord_common/js/packages/media-engine/pollConnectionStats.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var7 = arg0;
        var _closure2_slot0 = var7;
        var0 = false;
        var _closure2_slot1 = var0;
        var6 = var7.on;
        var4 = _closure1_slot0;
        var5 = _closure1_slot1;
        var0 = 1;
        var2 = var5[var0];
        var0 = undefined;
        var2 = var4.bind(var0)(var2);
        var2 = var2.MediaEngineEvent;
        var3 = var2.Destroy;
        var2 = function() { // Environment: var1
            var0 = true;
            _closure2_slot1 = var0;
            return var0;
        };
        var2 = var6.bind(var7)(var3, var2);
        var2 = function() { // Environment: var1
            var3 = _closure1_slot2;
            var2 = undefined;
            var1 = function*() { // Environment: var0
                var0 = function*() { // Original name: ?anon_0_, environment: var0
                    _fun32457: for (var _fun32457_ip = 0;;) switch (_fun32457_ip) {
                        case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                            if (var1) {
                                _fun32457_ip = 241;
                                continue _fun32457
                            }
                        case 12:
                            var1 = undefined;
                            var _closure5_slot0 = var1;
                            var4 = _closure2_slot1;
                            if (var4) {
                                _fun32457_ip = 238;
                                continue _fun32457
                            }
                        case 31:
                            var7 = new Array(0);
                            _closure5_slot0 = var7;
                            var5 = _closure2_slot0;
                            var4 = var5.eachConnection;
                            var2 = function(arg0) { // Environment: var2
                                var4 = arg0;
                                var2 = _closure5_slot0;
                                var1 = var2.push;
                                var0 = {};
                                var0.connection = var4;
                                var3 = var4.emitStats;
                                var3 = var3.bind(var4)();
                                var0.stats = var3;
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var2 = var4.bind(var5)(var2);
                            var9 = new Array(0);
                            var2 = var7.length;
                            var6 = 0;
                            var2 = var6 < var2;
                            var5 = null;
                            if (!var2) {
                                _fun32457_ip = 146;
                                continue _fun32457
                            }
                        case 79:
                            var10 = var7[var6];
                            var2 = var10.stats;
                            SaveGenerator(address = 93);
                        case 91:
                            return var2;
                        case 93:
                            ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 4);
                            if (var4) {
                                _fun32457_ip = 235;
                                continue _fun32457
                            }
                        case 102:
                            if (!(var5 != var2)) {
                                _fun32457_ip = 134;
                                continue _fun32457
                            }
                        case 106:
                            var8 = var9.push;
                            var4 = {};
                            var10 = var10.connection;
                            var4.connection = var10;
                            var4.stats = var2;
                            var4 = var8.bind(var9)(var4);
                        case 134:
                            var6 = var6 + 1;
                            var4 = var7.length;
                            if (var6 < var4) {
                                _fun32457_ip = 79;
                                continue _fun32457
                            }
                        case 146:
                            var8 = _closure2_slot0;
                            var5 = var8.emit;
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot1;
                            var4 = 1;
                            var4 = var7[var4];
                            var4 = var6.bind(var1)(var4);
                            var4 = var4.MediaEngineEvent;
                            var4 = var4.ConnectionStats;
                            var4 = var5.bind(var8)(var4, var9);
                            var4 = global;
                            var5 = var4.setTimeout;
                            var4 = _closure2_slot2;
                            var3 = 2;
                            var3 = var7[var3];
                            var3 = var6.bind(var1)(var3);
                            var3 = var3.STATS_INTERVAL;
                            var3 = var5.bind(var1)(var4, var3);
                            _fun32457_ip = 238;
                            continue _fun32457;
                        case 235:
                            return var2;
                        case 238:
                            return var1;
                        case 241:
                            return var0;
                    }
                };
                return var0;
            };
            var1 = var3.bind(var2)(var1);
            var _closure3_slot0 = var1;
            var0 = function() { // Environment: var0
                var0 = undefined;
                var3 = _closure3_slot0;
                var2 = var3.apply;
                var0 = arguments;
                var1 = var0;
                var0 = this;
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            return var0;
        };
        var3 = var2.bind(var0)();
        var _closure2_slot2 = var3;
        var1 = global;
        var2 = var1.setTimeout;
        var1 = 2;
        var1 = var5[var1];
        var1 = var4.bind(var0)(var1);
        var1 = var1.STATS_INTERVAL;
        var1 = var2.bind(var0)(var3, var1);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 3634, 3643, 2]);