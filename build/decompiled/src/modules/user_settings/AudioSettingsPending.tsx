// modules/user_settings/AudioSettingsPending.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var4 = dependencyMap;
    var0 = function arg0, arg1() {
        var0 = global;
        var0 = var0.HermesInternal;
        var4 = var0.concat;
        var3 = '';
        var2 = arg0;
        var1 = ':';
        var0 = arg1;
        var0 = var4.bind(var3)(var2, var1, var0);
        return var0;
    };
    var _closure1_slot2 = var0;
    var0 = function arg0() {
        var2 = arg0;
        var1 = var2.split;
        var0 = ':';
        var3 = var1.bind(var2)(var0);
        var2 = _closure1_slot0;
        var1 = undefined;
        var0 = 2;
        var2 = var2.bind(var1)(var3, var0);
        var0 = 0;
        var1 = var2[var0];
        var0 = new Array(2);
        var0[0] = var1;
        var1 = 1;
        var1 = var2[var1];
        var0[1] = var1;
        return var0;
    };
    var _closure1_slot3 = var0;
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
    var3 = arg2;
    var0 = undefined;
    var3 = var3.bind(var0)(var5);
    var _closure1_slot0 = var3;
    var3 = {};
    var _closure1_slot1 = var3;
    var3 = 1;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/AudioSettingsPending.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0, arg1() {
        var4 = _closure1_slot2;
        var3 = undefined;
        var2 = arg0;
        var1 = arg1;
        var1 = var4.bind(var3)(var2, var1);
        var0 = _closure1_slot1;
        var0 = var0[var1];
        return var0;
    };
    var2.getPendingAudioSettings = var3;
    var3 = function arg0, arg1, arg2() {
        var4 = _closure1_slot2;
        var0 = undefined;
        var3 = arg0;
        var2 = arg1;
        var3 = var4.bind(var0)(var3, var2);
        var2 = _closure1_slot1;
        var1 = {};
        var5 = var2[var3];
        var6 = var1;
        var4 = copyDataProperties(var6, var5);
        var5 = arg2;
        var6 = var1;
        var4 = copyDataProperties(var6, var5);
        var2[var3] = var1;
        return var0;
    };
    var2.updatePendingSettings = var3;
    var1 = function arg0() {
        _fun94398: for (var _fun94398_ip = 0;;) switch (_fun94398_ip) {
            case 0:
                var10 = arg0;
                var8 = _closure1_slot1;
                var0 = undefined;
                var4 = 2;
                var3 = 0;
                var1 = 1;
                for (var5 in var8)
                    case 28: {
                        case 37: var14 = var5;
                        var11 = _closure1_slot3;
                        var12 = var11.bind(var0)(var14);
                        var11 = _closure1_slot0;
                        var11 = var11.bind(var0)(var12, var4);
                        var13 = var11[var3];
                        var12 = var11[var1];
                        var11 = _closure1_slot1;
                        var11 = var11[var14];
                        var11 = var10.bind(var0)(var13, var12, var11);
                        _fun94398_ip = 28;
                        continue _fun94398;
                    }
            case 84:
                var1 = {};
                _closure1_slot1 = var1;
                return var0;
        }
    };
    var2.drainPendingAudioSettings = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 2]);