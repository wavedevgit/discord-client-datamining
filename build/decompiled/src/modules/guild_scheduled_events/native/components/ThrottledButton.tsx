// modules/guild_scheduled_events/native/components/ThrottledButton.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function() {
        _fun66186: for (var _fun66186_ip = 0;;) switch (_fun66186_ip) {
            case 0:
                var2 = arguments[0];
                var1 = undefined;
                if (!(var2 === var1)) {
                    _fun66186_ip = 17;
                    continue _fun66186
                }
            case 11:
                var2 = 500;
            case 17:
                var _closure2_slot0 = var2;
                var _closure2_slot1 = var1;
                var4 = _closure1_slot2;
                var3 = var4.useRef;
                var2 = null;
                var2 = var3.bind(var4)(var2);
                _closure2_slot1 = var2;
                var4 = _closure1_slot2;
                var3 = var4.useEffect;
                var2 = function() { // Environment: var0
                    var0 = function() { // Environment: var0
                        var0 = global;
                        var2 = var0.clearTimeout;
                        var0 = _closure2_slot1;
                        var1 = var0.current;
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        return var0;
                    };
                    return var0;
                };
                var1 = new Array(0);
                var1 = var3.bind(var4)(var2, var1);
                var0 = function(arg0) { // Environment: var0
                    var1 = arg0;
                    var _closure3_slot0 = var1;
                    var0 = function(arg0) { // Environment: var0
                        _fun66190: for (var _fun66190_ip = 0;;) switch (_fun66190_ip) {
                            case 0:
                                var1 = _closure3_slot0;
                                var3 = null;
                                var1 = var3 != var1;
                                if (!var1) {
                                    _fun66190_ip = 32;
                                    continue _fun66190
                                }
                            case 16:
                                var2 = _closure2_slot1;
                                var2 = var2.current;
                                var1 = var3 === var2;
                            case 32:
                                if (!var1) {
                                    _fun66190_ip = 89;
                                    continue _fun66190
                                }
                            case 35:
                                var1 = _closure3_slot0;
                                var4 = undefined;
                                var0 = arg0;
                                var0 = var1.bind(var4)(var0);
                                var1 = _closure2_slot1;
                                var2 = global;
                                var3 = var2.setTimeout;
                                var2 = _closure2_slot0;
                                var0 = function() { // Environment: var0
                                    var1 = _closure2_slot1;
                                    var0 = null;
                                    var1.current = var0;
                                    var0 = undefined;
                                    return var0;
                                };
                                var0 = var3.bind(var4)(var0, var2);
                                var1.current = var0;
                            case 89:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    return var0;
                };
                return var0;
        }
    };
    var _closure1_slot4 = var1;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var4);
    var0 = 0;
    var7 = var6[var0];
    var4 = arg3;
    var0 = undefined;
    var4 = var4.bind(var0)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.jsx;
    var _closure1_slot3 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_scheduled_events/native/components/ThrottledButton.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function arg0() {
        _fun66192: for (var _fun66192_ip = 0;;) switch (_fun66192_ip) {
            case 0:
                var4 = arg0;
                var7 = var4.onPress;
                var6 = var4.onPressIn;
                var5 = var4.onPressOut;
                var2 = var4.throttleMs;
                var3 = undefined;
                if (!(var2 === var3)) {
                    _fun66192_ip = 38;
                    continue _fun66192
                }
            case 32:
                var2 = 500;
            case 38:
                var1 = {
                    'onPress': 0,
                    'onPressIn': 0,
                    'onPressOut': 0,
                    'throttleMs': 0
                };
                var11 = null;
                var12 = var1;
                var0 = silentSetPrototypeOf(var12, var11);
                var12 = {};
                var11 = var4;
                var10 = var1;
                var11 = copyDataProperties(var12, var11, var10);
                var1 = _closure1_slot4;
                var4 = var1.bind(var3)(var2);
                var2 = _closure1_slot3;
                var1 = _closure1_slot0;
                var9 = _closure1_slot1;
                var0 = 2;
                var0 = var9[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.Button;
                var0 = {};
                var12 = var0;
                var8 = copyDataProperties(var12, var11);
                var8 = var4.bind(var3)(var7);
                var7 = 'onPress';
                var0[var7] = var8;
                var7 = var4.bind(var3)(var6);
                var6 = 'onPressIn';
                var0[var6] = var7;
                var5 = var4.bind(var3)(var5);
                var4 = 'onPressOut';
                var0[var4] = var5;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var3;
    var2.useThrottledActionHandler = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 33, 4084, 2]);