// modules/blocking/useDiscoverableApplicationStream.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.RelationshipTypes;
    var _closure1_slot4 = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/blocking/useDiscoverableApplicationStream.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun62141: for (var _fun62141_ip = 0;;) switch (_fun62141_ip) {
            case 0:
                var7 = arg0;
                var _closure2_slot0 = var7;
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var2 = 3;
                var3 = var6[var2];
                var4 = undefined;
                var10 = var5.bind(var4)(var3);
                var9 = var10.useStateFromStores;
                var3 = _closure1_slot3;
                var8 = new Array(1);
                var8[0] = var3;
                var3 = function() { // Environment: var1
                    _fun62142: for (var _fun62142_ip = 0;;) switch (_fun62142_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var0 = null;
                            if (!(var0 == var2)) {
                                _fun62142_ip = 28;
                                continue _fun62142
                            }
                        case 13:
                            var0 = _closure1_slot4;
                            var0 = var0.NONE;
                            _fun62142_ip = 50;
                            continue _fun62142;
                        case 28:
                            var3 = _closure1_slot3;
                            var2 = var3.getRelationshipType;
                            var1 = _closure2_slot0;
                            var0 = var2.bind(var3)(var1);
                        case 50:
                            return var0;
                    }
                };
                var3 = var9.bind(var10)(var8, var3);
                var2 = var6[var2];
                var6 = var5.bind(var4)(var2);
                var5 = var6.useStateFromStores;
                var2 = _closure1_slot2;
                var4 = new Array(1);
                var4[0] = var2;
                var2 = new Array(1);
                var2[0] = var7;
                var1 = function() { // Environment: var1
                    _fun62143: for (var _fun62143_ip = 0;;) switch (_fun62143_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var0 = null;
                            var2 = var0 == var2;
                            if (var2) {
                                _fun62143_ip = 40;
                                continue _fun62143
                            }
                        case 16:
                            var3 = _closure1_slot2;
                            var2 = var3.getAnyDiscoverableStreamForUser;
                            var1 = _closure2_slot0;
                            var0 = var2.bind(var3)(var1);
                        case 40:
                            return var0;
                    }
                };
                var1 = var5.bind(var6)(var4, var1, var2);
                var0 = _closure1_slot4;
                var2 = var0.BLOCKED;
                var0 = null;
                if (!(var3 !== var2)) {
                    _fun62141_ip = 127;
                    continue _fun62141
                }
            case 124:
                var0 = var1;
            case 127:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3716, 3102, 660, 566, 2]);