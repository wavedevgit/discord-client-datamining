// modules/threads/ThreadActionUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var4 = dependencyMap;
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
    var3 = metroImportDefault;
    var0 = undefined;
    var3 = var3.bind(var0)(var5);
    var _closure1_slot0 = var3;
    var3 = 1;
    var4 = var4[var3];
    var3 = require;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/threads/ThreadActionUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun24924: for (var _fun24924_ip = 0;;) switch (_fun24924_ip) {
            case 0:
                var4 = arg0;
                var1 = _closure1_slot0;
                var0 = var1.getId;
                var7 = var0.bind(var1)();
                var _closure2_slot0 = var7;
                var2 = null;
                var0 = var2 != var7;
                if (!var0) {
                    _fun24924_ip = 105;
                    continue _fun24924
                }
            case 35:
                var6 = var4.removedMemberIds;
                var5 = var2 == var6;
                if (var5) {
                    _fun24924_ip = 61;
                    continue _fun24924
                }
            case 48:
                var1 = var6.includes;
                var1 = var1.bind(var6)(var7);
                var5 = !var1;
            case 61:
                var1 = !var5;
                if (!var5) {
                    _fun24924_ip = 102;
                    continue _fun24924
                }
            case 67:
                var5 = var4.addedMembers;
                var2 = var2 == var5;
                if (var2) {
                    _fun24924_ip = 99;
                    continue _fun24924
                }
            case 80:
                var4 = var5.some;
                var3 = function(arg0) { // Environment: var3
                    var0 = arg0;
                    var1 = var0.userId;
                    var0 = _closure2_slot0;
                    var0 = var1 === var0;
                    return var0;
                };
                var3 = var4.bind(var5)(var3);
                var2 = !var3;
            case 99:
                var1 = !var2;
            case 102:
                var0 = var1;
            case 105:
                return var0;
        }
    };
    var2.doesThreadMembersActionAffectMe = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1216, 2]);