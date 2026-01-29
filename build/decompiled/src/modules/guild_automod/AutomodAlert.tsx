// modules/guild_automod/AutomodAlert.tsx
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
    var1 = {};
    var3 = 1;
    var1.SET_COMPLETED = var3;
    var0 = 'SET_COMPLETED';
    var1[var3] = var0;
    var3 = 2;
    var1.UNSET_COMPLETED = var3;
    var0 = 'UNSET_COMPLETED';
    var1[var3] = var0;
    var3 = 3;
    var1.DELETE_USER_MESSAGE = var3;
    var0 = 'DELETE_USER_MESSAGE';
    var1[var3] = var0;
    var3 = 4;
    var1.SUBMIT_FEEDBACK = var3;
    var0 = 'SUBMIT_FEEDBACK';
    var1[var3] = var0;
    var3 = dependencyMap;
    var0 = 0;
    var4 = var3[var0];
    var3 = require;
    var0 = undefined;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_automod/AutomodAlert.tsx';
    var3 = var4.bind(var5)(var3);
    var2.AutomodAlertActionType = var1;
    var1 = function(arg0) { // Original name: parseAlertActionsExecution, environment: var1
        _fun40707: for (var _fun40707_ip = 0;;) switch (_fun40707_ip) {
            case 0:
                var2 = arg0;
                var0 = null;
                if (!(var0 != var2)) {
                    _fun40707_ip = 123;
                    continue _fun40707
                }
            case 11:
                var1 = var2;
                var4 = var0 == var2;
                var2 = null;
                if (var4) {
                    _fun40707_ip = 51;
                    continue _fun40707
                }
            case 23: // try_start_0
                var4 = global;
                var5 = var4.JSON;
                var4 = var5.parse;
                var1 = var4.bind(var5)(var1);
            case 42: // try_end0
                var2 = var1;
                _fun40707_ip = 51;
                continue _fun40707;
            case 47: // catch_target0
                CatchBlockStart(arg_register = 1);
                var2 = null;
            case 51:
                var _closure2_slot0 = var2;
                var4 = var0 == var2;
                var1 = null;
                if (var4) {
                    _fun40707_ip = 121;
                    continue _fun40707
                }
            case 64:
                var4 = var2.actions;
                var4 = var0 == var4;
                var1 = null;
                if (var4) {
                    _fun40707_ip = 121;
                    continue _fun40707
                }
            case 79:
                var4 = global;
                var6 = var4.Object;
                var5 = var6.keys;
                var4 = var2.actions;
                var5 = var5.bind(var6)(var4);
                var4 = var5.forEach;
                var3 = function(arg0) { // Environment: var3
                    var1 = arg0;
                    var0 = _closure2_slot0;
                    var0 = var0.actions;
                    var0 = var0[var1];
                    var0.actionType = var1;
                    var0 = undefined;
                    return var0;
                };
                var3 = var4.bind(var5)(var3);
                var1 = var2;
            case 121:
                return var1;
            case 123:
                return var0;
        }
    };
    var2.parseAlertActionsExecution = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);