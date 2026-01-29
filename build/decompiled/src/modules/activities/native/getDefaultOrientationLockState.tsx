// modules/activities/native/getDefaultOrientationLockState.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var4;
    var1 = function(arg0) { // Original name: getDefaultOrientationLockState, environment: var3
        _fun64550: for (var _fun64550_ip = 0;;) switch (_fun64550_ip) {
            case 0:
                var2 = arg0;
                var3 = null;
                if (!(var3 == var2)) {
                    _fun64550_ip = 13;
                    continue _fun64550
                }
            case 9:
                var0 = undefined;
                return var0;
            case 13:
                var4 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 1;
                var0 = var1[var0];
                var1 = undefined;
                var4 = var4.bind(var1)(var0);
                var0 = var4.isIpadOS;
                var0 = var0.bind(var4)();
                var2 = var2.embeddedActivityConfig;
                var3 = var3 == var2;
                if (var0) {
                    _fun64550_ip = 74;
                    continue _fun64550
                }
            case 61:
                var0 = undefined;
                if (var3) {
                    _fun64550_ip = 72;
                    continue _fun64550
                }
            case 66:
                var0 = var2.default_orientation_lock_state;
            case 72:
                _fun64550_ip = 88;
                continue _fun64550;
            case 74:
                var1 = undefined;
                if (var3) {
                    _fun64550_ip = 85;
                    continue _fun64550
                }
            case 79:
                var1 = var2.tablet_default_orientation_lock_state;
            case 85:
                var0 = var1;
            case 88:
                return var0;
        }
    };
    var _closure1_slot3 = var1;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var6);
    var0 = 2;
    var4 = var4[var0];
    var0 = undefined;
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/activities/native/getDefaultOrientationLockState.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function(arg0, arg1) { // Original name: setOrientationLockState, environment: var3
        _fun64551: for (var _fun64551_ip = 0;;) switch (_fun64551_ip) {
            case 0:
                var4 = arg0;
                var3 = arg1;
                var0 = null;
                if (!(var0 == var3)) {
                    _fun64551_ip = 26;
                    continue _fun64551
                }
            case 12:
                var2 = _closure1_slot3;
                var1 = undefined;
                var3 = var2.bind(var1)(var4);
            case 26:
                if (!(var0 != var3)) {
                    _fun64551_ip = 88;
                    continue _fun64551
                }
            case 30:
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 0;
                var1 = var1[var0];
                var0 = undefined;
                var2 = var2.bind(var0)(var1);
                var1 = var2.dispatch;
                var0 = {};
                var5 = 'EMBEDDED_ACTIVITY_SET_ORIENTATION_LOCK_STATE';
                var0.type = var5;
                var4 = var4.id;
                var0.applicationId = var4;
                var0.lockState = var3;
                var0 = var1.bind(var2)(var0);
            case 88:
                var0 = undefined;
                return var0;
        }
    };
    var2.setOrientationLockState = var3;
    var2.getDefaultOrientationLockState = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [806, 1309, 2]);