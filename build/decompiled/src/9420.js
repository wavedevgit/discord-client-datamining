// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var3);
    var3 = dependencyMap;
    var0 = 0;
    var4 = var3[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var4);
    var _closure1_slot0 = var3;
    var1 = function arg0() {
        _fun74922: for (var _fun74922_ip = 0;;) switch (_fun74922_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.autoPlay;
                var3 = undefined;
                var6 = var3 !== var2;
                if (!var6) {
                    _fun74922_ip = 23;
                    continue _fun74922
                }
            case 20:
                var6 = var2;
            case 23:
                var _closure2_slot0 = var6;
                var2 = var1.autoPlayReverse;
                var8 = var3 !== var2;
                if (!var8) {
                    _fun74922_ip = 43;
                    continue _fun74922
                }
            case 40:
                var8 = var2;
            case 43:
                var _closure2_slot1 = var8;
                var7 = var1.autoPlayInterval;
                var _closure2_slot2 = var7;
                var1 = var1.carouselController;
                var4 = var1.prev;
                var _closure2_slot3 = var4;
                var1 = var1.next;
                var _closure2_slot4 = var1;
                var5 = _closure1_slot0;
                var2 = var5.useRef;
                var2 = var2.bind(var5)();
                var _closure2_slot5 = var2;
                var3 = var5.useRef;
                var2 = !var6;
                var2 = var3.bind(var5)(var2);
                var _closure2_slot6 = var2;
                var3 = var5.useCallback;
                var2 = new Array(4);
                var2[0] = var8;
                var2[1] = var7;
                var2[2] = var4;
                var2[3] = var1;
                var1 = function() { // Environment: var0
                    _fun74923: for (var _fun74923_ip = 0;;) switch (_fun74923_ip) {
                        case 0:
                            var1 = _closure2_slot6;
                            var1 = var1.current;
                            if (var1) {
                                _fun74923_ip = 90;
                                continue _fun74923
                            }
                        case 15:
                            var1 = _closure2_slot5;
                            var1 = var1.current;
                            if (!var1) {
                                _fun74923_ip = 51;
                                continue _fun74923
                            }
                        case 27:
                            var1 = global;
                            var3 = var1.clearTimeout;
                            var1 = _closure2_slot5;
                            var2 = var1.current;
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
                        case 51:
                            var1 = _closure2_slot5;
                            var2 = global;
                            var4 = var2.setTimeout;
                            var3 = _closure2_slot2;
                            var2 = undefined;
                            var0 = function() { // Environment: var0
                                _fun74924: for (var _fun74924_ip = 0;;) switch (_fun74924_ip) {
                                    case 0:
                                        var1 = _closure2_slot1;
                                        if (var1) {
                                            _fun74924_ip = 34;
                                            continue _fun74924
                                        }
                                    case 10:
                                        var3 = _closure2_slot4;
                                        var2 = {};
                                        var1 = _closure2_slot7;
                                        var2.onFinished = var1;
                                        var1 = undefined;
                                        var1 = var3.bind(var1)(var2);
                                        _fun74924_ip = 56;
                                        continue _fun74924;
                                    case 34:
                                        var2 = _closure2_slot3;
                                        var1 = {};
                                        var0 = _closure2_slot7;
                                        var1.onFinished = var0;
                                        var0 = undefined;
                                        var0 = var2.bind(var0)(var1);
                                    case 56:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var0 = var4.bind(var2)(var0, var3);
                            var1.current = var0;
                        case 90:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var3.bind(var5)(var1, var2);
                var _closure2_slot7 = var1;
                var4 = var5.useCallback;
                var3 = new Array(1);
                var3[0] = var6;
                var2 = function() { // Environment: var0
                    _fun74925: for (var _fun74925_ip = 0;;) switch (_fun74925_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            if (!var1) {
                                _fun74925_ip = 58;
                                continue _fun74925
                            }
                        case 10:
                            var1 = _closure2_slot5;
                            var1 = var1.current;
                            if (!var1) {
                                _fun74925_ip = 46;
                                continue _fun74925
                            }
                        case 22:
                            var1 = global;
                            var3 = var1.clearTimeout;
                            var1 = _closure2_slot5;
                            var2 = var1.current;
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
                        case 46:
                            var1 = _closure2_slot6;
                            var0 = true;
                            var1.current = var0;
                        case 58:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = var4.bind(var5)(var2, var3);
                var _closure2_slot8 = var2;
                var4 = var5.useCallback;
                var3 = new Array(2);
                var3[0] = var1;
                var3[1] = var6;
                var1 = function() { // Environment: var0
                    _fun74926: for (var _fun74926_ip = 0;;) switch (_fun74926_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            if (!var1) {
                                _fun74926_ip = 32;
                                continue _fun74926
                            }
                        case 10:
                            var2 = _closure2_slot6;
                            var1 = false;
                            var2.current = var1;
                            var1 = _closure2_slot7;
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                        case 32:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var4.bind(var5)(var1, var3);
                var _closure2_slot9 = var1;
                var4 = var5.useEffect;
                var3 = new Array(3);
                var3[0] = var2;
                var3[1] = var1;
                var3[2] = var6;
                var0 = function() { // Environment: var0
                    _fun74927: for (var _fun74927_ip = 0;;) switch (_fun74927_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            if (var1) {
                                _fun74927_ip = 22;
                                continue _fun74927
                            }
                        case 10:
                            var2 = _closure2_slot8;
                            var1 = undefined;
                            var1 = var2.bind(var1)();
                            _fun74927_ip = 32;
                            continue _fun74927;
                        case 22:
                            var2 = _closure2_slot9;
                            var1 = undefined;
                            var1 = var2.bind(var1)();
                        case 32:
                            var0 = _closure2_slot8;
                            return var0;
                    }
                };
                var0 = var4.bind(var5)(var0, var3);
                var0 = {};
                var0.pause = var2;
                var0.start = var1;
                return var0;
        }
    };
    var2.useAutoPlay = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31]);