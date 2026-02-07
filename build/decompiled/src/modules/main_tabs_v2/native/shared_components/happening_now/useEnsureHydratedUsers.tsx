// modules/main_tabs_v2/native/shared_components/happening_now/useEnsureHydratedUsers.tsx
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
    var7 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/main_tabs_v2/native/shared_components/happening_now/useEnsureHydratedUsers.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1() {
        var7 = arg0;
        var6 = arg1;
        var _closure2_slot0 = var7;
        var _closure2_slot1 = var6;
        var5 = _closure1_slot2;
        var4 = var5.useMemo;
        var3 = new Array(2);
        var3[0] = var7;
        var3[1] = var6;
        var2 = function() { // Environment: var1
            _fun102236: for (var _fun102236_ip = 0;;) switch (_fun102236_ip) {
                case 0:
                    var0 = _closure2_slot1;
                    var2 = var0.length;
                    var0 = 0;
                    if (!(var0 !== var2)) {
                        _fun102236_ip = 35;
                        continue _fun102236
                    }
                case 18:
                    var0 = {};
                    var2 = _closure2_slot0;
                    var1 = _closure2_slot1;
                    var0[var2] = var1;
                    _fun102236_ip = 37;
                    continue _fun102236;
                case 35:
                    var0 = {};
                case 37:
                    return var0;
            }
        };
        var4 = var4.bind(var5)(var2, var3);
        var3 = var5.useEffect;
        var2 = new Array(2);
        var2[0] = var7;
        var2[1] = var6;
        var1 = function() { // Environment: var1
            var2 = _closure2_slot1;
            var1 = var2.forEach;
            var0 = function(arg0) { // Environment: var0
                _fun102238: for (var _fun102238_ip = 0;;) switch (_fun102238_ip) {
                    case 0:
                        var3 = arg0;
                        var2 = _closure1_slot4;
                        var1 = var2.getUser;
                        var2 = var1.bind(var2)(var3);
                        var1 = null;
                        if (!(var1 == var2)) {
                            _fun102238_ip = 50;
                            continue _fun102238
                        }
                    case 27:
                        var2 = _closure1_slot3;
                        var1 = var2.requestMember;
                        var0 = _closure2_slot0;
                        var0 = var1.bind(var2)(var0, var3);
                    case 50:
                        var0 = undefined;
                        return var0;
                }
            };
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var1 = var3.bind(var5)(var1, var2);
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 3;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.useSubscribeGuildMembers;
        var1 = 'useEnsureHydratedUsers';
        var1 = var2.bind(var3)(var4, var1);
        return var0;
    };
    var2.useEnsureHydratedUsers = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 5714, 1621, 7814, 2]);