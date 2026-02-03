// modules/main_tabs_v2/native/tabs/messages/useMessagesScrollToTop.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var7 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/main_tabs_v2/native/tabs/messages/useMessagesScrollToTop.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var0 = arg0;
        var6 = var0.listRef;
        var _closure2_slot0 = var6;
        var5 = var0.listRefHappeningNow;
        var _closure2_slot1 = var5;
        var3 = _closure1_slot3;
        var4 = var3.useMemo;
        var2 = new Array(2);
        var2[0] = var6;
        var2[1] = var5;
        var1 = function() { // Environment: var1
            var0 = {};
            var1 = -1;
            var0.scrollToTopTimeout = var1;
            var1 = function() {
                _fun101425: for (var _fun101425_ip = 0;;) switch (_fun101425_ip) {
                    case 0:
                        var2 = this;
                        var4 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var0 = 2;
                        var3 = var6[var0];
                        var0 = undefined;
                        var4 = var4.bind(var0)(var3);
                        var3 = var4.coerceGuildsRoute;
                        var5 = _closure1_slot1;
                        var1 = 3;
                        var1 = var6[var1];
                        var1 = var5.bind(var0)(var1);
                        var1 = var1.bind(var0)();
                        var3 = var3.bind(var4)(var1);
                        var1 = null;
                        if (!(var1 != var3)) {
                            _fun101425_ip = 143;
                            continue _fun101425
                        }
                    case 65:
                        var3 = var2.scrollToTopTimeout;
                        var1 = -1;
                        if (!(var1 !== var3)) {
                            _fun101425_ip = 108;
                            continue _fun101425
                        }
                    case 81:
                        var3 = global;
                        var4 = var3.clearTimeout;
                        var3 = var2.scrollToTopTimeout;
                        var3 = var4.bind(var0)(var3);
                        var2.scrollToTopTimeout = var1;
                        _fun101425_ip = 143;
                        continue _fun101425;
                    case 108:
                        var1 = global;
                        var4 = var1.setTimeout;
                        var3 = function() { // Environment: var1
                            _fun101426: for (var _fun101426_ip = 0;;) switch (_fun101426_ip) {
                                case 0:
                                    var0 = _closure2_slot0;
                                    var1 = null;
                                    var3 = var1 == var0;
                                    var0 = undefined;
                                    var5 = undefined;
                                    if (var3) {
                                        _fun101426_ip = 36;
                                        continue _fun101426
                                    }
                                case 20:
                                    var4 = _closure2_slot0;
                                    var4 = var4.current;
                                    var3 = var1 == var4;
                                    var5 = var4;
                                case 36:
                                    if (var3) {
                                        _fun101426_ip = 85;
                                        continue _fun101426
                                    }
                                case 39:
                                    var4 = var5.scrollToLocation;
                                    var3 = {
                                        'section': 0,
                                        'item': 0
                                    };
                                    var6 = _closure1_slot4;
                                    var6 = var6.useReducedMotion;
                                    var6 = !var6;
                                    var3.animated = var6;
                                    var3 = var4.bind(var5)(var3);
                                case 85:
                                    var2 = _closure2_slot1;
                                    var3 = var2.current;
                                    if (!(var1 != var3)) {
                                        _fun101426_ip = 139;
                                        continue _fun101426
                                    }
                                case 98:
                                    var2 = var3.scrollToOffset;
                                    var1 = {};
                                    var4 = 0;
                                    var1.offset = var4;
                                    var4 = _closure1_slot4;
                                    var4 = var4.useReducedMotion;
                                    var4 = !var4;
                                    var1.animated = var4;
                                    var1 = var2.bind(var3)(var1);
                                case 139:
                                    return var0;
                            }
                        };
                        var1 = 300;
                        var1 = var4.bind(var0)(var3, var1);
                        var2.scrollToTopTimeout = var1;
                    case 143:
                        return var0;
                }
            };
            var0.scrollToTop = var1;
            return var0;
        };
        var2 = var4.bind(var3)(var1, var2);
        var1 = var3.useRef;
        var3 = var1.bind(var3)(var2);
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 4;
        var1 = var1[var0];
        var0 = undefined;
        var2 = var2.bind(var0)(var1);
        var1 = var2.useScrollToTop;
        var1 = var1.bind(var2)(var3);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1298, 3919, 7737, 1470, 2]);