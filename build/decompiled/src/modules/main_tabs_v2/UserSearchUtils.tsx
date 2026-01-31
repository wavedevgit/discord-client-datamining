// modules/main_tabs_v2/UserSearchUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var3 = function arg0() {
        var3 = arg0;
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 4;
        var1 = var1[var0];
        var0 = undefined;
        var2 = var2.bind(var0)(var1);
        var1 = var2.stripDiacritics;
        var0 = var3.toLocaleLowerCase;
        var0 = var0.bind(var3)();
        var1 = var1.bind(var2)(var0);
        var0 = var1.trim;
        var0 = var0.bind(var1)();
        return var0;
    };
    var _closure1_slot7 = var3;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var7.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.RelationshipTypes;
    var _closure1_slot6 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/UserSearchUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var2.cleanString = var3;
    var3 = function arg0() {
        _fun72466: for (var _fun72466_ip = 0;;) switch (_fun72466_ip) {
            case 0:
                var5 = arg0;
                var2 = _closure1_slot5;
                var0 = var2.getRelationshipType;
                var4 = var0.bind(var2)(var5);
                var0 = _closure1_slot6;
                var2 = var0.NONE;
                var0 = var4;
                if (!(var4 === var2)) {
                    _fun72466_ip = 72;
                    continue _fun72466
                }
            case 38:
                var3 = _closure1_slot3;
                var2 = var3.getSuggestion;
                var3 = var2.bind(var3)(var5);
                var2 = null;
                var0 = var4;
                if (!(var2 != var3)) {
                    _fun72466_ip = 72;
                    continue _fun72466
                }
            case 62:
                var1 = _closure1_slot6;
                var0 = var1.SUGGESTION;
            case 72:
                return var0;
        }
    };
    var2.getRelationshipType = var3;
    var1 = function arg0() {
        _fun72467: for (var _fun72467_ip = 0;;) switch (_fun72467_ip) {
            case 0:
                var3 = arg0;
                var2 = {};
                var _closure2_slot0 = var2;
                var6 = _closure1_slot5;
                var5 = var6.getNickname;
                var1 = var3.id;
                var1 = var5.bind(var6)(var1);
                var9 = null;
                if (!(var9 != var1)) {
                    _fun72467_ip = 71;
                    continue _fun72467
                }
            case 40:
                var6 = _closure1_slot7;
                var5 = undefined;
                var7 = var6.bind(var5)(var1);
                var6 = var7.split;
                var5 = ' ';
                var5 = var6.bind(var7)(var5);
                var2[var1] = var5;
            case 71:
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var5 = 5;
                var5 = var7[var5];
                var8 = undefined;
                var6 = var6.bind(var8)(var5);
                var5 = var6.getGlobalName;
                var6 = var5.bind(var6)(var3);
                var5 = var9 != var6;
                if (!var5) {
                    _fun72467_ip = 119;
                    continue _fun72467
                }
            case 111:
                var7 = var2[var6];
                var5 = var9 == var7;
            case 119:
                if (!var5) {
                    _fun72467_ip = 151;
                    continue _fun72467
                }
            case 122:
                var5 = _closure1_slot7;
                var9 = var5.bind(var8)(var6);
                var7 = var9.split;
                var5 = ' ';
                var5 = var7.bind(var9)(var5);
                var2[var6] = var5;
            case 151:
                var6 = var3.username;
                var7 = _closure1_slot7;
                var5 = var3.username;
                var8 = var7.bind(var8)(var5);
                var7 = var8.split;
                var5 = ' ';
                var5 = var7.bind(var8)(var5);
                var2[var6] = var5;
                var5 = _closure1_slot4;
                var4 = var5.getNicknames;
                var3 = var3.id;
                var4 = var4.bind(var5)(var3);
                var3 = var4.forEach;
                var0 = function(arg0) { // Environment: var0
                    _fun72468: for (var _fun72468_ip = 0;;) switch (_fun72468_ip) {
                        case 0:
                            var2 = arg0;
                            var1 = _closure2_slot0;
                            var3 = var1[var2];
                            var1 = null;
                            if (!(var1 == var3)) {
                                _fun72468_ip = 58;
                                continue _fun72468
                            }
                        case 20:
                            var1 = _closure2_slot0;
                            var3 = _closure1_slot7;
                            var0 = undefined;
                            var4 = var3.bind(var0)(var2);
                            var3 = var4.split;
                            var0 = ' ';
                            var0 = var3.bind(var4)(var0);
                            var1[var2] = var0;
                        case 58:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var3.bind(var4)(var0);
                var0 = {};
                var0.names = var2;
                var0.nick = var1;
                return var0;
        }
    };
    var2.getNames = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [9040, 1672, 3059, 660, 1607, 3195, 2]);