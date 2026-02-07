// modules/rich_presence/PresenceActivityFiltering.tsx
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
    var3 = 2;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/rich_presence/PresenceActivityFiltering.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1() {
        _fun51059: for (var _fun51059_ip = 0;;) switch (_fun51059_ip) {
            case 0:
                var0 = arg0;
                var2 = arg1;
                var _closure2_slot0 = var2;
                var2 = var0.id;
                var5 = null;
                if (!(var5 !== var2)) {
                    _fun51059_ip = 124;
                    continue _fun51059
                }
            case 23:
                var3 = var0.id;
                var2 = undefined;
                if (!(var2 !== var3)) {
                    _fun51059_ip = 124;
                    continue _fun51059
                }
            case 34:
                var4 = _closure1_slot2;
                var3 = var4.getApplication;
                var0 = var0.id;
                var3 = var3.bind(var4)(var0);
                var0 = var5 != var3;
                if (!var0) {
                    _fun51059_ip = 74;
                    continue _fun51059
                }
            case 64:
                var4 = var3.linkedGames;
                var0 = var5 != var4;
            case 74:
                if (!var0) {
                    _fun51059_ip = 94;
                    continue _fun51059
                }
            case 77:
                var4 = var3.linkedGames;
                var5 = var4.length;
                var4 = 0;
                var0 = var5 > var4;
            case 94:
                if (!var0) {
                    _fun51059_ip = 122;
                    continue _fun51059
                }
            case 97:
                var4 = var3.linkedGames;
                var3 = var4.find;
                var1 = function(arg0) { // Environment: var1
                    _fun51060: for (var _fun51060_ip = 0;;) switch (_fun51060_ip) {
                        case 0:
                            var1 = arg0;
                            var2 = var1.type;
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot1;
                            var0 = 1;
                            var0 = var4[var0];
                            var4 = undefined;
                            var0 = var3.bind(var4)(var0);
                            var0 = var0.GameLinkTypes;
                            var0 = var0.LINKED;
                            var0 = var2 === var0;
                            if (!var0) {
                                _fun51060_ip = 77;
                                continue _fun51060
                            }
                        case 52:
                            var3 = var1.id;
                            var2 = _closure2_slot0;
                            var1 = function arg0, arg1() {
                                var2 = arg1;
                                var1 = arg0;
                                var _closure4_slot0 = var1;
                                var1 = var2.find;
                                var0 = function(arg0) { // Environment: var0
                                    var0 = arg0;
                                    var1 = var0.application_id;
                                    var0 = _closure4_slot0;
                                    var0 = var1 === var0;
                                    return var0;
                                };
                                var1 = var1.bind(var2)(var0);
                                var0 = null;
                                var0 = var0 != var1;
                                return var0;
                            };
                            var0 = var1.bind(var4)(var3, var2);
                        case 77:
                            return var0;
                    }
                };
                var1 = var3.bind(var4)(var1);
                var0 = var2 !== var1;
            case 122:
                return var0;
            case 124:
                var0 = false;
                return var0;
        }
    };
    var2.doesGameHaveRichPresence = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3455, 1647, 2]);