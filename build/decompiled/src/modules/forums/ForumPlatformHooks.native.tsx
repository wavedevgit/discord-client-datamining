// modules/forums/ForumPlatformHooks.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
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
    var1 = metroImportAll;
    var0 = undefined;
    var1 = var1.bind(var0)(var6);
    var _closure1_slot3 = var1;
    var1 = {};
    var3 = function(arg0) { // Original name: useForumChannelSeenManager, environment: var3
        var0 = arg0;
        var6 = var0.guildId;
        var _closure2_slot0 = var6;
        var7 = var0.channelId;
        var _closure2_slot1 = var7;
        var4 = _closure1_slot3;
        var2 = var4.useRef;
        var0 = null;
        var0 = var2.bind(var4)(var0);
        var _closure2_slot2 = var0;
        var5 = var4.useCallback;
        var3 = new Array(1);
        var3[0] = var7;
        var2 = function() { // Environment: var1
            _fun92024: for (var _fun92024_ip = 0;;) switch (_fun92024_ip) {
                case 0:
                    var3 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 1;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var3.bind(var0)(var1);
                    var1 = var3.getRootNavigationRef;
                    var4 = var1.bind(var3)();
                    var1 = null;
                    if (!(var1 != var4)) {
                        _fun92024_ip = 151;
                        continue _fun92024
                    }
                case 41:
                    var3 = var4.isReady;
                    var3 = var3.bind(var4)();
                    if (!var3) {
                        _fun92024_ip = 151;
                        continue _fun92024
                    }
                case 54:
                    var3 = var4.getCurrentRoute;
                    var4 = var3.bind(var4)();
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 2;
                    var2 = var5[var2];
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.coerceChannelRoute;
                    var2 = var2.bind(var3)(var4);
                    var3 = var1 != var2;
                    if (!var3) {
                        _fun92024_ip = 124;
                        continue _fun92024
                    }
                case 102:
                    var2 = var2.params;
                    var4 = var2.channelId;
                    var2 = _closure2_slot1;
                    var3 = var4 === var2;
                case 124:
                    var2 = _closure2_slot2;
                    var2 = var2.current;
                    if (!(var1 != var2)) {
                        _fun92024_ip = 151;
                        continue _fun92024
                    }
                case 140:
                    var1 = var2.handleReactNavigationFocus;
                    var1 = var1.bind(var2)(var3);
                case 151:
                    return var0;
            }
        };
        var5 = var5.bind(var4)(var2, var3);
        var _closure2_slot3 = var5;
        var3 = var4.useEffect;
        var2 = function() { // Environment: var1
            _fun92025: for (var _fun92025_ip = 0;;) switch (_fun92025_ip) {
                case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 1;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.getRootNavigationRef;
                    var4 = var2.bind(var3)();
                    var _closure3_slot0 = var4;
                    var2 = null;
                    if (!(var2 != var4)) {
                        _fun92025_ip = 60;
                        continue _fun92025
                    }
                case 47:
                    var2 = var4.isReady;
                    var2 = var2.bind(var4)();
                    if (var2) {
                        _fun92025_ip = 62;
                        continue _fun92025
                    }
                case 60:
                    return var1;
                case 62:
                    var3 = var4.addListener;
                    var2 = _closure2_slot3;
                    var1 = 'state';
                    var1 = var3.bind(var4)(var1, var2);
                    var0 = function() { // Environment: var0
                        var3 = _closure3_slot0;
                        var2 = var3.removeListener;
                        var1 = _closure2_slot3;
                        var0 = 'state';
                        var0 = var2.bind(var3)(var0, var1);
                        var0 = undefined;
                        return var0;
                    };
                    return var0;
            }
        };
        var2 = var3.bind(var4)(var2);
        var3 = var4.useLayoutEffect;
        var2 = new Array(3);
        var2[0] = var7;
        var2[1] = var6;
        var2[2] = var5;
        var1 = function() { // Environment: var1
            var2 = _closure2_slot2;
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 3;
            var3 = var3[var1];
            var1 = undefined;
            var5 = var4.bind(var1)(var3);
            var3 = {};
            var4 = _closure2_slot0;
            var3.guildId = var4;
            var4 = _closure2_slot1;
            var3.channelId = var4;
            var4 = var5.prototype;
            var4 = Object.create(var4, {
                constructor: {
                    value: var5
                }
            });
            var7 = var4;
            var6 = var3;
            var3 = new var7[var5](var6, var5);
            var3 = var3 instanceof Object ? var3 : var4;
            var2.current = var3;
            var3 = var2.current;
            var2 = var3.initialize;
            var2 = var2.bind(var3)();
            var0 = _closure2_slot3;
            var0 = var0.bind(var1)();
            var0 = function() { // Environment: var0
                _fun92028: for (var _fun92028_ip = 0;;) switch (_fun92028_ip) {
                    case 0:
                        var1 = _closure2_slot2;
                        var3 = var1.current;
                        var1 = null;
                        if (!(var1 != var3)) {
                            _fun92028_ip = 28;
                            continue _fun92028
                        }
                    case 18:
                        var2 = var3.terminate;
                        var2 = var2.bind(var3)();
                    case 28:
                        var0 = _closure2_slot2;
                        var0.current = var1;
                        var0 = undefined;
                        return var0;
                }
            };
            return var0;
        };
        var1 = var3.bind(var4)(var1, var2);
        var0 = var0.current;
        return var0;
    };
    var1.useForumChannelSeenManager = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/forums/ForumPlatformHooks.native.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 3879, 3878, 8867, 2]);