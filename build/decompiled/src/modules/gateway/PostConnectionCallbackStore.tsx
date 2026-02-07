// modules/gateway/PostConnectionCallbackStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var0 = function() {
        var1 = _closure1_slot0;
        var0 = var1.getType;
        var1 = var0.bind(var1)();
        var0 = null;
        var0 = var0 != var1;
        return var0;
    };
    var _closure1_slot3 = var0;
    var7 = function() {
        _fun30046: for (var _fun30046_ip = 0;;) switch (_fun30046_ip) {
            case 0:
                var1 = _closure1_slot3;
                var0 = undefined;
                var1 = var1.bind(var0)();
                if (var1) {
                    _fun30046_ip = 45;
                    continue _fun30046
                }
            case 16:
                var4 = _closure1_slot2;
                var3 = var4.forEach;
                var1 = function(arg0) { // Environment: var1
                    var2 = _closure1_slot4;
                    var0 = undefined;
                    var1 = arg0;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var1 = var3.bind(var4)(var1);
                var1 = new Array(0);
                _closure1_slot2 = var1;
            case 45:
                return var0;
        }
    };
    var0 = function arg0() {
        var0 = arg0;
        var _closure2_slot0 = var0;
        var0 = global;
        var2 = var0.setImmediate;
        var0 = undefined;
        var1 = function() { // Environment: var1
            var1 = _closure2_slot0;
            var0 = undefined;
            var0 = var1.bind(var0)();
            return var0;
        };
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var _closure1_slot4 = var0;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var4[var0];
    var0 = undefined;
    var3 = var5.bind(var0)(var3);
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot1 = var3;
    var3 = new Array(0);
    var _closure1_slot2 = var3;
    var3 = 2;
    var6 = var4[var3];
    var9 = var5.bind(var0)(var6);
    var8 = var9.subscribe;
    var6 = 'CONNECTION_OPEN';
    var6 = var8.bind(var9)(var6, var7);
    var6 = var4[var3];
    var9 = var5.bind(var0)(var6);
    var8 = var9.subscribe;
    var6 = 'CONNECTION_RESUMED';
    var6 = var8.bind(var9)(var6, var7);
    var3 = var4[var3];
    var6 = var5.bind(var0)(var3);
    var5 = var6.subscribe;
    var3 = 'NUF_COMPLETE';
    var3 = var5.bind(var6)(var3, var7);
    var3 = 3;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/gateway/PostConnectionCallbackStore.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun30050: for (var _fun30050_ip = 0;;) switch (_fun30050_ip) {
            case 0:
                var2 = arg0;
                var3 = _closure1_slot1;
                var1 = var3.isConnectedOrOverlay;
                var1 = var1.bind(var3)();
                if (!var1) {
                    _fun30050_ip = 47;
                    continue _fun30050
                }
            case 23:
                var1 = _closure1_slot3;
                var3 = undefined;
                var1 = var1.bind(var3)();
                if (var1) {
                    _fun30050_ip = 47;
                    continue _fun30050
                }
            case 36:
                var1 = _closure1_slot4;
                var1 = var1.bind(var3)(var2);
                _fun30050_ip = 61;
                continue _fun30050;
            case 47:
                var1 = _closure1_slot2;
                var0 = var1.push;
                var0 = var0.bind(var1)(var2);
            case 61:
                var0 = undefined;
                return var0;
        }
    };
    var2.addPostConnectionCallback = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3474, 3475, 806, 2]);