// modules/home_drawer/native/HomeDrawerSubtitleStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = null;
    var _closure1_slot0 = var0;
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var6 = var4.bind(var0)(var3);
    var3 = var6.create;
    var1 = function(arg0, arg1) { // Environment: var1
        var0 = arg0;
        var _closure2_slot0 = var0;
        var0 = arg1;
        var _closure2_slot1 = var0;
        var0 = {};
        var2 = 'voice';
        var0.currentType = var2;
        var2 = function() {
            _fun100754: for (var _fun100754_ip = 0;;) switch (_fun100754_ip) {
                case 0:
                    var1 = _closure1_slot0;
                    var0 = null;
                    if (!(var0 != var1)) {
                        _fun100754_ip = 32;
                        continue _fun100754
                    }
                case 13:
                    var0 = global;
                    var3 = var0.clearInterval;
                    var1 = _closure1_slot0;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var1);
                case 32:
                    var0 = global;
                    var4 = var0.setInterval;
                    var0 = undefined;
                    var3 = function() { // Environment: var1
                        _fun100755: for (var _fun100755_ip = 0;;) switch (_fun100755_ip) {
                            case 0:
                                var2 = _closure2_slot1;
                                var0 = undefined;
                                var2 = var2.bind(var0)();
                                var4 = var2.currentType;
                                var2 = _closure2_slot0;
                                var1 = {};
                                var3 = 'voice';
                                if (!(var3 === var4)) {
                                    _fun100755_ip = 37;
                                    continue _fun100755
                                }
                            case 33:
                                var3 = 'activity';
                            case 37:
                                var1.currentType = var3;
                                var1 = var2.bind(var0)(var1);
                                return var0;
                        }
                    };
                    var1 = 3500;
                    var1 = var4.bind(var0)(var3, var1);
                    _closure1_slot0 = var1;
                    return var0;
            }
        };
        var0.startTimer = var2;
        var1 = function() {
            _fun100756: for (var _fun100756_ip = 0;;) switch (_fun100756_ip) {
                case 0:
                    var2 = _closure1_slot0;
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun100756_ip = 36;
                        continue _fun100756
                    }
                case 13:
                    var2 = global;
                    var4 = var2.clearInterval;
                    var3 = _closure1_slot0;
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    _closure1_slot0 = var0;
                case 36:
                    var2 = _closure2_slot0;
                    var1 = {};
                    var0 = 'voice';
                    var1.currentType = var0;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
            }
        };
        var0.stopTimer = var1;
        return var0;
    };
    var1 = var3.bind(var6)(var1);
    var3 = 1;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/home_drawer/native/HomeDrawerSubtitleStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [629, 2]);