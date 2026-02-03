// actions/PermissionActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var3 = dependencyMap;
    var1 = metroImportDefault;
    var _closure1_slot0 = var1;
    var _closure1_slot1 = var3;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var1 = true;
    var4.value = var1;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var2, var1, var4);
    var1 = {};
    var4 = function() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 0;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'PERMISSION_CLEAR_VAD_WARNING';
        var1.type = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.clearVADWarning = var4;
    var4 = function() {
        _fun109612: for (var _fun109612_ip = 0;;) switch (_fun109612_ip) {
            case 0:
                var4 = arguments[0];
                var0 = undefined;
                if (!(var4 === var0)) {
                    _fun109612_ip = 11;
                    continue _fun109612
                }
            case 9:
                var4 = false;
            case 11:
                var2 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 0;
                var1 = var3[var1];
                var3 = var2.bind(var0)(var1);
                var2 = var3.dispatch;
                var1 = {};
                var5 = 'PERMISSION_CLEAR_SUPPRESS_WARNING';
                var1.type = var5;
                var1.forever = var4;
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var1.clearSuppressWarning = var4;
    var4 = function() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 0;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'PERMISSION_CLEAR_PTT_ADMIN_WARNING';
        var1.type = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.clearPTTAdminWarning = var4;
    var4 = function arg0() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 0;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'PERMISSION_REQUEST_ELEVATED_PROCESS';
        var1.type = var4;
        var4 = arg0;
        var1.pid = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.requestElevatedProcess = var4;
    var4 = function() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 0;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'PERMISSION_CLEAR_ELEVATED_PROCESS';
        var1.type = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.clearElevatedProcess = var4;
    var0 = function arg0() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 0;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'PERMISSION_CONTINUE_NONELEVATED_PROCESS';
        var1.type = var4;
        var4 = arg0;
        var1.pid = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.continueNonelevatedProcess = var0;
    var0 = 1;
    var4 = var3[var0];
    var3 = arg1;
    var0 = undefined;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'actions/PermissionActionCreators.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [806, 2]);