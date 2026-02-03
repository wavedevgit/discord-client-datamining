// modules/activities/useDispatchOpenActivity.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var4 = dependencyMap;
    var0 = metroImportDefault;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var4;
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
    var _closure1_slot2 = var3;
    var3 = 2;
    var4 = var4[var3];
    var3 = require;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/activities/useDispatchOpenActivity.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun64799: for (var _fun64799_ip = 0;;) switch (_fun64799_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.connectedEmbeddedActivity;
                var _closure2_slot0 = var5;
                var0 = undefined;
                var _closure2_slot1 = var0;
                var2 = null;
                var2 = var2 == var5;
                var6 = undefined;
                if (var2) {
                    _fun64799_ip = 37;
                    continue _fun64799
                }
            case 32:
                var6 = var5.applicationId;
            case 37:
                _closure2_slot1 = var6;
                var4 = _closure1_slot2;
                var3 = var4.useEffect;
                var2 = new Array(2);
                var2[0] = var6;
                var2[1] = var5;
                var1 = function() { // Environment: var1
                    _fun64800: for (var _fun64800_ip = 0;;) switch (_fun64800_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            var2 = null;
                            var0 = var2 != var0;
                            if (!var0) {
                                _fun64800_ip = 24;
                                continue _fun64800
                            }
                        case 16:
                            var1 = _closure2_slot1;
                            var0 = var2 != var1;
                        case 24:
                            if (!var0) {
                                _fun64800_ip = 93;
                                continue _fun64800
                            }
                        case 27:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot1;
                            var0 = 1;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.dispatch;
                            var0 = {};
                            var4 = 'EMBEDDED_ACTIVITY_OPEN';
                            var0.type = var4;
                            var4 = _closure2_slot0;
                            var4 = var4.location;
                            var0.location = var4;
                            var3 = _closure2_slot1;
                            var0.applicationId = var3;
                            var0 = var1.bind(var2)(var0);
                        case 93:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var3.bind(var4)(var1, var2);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 806, 2]);