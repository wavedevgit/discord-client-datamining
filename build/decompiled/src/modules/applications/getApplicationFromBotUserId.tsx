// modules/applications/getApplicationFromBotUserId.tsx
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
    var3 = metroImportDefault;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot3 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/applications/getApplicationFromBotUserId.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun90840: for (var _fun90840_ip = 0;;) switch (_fun90840_ip) {
            case 0:
                var0 = arg0;
                var _closure2_slot0 = var0;
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var0 = 2;
                var3 = var3[var0];
                var0 = undefined;
                var4 = var4.bind(var0)(var3);
                var3 = var4.useStateFromStores;
                var5 = _closure1_slot2;
                var2 = new Array(1);
                var2[0] = var5;
                var1 = function() { // Environment: var1
                    _fun90841: for (var _fun90841_ip = 0;;) switch (_fun90841_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var3 = null;
                            var0 = undefined;
                            if (!(var3 !== var2)) {
                                _fun90841_ip = 68;
                                continue _fun90841
                            }
                        case 15:
                            var5 = _closure1_slot2;
                            var4 = var5.getUserProfile;
                            var7 = _closure2_slot0;
                            if (!(var3 == var7)) {
                                _fun90841_ip = 42;
                                continue _fun90841
                            }
                        case 36:
                            var2 = _closure1_slot3;
                            _fun90841_ip = 46;
                            continue _fun90841;
                        case 42:
                            var2 = _closure2_slot0;
                        case 46:
                            var2 = var4.bind(var5)(var2);
                            var3 = var3 == var2;
                            var1 = undefined;
                            if (var3) {
                                _fun90841_ip = 65;
                                continue _fun90841
                            }
                        case 60:
                            var1 = var2.application;
                        case 65:
                            var0 = var1;
                        case 68:
                            return var0;
                    }
                };
                var1 = var3.bind(var4)(var2, var1);
                var2 = null;
                var2 = var2 != var1;
                if (!var2) {
                    _fun90840_ip = 76;
                    continue _fun90840
                }
            case 73:
                var0 = var1;
            case 76:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4660, 660, 566, 2]);