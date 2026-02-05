// modules/guild_role_subscriptions/native/components/FastAssetImage.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
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
    var6 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot5 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_role_subscriptions/native/components/FastAssetImage.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var0 = arg0;
        var10 = var0.applicationId;
        var _closure2_slot0 = var10;
        var9 = var0.asset;
        var _closure2_slot1 = var9;
        var6 = var0.style;
        var7 = _closure1_slot4;
        var2 = var7.useState;
        var5 = var2.bind(var7)();
        var4 = _closure1_slot3;
        var3 = undefined;
        var2 = 2;
        var4 = var4.bind(var3)(var5, var2);
        var2 = 0;
        var8 = var4[var2];
        var _closure2_slot2 = var8;
        var2 = 1;
        var2 = var4[var2];
        var _closure2_slot3 = var2;
        var5 = var7.useCallback;
        var4 = new Array(1);
        var4[0] = var2;
        var2 = function(arg0) { // Environment: var1
            var2 = _closure2_slot3;
            var0 = arg0;
            var0 = var0.nativeEvent;
            var0 = var0.layout;
            var1 = var0.width;
            var0 = undefined;
            var1 = var2.bind(var0)(var1);
            return var0;
        };
        var5 = var5.bind(var7)(var2, var4);
        var4 = var7.useMemo;
        var2 = new Array(3);
        var2[0] = var10;
        var2[1] = var9;
        var2[2] = var8;
        var1 = function() { // Environment: var1
            _fun84777: for (var _fun84777_ip = 0;;) switch (_fun84777_ip) {
                case 0:
                    var0 = _closure2_slot1;
                    var7 = null;
                    var0 = var7 == var0;
                    var5 = undefined;
                    var6 = undefined;
                    if (var0) {
                        _fun84777_ip = 30;
                        continue _fun84777
                    }
                case 20:
                    var0 = _closure2_slot1;
                    var6 = var0.application_id;
                case 30:
                    if (!(var7 == var6)) {
                        _fun84777_ip = 38;
                        continue _fun84777
                    }
                case 34:
                    var6 = _closure2_slot0;
                case 38:
                    var0 = {};
                    var1 = _closure2_slot1;
                    var3 = var7 != var1;
                    var4 = '';
                    var1 = var4;
                    if (!var3) {
                        _fun84777_ip = 126;
                        continue _fun84777
                    }
                case 58:
                    var3 = var7 != var6;
                    var1 = var4;
                    if (!var3) {
                        _fun84777_ip = 126;
                        continue _fun84777
                    }
                case 68:
                    var3 = _closure2_slot2;
                    var3 = var7 != var3;
                    var1 = var4;
                    if (!var3) {
                        _fun84777_ip = 126;
                        continue _fun84777
                    }
                case 82:
                    var4 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var3 = 3;
                    var3 = var7[var3];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.getAssetURL;
                    var3 = _closure2_slot1;
                    var2 = _closure2_slot2;
                    var1 = var4.bind(var5)(var6, var3, var2);
                case 126:
                    var0.uri = var1;
                    return var0;
            }
        };
        var4 = var4.bind(var7)(var1, var2);
        var2 = _closure1_slot5;
        var1 = _closure1_slot1;
        var7 = _closure1_slot2;
        var0 = 4;
        var0 = var7[var0];
        var1 = var1.bind(var3)(var0);
        var0 = {};
        var0.style = var6;
        var0.onLayout = var5;
        var0.source = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 33, 3361, 4704, 2]);