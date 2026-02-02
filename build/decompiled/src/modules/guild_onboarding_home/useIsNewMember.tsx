// modules/guild_onboarding_home/useIsNewMember.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function arg0, arg1, arg2() {
        _fun41526: for (var _fun41526_ip = 0;;) switch (_fun41526_ip) {
            case 0:
                var4 = arg0;
                var2 = arg1;
                var1 = arg2;
                var0 = var1.isFullServerPreview;
                var0 = var0.bind(var1)(var4);
                if (var0) {
                    _fun41526_ip = 215;
                    continue _fun41526
                }
            case 26:
                var0 = var2.getSelfMember;
                var1 = var0.bind(var2)(var4);
                var3 = null;
                if (!(var3 != var1)) {
                    _fun41526_ip = 211;
                    continue _fun41526
                }
            case 46:
                var0 = var2.getSelfMemberJoinedAt;
                var6 = var0.bind(var2)(var4);
                var0 = var3 != var6;
                if (!var0) {
                    _fun41526_ip = 209;
                    continue _fun41526
                }
            case 69:
                var7 = _closure1_slot0;
                var5 = _closure1_slot2;
                var4 = 3;
                var4 = var5[var4];
                var5 = undefined;
                var7 = var7.bind(var5)(var4);
                var4 = var7.hasFlag;
                var1 = var1.flags;
                var8 = var3 != var1;
                var3 = 0;
                if (!var8) {
                    _fun41526_ip = 117;
                    continue _fun41526
                }
            case 114:
                var3 = var1;
            case 117:
                var1 = _closure1_slot5;
                var1 = var1.COMPLETED_HOME_ACTIONS;
                var1 = var4.bind(var7)(var3, var1);
                var1 = !var1;
                if (!var1) {
                    _fun41526_ip = 206;
                    continue _fun41526
                }
            case 139:
                var3 = global;
                var4 = var3.Date;
                var3 = var4.now;
                var4 = var3.bind(var4)();
                var3 = var6.getTime;
                var3 = var3.bind(var6)();
                var3 = var4 - var3;
                var4 = _closure1_slot1;
                var6 = _closure1_slot2;
                var2 = 4;
                var2 = var6[var2];
                var2 = var4.bind(var5)(var2);
                var2 = var2.Millis;
                var2 = var2.WEEK;
                var1 = var3 < var2;
            case 206:
                var0 = var1;
            case 209:
                return var0;
            case 211:
                var0 = false;
                return var0;
            case 215:
                var0 = true;
                return var0;
        }
    };
    var _closure1_slot6 = var0;
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
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.GuildMemberFlags;
    var _closure1_slot5 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_onboarding_home/useIsNewMember.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 5;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.useStateFromStores;
        var5 = _closure1_slot4;
        var1 = new Array(2);
        var1[0] = var5;
        var4 = _closure1_slot3;
        var1[1] = var4;
        var0 = function() { // Environment: var0
            var4 = _closure1_slot6;
            var3 = _closure2_slot0;
            var2 = _closure1_slot4;
            var1 = _closure1_slot3;
            var0 = undefined;
            var0 = var4.bind(var0)(var3, var2, var1);
            return var0;
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var3;
    var1 = function arg0() {
        var4 = _closure1_slot6;
        var3 = _closure1_slot4;
        var2 = _closure1_slot3;
        var1 = undefined;
        var0 = arg0;
        var0 = var4.bind(var1)(var0, var3, var2);
        return var0;
    };
    var2.getIsNewMember = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1664, 1672, 3040, 1384, 667, 566, 2]);