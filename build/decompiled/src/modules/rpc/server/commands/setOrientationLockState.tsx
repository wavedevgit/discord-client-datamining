// modules/rpc/server/commands/setOrientationLockState.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var0 = metroImportDefault;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var5;
    var0 = global;
    var6 = var0.Object;
    var3 = var6.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var6)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var4.bind(var0)(var1);
    var1 = var1.OrientationLockState;
    var _closure1_slot2 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var3 = var1.RPCCommands;
    var1 = var1.RPCErrors;
    var _closure1_slot3 = var1;
    var1 = {};
    var6 = var3.SET_ORIENTATION_LOCK_STATE;
    var3 = {};
    var8 = function(arg0) { // Original name: validation, environment: var7
        var6 = arg0;
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 2;
        var0 = var1[var0];
        var1 = undefined;
        var0 = var2.bind(var1)(var0);
        var1 = var0.bind(var1)(var6);
        var0 = var1.required;
        var2 = var0.bind(var1)();
        var1 = var2.keys;
        var0 = {};
        var4 = var6.number;
        var9 = var4.bind(var6)();
        var8 = var9.valid;
        var3 = _closure1_slot2;
        var7 = var3.UNLOCKED;
        var5 = var3.PORTRAIT;
        var4 = var3.LANDSCAPE;
        var5 = var8.bind(var9)(var7, var5, var4);
        var4 = var5.required;
        var4 = var4.bind(var5)();
        var0.lock_state = var4;
        var4 = var6.number;
        var9 = var4.bind(var6)();
        var8 = var9.valid;
        var7 = var3.UNLOCKED;
        var5 = var3.PORTRAIT;
        var4 = var3.LANDSCAPE;
        var7 = var8.bind(var9)(var7, var5, var4);
        var4 = var7.allow;
        var5 = null;
        var7 = var4.bind(var7)(var5);
        var4 = var7.optional;
        var4 = var4.bind(var7)();
        var0.picture_in_picture_lock_state = var4;
        var4 = var6.number;
        var8 = var4.bind(var6)();
        var7 = var8.valid;
        var6 = var3.UNLOCKED;
        var4 = var3.PORTRAIT;
        var3 = var3.LANDSCAPE;
        var4 = var7.bind(var8)(var6, var4, var3);
        var3 = var4.allow;
        var4 = var3.bind(var4)(var5);
        var3 = var4.optional;
        var3 = var3.bind(var4)();
        var0.grid_lock_state = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var3.validation = var8;
    var7 = function(arg0) { // Original name: handler, environment: var7
        _fun98504: for (var _fun98504_ip = 0;;) switch (_fun98504_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.socket;
                var1 = var1.args;
                var6 = var1.lock_state;
                var5 = var1.picture_in_picture_lock_state;
                var4 = var1.grid_lock_state;
                var0 = var0.application;
                var7 = var0.id;
                var0 = null;
                if (!(var0 != var7)) {
                    _fun98504_ip = 160;
                    continue _fun98504
                }
            case 49:
                var2 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 3;
                var8 = var3[var1];
                var0 = undefined;
                var10 = var2.bind(var0)(var8);
                var9 = var10.dispatch;
                var8 = {};
                var11 = 'FRAME_SET_ORIENTATION_LOCK_STATE';
                var8.type = var11;
                var8.applicationId = var7;
                var8.lockState = var6;
                var8.pictureInPictureLockState = var5;
                var8 = var9.bind(var10)(var8);
                var1 = var3[var1];
                var3 = var2.bind(var0)(var1);
                var2 = var3.dispatch;
                var1 = {};
                var8 = 'EMBEDDED_ACTIVITY_SET_ORIENTATION_LOCK_STATE';
                var1.type = var8;
                var1.applicationId = var7;
                var1.lockState = var6;
                var1.pictureInPictureLockState = var5;
                var1.gridLockState = var4;
                var1 = var2.bind(var3)(var1);
                return var0;
            case 160:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 4;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = {};
                var0 = _closure1_slot3;
                var0 = var0.INVALID_COMMAND;
                var2.errorCode = var0;
                var0 = var3.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var3
                    }
                });
                var12 = 'No application.';
                var14 = var1;
                var13 = var2;
                var0 = new var14[var3](var13, var12, var11);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var3.handler = var7;
    var1[var6] = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/rpc/server/commands/setOrientationLockState.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3416, 483, 7890, 806, 7887, 2]);