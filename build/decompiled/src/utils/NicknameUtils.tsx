// utils/NicknameUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = require;
    var9 = metroImportDefault;
    var2 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var8;
    var4 = function arg0, arg1, arg2() {
        _fun36098: for (var _fun36098_ip = 0;;) switch (_fun36098_ip) {
            case 0:
                var4 = arg0;
                var6 = arg1;
                var1 = arg2;
                var0 = null;
                if (!(var0 != var1)) {
                    _fun36098_ip = 107;
                    continue _fun36098
                }
            case 15:
                if (!(var0 == var4)) {
                    _fun36098_ip = 81;
                    continue _fun36098
                }
            case 19:
                if (!(var0 != var6)) {
                    _fun36098_ip = 57;
                    continue _fun36098
                }
            case 23:
                var5 = _closure1_slot3;
                var3 = var5.getChannel;
                var5 = var3.bind(var5)(var6);
                if (!(var0 != var5)) {
                    _fun36098_ip = 57;
                    continue _fun36098
                }
            case 44:
                var3 = var5.isPrivate;
                var3 = var3.bind(var5)();
                if (var3) {
                    _fun36098_ip = 59;
                    continue _fun36098
                }
            case 57:
                return var0;
            case 59:
                var5 = _closure1_slot5;
                var3 = var5.getNickname;
                var2 = var1.id;
                var2 = var3.bind(var5)(var2);
                return var2;
            case 81:
                var3 = _closure1_slot4;
                var2 = var3.getNick;
                var1 = var1.id;
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            case 107:
                return var0;
        }
    };
    var _closure1_slot6 = var4;
    var3 = function arg0, arg1, arg2() {
        _fun36099: for (var _fun36099_ip = 0;;) switch (_fun36099_ip) {
            case 0:
                var3 = arg2;
                var2 = null;
                if (!(var2 != var3)) {
                    _fun36099_ip = 68;
                    continue _fun36099
                }
            case 9:
                var6 = _closure1_slot6;
                var4 = undefined;
                var5 = arg0;
                var0 = arg1;
                var0 = var6.bind(var4)(var5, var0, var3);
                if (!(var2 == var0)) {
                    _fun36099_ip = 66;
                    continue _fun36099
                }
            case 35:
                var2 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 4;
                var1 = var5[var1];
                var2 = var2.bind(var4)(var1);
                var1 = var2.getName;
                var0 = var1.bind(var2)(var3);
            case 66:
                _fun36099_ip = 128;
                continue _fun36099;
            case 68:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 3;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.sKdZ6U;
                var0 = var2.bind(var3)(var1);
            case 128:
                return var0;
        }
    };
    var _closure1_slot7 = var3;
    var1 = function arg0, arg1, arg2() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = arg1;
        var _closure2_slot1 = var1;
        var1 = arg2;
        var _closure2_slot2 = var1;
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 5;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.useStateFromStores;
        var5 = _closure1_slot4;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = _closure1_slot3;
        var1[1] = var5;
        var4 = _closure1_slot5;
        var1[2] = var4;
        var0 = function() { // Environment: var0
            var4 = _closure1_slot7;
            var3 = _closure2_slot0;
            var2 = _closure2_slot1;
            var1 = _closure2_slot2;
            var0 = undefined;
            var0 = var4.bind(var0)(var3, var2, var1);
            return var0;
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var0 = global;
    var11 = var0.Object;
    var10 = var11.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var10.bind(var11)(var2, var0, var5);
    var0 = 0;
    var5 = var8[var0];
    var0 = undefined;
    var5 = var9.bind(var0)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var8[var5];
    var5 = var9.bind(var0)(var5);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var8[var5];
    var5 = var9.bind(var0)(var5);
    var _closure1_slot5 = var5;
    var5 = {};
    var5.getNickname = var4;
    var5.getName = var3;
    var5.useName = var1;
    var6 = 6;
    var6 = var8[var6];
    var8 = var7.bind(var0)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'utils/NicknameUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var2.default = var5;
    var2.getNickname = var4;
    var2.getName = var3;
    var2.useName = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1372, 1672, 3091, 1234, 3227, 566, 2]);