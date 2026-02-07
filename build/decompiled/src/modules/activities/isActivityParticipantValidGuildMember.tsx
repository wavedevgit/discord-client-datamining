// modules/activities/isActivityParticipantValidGuildMember.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = global;
    var4 = var0.Object;
    var3 = var4.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var4)(var2, var0, var1);
    var1 = dependencyMap;
    var0 = 0;
    var3 = var1[var0];
    var1 = require;
    var0 = undefined;
    var4 = var1.bind(var0)(var3);
    var3 = var4.fileFinishedImporting;
    var1 = 'modules/activities/isActivityParticipantValidGuildMember.tsx';
    var1 = var3.bind(var4)(var1);
    var1 = function arg0() {
        _fun18486: for (var _fun18486_ip = 0;;) switch (_fun18486_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.member;
                var3 = null;
                var0 = var3 != var0;
                if (!var0) {
                    _fun18486_ip = 34;
                    continue _fun18486
                }
            case 18:
                var2 = var1.member;
                var2 = var2.joined_at;
                var0 = var3 != var2;
            case 34:
                if (!var0) {
                    _fun18486_ip = 61;
                    continue _fun18486
                }
            case 37:
                var1 = var1.member;
                var1 = var1.user;
                var2 = var1.username;
                var1 = '';
                var0 = var1 !== var2;
            case 61:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);