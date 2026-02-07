// modules/game_update/useAnimatedFooter.native.tsx
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
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/game_update/useAnimatedFooter.native.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() { // Environment: var1
        var8 = _closure1_slot2;
        var1 = var8.useRef;
        var2 = null;
        var3 = var1.bind(var8)(var2);
        var _closure2_slot0 = var3;
        var1 = var8.useRef;
        var2 = var1.bind(var8)(var2);
        var _closure2_slot1 = var2;
        var5 = var8.useRef;
        var1 = true;
        var1 = var5.bind(var8)(var1);
        var _closure2_slot2 = var1;
        var6 = _closure1_slot0;
        var5 = _closure1_slot1;
        var4 = 1;
        var5 = var5[var4];
        var4 = undefined;
        var6 = var6.bind(var4)(var5);
        var5 = var6.useSharedValue;
        var4 = 0;
        var4 = var5.bind(var6)(var4);
        var _closure2_slot3 = var4;
        var7 = var8.useCallback;
        var6 = new Array(1);
        var6[0] = var4;
        var5 = function() { // Environment: var0
            _fun118763: for (var _fun118763_ip = 0;;) switch (_fun118763_ip) {
                case 0:
                    var0 = _closure2_slot0;
                    var0 = var0.current;
                    var2 = null;
                    var0 = var2 != var0;
                    if (!var0) {
                        _fun118763_ip = 34;
                        continue _fun118763
                    }
                case 21:
                    var1 = _closure2_slot1;
                    var1 = var1.current;
                    var0 = var2 != var1;
                case 34:
                    if (!var0) {
                        _fun118763_ip = 151;
                        continue _fun118763
                    }
                case 37:
                    var0 = global;
                    var2 = var0.Promise;
                    var1 = var2.all;
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var4 = 2;
                    var0 = var7[var4];
                    var5 = undefined;
                    var9 = var6.bind(var5)(var0);
                    var8 = var9.measureViewRefInWindow;
                    var0 = _closure2_slot1;
                    var8 = var8.bind(var9)(var0);
                    var0 = new Array(2);
                    var0[0] = var8;
                    var4 = var7[var4];
                    var5 = var6.bind(var5)(var4);
                    var4 = var5.measureViewRefInWindow;
                    var3 = _closure2_slot0;
                    var3 = var4.bind(var5)(var3);
                    var0[1] = var3;
                    var2 = var1.bind(var2)(var0);
                    var1 = var2.then;
                    var0 = function(arg0) { // Environment: var0
                        _fun118764: for (var _fun118764_ip = 0;;) switch (_fun118764_ip) {
                            case 0:
                                var5 = arg0;
                                var3 = var5[Symbol.iterator];
                                var5 = var3().next;
                                var1 = var5().value;
                                var2 = var3;
                                var0 = undefined;
                                var4 = var2 === var0;
                                var2 = undefined;
                                if (var4) {
                                    _fun118764_ip = 27;
                                    continue _fun118764
                                }
                            case 24:
                                var2 = var1;
                            case 27:
                                var1 = undefined;
                                if (var4) {
                                    _fun118764_ip = 57;
                                    continue _fun118764
                                }
                            case 32:
                                var6 = var5().value;
                                var5 = var3;
                                var5 = var5 === var0;
                                var1 = undefined;
                                var4 = var5;
                                if (var5) {
                                    _fun118764_ip = 57;
                                    continue _fun118764
                                }
                            case 51:
                                var1 = var6;
                                var4 = var5;
                            case 57:
                                if (var4) {
                                    _fun118764_ip = 63;
                                    continue _fun118764
                                }
                            case 60:
                                var3.return();
                            case 63:
                                var3 = null;
                                if (!(var3 != var2)) {
                                    _fun118764_ip = 209;
                                    continue _fun118764
                                }
                            case 72:
                                if (!(var3 != var1)) {
                                    _fun118764_ip = 209;
                                    continue _fun118764
                                }
                            case 79:
                                var4 = var2.y;
                                var2 = var2.height;
                                var3 = var4 + var2;
                                var2 = var1.y;
                                var1 = var1.height;
                                var1 = var2 + var1;
                                var1 = var1 > var4;
                                if (!var1) {
                                    _fun118764_ip = 118;
                                    continue _fun118764
                                }
                            case 114:
                                var1 = var2 < var3;
                            case 118:
                                var3 = _closure2_slot2;
                                var3 = var3.current;
                                if (!(var1 !== var3)) {
                                    _fun118764_ip = 209;
                                    continue _fun118764
                                }
                            case 134:
                                var3 = _closure2_slot2;
                                var3.current = var1;
                                var3 = _closure2_slot3;
                                var2 = var3.set;
                                var5 = _closure1_slot0;
                                var6 = _closure1_slot1;
                                var4 = 3;
                                var4 = var6[var4];
                                var6 = var5.bind(var0)(var4);
                                var5 = var6.withTiming;
                                var4 = 1;
                                if (!var1) {
                                    _fun118764_ip = 189;
                                    continue _fun118764
                                }
                            case 187:
                                var4 = 0;
                            case 189:
                                var1 = {};
                                var7 = 200;
                                var1.duration = var7;
                                var1 = var5.bind(var6)(var4, var1);
                                var1 = var2.bind(var3)(var1);
                            case 209:
                                return var0;
                        }
                    };
                    var0 = var1.bind(var2)(var0);
                case 151:
                    var0 = undefined;
                    return var0;
            }
        };
        var6 = var7.bind(var8)(var5, var6);
        var _closure2_slot4 = var6;
        var7 = var8.useCallback;
        var5 = new Array(1);
        var5[0] = var6;
        var0 = function() { // Environment: var0
            var0 = global;
            var2 = var0.requestAnimationFrame;
            var0 = undefined;
            var1 = function() { // Environment: var1
                var1 = _closure2_slot4;
                var0 = undefined;
                var1 = var1.bind(var0)();
                return var0;
            };
            var1 = var2.bind(var0)(var1);
            return var0;
        };
        var5 = var7.bind(var8)(var0, var5);
        var0 = {};
        var0.handleScroll = var6;
        var0.handleToggle = var5;
        var0.progress = var4;
        var0.officialServerRef = var3;
        var0.scrollViewRef = var2;
        var0.isOfficialServerVisibleRef = var1;
        return var0;
    };
    var2.useAnimatedFooter = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 3721, 9686, 4097, 2]);