// components_native/MemberRolesList.tsx
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
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.View;
    var _closure1_slot3 = var7;
    var7 = var3.StyleSheet;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot5 = var3;
    var6 = var7.create;
    var3 = {};
    var8 = {
        'flexDirection': 'row',
        'flexWrap': 'wrap',
        'justifyContent': 'center'
    };
    var3.wrapper = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot6 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'components_native/MemberRolesList.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun79665: for (var _fun79665_ip = 0;;) switch (_fun79665_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.userRoles;
                var _closure2_slot0 = var2;
                var3 = var0.guild;
                var _closure2_slot1 = var3;
                var7 = var0.style;
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 4;
                var0 = var4[var0];
                var4 = undefined;
                var8 = var3.bind(var4)(var0);
                var5 = var8.useStateFromStores;
                var0 = _closure1_slot4;
                var3 = new Array(1);
                var3[0] = var0;
                var0 = function() { // Environment: var1
                    var2 = _closure1_slot4;
                    var1 = var2.getSortedRoles;
                    var0 = _closure2_slot1;
                    var0 = var0.id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var5 = var5.bind(var8)(var3, var0);
                var8 = _closure1_slot5;
                var3 = _closure1_slot3;
                var0 = {};
                var8 = var8.bind(var4)(var3, var0);
                var3 = null;
                var0 = var8;
                if (!(var3 != var2)) {
                    _fun79665_ip = 221;
                    continue _fun79665
                }
            case 109:
                var3 = var2.length;
                var2 = 0;
                var0 = var8;
                if (!(var3 > var2)) {
                    _fun79665_ip = 221;
                    continue _fun79665
                }
            case 123:
                var3 = var5.filter;
                var2 = function(arg0) { // Environment: var1
                    var2 = _closure2_slot0;
                    var1 = var2.includes;
                    var0 = arg0;
                    var0 = var0.id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var5 = var3.bind(var5)(var2);
                var3 = var5.sort;
                var2 = function(arg0, arg1) { // Environment: var1
                    _fun79668: for (var _fun79668_ip = 0;;) switch (_fun79668_ip) {
                        case 0:
                            var0 = arg0;
                            var3 = var0.tags;
                            var1 = null;
                            var4 = var1 == var3;
                            var2 = undefined;
                            if (var4) {
                                _fun79668_ip = 26;
                                continue _fun79668
                            }
                        case 20:
                            var2 = var3.guild_connections;
                        case 26:
                            var4 = var1 !== var2;
                            var2 = arg1;
                            var2 = var2.tags;
                            var3 = var1 == var2;
                            var0 = undefined;
                            if (var3) {
                                _fun79668_ip = 54;
                                continue _fun79668
                            }
                        case 48:
                            var0 = var2.guild_connections;
                        case 54:
                            var2 = var1 !== var0;
                            if (!var4) {
                                _fun79668_ip = 67;
                                continue _fun79668
                            }
                        case 61:
                            var0 = 1;
                            if (!var2) {
                                _fun79668_ip = 86;
                                continue _fun79668
                            }
                        case 67:
                            var1 = 0;
                            if (var4) {
                                _fun79668_ip = 83;
                                continue _fun79668
                            }
                        case 72:
                            var1 = 0;
                            if (!var2) {
                                _fun79668_ip = 83;
                                continue _fun79668
                            }
                        case 77:
                            var1 = -1;
                        case 83:
                            var0 = var1;
                        case 86:
                            return var0;
                    }
                };
                var3 = var3.bind(var5)(var2);
                var2 = var3.map;
                var1 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var4 = _closure1_slot5;
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 5;
                    var1 = var3[var1];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var1.role = var0;
                    var5 = _closure2_slot1;
                    var5 = var5.id;
                    var1.guildId = var5;
                    var0 = var0.id;
                    var0 = var4.bind(var3)(var2, var1, var0);
                    return var0;
                };
                var5 = var2.bind(var3)(var1);
                var3 = _closure1_slot5;
                var2 = _closure1_slot3;
                var1 = {};
                var6 = _closure1_slot6;
                var8 = var6.wrapper;
                var6 = new Array(2);
                var6[0] = var8;
                var6[1] = var7;
                var1.style = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 221:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1674, 33, 566, 9151, 2]);