// modules/poggermode/PoggermodeActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var4[var0];
    var0 = undefined;
    var3 = var5.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 5;
    var4 = var4[var3];
    var3 = require;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/poggermode/PoggermodeActionCreators.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        var1 = arg0;
        var3 = _closure1_slot0;
        var4 = _closure1_slot1;
        var0 = 3;
        var2 = var4[var0];
        var0 = undefined;
        var7 = var3.bind(var0)(var2);
        var6 = var7.dispatch;
        var2 = {};
        var8 = 'POGGERMODE_SETTINGS_UPDATE';
        var2.type = var8;
        var2.settings = var1;
        var2 = var6.bind(var7)(var2);
        var2 = {};
        var6 = _closure1_slot3;
        var5 = var6.getState;
        var9 = var5.bind(var6)();
        var10 = var2;
        var5 = copyDataProperties(var10, var9);
        var10 = var2;
        var9 = var1;
        var1 = copyDataProperties(var10, var9);
        var1 = 4;
        var1 = var4[var1];
        var1 = var3.bind(var0)(var1);
        var1 = var1.bind(var0)(var2);
        return var0;
    };
    var2.updatePoggermodeSettings = var3;
    var3 = function arg0() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 3;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'POGGERMODE_UPDATE_COMBO';
        var1.type = var4;
        var5 = arg0;
        var6 = var1;
        var4 = copyDataProperties(var6, var5);
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.updateCombo = var3;
    var3 = function arg0() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 3;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'POGGERMODE_UPDATE_MESSAGE_COMBO';
        var1.type = var4;
        var4 = {};
        var7 = arg0;
        var8 = var4;
        var5 = copyDataProperties(var8, var7);
        var6 = true;
        var5 = 'displayed';
        var4[var5] = var6;
        var1.comboMessage = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.clearMessageCombo = var3;
    var1 = function arg0, arg1() {
        _fun54734: for (var _fun54734_ip = 0;;) switch (_fun54734_ip) {
            case 0:
                var6 = arg0;
                var2 = _closure1_slot2;
                var1 = var2.getId;
                var5 = var1.bind(var2)();
                var2 = _closure1_slot4;
                var1 = var2.getUserCombo;
                var8 = var1.bind(var2)(var5, var6);
                var7 = null;
                if (!(var7 != var8)) {
                    _fun54734_ip = 118;
                    continue _fun54734
                }
            case 42:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 3;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.dispatch;
                var1 = {};
                var4 = 'POGGERMODE_UPDATE_MESSAGE_COMBO';
                var1.type = var4;
                var4 = {};
                var4.combo = var8;
                var4.channelId = var6;
                var9 = arg1;
                var4.messageId = var9;
                var9 = false;
                var4.displayed = var9;
                var1.comboMessage = var4;
                var1 = var2.bind(var3)(var1);
            case 118:
                var1 = var7 != var8;
                var2 = 1;
                var4 = var2;
                if (!var1) {
                    _fun54734_ip = 188;
                    continue _fun54734
                }
            case 131:
                var1 = var7 == var8;
                var9 = undefined;
                if (var1) {
                    _fun54734_ip = 145;
                    continue _fun54734
                }
            case 140:
                var9 = var8.value;
            case 145:
                var1 = 0;
                var9 = var9 > var1;
                var4 = var2;
                if (!var9) {
                    _fun54734_ip = 188;
                    continue _fun54734
                }
            case 157:
                var9 = var7 == var8;
                var3 = undefined;
                if (var9) {
                    _fun54734_ip = 172;
                    continue _fun54734
                }
            case 166:
                var3 = var8.multiplier;
            case 172:
                var7 = var7 != var3;
                var1 = 0;
                if (!var7) {
                    _fun54734_ip = 184;
                    continue _fun54734
                }
            case 181:
                var1 = var3;
            case 184:
                var4 = var1 + var2;
            case 188:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 3;
                var1 = var1[var0];
                var0 = undefined;
                var3 = var2.bind(var0)(var1);
                var2 = var3.dispatch;
                var1 = {};
                var7 = 'POGGERMODE_UPDATE_COMBO';
                var1.type = var7;
                var1.channelId = var6;
                var1.userId = var5;
                var1.multiplier = var4;
                var4 = 0;
                var1.value = var4;
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var2.updateComboOnMessageSend = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1216, 6550, 6630, 806, 6632, 2]);