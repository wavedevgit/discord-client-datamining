// modules/stage_channels/useGuildMemberDisplayRole.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var0 = metroImportAll;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var6;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var6[var0];
    var0 = undefined;
    var1 = var4.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var6[var1];
    var1 = var4.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = function(arg0, arg1) { // Original name: getHighestHoistedRole, environment: var3
        _fun50382: for (var _fun50382_ip = 0;;) switch (_fun50382_ip) {
            case 0:
                var5 = arg0;
                var4 = arg1;
                var1 = arguments[2];
                var6 = undefined;
                if (!(var1 === var6)) {
                    _fun50382_ip = 41;
                    continue _fun50382
                }
            case 15:
                var3 = _closure1_slot4;
                var0 = new Array(2);
                var0[0] = var3;
                var2 = _closure1_slot3;
                var0[1] = var2;
                var1 = var0;
            case 41:
                var7 = var1;
                var0 = var7[Symbol.iterator];
                var7 = var0().next;
                var3 = var7().value;
                var1 = var0;
                var1 = var1 === var6;
                var2 = undefined;
                if (var1) {
                    _fun50382_ip = 66;
                    continue _fun50382
                }
            case 63:
                var2 = var3;
            case 66:
                var3 = undefined;
                if (var1) {
                    _fun50382_ip = 96;
                    continue _fun50382
                }
            case 71:
                var8 = var7().value;
                var7 = var0;
                var7 = var7 === var6;
                var3 = undefined;
                var1 = var7;
                if (var7) {
                    _fun50382_ip = 96;
                    continue _fun50382
                }
            case 90:
                var3 = var8;
                var1 = var7;
            case 96:
                if (var1) {
                    _fun50382_ip = 102;
                    continue _fun50382
                }
            case 99:
                var0.return();
            case 102:
                var0 = null;
                if (!(var0 != var5)) {
                    _fun50382_ip = 191;
                    continue _fun50382
                }
            case 108:
                if (!(var0 != var4)) {
                    _fun50382_ip = 191;
                    continue _fun50382
                }
            case 112:
                var1 = var2.getGuild;
                var5 = var1.bind(var2)(var5);
                if (!(var0 != var5)) {
                    _fun50382_ip = 189;
                    continue _fun50382
                }
            case 126:
                var2 = var3.getMember;
                var1 = var5.id;
                var4 = var2.bind(var3)(var1, var4);
                var2 = var0 == var4;
                var1 = null;
                if (var2) {
                    _fun50382_ip = 187;
                    continue _fun50382
                }
            case 152:
                var3 = _closure1_slot1;
                var7 = _closure1_slot2;
                var2 = 2;
                var2 = var7[var2];
                var3 = var3.bind(var6)(var2);
                var2 = var3.getHighestHoistedRole;
                var1 = var2.bind(var3)(var5, var4);
            case 187:
                return var1;
            case 189:
                return var0;
            case 191:
                return var0;
        }
    };
    var _closure1_slot5 = var1;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/stage_channels/useGuildMemberDisplayRole.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function(arg0, arg1) { // Original name: useGuildMemberDisplayRole, environment: var3
        var6 = arg0;
        var5 = arg1;
        var _closure2_slot0 = var6;
        var _closure2_slot1 = var5;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 3;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var7 = _closure1_slot4;
        var2 = new Array(2);
        var2[0] = var7;
        var1 = _closure1_slot3;
        var2[1] = var1;
        var1 = new Array(2);
        var1[0] = var6;
        var1[1] = var5;
        var0 = function() { // Environment: var0
            var4 = _closure1_slot5;
            var3 = _closure2_slot0;
            var2 = _closure2_slot1;
            var5 = _closure1_slot4;
            var1 = new Array(2);
            var1[0] = var5;
            var0 = _closure1_slot3;
            var1[1] = var0;
            var0 = undefined;
            var0 = var4.bind(var0)(var3, var2, var1);
            return var0;
        };
        var0 = var3.bind(var4)(var2, var0, var1);
        return var0;
    };
    var2.default = var3;
    var2.getHighestHoistedRole = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1672, 1410, 3055, 566, 2]);