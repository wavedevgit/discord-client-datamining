// modules/activities/isActivityParticipantCurrentUserCurrentSession.tsx
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
    var3 = 'modules/activities/isActivityParticipantCurrentUserCurrentSession.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun97211: for (var _fun97211_ip = 0;;) switch (_fun97211_ip) {
            case 0:
                var2 = arg0;
                var3 = arguments[1];
                var5 = undefined;
                if (!(var3 === var5)) {
                    _fun97211_ip = 19;
                    continue _fun97211
                }
            case 12:
                var3 = _closure1_slot0;
            case 19:
                var0 = var3.getId;
                var1 = var0.bind(var3)();
                var0 = var3.getSessionId;
                var3 = var0.bind(var3)();
                var0 = var2.userId;
                var0 = var0 === var1;
                if (!var0) {
                    _fun97211_ip = 92;
                    continue _fun97211
                }
            case 51:
                var4 = var2.sessionId;
                var1 = null;
                var1 = var1 == var4;
                if (var1) {
                    _fun97211_ip = 76;
                    continue _fun97211
                }
            case 66:
                var4 = var2.sessionId;
                var1 = var5 === var4;
            case 76:
                if (var1) {
                    _fun97211_ip = 89;
                    continue _fun97211
                }
            case 79:
                var2 = var2.sessionId;
                var1 = var2 === var3;
            case 89:
                var0 = var1;
            case 92:
                return var0;
        }
    };
    var2.isActivityParticipantCurrentUserCurrentSession = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1216, 2]);