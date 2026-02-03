// modules/collectibles/native/hooks/useScrollToInitialIndexOnce.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var4 = dependencyMap;
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
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var5);
    var _closure1_slot0 = var3;
    var3 = 1;
    var4 = var4[var3];
    var3 = require;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/collectibles/native/hooks/useScrollToInitialIndexOnce.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = 100;
    var2.INITIAL_SCROLL_DELAY_MS = var3;
    var1 = function arg0() {
        _fun88527: for (var _fun88527_ip = 0;;) switch (_fun88527_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.initialScrollIndex;
                var _closure2_slot0 = var7;
                var8 = var0.shouldScroll;
                var _closure2_slot1 = var8;
                var5 = var0.flashListRef;
                var _closure2_slot2 = var5;
                var6 = var0.afterMs;
                var0 = undefined;
                if (!(var6 === var0)) {
                    _fun88527_ip = 50;
                    continue _fun88527
                }
            case 47:
                var6 = 100;
            case 50:
                var _closure2_slot3 = var6;
                var _closure2_slot4 = var0;
                var4 = _closure1_slot0;
                var3 = var4.useRef;
                var2 = false;
                var2 = var3.bind(var4)(var2);
                _closure2_slot4 = var2;
                var3 = var4.useEffect;
                var2 = new Array(4);
                var2[0] = var8;
                var2[1] = var7;
                var2[2] = var6;
                var2[3] = var5;
                var1 = function() { // Environment: var1
                    _fun88528: for (var _fun88528_ip = 0;;) switch (_fun88528_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var1 = null;
                            var1 = var1 != var2;
                            if (!var1) {
                                _fun88528_ip = 20;
                                continue _fun88528
                            }
                        case 16:
                            var1 = _closure2_slot1;
                        case 20:
                            if (!var1) {
                                _fun88528_ip = 35;
                                continue _fun88528
                            }
                        case 23:
                            var2 = _closure2_slot4;
                            var2 = var2.current;
                            var1 = !var2;
                        case 35:
                            if (!var1) {
                                _fun88528_ip = 79;
                                continue _fun88528
                            }
                        case 38:
                            var2 = _closure2_slot4;
                            var1 = true;
                            var2.current = var1;
                            var1 = global;
                            var3 = var1.setTimeout;
                            var2 = _closure2_slot3;
                            var1 = undefined;
                            var0 = function() { // Environment: var0
                                _fun88529: for (var _fun88529_ip = 0;;) switch (_fun88529_ip) {
                                    case 0:
                                        var0 = _closure2_slot2;
                                        var2 = var0.current;
                                        var0 = null;
                                        if (!(var0 != var2)) {
                                            _fun88529_ip = 46;
                                            continue _fun88529
                                        }
                                    case 18:
                                        var1 = var2.scrollToIndex;
                                        var0 = {};
                                        var4 = true;
                                        var0.animated = var4;
                                        var3 = _closure2_slot0;
                                        var0.index = var3;
                                        var0 = var1.bind(var2)(var0);
                                    case 46:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var0 = var3.bind(var1)(var0, var2);
                        case 79:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var3.bind(var4)(var1, var2);
                return var0;
        }
    };
    var2.useScrollToInitialIndexOnce = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 2]);