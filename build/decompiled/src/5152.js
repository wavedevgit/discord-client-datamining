// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var1);
    var0 = 0;
    var6 = var5[var0];
    var1 = metroImportDefault;
    var0 = undefined;
    var1 = var1.bind(var0)(var6);
    var _closure1_slot2 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var4 = var1.useEffect;
    var _closure1_slot3 = var4;
    var4 = var1.useMemo;
    var _closure1_slot4 = var4;
    var4 = var1.useRef;
    var _closure1_slot5 = var4;
    var1 = var1.useState;
    var _closure1_slot6 = var1;
    var1 = function arg0, arg1() {
        var0 = arg0;
        var _closure2_slot0 = var0;
        var0 = arg1;
        var _closure2_slot1 = var0;
        var4 = _closure1_slot5;
        var0 = undefined;
        var3 = false;
        var3 = var4.bind(var0)(var3);
        var _closure2_slot2 = var3;
        var2 = _closure1_slot3;
        var1 = function() { // Environment: var1
            _fun46018: for (var _fun46018_ip = 0;;) switch (_fun46018_ip) {
                case 0:
                    var2 = _closure2_slot0;
                    var1 = var2.getIsFirstLayoutComplete;
                    var1 = var1.bind(var2)();
                    if (!var1) {
                        _fun46018_ip = 32;
                        continue _fun46018
                    }
                case 20:
                    var2 = _closure2_slot2;
                    var2 = var2.current;
                    var1 = !var2;
                case 32:
                    if (!var1) {
                        _fun46018_ip = 57;
                        continue _fun46018
                    }
                case 35:
                    var2 = _closure2_slot2;
                    var1 = true;
                    var2.current = var1;
                    var1 = _closure2_slot1;
                    var0 = undefined;
                    var0 = var1.bind(var0)();
                case 57:
                    var0 = undefined;
                    return var0;
            }
        };
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var _closure1_slot7 = var1;
    var3 = function arg0, arg1() {
        var4 = arg0;
        var _closure2_slot0 = var4;
        var1 = arg1;
        var _closure2_slot1 = var1;
        var5 = _closure1_slot5;
        var1 = global;
        var3 = var1.Date;
        var1 = var3.now;
        var1 = var1.bind(var3)();
        var3 = undefined;
        var1 = var5.bind(var3)(var1);
        var _closure2_slot2 = var1;
        var5 = _closure1_slot6;
        var1 = false;
        var5 = var5.bind(var3)(var1);
        var1 = _closure1_slot2;
        var8 = 2;
        var6 = var1.bind(var3)(var5, var8);
        var1 = 0;
        var1 = var6[var1];
        var5 = 1;
        var5 = var6[var5];
        var _closure2_slot3 = var5;
        var5 = var4.getDataLength;
        var5 = var5.bind(var4)();
        var7 = _closure1_slot0;
        var6 = _closure1_slot1;
        var6 = var6[var8];
        var7 = var7.bind(var3)(var6);
        var6 = var7.useUnmountAwareAnimationFrame;
        var6 = var6.bind(var7)();
        var6 = var6.requestAnimationFrame;
        var _closure2_slot4 = var6;
        var7 = _closure1_slot4;
        var6 = new Array(1);
        var6[0] = var5;
        var5 = function() { // Environment: var0
            var1 = _closure2_slot2;
            var0 = global;
            var2 = var0.Date;
            var0 = var2.now;
            var0 = var0.bind(var2)();
            var1.current = var0;
            var0 = undefined;
            return var0;
        };
        var5 = var7.bind(var3)(var5, var6);
        var2 = _closure1_slot7;
        var0 = function() { // Environment: var0
            var0 = global;
            var2 = var0.Date;
            var0 = var2.now;
            var3 = var0.bind(var2)();
            var2 = _closure2_slot2;
            var2 = var2.current;
            var2 = var3 - var2;
            var _closure3_slot0 = var2;
            var2 = _closure2_slot4;
            var0 = undefined;
            var1 = function() { // Environment: var1
                _fun46022: for (var _fun46022_ip = 0;;) switch (_fun46022_ip) {
                    case 0:
                        var1 = _closure2_slot0;
                        var2 = true;
                        var1.isFirstPaintOnUiComplete = var2;
                        var3 = _closure2_slot1;
                        var1 = null;
                        if (!(var1 != var3)) {
                            _fun46022_ip = 50;
                            continue _fun46022
                        }
                    case 25:
                        var4 = _closure2_slot1;
                        var3 = {};
                        var1 = _closure3_slot0;
                        var3.elapsedTimeInMs = var1;
                        var1 = undefined;
                        var1 = var4.bind(var1)(var3);
                    case 50:
                        var1 = _closure2_slot3;
                        var0 = undefined;
                        var1 = var1.bind(var0)(var2);
                        return var0;
                }
            };
            var1 = var2.bind(var0)(var1);
            return var0;
        };
        var0 = var2.bind(var3)(var4, var0);
        var0 = {};
        var0.isLoaded = var1;
        return var0;
    };
    var2.useOnListLoad = var3;
    var2.useOnLoad = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5104, 31, 5150]);