// modules/verification/ChangeEmailStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = require;
    var2 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var8;
    var3 = function arg0, arg1() {
        var0 = arg0;
        var _closure2_slot0 = var0;
        var0 = arg1;
        var _closure2_slot1 = var0;
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var0 = 1;
        var2 = var2[var0];
        var0 = undefined;
        var3 = var3.bind(var0)(var2);
        var2 = var3.batchUpdates;
        var1 = function() { // Environment: var1
            var2 = _closure1_slot3;
            var1 = var2.setState;
            var0 = function(arg0) { // Environment: var0
                var0 = {};
                var1 = {};
                var2 = arg0;
                var4 = var2.errors;
                var5 = var1;
                var2 = copyDataProperties(var5, var4);
                var3 = _closure2_slot0;
                var2 = _closure2_slot1;
                var1[var3] = var2;
                var0.errors = var1;
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var _closure1_slot4 = var3;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var4);
    var5 = {};
    var0 = 'email';
    var5.EMAIL = var0;
    var0 = 'email_token';
    var5.EMAIL_TOKEN = var0;
    var0 = 'password';
    var5.PASSWORD = var0;
    var0 = {
        'errors': null,
        'emailToken': null
    };
    var _closure1_slot2 = var0;
    var0 = 0;
    var4 = var8[var0];
    var0 = undefined;
    var9 = var7.bind(var0)(var4);
    var6 = var9.create;
    var4 = function() { // Environment: var1
        var0 = _closure1_slot2;
        return var0;
    };
    var4 = var6.bind(var9)(var4);
    var _closure1_slot3 = var4;
    var6 = 2;
    var6 = var8[var6];
    var8 = var7.bind(var0)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/verification/ChangeEmailStore.tsx';
    var6 = var7.bind(var8)(var6);
    var2.ChangeEmailFields = var5;
    var2.useChangeEmailStore = var4;
    var2.setChangeEmailError = var3;
    var3 = function arg0() {
        var0 = arg0;
        var _closure2_slot0 = var0;
        var3 = _closure1_slot3;
        var2 = undefined;
        var0 = function(arg0) { // Environment: var1
            _fun60502: for (var _fun60502_ip = 0;;) switch (_fun60502_ip) {
                case 0:
                    var0 = arg0;
                    var2 = var0.errors;
                    var0 = null;
                    var1 = var0 == var2;
                    var0 = undefined;
                    if (var1) {
                        _fun60502_ip = 31;
                        continue _fun60502
                    }
                case 20:
                    var1 = _closure2_slot0;
                    var0 = var2[var1];
                case 31:
                    return var0;
            }
        };
        var2 = var3.bind(var2)(var0);
        var0 = new Array(2);
        var0[0] = var2;
        var1 = function(arg0) { // Environment: var1
            var3 = _closure1_slot4;
            var2 = _closure2_slot0;
            var0 = undefined;
            var1 = arg0;
            var1 = var3.bind(var0)(var2, var1);
            return var0;
        };
        var0[1] = var1;
        return var0;
    };
    var2.useChangeEmailError = var3;
    var3 = function arg0() {
        var0 = arg0;
        var _closure2_slot0 = var0;
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var0 = 1;
        var2 = var2[var0];
        var0 = undefined;
        var3 = var3.bind(var0)(var2);
        var2 = var3.batchUpdates;
        var1 = function() { // Environment: var1
            var2 = _closure1_slot3;
            var1 = var2.setState;
            var0 = {};
            var3 = _closure2_slot0;
            var0.emailToken = var3;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.setEmailToken = var3;
    var1 = function() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 1;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.batchUpdates;
        var1 = function() { // Environment: var1
            var3 = _closure1_slot3;
            var2 = var3.setState;
            var1 = _closure1_slot2;
            var0 = true;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.resetChangeEmailStore = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [629, 802, 2]);