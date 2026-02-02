// modules/cache/CacheActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot2;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun85674: for (var _fun85674_ip = 0;;) switch (_fun85674_ip) {
                    case 0:
                        StartGenerator();
                        var6 = arguments[0];
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun85674_ip = 171;
                            continue _fun85674
                        }
                    case 13:
                        var4 = undefined;
                        if (!(var6 === var4)) {
                            _fun85674_ip = 21;
                            continue _fun85674
                        }
                    case 19:
                        var6 = false;
                    case 21:
                        SaveGenerator(address = 25);
                    case 23:
                        return var4;
                    case 25:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun85674_ip = 168;
                            continue _fun85674
                        }
                    case 34:
                        var5 = _closure1_slot4;
                        var2 = var5.canWriteCaches;
                        var2 = var2.bind(var5)(var6);
                        if (!var2) {
                            _fun85674_ip = 159;
                            continue _fun85674
                        }
                    case 57:
                        var5 = _closure1_slot3;
                        var2 = var5.loadAllMissingChannels;
                        var2 = var2.bind(var5)();
                        SaveGenerator(address = 75);
                    case 73:
                        return var2;
                    case 75:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 5);
                        if (var5) {
                            _fun85674_ip = 165;
                            continue _fun85674
                        }
                    case 81:
                        var6 = new Array(0);
                        var5 = _closure1_slot0;
                        var7 = _closure1_slot1;
                        var3 = 3;
                        var3 = var7[var3];
                        var7 = var5.bind(var4)(var3);
                        var5 = var7.dispatch;
                        var3 = {};
                        var8 = 'WRITE_CACHES';
                        var3.type = var8;
                        var3.promisesToWaitOn = var6;
                        var3 = var5.bind(var7)(var3);
                        var3 = global;
                        var5 = var3.Promise;
                        var3 = var5.all;
                        var3 = var3.bind(var5)(var6);
                        SaveGenerator(address = 153);
                    case 151:
                        return var3;
                    case 153:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 5);
                        if (var5) {
                            _fun85674_ip = 162;
                            continue _fun85674
                        }
                    case 159:
                        return var4;
                    case 162:
                        return var3;
                    case 165:
                        return var2;
                    case 168:
                        return var1;
                    case 171:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot5 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot5 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ChannelLoader;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/cache/CacheActionCreators.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function() {
        var0 = undefined;
        var3 = _closure1_slot5;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.writeCaches = var3;
    var1 = function() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 3;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {
            'type': 'CLEAR_CACHES',
            'reason': 'Requested by user',
            'preventWritingCachesAgainThisSession': true,
            'resetSocket': true
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.clearCaches = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 1372, 4331, 806, 2]);