// actions/native/DisplayedInviteActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var3;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var5);
    var0 = 3;
    var3 = var3[var0];
    var0 = undefined;
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'actions/native/DisplayedInviteActionCreators.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0, arg1, arg2() {
        _fun96204: for (var _fun96204_ip = 0;;) switch (_fun96204_ip) {
            case 0:
                var4 = arg0;
                var0 = arg2;
                var1 = null;
                if (!(var1 == var0)) {
                    _fun96204_ip = 14;
                    continue _fun96204
                }
            case 12:
                var0 = {};
            case 14:
                var8 = var0.deeplinkAttemptId;
                var3 = var0.location;
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 0;
                var2 = var5[var0];
                var0 = undefined;
                var2 = var6.bind(var0)(var2);
                var2 = _closure1_slot1;
                var1 = 1;
                var1 = var5[var1];
                var7 = var2.bind(var0)(var1);
                var6 = var7.dispatch;
                var1 = {};
                var9 = 'DISPLAYED_INVITE_SHOW';
                var1.type = var9;
                var1.code = var4;
                var9 = arg1;
                var1.username = var9;
                var1.deeplinkAttemptId = var8;
                var1 = var6.bind(var7)(var1);
                var1 = 2;
                var1 = var5[var1];
                var2 = var2.bind(var0)(var1);
                var1 = var2.resolveInvite;
                var1 = var1.bind(var2)(var4, var3);
                return var0;
        }
    };
    var2.showInvite = var3;
    var1 = function() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 1;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'DISPLAYED_INVITE_CLEAR';
        var1.type = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.clearDisplayedInvite = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [8298, 806, 5860, 2]);