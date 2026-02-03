// modules/threads/ThreadMemberListHooks.tsx
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
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.StatusTypes;
    var _closure1_slot6 = var3;
    var3 = new Array(0);
    var _closure1_slot7 = var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/threads/ThreadMemberListHooks.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1() {
        _fun105757: for (var _fun105757_ip = 0;;) switch (_fun105757_ip) {
            case 0:
                var4 = arg1;
                var1 = arg0;
                var _closure2_slot0 = var1;
                var _closure2_slot1 = var4;
                var3 = _closure1_slot1;
                var6 = _closure1_slot2;
                var2 = 4;
                var2 = var6[var2];
                var5 = undefined;
                var3 = var3.bind(var5)(var2);
                var2 = function() { // Environment: var0
                    _fun105758: for (var _fun105758_ip = 0;;) switch (_fun105758_ip) {
                        case 0:
                            var0 = _closure2_slot1;
                            var3 = null;
                            var4 = var3 == var0;
                            var0 = undefined;
                            var2 = undefined;
                            if (var4) {
                                _fun105758_ip = 29;
                                continue _fun105758
                            }
                        case 20:
                            var4 = _closure2_slot1;
                            var2 = var4.id;
                        case 29:
                            if (!(var3 != var2)) {
                                _fun105758_ip = 100;
                                continue _fun105758
                            }
                        case 33:
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var2 = 5;
                            var2 = var7[var2];
                            var5 = var6.bind(var0)(var2);
                            var4 = var5.subscribeChannel;
                            var2 = _closure2_slot1;
                            var3 = var2.id;
                            var2 = _closure2_slot0;
                            var1 = 6;
                            var1 = var7[var1];
                            var1 = var6.bind(var0)(var1);
                            var1 = var1.DEFAULT_RANGES;
                            var1 = var4.bind(var5)(var3, var2, var1);
                        case 100:
                            return var0;
                    }
                };
                var2 = var3.bind(var5)(var2);
                var3 = _closure1_slot0;
                var2 = 7;
                var7 = var6[var2];
                var10 = var3.bind(var5)(var7);
                var9 = var10.useStateFromStores;
                var7 = _closure1_slot4;
                var8 = new Array(1);
                var8[0] = var7;
                var7 = function() { // Environment: var0
                    _fun105759: for (var _fun105759_ip = 0;;) switch (_fun105759_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var0 = null;
                            if (!(var0 == var2)) {
                                _fun105759_ip = 19;
                                continue _fun105759
                            }
                        case 13:
                            var0 = new Array(0);
                            _fun105759_ip = 46;
                            continue _fun105759;
                        case 19:
                            var3 = _closure1_slot4;
                            var2 = var3.getSortedRoles;
                            var1 = _closure2_slot1;
                            var1 = var1.id;
                            var0 = var2.bind(var3)(var1);
                        case 46:
                            return var0;
                    }
                };
                var9 = var9.bind(var10)(var8, var7);
                var _closure2_slot2 = var9;
                var2 = var6[var2];
                var6 = var3.bind(var5)(var2);
                var5 = var6.useStateFromStoresObject;
                var2 = _closure1_slot5;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = function() { // Environment: var0
                    var0 = {};
                    var3 = _closure1_slot5;
                    var1 = var3.getMemberListVersion;
                    var2 = _closure2_slot0;
                    var1 = var1.bind(var3)(var2);
                    var0.version = var1;
                    var1 = var3.getMemberListSections;
                    var1 = var1.bind(var3)(var2);
                    var0.members = var1;
                    return var0;
                };
                var2 = var5.bind(var6)(var3, var2);
                var8 = var2.version;
                var3 = var2.members;
                var _closure2_slot3 = var3;
                var2 = null;
                var7 = var2 == var4;
                var _closure2_slot4 = var7;
                var6 = _closure1_slot3;
                var5 = var6.useMemo;
                var4 = new Array(4);
                var4[0] = var9;
                var4[1] = var3;
                var4[2] = var8;
                var4[3] = var7;
                var0 = function() { // Environment: var0
                    _fun105761: for (var _fun105761_ip = 0;;) switch (_fun105761_ip) {
                        case 0:
                            var2 = _closure2_slot4;
                            if (var2) {
                                _fun105761_ip = 223;
                                continue _fun105761
                            }
                        case 15:
                            var3 = _closure2_slot2;
                            var2 = var3.filter;
                            var1 = function(arg0) { // Environment: var0
                                var0 = arg0;
                                var0 = var0.hoist;
                                return var0;
                            };
                            var3 = var2.bind(var3)(var1);
                            var2 = var3.map;
                            var1 = function(arg0) { // Environment: var0
                                var1 = arg0;
                                var0 = {};
                                var2 = var1.id;
                                var0.id = var2;
                                var1 = var1.name;
                                var0.label = var1;
                                return var0;
                            };
                            var2 = var2.bind(var3)(var1);
                            var4 = var2.push;
                            var3 = {};
                            var6 = _closure1_slot6;
                            var5 = var6.ONLINE;
                            var3.id = var5;
                            var9 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var5 = 8;
                            var1 = var10[var5];
                            var8 = undefined;
                            var1 = var9.bind(var8)(var1);
                            var11 = var1.intl;
                            var7 = var11.string;
                            var1 = var10[var5];
                            var1 = var9.bind(var8)(var1);
                            var1 = var1.t;
                            var1 = var1.WbGtnH;
                            var1 = var7.bind(var11)(var1);
                            var3.label = var1;
                            var1 = {};
                            var6 = var6.OFFLINE;
                            var1.id = var6;
                            var6 = var10[var5];
                            var6 = var9.bind(var8)(var6);
                            var7 = var6.intl;
                            var6 = var7.string;
                            var5 = var10[var5];
                            var5 = var9.bind(var8)(var5);
                            var5 = var5.t;
                            var5 = var5.Vv0abJ;
                            var5 = var6.bind(var7)(var5);
                            var1.label = var5;
                            var1 = var4.bind(var2)(var3, var1);
                            var1 = var2.map;
                            var0 = function(arg0) { // Environment: var0
                                _fun105764: for (var _fun105764_ip = 0;;) switch (_fun105764_ip) {
                                    case 0:
                                        var0 = arg0;
                                        var1 = var0.id;
                                        var2 = var0.label;
                                        var0 = {};
                                        var0.label = var2;
                                        var2 = _closure2_slot3;
                                        var3 = null;
                                        var5 = var3 == var2;
                                        var2 = undefined;
                                        if (var5) {
                                            _fun105764_ip = 60;
                                            continue _fun105764
                                        }
                                    case 37:
                                        var4 = _closure2_slot3;
                                        var4 = var4[var1];
                                        var5 = var3 == var4;
                                        var2 = undefined;
                                        if (var5) {
                                            _fun105764_ip = 60;
                                            continue _fun105764
                                        }
                                    case 54:
                                        var2 = var4.userIds;
                                    case 60:
                                        if (!(var3 == var2)) {
                                            _fun105764_ip = 68;
                                            continue _fun105764
                                        }
                                    case 64:
                                        var2 = new Array(0);
                                    case 68:
                                        var0.userIds = var2;
                                        var0.id = var1;
                                        var0.roleId = var1;
                                        return var0;
                                }
                            };
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        case 223:
                            var0 = _closure1_slot7;
                            return var0;
                    }
                };
                var0 = var5.bind(var6)(var0, var4);
                if (!(var2 == var3)) {
                    _fun105757_ip = 219;
                    continue _fun105757
                }
            case 215:
                var0 = _closure1_slot7;
            case 219:
                return var0;
        }
    };
    var2.useThreadMemberListSections = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1665, 6622, 483, 4094, 7739, 5670, 566, 1234, 2]);